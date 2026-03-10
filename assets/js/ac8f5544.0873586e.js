"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["4860"],{58846(e,i,s){s.r(i),s.d(i,{metadata:()=>l,default:()=>j,frontMatter:()=>p,contentTitle:()=>g,toc:()=>h,assets:()=>m});var l=JSON.parse('{"id":"demos/plugins/fade","title":"Fade","description":"\uD328\uB110 \uC804\uD658 \uC2DC \uD398\uC774\uB4DC \uC778/\uC544\uC6C3 \uD6A8\uACFC\uB97C \uC801\uC6A9\uD558\uB294 \uD50C\uB7EC\uADF8\uC778","source":"@site/docs/demos/plugins/fade.mdx","sourceDirName":"demos/plugins","slug":"/demos/plugins/fade","permalink":"/flicking-docs-test/docs/demos/plugins/fade","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/plugins/fade.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Fade","id":"fade","slug":"/demos/plugins/fade","sidebar_position":1,"description":"\uD328\uB110 \uC804\uD658 \uC2DC \uD398\uC774\uB4DC \uC778/\uC544\uC6C3 \uD6A8\uACFC\uB97C \uC801\uC6A9\uD558\uB294 \uD50C\uB7EC\uADF8\uC778","keywords":["flicking","plugin","fade","transition","opacity"]},"sidebar":"demosSidebar","previous":{"title":"Observe Panel Resize","permalink":"/flicking-docs-test/docs/demos/advanced/observe-panel-resize"},"next":{"title":"AutoPlay","permalink":"/flicking-docs-test/docs/demos/plugins/autoplay"}}'),t=s(65723),n=s(54187),c=s(27449),a=s(72722);s(22155);let d={"@egjs/flicking-plugins":"^4.6.0"},r=`
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
import { Fade } from "@egjs/flicking-plugins";
import "@egjs/flicking/dist/flicking.css";

const plugins = [new Fade()];

export default function App() {
  return (
    <Flicking circular={true} plugins={plugins} preventDefaultOnDrag={true}>
      <div className="flicking-panel">
        <img className="panel-image" src="https://picsum.photos/seed/fade1/600/300" />
      </div>
      <div className="flicking-panel">
        <img className="panel-image" src="https://picsum.photos/seed/fade2/600/300" />
      </div>
      <div className="flicking-panel">
        <img className="panel-image" src="https://picsum.photos/seed/fade3/600/300" />
      </div>
    </Flicking>
  );
}`,i=`<template>
  <Flicking :options="{ circular: true, preventDefaultOnDrag: true }" :plugins="plugins">
    <div class="flicking-panel">
      <img class="panel-image" src="https://picsum.photos/seed/fade1/600/300" />
    </div>
    <div class="flicking-panel">
      <img class="panel-image" src="https://picsum.photos/seed/fade2/600/300" />
    </div>
    <div class="flicking-panel">
      <img class="panel-image" src="https://picsum.photos/seed/fade3/600/300" />
    </div>
  </Flicking>
</template>

<script setup>
import Flicking from "@egjs/vue3-flicking";
import { Fade } from "@egjs/flicking-plugins";
import "@egjs/flicking/dist/flicking.css";

const plugins = [new Fade()];
</script>`,s=`import Flicking from "@egjs/flicking";
import { Fade } from "@egjs/flicking-plugins";
import "@egjs/flicking/dist/flicking.css";

const flicking = new Flicking("#flick", {
  circular: true,
  preventDefaultOnDrag: true
});

