"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["4634"],{98955(e,i,n){n.r(i),n.d(i,{metadata:()=>s,default:()=>m,frontMatter:()=>d,contentTitle:()=>p,toc:()=>h,assets:()=>g});var s=JSON.parse('{"id":"demos/advanced/cross-flicking","title":"Cross Flicking","description":"nested \uC635\uC158\uC73C\uB85C \uAC00\uB85C/\uC138\uB85C \uC911\uCCA9 Flicking\uC744 \uAD6C\uC131\uD569\uB2C8\uB2E4","source":"@site/docs/demos/advanced/cross-flicking.mdx","sourceDirName":"demos/advanced","slug":"/demos/advanced/cross-flicking","permalink":"/flicking-docs-test/docs/demos/advanced/cross-flicking","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/advanced/cross-flicking.mdx","tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"Cross Flicking","id":"cross-flicking","slug":"/demos/advanced/cross-flicking","sidebar_position":15,"description":"nested \uC635\uC158\uC73C\uB85C \uAC00\uB85C/\uC138\uB85C \uC911\uCCA9 Flicking\uC744 \uAD6C\uC131\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","nested","cross","\uC911\uCCA9","\uAC00\uB85C\uC138\uB85C"]},"sidebar":"demosSidebar","previous":{"title":"Fullpage Scroll","permalink":"/flicking-docs-test/docs/demos/advanced/fullpage-scroll"},"next":{"title":"Animation Threshold","permalink":"/flicking-docs-test/docs/demos/advanced/animation-threshold"}}'),t=n(65723),l=n(54187),r=n(27449),c=n(72722);n(22155);let o=`
.outer-viewport {
  height: 250px;
}

.outer-panel {
  width: 100%;
  height: 250px;
}

.inner-panel {
  width: 200px;
  height: 200px;
  margin: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: white;
  flex-direction: column;
  gap: 4px;
}

.inner-panel .panel-subtitle {
  font-size: 12px;
  font-weight: normal;
  opacity: 0.8;
}

.group-label {
  text-align: center;
  font-size: 14px;
  color: #666;
  padding: 8px 0;
  font-weight: bold;
}

.info-bar {
  margin-top: 8px;
  padding: 8px 12px;
  background: #f5f5f5;
  border-radius: 4px;
  font-size: 13px;
  color: #333;
  text-align: center;
}
`,a=()=>{let e=`import Flicking from "@egjs/react-flicking";
import "@egjs/flicking/dist/flicking.css";
import { useState } from "react";

const GROUPS = [
  { name: "Group A", colors: ["#e74c3c", "#c0392b", "#e67e22"] },
  { name: "Group B", colors: ["#3498db", "#2980b9", "#1abc9c"] },
  { name: "Group C", colors: ["#2ecc71", "#27ae60", "#16a085"] },
];

export default function App() {
  const [outerIndex, setOuterIndex] = useState(0);

  return (
    <div>
      <Flicking
        horizontal={false}
        moveType="strict"
        bound={true}
        align="prev"
        onChanged={(e) => setOuterIndex(e.index)}
        className="outer-viewport"
      >
        {GROUPS.map((group, gi) => (
          <div className="outer-panel" key={gi}>
            <div className="group-label">{group.name} (\u{C138}\u{B85C} \u{C2A4}\u{C640}\u{C774}\u{D504}\u{B85C} \u{ADF8}\u{B8F9} \u{C774}\u{B3D9})</div>
            <Flicking nested={true} moveType="strict" bound={true} align="prev">
              {group.colors.map((color, pi) => (
                <div className="inner-panel" key={pi} style={{ background: color }}>
                  <span>{group.name}-{pi + 1}</span>
                  <span className="panel-subtitle">\u{AC00}\u{B85C} \u{C2A4}\u{C640}\u{C774}\u{D504}</span>
                </div>
              ))}
            </Flicking>
          </div>
        ))}
      </Flicking>
      <div className="info-bar">
        \u{D604}\u{C7AC} \u{ADF8}\u{B8F9}: {GROUPS[outerIndex]?.name || "?"} (\u{C138}\u{B85C}\u{2195} \u{ADF8}\u{B8F9} \u{AC04} \u{C774}\u{B3D9} / \u{AC00}\u{B85C}\u{2194} \u{ADF8}\u{B8F9} \u{B0B4} \u{C774}\u{B3D9})
      </div>
    </div>
  );
}`,i=`<template>
  <div>
    <Flicking
      :options="{
        horizontal: false,
        moveType: 'strict',
        bound: true,
        align: 'prev'
      }"
      class="outer-viewport"
      @changed="onOuterChanged"
    >
      <div v-for="(group, gi) in GROUPS" :key="gi" class="outer-panel">
        <div class="group-label">{{ group.name }} (\u{C138}\u{B85C} \u{C2A4}\u{C640}\u{C774}\u{D504}\u{B85C} \u{ADF8}\u{B8F9} \u{C774}\u{B3D9})</div>
        <Flicking :options="{ nested: true, moveType: 'strict', bound: true, align: 'prev' }">
          <div v-for="(color, pi) in group.colors" :key="pi"
               class="inner-panel" :style="{ background: color }">
            <span>{{ group.name }}-{{ pi + 1 }}</span>
            <span class="panel-subtitle">\u{AC00}\u{B85C} \u{C2A4}\u{C640}\u{C774}\u{D504}</span>
          </div>
        </Flicking>
      </div>
    </Flicking>
    <div class="info-bar">
      \u{D604}\u{C7AC} \u{ADF8}\u{B8F9}: {{ GROUPS[outerIndex]?.name }} (\u{C138}\u{B85C}\u{2195} \u{ADF8}\u{B8F9} \u{AC04} \u{C774}\u{B3D9} / \u{AC00}\u{B85C}\u{2194} \u{ADF8}\u{B8F9} \u{B0B4} \u{C774}\u{B3D9})
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Flicking from "@egjs/vue3-flicking";
import "@egjs/flicking/dist/flicking.css";

