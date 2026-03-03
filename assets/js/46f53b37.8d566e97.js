"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["4636"],{65348(e,i,n){n.r(i),n.d(i,{metadata:()=>s,default:()=>j,frontMatter:()=>p,contentTitle:()=>g,toc:()=>h,assets:()=>m});var s=JSON.parse('{"id":"demos/plugins/arrow","title":"Arrow","description":"\uC774\uC804/\uB2E4\uC74C \uD328\uB110\uB85C \uC774\uB3D9\uD558\uB294 \uD654\uC0B4\uD45C \uB124\uBE44\uAC8C\uC774\uC158 \uBC84\uD2BC\uC744 \uCD94\uAC00\uD558\uB294 \uD50C\uB7EC\uADF8\uC778","source":"@site/docs/demos/plugins/arrow.mdx","sourceDirName":"demos/plugins","slug":"/demos/plugins/arrow","permalink":"/flicking-docs-test/docs/demos/plugins/arrow","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/plugins/arrow.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Arrow","id":"arrow","slug":"/demos/plugins/arrow","sidebar_position":5,"description":"\uC774\uC804/\uB2E4\uC74C \uD328\uB110\uB85C \uC774\uB3D9\uD558\uB294 \uD654\uC0B4\uD45C \uB124\uBE44\uAC8C\uC774\uC158 \uBC84\uD2BC\uC744 \uCD94\uAC00\uD558\uB294 \uD50C\uB7EC\uADF8\uC778","keywords":["flicking","plugin","arrow","navigation","prev","next"]},"sidebar":"demosSidebar","previous":{"title":"Perspective","permalink":"/flicking-docs-test/docs/demos/plugins/perspective"},"next":{"title":"Pagination","permalink":"/flicking-docs-test/docs/demos/plugins/pagination"}}'),l=n(65723),t=n(54187),r=n(27449),c=n(72722);n(22155);let a={"@egjs/flicking-plugins":"^4.6.0"},o=`
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
  padding: 0 40px;
}
`,d=()=>{let e=`import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/arrow.css";

const COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6"];
const plugins = [new Arrow()];