flicking.addPlugins(new Fade());`,l=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <div id="app">
    <div id="flick" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel">
          <img class="panel-image" src="https://picsum.photos/seed/fade1/600/300" />
        </div>
        <div class="flicking-panel">
          <img class="panel-image" src="https://picsum.photos/seed/fade2/600/300" />
        </div>
        <div class="flicking-panel">
          <img class="panel-image" src="https://picsum.photos/seed/fade3/600/300" />
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;return(0,t.jsx)(a.A,{options:{circular:!0},panels:[],react:(0,t.jsx)(c.A,{template:"react",code:e,css:r,dependencies:d}),vue3:(0,t.jsx)(c.A,{template:"vue3",code:i,css:r,dependencies:d}),js:(0,t.jsx)(c.A,{template:"vanilla",code:s,html:l,css:r,dependencies:d})})},p={title:"Fade",id:"fade",slug:"/demos/plugins/fade",sidebar_position:1,description:"\uD328\uB110 \uC804\uD658 \uC2DC \uD398\uC774\uB4DC \uC778/\uC544\uC6C3 \uD6A8\uACFC\uB97C \uC801\uC6A9\uD558\uB294 \uD50C\uB7EC\uADF8\uC778",keywords:["flicking","plugin","fade","transition","opacity"]},g="Fade",m={},h=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"\uB3D9\uC791 \uC6D0\uB9AC",id:"\uB3D9\uC791-\uC6D0\uB9AC",level:3},{value:"\uC0AC\uC6A9\uBC95",id:"\uC0AC\uC6A9\uBC95",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function u(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"fade",children:"Fade"})}),"\n",(0,t.jsx)(i.p,{children:"\uD328\uB110 \uC804\uD658 \uC2DC \uD22C\uBA85\uB3C4\uB97C \uC870\uC808\uD558\uC5EC \uD398\uC774\uB4DC \uC778/\uC544\uC6C3 \uD6A8\uACFC\uB97C \uC801\uC6A9\uD569\uB2C8\uB2E4."}),"\n",(0,t.jsx)(o,{}),"\n",(0,t.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,t.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\uC635\uC158"}),(0,t.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,t.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,t.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"selector"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"string"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:'""'})}),(0,t.jsx)(i.td,{children:"\uD6A8\uACFC\uB97C \uC801\uC6A9\uD560 \uC694\uC18C\uC758 CSS \uC120\uD0DD\uC790. \uBE48 \uBB38\uC790\uC5F4\uC774\uBA74 \uD328\uB110 \uC790\uCCB4\uC5D0 \uC801\uC6A9"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"scale"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"number"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"1"})}),(0,t.jsx)(i.td,{children:"\uD6A8\uACFC \uAC15\uB3C4 \uBC30\uC728"})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,t.jsx)(i.h3,{id:"\uB3D9\uC791-\uC6D0\uB9AC",children:"\uB3D9\uC791 \uC6D0\uB9AC"}),"\n",(0,t.jsxs)(i.p,{children:["Fade \uD50C\uB7EC\uADF8\uC778\uC740 \uAC01 \uD328\uB110\uC758 \uAC00\uC2DC \uBE44\uC728(visible ratio)\uC5D0 \uB530\uB77C ",(0,t.jsx)(i.code,{children:"opacity"}),"\uB97C \uC790\uB3D9\uC73C\uB85C \uC870\uC808\uD569\uB2C8\uB2E4. \uD604\uC7AC \uBCF4\uC774\uB294 \uD328\uB110\uC740 \uBD88\uD22C\uBA85\uD558\uAC8C, \uBC97\uC5B4\uB098\uB294 \uD328\uB110\uC740 \uD22C\uBA85\uD558\uAC8C \uCC98\uB9AC\uB429\uB2C8\uB2E4."]}),"\n",(0,t.jsx)(i.h3,{id:"\uC0AC\uC6A9\uBC95",children:"\uC0AC\uC6A9\uBC95"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:'import { Fade } from "@egjs/flicking-plugins";\n\n// \uAE30\uBCF8 \uC0AC\uC6A9\nflicking.addPlugins(new Fade());\n\n// \uD2B9\uC815 \uC694\uC18C\uC5D0\uB9CC \uC801\uC6A9\nflicking.addPlugins(new Fade("img"));\n\n// \uD6A8\uACFC \uAC15\uB3C4 \uC870\uC808\nflicking.addPlugins(new Fade("", 2));\n'})}),"\n",(0,t.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,t.jsx)(i.admonition,{title:"\uC8FC\uC758",type:"warning",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"circular: true"}),"\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD558\uBA74 \uB04A\uAE40 \uC5C6\uB294 \uD398\uC774\uB4DC \uD6A8\uACFC\uB97C \uAD6C\uD604\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n",(0,t.jsx)(i.li,{children:"\uD328\uB110 \uBC30\uACBD\uC774 \uD22C\uBA85\uD55C \uACBD\uC6B0 \uB4A4\uCABD \uD328\uB110\uC774 \uBE44\uCE60 \uC218 \uC788\uC73C\uBBC0\uB85C, \uBD88\uD22C\uBA85\uD55C \uBC30\uACBD\uC0C9\uC774\uB098 \uC774\uBBF8\uC9C0\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4."}),"\n"]})}),"\n",(0,t.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,t.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"./parallax",children:"Parallax"}),": \uC2DC\uCC28 \uC2A4\uD06C\uB864 \uD6A8\uACFC"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"./autoplay",children:"AutoPlay"}),": \uC790\uB3D9 \uC7AC\uC0DD\uACFC \uD568\uAED8 \uC0AC\uC6A9"]}),"\n"]})]})}function j(e={}){let{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},27449(e,i,s){s.d(i,{A:()=>o});var l=s(65723),t=s(19612);s(22155);let n="^4.11.4",c={react:{"@egjs/react-flicking":n,"@egjs/flicking":n},vue3:{"@egjs/vue3-flicking":n,"@egjs/flicking":n},vanilla:{"@egjs/flicking":n}},a=`<!DOCTYPE html>
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
  </StrictMode>);`,r=`
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
`;function o({code:e,html:i,template:s="react",dependencies:n={},files:o={},css:p=""}){var g;let m,h,u;return(0,l.jsx)(t.OZ,{template:"vue3"===s?"vue":"vanilla"===s?"vanilla":"react",files:(u={"/styles.css":{code:h=p?`${r}
${p}`:r},...o},"react"===s?{"/App.tsx":{code:e},"/index.js":{code:d,hidden:!0},...u}:"vue3"===s?{"/src/App.vue":{code:e},...u}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),s=[],l=[],t=!1;for(let e of i)t?l.push(e):e.trimStart().startsWith("import ")||""===e.trim()?s.push(e.replace('"../styles.css"','"./styles.css"')):(t=!0,l.push(e));for(;l.length>0&&""===l[l.length-1].trim();)l.pop();return[...s,"","const _run = () => {",...l.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:h},"/index.html":{code:(m="<style>.flicking-viewport{opacity:0}</style>",(g=i||a).includes("</head>")?g.replace("</head>",`${m}
</head>`):m+g)},...o}),customSetup:{dependencies:{...c[s],...n}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===s?["/App.tsx","/styles.css"]:"vue3"===s?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===s?"/App.tsx":"vue3"===s?"/src/App.vue":"/src/index.js"}})}},72722(e,i,s){s.d(i,{A:()=>j});var l=s(65723),t=s(34622),n=s(7210),c=s(78863);s(22155);let a=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,d=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",r=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${a(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(i=>`${i}: ${a(e[i],"'")}`).join(", ")}`,p=(e,{prefix:i,includeFlicking:s=!0}={})=>{let l=s?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&l.push(...e),`${l.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},g=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,m=({options:e,panels:i,events:s={},methods:n={},plugins:c=[],siblings:o=[],imports:g=[],viewportClass:m=""})=>{let h=e=>`${Object.keys(e).map(i=>`${i}: ${a(e[i])}`).join(",\n  ")}`,u=Object.keys(n).map(e=>`const ${e} = ${n[e]};
`).join(""),j=e?`const flicking = new Flicking("#flick", {
  ${h(e)}
});

`:'const flicking = new Flicking("#flick")',f=c.length>0?`flicking.addPlugins(${c.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?h(e[1]):e[1]??""}
}`:""})`)});`:"",$=[...c.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],x=Object.keys(s).map(e=>{let i=s[e];return`flicking.on("${e}", ${i})
`}).join(""),k=i.filter(e=>e.isSlot);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${m&&` ${m}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${k.length?`
  ${k.map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,l.jsx)(t.A,{className:"language-js",title:"js",children:`${p($)}

${u}${j}${f}${x}`.trim()})]})},h=({options:e,panels:i,events:s={},methods:n={},plugins:c,siblings:a,imports:o=[],viewportClass:m=""})=>{let h=c?`
  private _plugins = [${g(c)}];
`:"",u=i.filter(e=>e.isSlot),j=[["{ Component }","react"],[u.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],f=Object.keys(n).map(e=>`
const ${e} = ${n[e]};`).join("");f&&(f+="\n"),c&&j.push([`{ ${c.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),j.push(...o);let $=u.length?`
      <ViewportSlot>
        ${u.map(e=>`<${e.tag}${d(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",x=Object.keys(s).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${s[e]}}`).join("");return(0,l.jsx)(t.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(j,{includeFlicking:!1})}
${f}
export default class DemoComponent extends Component {${h}
  public render() {
    return ${a?"<>\n    ":""}<Flicking${m&&` className="${m}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${c?" plugins={this._plugins}":""}${x}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${d(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${$}
    </Flicking>${a?`
    ${a.map(e=>`<${e.tag}${d(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},u=({options:e,panels:i,events:s={},methods:n={},plugins:c,siblings:a=[],imports:m=[],viewportClass:h=""})=>{let u=o(e),j=i.filter(e=>e.isSlot),f=c?`,
  data() {
    return {
      plugins: [${g(c)}]
    }
  }`:"",$=j.length?`
  <template #viewport>
    ${j.map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",x=[...(c??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...m],k=Object.keys(n),v=k.length>0?`,
  methods: {
    ${k.map(e=>`${e}: ${n[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",y=Object.keys(s).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${s[e]}"`).join("");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.A,{className:"language-html",title:"template",children:`<Flicking${h&&` class="${h}"`}${e?` :options="{ ${u} }"`:""}${c?' :plugins="plugins"':""}${y}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n  ")}${$}
</Flicking>${a?`
${a.map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,l.jsx)(t.A,{className:"language-js",title:"script",children:`${p(x,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${f}${v}
}`})]})},j=({js:e,react:i,vue3:s,style:a,...d})=>(0,l.jsxs)("div",{children:[(0,l.jsxs)(c.A,{groupId:"cfc",defaultValue:"js",children:[(0,l.jsx)(n.A,{value:"react",label:"React",children:i||(0,l.jsx)(h,{...d})}),(0,l.jsx)(n.A,{value:"vue3",label:"Vue@3",children:s||(0,l.jsx)(u,{...d})}),(0,l.jsx)(n.A,{value:"js",label:"JavaScript",children:e||(0,l.jsx)(m,{...d})})]}),a&&(0,l.jsx)(t.A,{className:"language-css",title:"style",children:`${a}`})]})}}]);