"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["2649"],{58277(e,i,t){t.r(i),t.d(i,{metadata:()=>l,default:()=>j,frontMatter:()=>d,contentTitle:()=>p,toc:()=>g,assets:()=>h});var l=JSON.parse('{"id":"demos/advanced/fullpage-scroll","title":"Fullpage Scroll","description":"moveType, bound, align \uC635\uC158 \uC870\uD569\uC73C\uB85C \uD480\uD398\uC774\uC9C0 \uC2A4\uD06C\uB864 UI\uB97C \uAD6C\uC131\uD569\uB2C8\uB2E4","source":"@site/docs/demos/advanced/fullpage-scroll.mdx","sourceDirName":"demos/advanced","slug":"/demos/advanced/fullpage-scroll","permalink":"/flicking-docs-test/docs/demos/advanced/fullpage-scroll","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/advanced/fullpage-scroll.mdx","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"Fullpage Scroll","id":"fullpage-scroll","slug":"/demos/advanced/fullpage-scroll","sidebar_position":10,"description":"moveType, bound, align \uC635\uC158 \uC870\uD569\uC73C\uB85C \uD480\uD398\uC774\uC9C0 \uC2A4\uD06C\uB864 UI\uB97C \uAD6C\uC131\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","fullpage","strict","\uD480\uD398\uC774\uC9C0","\uC2A4\uD06C\uB864"]},"sidebar":"demosSidebar","previous":{"title":"Carousel","permalink":"/flicking-docs-test/docs/demos/advanced/carousel"},"next":{"title":"Coverflow","permalink":"/flicking-docs-test/docs/demos/advanced/coverflow"}}'),n=t(65723),s=t(54187),c=t(27449),r=t(72722);t(22155);let a=`
.page-panel {
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: bold;
  color: white;
  flex-direction: column;
  gap: 8px;
}

.page-panel .page-subtitle {
  font-size: 14px;
  font-weight: normal;
  opacity: 0.8;
}

.flicking-viewport {
  height: 300px;
}

