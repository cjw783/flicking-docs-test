"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["2392"],{25213(e,i,l){l.r(i),l.d(i,{metadata:()=>n,default:()=>j,frontMatter:()=>o,contentTitle:()=>p,toc:()=>g,assets:()=>u});var n=JSON.parse('{"id":"demos/basic/circular","title":"Circular","description":"circular \uC635\uC158\uC73C\uB85C \uCCAB \uBC88\uC9F8\uC640 \uB9C8\uC9C0\uB9C9 \uD328\uB110\uC744 \uC5F0\uACB0\uD558\uC5EC \uBB34\uD55C \uB8E8\uD504 \uD0D0\uC0C9\uC744 \uD65C\uC131\uD654\uD569\uB2C8\uB2E4","source":"@site/docs/demos/basic/circular.mdx","sourceDirName":"demos/basic","slug":"/demos/basic/circular","permalink":"/flicking-docs-test/ko/docs/demos/basic/circular","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/basic/circular.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Circular","id":"circular","slug":"/demos/basic/circular","sidebar_position":3,"description":"circular \uC635\uC158\uC73C\uB85C \uCCAB \uBC88\uC9F8\uC640 \uB9C8\uC9C0\uB9C9 \uD328\uB110\uC744 \uC5F0\uACB0\uD558\uC5EC \uBB34\uD55C \uB8E8\uD504 \uD0D0\uC0C9\uC744 \uD65C\uC131\uD654\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","circular","infinite","loop","\uC21C\uD658","\uBB34\uD55C"]},"sidebar":"demosSidebar","previous":{"title":"Alignment","permalink":"/flicking-docs-test/ko/docs/demos/basic/alignment"},"next":{"title":"Movement Types","permalink":"/flicking-docs-test/ko/docs/demos/basic/movement-types"}}'),c=l(65723),s=l(54187),r=l(27449),a=l(72722);l(22155);let t=`
.flicking-panel {
  width: 60%;
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
`,d=()=>{let e=`import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "./styles.css";

export default function App() {
  return (
    <div>
      {/* circular: false (\u{AE30}\u{BCF8}\u{AC12}) */}
      <div className="demo-container">
        <div className="demo-label">circular: false (\u{AE30}\u{BCF8}\u{AC12})</div>
        <Flicking circular={false} align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>

      {/* circular: true - \u{BB34}\u{D55C} \u{B8E8}\u{D504} */}
      <div className="demo-container">
        <div className="demo-label">circular: true (\u{BB34}\u{D55C} \u{B8E8}\u{D504})</div>
        <Flicking circular={true} align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>
    </div>
  );
}`,i=(0,c.jsx)(r.A,{template:"react",code:e,css:t}),l=`<template>
  <div>
    <!-- circular: false (\u{AE30}\u{BCF8}\u{AC12}) -->
    <div class="demo-container">
      <div class="demo-label">circular: false (\u{AE30}\u{BCF8}\u{AC12})</div>
      <Flicking :options="{ circular: false, align: 'center' }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
    </div>

    <!-- circular: true - \u{BB34}\u{D55C} \u{B8E8}\u{D504} -->
    <div class="demo-container">
      <div class="demo-label">circular: true (\u{BB34}\u{D55C} \u{B8E8}\u{D504})</div>
      <Flicking :options="{ circular: true, align: 'center' }">
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
  width: 60%;
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
</style>`,n=(0,c.jsx)(r.A,{template:"vue3",code:l,css:t}),s=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

// circular: false (\u{AE30}\u{BCF8}\u{AC12})
new Flicking("#flick-normal", {
  circular: false,
  align: "center"
});

// circular: true (\u{BB34}\u{D55C} \u{B8E8}\u{D504})
new Flicking("#flick-circular", {
  circular: true,
  align: "center"
});`,d=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <!-- circular: false (\u{AE30}\u{BCF8}\u{AC12}) -->
  <div class="demo-container">
    <div class="demo-label">circular: false (\u{AE30}\u{BCF8}\u{AC12})</div>
    <div id="flick-normal" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </div>
    </div>
  </div>

  <!-- circular: true (\u{BB34}\u{D55C} \u{B8E8}\u{D504}) -->
  <div class="demo-container">
    <div class="demo-label">circular: true (\u{BB34}\u{D55C} \u{B8E8}\u{D504})</div>
    <div id="flick-circular" class="flicking-viewport">
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
</html>`,o=(0,c.jsx)(r.A,{template:"vanilla",code:s,html:d,css:t});return(0,c.jsx)(a.A,{options:{},panels:[],react:i,vue3:n,js:o})},o={title:"Circular",id:"circular",slug:"/demos/basic/circular",sidebar_position:3,description:"circular \uC635\uC158\uC73C\uB85C \uCCAB \uBC88\uC9F8\uC640 \uB9C8\uC9C0\uB9C9 \uD328\uB110\uC744 \uC5F0\uACB0\uD558\uC5EC \uBB34\uD55C \uB8E8\uD504 \uD0D0\uC0C9\uC744 \uD65C\uC131\uD654\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","circular","infinite","loop","\uC21C\uD658","\uBB34\uD55C"]},p="Circular",u={},g=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uAC12\uBCC4 \uBE44\uAD50",id:"\uAC12\uBCC4-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"circular: false \uC0C1\uC138",id:"circular-false-\uC0C1\uC138",level:3},{value:"circular: true \uC0C1\uC138",id:"circular-true-\uC0C1\uC138",level:3},{value:"circularFallback \uC0C1\uC138",id:"circularfallback-\uC0C1\uC138",level:3},{value:"\uC5F0\uAD00 \uC635\uC158",id:"\uC5F0\uAD00-\uC635\uC158",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function h(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.header,{children:(0,c.jsx)(i.h1,{id:"circular",children:"Circular"})}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#circular",children:(0,c.jsx)(i.code,{children:"circular"})})," \uC635\uC158\uC73C\uB85C \uCCAB \uBC88\uC9F8\uC640 \uB9C8\uC9C0\uB9C9 \uD328\uB110\uC744 \uC5F0\uACB0\uD558\uC5EC \uBB34\uD55C \uB8E8\uD504 \uD0D0\uC0C9\uC744 \uD65C\uC131\uD654\uD569\uB2C8\uB2E4. \uB9C8\uC9C0\uB9C9 \uD328\uB110\uC5D0\uC11C \uB2E4\uC74C\uC73C\uB85C \uC774\uB3D9\uD558\uBA74 \uCCAB \uD328\uB110\uB85C, \uCCAB \uD328\uB110\uC5D0\uC11C \uC774\uC804\uC73C\uB85C \uC774\uB3D9\uD558\uBA74 \uB9C8\uC9C0\uB9C9 \uD328\uB110\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4."]}),"\n",(0,c.jsx)(d,{}),"\n",(0,c.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,c.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,c.jsxs)(i.table,{children:[(0,c.jsx)(i.thead,{children:(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.th,{children:"\uC635\uC158"}),(0,c.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,c.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,c.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,c.jsxs)(i.tbody,{children:[(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:(0,c.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#circular",children:(0,c.jsx)(i.code,{children:"circular"})})}),(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:"boolean"})}),(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:"false"})}),(0,c.jsx)(i.td,{children:"\uBB34\uD55C \uB8E8\uD504 \uBAA8\uB4DC \uD65C\uC131\uD654"})]}),(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:(0,c.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#circularfallback",children:(0,c.jsx)(i.code,{children:"circularFallback"})})}),(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:'"linear" | "bound"'})}),(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:'"linear"'})}),(0,c.jsx)(i.td,{children:"circular \uD65C\uC131\uD654 \uBD88\uAC00 \uC2DC \uB300\uCCB4 \uB3D9\uC791"})]})]})]}),"\n",(0,c.jsx)(i.h3,{id:"\uAC12\uBCC4-\uBE44\uAD50",children:"\uAC12\uBCC4 \uBE44\uAD50"}),"\n",(0,c.jsxs)(i.table,{children:[(0,c.jsx)(i.thead,{children:(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.th,{children:"\uAC12"}),(0,c.jsx)(i.th,{children:"\uB3D9\uC791"}),(0,c.jsx)(i.th,{children:"\uC801\uD569\uD55C \uC0C1\uD669"})]})}),(0,c.jsxs)(i.tbody,{children:[(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:"false"})}),(0,c.jsx)(i.td,{children:"\uCCAB/\uB9C8\uC9C0\uB9C9 \uD328\uB110\uC5D0\uC11C \uB354 \uC774\uC0C1 \uC774\uB3D9 \uBD88\uAC00"}),(0,c.jsx)(i.td,{children:"\uC720\uD55C\uD55C \uCF58\uD150\uCE20, \uC2DC\uC791/\uB05D\uC774 \uBA85\uD655\uD55C UI"})]}),(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:"true"})}),(0,c.jsx)(i.td,{children:"\uCCAB\u2194\uB9C8\uC9C0\uB9C9 \uD328\uB110\uC774 \uC5F0\uACB0\uB418\uC5B4 \uBB34\uD55C \uD0D0\uC0C9"}),(0,c.jsx)(i.td,{children:"\uCE90\uB7EC\uC140, \uAC24\uB7EC\uB9AC, \uC5F0\uC18D \uBE0C\uB77C\uC6B0\uC9D5"})]})]})]}),"\n",(0,c.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,c.jsx)(i.h3,{id:"circular-false-\uC0C1\uC138",children:"circular: false \uC0C1\uC138"}),"\n",(0,c.jsx)(i.p,{children:"\uAE30\uBCF8\uAC12\uC785\uB2C8\uB2E4. \uCCAB \uBC88\uC9F8 \uD328\uB110\uC5D0\uC11C \uC774\uC804\uC73C\uB85C \uC774\uB3D9\uD558\uAC70\uB098 \uB9C8\uC9C0\uB9C9 \uD328\uB110\uC5D0\uC11C \uB2E4\uC74C\uC73C\uB85C \uC774\uB3D9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC720\uD55C\uD55C \uCF58\uD150\uCE20\uB97C \uD45C\uC2DC\uD560 \uB54C \uC801\uD569\uD569\uB2C8\uB2E4."}),"\n",(0,c.jsx)(i.h3,{id:"circular-true-\uC0C1\uC138",children:"circular: true \uC0C1\uC138"}),"\n",(0,c.jsx)(i.p,{children:"\uCCAB \uBC88\uC9F8\uC640 \uB9C8\uC9C0\uB9C9 \uD328\uB110\uC774 \uB0B4\uBD80\uC801\uC73C\uB85C \uC5F0\uACB0\uB429\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uB294 \uC5B4\uB290 \uBC29\uD5A5\uC73C\uB85C\uB4E0 \uACC4\uC18D \uC2A4\uD06C\uB864\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD328\uB110\uC774 \uBCF5\uC81C\uB418\uB294 \uAC83\uC774 \uC544\uB2C8\uB77C, \uC704\uCE58\uAC00 \uC7AC\uACC4\uC0B0\uB418\uC5B4 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uC5F0\uACB0\uB429\uB2C8\uB2E4."}),"\n",(0,c.jsx)(i.h3,{id:"circularfallback-\uC0C1\uC138",children:"circularFallback \uC0C1\uC138"}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"circular: true"}),"\uC774\uC9C0\uB9CC \uD65C\uC131\uD654 \uC870\uAC74\uC744 \uB9CC\uC871\uD558\uC9C0 \uBABB\uD560 \uB54C \uB300\uCCB4 \uB3D9\uC791\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4:"]}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.code,{children:'"linear"'}),": \uC77C\uBC18 \uBAA8\uB4DC\uB85C \uB3D9\uC791 (\uCCAB/\uB9C8\uC9C0\uB9C9\uC5D0\uC11C \uBA48\uCDA4)"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.code,{children:'"bound"'}),": bound \uBAA8\uB4DC\uB85C \uB3D9\uC791 (\uACBD\uACC4\uC5D0\uC11C \uBC14\uC6B4\uC2A4)"]}),"\n"]}),"\n",(0,c.jsx)(i.h3,{id:"\uC5F0\uAD00-\uC635\uC158",children:"\uC5F0\uAD00 \uC635\uC158"}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:"bound\uC640\uC758 \uAD00\uACC4"}),": ",(0,c.jsx)(i.code,{children:"circular: true"}),"\uC640 ",(0,c.jsx)(i.code,{children:"bound: true"}),"\uB97C \uD568\uAED8 \uC124\uC815\uD558\uBA74 circular\uAC00 \uC6B0\uC120\uB429\uB2C8\uB2E4. bound\uB294 \uBB34\uC2DC\uB429\uB2C8\uB2E4."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:"align\uACFC\uC758 \uAD00\uACC4"}),": ",(0,c.jsx)(i.code,{children:"circular: true"})," + ",(0,c.jsx)(i.code,{children:'align: "center"'})," \uC870\uD569\uC774 \uAC00\uC7A5 \uC77C\uBC18\uC801\uC778 \uCE90\uB7EC\uC140 \uD328\uD134\uC785\uB2C8\uB2E4."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:"panelsPerView\uC640\uC758 \uAD00\uACC4"}),": ",(0,c.jsx)(i.code,{children:"panelsPerView"})," \uC124\uC815 \uC2DC \uC804\uCCB4 \uD328\uB110 \uD06C\uAE30 \uACC4\uC0B0\uC5D0 \uC601\uD5A5\uC744 \uC8FC\uC5B4 circular \uD65C\uC131\uD654 \uC870\uAC74\uC5D0 \uC601\uD5A5\uC744 \uC904 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,c.jsx)(i.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,c.jsx)(i.admonition,{title:"\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:"circular: true"}),": \uC774\uBBF8\uC9C0 \uAC24\uB7EC\uB9AC, \uC81C\uD488 \uCE90\uB7EC\uC140, \uBC30\uB108 \uC2AC\uB77C\uC774\uB354, \uB04A\uAE40 \uC5C6\uB294 \uBE0C\uB77C\uC6B0\uC9D5"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:"circular: false"}),": \uC628\uBCF4\uB529 \uD654\uBA74, \uB2E8\uACC4\uBCC4 \uC704\uC800\uB4DC, \uBA85\uD655\uD55C \uC2DC\uC791/\uB05D\uC774 \uC788\uB294 \uCF58\uD150\uCE20"]}),"\n"]})}),"\n",(0,c.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,c.jsx)(i.admonition,{title:"\uD65C\uC131\uD654 \uC870\uAC74",type:"warning",children:(0,c.jsxs)(i.p,{children:["circular \uBAA8\uB4DC\uB294 ",(0,c.jsx)(i.strong,{children:"\uC804\uCCB4 \uD328\uB110 \uD06C\uAE30 \u2265 \uBDF0\uD3EC\uD2B8 \uD06C\uAE30"}),"\uC77C \uB54C\uB9CC \uD65C\uC131\uD654\uB429\uB2C8\uB2E4. \uC870\uAC74\uC744 \uB9CC\uC871\uD558\uC9C0 \uBABB\uD558\uBA74 ",(0,c.jsx)(i.code,{children:"circularFallback"}),"\uC5D0 \uC9C0\uC815\uB41C \uBAA8\uB4DC\uB85C \uC790\uB3D9 \uC804\uD658\uB429\uB2C8\uB2E4."]})}),"\n",(0,c.jsx)(i.admonition,{title:"bound\uC640 \uD568\uAED8 \uC0AC\uC6A9 \uBD88\uAC00",type:"warning",children:(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"circular: true"}),"\uC640 ",(0,c.jsx)(i.code,{children:"bound: true"}),"\uB294 \uC0C1\uD638 \uBC30\uD0C0\uC801\uC785\uB2C8\uB2E4. \uB458 \uB2E4 true\uC774\uBA74 circular\uAC00 \uC6B0\uC120\uB418\uACE0 bound\uB294 \uBB34\uC2DC\uB429\uB2C8\uB2E4."]})}),"\n",(0,c.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,c.jsx)(i.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#bound",children:(0,c.jsx)(i.code,{children:"bound"})}),": \uACBD\uACC4 \uC81C\uD55C \uBAA8\uB4DC (circular\uC640 \uC0C1\uD638 \uBC30\uD0C0)"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#align",children:(0,c.jsx)(i.code,{children:"align"})}),": \uD328\uB110 \uC815\uB82C \uBC29\uC2DD"]}),"\n"]}),"\n",(0,c.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"./alignment",children:"Alignment"}),": \uC815\uB82C \uC635\uC158\uACFC circular \uC870\uD569"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"./bound",children:"Bound"}),": \uACBD\uACC4 \uC81C\uD55C \uBAA8\uB4DC"]}),"\n"]})]})}function j(e={}){let{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,c.jsx)(i,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},27449(e,i,l){l.d(i,{A:()=>o});var n=l(65723),c=l(19612);l(22155);let s="^4.11.4",r={react:{"@egjs/react-flicking":s,"@egjs/flicking":s},vue3:{"@egjs/vue3-flicking":s,"@egjs/flicking":s},vanilla:{"@egjs/flicking":s}},a=`<!DOCTYPE html>
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
`;function o({code:e,html:i,template:l="react",dependencies:s={},files:o={},css:p=""}){var u;let g,h,j;return(0,n.jsx)(c.OZ,{template:"vue3"===l?"vue":"vanilla"===l?"vanilla":"react",files:(j={"/styles.css":{code:h=p?`${d}
${p}`:d},...o},"react"===l?{"/App.tsx":{code:e},"/index.js":{code:t,hidden:!0},...j}:"vue3"===l?{"/src/App.vue":{code:e},...j}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),l=[],n=[],c=!1;for(let e of i)c?n.push(e):e.trimStart().startsWith("import ")||""===e.trim()?l.push(e.replace('"../styles.css"','"./styles.css"')):(c=!0,n.push(e));for(;n.length>0&&""===n[n.length-1].trim();)n.pop();return[...l,"","const _run = () => {",...n.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:h},"/index.html":{code:(g="<style>.flicking-viewport{opacity:0}</style>",(u=i||a).includes("</head>")?u.replace("</head>",`${g}
</head>`):g+u)},...o}),customSetup:{dependencies:{...r[l],...s}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===l?["/App.tsx","/styles.css"]:"vue3"===l?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===l?"/App.tsx":"vue3"===l?"/src/App.vue":"/src/index.js"}})}},72722(e,i,l){l.d(i,{A:()=>m});var n=l(65723),c=l(34622),s=l(7210),r=l(78863);l(22155);let a=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,t=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",d=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${a(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(i=>`${i}: ${a(e[i],"'")}`).join(", ")}`,p=(e,{prefix:i,includeFlicking:l=!0}={})=>{let n=l?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&n.push(...e),`${n.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},u=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,g=({options:e,panels:i,events:l={},methods:s={},plugins:r=[],siblings:o=[],imports:u=[],viewportClass:g=""})=>{let h=e=>`${Object.keys(e).map(i=>`${i}: ${a(e[i])}`).join(",\n  ")}`,j=Object.keys(s).map(e=>`const ${e} = ${s[e]};
`).join(""),m=e?`const flicking = new Flicking("#flick", {
  ${h(e)}
});

`:'const flicking = new Flicking("#flick")',v=r.length>0?`flicking.addPlugins(${r.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?h(e[1]):e[1]??""}
}`:""})`)});`:"",x=[...r.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...u],f=Object.keys(l).map(e=>{let i=l[e];return`flicking.on("${e}", ${i})
`}).join(""),k=i.filter(e=>e.isSlot);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${g&&` ${g}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${t(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${k.length?`
  ${k.map(e=>`<${e.tag}${t(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${t(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,n.jsx)(c.A,{className:"language-js",title:"js",children:`${p(x)}

${j}${m}${v}${f}`.trim()})]})},h=({options:e,panels:i,events:l={},methods:s={},plugins:r,siblings:a,imports:o=[],viewportClass:g=""})=>{let h=r?`
  private _plugins = [${u(r)}];
`:"",j=i.filter(e=>e.isSlot),m=[["{ Component }","react"],[j.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],v=Object.keys(s).map(e=>`
const ${e} = ${s[e]};`).join("");v&&(v+="\n"),r&&m.push([`{ ${r.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),m.push(...o);let x=j.length?`
      <ViewportSlot>
        ${j.map(e=>`<${e.tag}${t(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",f=Object.keys(l).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${l[e]}}`).join("");return(0,n.jsx)(c.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(m,{includeFlicking:!1})}
${v}
export default class DemoComponent extends Component {${h}
  public render() {
    return ${a?"<>\n    ":""}<Flicking${g&&` className="${g}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${r?" plugins={this._plugins}":""}${f}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${t(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${x}
    </Flicking>${a?`
    ${a.map(e=>`<${e.tag}${t(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},j=({options:e,panels:i,events:l={},methods:s={},plugins:r,siblings:a=[],imports:g=[],viewportClass:h=""})=>{let j=o(e),m=i.filter(e=>e.isSlot),v=r?`,
  data() {
    return {
      plugins: [${u(r)}]
    }
  }`:"",x=m.length?`
  <template #viewport>
    ${m.map(e=>`<${e.tag}${t(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",f=[...(r??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],k=Object.keys(s),$=k.length>0?`,
  methods: {
    ${k.map(e=>`${e}: ${s[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",b=Object.keys(l).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${l[e]}"`).join("");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.A,{className:"language-html",title:"template",children:`<Flicking${h&&` class="${h}"`}${e?` :options="{ ${j} }"`:""}${r?' :plugins="plugins"':""}${b}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${t(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}${x}
</Flicking>${a?`
${a.map(e=>`<${e.tag}${t(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,n.jsx)(c.A,{className:"language-js",title:"script",children:`${p(f,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${v}${$}
}`})]})},m=({js:e,react:i,vue3:l,style:a,...t})=>(0,n.jsxs)("div",{children:[(0,n.jsxs)(r.A,{groupId:"cfc",defaultValue:"js",children:[(0,n.jsx)(s.A,{value:"react",label:"React",children:i||(0,n.jsx)(h,{...t})}),(0,n.jsx)(s.A,{value:"vue3",label:"Vue@3",children:l||(0,n.jsx)(j,{...t})}),(0,n.jsx)(s.A,{value:"js",label:"JavaScript",children:e||(0,n.jsx)(g,{...t})})]}),a&&(0,n.jsx)(c.A,{className:"language-css",title:"style",children:`${a}`})]})}}]);