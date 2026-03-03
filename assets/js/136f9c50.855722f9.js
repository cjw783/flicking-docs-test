"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["7305"],{45367(e,i,n){n.r(i),n.d(i,{metadata:()=>t,default:()=>x,frontMatter:()=>o,contentTitle:()=>p,toc:()=>h,assets:()=>g});var t=JSON.parse('{"id":"demos/advanced/pagination","title":"Pagination","description":"Reactive API\uB85C dot \uD398\uC774\uC9C0\uB124\uC774\uC158\uC744 \uAD6C\uD604\uD569\uB2C8\uB2E4","source":"@site/docs/demos/advanced/pagination.mdx","sourceDirName":"demos/advanced","slug":"/demos/advanced/pagination","permalink":"/flicking-docs-test/docs/demos/advanced/pagination","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/advanced/pagination.mdx","tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"Pagination","id":"pagination","slug":"/demos/advanced/pagination","sidebar_position":13,"description":"Reactive API\uB85C dot \uD398\uC774\uC9C0\uB124\uC774\uC158\uC744 \uAD6C\uD604\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","pagination","dot","reactive","currentPanelIndex"]},"sidebar":"demosSidebar","previous":{"title":"Progress Bar","permalink":"/flicking-docs-test/docs/demos/advanced/progress-bar"},"next":{"title":"Prev / Next","permalink":"/flicking-docs-test/docs/demos/advanced/prev-next"}}'),l=n(65723),c=n(54187),s=n(27449),a=n(72722);n(22155);let r=`
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

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 12px;
  gap: 6px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ccc;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background 0.2s;
}

.dot.active {
  background: #3498db;
}

.dot:hover {
  background: #95a5a6;
}

.dot.active:hover {
  background: #3498db;
}
`,d=()=>{let e=`import Flicking from "@egjs/react-flicking";
import { useFlickingReactiveAPI } from "@egjs/react-flicking";
import "@egjs/flicking/dist/flicking.css";
import { useRef } from "react";

const COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6"];

