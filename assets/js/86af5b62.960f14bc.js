"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["354"],{46743(e,i,l){l.r(i),l.d(i,{metadata:()=>s,default:()=>m,frontMatter:()=>o,contentTitle:()=>h,toc:()=>g,assets:()=>p});var s=JSON.parse('{"id":"demos/basic/threshold","title":"Threshold","description":"threshold \uC635\uC158\uC73C\uB85C \uD328\uB110 \uC804\uD658\uC5D0 \uD544\uC694\uD55C \uCD5C\uC18C \uB4DC\uB798\uADF8 \uAC70\uB9AC\uB97C \uC124\uC815\uD569\uB2C8\uB2E4","source":"@site/docs/demos/basic/threshold.mdx","sourceDirName":"demos/basic","slug":"/demos/basic/threshold","permalink":"/flicking-docs-test/docs/demos/basic/threshold","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/basic/threshold.mdx","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"Threshold","id":"threshold","slug":"/demos/basic/threshold","sidebar_position":11,"description":"threshold \uC635\uC158\uC73C\uB85C \uD328\uB110 \uC804\uD658\uC5D0 \uD544\uC694\uD55C \uCD5C\uC18C \uB4DC\uB798\uADF8 \uAC70\uB9AC\uB97C \uC124\uC815\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","threshold","drag","sensitivity","\uC784\uACC4\uAC12","\uBBFC\uAC10\uB3C4"]},"sidebar":"demosSidebar","previous":{"title":"Deceleration","permalink":"/flicking-docs-test/docs/demos/basic/deceleration"},"next":{"title":"Input Type","permalink":"/flicking-docs-test/docs/demos/basic/input-type"}}'),n=l(65723),t=l(54187),d=l(27449),c=l(72722);l(22155);let a=`
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

