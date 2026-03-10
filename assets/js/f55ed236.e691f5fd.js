"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["364"],{22403(i,e,n){n.r(e),n.d(e,{metadata:()=>t,default:()=>f,frontMatter:()=>o,contentTitle:()=>p,toc:()=>u,assets:()=>g});var t=JSON.parse('{"id":"demos/basic/auto-init","title":"Auto Init","description":"autoInit \uC635\uC158\uC73C\uB85C \uC778\uC2A4\uD134\uC2A4 \uC0DD\uC131 \uC2DC \uC790\uB3D9 \uCD08\uAE30\uD654 \uC5EC\uBD80\uB97C \uC124\uC815\uD569\uB2C8\uB2E4","source":"@site/docs/demos/basic/auto-init.mdx","sourceDirName":"demos/basic","slug":"/demos/basic/auto-init","permalink":"/flicking-docs-test/docs/demos/basic/auto-init","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/basic/auto-init.mdx","tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"Auto Init","id":"auto-init","slug":"/demos/basic/auto-init","sidebar_position":15,"description":"autoInit \uC635\uC158\uC73C\uB85C \uC778\uC2A4\uD134\uC2A4 \uC0DD\uC131 \uC2DC \uC790\uB3D9 \uCD08\uAE30\uD654 \uC5EC\uBD80\uB97C \uC124\uC815\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","autoInit","init","initialization","\uCD08\uAE30\uD654","\uC9C0\uC5F0"]},"sidebar":"demosSidebar","previous":{"title":"Default Index","permalink":"/flicking-docs-test/docs/demos/basic/default-index"},"next":{"title":"Adaptive","permalink":"/flicking-docs-test/docs/demos/basic/adaptive"}}'),l=n(65723),s=n(54187),a=n(27449),c=n(72722);n(22155);let d=`
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
}
.controls button {
  margin-right: 8px;
  padding: 6px 12px;
  cursor: pointer;
}
.status {
  margin-top: 4px;
  font-size: 14px;
  color: #888;
}
`,r=()=>{let i=`import { useRef, useState } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "./styles.css";

