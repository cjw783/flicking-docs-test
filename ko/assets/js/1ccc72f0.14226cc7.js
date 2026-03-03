"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["173"],{95084(e,i,n){n.r(i),n.d(i,{metadata:()=>l,default:()=>m,frontMatter:()=>p,contentTitle:()=>g,toc:()=>j,assets:()=>h});var l=JSON.parse('{"id":"demos/plugins/pagination","title":"Pagination","description":"\uD604\uC7AC \uD328\uB110 \uC704\uCE58\uB97C \uD45C\uC2DC\uD558\uB294 \uD398\uC774\uC9C0 \uC778\uB514\uCF00\uC774\uD130(bullet/fraction/scroll)\uB97C \uCD94\uAC00\uD558\uB294 \uD50C\uB7EC\uADF8\uC778","source":"@site/docs/demos/plugins/pagination.mdx","sourceDirName":"demos/plugins","slug":"/demos/plugins/pagination","permalink":"/flicking-docs-test/ko/docs/demos/plugins/pagination","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/plugins/pagination.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Pagination","id":"pagination","slug":"/demos/plugins/pagination","sidebar_position":6,"description":"\uD604\uC7AC \uD328\uB110 \uC704\uCE58\uB97C \uD45C\uC2DC\uD558\uB294 \uD398\uC774\uC9C0 \uC778\uB514\uCF00\uC774\uD130(bullet/fraction/scroll)\uB97C \uCD94\uAC00\uD558\uB294 \uD50C\uB7EC\uADF8\uC778","keywords":["flicking","plugin","pagination","bullet","fraction","scroll","indicator"]},"sidebar":"demosSidebar","previous":{"title":"Arrow","permalink":"/flicking-docs-test/ko/docs/demos/plugins/arrow"},"next":{"title":"Sync","permalink":"/flicking-docs-test/ko/docs/demos/plugins/sync"}}'),t=n(65723),s=n(54187),c=n(27449),a=n(72722);n(22155);let r={"@egjs/flicking-plugins":"^4.6.0"},o=`
.flicking-panel {
  width: 50%;
  height: 200px;
  margin: 0 5px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.flicking-viewport {
  padding-bottom: 40px;
}
`,d=()=>{let e=`import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/pagination.css";

const COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6"];
const plugins = [new Pagination({ type: "bullet" })];

export default function App() {
  return (
    <Flicking circular={true} plugins={plugins}>
      {COLORS.map((color, i) => (
        <div className="flicking-panel" key={i} style={{ background: color }}>
          {i + 1}
        </div>
      ))}
      <ViewportSlot>
        <div className="flicking-pagination"></div>
      </ViewportSlot>
    </Flicking>
  );
}`,i=`<template>
  <Flicking :options="{ circular: true }" :plugins="plugins">
    <div v-for="(color, i) in COLORS" :key="i"
         class="flicking-panel"
         :style="{ background: color }">
      {{ i + 1 }}
    </div>
    <template #viewport>
      <div class="flicking-pagination"></div>
    </template>
  </Flicking>
</template>

<script setup>
import Flicking from "@egjs/vue3-flicking";
import { Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/pagination.css";

const COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6"];
const plugins = [new Pagination({ type: "bullet" })];
</script>`,n=`import Flicking from "@egjs/flicking";
import { Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/pagination.css";

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
  circular: true
});

flicking.addPlugins(new Pagination({ type: "bullet" }));`,l=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <div id="app">
    <div id="flick" class="flicking-viewport">
      <div class="flicking-camera"></div>
      <div class="flicking-pagination"></div>
    </div>
  </div>
</body>
</html>`;return(0,t.jsx)(a.A,{options:{circular:!0},panels:[],react:(0,t.jsx)(c.A,{template:"react",code:e,css:o,dependencies:r}),vue3:(0,t.jsx)(c.A,{template:"vue3",code:i,css:o,dependencies:r}),js:(0,t.jsx)(c.A,{template:"vanilla",code:n,html:l,css:o,dependencies:r})})},p={title:"Pagination",id:"pagination",slug:"/demos/plugins/pagination",sidebar_position:6,description:"\uD604\uC7AC \uD328\uB110 \uC704\uCE58\uB97C \uD45C\uC2DC\uD558\uB294 \uD398\uC774\uC9C0 \uC778\uB514\uCF00\uC774\uD130(bullet/fraction/scroll)\uB97C \uCD94\uAC00\uD558\uB294 \uD50C\uB7EC\uADF8\uC778",keywords:["flicking","plugin","pagination","bullet","fraction","scroll","indicator"]},g="Pagination",h={},j=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uD544\uC218 CSS",id:"\uD544\uC218-css",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"\uD0C0\uC785\uBCC4 \uB3D9\uC791",id:"\uD0C0\uC785\uBCC4-\uB3D9\uC791",level:3},{value:"HTML \uAD6C\uC870",id:"html-\uAD6C\uC870",level:3},{value:"\uD504\uB808\uC784\uC6CC\uD06C\uBCC4 \uC0AC\uC6A9\uBC95",id:"\uD504\uB808\uC784\uC6CC\uD06C\uBCC4-\uC0AC\uC6A9\uBC95",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function u(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"pagination",children:"Pagination"})}),"\n",(0,t.jsx)(i.p,{children:"\uD604\uC7AC \uD328\uB110 \uC704\uCE58\uB97C \uD45C\uC2DC\uD558\uB294 \uD398\uC774\uC9C0 \uC778\uB514\uCF00\uC774\uD130\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4. bullet, fraction, scroll \uC138 \uAC00\uC9C0 \uD0C0\uC785\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4."}),"\n",(0,t.jsx)(d,{}),"\n",(0,t.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,t.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\uC635\uC158"}),(0,t.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,t.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,t.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"type"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:'"bullet" | "fraction" | "scroll"'})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:'"bullet"'})}),(0,t.jsx)(i.td,{children:"\uC778\uB514\uCF00\uC774\uD130 \uD45C\uC2DC \uBC29\uC2DD"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"parentEl"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"HTMLElement"})}),(0,t.jsx)(i.td,{children:"-"}),(0,t.jsxs)(i.td,{children:["\uC778\uB514\uCF00\uC774\uD130\uC758 \uBD80\uBAA8 \uC694\uC18C. \uAE30\uBCF8\uC801\uC73C\uB85C ",(0,t.jsx)(i.code,{children:".flicking-pagination"})," \uC694\uC18C \uC0AC\uC6A9"]})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"\uD544\uC218-css",children:"\uD544\uC218 CSS"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:'import "@egjs/flicking-plugins/dist/pagination.css";\n'})}),"\n",(0,t.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,t.jsx)(i.h3,{id:"\uD0C0\uC785\uBCC4-\uB3D9\uC791",children:"\uD0C0\uC785\uBCC4 \uB3D9\uC791"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,t.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"bullet"})}),(0,t.jsx)(i.td,{children:"\uAC01 \uD328\uB110\uC5D0 \uB300\uC751\uD558\uB294 \uC810(dot) \uD45C\uC2DC. \uD074\uB9AD\uC73C\uB85C \uD574\uB2F9 \uD328\uB110\uB85C \uC774\uB3D9"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"fraction"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.code,{children:"\uD604\uC7AC/\uC804\uCCB4"})," \uD615\uD0DC\uC758 \uC22B\uC790 \uD45C\uC2DC (\uC608: ",(0,t.jsx)(i.code,{children:"1/5"}),")"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"scroll"})}),(0,t.jsx)(i.td,{children:"\uC2A4\uD06C\uB864\uBC14 \uD615\uD0DC\uC758 \uC778\uB514\uCF00\uC774\uD130"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"html-\uAD6C\uC870",children:"HTML \uAD6C\uC870"}),"\n",(0,t.jsx)(i.p,{children:"\uD398\uC774\uC9C0\uB124\uC774\uC158 \uC694\uC18C\uB97C \uBDF0\uD3EC\uD2B8 \uB0B4\uBD80\uC5D0 \uBC30\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-html",children:'<div class="flicking-viewport">\n  <div class="flicking-camera">\n    \x3c!-- \uD328\uB110\uB4E4 --\x3e\n  </div>\n  <div class="flicking-pagination"></div>\n</div>\n'})}),"\n",(0,t.jsx)(i.h3,{id:"\uD504\uB808\uC784\uC6CC\uD06C\uBCC4-\uC0AC\uC6A9\uBC95",children:"\uD504\uB808\uC784\uC6CC\uD06C\uBCC4 \uC0AC\uC6A9\uBC95"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"React"})," \u2014 ",(0,t.jsx)(i.code,{children:"ViewportSlot"}),"\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:'<Flicking plugins={plugins}>\n  {/* \uD328\uB110\uB4E4 */}\n  <ViewportSlot>\n    <div className="flicking-pagination"></div>\n  </ViewportSlot>\n</Flicking>\n'})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Vue"})," \u2014 ",(0,t.jsx)(i.code,{children:"#viewport"})," \uC2AC\uB86F\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-html",children:'<Flicking :plugins="plugins">\n  \x3c!-- \uD328\uB110\uB4E4 --\x3e\n  <template #viewport>\n    <div class="flicking-pagination"></div>\n  </template>\n</Flicking>\n'})}),"\n",(0,t.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,t.jsx)(i.admonition,{title:"\uC8FC\uC758",type:"warning",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\uBC18\uB4DC\uC2DC ",(0,t.jsx)(i.code,{children:"@egjs/flicking-plugins/dist/pagination.css"}),"\uB97C import\uD574\uC57C \uC778\uB514\uCF00\uC774\uD130\uAC00 \uC62C\uBC14\uB974\uAC8C \uD45C\uC2DC\uB429\uB2C8\uB2E4."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"bullet"})," \uD0C0\uC785\uC5D0\uC11C \uD328\uB110 \uC218\uAC00 \uB9CE\uC73C\uBA74 \uC810\uC774 \uB108\uBB34 \uB9CE\uC544\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 ",(0,t.jsx)(i.code,{children:"fraction"}),"\uC774\uB098 ",(0,t.jsx)(i.code,{children:"scroll"})," \uD0C0\uC785\uC744 \uACE0\uB824\uD558\uC138\uC694."]}),"\n"]})}),"\n",(0,t.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,t.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"./arrow",children:"Arrow"}),": \uD654\uC0B4\uD45C \uB124\uBE44\uAC8C\uC774\uC158"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"../advanced/pagination",children:"Pagination (Advanced)"}),": Reactive API \uAE30\uBC18 \uCEE4\uC2A4\uD140 \uD398\uC774\uC9C0\uB124\uC774\uC158"]}),"\n"]})]})}function m(e={}){let{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},27449(e,i,n){n.d(i,{A:()=>d});var l=n(65723),t=n(19612);n(22155);let s="^4.11.4",c={react:{"@egjs/react-flicking":s,"@egjs/flicking":s},vue3:{"@egjs/vue3-flicking":s,"@egjs/flicking":s},vanilla:{"@egjs/flicking":s}},a=`<!DOCTYPE html>
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
`;function d({code:e,html:i,template:n="react",dependencies:s={},files:d={},css:p=""}){var g;let h,j,u;return(0,l.jsx)(t.OZ,{template:"vue3"===n?"vue":"vanilla"===n?"vanilla":"react",files:(u={"/styles.css":{code:j=p?`${o}
${p}`:o},...d},"react"===n?{"/App.tsx":{code:e},"/index.js":{code:r,hidden:!0},...u}:"vue3"===n?{"/src/App.vue":{code:e},...u}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),n=[],l=[],t=!1;for(let e of i)t?l.push(e):e.trimStart().startsWith("import ")||""===e.trim()?n.push(e.replace('"../styles.css"','"./styles.css"')):(t=!0,l.push(e));for(;l.length>0&&""===l[l.length-1].trim();)l.pop();return[...n,"","const _run = () => {",...l.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:j},"/index.html":{code:(h="<style>.flicking-viewport{opacity:0}</style>",(g=i||a).includes("</head>")?g.replace("</head>",`${h}
</head>`):h+g)},...d}),customSetup:{dependencies:{...c[n],...s}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===n?["/App.tsx","/styles.css"]:"vue3"===n?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===n?"/App.tsx":"vue3"===n?"/src/App.vue":"/src/index.js"}})}},72722(e,i,n){n.d(i,{A:()=>m});var l=n(65723),t=n(34622),s=n(7210),c=n(78863);n(22155);let a=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,r=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",o=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${a(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",d=e=>`${Object.keys(e).map(i=>`${i}: ${a(e[i],"'")}`).join(", ")}`,p=(e,{prefix:i,includeFlicking:n=!0}={})=>{let l=n?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&l.push(...e),`${l.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},g=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${d(e[1])} }`:e[1]??""}`).join(", ")})`,h=({options:e,panels:i,events:n={},methods:s={},plugins:c=[],siblings:d=[],imports:g=[],viewportClass:h=""})=>{let j=e=>`${Object.keys(e).map(i=>`${i}: ${a(e[i])}`).join(",\n  ")}`,u=Object.keys(s).map(e=>`const ${e} = ${s[e]};
`).join(""),m=e?`const flicking = new Flicking("#flick", {
  ${j(e)}
});

