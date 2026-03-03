"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["8672"],{44529(e,i,l){l.r(i),l.d(i,{metadata:()=>n,default:()=>m,frontMatter:()=>o,contentTitle:()=>p,toc:()=>v,assets:()=>g});var n=JSON.parse('{"id":"demos/basic/deceleration","title":"Deceleration","description":"deceleration \uC635\uC158\uC73C\uB85C \uD50C\uB9AD \uD6C4 \uAD00\uC131 \uC774\uB3D9\uC758 \uAC10\uC18D\uB960\uC744 \uC870\uC808\uD569\uB2C8\uB2E4","source":"@site/docs/demos/basic/deceleration.mdx","sourceDirName":"demos/basic","slug":"/demos/basic/deceleration","permalink":"/flicking-docs-test/docs/demos/basic/deceleration","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/basic/deceleration.mdx","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"Deceleration","id":"deceleration","slug":"/demos/basic/deceleration","sidebar_position":10,"description":"deceleration \uC635\uC158\uC73C\uB85C \uD50C\uB9AD \uD6C4 \uAD00\uC131 \uC774\uB3D9\uC758 \uAC10\uC18D\uB960\uC744 \uC870\uC808\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","deceleration","momentum","inertia","\uAD00\uC131","\uAC10\uC18D"]},"sidebar":"demosSidebar","previous":{"title":"Easing","permalink":"/flicking-docs-test/docs/demos/basic/easing"},"next":{"title":"Threshold","permalink":"/flicking-docs-test/docs/demos/basic/threshold"}}'),s=l(65723),c=l(54187),a=l(27449),t=l(72722);l(22155);let d=`
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
      {/* deceleration: 0.001 (\u{AE34} \u{AD00}\u{C131}) */}
      <div className="demo-container">
        <div className="demo-label">deceleration: 0.001 (\u{AE34} \u{AD00}\u{C131}, \u{BA40}\u{B9AC} \u{C774}\u{B3D9})</div>
        <Flicking deceleration={0.001} align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>

      {/* deceleration: 0.0075 (\u{AE30}\u{BCF8}\u{AC12}) */}
      <div className="demo-container">
        <div className="demo-label">deceleration: 0.0075 (\u{AE30}\u{BCF8}\u{AC12})</div>
        <Flicking deceleration={0.0075} align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>

      {/* deceleration: 0.05 (\u{C9E7}\u{C740} \u{AD00}\u{C131}) */}
      <div className="demo-container">
        <div className="demo-label">deceleration: 0.05 (\u{C9E7}\u{C740} \u{AD00}\u{C131}, \u{BE60}\u{B974}\u{AC8C} \u{BA48}\u{CDA4})</div>
        <Flicking deceleration={0.05} align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>
    </div>
  );
}`,i=(0,s.jsx)(a.A,{template:"react",code:e,css:d}),l=`<template>
  <div>
    <!-- deceleration: 0.001 (\u{AE34} \u{AD00}\u{C131}) -->
    <div class="demo-container">
      <div class="demo-label">deceleration: 0.001 (\u{AE34} \u{AD00}\u{C131}, \u{BA40}\u{B9AC} \u{C774}\u{B3D9})</div>
      <Flicking :options="{ deceleration: 0.001, align: 'center' }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
    </div>

    <!-- deceleration: 0.0075 (\u{AE30}\u{BCF8}\u{AC12}) -->
    <div class="demo-container">
      <div class="demo-label">deceleration: 0.0075 (\u{AE30}\u{BCF8}\u{AC12})</div>
      <Flicking :options="{ deceleration: 0.0075, align: 'center' }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
    </div>

    <!-- deceleration: 0.05 (\u{C9E7}\u{C740} \u{AD00}\u{C131}) -->
    <div class="demo-container">
      <div class="demo-label">deceleration: 0.05 (\u{C9E7}\u{C740} \u{AD00}\u{C131}, \u{BE60}\u{B974}\u{AC8C} \u{BA48}\u{CDA4})</div>
      <Flicking :options="{ deceleration: 0.05, align: 'center' }">
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
</style>`,n=(0,s.jsx)(a.A,{template:"vue3",code:l,css:d}),c=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

// deceleration: 0.001 (\u{AE34} \u{AD00}\u{C131})
new Flicking("#flick-low", {
  deceleration: 0.001,
  align: "center"
});

// deceleration: 0.0075 (\u{AE30}\u{BCF8}\u{AC12})
new Flicking("#flick-default", {
  deceleration: 0.0075,
  align: "center"
});

// deceleration: 0.05 (\u{C9E7}\u{C740} \u{AD00}\u{C131})
new Flicking("#flick-high", {
  deceleration: 0.05,
  align: "center"
});`,r=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <!-- deceleration: 0.001 (\u{AE34} \u{AD00}\u{C131}) -->
  <div class="demo-container">
    <div class="demo-label">deceleration: 0.001 (\u{AE34} \u{AD00}\u{C131}, \u{BA40}\u{B9AC} \u{C774}\u{B3D9})</div>
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

  <!-- deceleration: 0.0075 (\u{AE30}\u{BCF8}\u{AC12}) -->
  <div class="demo-container">
    <div class="demo-label">deceleration: 0.0075 (\u{AE30}\u{BCF8}\u{AC12})</div>
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

  <!-- deceleration: 0.05 (\u{C9E7}\u{C740} \u{AD00}\u{C131}) -->
  <div class="demo-container">
    <div class="demo-label">deceleration: 0.05 (\u{C9E7}\u{C740} \u{AD00}\u{C131}, \u{BE60}\u{B974}\u{AC8C} \u{BA48}\u{CDA4})</div>
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
</html>`,o=(0,s.jsx)(a.A,{template:"vanilla",code:c,html:r,css:d});return(0,s.jsx)(t.A,{options:{},panels:[],react:i,vue3:n,js:o})},o={title:"Deceleration",id:"deceleration",slug:"/demos/basic/deceleration",sidebar_position:10,description:"deceleration \uC635\uC158\uC73C\uB85C \uD50C\uB9AD \uD6C4 \uAD00\uC131 \uC774\uB3D9\uC758 \uAC10\uC18D\uB960\uC744 \uC870\uC808\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","deceleration","momentum","inertia","\uAD00\uC131","\uAC10\uC18D"]},p="Deceleration",g={},v=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uAC12\uBCC4 \uBE44\uAD50",id:"\uAC12\uBCC4-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"deceleration \uB3D9\uC791 \uC6D0\uB9AC",id:"deceleration-\uB3D9\uC791-\uC6D0\uB9AC",level:3},{value:"\uBB3C\uB9AC\uC801 \uC758\uBBF8",id:"\uBB3C\uB9AC\uC801-\uC758\uBBF8",level:3},{value:"\uC5F0\uAD00 \uC635\uC158",id:"\uC5F0\uAD00-\uC635\uC158",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function h(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"deceleration",children:"Deceleration"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#deceleration",children:(0,s.jsx)(i.code,{children:"deceleration"})})," \uC635\uC158\uC73C\uB85C \uC0AC\uC6A9\uC790 \uD50C\uB9AD \uD6C4 \uAD00\uC131 \uC774\uB3D9\uC758 \uAC10\uC18D\uB960\uC744 \uC124\uC815\uD569\uB2C8\uB2E4. \uAC12\uC774 \uB192\uC744\uC218\uB85D \uBE60\uB974\uAC8C \uBA48\uCD94\uACE0, \uB0AE\uC744\uC218\uB85D \uBA40\uB9AC \uC774\uB3D9\uD569\uB2C8\uB2E4."]}),"\n",(0,s.jsx)(r,{}),"\n",(0,s.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,s.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\uC635\uC158"}),(0,s.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,s.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,s.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#deceleration",children:(0,s.jsx)(i.code,{children:"deceleration"})})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"number"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"0.0075"})}),(0,s.jsx)(i.td,{children:"\uAD00\uC131 \uC774\uB3D9 \uAC10\uC18D\uB960"})]})})]}),"\n",(0,s.jsx)(i.h3,{id:"\uAC12\uBCC4-\uBE44\uAD50",children:"\uAC12\uBCC4 \uBE44\uAD50"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\uAC12"}),(0,s.jsx)(i.th,{children:"\uB3D9\uC791"}),(0,s.jsx)(i.th,{children:"\uC801\uD569\uD55C \uC0C1\uD669"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"0.001"})}),(0,s.jsx)(i.td,{children:"\uB290\uB9AC\uAC8C \uAC10\uC18D, \uBA40\uB9AC \uC774\uB3D9"}),(0,s.jsx)(i.td,{children:"\uAE34 \uB9AC\uC2A4\uD2B8 \uBE60\uB978 \uD0D0\uC0C9, freeScroll"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"0.0075"})}),(0,s.jsx)(i.td,{children:"\uC801\uB2F9\uD55C \uAC10\uC18D (\uAE30\uBCF8\uAC12)"}),(0,s.jsx)(i.td,{children:"\uC77C\uBC18 \uCE90\uB7EC\uC140"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"0.05"})}),(0,s.jsx)(i.td,{children:"\uBE60\uB974\uAC8C \uAC10\uC18D, \uAC00\uAE4C\uC774 \uBA48\uCDA4"}),(0,s.jsx)(i.td,{children:"\uC815\uBC00\uD55C \uC81C\uC5B4, \uD55C \uD328\uB110\uC529 \uC774\uB3D9"})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,s.jsx)(i.h3,{id:"deceleration-\uB3D9\uC791-\uC6D0\uB9AC",children:"deceleration \uB3D9\uC791 \uC6D0\uB9AC"}),"\n",(0,s.jsxs)(i.p,{children:["\uC0AC\uC6A9\uC790\uAC00 \uB4DC\uB798\uADF8 \uD6C4 \uC190\uC744 \uB5BC\uBA74 \uD50C\uB9AD \uC18D\uB3C4\uC5D0 \uB530\uB77C \uAD00\uC131 \uC774\uB3D9\uC774 \uBC1C\uC0DD\uD569\uB2C8\uB2E4. ",(0,s.jsx)(i.code,{children:"deceleration"}),"\uC740 \uC774 \uAD00\uC131\uC758 \uAC10\uC18D\uB960\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",children:"// \uB0AE\uC740 \uAC12: \uAD00\uC131\uC774 \uC624\uB798 \uC9C0\uC18D, \uBA40\uB9AC \uC774\uB3D9\ndeceleration: 0.001\n\n// \uAE30\uBCF8\uAC12: \uC801\uB2F9\uD55C \uAD00\uC131\ndeceleration: 0.0075\n\n// \uB192\uC740 \uAC12: \uBE60\uB974\uAC8C \uBA48\uCDA4\ndeceleration: 0.05\n"})}),"\n",(0,s.jsx)(i.h3,{id:"\uBB3C\uB9AC\uC801-\uC758\uBBF8",children:"\uBB3C\uB9AC\uC801 \uC758\uBBF8"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"deceleration"}),"\uC740 \uB9C8\uCC30 \uACC4\uC218\uC640 \uC720\uC0AC\uD569\uB2C8\uB2E4. \uAC12\uC774 \uD074\uC218\uB85D \uB9C8\uCC30\uC774 \uAC15\uD574 \uBE68\uB9AC \uBA48\uCD94\uACE0, \uC791\uC744\uC218\uB85D \uBBF8\uB044\uB7EC\uC9C0\uB4EF \uBA40\uB9AC \uC774\uB3D9\uD569\uB2C8\uB2E4."]}),"\n",(0,s.jsx)(i.h3,{id:"\uC5F0\uAD00-\uC635\uC158",children:"\uC5F0\uAD00 \uC635\uC158"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"moveType\uACFC\uC758 \uAD00\uACC4"}),": ",(0,s.jsx)(i.code,{children:'moveType: "freeScroll"'}),'\uC5D0\uC11C deceleration \uD6A8\uACFC\uAC00 \uB354 \uB450\uB4DC\uB7EC\uC9D1\uB2C8\uB2E4. "snap" \uBAA8\uB4DC\uC5D0\uC11C\uB294 \uC2A4\uB0C5 \uC704\uCE58\uB85C \uC774\uB3D9\uD558\uBBC0\uB85C \uCC28\uC774\uAC00 \uB35C \uB290\uAEF4\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.']}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"duration\uACFC\uC758 \uAD00\uACC4"}),": deceleration\uC740 \uAD00\uC131 \uC774\uB3D9 \uAC70\uB9AC\uB97C, duration\uC740 \uC2A4\uB0C5 \uC560\uB2C8\uBA54\uC774\uC158 \uC2DC\uAC04\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,s.jsx)(i.admonition,{title:"\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"\uB0AE\uC740 \uAC12 (0.001~0.005)"}),": \uAE34 \uB9AC\uC2A4\uD2B8\uB97C \uBE60\uB974\uAC8C \uC2A4\uD06C\uB864\uD560 \uB54C, freeScroll \uBAA8\uB4DC"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"\uAE30\uBCF8\uAC12 (0.0075)"}),": \uC77C\uBC18\uC801\uC778 \uCE90\uB7EC\uC140, \uC774\uBBF8\uC9C0 \uAC24\uB7EC\uB9AC"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"\uB192\uC740 \uAC12 (0.01~0.05)"}),": \uC815\uBC00\uD55C \uC81C\uC5B4\uAC00 \uD544\uC694\uD560 \uB54C, \uD55C \uD328\uB110\uC529 \uC774\uB3D9"]}),"\n"]})}),"\n",(0,s.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,s.jsx)(i.admonition,{title:"\uADF9\uB2E8\uC801\uC778 \uAC12 \uC8FC\uC758",type:"warning",children:(0,s.jsx)(i.p,{children:"\uB108\uBB34 \uB0AE\uC740 \uAC12(0\uC5D0 \uAC00\uAE4C\uC6B4)\uC740 \uB05D\uC5C6\uC774 \uC2A4\uD06C\uB864\uB418\uB294 \uB290\uB08C\uC744 \uC8FC\uACE0, \uB108\uBB34 \uB192\uC740 \uAC12\uC740 \uD50C\uB9AD \uC81C\uC2A4\uCC98\uAC00 \uBB34\uC2DC\uB418\uB294 \uAC83\uCC98\uB7FC \uB290\uAEF4\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4."})}),"\n",(0,s.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,s.jsx)(i.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#movetype",children:(0,s.jsx)(i.code,{children:"moveType"})}),": \uC774\uB3D9 \uB3D9\uC791 \uBAA8\uB4DC (freeScroll\uC5D0\uC11C \uD6A8\uACFC \uB450\uB4DC\uB7EC\uC9D0)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#duration",children:(0,s.jsx)(i.code,{children:"duration"})}),": \uC2A4\uB0C5 \uC560\uB2C8\uBA54\uC774\uC158 \uC2DC\uAC04"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"./movement-types",children:"Movement Types"}),": freeScroll \uBAA8\uB4DC"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"./duration",children:"Duration"}),": \uC560\uB2C8\uBA54\uC774\uC158 \uC2DC\uAC04"]}),"\n"]})]})}function m(e={}){let{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},27449(e,i,l){l.d(i,{A:()=>o});var n=l(65723),s=l(19612);l(22155);let c="^4.11.4",a={react:{"@egjs/react-flicking":c,"@egjs/flicking":c},vue3:{"@egjs/vue3-flicking":c,"@egjs/flicking":c},vanilla:{"@egjs/flicking":c}},t=`<!DOCTYPE html>
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
`;function o({code:e,html:i,template:l="react",dependencies:c={},files:o={},css:p=""}){var g;let v,h,m;return(0,n.jsx)(s.OZ,{template:"vue3"===l?"vue":"vanilla"===l?"vanilla":"react",files:(m={"/styles.css":{code:h=p?`${r}
${p}`:r},...o},"react"===l?{"/App.tsx":{code:e},"/index.js":{code:d,hidden:!0},...m}:"vue3"===l?{"/src/App.vue":{code:e},...m}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),l=[],n=[],s=!1;for(let e of i)s?n.push(e):e.trimStart().startsWith("import ")||""===e.trim()?l.push(e.replace('"../styles.css"','"./styles.css"')):(s=!0,n.push(e));for(;n.length>0&&""===n[n.length-1].trim();)n.pop();return[...l,"","const _run = () => {",...n.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:h},"/index.html":{code:(v="<style>.flicking-viewport{opacity:0}</style>",(g=i||t).includes("</head>")?g.replace("</head>",`${v}
</head>`):v+g)},...o}),customSetup:{dependencies:{...a[l],...c}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===l?["/App.tsx","/styles.css"]:"vue3"===l?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===l?"/App.tsx":"vue3"===l?"/src/App.vue":"/src/index.js"}})}},72722(e,i,l){l.d(i,{A:()=>j});var n=l(65723),s=l(34622),c=l(7210),a=l(78863);l(22155);let t=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,d=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",r=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${t(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(i=>`${i}: ${t(e[i],"'")}`).join(", ")}`,p=(e,{prefix:i,includeFlicking:l=!0}={})=>{let n=l?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&n.push(...e),`${n.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},g=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,v=({options:e,panels:i,events:l={},methods:c={},plugins:a=[],siblings:o=[],imports:g=[],viewportClass:v=""})=>{let h=e=>`${Object.keys(e).map(i=>`${i}: ${t(e[i])}`).join(",\n  ")}`,m=Object.keys(c).map(e=>`const ${e} = ${c[e]};
`).join(""),j=e?`const flicking = new Flicking("#flick", {
  ${h(e)}
});

`:'const flicking = new Flicking("#flick")',f=a.length>0?`flicking.addPlugins(${a.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?h(e[1]):e[1]??""}
}`:""})`)});`:"",k=[...a.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],x=Object.keys(l).map(e=>{let i=l[e];return`flicking.on("${e}", ${i})
`}).join(""),u=i.filter(e=>e.isSlot);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${v&&` ${v}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${u.length?`
  ${u.map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,n.jsx)(s.A,{className:"language-js",title:"js",children:`${p(k)}

${m}${j}${f}${x}`.trim()})]})},h=({options:e,panels:i,events:l={},methods:c={},plugins:a,siblings:t,imports:o=[],viewportClass:v=""})=>{let h=a?`
  private _plugins = [${g(a)}];
`:"",m=i.filter(e=>e.isSlot),j=[["{ Component }","react"],[m.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],f=Object.keys(c).map(e=>`
const ${e} = ${c[e]};`).join("");f&&(f+="\n"),a&&j.push([`{ ${a.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),j.push(...o);let k=m.length?`
      <ViewportSlot>
        ${m.map(e=>`<${e.tag}${d(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",x=Object.keys(l).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${l[e]}}`).join("");return(0,n.jsx)(s.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(j,{includeFlicking:!1})}
${f}
export default class DemoComponent extends Component {${h}
  public render() {
    return ${t?"<>\n    ":""}<Flicking${v&&` className="${v}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${a?" plugins={this._plugins}":""}${x}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${d(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${k}
    </Flicking>${t?`
    ${t.map(e=>`<${e.tag}${d(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},m=({options:e,panels:i,events:l={},methods:c={},plugins:a,siblings:t=[],imports:v=[],viewportClass:h=""})=>{let m=o(e),j=i.filter(e=>e.isSlot),f=a?`,
  data() {
    return {
      plugins: [${g(a)}]
    }
  }`:"",k=j.length?`
  <template #viewport>
    ${j.map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",x=[...(a??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...v],u=Object.keys(c),$=u.length>0?`,
  methods: {
    ${u.map(e=>`${e}: ${c[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",b=Object.keys(l).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${l[e]}"`).join("");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{className:"language-html",title:"template",children:`<Flicking${h&&` class="${h}"`}${e?` :options="{ ${m} }"`:""}${a?' :plugins="plugins"':""}${b}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n  ")}${k}
</Flicking>${t?`
${t.map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,n.jsx)(s.A,{className:"language-js",title:"script",children:`${p(x,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${f}${$}
}`})]})},j=({js:e,react:i,vue3:l,style:t,...d})=>(0,n.jsxs)("div",{children:[(0,n.jsxs)(a.A,{groupId:"cfc",defaultValue:"js",children:[(0,n.jsx)(c.A,{value:"react",label:"React",children:i||(0,n.jsx)(h,{...d})}),(0,n.jsx)(c.A,{value:"vue3",label:"Vue@3",children:l||(0,n.jsx)(m,{...d})}),(0,n.jsx)(c.A,{value:"js",label:"JavaScript",children:e||(0,n.jsx)(v,{...d})})]}),t&&(0,n.jsx)(s.A,{className:"language-css",title:"style",children:`${t}`})]})}}]);