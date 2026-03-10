"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["1197"],{60601(e,i,s){s.r(i),s.d(i,{metadata:()=>t,default:()=>x,frontMatter:()=>d,contentTitle:()=>g,toc:()=>p,assets:()=>h});var t=JSON.parse('{"id":"demos/reactive/coverflow","title":"Coverflow","description":"Create a 3D coverflow effect using the Reactive API\'s indexProgress","source":"@site/docs/demos/reactive/coverflow.mdx","sourceDirName":"demos/reactive","slug":"/demos/reactive/coverflow","permalink":"/flicking-docs-test/docs/demos/reactive/coverflow","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/reactive/coverflow.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Coverflow","id":"coverflow","slug":"/demos/reactive/coverflow","sidebar_position":5,"description":"Create a 3D coverflow effect using the Reactive API\'s indexProgress","keywords":["flicking","carousel","coverflow","3D","reactive","indexProgress","transform","rotateY"]},"sidebar":"demosSidebar","previous":{"title":"Parallax","permalink":"/flicking-docs-test/docs/demos/reactive/parallax"},"next":{"title":"Fade","permalink":"/flicking-docs-test/docs/demos/plugins/fade"}}'),n=s(65723),l=s(54187),r=s(27449),c=s(72722);s(22155);let a=`
.flicking-coverflow {
  perspective: 800px;
}

.flicking-coverflow .flicking-camera {
  transform-style: preserve-3d;
}

.flicking-panel {
  width: 150px;
  height: 200px;
  margin: 0 10px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: bold;
  color: white;
  backface-visibility: hidden;
}
`,o=()=>{let e=`import React from "react";
import Flicking, { useFlickingReactiveAPI } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "./styles.css";

const COLORS = ["#3498db", "#e74c3c", "#2ecc71", "#9b59b6", "#f39c12"];
const LENGTH = 5;

export default function App() {
  const flickingRef = React.useRef(null);
  const { indexProgress } = useFlickingReactiveAPI(flickingRef);

  return (
    <Flicking ref={flickingRef} circular={true} align="center" className="flicking-coverflow">
      {[0, 1, 2, 3, 4].map((index) => {
        const childProgress = (index - indexProgress + LENGTH * 1.5) % LENGTH - LENGTH * 0.5;
        const scale = Math.max(0, 0.9 - Math.abs(childProgress) * 0.2);

        return (
          <div
            key={index}
            className="flicking-panel"
            style={{
              backgroundColor: COLORS[index % COLORS.length],
              transformOrigin: \`\${50 - childProgress * 50}% 50%\`,
              transform: \`rotateY(\${-childProgress * 50}deg) scale(\${scale})\`
            }}
          >
            {index + 1}
          </div>
        );
      })}
    </Flicking>
  );
}`,i=(0,n.jsx)(r.A,{template:"react",code:e,css:a}),s=`<script setup>
import { ref } from "vue";
import Flicking, { useFlickingReactiveAPI } from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";

const COLORS = ["#3498db", "#e74c3c", "#2ecc71", "#9b59b6", "#f39c12"];
const LENGTH = 5;

const flickingRef = ref(null);
const { indexProgress } = useFlickingReactiveAPI(flickingRef);

const getStyle = (index) => {
  const childProgress = (index - indexProgress.value + LENGTH * 1.5) % LENGTH - LENGTH * 0.5;
  const scale = Math.max(0, 0.9 - Math.abs(childProgress) * 0.2);

  return {
    backgroundColor: COLORS[index % COLORS.length],
    transformOrigin: \`\${50 - childProgress * 50}% 50%\`,
    transform: \`rotateY(\${-childProgress * 50}deg) scale(\${scale})\`
  };
};
</script>

<template>
  <Flicking
    ref="flickingRef"
    :options="{ circular: true, align: 'center' }"
    class="flicking-coverflow"
  >
    <div
      v-for="index in 5"
      :key="index - 1"
      class="flicking-panel"
      :style="getStyle(index - 1)"
    >
      {{ index }}
    </div>
  </Flicking>
</template>

<style>
.flicking-coverflow {
  perspective: 800px;
}

.flicking-coverflow .flicking-camera {
  transform-style: preserve-3d;
}

.flicking-panel {
  width: 150px;
  height: 200px;
  margin: 0 10px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: bold;
  color: white;
  backface-visibility: hidden;
}
</style>`,t=(0,n.jsx)(r.A,{template:"vue3",code:s,css:a}),l=`import Flicking, { connectFlickingReactiveAPI } from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

// Capture panel references BEFORE Flicking init (circular mode may modify DOM)
const panels = document.querySelectorAll(".flicking-panel");
const LENGTH = 5;

const flicking = new Flicking("#flick", {
  circular: true,
  align: "center"
});
const reactiveAPI = connectFlickingReactiveAPI(flicking);

const update = (value) => {
  panels.forEach((panel, index) => {
    const childProgress = (index - value + LENGTH * 1.5) % LENGTH - LENGTH * 0.5;
    const scale = Math.max(0, 0.9 - Math.abs(childProgress) * 0.2);

    panel.style.transformOrigin = \`\${50 - childProgress * 50}% 50%\`;
    panel.style.transform = \`rotateY(\${-childProgress * 50}deg) scale(\${scale})\`;
  });
};

// Apply initial state and subscribe to changes
update(reactiveAPI.indexProgress);
reactiveAPI.subscribe("indexProgress", update);`,o=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <div id="flick" class="flicking-viewport flicking-coverflow">
    <div class="flicking-camera">
      <div class="flicking-panel" style="background: #3498db">1</div>
      <div class="flicking-panel" style="background: #e74c3c">2</div>
      <div class="flicking-panel" style="background: #2ecc71">3</div>
      <div class="flicking-panel" style="background: #9b59b6">4</div>
      <div class="flicking-panel" style="background: #f39c12">5</div>
    </div>
  </div>
</body>
</html>`,d=(0,n.jsx)(r.A,{template:"vanilla",code:l,html:o,css:a});return(0,n.jsx)(c.A,{options:{},panels:[],react:i,vue3:t,js:d})},d={title:"Coverflow",id:"coverflow",slug:"/demos/reactive/coverflow",sidebar_position:5,description:"Create a 3D coverflow effect using the Reactive API's indexProgress",keywords:["flicking","carousel","coverflow","3D","reactive","indexProgress","transform","rotateY"]},g="Coverflow",h={},p=[{value:"Summary",id:"summary",level:2},{value:"Key API",id:"key-api",level:3},{value:"Effect Mapping",id:"effect-mapping",level:3},{value:"Details",id:"details",level:2},{value:"What is indexProgress?",id:"what-is-indexprogress",level:3},{value:"How It Works",id:"how-it-works",level:3},{value:"Related Options",id:"related-options",level:3},{value:"Use Cases",id:"use-cases",level:3},{value:"Important Notes",id:"important-notes",level:3},{value:"Related Links",id:"related-links",level:2},{value:"Related API",id:"related-api",level:3},{value:"Related Demos",id:"related-demos",level:3}];function f(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"coverflow",children:"Coverflow"})}),"\n",(0,n.jsxs)(i.p,{children:["Use ",(0,n.jsx)(i.code,{children:"indexProgress"})," from the Reactive API to apply 3D rotation and scaling effects that create an album-art style coverflow interface."]}),"\n",(0,n.jsx)(o,{}),"\n",(0,n.jsx)(i.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(i.h3,{id:"key-api",children:"Key API"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Property"}),(0,n.jsx)(i.th,{children:"Type"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../api/interfaces/FlickingReactiveState#indexprogress",children:(0,n.jsx)(i.code,{children:"indexProgress"})})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"number"})}),(0,n.jsx)(i.td,{children:"Camera position as a fractional panel index"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../api/types/FlickingReactiveObject",children:(0,n.jsx)(i.code,{children:"useFlickingReactiveAPI"})})}),(0,n.jsx)(i.td,{children:"Hook (React)"}),(0,n.jsx)(i.td,{children:"Subscribe to reactive state in React"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../api/functions/connectFlickingReactiveAPI",children:(0,n.jsx)(i.code,{children:"connectFlickingReactiveAPI"})})}),(0,n.jsx)(i.td,{children:"Function (Vanilla)"}),(0,n.jsx)(i.td,{children:"Subscribe to reactive state in Vanilla JS"})]})]})]}),"\n",(0,n.jsx)(i.h3,{id:"effect-mapping",children:"Effect Mapping"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Panel Position"}),(0,n.jsx)(i.th,{children:"rotateY"}),(0,n.jsx)(i.th,{children:"scale"}),(0,n.jsx)(i.th,{children:"transformOrigin"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Current (childProgress ~ 0)"}),(0,n.jsx)(i.td,{children:"0deg"}),(0,n.jsx)(i.td,{children:"0.9"}),(0,n.jsx)(i.td,{children:"50% 50%"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Adjacent (childProgress ~ +/-1)"}),(0,n.jsx)(i.td,{children:"-/+50deg"}),(0,n.jsx)(i.td,{children:"0.7"}),(0,n.jsx)(i.td,{children:"shifted toward center"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Far (childProgress ~ +/-2)"}),(0,n.jsx)(i.td,{children:"-/+100deg"}),(0,n.jsx)(i.td,{children:"0.5"}),(0,n.jsx)(i.td,{children:"shifted toward center"})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"details",children:"Details"}),"\n",(0,n.jsx)(i.h3,{id:"what-is-indexprogress",children:"What is indexProgress?"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"indexProgress"})," represents the current camera position as a fractional panel index. For example, ",(0,n.jsx)(i.code,{children:"2.5"})," means the camera is exactly halfway between panel 2 and panel 3. It updates in real-time during drag, enabling smooth visual transitions."]}),"\n",(0,n.jsx)(i.h3,{id:"how-it-works",children:"How It Works"}),"\n",(0,n.jsxs)(i.p,{children:["For circular mode, each panel's ",(0,n.jsx)(i.code,{children:"childProgress"})," is calculated with wrapping:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-js",children:"const childProgress = (index - indexProgress + length * 1.5) % length - length * 0.5;\n"})}),"\n",(0,n.jsx)(i.p,{children:"This value drives three CSS transform properties:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.code,{children:"rotateY"})}),": Panels rotate around the Y-axis, angling away from center"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.code,{children:"scale"})}),": Panels shrink as they move further from center"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.code,{children:"transformOrigin"})}),": Shifts to create a natural perspective pivot point"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"related-options",children:"Related Options"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.code,{children:"circular: true"})}),": Essential for seamless coverflow looping without dead ends."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.code,{children:'align: "center"'})}),": Places the active panel at the visual center of the coverflow."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"use-cases",children:"Use Cases"}),"\n",(0,n.jsx)(i.admonition,{title:"When to use",type:"info",children:(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Album / portfolio gallery"}),"\n",(0,n.jsx)(i.li,{children:"Product showcase"}),"\n",(0,n.jsx)(i.li,{children:"Media player UI"}),"\n"]})}),"\n",(0,n.jsx)(i.h3,{id:"important-notes",children:"Important Notes"}),"\n",(0,n.jsx)(i.admonition,{title:"Note",type:"warning",children:(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Set CSS ",(0,n.jsx)(i.code,{children:"perspective"})," on the viewport and ",(0,n.jsx)(i.code,{children:"transform-style: preserve-3d"})," on the camera for 3D effects to render."]}),"\n",(0,n.jsx)(i.li,{children:"Use at least 5 panels to avoid gaps when using circular mode."}),"\n"]})}),"\n",(0,n.jsx)(i.h2,{id:"related-links",children:"Related Links"}),"\n",(0,n.jsx)(i.h3,{id:"related-api",children:"Related API"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../../api/interfaces/FlickingReactiveState#indexprogress",children:(0,n.jsx)(i.code,{children:"indexProgress"})}),": Fractional panel index progress"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../../api/functions/connectFlickingReactiveAPI",children:(0,n.jsx)(i.code,{children:"connectFlickingReactiveAPI"})}),": Connect Flicking to Reactive API"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"related-demos",children:"Related Demos"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"./parallax",children:"Parallax"}),": Parallax scrolling effect using indexProgress"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"./progress-bar",children:"Progress Bar"}),": Scroll progress indicator"]}),"\n"]})]})}function x(e={}){let{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},27449(e,i,s){s.d(i,{A:()=>d});var t=s(65723),n=s(19612);s(22155);let l="^4.11.4",r={react:{"@egjs/react-flicking":l,"@egjs/flicking":l},vue3:{"@egjs/vue3-flicking":l,"@egjs/flicking":l},vanilla:{"@egjs/flicking":l}},c=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <div id="app">
    <div id="flick" class="flicking-viewport">
      <div class="flicking-camera"></div>
    </div>
  </div>
</body>
</html>`,a=`import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>);`,o=`
.flicking-viewport.vertical {
  display: block;
  width: 100%;
}

.flicking-panel {
  width: 200px;
  height: 150px;
  margin-right: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.button {
  padding: 8px 16px;
  margin: 4px;
  border: 2px solid #3498db;
  background: transparent;
  color: #3498db;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.button:hover {
  background: #3498db;
  color: white;
}

.controls {
  display: flex;
  justify-content: center;
  margin-top: 16px;
  gap: 8px;
}
`;function d({code:e,html:i,template:s="react",dependencies:l={},files:d={},css:g=""}){var h;let p,f,x;return(0,t.jsx)(n.OZ,{template:"vue3"===s?"vue":"vanilla"===s?"vanilla":"react",files:(x={"/styles.css":{code:f=g?`${o}
${g}`:o},...d},"react"===s?{"/App.tsx":{code:e},"/index.js":{code:a,hidden:!0},...x}:"vue3"===s?{"/src/App.vue":{code:e},...x}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),s=[],t=[],n=!1;for(let e of i)n?t.push(e):e.trimStart().startsWith("import ")||""===e.trim()?s.push(e.replace('"../styles.css"','"./styles.css"')):(n=!0,t.push(e));for(;t.length>0&&""===t[t.length-1].trim();)t.pop();return[...s,"","const _run = () => {",...t.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:f},"/index.html":{code:(p="<style>.flicking-viewport{opacity:0}</style>",(h=i||c).includes("</head>")?h.replace("</head>",`${p}
</head>`):p+h)},...d}),customSetup:{dependencies:{...r[s],...l}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===s?["/App.tsx","/styles.css"]:"vue3"===s?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===s?"/App.tsx":"vue3"===s?"/src/App.vue":"/src/index.js"}})}},72722(e,i,s){s.d(i,{A:()=>j});var t=s(65723),n=s(34622),l=s(7210),r=s(78863);s(22155);let c=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,a=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",o=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${c(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",d=e=>`${Object.keys(e).map(i=>`${i}: ${c(e[i],"'")}`).join(", ")}`,g=(e,{prefix:i,includeFlicking:s=!0}={})=>{let t=s?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&t.push(...e),`${t.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},h=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${d(e[1])} }`:e[1]??""}`).join(", ")})`,p=({options:e,panels:i,events:s={},methods:l={},plugins:r=[],siblings:d=[],imports:h=[],viewportClass:p=""})=>{let f=e=>`${Object.keys(e).map(i=>`${i}: ${c(e[i])}`).join(",\n  ")}`,x=Object.keys(l).map(e=>`const ${e} = ${l[e]};
`).join(""),j=e?`const flicking = new Flicking("#flick", {
  ${f(e)}
});

`:'const flicking = new Flicking("#flick")',m=r.length>0?`flicking.addPlugins(${r.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?f(e[1]):e[1]??""}
}`:""})`)});`:"",u=[...r.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...h],v=Object.keys(s).map(e=>{let i=s[e];return`flicking.on("${e}", ${i})
`}).join(""),$=i.filter(e=>e.isSlot);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${p&&` ${p}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${$.length?`
  ${$.map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${d?"\n"+d.map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,t.jsx)(n.A,{className:"language-js",title:"js",children:`${g(u)}

${x}${j}${m}${v}`.trim()})]})},f=({options:e,panels:i,events:s={},methods:l={},plugins:r,siblings:c,imports:d=[],viewportClass:p=""})=>{let f=r?`
  private _plugins = [${h(r)}];
`:"",x=i.filter(e=>e.isSlot),j=[["{ Component }","react"],[x.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],m=Object.keys(l).map(e=>`
const ${e} = ${l[e]};`).join("");m&&(m+="\n"),r&&j.push([`{ ${r.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),j.push(...d);let u=x.length?`
      <ViewportSlot>
        ${x.map(e=>`<${e.tag}${a(e,"className")}${o(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",v=Object.keys(s).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${s[e]}}`).join("");return(0,t.jsx)(n.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${g(j,{includeFlicking:!1})}
${m}
export default class DemoComponent extends Component {${f}
  public render() {
    return ${c?"<>\n    ":""}<Flicking${p&&` className="${p}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${r?" plugins={this._plugins}":""}${v}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e,"className")}${o(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${u}
    </Flicking>${c?`
    ${c.map(e=>`<${e.tag}${a(e,"className")}${o(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},x=({options:e,panels:i,events:s={},methods:l={},plugins:r,siblings:c=[],imports:p=[],viewportClass:f=""})=>{let x=d(e),j=i.filter(e=>e.isSlot),m=r?`,
  data() {
    return {
      plugins: [${h(r)}]
    }
  }`:"",u=j.length?`
  <template #viewport>
    ${j.map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",v=[...(r??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...p],$=Object.keys(l),k=$.length>0?`,
  methods: {
    ${$.map(e=>`${e}: ${l[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",y=Object.keys(s).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${s[e]}"`).join("");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.A,{className:"language-html",title:"template",children:`<Flicking${f&&` class="${f}"`}${e?` :options="{ ${x} }"`:""}${r?' :plugins="plugins"':""}${y}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n  ")}${u}
</Flicking>${c?`
${c.map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,t.jsx)(n.A,{className:"language-js",title:"script",children:`${g(v,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${m}${k}
}`})]})},j=({js:e,react:i,vue3:s,style:c,...a})=>(0,t.jsxs)("div",{children:[(0,t.jsxs)(r.A,{groupId:"cfc",defaultValue:"js",children:[(0,t.jsx)(l.A,{value:"react",label:"React",children:i||(0,t.jsx)(f,{...a})}),(0,t.jsx)(l.A,{value:"vue3",label:"Vue@3",children:s||(0,t.jsx)(x,{...a})}),(0,t.jsx)(l.A,{value:"js",label:"JavaScript",children:e||(0,t.jsx)(p,{...a})})]}),c&&(0,t.jsx)(n.A,{className:"language-css",title:"style",children:`${c}`})]})}}]);