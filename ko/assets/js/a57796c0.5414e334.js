"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["3208"],{17727(e,n,t){t.r(n),t.d(n,{metadata:()=>i,default:()=>j,frontMatter:()=>o,contentTitle:()=>h,toc:()=>x,assets:()=>p});var i=JSON.parse('{"id":"demos/advanced/prev-next","title":"Prev / Next","description":"Reactive API\uB85C \uC774\uC804/\uB2E4\uC74C \uBC84\uD2BC \uB124\uBE44\uAC8C\uC774\uC158\uC744 \uAD6C\uD604\uD569\uB2C8\uB2E4","source":"@site/docs/demos/advanced/prev-next.mdx","sourceDirName":"demos/advanced","slug":"/demos/advanced/prev-next","permalink":"/flicking-docs-test/ko/docs/demos/advanced/prev-next","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/advanced/prev-next.mdx","tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"Prev / Next","id":"prev-next","slug":"/demos/advanced/prev-next","sidebar_position":14,"description":"Reactive API\uB85C \uC774\uC804/\uB2E4\uC74C \uBC84\uD2BC \uB124\uBE44\uAC8C\uC774\uC158\uC744 \uAD6C\uD604\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","prev","next","navigation","reactive","isReachStart","isReachEnd"]},"sidebar":"demosSidebar","previous":{"title":"Pagination","permalink":"/flicking-docs-test/ko/docs/demos/advanced/pagination"},"next":{"title":"Cross Flicking","permalink":"/flicking-docs-test/ko/docs/demos/advanced/cross-flicking"}}'),c=t(65723),s=t(54187),l=t(27449),r=t(72722);t(22155);let a=`
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

.nav-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  gap: 16px;
}

.nav-btn {
  padding: 8px 20px;
  border: 2px solid #3498db;
  background: transparent;
  color: #3498db;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

.nav-btn:hover:not(:disabled) {
  background: #3498db;
  color: white;
}

.nav-btn:disabled {
  border-color: #ccc;
  color: #ccc;
  cursor: not-allowed;
}

.nav-info {
  font-size: 14px;
  color: #666;
  min-width: 60px;
  text-align: center;
}
`,d=()=>{let e=`import Flicking from "@egjs/react-flicking";
import { useFlickingReactiveAPI } from "@egjs/react-flicking";
import "@egjs/flicking/dist/flicking.css";
import { useRef } from "react";

const COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6"];

export default function App() {
  const flickingRef = useRef(null);
  const { currentPanelIndex, totalPanelCount, isReachStart, isReachEnd, moveTo } =
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
      <div className="nav-controls">
        <button className="nav-btn"
                disabled={isReachStart}
                onClick={() => moveTo(currentPanelIndex - 1)}>
          \u{2190} Prev
        </button>
        <span className="nav-info">
          {currentPanelIndex + 1} / {totalPanelCount}
        </span>
        <button className="nav-btn"
                disabled={isReachEnd}
                onClick={() => moveTo(currentPanelIndex + 1)}>
          Next \u{2192}
        </button>
      </div>
    </div>
  );
}`,n=`<template>
  <div>
    <Flicking ref="flickingRef" :options="{ align: 'center' }"
              @changed="onChanged" @ready="onReady"
              @reach-edge="onReachEdge">
      <div v-for="(color, i) in COLORS" :key="i"
           class="flicking-panel" :style="{ background: color }">
        {{ i + 1 }}
      </div>
    </Flicking>
    <div class="nav-controls">
      <button class="nav-btn" :disabled="atStart"
              @click="prev">\u{2190} Prev</button>
      <span class="nav-info">{{ currentIndex + 1 }} / {{ COLORS.length }}</span>
      <button class="nav-btn" :disabled="atEnd"
              @click="next">Next \u{2192}</button>
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
const atStart = ref(true);
const atEnd = ref(false);

const updateState = (flicking) => {
  currentIndex.value = flicking.index;
  atStart.value = flicking.index === 0;
  atEnd.value = flicking.index === flicking.panelCount - 1;
};

