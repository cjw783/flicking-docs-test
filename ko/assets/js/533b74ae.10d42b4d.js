"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["9732"],{17529(e,i,s){s.r(i),s.d(i,{metadata:()=>n,default:()=>j,frontMatter:()=>d,contentTitle:()=>g,toc:()=>p,assets:()=>h});var n=JSON.parse('{"id":"demos/advanced/coverflow","title":"Coverflow","description":"Reactive API\uC758 indexProgress\uB97C \uD65C\uC6A9\uD55C 3D Cover Flow \uD6A8\uACFC","source":"@site/docs/demos/advanced/coverflow.mdx","sourceDirName":"demos/advanced","slug":"/demos/advanced/coverflow","permalink":"/flicking-docs-test/ko/docs/demos/advanced/coverflow","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/advanced/coverflow.mdx","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"Coverflow","id":"coverflow","slug":"/demos/advanced/coverflow","sidebar_position":11,"description":"Reactive API\uC758 indexProgress\uB97C \uD65C\uC6A9\uD55C 3D Cover Flow \uD6A8\uACFC","keywords":["flicking","carousel","coverflow","3D","reactive","indexProgress","transform"]},"sidebar":"demosSidebar","previous":{"title":"Fullpage Scroll","permalink":"/flicking-docs-test/ko/docs/demos/advanced/fullpage-scroll"},"next":{"title":"Progress Bar","permalink":"/flicking-docs-test/ko/docs/demos/advanced/progress-bar"}}'),t=s(65723),c=s(54187),l=s(27449),r=s(72722);s(22155);let o=`
.flicking-viewport {
  perspective: 800px;
}

.flicking-camera {
  transform-style: preserve-3d;
}

.flicking-panel {
  width: 250px;
  height: 180px;
  margin-right: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
  backface-visibility: hidden;
}
`,a=()=>{let e=`import Flicking from "@egjs/react-flicking";
import { useFlickingReactiveAPI } from "@egjs/react-flicking";
import "@egjs/flicking/dist/flicking.css";
import { useRef } from "react";

const COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6",
                "#1abc9c", "#e67e22", "#2980b9"];
const LENGTH = COLORS.length;

