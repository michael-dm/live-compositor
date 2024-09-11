# Builder image
FROM ubuntu:noble-20240423 as builder

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

ARG USERNAME=compositor
ARG RUST_VERSION=1.81

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update -y -qq && \
  apt-get install -y \
    build-essential curl pkg-config libssl-dev libclang-dev git sudo \
    libnss3 libatk1.0-0 libatk-bridge2.0-0 libgdk-pixbuf2.0-0 libgtk-3-0 \
    libegl1-mesa-dev libgl1-mesa-dri libxcb-xfixes0-dev mesa-vulkan-drivers \
    ffmpeg libavcodec-dev libavformat-dev libavfilter-dev libavdevice-dev libopus-dev && \
  rm -rf /var/lib/apt/lists/*

RUN curl https://sh.rustup.rs -sSf | bash -s -- -y
RUN source ~/.cargo/env && rustup install $RUST_VERSION && rustup default $RUST_VERSION

COPY . /root/project
WORKDIR /root/project

RUN source ~/.cargo/env && cargo build --release

# Runtime image
FROM ubuntu:noble-20240423

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

ARG USERNAME=compositor

ENV DEBIAN_FRONTEND=noninteractive
ENV NVIDIA_DRIVER_CAPABILITIES=compute,graphics,utility

ENV LIVE_COMPOSITOR_MAIN_EXECUTABLE_PATH=/home/$USERNAME/live_compositor/main_process
ENV LIVE_COMPOSITOR_PROCESS_HELPER_PATH=/home/$USERNAME/live_compositor/process_helper
ENV LD_LIBRARY_PATH=/home/$USERNAME/live_compositor/lib
ENV XDG_RUNTIME_DIR=/home/$USERNAME/live_compositor/xdg_runtime

RUN apt-get update -y -qq && \
  apt-get install -y \
    sudo adduser ffmpeg \
    libnss3 libatk1.0-0 libatk-bridge2.0-0 libgdk-pixbuf2.0-0 libgtk-3-0 xvfb && \
  rm -rf /var/lib/apt/lists/*

RUN useradd -ms /bin/bash $USERNAME && adduser $USERNAME sudo
RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
USER $USERNAME
RUN mkdir -p /home/$USERNAME/live_compositor/xdg_runtime
WORKDIR /home/$USERNAME/live_compositor

COPY --from=builder --chown=$USERNAME:$USERNAME /root/project/target/release/main_process /home/$USERNAME/live_compositor/main_process
COPY --from=builder --chown=$USERNAME:$USERNAME /root/project/target/release/process_helper /home/$USERNAME/live_compositor/process_helper
COPY --from=builder --chown=$USERNAME:$USERNAME /root/project/target/release/lib /home/$USERNAME/live_compositor/lib
COPY --from=builder --chown=$USERNAME:$USERNAME /root/project/docker/entrypoint.sh /home/$USERNAME/live_compositor/entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]
