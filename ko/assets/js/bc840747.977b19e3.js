"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["9859"],{65454(e,i,t){t.r(i),t.d(i,{metadata:()=>s,default:()=>j,frontMatter:()=>p,contentTitle:()=>g,toc:()=>u,assets:()=>h});var s=JSON.parse('{"id":"demos/plugins/perspective","title":"Perspective","description":"\uD328\uB110\uC5D0 3D \uC6D0\uADFC \uD68C\uC804 \uD6A8\uACFC\uB97C \uC801\uC6A9\uD558\uB294 \uD50C\uB7EC\uADF8\uC778","source":"@site/docs/demos/plugins/perspective.mdx","sourceDirName":"demos/plugins","slug":"/demos/plugins/perspective","permalink":"/flicking-docs-test/ko/docs/demos/plugins/perspective","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/plugins/perspective.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Perspective","id":"perspective","slug":"/demos/plugins/perspective","sidebar_position":4,"description":"\uD328\uB110\uC5D0 3D \uC6D0\uADFC \uD68C\uC804 \uD6A8\uACFC\uB97C \uC801\uC6A9\uD558\uB294 \uD50C\uB7EC\uADF8\uC778","keywords":["flicking","plugin","perspective","3D","rotate","transform"]},"sidebar":"demosSidebar","previous":{"title":"Parallax","permalink":"/flicking-docs-test/ko/docs/demos/plugins/parallax"},"next":{"title":"Arrow","permalink":"/flicking-docs-test/ko/docs/demos/plugins/arrow"}}'),n=t(65723),l=t(54187),c=t(27449),r=t(72722);t(22155);let a={"@egjs/flicking-plugins":"^4.6.0"},o=`
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
`,d=()=>{let e=`import Flicking from "@egjs/react-flicking";
import { Perspective } from "@egjs/flicking-plugins";
import "@egjs/flicking/dist/flicking.css";

const COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6"];
const plugins = [new Perspective({ rotate: 1, perspective: 1000 })];

export default function App() {
  return (
    <Flicking circular={true} plugins={plugins} align="center">
      {COLORS.map((color, i) => (
        <div className="flicking-panel" key={i} style={{ background: color }}>
          {i + 1}
        </div>
      ))}
    </Flicking>
  );
}`,i=`<template>
  <Flicking :options="{ circular: true, align: 'center' }" :plugins="plugins">
    <div v-for="(color, i) in COLORS" :key="i"
         class="flicking-panel"
         :style="{ background: color }">
      {{ i + 1 }}
    </div>
  </Flicking>
</template>

<script setup>
import Flicking from "@egjs/vue3-flicking";
import { Perspective } from "@egjs/flicking-plugins";
import "@egjs/flicking/dist/flicking.css";

const COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6"];
const plugins = [new Perspective({ rotate: 1, perspective: 1000 })];
</script>`,t=`import Flicking from "@egjs/flicking";
import { Perspective } from "@egjs/flicking-plugins";
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

const flicking = new Flicking("#flick", {
  circular: true,
  align: "center"
});

