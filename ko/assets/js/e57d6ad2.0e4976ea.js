"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["4290"],{44308(e,i,n){n.r(i),n.d(i,{metadata:()=>l,default:()=>v,frontMatter:()=>o,contentTitle:()=>p,toc:()=>u,assets:()=>g});var l=JSON.parse('{"id":"demos/basic/easing","title":"Easing","description":"easing \uC635\uC158\uC73C\uB85C \uD328\uB110 \uC774\uB3D9 \uC560\uB2C8\uBA54\uC774\uC158\uC758 \uACE1\uC120(\uAC00\uAC10\uC18D \uD328\uD134)\uC744 \uC124\uC815\uD569\uB2C8\uB2E4","source":"@site/docs/demos/basic/easing.mdx","sourceDirName":"demos/basic","slug":"/demos/basic/easing","permalink":"/flicking-docs-test/ko/docs/demos/basic/easing","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/basic/easing.mdx","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"Easing","id":"easing","slug":"/demos/basic/easing","sidebar_position":9,"description":"easing \uC635\uC158\uC73C\uB85C \uD328\uB110 \uC774\uB3D9 \uC560\uB2C8\uBA54\uC774\uC158\uC758 \uACE1\uC120(\uAC00\uAC10\uC18D \uD328\uD134)\uC744 \uC124\uC815\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","easing","animation","curve","\uC560\uB2C8\uBA54\uC774\uC158","\uACE1\uC120"]},"sidebar":"demosSidebar","previous":{"title":"Duration","permalink":"/flicking-docs-test/ko/docs/demos/basic/duration"},"next":{"title":"Deceleration","permalink":"/flicking-docs-test/ko/docs/demos/basic/deceleration"}}'),s=n(65723),a=n(54187),t=n(27449),c=n(72722);n(22155);let d=`
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
`,r=()=>{let e=`import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "./styles.css";

// Easing \u{D568}\u{C218}\u{B4E4}
const linear = x => x;
const easeOutCubic = x => 1 - Math.pow(1 - x, 3);
const easeInOutQuad = x => x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;

export default function App() {
  return (
    <div>
      {/* linear */}
      <div className="demo-container">
        <div className="demo-label">easing: linear (\u{C77C}\u{C815}\u{D55C} \u{C18D}\u{B3C4})</div>
        <Flicking easing={linear} duration={800} align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>

      {/* easeOutCubic (\u{AE30}\u{BCF8}\u{AC12}) */}
      <div className="demo-container">
        <div className="demo-label">easing: easeOutCubic (\u{AE30}\u{BCF8}\u{AC12}, \u{BE60}\u{B974}\u{AC8C} \u{C2DC}\u{C791} \u{2192} \u{CC9C}\u{CC9C}\u{D788} \u{B05D})</div>
        <Flicking easing={easeOutCubic} duration={800} align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>

      {/* easeInOutQuad */}
      <div className="demo-container">
        <div className="demo-label">easing: easeInOutQuad (\u{CC9C}\u{CC9C}\u{D788} \u{C2DC}\u{C791} \u{2192} \u{BE60}\u{B974}\u{AC8C} \u{2192} \u{CC9C}\u{CC9C}\u{D788} \u{B05D})</div>
        <Flicking easing={easeInOutQuad} duration={800} align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>
    </div>
  );
}`,i=(0,s.jsx)(t.A,{template:"react",code:e,css:d}),n=`<template>
  <div>
    <!-- linear -->
    <div class="demo-container">
      <div class="demo-label">easing: linear (\u{C77C}\u{C815}\u{D55C} \u{C18D}\u{B3C4})</div>
      <Flicking :options="{ easing: linear, duration: 800, align: 'center' }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
    </div>

    <!-- easeOutCubic (\u{AE30}\u{BCF8}\u{AC12}) -->
    <div class="demo-container">
      <div class="demo-label">easing: easeOutCubic (\u{AE30}\u{BCF8}\u{AC12}, \u{BE60}\u{B974}\u{AC8C} \u{C2DC}\u{C791} \u{2192} \u{CC9C}\u{CC9C}\u{D788} \u{B05D})</div>
      <Flicking :options="{ easing: easeOutCubic, duration: 800, align: 'center' }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
    </div>

    <!-- easeInOutQuad -->
    <div class="demo-container">
      <div class="demo-label">easing: easeInOutQuad (\u{CC9C}\u{CC9C}\u{D788} \u{C2DC}\u{C791} \u{2192} \u{BE60}\u{B974}\u{AC8C} \u{2192} \u{CC9C}\u{CC9C}\u{D788} \u{B05D})</div>
      <Flicking :options="{ easing: easeInOutQuad, duration: 800, align: 'center' }">
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

