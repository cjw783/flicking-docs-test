"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["5186"],{77187(e,i,l){l.r(i),l.d(i,{metadata:()=>n,default:()=>x,frontMatter:()=>p,contentTitle:()=>o,toc:()=>g,assets:()=>v});var n=JSON.parse('{"id":"demos/basic/adaptive","title":"Adaptive","description":"adaptive \uC635\uC158\uC73C\uB85C \uD65C\uC131 \uD328\uB110 \uB192\uC774\uC5D0 \uB9DE\uCDB0 viewport \uB192\uC774\uB97C \uC790\uB3D9 \uC870\uC815\uD569\uB2C8\uB2E4","source":"@site/docs/demos/basic/adaptive.mdx","sourceDirName":"demos/basic","slug":"/demos/basic/adaptive","permalink":"/flicking-docs-test/docs/demos/basic/adaptive","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/basic/adaptive.mdx","tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"title":"Adaptive","id":"adaptive","slug":"/demos/basic/adaptive","sidebar_position":16,"description":"adaptive \uC635\uC158\uC73C\uB85C \uD65C\uC131 \uD328\uB110 \uB192\uC774\uC5D0 \uB9DE\uCDB0 viewport \uB192\uC774\uB97C \uC790\uB3D9 \uC870\uC815\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","adaptive","height","responsive","\uB192\uC774","\uC801\uC751\uD615"]},"sidebar":"demosSidebar","previous":{"title":"Auto Init","permalink":"/flicking-docs-test/docs/demos/basic/auto-init"},"next":{"title":"Nested","permalink":"/flicking-docs-test/docs/demos/basic/nested"}}'),t=l(65723),a=l(54187),s=l(27449),d=l(72722);l(22155);let c=`
.flicking-viewport {
  border: 2px solid #ddd;
  transition: height 0.3s;
}
.flicking-panel {
  width: 80%;
}
/* \u{AC01} \u{D328}\u{B110} \u{B192}\u{C774} \u{B2E4}\u{B974}\u{AC8C} \u{C124}\u{C815} */
.panel-1 { background: #3e8ed0; height: 80px; }
.panel-2 { background: #00d1b2; height: 150px; }
.panel-3 { background: #f14668; height: 100px; }
.panel-4 { background: #ffe08a; color: #333; height: 200px; }
.panel-5 { background: #48c78e; height: 120px; }

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
      {/* adaptive: false (\u{AE30}\u{BCF8}\u{AC12}) */}
      <div className="demo-container">
        <div className="demo-label">adaptive: false (\u{AE30}\u{BCF8}\u{AC12}, \u{ACE0}\u{C815} \u{B192}\u{C774})</div>
        <Flicking adaptive={false} align="center">
          <div className="flicking-panel panel-1">\u{B192}\u{C774} 80px</div>
          <div className="flicking-panel panel-2">\u{B192}\u{C774} 150px</div>
          <div className="flicking-panel panel-3">\u{B192}\u{C774} 100px</div>
          <div className="flicking-panel panel-4">\u{B192}\u{C774} 200px</div>
          <div className="flicking-panel panel-5">\u{B192}\u{C774} 120px</div>
        </Flicking>
      </div>

      {/* adaptive: true */}
      <div className="demo-container">
        <div className="demo-label">adaptive: true (\u{D328}\u{B110} \u{B192}\u{C774}\u{C5D0} \u{B9DE}\u{CDB0} viewport \u{C870}\u{C815})</div>
        <Flicking adaptive={true} align="center">
          <div className="flicking-panel panel-1">\u{B192}\u{C774} 80px</div>
          <div className="flicking-panel panel-2">\u{B192}\u{C774} 150px</div>
          <div className="flicking-panel panel-3">\u{B192}\u{C774} 100px</div>
          <div className="flicking-panel panel-4">\u{B192}\u{C774} 200px</div>
          <div className="flicking-panel panel-5">\u{B192}\u{C774} 120px</div>
        </Flicking>
      </div>
    </div>
  );
}`,i=(0,t.jsx)(s.A,{template:"react",code:e,css:c}),l=`<template>
  <div>
    <!-- adaptive: false (\u{AE30}\u{BCF8}\u{AC12}) -->
    <div class="demo-container">
      <div class="demo-label">adaptive: false (\u{AE30}\u{BCF8}\u{AC12}, \u{ACE0}\u{C815} \u{B192}\u{C774})</div>
      <Flicking :options="{ adaptive: false, align: 'center' }">
        <div class="flicking-panel panel-1">\u{B192}\u{C774} 80px</div>
        <div class="flicking-panel panel-2">\u{B192}\u{C774} 150px</div>
        <div class="flicking-panel panel-3">\u{B192}\u{C774} 100px</div>
        <div class="flicking-panel panel-4">\u{B192}\u{C774} 200px</div>
        <div class="flicking-panel panel-5">\u{B192}\u{C774} 120px</div>
      </Flicking>
    </div>

    <!-- adaptive: true -->
    <div class="demo-container">
      <div class="demo-label">adaptive: true (\u{D328}\u{B110} \u{B192}\u{C774}\u{C5D0} \u{B9DE}\u{CDB0} viewport \u{C870}\u{C815})</div>
      <Flicking :options="{ adaptive: true, align: 'center' }">
        <div class="flicking-panel panel-1">\u{B192}\u{C774} 80px</div>
        <div class="flicking-panel panel-2">\u{B192}\u{C774} 150px</div>
        <div class="flicking-panel panel-3">\u{B192}\u{C774} 100px</div>
        <div class="flicking-panel panel-4">\u{B192}\u{C774} 200px</div>
        <div class="flicking-panel panel-5">\u{B192}\u{C774} 120px</div>
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
.flicking-viewport {
  border: 2px solid #ddd;
  transition: height 0.3s;
}
.flicking-panel {
  width: 80%;
  margin-right: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: white;
}
.panel-1 { background: #3e8ed0; height: 80px; }
.panel-2 { background: #00d1b2; height: 150px; }
.panel-3 { background: #f14668; height: 100px; }
.panel-4 { background: #ffe08a; color: #333; height: 200px; }
.panel-5 { background: #48c78e; height: 120px; }
.demo-container { margin-bottom: 24px; }
.demo-label { font-weight: bold; margin-bottom: 8px; color: #666; }
</style>`,n=(0,t.jsx)(s.A,{template:"vue3",code:l,css:c}),a=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

// adaptive: false (\u{AE30}\u{BCF8}\u{AC12})
new Flicking("#flick-fixed", {
  adaptive: false,
  align: "center"
});

// adaptive: true
new Flicking("#flick-adaptive", {
  adaptive: true,
  align: "center"
});`,r=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <!-- adaptive: false (\u{AE30}\u{BCF8}\u{AC12}) -->
  <div class="demo-container">
    <div class="demo-label">adaptive: false (\u{AE30}\u{BCF8}\u{AC12}, \u{ACE0}\u{C815} \u{B192}\u{C774})</div>
    <div id="flick-fixed" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">\u{B192}\u{C774} 80px</div>
        <div class="flicking-panel panel-2">\u{B192}\u{C774} 150px</div>
        <div class="flicking-panel panel-3">\u{B192}\u{C774} 100px</div>
        <div class="flicking-panel panel-4">\u{B192}\u{C774} 200px</div>
        <div class="flicking-panel panel-5">\u{B192}\u{C774} 120px</div>
      </div>
    </div>
  </div>

  <!-- adaptive: true -->
  <div class="demo-container">
    <div class="demo-label">adaptive: true (\u{D328}\u{B110} \u{B192}\u{C774}\u{C5D0} \u{B9DE}\u{CDB0} viewport \u{C870}\u{C815})</div>
    <div id="flick-adaptive" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">\u{B192}\u{C774} 80px</div>
        <div class="flicking-panel panel-2">\u{B192}\u{C774} 150px</div>
        <div class="flicking-panel panel-3">\u{B192}\u{C774} 100px</div>
        <div class="flicking-panel panel-4">\u{B192}\u{C774} 200px</div>
        <div class="flicking-panel panel-5">\u{B192}\u{C774} 120px</div>
      </div>
    </div>
  </div>

</body>
</html>`,p=(0,t.jsx)(s.A,{template:"vanilla",code:a,html:r,css:c});return(0,t.jsx)(d.A,{options:{},panels:[],react:i,vue3:n,js:p})},p={title:"Adaptive",id:"adaptive",slug:"/demos/basic/adaptive",sidebar_position:16,description:"adaptive \uC635\uC158\uC73C\uB85C \uD65C\uC131 \uD328\uB110 \uB192\uC774\uC5D0 \uB9DE\uCDB0 viewport \uB192\uC774\uB97C \uC790\uB3D9 \uC870\uC815\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","adaptive","height","responsive","\uB192\uC774","\uC801\uC751\uD615"]},o="Adaptive",v={},g=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uAC12\uBCC4 \uBE44\uAD50",id:"\uAC12\uBCC4-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"adaptive \uB3D9\uC791 \uC6D0\uB9AC",id:"adaptive-\uB3D9\uC791-\uC6D0\uB9AC",level:3},{value:"\uC5F0\uAD00 \uC635\uC158",id:"\uC5F0\uAD00-\uC635\uC158",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function h(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"adaptive",children:"Adaptive"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#adaptive",children:(0,t.jsx)(i.code,{children:"adaptive"})})," \uC635\uC158\uC73C\uB85C \uD328\uB110 \uC774\uB3D9 \uD6C4 \uD65C\uC131 \uD328\uB110\uC758 \uB192\uC774\uC5D0 \uB9DE\uCDB0 viewport \uB192\uC774\uB97C \uC790\uB3D9 \uC870\uC815\uD569\uB2C8\uB2E4. \uB2E4\uC591\uD55C \uB192\uC774\uC758 \uCF58\uD150\uCE20\uB97C \uAC00\uC9C4 \uCE90\uB7EC\uC140\uC5D0 \uC720\uC6A9\uD569\uB2C8\uB2E4."]}),"\n",(0,t.jsx)(r,{}),"\n",(0,t.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,t.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\uC635\uC158"}),(0,t.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,t.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,t.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#adaptive",children:(0,t.jsx)(i.code,{children:"adaptive"})})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"boolean"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"false"})}),(0,t.jsx)(i.td,{children:"\uD328\uB110 \uB192\uC774\uC5D0 \uB9DE\uCDB0 viewport \uB192\uC774 \uC790\uB3D9 \uC870\uC815"})]})})]}),"\n",(0,t.jsx)(i.h3,{id:"\uAC12\uBCC4-\uBE44\uAD50",children:"\uAC12\uBCC4 \uBE44\uAD50"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\uAC12"}),(0,t.jsx)(i.th,{children:"\uB3D9\uC791"}),(0,t.jsx)(i.th,{children:"\uC801\uD569\uD55C \uC0C1\uD669"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"false"})}),(0,t.jsx)(i.td,{children:"viewport \uB192\uC774 \uACE0\uC815 (\uAE30\uBCF8\uAC12)"}),(0,t.jsx)(i.td,{children:"\uB3D9\uC77C\uD55C \uB192\uC774\uC758 \uD328\uB110, \uACE0\uC815 \uB808\uC774\uC544\uC6C3"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"true"})}),(0,t.jsx)(i.td,{children:"\uD65C\uC131 \uD328\uB110 \uB192\uC774\uC5D0 \uB9DE\uCDB0 viewport \uC870\uC815"}),(0,t.jsx)(i.td,{children:"\uB2E4\uC591\uD55C \uB192\uC774\uC758 \uCE74\uB4DC, \uAC00\uBCC0 \uCF58\uD150\uCE20"})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,t.jsx)(i.h3,{id:"adaptive-\uB3D9\uC791-\uC6D0\uB9AC",children:"adaptive \uB3D9\uC791 \uC6D0\uB9AC"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"adaptive: true"}),"\uC774\uBA74 \uD328\uB110\uC774 \uC804\uD658\uB420 \uB54C\uB9C8\uB2E4 \uD604\uC7AC \uD65C\uC131 \uD328\uB110\uC758 \uB192\uC774\uB85C viewport \uB192\uC774\uAC00 \uC5C5\uB370\uC774\uD2B8\uB429\uB2C8\uB2E4."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-css",children:"/* \uBD80\uB4DC\uB7EC\uC6B4 \uB192\uC774 \uBCC0\uD654\uB97C \uC704\uD55C CSS */\n.flicking-viewport {\n  transition: height 0.3s;\n}\n"})}),"\n",(0,t.jsx)(i.h3,{id:"\uC5F0\uAD00-\uC635\uC158",children:"\uC5F0\uAD00 \uC635\uC158"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"horizontal\uACFC\uC758 \uAD00\uACC4"}),": ",(0,t.jsx)(i.code,{children:"adaptive"}),"\uB294 ",(0,t.jsx)(i.code,{children:"horizontal: true"}),"(\uC218\uD3C9 \uBAA8\uB4DC)\uC5D0\uC11C\uB9CC \uB3D9\uC791\uD569\uB2C8\uB2E4. \uC218\uC9C1 \uBAA8\uB4DC\uC5D0\uC11C\uB294 \uD6A8\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,t.jsx)(i.admonition,{title:"\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"adaptive: false"}),": \uC774\uBBF8\uC9C0 \uAC24\uB7EC\uB9AC, \uB3D9\uC77C\uD55C \uD06C\uAE30\uC758 \uCE74\uB4DC"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"adaptive: true"}),": \uB2E4\uC591\uD55C \uAE38\uC774\uC758 \uD14D\uC2A4\uD2B8 \uCE74\uB4DC, \uC0C1\uD488 \uC124\uBA85, FAQ \uC544\uCF54\uB514\uC5B8 \uC2A4\uD0C0\uC77C"]}),"\n"]})}),"\n",(0,t.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,t.jsx)(i.admonition,{title:"\uC218\uD3C9 \uBAA8\uB4DC \uC804\uC6A9",type:"warning",children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"adaptive"}),"\uB294 ",(0,t.jsx)(i.code,{children:"horizontal: true"}),"\uC77C \uB54C\uB9CC \uB3D9\uC791\uD569\uB2C8\uB2E4. ",(0,t.jsx)(i.code,{children:"horizontal: false"}),"(\uC218\uC9C1 \uBAA8\uB4DC)\uC5D0\uC11C\uB294 \uD6A8\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."]})}),"\n",(0,t.jsx)(i.admonition,{title:"\uB808\uC774\uC544\uC6C3 \uC2DC\uD504\uD2B8",type:"warning",children:(0,t.jsx)(i.p,{children:"\uB192\uC774\uAC00 \uD06C\uAC8C \uBCC0\uD558\uBA74 \uC544\uB798 \uCF58\uD150\uCE20\uAC00 \uBC00\uB824\uB098\uB294 \uB808\uC774\uC544\uC6C3 \uC2DC\uD504\uD2B8\uAC00 \uBC1C\uC0DD\uD569\uB2C8\uB2E4. CSS transition\uC73C\uB85C \uBD80\uB4DC\uB7FD\uAC8C \uCC98\uB9AC\uD558\uAC70\uB098, \uCD5C\uC18C \uB192\uC774\uB97C \uC124\uC815\uD558\uB294 \uAC83\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4."})}),"\n",(0,t.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,t.jsx)(i.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#horizontal",children:(0,t.jsx)(i.code,{children:"horizontal"})}),": \uC218\uD3C9/\uC218\uC9C1 \uBC29\uD5A5 (adaptive\uB294 \uC218\uD3C9 \uC804\uC6A9)"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"./vertical",children:"Vertical"}),": \uC218\uC9C1 \uBAA8\uB4DC (adaptive \uBBF8\uC9C0\uC6D0)"]}),"\n"]})]})}function x(e={}){let{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},27449(e,i,l){l.d(i,{A:()=>p});var n=l(65723),t=l(19612);l(22155);let a="^4.11.4",s={react:{"@egjs/react-flicking":a,"@egjs/flicking":a},vue3:{"@egjs/vue3-flicking":a,"@egjs/flicking":a},vanilla:{"@egjs/flicking":a}},d=`<!DOCTYPE html>
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
`;function p({code:e,html:i,template:l="react",dependencies:a={},files:p={},css:o=""}){var v;let g,h,x;return(0,n.jsx)(t.OZ,{template:"vue3"===l?"vue":"vanilla"===l?"vanilla":"react",files:(x={"/styles.css":{code:h=o?`${r}
${o}`:r},...p},"react"===l?{"/App.tsx":{code:e},"/index.js":{code:c,hidden:!0},...x}:"vue3"===l?{"/src/App.vue":{code:e},...x}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),l=[],n=[],t=!1;for(let e of i)t?n.push(e):e.trimStart().startsWith("import ")||""===e.trim()?l.push(e.replace('"../styles.css"','"./styles.css"')):(t=!0,n.push(e));for(;n.length>0&&""===n[n.length-1].trim();)n.pop();return[...l,"","const _run = () => {",...n.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:h},"/index.html":{code:(g="<style>.flicking-viewport{opacity:0}</style>",(v=i||d).includes("</head>")?v.replace("</head>",`${g}
</head>`):g+v)},...p}),customSetup:{dependencies:{...s[l],...a}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===l?["/App.tsx","/styles.css"]:"vue3"===l?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===l?"/App.tsx":"vue3"===l?"/src/App.vue":"/src/index.js"}})}},72722(e,i,l){l.d(i,{A:()=>m});var n=l(65723),t=l(34622),a=l(7210),s=l(78863);l(22155);let d=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,c=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",r=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${d(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",p=e=>`${Object.keys(e).map(i=>`${i}: ${d(e[i],"'")}`).join(", ")}`,o=(e,{prefix:i,includeFlicking:l=!0}={})=>{let n=l?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&n.push(...e),`${n.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},v=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${p(e[1])} }`:e[1]??""}`).join(", ")})`,g=({options:e,panels:i,events:l={},methods:a={},plugins:s=[],siblings:p=[],imports:v=[],viewportClass:g=""})=>{let h=e=>`${Object.keys(e).map(i=>`${i}: ${d(e[i])}`).join(",\n  ")}`,x=Object.keys(a).map(e=>`const ${e} = ${a[e]};
`).join(""),m=e?`const flicking = new Flicking("#flick", {
  ${h(e)}
});

`:'const flicking = new Flicking("#flick")',j=s.length>0?`flicking.addPlugins(${s.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?h(e[1]):e[1]??""}
}`:""})`)});`:"",f=[...s.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...v],u=Object.keys(l).map(e=>{let i=l[e];return`flicking.on("${e}", ${i})
`}).join(""),k=i.filter(e=>e.isSlot);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${g&&` ${g}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${c(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${k.length?`
  ${k.map(e=>`<${e.tag}${c(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${p?"\n"+p.map(e=>`<${e.tag}${c(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,n.jsx)(t.A,{className:"language-js",title:"js",children:`${o(f)}

${x}${m}${j}${u}`.trim()})]})},h=({options:e,panels:i,events:l={},methods:a={},plugins:s,siblings:d,imports:p=[],viewportClass:g=""})=>{let h=s?`
  private _plugins = [${v(s)}];
`:"",x=i.filter(e=>e.isSlot),m=[["{ Component }","react"],[x.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],j=Object.keys(a).map(e=>`
const ${e} = ${a[e]};`).join("");j&&(j+="\n"),s&&m.push([`{ ${s.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),m.push(...p);let f=x.length?`
      <ViewportSlot>
        ${x.map(e=>`<${e.tag}${c(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",u=Object.keys(l).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${l[e]}}`).join("");return(0,n.jsx)(t.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${o(m,{includeFlicking:!1})}
${j}
export default class DemoComponent extends Component {${h}
  public render() {
    return ${d?"<>\n    ":""}<Flicking${g&&` className="${g}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${s?" plugins={this._plugins}":""}${u}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${c(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${f}
    </Flicking>${d?`
    ${d.map(e=>`<${e.tag}${c(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},x=({options:e,panels:i,events:l={},methods:a={},plugins:s,siblings:d=[],imports:g=[],viewportClass:h=""})=>{let x=p(e),m=i.filter(e=>e.isSlot),j=s?`,
  data() {
    return {
      plugins: [${v(s)}]
    }
  }`:"",f=m.length?`
  <template #viewport>
    ${m.map(e=>`<${e.tag}${c(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",u=[...(s??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],k=Object.keys(a),$=k.length>0?`,
  methods: {
    ${k.map(e=>`${e}: ${a[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",b=Object.keys(l).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${l[e]}"`).join("");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.A,{className:"language-html",title:"template",children:`<Flicking${h&&` class="${h}"`}${e?` :options="{ ${x} }"`:""}${s?' :plugins="plugins"':""}${b}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${c(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n  ")}${f}
</Flicking>${d?`
${d.map(e=>`<${e.tag}${c(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,n.jsx)(t.A,{className:"language-js",title:"script",children:`${o(u,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${j}${$}
}`})]})},m=({js:e,react:i,vue3:l,style:d,...c})=>(0,n.jsxs)("div",{children:[(0,n.jsxs)(s.A,{groupId:"cfc",defaultValue:"js",children:[(0,n.jsx)(a.A,{value:"react",label:"React",children:i||(0,n.jsx)(h,{...c})}),(0,n.jsx)(a.A,{value:"vue3",label:"Vue@3",children:l||(0,n.jsx)(x,{...c})}),(0,n.jsx)(a.A,{value:"js",label:"JavaScript",children:e||(0,n.jsx)(g,{...c})})]}),d&&(0,n.jsx)(t.A,{className:"language-css",title:"style",children:`${d}`})]})}}]);