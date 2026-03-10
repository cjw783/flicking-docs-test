"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["7296"],{31147(e,i,t){t.r(i),t.d(i,{metadata:()=>n,default:()=>g,frontMatter:()=>o,contentTitle:()=>h,toc:()=>x,assets:()=>p});var n=JSON.parse('{"id":"demos/reactive/prev-next","title":"Prev / Next","description":"Build previous/next navigation buttons using the Reactive API","source":"@site/docs/demos/reactive/prev-next.mdx","sourceDirName":"demos/reactive","slug":"/demos/reactive/prev-next","permalink":"/flicking-docs-test/docs/demos/reactive/prev-next","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/reactive/prev-next.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Prev / Next","id":"prev-next","slug":"/demos/reactive/prev-next","sidebar_position":3,"description":"Build previous/next navigation buttons using the Reactive API","keywords":["flicking","carousel","prev","next","navigation","reactive","isReachStart","isReachEnd"]},"sidebar":"demosSidebar","previous":{"title":"Pagination","permalink":"/flicking-docs-test/docs/demos/reactive/pagination"},"next":{"title":"Parallax","permalink":"/flicking-docs-test/docs/demos/reactive/parallax"}}'),s=t(65723),l=t(54187),c=t(27449),a=t(72722);t(22155);let r=`
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

.controls {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 16px;
}

.nav-btn {
  padding: 10px 24px;
  border: none;
  background: #3498db;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.2s;
}

.nav-btn:hover:not(:disabled) {
  background: #2980b9;
}

.nav-btn:disabled {
  background: #bdc3c7;
  cursor: not-allowed;
}
`,d=()=>{let e=`import React from "react";
import Flicking, { useFlickingReactiveAPI } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "./styles.css";

const COLORS = ["#3498db", "#e74c3c", "#2ecc71", "#9b59b6", "#f39c12"];

export default function App() {
  const flickingRef = React.useRef(null);
  const {
    currentPanelIndex,
    isReachStart,
    isReachEnd,
    moveTo
  } = useFlickingReactiveAPI(flickingRef);

  const handlePrev = () => {
    if (!isReachStart) {
      moveTo(currentPanelIndex - 1);
    }
  };

  const handleNext = () => {
    if (!isReachEnd) {
      moveTo(currentPanelIndex + 1);
    }
  };

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

      <div className="controls">
        <button
          className="nav-btn"
          onClick={handlePrev}
          disabled={isReachStart}
        >
          Prev
        </button>
        <button
          className="nav-btn"
          onClick={handleNext}
          disabled={isReachEnd}
        >
          Next
        </button>
      </div>
    </div>
  );
}`,i=(0,s.jsx)(c.A,{template:"react",code:e,css:r}),t=`<script setup>
import { ref } from "vue";
import Flicking, { useFlickingReactiveAPI } from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";

const COLORS = ["#3498db", "#e74c3c", "#2ecc71", "#9b59b6", "#f39c12"];

const flickingRef = ref(null);
const {
  currentPanelIndex,
  isReachStart,
  isReachEnd,
  moveTo
} = useFlickingReactiveAPI(flickingRef);

const handlePrev = () => {
  if (!isReachStart.value) {
    moveTo(currentPanelIndex.value - 1);
  }
};

const handleNext = () => {
  if (!isReachEnd.value) {
    moveTo(currentPanelIndex.value + 1);
  }
};
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

    <div class="controls">
      <button
        class="nav-btn"
        :disabled="isReachStart"
        @click="handlePrev"
      >
        Prev
      </button>
      <button
        class="nav-btn"
        :disabled="isReachEnd"
        @click="handleNext"
      >
        Next
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

.controls {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 16px;
}

.nav-btn {
  padding: 10px 24px;
  border: none;
  background: #3498db;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.2s;
}

.nav-btn:hover:not(:disabled) {
  background: #2980b9;
}

.nav-btn:disabled {
  background: #bdc3c7;
  cursor: not-allowed;
}
</style>`,n=(0,s.jsx)(c.A,{template:"vue3",code:t,css:r}),l=`import Flicking, { connectFlickingReactiveAPI } from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

