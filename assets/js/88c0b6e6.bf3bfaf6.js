"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["6812"],{15066(e,i,n){n.r(i),n.d(i,{metadata:()=>l,default:()=>x,frontMatter:()=>o,contentTitle:()=>p,toc:()=>g,assets:()=>h});var l=JSON.parse('{"id":"demos/basic/default","title":"Default","description":"Flicking\uC758 \uAE30\uBCF8 \uC0AC\uC6A9\uBC95\uACFC \uD544\uC218 \uAD6C\uC870\uB97C \uBCF4\uC5EC\uC8FC\uB294 \uB370\uBAA8","source":"@site/docs/demos/basic/default.mdx","sourceDirName":"demos/basic","slug":"/demos/basic/default","permalink":"/flicking-docs-test/docs/demos/basic/default","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/basic/default.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Default","id":"default","slug":"/demos/basic/default","sidebar_position":1,"description":"Flicking\uC758 \uAE30\uBCF8 \uC0AC\uC6A9\uBC95\uACFC \uD544\uC218 \uAD6C\uC870\uB97C \uBCF4\uC5EC\uC8FC\uB294 \uB370\uBAA8","keywords":["flicking","carousel","basic","default","\uAE30\uBCF8","\uC2DC\uC791\uD558\uAE30"]},"sidebar":"demosSidebar","next":{"title":"Alignment","permalink":"/flicking-docs-test/docs/demos/basic/alignment"}}'),s=n(65723),t=n(54187),c=n(27449),r=n(72722);n(22155);let a=`
.flicking-panel {
  width: 100%;
}
.panel-1 { background: #3e8ed0; }
.panel-2 { background: #00d1b2; }
.panel-3 { background: #f14668; }
.panel-4 { background: #ffe08a; color: #333; }
.panel-5 { background: #48c78e; }
`,d=()=>{let e=`import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "./styles.css";

export default function App() {
  return (
    <Flicking align="center">
      <div className="flicking-panel panel-1">1</div>
      <div className="flicking-panel panel-2">2</div>
      <div className="flicking-panel panel-3">3</div>
      <div className="flicking-panel panel-4">4</div>
      <div className="flicking-panel panel-5">5</div>
    </Flicking>
  );
}`,i=(0,s.jsx)(c.A,{template:"react",code:e,css:a}),n=`<template>
  <Flicking :options="{ align: 'center' }">
    <div class="flicking-panel panel-1">1</div>
    <div class="flicking-panel panel-2">2</div>
    <div class="flicking-panel panel-3">3</div>
    <div class="flicking-panel panel-4">4</div>
    <div class="flicking-panel panel-5">5</div>
  </Flicking>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";

export default {
  components: { Flicking }
};
</script>

<style>
.flicking-panel {
  width: 100%;
  height: 200px;
  margin-right: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  color: white;
}
.panel-1 { background: #3e8ed0; }
.panel-2 { background: #00d1b2; }
.panel-3 { background: #f14668; }
.panel-4 { background: #ffe08a; color: #333; }
.panel-5 { background: #48c78e; }
</style>`,l=(0,s.jsx)(c.A,{template:"vue3",code:n,css:a}),t=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

const flicking = new Flicking("#flick", {
  align: "center"
});`,d=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <div id="flick" class="flicking-viewport">
    <div class="flicking-camera">
      <div class="flicking-panel panel-1">1</div>
      <div class="flicking-panel panel-2">2</div>
      <div class="flicking-panel panel-3">3</div>
      <div class="flicking-panel panel-4">4</div>
      <div class="flicking-panel panel-5">5</div>
    </div>
  </div>
</body>
</html>`,o=(0,s.jsx)(c.A,{template:"vanilla",code:t,html:d,css:a});return(0,s.jsx)(r.A,{options:{},panels:[],react:i,vue3:l,js:o})},o={title:"Default",id:"default",slug:"/demos/basic/default",sidebar_position:1,description:"Flicking\uC758 \uAE30\uBCF8 \uC0AC\uC6A9\uBC95\uACFC \uD544\uC218 \uAD6C\uC870\uB97C \uBCF4\uC5EC\uC8FC\uB294 \uB370\uBAA8",keywords:["flicking","carousel","basic","default","\uAE30\uBCF8","\uC2DC\uC791\uD558\uAE30"]},p="Default",h={},g=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uAE30\uBCF8 \uC635\uC158\uAC12",id:"\uAE30\uBCF8-\uC635\uC158\uAC12",level:3},{value:"\uD544\uC218 \uC694\uC18C",id:"\uD544\uC218-\uC694\uC18C",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"HTML \uAD6C\uC870",id:"html-\uAD6C\uC870",level:3},{value:"CSS Import",id:"css-import",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function j(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"default",children:"Default"})}),"\n",(0,s.jsx)(i.p,{children:"Flicking\uC758 \uAC00\uC7A5 \uAE30\uBCF8\uC801\uC778 \uC0AC\uC6A9\uBC95\uC785\uB2C8\uB2E4. \uD544\uC218 HTML \uAD6C\uC870\uC640 CSS, \uAE30\uBCF8 \uC635\uC158\uAC12\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n",(0,s.jsx)(d,{}),"\n",(0,s.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,s.jsx)(i.h3,{id:"\uAE30\uBCF8-\uC635\uC158\uAC12",children:"\uAE30\uBCF8 \uC635\uC158\uAC12"}),"\n",(0,s.jsx)(i.p,{children:"\uC544\uBB34 \uC635\uC158 \uC5C6\uC774 \uC0DD\uC131\uD558\uBA74 \uB2E4\uC74C \uAE30\uBCF8\uAC12\uC774 \uC801\uC6A9\uB429\uB2C8\uB2E4:"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\uC635\uC158"}),(0,s.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,s.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#align",children:(0,s.jsx)(i.code,{children:"align"})})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'"center"'})}),(0,s.jsx)(i.td,{children:"\uD328\uB110 \uC815\uB82C \uC704\uCE58"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#horizontal",children:(0,s.jsx)(i.code,{children:"horizontal"})})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"true"})}),(0,s.jsx)(i.td,{children:"\uAC00\uB85C \uBC29\uD5A5 \uC774\uB3D9"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#circular",children:(0,s.jsx)(i.code,{children:"circular"})})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"false"})}),(0,s.jsx)(i.td,{children:"\uC21C\uD658 \uBAA8\uB4DC \uBE44\uD65C\uC131\uD654"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#bound",children:(0,s.jsx)(i.code,{children:"bound"})})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"false"})}),(0,s.jsx)(i.td,{children:"\uACBD\uACC4 \uC81C\uD55C \uC5C6\uC74C"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#duration",children:(0,s.jsx)(i.code,{children:"duration"})})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"500"})}),(0,s.jsx)(i.td,{children:"\uC560\uB2C8\uBA54\uC774\uC158 500ms"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#movetype",children:(0,s.jsx)(i.code,{children:"moveType"})})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'"snap"'})}),(0,s.jsx)(i.td,{children:"\uC2A4\uB0C5 \uC774\uB3D9 \uBC29\uC2DD"})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"\uD544\uC218-\uC694\uC18C",children:"\uD544\uC218 \uC694\uC18C"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\uC694\uC18C"}),(0,s.jsx)(i.th,{children:"\uD544\uC218 \uC5EC\uBD80"}),(0,s.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:".flicking-viewport"})}),(0,s.jsx)(i.td,{children:"\uD544\uC218"}),(0,s.jsx)(i.td,{children:"Flicking \uC778\uC2A4\uD134\uC2A4\uAC00 \uC5F0\uACB0\uB418\uB294 \uBDF0\uD3EC\uD2B8 \uC694\uC18C"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:".flicking-camera"})}),(0,s.jsx)(i.td,{children:"\uD544\uC218"}),(0,s.jsx)(i.td,{children:"\uD328\uB110\uB4E4\uC744 \uB2F4\uB294 \uCEE8\uD14C\uC774\uB108. \uC2E4\uC81C\uB85C \uC774\uB3D9\uD558\uB294 \uC694\uC18C"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"\uD328\uB110 \uC694\uC18C\uB4E4"}),(0,s.jsx)(i.td,{children:"\uD544\uC218"}),(0,s.jsxs)(i.td,{children:[(0,s.jsx)(i.code,{children:".flicking-camera"}),"\uC758 \uC9C1\uACC4 \uC790\uC2DD\uB4E4"]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"flicking.css"})}),(0,s.jsx)(i.td,{children:"\uD544\uC218"}),(0,s.jsx)(i.td,{children:"\uAE30\uBCF8 \uC2A4\uD0C0\uC77C\uC2DC\uD2B8"})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,s.jsx)(i.h3,{id:"html-\uAD6C\uC870",children:"HTML \uAD6C\uC870"}),"\n",(0,s.jsx)(i.p,{children:"Flicking\uC744 \uC0AC\uC6A9\uD558\uB824\uBA74 \uBC18\uB4DC\uC2DC \uB2E4\uC74C \uAD6C\uC870\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-html",children:'<div class="flicking-viewport">\n  <div class="flicking-camera">\n    <div class="panel">Panel 1</div>\n    <div class="panel">Panel 2</div>\n    <div class="panel">Panel 3</div>\n  </div>\n</div>\n'})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"flicking-viewport"}),": \uBCF4\uC774\uB294 \uC601\uC5ED\uC744 \uC815\uC758\uD569\uB2C8\uB2E4. ",(0,s.jsx)(i.code,{children:"overflow: hidden"}),"\uC774 \uC801\uC6A9\uB429\uB2C8\uB2E4."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"flicking-camera"}),": \uD328\uB110\uB4E4\uC744 \uAC10\uC2F8\uBA70, \uB4DC\uB798\uADF8/\uC560\uB2C8\uBA54\uC774\uC158 \uC2DC \uC774 \uC694\uC18C\uAC00 \uC774\uB3D9\uD569\uB2C8\uB2E4."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"\uD328\uB110"}),": \uAC01 \uC2AC\uB77C\uC774\uB4DC \uCF58\uD150\uCE20\uC785\uB2C8\uB2E4. camera\uC758 \uC9C1\uACC4 \uC790\uC2DD\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"css-import",children:"CSS Import"}),"\n",(0,s.jsx)(i.p,{children:"Flicking CSS\uB97C \uBC18\uB4DC\uC2DC import \uD574\uC57C \uD569\uB2C8\uB2E4:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",children:'// JavaScript\nimport "@egjs/flicking/dist/flicking.css";\n\n// React\nimport "@egjs/react-flicking/dist/flicking.css";\n\n// Vue\nimport "@egjs/vue3-flicking/dist/flicking.css";\n'})}),"\n",(0,s.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,s.jsx)(i.admonition,{title:"\uD544\uC218",type:"warning",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"flicking.css"}),"\uB97C import\uD558\uC9C0 \uC54A\uC73C\uBA74 \uD328\uB110\uC774 \uC62C\uBC14\uB974\uAC8C \uBC30\uCE58\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. viewport\uC640 camera\uC758 \uAE30\uBCF8 \uC2A4\uD0C0\uC77C\uC774 \uC815\uC758\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4."]})}),"\n",(0,s.jsx)(i.admonition,{title:"\uAD6C\uC870 \uC8FC\uC758",type:"warning",children:(0,s.jsxs)(i.p,{children:["\uD328\uB110 \uC694\uC18C\uB294 \uBC18\uB4DC\uC2DC ",(0,s.jsx)(i.code,{children:".flicking-camera"}),"\uC758 ",(0,s.jsx)(i.strong,{children:"\uC9C1\uACC4 \uC790\uC2DD"}),"\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC911\uAC04\uC5D0 \uB2E4\uB978 wrapper \uC694\uC18C\uAC00 \uC788\uC73C\uBA74 \uB3D9\uC791\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."]})}),"\n",(0,s.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,s.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"./alignment",children:"Alignment"}),": \uD328\uB110 \uC815\uB82C \uC635\uC158"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"./circular",children:"Circular"}),": \uC21C\uD658 \uBAA8\uB4DC"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"./movement-types",children:"Movement Types"}),": \uC774\uB3D9 \uBC29\uC2DD"]}),"\n"]})]})}function x(e={}){let{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},27449(e,i,n){n.d(i,{A:()=>o});var l=n(65723),s=n(19612);n(22155);let t="^4.11.4",c={react:{"@egjs/react-flicking":t,"@egjs/flicking":t},vue3:{"@egjs/vue3-flicking":t,"@egjs/flicking":t},vanilla:{"@egjs/flicking":t}},r=`<!DOCTYPE html>
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
`;function o({code:e,html:i,template:n="react",dependencies:t={},files:o={},css:p=""}){var h;let g,j,x;return(0,l.jsx)(s.OZ,{template:"vue3"===n?"vue":"vanilla"===n?"vanilla":"react",files:(x={"/styles.css":{code:j=p?`${d}
${p}`:d},...o},"react"===n?{"/App.tsx":{code:e},"/index.js":{code:a,hidden:!0},...x}:"vue3"===n?{"/src/App.vue":{code:e},...x}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),n=[],l=[],s=!1;for(let e of i)s?l.push(e):e.trimStart().startsWith("import ")||""===e.trim()?n.push(e.replace('"../styles.css"','"./styles.css"')):(s=!0,l.push(e));for(;l.length>0&&""===l[l.length-1].trim();)l.pop();return[...n,"","const _run = () => {",...l.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:j},"/index.html":{code:(g="<style>.flicking-viewport{opacity:0}</style>",(h=i||r).includes("</head>")?h.replace("</head>",`${g}
</head>`):g+h)},...o}),customSetup:{dependencies:{...c[n],...t}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===n?["/App.tsx","/styles.css"]:"vue3"===n?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===n?"/App.tsx":"vue3"===n?"/src/App.vue":"/src/index.js"}})}},72722(e,i,n){n.d(i,{A:()=>m});var l=n(65723),s=n(34622),t=n(7210),c=n(78863);n(22155);let r=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,a=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",d=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${r(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(i=>`${i}: ${r(e[i],"'")}`).join(", ")}`,p=(e,{prefix:i,includeFlicking:n=!0}={})=>{let l=n?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&l.push(...e),`${l.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},h=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,g=({options:e,panels:i,events:n={},methods:t={},plugins:c=[],siblings:o=[],imports:h=[],viewportClass:g=""})=>{let j=e=>`${Object.keys(e).map(i=>`${i}: ${r(e[i])}`).join(",\n  ")}`,x=Object.keys(t).map(e=>`const ${e} = ${t[e]};
`).join(""),m=e?`const flicking = new Flicking("#flick", {
  ${j(e)}
});

`:'const flicking = new Flicking("#flick")',f=c.length>0?`flicking.addPlugins(${c.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?j(e[1]):e[1]??""}
}`:""})`)});`:"",u=[...c.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...h],$=Object.keys(n).map(e=>{let i=n[e];return`flicking.on("${e}", ${i})
`}).join(""),k=i.filter(e=>e.isSlot);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${g&&` ${g}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${k.length?`
  ${k.map(e=>`<${e.tag}${a(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${a(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,l.jsx)(s.A,{className:"language-js",title:"js",children:`${p(u)}

${x}${m}${f}${$}`.trim()})]})},j=({options:e,panels:i,events:n={},methods:t={},plugins:c,siblings:r,imports:o=[],viewportClass:g=""})=>{let j=c?`
  private _plugins = [${h(c)}];
`:"",x=i.filter(e=>e.isSlot),m=[["{ Component }","react"],[x.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],f=Object.keys(t).map(e=>`
const ${e} = ${t[e]};`).join("");f&&(f+="\n"),c&&m.push([`{ ${c.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),m.push(...o);let u=x.length?`
      <ViewportSlot>
        ${x.map(e=>`<${e.tag}${a(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",$=Object.keys(n).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${n[e]}}`).join("");return(0,l.jsx)(s.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(m,{includeFlicking:!1})}
${f}
export default class DemoComponent extends Component {${j}
  public render() {
    return ${r?"<>\n    ":""}<Flicking${g&&` className="${g}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${c?" plugins={this._plugins}":""}${$}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${u}
    </Flicking>${r?`
    ${r.map(e=>`<${e.tag}${a(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},x=({options:e,panels:i,events:n={},methods:t={},plugins:c,siblings:r=[],imports:g=[],viewportClass:j=""})=>{let x=o(e),m=i.filter(e=>e.isSlot),f=c?`,
  data() {
    return {
      plugins: [${h(c)}]
    }
  }`:"",u=m.length?`
  <template #viewport>
    ${m.map(e=>`<${e.tag}${a(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",$=[...(c??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],k=Object.keys(t),v=k.length>0?`,
  methods: {
    ${k.map(e=>`${e}: ${t[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",b=Object.keys(n).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${n[e]}"`).join("");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.A,{className:"language-html",title:"template",children:`<Flicking${j&&` class="${j}"`}${e?` :options="{ ${x} }"`:""}${c?' :plugins="plugins"':""}${b}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}${u}
</Flicking>${r?`
${r.map(e=>`<${e.tag}${a(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,l.jsx)(s.A,{className:"language-js",title:"script",children:`${p($,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${f}${v}
}`})]})},m=({js:e,react:i,vue3:n,style:r,...a})=>(0,l.jsxs)("div",{children:[(0,l.jsxs)(c.A,{groupId:"cfc",defaultValue:"js",children:[(0,l.jsx)(t.A,{value:"react",label:"React",children:i||(0,l.jsx)(j,{...a})}),(0,l.jsx)(t.A,{value:"vue3",label:"Vue@3",children:n||(0,l.jsx)(x,{...a})}),(0,l.jsx)(t.A,{value:"js",label:"JavaScript",children:e||(0,l.jsx)(g,{...a})})]}),r&&(0,l.jsx)(s.A,{className:"language-css",title:"style",children:`${r}`})]})}}]);