const GROUPS = [
  { name: "Group A", colors: ["#e74c3c", "#c0392b", "#e67e22"] },
  { name: "Group B", colors: ["#3498db", "#2980b9", "#1abc9c"] },
  { name: "Group C", colors: ["#2ecc71", "#27ae60", "#16a085"] },
];

const outerIndex = ref(0);
const onOuterChanged = (e) => { outerIndex.value = e.index; };
</script>`,n=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";

const GROUPS = [
  { name: "Group A", colors: ["#e74c3c", "#c0392b", "#e67e22"] },
  { name: "Group B", colors: ["#3498db", "#2980b9", "#1abc9c"] },
  { name: "Group C", colors: ["#2ecc71", "#27ae60", "#16a085"] },
];

const outerCamera = document.querySelector("#outer .flicking-camera");

GROUPS.forEach((group, gi) => {
  const outerPanel = document.createElement("div");
  outerPanel.className = "outer-panel";

  const label = document.createElement("div");
  label.className = "group-label";
  label.textContent = group.name + " (\u{C138}\u{B85C} \u{C2A4}\u{C640}\u{C774}\u{D504}\u{B85C} \u{ADF8}\u{B8F9} \u{C774}\u{B3D9})";
  outerPanel.appendChild(label);

  const innerViewport = document.createElement("div");
  innerViewport.className = "flicking-viewport";
  innerViewport.id = "inner-" + gi;
  const innerCamera = document.createElement("div");
  innerCamera.className = "flicking-camera";
  innerViewport.appendChild(innerCamera);

  group.colors.forEach((color, pi) => {
    const panel = document.createElement("div");
    panel.className = "inner-panel";
    panel.style.background = color;
    panel.innerHTML = \`<span>\${group.name}-\${pi + 1}</span><span class="panel-subtitle">\u{AC00}\u{B85C} \u{C2A4}\u{C640}\u{C774}\u{D504}</span>\`;
    innerCamera.appendChild(panel);
  });

  outerPanel.appendChild(innerViewport);
  outerCamera.appendChild(outerPanel);
});

const outerFlicking = new Flicking("#outer", {
  horizontal: false,
  moveType: "strict",
  bound: true,
  align: "prev"
});

GROUPS.forEach((_, gi) => {
  new Flicking("#inner-" + gi, {
    nested: true,
    moveType: "strict",
    bound: true,
    align: "prev"
  });
});

const infoBar = document.querySelector(".info-bar");
outerFlicking.on("changed", (e) => {
  infoBar.textContent = \`\u{D604}\u{C7AC} \u{ADF8}\u{B8F9}: \${GROUPS[e.index].name} (\u{C138}\u{B85C}\u{2195} \u{ADF8}\u{B8F9} \u{AC04} \u{C774}\u{B3D9} / \u{AC00}\u{B85C}\u{2194} \u{ADF8}\u{B8F9} \u{B0B4} \u{C774}\u{B3D9})\`;
});`,s=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <div id="app">
    <div id="outer" class="flicking-viewport outer-viewport">
      <div class="flicking-camera"></div>
    </div>
    <div class="info-bar">\u{D604}\u{C7AC} \u{ADF8}\u{B8F9}: Group A (\u{C138}\u{B85C}\u{2195} \u{ADF8}\u{B8F9} \u{AC04} \u{C774}\u{B3D9} / \u{AC00}\u{B85C}\u{2194} \u{ADF8}\u{B8F9} \u{B0B4} \u{C774}\u{B3D9})</div>
  </div>
