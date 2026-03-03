"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["3404"],{47303(e,i,l){l.r(i),l.d(i,{metadata:()=>s,default:()=>j,frontMatter:()=>p,contentTitle:()=>g,toc:()=>m,assets:()=>h});var s=JSON.parse('{"id":"demos/plugins/parallax","title":"Parallax","description":"\uD328\uB110 \uB0B4\uBD80 \uC694\uC18C\uC5D0 \uC2DC\uCC28(Parallax) \uC2A4\uD06C\uB864 \uD6A8\uACFC\uB97C \uC801\uC6A9\uD558\uB294 \uD50C\uB7EC\uADF8\uC778","source":"@site/docs/demos/plugins/parallax.mdx","sourceDirName":"demos/plugins","slug":"/demos/plugins/parallax","permalink":"/flicking-docs-test/ko/docs/demos/plugins/parallax","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/plugins/parallax.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Parallax","id":"parallax","slug":"/demos/plugins/parallax","sidebar_position":3,"description":"\uD328\uB110 \uB0B4\uBD80 \uC694\uC18C\uC5D0 \uC2DC\uCC28(Parallax) \uC2A4\uD06C\uB864 \uD6A8\uACFC\uB97C \uC801\uC6A9\uD558\uB294 \uD50C\uB7EC\uADF8\uC778","keywords":["flicking","plugin","parallax","scroll","effect"]},"sidebar":"demosSidebar","previous":{"title":"AutoPlay","permalink":"/flicking-docs-test/ko/docs/demos/plugins/autoplay"},"next":{"title":"Perspective","permalink":"/flicking-docs-test/ko/docs/demos/plugins/perspective"}}'),n=l(65723),t=l(54187),a=l(27449),c=l(72722);l(22155);let r={"@egjs/flicking-plugins":"^4.6.0"},d=`
.flicking-panel {
  position: relative;
  border-radius: 5px;
  width: 80%;
  margin-right: 10px;
  height: 200px;
  overflow: hidden;
}

.panel-image {
  width: 150%;
  max-width: 150%;
  height: 100%;
  object-fit: cover;
}
`,o=()=>{let e=`import Flicking from "@egjs/react-flicking";
import { Parallax } from "@egjs/flicking-plugins";
import "@egjs/flicking/dist/flicking.css";

const plugins = [new Parallax("img")];

export default function App() {
  return (
    <Flicking circular={true} plugins={plugins} preventDefaultOnDrag={true}>
      <div className="flicking-panel">
        <img className="panel-image" src="https://picsum.photos/seed/para1/900/300" />
      </div>
      <div className="flicking-panel">
        <img className="panel-image" src="https://picsum.photos/seed/para2/900/300" />
      </div>
      <div className="flicking-panel">
        <img className="panel-image" src="https://picsum.photos/seed/para3/900/300" />
      </div>
    </Flicking>
  );
}`,i=`<template>
  <Flicking :options="{ circular: true, preventDefaultOnDrag: true }" :plugins="plugins">
    <div class="flicking-panel">
      <img class="panel-image" src="https://picsum.photos/seed/para1/900/300" />
    </div>
    <div class="flicking-panel">
      <img class="panel-image" src="https://picsum.photos/seed/para2/900/300" />
    </div>
    <div class="flicking-panel">
      <img class="panel-image" src="https://picsum.photos/seed/para3/900/300" />
    </div>
  </Flicking>
</template>

<script setup>
import Flicking from "@egjs/vue3-flicking";
import { Parallax } from "@egjs/flicking-plugins";
import "@egjs/flicking/dist/flicking.css";

const plugins = [new Parallax("img")];
</script>`,l=`import Flicking from "@egjs/flicking";
import { Parallax } from "@egjs/flicking-plugins";
import "@egjs/flicking/dist/flicking.css";

const flicking = new Flicking("#flick", {
  circular: true,
  preventDefaultOnDrag: true
});

