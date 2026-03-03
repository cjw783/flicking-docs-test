"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["1254"],{35108(i,e,n){n.r(e),n.d(e,{metadata:()=>l,default:()=>u,frontMatter:()=>o,contentTitle:()=>p,toc:()=>v,assets:()=>g});var l=JSON.parse('{"id":"demos/basic/duration","title":"Duration","description":"duration \uC635\uC158\uC73C\uB85C \uD328\uB110 \uC2A4\uB0C5 \uC560\uB2C8\uBA54\uC774\uC158\uC758 \uC9C0\uC18D \uC2DC\uAC04\uC744 \uC870\uC808\uD569\uB2C8\uB2E4","source":"@site/docs/demos/basic/duration.mdx","sourceDirName":"demos/basic","slug":"/demos/basic/duration","permalink":"/flicking-docs-test/ko/docs/demos/basic/duration","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/basic/duration.mdx","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"Duration","id":"duration","slug":"/demos/basic/duration","sidebar_position":8,"description":"duration \uC635\uC158\uC73C\uB85C \uD328\uB110 \uC2A4\uB0C5 \uC560\uB2C8\uBA54\uC774\uC158\uC758 \uC9C0\uC18D \uC2DC\uAC04\uC744 \uC870\uC808\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","duration","animation","speed","\uC560\uB2C8\uBA54\uC774\uC158","\uC18D\uB3C4"]},"sidebar":"demosSidebar","previous":{"title":"Bound","permalink":"/flicking-docs-test/ko/docs/demos/basic/bound"},"next":{"title":"Easing","permalink":"/flicking-docs-test/ko/docs/demos/basic/easing"}}'),s=n(65723),a=n(54187),t=n(27449),d=n(72722);n(22155);let c=`
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
`,r=()=>{let i=`import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "./styles.css";