flicking.addPlugins(new Perspective({ rotate: 1, perspective: 1000 }));`,s=`<!DOCTYPE html>
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
</html>`;return(0,n.jsx)(r.A,{options:{circular:!0,align:"center"},panels:[],react:(0,n.jsx)(c.A,{template:"react",code:e,css:o,dependencies:a}),vue3:(0,n.jsx)(c.A,{template:"vue3",code:i,css:o,dependencies:a}),js:(0,n.jsx)(c.A,{template:"vanilla",code:t,html:s,css:o,dependencies:a})})},p={title:"Perspective",id:"perspective",slug:"/demos/plugins/perspective",sidebar_position:4,description:"\uD328\uB110\uC5D0 3D \uC6D0\uADFC \uD68C\uC804 \uD6A8\uACFC\uB97C \uC801\uC6A9\uD558\uB294 \uD50C\uB7EC\uADF8\uC778",keywords:["flicking","plugin","perspective","3D","rotate","transform"]},g="Perspective",h={},u=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"\uB3D9\uC791 \uC6D0\uB9AC",id:"\uB3D9\uC791-\uC6D0\uB9AC",level:3},{value:"\uC0AC\uC6A9\uBC95",id:"\uC0AC\uC6A9\uBC95",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function m(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"perspective",children:"Perspective"})}),"\n",(0,n.jsx)(i.p,{children:"\uD328\uB110\uC758 \uC704\uCE58\uC5D0 \uB530\uB77C 3D \uC6D0\uADFC \uD68C\uC804 \uBC0F \uD06C\uAE30 \uBCC0\uD658 \uD6A8\uACFC\uB97C \uC801\uC6A9\uD569\uB2C8\uB2E4."}),"\n",(0,n.jsx)(d,{}),"\n",(0,n.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,n.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"\uC635\uC158"}),(0,n.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,n.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,n.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"rotate"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"number"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"1"})}),(0,n.jsx)(i.td,{children:"\uD68C\uC804 \uAC15\uB3C4. \uC591\uC218\uBA74 \uC624\uB978\uCABD \uD328\uB110\uC774 \uC548\uCABD\uC73C\uB85C, \uC74C\uC218\uBA74 \uBC14\uAE65\uCABD\uC73C\uB85C \uD68C\uC804"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"scale"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"number"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"2"})}),(0,n.jsx)(i.td,{children:"\uD06C\uAE30 \uBCC0\uD658 \uAC15\uB3C4"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"perspective"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"number"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"1000"})}),(0,n.jsx)(i.td,{children:"CSS perspective \uAC12 (px). \uC791\uC744\uC218\uB85D \uC65C\uACE1\uC774 \uAC15\uD574\uC9D0"})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,n.jsx)(i.h3,{id:"\uB3D9\uC791-\uC6D0\uB9AC",children:"\uB3D9\uC791 \uC6D0\uB9AC"}),"\n",(0,n.jsxs)(i.p,{children:["Perspective \uD50C\uB7EC\uADF8\uC778\uC740 \uAC01 \uD328\uB110\uC758 \uAC00\uC2DC \uBE44\uC728(visible ratio)\uC744 \uAE30\uBC18\uC73C\uB85C ",(0,n.jsx)(i.code,{children:"rotateY"}),"\uC640 ",(0,n.jsx)(i.code,{children:"scale"})," \uBCC0\uD658\uC744 \uC790\uB3D9 \uC801\uC6A9\uD569\uB2C8\uB2E4. \uC911\uC559\uC5D0 \uAC00\uAE4C\uC6B4 \uD328\uB110\uC740 \uC815\uBA74\uC744, \uBA40\uC5B4\uC9C8\uC218\uB85D \uD68C\uC804\uB41C \uBAA8\uC2B5\uC744 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4."]}),"\n",(0,n.jsx)(i.h3,{id:"\uC0AC\uC6A9\uBC95",children:"\uC0AC\uC6A9\uBC95"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-js",children:'import { Perspective } from "@egjs/flicking-plugins";\n\n// \uAE30\uBCF8 \uC0AC\uC6A9\nflicking.addPlugins(new Perspective({ rotate: 1, perspective: 1000 }));\n\n// \uAC15\uD55C \uC65C\uACE1\nflicking.addPlugins(new Perspective({ rotate: -1, scale: 2, perspective: 600 }));\n'})}),"\n",(0,n.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,n.jsx)(i.admonition,{title:"\uC8FC\uC758",type:"warning",children:(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"circular: true"}),"\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD558\uBA74 \uB04A\uAE40 \uC5C6\uB294 3D \uD68C\uC804 \uD6A8\uACFC\uB97C \uAD6C\uD604\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n",(0,n.jsx)(i.li,{children:"\uD328\uB110\uC774 \uB108\uBB34 \uC801\uC73C\uBA74 \uC21C\uD658 \uC2DC \uBE48 \uACF5\uAC04\uC774 \uC0DD\uAE38 \uC218 \uC788\uC73C\uBBC0\uB85C \uCD5C\uC18C 4~5\uAC1C \uC774\uC0C1\uC758 \uD328\uB110\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4."}),"\n"]})}),"\n",(0,n.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,n.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../advanced/coverflow",children:"Coverflow"}),": Reactive API \uAE30\uBC18 3D \uD6A8\uACFC"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"./parallax",children:"Parallax"}),": \uC2DC\uCC28 \uC2A4\uD06C\uB864 \uD6A8\uACFC"]}),"\n"]})]})}function j(e={}){let{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},27449(e,i,t){t.d(i,{A:()=>d});var s=t(65723),n=t(19612);t(22155);let l="^4.11.4",c={react:{"@egjs/react-flicking":l,"@egjs/flicking":l},vue3:{"@egjs/vue3-flicking":l,"@egjs/flicking":l},vanilla:{"@egjs/flicking":l}},r=`<!DOCTYPE html>
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
`;function d({code:e,html:i,template:t="react",dependencies:l={},files:d={},css:p=""}){var g;let h,u,m;return(0,s.jsx)(n.OZ,{template:"vue3"===t?"vue":"vanilla"===t?"vanilla":"react",files:(m={"/styles.css":{code:u=p?`${o}
${p}`:o},...d},"react"===t?{"/App.tsx":{code:e},"/index.js":{code:a,hidden:!0},...m}:"vue3"===t?{"/src/App.vue":{code:e},...m}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),t=[],s=[],n=!1;for(let e of i)n?s.push(e):e.trimStart().startsWith("import ")||""===e.trim()?t.push(e.replace('"../styles.css"','"./styles.css"')):(n=!0,s.push(e));for(;s.length>0&&""===s[s.length-1].trim();)s.pop();return[...t,"","const _run = () => {",...s.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:u},"/index.html":{code:(h="<style>.flicking-viewport{opacity:0}</style>",(g=i||r).includes("</head>")?g.replace("</head>",`${h}
</head>`):h+g)},...d}),customSetup:{dependencies:{...c[t],...l}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===t?["/App.tsx","/styles.css"]:"vue3"===t?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===t?"/App.tsx":"vue3"===t?"/src/App.vue":"/src/index.js"}})}},72722(e,i,t){t.d(i,{A:()=>j});var s=t(65723),n=t(34622),l=t(7210),c=t(78863);t(22155);let r=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,a=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",o=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${r(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",d=e=>`${Object.keys(e).map(i=>`${i}: ${r(e[i],"'")}`).join(", ")}`,p=(e,{prefix:i,includeFlicking:t=!0}={})=>{let s=t?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&s.push(...e),`${s.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},g=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${d(e[1])} }`:e[1]??""}`).join(", ")})`,h=({options:e,panels:i,events:t={},methods:l={},plugins:c=[],siblings:d=[],imports:g=[],viewportClass:h=""})=>{let u=e=>`${Object.keys(e).map(i=>`${i}: ${r(e[i])}`).join(",\n  ")}`,m=Object.keys(l).map(e=>`const ${e} = ${l[e]};
`).join(""),j=e?`const flicking = new Flicking("#flick", {
  ${u(e)}
});