export default function App() {
  return (
    <Flicking circular={true} plugins={plugins}>
      {COLORS.map((color, i) => (
        <div className="flicking-panel" key={i} style={{ background: color }}>
          {i + 1}
        </div>
      ))}
      <ViewportSlot>
        <span className="flicking-arrow-prev"></span>
        <span className="flicking-arrow-next"></span>
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
      <span class="flicking-arrow-prev"></span>
      <span class="flicking-arrow-next"></span>
    </template>
  </Flicking>
</template>

<script setup>
import Flicking from "@egjs/vue3-flicking";
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/arrow.css";

const COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6"];
const plugins = [new Arrow()];
</script>`,n=`import Flicking from "@egjs/flicking";
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/arrow.css";

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

flicking.addPlugins(new Arrow());`,s=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <div id="app">
    <div id="flick" class="flicking-viewport">
      <div class="flicking-camera"></div>
      <span class="flicking-arrow-prev"></span>
      <span class="flicking-arrow-next"></span>
    </div>
  </div>
</body>
</html>`;return(0,l.jsx)(c.A,{options:{circular:!0},panels:[],react:(0,l.jsx)(r.A,{template:"react",code:e,css:o,dependencies:a}),vue3:(0,l.jsx)(r.A,{template:"vue3",code:i,css:o,dependencies:a}),js:(0,l.jsx)(r.A,{template:"vanilla",code:n,html:s,css:o,dependencies:a})})},p={title:"Arrow",id:"arrow",slug:"/demos/plugins/arrow",sidebar_position:5,description:"\uC774\uC804/\uB2E4\uC74C \uD328\uB110\uB85C \uC774\uB3D9\uD558\uB294 \uD654\uC0B4\uD45C \uB124\uBE44\uAC8C\uC774\uC158 \uBC84\uD2BC\uC744 \uCD94\uAC00\uD558\uB294 \uD50C\uB7EC\uADF8\uC778",keywords:["flicking","plugin","arrow","navigation","prev","next"]},g="Arrow",m={},h=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uD544\uC218 CSS",id:"\uD544\uC218-css",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"\uB3D9\uC791 \uC6D0\uB9AC",id:"\uB3D9\uC791-\uC6D0\uB9AC",level:3},{value:"HTML \uAD6C\uC870",id:"html-\uAD6C\uC870",level:3},{value:"\uD504\uB808\uC784\uC6CC\uD06C\uBCC4 \uC0AC\uC6A9\uBC95",id:"\uD504\uB808\uC784\uC6CC\uD06C\uBCC4-\uC0AC\uC6A9\uBC95",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function u(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.header,{children:(0,l.jsx)(i.h1,{id:"arrow",children:"Arrow"})}),"\n",(0,l.jsx)(i.p,{children:"\uC774\uC804/\uB2E4\uC74C \uD328\uB110\uB85C \uC774\uB3D9\uD558\uB294 \uD654\uC0B4\uD45C \uB124\uBE44\uAC8C\uC774\uC158 \uBC84\uD2BC\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4."}),"\n",(0,l.jsx)(d,{}),"\n",(0,l.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,l.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"\uC635\uC158"}),(0,l.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,l.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,l.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,l.jsx)(i.tbody,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"parentEl"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"HTMLElement"})}),(0,l.jsx)(i.td,{children:"-"}),(0,l.jsx)(i.td,{children:"\uD654\uC0B4\uD45C \uBC84\uD2BC\uC758 \uBD80\uBAA8 \uC694\uC18C. \uAE30\uBCF8\uC801\uC73C\uB85C \uBDF0\uD3EC\uD2B8 \uB0B4\uBD80\uC5D0 \uBC30\uCE58"})]})})]}),"\n",(0,l.jsx)(i.h3,{id:"\uD544\uC218-css",children:"\uD544\uC218 CSS"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-js",children:'import "@egjs/flicking-plugins/dist/arrow.css";\n'})}),"\n",(0,l.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,l.jsx)(i.h3,{id:"\uB3D9\uC791-\uC6D0\uB9AC",children:"\uB3D9\uC791 \uC6D0\uB9AC"}),"\n",(0,l.jsxs)(i.p,{children:["Arrow \uD50C\uB7EC\uADF8\uC778\uC740 ",(0,l.jsx)(i.code,{children:".flicking-arrow-prev"}),"\uC640 ",(0,l.jsx)(i.code,{children:".flicking-arrow-next"})," \uD074\uB798\uC2A4\uB97C \uAC00\uC9C4 \uC694\uC18C\uB97C \uCC3E\uC544 \uC774\uC804/\uB2E4\uC74C \uD328\uB110\uB85C \uC774\uB3D9\uD558\uB294 \uD074\uB9AD \uC774\uBCA4\uD2B8\uB97C \uBC14\uC778\uB529\uD569\uB2C8\uB2E4."]}),"\n",(0,l.jsx)(i.h3,{id:"html-\uAD6C\uC870",children:"HTML \uAD6C\uC870"}),"\n",(0,l.jsx)(i.p,{children:"\uD654\uC0B4\uD45C \uC694\uC18C\uB97C \uBDF0\uD3EC\uD2B8 \uB0B4\uBD80\uC5D0 \uBC30\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4."}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-html",children:'<div class="flicking-viewport">\n  <div class="flicking-camera">\n    \x3c!-- \uD328\uB110\uB4E4 --\x3e\n  </div>\n  <span class="flicking-arrow-prev"></span>\n  <span class="flicking-arrow-next"></span>\n</div>\n'})}),"\n",(0,l.jsx)(i.h3,{id:"\uD504\uB808\uC784\uC6CC\uD06C\uBCC4-\uC0AC\uC6A9\uBC95",children:"\uD504\uB808\uC784\uC6CC\uD06C\uBCC4 \uC0AC\uC6A9\uBC95"}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.strong,{children:"React"})," \u2014 ",(0,l.jsx)(i.code,{children:"ViewportSlot"}),"\uC744 \uC0AC\uC6A9\uD558\uC5EC \uBDF0\uD3EC\uD2B8 \uB0B4\uBD80\uC5D0 \uD654\uC0B4\uD45C\uB97C \uBC30\uCE58\uD569\uB2C8\uB2E4:"]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-jsx",children:'<Flicking plugins={plugins}>\n  {/* \uD328\uB110\uB4E4 */}\n  <ViewportSlot>\n    <span className="flicking-arrow-prev"></span>\n    <span className="flicking-arrow-next"></span>\n  </ViewportSlot>\n</Flicking>\n'})}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.strong,{children:"Vue"})," \u2014 ",(0,l.jsx)(i.code,{children:"#viewport"})," \uC2AC\uB86F\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4:"]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-html",children:'<Flicking :plugins="plugins">\n  \x3c!-- \uD328\uB110\uB4E4 --\x3e\n  <template #viewport>\n    <span class="flicking-arrow-prev"></span>\n    <span class="flicking-arrow-next"></span>\n  </template>\n</Flicking>\n'})}),"\n",(0,l.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,l.jsx)(i.admonition,{title:"\uC8FC\uC758",type:"warning",children:(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["\uBC18\uB4DC\uC2DC ",(0,l.jsx)(i.code,{children:"@egjs/flicking-plugins/dist/arrow.css"}),"\uB97C import\uD574\uC57C \uD654\uC0B4\uD45C\uAC00 \uC62C\uBC14\uB974\uAC8C \uD45C\uC2DC\uB429\uB2C8\uB2E4."]}),"\n",(0,l.jsxs)(i.li,{children:["\uD654\uC0B4\uD45C \uC694\uC18C\uB294 ",(0,l.jsx)(i.code,{children:".flicking-viewport"})," \uB0B4\uBD80\uC5D0 \uC704\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4."]}),"\n"]})}),"\n",(0,l.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,l.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"./pagination",children:"Pagination"}),": \uD398\uC774\uC9C0 \uC778\uB514\uCF00\uC774\uD130"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"../advanced/prev-next",children:"Prev/Next"}),": \uCEE4\uC2A4\uD140 \uB124\uBE44\uAC8C\uC774\uC158"]}),"\n"]})]})}function j(e={}){let{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},27449(e,i,n){n.d(i,{A:()=>d});var s=n(65723),l=n(19612);n(22155);let t="^4.11.4",r={react:{"@egjs/react-flicking":t,"@egjs/flicking":t},vue3:{"@egjs/vue3-flicking":t,"@egjs/flicking":t},vanilla:{"@egjs/flicking":t}},c=`<!DOCTYPE html>
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
`;function d({code:e,html:i,template:n="react",dependencies:t={},files:d={},css:p=""}){var g;let m,h,u;return(0,s.jsx)(l.OZ,{template:"vue3"===n?"vue":"vanilla"===n?"vanilla":"react",files:(u={"/styles.css":{code:h=p?`${o}
${p}`:o},...d},"react"===n?{"/App.tsx":{code:e},"/index.js":{code:a,hidden:!0},...u}:"vue3"===n?{"/src/App.vue":{code:e},...u}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),n=[],s=[],l=!1;for(let e of i)l?s.push(e):e.trimStart().startsWith("import ")||""===e.trim()?n.push(e.replace('"../styles.css"','"./styles.css"')):(l=!0,s.push(e));for(;s.length>0&&""===s[s.length-1].trim();)s.pop();return[...n,"","const _run = () => {",...s.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:h},"/index.html":{code:(m="<style>.flicking-viewport{opacity:0}</style>",(g=i||c).includes("</head>")?g.replace("</head>",`${m}
</head>`):m+g)},...d}),customSetup:{dependencies:{...r[n],...t}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===n?["/App.tsx","/styles.css"]:"vue3"===n?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===n?"/App.tsx":"vue3"===n?"/src/App.vue":"/src/index.js"}})}},72722(e,i,n){n.d(i,{A:()=>j});var s=n(65723),l=n(34622),t=n(7210),r=n(78863);n(22155);let c=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,a=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",o=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${c(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",d=e=>`${Object.keys(e).map(i=>`${i}: ${c(e[i],"'")}`).join(", ")}`,p=(e,{prefix:i,includeFlicking:n=!0}={})=>{let s=n?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&s.push(...e),`${s.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},g=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${d(e[1])} }`:e[1]??""}`).join(", ")})`,m=({options:e,panels:i,events:n={},methods:t={},plugins:r=[],siblings:d=[],imports:g=[],viewportClass:m=""})=>{let h=e=>`${Object.keys(e).map(i=>`${i}: ${c(e[i])}`).join(",\n  ")}`,u=Object.keys(t).map(e=>`const ${e} = ${t[e]};
`).join(""),j=e?`const flicking = new Flicking("#flick", {
  ${h(e)}
});