const linear = x => x;
const easeOutCubic = x => 1 - Math.pow(1 - x, 3);
const easeInOutQuad = x => x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;

export default {
  components: { Flicking },
  data() {
    return { linear, easeOutCubic, easeInOutQuad };
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
</style>`,l=(0,s.jsx)(t.A,{template:"vue3",code:n,css:d}),a=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

// Easing \u{D568}\u{C218}\u{B4E4}
const linear = x => x;
const easeOutCubic = x => 1 - Math.pow(1 - x, 3);
const easeInOutQuad = x => x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;

// linear
new Flicking("#flick-linear", {
  easing: linear,
  duration: 800,
  align: "center"
});

// easeOutCubic (\u{AE30}\u{BCF8}\u{AC12})
new Flicking("#flick-ease-out", {
  easing: easeOutCubic,
  duration: 800,
  align: "center"
});

// easeInOutQuad
new Flicking("#flick-ease-in-out", {
  easing: easeInOutQuad,
  duration: 800,
  align: "center"
});`,r=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <!-- linear -->
  <div class="demo-container">
    <div class="demo-label">easing: linear (\u{C77C}\u{C815}\u{D55C} \u{C18D}\u{B3C4})</div>
    <div id="flick-linear" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </div>
    </div>
  </div>

  <!-- easeOutCubic (\u{AE30}\u{BCF8}\u{AC12}) -->
  <div class="demo-container">
    <div class="demo-label">easing: easeOutCubic (\u{AE30}\u{BCF8}\u{AC12}, \u{BE60}\u{B974}\u{AC8C} \u{C2DC}\u{C791} \u{2192} \u{CC9C}\u{CC9C}\u{D788} \u{B05D})</div>
    <div id="flick-ease-out" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </div>
    </div>
  </div>

  <!-- easeInOutQuad -->
  <div class="demo-container">
    <div class="demo-label">easing: easeInOutQuad (\u{CC9C}\u{CC9C}\u{D788} \u{C2DC}\u{C791} \u{2192} \u{BE60}\u{B974}\u{AC8C} \u{2192} \u{CC9C}\u{CC9C}\u{D788} \u{B05D})</div>
    <div id="flick-ease-in-out" class="flicking-viewport">
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
</html>`,o=(0,s.jsx)(t.A,{template:"vanilla",code:a,html:r,css:d});return(0,s.jsx)(c.A,{options:{},panels:[],react:i,vue3:l,js:o})},o={title:"Easing",id:"easing",slug:"/demos/basic/easing",sidebar_position:9,description:"easing \uC635\uC158\uC73C\uB85C \uD328\uB110 \uC774\uB3D9 \uC560\uB2C8\uBA54\uC774\uC158\uC758 \uACE1\uC120(\uAC00\uAC10\uC18D \uD328\uD134)\uC744 \uC124\uC815\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","easing","animation","curve","\uC560\uB2C8\uBA54\uC774\uC158","\uACE1\uC120"]},p="Easing",g={},u=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uAC12\uBCC4 \uBE44\uAD50",id:"\uAC12\uBCC4-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"easing \uD568\uC218 \uD615\uD0DC",id:"easing-\uD568\uC218-\uD615\uD0DC",level:3},{value:"\uC8FC\uC694 easing \uD328\uD134",id:"\uC8FC\uC694-easing-\uD328\uD134",level:3},{value:"\uC5F0\uAD00 \uC635\uC158",id:"\uC5F0\uAD00-\uC635\uC158",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uC678\uBD80 \uCC38\uACE0",id:"\uC678\uBD80-\uCC38\uACE0",level:3},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function h(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"easing",children:"Easing"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#easing",children:(0,s.jsx)(i.code,{children:"easing"})})," \uC635\uC158\uC73C\uB85C \uD328\uB110 \uC774\uB3D9 \uC560\uB2C8\uBA54\uC774\uC158\uC758 \uACE1\uC120\uC744 \uC124\uC815\uD569\uB2C8\uB2E4. \uD568\uC218 \uD615\uD0DC\uB85C \uC9C0\uC815\uD558\uBA70, \uC9C4\uD589\uB960(0~1)\uC744 \uC785\uB825\uBC1B\uC544 \uC2E4\uC81C \uC774\uB3D9 \uBE44\uC728\uC744 \uBC18\uD658\uD569\uB2C8\uB2E4."]}),"\n",(0,s.jsx)(r,{}),"\n",(0,s.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,s.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\uC635\uC158"}),(0,s.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,s.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,s.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#easing",children:(0,s.jsx)(i.code,{children:"easing"})})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"(x: number) => number"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"easeOutCubic"})}),(0,s.jsx)(i.td,{children:"\uC560\uB2C8\uBA54\uC774\uC158 \uACE1\uC120 \uD568\uC218"})]})})]}),"\n",(0,s.jsx)(i.h3,{id:"\uAC12\uBCC4-\uBE44\uAD50",children:"\uAC12\uBCC4 \uBE44\uAD50"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\uD568\uC218"}),(0,s.jsx)(i.th,{children:"\uB3D9\uC791"}),(0,s.jsx)(i.th,{children:"\uC801\uD569\uD55C \uC0C1\uD669"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"linear"})}),(0,s.jsx)(i.td,{children:"\uC77C\uC815\uD55C \uC18D\uB3C4\uB85C \uC774\uB3D9"}),(0,s.jsx)(i.td,{children:"\uAE30\uACC4\uC801\uC778 \uB290\uB08C, \uC9C4\uD589 \uD45C\uC2DC"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"easeOutCubic"})}),(0,s.jsx)(i.td,{children:"\uBE60\uB974\uAC8C \uC2DC\uC791 \u2192 \uCC9C\uCC9C\uD788 \uB05D"}),(0,s.jsx)(i.td,{children:"\uC790\uC5F0\uC2A4\uB7EC\uC6B4 \uAC10\uC18D, \uC77C\uBC18 UI"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"easeInOutQuad"})}),(0,s.jsx)(i.td,{children:"\uCC9C\uCC9C\uD788 \u2192 \uBE60\uB974\uAC8C \u2192 \uCC9C\uCC9C\uD788"}),(0,s.jsx)(i.td,{children:"\uBD80\uB4DC\uB7EC\uC6B4 \uC804\uD658, \uD504\uB808\uC820\uD14C\uC774\uC158"})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,s.jsx)(i.h3,{id:"easing-\uD568\uC218-\uD615\uD0DC",children:"easing \uD568\uC218 \uD615\uD0DC"}),"\n",(0,s.jsx)(i.p,{children:"easing \uD568\uC218\uB294 0~1 \uC0AC\uC774\uC758 \uC9C4\uD589\uB960\uC744 \uC785\uB825\uBC1B\uC544 \uC2E4\uC81C \uC774\uB3D9 \uBE44\uC728\uC744 \uBC18\uD658\uD569\uB2C8\uB2E4."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",children:"// linear: \uC77C\uC815\uD55C \uC18D\uB3C4\nconst linear = x => x;\n\n// easeOutCubic: \uBE60\uB974\uAC8C \uC2DC\uC791, \uCC9C\uCC9C\uD788 \uB05D (\uAE30\uBCF8\uAC12)\nconst easeOutCubic = x => 1 - Math.pow(1 - x, 3);\n\n// easeInOutQuad: \uAC00\uC18D \uD6C4 \uAC10\uC18D\nconst easeInOutQuad = x => x < 0.5\n  ? 2 * x * x\n  : 1 - Math.pow(-2 * x + 2, 2) / 2;\n"})}),"\n",(0,s.jsx)(i.h3,{id:"\uC8FC\uC694-easing-\uD328\uD134",children:"\uC8FC\uC694 easing \uD328\uD134"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"linear"}),": \uC785\uB825 = \uCD9C\uB825. \uC77C\uC815\uD55C \uC18D\uB3C4\uB85C \uC774\uB3D9"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"easeOut"}),": \uCD08\uBC18 \uBE60\uB974\uACE0 \uD6C4\uBC18 \uB290\uB9BC (\uAC10\uC18D). \uC790\uC5F0\uC2A4\uB7EC\uC6B4 \uBA48\uCDA4"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"easeIn"}),": \uCD08\uBC18 \uB290\uB9AC\uACE0 \uD6C4\uBC18 \uBE60\uB984 (\uAC00\uC18D). \uC2DC\uC791 \uAC15\uC870"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"easeInOut"}),": \uAC00\uC18D \uD6C4 \uAC10\uC18D. \uBD80\uB4DC\uB7EC\uC6B4 \uC804\uD658"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\uC5F0\uAD00-\uC635\uC158",children:"\uC5F0\uAD00 \uC635\uC158"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"duration\uACFC\uC758 \uAD00\uACC4"}),": ",(0,s.jsx)(i.code,{children:"duration"}),"\uC740 \uC560\uB2C8\uBA54\uC774\uC158 \uC2DC\uAC04\uC744, ",(0,s.jsx)(i.code,{children:"easing"}),"\uC740 \uADF8 \uC2DC\uAC04 \uB3D9\uC548\uC758 \uC18D\uB3C4 \uBCC0\uD654 \uD328\uD134\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4. \uB458\uC744 \uC870\uD569\uD558\uC5EC \uB2E4\uC591\uD55C \uD6A8\uACFC\uB97C \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,s.jsx)(i.admonition,{title:"\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"linear"}),": \uB85C\uB529 \uC9C4\uD589 \uD45C\uC2DC, \uAE30\uACC4\uC801\uC778 UI"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"easeOut (\uAE30\uBCF8\uAC12)"}),": \uC77C\uBC18\uC801\uC778 \uCE90\uB7EC\uC140, \uC790\uC5F0\uC2A4\uB7EC\uC6B4 \uC2A4\uB0C5"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"easeInOut"}),": \uD504\uB808\uC820\uD14C\uC774\uC158, \uC628\uBCF4\uB529, \uBD80\uB4DC\uB7EC\uC6B4 \uC804\uD658 \uAC15\uC870"]}),"\n"]})}),"\n",(0,s.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,s.jsx)(i.admonition,{title:"easing \uD568\uC218 \uADDC\uCE59",type:"warning",children:(0,s.jsxs)(i.p,{children:["easing \uD568\uC218\uB294 \uBC18\uB4DC\uC2DC ",(0,s.jsx)(i.code,{children:"f(0) = 0"}),", ",(0,s.jsx)(i.code,{children:"f(1) = 1"}),"\uC744 \uB9CC\uC871\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774 \uADDC\uCE59\uC744 \uC5B4\uAE30\uBA74 \uC560\uB2C8\uBA54\uC774\uC158\uC774 \uC81C\uB300\uB85C \uB3D9\uC791\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."]})}),"\n",(0,s.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,s.jsx)(i.h3,{id:"\uC678\uBD80-\uCC38\uACE0",children:"\uC678\uBD80 \uCC38\uACE0"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://easings.net/",children:"Easing Functions Cheat Sheet"})," - \uB2E4\uC591\uD55C easing \uD568\uC218 \uC2DC\uAC01\uD654"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#duration",children:(0,s.jsx)(i.code,{children:"duration"})}),": \uC560\uB2C8\uBA54\uC774\uC158 \uC9C0\uC18D \uC2DC\uAC04"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"./duration",children:"Duration"}),": \uC560\uB2C8\uBA54\uC774\uC158 \uC2DC\uAC04 \uC870\uC808"]}),"\n"]})]})}function v(e={}){let{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},27449(e,i,n){n.d(i,{A:()=>o});var l=n(65723),s=n(19612);n(22155);let a="^4.11.4",t={react:{"@egjs/react-flicking":a,"@egjs/flicking":a},vue3:{"@egjs/vue3-flicking":a,"@egjs/flicking":a},vanilla:{"@egjs/flicking":a}},c=`<!DOCTYPE html>
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
`;function o({code:e,html:i,template:n="react",dependencies:a={},files:o={},css:p=""}){var g;let u,h,v;return(0,l.jsx)(s.OZ,{template:"vue3"===n?"vue":"vanilla"===n?"vanilla":"react",files:(v={"/styles.css":{code:h=p?`${r}
${p}`:r},...o},"react"===n?{"/App.tsx":{code:e},"/index.js":{code:d,hidden:!0},...v}:"vue3"===n?{"/src/App.vue":{code:e},...v}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),n=[],l=[],s=!1;for(let e of i)s?l.push(e):e.trimStart().startsWith("import ")||""===e.trim()?n.push(e.replace('"../styles.css"','"./styles.css"')):(s=!0,l.push(e));for(;l.length>0&&""===l[l.length-1].trim();)l.pop();return[...n,"","const _run = () => {",...l.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:h},"/index.html":{code:(u="<style>.flicking-viewport{opacity:0}</style>",(g=i||c).includes("</head>")?g.replace("</head>",`${u}
</head>`):u+g)},...o}),customSetup:{dependencies:{...t[n],...a}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===n?["/App.tsx","/styles.css"]:"vue3"===n?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===n?"/App.tsx":"vue3"===n?"/src/App.vue":"/src/index.js"}})}},72722(e,i,n){n.d(i,{A:()=>x});var l=n(65723),s=n(34622),a=n(7210),t=n(78863);n(22155);let c=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,d=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",r=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${c(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(i=>`${i}: ${c(e[i],"'")}`).join(", ")}`,p=(e,{prefix:i,includeFlicking:n=!0}={})=>{let l=n?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&l.push(...e),`${l.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},g=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,u=({options:e,panels:i,events:n={},methods:a={},plugins:t=[],siblings:o=[],imports:g=[],viewportClass:u=""})=>{let h=e=>`${Object.keys(e).map(i=>`${i}: ${c(e[i])}`).join(",\n  ")}`,v=Object.keys(a).map(e=>`const ${e} = ${a[e]};
`).join(""),x=e?`const flicking = new Flicking("#flick", {
  ${h(e)}
});

`:'const flicking = new Flicking("#flick")',m=t.length>0?`flicking.addPlugins(${t.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?h(e[1]):e[1]??""}
}`:""})`)});`:"",j=[...t.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],f=Object.keys(n).map(e=>{let i=n[e];return`flicking.on("${e}", ${i})
`}).join(""),k=i.filter(e=>e.isSlot);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${u&&` ${u}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${k.length?`
  ${k.map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,l.jsx)(s.A,{className:"language-js",title:"js",children:`${p(j)}

${v}${x}${m}${f}`.trim()})]})},h=({options:e,panels:i,events:n={},methods:a={},plugins:t,siblings:c,imports:o=[],viewportClass:u=""})=>{let h=t?`
  private _plugins = [${g(t)}];
`:"",v=i.filter(e=>e.isSlot),x=[["{ Component }","react"],[v.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],m=Object.keys(a).map(e=>`
const ${e} = ${a[e]};`).join("");m&&(m+="\n"),t&&x.push([`{ ${t.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),x.push(...o);let j=v.length?`
      <ViewportSlot>
        ${v.map(e=>`<${e.tag}${d(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",f=Object.keys(n).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${n[e]}}`).join("");return(0,l.jsx)(s.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(x,{includeFlicking:!1})}
${m}
export default class DemoComponent extends Component {${h}
  public render() {
    return ${c?"<>\n    ":""}<Flicking${u&&` className="${u}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${t?" plugins={this._plugins}":""}${f}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${d(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${j}
    </Flicking>${c?`
    ${c.map(e=>`<${e.tag}${d(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},v=({options:e,panels:i,events:n={},methods:a={},plugins:t,siblings:c=[],imports:u=[],viewportClass:h=""})=>{let v=o(e),x=i.filter(e=>e.isSlot),m=t?`,
  data() {
    return {
      plugins: [${g(t)}]
    }
  }`:"",j=x.length?`
  <template #viewport>
    ${x.map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",f=[...(t??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...u],k=Object.keys(a),$=k.length>0?`,
  methods: {
    ${k.map(e=>`${e}: ${a[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",b=Object.keys(n).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${n[e]}"`).join("");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.A,{className:"language-html",title:"template",children:`<Flicking${h&&` class="${h}"`}${e?` :options="{ ${v} }"`:""}${t?' :plugins="plugins"':""}${b}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n  ")}${j}
</Flicking>${c?`
${c.map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,l.jsx)(s.A,{className:"language-js",title:"script",children:`${p(f,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${m}${$}
}`})]})},x=({js:e,react:i,vue3:n,style:c,...d})=>(0,l.jsxs)("div",{children:[(0,l.jsxs)(t.A,{groupId:"cfc",defaultValue:"js",children:[(0,l.jsx)(a.A,{value:"react",label:"React",children:i||(0,l.jsx)(h,{...d})}),(0,l.jsx)(a.A,{value:"vue3",label:"Vue@3",children:n||(0,l.jsx)(v,{...d})}),(0,l.jsx)(a.A,{value:"js",label:"JavaScript",children:e||(0,l.jsx)(u,{...d})})]}),c&&(0,l.jsx)(s.A,{className:"language-css",title:"style",children:`${c}`})]})}}]);