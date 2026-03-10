"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["4034"],{40004(e,s,i){i.r(s),i.d(s,{metadata:()=>t,default:()=>m,frontMatter:()=>d,contentTitle:()=>p,toc:()=>h,assets:()=>g});var t=JSON.parse('{"id":"demos/reactive/progress-bar","title":"Progress Bar","description":"Display scroll progress using the Reactive API\'s progress property","source":"@site/docs/demos/reactive/progress-bar.mdx","sourceDirName":"demos/reactive","slug":"/demos/reactive/progress-bar","permalink":"/flicking-docs-test/docs/demos/reactive/progress-bar","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/reactive/progress-bar.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Progress Bar","id":"progress-bar","slug":"/demos/reactive/progress-bar","sidebar_position":1,"description":"Display scroll progress using the Reactive API\'s progress property","keywords":["flicking","carousel","progress","reactive","freeScroll","progress bar"]},"sidebar":"demosSidebar","previous":{"title":"Observe Panel Resize","permalink":"/flicking-docs-test/docs/demos/advanced/observe-panel-resize"},"next":{"title":"Pagination","permalink":"/flicking-docs-test/docs/demos/reactive/pagination"}}'),r=i(65723),n=i(54187),l=i(27449),c=i(72722);i(22155);let a=`
.flicking-panel {
  width: 150px;
  height: 120px;
  margin-right: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.progress-container {
  margin-top: 20px;
  width: 100%;
}

.progress-track {
  width: 100%;
  height: 8px;
  background: #ecf0f1;
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  border-radius: 4px;
}

.progress-text {
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: #7f8c8d;
}
`,o=()=>{let e=`import React from "react";
import Flicking, { useFlickingReactiveAPI } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "./styles.css";

const COLORS = ["#3498db", "#e74c3c", "#2ecc71", "#9b59b6", "#f39c12"];

export default function App() {
  const flickingRef = React.useRef(null);
  const { progress } = useFlickingReactiveAPI(flickingRef);

  return (
    <div style={{ width: "100%" }}>
      <Flicking ref={flickingRef} moveType="freeScroll">
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className="flicking-panel"
            style={{ backgroundColor: COLORS[index % COLORS.length] }}
          >
            {index + 1}
          </div>
        ))}
      </Flicking>

      <div className="progress-container">
        <div className="progress-track">
          <div className="progress-bar" style={{ width: \`\${progress}%\` }} />
        </div>
        <div className="progress-text">
          Progress: {progress.toFixed(1)}%
        </div>
      </div>
    </div>
  );
}`,s=(0,r.jsx)(l.A,{template:"react",code:e,css:a}),i=`<script setup>
import { ref } from "vue";
import Flicking, { useFlickingReactiveAPI } from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";

const COLORS = ["#3498db", "#e74c3c", "#2ecc71", "#9b59b6", "#f39c12"];

const flickingRef = ref(null);
const { progress } = useFlickingReactiveAPI(flickingRef);
</script>

<template>
  <div style="width: 100%">
    <Flicking
      ref="flickingRef"
      :options="{ moveType: 'freeScroll' }"
    >
      <div
        v-for="index in 5"
        :key="index - 1"
        class="flicking-panel"
        :style="{ backgroundColor: COLORS[(index - 1) % COLORS.length] }"
      >
        {{ index }}
      </div>
    </Flicking>

    <div class="progress-container">
      <div class="progress-track">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
      </div>
      <div class="progress-text">
        Progress: {{ progress.toFixed(1) }}%
      </div>
    </div>
  </div>
</template>

<style>
.flicking-panel {
  width: 150px;
  height: 120px;
  margin-right: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.progress-container {
  margin-top: 20px;
  width: 100%;
}

.progress-track {
  width: 100%;
  height: 8px;
  background: #ecf0f1;
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  border-radius: 4px;
}

.progress-text {
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: #7f8c8d;
}
</style>`,t=(0,r.jsx)(l.A,{template:"vue3",code:i,css:a}),n=`import Flicking, { connectFlickingReactiveAPI } from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

const flicking = new Flicking("#flick", {
  moveType: "freeScroll"
});
const reactiveAPI = connectFlickingReactiveAPI(flicking);

const progressBar = document.querySelector(".progress-bar");
const progressText = document.querySelector(".progress-text");

reactiveAPI.subscribe("progress", (value) => {
  progressBar.style.width = \`\${value}%\`;
  progressText.textContent = \`Progress: \${value.toFixed(1)}%\`;
});`,o=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <div style="width: 100%">
    <div id="flick" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel" style="background: #3498db">1</div>
        <div class="flicking-panel" style="background: #e74c3c">2</div>
        <div class="flicking-panel" style="background: #2ecc71">3</div>
        <div class="flicking-panel" style="background: #9b59b6">4</div>
        <div class="flicking-panel" style="background: #f39c12">5</div>
      </div>
    </div>
    <div class="progress-container">
      <div class="progress-track">
        <div class="progress-bar" style="width: 0%"></div>
      </div>
      <div class="progress-text">Progress: 0%</div>
    </div>
  </div>
</body>
</html>`,d=(0,r.jsx)(l.A,{template:"vanilla",code:n,html:o,css:a});return(0,r.jsx)(c.A,{options:{},panels:[],react:s,vue3:t,js:d})},d={title:"Progress Bar",id:"progress-bar",slug:"/demos/reactive/progress-bar",sidebar_position:1,description:"Display scroll progress using the Reactive API's progress property",keywords:["flicking","carousel","progress","reactive","freeScroll","progress bar"]},p="Progress Bar",g={},h=[{value:"Summary",id:"summary",level:2},{value:"Key API",id:"key-api",level:3},{value:"Behavior",id:"behavior",level:3},{value:"Details",id:"details",level:2},{value:"What is progress?",id:"what-is-progress",level:3},{value:"Related Options",id:"related-options",level:3},{value:"Use Cases",id:"use-cases",level:3},{value:"Related Links",id:"related-links",level:2},{value:"Related API",id:"related-api",level:3},{value:"Related Demos",id:"related-demos",level:3}];function x(e){let s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"progress-bar",children:"Progress Bar"})}),"\n",(0,r.jsxs)(s.p,{children:["Use the ",(0,r.jsx)(s.code,{children:"progress"})," property from the Reactive API to display a visual scroll progress indicator that updates in real-time."]}),"\n",(0,r.jsx)(o,{}),"\n",(0,r.jsx)(s.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(s.h3,{id:"key-api",children:"Key API"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Property"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../api/interfaces/FlickingReactiveState#progress",children:(0,r.jsx)(s.code,{children:"progress"})})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"number"})}),(0,r.jsx)(s.td,{children:"Overall scroll progress percentage (0-100)"})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"behavior",children:"Behavior"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Position"}),(0,r.jsx)(s.th,{children:"progress"}),(0,r.jsx)(s.th,{children:"Bar Width"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Start"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0%"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Middle"}),(0,r.jsx)(s.td,{children:"~50"}),(0,r.jsx)(s.td,{children:"~50%"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"End"}),(0,r.jsx)(s.td,{children:"100"}),(0,r.jsx)(s.td,{children:"100%"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"details",children:"Details"}),"\n",(0,r.jsx)(s.h3,{id:"what-is-progress",children:"What is progress?"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"progress"})," represents the current camera position as a percentage of the total scrollable range. Combining it with ",(0,r.jsx)(s.code,{children:'moveType: "freeScroll"'})," allows continuous (non-snapping) progress updates, making it ideal for smooth progress bar animations."]}),"\n",(0,r.jsx)(s.h3,{id:"related-options",children:"Related Options"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:'moveType: "freeScroll"'})}),": Enables continuous progress changes without snapping to panel boundaries."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"bound: true"})}),": Ensures progress reaches exactly 0 at the start and 100 at the end."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"use-cases",children:"Use Cases"}),"\n",(0,r.jsx)(s.admonition,{title:"When to use",type:"info",children:(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Image gallery scroll progress"}),"\n",(0,r.jsx)(s.li,{children:"Onboarding step indicator"}),"\n",(0,r.jsx)(s.li,{children:"Content reading progress"}),"\n"]})}),"\n",(0,r.jsx)(s.h2,{id:"related-links",children:"Related Links"}),"\n",(0,r.jsx)(s.h3,{id:"related-api",children:"Related API"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"../../api/interfaces/FlickingReactiveState#progress",children:(0,r.jsx)(s.code,{children:"progress"})}),": Scroll progress percentage"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"../../api/functions/connectFlickingReactiveAPI",children:(0,r.jsx)(s.code,{children:"connectFlickingReactiveAPI"})}),": Connect Flicking to Reactive API"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"related-demos",children:"Related Demos"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"./pagination",children:"Pagination"}),": Dot pagination navigation"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"./prev-next",children:"Prev / Next"}),": Previous/Next button navigation"]}),"\n"]})]})}function m(e={}){let{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},27449(e,s,i){i.d(s,{A:()=>d});var t=i(65723),r=i(19612);i(22155);let n="^4.11.4",l={react:{"@egjs/react-flicking":n,"@egjs/flicking":n},vue3:{"@egjs/vue3-flicking":n,"@egjs/flicking":n},vanilla:{"@egjs/flicking":n}},c=`<!DOCTYPE html>
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
`;function d({code:e,html:s,template:i="react",dependencies:n={},files:d={},css:p=""}){var g;let h,x,m;return(0,t.jsx)(r.OZ,{template:"vue3"===i?"vue":"vanilla"===i?"vanilla":"react",files:(m={"/styles.css":{code:x=p?`${o}
${p}`:o},...d},"react"===i?{"/App.tsx":{code:e},"/index.js":{code:a,hidden:!0},...m}:"vue3"===i?{"/src/App.vue":{code:e},...m}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let s=e.split("\n"),i=[],t=[],r=!1;for(let e of s)r?t.push(e):e.trimStart().startsWith("import ")||""===e.trim()?i.push(e.replace('"../styles.css"','"./styles.css"')):(r=!0,t.push(e));for(;t.length>0&&""===t[t.length-1].trim();)t.pop();return[...i,"","const _run = () => {",...t.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:x},"/index.html":{code:(h="<style>.flicking-viewport{opacity:0}</style>",(g=s||c).includes("</head>")?g.replace("</head>",`${h}
</head>`):h+g)},...d}),customSetup:{dependencies:{...l[i],...n}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===i?["/App.tsx","/styles.css"]:"vue3"===i?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===i?"/App.tsx":"vue3"===i?"/src/App.vue":"/src/index.js"}})}},72722(e,s,i){i.d(s,{A:()=>u});var t=i(65723),r=i(34622),n=i(7210),l=i(78863);i(22155);let c=(e,s='"')=>"string"==typeof e?`${s}${e}${s}`:e,a=(e,s="class")=>e.class?` ${s}="${e.class}"`:"",o=(e,s=!1)=>e.style?s?` style={{ ${Object.keys(e.style).map(s=>`${s}: ${c(e.style[s])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(s=>`${s}: ${e.style[s]};`).join(" ")}"`:"",d=e=>`${Object.keys(e).map(s=>`${s}: ${c(e[s],"'")}`).join(", ")}`,p=(e,{prefix:s,includeFlicking:i=!0}={})=>{let t=i?[["Flicking",`@egjs/${s?`${s}-`:""}flicking`]]:[];return e&&t.push(...e),`${t.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},g=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${d(e[1])} }`:e[1]??""}`).join(", ")})`,h=({options:e,panels:s,events:i={},methods:n={},plugins:l=[],siblings:d=[],imports:g=[],viewportClass:h=""})=>{let x=e=>`${Object.keys(e).map(s=>`${s}: ${c(e[s])}`).join(",\n  ")}`,m=Object.keys(n).map(e=>`const ${e} = ${n[e]};
`).join(""),u=e?`const flicking = new Flicking("#flick", {
  ${x(e)}
});

`:'const flicking = new Flicking("#flick")',v=l.length>0?`flicking.addPlugins(${l.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?x(e[1]):e[1]??""}
}`:""})`)});`:"",j=[...l.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],f=Object.keys(i).map(e=>{let s=i[e];return`flicking.on("${e}", ${s})
`}).join(""),$=s.filter(e=>e.isSlot);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${h&&` ${h}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${s.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${$.length?`
  ${$.map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${d?"\n"+d.map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,t.jsx)(r.A,{className:"language-js",title:"js",children:`${p(j)}

${m}${u}${v}${f}`.trim()})]})},x=({options:e,panels:s,events:i={},methods:n={},plugins:l,siblings:c,imports:d=[],viewportClass:h=""})=>{let x=l?`
  private _plugins = [${g(l)}];
`:"",m=s.filter(e=>e.isSlot),u=[["{ Component }","react"],[m.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],v=Object.keys(n).map(e=>`
const ${e} = ${n[e]};`).join("");v&&(v+="\n"),l&&u.push([`{ ${l.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),u.push(...d);let j=m.length?`
      <ViewportSlot>
        ${m.map(e=>`<${e.tag}${a(e,"className")}${o(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",f=Object.keys(i).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${i[e]}}`).join("");return(0,t.jsx)(r.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(u,{includeFlicking:!1})}
${v}
export default class DemoComponent extends Component {${x}
  public render() {
    return ${c?"<>\n    ":""}<Flicking${h&&` className="${h}"`}${e?` ${Object.keys(e).map(s=>`${s}=${"string"==typeof e[s]?`"${e[s]}"`:`{${e[s]}}`}`).join(" ")}`:""}${l?" plugins={this._plugins}":""}${f}>
      ${s.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e,"className")}${o(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${j}
    </Flicking>${c?`
    ${c.map(e=>`<${e.tag}${a(e,"className")}${o(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},m=({options:e,panels:s,events:i={},methods:n={},plugins:l,siblings:c=[],imports:h=[],viewportClass:x=""})=>{let m=d(e),u=s.filter(e=>e.isSlot),v=l?`,
  data() {
    return {
      plugins: [${g(l)}]
    }
  }`:"",j=u.length?`
  <template #viewport>
    ${u.map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",f=[...(l??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...h],$=Object.keys(n),k=$.length>0?`,
  methods: {
    ${$.map(e=>`${e}: ${n[e].split("\n").map((e,s)=>s>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",b=Object.keys(i).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${i[e]}"`).join("");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.A,{className:"language-html",title:"template",children:`<Flicking${x&&` class="${x}"`}${e?` :options="{ ${m} }"`:""}${l?' :plugins="plugins"':""}${b}>
  ${s.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n  ")}${j}
</Flicking>${c?`
${c.map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,t.jsx)(r.A,{className:"language-js",title:"script",children:`${p(f,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${v}${k}
}`})]})},u=({js:e,react:s,vue3:i,style:c,...a})=>(0,t.jsxs)("div",{children:[(0,t.jsxs)(l.A,{groupId:"cfc",defaultValue:"js",children:[(0,t.jsx)(n.A,{value:"react",label:"React",children:s||(0,t.jsx)(x,{...a})}),(0,t.jsx)(n.A,{value:"vue3",label:"Vue@3",children:i||(0,t.jsx)(m,{...a})}),(0,t.jsx)(n.A,{value:"js",label:"JavaScript",children:e||(0,t.jsx)(h,{...a})})]}),c&&(0,t.jsx)(r.A,{className:"language-css",title:"style",children:`${c}`})]})}}]);