use compositor_render::{event_handler::emit_event, OutputId};
use crossbeam_channel::Receiver;
use std::sync::{atomic::AtomicBool, Arc};
use tracing::{debug, span, Level};

use crate::{
    error::OutputInitError,
    event::Event,
    pipeline::{rtp::RequestedPort, types::EncoderOutputEvent, AudioCodec, Port, VideoCodec},
};

use self::{packet_stream::PacketStream, payloader::Payloader};

mod packet_stream;
mod payloader;
mod tcp_server;
mod udp;

#[derive(Debug)]
pub struct RtpSender {
    pub connection_options: RtpConnectionOptions,

    /// should_close will be set after output is unregistered,
    /// but the primary way of controlling the shutdown is a channel
    /// receiver.
    ///
    /// RtpSender should be explicitly closed based on this value
    /// only if TCP connection is disconnected or writes hang for a
    /// long time.
    should_close: Arc<AtomicBool>,
}

#[derive(Debug, Clone)]
pub struct RtpSenderOptions {
    pub connection_options: RtpConnectionOptions,
    pub video: Option<VideoCodec>,
    pub audio: Option<AudioCodec>,
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub enum RtpConnectionOptions {
    Udp { port: Port, ip: Arc<str> },
    TcpServer { port: RequestedPort },
}

impl RtpSender {
    pub fn new(
        output_id: &OutputId,
        options: RtpSenderOptions,
        packets_receiver: Receiver<EncoderOutputEvent>,
    ) -> Result<(Self, Port), OutputInitError> {
        let payloader = Payloader::new(options.video, options.audio);
        let mtu = match options.connection_options {
            RtpConnectionOptions::Udp { .. } => 1400,
            RtpConnectionOptions::TcpServer { .. } => 64000,
        };
        let packet_stream = PacketStream::new(packets_receiver, payloader, mtu);

        let (socket, port) = match &options.connection_options {
            RtpConnectionOptions::Udp { port, ip } => udp::udp_socket(ip, *port)?,
            RtpConnectionOptions::TcpServer { port } => tcp_server::tcp_socket(*port)?,
        };

        let should_close = Arc::new(AtomicBool::new(false));
        let connection_options = options.connection_options.clone();
        let output_id = output_id.clone();
        let should_close2 = should_close.clone();
        std::thread::Builder::new()
            .name(format!("RTP sender for output {}", output_id))
            .spawn(move || {
                let _span =
                    span!(Level::INFO, "RTP sender", output_id = output_id.to_string()).entered();
                match connection_options {
                    RtpConnectionOptions::Udp { .. } => {
                        udp::run_udp_sender_thread(socket, packet_stream)
                    }
                    RtpConnectionOptions::TcpServer { .. } => {
                        tcp_server::run_tcp_sender_thread(socket, should_close2, packet_stream)
                    }
                }
                emit_event(Event::OutputDone(output_id));
                debug!("Closing RTP sender thread.")
            })
            .unwrap();

        Ok((
            Self {
                connection_options: options.connection_options,
                should_close,
            },
            port,
        ))
    }
}

impl Drop for RtpSender {
    fn drop(&mut self) {
        self.should_close
            .store(true, std::sync::atomic::Ordering::Relaxed);
    }
}
