"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["3133"],{74362(e,i,t){t.r(i),t.d(i,{metadata:()=>n,default:()=>x,frontMatter:()=>d,contentTitle:()=>p,toc:()=>h,assets:()=>g});var n=JSON.parse('{"id":"demos/reactive/pagination","title":"Pagination","description":"Build dot pagination using the Reactive API","source":"@site/docs/demos/reactive/pagination.mdx","sourceDirName":"demos/reactive","slug":"/demos/reactive/pagination","permalink":"/flicking-docs-test/docs/demos/reactive/pagination","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/reactive/pagination.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Pagination","id":"pagination","slug":"/demos/reactive/pagination","sidebar_position":2,"description":"Build dot pagination using the Reactive API","keywords":["flicking","carousel","pagination","dot","reactive","currentPanelIndex","totalPanelCount"]},"sidebar":"demosSidebar","previous":{"title":"Progress Bar","permalink":"/flicking-docs-test/docs/demos/reactive/progress-bar"},"next":{"title":"Prev / Next","permalink":"/flicking-docs-test/docs/demos/reactive/prev-next"}}'),l=t(65723),s=t(54187),a=t(27449),c=t(72722);t(22155);let r=`
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

.pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
}

.pagination-btn {
  width: 36px;
  height: 36px;
  border: 2px solid #3498db;
  background: transparent;
  color: #3498db;
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.2s;
}

.pagination-btn:hover {
  background: #3498db;
  color: white;
}

.pagination-btn.active {
  background: #3498db;
  color: white;
}
`,o=()=>{let e=`import React from "react";
import Flicking, { useFlickingReactiveAPI } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "./styles.css";

const COLORS = ["#3498db", "#e74c3c", "#2ecc71", "#9b59b6", "#f39c12"];

