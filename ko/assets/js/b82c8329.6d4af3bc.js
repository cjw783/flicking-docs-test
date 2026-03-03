"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["2877"],{42117(e,i,l){l.r(i),l.d(i,{metadata:()=>n,default:()=>j,frontMatter:()=>p,contentTitle:()=>o,toc:()=>v,assets:()=>g});var n=JSON.parse('{"id":"demos/basic/panels-per-view","title":"Panels Per View","description":"panelsPerView \uC635\uC158\uC73C\uB85C viewport\uC5D0 \uD45C\uC2DC\uB420 \uD328\uB110 \uC218\uB97C \uC9C0\uC815\uD558\uACE0 \uC790\uB3D9 \uD06C\uAE30 \uC870\uC815\uC744 \uD65C\uC131\uD654\uD569\uB2C8\uB2E4","source":"@site/docs/demos/basic/panels-per-view.mdx","sourceDirName":"demos/basic","slug":"/demos/basic/panels-per-view","permalink":"/flicking-docs-test/ko/docs/demos/basic/panels-per-view","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/basic/panels-per-view.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Panels Per View","id":"panels-per-view","slug":"/demos/basic/panels-per-view","sidebar_position":6,"description":"panelsPerView \uC635\uC158\uC73C\uB85C viewport\uC5D0 \uD45C\uC2DC\uB420 \uD328\uB110 \uC218\uB97C \uC9C0\uC815\uD558\uACE0 \uC790\uB3D9 \uD06C\uAE30 \uC870\uC815\uC744 \uD65C\uC131\uD654\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","panelsPerView","responsive","\uBC18\uC751\uD615","\uD328\uB110\uC218"]},"sidebar":"demosSidebar","previous":{"title":"Vertical","permalink":"/flicking-docs-test/ko/docs/demos/basic/vertical"},"next":{"title":"Bound","permalink":"/flicking-docs-test/ko/docs/demos/basic/bound"}}'),s=l(65723),a=l(54187),c=l(27449),r=l(72722);l(22155);let t=`
.flicking-panel {
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
/* panelsPerView: -1 \u{C77C} \u{B54C} \u{C218}\u{B3D9} \u{D06C}\u{AE30} \u{C9C0}\u{C815} */
.manual-size .flicking-panel {
  width: 150px;
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
`,d=()=>{let e=`import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "./styles.css";

export default function App() {
  return (
    <div>
      {/* panelsPerView: -1 (\u{AE30}\u{BCF8}\u{AC12}, \u{C218}\u{B3D9} \u{D06C}\u{AE30}) */}
      <div className="demo-container">
        <div className="demo-label">panelsPerView: -1 (\u{AE30}\u{BCF8}\u{AC12}, \u{D328}\u{B110} \u{D06C}\u{AE30} \u{C218}\u{B3D9} \u{C9C0}\u{C815})</div>
        <Flicking className="manual-size" panelsPerView={-1} align="prev">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>

      {/* panelsPerView: 3 */}
      <div className="demo-container">
        <div className="demo-label">panelsPerView: 3 (\u{C790}\u{B3D9}\u{C73C}\u{B85C} 3\u{AC1C}\u{C529} \u{BCF4}\u{C774}\u{B3C4}\u{B85D} \u{D06C}\u{AE30} \u{C870}\u{C815})</div>
        <Flicking panelsPerView={3} align="prev">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>

      {/* panelsPerView: 1 */}
      <div className="demo-container">
        <div className="demo-label">panelsPerView: 1 (\u{D480}\u{C2A4}\u{D06C}\u{B9B0} \u{C2AC}\u{B77C}\u{C774}\u{B354})</div>
        <Flicking panelsPerView={1} align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>
    </div>
  );
}`,i=(0,s.jsx)(c.A,{template:"react",code:e,css:t}),l=`<template>
  <div>
    <!-- panelsPerView: -1 (\u{AE30}\u{BCF8}\u{AC12}, \u{C218}\u{B3D9} \u{D06C}\u{AE30}) -->
    <div class="demo-container">
      <div class="demo-label">panelsPerView: -1 (\u{AE30}\u{BCF8}\u{AC12}, \u{D328}\u{B110} \u{D06C}\u{AE30} \u{C218}\u{B3D9} \u{C9C0}\u{C815})</div>
      <Flicking class="manual-size" :options="{ panelsPerView: -1, align: 'prev' }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
    </div>

    <!-- panelsPerView: 3 -->
    <div class="demo-container">
      <div class="demo-label">panelsPerView: 3 (\u{C790}\u{B3D9}\u{C73C}\u{B85C} 3\u{AC1C}\u{C529} \u{BCF4}\u{C774}\u{B3C4}\u{B85D} \u{D06C}\u{AE30} \u{C870}\u{C815})</div>
      <Flicking :options="{ panelsPerView: 3, align: 'prev' }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
    </div>

    <!-- panelsPerView: 1 -->
    <div class="demo-container">
      <div class="demo-label">panelsPerView: 1 (\u{D480}\u{C2A4}\u{D06C}\u{B9B0} \u{C2AC}\u{B77C}\u{C774}\u{B354})</div>
      <Flicking :options="{ panelsPerView: 1, align: 'center' }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
    </div>
  </div>
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
.manual-size .flicking-panel { width: 150px; }
.panel-1 { background: #3e8ed0; }
.panel-2 { background: #00d1b2; }
.panel-3 { background: #f14668; }
.panel-4 { background: #ffe08a; color: #333; }
.panel-5 { background: #48c78e; }
.demo-container { margin-bottom: 24px; }
.demo-label { font-weight: bold; margin-bottom: 8px; color: #666; }
</style>`,n=(0,s.jsx)(c.A,{template:"vue3",code:l,css:t}),a=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

// panelsPerView: -1 (\u{AE30}\u{BCF8}\u{AC12})
new Flicking("#flick-manual", {
  panelsPerView: -1,
  align: "prev"
});

// panelsPerView: 3
new Flicking("#flick-three", {
  panelsPerView: 3,
  align: "prev"
});

// panelsPerView: 1
new Flicking("#flick-one", {
  panelsPerView: 1,
  align: "center"
});`,d=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <!-- panelsPerView: -1 (\u{AE30}\u{BCF8}\u{AC12}) -->
  <div class="demo-container">
    <div class="demo-label">panelsPerView: -1 (\u{AE30}\u{BCF8}\u{AC12}, \u{D328}\u{B110} \u{D06C}\u{AE30} \u{C218}\u{B3D9} \u{C9C0}\u{C815})</div>
    <div id="flick-manual" class="flicking-viewport manual-size">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </div>
    </div>
  </div>

  <!-- panelsPerView: 3 -->
  <div class="demo-container">
    <div class="demo-label">panelsPerView: 3 (\u{C790}\u{B3D9}\u{C73C}\u{B85C} 3\u{AC1C}\u{C529} \u{BCF4}\u{C774}\u{B3C4}\u{B85D} \u{D06C}\u{AE30} \u{C870}\u{C815})</div>
    <div id="flick-three" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </div>
    </div>
  </div>

  <!-- panelsPerView: 1 -->
  <div class="demo-container">
    <div class="demo-label">panelsPerView: 1 (\u{D480}\u{C2A4}\u{D06C}\u{B9B0} \u{C2AC}\u{B77C}\u{C774}\u{B354})</div>
    <div id="flick-one" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </div>
    </div>
  </div>

</body>
</html>`,p=(0,s.jsx)(c.A,{template:"vanilla",code:a,html:d,css:t});return(0,s.jsx)(r.A,{options:{},panels:[],react:i,vue3:n,js:p})},p={title:"Panels Per View",id:"panels-per-view",slug:"/demos/basic/panels-per-view",sidebar_position:6,description:"panelsPerView \uC635\uC158\uC73C\uB85C viewport\uC5D0 \uD45C\uC2DC\uB420 \uD328\uB110 \uC218\uB97C \uC9C0\uC815\uD558\uACE0 \uC790\uB3D9 \uD06C\uAE30 \uC870\uC815\uC744 \uD65C\uC131\uD654\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","panelsPerView","responsive","\uBC18\uC751\uD615","\uD328\uB110\uC218"]},o="Panels Per View",g={},v=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uAC12\uBCC4 \uBE44\uAD50",id:"\uAC12\uBCC4-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"panelsPerView: -1 \uC0C1\uC138",id:"panelsperview--1-\uC0C1\uC138",level:3},{value:"panelsPerView: \uC591\uC218 \uC0C1\uC138",id:"panelsperview-\uC591\uC218-\uC0C1\uC138",level:3},{value:"noPanelStyleOverride \uC0C1\uC138",id:"nopanelstyleoverride-\uC0C1\uC138",level:3},{value:"\uC5F0\uAD00 \uC635\uC158",id:"\uC5F0\uAD00-\uC635\uC158",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function h(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"panels-per-view",children:"Panels Per View"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#panelsperview",children:(0,s.jsx)(i.code,{children:"panelsPerView"})})," \uC635\uC158\uC73C\uB85C viewport\uC5D0 \uB3D9\uC2DC\uC5D0 \uD45C\uC2DC\uB420 \uD328\uB110 \uC218\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4. \uC591\uC218 \uAC12\uC744 \uC124\uC815\uD558\uBA74 \uD328\uB110 \uD06C\uAE30\uAC00 \uC790\uB3D9\uC73C\uB85C \uC870\uC815\uB429\uB2C8\uB2E4."]}),"\n",(0,s.jsx)(d,{}),"\n",(0,s.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,s.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\uC635\uC158"}),(0,s.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,s.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,s.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#panelsperview",children:(0,s.jsx)(i.code,{children:"panelsPerView"})})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"number"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"-1"})}),(0,s.jsx)(i.td,{children:"viewport\uC5D0 \uD45C\uC2DC\uB420 \uD328\uB110 \uC218 (-1: \uC790\uB3D9 \uACC4\uC0B0 \uC548 \uD568)"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#nopanelstyleoverride",children:(0,s.jsx)(i.code,{children:"noPanelStyleOverride"})})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"boolean"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"false"})}),(0,s.jsx)(i.td,{children:"\uD328\uB110 \uD06C\uAE30 \uC790\uB3D9 \uC870\uC815 \uBE44\uD65C\uC131\uD654"})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"\uAC12\uBCC4-\uBE44\uAD50",children:"\uAC12\uBCC4 \uBE44\uAD50"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\uAC12"}),(0,s.jsx)(i.th,{children:"\uB3D9\uC791"}),(0,s.jsx)(i.th,{children:"\uC801\uD569\uD55C \uC0C1\uD669"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"-1"})}),(0,s.jsx)(i.td,{children:"\uD328\uB110 \uD06C\uAE30 \uBCC0\uACBD \uC548 \uD568. CSS\uB85C \uC218\uB3D9 \uC9C0\uC815 \uD544\uC694"}),(0,s.jsx)(i.td,{children:"\uB2E4\uC591\uD55C \uD06C\uAE30\uC758 \uD328\uB110, \uCEE4\uC2A4\uD140 \uB808\uC774\uC544\uC6C3"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"1"})}),(0,s.jsx)(i.td,{children:"\uD328\uB110\uC774 viewport \uC804\uCCB4 \uCC44\uC6C0"}),(0,s.jsx)(i.td,{children:"\uD480\uC2A4\uD06C\uB9B0 \uC2AC\uB77C\uC774\uB354, \uD788\uC5B4\uB85C \uBC30\uB108"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"3"})}),(0,s.jsx)(i.td,{children:"\uC815\uD655\uD788 3\uAC1C \uD328\uB110\uC774 \uBCF4\uC774\uB3C4\uB85D resize"}),(0,s.jsx)(i.td,{children:"\uC81C\uD488 \uCE74\uB4DC, \uC378\uB124\uC77C \uAC24\uB7EC\uB9AC"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"n"})}),(0,s.jsx)(i.td,{children:"\uC815\uD655\uD788 n\uAC1C \uD328\uB110\uC774 \uBCF4\uC774\uB3C4\uB85D resize"}),(0,s.jsx)(i.td,{children:"\uBC18\uC751\uD615 \uADF8\uB9AC\uB4DC \uCE90\uB7EC\uC140"})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,s.jsx)(i.h3,{id:"panelsperview--1-\uC0C1\uC138",children:"panelsPerView: -1 \uC0C1\uC138"}),"\n",(0,s.jsx)(i.p,{children:"\uAE30\uBCF8\uAC12\uC785\uB2C8\uB2E4. \uD328\uB110 \uD06C\uAE30\uB97C \uBCC0\uACBD\uD558\uC9C0 \uC54A\uC73C\uBA70, CSS\uB85C \uC9C1\uC811 \uD328\uB110 \uD06C\uAE30\uB97C \uC9C0\uC815\uD574\uC57C \uD569\uB2C8\uB2E4. \uB2E4\uC591\uD55C \uD06C\uAE30\uC758 \uD328\uB110\uC744 \uD63C\uD569\uD558\uAC70\uB098 \uCEE4\uC2A4\uD140 \uB808\uC774\uC544\uC6C3\uC774 \uD544\uC694\uD560 \uB54C \uC0AC\uC6A9\uD569\uB2C8\uB2E4."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-css",children:"/* panelsPerView: -1\uC77C \uB54C \uD544\uC218 */\n.flicking-panel {\n  width: 150px; /* \uC218\uB3D9 \uC9C0\uC815 */\n}\n"})}),"\n",(0,s.jsx)(i.h3,{id:"panelsperview-\uC591\uC218-\uC0C1\uC138",children:"panelsPerView: \uC591\uC218 \uC0C1\uC138"}),"\n",(0,s.jsx)(i.p,{children:"\uC9C0\uC815\uD55C \uC218\uB9CC\uD07C \uD328\uB110\uC774 viewport\uC5D0 \uBCF4\uC774\uB3C4\uB85D \uD328\uB110 \uD06C\uAE30\uAC00 \uC790\uB3D9\uC73C\uB85C \uC870\uC815\uB429\uB2C8\uB2E4. CSS\uC5D0\uC11C \uD328\uB110 width\uB97C \uC9C0\uC815\uD560 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",children:'// viewport\uC5D0 \uC815\uD655\uD788 3\uAC1C \uD328\uB110 \uD45C\uC2DC\nnew Flicking("#el", { panelsPerView: 3 });\n'})}),"\n",(0,s.jsx)(i.h3,{id:"nopanelstyleoverride-\uC0C1\uC138",children:"noPanelStyleOverride \uC0C1\uC138"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"panelsPerView"}),"\uAC00 \uD65C\uC131\uD654\uB418\uC5B4 \uC788\uC744 \uB54C \uD328\uB110\uC758 width/height \uC2A4\uD0C0\uC77C \uC218\uC815\uC744 \uBC29\uC9C0\uD569\uB2C8\uB2E4. \uBAA8\uB4E0 \uD328\uB110 \uD06C\uAE30\uB97C \uC9C1\uC811 \uAD00\uB9AC\uD560 \uB54C \uC131\uB2A5 \uCD5C\uC801\uD654 \uC6A9\uB3C4\uB85C \uC0AC\uC6A9\uD569\uB2C8\uB2E4."]}),"\n",(0,s.jsx)(i.h3,{id:"\uC5F0\uAD00-\uC635\uC158",children:"\uC5F0\uAD00 \uC635\uC158"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"align\uACFC\uC758 \uAD00\uACC4"}),": panelsPerView\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD560 \uB54C ",(0,s.jsx)(i.code,{children:'align: "prev"'}),"\uAC00 \uC77C\uBC18\uC801\uC785\uB2C8\uB2E4. \uC67C\uCABD \uC815\uB82C\uB85C \uD328\uB110\uC774 \uC21C\uCC28\uC801\uC73C\uB85C \uBCF4\uC785\uB2C8\uB2E4."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"virtual\uACFC\uC758 \uAD00\uACC4"}),": ",(0,s.jsx)(i.code,{children:"virtual"})," \uC635\uC158 \uC0AC\uC6A9 \uC2DC ",(0,s.jsx)(i.code,{children:"panelsPerView > 0"}),"\uC774 \uD544\uC218\uC785\uB2C8\uB2E4. -1\uC774\uBA74 virtual\uC774 \uBB34\uC2DC\uB429\uB2C8\uB2E4."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"circular\uC640\uC758 \uAD00\uACC4"}),": panelsPerView \uC124\uC815\uC740 circular \uD65C\uC131\uD654 \uC870\uAC74(\uC804\uCCB4 \uD328\uB110 \uD06C\uAE30 \u2265 viewport)\uC5D0 \uC601\uD5A5\uC744 \uC904 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,s.jsx)(i.admonition,{title:"\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"panelsPerView: -1"}),": \uB2E4\uC591\uD55C \uD06C\uAE30\uC758 \uCE74\uB4DC, \uD0DC\uADF8 \uB9AC\uC2A4\uD2B8, \uCEE4\uC2A4\uD140 \uB808\uC774\uC544\uC6C3"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"panelsPerView: 1"}),": \uD788\uC5B4\uB85C \uBC30\uB108, \uD480\uC2A4\uD06C\uB9B0 \uC628\uBCF4\uB529, \uC774\uBBF8\uC9C0 \uBDF0\uC5B4"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"panelsPerView: 3~5"}),": \uC81C\uD488 \uCE90\uB7EC\uC140, \uC378\uB124\uC77C \uAC24\uB7EC\uB9AC, \uD300 \uBA64\uBC84 \uC18C\uAC1C"]}),"\n"]})}),"\n",(0,s.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,s.jsx)(i.admonition,{title:"CSS \uCDA9\uB3CC \uC8FC\uC758",type:"warning",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"panelsPerView"}),"\uC5D0 \uC591\uC218 \uAC12\uC744 \uC124\uC815\uD558\uBA74 Flicking\uC774 \uD328\uB110 width\uB97C \uC790\uB3D9\uC73C\uB85C \uACC4\uC0B0\uD569\uB2C8\uB2E4. CSS\uC5D0\uC11C \uBCC4\uB3C4\uB85C width\uB97C \uC9C0\uC815\uD558\uBA74 \uCDA9\uB3CC\uC774 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]})}),"\n",(0,s.jsx)(i.admonition,{title:"virtual \uC0AC\uC6A9 \uC2DC \uD544\uC218",type:"warning",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"virtual"})," \uC635\uC158\uC744 \uC0AC\uC6A9\uD558\uB824\uBA74 \uBC18\uB4DC\uC2DC ",(0,s.jsx)(i.code,{children:"panelsPerView > 0"}),"\uC73C\uB85C \uC124\uC815\uD574\uC57C \uD569\uB2C8\uB2E4. -1\uC774\uBA74 virtual\uC774 \uB3D9\uC791\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."]})}),"\n",(0,s.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,s.jsx)(i.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#nopanelstyleoverride",children:(0,s.jsx)(i.code,{children:"noPanelStyleOverride"})}),": \uD328\uB110 \uC2A4\uD0C0\uC77C \uC790\uB3D9 \uC218\uC815 \uBC29\uC9C0"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#virtual",children:(0,s.jsx)(i.code,{children:"virtual"})}),": \uAC00\uC0C1 \uC2A4\uD06C\uB864 (panelsPerView \uD544\uC218)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#align",children:(0,s.jsx)(i.code,{children:"align"})}),": \uD328\uB110 \uC815\uB82C \uBC29\uC2DD"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../advanced/virtual-scroll",children:"Virtual Scroll"}),": \uB300\uB7C9 \uD328\uB110 \uCD5C\uC801\uD654 (panelsPerView \uD544\uC218)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"./alignment",children:"Alignment"}),": \uC815\uB82C \uC635\uC158"]}),"\n"]})]})}function j(e={}){let{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},27449(e,i,l){l.d(i,{A:()=>p});var n=l(65723),s=l(19612);l(22155);let a="^4.11.4",c={react:{"@egjs/react-flicking":a,"@egjs/flicking":a},vue3:{"@egjs/vue3-flicking":a,"@egjs/flicking":a},vanilla:{"@egjs/flicking":a}},r=`<!DOCTYPE html>
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
</html>`,t=`import { StrictMode } from "react";
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
`;function p({code:e,html:i,template:l="react",dependencies:a={},files:p={},css:o=""}){var g;let v,h,j;return(0,n.jsx)(s.OZ,{template:"vue3"===l?"vue":"vanilla"===l?"vanilla":"react",files:(j={"/styles.css":{code:h=o?`${d}
${o}`:d},...p},"react"===l?{"/App.tsx":{code:e},"/index.js":{code:t,hidden:!0},...j}:"vue3"===l?{"/src/App.vue":{code:e},...j}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),l=[],n=[],s=!1;for(let e of i)s?n.push(e):e.trimStart().startsWith("import ")||""===e.trim()?l.push(e.replace('"../styles.css"','"./styles.css"')):(s=!0,n.push(e));for(;n.length>0&&""===n[n.length-1].trim();)n.pop();return[...l,"","const _run = () => {",...n.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:h},"/index.html":{code:(v="<style>.flicking-viewport{opacity:0}</style>",(g=i||r).includes("</head>")?g.replace("</head>",`${v}
</head>`):v+g)},...p}),customSetup:{dependencies:{...c[l],...a}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===l?["/App.tsx","/styles.css"]:"vue3"===l?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===l?"/App.tsx":"vue3"===l?"/src/App.vue":"/src/index.js"}})}},72722(e,i,l){l.d(i,{A:()=>m});var n=l(65723),s=l(34622),a=l(7210),c=l(78863);l(22155);let r=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,t=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",d=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${r(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",p=e=>`${Object.keys(e).map(i=>`${i}: ${r(e[i],"'")}`).join(", ")}`,o=(e,{prefix:i,includeFlicking:l=!0}={})=>{let n=l?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&n.push(...e),`${n.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},g=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${p(e[1])} }`:e[1]??""}`).join(", ")})`,v=({options:e,panels:i,events:l={},methods:a={},plugins:c=[],siblings:p=[],imports:g=[],viewportClass:v=""})=>{let h=e=>`${Object.keys(e).map(i=>`${i}: ${r(e[i])}`).join(",\n  ")}`,j=Object.keys(a).map(e=>`const ${e} = ${a[e]};
`).join(""),m=e?`const flicking = new Flicking("#flick", {
  ${h(e)}
});

`:'const flicking = new Flicking("#flick")',x=c.length>0?`flicking.addPlugins(${c.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?h(e[1]):e[1]??""}
}`:""})`)});`:"",f=[...c.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],k=Object.keys(l).map(e=>{let i=l[e];return`flicking.on("${e}", ${i})
`}).join(""),u=i.filter(e=>e.isSlot);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${v&&` ${v}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${t(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${u.length?`
  ${u.map(e=>`<${e.tag}${t(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${p?"\n"+p.map(e=>`<${e.tag}${t(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,n.jsx)(s.A,{className:"language-js",title:"js",children:`${o(f)}

${j}${m}${x}${k}`.trim()})]})},h=({options:e,panels:i,events:l={},methods:a={},plugins:c,siblings:r,imports:p=[],viewportClass:v=""})=>{let h=c?`
  private _plugins = [${g(c)}];
`:"",j=i.filter(e=>e.isSlot),m=[["{ Component }","react"],[j.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],x=Object.keys(a).map(e=>`
const ${e} = ${a[e]};`).join("");x&&(x+="\n"),c&&m.push([`{ ${c.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),m.push(...p);let f=j.length?`
      <ViewportSlot>
        ${j.map(e=>`<${e.tag}${t(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",k=Object.keys(l).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${l[e]}}`).join("");return(0,n.jsx)(s.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${o(m,{includeFlicking:!1})}
${x}
export default class DemoComponent extends Component {${h}
  public render() {
    return ${r?"<>\n    ":""}<Flicking${v&&` className="${v}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${c?" plugins={this._plugins}":""}${k}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${t(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${f}
    </Flicking>${r?`
    ${r.map(e=>`<${e.tag}${t(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},j=({options:e,panels:i,events:l={},methods:a={},plugins:c,siblings:r=[],imports:v=[],viewportClass:h=""})=>{let j=p(e),m=i.filter(e=>e.isSlot),x=c?`,
  data() {
    return {
      plugins: [${g(c)}]
    }
  }`:"",f=m.length?`
  <template #viewport>
    ${m.map(e=>`<${e.tag}${t(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",k=[...(c??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...v],u=Object.keys(a),$=u.length>0?`,
  methods: {
    ${u.map(e=>`${e}: ${a[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",w=Object.keys(l).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${l[e]}"`).join("");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{className:"language-html",title:"template",children:`<Flicking${h&&` class="${h}"`}${e?` :options="{ ${j} }"`:""}${c?' :plugins="plugins"':""}${w}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${t(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}${f}
</Flicking>${r?`
${r.map(e=>`<${e.tag}${t(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,n.jsx)(s.A,{className:"language-js",title:"script",children:`${o(k,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${x}${$}
}`})]})},m=({js:e,react:i,vue3:l,style:r,...t})=>(0,n.jsxs)("div",{children:[(0,n.jsxs)(c.A,{groupId:"cfc",defaultValue:"js",children:[(0,n.jsx)(a.A,{value:"react",label:"React",children:i||(0,n.jsx)(h,{...t})}),(0,n.jsx)(a.A,{value:"vue3",label:"Vue@3",children:l||(0,n.jsx)(j,{...t})}),(0,n.jsx)(a.A,{value:"js",label:"JavaScript",children:e||(0,n.jsx)(v,{...t})})]}),r&&(0,n.jsx)(s.A,{className:"language-css",title:"style",children:`${r}`})]})}}]);