flicking.addPlugins(new Parallax("img"));`,s=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <div id="app">
    <div id="flick" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel">
          <img class="panel-image" src="https://picsum.photos/seed/para1/900/300" />
        </div>
        <div class="flicking-panel">
          <img class="panel-image" src="https://picsum.photos/seed/para2/900/300" />
        </div>
        <div class="flicking-panel">
          <img class="panel-image" src="https://picsum.photos/seed/para3/900/300" />
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;return(0,n.jsx)(c.A,{options:{circular:!0},panels:[],react:(0,n.jsx)(a.A,{template:"react",code:e,css:d,dependencies:r}),vue3:(0,n.jsx)(a.A,{template:"vue3",code:i,css:d,dependencies:r}),js:(0,n.jsx)(a.A,{template:"vanilla",code:l,html:s,css:d,dependencies:r})})},p={title:"Parallax",id:"parallax",slug:"/demos/plugins/parallax",sidebar_position:3,description:"\uD328\uB110 \uB0B4\uBD80 \uC694\uC18C\uC5D0 \uC2DC\uCC28(Parallax) \uC2A4\uD06C\uB864 \uD6A8\uACFC\uB97C \uC801\uC6A9\uD558\uB294 \uD50C\uB7EC\uADF8\uC778",keywords:["flicking","plugin","parallax","scroll","effect"]},g="Parallax",h={},m=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"\uB3D9\uC791 \uC6D0\uB9AC",id:"\uB3D9\uC791-\uC6D0\uB9AC",level:3},{value:"\uC0AC\uC6A9\uBC95",id:"\uC0AC\uC6A9\uBC95",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"CSS \uC124\uC815",id:"css-\uC124\uC815",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function u(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"parallax",children:"Parallax"})}),"\n",(0,n.jsx)(i.p,{children:"\uD328\uB110 \uB0B4\uBD80\uC758 \uC774\uBBF8\uC9C0\uB098 \uC694\uC18C\uC5D0 \uC2DC\uCC28 \uC2A4\uD06C\uB864(Parallax) \uD6A8\uACFC\uB97C \uC801\uC6A9\uD569\uB2C8\uB2E4."}),"\n",(0,n.jsx)(o,{}),"\n",(0,n.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,n.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"\uC635\uC158"}),(0,n.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,n.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,n.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"selector"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"string"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:'""'})}),(0,n.jsx)(i.td,{children:"\uD6A8\uACFC\uB97C \uC801\uC6A9\uD560 \uC694\uC18C\uC758 CSS \uC120\uD0DD\uC790"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"scale"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"number"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"1"})}),(0,n.jsx)(i.td,{children:"\uC2DC\uCC28 \uC774\uB3D9 \uAC15\uB3C4 \uBC30\uC728"})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,n.jsx)(i.h3,{id:"\uB3D9\uC791-\uC6D0\uB9AC",children:"\uB3D9\uC791 \uC6D0\uB9AC"}),"\n",(0,n.jsx)(i.p,{children:"Parallax \uD50C\uB7EC\uADF8\uC778\uC740 \uD328\uB110\uC774 \uC774\uB3D9\uD560 \uB54C \uB0B4\uBD80\uC758 \uC9C0\uC815\uB41C \uC694\uC18C\uB97C \uD328\uB110\uBCF4\uB2E4 \uB290\uB9AC\uAC8C(\uB610\uB294 \uBE60\uB974\uAC8C) \uC774\uB3D9\uC2DC\uCF1C \uAE4A\uC774\uAC10\uC744 \uB9CC\uB4ED\uB2C8\uB2E4. \uB300\uC0C1 \uC694\uC18C\uB294 \uD328\uB110\uBCF4\uB2E4 \uCEE4\uC57C \uC2DC\uCC28 \uD6A8\uACFC\uAC00 \uBCF4\uC785\uB2C8\uB2E4."}),"\n",(0,n.jsx)(i.h3,{id:"\uC0AC\uC6A9\uBC95",children:"\uC0AC\uC6A9\uBC95"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-js",children:'import { Parallax } from "@egjs/flicking-plugins";\n\n// img \uC694\uC18C\uC5D0 \uC2DC\uCC28 \uD6A8\uACFC \uC801\uC6A9\nflicking.addPlugins(new Parallax("img"));\n\n// \uD2B9\uC815 \uD074\uB798\uC2A4\uC5D0 \uC801\uC6A9\nflicking.addPlugins(new Parallax(".parallax-target"));\n'})}),"\n",(0,n.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,n.jsx)(i.admonition,{title:"\uC8FC\uC758",type:"warning",children:(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\uD6A8\uACFC\uB97C \uC801\uC6A9\uD560 \uC694\uC18C\uB294 \uBC18\uB4DC\uC2DC \uD328\uB110\uBCF4\uB2E4 \uD070 \uD06C\uAE30\uC5EC\uC57C \uD569\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C ",(0,n.jsx)(i.code,{children:"width: 150%"}),"\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4."]}),"\n",(0,n.jsxs)(i.li,{children:["\uD328\uB110\uC5D0 ",(0,n.jsx)(i.code,{children:"overflow: hidden"}),"\uC744 \uC124\uC815\uD558\uC5EC \uB118\uCE58\uB294 \uBD80\uBD84\uC744 \uC228\uAE30\uC138\uC694."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"selector"}),"\uB97C \uBE48 \uBB38\uC790\uC5F4\uB85C \uB450\uBA74 \uD328\uB110 \uC790\uCCB4\uC5D0 \uD6A8\uACFC\uAC00 \uC801\uC6A9\uB429\uB2C8\uB2E4."]}),"\n"]})}),"\n",(0,n.jsx)(i.h3,{id:"css-\uC124\uC815",children:"CSS \uC124\uC815"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-css",children:"/* \uD328\uB110\uC740 overflow: hidden\uC73C\uB85C \uB118\uCE58\uB294 \uBD80\uBD84\uC744 \uC228\uAE41\uB2C8\uB2E4 */\n.flicking-panel {\n  overflow: hidden;\n}\n\n/* \uB300\uC0C1 \uC694\uC18C\uB294 \uD328\uB110\uBCF4\uB2E4 \uCEE4\uC57C \uD569\uB2C8\uB2E4 */\n.panel-image {\n  width: 150%;\n  max-width: 150%;\n}\n"})}),"\n",(0,n.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,n.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"./fade",children:"Fade"}),": \uD398\uC774\uB4DC \uD6A8\uACFC"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"./perspective",children:"Perspective"}),": 3D \uC6D0\uADFC \uD6A8\uACFC"]}),"\n"]})]})}function j(e={}){let{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},27449(e,i,l){l.d(i,{A:()=>o});var s=l(65723),n=l(19612);l(22155);let t="^4.11.4",a={react:{"@egjs/react-flicking":t,"@egjs/flicking":t},vue3:{"@egjs/vue3-flicking":t,"@egjs/flicking":t},vanilla:{"@egjs/flicking":t}},c=`<!DOCTYPE html>
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
`;function o({code:e,html:i,template:l="react",dependencies:t={},files:o={},css:p=""}){var g;let h,m,u;return(0,s.jsx)(n.OZ,{template:"vue3"===l?"vue":"vanilla"===l?"vanilla":"react",files:(u={"/styles.css":{code:m=p?`${d}
${p}`:d},...o},"react"===l?{"/App.tsx":{code:e},"/index.js":{code:r,hidden:!0},...u}:"vue3"===l?{"/src/App.vue":{code:e},...u}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),l=[],s=[],n=!1;for(let e of i)n?s.push(e):e.trimStart().startsWith("import ")||""===e.trim()?l.push(e.replace('"../styles.css"','"./styles.css"')):(n=!0,s.push(e));for(;s.length>0&&""===s[s.length-1].trim();)s.pop();return[...l,"","const _run = () => {",...s.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:m},"/index.html":{code:(h="<style>.flicking-viewport{opacity:0}</style>",(g=i||c).includes("</head>")?g.replace("</head>",`${h}
</head>`):h+g)},...o}),customSetup:{dependencies:{...a[l],...t}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===l?["/App.tsx","/styles.css"]:"vue3"===l?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===l?"/App.tsx":"vue3"===l?"/src/App.vue":"/src/index.js"}})}},72722(e,i,l){l.d(i,{A:()=>j});var s=l(65723),n=l(34622),t=l(7210),a=l(78863);l(22155);let c=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,r=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",d=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${c(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(i=>`${i}: ${c(e[i],"'")}`).join(", ")}`,p=(e,{prefix:i,includeFlicking:l=!0}={})=>{let s=l?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&s.push(...e),`${s.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},g=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,h=({options:e,panels:i,events:l={},methods:t={},plugins:a=[],siblings:o=[],imports:g=[],viewportClass:h=""})=>{let m=e=>`${Object.keys(e).map(i=>`${i}: ${c(e[i])}`).join(",\n  ")}`,u=Object.keys(t).map(e=>`const ${e} = ${t[e]};
`).join(""),j=e?`const flicking = new Flicking("#flick", {
  ${m(e)}
});

`:'const flicking = new Flicking("#flick")',x=a.length>0?`flicking.addPlugins(${a.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?m(e[1]):e[1]??""}
}`:""})`)});`:"",$=[...a.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],f=Object.keys(l).map(e=>{let i=l[e];return`flicking.on("${e}", ${i})
`}).join(""),k=i.filter(e=>e.isSlot);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${h&&` ${h}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${k.length?`
  ${k.map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,s.jsx)(n.A,{className:"language-js",title:"js",children:`${p($)}

${u}${j}${x}${f}`.trim()})]})},m=({options:e,panels:i,events:l={},methods:t={},plugins:a,siblings:c,imports:o=[],viewportClass:h=""})=>{let m=a?`
  private _plugins = [${g(a)}];
`:"",u=i.filter(e=>e.isSlot),j=[["{ Component }","react"],[u.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],x=Object.keys(t).map(e=>`
const ${e} = ${t[e]};`).join("");x&&(x+="\n"),a&&j.push([`{ ${a.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),j.push(...o);let $=u.length?`
      <ViewportSlot>
        ${u.map(e=>`<${e.tag}${r(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",f=Object.keys(l).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${l[e]}}`).join("");return(0,s.jsx)(n.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(j,{includeFlicking:!1})}
${x}
export default class DemoComponent extends Component {${m}
  public render() {
    return ${c?"<>\n    ":""}<Flicking${h&&` className="${h}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${a?" plugins={this._plugins}":""}${f}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${$}
    </Flicking>${c?`
    ${c.map(e=>`<${e.tag}${r(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},u=({options:e,panels:i,events:l={},methods:t={},plugins:a,siblings:c=[],imports:h=[],viewportClass:m=""})=>{let u=o(e),j=i.filter(e=>e.isSlot),x=a?`,
  data() {
    return {
      plugins: [${g(a)}]
    }
  }`:"",$=j.length?`
  <template #viewport>
    ${j.map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",f=[...(a??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...h],k=Object.keys(t),v=k.length>0?`,
  methods: {
    ${k.map(e=>`${e}: ${t[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",y=Object.keys(l).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${l[e]}"`).join("");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.A,{className:"language-html",title:"template",children:`<Flicking${m&&` class="${m}"`}${e?` :options="{ ${u} }"`:""}${a?' :plugins="plugins"':""}${y}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}${$}
</Flicking>${c?`
${c.map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,s.jsx)(n.A,{className:"language-js",title:"script",children:`${p(f,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${x}${v}
}`})]})},j=({js:e,react:i,vue3:l,style:c,...r})=>(0,s.jsxs)("div",{children:[(0,s.jsxs)(a.A,{groupId:"cfc",defaultValue:"js",children:[(0,s.jsx)(t.A,{value:"react",label:"React",children:i||(0,s.jsx)(m,{...r})}),(0,s.jsx)(t.A,{value:"vue3",label:"Vue@3",children:l||(0,s.jsx)(u,{...r})}),(0,s.jsx)(t.A,{value:"js",label:"JavaScript",children:e||(0,s.jsx)(h,{...r})})]}),c&&(0,s.jsx)(n.A,{className:"language-css",title:"style",children:`${c}`})]})}}]);