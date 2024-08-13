# LiveCompositor TypeScript demos

https://github.com/software-mansion/live-compositor/assets/104033489/e6f5ba7c-ab05-4935-a42a-bc28c42fc895

## Technical requirements

- **FFmpeg** (FFmpeg6 on Linux, FFmpeg 7 on MacOS)
- **Gstreamer**
- NodeJS + npm

Before running demos, install JS dependencies with:

```console
npm install
```
LiveCompositor should run on any computer with modern GPU, but if you want to check detailed requirements, visit [requirements section in docs](https://compositor.live/docs/deployment/requirements).

### MacOS installation guide

1. Install FFmpeg 7
```console
brew install ffmpeg
```

2. Install GStreamer

- Go to GStreamer website, download and open runtime installers (we tested 1.24 release, but should work on the others as well).
- Check if directory `/Library/Frameworks/GStreamer.framework/Commands/` exists.
- Add `/Library/Frameworks/GStreamer.framework/Commands/` to `PATH`.
If you're using `zshrc` add: `export PATH="$PATH:/Library/Frameworks/GStreamer.framework/Commands"` to `~/.zshrc`

3. Install `node`

```console
brew install node
```

4. Install JS dependencies

```console
npm install
```

## Demos

### 1. Video Conferencing

Run this example with:

```console
npm run 1-videoconferencing
```

This example simulates composing video conference footage.
It demonstrate how you can change output dynamically with smooth transitions.

This example also use your webcam. If you have problems with webcam footage, you can substitute it with prerecorded mp4 file:

```console
export LIVE_COMPOSITOR_WEBCAM=false
```

### 2. TV Broadcast

Run this example with:

```console
npm run 2-tv_broadcast
```

This example simulates TV broadcasting scenario.
It demonstrate how you can combine build-in components with own shaders, customizing LiveCompositor for specific use-case, while utilizing GPU rendering acceleration.
In this example, green-screen is removed from input stream with use of custom shader. Transformed input stream, background image, logo, and text are combined in output stream.

### 3. Live stream

Run this example with:

```console
npm run 3-live_stream
```

This example simulates live streaming screen footage with webcam.
It demonstrate how to setup simple output and add elements like donate notifications.

This example also use your webcam. If you have problems with webcam footage, you can substitute it with prerecorded mp4 file:

```console
export LIVE_COMPOSITOR_WEBCAM=false
```

## Learn more

You can learn more from [documentation](https://compositor.live/docs/intro).
API reference and guides can be found there.
