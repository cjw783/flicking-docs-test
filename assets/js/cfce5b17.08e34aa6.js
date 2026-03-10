"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["6214"],{19715(e,i,n){n.r(i),n.d(i,{metadata:()=>l,default:()=>m,frontMatter:()=>o,contentTitle:()=>p,toc:()=>h,assets:()=>g});var l=JSON.parse('{"id":"demos/basic/interruptable","title":"Interruptable","description":"interruptable \uC635\uC158\uC73C\uB85C \uC560\uB2C8\uBA54\uC774\uC158 \uC9C4\uD589 \uC911 \uC0AC\uC6A9\uC790 \uC785\uB825 \uD5C8\uC6A9 \uC5EC\uBD80\uB97C \uC124\uC815\uD569\uB2C8\uB2E4","source":"@site/docs/demos/basic/interruptable.mdx","sourceDirName":"demos/basic","slug":"/demos/basic/interruptable","permalink":"/flicking-docs-test/docs/demos/basic/interruptable","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/basic/interruptable.mdx","tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"title":"Interruptable","id":"interruptable","slug":"/demos/basic/interruptable","sidebar_position":18,"description":"interruptable \uC635\uC158\uC73C\uB85C \uC560\uB2C8\uBA54\uC774\uC158 \uC9C4\uD589 \uC911 \uC0AC\uC6A9\uC790 \uC785\uB825 \uD5C8\uC6A9 \uC5EC\uBD80\uB97C \uC124\uC815\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","interruptable","animation","interrupt","\uC560\uB2C8\uBA54\uC774\uC158","\uC911\uB2E8","\uC778\uD130\uB7FD\uD2B8"]},"sidebar":"demosSidebar","previous":{"title":"Nested","permalink":"/flicking-docs-test/docs/demos/basic/nested"},"next":{"title":"Prevent Click","permalink":"/flicking-docs-test/docs/demos/basic/prevent-click"}}'),t=n(65723),s=n(54187),a=n(27449),c=n(72722);n(22155);let r=`
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
.demo-hint {
  margin-top: 6px;
  font-size: 13px;
  color: #888;
}
`,d=()=>{let e=`import { useRef } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "./styles.css";

export default function App() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  return (
    <div>
      {/* interruptable: true (\u{AE30}\u{BCF8}\u{AC12}) */}
      <div className="demo-container">
        <div className="demo-label">interruptable: true (\u{AE30}\u{BCF8}\u{AC12} \u{2014} \u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158} \u{C911} \u{B4DC}\u{B798}\u{ADF8} \u{AC00}\u{B2A5})</div>
        <Flicking ref={ref1} duration={2000} align="center" interruptable={true}>
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
        <div className="controls">
          <button onClick={() => ref1.current?.next().catch(() => {})}>Next (2\u{CD08} \u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158} \u{C2DC}\u{C791})</button>
        </div>
        <div className="demo-hint">\u{BC84}\u{D2BC} \u{D074}\u{B9AD} \u{D6C4} \u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158} \u{B3C4}\u{C911} \u{B4DC}\u{B798}\u{ADF8}\u{D558}\u{BA74} \u{C989}\u{C2DC} \u{BC18}\u{C751}\u{D569}\u{B2C8}\u{B2E4}</div>
      </div>

      {/* interruptable: false */}
      <div className="demo-container">
        <div className="demo-label">interruptable: false (\u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158} \u{C644}\u{B8CC} \u{C804} \u{B4DC}\u{B798}\u{ADF8} \u{BB34}\u{C2DC})</div>
        <Flicking ref={ref2} duration={2000} align="center" interruptable={false}>
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
        <div className="controls">
          <button onClick={() => ref2.current?.next().catch(() => {})}>Next (2\u{CD08} \u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158} \u{C2DC}\u{C791})</button>
        </div>
        <div className="demo-hint">\u{BC84}\u{D2BC} \u{D074}\u{B9AD} \u{D6C4} \u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158}\u{C774} \u{B05D}\u{B0A0} \u{B54C}\u{AE4C}\u{C9C0} \u{B4DC}\u{B798}\u{ADF8}\u{AC00} \u{BB34}\u{C2DC}\u{B429}\u{B2C8}\u{B2E4}</div>
      </div>
    </div>
  );
}`,i=(0,t.jsx)(a.A,{template:"react",code:e,css:r}),n=`<template>
  <div>
    <!-- interruptable: true (\u{AE30}\u{BCF8}\u{AC12}) -->
    <div class="demo-container">
      <div class="demo-label">interruptable: true (\u{AE30}\u{BCF8}\u{AC12} \u{2014} \u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158} \u{C911} \u{B4DC}\u{B798}\u{ADF8} \u{AC00}\u{B2A5})</div>
      <Flicking ref="flick1" :options="{ duration: 2000, align: 'center', interruptable: true }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
      <div class="controls">
        <button @click="next1">Next (2\u{CD08} \u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158} \u{C2DC}\u{C791})</button>
      </div>
      <div class="demo-hint">\u{BC84}\u{D2BC} \u{D074}\u{B9AD} \u{D6C4} \u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158} \u{B3C4}\u{C911} \u{B4DC}\u{B798}\u{ADF8}\u{D558}\u{BA74} \u{C989}\u{C2DC} \u{BC18}\u{C751}\u{D569}\u{B2C8}\u{B2E4}</div>
    </div>

    <!-- interruptable: false -->
    <div class="demo-container">
      <div class="demo-label">interruptable: false (\u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158} \u{C644}\u{B8CC} \u{C804} \u{B4DC}\u{B798}\u{ADF8} \u{BB34}\u{C2DC})</div>
      <Flicking ref="flick2" :options="{ duration: 2000, align: 'center', interruptable: false }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
      <div class="controls">
        <button @click="next2">Next (2\u{CD08} \u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158} \u{C2DC}\u{C791})</button>
      </div>
      <div class="demo-hint">\u{BC84}\u{D2BC} \u{D074}\u{B9AD} \u{D6C4} \u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158}\u{C774} \u{B05D}\u{B0A0} \u{B54C}\u{AE4C}\u{C9C0} \u{B4DC}\u{B798}\u{ADF8}\u{AC00} \u{BB34}\u{C2DC}\u{B429}\u{B2C8}\u{B2E4}</div>
    </div>
  </div>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";