const onChanged = (e) => updateState(e.currentTarget);
const onReady = (e) => updateState(e.currentTarget);
const onReachEdge = (e) => updateState(e.currentTarget);
const prev = () => flickingRef.value?.prev();
const next = () => flickingRef.value?.next();
</script>`,t=`import Flicking, { connectFlickingReactiveAPI } from "@egjs/flicking";
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

const prevBtn = document.getElementById("btn-prev");
const nextBtn = document.getElementById("btn-next");
const infoEl = document.querySelector(".nav-info");

const update = () => {
  const idx = reactive.currentPanelIndex;
  const total = reactive.totalPanelCount;
  prevBtn.disabled = reactive.isReachStart;
  nextBtn.disabled = reactive.isReachEnd;
  infoEl.textContent = \`\${idx + 1} / \${total}\`;
};

prevBtn.addEventListener("click", () => reactive.moveTo(reactive.currentPanelIndex - 1));
nextBtn.addEventListener("click", () => reactive.moveTo(reactive.currentPanelIndex + 1));

reactive.subscribe("currentPanelIndex", update);
flicking.on("ready", update);`,i=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <div id="app">
    <div id="flick" class="flicking-viewport">
      <div class="flicking-camera"></div>
    </div>
    <div class="nav-controls">
      <button class="nav-btn" id="btn-prev">\u{2190} Prev</button>
      <span class="nav-info">1 / 5</span>
      <button class="nav-btn" id="btn-next">Next \u{2192}</button>
    </div>
  </div>
</body>
</html>`;return(0,c.jsx)(r.A,{options:{align:"center"},panels:[],react:(0,c.jsx)(l.A,{template:"react",code:e,css:a}),vue3:(0,c.jsx)(l.A,{template:"vue3",code:n,css:a}),js:(0,c.jsx)(l.A,{template:"vanilla",code:t,html:i,css:a})})},o={title:"Prev / Next",id:"prev-next",slug:"/demos/advanced/prev-next",sidebar_position:14,description:"Reactive API\uB85C \uC774\uC804/\uB2E4\uC74C \uBC84\uD2BC \uB124\uBE44\uAC8C\uC774\uC158\uC744 \uAD6C\uD604\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","prev","next","navigation","reactive","isReachStart","isReachEnd"]},h="Prev / Next",p={},x=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 API",id:"\uC8FC\uC694-api",level:3},{value:"\uBC84\uD2BC \uC0C1\uD0DC",id:"\uBC84\uD2BC-\uC0C1\uD0DC",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"\uAD6C\uD604 \uC6D0\uB9AC",id:"\uAD6C\uD604-\uC6D0\uB9AC",level:3},{value:"\uC5F0\uAD00 \uC635\uC158",id:"\uC5F0\uAD00-\uC635\uC158",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 API",id:"\uAD00\uB828-api",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function g(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"prev--next",children:"Prev / Next"})}),"\n",(0,c.jsxs)(n.p,{children:["Reactive API\uC758 ",(0,c.jsx)(n.code,{children:"isReachStart"}),", ",(0,c.jsx)(n.code,{children:"isReachEnd"}),", ",(0,c.jsx)(n.code,{children:"moveTo"}),"\uB97C \uD65C\uC6A9\uD558\uC5EC \uC774\uC804/\uB2E4\uC74C \uBC84\uD2BC \uB124\uBE44\uAC8C\uC774\uC158\uC744 \uAD6C\uD604\uD569\uB2C8\uB2E4."]}),"\n",(0,c.jsx)(d,{}),"\n",(0,c.jsx)(n.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,c.jsx)(n.h3,{id:"\uC8FC\uC694-api",children:"\uC8FC\uC694 API"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\uD56D\uBAA9"}),(0,c.jsx)(n.th,{children:"\uD0C0\uC785"}),(0,c.jsx)(n.th,{children:"\uC124\uBA85"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"../../api/interfaces/FlickingReactiveState#isreachstart",children:(0,c.jsx)(n.code,{children:"isReachStart"})})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"boolean"})}),(0,c.jsx)(n.td,{children:"\uCCAB \uBC88\uC9F8 \uD328\uB110\uC5D0 \uB3C4\uB2EC \uC5EC\uBD80"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"../../api/interfaces/FlickingReactiveState#isreachend",children:(0,c.jsx)(n.code,{children:"isReachEnd"})})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"boolean"})}),(0,c.jsx)(n.td,{children:"\uB9C8\uC9C0\uB9C9 \uD328\uB110\uC5D0 \uB3C4\uB2EC \uC5EC\uBD80"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"../../api/interfaces/FlickingReactiveState#currentpanelindex",children:(0,c.jsx)(n.code,{children:"currentPanelIndex"})})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"number"})}),(0,c.jsx)(n.td,{children:"\uD604\uC7AC \uD65C\uC131 \uD328\uB110 \uC778\uB371\uC2A4"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"../../api/interfaces/FlickingReactiveMethod#moveto",children:(0,c.jsx)(n.code,{children:"moveTo"})})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"(i: number) => Promise"})}),(0,c.jsx)(n.td,{children:"\uD2B9\uC815 \uD328\uB110\uB85C \uC774\uB3D9"})]})]})]}),"\n",(0,c.jsx)(n.h3,{id:"\uBC84\uD2BC-\uC0C1\uD0DC",children:"\uBC84\uD2BC \uC0C1\uD0DC"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\uC704\uCE58"}),(0,c.jsx)(n.th,{children:"Prev \uBC84\uD2BC"}),(0,c.jsx)(n.th,{children:"Next \uBC84\uD2BC"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:["\uCCAB \uD328\uB110 (",(0,c.jsx)(n.code,{children:"isReachStart"}),")"]}),(0,c.jsx)(n.td,{children:"disabled"}),(0,c.jsx)(n.td,{children:"enabled"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\uC911\uAC04 \uD328\uB110"}),(0,c.jsx)(n.td,{children:"enabled"}),(0,c.jsx)(n.td,{children:"enabled"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:["\uB9C8\uC9C0\uB9C9 \uD328\uB110 (",(0,c.jsx)(n.code,{children:"isReachEnd"}),")"]}),(0,c.jsx)(n.td,{children:"enabled"}),(0,c.jsx)(n.td,{children:"disabled"})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,c.jsx)(n.h3,{id:"\uAD6C\uD604-\uC6D0\uB9AC",children:"\uAD6C\uD604 \uC6D0\uB9AC"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"isReachStart"}),"\uAC00 ",(0,c.jsx)(n.code,{children:"true"}),"\uC774\uBA74 Prev \uBC84\uD2BC\uC744 disabled \uCC98\uB9AC\uD569\uB2C8\uB2E4"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"isReachEnd"}),"\uAC00 ",(0,c.jsx)(n.code,{children:"true"}),"\uC774\uBA74 Next \uBC84\uD2BC\uC744 disabled \uCC98\uB9AC\uD569\uB2C8\uB2E4"]}),"\n",(0,c.jsxs)(n.li,{children:["Prev \uD074\uB9AD: ",(0,c.jsx)(n.code,{children:"moveTo(currentPanelIndex - 1)"})]}),"\n",(0,c.jsxs)(n.li,{children:["Next \uD074\uB9AD: ",(0,c.jsx)(n.code,{children:"moveTo(currentPanelIndex + 1)"})]}),"\n",(0,c.jsx)(n.li,{children:"\uB4DC\uB798\uADF8\uB85C \uD328\uB110\uC774 \uBCC0\uACBD\uB418\uBA74 \uBC84\uD2BC \uC0C1\uD0DC\uAC00 \uC790\uB3D9 \uB3D9\uAE30\uD654\uB429\uB2C8\uB2E4"}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\uC5F0\uAD00-\uC635\uC158",children:"\uC5F0\uAD00 \uC635\uC158"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:"circular: true"}),"\uC640\uC758 \uAD00\uACC4"]}),": \uC21C\uD658 \uBAA8\uB4DC\uC5D0\uC11C\uB294 ",(0,c.jsx)(n.code,{children:"isReachStart"}),"/",(0,c.jsx)(n.code,{children:"isReachEnd"}),"\uAC00 \uD56D\uC0C1 ",(0,c.jsx)(n.code,{children:"false"}),"\uC774\uBBC0\uB85C \uBC84\uD2BC\uC774 \uD56D\uC0C1 \uD65C\uC131\uD654\uB429\uB2C8\uB2E4"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,c.jsx)(n.admonition,{title:"\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\uB370\uC2A4\uD06C\uD1B1\uC5D0\uC11C \uB4DC\uB798\uADF8 \uB300\uC2E0 \uBC84\uD2BC\uC73C\uB85C \uB124\uBE44\uAC8C\uC774\uC158 \uC81C\uACF5"}),"\n",(0,c.jsx)(n.li,{children:"\uC811\uADFC\uC131(a11y)\uC744 \uC704\uD55C \uD0A4\uBCF4\uB4DC/\uBC84\uD2BC \uB124\uBE44\uAC8C\uC774\uC158"}),"\n",(0,c.jsx)(n.li,{children:"\uD130\uCE58\uAC00 \uBD88\uAC00\uB2A5\uD55C \uD658\uACBD\uC5D0\uC11C\uC758 \uC2AC\uB77C\uC774\uB354 \uC81C\uC5B4"}),"\n"]})}),"\n",(0,c.jsx)(n.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,c.jsx)(n.h3,{id:"\uAD00\uB828-api",children:"\uAD00\uB828 API"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"../../api/interfaces/FlickingReactiveState#isreachstart",children:(0,c.jsx)(n.code,{children:"isReachStart"})}),": \uC2DC\uC791 \uB3C4\uB2EC \uC5EC\uBD80"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"../../api/interfaces/FlickingReactiveState#isreachend",children:(0,c.jsx)(n.code,{children:"isReachEnd"})}),": \uB05D \uB3C4\uB2EC \uC5EC\uBD80"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"./pagination",children:"Pagination"}),": dot \uD398\uC774\uC9C0\uB124\uC774\uC158"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"./progress-bar",children:"Progress Bar"}),": \uC9C4\uD589\uB3C4 \uBC14"]}),"\n"]})]})}function j(e={}){let{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(g,{...e})}):g(e)}},27449(e,n,t){t.d(n,{A:()=>o});var i=t(65723),c=t(19612);t(22155);let s="^4.11.4",l={react:{"@egjs/react-flicking":s,"@egjs/flicking":s},vue3:{"@egjs/vue3-flicking":s,"@egjs/flicking":s},vanilla:{"@egjs/flicking":s}},r=`<!DOCTYPE html>
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
`;function o({code:e,html:n,template:t="react",dependencies:s={},files:o={},css:h=""}){var p;let x,g,j;return(0,i.jsx)(c.OZ,{template:"vue3"===t?"vue":"vanilla"===t?"vanilla":"react",files:(j={"/styles.css":{code:g=h?`${d}
${h}`:d},...o},"react"===t?{"/App.tsx":{code:e},"/index.js":{code:a,hidden:!0},...j}:"vue3"===t?{"/src/App.vue":{code:e},...j}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let n=e.split("\n"),t=[],i=[],c=!1;for(let e of n)c?i.push(e):e.trimStart().startsWith("import ")||""===e.trim()?t.push(e.replace('"../styles.css"','"./styles.css"')):(c=!0,i.push(e));for(;i.length>0&&""===i[i.length-1].trim();)i.pop();return[...t,"","const _run = () => {",...i.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:g},"/index.html":{code:(x="<style>.flicking-viewport{opacity:0}</style>",(p=n||r).includes("</head>")?p.replace("</head>",`${x}
</head>`):x+p)},...o}),customSetup:{dependencies:{...l[t],...s}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===t?["/App.tsx","/styles.css"]:"vue3"===t?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===t?"/App.tsx":"vue3"===t?"/src/App.vue":"/src/index.js"}})}},72722(e,n,t){t.d(n,{A:()=>v});var i=t(65723),c=t(34622),s=t(7210),l=t(78863);t(22155);let r=(e,n='"')=>"string"==typeof e?`${n}${e}${n}`:e,a=(e,n="class")=>e.class?` ${n}="${e.class}"`:"",d=(e,n=!1)=>e.style?n?` style={{ ${Object.keys(e.style).map(n=>`${n}: ${r(e.style[n])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(n=>`${n}: ${e.style[n]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(n=>`${n}: ${r(e[n],"'")}`).join(", ")}`,h=(e,{prefix:n,includeFlicking:t=!0}={})=>{let i=t?[["Flicking",`@egjs/${n?`${n}-`:""}flicking`]]:[];return e&&i.push(...e),`${i.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},p=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,x=({options:e,panels:n,events:t={},methods:s={},plugins:l=[],siblings:o=[],imports:p=[],viewportClass:x=""})=>{let g=e=>`${Object.keys(e).map(n=>`${n}: ${r(e[n])}`).join(",\n  ")}`,j=Object.keys(s).map(e=>`const ${e} = ${s[e]};
`).join(""),v=e?`const flicking = new Flicking("#flick", {
  ${g(e)}
});

`:'const flicking = new Flicking("#flick")',u=l.length>0?`flicking.addPlugins(${l.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?g(e[1]):e[1]??""}
}`:""})`)});`:"",m=[...l.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...p],f=Object.keys(t).map(e=>{let n=t[e];return`flicking.on("${e}", ${n})
`}).join(""),$=n.filter(e=>e.isSlot);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${x&&` ${x}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${n.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${$.length?`
  ${$.map(e=>`<${e.tag}${a(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${a(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,i.jsx)(c.A,{className:"language-js",title:"js",children:`${h(m)}

${j}${v}${u}${f}`.trim()})]})},g=({options:e,panels:n,events:t={},methods:s={},plugins:l,siblings:r,imports:o=[],viewportClass:x=""})=>{let g=l?`
  private _plugins = [${p(l)}];
`:"",j=n.filter(e=>e.isSlot),v=[["{ Component }","react"],[j.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],u=Object.keys(s).map(e=>`
const ${e} = ${s[e]};`).join("");u&&(u+="\n"),l&&v.push([`{ ${l.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),v.push(...o);let m=j.length?`
      <ViewportSlot>
        ${j.map(e=>`<${e.tag}${a(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",f=Object.keys(t).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${t[e]}}`).join("");return(0,i.jsx)(c.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${h(v,{includeFlicking:!1})}
${u}
export default class DemoComponent extends Component {${g}
  public render() {
    return ${r?"<>\n    ":""}<Flicking${x&&` className="${x}"`}${e?` ${Object.keys(e).map(n=>`${n}=${"string"==typeof e[n]?`"${e[n]}"`:`{${e[n]}}`}`).join(" ")}`:""}${l?" plugins={this._plugins}":""}${f}>
      ${n.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${m}
    </Flicking>${r?`
    ${r.map(e=>`<${e.tag}${a(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},j=({options:e,panels:n,events:t={},methods:s={},plugins:l,siblings:r=[],imports:x=[],viewportClass:g=""})=>{let j=o(e),v=n.filter(e=>e.isSlot),u=l?`,
  data() {
    return {
      plugins: [${p(l)}]
    }
  }`:"",m=v.length?`
  <template #viewport>
    ${v.map(e=>`<${e.tag}${a(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",f=[...(l??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...x],$=Object.keys(s),k=$.length>0?`,
  methods: {
    ${$.map(e=>`${e}: ${s[e].split("\n").map((e,n)=>n>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",b=Object.keys(t).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${t[e]}"`).join("");return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.A,{className:"language-html",title:"template",children:`<Flicking${g&&` class="${g}"`}${e?` :options="{ ${j} }"`:""}${l?' :plugins="plugins"':""}${b}>
  ${n.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}${m}
</Flicking>${r?`
${r.map(e=>`<${e.tag}${a(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,i.jsx)(c.A,{className:"language-js",title:"script",children:`${h(f,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${u}${k}
}`})]})},v=({js:e,react:n,vue3:t,style:r,...a})=>(0,i.jsxs)("div",{children:[(0,i.jsxs)(l.A,{groupId:"cfc",defaultValue:"js",children:[(0,i.jsx)(s.A,{value:"react",label:"React",children:n||(0,i.jsx)(g,{...a})}),(0,i.jsx)(s.A,{value:"vue3",label:"Vue@3",children:t||(0,i.jsx)(j,{...a})}),(0,i.jsx)(s.A,{value:"js",label:"JavaScript",children:e||(0,i.jsx)(x,{...a})})]}),r&&(0,i.jsx)(c.A,{className:"language-css",title:"style",children:`${r}`})]})}}]);