</body>
</html>`;return(0,t.jsx)(c.A,{options:{},panels:[],react:(0,t.jsx)(r.A,{template:"react",code:e,css:o}),vue3:(0,t.jsx)(r.A,{template:"vue3",code:i,css:o}),js:(0,t.jsx)(r.A,{template:"vanilla",code:n,html:s,css:o})})},d={title:"Cross Flicking",id:"cross-flicking",slug:"/demos/advanced/cross-flicking",sidebar_position:15,description:"nested \uC635\uC158\uC73C\uB85C \uAC00\uB85C/\uC138\uB85C \uC911\uCCA9 Flicking\uC744 \uAD6C\uC131\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","nested","cross","\uC911\uCCA9","\uAC00\uB85C\uC138\uB85C"]},p="Cross Flicking",g={},h=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uAD6C\uC870",id:"\uAD6C\uC870",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"nested \uC635\uC158\uC758 \uC5ED\uD560",id:"nested-\uC635\uC158\uC758-\uC5ED\uD560",level:3},{value:"\uBC29\uD5A5 \uBD84\uB9AC",id:"\uBC29\uD5A5-\uBD84\uB9AC",level:3},{value:"\uC5F0\uAD00 \uC635\uC158",id:"\uC5F0\uAD00-\uC635\uC158",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function u(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"cross-flicking",children:"Cross Flicking"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#nested",children:(0,t.jsx)(i.code,{children:"nested"})})," \uC635\uC158\uC73C\uB85C \uC678\uBD80(\uC138\uB85C) Flicking \uC548\uC5D0 \uB0B4\uBD80(\uAC00\uB85C) Flicking\uC744 \uC911\uCCA9\uD558\uB294 2D \uD06C\uB85C\uC2A4 \uB124\uBE44\uAC8C\uC774\uC158\uC744 \uAD6C\uC131\uD569\uB2C8\uB2E4."]}),"\n",(0,t.jsx)(a,{}),"\n",(0,t.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,t.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\uC635\uC158"}),(0,t.jsx)(i.th,{children:"\uC704\uCE58"}),(0,t.jsx)(i.th,{children:"\uAC12"}),(0,t.jsx)(i.th,{children:"\uC5ED\uD560"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#horizontal",children:(0,t.jsx)(i.code,{children:"horizontal"})})}),(0,t.jsx)(i.td,{children:"\uC678\uBD80"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"false"})}),(0,t.jsx)(i.td,{children:"\uC138\uB85C \uBC29\uD5A5 (\uADF8\uB8F9 \uAC04 \uC774\uB3D9)"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#nested",children:(0,t.jsx)(i.code,{children:"nested"})})}),(0,t.jsx)(i.td,{children:"\uB0B4\uBD80"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"true"})}),(0,t.jsx)(i.td,{children:"\uB05D \uB3C4\uB2EC \uC2DC \uC678\uBD80\uB85C \uC774\uBCA4\uD2B8 \uC804\uD30C"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#movetype",children:(0,t.jsx)(i.code,{children:"moveType"})})}),(0,t.jsx)(i.td,{children:"\uC591\uCABD"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:'"strict"'})}),(0,t.jsx)(i.td,{children:"\uC815\uD655\uD788 1\uB2E8\uC704\uC529 \uC774\uB3D9"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"\uAD6C\uC870",children:"\uAD6C\uC870"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\uAD6C\uC131"}),(0,t.jsx)(i.th,{children:"\uBC29\uD5A5"}),(0,t.jsx)(i.th,{children:"\uC5ED\uD560"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"\uC678\uBD80 Flicking"}),(0,t.jsx)(i.td,{children:"\uC138\uB85C (\u2195)"}),(0,t.jsx)(i.td,{children:"\uADF8\uB8F9 \uAC04 \uC774\uB3D9"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"\uB0B4\uBD80 Flicking"}),(0,t.jsx)(i.td,{children:"\uAC00\uB85C (\u2194)"}),(0,t.jsx)(i.td,{children:"\uADF8\uB8F9 \uB0B4 \uD328\uB110 \uC774\uB3D9"})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,t.jsx)(i.h3,{id:"nested-\uC635\uC158\uC758-\uC5ED\uD560",children:"nested \uC635\uC158\uC758 \uC5ED\uD560"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"nested: true"}),"\uB97C \uB0B4\uBD80 Flicking\uC5D0 \uC124\uC815\uD558\uBA74, \uB0B4\uBD80 Flicking\uC774 \uB05D\uC5D0 \uB3C4\uB2EC\uD55C \uD6C4 \uAC19\uC740 \uBC29\uD5A5\uC73C\uB85C \uC2A4\uC640\uC774\uD504\uD560 \uB54C \uC774\uBCA4\uD2B8\uAC00 \uC678\uBD80 Flicking\uC73C\uB85C \uC804\uD30C\uB429\uB2C8\uB2E4. \uC774 \uB370\uBAA8\uC5D0\uC11C\uB294 \uC678\uBD80\uC640 \uB0B4\uBD80\uC758 \uBC29\uD5A5\uC774 \uB2E4\uB974\uBBC0\uB85C(\uC138\uB85C/\uAC00\uB85C) \uC785\uB825\uC774 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uBD84\uB9AC\uB429\uB2C8\uB2E4."]}),"\n",(0,t.jsx)(i.h3,{id:"\uBC29\uD5A5-\uBD84\uB9AC",children:"\uBC29\uD5A5 \uBD84\uB9AC"}),"\n",(0,t.jsxs)(i.p,{children:["\uAC00\uB85C \uC2A4\uC640\uC774\uD504\uB294 \uB0B4\uBD80 Flicking\uC774 \uCC98\uB9AC\uD558\uACE0, \uC138\uB85C \uC2A4\uC640\uC774\uD504\uB294 \uC678\uBD80 Flicking\uC774 \uCC98\uB9AC\uD569\uB2C8\uB2E4. \uAC19\uC740 \uBC29\uD5A5 \uC911\uCCA9(\uC608: \uAC00\uB85C \uC548\uC5D0 \uAC00\uB85C)\uC5D0\uC11C\uB294 ",(0,t.jsx)(i.code,{children:"nested: true"}),"\uAC00 \uC774\uBCA4\uD2B8 \uC804\uD30C\uB97C \uAD00\uB9AC\uD569\uB2C8\uB2E4."]}),"\n",(0,t.jsx)(i.h3,{id:"\uC5F0\uAD00-\uC635\uC158",children:"\uC5F0\uAD00 \uC635\uC158"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsxs)(i.strong,{children:[(0,t.jsx)(i.code,{children:"nested"}),"\uC640 ",(0,t.jsx)(i.code,{children:"horizontal"}),"\uC758 \uAD00\uACC4"]}),": \uC11C\uB85C \uB2E4\uB978 \uBC29\uD5A5\uC774\uBA74 \uCDA9\uB3CC \uC5C6\uC774 \uB3D9\uC791, \uAC19\uC740 \uBC29\uD5A5\uC774\uBA74 ",(0,t.jsx)(i.code,{children:"nested: true"}),"\uB85C \uC804\uD30C \uC81C\uC5B4"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsxs)(i.strong,{children:[(0,t.jsx)(i.code,{children:'moveType: "strict"'}),"\uC640\uC758 \uC870\uD569"]}),": \uADF8\uB8F9/\uD328\uB110 \uB2E8\uC704 \uC774\uB3D9\uC774 \uBA85\uD655\uD574\uC9D0"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsxs)(i.strong,{children:[(0,t.jsx)(i.code,{children:"bound: true"}),"\uC640\uC758 \uC870\uD569"]}),": \uAC01 \uB808\uBCA8\uC5D0\uC11C \uBE48 \uACF5\uAC04 \uBC29\uC9C0"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,t.jsx)(i.admonition,{title:"\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"\uCE74\uD14C\uACE0\uB9AC\uBCC4 \uCF58\uD150\uCE20 (\uC138\uB85C\uB85C \uCE74\uD14C\uACE0\uB9AC, \uAC00\uB85C\uB85C \uD56D\uBAA9)"}),"\n",(0,t.jsx)(i.li,{children:"\uC0AC\uC9C4 \uC568\uBC94 (\uC138\uB85C\uB85C \uC568\uBC94, \uAC00\uB85C\uB85C \uC0AC\uC9C4)"}),"\n",(0,t.jsx)(i.li,{children:"\uB300\uC2DC\uBCF4\uB4DC (\uC138\uB85C\uB85C \uC139\uC158, \uAC00\uB85C\uB85C \uCE74\uB4DC)"}),"\n"]})}),"\n",(0,t.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,t.jsx)(i.admonition,{title:"\uC8FC\uC758",type:"warning",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\uC678\uBD80 Flicking\uC774 \uC138\uB85C(",(0,t.jsx)(i.code,{children:"horizontal: false"}),")\uC77C \uB54C, \uBC18\uB4DC\uC2DC \uBDF0\uD3EC\uD2B8\uC5D0 \uB192\uC774\uB97C \uC9C0\uC815\uD574\uC57C \uD569\uB2C8\uB2E4."]}),"\n",(0,t.jsxs)(i.li,{children:["\uB0B4\uBD80 Flicking\uC5D0 ",(0,t.jsx)(i.code,{children:"nested: true"}),"\uB97C \uC124\uC815\uD558\uC9C0 \uC54A\uC73C\uBA74, \uB0B4\uBD80\uC5D0\uC11C \uC774\uBCA4\uD2B8\uAC00 \uC18C\uBE44\uB418\uC5B4 \uC678\uBD80\uB85C \uC804\uD30C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."]}),"\n",(0,t.jsx)(i.li,{children:"\uAC19\uC740 \uBC29\uD5A5\uC73C\uB85C \uC911\uCCA9\uD560 \uACBD\uC6B0 \uC2A4\uC640\uC774\uD504 \uC81C\uC2A4\uCC98 \uAD6C\uBD84\uC774 \uC5B4\uB824\uC6B8 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n"]})}),"\n",(0,t.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,t.jsx)(i.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#nested",children:(0,t.jsx)(i.code,{children:"nested"})}),": \uC911\uCCA9 Flicking \uC774\uBCA4\uD2B8 \uC804\uD30C"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#horizontal",children:(0,t.jsx)(i.code,{children:"horizontal"})}),": \uC2A4\uD06C\uB864 \uBC29\uD5A5"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"../basic/nested",children:"Nested"}),": nested \uC635\uC158 \uC790\uCCB4\uC758 on/off \uBE44\uAD50"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"./fullpage-scroll",children:"Fullpage Scroll"}),": \uC138\uB85C \uBC29\uD5A5 \uD480\uD398\uC774\uC9C0 \uD328\uD134"]}),"\n"]})]})}function m(e={}){let{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},27449(e,i,n){n.d(i,{A:()=>d});var s=n(65723),t=n(19612);n(22155);let l="^4.11.4",r={react:{"@egjs/react-flicking":l,"@egjs/flicking":l},vue3:{"@egjs/vue3-flicking":l,"@egjs/flicking":l},vanilla:{"@egjs/flicking":l}},c=`<!DOCTYPE html>
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
`;function d({code:e,html:i,template:n="react",dependencies:l={},files:d={},css:p=""}){var g;let h,u,m;return(0,s.jsx)(t.OZ,{template:"vue3"===n?"vue":"vanilla"===n?"vanilla":"react",files:(m={"/styles.css":{code:u=p?`${a}
${p}`:a},...d},"react"===n?{"/App.tsx":{code:e},"/index.js":{code:o,hidden:!0},...m}:"vue3"===n?{"/src/App.vue":{code:e},...m}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),n=[],s=[],t=!1;for(let e of i)t?s.push(e):e.trimStart().startsWith("import ")||""===e.trim()?n.push(e.replace('"../styles.css"','"./styles.css"')):(t=!0,s.push(e));for(;s.length>0&&""===s[s.length-1].trim();)s.pop();return[...n,"","const _run = () => {",...s.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:u},"/index.html":{code:(h="<style>.flicking-viewport{opacity:0}</style>",(g=i||c).includes("</head>")?g.replace("</head>",`${h}
</head>`):h+g)},...d}),customSetup:{dependencies:{...r[n],...l}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===n?["/App.tsx","/styles.css"]:"vue3"===n?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===n?"/App.tsx":"vue3"===n?"/src/App.vue":"/src/index.js"}})}},72722(e,i,n){n.d(i,{A:()=>j});var s=n(65723),t=n(34622),l=n(7210),r=n(78863);n(22155);let c=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,o=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",a=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${c(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",d=e=>`${Object.keys(e).map(i=>`${i}: ${c(e[i],"'")}`).join(", ")}`,p=(e,{prefix:i,includeFlicking:n=!0}={})=>{let s=n?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&s.push(...e),`${s.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},g=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${d(e[1])} }`:e[1]??""}`).join(", ")})`,h=({options:e,panels:i,events:n={},methods:l={},plugins:r=[],siblings:d=[],imports:g=[],viewportClass:h=""})=>{let u=e=>`${Object.keys(e).map(i=>`${i}: ${c(e[i])}`).join(",\n  ")}`,m=Object.keys(l).map(e=>`const ${e} = ${l[e]};
`).join(""),j=e?`const flicking = new Flicking("#flick", {
  ${u(e)}
});

