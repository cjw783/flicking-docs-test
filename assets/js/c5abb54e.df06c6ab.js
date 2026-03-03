"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["1885"],{89968(e,i,n){n.r(i),n.d(i,{metadata:()=>l,default:()=>h,frontMatter:()=>o,contentTitle:()=>p,toc:()=>g,assets:()=>u});var l=JSON.parse('{"id":"demos/basic/bound","title":"Bound","description":"bound \uC635\uC158\uC73C\uB85C \uCE74\uBA54\uB77C\uAC00 \uCCAB/\uB9C8\uC9C0\uB9C9 \uD328\uB110 \uACBD\uACC4\uB97C \uB118\uC5B4\uAC00\uC9C0 \uC54A\uB3C4\uB85D \uC81C\uD55C\uD569\uB2C8\uB2E4","source":"@site/docs/demos/basic/bound.mdx","sourceDirName":"demos/basic","slug":"/demos/basic/bound","permalink":"/flicking-docs-test/docs/demos/basic/bound","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/basic/bound.mdx","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Bound","id":"bound","slug":"/demos/basic/bound","sidebar_position":7,"description":"bound \uC635\uC158\uC73C\uB85C \uCE74\uBA54\uB77C\uAC00 \uCCAB/\uB9C8\uC9C0\uB9C9 \uD328\uB110 \uACBD\uACC4\uB97C \uB118\uC5B4\uAC00\uC9C0 \uC54A\uB3C4\uB85D \uC81C\uD55C\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","bound","bounce","\uACBD\uACC4","\uBC14\uC6B4\uC2A4"]},"sidebar":"demosSidebar","previous":{"title":"Panels Per View","permalink":"/flicking-docs-test/docs/demos/basic/panels-per-view"},"next":{"title":"Duration","permalink":"/flicking-docs-test/docs/demos/basic/duration"}}'),s=n(65723),c=n(54187),d=n(27449),a=n(72722);n(22155);let t=`
.flicking-panel {
  width: 40%;
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
      {/* bound: false (\u{AE30}\u{BCF8}\u{AC12}) */}
      <div className="demo-container">
        <div className="demo-label">bound: false (\u{AE30}\u{BCF8}\u{AC12}, \u{ACBD}\u{ACC4} \u{C81C}\u{D55C} \u{C5C6}\u{C74C})</div>
        <Flicking bound={false} align="prev">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>

      {/* bound: true */}
      <div className="demo-container">
        <div className="demo-label">bound: true (\u{CCAB}/\u{B9C8}\u{C9C0}\u{B9C9} \u{D328}\u{B110}\u{C5D0}\u{C11C} \u{ACBD}\u{ACC4} \u{C81C}\u{D55C})</div>
        <Flicking bound={true} align="prev">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>

      {/* bound: true + bounce \u{C870}\u{C815} */}
      <div className="demo-container">
        <div className="demo-label">bound: true + bounce: "50%" (\u{B354} \u{D070} \u{BC14}\u{C6B4}\u{C2A4})</div>
        <Flicking bound={true} bounce="50%" align="prev">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>
    </div>
  );
}`,i=(0,s.jsx)(d.A,{template:"react",code:e,css:t}),n=`<template>
  <div>
    <!-- bound: false (\u{AE30}\u{BCF8}\u{AC12}) -->
    <div class="demo-container">
      <div class="demo-label">bound: false (\u{AE30}\u{BCF8}\u{AC12}, \u{ACBD}\u{ACC4} \u{C81C}\u{D55C} \u{C5C6}\u{C74C})</div>
      <Flicking :options="{ bound: false, align: 'prev' }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
    </div>

    <!-- bound: true -->
    <div class="demo-container">
      <div class="demo-label">bound: true (\u{CCAB}/\u{B9C8}\u{C9C0}\u{B9C9} \u{D328}\u{B110}\u{C5D0}\u{C11C} \u{ACBD}\u{ACC4} \u{C81C}\u{D55C})</div>
      <Flicking :options="{ bound: true, align: 'prev' }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
    </div>

    <!-- bound: true + bounce \u{C870}\u{C815} -->
    <div class="demo-container">
      <div class="demo-label">bound: true + bounce: "50%" (\u{B354} \u{D070} \u{BC14}\u{C6B4}\u{C2A4})</div>
      <Flicking :options="{ bound: true, bounce: '50%', align: 'prev' }">
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
  width: 40%;
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
</style>`,l=(0,s.jsx)(d.A,{template:"vue3",code:n,css:t}),c=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

// bound: false (\u{AE30}\u{BCF8}\u{AC12})
new Flicking("#flick-unbound", {
  bound: false,
  align: "prev"
});

// bound: true
new Flicking("#flick-bound", {
  bound: true,
  align: "prev"
});

// bound: true + bounce: "50%"
new Flicking("#flick-bounce", {
  bound: true,
  bounce: "50%",
  align: "prev"
});`,r=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <!-- bound: false (\u{AE30}\u{BCF8}\u{AC12}) -->
  <div class="demo-container">
    <div class="demo-label">bound: false (\u{AE30}\u{BCF8}\u{AC12}, \u{ACBD}\u{ACC4} \u{C81C}\u{D55C} \u{C5C6}\u{C74C})</div>
    <div id="flick-unbound" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </div>
    </div>
  </div>

  <!-- bound: true -->
  <div class="demo-container">
    <div class="demo-label">bound: true (\u{CCAB}/\u{B9C8}\u{C9C0}\u{B9C9} \u{D328}\u{B110}\u{C5D0}\u{C11C} \u{ACBD}\u{ACC4} \u{C81C}\u{D55C})</div>
    <div id="flick-bound" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </div>
    </div>
  </div>

  <!-- bound: true + bounce: "50%" -->
  <div class="demo-container">
    <div class="demo-label">bound: true + bounce: "50%" (\u{B354} \u{D070} \u{BC14}\u{C6B4}\u{C2A4})</div>
    <div id="flick-bounce" class="flicking-viewport">
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
</html>`,o=(0,s.jsx)(d.A,{template:"vanilla",code:c,html:r,css:t});return(0,s.jsx)(a.A,{options:{},panels:[],react:i,vue3:l,js:o})},o={title:"Bound",id:"bound",slug:"/demos/basic/bound",sidebar_position:7,description:"bound \uC635\uC158\uC73C\uB85C \uCE74\uBA54\uB77C\uAC00 \uCCAB/\uB9C8\uC9C0\uB9C9 \uD328\uB110 \uACBD\uACC4\uB97C \uB118\uC5B4\uAC00\uC9C0 \uC54A\uB3C4\uB85D \uC81C\uD55C\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","bound","bounce","\uACBD\uACC4","\uBC14\uC6B4\uC2A4"]},p="Bound",u={},g=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uAC12\uBCC4 \uBE44\uAD50",id:"\uAC12\uBCC4-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"bound: false \uC0C1\uC138",id:"bound-false-\uC0C1\uC138",level:3},{value:"bound: true \uC0C1\uC138",id:"bound-true-\uC0C1\uC138",level:3},{value:"bounce \uC0C1\uC138",id:"bounce-\uC0C1\uC138",level:3},{value:"\uC5F0\uAD00 \uC635\uC158",id:"\uC5F0\uAD00-\uC635\uC158",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function v(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"bound",children:"Bound"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#bound",children:(0,s.jsx)(i.code,{children:"bound"})})," \uC635\uC158\uC73C\uB85C \uCE74\uBA54\uB77C\uAC00 \uCCAB \uBC88\uC9F8\uC640 \uB9C8\uC9C0\uB9C9 \uD328\uB110 \uACBD\uACC4\uB97C \uB118\uC5B4\uAC00\uC9C0 \uC54A\uB3C4\uB85D \uC81C\uD55C\uD569\uB2C8\uB2E4. ",(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#bounce",children:(0,s.jsx)(i.code,{children:"bounce"})})," \uC635\uC158\uACFC \uD568\uAED8 \uC0AC\uC6A9\uD558\uC5EC \uACBD\uACC4\uC5D0\uC11C\uC758 \uD0C4\uC131 \uD6A8\uACFC\uB97C \uC870\uC808\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n",(0,s.jsx)(r,{}),"\n",(0,s.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,s.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\uC635\uC158"}),(0,s.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,s.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,s.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#bound",children:(0,s.jsx)(i.code,{children:"bound"})})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"boolean"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"false"})}),(0,s.jsx)(i.td,{children:"\uACBD\uACC4 \uC81C\uD55C \uD65C\uC131\uD654"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#bounce",children:(0,s.jsx)(i.code,{children:"bounce"})})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"number | string | [number | string, number | string]"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'"20%"'})}),(0,s.jsx)(i.td,{children:"\uBC14\uC6B4\uC2A4 \uC601\uC5ED \uD06C\uAE30"})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"\uAC12\uBCC4-\uBE44\uAD50",children:"\uAC12\uBCC4 \uBE44\uAD50"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\uAC12"}),(0,s.jsx)(i.th,{children:"\uB3D9\uC791"}),(0,s.jsx)(i.th,{children:"\uC801\uD569\uD55C \uC0C1\uD669"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"bound: false"})}),(0,s.jsx)(i.td,{children:"\uCCAB/\uB9C8\uC9C0\uB9C9 \uD328\uB110 \uC774\uD6C4\uC5D0\uB3C4 \uBE48 \uACF5\uAC04\uC73C\uB85C \uB4DC\uB798\uADF8 \uAC00\uB2A5"}),(0,s.jsx)(i.td,{children:"\uBB34\uD55C \uC2A4\uD06C\uB864 \uB290\uB08C, \uC790\uC720\uB85C\uC6B4 \uD0D0\uC0C9"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"bound: true"})}),(0,s.jsx)(i.td,{children:"\uCCAB/\uB9C8\uC9C0\uB9C9 \uD328\uB110 \uACBD\uACC4\uC5D0\uC11C \uBA48\uCD94\uACE0 \uBC14\uC6B4\uC2A4 \uD6A8\uACFC"}),(0,s.jsx)(i.td,{children:"\uC720\uD55C\uD55C \uCF58\uD150\uCE20, \uBA85\uD655\uD55C \uC2DC\uC791/\uB05D \uD45C\uC2DC"})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,s.jsx)(i.h3,{id:"bound-false-\uC0C1\uC138",children:"bound: false \uC0C1\uC138"}),"\n",(0,s.jsx)(i.p,{children:"\uAE30\uBCF8\uAC12\uC785\uB2C8\uB2E4. \uB9C8\uC9C0\uB9C9 \uD328\uB110 \uC774\uD6C4\uC5D0\uB3C4 \uACC4\uC18D \uB4DC\uB798\uADF8\uD560 \uC218 \uC788\uC73C\uBA70, \uBE48 \uACF5\uAC04\uC774 \uBCF4\uC785\uB2C8\uB2E4. \uC190\uC744 \uB5BC\uBA74 \uAC00\uC7A5 \uAC00\uAE4C\uC6B4 \uD328\uB110\uB85C \uC2A4\uB0C5\uB429\uB2C8\uB2E4."}),"\n",(0,s.jsx)(i.h3,{id:"bound-true-\uC0C1\uC138",children:"bound: true \uC0C1\uC138"}),"\n",(0,s.jsx)(i.p,{children:"\uCE74\uBA54\uB77C\uAC00 \uCCAB \uBC88\uC9F8 \uD328\uB110\uC758 \uC2DC\uC791\uACFC \uB9C8\uC9C0\uB9C9 \uD328\uB110\uC758 \uB05D\uC744 \uB118\uC5B4\uAC00\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uACBD\uACC4\uC5D0 \uB3C4\uB2EC\uD558\uBA74 \uBC14\uC6B4\uC2A4 \uD6A8\uACFC\uAC00 \uD45C\uC2DC\uB418\uC5B4 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uB05D\uC5D0 \uB3C4\uB2EC\uD588\uC74C\uC744 \uC54C\uB9BD\uB2C8\uB2E4."}),"\n",(0,s.jsx)(i.h3,{id:"bounce-\uC0C1\uC138",children:"bounce \uC0C1\uC138"}),"\n",(0,s.jsx)(i.p,{children:"\uACBD\uACC4\uC5D0\uC11C \uD45C\uC2DC\uB418\uB294 \uD0C4\uC131 \uC601\uC5ED\uC758 \uD06C\uAE30\uC785\uB2C8\uB2E4. \uAC12\uC774 \uD074\uC218\uB85D \uB354 \uB9CE\uC774 \uB2F9\uACA8\uC9C0\uB294 \uB290\uB08C\uC744 \uC90D\uB2C8\uB2E4."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",children:'// \uB2E4\uC591\uD55C bounce \uAC12\nbounce: "20%"      // \uAE30\uBCF8\uAC12, viewport\uC758 20%\nbounce: "50%"      // \uB354 \uD070 \uBC14\uC6B4\uC2A4\nbounce: "100px"    // \uACE0\uC815 \uD53D\uC140 \uAC12\nbounce: 0          // \uBC14\uC6B4\uC2A4 \uC5C6\uC74C\nbounce: ["10%", "30%"]  // \uC2DC\uC791/\uB05D \uB2E4\uB978 \uAC12\n'})}),"\n",(0,s.jsx)(i.h3,{id:"\uC5F0\uAD00-\uC635\uC158",children:"\uC5F0\uAD00 \uC635\uC158"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"circular\uACFC\uC758 \uAD00\uACC4"}),": ",(0,s.jsx)(i.code,{children:"circular: true"}),"\uC640 ",(0,s.jsx)(i.code,{children:"bound: true"}),"\uB294 \uC0C1\uD638 \uBC30\uD0C0\uC801\uC785\uB2C8\uB2E4. \uB458 \uB2E4 true\uC774\uBA74 circular\uAC00 \uC6B0\uC120\uB418\uACE0 bound\uB294 \uBB34\uC2DC\uB429\uB2C8\uB2E4."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:'moveType: "freeScroll"\uACFC\uC758 \uAD00\uACC4'}),": freeScroll \uBAA8\uB4DC\uC5D0\uC11C ",(0,s.jsx)(i.code,{children:"bound: true"}),"\uB97C \uD568\uAED8 \uC0AC\uC6A9\uD558\uBA74 \uACBD\uACC4\uB97C \uB118\uC5B4 \uC2A4\uD06C\uB864\uB418\uB294 \uAC83\uC744 \uBC29\uC9C0\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,s.jsx)(i.admonition,{title:"\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"bound: false"}),": \uBB34\uD55C \uC2A4\uD06C\uB864 \uB290\uB08C\uC744 \uC8FC\uACE0 \uC2F6\uC744 \uB54C, circular\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC744 \uB54C"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"bound: true"}),": \uCF58\uD150\uCE20\uC758 \uC2DC\uC791\uACFC \uB05D\uC744 \uBA85\uD655\uD788 \uD45C\uC2DC\uD558\uACE0 \uC2F6\uC744 \uB54C, freeScroll \uBAA8\uB4DC\uC5D0\uC11C \uACBD\uACC4 \uC81C\uD55C\uC774 \uD544\uC694\uD560 \uB54C"]}),"\n"]})}),"\n",(0,s.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,s.jsx)(i.admonition,{title:"circular\uACFC \uD568\uAED8 \uC0AC\uC6A9 \uBD88\uAC00",type:"warning",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"circular: true"}),"\uC640 ",(0,s.jsx)(i.code,{children:"bound: true"}),"\uB97C \uB3D9\uC2DC\uC5D0 \uC124\uC815\uD558\uBA74 circular\uAC00 \uC6B0\uC120\uB429\uB2C8\uB2E4. bound \uD6A8\uACFC\uB97C \uC6D0\uD558\uBA74 ",(0,s.jsx)(i.code,{children:"circular: false"}),"\uB85C \uC124\uC815\uD558\uC138\uC694."]})}),"\n",(0,s.jsx)(i.admonition,{title:"bounce \uAC12 \uC8FC\uC758",type:"warning",children:(0,s.jsx)(i.p,{children:"bounce \uAC12\uC774 \uB108\uBB34 \uD06C\uBA74 \uC0AC\uC6A9\uC790\uAC00 \uB05D\uC5D0 \uB3C4\uB2EC\uD588\uB294\uC9C0 \uD63C\uB780\uC2A4\uB7EC\uC6B8 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C 20~30% \uC815\uB3C4\uAC00 \uC801\uC808\uD569\uB2C8\uB2E4."})}),"\n",(0,s.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,s.jsx)(i.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#circular",children:(0,s.jsx)(i.code,{children:"circular"})}),": \uBB34\uD55C \uB8E8\uD504 \uBAA8\uB4DC (bound\uC640 \uC0C1\uD638 \uBC30\uD0C0)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#movetype",children:(0,s.jsx)(i.code,{children:"moveType"})}),": \uC774\uB3D9 \uB3D9\uC791 \uBAA8\uB4DC (freeScroll + bound \uC870\uD569 \uAD8C\uC7A5)"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"./circular",children:"Circular"}),": \uBB34\uD55C \uB8E8\uD504 \uBAA8\uB4DC"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"./movement-types",children:"Movement Types"}),": freeScroll + bound \uC870\uD569"]}),"\n"]})]})}function h(e={}){let{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(v,{...e})}):v(e)}},27449(e,i,n){n.d(i,{A:()=>o});var l=n(65723),s=n(19612);n(22155);let c="^4.11.4",d={react:{"@egjs/react-flicking":c,"@egjs/flicking":c},vue3:{"@egjs/vue3-flicking":c,"@egjs/flicking":c},vanilla:{"@egjs/flicking":c}},a=`<!DOCTYPE html>
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
`;function o({code:e,html:i,template:n="react",dependencies:c={},files:o={},css:p=""}){var u;let g,v,h;return(0,l.jsx)(s.OZ,{template:"vue3"===n?"vue":"vanilla"===n?"vanilla":"react",files:(h={"/styles.css":{code:v=p?`${r}
${p}`:r},...o},"react"===n?{"/App.tsx":{code:e},"/index.js":{code:t,hidden:!0},...h}:"vue3"===n?{"/src/App.vue":{code:e},...h}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),n=[],l=[],s=!1;for(let e of i)s?l.push(e):e.trimStart().startsWith("import ")||""===e.trim()?n.push(e.replace('"../styles.css"','"./styles.css"')):(s=!0,l.push(e));for(;l.length>0&&""===l[l.length-1].trim();)l.pop();return[...n,"","const _run = () => {",...l.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:v},"/index.html":{code:(g="<style>.flicking-viewport{opacity:0}</style>",(u=i||a).includes("</head>")?u.replace("</head>",`${g}
</head>`):g+u)},...o}),customSetup:{dependencies:{...d[n],...c}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===n?["/App.tsx","/styles.css"]:"vue3"===n?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===n?"/App.tsx":"vue3"===n?"/src/App.vue":"/src/index.js"}})}},72722(e,i,n){n.d(i,{A:()=>m});var l=n(65723),s=n(34622),c=n(7210),d=n(78863);n(22155);let a=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,t=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",r=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${a(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(i=>`${i}: ${a(e[i],"'")}`).join(", ")}`,p=(e,{prefix:i,includeFlicking:n=!0}={})=>{let l=n?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&l.push(...e),`${l.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},u=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,g=({options:e,panels:i,events:n={},methods:c={},plugins:d=[],siblings:o=[],imports:u=[],viewportClass:g=""})=>{let v=e=>`${Object.keys(e).map(i=>`${i}: ${a(e[i])}`).join(",\n  ")}`,h=Object.keys(c).map(e=>`const ${e} = ${c[e]};
`).join(""),m=e?`const flicking = new Flicking("#flick", {
  ${v(e)}
});

`:'const flicking = new Flicking("#flick")',f=d.length>0?`flicking.addPlugins(${d.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?v(e[1]):e[1]??""}
}`:""})`)});`:"",b=[...d.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...u],j=Object.keys(n).map(e=>{let i=n[e];return`flicking.on("${e}", ${i})
`}).join(""),x=i.filter(e=>e.isSlot);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${g&&` ${g}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${t(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${x.length?`
  ${x.map(e=>`<${e.tag}${t(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${t(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,l.jsx)(s.A,{className:"language-js",title:"js",children:`${p(b)}

${h}${m}${f}${j}`.trim()})]})},v=({options:e,panels:i,events:n={},methods:c={},plugins:d,siblings:a,imports:o=[],viewportClass:g=""})=>{let v=d?`
  private _plugins = [${u(d)}];
`:"",h=i.filter(e=>e.isSlot),m=[["{ Component }","react"],[h.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],f=Object.keys(c).map(e=>`
const ${e} = ${c[e]};`).join("");f&&(f+="\n"),d&&m.push([`{ ${d.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),m.push(...o);let b=h.length?`
      <ViewportSlot>
        ${h.map(e=>`<${e.tag}${t(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",j=Object.keys(n).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${n[e]}}`).join("");return(0,l.jsx)(s.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(m,{includeFlicking:!1})}
${f}
export default class DemoComponent extends Component {${v}
  public render() {
    return ${a?"<>\n    ":""}<Flicking${g&&` className="${g}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${d?" plugins={this._plugins}":""}${j}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${t(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${b}
    </Flicking>${a?`
    ${a.map(e=>`<${e.tag}${t(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},h=({options:e,panels:i,events:n={},methods:c={},plugins:d,siblings:a=[],imports:g=[],viewportClass:v=""})=>{let h=o(e),m=i.filter(e=>e.isSlot),f=d?`,
  data() {
    return {
      plugins: [${u(d)}]
    }
  }`:"",b=m.length?`
  <template #viewport>
    ${m.map(e=>`<${e.tag}${t(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",j=[...(d??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],x=Object.keys(c),k=x.length>0?`,
  methods: {
    ${x.map(e=>`${e}: ${c[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",$=Object.keys(n).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${n[e]}"`).join("");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.A,{className:"language-html",title:"template",children:`<Flicking${v&&` class="${v}"`}${e?` :options="{ ${h} }"`:""}${d?' :plugins="plugins"':""}${$}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${t(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n  ")}${b}
</Flicking>${a?`
${a.map(e=>`<${e.tag}${t(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,l.jsx)(s.A,{className:"language-js",title:"script",children:`${p(j,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${f}${k}
}`})]})},m=({js:e,react:i,vue3:n,style:a,...t})=>(0,l.jsxs)("div",{children:[(0,l.jsxs)(d.A,{groupId:"cfc",defaultValue:"js",children:[(0,l.jsx)(c.A,{value:"react",label:"React",children:i||(0,l.jsx)(v,{...t})}),(0,l.jsx)(c.A,{value:"vue3",label:"Vue@3",children:n||(0,l.jsx)(h,{...t})}),(0,l.jsx)(c.A,{value:"js",label:"JavaScript",children:e||(0,l.jsx)(g,{...t})})]}),a&&(0,l.jsx)(s.A,{className:"language-css",title:"style",children:`${a}`})]})}}]);