const flicking = new Flicking("#flick");
const reactiveAPI = connectFlickingReactiveAPI(flicking);

const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

prevBtn.addEventListener("click", () => {
  if (!reactiveAPI.isReachStart) {
    reactiveAPI.moveTo(flicking.index - 1);
  }
});

nextBtn.addEventListener("click", () => {
  if (!reactiveAPI.isReachEnd) {
    reactiveAPI.moveTo(flicking.index + 1);
  }
});

// Update button state
reactiveAPI.subscribe("isReachStart", (value) => {
  prevBtn.disabled = value;
});

reactiveAPI.subscribe("isReachEnd", (value) => {
  nextBtn.disabled = value;
});`,d=`<!DOCTYPE html>
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
  <div class="controls">
    <button id="prev-btn" class="nav-btn" disabled>Prev</button>
    <button id="next-btn" class="nav-btn">Next</button>
  </div>
</body>
</html>`,o=(0,s.jsx)(c.A,{template:"vanilla",code:l,html:d,css:r});return(0,s.jsx)(a.A,{options:{},panels:[],react:i,vue3:n,js:o})},o={title:"Prev / Next",id:"prev-next",slug:"/demos/reactive/prev-next",sidebar_position:3,description:"Build previous/next navigation buttons using the Reactive API",keywords:["flicking","carousel","prev","next","navigation","reactive","isReachStart","isReachEnd"]},h="Prev / Next",p={},x=[{value:"Summary",id:"summary",level:2},{value:"Key API",id:"key-api",level:3},{value:"Button States",id:"button-states",level:3},{value:"Details",id:"details",level:2},{value:"How It Works",id:"how-it-works",level:3},{value:"Related Options",id:"related-options",level:3},{value:"Use Cases",id:"use-cases",level:3},{value:"Related Links",id:"related-links",level:2},{value:"Related API",id:"related-api",level:3},{value:"Related Demos",id:"related-demos",level:3}];function u(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"prev--next",children:"Prev / Next"})}),"\n",(0,s.jsxs)(i.p,{children:["Use ",(0,s.jsx)(i.code,{children:"isReachStart"}),", ",(0,s.jsx)(i.code,{children:"isReachEnd"}),", and ",(0,s.jsx)(i.code,{children:"moveTo"})," from the Reactive API to build navigation buttons that automatically disable at the carousel boundaries."]}),"\n",(0,s.jsx)(d,{}),"\n",(0,s.jsx)(i.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(i.h3,{id:"key-api",children:"Key API"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Property / Method"}),(0,s.jsx)(i.th,{children:"Type"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingReactiveState#isreachstart",children:(0,s.jsx)(i.code,{children:"isReachStart"})})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"boolean"})}),(0,s.jsx)(i.td,{children:"Whether the first panel is active"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingReactiveState#isreachend",children:(0,s.jsx)(i.code,{children:"isReachEnd"})})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"boolean"})}),(0,s.jsx)(i.td,{children:"Whether the last panel is active"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingReactiveState#currentpanelindex",children:(0,s.jsx)(i.code,{children:"currentPanelIndex"})})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"number"})}),(0,s.jsx)(i.td,{children:"Currently active panel index"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingReactiveMethod#moveto",children:(0,s.jsx)(i.code,{children:"moveTo"})})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"(i: number) => Promise"})}),(0,s.jsx)(i.td,{children:"Move to a specific panel"})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"button-states",children:"Button States"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Position"}),(0,s.jsx)(i.th,{children:"Prev Button"}),(0,s.jsx)(i.th,{children:"Next Button"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:["First panel (",(0,s.jsx)(i.code,{children:"isReachStart"}),")"]}),(0,s.jsx)(i.td,{children:"disabled"}),(0,s.jsx)(i.td,{children:"enabled"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Middle panel"}),(0,s.jsx)(i.td,{children:"enabled"}),(0,s.jsx)(i.td,{children:"enabled"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:["Last panel (",(0,s.jsx)(i.code,{children:"isReachEnd"}),")"]}),(0,s.jsx)(i.td,{children:"enabled"}),(0,s.jsx)(i.td,{children:"disabled"})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"details",children:"Details"}),"\n",(0,s.jsx)(i.h3,{id:"how-it-works",children:"How It Works"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Disable the Prev button when ",(0,s.jsx)(i.code,{children:"isReachStart"})," is ",(0,s.jsx)(i.code,{children:"true"})]}),"\n",(0,s.jsxs)(i.li,{children:["Disable the Next button when ",(0,s.jsx)(i.code,{children:"isReachEnd"})," is ",(0,s.jsx)(i.code,{children:"true"})]}),"\n",(0,s.jsxs)(i.li,{children:["Prev click: ",(0,s.jsx)(i.code,{children:"moveTo(currentPanelIndex - 1)"})]}),"\n",(0,s.jsxs)(i.li,{children:["Next click: ",(0,s.jsx)(i.code,{children:"moveTo(currentPanelIndex + 1)"})]}),"\n",(0,s.jsx)(i.li,{children:"Button states auto-sync when the user drags to a new panel"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"related-options",children:"Related Options"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"circular: true"})}),": In circular mode, ",(0,s.jsx)(i.code,{children:"isReachStart"})," and ",(0,s.jsx)(i.code,{children:"isReachEnd"})," are always ",(0,s.jsx)(i.code,{children:"false"}),", so both buttons remain enabled at all times."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"use-cases",children:"Use Cases"}),"\n",(0,s.jsx)(i.admonition,{title:"When to use",type:"info",children:(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Desktop carousels where drag is less discoverable"}),"\n",(0,s.jsx)(i.li,{children:"Accessibility (a11y) keyboard/button navigation"}),"\n",(0,s.jsx)(i.li,{children:"Touch-disabled environments"}),"\n"]})}),"\n",(0,s.jsx)(i.h2,{id:"related-links",children:"Related Links"}),"\n",(0,s.jsx)(i.h3,{id:"related-api",children:"Related API"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingReactiveState#isreachstart",children:(0,s.jsx)(i.code,{children:"isReachStart"})}),": Start boundary flag"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingReactiveState#isreachend",children:(0,s.jsx)(i.code,{children:"isReachEnd"})}),": End boundary flag"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"related-demos",children:"Related Demos"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"./pagination",children:"Pagination"}),": Dot pagination"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"./progress-bar",children:"Progress Bar"}),": Scroll progress indicator"]}),"\n"]})]})}function g(e={}){let{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},27449(e,i,t){t.d(i,{A:()=>o});var n=t(65723),s=t(19612);t(22155);let l="^4.11.4",c={react:{"@egjs/react-flicking":l,"@egjs/flicking":l},vue3:{"@egjs/vue3-flicking":l,"@egjs/flicking":l},vanilla:{"@egjs/flicking":l}},a=`<!DOCTYPE html>
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
  </StrictMode>);`,d=`
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
`;function o({code:e,html:i,template:t="react",dependencies:l={},files:o={},css:h=""}){var p;let x,u,g;return(0,n.jsx)(s.OZ,{template:"vue3"===t?"vue":"vanilla"===t?"vanilla":"react",files:(g={"/styles.css":{code:u=h?`${d}
${h}`:d},...o},"react"===t?{"/App.tsx":{code:e},"/index.js":{code:r,hidden:!0},...g}:"vue3"===t?{"/src/App.vue":{code:e},...g}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),t=[],n=[],s=!1;for(let e of i)s?n.push(e):e.trimStart().startsWith("import ")||""===e.trim()?t.push(e.replace('"../styles.css"','"./styles.css"')):(s=!0,n.push(e));for(;n.length>0&&""===n[n.length-1].trim();)n.pop();return[...t,"","const _run = () => {",...n.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:u},"/index.html":{code:(x="<style>.flicking-viewport{opacity:0}</style>",(p=i||a).includes("</head>")?p.replace("</head>",`${x}
</head>`):x+p)},...o}),customSetup:{dependencies:{...c[t],...l}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===t?["/App.tsx","/styles.css"]:"vue3"===t?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===t?"/App.tsx":"vue3"===t?"/src/App.vue":"/src/index.js"}})}},72722(e,i,t){t.d(i,{A:()=>v});var n=t(65723),s=t(34622),l=t(7210),c=t(78863);t(22155);let a=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,r=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",d=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${a(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(i=>`${i}: ${a(e[i],"'")}`).join(", ")}`,h=(e,{prefix:i,includeFlicking:t=!0}={})=>{let n=t?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&n.push(...e),`${n.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},p=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,x=({options:e,panels:i,events:t={},methods:l={},plugins:c=[],siblings:o=[],imports:p=[],viewportClass:x=""})=>{let u=e=>`${Object.keys(e).map(i=>`${i}: ${a(e[i])}`).join(",\n  ")}`,g=Object.keys(l).map(e=>`const ${e} = ${l[e]};
`).join(""),v=e?`const flicking = new Flicking("#flick", {
  ${u(e)}
});

`:'const flicking = new Flicking("#flick")',j=c.length>0?`flicking.addPlugins(${c.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?u(e[1]):e[1]??""}
}`:""})`)});`:"",m=[...c.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...p],f=Object.keys(t).map(e=>{let i=t[e];return`flicking.on("${e}", ${i})
`}).join(""),b=i.filter(e=>e.isSlot);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${x&&` ${x}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${b.length?`
  ${b.map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,n.jsx)(s.A,{className:"language-js",title:"js",children:`${h(m)}

${g}${v}${j}${f}`.trim()})]})},u=({options:e,panels:i,events:t={},methods:l={},plugins:c,siblings:a,imports:o=[],viewportClass:x=""})=>{let u=c?`
  private _plugins = [${p(c)}];
`:"",g=i.filter(e=>e.isSlot),v=[["{ Component }","react"],[g.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],j=Object.keys(l).map(e=>`
const ${e} = ${l[e]};`).join("");j&&(j+="\n"),c&&v.push([`{ ${c.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),v.push(...o);let m=g.length?`
      <ViewportSlot>
        ${g.map(e=>`<${e.tag}${r(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",f=Object.keys(t).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${t[e]}}`).join("");return(0,n.jsx)(s.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${h(v,{includeFlicking:!1})}
${j}
export default class DemoComponent extends Component {${u}
  public render() {
    return ${a?"<>\n    ":""}<Flicking${x&&` className="${x}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${c?" plugins={this._plugins}":""}${f}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${m}
    </Flicking>${a?`
    ${a.map(e=>`<${e.tag}${r(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},g=({options:e,panels:i,events:t={},methods:l={},plugins:c,siblings:a=[],imports:x=[],viewportClass:u=""})=>{let g=o(e),v=i.filter(e=>e.isSlot),j=c?`,
  data() {
    return {
      plugins: [${p(c)}]
    }
  }`:"",m=v.length?`
  <template #viewport>
    ${v.map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",f=[...(c??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...x],b=Object.keys(l),k=b.length>0?`,
  methods: {
    ${b.map(e=>`${e}: ${l[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",$=Object.keys(t).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${t[e]}"`).join("");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{className:"language-html",title:"template",children:`<Flicking${u&&` class="${u}"`}${e?` :options="{ ${g} }"`:""}${c?' :plugins="plugins"':""}${$}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}${m}
</Flicking>${a?`
${a.map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,n.jsx)(s.A,{className:"language-js",title:"script",children:`${h(f,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${j}${k}
}`})]})},v=({js:e,react:i,vue3:t,style:a,...r})=>(0,n.jsxs)("div",{children:[(0,n.jsxs)(c.A,{groupId:"cfc",defaultValue:"js",children:[(0,n.jsx)(l.A,{value:"react",label:"React",children:i||(0,n.jsx)(u,{...r})}),(0,n.jsx)(l.A,{value:"vue3",label:"Vue@3",children:t||(0,n.jsx)(g,{...r})}),(0,n.jsx)(l.A,{value:"js",label:"JavaScript",children:e||(0,n.jsx)(x,{...r})})]}),a&&(0,n.jsx)(s.A,{className:"language-css",title:"style",children:`${a}`})]})}}]);