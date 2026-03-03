"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["4539"],{48210(e,i,s){s.r(i),s.d(i,{metadata:()=>t,default:()=>j,frontMatter:()=>p,contentTitle:()=>g,toc:()=>h,assets:()=>u});var t=JSON.parse('{"id":"demos/plugins/autoplay","title":"AutoPlay","description":"\uC77C\uC815 \uAC04\uACA9\uC73C\uB85C \uC790\uB3D9\uC73C\uB85C \uD328\uB110\uC744 \uC804\uD658\uD558\uB294 \uD50C\uB7EC\uADF8\uC778","source":"@site/docs/demos/plugins/autoplay.mdx","sourceDirName":"demos/plugins","slug":"/demos/plugins/autoplay","permalink":"/flicking-docs-test/ko/docs/demos/plugins/autoplay","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/plugins/autoplay.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"AutoPlay","id":"autoplay","slug":"/demos/plugins/autoplay","sidebar_position":2,"description":"\uC77C\uC815 \uAC04\uACA9\uC73C\uB85C \uC790\uB3D9\uC73C\uB85C \uD328\uB110\uC744 \uC804\uD658\uD558\uB294 \uD50C\uB7EC\uADF8\uC778","keywords":["flicking","plugin","autoplay","auto","play","timer"]},"sidebar":"demosSidebar","previous":{"title":"Fade","permalink":"/flicking-docs-test/ko/docs/demos/plugins/fade"},"next":{"title":"Parallax","permalink":"/flicking-docs-test/ko/docs/demos/plugins/parallax"}}'),l=s(65723),n=s(54187),c=s(27449),a=s(72722);s(22155);let r={"@egjs/flicking-plugins":"^4.6.0"},d=`
.flicking-panel {
  position: relative;
  border-radius: 5px;
  width: 80%;
  margin-right: 10px;
  height: 200px;
  overflow: hidden;
}

.panel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`,o=()=>{let e=`import Flicking from "@egjs/react-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/flicking/dist/flicking.css";

const plugins = [new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: true })];

export default function App() {
  return (
    <Flicking circular={true} plugins={plugins} preventDefaultOnDrag={true}>
      <div className="flicking-panel">
        <img className="panel-image" src="https://picsum.photos/seed/auto1/600/300" />
      </div>
      <div className="flicking-panel">
        <img className="panel-image" src="https://picsum.photos/seed/auto2/600/300" />
      </div>
      <div className="flicking-panel">
        <img className="panel-image" src="https://picsum.photos/seed/auto3/600/300" />
      </div>
      <div className="flicking-panel">
        <img className="panel-image" src="https://picsum.photos/seed/auto4/600/300" />
      </div>
    </Flicking>
  );
}`,i=`<template>
  <Flicking :options="{ circular: true, preventDefaultOnDrag: true }" :plugins="plugins">
    <div class="flicking-panel">
      <img class="panel-image" src="https://picsum.photos/seed/auto1/600/300" />
    </div>
    <div class="flicking-panel">
      <img class="panel-image" src="https://picsum.photos/seed/auto2/600/300" />
    </div>
    <div class="flicking-panel">
      <img class="panel-image" src="https://picsum.photos/seed/auto3/600/300" />
    </div>
    <div class="flicking-panel">
      <img class="panel-image" src="https://picsum.photos/seed/auto4/600/300" />
    </div>
  </Flicking>
</template>

<script setup>
import Flicking from "@egjs/vue3-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/flicking/dist/flicking.css";

const plugins = [new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: true })];
</script>`,s=`import Flicking from "@egjs/flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/flicking/dist/flicking.css";

const flicking = new Flicking("#flick", {
  circular: true,
  preventDefaultOnDrag: true
});