export default function App() {
  return (
    <div>
      {/* duration: 100 (\u{BE60}\u{B984}) */}
      <div className="demo-container">
        <div className="demo-label">duration: 100 (\u{BE60}\u{B978} \u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158})</div>
        <Flicking duration={100} align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>

      {/* duration: 500 (\u{AE30}\u{BCF8}\u{AC12}) */}
      <div className="demo-container">
        <div className="demo-label">duration: 500 (\u{AE30}\u{BCF8}\u{AC12})</div>
        <Flicking duration={500} align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>

      {/* duration: 1500 (\u{B290}\u{B9BC}) */}
      <div className="demo-container">
        <div className="demo-label">duration: 1500 (\u{B290}\u{B9B0} \u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158})</div>
        <Flicking duration={1500} align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>
    </div>
  );
}`,e=(0,s.jsx)(t.A,{template:"react",code:i,css:c}),n=`<template>
  <div>
    <!-- duration: 100 (\u{BE60}\u{B984}) -->
    <div class="demo-container">
      <div class="demo-label">duration: 100 (\u{BE60}\u{B978} \u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158})</div>
      <Flicking :options="{ duration: 100, align: 'center' }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
    </div>

    <!-- duration: 500 (\u{AE30}\u{BCF8}\u{AC12}) -->
    <div class="demo-container">
      <div class="demo-label">duration: 500 (\u{AE30}\u{BCF8}\u{AC12})</div>
      <Flicking :options="{ duration: 500, align: 'center' }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
    </div>

    <!-- duration: 1500 (\u{B290}\u{B9BC}) -->
    <div class="demo-container">
      <div class="demo-label">duration: 1500 (\u{B290}\u{B9B0} \u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158})</div>
      <Flicking :options="{ duration: 1500, align: 'center' }">
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
</style>`,l=(0,s.jsx)(t.A,{template:"vue3",code:n,css:c}),a=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

// duration: 100 (\u{BE60}\u{B984})
new Flicking("#flick-fast", {
  duration: 100,
  align: "center"
});

// duration: 500 (\u{AE30}\u{BCF8}\u{AC12})
new Flicking("#flick-default", {
  duration: 500,
  align: "center"
});

// duration: 1500 (\u{B290}\u{B9BC})
new Flicking("#flick-slow", {
  duration: 1500,
  align: "center"
});`,r=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <!-- duration: 100 (\u{BE60}\u{B984}) -->
  <div class="demo-container">
    <div class="demo-label">duration: 100 (\u{BE60}\u{B978} \u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158})</div>
    <div id="flick-fast" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </div>
    </div>
  </div>

  <!-- duration: 500 (\u{AE30}\u{BCF8}\u{AC12}) -->
  <div class="demo-container">
    <div class="demo-label">duration: 500 (\u{AE30}\u{BCF8}\u{AC12})</div>
    <div id="flick-default" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </div>
    </div>
  </div>

  <!-- duration: 1500 (\u{B290}\u{B9BC}) -->
  <div class="demo-container">
    <div class="demo-label">duration: 1500 (\u{B290}\u{B9B0} \u{C560}\u{B2C8}\u{BA54}\u{C774}\u{C158})</div>
    <div id="flick-slow" class="flicking-viewport">
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
</html>`,o=(0,s.jsx)(t.A,{template:"vanilla",code:a,html:r,css:c});return(0,s.jsx)(d.A,{options:{},panels:[],react:e,vue3:l,js:o})},o={title:"Duration",id:"duration",slug:"/demos/basic/duration",sidebar_position:8,description:"duration \uC635\uC158\uC73C\uB85C \uD328\uB110 \uC2A4\uB0C5 \uC560\uB2C8\uBA54\uC774\uC158\uC758 \uC9C0\uC18D \uC2DC\uAC04\uC744 \uC870\uC808\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","duration","animation","speed","\uC560\uB2C8\uBA54\uC774\uC158","\uC18D\uB3C4"]},p="Duration",g={},v=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uAC12\uBCC4 \uBE44\uAD50",id:"\uAC12\uBCC4-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"duration \uB3D9\uC791 \uC6D0\uB9AC",id:"duration-\uB3D9\uC791-\uC6D0\uB9AC",level:3},{value:"\uC5F0\uAD00 \uC635\uC158",id:"\uC5F0\uAD00-\uC635\uC158",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function h(i){let e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...i.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"duration",children:"Duration"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"../../api/interfaces/FlickingOptions#duration",children:(0,s.jsx)(e.code,{children:"duration"})})," \uC635\uC158\uC73C\uB85C \uD328\uB110 \uC2A4\uB0C5 \uC560\uB2C8\uBA54\uC774\uC158\uC758 \uC9C0\uC18D \uC2DC\uAC04\uC744 \uBC00\uB9AC\uCD08 \uB2E8\uC704\uB85C \uC124\uC815\uD569\uB2C8\uB2E4."]}),"\n",(0,s.jsx)(r,{}),"\n",(0,s.jsx)(e.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,s.jsx)(e.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\uC635\uC158"}),(0,s.jsx)(e.th,{children:"\uD0C0\uC785"}),(0,s.jsx)(e.th,{children:"\uAE30\uBCF8\uAC12"}),(0,s.jsx)(e.th,{children:"\uC124\uBA85"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"../../api/interfaces/FlickingOptions#duration",children:(0,s.jsx)(e.code,{children:"duration"})})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"number"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"500"})}),(0,s.jsx)(e.td,{children:"\uC560\uB2C8\uBA54\uC774\uC158 \uC9C0\uC18D \uC2DC\uAC04 (ms)"})]})})]}),"\n",(0,s.jsx)(e.h3,{id:"\uAC12\uBCC4-\uBE44\uAD50",children:"\uAC12\uBCC4 \uBE44\uAD50"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\uAC12"}),(0,s.jsx)(e.th,{children:"\uB3D9\uC791"}),(0,s.jsx)(e.th,{children:"\uC801\uD569\uD55C \uC0C1\uD669"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"100"})," \uC774\uD558"]}),(0,s.jsx)(e.td,{children:"\uAC70\uC758 \uC989\uC2DC \uC2A4\uB0C5"}),(0,s.jsx)(e.td,{children:"\uBE60\uB978 \uBC18\uC751\uC774 \uD544\uC694\uD55C UI, \uAC8C\uC784"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"300~500"})}),(0,s.jsx)(e.td,{children:"\uC790\uC5F0\uC2A4\uB7EC\uC6B4 \uC18D\uB3C4"}),(0,s.jsx)(e.td,{children:"\uC77C\uBC18 \uCE90\uB7EC\uC140, \uC774\uBBF8\uC9C0 \uAC24\uB7EC\uB9AC"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"1000"})," \uC774\uC0C1"]}),(0,s.jsx)(e.td,{children:"\uB290\uB9B0 \uC804\uD658"}),(0,s.jsx)(e.td,{children:"\uD504\uB808\uC820\uD14C\uC774\uC158, \uAC15\uC870 \uD6A8\uACFC"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,s.jsx)(e.h3,{id:"duration-\uB3D9\uC791-\uC6D0\uB9AC",children:"duration \uB3D9\uC791 \uC6D0\uB9AC"}),"\n",(0,s.jsxs)(e.p,{children:["\uB4DC\uB798\uADF8\uB97C \uB9C8\uCE58\uACE0 \uC190\uC744 \uB5BC\uBA74 \uD328\uB110\uC774 \uBAA9\uD45C \uC704\uCE58\uB85C \uC2A4\uB0C5\uB429\uB2C8\uB2E4. ",(0,s.jsx)(e.code,{children:"duration"}),"\uC740 \uC774 \uC2A4\uB0C5 \uC560\uB2C8\uBA54\uC774\uC158\uC774 \uC644\uB8CC\uB418\uAE30\uAE4C\uC9C0 \uAC78\uB9AC\uB294 \uC2DC\uAC04\uC785\uB2C8\uB2E4."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"// \uB2E4\uC591\uD55C duration \uAC12\nduration: 100   // \uBE60\uB978 \uC2A4\uB0C5 (0.1\uCD08)\nduration: 500   // \uAE30\uBCF8\uAC12 (0.5\uCD08)\nduration: 1500  // \uB290\uB9B0 \uC2A4\uB0C5 (1.5\uCD08)\nduration: 0     // \uC560\uB2C8\uBA54\uC774\uC158 \uC5C6\uC774 \uC989\uC2DC \uC774\uB3D9\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\uC5F0\uAD00-\uC635\uC158",children:"\uC5F0\uAD00 \uC635\uC158"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"easing\uACFC\uC758 \uAD00\uACC4"}),": ",(0,s.jsx)(e.code,{children:"duration"}),"\uC740 \uC560\uB2C8\uBA54\uC774\uC158 \uC2DC\uAC04\uC744, ",(0,s.jsx)(e.code,{children:"easing"}),"\uC740 \uC560\uB2C8\uBA54\uC774\uC158 \uACE1\uC120\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4. \uB458\uC744 \uC870\uD569\uD558\uC5EC \uB2E4\uC591\uD55C \uC804\uD658 \uD6A8\uACFC\uB97C \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"moveType\uACFC\uC758 \uAD00\uACC4"}),": ",(0,s.jsx)(e.code,{children:'moveType: "freeScroll"'}),"\uC5D0\uC11C\uB294 \uAD00\uC131 \uC2A4\uD06C\uB864\uC774 \uC801\uC6A9\uB418\uC5B4 duration\uACFC \uB2E4\uB974\uAC8C \uB3D9\uC791\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,s.jsx)(e.admonition,{title:"\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\uC9E7\uC740 duration (100~300ms)"}),": \uBE60\uB978 \uBC18\uC751\uC774 \uC911\uC694\uD55C UI, \uD0ED \uC804\uD658, \uAC8C\uC784 \uC778\uD130\uD398\uC774\uC2A4"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\uAE30\uBCF8 duration (400~600ms)"}),": \uC77C\uBC18\uC801\uC778 \uCE90\uB7EC\uC140, \uC774\uBBF8\uC9C0 \uAC24\uB7EC\uB9AC"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\uAE34 duration (800ms \uC774\uC0C1)"}),": \uD504\uB808\uC820\uD14C\uC774\uC158, \uC628\uBCF4\uB529, \uC804\uD658 \uD6A8\uACFC \uAC15\uC870"]}),"\n"]})}),"\n",(0,s.jsx)(e.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,s.jsx)(e.admonition,{title:"duration: 0 \uC0AC\uC6A9 \uC2DC",type:"warning",children:(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"duration: 0"}),"\uC73C\uB85C \uC124\uC815\uD558\uBA74 \uC560\uB2C8\uBA54\uC774\uC158 \uC5C6\uC774 \uC989\uC2DC \uC774\uB3D9\uD569\uB2C8\uB2E4. \uC2DC\uAC01\uC801 \uD53C\uB4DC\uBC31\uC774 \uC5C6\uC5B4 \uC0AC\uC6A9\uC790\uAC00 \uD63C\uB780\uC2A4\uB7EC\uC6B8 \uC218 \uC788\uC73C\uB2C8 \uC8FC\uC758\uD558\uC138\uC694."]})}),"\n",(0,s.jsx)(e.admonition,{title:"\uB108\uBB34 \uAE34 duration",type:"warning",children:(0,s.jsx)(e.p,{children:"1\uCD08 \uC774\uC0C1\uC758 duration\uC740 \uC0AC\uC6A9\uC790\uAC00 \uAE30\uB2E4\uB9AC\uB294 \uB290\uB08C\uC744 \uC904 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD2B9\uBCC4\uD55C \uC758\uB3C4\uAC00 \uC544\uB2C8\uB77C\uBA74 500ms \uC804\uD6C4\uB97C \uAD8C\uC7A5\uD569\uB2C8\uB2E4."})}),"\n",(0,s.jsx)(e.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,s.jsx)(e.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"../../api/interfaces/FlickingOptions#easing",children:(0,s.jsx)(e.code,{children:"easing"})}),": \uC560\uB2C8\uBA54\uC774\uC158 \uACE1\uC120"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"../../api/interfaces/FlickingOptions#movetype",children:(0,s.jsx)(e.code,{children:"moveType"})}),": \uC774\uB3D9 \uB3D9\uC791 \uBAA8\uB4DC"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"./easing",children:"Easing"}),": \uC560\uB2C8\uBA54\uC774\uC158 \uACE1\uC120 \uC870\uC808"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"./movement-types",children:"Movement Types"}),": \uC774\uB3D9 \uB3D9\uC791 \uBAA8\uB4DC"]}),"\n"]})]})}function u(i={}){let{wrapper:e}={...(0,a.R)(),...i.components};return e?(0,s.jsx)(e,{...i,children:(0,s.jsx)(h,{...i})}):h(i)}},27449(i,e,n){n.d(e,{A:()=>o});var l=n(65723),s=n(19612);n(22155);let a="^4.11.4",t={react:{"@egjs/react-flicking":a,"@egjs/flicking":a},vue3:{"@egjs/vue3-flicking":a,"@egjs/flicking":a},vanilla:{"@egjs/flicking":a}},d=`<!DOCTYPE html>
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
`;function o({code:i,html:e,template:n="react",dependencies:a={},files:o={},css:p=""}){var g;let v,h,u;return(0,l.jsx)(s.OZ,{template:"vue3"===n?"vue":"vanilla"===n?"vanilla":"react",files:(u={"/styles.css":{code:h=p?`${r}
${p}`:r},...o},"react"===n?{"/App.tsx":{code:i},"/index.js":{code:c,hidden:!0},...u}:"vue3"===n?{"/src/App.vue":{code:i},...u}:{"/src/index.js":{code:i},"/index.js":{code:function(i){let e=i.split("\n"),n=[],l=[],s=!1;for(let i of e)s?l.push(i):i.trimStart().startsWith("import ")||""===i.trim()?n.push(i.replace('"../styles.css"','"./styles.css"')):(s=!0,l.push(i));for(;l.length>0&&""===l[l.length-1].trim();)l.pop();return[...n,"","const _run = () => {",...l.map(i=>`  ${i}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(i),hidden:!0},"/styles.css":{code:h},"/index.html":{code:(v="<style>.flicking-viewport{opacity:0}</style>",(g=e||d).includes("</head>")?g.replace("</head>",`${v}
</head>`):v+g)},...o}),customSetup:{dependencies:{...t[n],...a}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===n?["/App.tsx","/styles.css"]:"vue3"===n?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===n?"/App.tsx":"vue3"===n?"/src/App.vue":"/src/index.js"}})}},72722(i,e,n){n.d(e,{A:()=>m});var l=n(65723),s=n(34622),a=n(7210),t=n(78863);n(22155);let d=(i,e='"')=>"string"==typeof i?`${e}${i}${e}`:i,c=(i,e="class")=>i.class?` ${e}="${i.class}"`:"",r=(i,e=!1)=>i.style?e?` style={{ ${Object.keys(i.style).map(e=>`${e}: ${d(i.style[e])}`).join(", ")} }}`:` style="${Object.keys(i.style).map(e=>`${e}: ${i.style[e]};`).join(" ")}"`:"",o=i=>`${Object.keys(i).map(e=>`${e}: ${d(i[e],"'")}`).join(", ")}`,p=(i,{prefix:e,includeFlicking:n=!0}={})=>{let l=n?[["Flicking",`@egjs/${e?`${e}-`:""}flicking`]]:[];return i&&l.push(...i),`${l.map(i=>Array.isArray(i)?`import ${i[0]} from "${i[1]}";`:`import "${i}";`).join("\n")}`},g=i=>`${i.map(i=>`new ${i[0]}(${"object"==typeof i[1]?`{ ${o(i[1])} }`:i[1]??""}`).join(", ")})`,v=({options:i,panels:e,events:n={},methods:a={},plugins:t=[],siblings:o=[],imports:g=[],viewportClass:v=""})=>{let h=i=>`${Object.keys(i).map(e=>`${e}: ${d(i[e])}`).join(",\n  ")}`,u=Object.keys(a).map(i=>`const ${i} = ${a[i]};
`).join(""),m=i?`const flicking = new Flicking("#flick", {
  ${h(i)}
});

`:'const flicking = new Flicking("#flick")',j=t.length>0?`flicking.addPlugins(${t.map(i=>`new ${i[0]}(${i[1]?`{
  ${"object"==typeof i[1]?h(i[1]):i[1]??""}
}`:""})`)});`:"",f=[...t.map(i=>[`{ ${i[0]} }`,"@egjs/flicking-plugins"]),...g],k=Object.keys(n).map(i=>{let e=n[i];return`flicking.on("${i}", ${e})
`}).join(""),x=e.filter(i=>i.isSlot);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${v&&` ${v}`}${!1===i.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${e.filter(i=>!i.isSlot).map(i=>`<${i.tag}${c(i)}${r(i)}>${i.content}</${i.tag}>`).join("\n    ")}
  </div>${x.length?`
  ${x.map(i=>`<${i.tag}${c(i)}${r(i)}>${i.content}</${i.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(i=>`<${i.tag}${c(i)}${r(i)}>${i.content}</${i.tag}>`).join("\n"):""}`}),(0,l.jsx)(s.A,{className:"language-js",title:"js",children:`${p(f)}

${u}${m}${j}${k}`.trim()})]})},h=({options:i,panels:e,events:n={},methods:a={},plugins:t,siblings:d,imports:o=[],viewportClass:v=""})=>{let h=t?`
  private _plugins = [${g(t)}];
`:"",u=e.filter(i=>i.isSlot),m=[["{ Component }","react"],[u.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],j=Object.keys(a).map(i=>`
const ${i} = ${a[i]};`).join("");j&&(j+="\n"),t&&m.push([`{ ${t.map(i=>i[0])} }`,"@egjs/flicking-plugins"]),m.push(...o);let f=u.length?`
      <ViewportSlot>
        ${u.map(i=>`<${i.tag}${c(i,"className")}${r(i,!0)}>${i.content.replace(/class/g,"className")}</${i.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",k=Object.keys(n).map(i=>` on${i[0].toUpperCase()+i.slice(1)}={${n[i]}}`).join("");return(0,l.jsx)(s.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(m,{includeFlicking:!1})}
${j}
export default class DemoComponent extends Component {${h}
  public render() {
    return ${d?"<>\n    ":""}<Flicking${v&&` className="${v}"`}${i?` ${Object.keys(i).map(e=>`${e}=${"string"==typeof i[e]?`"${i[e]}"`:`{${i[e]}}`}`).join(" ")}`:""}${t?" plugins={this._plugins}":""}${k}>
      ${e.filter(i=>!i.isSlot).map(i=>`<${i.tag}${c(i,"className")}${r(i,!0)}>${i.content.replace(/class/g,"className")}</${i.tag}>`).join("\n      ")}${f}
    </Flicking>${d?`
    ${d.map(i=>`<${i.tag}${c(i,"className")}${r(i,!0)}>${i.content.replace(/class/g,"className")}</${i.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},u=({options:i,panels:e,events:n={},methods:a={},plugins:t,siblings:d=[],imports:v=[],viewportClass:h=""})=>{let u=o(i),m=e.filter(i=>i.isSlot),j=t?`,
  data() {
    return {
      plugins: [${g(t)}]
    }
  }`:"",f=m.length?`
  <template #viewport>
    ${m.map(i=>`<${i.tag}${c(i)}${r(i)}>${i.content}</${i.tag}>`).join("\n    ")}
  </template>`:"",k=[...(t??[]).map(i=>[`{ ${i[0]} }`,"@egjs/flicking-plugins"]),...v],x=Object.keys(a),$=x.length>0?`,
  methods: {
    ${x.map(i=>`${i}: ${a[i].split("\n").map((i,e)=>e>0?`    ${i}`:i).join("\n")}`).join(",\n")}
  }`:"",b=Object.keys(n).map(i=>` @${i.replace(/([A-Z])/g,"-$1").toLowerCase()}="${n[i]}"`).join("");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.A,{className:"language-html",title:"template",children:`<Flicking${h&&` class="${h}"`}${i?` :options="{ ${u} }"`:""}${t?' :plugins="plugins"':""}${b}>
  ${e.filter(i=>!i.isSlot).map(i=>`<${i.tag}${c(i)}${r(i)}>${i.content}</${i.tag}>`).join("\n  ")}${f}
</Flicking>${d?`
${d.map(i=>`<${i.tag}${c(i)}${r(i)}>${i.content}</${i.tag}>`).join("\n")}`:""}`}),(0,l.jsx)(s.A,{className:"language-js",title:"script",children:`${p(k,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${j}${$}
}`})]})},m=({js:i,react:e,vue3:n,style:d,...c})=>(0,l.jsxs)("div",{children:[(0,l.jsxs)(t.A,{groupId:"cfc",defaultValue:"js",children:[(0,l.jsx)(a.A,{value:"react",label:"React",children:e||(0,l.jsx)(h,{...c})}),(0,l.jsx)(a.A,{value:"vue3",label:"Vue@3",children:n||(0,l.jsx)(u,{...c})}),(0,l.jsx)(a.A,{value:"js",label:"JavaScript",children:i||(0,l.jsx)(v,{...c})})]}),d&&(0,l.jsx)(s.A,{className:"language-css",title:"style",children:`${d}`})]})}}]);