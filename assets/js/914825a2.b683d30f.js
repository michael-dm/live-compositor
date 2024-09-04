"use strict";(self.webpackChunkcompositor_live=self.webpackChunkcompositor_live||[]).push([[9835],{2365:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var t=i(4848),s=i(8453);const n={},r="Getting started",a={id:"intro",title:"Getting started",description:"What is Live Compositor?",source:"@site/pages/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",next:{title:"Guides",permalink:"/docs/category/guides"}},c={},l=[{value:"What is Live Compositor?",id:"what-is-live-compositor",level:2},{value:"Where to start?",id:"where-to-start",level:2},{value:"How to use it?",id:"how-to-use-it",level:2},{value:"Standalone",id:"standalone",level:3},{value:"Membrane Framework plugin",id:"membrane-framework-plugin",level:3}];function d(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"getting-started",children:"Getting started"}),"\n",(0,t.jsx)(o.h2,{id:"what-is-live-compositor",children:"What is Live Compositor?"}),"\n",(0,t.jsx)(o.p,{children:"LiveCompositor is a media server for real-time, low latency, programmable video and audio mixing."}),"\n",(0,t.jsx)(o.p,{children:"LiveCompositor targets real-time use cases, with a significant focus on situations where latency is critical. It is a great fit\nfor any video conferencing, live-streaming, or broadcasting solutions where you need to combine or modify video on the fly.\nHowever, you can also use it for non-real-time use cases, for example, apply some effect on a video from an MP4 file and write the output\nto file as MP4."}),"\n",(0,t.jsx)(o.h2,{id:"where-to-start",children:"Where to start?"}),"\n",(0,t.jsxs)(o.p,{children:["To get started check out our ",(0,t.jsx)(o.a,{href:"./category/guides",children:(0,t.jsx)(o.code,{children:"Guides"})})," section that will walk you through common scenarios."]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.a,{href:"/docs/guides/quick-start",children:(0,t.jsx)(o.code,{children:"Quick start"})})," basic video composing and audio mixing setup."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.a,{href:"/docs/guides/deliver-input",children:(0,t.jsx)(o.code,{children:"Deliver input streams"})})," explains and shows examples of streaming multimedia to the LiveCompositor and use them for mixing/composition."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.a,{href:"/docs/guides/receive-output",children:(0,t.jsx)(o.code,{children:"Receive output streams"})})," explains and shows examples of receiving streams with results of mixing/composition from the LiveCompositor"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.a,{href:"/docs/guides/basic-layouts",children:(0,t.jsx)(o.code,{children:"Basic Layouts"})})," describes how to achieve a few of the most basic layouts when composing video."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.a,{href:"/docs/guides/view-transition",children:(0,t.jsx)(o.code,{children:"Transitions (View/Rescaler)"})})," shows a few basic examples of animated transitions on ",(0,t.jsx)(o.code,{children:"View"}),"/",(0,t.jsx)(o.code,{children:"Rescaler"})," components."]}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["The main concept and basic abstractions that the LiveCompositor operates on are described in the ",(0,t.jsx)(o.a,{href:"/docs/concept/overview",children:(0,t.jsx)(o.code,{children:"Concepts"})})," section."]}),"\n",(0,t.jsx)(o.h2,{id:"how-to-use-it",children:"How to use it?"}),"\n",(0,t.jsx)(o.p,{children:"Live Compositor can be used standalone or as a part of a Membrane Framework multimedia pipeline."}),"\n",(0,t.jsx)(o.h3,{id:"standalone",children:"Standalone"}),"\n",(0,t.jsx)(o.p,{children:"You can use LiveCompositor as a standalone multimedia server. The server can be started by:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["Building ",(0,t.jsx)(o.a,{href:"https://github.com/software-mansion/live-compositor",children:(0,t.jsx)(o.code,{children:"github.com/software-mansion/live-compositor"})})," from source."]}),"\n",(0,t.jsxs)(o.li,{children:["Using binaries from ",(0,t.jsx)(o.a,{href:"https://github.com/software-mansion/live-compositor/releases",children:"GitHub releases"}),"."]}),"\n",(0,t.jsxs)(o.li,{children:["Using Docker","\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["(recommended) Dockerfile with compositor without web rendering support ",(0,t.jsx)(o.a,{href:"https://github.com/software-mansion/live-compositor/blob/master/build_tools/docker/slim.Dockerfile",children:"https://github.com/software-mansion/live-compositor/blob/master/build_tools/docker/slim.Dockerfile"})]}),"\n",(0,t.jsxs)(o.li,{children:["Dockerfile with compositor with web rendering support ",(0,t.jsx)(o.a,{href:"https://github.com/software-mansion/live-compositor/blob/master/build_tools/docker/full.Dockerfile",children:"https://github.com/software-mansion/live-compositor/blob/master/build_tools/docker/full.Dockerfile"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"membrane-framework-plugin",children:"Membrane Framework plugin"}),"\n",(0,t.jsx)(o.p,{children:"Membrane Framework has its own way of handling multimedia, so to fit into that ecosystem some features do not translate one-to-one between standalone compositor and the plugin."}),"\n",(0,t.jsx)(o.p,{children:"Notable differences:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"Inputs/outputs in LiveCompositor can include both audio and video at the same time, but with the Membrane plugin you need to create separate inputs/outputs for each media type."}),"\n",(0,t.jsx)(o.li,{children:"No support for MP4 files as input. It is more idiomatic to use Membrane plugins to read MP4 files instead."}),"\n",(0,t.jsx)(o.li,{children:"To connect inputs/outputs to LiveCompositor you need to first register them before sending/receiving the stream, but with the Membrane plugin connecting pads covers both those steps."}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["Parts of this documentation were written with a standalone scenario in mind, so make sure to always consult ",(0,t.jsx)(o.a,{href:"https://hexdocs.pm/membrane_live_compositor_plugin/0.9.0/Membrane.LiveCompositor.html",children:"the plugin documentation"})," first. For example, to see how to send a scene update check out documentation on ",(0,t.jsx)(o.code,{children:"HexDocs"}),", but if you want to know what options the ",(0,t.jsx)(o.code,{children:"View"})," component supports, then consult the documentation ",(0,t.jsx)(o.a,{href:"/docs/api/components/View",children:"here"}),"."]})]})}function h(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,o,i)=>{i.d(o,{R:()=>r,x:()=>a});var t=i(6540);const s={},n=t.createContext(s);function r(e){const o=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(n.Provider,{value:o},e.children)}}}]);