export default function App() {
  const flickingRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const handleInit = () => {
    if (flickingRef.current && !isInitialized) {
      flickingRef.current.init();
      setIsInitialized(true);
    }
  };

  return (
    <div>
      {/* autoInit: true (\u{AE30}\u{BCF8}\u{AC12}) */}
      <div className="demo-container">
        <div className="demo-label">autoInit: true (\u{AE30}\u{BCF8}\u{AC12}, \u{C989}\u{C2DC} \u{CD08}\u{AE30}\u{D654})</div>
        <Flicking autoInit={true} align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>

      {/* autoInit: false (\u{C218}\u{B3D9} \u{CD08}\u{AE30}\u{D654}) */}
      <div className="demo-container">
        <div className="demo-label">autoInit: false (\u{BC84}\u{D2BC} \u{D074}\u{B9AD} \u{C2DC} \u{CD08}\u{AE30}\u{D654})</div>
        <Flicking ref={flickingRef} autoInit={false} align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
        <div className="controls">
          <button onClick={handleInit} disabled={isInitialized}>
            {isInitialized ? "\u{CD08}\u{AE30}\u{D654}\u{B428}" : "init() \u{D638}\u{CD9C}"}
          </button>
        </div>
        <div className="status">
          \u{C0C1}\u{D0DC}: {isInitialized ? "\u{CD08}\u{AE30}\u{D654} \u{C644}\u{B8CC} - \u{B4DC}\u{B798}\u{ADF8} \u{AC00}\u{B2A5}" : "\u{BBF8}\u{CD08}\u{AE30}\u{D654} - \u{B4DC}\u{B798}\u{ADF8} \u{BD88}\u{AC00}"}
        </div>
      </div>
    </div>
  );
}`,e=(0,l.jsx)(a.A,{template:"react",code:i,css:d}),n=`<template>
  <div>
    <!-- autoInit: true (\u{AE30}\u{BCF8}\u{AC12}) -->
    <div class="demo-container">
      <div class="demo-label">autoInit: true (\u{AE30}\u{BCF8}\u{AC12}, \u{C989}\u{C2DC} \u{CD08}\u{AE30}\u{D654})</div>
      <Flicking :options="{ autoInit: true, align: 'center' }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
    </div>

    <!-- autoInit: false (\u{C218}\u{B3D9} \u{CD08}\u{AE30}\u{D654}) -->
    <div class="demo-container">
      <div class="demo-label">autoInit: false (\u{BC84}\u{D2BC} \u{D074}\u{B9AD} \u{C2DC} \u{CD08}\u{AE30}\u{D654})</div>
      <Flicking ref="flicking" :options="{ autoInit: false, align: 'center' }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
      <div class="controls">
        <button @click="handleInit" :disabled="isInitialized">
          {{ isInitialized ? "\u{CD08}\u{AE30}\u{D654}\u{B428}" : "init() \u{D638}\u{CD9C}" }}
        </button>
      </div>
      <div class="status">
        \u{C0C1}\u{D0DC}: {{ isInitialized ? "\u{CD08}\u{AE30}\u{D654} \u{C644}\u{B8CC} - \u{B4DC}\u{B798}\u{ADF8} \u{AC00}\u{B2A5}" : "\u{BBF8}\u{CD08}\u{AE30}\u{D654} - \u{B4DC}\u{B798}\u{ADF8} \u{BD88}\u{AC00}" }}
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
    return { isInitialized: false };
  },
  methods: {
    handleInit() {
      if (!this.isInitialized) {
        this.$refs.flicking.init();
        this.isInitialized = true;
      }
    }
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
.controls { margin-top: 8px; }
.controls button { margin-right: 8px; padding: 6px 12px; cursor: pointer; }
.status { margin-top: 4px; font-size: 14px; color: #888; }
</style>`,t=(0,l.jsx)(a.A,{template:"vue3",code:n,css:d}),s=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

// autoInit: true (\u{AE30}\u{BCF8}\u{AC12})
new Flicking("#flick-auto", {
  autoInit: true,
  align: "center"
});

// autoInit: false (\u{C218}\u{B3D9} \u{CD08}\u{AE30}\u{D654})
const flickingManual = new Flicking("#flick-manual", {
  autoInit: false,
  align: "center"
});

let isInitialized = false;
const button = document.getElementById("init-btn");
const status = document.getElementById("init-status");

button.addEventListener("click", () => {
  if (!isInitialized) {
    flickingManual.init();
    isInitialized = true;
    button.textContent = "\u{CD08}\u{AE30}\u{D654}\u{B428}";
    button.disabled = true;
    status.textContent = "\u{C0C1}\u{D0DC}: \u{CD08}\u{AE30}\u{D654} \u{C644}\u{B8CC} - \u{B4DC}\u{B798}\u{ADF8} \u{AC00}\u{B2A5}";
  }
});`,r=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <!-- autoInit: true (\u{AE30}\u{BCF8}\u{AC12}) -->
  <div class="demo-container">
    <div class="demo-label">autoInit: true (\u{AE30}\u{BCF8}\u{AC12}, \u{C989}\u{C2DC} \u{CD08}\u{AE30}\u{D654})</div>
    <div id="flick-auto" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </div>
    </div>
  </div>

  <!-- autoInit: false (\u{C218}\u{B3D9} \u{CD08}\u{AE30}\u{D654}) -->
  <div class="demo-container">
    <div class="demo-label">autoInit: false (\u{BC84}\u{D2BC} \u{D074}\u{B9AD} \u{C2DC} \u{CD08}\u{AE30}\u{D654})</div>
    <div id="flick-manual" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </div>
    </div>
    <div class="controls">
      <button id="init-btn">init() \u{D638}\u{CD9C}</button>
    </div>
    <div class="status" id="init-status">\u{C0C1}\u{D0DC}: \u{BBF8}\u{CD08}\u{AE30}\u{D654} - \u{B4DC}\u{B798}\u{ADF8} \u{BD88}\u{AC00}</div>
  </div>

</body>
</html>`,o=(0,l.jsx)(a.A,{template:"vanilla",code:s,html:r,css:d});return(0,l.jsx)(c.A,{options:{},panels:[],react:e,vue3:t,js:o})},o={title:"Auto Init",id:"auto-init",slug:"/demos/basic/auto-init",sidebar_position:15,description:"autoInit \uC635\uC158\uC73C\uB85C \uC778\uC2A4\uD134\uC2A4 \uC0DD\uC131 \uC2DC \uC790\uB3D9 \uCD08\uAE30\uD654 \uC5EC\uBD80\uB97C \uC124\uC815\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","autoInit","init","initialization","\uCD08\uAE30\uD654","\uC9C0\uC5F0"]},p="Auto Init",g={},u=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uAC12\uBCC4 \uBE44\uAD50",id:"\uAC12\uBCC4-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"autoInit \uB3D9\uC791 \uC6D0\uB9AC",id:"autoinit-\uB3D9\uC791-\uC6D0\uB9AC",level:3},{value:"\uCD08\uAE30\uD654 \uC804 \uC0C1\uD0DC",id:"\uCD08\uAE30\uD654-\uC804-\uC0C1\uD0DC",level:3},{value:"preventEventsBeforeInit",id:"preventeventsbeforeinit",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function h(i){let e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...i.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"auto-init",children:"Auto Init"})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.a,{href:"../../api/interfaces/FlickingOptions#autoinit",children:(0,l.jsx)(e.code,{children:"autoInit"})})," \uC635\uC158\uC73C\uB85C Flicking \uC778\uC2A4\uD134\uC2A4 \uC0DD\uC131 \uC2DC \uC790\uB3D9\uC73C\uB85C ",(0,l.jsx)(e.code,{children:"init()"}),"\uC744 \uD638\uCD9C\uD560\uC9C0 \uC124\uC815\uD569\uB2C8\uB2E4. \uC9C0\uC5F0 \uCD08\uAE30\uD654\uAC00 \uD544\uC694\uD55C \uACBD\uC6B0 ",(0,l.jsx)(e.code,{children:"false"}),"\uB85C \uC124\uC815\uD569\uB2C8\uB2E4."]}),"\n",(0,l.jsx)(r,{}),"\n",(0,l.jsx)(e.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,l.jsx)(e.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\uC635\uC158"}),(0,l.jsx)(e.th,{children:"\uD0C0\uC785"}),(0,l.jsx)(e.th,{children:"\uAE30\uBCF8\uAC12"}),(0,l.jsx)(e.th,{children:"\uC124\uBA85"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.a,{href:"../../api/interfaces/FlickingOptions#autoinit",children:(0,l.jsx)(e.code,{children:"autoInit"})})}),(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"boolean"})}),(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"true"})}),(0,l.jsx)(e.td,{children:"\uC0DD\uC131 \uC2DC \uC790\uB3D9 init() \uD638\uCD9C"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.a,{href:"../../api/interfaces/FlickingOptions#preventeventsbeforeinit",children:(0,l.jsx)(e.code,{children:"preventEventsBeforeInit"})})}),(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"boolean"})}),(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"true"})}),(0,l.jsx)(e.td,{children:"init() \uD638\uCD9C \uC804 \uC774\uBCA4\uD2B8 \uBC1C\uC0DD \uBC29\uC9C0"})]})]})]}),"\n",(0,l.jsx)(e.h3,{id:"\uAC12\uBCC4-\uBE44\uAD50",children:"\uAC12\uBCC4 \uBE44\uAD50"}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\uAC12"}),(0,l.jsx)(e.th,{children:"\uB3D9\uC791"}),(0,l.jsx)(e.th,{children:"\uC801\uD569\uD55C \uC0C1\uD669"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"true"})}),(0,l.jsx)(e.td,{children:"\uC778\uC2A4\uD134\uC2A4 \uC0DD\uC131 \uC989\uC2DC \uCD08\uAE30\uD654 (\uAE30\uBCF8\uAC12)"}),(0,l.jsx)(e.td,{children:"\uC77C\uBC18\uC801\uC778 \uC0AC\uC6A9"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"false"})}),(0,l.jsx)(e.td,{children:"\uC218\uB3D9\uC73C\uB85C init() \uD638\uCD9C \uD544\uC694"}),(0,l.jsx)(e.td,{children:"\uC9C0\uC5F0 \uCD08\uAE30\uD654, \uB3D9\uC801 \uD328\uB110 \uCD94\uAC00 \uD6C4 \uCD08\uAE30\uD654"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,l.jsx)(e.h3,{id:"autoinit-\uB3D9\uC791-\uC6D0\uB9AC",children:"autoInit \uB3D9\uC791 \uC6D0\uB9AC"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"autoInit: true"}),"\uC774\uBA74 ",(0,l.jsx)(e.code,{children:"new Flicking()"})," \uD638\uCD9C \uC2DC \uC790\uB3D9\uC73C\uB85C ",(0,l.jsx)(e.code,{children:"init()"}),"\uC774 \uC2E4\uD589\uB429\uB2C8\uB2E4. ",(0,l.jsx)(e.code,{children:"init()"}),"\uC740 \uD328\uB110 \uD06C\uAE30 \uACC4\uC0B0, \uC774\uBCA4\uD2B8 \uBC14\uC778\uB529, \uCD08\uAE30 \uC704\uCE58 \uC124\uC815 \uB4F1\uC744 \uC218\uD589\uD569\uB2C8\uB2E4."]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:'// \uC790\uB3D9 \uCD08\uAE30\uD654 (\uAE30\uBCF8\uAC12)\nconst flicking = new Flicking("#el", { autoInit: true });\n// \uC774\uBBF8 \uCD08\uAE30\uD654\uB428, \uBC14\uB85C \uC0AC\uC6A9 \uAC00\uB2A5\n\n// \uC218\uB3D9 \uCD08\uAE30\uD654\nconst flicking = new Flicking("#el", { autoInit: false });\n// \uC544\uC9C1 \uCD08\uAE30\uD654 \uC548 \uB428, \uB4DC\uB798\uADF8 \uBD88\uAC00\nflicking.init(); // \uC774\uC81C \uCD08\uAE30\uD654\uB428\n'})}),"\n",(0,l.jsx)(e.h3,{id:"\uCD08\uAE30\uD654-\uC804-\uC0C1\uD0DC",children:"\uCD08\uAE30\uD654 \uC804 \uC0C1\uD0DC"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"autoInit: false"}),"\uB85C \uC0DD\uC131\uD558\uBA74 ",(0,l.jsx)(e.code,{children:"init()"})," \uD638\uCD9C \uC804\uAE4C\uC9C0:"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\uB4DC\uB798\uADF8/\uD130\uCE58 \uC785\uB825 \uBB34\uC2DC"}),"\n",(0,l.jsx)(e.li,{children:"\uD328\uB110 \uC704\uCE58 \uACC4\uC0B0 \uC548 \uB428"}),"\n",(0,l.jsx)(e.li,{children:"\uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108 \uBC14\uC778\uB529 \uC548 \uB428"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"preventeventsbeforeinit",children:"preventEventsBeforeInit"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"autoInit: false"}),"\uB85C \uC9C0\uC5F0 \uCD08\uAE30\uD654\uB97C \uC0AC\uC6A9\uD560 \uB54C \uAD00\uB828 \uC788\uB294 \uC635\uC158\uC785\uB2C8\uB2E4. \uAE30\uBCF8\uAC12 ",(0,l.jsx)(e.code,{children:"true"}),"\uC774\uBA74 ",(0,l.jsx)(e.code,{children:"init()"})," \uD638\uCD9C \uC804\uAE4C\uC9C0 ",(0,l.jsx)(e.code,{children:"ready"}),", ",(0,l.jsx)(e.code,{children:"willChange"}),", ",(0,l.jsx)(e.code,{children:"changed"})," \uB4F1 Flicking \uC774\uBCA4\uD2B8\uAC00 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uCD08\uAE30\uD654 \uC804\uC5D0 \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC\uAC00 \uC758\uB3C4\uCE58 \uC54A\uAC8C \uC2E4\uD589\uB418\uB294 \uAC83\uC744 \uBC29\uC9C0\uD569\uB2C8\uB2E4."]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"false"}),"\uB85C \uC124\uC815\uD558\uBA74 \uCD08\uAE30\uD654 \uC804\uC5D0\uB3C4 \uC77C\uBD80 \uC774\uBCA4\uD2B8\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC73C\uBBC0\uB85C, \uD2B9\uBCC4\uD55C \uC774\uC720\uAC00 \uC5C6\uB2E4\uBA74 \uAE30\uBCF8\uAC12\uC744 \uC720\uC9C0\uD558\uB294 \uAC83\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4."]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:'const flicking = new Flicking("#el", {\n  autoInit: false,\n  preventEventsBeforeInit: true // \uAE30\uBCF8\uAC12: init() \uC804 \uC774\uBCA4\uD2B8 \uBC29\uC9C0\n});\n\nflicking.on("ready", () => {\n  console.log("init() \uD638\uCD9C \uD6C4\uC5D0\uB9CC \uC2E4\uD589\uB428");\n});\n\nflicking.init(); // \uC5EC\uAE30\uC11C\uBD80\uD130 \uC774\uBCA4\uD2B8 \uC218\uC2E0 \uC2DC\uC791\n'})}),"\n",(0,l.jsx)(e.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,l.jsx)(e.admonition,{title:"\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"autoInit: true"}),": \uC77C\uBC18\uC801\uC778 \uCE90\uB7EC\uC140, \uC815\uC801 \uD328\uB110"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"autoInit: false"}),":","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"API\uC5D0\uC11C \uB370\uC774\uD130 \uB85C\uB4DC \uD6C4 \uD328\uB110 \uC0DD\uC131"}),"\n",(0,l.jsx)(e.li,{children:"\uD0ED/\uBAA8\uB2EC \uB0B4\uBD80\uC758 \uC228\uACA8\uC9C4 Flicking"}),"\n",(0,l.jsx)(e.li,{children:"DOM \uD06C\uAE30\uAC00 \uD655\uC815\uB41C \uD6C4 \uCD08\uAE30\uD654 \uD544\uC694"}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,l.jsx)(e.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,l.jsx)(e.admonition,{title:"\uCD08\uAE30\uD654 \uC804 \uBA54\uC11C\uB4DC \uD638\uCD9C",type:"warning",children:(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"autoInit: false"})," \uC0C1\uD0DC\uC5D0\uC11C ",(0,l.jsx)(e.code,{children:"moveTo()"}),", ",(0,l.jsx)(e.code,{children:"prev()"})," \uB4F1\uC744 \uD638\uCD9C\uD558\uBA74 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBC18\uB4DC\uC2DC ",(0,l.jsx)(e.code,{children:"init()"})," \uD638\uCD9C \uD6C4 \uC0AC\uC6A9\uD558\uC138\uC694."]})}),"\n",(0,l.jsx)(e.admonition,{title:"\uC228\uACA8\uC9C4 \uC694\uC18C\uC5D0\uC11C\uC758 \uCD08\uAE30\uD654",type:"warning",children:(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"display: none"})," \uC0C1\uD0DC\uC5D0\uC11C \uCD08\uAE30\uD654\uD558\uBA74 \uD06C\uAE30 \uACC4\uC0B0\uC774 \uC798\uBABB\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC694\uC18C\uAC00 \uBCF4\uC774\uB294 \uC0C1\uD0DC\uC5D0\uC11C ",(0,l.jsx)(e.code,{children:"init()"}),"\uC744 \uD638\uCD9C\uD558\uAC70\uB098, \uD45C\uC2DC \uD6C4 ",(0,l.jsx)(e.code,{children:"resize()"}),"\uB97C \uD638\uCD9C\uD558\uC138\uC694."]})}),"\n",(0,l.jsx)(e.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,l.jsx)(e.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"../../api/interfaces/FlickingOptions#defaultindex",children:(0,l.jsx)(e.code,{children:"defaultIndex"})}),": \uCD08\uAE30 \uD328\uB110 \uC778\uB371\uC2A4"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"../../api/interfaces/FlickingOptions#preventeventsbeforeinit",children:(0,l.jsx)(e.code,{children:"preventEventsBeforeInit"})}),": init() \uC804 \uC774\uBCA4\uD2B8 \uBC1C\uC0DD \uBC29\uC9C0"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"./default-index",children:"Default Index"}),": \uCD08\uAE30 \uD328\uB110 \uC124\uC815"]}),"\n"]})]})}function f(i={}){let{wrapper:e}={...(0,s.R)(),...i.components};return e?(0,l.jsx)(e,{...i,children:(0,l.jsx)(h,{...i})}):h(i)}},27449(i,e,n){n.d(e,{A:()=>o});var t=n(65723),l=n(19612);n(22155);let s="^4.11.4",a={react:{"@egjs/react-flicking":s,"@egjs/flicking":s},vue3:{"@egjs/vue3-flicking":s,"@egjs/flicking":s},vanilla:{"@egjs/flicking":s}},c=`<!DOCTYPE html>
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
`;function o({code:i,html:e,template:n="react",dependencies:s={},files:o={},css:p=""}){var g;let u,h,f;return(0,t.jsx)(l.OZ,{template:"vue3"===n?"vue":"vanilla"===n?"vanilla":"react",files:(f={"/styles.css":{code:h=p?`${r}
${p}`:r},...o},"react"===n?{"/App.tsx":{code:i},"/index.js":{code:d,hidden:!0},...f}:"vue3"===n?{"/src/App.vue":{code:i},...f}:{"/src/index.js":{code:i},"/index.js":{code:function(i){let e=i.split("\n"),n=[],t=[],l=!1;for(let i of e)l?t.push(i):i.trimStart().startsWith("import ")||""===i.trim()?n.push(i.replace('"../styles.css"','"./styles.css"')):(l=!0,t.push(i));for(;t.length>0&&""===t[t.length-1].trim();)t.pop();return[...n,"","const _run = () => {",...t.map(i=>`  ${i}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(i),hidden:!0},"/styles.css":{code:h},"/index.html":{code:(u="<style>.flicking-viewport{opacity:0}</style>",(g=e||c).includes("</head>")?g.replace("</head>",`${u}
</head>`):u+g)},...o}),customSetup:{dependencies:{...a[n],...s}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===n?["/App.tsx","/styles.css"]:"vue3"===n?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===n?"/App.tsx":"vue3"===n?"/src/App.vue":"/src/index.js"}})}},72722(i,e,n){n.d(e,{A:()=>j});var t=n(65723),l=n(34622),s=n(7210),a=n(78863);n(22155);let c=(i,e='"')=>"string"==typeof i?`${e}${i}${e}`:i,d=(i,e="class")=>i.class?` ${e}="${i.class}"`:"",r=(i,e=!1)=>i.style?e?` style={{ ${Object.keys(i.style).map(e=>`${e}: ${c(i.style[e])}`).join(", ")} }}`:` style="${Object.keys(i.style).map(e=>`${e}: ${i.style[e]};`).join(" ")}"`:"",o=i=>`${Object.keys(i).map(e=>`${e}: ${c(i[e],"'")}`).join(", ")}`,p=(i,{prefix:e,includeFlicking:n=!0}={})=>{let t=n?[["Flicking",`@egjs/${e?`${e}-`:""}flicking`]]:[];return i&&t.push(...i),`${t.map(i=>Array.isArray(i)?`import ${i[0]} from "${i[1]}";`:`import "${i}";`).join("\n")}`},g=i=>`${i.map(i=>`new ${i[0]}(${"object"==typeof i[1]?`{ ${o(i[1])} }`:i[1]??""}`).join(", ")})`,u=({options:i,panels:e,events:n={},methods:s={},plugins:a=[],siblings:o=[],imports:g=[],viewportClass:u=""})=>{let h=i=>`${Object.keys(i).map(e=>`${e}: ${c(i[e])}`).join(",\n  ")}`,f=Object.keys(s).map(i=>`const ${i} = ${s[i]};
`).join(""),j=i?`const flicking = new Flicking("#flick", {
  ${h(i)}
});

`:'const flicking = new Flicking("#flick")',v=a.length>0?`flicking.addPlugins(${a.map(i=>`new ${i[0]}(${i[1]?`{
  ${"object"==typeof i[1]?h(i[1]):i[1]??""}
}`:""})`)});`:"",x=[...a.map(i=>[`{ ${i[0]} }`,"@egjs/flicking-plugins"]),...g],m=Object.keys(n).map(i=>{let e=n[i];return`flicking.on("${i}", ${e})
`}).join(""),k=e.filter(i=>i.isSlot);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${u&&` ${u}`}${!1===i.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${e.filter(i=>!i.isSlot).map(i=>`<${i.tag}${d(i)}${r(i)}>${i.content}</${i.tag}>`).join("\n    ")}
  </div>${k.length?`
  ${k.map(i=>`<${i.tag}${d(i)}${r(i)}>${i.content}</${i.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(i=>`<${i.tag}${d(i)}${r(i)}>${i.content}</${i.tag}>`).join("\n"):""}`}),(0,t.jsx)(l.A,{className:"language-js",title:"js",children:`${p(x)}

${f}${j}${v}${m}`.trim()})]})},h=({options:i,panels:e,events:n={},methods:s={},plugins:a,siblings:c,imports:o=[],viewportClass:u=""})=>{let h=a?`
  private _plugins = [${g(a)}];
`:"",f=e.filter(i=>i.isSlot),j=[["{ Component }","react"],[f.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],v=Object.keys(s).map(i=>`
const ${i} = ${s[i]};`).join("");v&&(v+="\n"),a&&j.push([`{ ${a.map(i=>i[0])} }`,"@egjs/flicking-plugins"]),j.push(...o);let x=f.length?`
      <ViewportSlot>
        ${f.map(i=>`<${i.tag}${d(i,"className")}${r(i,!0)}>${i.content.replace(/class/g,"className")}</${i.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",m=Object.keys(n).map(i=>` on${i[0].toUpperCase()+i.slice(1)}={${n[i]}}`).join("");return(0,t.jsx)(l.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(j,{includeFlicking:!1})}
${v}
export default class DemoComponent extends Component {${h}
  public render() {
    return ${c?"<>\n    ":""}<Flicking${u&&` className="${u}"`}${i?` ${Object.keys(i).map(e=>`${e}=${"string"==typeof i[e]?`"${i[e]}"`:`{${i[e]}}`}`).join(" ")}`:""}${a?" plugins={this._plugins}":""}${m}>
      ${e.filter(i=>!i.isSlot).map(i=>`<${i.tag}${d(i,"className")}${r(i,!0)}>${i.content.replace(/class/g,"className")}</${i.tag}>`).join("\n      ")}${x}
    </Flicking>${c?`
    ${c.map(i=>`<${i.tag}${d(i,"className")}${r(i,!0)}>${i.content.replace(/class/g,"className")}</${i.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},f=({options:i,panels:e,events:n={},methods:s={},plugins:a,siblings:c=[],imports:u=[],viewportClass:h=""})=>{let f=o(i),j=e.filter(i=>i.isSlot),v=a?`,
  data() {
    return {
      plugins: [${g(a)}]
    }
  }`:"",x=j.length?`
  <template #viewport>
    ${j.map(i=>`<${i.tag}${d(i)}${r(i)}>${i.content}</${i.tag}>`).join("\n    ")}
  </template>`:"",m=[...(a??[]).map(i=>[`{ ${i[0]} }`,"@egjs/flicking-plugins"]),...u],k=Object.keys(s),$=k.length>0?`,
  methods: {
    ${k.map(i=>`${i}: ${s[i].split("\n").map((i,e)=>e>0?`    ${i}`:i).join("\n")}`).join(",\n")}
  }`:"",b=Object.keys(n).map(i=>` @${i.replace(/([A-Z])/g,"-$1").toLowerCase()}="${n[i]}"`).join("");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.A,{className:"language-html",title:"template",children:`<Flicking${h&&` class="${h}"`}${i?` :options="{ ${f} }"`:""}${a?' :plugins="plugins"':""}${b}>
  ${e.filter(i=>!i.isSlot).map(i=>`<${i.tag}${d(i)}${r(i)}>${i.content}</${i.tag}>`).join("\n  ")}${x}
</Flicking>${c?`
${c.map(i=>`<${i.tag}${d(i)}${r(i)}>${i.content}</${i.tag}>`).join("\n")}`:""}`}),(0,t.jsx)(l.A,{className:"language-js",title:"script",children:`${p(m,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${v}${$}
}`})]})},j=({js:i,react:e,vue3:n,style:c,...d})=>(0,t.jsxs)("div",{children:[(0,t.jsxs)(a.A,{groupId:"cfc",defaultValue:"js",children:[(0,t.jsx)(s.A,{value:"react",label:"React",children:e||(0,t.jsx)(h,{...d})}),(0,t.jsx)(s.A,{value:"vue3",label:"Vue@3",children:n||(0,t.jsx)(f,{...d})}),(0,t.jsx)(s.A,{value:"js",label:"JavaScript",children:i||(0,t.jsx)(u,{...d})})]}),c&&(0,t.jsx)(l.A,{className:"language-css",title:"style",children:`${c}`})]})}}]);