`:'const flicking = new Flicking("#flick")',x=r.length>0?`flicking.addPlugins(${r.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?u(e[1]):e[1]??""}
}`:""})`)});`:"",f=[...r.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],$=Object.keys(n).map(e=>{let i=n[e];return`flicking.on("${e}", ${i})
`}).join(""),v=i.filter(e=>e.isSlot);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${h&&` ${h}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${o(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${v.length?`
  ${v.map(e=>`<${e.tag}${o(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${d?"\n"+d.map(e=>`<${e.tag}${o(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,s.jsx)(t.A,{className:"language-js",title:"js",children:`${p(f)}

${m}${j}${x}${$}`.trim()})]})},u=({options:e,panels:i,events:n={},methods:l={},plugins:r,siblings:c,imports:d=[],viewportClass:h=""})=>{let u=r?`
  private _plugins = [${g(r)}];
`:"",m=i.filter(e=>e.isSlot),j=[["{ Component }","react"],[m.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],x=Object.keys(l).map(e=>`
const ${e} = ${l[e]};`).join("");x&&(x+="\n"),r&&j.push([`{ ${r.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),j.push(...d);let f=m.length?`
      <ViewportSlot>
        ${m.map(e=>`<${e.tag}${o(e,"className")}${a(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",$=Object.keys(n).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${n[e]}}`).join("");return(0,s.jsx)(t.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(j,{includeFlicking:!1})}
${x}
export default class DemoComponent extends Component {${u}
  public render() {
    return ${c?"<>\n    ":""}<Flicking${h&&` className="${h}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${r?" plugins={this._plugins}":""}${$}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${o(e,"className")}${a(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${f}
    </Flicking>${c?`
    ${c.map(e=>`<${e.tag}${o(e,"className")}${a(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},m=({options:e,panels:i,events:n={},methods:l={},plugins:r,siblings:c=[],imports:h=[],viewportClass:u=""})=>{let m=d(e),j=i.filter(e=>e.isSlot),x=r?`,
  data() {
    return {
      plugins: [${g(r)}]
    }
  }`:"",f=j.length?`
  <template #viewport>
    ${j.map(e=>`<${e.tag}${o(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",$=[...(r??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...h],v=Object.keys(l),k=v.length>0?`,
  methods: {
    ${v.map(e=>`${e}: ${l[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",b=Object.keys(n).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${n[e]}"`).join("");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.A,{className:"language-html",title:"template",children:`<Flicking${u&&` class="${u}"`}${e?` :options="{ ${m} }"`:""}${r?' :plugins="plugins"':""}${b}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${o(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n  ")}${f}
</Flicking>${c?`
${c.map(e=>`<${e.tag}${o(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,s.jsx)(t.A,{className:"language-js",title:"script",children:`${p($,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${x}${k}
}`})]})},j=({js:e,react:i,vue3:n,style:c,...o})=>(0,s.jsxs)("div",{children:[(0,s.jsxs)(r.A,{groupId:"cfc",defaultValue:"js",children:[(0,s.jsx)(l.A,{value:"react",label:"React",children:i||(0,s.jsx)(u,{...o})}),(0,s.jsx)(l.A,{value:"vue3",label:"Vue@3",children:n||(0,s.jsx)(m,{...o})}),(0,s.jsx)(l.A,{value:"js",label:"JavaScript",children:e||(0,s.jsx)(h,{...o})})]}),c&&(0,s.jsx)(t.A,{className:"language-css",title:"style",children:`${c}`})]})}}]);