`:'const flicking = new Flicking("#flick")',$=r.length>0?`flicking.addPlugins(${r.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?h(e[1]):e[1]??""}
}`:""})`)});`:"",f=[...r.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],x=Object.keys(n).map(e=>{let i=n[e];return`flicking.on("${e}", ${i})
`}).join(""),k=i.filter(e=>e.isSlot);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${m&&` ${m}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${k.length?`
  ${k.map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${d?"\n"+d.map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,s.jsx)(l.A,{className:"language-js",title:"js",children:`${p(f)}

${u}${j}${$}${x}`.trim()})]})},h=({options:e,panels:i,events:n={},methods:t={},plugins:r,siblings:c,imports:d=[],viewportClass:m=""})=>{let h=r?`
  private _plugins = [${g(r)}];
`:"",u=i.filter(e=>e.isSlot),j=[["{ Component }","react"],[u.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],$=Object.keys(t).map(e=>`
const ${e} = ${t[e]};`).join("");$&&($+="\n"),r&&j.push([`{ ${r.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),j.push(...d);let f=u.length?`
      <ViewportSlot>
        ${u.map(e=>`<${e.tag}${a(e,"className")}${o(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",x=Object.keys(n).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${n[e]}}`).join("");return(0,s.jsx)(l.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(j,{includeFlicking:!1})}
${$}
export default class DemoComponent extends Component {${h}
  public render() {
    return ${c?"<>\n    ":""}<Flicking${m&&` className="${m}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${r?" plugins={this._plugins}":""}${x}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e,"className")}${o(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${f}
    </Flicking>${c?`
    ${c.map(e=>`<${e.tag}${a(e,"className")}${o(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},u=({options:e,panels:i,events:n={},methods:t={},plugins:r,siblings:c=[],imports:m=[],viewportClass:h=""})=>{let u=d(e),j=i.filter(e=>e.isSlot),$=r?`,
  data() {
    return {
      plugins: [${g(r)}]
    }
  }`:"",f=j.length?`
  <template #viewport>
    ${j.map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",x=[...(r??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...m],k=Object.keys(t),v=k.length>0?`,
  methods: {
    ${k.map(e=>`${e}: ${t[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",w=Object.keys(n).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${n[e]}"`).join("");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.A,{className:"language-html",title:"template",children:`<Flicking${h&&` class="${h}"`}${e?` :options="{ ${u} }"`:""}${r?' :plugins="plugins"':""}${w}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n  ")}${f}
</Flicking>${c?`
${c.map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,s.jsx)(l.A,{className:"language-js",title:"script",children:`${p(x,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${$}${v}
}`})]})},j=({js:e,react:i,vue3:n,style:c,...a})=>(0,s.jsxs)("div",{children:[(0,s.jsxs)(r.A,{groupId:"cfc",defaultValue:"js",children:[(0,s.jsx)(t.A,{value:"react",label:"React",children:i||(0,s.jsx)(h,{...a})}),(0,s.jsx)(t.A,{value:"vue3",label:"Vue@3",children:n||(0,s.jsx)(u,{...a})}),(0,s.jsx)(t.A,{value:"js",label:"JavaScript",children:e||(0,s.jsx)(m,{...a})})]}),c&&(0,s.jsx)(l.A,{className:"language-css",title:"style",children:`${c}`})]})}}]);