export default {
  components: { Flicking },
  methods: {
    next1() {
      this.$refs.flick1.next().catch(() => {});
    },
    next2() {
      this.$refs.flick2.next().catch(() => {});
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
.demo-hint { margin-top: 6px; font-size: 13px; color: #888; }
</style>`,l=(0,t.jsx)(a.A,{template:"vue3",code:n,css:r}),s=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

// interruptable: true (\u{AE30}\u{BCF8}\u{AC12})
const flick1 = new Flicking("#flick-interruptable", {
  duration: 2000,
  align: "center",
  interruptable: true
});

document.getElementById("btn1").addEventListener("click", () => {
  flick1.next().catch(() => {});
});

// interruptable: false
const flick2 = new Flicking("#flick-not-interruptable", {
  duration: 2000,
  align: "center",
  interruptable: false
});

document.getElementById("btn2").addEventListener("click", () => {
  flick2.next().catch(() => {});
});`,d=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <!-- interruptable: true (\u{AE30}\u{BCF8}\u{AC12}) -->
  <div class="demo-container">
    <div class="demo-label">interruptable: true (\u{AE30}\u{BCF8}\u{AC12} \u{2014} \u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158} \u{C911} \u{B4DC}\u{B798}\u{ADF8} \u{AC00}\u{B2A5})</div>
    <div id="flick-interruptable" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </div>
    </div>
    <div class="controls">
      <button id="btn1">Next (2\u{CD08} \u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158} \u{C2DC}\u{C791})</button>
    </div>
    <div class="demo-hint">\u{BC84}\u{D2BC} \u{D074}\u{B9AD} \u{D6C4} \u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158} \u{B3C4}\u{C911} \u{B4DC}\u{B798}\u{ADF8}\u{D558}\u{BA74} \u{C989}\u{C2DC} \u{BC18}\u{C751}\u{D569}\u{B2C8}\u{B2E4}</div>
  </div>

  <!-- interruptable: false -->
  <div class="demo-container">
    <div class="demo-label">interruptable: false (\u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158} \u{C644}\u{B8CC} \u{C804} \u{B4DC}\u{B798}\u{ADF8} \u{BB34}\u{C2DC})</div>
    <div id="flick-not-interruptable" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </div>
    </div>
    <div class="controls">
      <button id="btn2">Next (2\u{CD08} \u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158} \u{C2DC}\u{C791})</button>
    </div>
    <div class="demo-hint">\u{BC84}\u{D2BC} \u{D074}\u{B9AD} \u{D6C4} \u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158}\u{C774} \u{B05D}\u{B0A0} \u{B54C}\u{AE4C}\u{C9C0} \u{B4DC}\u{B798}\u{ADF8}\u{AC00} \u{BB34}\u{C2DC}\u{B429}\u{B2C8}\u{B2E4}</div>
  </div>

