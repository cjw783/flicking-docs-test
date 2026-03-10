"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["2382"],{4843(e,s,t){t.r(s),t.d(s,{metadata:()=>i,default:()=>k,frontMatter:()=>d,contentTitle:()=>p,toc:()=>g,assets:()=>h});var i=JSON.parse('{"id":"demos/reactive/parallax","title":"Parallax","description":"Create a parallax scrolling effect using the Reactive API\'s indexProgress","source":"@site/docs/demos/reactive/parallax.mdx","sourceDirName":"demos/reactive","slug":"/demos/reactive/parallax","permalink":"/flicking-docs-test/docs/demos/reactive/parallax","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/reactive/parallax.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Parallax","id":"parallax","slug":"/demos/reactive/parallax","sidebar_position":4,"description":"Create a parallax scrolling effect using the Reactive API\'s indexProgress","keywords":["flicking","carousel","parallax","reactive","indexProgress","transform"]},"sidebar":"demosSidebar","previous":{"title":"Prev / Next","permalink":"/flicking-docs-test/docs/demos/reactive/prev-next"},"next":{"title":"Coverflow","permalink":"/flicking-docs-test/docs/demos/reactive/coverflow"}}'),n=t(65723),l=t(54187),a=t(27449),r=t(72722);t(22155);let c=`
.skeleton-panel {
  width: 280px;
  height: 180px;
  margin-right: 10px;
  border-radius: 12px;
  background: #3498db;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  gap: 8px;
  overflow: hidden;
}

.skeleton-bar {
  height: 12px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 6px;
}

.skeleton-bar-size1 { width: 40%; }
.skeleton-bar-size2 { width: 60%; }
.skeleton-bar-size3 { width: 80%; }
.skeleton-bar-size4 { width: 100%; }
`,o=()=>{let e=`import React from "react";
import Flicking, { useFlickingReactiveAPI } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "./styles.css";

const OFFSETS = [180, 160, 140, 120, 100];
const SIZES = ["size4", "size1", "size3", "size2", "size3"];

export default function App() {
  const flickingRef = React.useRef(null);
  const { indexProgress } = useFlickingReactiveAPI(flickingRef);

  return (
    <Flicking ref={flickingRef}>
      {[0, 1, 2, 3, 4].map((panelIndex) => {
        const childProgress = panelIndex - indexProgress;
        const opacity = Math.min(Math.max(1 - Math.abs(childProgress), 0), 1);

        return (
          <div key={panelIndex} className="skeleton-panel">
            {SIZES.map((size, i) => (
              <span
                key={i}
                className={\`skeleton-bar skeleton-bar-\${size}\`}
                style={{
                  transform: \`translateX(\${childProgress * OFFSETS[i]}px)\`,
                  opacity
                }}
              />
            ))}
          </div>
        );
      })}
    </Flicking>
  );
}`,s=(0,n.jsx)(a.A,{template:"react",code:e,css:c}),t=`<script setup>
import { ref } from "vue";
import Flicking, { useFlickingReactiveAPI } from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";

const OFFSETS = [180, 160, 140, 120, 100];
const SIZES = ["size4", "size1", "size3", "size2", "size3"];

const flickingRef = ref(null);
const { indexProgress } = useFlickingReactiveAPI(flickingRef);

const getBarStyle = (panelIndex, barIndex) => {
  const childProgress = panelIndex - indexProgress.value;
  const opacity = Math.min(Math.max(1 - Math.abs(childProgress), 0), 1);
  return {
    transform: \`translateX(\${childProgress * OFFSETS[barIndex]}px)\`,
    opacity
  };
};
</script>

<template>
  <Flicking ref="flickingRef">
    <div v-for="panelIndex in 5" :key="panelIndex - 1" class="skeleton-panel">
      <span
        v-for="(size, i) in SIZES"
        :key="i"
        :class="'skeleton-bar skeleton-bar-' + size"
        :style="getBarStyle(panelIndex - 1, i)"
      />
    </div>
  </Flicking>
</template>

<style>
.skeleton-panel {
  width: 280px;
  height: 180px;
  margin-right: 10px;
  border-radius: 12px;
  background: #3498db;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  gap: 8px;
  overflow: hidden;
}

.skeleton-bar {
  height: 12px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 6px;
}

.skeleton-bar-size1 { width: 40%; }
.skeleton-bar-size2 { width: 60%; }
.skeleton-bar-size3 { width: 80%; }
.skeleton-bar-size4 { width: 100%; }
</style>`,i=(0,n.jsx)(a.A,{template:"vue3",code:t,css:c}),l=`import Flicking, { connectFlickingReactiveAPI } from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

const OFFSETS = [180, 160, 140, 120, 100];

const flicking = new Flicking("#flick");
const reactiveAPI = connectFlickingReactiveAPI(flicking);

const panels = document.querySelectorAll(".skeleton-panel");

const update = (value) => {
  panels.forEach((panel, index) => {
    const childProgress = index - value;
    const opacity = Math.min(Math.max(1 - Math.abs(childProgress), 0), 1);

    const bars = panel.querySelectorAll(".skeleton-bar");
    bars.forEach((bar, i) => {
      bar.style.transform = \`translateX(\${childProgress * OFFSETS[i]}px)\`;
      bar.style.opacity = opacity;
    });
  });
};

// Apply initial state and subscribe to changes
update(reactiveAPI.indexProgress);
reactiveAPI.subscribe("indexProgress", update);`,o=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <div id="flick" class="flicking-viewport">
    <div class="flicking-camera">
      <div class="skeleton-panel">
        <span class="skeleton-bar skeleton-bar-size4"></span>
        <span class="skeleton-bar skeleton-bar-size1"></span>
        <span class="skeleton-bar skeleton-bar-size3"></span>
        <span class="skeleton-bar skeleton-bar-size2"></span>
        <span class="skeleton-bar skeleton-bar-size3"></span>
      </div>
      <div class="skeleton-panel">
        <span class="skeleton-bar skeleton-bar-size4"></span>
        <span class="skeleton-bar skeleton-bar-size1"></span>
        <span class="skeleton-bar skeleton-bar-size3"></span>
        <span class="skeleton-bar skeleton-bar-size2"></span>
        <span class="skeleton-bar skeleton-bar-size3"></span>
      </div>
      <div class="skeleton-panel">
        <span class="skeleton-bar skeleton-bar-size4"></span>
        <span class="skeleton-bar skeleton-bar-size1"></span>
        <span class="skeleton-bar skeleton-bar-size3"></span>
        <span class="skeleton-bar skeleton-bar-size2"></span>
        <span class="skeleton-bar skeleton-bar-size3"></span>
      </div>
      <div class="skeleton-panel">
        <span class="skeleton-bar skeleton-bar-size4"></span>
        <span class="skeleton-bar skeleton-bar-size1"></span>
        <span class="skeleton-bar skeleton-bar-size3"></span>
        <span class="skeleton-bar skeleton-bar-size2"></span>
        <span class="skeleton-bar skeleton-bar-size3"></span>
      </div>
      <div class="skeleton-panel">
        <span class="skeleton-bar skeleton-bar-size4"></span>
        <span class="skeleton-bar skeleton-bar-size1"></span>
        <span class="skeleton-bar skeleton-bar-size3"></span>
        <span class="skeleton-bar skeleton-bar-size2"></span>
        <span class="skeleton-bar skeleton-bar-size3"></span>
      </div>
    </div>
  </div>
</body>
</html>`,d=(0,n.jsx)(a.A,{template:"vanilla",code:l,html:o,css:c});return(0,n.jsx)(r.A,{options:{},panels:[],react:s,vue3:i,js:d})},d={title:"Parallax",id:"parallax",slug:"/demos/reactive/parallax",sidebar_position:4,description:"Create a parallax scrolling effect using the Reactive API's indexProgress",keywords:["flicking","carousel","parallax","reactive","indexProgress","transform"]},p="Parallax",h={},g=[{value:"Summary",id:"summary",level:2},{value:"Key API",id:"key-api",level:3},{value:"Effect Mapping",id:"effect-mapping",level:3},{value:"Details",id:"details",level:2},{value:"How It Works",id:"how-it-works",level:3},{value:"Related Options",id:"related-options",level:3},{value:"Use Cases",id:"use-cases",level:3},{value:"Related Links",id:"related-links",level:2},{value:"Related API",id:"related-api",level:3},{value:"Related Demos",id:"related-demos",level:3}];function x(e){let s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"parallax",children:"Parallax"})}),"\n",(0,n.jsxs)(s.p,{children:["Use ",(0,n.jsx)(s.code,{children:"indexProgress"})," from the Reactive API to create a parallax effect where inner elements move at different speeds based on the panel's distance from the camera center."]}),"\n",(0,n.jsx)(o,{}),"\n",(0,n.jsx)(s.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(s.h3,{id:"key-api",children:"Key API"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Property"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../api/interfaces/FlickingReactiveState#indexprogress",children:(0,n.jsx)(s.code,{children:"indexProgress"})})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"number"})}),(0,n.jsx)(s.td,{children:"Camera position as a fractional panel index"})]})})]}),"\n",(0,n.jsx)(s.h3,{id:"effect-mapping",children:"Effect Mapping"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Panel Position"}),(0,n.jsx)(s.th,{children:"translateX"}),(0,n.jsx)(s.th,{children:"Opacity"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Current (childProgress = 0)"}),(0,n.jsx)(s.td,{children:"0px"}),(0,n.jsx)(s.td,{children:"1.0"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Adjacent (childProgress = \xb11)"}),(0,n.jsx)(s.td,{children:"\xb1offset"}),(0,n.jsx)(s.td,{children:"0.0"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"details",children:"Details"}),"\n",(0,n.jsx)(s.h3,{id:"how-it-works",children:"How It Works"}),"\n",(0,n.jsxs)(s.p,{children:["Each panel contains skeleton bar elements. The ",(0,n.jsx)(s.code,{children:"childProgress"})," for each panel is calculated as ",(0,n.jsx)(s.code,{children:"panelIndex - indexProgress"}),". This value drives two visual effects:"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Horizontal offset"}),": Each bar translates by ",(0,n.jsx)(s.code,{children:"childProgress * offset"}),", where different bars have different offset values (100-180px), creating a layered depth effect."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Opacity"}),": Fades from 1 (current panel) to 0 (adjacent panels) based on ",(0,n.jsx)(s.code,{children:"|childProgress|"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:'The varying offsets per bar create the signature parallax look: elements closer to the "camera" appear to move faster than those further away.'}),"\n",(0,n.jsx)(s.h3,{id:"related-options",children:"Related Options"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:'moveType: "freeScroll"'})}),": Produces smoother continuous parallax as the user scrolls freely."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsxs)(s.strong,{children:["Default ",(0,n.jsx)(s.code,{children:"moveType"})," (snap)"]}),": Parallax still works but snaps between discrete panel positions."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"use-cases",children:"Use Cases"}),"\n",(0,n.jsx)(s.admonition,{title:"When to use",type:"info",children:(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Card-based content with layered elements"}),"\n",(0,n.jsx)(s.li,{children:"Storytelling / editorial carousels"}),"\n",(0,n.jsx)(s.li,{children:"Product showcase with depth effect"}),"\n"]})}),"\n",(0,n.jsx)(s.h2,{id:"related-links",children:"Related Links"}),"\n",(0,n.jsx)(s.h3,{id:"related-api",children:"Related API"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"../../api/interfaces/FlickingReactiveState#indexprogress",children:(0,n.jsx)(s.code,{children:"indexProgress"})}),": Fractional panel index progress"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"related-demos",children:"Related Demos"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"./coverflow",children:"Coverflow"}),": 3D rotation effect using indexProgress"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"./progress-bar",children:"Progress Bar"}),": Scroll progress indicator"]}),"\n"]})]})}function k(e={}){let{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},27449(e,s,t){t.d(s,{A:()=>d});var i=t(65723),n=t(19612);t(22155);let l="^4.11.4",a={react:{"@egjs/react-flicking":l,"@egjs/flicking":l},vue3:{"@egjs/vue3-flicking":l,"@egjs/flicking":l},vanilla:{"@egjs/flicking":l}},r=`<!DOCTYPE html>
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
</html>`,c=`import { StrictMode } from "react";
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
`;function d({code:e,html:s,template:t="react",dependencies:l={},files:d={},css:p=""}){var h;let g,x,k;return(0,i.jsx)(n.OZ,{template:"vue3"===t?"vue":"vanilla"===t?"vanilla":"react",files:(k={"/styles.css":{code:x=p?`${o}
${p}`:o},...d},"react"===t?{"/App.tsx":{code:e},"/index.js":{code:c,hidden:!0},...k}:"vue3"===t?{"/src/App.vue":{code:e},...k}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let s=e.split("\n"),t=[],i=[],n=!1;for(let e of s)n?i.push(e):e.trimStart().startsWith("import ")||""===e.trim()?t.push(e.replace('"../styles.css"','"./styles.css"')):(n=!0,i.push(e));for(;i.length>0&&""===i[i.length-1].trim();)i.pop();return[...t,"","const _run = () => {",...i.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:x},"/index.html":{code:(g="<style>.flicking-viewport{opacity:0}</style>",(h=s||r).includes("</head>")?h.replace("</head>",`${g}
</head>`):g+h)},...d}),customSetup:{dependencies:{...a[t],...l}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===t?["/App.tsx","/styles.css"]:"vue3"===t?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===t?"/App.tsx":"vue3"===t?"/src/App.vue":"/src/index.js"}})}},72722(e,s,t){t.d(s,{A:()=>f});var i=t(65723),n=t(34622),l=t(7210),a=t(78863);t(22155);let r=(e,s='"')=>"string"==typeof e?`${s}${e}${s}`:e,c=(e,s="class")=>e.class?` ${s}="${e.class}"`:"",o=(e,s=!1)=>e.style?s?` style={{ ${Object.keys(e.style).map(s=>`${s}: ${r(e.style[s])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(s=>`${s}: ${e.style[s]};`).join(" ")}"`:"",d=e=>`${Object.keys(e).map(s=>`${s}: ${r(e[s],"'")}`).join(", ")}`,p=(e,{prefix:s,includeFlicking:t=!0}={})=>{let i=t?[["Flicking",`@egjs/${s?`${s}-`:""}flicking`]]:[];return e&&i.push(...e),`${i.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},h=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${d(e[1])} }`:e[1]??""}`).join(", ")})`,g=({options:e,panels:s,events:t={},methods:l={},plugins:a=[],siblings:d=[],imports:h=[],viewportClass:g=""})=>{let x=e=>`${Object.keys(e).map(s=>`${s}: ${r(e[s])}`).join(",\n  ")}`,k=Object.keys(l).map(e=>`const ${e} = ${l[e]};
`).join(""),f=e?`const flicking = new Flicking("#flick", {
  ${x(e)}
});

`:'const flicking = new Flicking("#flick")',m=a.length>0?`flicking.addPlugins(${a.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?x(e[1]):e[1]??""}
}`:""})`)});`:"",u=[...a.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...h],j=Object.keys(t).map(e=>{let s=t[e];return`flicking.on("${e}", ${s})
`}).join(""),b=s.filter(e=>e.isSlot);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${g&&` ${g}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${s.filter(e=>!e.isSlot).map(e=>`<${e.tag}${c(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${b.length?`
  ${b.map(e=>`<${e.tag}${c(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${d?"\n"+d.map(e=>`<${e.tag}${c(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,i.jsx)(n.A,{className:"language-js",title:"js",children:`${p(u)}

${k}${f}${m}${j}`.trim()})]})},x=({options:e,panels:s,events:t={},methods:l={},plugins:a,siblings:r,imports:d=[],viewportClass:g=""})=>{let x=a?`
  private _plugins = [${h(a)}];
`:"",k=s.filter(e=>e.isSlot),f=[["{ Component }","react"],[k.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],m=Object.keys(l).map(e=>`
const ${e} = ${l[e]};`).join("");m&&(m+="\n"),a&&f.push([`{ ${a.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),f.push(...d);let u=k.length?`
      <ViewportSlot>
        ${k.map(e=>`<${e.tag}${c(e,"className")}${o(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",j=Object.keys(t).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${t[e]}}`).join("");return(0,i.jsx)(n.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(f,{includeFlicking:!1})}
${m}
export default class DemoComponent extends Component {${x}
  public render() {
    return ${r?"<>\n    ":""}<Flicking${g&&` className="${g}"`}${e?` ${Object.keys(e).map(s=>`${s}=${"string"==typeof e[s]?`"${e[s]}"`:`{${e[s]}}`}`).join(" ")}`:""}${a?" plugins={this._plugins}":""}${j}>
      ${s.filter(e=>!e.isSlot).map(e=>`<${e.tag}${c(e,"className")}${o(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${u}
    </Flicking>${r?`
    ${r.map(e=>`<${e.tag}${c(e,"className")}${o(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},k=({options:e,panels:s,events:t={},methods:l={},plugins:a,siblings:r=[],imports:g=[],viewportClass:x=""})=>{let k=d(e),f=s.filter(e=>e.isSlot),m=a?`,
  data() {
    return {
      plugins: [${h(a)}]
    }
  }`:"",u=f.length?`
  <template #viewport>
    ${f.map(e=>`<${e.tag}${c(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",j=[...(a??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],b=Object.keys(l),$=b.length>0?`,
  methods: {
    ${b.map(e=>`${e}: ${l[e].split("\n").map((e,s)=>s>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",v=Object.keys(t).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${t[e]}"`).join("");return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.A,{className:"language-html",title:"template",children:`<Flicking${x&&` class="${x}"`}${e?` :options="{ ${k} }"`:""}${a?' :plugins="plugins"':""}${v}>
  ${s.filter(e=>!e.isSlot).map(e=>`<${e.tag}${c(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n  ")}${u}
</Flicking>${r?`
${r.map(e=>`<${e.tag}${c(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,i.jsx)(n.A,{className:"language-js",title:"script",children:`${p(j,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${m}${$}
}`})]})},f=({js:e,react:s,vue3:t,style:r,...c})=>(0,i.jsxs)("div",{children:[(0,i.jsxs)(a.A,{groupId:"cfc",defaultValue:"js",children:[(0,i.jsx)(l.A,{value:"react",label:"React",children:s||(0,i.jsx)(x,{...c})}),(0,i.jsx)(l.A,{value:"vue3",label:"Vue@3",children:t||(0,i.jsx)(k,{...c})}),(0,i.jsx)(l.A,{value:"js",label:"JavaScript",children:e||(0,i.jsx)(g,{...c})})]}),r&&(0,i.jsx)(n.A,{className:"language-css",title:"style",children:`${r}`})]})}}]);