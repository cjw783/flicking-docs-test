"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["1019"],{24299(e,i,n){n.r(i),n.d(i,{metadata:()=>s,default:()=>j,frontMatter:()=>p,contentTitle:()=>h,toc:()=>g,assets:()=>u});var s=JSON.parse('{"id":"demos/plugins/sync","title":"Sync","description":"\uC5EC\uB7EC Flicking \uC778\uC2A4\uD134\uC2A4\uB97C \uB3D9\uAE30\uD654\uD558\uB294 \uD50C\uB7EC\uADF8\uC778 (\uCE74\uBA54\uB77C/\uC778\uB371\uC2A4 \uB3D9\uAE30\uD654)","source":"@site/docs/demos/plugins/sync.mdx","sourceDirName":"demos/plugins","slug":"/demos/plugins/sync","permalink":"/flicking-docs-test/ko/docs/demos/plugins/sync","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/plugins/sync.mdx","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Sync","id":"sync","slug":"/demos/plugins/sync","sidebar_position":7,"description":"\uC5EC\uB7EC Flicking \uC778\uC2A4\uD134\uC2A4\uB97C \uB3D9\uAE30\uD654\uD558\uB294 \uD50C\uB7EC\uADF8\uC778 (\uCE74\uBA54\uB77C/\uC778\uB371\uC2A4 \uB3D9\uAE30\uD654)","keywords":["flicking","plugin","sync","synchronize","thumbnail","gallery"]},"sidebar":"demosSidebar","previous":{"title":"Pagination","permalink":"/flicking-docs-test/ko/docs/demos/plugins/pagination"}}'),t=n(65723),l=n(54187),c=n(27449),r=n(72722);n(22155);let d={"@egjs/flicking-plugins":"^4.6.0"},a=`
.main-panel {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.main-panel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumb-panel {
  width: 80px;
  height: 60px;
  margin-right: 5px;
  overflow: hidden;
  opacity: 0.5;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.3s, border-color 0.3s;
}

.thumb-panel.active {
  opacity: 1;
  border-color: #3498db;
}

.thumb-panel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumb-flicking {
  margin-top: 10px;
}
`,o=()=>{let e=`import { useRef, useEffect, useState } from "react";
import Flicking from "@egjs/react-flicking";
import { Sync } from "@egjs/flicking-plugins";
import "@egjs/flicking/dist/flicking.css";

const IMAGES = [
  "https://picsum.photos/seed/sync1/600/300",
  "https://picsum.photos/seed/sync2/600/300",
  "https://picsum.photos/seed/sync3/600/300",
  "https://picsum.photos/seed/sync4/600/300",
  "https://picsum.photos/seed/sync5/600/300",
  "https://picsum.photos/seed/sync6/600/300",
];

export default function App() {
  const mainRef = useRef(null);
  const thumbRef = useRef(null);
  const [plugins, setPlugins] = useState([]);

  useEffect(() => {
    if (mainRef.current && thumbRef.current) {
      setPlugins([new Sync({
        type: "index",
        synchronizedFlickingOptions: [
          { flicking: mainRef.current, isSlidable: true },
          { flicking: thumbRef.current, isClickable: true, activeClass: "active" }
        ]
      })]);
    }
  }, []);

  return (
    <div>
      <Flicking ref={mainRef} plugins={plugins} bounce={30} preventDefaultOnDrag={true}>
        {IMAGES.map((src, i) => (
          <div className="main-panel" key={i}>
            <img src={src} />
          </div>
        ))}
      </Flicking>
      <Flicking ref={thumbRef} className="thumb-flicking"
                bound={true} bounce={30} moveType="freeScroll" preventDefaultOnDrag={true}>
        {IMAGES.map((src, i) => (
          <div className="thumb-panel" key={i}>
            <img src={src} />
          </div>
        ))}
      </Flicking>
    </div>
  );
}`,i=`<template>
  <div>
    <Flicking ref="mainRef" :options="{ bounce: 30, preventDefaultOnDrag: true }" :plugins="plugins">
      <div v-for="(src, i) in IMAGES" :key="i" class="main-panel">
        <img :src="src" />
      </div>
    </Flicking>
    <Flicking ref="thumbRef" class="thumb-flicking"
              :options="{ bound: true, bounce: 30, moveType: 'freeScroll', preventDefaultOnDrag: true }">
      <div v-for="(src, i) in IMAGES" :key="i" class="thumb-panel">
        <img :src="src" />
      </div>
    </Flicking>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Flicking from "@egjs/vue3-flicking";
import { Sync } from "@egjs/flicking-plugins";
import "@egjs/flicking/dist/flicking.css";

const IMAGES = [
  "https://picsum.photos/seed/sync1/600/300",
  "https://picsum.photos/seed/sync2/600/300",
  "https://picsum.photos/seed/sync3/600/300",
  "https://picsum.photos/seed/sync4/600/300",
  "https://picsum.photos/seed/sync5/600/300",
  "https://picsum.photos/seed/sync6/600/300",
];

const mainRef = ref(null);
const thumbRef = ref(null);
const plugins = ref([]);

onMounted(() => {
  plugins.value = [new Sync({
    type: "index",
    synchronizedFlickingOptions: [
      { flicking: mainRef.value, isSlidable: true },
      { flicking: thumbRef.value, isClickable: true, activeClass: "active" }
    ]
  })];
});
</script>`,n=`import Flicking from "@egjs/flicking";
import { Sync } from "@egjs/flicking-plugins";
import "@egjs/flicking/dist/flicking.css";

const IMAGES = [
  "https://picsum.photos/seed/sync1/600/300",
  "https://picsum.photos/seed/sync2/600/300",
  "https://picsum.photos/seed/sync3/600/300",
  "https://picsum.photos/seed/sync4/600/300",
  "https://picsum.photos/seed/sync5/600/300",
  "https://picsum.photos/seed/sync6/600/300",
];

const mainCamera = document.querySelector("#main .flicking-camera");
const thumbCamera = document.querySelector("#thumb .flicking-camera");

IMAGES.forEach((src) => {
  const mainPanel = document.createElement("div");
  mainPanel.className = "main-panel";
  mainPanel.innerHTML = \`<img src="\${src}" />\`;
  mainCamera.appendChild(mainPanel);

  const thumbPanel = document.createElement("div");
  thumbPanel.className = "thumb-panel";
  thumbPanel.innerHTML = \`<img src="\${src}" />\`;
  thumbCamera.appendChild(thumbPanel);
});

const mainFlicking = new Flicking("#main", { bounce: 30, preventDefaultOnDrag: true });
const thumbFlicking = new Flicking("#thumb", {
  bound: true,
  bounce: 30,
  moveType: "freeScroll",
  preventDefaultOnDrag: true
});

mainFlicking.addPlugins(new Sync({
  type: "index",
  synchronizedFlickingOptions: [
    { flicking: mainFlicking, isSlidable: true },
    { flicking: thumbFlicking, isClickable: true, activeClass: "active" }
  ]
}));`,s=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <div id="app">
    <div id="main" class="flicking-viewport">
      <div class="flicking-camera"></div>
    </div>
    <div id="thumb" class="flicking-viewport thumb-flicking">
      <div class="flicking-camera"></div>
    </div>
  </div>
</body>
</html>`;return(0,t.jsx)(r.A,{options:{},panels:[],react:(0,t.jsx)(c.A,{template:"react",code:e,css:a,dependencies:d}),vue3:(0,t.jsx)(c.A,{template:"vue3",code:i,css:a,dependencies:d}),js:(0,t.jsx)(c.A,{template:"vanilla",code:n,html:s,css:a,dependencies:d})})},p={title:"Sync",id:"sync",slug:"/demos/plugins/sync",sidebar_position:7,description:"\uC5EC\uB7EC Flicking \uC778\uC2A4\uD134\uC2A4\uB97C \uB3D9\uAE30\uD654\uD558\uB294 \uD50C\uB7EC\uADF8\uC778 (\uCE74\uBA54\uB77C/\uC778\uB371\uC2A4 \uB3D9\uAE30\uD654)",keywords:["flicking","plugin","sync","synchronize","thumbnail","gallery"]},h="Sync",u={},g=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"SyncOption",id:"syncoption",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"\uB3D9\uAE30\uD654 \uD0C0\uC785",id:"\uB3D9\uAE30\uD654-\uD0C0\uC785",level:3},{value:"\uD504\uB808\uC784\uC6CC\uD06C\uBCC4 \uC0AC\uC6A9\uBC95",id:"\uD504\uB808\uC784\uC6CC\uD06C\uBCC4-\uC0AC\uC6A9\uBC95",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function m(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"sync",children:"Sync"})}),"\n",(0,t.jsx)(i.p,{children:"\uC5EC\uB7EC Flicking \uC778\uC2A4\uD134\uC2A4\uB97C \uB3D9\uAE30\uD654\uD569\uB2C8\uB2E4. \uB300\uD45C\uC801\uC73C\uB85C \uBA54\uC778 \uC774\uBBF8\uC9C0\uC640 \uC378\uB124\uC77C \uAC24\uB7EC\uB9AC\uB97C \uC5F0\uB3D9\uD560 \uB54C \uC0AC\uC6A9\uD569\uB2C8\uB2E4."}),"\n",(0,t.jsx)(o,{}),"\n",(0,t.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,t.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\uC635\uC158"}),(0,t.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,t.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,t.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"type"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:'"camera" | "index"'})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:'"camera"'})}),(0,t.jsxs)(i.td,{children:["\uB3D9\uAE30\uD654 \uBC29\uC2DD. ",(0,t.jsx)(i.code,{children:"camera"}),"\uB294 \uCE74\uBA54\uB77C \uC704\uCE58, ",(0,t.jsx)(i.code,{children:"index"}),"\uB294 \uD328\uB110 \uC778\uB371\uC2A4 \uAE30\uC900 \uB3D9\uAE30\uD654"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"synchronizedFlickingOptions"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"SyncOption[]"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"[]"})}),(0,t.jsx)(i.td,{children:"\uB3D9\uAE30\uD654\uD560 Flicking \uC778\uC2A4\uD134\uC2A4\uC640 \uC635\uC158 \uBAA9\uB85D"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"syncoption",children:"SyncOption"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\uC635\uC158"}),(0,t.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,t.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"flicking"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Flicking"})}),(0,t.jsx)(i.td,{children:"\uB3D9\uAE30\uD654\uD560 Flicking \uC778\uC2A4\uD134\uC2A4"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"isSlidable"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"boolean"})}),(0,t.jsx)(i.td,{children:"\uB4DC\uB798\uADF8\uB85C \uC2AC\uB77C\uC774\uB4DC \uAC00\uB2A5 \uC5EC\uBD80"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"isClickable"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"boolean"})}),(0,t.jsx)(i.td,{children:"\uD074\uB9AD\uC73C\uB85C \uD574\uB2F9 \uD328\uB110\uB85C \uC774\uB3D9 \uAC00\uB2A5 \uC5EC\uBD80"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"activeClass"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"string"})}),(0,t.jsx)(i.td,{children:"\uD65C\uC131 \uD328\uB110\uC5D0 \uCD94\uAC00\uB420 CSS \uD074\uB798\uC2A4"})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,t.jsx)(i.h3,{id:"\uB3D9\uAE30\uD654-\uD0C0\uC785",children:"\uB3D9\uAE30\uD654 \uD0C0\uC785"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,t.jsx)(i.th,{children:"\uC124\uBA85"}),(0,t.jsx)(i.th,{children:"\uC0AC\uC6A9 \uC608"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"camera"})}),(0,t.jsx)(i.td,{children:"\uBAA8\uB4E0 Flicking\uC758 \uCE74\uBA54\uB77C \uC704\uCE58\uB97C \uB3D9\uC2DC\uC5D0 \uC774\uB3D9"}),(0,t.jsx)(i.td,{children:"\uAC19\uC740 \uCF58\uD150\uCE20\uB97C \uB2E4\uB978 \uBDF0\uB85C \uD45C\uC2DC"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"index"})}),(0,t.jsx)(i.td,{children:"\uD558\uB098\uC758 Flicking\uC5D0\uC11C \uD328\uB110\uC744 \uBCC0\uACBD\uD558\uBA74 \uB2E4\uB978 Flicking\uB3C4 \uAC19\uC740 \uC778\uB371\uC2A4\uB85C \uC774\uB3D9"}),(0,t.jsx)(i.td,{children:"\uBA54\uC778 \uC774\uBBF8\uC9C0 + \uC378\uB124\uC77C"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"\uD504\uB808\uC784\uC6CC\uD06C\uBCC4-\uC0AC\uC6A9\uBC95",children:"\uD504\uB808\uC784\uC6CC\uD06C\uBCC4 \uC0AC\uC6A9\uBC95"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"React"})," \u2014 ",(0,t.jsx)(i.code,{children:"useRef"}),"\uC640 ",(0,t.jsx)(i.code,{children:"useEffect"}),"\uB85C \uC778\uC2A4\uD134\uC2A4\uC5D0 \uC811\uADFC\uD569\uB2C8\uB2E4:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:'const mainRef = useRef(null);\nconst thumbRef = useRef(null);\nconst [plugins, setPlugins] = useState([]);\n\nuseEffect(() => {\n  setPlugins([new Sync({\n    type: "index",\n    synchronizedFlickingOptions: [\n      { flicking: mainRef.current, isSlidable: true },\n      { flicking: thumbRef.current, isClickable: true, activeClass: "active" }\n    ]\n  })]);\n}, []);\n'})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Vue"})," \u2014 ",(0,t.jsx)(i.code,{children:"ref()"}),"\uC640 ",(0,t.jsx)(i.code,{children:"onMounted"}),"\uB85C \uC778\uC2A4\uD134\uC2A4\uC5D0 \uC811\uADFC\uD569\uB2C8\uB2E4:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:'const mainRef = ref(null);\nconst thumbRef = ref(null);\nconst plugins = ref([]);\n\nonMounted(() => {\n  plugins.value = [new Sync({\n    type: "index",\n    synchronizedFlickingOptions: [\n      { flicking: mainRef.value, isSlidable: true },\n      { flicking: thumbRef.value, isClickable: true, activeClass: "active" }\n    ]\n  })];\n});\n'})}),"\n",(0,t.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,t.jsx)(i.admonition,{title:"\uC8FC\uC758",type:"warning",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Sync \uD50C\uB7EC\uADF8\uC778\uC740 Flicking \uC778\uC2A4\uD134\uC2A4\uAC00 \uB9C8\uC6B4\uD2B8\uB41C \uD6C4\uC5D0 \uC0DD\uC131\uD574\uC57C \uD569\uB2C8\uB2E4. React\uC5D0\uC11C\uB294 ",(0,t.jsx)(i.code,{children:"useEffect"}),", Vue\uC5D0\uC11C\uB294 ",(0,t.jsx)(i.code,{children:"onMounted"}),"\uB97C \uC0AC\uC6A9\uD558\uC138\uC694."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"index"})," \uD0C0\uC785\uC5D0\uC11C \uB3D9\uAE30\uD654\uB41C Flicking\uB4E4\uC758 \uD328\uB110 \uC218\uAC00 \uAC19\uC544\uC57C \uC62C\uBC14\uB974\uAC8C \uB3D9\uC791\uD569\uB2C8\uB2E4."]}),"\n",(0,t.jsxs)(i.li,{children:["\uD50C\uB7EC\uADF8\uC778\uC740 \uB3D9\uAE30\uD654 \uB300\uC0C1 \uC911 \uD558\uB098\uC758 Flicking\uC5D0\uB9CC \uCD94\uAC00(",(0,t.jsx)(i.code,{children:"addPlugins"}),")\uD558\uBA74 \uB429\uB2C8\uB2E4."]}),"\n"]})}),"\n",(0,t.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,t.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"./arrow",children:"Arrow"}),": \uD654\uC0B4\uD45C \uB124\uBE44\uAC8C\uC774\uC158\uACFC \uD568\uAED8 \uC0AC\uC6A9"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"./pagination",children:"Pagination"}),": \uD398\uC774\uC9C0 \uC778\uB514\uCF00\uC774\uD130\uC640 \uD568\uAED8 \uC0AC\uC6A9"]}),"\n"]})]})}function j(e={}){let{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},27449(e,i,n){n.d(i,{A:()=>o});var s=n(65723),t=n(19612);n(22155);let l="^4.11.4",c={react:{"@egjs/react-flicking":l,"@egjs/flicking":l},vue3:{"@egjs/vue3-flicking":l,"@egjs/flicking":l},vanilla:{"@egjs/flicking":l}},r=`<!DOCTYPE html>
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
</html>`,d=`import { StrictMode } from "react";
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
`;function o({code:e,html:i,template:n="react",dependencies:l={},files:o={},css:p=""}){var h;let u,g,m;return(0,s.jsx)(t.OZ,{template:"vue3"===n?"vue":"vanilla"===n?"vanilla":"react",files:(m={"/styles.css":{code:g=p?`${a}
${p}`:a},...o},"react"===n?{"/App.tsx":{code:e},"/index.js":{code:d,hidden:!0},...m}:"vue3"===n?{"/src/App.vue":{code:e},...m}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),n=[],s=[],t=!1;for(let e of i)t?s.push(e):e.trimStart().startsWith("import ")||""===e.trim()?n.push(e.replace('"../styles.css"','"./styles.css"')):(t=!0,s.push(e));for(;s.length>0&&""===s[s.length-1].trim();)s.pop();return[...n,"","const _run = () => {",...s.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:g},"/index.html":{code:(u="<style>.flicking-viewport{opacity:0}</style>",(h=i||r).includes("</head>")?h.replace("</head>",`${u}
</head>`):u+h)},...o}),customSetup:{dependencies:{...c[n],...l}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===n?["/App.tsx","/styles.css"]:"vue3"===n?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===n?"/App.tsx":"vue3"===n?"/src/App.vue":"/src/index.js"}})}},72722(e,i,n){n.d(i,{A:()=>j});var s=n(65723),t=n(34622),l=n(7210),c=n(78863);n(22155);let r=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,d=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",a=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${r(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(i=>`${i}: ${r(e[i],"'")}`).join(", ")}`,p=(e,{prefix:i,includeFlicking:n=!0}={})=>{let s=n?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&s.push(...e),`${s.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},h=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,u=({options:e,panels:i,events:n={},methods:l={},plugins:c=[],siblings:o=[],imports:h=[],viewportClass:u=""})=>{let g=e=>`${Object.keys(e).map(i=>`${i}: ${r(e[i])}`).join(",\n  ")}`,m=Object.keys(l).map(e=>`const ${e} = ${l[e]};
`).join(""),j=e?`const flicking = new Flicking("#flick", {
  ${g(e)}
});

`:'const flicking = new Flicking("#flick")',f=c.length>0?`flicking.addPlugins(${c.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?g(e[1]):e[1]??""}
}`:""})`)});`:"",x=[...c.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...h],k=Object.keys(n).map(e=>{let i=n[e];return`flicking.on("${e}", ${i})
`}).join(""),$=i.filter(e=>e.isSlot);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${u&&` ${u}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${d(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${$.length?`
  ${$.map(e=>`<${e.tag}${d(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${d(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,s.jsx)(t.A,{className:"language-js",title:"js",children:`${p(x)}

${m}${j}${f}${k}`.trim()})]})},g=({options:e,panels:i,events:n={},methods:l={},plugins:c,siblings:r,imports:o=[],viewportClass:u=""})=>{let g=c?`
  private _plugins = [${h(c)}];
`:"",m=i.filter(e=>e.isSlot),j=[["{ Component }","react"],[m.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],f=Object.keys(l).map(e=>`
const ${e} = ${l[e]};`).join("");f&&(f+="\n"),c&&j.push([`{ ${c.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),j.push(...o);let x=m.length?`
      <ViewportSlot>
        ${m.map(e=>`<${e.tag}${d(e,"className")}${a(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",k=Object.keys(n).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${n[e]}}`).join("");return(0,s.jsx)(t.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(j,{includeFlicking:!1})}
${f}
export default class DemoComponent extends Component {${g}
  public render() {
    return ${r?"<>\n    ":""}<Flicking${u&&` className="${u}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${c?" plugins={this._plugins}":""}${k}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${d(e,"className")}${a(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${x}
    </Flicking>${r?`
    ${r.map(e=>`<${e.tag}${d(e,"className")}${a(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},m=({options:e,panels:i,events:n={},methods:l={},plugins:c,siblings:r=[],imports:u=[],viewportClass:g=""})=>{let m=o(e),j=i.filter(e=>e.isSlot),f=c?`,
  data() {
    return {
      plugins: [${h(c)}]
    }
  }`:"",x=j.length?`
  <template #viewport>
    ${j.map(e=>`<${e.tag}${d(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",k=[...(c??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...u],$=Object.keys(l),y=$.length>0?`,
  methods: {
    ${$.map(e=>`${e}: ${l[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",v=Object.keys(n).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${n[e]}"`).join("");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.A,{className:"language-html",title:"template",children:`<Flicking${g&&` class="${g}"`}${e?` :options="{ ${m} }"`:""}${c?' :plugins="plugins"':""}${v}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${d(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n  ")}${x}
</Flicking>${r?`
${r.map(e=>`<${e.tag}${d(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,s.jsx)(t.A,{className:"language-js",title:"script",children:`${p(k,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${f}${y}
}`})]})},j=({js:e,react:i,vue3:n,style:r,...d})=>(0,s.jsxs)("div",{children:[(0,s.jsxs)(c.A,{groupId:"cfc",defaultValue:"js",children:[(0,s.jsx)(l.A,{value:"react",label:"React",children:i||(0,s.jsx)(g,{...d})}),(0,s.jsx)(l.A,{value:"vue3",label:"Vue@3",children:n||(0,s.jsx)(m,{...d})}),(0,s.jsx)(l.A,{value:"js",label:"JavaScript",children:e||(0,s.jsx)(u,{...d})})]}),r&&(0,s.jsx)(t.A,{className:"language-css",title:"style",children:`${r}`})]})}}]);