`:'const flicking = new Flicking("#flick")',$=c.length>0?`flicking.addPlugins(${c.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?u(e[1]):e[1]??""}
}`:""})`)});`:"",x=[...c.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],f=Object.keys(t).map(e=>{let i=t[e];return`flicking.on("${e}", ${i})
`}).join(""),v=i.filter(e=>e.isSlot);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${h&&` ${h}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${v.length?`
  ${v.map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${d?"\n"+d.map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,s.jsx)(n.A,{className:"language-js",title:"js",children:`${p(x)}

${m}${j}${$}${f}`.trim()})]})},u=({options:e,panels:i,events:t={},methods:l={},plugins:c,siblings:r,imports:d=[],viewportClass:h=""})=>{let u=c?`
  private _plugins = [${g(c)}];
`:"",m=i.filter(e=>e.isSlot),j=[["{ Component }","react"],[m.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],$=Object.keys(l).map(e=>`
const ${e} = ${l[e]};`).join("");$&&($+="\n"),c&&j.push([`{ ${c.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),j.push(...d);let x=m.length?`
      <ViewportSlot>
        ${m.map(e=>`<${e.tag}${a(e,"className")}${o(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",f=Object.keys(t).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${t[e]}}`).join("");return(0,s.jsx)(n.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(j,{includeFlicking:!1})}
${$}
export default class DemoComponent extends Component {${u}
  public render() {
    return ${r?"<>\n    ":""}<Flicking${h&&` className="${h}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${c?" plugins={this._plugins}":""}${f}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e,"className")}${o(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${x}
    </Flicking>${r?`
    ${r.map(e=>`<${e.tag}${a(e,"className")}${o(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},m=({options:e,panels:i,events:t={},methods:l={},plugins:c,siblings:r=[],imports:h=[],viewportClass:u=""})=>{let m=d(e),j=i.filter(e=>e.isSlot),$=c?`,
  data() {
    return {
      plugins: [${g(c)}]
    }
  }`:"",x=j.length?`
  <template #viewport>
    ${j.map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",f=[...(c??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...h],v=Object.keys(l),k=v.length>0?`,
  methods: {
    ${v.map(e=>`${e}: ${l[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",y=Object.keys(t).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${t[e]}"`).join("");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.A,{className:"language-html",title:"template",children:`<Flicking${u&&` class="${u}"`}${e?` :options="{ ${m} }"`:""}${c?' :plugins="plugins"':""}${y}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n  ")}${x}
</Flicking>${r?`
${r.map(e=>`<${e.tag}${a(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,s.jsx)(n.A,{className:"language-js",title:"script",children:`${p(f,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${$}${k}
}`})]})},j=({js:e,react:i,vue3:t,style:r,...a})=>(0,s.jsxs)("div",{children:[(0,s.jsxs)(c.A,{groupId:"cfc",defaultValue:"js",children:[(0,s.jsx)(l.A,{value:"react",label:"React",children:i||(0,s.jsx)(u,{...a})}),(0,s.jsx)(l.A,{value:"vue3",label:"Vue@3",children:t||(0,s.jsx)(m,{...a})}),(0,s.jsx)(l.A,{value:"js",label:"JavaScript",children:e||(0,s.jsx)(h,{...a})})]}),r&&(0,s.jsx)(n.A,{className:"language-css",title:"style",children:`${r}`})]})}}]);