export default function App() {
  const flickingRef = useRef(null);
  const { currentPanelIndex, totalPanelCount, moveTo } =
    useFlickingReactiveAPI(flickingRef);

  return (
    <div>
      <Flicking ref={flickingRef} align="center">
        {COLORS.map((color, i) => (
          <div className="flicking-panel" key={i} style={{ background: color }}>
            {i + 1}
          </div>
        ))}
      </Flicking>
      <div className="pagination">
        {Array.from({ length: totalPanelCount }, (_, i) => (
          <button
            key={i}
            className={\`dot \${i === currentPanelIndex ? "active" : ""}\`}
            onClick={() => moveTo(i)}
          />
        ))}
      </div>
    </div>
  );
}`,i=`<template>
  <div>
    <Flicking ref="flickingRef" :options="{ align: 'center' }"
              @changed="onChanged" @ready="onReady">
      <div v-for="(color, i) in COLORS" :key="i"
           class="flicking-panel" :style="{ background: color }">
        {{ i + 1 }}
      </div>
    </Flicking>
    <div class="pagination">
      <button v-for="i in panelCount" :key="i - 1"
              :class="['dot', (i - 1) === currentIndex && 'active']"
              @click="goTo(i - 1)" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Flicking from "@egjs/vue3-flicking";
import "@egjs/flicking/dist/flicking.css";

const COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6"];
const flickingRef = ref(null);
const currentIndex = ref(0);
const panelCount = ref(COLORS.length);

const onChanged = (e) => { currentIndex.value = e.index; };
const onReady = (e) => { currentIndex.value = e.currentTarget.index; };
const goTo = (i) => { flickingRef.value?.moveTo(i); };
</script>`,n=`import Flicking, { connectFlickingReactiveAPI } from "@egjs/flicking";
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

const flicking = new Flicking("#flick", { align: "center" });
const reactive = connectFlickingReactiveAPI(flicking);

const pagination = document.querySelector(".pagination");
const dots = COLORS.map((_, i) => {
  const dot = document.createElement("button");
  dot.className = "dot";
  dot.addEventListener("click", () => reactive.moveTo(i));
  pagination.appendChild(dot);
  return dot;
});

const update = () => {
  dots.forEach((dot, i) => {
    dot.className = i === reactive.currentPanelIndex ? "dot active" : "dot";
  });
};

reactive.subscribe("currentPanelIndex", update);
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
    <div class="pagination"></div>
  </div>
</body>
</html>`;return(0,l.jsx)(a.A,{options:{align:"center"},panels:[],react:(0,l.jsx)(s.A,{template:"react",code:e,css:r}),vue3:(0,l.jsx)(s.A,{template:"vue3",code:i,css:r}),js:(0,l.jsx)(s.A,{template:"vanilla",code:n,html:t,css:r})})},o={title:"Pagination",id:"pagination",slug:"/demos/advanced/pagination",sidebar_position:13,description:"Reactive API\uB85C dot \uD398\uC774\uC9C0\uB124\uC774\uC158\uC744 \uAD6C\uD604\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","pagination","dot","reactive","currentPanelIndex"]},p="Pagination",g={},h=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 API",id:"\uC8FC\uC694-api",level:3},{value:"\uB3D9\uC791",id:"\uB3D9\uC791",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"\uAD6C\uD604 \uC6D0\uB9AC",id:"\uAD6C\uD604-\uC6D0\uB9AC",level:3},{value:"\uC5F0\uAD00 \uC635\uC158",id:"\uC5F0\uAD00-\uC635\uC158",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 API",id:"\uAD00\uB828-api",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function u(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.header,{children:(0,l.jsx)(i.h1,{id:"pagination",children:"Pagination"})}),"\n",(0,l.jsxs)(i.p,{children:["Reactive API\uC758 ",(0,l.jsx)(i.code,{children:"currentPanelIndex"}),", ",(0,l.jsx)(i.code,{children:"totalPanelCount"}),", ",(0,l.jsx)(i.code,{children:"moveTo"}),"\uB97C \uD65C\uC6A9\uD558\uC5EC dot \uD398\uC774\uC9C0\uB124\uC774\uC158\uC744 \uAD6C\uD604\uD569\uB2C8\uB2E4."]}),"\n",(0,l.jsx)(d,{}),"\n",(0,l.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,l.jsx)(i.h3,{id:"\uC8FC\uC694-api",children:"\uC8FC\uC694 API"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"\uD56D\uBAA9"}),(0,l.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,l.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.a,{href:"../../api/interfaces/FlickingReactiveState#currentpanelindex",children:(0,l.jsx)(i.code,{children:"currentPanelIndex"})})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"number"})}),(0,l.jsx)(i.td,{children:"\uD604\uC7AC \uD65C\uC131 \uD328\uB110 \uC778\uB371\uC2A4"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.a,{href:"../../api/interfaces/FlickingReactiveState#totalpanelcount",children:(0,l.jsx)(i.code,{children:"totalPanelCount"})})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"number"})}),(0,l.jsx)(i.td,{children:"\uC804\uCCB4 \uD328\uB110 \uAC1C\uC218"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.a,{href:"../../api/interfaces/FlickingReactiveMethod#moveto",children:(0,l.jsx)(i.code,{children:"moveTo"})})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"(i: number) => Promise"})}),(0,l.jsx)(i.td,{children:"\uD2B9\uC815 \uD328\uB110\uB85C \uC774\uB3D9"})]})]})]}),"\n",(0,l.jsx)(i.h3,{id:"\uB3D9\uC791",children:"\uB3D9\uC791"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"\uC0C1\uD0DC"}),(0,l.jsx)(i.th,{children:"dot \uC2A4\uD0C0\uC77C"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"\uD604\uC7AC \uD328\uB110"}),(0,l.jsx)(i.td,{children:"active (\uD30C\uB780\uC0C9)"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"\uB2E4\uB978 \uD328\uB110"}),(0,l.jsx)(i.td,{children:"\uAE30\uBCF8 (\uD68C\uC0C9), \uD074\uB9AD \uC2DC \uD574\uB2F9 \uD328\uB110\uB85C \uC774\uB3D9"})]})]})]}),"\n",(0,l.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,l.jsx)(i.h3,{id:"\uAD6C\uD604-\uC6D0\uB9AC",children:"\uAD6C\uD604 \uC6D0\uB9AC"}),"\n",(0,l.jsxs)(i.ol,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"totalPanelCount"}),"\uB9CC\uD07C dot \uBC84\uD2BC\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"currentPanelIndex"}),"\uC640 \uBE44\uAD50\uD558\uC5EC \uD604\uC7AC \uD328\uB110\uC758 dot\uC5D0 active \uC2A4\uD0C0\uC77C\uC744 \uC801\uC6A9\uD569\uB2C8\uB2E4"]}),"\n",(0,l.jsxs)(i.li,{children:["dot \uD074\uB9AD \uC2DC ",(0,l.jsx)(i.code,{children:"moveTo(index)"}),"\uB97C \uD638\uCD9C\uD558\uC5EC \uD574\uB2F9 \uD328\uB110\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4"]}),"\n",(0,l.jsxs)(i.li,{children:["\uB4DC\uB798\uADF8\uB85C \uD328\uB110\uC774 \uBCC0\uACBD\uB418\uBA74 ",(0,l.jsx)(i.code,{children:"currentPanelIndex"}),"\uAC00 \uC790\uB3D9 \uC5C5\uB370\uC774\uD2B8\uB418\uC5B4 dot\uB3C4 \uB3D9\uAE30\uD654\uB429\uB2C8\uB2E4"]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"\uC5F0\uAD00-\uC635\uC158",children:"\uC5F0\uAD00 \uC635\uC158"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsxs)(i.strong,{children:[(0,l.jsx)(i.code,{children:'align: "center"'}),"\uC640\uC758 \uAD00\uACC4"]}),": \uC911\uC559 \uC815\uB82C\uC5D0\uC11C \uD398\uC774\uC9C0\uB124\uC774\uC158\uC774 \uAC00\uC7A5 \uC9C1\uAD00\uC801"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsxs)(i.strong,{children:[(0,l.jsx)(i.code,{children:"circular: true"}),"\uC640\uC758 \uAD00\uACC4"]}),": \uC21C\uD658 \uBAA8\uB4DC\uC5D0\uC11C\uB294 \uCCAB/\uB9C8\uC9C0\uB9C9 \uD328\uB110\uC774 \uC5F0\uACB0\uB418\uBBC0\uB85C dot\uC774 \uC21C\uD658\uC801\uC73C\uB85C \uD65C\uC131\uD654"]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,l.jsx)(i.admonition,{title:"\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\uBC30\uB108/\uD788\uC5B4\uB85C \uC2AC\uB77C\uC774\uB354\uC758 \uC704\uCE58 \uD45C\uC2DC"}),"\n",(0,l.jsx)(i.li,{children:"\uC774\uBBF8\uC9C0 \uAC24\uB7EC\uB9AC\uC758 \uD604\uC7AC \uD398\uC774\uC9C0 \uD45C\uC2DC"}),"\n",(0,l.jsx)(i.li,{children:"\uBAA8\uBC14\uC77C \uC628\uBCF4\uB529\uC758 \uB2E8\uACC4 \uD45C\uC2DC"}),"\n"]})}),"\n",(0,l.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,l.jsx)(i.h3,{id:"\uAD00\uB828-api",children:"\uAD00\uB828 API"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"../../api/interfaces/FlickingReactiveState#currentpanelindex",children:(0,l.jsx)(i.code,{children:"currentPanelIndex"})}),": \uD604\uC7AC \uD328\uB110 \uC778\uB371\uC2A4"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"../../api/interfaces/FlickingReactiveMethod#moveto",children:(0,l.jsx)(i.code,{children:"moveTo"})}),": \uD328\uB110 \uC774\uB3D9"]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"./prev-next",children:"Prev / Next"}),": \uC774\uC804/\uB2E4\uC74C \uBC84\uD2BC"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"./progress-bar",children:"Progress Bar"}),": \uC9C4\uD589\uB3C4 \uBC14"]}),"\n"]})]})}function x(e={}){let{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},27449(e,i,n){n.d(i,{A:()=>o});var t=n(65723),l=n(19612);n(22155);let c="^4.11.4",s={react:{"@egjs/react-flicking":c,"@egjs/flicking":c},vue3:{"@egjs/vue3-flicking":c,"@egjs/flicking":c},vanilla:{"@egjs/flicking":c}},a=`<!DOCTYPE html>
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
`;function o({code:e,html:i,template:n="react",dependencies:c={},files:o={},css:p=""}){var g;let h,u,x;return(0,t.jsx)(l.OZ,{template:"vue3"===n?"vue":"vanilla"===n?"vanilla":"react",files:(x={"/styles.css":{code:u=p?`${d}
${p}`:d},...o},"react"===n?{"/App.tsx":{code:e},"/index.js":{code:r,hidden:!0},...x}:"vue3"===n?{"/src/App.vue":{code:e},...x}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),n=[],t=[],l=!1;for(let e of i)l?t.push(e):e.trimStart().startsWith("import ")||""===e.trim()?n.push(e.replace('"../styles.css"','"./styles.css"')):(l=!0,t.push(e));for(;t.length>0&&""===t[t.length-1].trim();)t.pop();return[...n,"","const _run = () => {",...t.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:u},"/index.html":{code:(h="<style>.flicking-viewport{opacity:0}</style>",(g=i||a).includes("</head>")?g.replace("</head>",`${h}
</head>`):h+g)},...o}),customSetup:{dependencies:{...s[n],...c}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===n?["/App.tsx","/styles.css"]:"vue3"===n?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===n?"/App.tsx":"vue3"===n?"/src/App.vue":"/src/index.js"}})}},72722(e,i,n){n.d(i,{A:()=>j});var t=n(65723),l=n(34622),c=n(7210),s=n(78863);n(22155);let a=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,r=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",d=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${a(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(i=>`${i}: ${a(e[i],"'")}`).join(", ")}`,p=(e,{prefix:i,includeFlicking:n=!0}={})=>{let t=n?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&t.push(...e),`${t.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},g=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,h=({options:e,panels:i,events:n={},methods:c={},plugins:s=[],siblings:o=[],imports:g=[],viewportClass:h=""})=>{let u=e=>`${Object.keys(e).map(i=>`${i}: ${a(e[i])}`).join(",\n  ")}`,x=Object.keys(c).map(e=>`const ${e} = ${c[e]};
`).join(""),j=e?`const flicking = new Flicking("#flick", {
  ${u(e)}
});

`:'const flicking = new Flicking("#flick")',m=s.length>0?`flicking.addPlugins(${s.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?u(e[1]):e[1]??""}
}`:""})`)});`:"",f=[...s.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],v=Object.keys(n).map(e=>{let i=n[e];return`flicking.on("${e}", ${i})
`}).join(""),$=i.filter(e=>e.isSlot);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${h&&` ${h}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${$.length?`
  ${$.map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,t.jsx)(l.A,{className:"language-js",title:"js",children:`${p(f)}

${x}${j}${m}${v}`.trim()})]})},u=({options:e,panels:i,events:n={},methods:c={},plugins:s,siblings:a,imports:o=[],viewportClass:h=""})=>{let u=s?`
  private _plugins = [${g(s)}];
`:"",x=i.filter(e=>e.isSlot),j=[["{ Component }","react"],[x.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],m=Object.keys(c).map(e=>`
const ${e} = ${c[e]};`).join("");m&&(m+="\n"),s&&j.push([`{ ${s.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),j.push(...o);let f=x.length?`
      <ViewportSlot>
        ${x.map(e=>`<${e.tag}${r(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",v=Object.keys(n).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${n[e]}}`).join("");return(0,t.jsx)(l.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(j,{includeFlicking:!1})}
${m}
export default class DemoComponent extends Component {${u}
  public render() {
    return ${a?"<>\n    ":""}<Flicking${h&&` className="${h}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${s?" plugins={this._plugins}":""}${v}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${f}
    </Flicking>${a?`
    ${a.map(e=>`<${e.tag}${r(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},x=({options:e,panels:i,events:n={},methods:c={},plugins:s,siblings:a=[],imports:h=[],viewportClass:u=""})=>{let x=o(e),j=i.filter(e=>e.isSlot),m=s?`,
  data() {
    return {
      plugins: [${g(s)}]
    }
  }`:"",f=j.length?`
  <template #viewport>
    ${j.map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",v=[...(s??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...h],$=Object.keys(c),k=$.length>0?`,
  methods: {
    ${$.map(e=>`${e}: ${c[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",b=Object.keys(n).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${n[e]}"`).join("");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.A,{className:"language-html",title:"template",children:`<Flicking${u&&` class="${u}"`}${e?` :options="{ ${x} }"`:""}${s?' :plugins="plugins"':""}${b}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}${f}
</Flicking>${a?`
${a.map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,t.jsx)(l.A,{className:"language-js",title:"script",children:`${p(v,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${m}${k}
}`})]})},j=({js:e,react:i,vue3:n,style:a,...r})=>(0,t.jsxs)("div",{children:[(0,t.jsxs)(s.A,{groupId:"cfc",defaultValue:"js",children:[(0,t.jsx)(c.A,{value:"react",label:"React",children:i||(0,t.jsx)(u,{...r})}),(0,t.jsx)(c.A,{value:"vue3",label:"Vue@3",children:n||(0,t.jsx)(x,{...r})}),(0,t.jsx)(c.A,{value:"js",label:"JavaScript",children:e||(0,t.jsx)(h,{...r})})]}),a&&(0,t.jsx)(l.A,{className:"language-css",title:"style",children:`${a}`})]})}}]);