export default function App() {
  const flickingRef = React.useRef(null);
  const {
    currentPanelIndex,
    totalPanelCount,
    moveTo
  } = useFlickingReactiveAPI(flickingRef);

  return (
    <div>
      <Flicking ref={flickingRef}>
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

      <div className="pagination">
        {Array.from({ length: totalPanelCount }, (_, i) => (
          <button
            key={i}
            className={\`pagination-btn \${currentPanelIndex === i ? "active" : ""}\`}
            onClick={() => moveTo(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}`,i=(0,l.jsx)(a.A,{template:"react",code:e,css:r}),t=`<script setup>
import { ref } from "vue";
import Flicking, { useFlickingReactiveAPI } from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";

const COLORS = ["#3498db", "#e74c3c", "#2ecc71", "#9b59b6", "#f39c12"];

const flickingRef = ref(null);
const {
  currentPanelIndex,
  totalPanelCount,
  moveTo
} = useFlickingReactiveAPI(flickingRef);
</script>

<template>
  <div>
    <Flicking ref="flickingRef">
      <div
        v-for="index in 5"
        :key="index - 1"
        class="flicking-panel"
        :style="{ backgroundColor: COLORS[(index - 1) % COLORS.length] }"
      >
        {{ index }}
      </div>
    </Flicking>

    <div class="pagination">
      <button
        v-for="i in totalPanelCount"
        :key="i - 1"
        :class="['pagination-btn', { active: currentPanelIndex === i - 1 }]"
        @click="moveTo(i - 1)"
      >
        {{ i }}
      </button>
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

.pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
}

.pagination-btn {
  width: 36px;
  height: 36px;
  border: 2px solid #3498db;
  background: transparent;
  color: #3498db;
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.2s;
}

.pagination-btn:hover {
  background: #3498db;
  color: white;
}

.pagination-btn.active {
  background: #3498db;
  color: white;
}
</style>`,n=(0,l.jsx)(a.A,{template:"vue3",code:t,css:r}),s=`import Flicking, { connectFlickingReactiveAPI } from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

const flicking = new Flicking("#flick");
const reactiveAPI = connectFlickingReactiveAPI(flicking);

// Create pagination buttons
const pagination = document.querySelector(".pagination");
const buttons = [];

for (let i = 0; i < reactiveAPI.totalPanelCount; i++) {
  const btn = document.createElement("button");
  btn.className = "pagination-btn" + (i === 0 ? " active" : "");
  btn.textContent = i + 1;
  btn.addEventListener("click", () => reactiveAPI.moveTo(i));
  buttons.push(btn);
  pagination.appendChild(btn);
}

// Update active button on index change
reactiveAPI.subscribe("currentPanelIndex", (index) => {
  buttons.forEach((btn, i) => {
    btn.classList.toggle("active", i === index);
  });
});`,o=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <div id="flick" class="flicking-viewport">
    <div class="flicking-camera">
      <div class="flicking-panel" style="background: #3498db">1</div>
      <div class="flicking-panel" style="background: #e74c3c">2</div>
      <div class="flicking-panel" style="background: #2ecc71">3</div>
      <div class="flicking-panel" style="background: #9b59b6">4</div>
      <div class="flicking-panel" style="background: #f39c12">5</div>
    </div>
  </div>
  <div class="pagination"></div>
</body>
</html>`,d=(0,l.jsx)(a.A,{template:"vanilla",code:s,html:o,css:r});return(0,l.jsx)(c.A,{options:{},panels:[],react:i,vue3:n,js:d})},d={title:"Pagination",id:"pagination",slug:"/demos/reactive/pagination",sidebar_position:2,description:"Build dot pagination using the Reactive API",keywords:["flicking","carousel","pagination","dot","reactive","currentPanelIndex","totalPanelCount"]},p="Pagination",g={},h=[{value:"Summary",id:"summary",level:2},{value:"Key API",id:"key-api",level:3},{value:"Behavior",id:"behavior",level:3},{value:"Details",id:"details",level:2},{value:"How It Works",id:"how-it-works",level:3},{value:"Related Options",id:"related-options",level:3},{value:"Use Cases",id:"use-cases",level:3},{value:"Related Links",id:"related-links",level:2},{value:"Related API",id:"related-api",level:3},{value:"Related Demos",id:"related-demos",level:3}];function u(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.header,{children:(0,l.jsx)(i.h1,{id:"pagination",children:"Pagination"})}),"\n",(0,l.jsxs)(i.p,{children:["Use ",(0,l.jsx)(i.code,{children:"currentPanelIndex"}),", ",(0,l.jsx)(i.code,{children:"totalPanelCount"}),", and ",(0,l.jsx)(i.code,{children:"moveTo"})," from the Reactive API to build a dot pagination UI that stays in sync with the carousel."]}),"\n",(0,l.jsx)(o,{}),"\n",(0,l.jsx)(i.h2,{id:"summary",children:"Summary"}),"\n",(0,l.jsx)(i.h3,{id:"key-api",children:"Key API"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Property / Method"}),(0,l.jsx)(i.th,{children:"Type"}),(0,l.jsx)(i.th,{children:"Description"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.a,{href:"../../api/interfaces/FlickingReactiveState#currentpanelindex",children:(0,l.jsx)(i.code,{children:"currentPanelIndex"})})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"number"})}),(0,l.jsx)(i.td,{children:"Currently active panel index"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.a,{href:"../../api/interfaces/FlickingReactiveState#totalpanelcount",children:(0,l.jsx)(i.code,{children:"totalPanelCount"})})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"number"})}),(0,l.jsx)(i.td,{children:"Total number of panels"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.a,{href:"../../api/interfaces/FlickingReactiveMethod#moveto",children:(0,l.jsx)(i.code,{children:"moveTo"})})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"(i: number) => Promise"})}),(0,l.jsx)(i.td,{children:"Move to a specific panel"})]})]})]}),"\n",(0,l.jsx)(i.h3,{id:"behavior",children:"Behavior"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"State"}),(0,l.jsx)(i.th,{children:"Dot Style"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Current panel"}),(0,l.jsx)(i.td,{children:"Active (highlighted)"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Other panels"}),(0,l.jsx)(i.td,{children:"Default, click to navigate"})]})]})]}),"\n",(0,l.jsx)(i.h2,{id:"details",children:"Details"}),"\n",(0,l.jsx)(i.h3,{id:"how-it-works",children:"How It Works"}),"\n",(0,l.jsxs)(i.ol,{children:["\n",(0,l.jsxs)(i.li,{children:["Render dot buttons based on ",(0,l.jsx)(i.code,{children:"totalPanelCount"})]}),"\n",(0,l.jsxs)(i.li,{children:["Highlight the dot matching ",(0,l.jsx)(i.code,{children:"currentPanelIndex"})]}),"\n",(0,l.jsxs)(i.li,{children:["On dot click, call ",(0,l.jsx)(i.code,{children:"moveTo(index)"})," to navigate"]}),"\n",(0,l.jsxs)(i.li,{children:["When the user drags to a new panel, ",(0,l.jsx)(i.code,{children:"currentPanelIndex"})," updates automatically and the dots re-sync"]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"related-options",children:"Related Options"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:(0,l.jsx)(i.code,{children:'align: "center"'})}),": Center alignment makes pagination feel most intuitive."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:(0,l.jsx)(i.code,{children:"circular: true"})}),": In circular mode, dots cycle seamlessly as the first and last panels connect."]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"use-cases",children:"Use Cases"}),"\n",(0,l.jsx)(i.admonition,{title:"When to use",type:"info",children:(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"Banner / hero slider position indicator"}),"\n",(0,l.jsx)(i.li,{children:"Image gallery page indicator"}),"\n",(0,l.jsx)(i.li,{children:"Mobile onboarding step dots"}),"\n"]})}),"\n",(0,l.jsx)(i.h2,{id:"related-links",children:"Related Links"}),"\n",(0,l.jsx)(i.h3,{id:"related-api",children:"Related API"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"../../api/interfaces/FlickingReactiveState#currentpanelindex",children:(0,l.jsx)(i.code,{children:"currentPanelIndex"})}),": Active panel index"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"../../api/interfaces/FlickingReactiveMethod#moveto",children:(0,l.jsx)(i.code,{children:"moveTo"})}),": Navigate to panel"]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"related-demos",children:"Related Demos"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"./prev-next",children:"Prev / Next"}),": Previous/Next button navigation"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"./progress-bar",children:"Progress Bar"}),": Scroll progress indicator"]}),"\n"]})]})}function x(e={}){let{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},27449(e,i,t){t.d(i,{A:()=>d});var n=t(65723),l=t(19612);t(22155);let s="^4.11.4",a={react:{"@egjs/react-flicking":s,"@egjs/flicking":s},vue3:{"@egjs/vue3-flicking":s,"@egjs/flicking":s},vanilla:{"@egjs/flicking":s}},c=`<!DOCTYPE html>
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
</html>`,r=`import { StrictMode } from "react";
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
`;function d({code:e,html:i,template:t="react",dependencies:s={},files:d={},css:p=""}){var g;let h,u,x;return(0,n.jsx)(l.OZ,{template:"vue3"===t?"vue":"vanilla"===t?"vanilla":"react",files:(x={"/styles.css":{code:u=p?`${o}
${p}`:o},...d},"react"===t?{"/App.tsx":{code:e},"/index.js":{code:r,hidden:!0},...x}:"vue3"===t?{"/src/App.vue":{code:e},...x}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),t=[],n=[],l=!1;for(let e of i)l?n.push(e):e.trimStart().startsWith("import ")||""===e.trim()?t.push(e.replace('"../styles.css"','"./styles.css"')):(l=!0,n.push(e));for(;n.length>0&&""===n[n.length-1].trim();)n.pop();return[...t,"","const _run = () => {",...n.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:u},"/index.html":{code:(h="<style>.flicking-viewport{opacity:0}</style>",(g=i||c).includes("</head>")?g.replace("</head>",`${h}
</head>`):h+g)},...d}),customSetup:{dependencies:{...a[t],...s}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===t?["/App.tsx","/styles.css"]:"vue3"===t?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===t?"/App.tsx":"vue3"===t?"/src/App.vue":"/src/index.js"}})}},72722(e,i,t){t.d(i,{A:()=>m});var n=t(65723),l=t(34622),s=t(7210),a=t(78863);t(22155);let c=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,r=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",o=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${c(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",d=e=>`${Object.keys(e).map(i=>`${i}: ${c(e[i],"'")}`).join(", ")}`,p=(e,{prefix:i,includeFlicking:t=!0}={})=>{let n=t?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&n.push(...e),`${n.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},g=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${d(e[1])} }`:e[1]??""}`).join(", ")})`,h=({options:e,panels:i,events:t={},methods:s={},plugins:a=[],siblings:d=[],imports:g=[],viewportClass:h=""})=>{let u=e=>`${Object.keys(e).map(i=>`${i}: ${c(e[i])}`).join(",\n  ")}`,x=Object.keys(s).map(e=>`const ${e} = ${s[e]};
`).join(""),m=e?`const flicking = new Flicking("#flick", {
  ${u(e)}
});

`:'const flicking = new Flicking("#flick")',j=a.length>0?`flicking.addPlugins(${a.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?u(e[1]):e[1]??""}
}`:""})`)});`:"",v=[...a.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],f=Object.keys(t).map(e=>{let i=t[e];return`flicking.on("${e}", ${i})
`}).join(""),k=i.filter(e=>e.isSlot);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${h&&` ${h}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${k.length?`
  ${k.map(e=>`<${e.tag}${r(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${d?"\n"+d.map(e=>`<${e.tag}${r(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,n.jsx)(l.A,{className:"language-js",title:"js",children:`${p(v)}

${x}${m}${j}${f}`.trim()})]})},u=({options:e,panels:i,events:t={},methods:s={},plugins:a,siblings:c,imports:d=[],viewportClass:h=""})=>{let u=a?`
  private _plugins = [${g(a)}];
`:"",x=i.filter(e=>e.isSlot),m=[["{ Component }","react"],[x.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],j=Object.keys(s).map(e=>`
const ${e} = ${s[e]};`).join("");j&&(j+="\n"),a&&m.push([`{ ${a.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),m.push(...d);let v=x.length?`
      <ViewportSlot>
        ${x.map(e=>`<${e.tag}${r(e,"className")}${o(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",f=Object.keys(t).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${t[e]}}`).join("");return(0,n.jsx)(l.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(m,{includeFlicking:!1})}
${j}
export default class DemoComponent extends Component {${u}
  public render() {
    return ${c?"<>\n    ":""}<Flicking${h&&` className="${h}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${a?" plugins={this._plugins}":""}${f}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e,"className")}${o(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${v}
    </Flicking>${c?`
    ${c.map(e=>`<${e.tag}${r(e,"className")}${o(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},x=({options:e,panels:i,events:t={},methods:s={},plugins:a,siblings:c=[],imports:h=[],viewportClass:u=""})=>{let x=d(e),m=i.filter(e=>e.isSlot),j=a?`,
  data() {
    return {
      plugins: [${g(a)}]
    }
  }`:"",v=m.length?`
  <template #viewport>
    ${m.map(e=>`<${e.tag}${r(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",f=[...(a??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...h],k=Object.keys(s),$=k.length>0?`,
  methods: {
    ${k.map(e=>`${e}: ${s[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",b=Object.keys(t).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${t[e]}"`).join("");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.A,{className:"language-html",title:"template",children:`<Flicking${u&&` class="${u}"`}${e?` :options="{ ${x} }"`:""}${a?' :plugins="plugins"':""}${b}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n  ")}${v}
</Flicking>${c?`
${c.map(e=>`<${e.tag}${r(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,n.jsx)(l.A,{className:"language-js",title:"script",children:`${p(f,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${j}${$}
}`})]})},m=({js:e,react:i,vue3:t,style:c,...r})=>(0,n.jsxs)("div",{children:[(0,n.jsxs)(a.A,{groupId:"cfc",defaultValue:"js",children:[(0,n.jsx)(s.A,{value:"react",label:"React",children:i||(0,n.jsx)(u,{...r})}),(0,n.jsx)(s.A,{value:"vue3",label:"Vue@3",children:t||(0,n.jsx)(x,{...r})}),(0,n.jsx)(s.A,{value:"js",label:"JavaScript",children:e||(0,n.jsx)(h,{...r})})]}),c&&(0,n.jsx)(l.A,{className:"language-css",title:"style",children:`${c}`})]})}}]);