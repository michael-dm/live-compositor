"use strict";(self.webpackChunkcompositor_live=self.webpackChunkcompositor_live||[]).push([[4501,5392],{7892:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=r(4848),a=r(8453),i=r(6287);const s={sidebar_position:6,hide_table_of_contents:!0},d="Shader",o={id:"api/components/Shader",title:"Shader",description:"Shader applies transformation defined via WGSL shader on its children. Learn more.",source:"@site/pages/api/components/Shader.md",sourceDirName:"api/components",slug:"/api/components/Shader",permalink:"/docs/api/components/Shader",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"Text",permalink:"/docs/api/components/Text"},next:{title:"Image",permalink:"/docs/api/components/Image"}},c={},l=[];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"shader",children:"Shader"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Shader"})," applies transformation defined via WGSL shader on its children. ",(0,t.jsx)(n.a,{href:"/docs/concept/shaders",children:"Learn more."})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["To use this component, you need to first register the shader with matching ",(0,t.jsx)(n.code,{children:"shader_id"})," using ",(0,t.jsx)(n.a,{href:"/docs/api/routes#register-shader",children:(0,t.jsx)(n.code,{children:"register shader"})})," request."]})}),"\n",(0,t.jsx)(i.default,{})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},6287:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var t=r(4848),a=r(8453);const i={},s=void 0,d={id:"api/generated/component-Shader",title:"component-Shader",description:"Shader",source:"@site/pages/api/generated/component-Shader.md",sourceDirName:"api/generated",slug:"/api/generated/component-Shader",permalink:"/docs/api/generated/component-Shader",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},o={},c=[{value:"Shader",id:"shader",level:2},{value:"Properties",id:"properties",level:4},{value:"ShaderParam",id:"shaderparam",level:2},{value:"ShaderParamStructField",id:"shaderparamstructfield",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"shader",children:"Shader"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"type Shader = {\n  id?: string;\n  children?: Component[];\n  shader_id: string;\n  shader_param?: ShaderParam;\n  resolution: {\n    width: u32;\n    height: u32;\n  };\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"id"})," - Id of a component."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"children"})," - List of component's children."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"shader_id"})," - Id of a shader. It identifies a shader registered using a ",(0,t.jsx)(n.a,{href:"/docs/api/routes#register-shader",children:(0,t.jsx)(n.code,{children:"register shader"})})," request."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"shader_param"})," - Object that will be serialized into a ",(0,t.jsx)(n.code,{children:"struct"})," and passed inside the shader as:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-wgsl",children:"@group(1) @binding(0) var<uniform>\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["This object's structure must match the structure defined in a shader source code. Currently, we do not handle memory layout automatically.\nTo achieve the correct memory alignment, you might need to pad your data with additional fields. See ",(0,t.jsx)(n.a,{href:"https://www.w3.org/TR/WGSL/#alignment-and-size",children:"WGSL documentation"})," for more details."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"resolution"})," - Resolution of a texture where shader will be executed."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"shaderparam",children:"ShaderParam"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'type ShaderParam = \n  | { type: "f32"; value: f32; }\n  | { type: "u32"; value: u32; }\n  | { type: "i32"; value: i32; }\n  | { type: "list"; value: ShaderParam[]; }\n  | {\n      type: "struct";\n      value: ShaderParamStructField[];\n    }\n'})}),"\n",(0,t.jsx)(n.h2,{id:"shaderparamstructfield",children:"ShaderParamStructField"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'type ShaderParamStructField = \n  | { field_name: string; type: "f32"; value: f32; }\n  | { field_name: string; type: "u32"; value: u32; }\n  | { field_name: string; type: "i32"; value: i32; }\n  | {\n      field_name: string;\n      type: "list";\n      value: ShaderParam[];\n    }\n  | {\n      field_name: string;\n      type: "struct";\n      value: ShaderParamStructField[];\n    }\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>d});var t=r(6540);const a={},i=t.createContext(a);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);