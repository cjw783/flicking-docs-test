"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["2308"],{79758(e,n,i){i.r(n),i.d(n,{metadata:()=>t,default:()=>m,frontMatter:()=>o,contentTitle:()=>p,toc:()=>u,assets:()=>h});var t=JSON.parse('{"id":"demos/advanced/add-remove","title":"Add / Remove","description":"prepend, append, remove API\uB85C \uD328\uB110\uC744 \uB3D9\uC801\uC73C\uB85C \uCD94\uAC00/\uC81C\uAC70\uD569\uB2C8\uB2E4","source":"@site/docs/demos/advanced/add-remove.mdx","sourceDirName":"demos/advanced","slug":"/demos/advanced/add-remove","permalink":"/flicking-docs-test/ko/docs/demos/advanced/add-remove","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/advanced/add-remove.mdx","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"Add / Remove","id":"add-remove","slug":"/demos/advanced/add-remove","sidebar_position":8,"description":"prepend, append, remove API\uB85C \uD328\uB110\uC744 \uB3D9\uC801\uC73C\uB85C \uCD94\uAC00/\uC81C\uAC70\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","prepend","append","remove","\uB3D9\uC801","\uD328\uB110 \uCD94\uAC00","\uD328\uB110 \uC81C\uAC70"]},"sidebar":"demosSidebar","previous":{"title":"Resize Optimization","permalink":"/flicking-docs-test/ko/docs/demos/advanced/resize-optimization"},"next":{"title":"Carousel","permalink":"/flicking-docs-test/ko/docs/demos/advanced/carousel"}}'),l=i(65723),s=i(54187),c=i(27449),d=i(72722);i(22155);let r=`
.flicking-panel {
  width: 200px;
  height: 150px;
  margin-right: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: white;
}

.controls {
  display: flex;
  justify-content: center;
  margin-top: 12px;
  gap: 8px;
  flex-wrap: wrap;
}