export default function App() {
  const flickingRef = useRef(null);
  const { indexProgress } = useFlickingReactiveAPI(flickingRef);

  return (
    <Flicking ref={flickingRef} circular={true} align="center">
      {COLORS.map((color, i) => {
        const childProgress = (i - indexProgress + LENGTH * 1.5) % LENGTH - LENGTH * 0.5;
        const scale = Math.max(0, 0.9 - Math.abs(childProgress) * 0.2);
        const rotateY = -childProgress * 50;

        return (
          <div className="flicking-panel" key={i}
               style={{
                 background: color,
                 transform: \`rotateY(\${rotateY}deg) scale(\${scale})\`,
                 opacity: Math.max(0, 1 - Math.abs(childProgress) * 0.3)
               }}>
            {i + 1}
          </div>
        );
      })}
    </Flicking>
  );
}`,i=`<template>
  <Flicking ref="flickingRef" :options="{ circular: true, align: 'center' }"
            @move="onMove" @move-end="onMove" @ready="onMove">
    <div v-for="(color, i) in COLORS" :key="i"
         class="flicking-panel"
         :style="{
           background: color,
           transform: \`rotateY(\${getRotateY(i)}deg) scale(\${getScale(i)})\`,
           opacity: getOpacity(i)
         }">
      {{ i + 1 }}
    </div>
  </Flicking>
</template>

<script setup>
import { ref } from "vue";
import Flicking from "@egjs/vue3-flicking";
import "@egjs/flicking/dist/flicking.css";

const COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6",
                "#1abc9c", "#e67e22", "#2980b9"];
const LENGTH = COLORS.length;
const flickingRef = ref(null);
const indexProgress = ref(0);

const onMove = (e) => {
  const flicking = e.currentTarget;
  const camera = flicking.camera;
  const progress = camera.progress;
  const panelCount = flicking.panelCount;
  indexProgress.value = progress * (panelCount - 1);
};

const getChildProgress = (i) =>
  (i - indexProgress.value + LENGTH * 1.5) % LENGTH - LENGTH * 0.5;

const getScale = (i) => Math.max(0, 0.9 - Math.abs(getChildProgress(i)) * 0.2);
const getRotateY = (i) => -getChildProgress(i) * 50;
const getOpacity = (i) => Math.max(0, 1 - Math.abs(getChildProgress(i)) * 0.3);
</script>`,s=`import Flicking, { connectFlickingReactiveAPI } from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";

const COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6",
                "#1abc9c", "#e67e22", "#2980b9"];
const LENGTH = COLORS.length;

const camera = document.querySelector(".flicking-camera");
const panels = COLORS.map((color, i) => {
  const panel = document.createElement("div");
  panel.className = "flicking-panel";
  panel.style.background = color;
  panel.textContent = i + 1;
  camera.appendChild(panel);
  return panel;
});

const flicking = new Flicking("#flick", {
  circular: true,
  align: "center"
});

const reactive = connectFlickingReactiveAPI(flicking);

const update = () => {
  const ip = reactive.indexProgress;
  panels.forEach((panel, i) => {
    const childProgress = (i - ip + LENGTH * 1.5) % LENGTH - LENGTH * 0.5;
    const scale = Math.max(0, 0.9 - Math.abs(childProgress) * 0.2);
    const rotateY = -childProgress * 50;
    const opacity = Math.max(0, 1 - Math.abs(childProgress) * 0.3);
    panel.style.transform = \`rotateY(\${rotateY}deg) scale(\${scale})\`;
    panel.style.opacity = opacity;
  });
};

reactive.subscribe("indexProgress", update);
flicking.on("ready", update);`,n=`<!DOCTYPE html>
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
</html>`;return(0,t.jsx)(r.A,{options:{circular:!0,align:"center"},panels:[],react:(0,t.jsx)(l.A,{template:"react",code:e,css:o}),vue3:(0,t.jsx)(l.A,{template:"vue3",code:i,css:o}),js:(0,t.jsx)(l.A,{template:"vanilla",code:s,html:n,css:o})})},d={title:"Coverflow",id:"coverflow",slug:"/demos/advanced/coverflow",sidebar_position:11,description:"Reactive API\uC758 indexProgress\uB97C \uD65C\uC6A9\uD55C 3D Cover Flow \uD6A8\uACFC",keywords:["flicking","carousel","coverflow","3D","reactive","indexProgress","transform"]},g="Coverflow",h={},p=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 API",id:"\uC8FC\uC694-api",level:3},{value:"\uD6A8\uACFC \uB9E4\uD551",id:"\uD6A8\uACFC-\uB9E4\uD551",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"indexProgress\uB780?",id:"indexprogress\uB780",level:3},{value:"\uD504\uB808\uC784\uC6CC\uD06C\uBCC4 \uC0AC\uC6A9\uBC95",id:"\uD504\uB808\uC784\uC6CC\uD06C\uBCC4-\uC0AC\uC6A9\uBC95",level:3},{value:"\uC5F0\uAD00 \uC635\uC158",id:"\uC5F0\uAD00-\uC635\uC158",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 API",id:"\uAD00\uB828-api",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function x(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"coverflow",children:"Coverflow"})}),"\n",(0,t.jsxs)(i.p,{children:["Reactive API\uC758 ",(0,t.jsx)(i.code,{children:"indexProgress"}),"\uB97C \uD65C\uC6A9\uD558\uC5EC \uD604\uC7AC \uD328\uB110\uC744 \uC911\uC2EC\uC73C\uB85C 3D \uD68C\uC804 \uD6A8\uACFC\uB97C \uC801\uC6A9\uD569\uB2C8\uB2E4."]}),"\n",(0,t.jsx)(a,{}),"\n",(0,t.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,t.jsx)(i.h3,{id:"\uC8FC\uC694-api",children:"\uC8FC\uC694 API"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\uD56D\uBAA9"}),(0,t.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,t.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"../../api/interfaces/FlickingReactiveState#indexprogress",children:(0,t.jsx)(i.code,{children:"indexProgress"})})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"number"})}),(0,t.jsx)(i.td,{children:"\uD604\uC7AC \uCE74\uBA54\uB77C \uC704\uCE58\uC758 \uD328\uB110 \uC778\uB371\uC2A4 (\uC18C\uC218\uC810 \uD3EC\uD568)"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"../../api/types/FlickingReactiveObject",children:(0,t.jsx)(i.code,{children:"useFlickingReactiveAPI"})})}),(0,t.jsx)(i.td,{children:"Hook (React)"}),(0,t.jsx)(i.td,{children:"React\uC5D0\uC11C reactive \uC0C1\uD0DC \uAD6C\uB3C5"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"../../api/functions/connectFlickingReactiveAPI",children:(0,t.jsx)(i.code,{children:"connectFlickingReactiveAPI"})})}),(0,t.jsx)(i.td,{children:"Function (Vanilla)"}),(0,t.jsx)(i.td,{children:"Vanilla JS\uC5D0\uC11C reactive \uC0C1\uD0DC \uAD6C\uB3C5"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"\uD6A8\uACFC-\uB9E4\uD551",children:"\uD6A8\uACFC \uB9E4\uD551"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\uD328\uB110 \uC704\uCE58"}),(0,t.jsx)(i.th,{children:"rotateY"}),(0,t.jsx)(i.th,{children:"scale"}),(0,t.jsx)(i.th,{children:"opacity"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"\uD604\uC7AC \uD328\uB110 (childProgress \u2248 0)"}),(0,t.jsx)(i.td,{children:"0\xb0"}),(0,t.jsx)(i.td,{children:"0.9"}),(0,t.jsx)(i.td,{children:"1.0"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"\uC778\uC811 \uD328\uB110 (childProgress \u2248 \xb11)"}),(0,t.jsx)(i.td,{children:"\u221350\xb0"}),(0,t.jsx)(i.td,{children:"0.7"}),(0,t.jsx)(i.td,{children:"0.7"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"\uBA3C \uD328\uB110 (childProgress \u2248 \xb12)"}),(0,t.jsx)(i.td,{children:"\u2213100\xb0"}),(0,t.jsx)(i.td,{children:"0.5"}),(0,t.jsx)(i.td,{children:"0.4"})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,t.jsx)(i.h3,{id:"indexprogress\uB780",children:"indexProgress\uB780?"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"indexProgress"}),"\uB294 \uD604\uC7AC \uCE74\uBA54\uB77C \uC704\uCE58\uB97C \uD328\uB110 \uC778\uB371\uC2A4 \uAE30\uC900\uC73C\uB85C \uD45C\uD604\uD55C \uC18C\uC218\uC810 \uAC12\uC785\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 ",(0,t.jsx)(i.code,{children:"2.5"}),"\uC774\uBA74 \uD328\uB110 2\uC640 3\uC758 \uC815\uD655\uD788 \uC911\uAC04\uC5D0 \uCE74\uBA54\uB77C\uAC00 \uC788\uB2E4\uB294 \uB73B\uC785\uB2C8\uB2E4. \uB4DC\uB798\uADF8 \uC911\uC5D0\uB3C4 \uC2E4\uC2DC\uAC04\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uB429\uB2C8\uB2E4."]}),"\n",(0,t.jsx)(i.h3,{id:"\uD504\uB808\uC784\uC6CC\uD06C\uBCC4-\uC0AC\uC6A9\uBC95",children:"\uD504\uB808\uC784\uC6CC\uD06C\uBCC4 \uC0AC\uC6A9\uBC95"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"React"}),": ",(0,t.jsx)(i.code,{children:"useFlickingReactiveAPI(ref)"})," Hook\uC73C\uB85C ",(0,t.jsx)(i.code,{children:"indexProgress"}),"\uB97C \uAD6C\uB3C5\uD569\uB2C8\uB2E4. \uAC12\uC774 \uBCC0\uACBD\uB418\uBA74 \uC790\uB3D9\uC73C\uB85C \uB9AC\uB80C\uB354\uB9C1\uB429\uB2C8\uB2E4."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Vue"}),": \uC804\uC6A9 Hook\uC774 \uC5C6\uC73C\uBBC0\uB85C ",(0,t.jsx)(i.code,{children:"onMove"})," \uC774\uBCA4\uD2B8\uC5D0\uC11C \uCE74\uBA54\uB77C progress\uB97C \uC218\uB3D9\uC73C\uB85C \uACC4\uC0B0\uD569\uB2C8\uB2E4."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Vanilla JS"}),": ",(0,t.jsx)(i.code,{children:"connectFlickingReactiveAPI(flicking)"})," \uD6C4 ",(0,t.jsx)(i.code,{children:'subscribe("indexProgress", callback)'}),"\uC73C\uB85C \uAC12 \uBCC0\uACBD\uC744 \uAC10\uC9C0\uD569\uB2C8\uB2E4."]}),"\n",(0,t.jsx)(i.h3,{id:"\uC5F0\uAD00-\uC635\uC158",children:"\uC5F0\uAD00 \uC635\uC158"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsxs)(i.strong,{children:[(0,t.jsx)(i.code,{children:"circular: true"}),"\uC640\uC758 \uAD00\uACC4"]}),": \uC21C\uD658 \uBAA8\uB4DC\uC5D0\uC11C coverflow \uD6A8\uACFC\uAC00 \uB04A\uAE40 \uC5C6\uC774 \uB3D9\uC791"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsxs)(i.strong,{children:[(0,t.jsx)(i.code,{children:'align: "center"'}),"\uC640\uC758 \uAD00\uACC4"]}),": \uD604\uC7AC \uD328\uB110\uC744 \uC911\uC559\uC5D0 \uBC30\uCE58\uD558\uC5EC coverflow\uC758 \uC2DC\uAC01\uC801 \uC911\uC2EC \uD615\uC131"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,t.jsx)(i.admonition,{title:"\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"\uC568\uBC94/\uD3EC\uD2B8\uD3F4\uB9AC\uC624 \uAC24\uB7EC\uB9AC"}),"\n",(0,t.jsx)(i.li,{children:"\uC81C\uD488 \uC1FC\uCF00\uC774\uC2A4"}),"\n",(0,t.jsx)(i.li,{children:"\uBBF8\uB514\uC5B4 \uD50C\uB808\uC774\uC5B4 UI"}),"\n"]})}),"\n",(0,t.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,t.jsx)(i.admonition,{title:"\uC8FC\uC758",type:"warning",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["CSS ",(0,t.jsx)(i.code,{children:"perspective"}),"\uC640 ",(0,t.jsx)(i.code,{children:"transform-style: preserve-3d"}),"\uB97C \uBDF0\uD3EC\uD2B8/\uCE74\uBA54\uB77C\uC5D0 \uC124\uC815\uD574\uC57C 3D \uD6A8\uACFC\uAC00 \uBCF4\uC785\uB2C8\uB2E4."]}),"\n",(0,t.jsx)(i.li,{children:"\uD328\uB110\uC774 \uB108\uBB34 \uC801\uC73C\uBA74 \uC21C\uD658 \uC2DC \uBE48 \uACF5\uAC04\uC774 \uC0DD\uAE38 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uCD5C\uC18C 5\uAC1C \uC774\uC0C1 \uAD8C\uC7A5\uD569\uB2C8\uB2E4."}),"\n"]})}),"\n",(0,t.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,t.jsx)(i.h3,{id:"\uAD00\uB828-api",children:"\uAD00\uB828 API"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"../../api/interfaces/FlickingReactiveState#indexprogress",children:(0,t.jsx)(i.code,{children:"indexProgress"})}),": \uD328\uB110 \uC778\uB371\uC2A4 \uC9C4\uD589\uB3C4"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"../../api/functions/connectFlickingReactiveAPI",children:(0,t.jsx)(i.code,{children:"connectFlickingReactiveAPI"})}),": Reactive API \uC5F0\uACB0"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"./progress-bar",children:"Progress Bar"}),": Reactive API\uB85C \uC9C4\uD589\uB3C4 \uD45C\uC2DC"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"./pagination",children:"Pagination"}),": Reactive API\uB85C \uD398\uC774\uC9C0\uB124\uC774\uC158"]}),"\n"]})]})}function j(e={}){let{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},27449(e,i,s){s.d(i,{A:()=>d});var n=s(65723),t=s(19612);s(22155);let c="^4.11.4",l={react:{"@egjs/react-flicking":c,"@egjs/flicking":c},vue3:{"@egjs/vue3-flicking":c,"@egjs/flicking":c},vanilla:{"@egjs/flicking":c}},r=`<!DOCTYPE html>
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
`;function d({code:e,html:i,template:s="react",dependencies:c={},files:d={},css:g=""}){var h;let p,x,j;return(0,n.jsx)(t.OZ,{template:"vue3"===s?"vue":"vanilla"===s?"vanilla":"react",files:(j={"/styles.css":{code:x=g?`${a}
${g}`:a},...d},"react"===s?{"/App.tsx":{code:e},"/index.js":{code:o,hidden:!0},...j}:"vue3"===s?{"/src/App.vue":{code:e},...j}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),s=[],n=[],t=!1;for(let e of i)t?n.push(e):e.trimStart().startsWith("import ")||""===e.trim()?s.push(e.replace('"../styles.css"','"./styles.css"')):(t=!0,n.push(e));for(;n.length>0&&""===n[n.length-1].trim();)n.pop();return[...s,"","const _run = () => {",...n.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:x},"/index.html":{code:(p="<style>.flicking-viewport{opacity:0}</style>",(h=i||r).includes("</head>")?h.replace("</head>",`${p}
</head>`):p+h)},...d}),customSetup:{dependencies:{...l[s],...c}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===s?["/App.tsx","/styles.css"]:"vue3"===s?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===s?"/App.tsx":"vue3"===s?"/src/App.vue":"/src/index.js"}})}},72722(e,i,s){s.d(i,{A:()=>f});var n=s(65723),t=s(34622),c=s(7210),l=s(78863);s(22155);let r=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,o=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",a=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${r(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",d=e=>`${Object.keys(e).map(i=>`${i}: ${r(e[i],"'")}`).join(", ")}`,g=(e,{prefix:i,includeFlicking:s=!0}={})=>{let n=s?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&n.push(...e),`${n.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},h=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${d(e[1])} }`:e[1]??""}`).join(", ")})`,p=({options:e,panels:i,events:s={},methods:c={},plugins:l=[],siblings:d=[],imports:h=[],viewportClass:p=""})=>{let x=e=>`${Object.keys(e).map(i=>`${i}: ${r(e[i])}`).join(",\n  ")}`,j=Object.keys(c).map(e=>`const ${e} = ${c[e]};
`).join(""),f=e?`const flicking = new Flicking("#flick", {
  ${x(e)}
});

`:'const flicking = new Flicking("#flick")',m=l.length>0?`flicking.addPlugins(${l.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?x(e[1]):e[1]??""}
}`:""})`)});`:"",u=[...l.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...h],v=Object.keys(s).map(e=>{let i=s[e];return`flicking.on("${e}", ${i})
`}).join(""),$=i.filter(e=>e.isSlot);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${p&&` ${p}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${o(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${$.length?`
  ${$.map(e=>`<${e.tag}${o(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${d?"\n"+d.map(e=>`<${e.tag}${o(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,n.jsx)(t.A,{className:"language-js",title:"js",children:`${g(u)}

${j}${f}${m}${v}`.trim()})]})},x=({options:e,panels:i,events:s={},methods:c={},plugins:l,siblings:r,imports:d=[],viewportClass:p=""})=>{let x=l?`
  private _plugins = [${h(l)}];
`:"",j=i.filter(e=>e.isSlot),f=[["{ Component }","react"],[j.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],m=Object.keys(c).map(e=>`
const ${e} = ${c[e]};`).join("");m&&(m+="\n"),l&&f.push([`{ ${l.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),f.push(...d);let u=j.length?`
      <ViewportSlot>
        ${j.map(e=>`<${e.tag}${o(e,"className")}${a(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",v=Object.keys(s).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${s[e]}}`).join("");return(0,n.jsx)(t.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${g(f,{includeFlicking:!1})}
${m}
export default class DemoComponent extends Component {${x}
  public render() {
    return ${r?"<>\n    ":""}<Flicking${p&&` className="${p}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${l?" plugins={this._plugins}":""}${v}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${o(e,"className")}${a(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${u}
    </Flicking>${r?`
    ${r.map(e=>`<${e.tag}${o(e,"className")}${a(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},j=({options:e,panels:i,events:s={},methods:c={},plugins:l,siblings:r=[],imports:p=[],viewportClass:x=""})=>{let j=d(e),f=i.filter(e=>e.isSlot),m=l?`,
  data() {
    return {
      plugins: [${h(l)}]
    }
  }`:"",u=f.length?`
  <template #viewport>
    ${f.map(e=>`<${e.tag}${o(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",v=[...(l??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...p],$=Object.keys(c),k=$.length>0?`,
  methods: {
    ${$.map(e=>`${e}: ${c[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",b=Object.keys(s).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${s[e]}"`).join("");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.A,{className:"language-html",title:"template",children:`<Flicking${x&&` class="${x}"`}${e?` :options="{ ${j} }"`:""}${l?' :plugins="plugins"':""}${b}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${o(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n  ")}${u}
</Flicking>${r?`
${r.map(e=>`<${e.tag}${o(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,n.jsx)(t.A,{className:"language-js",title:"script",children:`${g(v,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${m}${k}
}`})]})},f=({js:e,react:i,vue3:s,style:r,...o})=>(0,n.jsxs)("div",{children:[(0,n.jsxs)(l.A,{groupId:"cfc",defaultValue:"js",children:[(0,n.jsx)(c.A,{value:"react",label:"React",children:i||(0,n.jsx)(x,{...o})}),(0,n.jsx)(c.A,{value:"vue3",label:"Vue@3",children:s||(0,n.jsx)(j,{...o})}),(0,n.jsx)(c.A,{value:"js",label:"JavaScript",children:e||(0,n.jsx)(p,{...o})})]}),r&&(0,n.jsx)(t.A,{className:"language-css",title:"style",children:`${r}`})]})}}]);