.controls {
  display: flex;
  justify-content: center;
  margin-top: 12px;
  gap: 8px;
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

.button.active {
  background: #3498db;
  color: white;
}
`,o=()=>{let e=`import Flicking from "@egjs/react-flicking";
import "@egjs/flicking/dist/flicking.css";
import { useState } from "react";

const PAGES = [
  { title: "Page 1", subtitle: "Welcome", color: "#e74c3c" },
  { title: "Page 2", subtitle: "Features", color: "#3498db" },
  { title: "Page 3", subtitle: "Pricing", color: "#2ecc71" },
  { title: "Page 4", subtitle: "Contact", color: "#f39c12" },
  { title: "Page 5", subtitle: "About", color: "#9b59b6" },
];

export default function App() {
  const [isVertical, setIsVertical] = useState(true);

  return (
    <div>
      <div className="controls">
        <button
          className={\`button \${isVertical ? "active" : ""}\`}
          onClick={() => setIsVertical(true)}
        >
          \u{C138}\u{B85C} (Fullpage)
        </button>
        <button
          className={\`button \${!isVertical ? "active" : ""}\`}
          onClick={() => setIsVertical(false)}
        >
          \u{AC00}\u{B85C} (Slider)
        </button>
      </div>
      <Flicking
        key={isVertical ? "v" : "h"}
        horizontal={!isVertical}
        moveType="strict"
        bound={true}
        align="prev"
      >
        {PAGES.map((page, i) => (
          <div className="page-panel" key={i}
               style={{ background: page.color }}>
            <span>{page.title}</span>
            <span className="page-subtitle">{page.subtitle}</span>
          </div>
        ))}
      </Flicking>
    </div>
  );
}`,i=`<template>
  <div>
    <div class="controls">
      <button :class="['button', isVertical && 'active']"
              @click="isVertical = true">
        \u{C138}\u{B85C} (Fullpage)
      </button>
      <button :class="['button', !isVertical && 'active']"
              @click="isVertical = false">
        \u{AC00}\u{B85C} (Slider)
      </button>
    </div>
    <Flicking
      :key="isVertical ? 'v' : 'h'"
      :options="{
        horizontal: !isVertical,
        moveType: 'strict',
        bound: true,
        align: 'prev'
      }"
    >
      <div v-for="(page, i) in PAGES" :key="i"
           class="page-panel" :style="{ background: page.color }">
        <span>{{ page.title }}</span>
        <span class="page-subtitle">{{ page.subtitle }}</span>
      </div>
    </Flicking>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Flicking from "@egjs/vue3-flicking";
import "@egjs/flicking/dist/flicking.css";

const isVertical = ref(true);
const PAGES = [
  { title: "Page 1", subtitle: "Welcome", color: "#e74c3c" },
  { title: "Page 2", subtitle: "Features", color: "#3498db" },
  { title: "Page 3", subtitle: "Pricing", color: "#2ecc71" },
  { title: "Page 4", subtitle: "Contact", color: "#f39c12" },
  { title: "Page 5", subtitle: "About", color: "#9b59b6" },
];
</script>`,t=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";

const PAGES = [
  { title: "Page 1", subtitle: "Welcome", color: "#e74c3c" },
  { title: "Page 2", subtitle: "Features", color: "#3498db" },
  { title: "Page 3", subtitle: "Pricing", color: "#2ecc71" },
  { title: "Page 4", subtitle: "Contact", color: "#f39c12" },
  { title: "Page 5", subtitle: "About", color: "#9b59b6" },
];

const camera = document.querySelector(".flicking-camera");
PAGES.forEach(page => {
  const panel = document.createElement("div");
  panel.className = "page-panel";
  panel.style.background = page.color;
  panel.innerHTML = \`<span>\${page.title}</span><span class="page-subtitle">\${page.subtitle}</span>\`;
  camera.appendChild(panel);
});

let flicking = new Flicking("#flick", {
  horizontal: false,
  moveType: "strict",
  bound: true,
  align: "prev"
});

document.getElementById("btn-vertical").addEventListener("click", () => {
  flicking.destroy();
  flicking = new Flicking("#flick", {
    horizontal: false, moveType: "strict", bound: true, align: "prev"
  });
});

document.getElementById("btn-horizontal").addEventListener("click", () => {
  flicking.destroy();
  flicking = new Flicking("#flick", {
    horizontal: true, moveType: "strict", bound: true, align: "prev"
  });
});`,l=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <div id="app">
    <div class="controls">
      <button class="button active" id="btn-vertical">\u{C138}\u{B85C} (Fullpage)</button>
      <button class="button" id="btn-horizontal">\u{AC00}\u{B85C} (Slider)</button>
    </div>
    <div id="flick" class="flicking-viewport">
      <div class="flicking-camera"></div>
    </div>
  </div>
</body>
</html>`;return(0,n.jsx)(r.A,{options:{},panels:[],react:(0,n.jsx)(c.A,{template:"react",code:e,css:a}),vue3:(0,n.jsx)(c.A,{template:"vue3",code:i,css:a}),js:(0,n.jsx)(c.A,{template:"vanilla",code:t,html:l,css:a})})},d={title:"Fullpage Scroll",id:"fullpage-scroll",slug:"/demos/advanced/fullpage-scroll",sidebar_position:10,description:"moveType, bound, align \uC635\uC158 \uC870\uD569\uC73C\uB85C \uD480\uD398\uC774\uC9C0 \uC2A4\uD06C\uB864 UI\uB97C \uAD6C\uC131\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","fullpage","strict","\uD480\uD398\uC774\uC9C0","\uC2A4\uD06C\uB864"]},p="Fullpage Scroll",h={},g=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uBC29\uD5A5\uBCC4 \uBE44\uAD50",id:"\uBC29\uD5A5\uBCC4-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"moveType: &quot;strict&quot;\uC758 \uC5ED\uD560",id:"movetype-strict\uC758-\uC5ED\uD560",level:3},{value:"\uC138\uB85C \uBC29\uD5A5 \uC124\uC815",id:"\uC138\uB85C-\uBC29\uD5A5-\uC124\uC815",level:3},{value:"\uC5F0\uAD00 \uC635\uC158",id:"\uC5F0\uAD00-\uC635\uC158",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function u(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"fullpage-scroll",children:"Fullpage Scroll"})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#movetype",children:(0,n.jsx)(i.code,{children:'moveType: "strict"'})}),", ",(0,n.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#bound",children:(0,n.jsx)(i.code,{children:"bound"})}),", ",(0,n.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#align",children:(0,n.jsx)(i.code,{children:"align"})})," \uC635\uC158\uC744 \uC870\uD569\uD558\uC5EC \uD480\uD398\uC774\uC9C0 \uC2A4\uD06C\uB864 UI\uB97C \uAD6C\uC131\uD569\uB2C8\uB2E4."]}),"\n",(0,n.jsx)(o,{}),"\n",(0,n.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,n.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"\uC635\uC158"}),(0,n.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,n.jsx)(i.th,{children:"\uC124\uC815\uAC12"}),(0,n.jsx)(i.th,{children:"\uC5ED\uD560"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#movetype",children:(0,n.jsx)(i.code,{children:"moveType"})})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"string"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:'"strict"'})}),(0,n.jsx)(i.td,{children:"\uD55C \uBC88\uC5D0 \uD55C \uD398\uC774\uC9C0\uB9CC \uC774\uB3D9"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#bound",children:(0,n.jsx)(i.code,{children:"bound"})})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"boolean"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"true"})}),(0,n.jsx)(i.td,{children:"\uC591 \uB05D\uC5D0\uC11C \uBE48 \uACF5\uAC04 \uBC29\uC9C0"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#align",children:(0,n.jsx)(i.code,{children:"align"})})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"string"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:'"prev"'})}),(0,n.jsx)(i.td,{children:"\uD398\uC774\uC9C0\uB97C \uBDF0\uD3EC\uD2B8 \uC2DC\uC791\uC810\uC5D0 \uC815\uB82C"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#horizontal",children:(0,n.jsx)(i.code,{children:"horizontal"})})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"boolean"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"false"})}),(0,n.jsx)(i.td,{children:"\uC138\uB85C \uBC29\uD5A5 \uC2A4\uD06C\uB864"})]})]})]}),"\n",(0,n.jsx)(i.h3,{id:"\uBC29\uD5A5\uBCC4-\uBE44\uAD50",children:"\uBC29\uD5A5\uBCC4 \uBE44\uAD50"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"\uBC29\uD5A5"}),(0,n.jsx)(i.th,{children:"horizontal"}),(0,n.jsx)(i.th,{children:"\uACB0\uACFC"}),(0,n.jsx)(i.th,{children:"\uD544\uC218 \uC124\uC815"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"\uC138\uB85C (Fullpage)"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"false"})}),(0,n.jsx)(i.td,{children:"\uC704/\uC544\uB798 \uC2A4\uC640\uC774\uD504"}),(0,n.jsx)(i.td,{children:"\uBDF0\uD3EC\uD2B8\uC5D0 height \uD544\uC218"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"\uAC00\uB85C (Slider)"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"true"})}),(0,n.jsx)(i.td,{children:"\uC88C/\uC6B0 \uC2A4\uC640\uC774\uD504"}),(0,n.jsx)(i.td,{children:"\uAE30\uBCF8 \uB3D9\uC791"})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,n.jsx)(i.h3,{id:"movetype-strict\uC758-\uC5ED\uD560",children:'moveType: "strict"\uC758 \uC5ED\uD560'}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:'moveType: "strict"'}),"\uB294 \uC544\uBB34\uB9AC \uC138\uAC8C \uC2A4\uC640\uC774\uD504\uD574\uB3C4 \uC815\uD655\uD788 \uD55C \uD328\uB110(\uD55C \uD398\uC774\uC9C0)\uB9CC \uC774\uB3D9\uD569\uB2C8\uB2E4. \uC774\uAC83\uC774 \uD480\uD398\uC774\uC9C0 \uC2A4\uD06C\uB864\uC758 \uD575\uC2EC\uC774\uBA70, ",(0,n.jsx)(i.code,{children:'"snap"'}),"(\uAE30\uBCF8\uAC12)\uC740 \uC138\uAE30\uC5D0 \uB530\uB77C \uC5EC\uB7EC \uD328\uB110\uC744 \uAC74\uB108\uB6F8 \uC218 \uC788\uC5B4 \uD480\uD398\uC774\uC9C0\uC5D0 \uBD80\uC801\uD569\uD569\uB2C8\uB2E4."]}),"\n",(0,n.jsx)(i.h3,{id:"\uC138\uB85C-\uBC29\uD5A5-\uC124\uC815",children:"\uC138\uB85C \uBC29\uD5A5 \uC124\uC815"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"horizontal: false"}),"\uB85C \uC124\uC815\uD558\uBA74 \uC138\uB85C \uBC29\uD5A5 \uC2A4\uD06C\uB864\uC774 \uB429\uB2C8\uB2E4. \uC774\uB54C \uBDF0\uD3EC\uD2B8 \uC694\uC18C\uC5D0 \uBC18\uB4DC\uC2DC \uB192\uC774(",(0,n.jsx)(i.code,{children:"height"}),")\uB97C \uC9C0\uC815\uD574\uC57C \uD569\uB2C8\uB2E4. \uD480\uC2A4\uD06C\uB9B0\uC774\uB77C\uBA74 ",(0,n.jsx)(i.code,{children:"100vh"}),", \uD2B9\uC815 \uC601\uC5ED\uC774\uB77C\uBA74 \uACE0\uC815 \uB192\uC774\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4."]}),"\n",(0,n.jsx)(i.h3,{id:"\uC5F0\uAD00-\uC635\uC158",children:"\uC5F0\uAD00 \uC635\uC158"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsxs)(i.strong,{children:[(0,n.jsx)(i.code,{children:"moveType"}),"\uC774 \uD575\uC2EC"]}),": ",(0,n.jsx)(i.code,{children:'"strict"'}),"\uB9CC \uC815\uD655\uD788 1\uD398\uC774\uC9C0\uC529 \uC774\uB3D9\uC744 \uBCF4\uC7A5"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsxs)(i.strong,{children:[(0,n.jsx)(i.code,{children:"bound"}),"\uC640\uC758 \uC870\uD569"]}),": \uB9C8\uC9C0\uB9C9 \uD398\uC774\uC9C0\uC5D0\uC11C \uBE48 \uACF5\uAC04\uC774 \uBCF4\uC774\uC9C0 \uC54A\uB3C4\uB85D \uBC29\uC9C0"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsxs)(i.strong,{children:[(0,n.jsx)(i.code,{children:'align: "prev"'}),"\uC640\uC758 \uC870\uD569"]}),": \uAC01 \uD398\uC774\uC9C0\uB97C \uBDF0\uD3EC\uD2B8 \uC2DC\uC791\uC810\uC5D0 \uB9DE\uCDB0 \uBE48\uD2C8 \uC5C6\uC774 \uBC30\uCE58"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,n.jsx)(i.admonition,{title:"\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"\uB79C\uB529 \uD398\uC774\uC9C0: \uC139\uC158\uBCC4 \uD480\uD398\uC774\uC9C0 \uC804\uD658"}),"\n",(0,n.jsx)(i.li,{children:"\uD504\uB808\uC820\uD14C\uC774\uC158 \uBDF0: \uC2AC\uB77C\uC774\uB4DC \uB118\uAE30\uAE30"}),"\n",(0,n.jsx)(i.li,{children:"\uBAA8\uBC14\uC77C \uC571 \uC628\uBCF4\uB529: \uB2E8\uACC4\uBCC4 \uC18C\uAC1C \uD654\uBA74"}),"\n"]})}),"\n",(0,n.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,n.jsx)(i.admonition,{title:"\uC8FC\uC758",type:"warning",children:(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\uC138\uB85C \uBC29\uD5A5(",(0,n.jsx)(i.code,{children:"horizontal: false"}),")\uC5D0\uC11C \uBDF0\uD3EC\uD2B8\uC5D0 ",(0,n.jsx)(i.code,{children:"height"}),"\uB97C \uBC18\uB4DC\uC2DC \uC124\uC815\uD574\uC57C \uD569\uB2C8\uB2E4. \uC124\uC815\uD558\uC9C0 \uC54A\uC73C\uBA74 \uB192\uC774\uAC00 0\uC774 \uB418\uC5B4 \uC544\uBB34\uAC83\uB3C4 \uBCF4\uC774\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."]}),"\n",(0,n.jsxs)(i.li,{children:["\uC138\uB85C \uC2A4\uD06C\uB864 \uC2DC \uBE0C\uB77C\uC6B0\uC800\uC758 \uAE30\uBCF8 \uC2A4\uD06C\uB864\uACFC \uCDA9\uB3CC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. ",(0,n.jsx)(i.code,{children:"preventDefaultOnDrag: true"}),"\uB97C \uD568\uAED8 \uC0AC\uC6A9\uD558\uBA74 \uD574\uACB0\uB429\uB2C8\uB2E4."]}),"\n"]})}),"\n",(0,n.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,n.jsx)(i.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#movetype",children:(0,n.jsx)(i.code,{children:"moveType"})}),": \uC774\uB3D9 \uBC29\uC2DD"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#bound",children:(0,n.jsx)(i.code,{children:"bound"})}),": \uACBD\uACC4 \uC81C\uD55C"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#horizontal",children:(0,n.jsx)(i.code,{children:"horizontal"})}),": \uC2A4\uD06C\uB864 \uBC29\uD5A5"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#preventdefaultondrag",children:(0,n.jsx)(i.code,{children:"preventDefaultOnDrag"})}),": \uB4DC\uB798\uADF8 \uC2DC \uAE30\uBCF8\uB3D9\uC791 \uBC29\uC9C0"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../basic/movement-types",children:"Movement Types"}),": moveType \uC635\uC158 \uC0C1\uC138 \uBE44\uAD50"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"./carousel",children:"Carousel"}),": \uB2E4\uB978 \uC635\uC158 \uC870\uD569 \uD328\uD134"]}),"\n"]})]})}function j(e={}){let{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},27449(e,i,t){t.d(i,{A:()=>d});var l=t(65723),n=t(19612);t(22155);let s="^4.11.4",c={react:{"@egjs/react-flicking":s,"@egjs/flicking":s},vue3:{"@egjs/vue3-flicking":s,"@egjs/flicking":s},vanilla:{"@egjs/flicking":s}},r=`<!DOCTYPE html>
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
`;function d({code:e,html:i,template:t="react",dependencies:s={},files:d={},css:p=""}){var h;let g,u,j;return(0,l.jsx)(n.OZ,{template:"vue3"===t?"vue":"vanilla"===t?"vanilla":"react",files:(j={"/styles.css":{code:u=p?`${o}
${p}`:o},...d},"react"===t?{"/App.tsx":{code:e},"/index.js":{code:a,hidden:!0},...j}:"vue3"===t?{"/src/App.vue":{code:e},...j}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),t=[],l=[],n=!1;for(let e of i)n?l.push(e):e.trimStart().startsWith("import ")||""===e.trim()?t.push(e.replace('"../styles.css"','"./styles.css"')):(n=!0,l.push(e));for(;l.length>0&&""===l[l.length-1].trim();)l.pop();return[...t,"","const _run = () => {",...l.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:u},"/index.html":{code:(g="<style>.flicking-viewport{opacity:0}</style>",(h=i||r).includes("</head>")?h.replace("</head>",`${g}
</head>`):g+h)},...d}),customSetup:{dependencies:{...c[t],...s}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===t?["/App.tsx","/styles.css"]:"vue3"===t?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===t?"/App.tsx":"vue3"===t?"/src/App.vue":"/src/index.js"}})}},72722(e,i,t){t.d(i,{A:()=>x});var l=t(65723),n=t(34622),s=t(7210),c=t(78863);t(22155);let r=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,a=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",o=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${r(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",d=e=>`${Object.keys(e).map(i=>`${i}: ${r(e[i],"'")}`).join(", ")}`,p=(e,{prefix:i,includeFlicking:t=!0}={})=>{let l=t?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&l.push(...e),`${l.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},h=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${d(e[1])} }`:e[1]??""}`).join(", ")})`,g=({options:e,panels:i,events:t={},methods:s={},plugins:c=[],siblings:d=[],imports:h=[],viewportClass:g=""})=>{let u=e=>`${Object.keys(e).map(i=>`${i}: ${r(e[i])}`).join(",\n  ")}`,j=Object.keys(s).map(e=>`const ${e} = ${s[e]};
`).join(""),x=e?`const flicking = new Flicking("#flick", {
  ${u(e)}
});

`:'const flicking = new Flicking("#flick")',m=c.length>0?`flicking.addPlugins(${c.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?u(e[1]):e[1]??""}
}`:""})`)});`:"",f=[...c.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...h],v=Object.keys(t).map(e=>{let i=t[e];return`flicking.on("${e}", ${i})
`}).join(""),$=i.filter(e=>e.isSlot);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${g&&` ${g}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${$.length?`
  ${$.map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${d?"\n"+d.map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,l.jsx)(n.A,{className:"language-js",title:"js",children:`${p(f)}

${j}${x}${m}${v}`.trim()})]})},u=({options:e,panels:i,events:t={},methods:s={},plugins:c,siblings:r,imports:d=[],viewportClass:g=""})=>{let u=c?`
  private _plugins = [${h(c)}];
`:"",j=i.filter(e=>e.isSlot),x=[["{ Component }","react"],[j.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],m=Object.keys(s).map(e=>`
const ${e} = ${s[e]};`).join("");m&&(m+="\n"),c&&x.push([`{ ${c.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),x.push(...d);let f=j.length?`
      <ViewportSlot>
        ${j.map(e=>`<${e.tag}${a(e,"className")}${o(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",v=Object.keys(t).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${t[e]}}`).join("");return(0,l.jsx)(n.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(x,{includeFlicking:!1})}
${m}
export default class DemoComponent extends Component {${u}
  public render() {
    return ${r?"<>\n    ":""}<Flicking${g&&` className="${g}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${c?" plugins={this._plugins}":""}${v}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e,"className")}${o(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${f}
    </Flicking>${r?`
    ${r.map(e=>`<${e.tag}${a(e,"className")}${o(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},j=({options:e,panels:i,events:t={},methods:s={},plugins:c,siblings:r=[],imports:g=[],viewportClass:u=""})=>{let j=d(e),x=i.filter(e=>e.isSlot),m=c?`,
  data() {
    return {
      plugins: [${h(c)}]
    }
  }`:"",f=x.length?`
  <template #viewport>
    ${x.map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",v=[...(c??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],$=Object.keys(s),b=$.length>0?`,
  methods: {
    ${$.map(e=>`${e}: ${s[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",k=Object.keys(t).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${t[e]}"`).join("");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.A,{className:"language-html",title:"template",children:`<Flicking${u&&` class="${u}"`}${e?` :options="{ ${j} }"`:""}${c?' :plugins="plugins"':""}${k}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n  ")}${f}
</Flicking>${r?`
${r.map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,l.jsx)(n.A,{className:"language-js",title:"script",children:`${p(v,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${m}${b}
}`})]})},x=({js:e,react:i,vue3:t,style:r,...a})=>(0,l.jsxs)("div",{children:[(0,l.jsxs)(c.A,{groupId:"cfc",defaultValue:"js",children:[(0,l.jsx)(s.A,{value:"react",label:"React",children:i||(0,l.jsx)(u,{...a})}),(0,l.jsx)(s.A,{value:"vue3",label:"Vue@3",children:t||(0,l.jsx)(j,{...a})}),(0,l.jsx)(s.A,{value:"js",label:"JavaScript",children:e||(0,l.jsx)(g,{...a})})]}),r&&(0,l.jsx)(n.A,{className:"language-css",title:"style",children:`${r}`})]})}}]);