export default function App() {
  return (
    <div>
      {/* threshold: 10 (\u{BBFC}\u{AC10}) */}
      <div className="demo-container">
        <div className="demo-label">threshold: 10 (\u{C9E7}\u{C740} \u{B4DC}\u{B798}\u{ADF8}\u{B85C} \u{D328}\u{B110} \u{C804}\u{D658})</div>
        <Flicking threshold={10} align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>

      {/* threshold: 40 (\u{AE30}\u{BCF8}\u{AC12}) */}
      <div className="demo-container">
        <div className="demo-label">threshold: 40 (\u{AE30}\u{BCF8}\u{AC12})</div>
        <Flicking threshold={40} align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>

      {/* threshold: 100 (\u{B454}\u{AC10}) */}
      <div className="demo-container">
        <div className="demo-label">threshold: 100 (\u{AE34} \u{B4DC}\u{B798}\u{ADF8} \u{D544}\u{C694})</div>
        <Flicking threshold={100} align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>
    </div>
  );
}`,i=(0,n.jsx)(d.A,{template:"react",code:e,css:a}),l=`<template>
  <div>
    <!-- threshold: 10 (\u{BBFC}\u{AC10}) -->
    <div class="demo-container">
      <div class="demo-label">threshold: 10 (\u{C9E7}\u{C740} \u{B4DC}\u{B798}\u{ADF8}\u{B85C} \u{D328}\u{B110} \u{C804}\u{D658})</div>
      <Flicking :options="{ threshold: 10, align: 'center' }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
    </div>

    <!-- threshold: 40 (\u{AE30}\u{BCF8}\u{AC12}) -->
    <div class="demo-container">
      <div class="demo-label">threshold: 40 (\u{AE30}\u{BCF8}\u{AC12})</div>
      <Flicking :options="{ threshold: 40, align: 'center' }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
    </div>

    <!-- threshold: 100 (\u{B454}\u{AC10}) -->
    <div class="demo-container">
      <div class="demo-label">threshold: 100 (\u{AE34} \u{B4DC}\u{B798}\u{ADF8} \u{D544}\u{C694})</div>
      <Flicking :options="{ threshold: 100, align: 'center' }">
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
</style>`,s=(0,n.jsx)(d.A,{template:"vue3",code:l,css:a}),t=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

// threshold: 10 (\u{BBFC}\u{AC10})
new Flicking("#flick-low", {
  threshold: 10,
  align: "center"
});

// threshold: 40 (\u{AE30}\u{BCF8}\u{AC12})
new Flicking("#flick-default", {
  threshold: 40,
  align: "center"
});

// threshold: 100 (\u{B454}\u{AC10})
new Flicking("#flick-high", {
  threshold: 100,
  align: "center"
});`,r=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <!-- threshold: 10 (\u{BBFC}\u{AC10}) -->
  <div class="demo-container">
    <div class="demo-label">threshold: 10 (\u{C9E7}\u{C740} \u{B4DC}\u{B798}\u{ADF8}\u{B85C} \u{D328}\u{B110} \u{C804}\u{D658})</div>
    <div id="flick-low" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </div>
    </div>
  </div>

  <!-- threshold: 40 (\u{AE30}\u{BCF8}\u{AC12}) -->
  <div class="demo-container">
    <div class="demo-label">threshold: 40 (\u{AE30}\u{BCF8}\u{AC12})</div>
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

  <!-- threshold: 100 (\u{B454}\u{AC10}) -->
  <div class="demo-container">
    <div class="demo-label">threshold: 100 (\u{AE34} \u{B4DC}\u{B798}\u{ADF8} \u{D544}\u{C694})</div>
    <div id="flick-high" class="flicking-viewport">
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
</html>`,o=(0,n.jsx)(d.A,{template:"vanilla",code:t,html:r,css:a});return(0,n.jsx)(c.A,{options:{},panels:[],react:i,vue3:s,js:o})},o={title:"Threshold",id:"threshold",slug:"/demos/basic/threshold",sidebar_position:11,description:"threshold \uC635\uC158\uC73C\uB85C \uD328\uB110 \uC804\uD658\uC5D0 \uD544\uC694\uD55C \uCD5C\uC18C \uB4DC\uB798\uADF8 \uAC70\uB9AC\uB97C \uC124\uC815\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","threshold","drag","sensitivity","\uC784\uACC4\uAC12","\uBBFC\uAC10\uB3C4"]},h="Threshold",p={},g=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uAC12\uBCC4 \uBE44\uAD50",id:"\uAC12\uBCC4-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"threshold \uB3D9\uC791 \uC6D0\uB9AC",id:"threshold-\uB3D9\uC791-\uC6D0\uB9AC",level:3},{value:"\uC5F0\uAD00 \uC635\uC158",id:"\uC5F0\uAD00-\uC635\uC158",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function v(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"threshold",children:"Threshold"})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#threshold",children:(0,n.jsx)(i.code,{children:"threshold"})})," \uC635\uC158\uC73C\uB85C \uD328\uB110 \uC804\uD658\uC5D0 \uD544\uC694\uD55C \uCD5C\uC18C \uB4DC\uB798\uADF8 \uAC70\uB9AC\uB97C \uD53D\uC140 \uB2E8\uC704\uB85C \uC124\uC815\uD569\uB2C8\uB2E4. \uC774 \uAC12\uBCF4\uB2E4 \uC9E7\uAC8C \uB4DC\uB798\uADF8\uD558\uBA74 \uC6D0\uB798 \uD328\uB110\uB85C \uBCF5\uADC0\uD569\uB2C8\uB2E4."]}),"\n",(0,n.jsx)(r,{}),"\n",(0,n.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,n.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"\uC635\uC158"}),(0,n.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,n.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,n.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#threshold",children:(0,n.jsx)(i.code,{children:"threshold"})})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"number"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"40"})}),(0,n.jsx)(i.td,{children:"\uD328\uB110 \uC804\uD658 \uCD5C\uC18C \uB4DC\uB798\uADF8 \uAC70\uB9AC (px)"})]})})]}),"\n",(0,n.jsx)(i.h3,{id:"\uAC12\uBCC4-\uBE44\uAD50",children:"\uAC12\uBCC4 \uBE44\uAD50"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"\uAC12"}),(0,n.jsx)(i.th,{children:"\uB3D9\uC791"}),(0,n.jsx)(i.th,{children:"\uC801\uD569\uD55C \uC0C1\uD669"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"10"})}),(0,n.jsx)(i.td,{children:"\uC9E7\uC740 \uB4DC\uB798\uADF8\uB85C \uC27D\uAC8C \uC804\uD658"}),(0,n.jsx)(i.td,{children:"\uBE60\uB978 \uD0D0\uC0C9, \uBBFC\uAC10\uD55C \uBC18\uC751 \uD544\uC694 \uC2DC"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"40"})}),(0,n.jsx)(i.td,{children:"\uC801\uB2F9\uD55C \uB4DC\uB798\uADF8 \uD544\uC694 (\uAE30\uBCF8\uAC12)"}),(0,n.jsx)(i.td,{children:"\uC77C\uBC18 \uCE90\uB7EC\uC140"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"100"})}),(0,n.jsx)(i.td,{children:"\uAE34 \uB4DC\uB798\uADF8 \uD544\uC694, \uC9E7\uC740 \uB4DC\uB798\uADF8\uB294 \uBCF5\uADC0"}),(0,n.jsx)(i.td,{children:"\uC2E4\uC218 \uBC29\uC9C0, \uC2E0\uC911\uD55C \uC804\uD658 \uD544\uC694 \uC2DC"})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,n.jsx)(i.h3,{id:"threshold-\uB3D9\uC791-\uC6D0\uB9AC",children:"threshold \uB3D9\uC791 \uC6D0\uB9AC"}),"\n",(0,n.jsx)(i.p,{children:"\uC0AC\uC6A9\uC790\uAC00 \uB4DC\uB798\uADF8 \uD6C4 \uC190\uC744 \uB5C4 \uB54C, \uC774\uB3D9 \uAC70\uB9AC\uAC00 threshold\uBCF4\uB2E4 \uD06C\uBA74 \uB2E4\uC74C/\uC774\uC804 \uD328\uB110\uB85C \uC804\uD658\uB418\uACE0, \uC791\uC73C\uBA74 \uC6D0\uB798 \uD328\uB110\uB85C \uBCF5\uADC0\uD569\uB2C8\uB2E4."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:"// \uB0AE\uC740 \uAC12: \uBBFC\uAC10\uD55C \uC804\uD658\nthreshold: 10  // 10px \uC774\uC0C1 \uB4DC\uB798\uADF8 \uC2DC \uC804\uD658\n\n// \uAE30\uBCF8\uAC12\nthreshold: 40  // 40px \uC774\uC0C1 \uB4DC\uB798\uADF8 \uC2DC \uC804\uD658\n\n// \uB192\uC740 \uAC12: \uC2E0\uC911\uD55C \uC804\uD658\nthreshold: 100  // 100px \uC774\uC0C1 \uB4DC\uB798\uADF8 \uC2DC \uC804\uD658\n"})}),"\n",(0,n.jsx)(i.h3,{id:"\uC5F0\uAD00-\uC635\uC158",children:"\uC5F0\uAD00 \uC635\uC158"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:'moveType: "strict"\uC640\uC758 \uAD00\uACC4'}),': "strict" \uBAA8\uB4DC\uC5D0\uC11C threshold\uB294 \uD55C \uD328\uB110 \uC804\uD658 \uC5EC\uBD80\uB97C \uACB0\uC815\uD558\uB294 \uB370 \uD2B9\uD788 \uC911\uC694\uD569\uB2C8\uB2E4.']}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"dragThreshold\uC640\uC758 \uCC28\uC774"}),": ",(0,n.jsx)(i.code,{children:"dragThreshold"}),"\uB294 \uB4DC\uB798\uADF8 \uC778\uC2DD \uCD5C\uC18C \uAC70\uB9AC\uC774\uACE0, ",(0,n.jsx)(i.code,{children:"threshold"}),"\uB294 \uD328\uB110 \uC804\uD658 \uCD5C\uC18C \uAC70\uB9AC\uC785\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,n.jsx)(i.admonition,{title:"\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"\uB0AE\uC740 \uAC12 (10~20px)"}),": \uBE60\uB978 \uCF58\uD150\uCE20 \uD0D0\uC0C9, \uC2A4\uC640\uC774\uD504 \uBBFC\uAC10\uB3C4\uB97C \uB192\uC774\uACE0 \uC2F6\uC744 \uB54C"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"\uAE30\uBCF8\uAC12 (40px)"}),": \uC77C\uBC18\uC801\uC778 \uCE90\uB7EC\uC140, \uC774\uBBF8\uC9C0 \uAC24\uB7EC\uB9AC"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"\uB192\uC740 \uAC12 (80~100px)"}),": \uC2E4\uC218\uB85C \uC778\uD55C \uC804\uD658 \uBC29\uC9C0, \uC911\uC694\uD55C \uCF58\uD150\uCE20\uB97C \uBCF4\uC5EC\uC904 \uB54C"]}),"\n"]})}),"\n",(0,n.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,n.jsx)(i.admonition,{title:"\uB108\uBB34 \uB0AE\uC740 threshold",type:"warning",children:(0,n.jsx)(i.p,{children:"threshold\uAC00 \uB108\uBB34 \uB0AE\uC73C\uBA74 \uC758\uB3C4\uCE58 \uC54A\uC740 \uD328\uB110 \uC804\uD658\uC774 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD2B9\uD788 \uD130\uCE58 \uB514\uBC14\uC774\uC2A4\uC5D0\uC11C \uC2A4\uD06C\uB864\uACFC \uC2A4\uC640\uC774\uD504\uAC00 \uD63C\uB3D9\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4."})}),"\n",(0,n.jsx)(i.admonition,{title:"\uB108\uBB34 \uB192\uC740 threshold",type:"warning",children:(0,n.jsx)(i.p,{children:"threshold\uAC00 \uB108\uBB34 \uB192\uC73C\uBA74 \uC0AC\uC6A9\uC790\uAC00 \uC2A4\uC640\uC774\uD504\uAC00 \uB3D9\uC791\uD558\uC9C0 \uC54A\uB294\uB2E4\uACE0 \uB290\uB084 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C \uD328\uB110 \uB108\uBE44\uC758 10~20% \uC815\uB3C4\uAC00 \uC801\uC808\uD569\uB2C8\uB2E4."})}),"\n",(0,n.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,n.jsx)(i.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#movetype",children:(0,n.jsx)(i.code,{children:"moveType"})}),": \uC774\uB3D9 \uB3D9\uC791 \uBAA8\uB4DC (strict\uC640 \uD568\uAED8 \uC0AC\uC6A9 \uC2DC \uC911\uC694)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#dragthreshold",children:(0,n.jsx)(i.code,{children:"dragThreshold"})}),": \uB4DC\uB798\uADF8 \uC778\uC2DD \uCD5C\uC18C \uAC70\uB9AC"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"./movement-types",children:"Movement Types"}),": strict \uBAA8\uB4DC\uC5D0\uC11C threshold \uD65C\uC6A9"]}),"\n"]})]})}function m(e={}){let{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(v,{...e})}):v(e)}},27449(e,i,l){l.d(i,{A:()=>o});var s=l(65723),n=l(19612);l(22155);let t="^4.11.4",d={react:{"@egjs/react-flicking":t,"@egjs/flicking":t},vue3:{"@egjs/vue3-flicking":t,"@egjs/flicking":t},vanilla:{"@egjs/flicking":t}},c=`<!DOCTYPE html>
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
`;function o({code:e,html:i,template:l="react",dependencies:t={},files:o={},css:h=""}){var p;let g,v,m;return(0,s.jsx)(n.OZ,{template:"vue3"===l?"vue":"vanilla"===l?"vanilla":"react",files:(m={"/styles.css":{code:v=h?`${r}
${h}`:r},...o},"react"===l?{"/App.tsx":{code:e},"/index.js":{code:a,hidden:!0},...m}:"vue3"===l?{"/src/App.vue":{code:e},...m}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),l=[],s=[],n=!1;for(let e of i)n?s.push(e):e.trimStart().startsWith("import ")||""===e.trim()?l.push(e.replace('"../styles.css"','"./styles.css"')):(n=!0,s.push(e));for(;s.length>0&&""===s[s.length-1].trim();)s.pop();return[...l,"","const _run = () => {",...s.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:v},"/index.html":{code:(g="<style>.flicking-viewport{opacity:0}</style>",(p=i||c).includes("</head>")?p.replace("</head>",`${g}
</head>`):g+p)},...o}),customSetup:{dependencies:{...d[l],...t}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===l?["/App.tsx","/styles.css"]:"vue3"===l?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===l?"/App.tsx":"vue3"===l?"/src/App.vue":"/src/index.js"}})}},72722(e,i,l){l.d(i,{A:()=>j});var s=l(65723),n=l(34622),t=l(7210),d=l(78863);l(22155);let c=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,a=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",r=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${c(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(i=>`${i}: ${c(e[i],"'")}`).join(", ")}`,h=(e,{prefix:i,includeFlicking:l=!0}={})=>{let s=l?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&s.push(...e),`${s.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},p=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,g=({options:e,panels:i,events:l={},methods:t={},plugins:d=[],siblings:o=[],imports:p=[],viewportClass:g=""})=>{let v=e=>`${Object.keys(e).map(i=>`${i}: ${c(e[i])}`).join(",\n  ")}`,m=Object.keys(t).map(e=>`const ${e} = ${t[e]};
`).join(""),j=e?`const flicking = new Flicking("#flick", {
  ${v(e)}
});

`:'const flicking = new Flicking("#flick")',f=d.length>0?`flicking.addPlugins(${d.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?v(e[1]):e[1]??""}
}`:""})`)});`:"",k=[...d.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...p],x=Object.keys(l).map(e=>{let i=l[e];return`flicking.on("${e}", ${i})
`}).join(""),$=i.filter(e=>e.isSlot);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${g&&` ${g}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${$.length?`
  ${$.map(e=>`<${e.tag}${a(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${a(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,s.jsx)(n.A,{className:"language-js",title:"js",children:`${h(k)}

${m}${j}${f}${x}`.trim()})]})},v=({options:e,panels:i,events:l={},methods:t={},plugins:d,siblings:c,imports:o=[],viewportClass:g=""})=>{let v=d?`
  private _plugins = [${p(d)}];
`:"",m=i.filter(e=>e.isSlot),j=[["{ Component }","react"],[m.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],f=Object.keys(t).map(e=>`
const ${e} = ${t[e]};`).join("");f&&(f+="\n"),d&&j.push([`{ ${d.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),j.push(...o);let k=m.length?`
      <ViewportSlot>
        ${m.map(e=>`<${e.tag}${a(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",x=Object.keys(l).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${l[e]}}`).join("");return(0,s.jsx)(n.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${h(j,{includeFlicking:!1})}
${f}
export default class DemoComponent extends Component {${v}
  public render() {
    return ${c?"<>\n    ":""}<Flicking${g&&` className="${g}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${d?" plugins={this._plugins}":""}${x}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${k}
    </Flicking>${c?`
    ${c.map(e=>`<${e.tag}${a(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},m=({options:e,panels:i,events:l={},methods:t={},plugins:d,siblings:c=[],imports:g=[],viewportClass:v=""})=>{let m=o(e),j=i.filter(e=>e.isSlot),f=d?`,
  data() {
    return {
      plugins: [${p(d)}]
    }
  }`:"",k=j.length?`
  <template #viewport>
    ${j.map(e=>`<${e.tag}${a(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",x=[...(d??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],$=Object.keys(t),u=$.length>0?`,
  methods: {
    ${$.map(e=>`${e}: ${t[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",b=Object.keys(l).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${l[e]}"`).join("");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.A,{className:"language-html",title:"template",children:`<Flicking${v&&` class="${v}"`}${e?` :options="{ ${m} }"`:""}${d?' :plugins="plugins"':""}${b}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n  ")}${k}
</Flicking>${c?`
${c.map(e=>`<${e.tag}${a(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,s.jsx)(n.A,{className:"language-js",title:"script",children:`${h(x,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${f}${u}
}`})]})},j=({js:e,react:i,vue3:l,style:c,...a})=>(0,s.jsxs)("div",{children:[(0,s.jsxs)(d.A,{groupId:"cfc",defaultValue:"js",children:[(0,s.jsx)(t.A,{value:"react",label:"React",children:i||(0,s.jsx)(v,{...a})}),(0,s.jsx)(t.A,{value:"vue3",label:"Vue@3",children:l||(0,s.jsx)(m,{...a})}),(0,s.jsx)(t.A,{value:"js",label:"JavaScript",children:e||(0,s.jsx)(g,{...a})})]}),c&&(0,s.jsx)(n.A,{className:"language-css",title:"style",children:`${c}`})]})}}]);