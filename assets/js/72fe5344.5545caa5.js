"use strict";(self.webpackChunkcompositor_live=self.webpackChunkcompositor_live||[]).push([[2775],{5255:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var r=i(4848),s=i(8453);const o={},l="Requirements",t={id:"deployment/requirements",title:"Requirements",description:"LiveCompositor imposes certain requirements both in the runtime and during a build. Specifics might differ depending on the way you use the compositor and features you are requiring.",source:"@site/pages/deployment/requirements.md",sourceDirName:"deployment",slug:"/deployment/requirements",permalink:"/docs/deployment/requirements",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Deployment",permalink:"/docs/deployment/overview"},next:{title:"Configuration",permalink:"/docs/deployment/configuration"}},d={},c=[{value:"WebGPU features",id:"webgpu-features",level:2},{value:"Hardware requirements",id:"hardware-requirements",level:2},{value:"Software requirements",id:"software-requirements",level:2},{value:"Dockerfile",id:"dockerfile",level:3},{value:"Binaries from GitHub releases",id:"binaries-from-github-releases",level:3},{value:"Building from source",id:"building-from-source",level:3},{value:"Nix",id:"nix",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsx)(n.p,{children:"LiveCompositor imposes certain requirements both in the runtime and during a build. Specifics might differ depending on the way you use the compositor and features you are requiring."}),"\n",(0,r.jsx)(n.h2,{id:"webgpu-features",children:"WebGPU features"}),"\n",(0,r.jsx)(n.p,{children:"If a feature is not supported then compositor server will fail on startup."}),"\n",(0,r.jsx)(n.p,{children:"Always required:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"TEXTURE_BINDING_ARRAY"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"PUSH_CONSTANTS"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Enabled by default:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"SAMPLED_TEXTURE_AND_STORAGE_BUFFER_ARRAY_NON_UNIFORM_INDEXING"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"UNIFORM_BUFFER_AND_STORAGE_TEXTURE_ARRAY_NON_UNIFORM_INDEXING"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Those options are enabled by default, but can be disabled using ",(0,r.jsx)(n.a,{href:"/docs/deployment/configuration#live_compositor_required_wgpu_features",children:(0,r.jsx)(n.code,{children:"LIVE_COMPOSITOR_REQUIRED_WGPU_FEATURES"})})," environment variable."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"All of the above features should be available on almost any GPU. If you are getting an error\nabout unsupported features, then most likely, the issue is caused by missing or too old drivers."})}),"\n",(0,r.jsx)(n.h2,{id:"hardware-requirements",children:"Hardware requirements"}),"\n",(0,r.jsx)(n.p,{children:"Supported platforms:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Linux - ",(0,r.jsx)(n.code,{children:"x86_64"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"It should work with any GPU from hardware perspective. Even though very unlikely, it is possible\nthat some GPUs might not have drivers that implement all the required features."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"macOS - Apple Silicon"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Other platforms are not regularly tested, but compositor should also work on:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Linux - ",(0,r.jsx)(n.code,{children:"aarch64"})," (Note that by default docker on Apple Silicon macOS is running ",(0,r.jsx)(n.code,{children:"aarch64"})," Linux)"]}),"\n",(0,r.jsxs)(n.li,{children:["macOS - ",(0,r.jsx)(n.code,{children:"x86_64"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"software-requirements",children:"Software requirements"}),"\n",(0,r.jsx)(n.h3,{id:"dockerfile",children:"Dockerfile"}),"\n",(0,r.jsxs)(n.p,{children:["Dockerfile defines all software requirements. Configurations provided in ",(0,r.jsx)(n.a,{href:"https://github.com/software-mansion/live-compositor/tree/master/build_tools/docker",children:"the compositor repo"}),"\nare written to work with both GPU and CPU based rendering. To use them in your own project, just copy\nthe Dockerfile and replace ",(0,r.jsx)(n.code,{children:"COPY . /root/project"})," with an appropriate ",(0,r.jsx)("nobr",{children:(0,r.jsx)(n.code,{children:"RUN git clone ..."})})," command."]}),"\n",(0,r.jsxs)(n.p,{children:["If you want to use a different distro or different Ubuntu version then consult the ",(0,r.jsx)(n.a,{href:"#building-from-source",children:(0,r.jsx)(n.code,{children:"building from source"})})," section."]}),"\n",(0,r.jsx)(n.h3,{id:"binaries-from-github-releases",children:"Binaries from GitHub releases"}),"\n",(0,r.jsx)(n.p,{children:"For Linux:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"FFmpeg 6"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"glibc"})," 2.35 or higher (version used by Ubuntu 22.04)"]}),"\n",(0,r.jsxs)(n.li,{children:["MESA (e.g. ",(0,r.jsx)(n.code,{children:"mesa-vulkan-drivers"})," package on Ubuntu)","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"23.2.1"})," or higher for CPU based rendering"]}),"\n",(0,r.jsxs)(n.li,{children:["For GPU based rendering the lowest version we tested was ",(0,r.jsx)(n.code,{children:"22.0.1"}),", but older version might also work."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For macOS:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"FFmpeg 7 (this version will mostly follow a default version available in Homebrew)"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Changing FFmpeg version on macOS might be troublesome, so we decided to produce binaries that will\nbe easiest to use for most users, even if this means updating FFmpeg version in a minor or patch release.\nChanges like that might be considered unsafe, but in case of LiveCompositor macOS platform will be used\nmostly for development, and it is highly unlikely to be used for a production deployment."})}),"\n",(0,r.jsx)(n.h3,{id:"building-from-source",children:"Building from source"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"FFmpeg 6 or higher. Build time version has to be the same as runtime version."}),"\n",(0,r.jsx)(n.li,{children:"Rust toolchain."}),"\n",(0,r.jsxs)(n.li,{children:["Following libraries (for build time you will need version with header files if your distro ships them separately):","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["FFmpeg dependencies: ",(0,r.jsx)(n.code,{children:"libavcodec"}),", ",(0,r.jsx)(n.code,{children:"libavformat"}),", ",(0,r.jsx)(n.code,{children:"libavfilter"}),", ",(0,r.jsx)(n.code,{children:"libavdevice"}),", ",(0,r.jsx)(n.code,{children:"libavutil"}),", ",(0,r.jsx)(n.code,{children:"libswscale"}),", ",(0,r.jsx)(n.code,{children:"libswresample"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"libopus"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"libssl"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Linux specific (with a Vulkan backend):"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["MESA","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"23.2.1"})," or higher for CPU based rendering"]}),"\n",(0,r.jsxs)(n.li,{children:["For GPU based rendering the lowest version we tested was ",(0,r.jsx)(n.code,{children:"22.0.1"}),", but older version might also work."]}),"\n",(0,r.jsxs)(n.li,{children:["e.g. for Ubuntu","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["build time: ",(0,r.jsx)(n.code,{children:"apt-get install libegl1-mesa-dev libgl1-mesa-dri libxcb-xfixes0-dev"})]}),"\n",(0,r.jsxs)(n.li,{children:["runtime: ",(0,r.jsx)(n.code,{children:"apt-get install mesa-vulkan-drivers"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"nix",children:"Nix"}),"\n",(0,r.jsx)(n.p,{children:"LiveCompositor repository includes a nix flake, but because compositor is highly dependent on hardware and\navailable drivers this configuration might not be self-contained/portable as nix configuration are expected\nto be in general."}),"\n",(0,r.jsx)(n.p,{children:"This configuration is primary used for development, and it is not recommended unless you know what you are doing."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>t});var r=i(6540);const s={},o=r.createContext(s);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);