"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["294"],{61208(e,i,l){l.r(i),l.d(i,{metadata:()=>n,default:()=>j,frontMatter:()=>o,contentTitle:()=>p,toc:()=>g,assets:()=>h});var n=JSON.parse('{"id":"demos/basic/vertical","title":"Vertical","description":"horizontal \uC635\uC158\uC73C\uB85C \uD328\uB110\uC758 \uC774\uB3D9 \uBC29\uD5A5\uC744 \uC218\uD3C9 \uB610\uB294 \uC218\uC9C1\uC73C\uB85C \uC124\uC815\uD569\uB2C8\uB2E4","source":"@site/docs/demos/basic/vertical.mdx","sourceDirName":"demos/basic","slug":"/demos/basic/vertical","permalink":"/flicking-docs-test/ko/docs/demos/basic/vertical","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/basic/vertical.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Vertical","id":"vertical","slug":"/demos/basic/vertical","sidebar_position":5,"description":"horizontal \uC635\uC158\uC73C\uB85C \uD328\uB110\uC758 \uC774\uB3D9 \uBC29\uD5A5\uC744 \uC218\uD3C9 \uB610\uB294 \uC218\uC9C1\uC73C\uB85C \uC124\uC815\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","horizontal","vertical","direction","\uBC29\uD5A5","\uC218\uC9C1"]},"sidebar":"demosSidebar","previous":{"title":"Movement Types","permalink":"/flicking-docs-test/ko/docs/demos/basic/movement-types"},"next":{"title":"Panels Per View","permalink":"/flicking-docs-test/ko/docs/demos/basic/panels-per-view"}}'),s=l(65723),t=l(54187),a=l(27449),c=l(72722);l(22155);let r=`
.flicking-viewport {
  height: 200px;
}
.flicking-panel {
  width: 100%;
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
      {/* horizontal: true (\u{AE30}\u{BCF8}\u{AC12}) */}
      <div className="demo-container">
        <div className="demo-label">horizontal: true (\u{AE30}\u{BCF8}\u{AC12}, \u{C218}\u{D3C9})</div>
        <Flicking horizontal={true} align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>

      {/* horizontal: false (\u{C218}\u{C9C1}) */}
      <div className="demo-container">
        <div className="demo-label">horizontal: false (\u{C218}\u{C9C1})</div>
        <Flicking horizontal={false} align="center" panelsPerView={3}>
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>
    </div>
  );
}`,i=(0,s.jsx)(a.A,{template:"react",code:e,css:r}),l=`<template>
  <div>
    <!-- horizontal: true (\u{AE30}\u{BCF8}\u{AC12}) -->
    <div class="demo-container">
      <div class="demo-label">horizontal: true (\u{AE30}\u{BCF8}\u{AC12}, \u{C218}\u{D3C9})</div>
      <Flicking :options="{ horizontal: true, align: 'center' }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
    </div>

    <!-- horizontal: false (\u{C218}\u{C9C1}) -->
    <div class="demo-container">
      <div class="demo-label">horizontal: false (\u{C218}\u{C9C1})</div>
      <Flicking :options="{ horizontal: false, align: 'center', panelsPerView: 3 }">
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
.flicking-viewport { height: 200px; }
.flicking-viewport.vertical { display: block; width: 100%; }
.flicking-panel {
  width: 100%;
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
</style>`,n=(0,s.jsx)(a.A,{template:"vue3",code:l,css:r}),t=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

// horizontal: true (\u{AE30}\u{BCF8}\u{AC12})
new Flicking("#flick-horizontal", {
  horizontal: true,
  align: "center"
});

// horizontal: false (\u{C218}\u{C9C1})
new Flicking("#flick-vertical", {
  horizontal: false,
  align: "center",
  panelsPerView: 3
});`,d=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <!-- horizontal: true (\u{AE30}\u{BCF8}\u{AC12}) -->
  <div class="demo-container">
    <div class="demo-label">horizontal: true (\u{AE30}\u{BCF8}\u{AC12}, \u{C218}\u{D3C9})</div>
    <div id="flick-horizontal" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </div>
    </div>
  </div>

  <!-- horizontal: false (\u{C218}\u{C9C1}) -->
  <div class="demo-container">
    <div class="demo-label">horizontal: false (\u{C218}\u{C9C1})</div>
    <div id="flick-vertical" class="flicking-viewport">
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
</html>`,o=(0,s.jsx)(a.A,{template:"vanilla",code:t,html:d,css:r});return(0,s.jsx)(c.A,{options:{},panels:[],react:i,vue3:n,js:o})},o={title:"Vertical",id:"vertical",slug:"/demos/basic/vertical",sidebar_position:5,description:"horizontal \uC635\uC158\uC73C\uB85C \uD328\uB110\uC758 \uC774\uB3D9 \uBC29\uD5A5\uC744 \uC218\uD3C9 \uB610\uB294 \uC218\uC9C1\uC73C\uB85C \uC124\uC815\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","horizontal","vertical","direction","\uBC29\uD5A5","\uC218\uC9C1"]},p="Vertical",h={},g=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uAC12\uBCC4 \uBE44\uAD50",id:"\uAC12\uBCC4-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"horizontal: true \uC0C1\uC138",id:"horizontal-true-\uC0C1\uC138",level:3},{value:"horizontal: false \uC0C1\uC138",id:"horizontal-false-\uC0C1\uC138",level:3},{value:"\uC5F0\uAD00 \uC635\uC158",id:"\uC5F0\uAD00-\uC635\uC158",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function v(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"vertical",children:"Vertical"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#horizontal",children:(0,s.jsx)(i.code,{children:"horizontal"})})," \uC635\uC158\uC73C\uB85C \uD328\uB110\uC758 \uC774\uB3D9 \uBC29\uD5A5\uC744 \uC124\uC815\uD569\uB2C8\uB2E4. ",(0,s.jsx)(i.code,{children:"true"}),"\uC774\uBA74 \uC218\uD3C9(\uC88C\uC6B0), ",(0,s.jsx)(i.code,{children:"false"}),"\uC774\uBA74 \uC218\uC9C1(\uC0C1\uD558) \uBC29\uD5A5\uC73C\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4."]}),"\n",(0,s.jsx)(d,{}),"\n",(0,s.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,s.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\uC635\uC158"}),(0,s.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,s.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,s.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#horizontal",children:(0,s.jsx)(i.code,{children:"horizontal"})})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"boolean"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"true"})}),(0,s.jsxs)(i.td,{children:["\uD328\uB110 \uC774\uB3D9 \uBC29\uD5A5 (",(0,s.jsx)(i.code,{children:"true"}),": \uC218\uD3C9, ",(0,s.jsx)(i.code,{children:"false"}),": \uC218\uC9C1)"]})]})})]}),"\n",(0,s.jsx)(i.h3,{id:"\uAC12\uBCC4-\uBE44\uAD50",children:"\uAC12\uBCC4 \uBE44\uAD50"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\uAC12"}),(0,s.jsx)(i.th,{children:"\uB3D9\uC791"}),(0,s.jsx)(i.th,{children:"\uC801\uD569\uD55C \uC0C1\uD669"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"true"})}),(0,s.jsx)(i.td,{children:"\uC88C\uC6B0\uB85C \uB4DC\uB798\uADF8\uD558\uC5EC \uD328\uB110 \uC774\uB3D9"}),(0,s.jsx)(i.td,{children:"\uC77C\uBC18 \uCE90\uB7EC\uC140, \uC774\uBBF8\uC9C0 \uAC24\uB7EC\uB9AC, \uBC30\uB108 \uC2AC\uB77C\uC774\uB354"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"false"})}),(0,s.jsx)(i.td,{children:"\uC0C1\uD558\uB85C \uB4DC\uB798\uADF8\uD558\uC5EC \uD328\uB110 \uC774\uB3D9"}),(0,s.jsx)(i.td,{children:"\uC138\uB85C \uCE74\uB4DC \uC2A4\uD0DD, \uC2A4\uD1A0\uB9AC \uBDF0\uC5B4, \uC138\uB85C \uC628\uBCF4\uB529"})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,s.jsx)(i.h3,{id:"horizontal-true-\uC0C1\uC138",children:"horizontal: true \uC0C1\uC138"}),"\n",(0,s.jsx)(i.p,{children:"\uAE30\uBCF8\uAC12\uC785\uB2C8\uB2E4. \uD328\uB110\uC774 \uC88C\uC6B0\uB85C \uBC30\uCE58\uB418\uACE0, \uC0AC\uC6A9\uC790\uB294 \uC88C\uC6B0 \uB4DC\uB798\uADF8\uB85C \uD328\uB110\uC744 \uC774\uB3D9\uD569\uB2C8\uB2E4. \uB300\uBD80\uBD84\uC758 \uCE90\uB7EC\uC140 UI\uC5D0\uC11C \uC0AC\uC6A9\uB429\uB2C8\uB2E4."}),"\n",(0,s.jsx)(i.h3,{id:"horizontal-false-\uC0C1\uC138",children:"horizontal: false \uC0C1\uC138"}),"\n",(0,s.jsx)(i.p,{children:"\uD328\uB110\uC774 \uC0C1\uD558\uB85C \uBC30\uCE58\uB418\uACE0, \uC0AC\uC6A9\uC790\uB294 \uC0C1\uD558 \uB4DC\uB798\uADF8\uB85C \uD328\uB110\uC744 \uC774\uB3D9\uD569\uB2C8\uB2E4. \uC138\uB85C \uC2A4\uD06C\uB864 UI\uB098 \uD480\uC2A4\uD06C\uB9B0 \uC2A4\uD1A0\uB9AC \uBDF0\uC5B4\uC5D0 \uC801\uD569\uD569\uB2C8\uB2E4."}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\uC911\uC694"}),": \uC218\uC9C1 \uBAA8\uB4DC\uC5D0\uC11C\uB294 viewport\uC5D0 ",(0,s.jsx)(i.strong,{children:"\uACE0\uC815 height"}),"\uB97C \uBC18\uB4DC\uC2DC \uC124\uC815\uD574\uC57C \uD569\uB2C8\uB2E4. height\uAC00 \uC5C6\uC73C\uBA74 \uD328\uB110\uC774 \uBCF4\uC774\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-css",children:".flicking-viewport {\n  height: 300px; /* \uC218\uC9C1 \uBAA8\uB4DC\uC5D0\uC11C \uD544\uC218 */\n}\n"})}),"\n",(0,s.jsx)(i.h3,{id:"\uC5F0\uAD00-\uC635\uC158",children:"\uC5F0\uAD00 \uC635\uC158"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"adaptive\uC640\uC758 \uAD00\uACC4"}),": ",(0,s.jsx)(i.code,{children:"adaptive"})," \uC635\uC158\uC740 ",(0,s.jsx)(i.code,{children:"horizontal: true"}),"\uC77C \uB54C\uB9CC \uB3D9\uC791\uD569\uB2C8\uB2E4. \uC218\uC9C1 \uBAA8\uB4DC\uC5D0\uC11C\uB294 \uD6A8\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"nested\uC640\uC758 \uAD00\uACC4"}),": \uBD80\uBAA8\uC640 \uC790\uC2DD Flicking\uC758 horizontal \uAC12\uC774 \uB2E4\uB974\uBA74 ",(0,s.jsx)(i.code,{children:"nested"})," \uC635\uC158 \uC5C6\uC774\uB3C4 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uB3D9\uC791\uD569\uB2C8\uB2E4."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"inputType\uACFC\uC758 \uAD00\uACC4"}),": \uAE30\uBCF8 inputType ",(0,s.jsx)(i.code,{children:'["mouse", "touch"]'}),"\uB294 \uC218\uD3C9/\uC218\uC9C1 \uBAA8\uB450 \uC9C0\uC6D0\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,s.jsx)(i.admonition,{title:"\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"horizontal: true"}),": \uC774\uBBF8\uC9C0 \uAC24\uB7EC\uB9AC, \uC81C\uD488 \uC2AC\uB77C\uC774\uB354, \uBC30\uB108, \uD0ED \uD615\uD0DC UI"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"horizontal: false"}),": TikTok/Instagram \uC2A4\uD1A0\uB9AC \uC2A4\uD0C0\uC77C, \uC138\uB85C \uCE74\uB4DC \uC2A4\uD0DD, \uD480\uC2A4\uD06C\uB9B0 \uC628\uBCF4\uB529"]}),"\n"]})}),"\n",(0,s.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,s.jsx)(i.admonition,{title:"\uC218\uC9C1 \uBAA8\uB4DC\uC5D0\uC11C viewport height \uD544\uC218",type:"warning",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"horizontal: false"}),"\uB85C \uC124\uC815\uD560 \uB54C viewport\uC5D0 \uACE0\uC815 height\uB97C \uC9C0\uC815\uD558\uC9C0 \uC54A\uC73C\uBA74 \uD328\uB110\uC774 \uD45C\uC2DC\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. CSS\uC5D0\uC11C ",(0,s.jsx)(i.code,{children:"height"})," \uAC12\uC744 \uBC18\uB4DC\uC2DC \uC124\uC815\uD558\uC138\uC694."]})}),"\n",(0,s.jsx)(i.admonition,{title:"\uD130\uCE58 \uB514\uBC14\uC774\uC2A4\uC5D0\uC11C \uC2A4\uD06C\uB864 \uCDA9\uB3CC",type:"warning",children:(0,s.jsxs)(i.p,{children:["\uC218\uC9C1 \uBAA8\uB4DC\uC5D0\uC11C \uC0C1\uD558 \uB4DC\uB798\uADF8\uB294 \uD398\uC774\uC9C0 \uC2A4\uD06C\uB864\uACFC \uCDA9\uB3CC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD544\uC694\uC2DC ",(0,s.jsx)(i.code,{children:"preventDefaultOnDrag"})," \uC635\uC158\uC774\uB098 CSS ",(0,s.jsx)(i.code,{children:"touch-action"})," \uC124\uC815\uC744 \uAC80\uD1A0\uD558\uC138\uC694."]})}),"\n",(0,s.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,s.jsx)(i.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#adaptive",children:(0,s.jsx)(i.code,{children:"adaptive"})}),": \uD328\uB110 \uB192\uC774\uC5D0 viewport \uB9DE\uCDA4 (horizontal: true \uC804\uC6A9)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#nested",children:(0,s.jsx)(i.code,{children:"nested"})}),": \uC911\uCCA9 Flicking \uB3D9\uC791"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#inputtype",children:(0,s.jsx)(i.code,{children:"inputType"})}),": \uC785\uB825 \uD0C0\uC785 \uC124\uC815"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"./nested",children:"Nested"}),": \uC911\uCCA9 Flicking (\uBC29\uD5A5\uC774 \uB2E4\uB974\uBA74 nested \uBD88\uD544\uC694)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"./adaptive",children:"Adaptive"}),": \uD328\uB110 \uB192\uC774 \uC801\uC751"]}),"\n"]})]})}function j(e={}){let{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(v,{...e})}):v(e)}},27449(e,i,l){l.d(i,{A:()=>o});var n=l(65723),s=l(19612);l(22155);let t="^4.11.4",a={react:{"@egjs/react-flicking":t,"@egjs/flicking":t},vue3:{"@egjs/vue3-flicking":t,"@egjs/flicking":t},vanilla:{"@egjs/flicking":t}},c=`<!DOCTYPE html>
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
`;function o({code:e,html:i,template:l="react",dependencies:t={},files:o={},css:p=""}){var h;let g,v,j;return(0,n.jsx)(s.OZ,{template:"vue3"===l?"vue":"vanilla"===l?"vanilla":"react",files:(j={"/styles.css":{code:v=p?`${d}
${p}`:d},...o},"react"===l?{"/App.tsx":{code:e},"/index.js":{code:r,hidden:!0},...j}:"vue3"===l?{"/src/App.vue":{code:e},...j}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),l=[],n=[],s=!1;for(let e of i)s?n.push(e):e.trimStart().startsWith("import ")||""===e.trim()?l.push(e.replace('"../styles.css"','"./styles.css"')):(s=!0,n.push(e));for(;n.length>0&&""===n[n.length-1].trim();)n.pop();return[...l,"","const _run = () => {",...n.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:v},"/index.html":{code:(g="<style>.flicking-viewport{opacity:0}</style>",(h=i||c).includes("</head>")?h.replace("</head>",`${g}
</head>`):g+h)},...o}),customSetup:{dependencies:{...a[l],...t}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===l?["/App.tsx","/styles.css"]:"vue3"===l?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===l?"/App.tsx":"vue3"===l?"/src/App.vue":"/src/index.js"}})}},72722(e,i,l){l.d(i,{A:()=>m});var n=l(65723),s=l(34622),t=l(7210),a=l(78863);l(22155);let c=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,r=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",d=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${c(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(i=>`${i}: ${c(e[i],"'")}`).join(", ")}`,p=(e,{prefix:i,includeFlicking:l=!0}={})=>{let n=l?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&n.push(...e),`${n.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},h=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,g=({options:e,panels:i,events:l={},methods:t={},plugins:a=[],siblings:o=[],imports:h=[],viewportClass:g=""})=>{let v=e=>`${Object.keys(e).map(i=>`${i}: ${c(e[i])}`).join(",\n  ")}`,j=Object.keys(t).map(e=>`const ${e} = ${t[e]};
`).join(""),m=e?`const flicking = new Flicking("#flick", {
  ${v(e)}
});

`:'const flicking = new Flicking("#flick")',f=a.length>0?`flicking.addPlugins(${a.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?v(e[1]):e[1]??""}
}`:""})`)});`:"",x=[...a.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...h],u=Object.keys(l).map(e=>{let i=l[e];return`flicking.on("${e}", ${i})
`}).join(""),k=i.filter(e=>e.isSlot);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${g&&` ${g}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${k.length?`
  ${k.map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,n.jsx)(s.A,{className:"language-js",title:"js",children:`${p(x)}

${j}${m}${f}${u}`.trim()})]})},v=({options:e,panels:i,events:l={},methods:t={},plugins:a,siblings:c,imports:o=[],viewportClass:g=""})=>{let v=a?`
  private _plugins = [${h(a)}];
`:"",j=i.filter(e=>e.isSlot),m=[["{ Component }","react"],[j.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],f=Object.keys(t).map(e=>`
const ${e} = ${t[e]};`).join("");f&&(f+="\n"),a&&m.push([`{ ${a.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),m.push(...o);let x=j.length?`
      <ViewportSlot>
        ${j.map(e=>`<${e.tag}${r(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",u=Object.keys(l).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${l[e]}}`).join("");return(0,n.jsx)(s.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(m,{includeFlicking:!1})}
${f}
export default class DemoComponent extends Component {${v}
  public render() {
    return ${c?"<>\n    ":""}<Flicking${g&&` className="${g}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${a?" plugins={this._plugins}":""}${u}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${x}
    </Flicking>${c?`
    ${c.map(e=>`<${e.tag}${r(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},j=({options:e,panels:i,events:l={},methods:t={},plugins:a,siblings:c=[],imports:g=[],viewportClass:v=""})=>{let j=o(e),m=i.filter(e=>e.isSlot),f=a?`,
  data() {
    return {
      plugins: [${h(a)}]
    }
  }`:"",x=m.length?`
  <template #viewport>
    ${m.map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",u=[...(a??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],k=Object.keys(t),$=k.length>0?`,
  methods: {
    ${k.map(e=>`${e}: ${t[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",b=Object.keys(l).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${l[e]}"`).join("");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{className:"language-html",title:"template",children:`<Flicking${v&&` class="${v}"`}${e?` :options="{ ${j} }"`:""}${a?' :plugins="plugins"':""}${b}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}${x}
</Flicking>${c?`
${c.map(e=>`<${e.tag}${r(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,n.jsx)(s.A,{className:"language-js",title:"script",children:`${p(u,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${f}${$}
}`})]})},m=({js:e,react:i,vue3:l,style:c,...r})=>(0,n.jsxs)("div",{children:[(0,n.jsxs)(a.A,{groupId:"cfc",defaultValue:"js",children:[(0,n.jsx)(t.A,{value:"react",label:"React",children:i||(0,n.jsx)(v,{...r})}),(0,n.jsx)(t.A,{value:"vue3",label:"Vue@3",children:l||(0,n.jsx)(j,{...r})}),(0,n.jsx)(t.A,{value:"js",label:"JavaScript",children:e||(0,n.jsx)(g,{...r})})]}),c&&(0,n.jsx)(s.A,{className:"language-css",title:"style",children:`${c}`})]})}}]);