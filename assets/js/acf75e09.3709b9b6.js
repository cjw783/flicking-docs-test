"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["9530"],{41821(e,i,n){n.r(i),n.d(i,{metadata:()=>l,default:()=>v,frontMatter:()=>r,contentTitle:()=>h,toc:()=>g,assets:()=>p});var l=JSON.parse('{"id":"demos/advanced/animation-threshold","title":"Animation Threshold","description":"animationThreshold \uC635\uC158\uC73C\uB85C \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uC2E4\uD589\uD560 \uCD5C\uC18C \uC774\uB3D9 \uAC70\uB9AC\uB97C \uC124\uC815\uD569\uB2C8\uB2E4","source":"@site/docs/demos/advanced/animation-threshold.mdx","sourceDirName":"demos/advanced","slug":"/demos/advanced/animation-threshold","permalink":"/flicking-docs-test/docs/demos/advanced/animation-threshold","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/advanced/animation-threshold.mdx","tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"title":"Animation Threshold","id":"animation-threshold","slug":"/demos/advanced/animation-threshold","sidebar_position":16,"description":"animationThreshold \uC635\uC158\uC73C\uB85C \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uC2E4\uD589\uD560 \uCD5C\uC18C \uC774\uB3D9 \uAC70\uB9AC\uB97C \uC124\uC815\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","animationThreshold","animation","threshold","\uC560\uB2C8\uBA54\uC774\uC158","\uC784\uACC4\uAC12"]},"sidebar":"demosSidebar","previous":{"title":"Cross Flicking","permalink":"/flicking-docs-test/docs/demos/advanced/cross-flicking"},"next":{"title":"CSS Order","permalink":"/flicking-docs-test/docs/demos/advanced/use-css-order"}}'),t=n(65723),s=n(54187),a=n(27449),c=n(72722);n(22155);let o=`
.flicking-panel {
  width: 50%;
  height: 120px;
}
.panel-1 { background: #3e8ed0; }
.panel-2 { background: #00d1b2; }
.panel-3 { background: #f14668; }
.panel-4 { background: #ffe08a; color: #333; }
.panel-5 { background: #48c78e; }

.demo-container {
  margin-bottom: 24px;
}
.demo-label {
  font-weight: bold;
  margin-bottom: 8px;
  color: #666;
}
.controls {
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.controls button {
  padding: 6px 12px;
  cursor: pointer;
}
.event-log {
  margin-top: 6px;
  font-size: 13px;
  color: #555;
  min-height: 20px;
}
`,d=()=>{let e=`import { useRef, useState } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "./styles.css";

function FlickingDemo({ label, animationThreshold, duration }) {
  const ref = useRef(null);
  const [log, setLog] = useState("\u{2014}");

  const addLog = (msg) => setLog(msg);

  return (
    <div className="demo-container">
      <div className="demo-label">{label}</div>
      <Flicking
        ref={ref}
        duration={duration}
        animationThreshold={animationThreshold}
        align="center"
        onWillChange={() => addLog("\u{25B6} \u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158} \u{C2DC}\u{C791}")}
        onMoveEnd={() => addLog("\u{2713} \u{C774}\u{B3D9} \u{C644}\u{B8CC}")}
      >
        <div className="flicking-panel panel-1">1</div>
        <div className="flicking-panel panel-2">2</div>
        <div className="flicking-panel panel-3">3</div>
        <div className="flicking-panel panel-4">4</div>
        <div className="flicking-panel panel-5">5</div>
      </Flicking>
      <div className="controls">
        <button onClick={() => ref.current?.prev().catch(() => {})}>Prev</button>
        <button onClick={() => ref.current?.next().catch(() => {})}>Next</button>
        <span className="event-log">{log}</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <FlickingDemo
        label="animationThreshold: 0.5 (\u{AE30}\u{BCF8}\u{AC12}) \u{2014} \u{C815}\u{C0C1} \u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158}"
        animationThreshold={0.5}
        duration={1000}
      />
      <FlickingDemo
        label="animationThreshold: 300 \u{2014} 300px \u{BBF8}\u{B9CC} \u{C774}\u{B3D9}\u{C740} \u{C989}\u{C2DC} \u{C774}\u{B3D9} (\u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158} \u{C5C6}\u{C74C})"
        animationThreshold={300}
        duration={1000}
      />
    </div>
  );
}`,i=(0,t.jsx)(a.A,{template:"react",code:e,css:o}),n=`<template>
  <div>
    <!-- animationThreshold: 0.5 (\u{AE30}\u{BCF8}\u{AC12}) -->
    <div class="demo-container">
      <div class="demo-label">animationThreshold: 0.5 (\u{AE30}\u{BCF8}\u{AC12}) \u{2014} \u{C815}\u{C0C1} \u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158}</div>
      <Flicking
        ref="flick1"
        :options="{ duration: 1000, animationThreshold: 0.5, align: 'center' }"
        @willChange="log1 = '\u{25B6} \u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158} \u{C2DC}\u{C791}'"
        @moveEnd="log1 = '\u{2713} \u{C774}\u{B3D9} \u{C644}\u{B8CC}'"
      >
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
      <div class="controls">
        <button @click="$refs.flick1.prev().catch(() => {})">Prev</button>
        <button @click="$refs.flick1.next().catch(() => {})">Next</button>
        <span class="event-log">{{ log1 || '\u{2014}' }}</span>
      </div>
    </div>

    <!-- animationThreshold: 300 -->
    <div class="demo-container">
      <div class="demo-label">animationThreshold: 300 \u{2014} 300px \u{BBF8}\u{B9CC} \u{C774}\u{B3D9}\u{C740} \u{C989}\u{C2DC} \u{C774}\u{B3D9} (\u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158} \u{C5C6}\u{C74C})</div>
      <Flicking
        ref="flick2"
        :options="{ duration: 1000, animationThreshold: 300, align: 'center' }"
        @willChange="log2 = '\u{25B6} \u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158} \u{C2DC}\u{C791}'"
        @moveEnd="log2 = '\u{2713} \u{C774}\u{B3D9} \u{C644}\u{B8CC}'"
      >
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
      <div class="controls">
        <button @click="$refs.flick2.prev().catch(() => {})">Prev</button>
        <button @click="$refs.flick2.next().catch(() => {})">Next</button>
        <span class="event-log">{{ log2 || '\u{2014}' }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";

export default {
  components: { Flicking },
  data() {
    return { log1: "", log2: "" };
  }
};
</script>

<style>
.flicking-panel {
  width: 50%;
  height: 120px;
  margin-right: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
}
.panel-1 { background: #3e8ed0; }
.panel-2 { background: #00d1b2; }
.panel-3 { background: #f14668; }
.panel-4 { background: #ffe08a; color: #333; }
.panel-5 { background: #48c78e; }
.demo-container { margin-bottom: 24px; }
.demo-label { font-weight: bold; margin-bottom: 8px; color: #666; }
.controls { margin-top: 8px; display: flex; align-items: center; gap: 8px; }
.controls button { padding: 6px 12px; cursor: pointer; }
.event-log { font-size: 13px; color: #555; }
</style>`,l=(0,t.jsx)(a.A,{template:"vue3",code:n,css:o}),s=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

// animationThreshold: 0.5 (\u{AE30}\u{BCF8}\u{AC12})
const flick1 = new Flicking("#flick-default", {
  duration: 1000,
  animationThreshold: 0.5,
  align: "center"
});

flick1.on("willChange", () => { document.getElementById("log1").textContent = "\u{25B6} \u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158} \u{C2DC}\u{C791}"; });
flick1.on("moveEnd", () => { document.getElementById("log1").textContent = "\u{2713} \u{C774}\u{B3D9} \u{C644}\u{B8CC}"; });

document.getElementById("prev1").addEventListener("click", () => flick1.prev().catch(() => {}));
document.getElementById("next1").addEventListener("click", () => flick1.next().catch(() => {}));

// animationThreshold: 300
const flick2 = new Flicking("#flick-threshold", {
  duration: 1000,
  animationThreshold: 300,
  align: "center"
});

flick2.on("willChange", () => { document.getElementById("log2").textContent = "\u{25B6} \u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158} \u{C2DC}\u{C791}"; });
flick2.on("moveEnd", () => { document.getElementById("log2").textContent = "\u{2713} \u{C774}\u{B3D9} \u{C644}\u{B8CC}"; });

document.getElementById("prev2").addEventListener("click", () => flick2.prev().catch(() => {}));
document.getElementById("next2").addEventListener("click", () => flick2.next().catch(() => {}));`,d=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <!-- animationThreshold: 0.5 (\u{AE30}\u{BCF8}\u{AC12}) -->
  <div class="demo-container">
    <div class="demo-label">animationThreshold: 0.5 (\u{AE30}\u{BCF8}\u{AC12}) \u{2014} \u{C815}\u{C0C1} \u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158}</div>
    <div id="flick-default" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </div>
    </div>
    <div class="controls">
      <button id="prev1">Prev</button>
      <button id="next1">Next</button>
      <span class="event-log" id="log1">\u{2014}</span>
    </div>
  </div>

  <!-- animationThreshold: 300 -->
  <div class="demo-container">
    <div class="demo-label">animationThreshold: 300 \u{2014} 300px \u{BBF8}\u{B9CC} \u{C774}\u{B3D9}\u{C740} \u{C989}\u{C2DC} \u{C774}\u{B3D9} (\u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158} \u{C5C6}\u{C74C})</div>
    <div id="flick-threshold" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </div>
    </div>
    <div class="controls">
      <button id="prev2">Prev</button>
      <button id="next2">Next</button>
      <span class="event-log" id="log2">\u{2014}</span>
    </div>
  </div>

</body>
</html>`,r=(0,t.jsx)(a.A,{template:"vanilla",code:s,html:d,css:o});return(0,t.jsx)(c.A,{options:{},panels:[],react:i,vue3:l,js:r})},r={title:"Animation Threshold",id:"animation-threshold",slug:"/demos/advanced/animation-threshold",sidebar_position:16,description:"animationThreshold \uC635\uC158\uC73C\uB85C \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uC2E4\uD589\uD560 \uCD5C\uC18C \uC774\uB3D9 \uAC70\uB9AC\uB97C \uC124\uC815\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","animationThreshold","animation","threshold","\uC560\uB2C8\uBA54\uC774\uC158","\uC784\uACC4\uAC12"]},h="Animation Threshold",p={},g=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uAC12\uBCC4 \uBE44\uAD50",id:"\uAC12\uBCC4-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"animationThreshold \uB3D9\uC791 \uC6D0\uB9AC",id:"animationthreshold-\uB3D9\uC791-\uC6D0\uB9AC",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function m(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"animation-threshold",children:"Animation Threshold"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#animationthreshold",children:(0,t.jsx)(i.code,{children:"animationThreshold"})})," \uC635\uC158\uC73C\uB85C \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uC2E4\uD589\uD560 \uCD5C\uC18C \uC774\uB3D9 \uAC70\uB9AC(px)\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. \uC774\uB3D9 \uAC70\uB9AC\uAC00 \uC774 \uAC12\uBCF4\uB2E4 \uC791\uC73C\uBA74 \uC560\uB2C8\uBA54\uC774\uC158 \uC5C6\uC774 \uC989\uC2DC \uC774\uB3D9\uD569\uB2C8\uB2E4."]}),"\n",(0,t.jsx)(i.p,{children:"Prev/Next \uBC84\uD2BC\uC73C\uB85C \uD328\uB110\uC744 \uC774\uB3D9\uD558\uBA74\uC11C \uC774\uBCA4\uD2B8 \uB85C\uADF8\uC640 \uC560\uB2C8\uBA54\uC774\uC158 \uB3D9\uC791\uC744 \uBE44\uAD50\uD574\uBCF4\uC138\uC694."}),"\n",(0,t.jsx)(d,{}),"\n",(0,t.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,t.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\uC635\uC158"}),(0,t.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,t.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,t.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#animationthreshold",children:(0,t.jsx)(i.code,{children:"animationThreshold"})})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"number"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"0.5"})}),(0,t.jsx)(i.td,{children:"\uC560\uB2C8\uBA54\uC774\uC158 \uC2E4\uD589 \uCD5C\uC18C \uC774\uB3D9 \uAC70\uB9AC (px)"})]})})]}),"\n",(0,t.jsx)(i.h3,{id:"\uAC12\uBCC4-\uBE44\uAD50",children:"\uAC12\uBCC4 \uBE44\uAD50"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\uAC12"}),(0,t.jsx)(i.th,{children:"\uB3D9\uC791"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"0"})}),(0,t.jsx)(i.td,{children:"\uD56D\uC0C1 \uC560\uB2C8\uBA54\uC774\uC158 \uC2E4\uD589 (0px \uC774\uB3D9\uB3C4 \uD3EC\uD568)"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"0.5"})}),(0,t.jsx)(i.td,{children:"0.5px \uBBF8\uB9CC \uC774\uB3D9\uC740 \uC989\uC2DC \uCC98\uB9AC (\uAE30\uBCF8\uAC12)"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{children:["\uD070 \uAC12 (\uC608: ",(0,t.jsx)(i.code,{children:"300"}),")"]}),(0,t.jsx)(i.td,{children:"\uC9C0\uC815 \uAC70\uB9AC \uBBF8\uB9CC \uC774\uB3D9\uC740 \uBAA8\uB450 \uC989\uC2DC \uCC98\uB9AC"})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,t.jsx)(i.h3,{id:"animationthreshold-\uB3D9\uC791-\uC6D0\uB9AC",children:"animationThreshold \uB3D9\uC791 \uC6D0\uB9AC"}),"\n",(0,t.jsxs)(i.p,{children:["Flicking\uC774 ",(0,t.jsx)(i.code,{children:"moveTo()"}),", ",(0,t.jsx)(i.code,{children:"next()"}),", ",(0,t.jsx)(i.code,{children:"prev()"})," \uB4F1\uC73C\uB85C \uC774\uB3D9\uD560 \uB54C, ",(0,t.jsxs)(i.strong,{children:["\uBAA9\uD45C \uC704\uCE58\uAE4C\uC9C0\uC758 \uAC70\uB9AC\uAC00 ",(0,t.jsx)(i.code,{children:"animationThreshold"}),"\uBCF4\uB2E4 \uC791\uC73C\uBA74 ",(0,t.jsx)(i.code,{children:"duration"}),"\uC744 0\uC73C\uB85C \uC124\uC815\uD574 \uC989\uC2DC \uC774\uB3D9"]}),"\uD569\uB2C8\uB2E4."]}),"\n",(0,t.jsxs)(i.p,{children:["\uAE30\uBCF8\uAC12 ",(0,t.jsx)(i.code,{children:"0.5"}),"\uC758 \uC8FC\uBAA9\uC801\uC740 \uC18C\uC218\uC810 \uACC4\uC0B0 \uC624\uCC28\uB098 \uBBF8\uC138 \uAC70\uB9AC(1px \uBBF8\uB9CC)\uC5D0\uC11C animation duration\uC774 \uBE44\uC815\uC0C1\uC801\uC73C\uB85C \uB298\uC5B4\uB098\uB294 \uD604\uC0C1\uC744 \uBC29\uC9C0\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:'// \uAE30\uBCF8\uAC12: 0.5px \uBBF8\uB9CC\uC740 \uC989\uC2DC \uC774\uB3D9\nconst flicking = new Flicking("#el", {\n  animationThreshold: 0.5\n});\n\n// \uD56D\uC0C1 \uC560\uB2C8\uBA54\uC774\uC158 (\uC18C\uC218\uC810 \uC624\uCC28\uB3C4 \uD3EC\uD568)\nconst flicking = new Flicking("#el", {\n  animationThreshold: 0\n});\n\n// 300px \uBBF8\uB9CC \uC774\uB3D9\uC740 \uC989\uC2DC \uCC98\uB9AC\nconst flicking = new Flicking("#el", {\n  animationThreshold: 300,\n  duration: 1000\n});\n'})}),"\n",(0,t.jsx)(i.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,t.jsx)(i.admonition,{title:"\uC5B8\uC81C \uAE30\uBCF8\uAC12\uC744 \uBCC0\uACBD\uD558\uB098\uC694?",type:"info",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsxs)(i.strong,{children:[(0,t.jsx)(i.code,{children:"0"}),"\uC73C\uB85C \uC124\uC815"]}),": \uBBF8\uC138 \uC774\uB3D9\uC5D0\uC11C\uB3C4 \uC815\uD655\uD558\uAC8C ",(0,t.jsx)(i.code,{children:"willChange"}),"/",(0,t.jsx)(i.code,{children:"moveEnd"})," \uC774\uBCA4\uD2B8\uB97C \uC218\uC2E0\uD574\uC57C \uD560 \uB54C"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"\uD070 \uAC12\uC73C\uB85C \uC124\uC815"}),": \uADFC\uC811\uD55C \uD328\uB110 \uAC04 \uC774\uB3D9 \uC2DC \uC989\uAC01\uC801\uC778 \uC751\uB2F5\uC774 \uD544\uC694\uD560 \uB54C (\uC608: \uD504\uB85C\uADF8\uB798\uB9E4\uD2F1 \uC81C\uC5B4\uAC00 \uB9CE\uC740 UI)"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"\uAE30\uBCF8\uAC12 \uC720\uC9C0"}),": \uC77C\uBC18\uC801\uC778 \uCE90\uB7EC\uC140\uC5D0\uC11C\uB294 \uAE30\uBCF8\uAC12\uC73C\uB85C \uCDA9\uBD84\uD569\uB2C8\uB2E4"]}),"\n"]})}),"\n",(0,t.jsx)(i.admonition,{title:"willChange \uC774\uBCA4\uD2B8 \uBC1C\uC0DD \uC5EC\uBD80",type:"warning",children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"animationThreshold"}),"\uB85C \uC778\uD574 \uC560\uB2C8\uBA54\uC774\uC158\uC774 \uAC74\uB108\uB6F0\uC5B4\uC9C0\uBA74 ",(0,t.jsx)(i.code,{children:"willChange"})," \uC774\uBCA4\uD2B8\uAC00 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uBCA4\uD2B8 \uAE30\uBC18 \uB85C\uC9C1\uC774 \uC788\uB2E4\uBA74 \uC774 \uC810\uC744 \uACE0\uB824\uD558\uC138\uC694."]})}),"\n",(0,t.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,t.jsx)(i.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#duration",children:(0,t.jsx)(i.code,{children:"duration"})}),": \uC560\uB2C8\uBA54\uC774\uC158 \uC9C0\uC18D \uC2DC\uAC04"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#easing",children:(0,t.jsx)(i.code,{children:"easing"})}),": \uC560\uB2C8\uBA54\uC774\uC158 \uAC00\uC18D\uB3C4 \uACE1\uC120"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"../basic/duration",children:"Duration"}),": \uC560\uB2C8\uBA54\uC774\uC158 \uC9C0\uC18D \uC2DC\uAC04 \uC124\uC815"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"../basic/interruptable",children:"Interruptable"}),": \uC560\uB2C8\uBA54\uC774\uC158 \uC911 \uC785\uB825 \uCC98\uB9AC"]}),"\n"]})]})}function v(e={}){let{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},27449(e,i,n){n.d(i,{A:()=>r});var l=n(65723),t=n(19612);n(22155);let s="^4.11.4",a={react:{"@egjs/react-flicking":s,"@egjs/flicking":s},vue3:{"@egjs/vue3-flicking":s,"@egjs/flicking":s},vanilla:{"@egjs/flicking":s}},c=`<!DOCTYPE html>
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
</html>`,o=`import { StrictMode } from "react";
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
`;function r({code:e,html:i,template:n="react",dependencies:s={},files:r={},css:h=""}){var p;let g,m,v;return(0,l.jsx)(t.OZ,{template:"vue3"===n?"vue":"vanilla"===n?"vanilla":"react",files:(v={"/styles.css":{code:m=h?`${d}
${h}`:d},...r},"react"===n?{"/App.tsx":{code:e},"/index.js":{code:o,hidden:!0},...v}:"vue3"===n?{"/src/App.vue":{code:e},...v}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),n=[],l=[],t=!1;for(let e of i)t?l.push(e):e.trimStart().startsWith("import ")||""===e.trim()?n.push(e.replace('"../styles.css"','"./styles.css"')):(t=!0,l.push(e));for(;l.length>0&&""===l[l.length-1].trim();)l.pop();return[...n,"","const _run = () => {",...l.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:m},"/index.html":{code:(g="<style>.flicking-viewport{opacity:0}</style>",(p=i||c).includes("</head>")?p.replace("</head>",`${g}
</head>`):g+p)},...r}),customSetup:{dependencies:{...a[n],...s}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===n?["/App.tsx","/styles.css"]:"vue3"===n?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===n?"/App.tsx":"vue3"===n?"/src/App.vue":"/src/index.js"}})}},72722(e,i,n){n.d(i,{A:()=>x});var l=n(65723),t=n(34622),s=n(7210),a=n(78863);n(22155);let c=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,o=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",d=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${c(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",r=e=>`${Object.keys(e).map(i=>`${i}: ${c(e[i],"'")}`).join(", ")}`,h=(e,{prefix:i,includeFlicking:n=!0}={})=>{let l=n?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&l.push(...e),`${l.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},p=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${r(e[1])} }`:e[1]??""}`).join(", ")})`,g=({options:e,panels:i,events:n={},methods:s={},plugins:a=[],siblings:r=[],imports:p=[],viewportClass:g=""})=>{let m=e=>`${Object.keys(e).map(i=>`${i}: ${c(e[i])}`).join(",\n  ")}`,v=Object.keys(s).map(e=>`const ${e} = ${s[e]};
`).join(""),x=e?`const flicking = new Flicking("#flick", {
  ${m(e)}
});

`:'const flicking = new Flicking("#flick")',u=a.length>0?`flicking.addPlugins(${a.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?m(e[1]):e[1]??""}
}`:""})`)});`:"",f=[...a.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...p],j=Object.keys(n).map(e=>{let i=n[e];return`flicking.on("${e}", ${i})
`}).join(""),k=i.filter(e=>e.isSlot);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${g&&` ${g}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${o(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${k.length?`
  ${k.map(e=>`<${e.tag}${o(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${r?"\n"+r.map(e=>`<${e.tag}${o(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,l.jsx)(t.A,{className:"language-js",title:"js",children:`${h(f)}

${v}${x}${u}${j}`.trim()})]})},m=({options:e,panels:i,events:n={},methods:s={},plugins:a,siblings:c,imports:r=[],viewportClass:g=""})=>{let m=a?`
  private _plugins = [${p(a)}];
`:"",v=i.filter(e=>e.isSlot),x=[["{ Component }","react"],[v.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],u=Object.keys(s).map(e=>`
const ${e} = ${s[e]};`).join("");u&&(u+="\n"),a&&x.push([`{ ${a.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),x.push(...r);let f=v.length?`
      <ViewportSlot>
        ${v.map(e=>`<${e.tag}${o(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",j=Object.keys(n).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${n[e]}}`).join("");return(0,l.jsx)(t.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${h(x,{includeFlicking:!1})}
${u}
export default class DemoComponent extends Component {${m}
  public render() {
    return ${c?"<>\n    ":""}<Flicking${g&&` className="${g}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${a?" plugins={this._plugins}":""}${j}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${o(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${f}
    </Flicking>${c?`
    ${c.map(e=>`<${e.tag}${o(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},v=({options:e,panels:i,events:n={},methods:s={},plugins:a,siblings:c=[],imports:g=[],viewportClass:m=""})=>{let v=r(e),x=i.filter(e=>e.isSlot),u=a?`,
  data() {
    return {
      plugins: [${p(a)}]
    }
  }`:"",f=x.length?`
  <template #viewport>
    ${x.map(e=>`<${e.tag}${o(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",j=[...(a??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],k=Object.keys(s),$=k.length>0?`,
  methods: {
    ${k.map(e=>`${e}: ${s[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",b=Object.keys(n).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${n[e]}"`).join("");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.A,{className:"language-html",title:"template",children:`<Flicking${m&&` class="${m}"`}${e?` :options="{ ${v} }"`:""}${a?' :plugins="plugins"':""}${b}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${o(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}${f}
</Flicking>${c?`
${c.map(e=>`<${e.tag}${o(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,l.jsx)(t.A,{className:"language-js",title:"script",children:`${h(j,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${u}${$}
}`})]})},x=({js:e,react:i,vue3:n,style:c,...o})=>(0,l.jsxs)("div",{children:[(0,l.jsxs)(a.A,{groupId:"cfc",defaultValue:"js",children:[(0,l.jsx)(s.A,{value:"react",label:"React",children:i||(0,l.jsx)(m,{...o})}),(0,l.jsx)(s.A,{value:"vue3",label:"Vue@3",children:n||(0,l.jsx)(v,{...o})}),(0,l.jsx)(s.A,{value:"js",label:"JavaScript",children:e||(0,l.jsx)(g,{...o})})]}),c&&(0,l.jsx)(t.A,{className:"language-css",title:"style",children:`${c}`})]})}}]);