`:'const flicking = new Flicking("#flick")',x=c.length>0?`flicking.addPlugins(${c.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?j(e[1]):e[1]??""}
}`:""})`)});`:"",$=[...c.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],f=Object.keys(n).map(e=>{let i=n[e];return`flicking.on("${e}", ${i})
`}).join(""),k=i.filter(e=>e.isSlot);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${h&&` ${h}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${k.length?`
  ${k.map(e=>`<${e.tag}${r(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${d?"\n"+d.map(e=>`<${e.tag}${r(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,l.jsx)(t.A,{className:"language-js",title:"js",children:`${p($)}

${u}${m}${x}${f}`.trim()})]})},j=({options:e,panels:i,events:n={},methods:s={},plugins:c,siblings:a,imports:d=[],viewportClass:h=""})=>{let j=c?`
  private _plugins = [${g(c)}];
`:"",u=i.filter(e=>e.isSlot),m=[["{ Component }","react"],[u.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],x=Object.keys(s).map(e=>`
const ${e} = ${s[e]};`).join("");x&&(x+="\n"),c&&m.push([`{ ${c.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),m.push(...d);let $=u.length?`
      <ViewportSlot>
        ${u.map(e=>`<${e.tag}${r(e,"className")}${o(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",f=Object.keys(n).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${n[e]}}`).join("");return(0,l.jsx)(t.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(m,{includeFlicking:!1})}
${x}
export default class DemoComponent extends Component {${j}
  public render() {
    return ${a?"<>\n    ":""}<Flicking${h&&` className="${h}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${c?" plugins={this._plugins}":""}${f}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e,"className")}${o(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${$}
    </Flicking>${a?`
    ${a.map(e=>`<${e.tag}${r(e,"className")}${o(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},u=({options:e,panels:i,events:n={},methods:s={},plugins:c,siblings:a=[],imports:h=[],viewportClass:j=""})=>{let u=d(e),m=i.filter(e=>e.isSlot),x=c?`,
  data() {
    return {
      plugins: [${g(c)}]
    }
  }`:"",$=m.length?`
  <template #viewport>
    ${m.map(e=>`<${e.tag}${r(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",f=[...(c??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...h],k=Object.keys(s),v=k.length>0?`,
  methods: {
    ${k.map(e=>`${e}: ${s[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",b=Object.keys(n).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${n[e]}"`).join("");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.A,{className:"language-html",title:"template",children:`<Flicking${j&&` class="${j}"`}${e?` :options="{ ${u} }"`:""}${c?' :plugins="plugins"':""}${b}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n  ")}${$}
</Flicking>${a?`
${a.map(e=>`<${e.tag}${r(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,l.jsx)(t.A,{className:"language-js",title:"script",children:`${p(f,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${x}${v}
}`})]})},m=({js:e,react:i,vue3:n,style:a,...r})=>(0,l.jsxs)("div",{children:[(0,l.jsxs)(c.A,{groupId:"cfc",defaultValue:"js",children:[(0,l.jsx)(s.A,{value:"react",label:"React",children:i||(0,l.jsx)(j,{...r})}),(0,l.jsx)(s.A,{value:"vue3",label:"Vue@3",children:n||(0,l.jsx)(u,{...r})}),(0,l.jsx)(s.A,{value:"js",label:"JavaScript",children:e||(0,l.jsx)(h,{...r})})]}),a&&(0,l.jsx)(t.A,{className:"language-css",title:"style",children:`${a}`})]})}}]);