.button {
  padding: 8px 16px;
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

.button.danger {
  border-color: #e74c3c;
  color: #e74c3c;
}

.button.danger:hover {
  background: #e74c3c;
  color: white;
}

.info-bar {
  margin-top: 8px;
  padding: 8px 12px;
  background: #f5f5f5;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  text-align: center;
}
`,a=()=>{let e=`import Flicking from "@egjs/react-flicking";
import "@egjs/flicking/dist/flicking.css";
import { useState } from "react";

const COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6"];

export default function App() {
  const [panels, setPanels] = useState([0, 1, 2, 3, 4]);
  const [counter, setCounter] = useState(5);

  const handlePrepend = () => {
    setPanels(prev => [counter, ...prev]);
    setCounter(c => c + 1);
  };

  const handleAppend = () => {
    setPanels(prev => [...prev, counter]);
    setCounter(c => c + 1);
  };

  const handleRemoveFirst = () => {
    if (panels.length > 1) {
      setPanels(prev => prev.slice(1));
    }
  };

  const handleRemoveLast = () => {
    if (panels.length > 1) {
      setPanels(prev => prev.slice(0, -1));
    }
  };

  return (
    <div>
      <Flicking renderOnlyVisible={true} align="prev" bound={true}>
        {panels.map(i => (
          <div className="flicking-panel" key={i}
               style={{ background: COLORS[i % COLORS.length] }}>
            {i}
          </div>
        ))}
      </Flicking>
      <div className="controls">
        <button className="button" onClick={handlePrepend}>Prepend</button>
        <button className="button" onClick={handleAppend}>Append</button>
        <button className="button danger" onClick={handleRemoveFirst}>Remove First</button>
        <button className="button danger" onClick={handleRemoveLast}>Remove Last</button>
      </div>
      <div className="info-bar">
        \u{D328}\u{B110} \u{C218}: {panels.length}
      </div>
    </div>
  );
}`,n=`<template>
  <div>
    <Flicking
      :options="{ renderOnlyVisible: true, align: 'prev', bound: true }"
    >
      <div v-for="i in panels" :key="i"
           class="flicking-panel"
           :style="{ background: COLORS[i % COLORS.length] }">
        {{ i }}
      </div>
    </Flicking>
    <div class="controls">
      <button class="button" @click="prepend">Prepend</button>
      <button class="button" @click="append">Append</button>
      <button class="button danger" @click="removeFirst">Remove First</button>
      <button class="button danger" @click="removeLast">Remove Last</button>
    </div>
    <div class="info-bar">\u{D328}\u{B110} \u{C218}: {{ panels.length }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Flicking from "@egjs/vue3-flicking";
import "@egjs/flicking/dist/flicking.css";

const COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6"];
const panels = ref([0, 1, 2, 3, 4]);
let counter = 5;

const prepend = () => { panels.value = [counter++, ...panels.value]; };
const append = () => { panels.value = [...panels.value, counter++]; };
const removeFirst = () => {
  if (panels.value.length > 1) panels.value = panels.value.slice(1);
};
const removeLast = () => {
  if (panels.value.length > 1) panels.value = panels.value.slice(0, -1);
};
</script>`,i=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";

const COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6"];
let counter = 5;

const camera = document.querySelector(".flicking-camera");
for (let i = 0; i < 5; i++) {
  const panel = document.createElement("div");
  panel.className = "flicking-panel";
  panel.style.background = COLORS[i % COLORS.length];
  panel.textContent = i;
  camera.appendChild(panel);
}

const flicking = new Flicking("#flick", {
  renderOnlyVisible: true,
  align: "prev",
  bound: true
});

const infoBar = document.querySelector(".info-bar");
const updateInfo = () => {
  infoBar.textContent = \`\u{D328}\u{B110} \u{C218}: \${flicking.panelCount}\`;
};

document.getElementById("btn-prepend").addEventListener("click", () => {
  flicking.prepend(\`<div class="flicking-panel" style="background:\${COLORS[counter % COLORS.length]}">\${counter}</div>\`);
  counter++;
  updateInfo();
});

document.getElementById("btn-append").addEventListener("click", () => {
  flicking.append(\`<div class="flicking-panel" style="background:\${COLORS[counter % COLORS.length]}">\${counter}</div>\`);
  counter++;
  updateInfo();
});

document.getElementById("btn-remove-first").addEventListener("click", () => {
  if (flicking.panelCount > 1) {
    flicking.remove(0);
    updateInfo();
  }
});

document.getElementById("btn-remove-last").addEventListener("click", () => {
  if (flicking.panelCount > 1) {
    flicking.remove(flicking.panelCount - 1);
    updateInfo();
  }
});`,t=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <div id="app">
    <div id="flick" class="flicking-viewport">
      <div class="flicking-camera"></div>
    </div>
    <div class="controls">
      <button class="button" id="btn-prepend">Prepend</button>
      <button class="button" id="btn-append">Append</button>
      <button class="button danger" id="btn-remove-first">Remove First</button>
      <button class="button danger" id="btn-remove-last">Remove Last</button>
    </div>
    <div class="info-bar">\u{D328}\u{B110} \u{C218}: 5</div>
  </div>
</body>
</html>`;return(0,l.jsx)(d.A,{options:{renderOnlyVisible:!0,align:"prev",bound:!0},panels:[],react:(0,l.jsx)(c.A,{template:"react",code:e,css:r}),vue3:(0,l.jsx)(c.A,{template:"vue3",code:n,css:r}),js:(0,l.jsx)(c.A,{template:"vanilla",code:i,html:t,css:r})})},o={title:"Add / Remove",id:"add-remove",slug:"/demos/advanced/add-remove",sidebar_position:8,description:"prepend, append, remove API\uB85C \uD328\uB110\uC744 \uB3D9\uC801\uC73C\uB85C \uCD94\uAC00/\uC81C\uAC70\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","prepend","append","remove","\uB3D9\uC801","\uD328\uB110 \uCD94\uAC00","\uD328\uB110 \uC81C\uAC70"]},p="Add / Remove",h={},u=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 API \uBA54\uC18C\uB4DC",id:"\uC8FC\uC694-api-\uBA54\uC18C\uB4DC",level:3},{value:"\uB3D9\uC791 \uBE44\uAD50",id:"\uB3D9\uC791-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"\uD504\uB808\uC784\uC6CC\uD06C\uBCC4 \uD328\uD134 \uCC28\uC774",id:"\uD504\uB808\uC784\uC6CC\uD06C\uBCC4-\uD328\uD134-\uCC28\uC774",level:3},{value:"\uC5F0\uAD00 \uC635\uC158",id:"\uC5F0\uAD00-\uC635\uC158",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 API",id:"\uAD00\uB828-api",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function g(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"add--remove",children:"Add / Remove"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"prepend()"}),", ",(0,l.jsx)(n.code,{children:"append()"}),", ",(0,l.jsx)(n.code,{children:"remove()"})," API \uBA54\uC18C\uB4DC\uB85C \uD328\uB110\uC744 \uB3D9\uC801\uC73C\uB85C \uCD94\uAC00\uD558\uAC70\uB098 \uC81C\uAC70\uD569\uB2C8\uB2E4."]}),"\n",(0,l.jsx)(a,{}),"\n",(0,l.jsx)(n.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,l.jsx)(n.h3,{id:"\uC8FC\uC694-api-\uBA54\uC18C\uB4DC",children:"\uC8FC\uC694 API \uBA54\uC18C\uB4DC"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\uBA54\uC18C\uB4DC"}),(0,l.jsx)(n.th,{children:"\uC2DC\uADF8\uB2C8\uCC98"}),(0,l.jsx)(n.th,{children:"\uC124\uBA85"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../api/classes/Flicking#append",children:(0,l.jsx)(n.code,{children:"append"})})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"append(element): Panel[]"})}),(0,l.jsx)(n.td,{children:"\uB9C8\uC9C0\uB9C9 \uD328\uB110 \uB4A4\uC5D0 \uCD94\uAC00"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../api/classes/Flicking#prepend",children:(0,l.jsx)(n.code,{children:"prepend"})})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"prepend(element): Panel[]"})}),(0,l.jsx)(n.td,{children:"\uCCAB \uBC88\uC9F8 \uD328\uB110 \uC55E\uC5D0 \uCD94\uAC00"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../api/classes/Flicking#remove",children:(0,l.jsx)(n.code,{children:"remove"})})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"remove(index, count?): Panel[]"})}),(0,l.jsx)(n.td,{children:"\uC9C0\uC815 \uC778\uB371\uC2A4\uC758 \uD328\uB110 \uC81C\uAC70"})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"\uB3D9\uC791-\uBE44\uAD50",children:"\uB3D9\uC791 \uBE44\uAD50"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\uBA54\uC18C\uB4DC"}),(0,l.jsx)(n.th,{children:"\uC778\uB371\uC2A4 \uBCC0\uD654"}),(0,l.jsx)(n.th,{children:"\uC801\uD569\uD55C \uC0C1\uD669"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"prepend"})}),(0,l.jsx)(n.td,{children:"\uAE30\uC874 \uD328\uB110 \uC778\uB371\uC2A4 +1 \uC99D\uAC00"}),(0,l.jsx)(n.td,{children:"\uCD5C\uC2E0 \uD56D\uBAA9\uC744 \uC55E\uC5D0 \uCD94\uAC00"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"append"})}),(0,l.jsx)(n.td,{children:"\uAE30\uC874 \uD328\uB110 \uC778\uB371\uC2A4 \uC720\uC9C0"}),(0,l.jsx)(n.td,{children:"\uD53C\uB4DC \uB05D\uC5D0 \uC0C8 \uD56D\uBAA9 \uCD94\uAC00"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"remove"})}),(0,l.jsx)(n.td,{children:"\uC81C\uAC70\uB41C \uD328\uB110 \uB4A4 \uC778\uB371\uC2A4 -1 \uAC10\uC18C"}),(0,l.jsx)(n.td,{children:"\uD56D\uBAA9 \uC0AD\uC81C"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,l.jsx)(n.h3,{id:"\uD504\uB808\uC784\uC6CC\uD06C\uBCC4-\uD328\uD134-\uCC28\uC774",children:"\uD504\uB808\uC784\uC6CC\uD06C\uBCC4 \uD328\uD134 \uCC28\uC774"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"React / Vue"}),": \uD504\uB808\uC784\uC6CC\uD06C\uC758 \uC0C1\uD0DC \uAD00\uB9AC\uB85C \uD328\uB110 \uBC30\uC5F4\uC744 \uC870\uC791\uD569\uB2C8\uB2E4. Flicking\uC774 \uC0C1\uD0DC \uBCC0\uD654\uB97C \uAC10\uC9C0\uD558\uC5EC \uC790\uB3D9\uC73C\uB85C \uD328\uB110\uC744 \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Vanilla JS"}),": Flicking \uC778\uC2A4\uD134\uC2A4\uC758 ",(0,l.jsx)(n.code,{children:"prepend()"}),", ",(0,l.jsx)(n.code,{children:"append()"}),", ",(0,l.jsx)(n.code,{children:"remove()"})," \uBA54\uC18C\uB4DC\uB97C \uC9C1\uC811 \uD638\uCD9C\uD569\uB2C8\uB2E4. ",(0,l.jsx)(n.code,{children:"element"})," \uD30C\uB77C\uBBF8\uD130\uC5D0 HTMLElement \uB610\uB294 outerHTML \uBB38\uC790\uC5F4\uC744 \uC804\uB2EC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n",(0,l.jsx)(n.h3,{id:"\uC5F0\uAD00-\uC635\uC158",children:"\uC5F0\uAD00 \uC635\uC158"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsxs)(n.strong,{children:[(0,l.jsx)(n.code,{children:"renderOnlyVisible"}),"\uACFC\uC758 \uAD00\uACC4"]}),": \uD328\uB110\uC774 \uB9CE\uC744 \uB54C ",(0,l.jsx)(n.code,{children:"renderOnlyVisible: true"}),"\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD558\uBA74 \uB3D9\uC801 \uCD94\uAC00\uC5D0\uB3C4 \uC131\uB2A5 \uC720\uC9C0"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsxs)(n.strong,{children:[(0,l.jsx)(n.code,{children:"needPanelThreshold"}),"\uC640\uC758 \uAD00\uACC4"]}),": ",(0,l.jsx)(n.code,{children:"needPanel"})," \uC774\uBCA4\uD2B8\uC640 \uC870\uD569\uD558\uC5EC \uBB34\uD55C \uC2A4\uD06C\uB864 \uD328\uD134 \uAD6C\uD604 \uAC00\uB2A5"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,l.jsx)(n.admonition,{title:"\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\uC18C\uC15C \uBBF8\uB514\uC5B4 \uD53C\uB4DC: \uC0C8 \uAC8C\uC2DC\uBB3C\uC744 \uC55E\uC5D0 ",(0,l.jsx)(n.code,{children:"prepend"}),", \uC624\uB798\uB41C \uAC8C\uC2DC\uBB3C\uC744 \uB4A4\uC5D0 ",(0,l.jsx)(n.code,{children:"append"})]}),"\n",(0,l.jsx)(n.li,{children:"\uC1FC\uD551\uBAB0 \uC0C1\uD488 \uBAA9\uB85D: \uD544\uD130\uB9C1\uC5D0 \uB530\uB77C \uD328\uB110 \uC81C\uAC70/\uCD94\uAC00"}),"\n",(0,l.jsx)(n.li,{children:"\uB300\uC2DC\uBCF4\uB4DC \uC704\uC82F: \uC704\uC82F \uCD94\uAC00/\uC81C\uAC70"}),"\n"]})}),"\n",(0,l.jsx)(n.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,l.jsx)(n.admonition,{title:"\uC8FC\uC758",type:"warning",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"prepend"})," \uC2DC \uAE30\uC874 \uD328\uB110\uC758 \uC778\uB371\uC2A4\uAC00 \uBAA8\uB450 1\uC529 \uC99D\uAC00\uD569\uB2C8\uB2E4. \uC778\uB371\uC2A4\uC5D0 \uC758\uC874\uD558\uB294 \uB85C\uC9C1\uC774 \uC788\uB2E4\uBA74 \uC8FC\uC758\uD558\uC138\uC694."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"remove"})," \uD6C4 \uD604\uC7AC \uBCF4\uACE0 \uC788\uB294 \uD328\uB110\uC774 \uC81C\uAC70\uB418\uBA74 \uC778\uC811 \uD328\uB110\uB85C \uC790\uB3D9 \uC774\uB3D9\uD569\uB2C8\uB2E4."]}),"\n",(0,l.jsxs)(n.li,{children:["React/Vue\uC5D0\uC11C\uB294 \uAC01 \uD328\uB110\uC5D0 \uACE0\uC720\uD55C ",(0,l.jsx)(n.code,{children:"key"}),"\uB97C \uBD80\uC5EC\uD574\uC57C \uC815\uC0C1 \uB3D9\uC791\uD569\uB2C8\uB2E4."]}),"\n"]})}),"\n",(0,l.jsx)(n.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,l.jsx)(n.h3,{id:"\uAD00\uB828-api",children:"\uAD00\uB828 API"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../../api/classes/Flicking#append",children:(0,l.jsx)(n.code,{children:"append"})}),": \uD328\uB110 \uB4A4\uC5D0 \uCD94\uAC00"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../../api/classes/Flicking#prepend",children:(0,l.jsx)(n.code,{children:"prepend"})}),": \uD328\uB110 \uC55E\uC5D0 \uCD94\uAC00"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../../api/classes/Flicking#remove",children:(0,l.jsx)(n.code,{children:"remove"})}),": \uD328\uB110 \uC81C\uAC70"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"./infinite-scroll",children:"Infinite Scroll"}),": ",(0,l.jsx)(n.code,{children:"needPanel"})," \uC774\uBCA4\uD2B8\uB85C \uC790\uB3D9 \uD328\uB110 \uCD94\uAC00"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"./lazy-load",children:"Lazy Load"}),": ",(0,l.jsx)(n.code,{children:"renderOnlyVisible"}),"\uACFC \uD568\uAED8 \uC0AC\uC6A9\uD558\uB294 \uCD5C\uC801\uD654 \uD328\uD134"]}),"\n"]})]})}function m(e={}){let{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(g,{...e})}):g(e)}},27449(e,n,i){i.d(n,{A:()=>o});var t=i(65723),l=i(19612);i(22155);let s="^4.11.4",c={react:{"@egjs/react-flicking":s,"@egjs/flicking":s},vue3:{"@egjs/vue3-flicking":s,"@egjs/flicking":s},vanilla:{"@egjs/flicking":s}},d=`<!DOCTYPE html>
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
`;function o({code:e,html:n,template:i="react",dependencies:s={},files:o={},css:p=""}){var h;let u,g,m;return(0,t.jsx)(l.OZ,{template:"vue3"===i?"vue":"vanilla"===i?"vanilla":"react",files:(m={"/styles.css":{code:g=p?`${a}
${p}`:a},...o},"react"===i?{"/App.tsx":{code:e},"/index.js":{code:r,hidden:!0},...m}:"vue3"===i?{"/src/App.vue":{code:e},...m}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let n=e.split("\n"),i=[],t=[],l=!1;for(let e of n)l?t.push(e):e.trimStart().startsWith("import ")||""===e.trim()?i.push(e.replace('"../styles.css"','"./styles.css"')):(l=!0,t.push(e));for(;t.length>0&&""===t[t.length-1].trim();)t.pop();return[...i,"","const _run = () => {",...t.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:g},"/index.html":{code:(u="<style>.flicking-viewport{opacity:0}</style>",(h=n||d).includes("</head>")?h.replace("</head>",`${u}
</head>`):u+h)},...o}),customSetup:{dependencies:{...c[i],...s}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===i?["/App.tsx","/styles.css"]:"vue3"===i?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===i?"/App.tsx":"vue3"===i?"/src/App.vue":"/src/index.js"}})}},72722(e,n,i){i.d(n,{A:()=>j});var t=i(65723),l=i(34622),s=i(7210),c=i(78863);i(22155);let d=(e,n='"')=>"string"==typeof e?`${n}${e}${n}`:e,r=(e,n="class")=>e.class?` ${n}="${e.class}"`:"",a=(e,n=!1)=>e.style?n?` style={{ ${Object.keys(e.style).map(n=>`${n}: ${d(e.style[n])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(n=>`${n}: ${e.style[n]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(n=>`${n}: ${d(e[n],"'")}`).join(", ")}`,p=(e,{prefix:n,includeFlicking:i=!0}={})=>{let t=i?[["Flicking",`@egjs/${n?`${n}-`:""}flicking`]]:[];return e&&t.push(...e),`${t.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},h=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,u=({options:e,panels:n,events:i={},methods:s={},plugins:c=[],siblings:o=[],imports:h=[],viewportClass:u=""})=>{let g=e=>`${Object.keys(e).map(n=>`${n}: ${d(e[n])}`).join(",\n  ")}`,m=Object.keys(s).map(e=>`const ${e} = ${s[e]};
`).join(""),j=e?`const flicking = new Flicking("#flick", {
  ${g(e)}
});

`:'const flicking = new Flicking("#flick")',x=c.length>0?`flicking.addPlugins(${c.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?g(e[1]):e[1]??""}
}`:""})`)});`:"",v=[...c.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...h],f=Object.keys(i).map(e=>{let n=i[e];return`flicking.on("${e}", ${n})
`}).join(""),$=n.filter(e=>e.isSlot);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${u&&` ${u}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${n.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${$.length?`
  ${$.map(e=>`<${e.tag}${r(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${r(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,t.jsx)(l.A,{className:"language-js",title:"js",children:`${p(v)}

${m}${j}${x}${f}`.trim()})]})},g=({options:e,panels:n,events:i={},methods:s={},plugins:c,siblings:d,imports:o=[],viewportClass:u=""})=>{let g=c?`
  private _plugins = [${h(c)}];
`:"",m=n.filter(e=>e.isSlot),j=[["{ Component }","react"],[m.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],x=Object.keys(s).map(e=>`
const ${e} = ${s[e]};`).join("");x&&(x+="\n"),c&&j.push([`{ ${c.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),j.push(...o);let v=m.length?`
      <ViewportSlot>
        ${m.map(e=>`<${e.tag}${r(e,"className")}${a(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",f=Object.keys(i).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${i[e]}}`).join("");return(0,t.jsx)(l.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(j,{includeFlicking:!1})}
${x}
export default class DemoComponent extends Component {${g}
  public render() {
    return ${d?"<>\n    ":""}<Flicking${u&&` className="${u}"`}${e?` ${Object.keys(e).map(n=>`${n}=${"string"==typeof e[n]?`"${e[n]}"`:`{${e[n]}}`}`).join(" ")}`:""}${c?" plugins={this._plugins}":""}${f}>
      ${n.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e,"className")}${a(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${v}
    </Flicking>${d?`
    ${d.map(e=>`<${e.tag}${r(e,"className")}${a(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},m=({options:e,panels:n,events:i={},methods:s={},plugins:c,siblings:d=[],imports:u=[],viewportClass:g=""})=>{let m=o(e),j=n.filter(e=>e.isSlot),x=c?`,
  data() {
    return {
      plugins: [${h(c)}]
    }
  }`:"",v=j.length?`
  <template #viewport>
    ${j.map(e=>`<${e.tag}${r(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",f=[...(c??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...u],$=Object.keys(s),b=$.length>0?`,
  methods: {
    ${$.map(e=>`${e}: ${s[e].split("\n").map((e,n)=>n>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",k=Object.keys(i).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${i[e]}"`).join("");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.A,{className:"language-html",title:"template",children:`<Flicking${g&&` class="${g}"`}${e?` :options="{ ${m} }"`:""}${c?' :plugins="plugins"':""}${k}>
  ${n.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n  ")}${v}
</Flicking>${d?`
${d.map(e=>`<${e.tag}${r(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,t.jsx)(l.A,{className:"language-js",title:"script",children:`${p(f,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${x}${b}
}`})]})},j=({js:e,react:n,vue3:i,style:d,...r})=>(0,t.jsxs)("div",{children:[(0,t.jsxs)(c.A,{groupId:"cfc",defaultValue:"js",children:[(0,t.jsx)(s.A,{value:"react",label:"React",children:n||(0,t.jsx)(g,{...r})}),(0,t.jsx)(s.A,{value:"vue3",label:"Vue@3",children:i||(0,t.jsx)(m,{...r})}),(0,t.jsx)(s.A,{value:"js",label:"JavaScript",children:e||(0,t.jsx)(u,{...r})})]}),d&&(0,t.jsx)(l.A,{className:"language-css",title:"style",children:`${d}`})]})}}]);