flicking.addPlugins(new AutoPlay({
  duration: 2000,
  direction: "NEXT",
  stopOnHover: true
}));`,t=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <div id="app">
    <div id="flick" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel">
          <img class="panel-image" src="https://picsum.photos/seed/auto1/600/300" />
        </div>
        <div class="flicking-panel">
          <img class="panel-image" src="https://picsum.photos/seed/auto2/600/300" />
        </div>
        <div class="flicking-panel">
          <img class="panel-image" src="https://picsum.photos/seed/auto3/600/300" />
        </div>
        <div class="flicking-panel">
          <img class="panel-image" src="https://picsum.photos/seed/auto4/600/300" />
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;return(0,l.jsx)(a.A,{options:{circular:!0},panels:[],react:(0,l.jsx)(c.A,{template:"react",code:e,css:d,dependencies:r}),vue3:(0,l.jsx)(c.A,{template:"vue3",code:i,css:d,dependencies:r}),js:(0,l.jsx)(c.A,{template:"vanilla",code:s,html:t,css:d,dependencies:r})})},p={title:"AutoPlay",id:"autoplay",slug:"/demos/plugins/autoplay",sidebar_position:2,description:"\uC77C\uC815 \uAC04\uACA9\uC73C\uB85C \uC790\uB3D9\uC73C\uB85C \uD328\uB110\uC744 \uC804\uD658\uD558\uB294 \uD50C\uB7EC\uADF8\uC778",keywords:["flicking","plugin","autoplay","auto","play","timer"]},g="AutoPlay",u={},h=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"\uB3D9\uC791 \uC6D0\uB9AC",id:"\uB3D9\uC791-\uC6D0\uB9AC",level:3},{value:"\uC0AC\uC6A9\uBC95",id:"\uC0AC\uC6A9\uBC95",level:3},{value:"\uC81C\uC5B4 \uBA54\uC11C\uB4DC",id:"\uC81C\uC5B4-\uBA54\uC11C\uB4DC",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function m(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.header,{children:(0,l.jsx)(i.h1,{id:"autoplay",children:"AutoPlay"})}),"\n",(0,l.jsx)(i.p,{children:"\uC77C\uC815 \uAC04\uACA9\uC73C\uB85C \uD328\uB110\uC744 \uC790\uB3D9 \uC804\uD658\uD569\uB2C8\uB2E4. \uB9C8\uC6B0\uC2A4 \uD638\uBC84 \uC2DC \uC77C\uC2DC \uC815\uC9C0 \uAE30\uB2A5\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4."}),"\n",(0,l.jsx)(o,{}),"\n",(0,l.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,l.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"\uC635\uC158"}),(0,l.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,l.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,l.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"duration"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"number"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"2000"})}),(0,l.jsx)(i.td,{children:"\uD328\uB110 \uC804\uD658 \uAC04\uACA9 (ms)"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"direction"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:'"NEXT" | "PREV"'})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:'"NEXT"'})}),(0,l.jsx)(i.td,{children:"\uC790\uB3D9 \uC804\uD658 \uBC29\uD5A5"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"stopOnHover"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"boolean"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"false"})}),(0,l.jsx)(i.td,{children:"\uB9C8\uC6B0\uC2A4 \uD638\uBC84 \uC2DC \uC790\uB3D9 \uC7AC\uC0DD \uC77C\uC2DC \uC815\uC9C0"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"animationDuration"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"number"})}),(0,l.jsx)(i.td,{children:"-"}),(0,l.jsx)(i.td,{children:"\uD328\uB110 \uC804\uD658 \uC560\uB2C8\uBA54\uC774\uC158 \uC2DC\uAC04 (ms)"})]})]})]}),"\n",(0,l.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,l.jsx)(i.h3,{id:"\uB3D9\uC791-\uC6D0\uB9AC",children:"\uB3D9\uC791 \uC6D0\uB9AC"}),"\n",(0,l.jsxs)(i.p,{children:["AutoPlay \uD50C\uB7EC\uADF8\uC778\uC740 \uC124\uC815\uB41C ",(0,l.jsx)(i.code,{children:"duration"})," \uAC04\uACA9\uB9C8\uB2E4 \uC9C0\uC815\uB41C \uBC29\uD5A5\uC73C\uB85C \uD328\uB110\uC744 \uC790\uB3D9 \uC804\uD658\uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uAC00 \uB4DC\uB798\uADF8\uD558\uBA74 \uC790\uB3D9 \uC7AC\uC0DD\uC774 \uC77C\uC2DC \uC911\uB2E8\uB418\uACE0, \uB4DC\uB798\uADF8 \uC885\uB8CC \uD6C4 \uB2E4\uC2DC \uC2DC\uC791\uB429\uB2C8\uB2E4."]}),"\n",(0,l.jsx)(i.h3,{id:"\uC0AC\uC6A9\uBC95",children:"\uC0AC\uC6A9\uBC95"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-js",children:'import { AutoPlay } from "@egjs/flicking-plugins";\n\nflicking.addPlugins(new AutoPlay({\n  duration: 2000,\n  direction: "NEXT",\n  stopOnHover: true\n}));\n'})}),"\n",(0,l.jsx)(i.h3,{id:"\uC81C\uC5B4-\uBA54\uC11C\uB4DC",children:"\uC81C\uC5B4 \uBA54\uC11C\uB4DC"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"\uBA54\uC11C\uB4DC"}),(0,l.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"plugin.stop()"})}),(0,l.jsx)(i.td,{children:"\uC790\uB3D9 \uC7AC\uC0DD \uC911\uC9C0"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"plugin.play()"})}),(0,l.jsx)(i.td,{children:"\uC790\uB3D9 \uC7AC\uC0DD \uC2DC\uC791"})]})]})]}),"\n",(0,l.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,l.jsx)(i.admonition,{title:"\uC8FC\uC758",type:"warning",children:(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["\uB04A\uAE40 \uC5C6\uB294 \uC790\uB3D9 \uC7AC\uC0DD\uC744 \uC704\uD574 ",(0,l.jsx)(i.code,{children:"circular: true"})," \uC635\uC158\uACFC \uD568\uAED8 \uC0AC\uC6A9\uD558\uC138\uC694."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"stopOnHover: true"}),"\uB97C \uC124\uC815\uD558\uBA74 \uBAA8\uBC14\uC77C\uC5D0\uC11C\uB294 \uD130\uCE58 \uC2DC \uC77C\uC2DC \uC815\uC9C0\uB429\uB2C8\uB2E4."]}),"\n"]})}),"\n",(0,l.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,l.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"./fade",children:"Fade"}),": \uD398\uC774\uB4DC \uD6A8\uACFC\uC640 \uD568\uAED8 \uC0AC\uC6A9"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"./pagination",children:"Pagination"}),": \uD398\uC774\uC9C0 \uC778\uB514\uCF00\uC774\uD130\uC640 \uD568\uAED8 \uC0AC\uC6A9"]}),"\n"]})]})}function j(e={}){let{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(m,{...e})}):m(e)}},27449(e,i,s){s.d(i,{A:()=>o});var t=s(65723),l=s(19612);s(22155);let n="^4.11.4",c={react:{"@egjs/react-flicking":n,"@egjs/flicking":n},vue3:{"@egjs/vue3-flicking":n,"@egjs/flicking":n},vanilla:{"@egjs/flicking":n}},a=`<!DOCTYPE html>
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
`;function o({code:e,html:i,template:s="react",dependencies:n={},files:o={},css:p=""}){var g;let u,h,m;return(0,t.jsx)(l.OZ,{template:"vue3"===s?"vue":"vanilla"===s?"vanilla":"react",files:(m={"/styles.css":{code:h=p?`${d}
${p}`:d},...o},"react"===s?{"/App.tsx":{code:e},"/index.js":{code:r,hidden:!0},...m}:"vue3"===s?{"/src/App.vue":{code:e},...m}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),s=[],t=[],l=!1;for(let e of i)l?t.push(e):e.trimStart().startsWith("import ")||""===e.trim()?s.push(e.replace('"../styles.css"','"./styles.css"')):(l=!0,t.push(e));for(;t.length>0&&""===t[t.length-1].trim();)t.pop();return[...s,"","const _run = () => {",...t.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:h},"/index.html":{code:(u="<style>.flicking-viewport{opacity:0}</style>",(g=i||a).includes("</head>")?g.replace("</head>",`${u}
</head>`):u+g)},...o}),customSetup:{dependencies:{...c[s],...n}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===s?["/App.tsx","/styles.css"]:"vue3"===s?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===s?"/App.tsx":"vue3"===s?"/src/App.vue":"/src/index.js"}})}},72722(e,i,s){s.d(i,{A:()=>j});var t=s(65723),l=s(34622),n=s(7210),c=s(78863);s(22155);let a=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,r=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",d=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${a(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(i=>`${i}: ${a(e[i],"'")}`).join(", ")}`,p=(e,{prefix:i,includeFlicking:s=!0}={})=>{let t=s?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&t.push(...e),`${t.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},g=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,u=({options:e,panels:i,events:s={},methods:n={},plugins:c=[],siblings:o=[],imports:g=[],viewportClass:u=""})=>{let h=e=>`${Object.keys(e).map(i=>`${i}: ${a(e[i])}`).join(",\n  ")}`,m=Object.keys(n).map(e=>`const ${e} = ${n[e]};
`).join(""),j=e?`const flicking = new Flicking("#flick", {
  ${h(e)}
});

`:'const flicking = new Flicking("#flick")',x=c.length>0?`flicking.addPlugins(${c.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?h(e[1]):e[1]??""}
}`:""})`)});`:"",$=[...c.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],f=Object.keys(s).map(e=>{let i=s[e];return`flicking.on("${e}", ${i})
`}).join(""),v=i.filter(e=>e.isSlot);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${u&&` ${u}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${v.length?`
  ${v.map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,t.jsx)(l.A,{className:"language-js",title:"js",children:`${p($)}

${m}${j}${x}${f}`.trim()})]})},h=({options:e,panels:i,events:s={},methods:n={},plugins:c,siblings:a,imports:o=[],viewportClass:u=""})=>{let h=c?`
  private _plugins = [${g(c)}];
`:"",m=i.filter(e=>e.isSlot),j=[["{ Component }","react"],[m.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],x=Object.keys(n).map(e=>`
const ${e} = ${n[e]};`).join("");x&&(x+="\n"),c&&j.push([`{ ${c.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),j.push(...o);let $=m.length?`
      <ViewportSlot>
        ${m.map(e=>`<${e.tag}${r(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",f=Object.keys(s).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${s[e]}}`).join("");return(0,t.jsx)(l.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(j,{includeFlicking:!1})}
${x}
export default class DemoComponent extends Component {${h}
  public render() {
    return ${a?"<>\n    ":""}<Flicking${u&&` className="${u}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${c?" plugins={this._plugins}":""}${f}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${$}
    </Flicking>${a?`
    ${a.map(e=>`<${e.tag}${r(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},m=({options:e,panels:i,events:s={},methods:n={},plugins:c,siblings:a=[],imports:u=[],viewportClass:h=""})=>{let m=o(e),j=i.filter(e=>e.isSlot),x=c?`,
  data() {
    return {
      plugins: [${g(c)}]
    }
  }`:"",$=j.length?`
  <template #viewport>
    ${j.map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",f=[...(c??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...u],v=Object.keys(n),k=v.length>0?`,
  methods: {
    ${v.map(e=>`${e}: ${n[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",y=Object.keys(s).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${s[e]}"`).join("");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.A,{className:"language-html",title:"template",children:`<Flicking${h&&` class="${h}"`}${e?` :options="{ ${m} }"`:""}${c?' :plugins="plugins"':""}${y}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}${$}
</Flicking>${a?`
${a.map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,t.jsx)(l.A,{className:"language-js",title:"script",children:`${p(f,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${x}${k}
}`})]})},j=({js:e,react:i,vue3:s,style:a,...r})=>(0,t.jsxs)("div",{children:[(0,t.jsxs)(c.A,{groupId:"cfc",defaultValue:"js",children:[(0,t.jsx)(n.A,{value:"react",label:"React",children:i||(0,t.jsx)(h,{...r})}),(0,t.jsx)(n.A,{value:"vue3",label:"Vue@3",children:s||(0,t.jsx)(m,{...r})}),(0,t.jsx)(n.A,{value:"js",label:"JavaScript",children:e||(0,t.jsx)(u,{...r})})]}),a&&(0,t.jsx)(l.A,{className:"language-css",title:"style",children:`${a}`})]})}}]);