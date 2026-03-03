"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["8018"],{29857(e,s,i){i.r(s),i.d(s,{metadata:()=>t,default:()=>j,frontMatter:()=>d,contentTitle:()=>p,toc:()=>h,assets:()=>g});var t=JSON.parse('{"id":"demos/advanced/progress-bar","title":"Progress Bar","description":"Reactive API\uC758 progress\uB97C \uD65C\uC6A9\uD55C \uC9C4\uD589\uB3C4 \uD45C\uC2DC","source":"@site/docs/demos/advanced/progress-bar.mdx","sourceDirName":"demos/advanced","slug":"/demos/advanced/progress-bar","permalink":"/flicking-docs-test/docs/demos/advanced/progress-bar","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/advanced/progress-bar.mdx","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"Progress Bar","id":"progress-bar","slug":"/demos/advanced/progress-bar","sidebar_position":12,"description":"Reactive API\uC758 progress\uB97C \uD65C\uC6A9\uD55C \uC9C4\uD589\uB3C4 \uD45C\uC2DC","keywords":["flicking","carousel","progress","reactive","\uC9C4\uD589\uB3C4","freeScroll"]},"sidebar":"demosSidebar","previous":{"title":"Coverflow","permalink":"/flicking-docs-test/docs/demos/advanced/coverflow"},"next":{"title":"Pagination","permalink":"/flicking-docs-test/docs/demos/advanced/pagination"}}'),r=i(65723),n=i(54187),l=i(27449),c=i(72722);i(22155);let o=`
.flicking-panel {
  width: 300px;
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

.progress-container {
  margin-top: 12px;
  background: #eee;
  border-radius: 4px;
  height: 8px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  border-radius: 4px;
  transition: width 0.05s;
}

.progress-text {
  margin-top: 4px;
  text-align: center;
  font-size: 13px;
  color: #888;
}
`,a=()=>{let e=`import Flicking from "@egjs/react-flicking";
import { useFlickingReactiveAPI } from "@egjs/react-flicking";
import "@egjs/flicking/dist/flicking.css";
import { useRef } from "react";

const COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6"];

export default function App() {
  const flickingRef = useRef(null);
  const { progress } = useFlickingReactiveAPI(flickingRef);

  return (
    <div>
      <Flicking ref={flickingRef} moveType="freeScroll" bound={true}>
        {COLORS.map((color, i) => (
          <div className="flicking-panel" key={i} style={{ background: color }}>
            {i + 1}
          </div>
        ))}
      </Flicking>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: \`\${progress}%\` }} />
      </div>
      <div className="progress-text">{progress.toFixed(1)}%</div>
    </div>
  );
}`,s=`<template>
  <div>
    <Flicking :options="{ moveType: 'freeScroll', bound: true }"
              @move="onMove" @move-end="onMove" @ready="onReady">
      <div v-for="(color, i) in COLORS" :key="i"
           class="flicking-panel" :style="{ background: color }">
        {{ i + 1 }}
      </div>
    </Flicking>
    <div class="progress-container">
      <div class="progress-bar" :style="{ width: progress + '%' }" />
    </div>
    <div class="progress-text">{{ progress.toFixed(1) }}%</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Flicking from "@egjs/vue3-flicking";
import "@egjs/flicking/dist/flicking.css";

const COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6"];
const progress = ref(0);

const updateProgress = (e) => {
  const flicking = e.currentTarget;
  const cam = flicking.camera;
  const range = cam.range;
  const pos = cam.position - range.min;
  const total = range.max - range.min;
  progress.value = total > 0 ? (pos / total) * 100 : 0;
};

const onMove = updateProgress;
const onReady = updateProgress;
</script>`,i=`import Flicking, { connectFlickingReactiveAPI } from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";

const COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6"];

const camera = document.querySelector(".flicking-camera");
COLORS.forEach((color, i) => {
  const panel = document.createElement("div");
  panel.className = "flicking-panel";
  panel.style.background = color;
  panel.textContent = i + 1;
  camera.appendChild(panel);
});

const flicking = new Flicking("#flick", {
  moveType: "freeScroll",
  bound: true
});

const reactive = connectFlickingReactiveAPI(flicking);
const barEl = document.querySelector(".progress-bar");
const textEl = document.querySelector(".progress-text");

const update = () => {
  const p = reactive.progress;
  barEl.style.width = p + "%";
  textEl.textContent = p.toFixed(1) + "%";
};

reactive.subscribe("progress", update);
flicking.on("ready", update);`,t=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <div id="app">
    <div id="flick" class="flicking-viewport">
      <div class="flicking-camera"></div>
    </div>
    <div class="progress-container">
      <div class="progress-bar" style="width: 0%"></div>
    </div>
    <div class="progress-text">0.0%</div>
  </div>
</body>
</html>`;return(0,r.jsx)(c.A,{options:{moveType:"freeScroll",bound:!0},panels:[],react:(0,r.jsx)(l.A,{template:"react",code:e,css:o}),vue3:(0,r.jsx)(l.A,{template:"vue3",code:s,css:o}),js:(0,r.jsx)(l.A,{template:"vanilla",code:i,html:t,css:o})})},d={title:"Progress Bar",id:"progress-bar",slug:"/demos/advanced/progress-bar",sidebar_position:12,description:"Reactive API\uC758 progress\uB97C \uD65C\uC6A9\uD55C \uC9C4\uD589\uB3C4 \uD45C\uC2DC",keywords:["flicking","carousel","progress","reactive","\uC9C4\uD589\uB3C4","freeScroll"]},p="Progress Bar",g={},h=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 API",id:"\uC8FC\uC694-api",level:3},{value:"\uB3D9\uC791",id:"\uB3D9\uC791",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"progress\uB780?",id:"progress\uB780",level:3},{value:"\uC5F0\uAD00 \uC635\uC158",id:"\uC5F0\uAD00-\uC635\uC158",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 API",id:"\uAD00\uB828-api",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function m(e){let s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"progress-bar",children:"Progress Bar"})}),"\n",(0,r.jsxs)(s.p,{children:["Reactive API\uC758 ",(0,r.jsx)(s.code,{children:"progress"}),"\uB97C \uD65C\uC6A9\uD558\uC5EC \uC2A4\uD06C\uB864 \uC9C4\uD589\uB3C4\uB97C \uC2DC\uAC01\uC801\uC73C\uB85C \uD45C\uC2DC\uD569\uB2C8\uB2E4."]}),"\n",(0,r.jsx)(a,{}),"\n",(0,r.jsx)(s.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,r.jsx)(s.h3,{id:"\uC8FC\uC694-api",children:"\uC8FC\uC694 API"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\uD56D\uBAA9"}),(0,r.jsx)(s.th,{children:"\uD0C0\uC785"}),(0,r.jsx)(s.th,{children:"\uC124\uBA85"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../api/interfaces/FlickingReactiveState#progress",children:(0,r.jsx)(s.code,{children:"progress"})})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"number"})}),(0,r.jsx)(s.td,{children:"\uC804\uCCB4 \uC2A4\uD06C\uB864 \uC9C4\uD589\uB3C4 (0~100)"})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"\uB3D9\uC791",children:"\uB3D9\uC791"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\uC704\uCE58"}),(0,r.jsx)(s.th,{children:"progress"}),(0,r.jsx)(s.th,{children:"\uBC14 \uB108\uBE44"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"\uC2DC\uC791"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0%"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"\uC911\uAC04"}),(0,r.jsx)(s.td,{children:"~50"}),(0,r.jsx)(s.td,{children:"~50%"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"\uB05D"}),(0,r.jsx)(s.td,{children:"100"}),(0,r.jsx)(s.td,{children:"100%"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,r.jsx)(s.h3,{id:"progress\uB780",children:"progress\uB780?"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"progress"}),"\uB294 \uC804\uCCB4 \uC2A4\uD06C\uB864 \uBC94\uC704\uC5D0\uC11C \uD604\uC7AC \uCE74\uBA54\uB77C \uC704\uCE58\uC758 \uBC31\uBD84\uC728\uC785\uB2C8\uB2E4. ",(0,r.jsx)(s.code,{children:'moveType: "freeScroll"'}),"\uACFC \uD568\uAED8 \uC0AC\uC6A9\uD558\uBA74 \uD328\uB110 \uACBD\uACC4\uC5D0 \uC2A4\uB0C5\uB418\uC9C0 \uC54A\uC544 \uC5F0\uC18D\uC801\uC778 \uC9C4\uD589\uB3C4\uB97C \uD45C\uD604\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n",(0,r.jsx)(s.h3,{id:"\uC5F0\uAD00-\uC635\uC158",children:"\uC5F0\uAD00 \uC635\uC158"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsxs)(s.strong,{children:[(0,r.jsx)(s.code,{children:'moveType: "freeScroll"'}),"\uACFC\uC758 \uAD00\uACC4"]}),": \uC790\uC720 \uC2A4\uD06C\uB864\uC5D0\uC11C \uC5F0\uC18D\uC801 progress \uBCC0\uD654"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsxs)(s.strong,{children:[(0,r.jsx)(s.code,{children:"bound: true"}),"\uC640\uC758 \uAD00\uACC4"]}),": \uC591 \uB05D\uC5D0\uC11C progress\uAC00 \uC815\uD655\uD788 0/100\uC774 \uB418\uB3C4\uB85D \uBCF4\uC7A5"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,r.jsx)(s.admonition,{title:"\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\uC774\uBBF8\uC9C0 \uAC24\uB7EC\uB9AC\uC758 \uC2A4\uD06C\uB864 \uC9C4\uD589\uB3C4 \uD45C\uC2DC"}),"\n",(0,r.jsx)(s.li,{children:"\uC628\uBCF4\uB529 \uD654\uBA74\uC758 \uB2E8\uACC4 \uD45C\uC2DC"}),"\n",(0,r.jsx)(s.li,{children:"\uCF58\uD150\uCE20 \uC5F4\uB78C \uC9C4\uD589\uB960"}),"\n"]})}),"\n",(0,r.jsx)(s.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,r.jsx)(s.h3,{id:"\uAD00\uB828-api",children:"\uAD00\uB828 API"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"../../api/interfaces/FlickingReactiveState#progress",children:(0,r.jsx)(s.code,{children:"progress"})}),": \uC804\uCCB4 \uC9C4\uD589\uB3C4"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"../../api/functions/connectFlickingReactiveAPI",children:(0,r.jsx)(s.code,{children:"connectFlickingReactiveAPI"})}),": Reactive API \uC5F0\uACB0"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"./pagination",children:"Pagination"}),": \uD328\uB110\uBCC4 dot \uB124\uBE44\uAC8C\uC774\uC158"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"./prev-next",children:"Prev / Next"}),": \uC774\uC804/\uB2E4\uC74C \uBC84\uD2BC \uB124\uBE44\uAC8C\uC774\uC158"]}),"\n"]})]})}function j(e={}){let{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},27449(e,s,i){i.d(s,{A:()=>d});var t=i(65723),r=i(19612);i(22155);let n="^4.11.4",l={react:{"@egjs/react-flicking":n,"@egjs/flicking":n},vue3:{"@egjs/vue3-flicking":n,"@egjs/flicking":n},vanilla:{"@egjs/flicking":n}},c=`<!DOCTYPE html>
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
</html>`,o=`import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>);`,a=`
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
`;function d({code:e,html:s,template:i="react",dependencies:n={},files:d={},css:p=""}){var g;let h,m,j;return(0,t.jsx)(r.OZ,{template:"vue3"===i?"vue":"vanilla"===i?"vanilla":"react",files:(j={"/styles.css":{code:m=p?`${a}
${p}`:a},...d},"react"===i?{"/App.tsx":{code:e},"/index.js":{code:o,hidden:!0},...j}:"vue3"===i?{"/src/App.vue":{code:e},...j}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let s=e.split("\n"),i=[],t=[],r=!1;for(let e of s)r?t.push(e):e.trimStart().startsWith("import ")||""===e.trim()?i.push(e.replace('"../styles.css"','"./styles.css"')):(r=!0,t.push(e));for(;t.length>0&&""===t[t.length-1].trim();)t.pop();return[...i,"","const _run = () => {",...t.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:m},"/index.html":{code:(h="<style>.flicking-viewport{opacity:0}</style>",(g=s||c).includes("</head>")?g.replace("</head>",`${h}
</head>`):h+g)},...d}),customSetup:{dependencies:{...l[i],...n}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===i?["/App.tsx","/styles.css"]:"vue3"===i?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===i?"/App.tsx":"vue3"===i?"/src/App.vue":"/src/index.js"}})}},72722(e,s,i){i.d(s,{A:()=>u});var t=i(65723),r=i(34622),n=i(7210),l=i(78863);i(22155);let c=(e,s='"')=>"string"==typeof e?`${s}${e}${s}`:e,o=(e,s="class")=>e.class?` ${s}="${e.class}"`:"",a=(e,s=!1)=>e.style?s?` style={{ ${Object.keys(e.style).map(s=>`${s}: ${c(e.style[s])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(s=>`${s}: ${e.style[s]};`).join(" ")}"`:"",d=e=>`${Object.keys(e).map(s=>`${s}: ${c(e[s],"'")}`).join(", ")}`,p=(e,{prefix:s,includeFlicking:i=!0}={})=>{let t=i?[["Flicking",`@egjs/${s?`${s}-`:""}flicking`]]:[];return e&&t.push(...e),`${t.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},g=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${d(e[1])} }`:e[1]??""}`).join(", ")})`,h=({options:e,panels:s,events:i={},methods:n={},plugins:l=[],siblings:d=[],imports:g=[],viewportClass:h=""})=>{let m=e=>`${Object.keys(e).map(s=>`${s}: ${c(e[s])}`).join(",\n  ")}`,j=Object.keys(n).map(e=>`const ${e} = ${n[e]};
`).join(""),u=e?`const flicking = new Flicking("#flick", {
  ${m(e)}
});

`:'const flicking = new Flicking("#flick")',x=l.length>0?`flicking.addPlugins(${l.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?m(e[1]):e[1]??""}
}`:""})`)});`:"",v=[...l.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],f=Object.keys(i).map(e=>{let s=i[e];return`flicking.on("${e}", ${s})
`}).join(""),$=s.filter(e=>e.isSlot);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${h&&` ${h}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${s.filter(e=>!e.isSlot).map(e=>`<${e.tag}${o(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${$.length?`
  ${$.map(e=>`<${e.tag}${o(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${d?"\n"+d.map(e=>`<${e.tag}${o(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,t.jsx)(r.A,{className:"language-js",title:"js",children:`${p(v)}

${j}${u}${x}${f}`.trim()})]})},m=({options:e,panels:s,events:i={},methods:n={},plugins:l,siblings:c,imports:d=[],viewportClass:h=""})=>{let m=l?`
  private _plugins = [${g(l)}];
`:"",j=s.filter(e=>e.isSlot),u=[["{ Component }","react"],[j.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],x=Object.keys(n).map(e=>`
const ${e} = ${n[e]};`).join("");x&&(x+="\n"),l&&u.push([`{ ${l.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),u.push(...d);let v=j.length?`
      <ViewportSlot>
        ${j.map(e=>`<${e.tag}${o(e,"className")}${a(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",f=Object.keys(i).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${i[e]}}`).join("");return(0,t.jsx)(r.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(u,{includeFlicking:!1})}
${x}
export default class DemoComponent extends Component {${m}
  public render() {
    return ${c?"<>\n    ":""}<Flicking${h&&` className="${h}"`}${e?` ${Object.keys(e).map(s=>`${s}=${"string"==typeof e[s]?`"${e[s]}"`:`{${e[s]}}`}`).join(" ")}`:""}${l?" plugins={this._plugins}":""}${f}>
      ${s.filter(e=>!e.isSlot).map(e=>`<${e.tag}${o(e,"className")}${a(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${v}
    </Flicking>${c?`
    ${c.map(e=>`<${e.tag}${o(e,"className")}${a(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},j=({options:e,panels:s,events:i={},methods:n={},plugins:l,siblings:c=[],imports:h=[],viewportClass:m=""})=>{let j=d(e),u=s.filter(e=>e.isSlot),x=l?`,
  data() {
    return {
      plugins: [${g(l)}]
    }
  }`:"",v=u.length?`
  <template #viewport>
    ${u.map(e=>`<${e.tag}${o(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",f=[...(l??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...h],$=Object.keys(n),k=$.length>0?`,
  methods: {
    ${$.map(e=>`${e}: ${n[e].split("\n").map((e,s)=>s>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",b=Object.keys(i).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${i[e]}"`).join("");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.A,{className:"language-html",title:"template",children:`<Flicking${m&&` class="${m}"`}${e?` :options="{ ${j} }"`:""}${l?' :plugins="plugins"':""}${b}>
  ${s.filter(e=>!e.isSlot).map(e=>`<${e.tag}${o(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n  ")}${v}
</Flicking>${c?`
${c.map(e=>`<${e.tag}${o(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,t.jsx)(r.A,{className:"language-js",title:"script",children:`${p(f,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${x}${k}
}`})]})},u=({js:e,react:s,vue3:i,style:c,...o})=>(0,t.jsxs)("div",{children:[(0,t.jsxs)(l.A,{groupId:"cfc",defaultValue:"js",children:[(0,t.jsx)(n.A,{value:"react",label:"React",children:s||(0,t.jsx)(m,{...o})}),(0,t.jsx)(n.A,{value:"vue3",label:"Vue@3",children:i||(0,t.jsx)(j,{...o})}),(0,t.jsx)(n.A,{value:"js",label:"JavaScript",children:e||(0,t.jsx)(h,{...o})})]}),c&&(0,t.jsx)(r.A,{className:"language-css",title:"style",children:`${c}`})]})}}]);