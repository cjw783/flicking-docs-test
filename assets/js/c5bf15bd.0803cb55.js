"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["464"],{32110(e,i,l){l.r(i),l.d(i,{metadata:()=>n,default:()=>v,frontMatter:()=>o,contentTitle:()=>p,toc:()=>f,assets:()=>g});var n=JSON.parse('{"id":"demos/basic/default-index","title":"Default Index","description":"defaultIndex \uC635\uC158\uC73C\uB85C \uCD08\uAE30\uD654 \uC2DC \uD45C\uC2DC\uD560 \uD328\uB110\uC758 \uC778\uB371\uC2A4\uB97C \uC124\uC815\uD569\uB2C8\uB2E4","source":"@site/docs/demos/basic/default-index.mdx","sourceDirName":"demos/basic","slug":"/demos/basic/default-index","permalink":"/flicking-docs-test/docs/demos/basic/default-index","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/basic/default-index.mdx","tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"Default Index","id":"default-index","slug":"/demos/basic/default-index","sidebar_position":14,"description":"defaultIndex \uC635\uC158\uC73C\uB85C \uCD08\uAE30\uD654 \uC2DC \uD45C\uC2DC\uD560 \uD328\uB110\uC758 \uC778\uB371\uC2A4\uB97C \uC124\uC815\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","defaultIndex","initial","start","\uCD08\uAE30","\uC2DC\uC791"]},"sidebar":"demosSidebar","previous":{"title":"Disable Input","permalink":"/flicking-docs-test/docs/demos/basic/disable-input"},"next":{"title":"Auto Init","permalink":"/flicking-docs-test/docs/demos/basic/auto-init"}}'),s=l(65723),d=l(54187),a=l(27449),t=l(72722);l(22155);let c=`
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
      {/* defaultIndex: 0 (\u{AE30}\u{BCF8}\u{AC12}) */}
      <div className="demo-container">
        <div className="demo-label">defaultIndex: 0 (\u{AE30}\u{BCF8}\u{AC12}, \u{CCAB} \u{BC88}\u{C9F8} \u{D328}\u{B110})</div>
        <Flicking defaultIndex={0} align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>

      {/* defaultIndex: 2 */}
      <div className="demo-container">
        <div className="demo-label">defaultIndex: 2 (\u{C138} \u{BC88}\u{C9F8} \u{D328}\u{B110}\u{C5D0}\u{C11C} \u{C2DC}\u{C791})</div>
        <Flicking defaultIndex={2} align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>

      {/* defaultIndex: 4 (\u{B9C8}\u{C9C0}\u{B9C9}) */}
      <div className="demo-container">
        <div className="demo-label">defaultIndex: 4 (\u{B9C8}\u{C9C0}\u{B9C9} \u{D328}\u{B110}\u{C5D0}\u{C11C} \u{C2DC}\u{C791})</div>
        <Flicking defaultIndex={4} align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>
    </div>
  );
}`,i=(0,s.jsx)(a.A,{template:"react",code:e,css:c}),l=`<template>
  <div>
    <!-- defaultIndex: 0 (\u{AE30}\u{BCF8}\u{AC12}) -->
    <div class="demo-container">
      <div class="demo-label">defaultIndex: 0 (\u{AE30}\u{BCF8}\u{AC12}, \u{CCAB} \u{BC88}\u{C9F8} \u{D328}\u{B110})</div>
      <Flicking :options="{ defaultIndex: 0, align: 'center' }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
    </div>

    <!-- defaultIndex: 2 -->
    <div class="demo-container">
      <div class="demo-label">defaultIndex: 2 (\u{C138} \u{BC88}\u{C9F8} \u{D328}\u{B110}\u{C5D0}\u{C11C} \u{C2DC}\u{C791})</div>
      <Flicking :options="{ defaultIndex: 2, align: 'center' }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
    </div>

    <!-- defaultIndex: 4 (\u{B9C8}\u{C9C0}\u{B9C9}) -->
    <div class="demo-container">
      <div class="demo-label">defaultIndex: 4 (\u{B9C8}\u{C9C0}\u{B9C9} \u{D328}\u{B110}\u{C5D0}\u{C11C} \u{C2DC}\u{C791})</div>
      <Flicking :options="{ defaultIndex: 4, align: 'center' }">
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
</style>`,n=(0,s.jsx)(a.A,{template:"vue3",code:l,css:c}),d=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

// defaultIndex: 0 (\u{AE30}\u{BCF8}\u{AC12})
new Flicking("#flick-first", {
  defaultIndex: 0,
  align: "center"
});

// defaultIndex: 2
new Flicking("#flick-middle", {
  defaultIndex: 2,
  align: "center"
});

// defaultIndex: 4 (\u{B9C8}\u{C9C0}\u{B9C9})
new Flicking("#flick-last", {
  defaultIndex: 4,
  align: "center"
});`,r=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <!-- defaultIndex: 0 (\u{AE30}\u{BCF8}\u{AC12}) -->
  <div class="demo-container">
    <div class="demo-label">defaultIndex: 0 (\u{AE30}\u{BCF8}\u{AC12}, \u{CCAB} \u{BC88}\u{C9F8} \u{D328}\u{B110})</div>
    <div id="flick-first" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </div>
    </div>
  </div>

  <!-- defaultIndex: 2 -->
  <div class="demo-container">
    <div class="demo-label">defaultIndex: 2 (\u{C138} \u{BC88}\u{C9F8} \u{D328}\u{B110}\u{C5D0}\u{C11C} \u{C2DC}\u{C791})</div>
    <div id="flick-middle" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </div>
    </div>
  </div>

  <!-- defaultIndex: 4 (\u{B9C8}\u{C9C0}\u{B9C9}) -->
  <div class="demo-container">
    <div class="demo-label">defaultIndex: 4 (\u{B9C8}\u{C9C0}\u{B9C9} \u{D328}\u{B110}\u{C5D0}\u{C11C} \u{C2DC}\u{C791})</div>
    <div id="flick-last" class="flicking-viewport">
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
</html>`,o=(0,s.jsx)(a.A,{template:"vanilla",code:d,html:r,css:c});return(0,s.jsx)(t.A,{options:{},panels:[],react:i,vue3:n,js:o})},o={title:"Default Index",id:"default-index",slug:"/demos/basic/default-index",sidebar_position:14,description:"defaultIndex \uC635\uC158\uC73C\uB85C \uCD08\uAE30\uD654 \uC2DC \uD45C\uC2DC\uD560 \uD328\uB110\uC758 \uC778\uB371\uC2A4\uB97C \uC124\uC815\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","defaultIndex","initial","start","\uCD08\uAE30","\uC2DC\uC791"]},p="Default Index",g={},f=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uAC12\uBCC4 \uBE44\uAD50",id:"\uAC12\uBCC4-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"defaultIndex \uB3D9\uC791 \uC6D0\uB9AC",id:"defaultindex-\uB3D9\uC791-\uC6D0\uB9AC",level:3},{value:"\uC5F0\uAD00 \uC635\uC158",id:"\uC5F0\uAD00-\uC635\uC158",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function x(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"default-index",children:"Default Index"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#defaultindex",children:(0,s.jsx)(i.code,{children:"defaultIndex"})})," \uC635\uC158\uC73C\uB85C \uCD08\uAE30\uD654 \uC2DC \uD45C\uC2DC\uD560 \uD328\uB110\uC758 \uC778\uB371\uC2A4\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. 0-based \uC778\uB371\uC2A4\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4."]}),"\n",(0,s.jsx)(r,{}),"\n",(0,s.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,s.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\uC635\uC158"}),(0,s.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,s.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,s.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#defaultindex",children:(0,s.jsx)(i.code,{children:"defaultIndex"})})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"number"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"0"})}),(0,s.jsx)(i.td,{children:"\uCD08\uAE30 \uD65C\uC131 \uD328\uB110 \uC778\uB371\uC2A4 (0-based)"})]})})]}),"\n",(0,s.jsx)(i.h3,{id:"\uAC12\uBCC4-\uBE44\uAD50",children:"\uAC12\uBCC4 \uBE44\uAD50"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\uAC12"}),(0,s.jsx)(i.th,{children:"\uB3D9\uC791"}),(0,s.jsx)(i.th,{children:"\uC801\uD569\uD55C \uC0C1\uD669"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"0"})}),(0,s.jsx)(i.td,{children:"\uCCAB \uBC88\uC9F8 \uD328\uB110\uC5D0\uC11C \uC2DC\uC791 (\uAE30\uBCF8\uAC12)"}),(0,s.jsx)(i.td,{children:"\uC77C\uBC18\uC801\uC778 \uCE90\uB7EC\uC140"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"n"})}),(0,s.jsx)(i.td,{children:"(n+1)\uBC88\uC9F8 \uD328\uB110\uC5D0\uC11C \uC2DC\uC791"}),(0,s.jsx)(i.td,{children:"\uD2B9\uC815 \uD328\uB110\uB85C \uBC14\uB85C \uC774\uB3D9, \uB525\uB9C1\uD06C"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"\uB9C8\uC9C0\uB9C9 \uC778\uB371\uC2A4"})}),(0,s.jsx)(i.td,{children:"\uB9C8\uC9C0\uB9C9 \uD328\uB110\uC5D0\uC11C \uC2DC\uC791"}),(0,s.jsx)(i.td,{children:"\uC5ED\uC21C \uD0D0\uC0C9, \uCD5C\uC2E0 \uD56D\uBAA9 \uBA3C\uC800"})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,s.jsx)(i.h3,{id:"defaultindex-\uB3D9\uC791-\uC6D0\uB9AC",children:"defaultIndex \uB3D9\uC791 \uC6D0\uB9AC"}),"\n",(0,s.jsxs)(i.p,{children:["Flicking\uC774 \uCD08\uAE30\uD654(",(0,s.jsx)(i.code,{children:"init()"}),")\uB420 \uB54C \uC9C0\uC815\uB41C \uC778\uB371\uC2A4\uC758 \uD328\uB110\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4. \uC560\uB2C8\uBA54\uC774\uC158 \uC5C6\uC774 \uC989\uC2DC \uD574\uB2F9 \uD328\uB110\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",children:"// \uCCAB \uBC88\uC9F8 \uD328\uB110\uC5D0\uC11C \uC2DC\uC791 (\uAE30\uBCF8\uAC12)\ndefaultIndex: 0\n\n// \uC138 \uBC88\uC9F8 \uD328\uB110\uC5D0\uC11C \uC2DC\uC791\ndefaultIndex: 2\n\n// \uB9C8\uC9C0\uB9C9 \uD328\uB110\uC5D0\uC11C \uC2DC\uC791 (\uD328\uB110\uC774 5\uAC1C\uC77C \uB54C)\ndefaultIndex: 4\n"})}),"\n",(0,s.jsx)(i.h3,{id:"\uC5F0\uAD00-\uC635\uC158",children:"\uC5F0\uAD00 \uC635\uC158"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"circular\uC640\uC758 \uAD00\uACC4"}),": ",(0,s.jsx)(i.code,{children:"circular: true"}),"\uC5D0\uC11C\uB3C4 defaultIndex\uB294 \uC815\uC0C1 \uB3D9\uC791\uD569\uB2C8\uB2E4. \uC9C0\uC815\uB41C \uD328\uB110\uC774 \uCD08\uAE30 \uD65C\uC131 \uD328\uB110\uC774 \uB429\uB2C8\uB2E4."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"align\uACFC\uC758 \uAD00\uACC4"}),": ",(0,s.jsx)(i.code,{children:'align: "center"'}),"\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD558\uBA74 \uCD08\uAE30 \uD328\uB110\uC774 \uC911\uC559\uC5D0 \uC704\uCE58\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,s.jsx)(i.admonition,{title:"\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"defaultIndex: 0"}),": \uC77C\uBC18\uC801\uC778 \uC21C\uCC28 \uD0D0\uC0C9 \uCE90\uB7EC\uC140"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"\uD2B9\uC815 \uC778\uB371\uC2A4"}),": URL \uD30C\uB77C\uBBF8\uD130\uB85C \uD2B9\uC815 \uC2AC\uB77C\uC774\uB4DC \uACF5\uC720 (\uB525\uB9C1\uD06C), \uC774\uC804 \uC0C1\uD0DC \uBCF5\uC6D0"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"\uB9C8\uC9C0\uB9C9 \uC778\uB371\uC2A4"}),": \uCD5C\uC2E0 \uD56D\uBAA9\uC744 \uBA3C\uC800 \uBCF4\uC5EC\uC8FC\uB294 UI, \uCC44\uD305/\uD53C\uB4DC"]}),"\n"]})}),"\n",(0,s.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,s.jsx)(i.admonition,{title:"\uC778\uB371\uC2A4 \uBC94\uC704",type:"warning",children:(0,s.jsx)(i.p,{children:"\uD328\uB110 \uC218\uBCF4\uB2E4 \uD070 \uC778\uB371\uC2A4\uB97C \uC9C0\uC815\uD558\uBA74 \uB9C8\uC9C0\uB9C9 \uD328\uB110\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4. \uC74C\uC218 \uC778\uB371\uC2A4\uB294 \uCCAB \uBC88\uC9F8 \uD328\uB110\uB85C \uCC98\uB9AC\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4."})}),"\n",(0,s.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,s.jsx)(i.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#circular",children:(0,s.jsx)(i.code,{children:"circular"})}),": \uBB34\uD55C \uB8E8\uD504 \uBAA8\uB4DC"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#align",children:(0,s.jsx)(i.code,{children:"align"})}),": \uD328\uB110 \uC815\uB82C"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"./circular",children:"Circular"}),": \uBB34\uD55C \uB8E8\uD504 \uBAA8\uB4DC"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"./alignment",children:"Alignment"}),": \uD328\uB110 \uC815\uB82C"]}),"\n"]})]})}function v(e={}){let{wrapper:i}={...(0,d.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},27449(e,i,l){l.d(i,{A:()=>o});var n=l(65723),s=l(19612);l(22155);let d="^4.11.4",a={react:{"@egjs/react-flicking":d,"@egjs/flicking":d},vue3:{"@egjs/vue3-flicking":d,"@egjs/flicking":d},vanilla:{"@egjs/flicking":d}},t=`<!DOCTYPE html>
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
`;function o({code:e,html:i,template:l="react",dependencies:d={},files:o={},css:p=""}){var g;let f,x,v;return(0,n.jsx)(s.OZ,{template:"vue3"===l?"vue":"vanilla"===l?"vanilla":"react",files:(v={"/styles.css":{code:x=p?`${r}
${p}`:r},...o},"react"===l?{"/App.tsx":{code:e},"/index.js":{code:c,hidden:!0},...v}:"vue3"===l?{"/src/App.vue":{code:e},...v}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),l=[],n=[],s=!1;for(let e of i)s?n.push(e):e.trimStart().startsWith("import ")||""===e.trim()?l.push(e.replace('"../styles.css"','"./styles.css"')):(s=!0,n.push(e));for(;n.length>0&&""===n[n.length-1].trim();)n.pop();return[...l,"","const _run = () => {",...n.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:x},"/index.html":{code:(f="<style>.flicking-viewport{opacity:0}</style>",(g=i||t).includes("</head>")?g.replace("</head>",`${f}
</head>`):f+g)},...o}),customSetup:{dependencies:{...a[l],...d}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===l?["/App.tsx","/styles.css"]:"vue3"===l?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===l?"/App.tsx":"vue3"===l?"/src/App.vue":"/src/index.js"}})}},72722(e,i,l){l.d(i,{A:()=>h});var n=l(65723),s=l(34622),d=l(7210),a=l(78863);l(22155);let t=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,c=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",r=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${t(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(i=>`${i}: ${t(e[i],"'")}`).join(", ")}`,p=(e,{prefix:i,includeFlicking:l=!0}={})=>{let n=l?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&n.push(...e),`${n.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},g=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,f=({options:e,panels:i,events:l={},methods:d={},plugins:a=[],siblings:o=[],imports:g=[],viewportClass:f=""})=>{let x=e=>`${Object.keys(e).map(i=>`${i}: ${t(e[i])}`).join(",\n  ")}`,v=Object.keys(d).map(e=>`const ${e} = ${d[e]};
`).join(""),h=e?`const flicking = new Flicking("#flick", {
  ${x(e)}
});

`:'const flicking = new Flicking("#flick")',u=a.length>0?`flicking.addPlugins(${a.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?x(e[1]):e[1]??""}
}`:""})`)});`:"",m=[...a.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],j=Object.keys(l).map(e=>{let i=l[e];return`flicking.on("${e}", ${i})
`}).join(""),k=i.filter(e=>e.isSlot);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${f&&` ${f}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${c(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${k.length?`
  ${k.map(e=>`<${e.tag}${c(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${c(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,n.jsx)(s.A,{className:"language-js",title:"js",children:`${p(m)}

${v}${h}${u}${j}`.trim()})]})},x=({options:e,panels:i,events:l={},methods:d={},plugins:a,siblings:t,imports:o=[],viewportClass:f=""})=>{let x=a?`
  private _plugins = [${g(a)}];
`:"",v=i.filter(e=>e.isSlot),h=[["{ Component }","react"],[v.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],u=Object.keys(d).map(e=>`
const ${e} = ${d[e]};`).join("");u&&(u+="\n"),a&&h.push([`{ ${a.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),h.push(...o);let m=v.length?`
      <ViewportSlot>
        ${v.map(e=>`<${e.tag}${c(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",j=Object.keys(l).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${l[e]}}`).join("");return(0,n.jsx)(s.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(h,{includeFlicking:!1})}
${u}
export default class DemoComponent extends Component {${x}
  public render() {
    return ${t?"<>\n    ":""}<Flicking${f&&` className="${f}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${a?" plugins={this._plugins}":""}${j}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${c(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${m}
    </Flicking>${t?`
    ${t.map(e=>`<${e.tag}${c(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},v=({options:e,panels:i,events:l={},methods:d={},plugins:a,siblings:t=[],imports:f=[],viewportClass:x=""})=>{let v=o(e),h=i.filter(e=>e.isSlot),u=a?`,
  data() {
    return {
      plugins: [${g(a)}]
    }
  }`:"",m=h.length?`
  <template #viewport>
    ${h.map(e=>`<${e.tag}${c(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",j=[...(a??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...f],k=Object.keys(d),$=k.length>0?`,
  methods: {
    ${k.map(e=>`${e}: ${d[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",b=Object.keys(l).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${l[e]}"`).join("");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{className:"language-html",title:"template",children:`<Flicking${x&&` class="${x}"`}${e?` :options="{ ${v} }"`:""}${a?' :plugins="plugins"':""}${b}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${c(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n  ")}${m}
</Flicking>${t?`
${t.map(e=>`<${e.tag}${c(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,n.jsx)(s.A,{className:"language-js",title:"script",children:`${p(j,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${u}${$}
}`})]})},h=({js:e,react:i,vue3:l,style:t,...c})=>(0,n.jsxs)("div",{children:[(0,n.jsxs)(a.A,{groupId:"cfc",defaultValue:"js",children:[(0,n.jsx)(d.A,{value:"react",label:"React",children:i||(0,n.jsx)(x,{...c})}),(0,n.jsx)(d.A,{value:"vue3",label:"Vue@3",children:l||(0,n.jsx)(v,{...c})}),(0,n.jsx)(d.A,{value:"js",label:"JavaScript",children:e||(0,n.jsx)(f,{...c})})]}),t&&(0,n.jsx)(s.A,{className:"language-css",title:"style",children:`${t}`})]})}}]);