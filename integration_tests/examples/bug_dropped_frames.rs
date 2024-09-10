use std::{env, fs, io, thread};
use std::fs::File;
use std::path::PathBuf;
use std::sync::{Arc, Mutex, OnceLock};
use std::thread::sleep;
use std::time::{Duration, Instant};
use futures_util::SinkExt;
use tracing::{debug, error, warn};
use tracing_subscriber::layer::SubscriberExt;
use tracing_subscriber::util::SubscriberInitExt;
use tracing_subscriber::{fmt, EnvFilter};
use compositor_pipeline::audio_mixer::{AudioChannels, AudioMixingParams, InputParams, MixingStrategy};
use compositor_pipeline::Pipeline;
use compositor_pipeline::pipeline::output::{RawAudioOptions, RawDataOutputOptions, RawVideoOptions};
use compositor_pipeline::pipeline::{Options, PipelineOutputEndCondition, RawDataReceiver, RegisterInputOptions, RegisterOutputOptions};
use compositor_pipeline::pipeline::input::{InputOptions, RawDataInputOptions};
use compositor_pipeline::pipeline::input::mp4::{Mp4Options, Source};
use compositor_pipeline::queue::{QueueInputOptions, QueueOptions};
use compositor_render::web_renderer::WebRendererInitOptions;
use compositor_render::{scene, Framerate, InputId, OutputId, Resolution, WgpuFeatures};
use compositor_render::scene::{Component, InputStreamComponent, Overflow, Position, RGBAColor, ViewChildrenDirection};

const BUNNY_FILE_URL: &str =
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
const BUNNY_FILE_PATH: &str = "examples/assets/BigBuckBunny.mp4";

fn root_dir() -> PathBuf {
    PathBuf::from(env!("CARGO_MANIFEST_DIR"))
}

fn main () -> Result<(), Box<dyn std::error::Error>> {
    tracing_subscriber::registry()
        .with(fmt::layer())
        .with(EnvFilter::new("warn,bug_dropped_frames=debug"))
        .init();

    download_file(BUNNY_FILE_URL, BUNNY_FILE_PATH)?;

    let placeholder = scene::Component::View(scene::ViewComponent {
        id: None,
        children: vec![],
        direction: ViewChildrenDirection::Row,
        position: Position::Static {
            width: None,
            height: None,
        },
        transition: None,
        overflow: Overflow::Visible,
        background_color: RGBAColor(0, 0, 0, 255),
    });
    let output_options = RegisterOutputOptions {
        output_options: RawDataOutputOptions {
            video: Some(RawVideoOptions {
                resolution: Resolution {
                    width: 1280,
                    height: 720,
                },
            }),
            audio: None,
        },
        video: Some(compositor_pipeline::pipeline::OutputVideoOptions {
            initial: placeholder.clone(),
            end_condition: PipelineOutputEndCondition::Never,
        }),
        audio: None,
    };

    let pipeline_input_id = InputId("input_1".into());
    let video_input_id = InputId("video_input_1".into());
    let start = Instant::now();
    let mut i = 0;
    loop {
        debug!("loop {}, elapsed: {:?}", i, start.elapsed());
        i += 1;

        sleep(Duration::from_millis(200));
        let (other_pipeline, _) = Pipeline::new(Options {
            queue_options: QueueOptions {
                default_buffer_duration: Duration::ZERO,
                ahead_of_time_processing: false,
                output_framerate: Framerate { num: 24, den: 1 },
                run_late_scheduled_events: true,
                never_drop_output_frames: false,
            },
            stream_fallback_timeout: Duration::from_millis(200),
            web_renderer: WebRendererInitOptions {
                enable: false,
                enable_gpu: true,
            },
            force_gpu: false,
            download_root: env::temp_dir(),
            output_sample_rate: 48000,
            wgpu_features: WgpuFeatures::empty(),
            wgpu_ctx: Some((WgpuCtx::instance().device.clone(), WgpuCtx::instance().queue.clone())),
        })?;
        let other_pipeline = Arc::new(Mutex::new(other_pipeline));
        Pipeline::start(&other_pipeline);

        let input_options = RegisterInputOptions {
            input_options: InputOptions::Mp4(Mp4Options {
                source: Source::File(root_dir().join(BUNNY_FILE_PATH)),
                should_loop: true,
            }),
            queue_options: QueueInputOptions {
                required: false,
                offset: None,
                buffer_duration: None,
            },
        };
        Pipeline::register_input(&other_pipeline, video_input_id.clone(), input_options)?;

        let other_output_id = OutputId("other_output_1".into());
        let RawDataReceiver { video, audio } = other_pipeline
            .lock()
            .unwrap()
            .register_raw_data_output(other_output_id.clone(), output_options.clone())
            .unwrap();

        thread::spawn(move || {
            for frame in video.unwrap() {

            }
            debug!("raw data sender thread finished");
        });
        sleep(Duration::from_millis(100));

        other_pipeline.lock().unwrap().unregister_input(&video_input_id)?;
        other_pipeline.lock().unwrap().unregister_output(&other_output_id)?;
        // other_pipeline dropped ?
    }

    Ok(())
}

fn examples_root_dir() -> PathBuf {
    PathBuf::from(env!("CARGO_MANIFEST_DIR"))
}

pub fn download_file(url: &str, path: &str) -> anyhow::Result<PathBuf> {
    let sample_path = env::current_dir()?.join(path);
    fs::create_dir_all(sample_path.parent().unwrap())?;

    if sample_path.exists() {
        return Ok(sample_path);
    }

    let mut resp = reqwest::blocking::get(url)?;
    let mut out = File::create(sample_path.clone())?;
    io::copy(&mut resp, &mut out)?;
    Ok(sample_path)
}

pub struct WgpuCtx {
    pub instance: wgpu::Instance,
    pub adapter: wgpu::Adapter,
    pub device: Arc<wgpu::Device>,
    pub queue: Arc<wgpu::Queue>,
}

impl WgpuCtx {
    pub fn instance() -> &'static Self {
        static WGPU_CTX: OnceLock<WgpuCtx> = OnceLock::new();

        WGPU_CTX.get_or_init(|| pollster::block_on(Self::new()))
    }

    async fn new() -> Self {
        let instance = wgpu::Instance::new(wgpu::InstanceDescriptor {
            backends: wgpu::Backends::all(),
            ..Default::default()
        });

        let adapter = instance
            .request_adapter(&wgpu::RequestAdapterOptionsBase {
                power_preference: wgpu::PowerPreference::HighPerformance,
                force_fallback_adapter: false,
                compatible_surface: None, // TODO: We will probably force GPU anyway, no need to pass surface?
            })
            .await.unwrap();

        let required_features =
            wgpu::Features::TEXTURE_BINDING_ARRAY | wgpu::Features::PUSH_CONSTANTS;
        let missing_features = required_features.difference(adapter.features());
        if !missing_features.is_empty() {
            panic!("Selected adapter or it's driver is missing required features: {missing_features:?}");
        }

        let (device, queue) = adapter
            .request_device(
                &wgpu::DeviceDescriptor {
                    label: None,
                    required_limits: wgpu::Limits {
                        max_push_constant_size: 128,
                        ..Default::default()
                    },
                    required_features,
                    memory_hints: Default::default(),
                },
                None,
            )
            .await.unwrap();

        WgpuCtx {
            instance,
            adapter,
            device: Arc::new(device),
            queue: Arc::new(queue),
        }
    }
}