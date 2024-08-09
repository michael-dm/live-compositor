use std::sync::{Arc, Mutex, MutexGuard};

use axum::response::IntoResponse;
use compositor_pipeline::pipeline::{self};
use compositor_render::{error::InitPipelineError, EventLoop};

use serde::Serialize;

use crate::config::Config;

pub type Pipeline = compositor_pipeline::Pipeline;

#[derive(Serialize, Debug)]
#[serde(untagged)]
pub enum Response {
    Ok {},
    RegisteredPort { port: u16 },
}

impl IntoResponse for Response {
    fn into_response(self) -> axum::response::Response {
        axum::Json(self).into_response()
    }
}

#[derive(Clone)]
pub struct ApiState {
    pub pipeline: Arc<Mutex<Pipeline>>,
    pub config: Config,
}

impl ApiState {
    pub fn new(config: Config) -> Result<(ApiState, Arc<dyn EventLoop>), InitPipelineError> {
        let Config {
            queue_options,
            stream_fallback_timeout,
            web_renderer,
            force_gpu,
            download_root,
            output_sample_rate,
            required_wgpu_features,
            adapter,
            ..
        } = config.clone();
        let (pipeline, event_loop) = Pipeline::new(pipeline::Options {
            queue_options,
            stream_fallback_timeout,
            web_renderer,
            force_gpu,
            download_root,
            output_sample_rate,
            wgpu_features: required_wgpu_features,
            adapter,
        })?;
        Ok((
            ApiState {
                pipeline: Mutex::new(pipeline).into(),
                config,
            },
            event_loop,
        ))
    }

    pub(crate) fn pipeline(&self) -> MutexGuard<'_, Pipeline> {
        self.pipeline.lock().unwrap()
    }
}