</body>
</html>`,o=(0,t.jsx)(a.A,{template:"vanilla",code:s,html:d,css:r});return(0,t.jsx)(c.A,{options:{},panels:[],react:i,vue3:l,js:o})},o={title:"Interruptable",id:"interruptable",slug:"/demos/basic/interruptable",sidebar_position:18,description:"interruptable \uC635\uC158\uC73C\uB85C \uC560\uB2C8\uBA54\uC774\uC158 \uC9C4\uD589 \uC911 \uC0AC\uC6A9\uC790 \uC785\uB825 \uD5C8\uC6A9 \uC5EC\uBD80\uB97C \uC124\uC815\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","interruptable","animation","interrupt","\uC560\uB2C8\uBA54\uC774\uC158","\uC911\uB2E8","\uC778\uD130\uB7FD\uD2B8"]},p="Interruptable",g={},h=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uAC12\uBCC4 \uBE44\uAD50",id:"\uAC12\uBCC4-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"interruptable \uB3D9\uC791 \uC6D0\uB9AC",id:"interruptable-\uB3D9\uC791-\uC6D0\uB9AC",level:3},{value:"changeOnHold",id:"changeonhold",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function u(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"interruptable",children:"Interruptable"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#interruptable",children:(0,t.jsx)(i.code,{children:"interruptable"})})," \uC635\uC158\uC73C\uB85C \uD328\uB110 \uC560\uB2C8\uBA54\uC774\uC158\uC774 \uC9C4\uD589 \uC911\uC77C \uB54C \uC0AC\uC6A9\uC790 \uB4DC\uB798\uADF8 \uC785\uB825\uC744 \uD5C8\uC6A9\uD560\uC9C0 \uC124\uC815\uD569\uB2C8\uB2E4."]}),"\n",(0,t.jsx)(i.p,{children:"\uBC84\uD2BC\uC744 \uB20C\uB7EC 2\uCD08\uC9DC\uB9AC \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uC2DC\uC791\uD55C \uB4A4, \uB3C4\uC911\uC5D0 \uB4DC\uB798\uADF8\uD574 \uCC28\uC774\uB97C \uD655\uC778\uD558\uC138\uC694."}),"\n",(0,t.jsx)(d,{}),"\n",(0,t.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,t.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\uC635\uC158"}),(0,t.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,t.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,t.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#interruptable",children:(0,t.jsx)(i.code,{children:"interruptable"})})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"boolean"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"true"})}),(0,t.jsx)(i.td,{children:"\uC560\uB2C8\uBA54\uC774\uC158 \uC911 \uC0AC\uC6A9\uC790 \uC785\uB825 \uD5C8\uC6A9 \uC5EC\uBD80"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#changeonhold",children:(0,t.jsx)(i.code,{children:"changeOnHold"})})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"boolean"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"false"})}),(0,t.jsx)(i.td,{children:"\uB4DC\uB798\uADF8 \uC911 \uD328\uB110 \uC778\uB371\uC2A4\uB97C \uC989\uC2DC \uBCC0\uACBD\uD560\uC9C0 \uC5EC\uBD80"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"\uAC12\uBCC4-\uBE44\uAD50",children:"\uAC12\uBCC4 \uBE44\uAD50"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\uAC12"}),(0,t.jsx)(i.th,{children:"\uB3D9\uC791"}),(0,t.jsx)(i.th,{children:"\uC801\uD569\uD55C \uC0C1\uD669"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"true"})}),(0,t.jsx)(i.td,{children:"\uC560\uB2C8\uBA54\uC774\uC158 \uC911 \uB4DC\uB798\uADF8\uD558\uBA74 \uC989\uC2DC \uBC18\uC751 (\uAE30\uBCF8\uAC12)"}),(0,t.jsx)(i.td,{children:"\uC77C\uBC18\uC801\uC778 \uCE90\uB7EC\uC140, \uBE60\uB978 \uD0D0\uC0C9"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"false"})}),(0,t.jsx)(i.td,{children:"\uC560\uB2C8\uBA54\uC774\uC158\uC774 \uB05D\uB0A0 \uB54C\uAE4C\uC9C0 \uB4DC\uB798\uADF8 \uBB34\uC2DC"}),(0,t.jsx)(i.td,{children:"\uD504\uB808\uC820\uD14C\uC774\uC158, \uC815\uD655\uD55C \uC560\uB2C8\uBA54\uC774\uC158 \uC644\uB8CC \uBCF4\uC7A5"})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,t.jsx)(i.h3,{id:"interruptable-\uB3D9\uC791-\uC6D0\uB9AC",children:"interruptable \uB3D9\uC791 \uC6D0\uB9AC"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"interruptable: true"}),"(\uAE30\uBCF8\uAC12)\uC77C \uB54C Flicking\uC740 \uC560\uB2C8\uBA54\uC774\uC158 \uC911\uC5D0\uB3C4 \uC0AC\uC6A9\uC790 \uC785\uB825\uC744 \uBC1B\uC544 \uC989\uC2DC \uC0C8 \uB4DC\uB798\uADF8\uB85C \uC804\uD658\uD569\uB2C8\uB2E4. \uBC84\uD2BC\uC73C\uB85C \uD328\uB110\uC744 \uC774\uB3D9\uC2DC\uD0A4\uB294 \uB3C4\uC911 \uC0AC\uC6A9\uC790\uAC00 \uB4DC\uB798\uADF8\uD558\uBA74 \uADF8 \uC2DC\uC810\uC758 \uC704\uCE58\uC5D0\uC11C \uC0C8 \uB4DC\uB798\uADF8\uAC00 \uC2DC\uC791\uB429\uB2C8\uB2E4."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"interruptable: false"}),"\uC774\uBA74 \uC560\uB2C8\uBA54\uC774\uC158\uC774 \uC644\uC804\uD788 \uB05D\uB098\uC57C \uB2E4\uC74C \uC785\uB825\uC744 \uBC1B\uC2B5\uB2C8\uB2E4. \uC2AC\uB77C\uC774\uB4DC\uC1FC\uB098 \uD504\uB808\uC820\uD14C\uC774\uC158\uCC98\uB7FC \uAC01 \uC804\uD658 \uD6A8\uACFC\uB97C \uC628\uC804\uD788 \uBCF4\uC5EC\uC8FC\uC5B4\uC57C \uD560 \uB54C \uC720\uC6A9\uD569\uB2C8\uB2E4."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:'// \uAE30\uBCF8\uAC12: \uC560\uB2C8\uBA54\uC774\uC158 \uC911 \uB4DC\uB798\uADF8 \uAC00\uB2A5\nconst flicking = new Flicking("#el", {\n  interruptable: true\n});\n\n// \uC560\uB2C8\uBA54\uC774\uC158 \uC644\uB8CC \uD6C4 \uC785\uB825 \uD5C8\uC6A9\nconst flicking = new Flicking("#el", {\n  interruptable: false,\n  duration: 1000\n});\n'})}),"\n",(0,t.jsx)(i.h3,{id:"changeonhold",children:"changeOnHold"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"changeOnHold"}),' \uC635\uC158\uC740 \uC0AC\uC6A9\uC790\uAC00 \uB4DC\uB798\uADF8 \uC911 \uBA48\uCDB0\uC11C \uD328\uB110\uC744 "\uC7A1\uACE0 \uC788\uC744 \uB54C" \uD604\uC7AC \uD328\uB110 \uC778\uB371\uC2A4\uB97C \uC989\uC2DC \uAC31\uC2E0\uD560\uC9C0 \uACB0\uC815\uD569\uB2C8\uB2E4. \uAE30\uBCF8\uAC12 ',(0,t.jsx)(i.code,{children:"false"}),"\uB85C \uB450\uBA74 \uB9B4\uB9AC\uC988 \uD6C4 \uC2A4\uB0C5\uC774 \uC644\uB8CC\uB420 \uB54C \uC778\uB371\uC2A4\uAC00 \uBCC0\uACBD\uB429\uB2C8\uB2E4."]}),"\n",(0,t.jsx)(i.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,t.jsx)(i.admonition,{title:"\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"interruptable: true"})," (\uAE30\uBCF8\uAC12): \uC77C\uBC18 \uC774\uBBF8\uC9C0 \uAC24\uB7EC\uB9AC, \uC0C1\uD488 \uBAA9\uB85D \uB4F1 \uC0AC\uC6A9\uC790\uAC00 \uC790\uC720\uB86D\uAC8C \uD0D0\uC0C9\uD558\uB294 \uCE90\uB7EC\uC140"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"interruptable: false"}),": \uD504\uB808\uC820\uD14C\uC774\uC158 \uC2AC\uB77C\uC774\uB4DC, \uC628\uBCF4\uB529 \uD654\uBA74\uCC98\uB7FC \uAC01 \uC2AC\uB77C\uC774\uB4DC \uC804\uD658 \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uC644\uC804\uD788 \uBCF4\uC5EC\uC8FC\uC5B4\uC57C \uD558\uB294 \uACBD\uC6B0"]}),"\n"]})}),"\n",(0,t.jsx)(i.admonition,{title:"\uC8FC\uC758",type:"warning",children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"interruptable: false"}),"\uC77C \uB54C \uAE34 ",(0,t.jsx)(i.code,{children:"duration"}),"\uC744 \uC124\uC815\uD558\uBA74 \uC0AC\uC6A9\uC790\uAC00 \uC785\uB825\uC744 \uAE30\uB2E4\uB9AC\uBA70 \uBD88\uD3B8\uD568\uC744 \uB290\uB084 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD544\uC694\uD55C \uACBD\uC6B0\uC5D0\uB9CC \uC0AC\uC6A9\uD558\uC138\uC694."]})}),"\n",(0,t.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,t.jsx)(i.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#duration",children:(0,t.jsx)(i.code,{children:"duration"})}),": \uC560\uB2C8\uBA54\uC774\uC158 \uC9C0\uC18D \uC2DC\uAC04"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#changeonhold",children:(0,t.jsx)(i.code,{children:"changeOnHold"})}),": \uB4DC\uB798\uADF8 \uC911 \uD328\uB110 \uC778\uB371\uC2A4 \uC989\uC2DC \uAC31\uC2E0 \uC5EC\uBD80"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"./duration",children:"Duration"}),": \uC560\uB2C8\uBA54\uC774\uC158 \uC9C0\uC18D \uC2DC\uAC04 \uC124\uC815"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"./easing",children:"Easing"}),": \uC560\uB2C8\uBA54\uC774\uC158 \uAC00\uC18D\uB3C4 \uACE1\uC120"]}),"\n"]})]})}function m(e={}){let{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},27449(e,i,n){n.d(i,{A:()=>o});var l=n(65723),t=n(19612);n(22155);let s="^4.11.4",a={react:{"@egjs/react-flicking":s,"@egjs/flicking":s},vue3:{"@egjs/vue3-flicking":s,"@egjs/flicking":s},vanilla:{"@egjs/flicking":s}},c=`<!DOCTYPE html>
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
`;function o({code:e,html:i,template:n="react",dependencies:s={},files:o={},css:p=""}){var g;let h,u,m;return(0,l.jsx)(t.OZ,{template:"vue3"===n?"vue":"vanilla"===n?"vanilla":"react",files:(m={"/styles.css":{code:u=p?`${d}
${p}`:d},...o},"react"===n?{"/App.tsx":{code:e},"/index.js":{code:r,hidden:!0},...m}:"vue3"===n?{"/src/App.vue":{code:e},...m}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),n=[],l=[],t=!1;for(let e of i)t?l.push(e):e.trimStart().startsWith("import ")||""===e.trim()?n.push(e.replace('"../styles.css"','"./styles.css"')):(t=!0,l.push(e));for(;l.length>0&&""===l[l.length-1].trim();)l.pop();return[...n,"","const _run = () => {",...l.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:u},"/index.html":{code:(h="<style>.flicking-viewport{opacity:0}</style>",(g=i||c).includes("</head>")?g.replace("</head>",`${h}
</head>`):h+g)},...o}),customSetup:{dependencies:{...a[n],...s}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===n?["/App.tsx","/styles.css"]:"vue3"===n?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===n?"/App.tsx":"vue3"===n?"/src/App.vue":"/src/index.js"}})}},72722(e,i,n){n.d(i,{A:()=>f});var l=n(65723),t=n(34622),s=n(7210),a=n(78863);n(22155);let c=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,r=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",d=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${c(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(i=>`${i}: ${c(e[i],"'")}`).join(", ")}`,p=(e,{prefix:i,includeFlicking:n=!0}={})=>{let l=n?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&l.push(...e),`${l.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},g=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,h=({options:e,panels:i,events:n={},methods:s={},plugins:a=[],siblings:o=[],imports:g=[],viewportClass:h=""})=>{let u=e=>`${Object.keys(e).map(i=>`${i}: ${c(e[i])}`).join(",\n  ")}`,m=Object.keys(s).map(e=>`const ${e} = ${s[e]};
`).join(""),f=e?`const flicking = new Flicking("#flick", {
  ${u(e)}
});

`:'const flicking = new Flicking("#flick")',v=a.length>0?`flicking.addPlugins(${a.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?u(e[1]):e[1]??""}
}`:""})`)});`:"",x=[...a.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],j=Object.keys(n).map(e=>{let i=n[e];return`flicking.on("${e}", ${i})
`}).join(""),b=i.filter(e=>e.isSlot);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${h&&` ${h}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${b.length?`
  ${b.map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,l.jsx)(t.A,{className:"language-js",title:"js",children:`${p(x)}

${m}${f}${v}${j}`.trim()})]})},u=({options:e,panels:i,events:n={},methods:s={},plugins:a,siblings:c,imports:o=[],viewportClass:h=""})=>{let u=a?`
  private _plugins = [${g(a)}];
`:"",m=i.filter(e=>e.isSlot),f=[["{ Component }","react"],[m.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],v=Object.keys(s).map(e=>`
const ${e} = ${s[e]};`).join("");v&&(v+="\n"),a&&f.push([`{ ${a.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),f.push(...o);let x=m.length?`
      <ViewportSlot>
        ${m.map(e=>`<${e.tag}${r(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",j=Object.keys(n).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${n[e]}}`).join("");return(0,l.jsx)(t.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(f,{includeFlicking:!1})}
${v}
export default class DemoComponent extends Component {${u}
  public render() {
    return ${c?"<>\n    ":""}<Flicking${h&&` className="${h}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${a?" plugins={this._plugins}":""}${j}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${x}
    </Flicking>${c?`
    ${c.map(e=>`<${e.tag}${r(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},m=({options:e,panels:i,events:n={},methods:s={},plugins:a,siblings:c=[],imports:h=[],viewportClass:u=""})=>{let m=o(e),f=i.filter(e=>e.isSlot),v=a?`,
  data() {
    return {
      plugins: [${g(a)}]
    }
  }`:"",x=f.length?`
  <template #viewport>
    ${f.map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",j=[...(a??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...h],b=Object.keys(s),k=b.length>0?`,
  methods: {
    ${b.map(e=>`${e}: ${s[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",$=Object.keys(n).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${n[e]}"`).join("");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.A,{className:"language-html",title:"template",children:`<Flicking${u&&` class="${u}"`}${e?` :options="{ ${m} }"`:""}${a?' :plugins="plugins"':""}${$}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}${x}
</Flicking>${c?`
${c.map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,l.jsx)(t.A,{className:"language-js",title:"script",children:`${p(j,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${v}${k}
}`})]})},f=({js:e,react:i,vue3:n,style:c,...r})=>(0,l.jsxs)("div",{children:[(0,l.jsxs)(a.A,{groupId:"cfc",defaultValue:"js",children:[(0,l.jsx)(s.A,{value:"react",label:"React",children:i||(0,l.jsx)(u,{...r})}),(0,l.jsx)(s.A,{value:"vue3",label:"Vue@3",children:n||(0,l.jsx)(m,{...r})}),(0,l.jsx)(s.A,{value:"js",label:"JavaScript",children:e||(0,l.jsx)(h,{...r})})]}),c&&(0,l.jsx)(t.A,{className:"language-css",title:"style",children:`${c}`})]})}}]);