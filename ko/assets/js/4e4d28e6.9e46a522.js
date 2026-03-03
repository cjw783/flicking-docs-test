"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["6050"],{58345(e,i,l){l.r(i),l.d(i,{metadata:()=>n,default:()=>h,frontMatter:()=>o,contentTitle:()=>p,toc:()=>g,assets:()=>v});var n=JSON.parse('{"id":"demos/basic/movement-types","title":"Movement Types","description":"moveType \uC635\uC158\uC73C\uB85C \uD328\uB110\uC758 \uC774\uB3D9 \uBC0F \uC2A4\uB0C5 \uB3D9\uC791\uC744 \uC81C\uC5B4\uD569\uB2C8\uB2E4","source":"@site/docs/demos/basic/movement-types.mdx","sourceDirName":"demos/basic","slug":"/demos/basic/movement-types","permalink":"/flicking-docs-test/ko/docs/demos/basic/movement-types","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/basic/movement-types.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Movement Types","id":"movement-types","slug":"/demos/basic/movement-types","sidebar_position":4,"description":"moveType \uC635\uC158\uC73C\uB85C \uD328\uB110\uC758 \uC774\uB3D9 \uBC0F \uC2A4\uB0C5 \uB3D9\uC791\uC744 \uC81C\uC5B4\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","moveType","snap","freeScroll","strict","\uC774\uB3D9"]},"sidebar":"demosSidebar","previous":{"title":"Circular","permalink":"/flicking-docs-test/ko/docs/demos/basic/circular"},"next":{"title":"Vertical","permalink":"/flicking-docs-test/ko/docs/demos/basic/vertical"}}'),s=l(65723),c=l(54187),t=l(27449),a=l(72722);l(22155);let d=`
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
      {/* moveType: "snap" (\u{AE30}\u{BCF8}\u{AC12}) */}
      <div className="demo-container">
        <div className="demo-label">moveType: "snap" (\u{AE30}\u{BCF8}\u{AC12})</div>
        <Flicking moveType="snap" align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>

      {/* moveType: "freeScroll" */}
      <div className="demo-container">
        <div className="demo-label">moveType: "freeScroll" (\u{C790}\u{C720} \u{C2A4}\u{D06C}\u{B864})</div>
        <Flicking moveType="freeScroll" align="center" bound={true}>
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>

      {/* moveType: "strict" */}
      <div className="demo-container">
        <div className="demo-label">moveType: "strict" (\u{D55C} \u{D328}\u{B110}\u{C529})</div>
        <Flicking moveType="strict" align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>
    </div>
  );
}`,i=(0,s.jsx)(t.A,{template:"react",code:e,css:d}),l=`<template>
  <div>
    <!-- moveType: "snap" (\u{AE30}\u{BCF8}\u{AC12}) -->
    <div class="demo-container">
      <div class="demo-label">moveType: "snap" (\u{AE30}\u{BCF8}\u{AC12})</div>
      <Flicking :options="{ moveType: 'snap', align: 'center' }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
    </div>

    <!-- moveType: "freeScroll" -->
    <div class="demo-container">
      <div class="demo-label">moveType: "freeScroll" (\u{C790}\u{C720} \u{C2A4}\u{D06C}\u{B864})</div>
      <Flicking :options="{ moveType: 'freeScroll', align: 'center', bound: true }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
    </div>

    <!-- moveType: "strict" -->
    <div class="demo-container">
      <div class="demo-label">moveType: "strict" (\u{D55C} \u{D328}\u{B110}\u{C529})</div>
      <Flicking :options="{ moveType: 'strict', align: 'center' }">
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
</style>`,n=(0,s.jsx)(t.A,{template:"vue3",code:l,css:d}),c=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

// moveType: "snap" (\u{AE30}\u{BCF8}\u{AC12})
new Flicking("#flick-snap", {
  moveType: "snap",
  align: "center"
});

// moveType: "freeScroll"
new Flicking("#flick-free", {
  moveType: "freeScroll",
  align: "center",
  bound: true
});

// moveType: "strict"
new Flicking("#flick-strict", {
  moveType: "strict",
  align: "center"
});`,r=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <!-- moveType: "snap" (\u{AE30}\u{BCF8}\u{AC12}) -->
  <div class="demo-container">
    <div class="demo-label">moveType: "snap" (\u{AE30}\u{BCF8}\u{AC12})</div>
    <div id="flick-snap" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </div>
    </div>
  </div>

  <!-- moveType: "freeScroll" -->
  <div class="demo-container">
    <div class="demo-label">moveType: "freeScroll" (\u{C790}\u{C720} \u{C2A4}\u{D06C}\u{B864})</div>
    <div id="flick-free" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </div>
    </div>
  </div>

  <!-- moveType: "strict" -->
  <div class="demo-container">
    <div class="demo-label">moveType: "strict" (\u{D55C} \u{D328}\u{B110}\u{C529})</div>
    <div id="flick-strict" class="flicking-viewport">
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
</html>`,o=(0,s.jsx)(t.A,{template:"vanilla",code:c,html:r,css:d});return(0,s.jsx)(a.A,{options:{},panels:[],react:i,vue3:n,js:o})},o={title:"Movement Types",id:"movement-types",slug:"/demos/basic/movement-types",sidebar_position:4,description:"moveType \uC635\uC158\uC73C\uB85C \uD328\uB110\uC758 \uC774\uB3D9 \uBC0F \uC2A4\uB0C5 \uB3D9\uC791\uC744 \uC81C\uC5B4\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","moveType","snap","freeScroll","strict","\uC774\uB3D9"]},p="Movement Types",v={},g=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uAC12\uBCC4 \uBE44\uAD50",id:"\uAC12\uBCC4-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"&quot;snap&quot; \uC0C1\uC138",id:"snap-\uC0C1\uC138",level:3},{value:"&quot;freeScroll&quot; \uC0C1\uC138",id:"freescroll-\uC0C1\uC138",level:3},{value:"&quot;strict&quot; \uC0C1\uC138",id:"strict-\uC0C1\uC138",level:3},{value:"\uC5F0\uAD00 \uC635\uC158",id:"\uC5F0\uAD00-\uC635\uC158",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function m(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"movement-types",children:"Movement Types"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#movetype",children:(0,s.jsx)(i.code,{children:"moveType"})})," \uC635\uC158\uC73C\uB85C \uD328\uB110\uC758 \uC774\uB3D9 \uBC0F \uC2A4\uB0C5 \uB3D9\uC791\uC744 \uC81C\uC5B4\uD569\uB2C8\uB2E4. snap, freeScroll, strict \uC138 \uAC00\uC9C0 \uBAA8\uB4DC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."]}),"\n",(0,s.jsx)(r,{}),"\n",(0,s.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,s.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\uC635\uC158"}),(0,s.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,s.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,s.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#movetype",children:(0,s.jsx)(i.code,{children:"moveType"})})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'"snap" | "freeScroll" | "strict" | object'})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'"snap"'})}),(0,s.jsx)(i.td,{children:"\uC774\uB3D9 \uB3D9\uC791 \uBAA8\uB4DC"})]})})]}),"\n",(0,s.jsx)(i.h3,{id:"\uAC12\uBCC4-\uBE44\uAD50",children:"\uAC12\uBCC4 \uBE44\uAD50"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\uAC12"}),(0,s.jsx)(i.th,{children:"\uB3D9\uC791"}),(0,s.jsx)(i.th,{children:"\uC801\uD569\uD55C \uC0C1\uD669"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'"snap"'})}),(0,s.jsx)(i.td,{children:"\uD328\uB110 \uB2E8\uC704\uB85C \uC2A4\uB0C5. \uB4DC\uB798\uADF8 \uAC70\uB9AC\uC5D0 \uB530\uB77C \uC5EC\uB7EC \uD328\uB110 \uC774\uB3D9 \uAC00\uB2A5"}),(0,s.jsx)(i.td,{children:"\uC77C\uBC18 \uCE90\uB7EC\uC140, \uC774\uBBF8\uC9C0 \uAC24\uB7EC\uB9AC"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'"freeScroll"'})}),(0,s.jsx)(i.td,{children:"\uC2A4\uB0C5 \uC5C6\uC774 \uC790\uC720\uB86D\uAC8C \uC2A4\uD06C\uB864. \uAD00\uC131 \uC801\uC6A9"}),(0,s.jsx)(i.td,{children:"\uC218\uD3C9 \uC2A4\uD06C\uB864 \uB9AC\uC2A4\uD2B8, \uD0ED \uBC14"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'"strict"'})}),(0,s.jsx)(i.td,{children:"\uD55C \uBC88\uC5D0 \uC815\uD655\uD788 \uD55C \uD328\uB110\uC529\uB9CC \uC774\uB3D9"}),(0,s.jsx)(i.td,{children:"\uC628\uBCF4\uB529, \uB2E8\uACC4\uBCC4 \uAC00\uC774\uB4DC, \uD480\uC2A4\uD06C\uB9B0 \uC2AC\uB77C\uC774\uB354"})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,s.jsx)(i.h3,{id:"snap-\uC0C1\uC138",children:'"snap" \uC0C1\uC138'}),"\n",(0,s.jsx)(i.p,{children:"\uAE30\uBCF8\uAC12\uC785\uB2C8\uB2E4. \uB4DC\uB798\uADF8 \uD6C4 \uC190\uC744 \uB5BC\uBA74 \uAC00\uC7A5 \uAC00\uAE4C\uC6B4 \uD328\uB110\uC5D0 \uC2A4\uB0C5\uB429\uB2C8\uB2E4. \uB4DC\uB798\uADF8 \uC18D\uB3C4\uC640 \uAC70\uB9AC\uC5D0 \uB530\uB77C \uC5EC\uB7EC \uD328\uB110\uC744 \uAC74\uB108\uB6F8 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"snap with count"}),": \uD55C \uBC88\uC5D0 \uC774\uB3D9\uD560 \uD328\uB110 \uC218\uB97C \uC81C\uD55C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",children:'moveType: { type: "snap", count: 2 }  // \uD55C \uBC88\uC5D0 \uCD5C\uB300 2\uAC1C \uD328\uB110\uC529 \uC774\uB3D9\n'})}),"\n",(0,s.jsx)(i.h3,{id:"freescroll-\uC0C1\uC138",children:'"freeScroll" \uC0C1\uC138'}),"\n",(0,s.jsx)(i.p,{children:"\uD328\uB110\uC5D0 \uC2A4\uB0C5\uB418\uC9C0 \uC54A\uACE0 \uB124\uC774\uD2F0\uBE0C \uC2A4\uD06C\uB864\uCC98\uB7FC \uC790\uC720\uB86D\uAC8C \uC774\uB3D9\uD569\uB2C8\uB2E4. \uB4DC\uB798\uADF8 \uC18D\uB3C4\uC5D0 \uB530\uB978 \uAD00\uC131\uC774 \uC801\uC6A9\uB429\uB2C8\uB2E4. \uD604\uC7AC \uD328\uB110 \uC778\uB371\uC2A4\uB294 \uD654\uBA74 \uC911\uC559\uC5D0 \uAC00\uC7A5 \uAC00\uAE4C\uC6B4 \uD328\uB110\uB85C \uACB0\uC815\uB429\uB2C8\uB2E4."}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"stopAtEdge \uC635\uC158"}),": \uACBD\uACC4\uC5D0\uC11C \uBA48\uCD9C\uC9C0 \uC5EC\uBD80\uB97C \uC124\uC815\uD569\uB2C8\uB2E4."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",children:'moveType: ["freeScroll", { stopAtEdge: true }]\n'})}),"\n",(0,s.jsx)(i.h3,{id:"strict-\uC0C1\uC138",children:'"strict" \uC0C1\uC138'}),"\n",(0,s.jsx)(i.p,{children:"\uD55C \uBC88\uC758 \uD50C\uB9AD\uC73C\uB85C \uC815\uD655\uD788 \uD55C \uD328\uB110\uB9CC \uC774\uB3D9\uD569\uB2C8\uB2E4. \uC544\uBB34\uB9AC \uBE60\uB974\uAC8C \uB4DC\uB798\uADF8\uD574\uB3C4 \uD55C \uCE78\uC529\uB9CC \uC774\uB3D9\uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uAC00 \uCF58\uD150\uCE20\uB97C \uAC74\uB108\uB6F0\uC9C0 \uBABB\uD558\uAC8C \uD574\uC57C \uD560 \uB54C \uC0AC\uC6A9\uD569\uB2C8\uB2E4."}),"\n",(0,s.jsx)(i.h3,{id:"\uC5F0\uAD00-\uC635\uC158",children:"\uC5F0\uAD00 \uC635\uC158"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"bound\uC640\uC758 \uAD00\uACC4"}),": ",(0,s.jsx)(i.code,{children:"freeScroll"})," \uBAA8\uB4DC\uC5D0\uC11C\uB294 ",(0,s.jsx)(i.code,{children:"bound: true"}),"\uB97C \uD568\uAED8 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4. \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uACBD\uACC4\uB97C \uB118\uC5B4 \uC2A4\uD06C\uB864\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"threshold\uC640\uC758 \uAD00\uACC4"}),": ",(0,s.jsx)(i.code,{children:"threshold"}),"\uB294 \uD328\uB110 \uC804\uD658\uC5D0 \uD544\uC694\uD55C \uCD5C\uC18C \uB4DC\uB798\uADF8 \uAC70\uB9AC\uC785\uB2C8\uB2E4. ",(0,s.jsx)(i.code,{children:"strict"})," \uBAA8\uB4DC\uC5D0\uC11C \uD2B9\uD788 \uC911\uC694\uD569\uB2C8\uB2E4."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"duration\uACFC\uC758 \uAD00\uACC4"}),": \uC2A4\uB0C5 \uC560\uB2C8\uBA54\uC774\uC158\uC758 \uC9C0\uC18D \uC2DC\uAC04\uC744 \uC870\uC808\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,s.jsx)(i.admonition,{title:"\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:'"snap"'}),": \uC77C\uBC18\uC801\uC778 \uCE90\uB7EC\uC140, \uC774\uBBF8\uC9C0 \uAC24\uB7EC\uB9AC, \uC81C\uD488 \uC2AC\uB77C\uC774\uB354"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:'"freeScroll"'}),": \uC218\uD3C9 \uC2A4\uD06C\uB864 \uBA54\uB274, \uD0ED \uBC14, \uD0DC\uADF8 \uB9AC\uC2A4\uD2B8, \uB124\uC774\uD2F0\uBE0C \uC2A4\uD06C\uB864 \uB290\uB08C\uC774 \uD544\uC694\uD55C UI"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:'"strict"'}),": \uC628\uBCF4\uB529 \uD654\uBA74, \uD29C\uD1A0\uB9AC\uC5BC, \uB2E8\uACC4\uBCC4 \uAC00\uC774\uB4DC, \uCF58\uD150\uCE20 \uAC74\uB108\uB6F0\uAE30 \uBC29\uC9C0"]}),"\n"]})}),"\n",(0,s.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,s.jsx)(i.admonition,{title:"freeScroll \uC0AC\uC6A9 \uC2DC",type:"warning",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"freeScroll"})," \uBAA8\uB4DC\uB294 \uAE30\uBCF8\uC801\uC73C\uB85C \uACBD\uACC4\uB97C \uB118\uC5B4 \uC2A4\uD06C\uB864\uB429\uB2C8\uB2E4. ",(0,s.jsx)(i.code,{children:"bound: true"}),"\uB97C \uD568\uAED8 \uC124\uC815\uD558\uC5EC \uACBD\uACC4\uB97C \uC81C\uD55C\uD558\uC138\uC694."]})}),"\n",(0,s.jsx)(i.admonition,{title:"strict \uBAA8\uB4DC",type:"warning",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"strict"})," \uBAA8\uB4DC\uB294 \uC0AC\uC6A9\uC790\uC758 \uC790\uC720\uB97C \uC81C\uD55C\uD569\uB2C8\uB2E4. \uC628\uBCF4\uB529\uCC98\uB7FC \uC21C\uCC28\uC801 \uD0D0\uC0C9\uC774 \uD544\uC694\uD55C \uACBD\uC6B0\uC5D0\uB9CC \uC0AC\uC6A9\uD558\uC138\uC694."]})}),"\n",(0,s.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,s.jsx)(i.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#bound",children:(0,s.jsx)(i.code,{children:"bound"})}),": \uACBD\uACC4 \uC81C\uD55C (freeScroll\uACFC \uD568\uAED8 \uC0AC\uC6A9 \uAD8C\uC7A5)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#threshold",children:(0,s.jsx)(i.code,{children:"threshold"})}),": \uD328\uB110 \uC804\uD658 \uCD5C\uC18C \uB4DC\uB798\uADF8 \uAC70\uB9AC"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#duration",children:(0,s.jsx)(i.code,{children:"duration"})}),": \uC560\uB2C8\uBA54\uC774\uC158 \uC9C0\uC18D \uC2DC\uAC04"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"./alignment",children:"Alignment"}),": \uD328\uB110 \uC815\uB82C"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"./bound",children:"Bound"}),": \uACBD\uACC4 \uC81C\uD55C \uBAA8\uB4DC"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"./threshold",children:"Threshold"}),": \uB4DC\uB798\uADF8 \uC784\uACC4\uAC12"]}),"\n"]})]})}function h(e={}){let{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},27449(e,i,l){l.d(i,{A:()=>o});var n=l(65723),s=l(19612);l(22155);let c="^4.11.4",t={react:{"@egjs/react-flicking":c,"@egjs/flicking":c},vue3:{"@egjs/vue3-flicking":c,"@egjs/flicking":c},vanilla:{"@egjs/flicking":c}},a=`<!DOCTYPE html>
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
`;function o({code:e,html:i,template:l="react",dependencies:c={},files:o={},css:p=""}){var v;let g,m,h;return(0,n.jsx)(s.OZ,{template:"vue3"===l?"vue":"vanilla"===l?"vanilla":"react",files:(h={"/styles.css":{code:m=p?`${r}
${p}`:r},...o},"react"===l?{"/App.tsx":{code:e},"/index.js":{code:d,hidden:!0},...h}:"vue3"===l?{"/src/App.vue":{code:e},...h}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),l=[],n=[],s=!1;for(let e of i)s?n.push(e):e.trimStart().startsWith("import ")||""===e.trim()?l.push(e.replace('"../styles.css"','"./styles.css"')):(s=!0,n.push(e));for(;n.length>0&&""===n[n.length-1].trim();)n.pop();return[...l,"","const _run = () => {",...n.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:m},"/index.html":{code:(g="<style>.flicking-viewport{opacity:0}</style>",(v=i||a).includes("</head>")?v.replace("</head>",`${g}
</head>`):g+v)},...o}),customSetup:{dependencies:{...t[l],...c}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===l?["/App.tsx","/styles.css"]:"vue3"===l?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===l?"/App.tsx":"vue3"===l?"/src/App.vue":"/src/index.js"}})}},72722(e,i,l){l.d(i,{A:()=>j});var n=l(65723),s=l(34622),c=l(7210),t=l(78863);l(22155);let a=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,d=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",r=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${a(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(i=>`${i}: ${a(e[i],"'")}`).join(", ")}`,p=(e,{prefix:i,includeFlicking:l=!0}={})=>{let n=l?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&n.push(...e),`${n.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},v=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,g=({options:e,panels:i,events:l={},methods:c={},plugins:t=[],siblings:o=[],imports:v=[],viewportClass:g=""})=>{let m=e=>`${Object.keys(e).map(i=>`${i}: ${a(e[i])}`).join(",\n  ")}`,h=Object.keys(c).map(e=>`const ${e} = ${c[e]};
`).join(""),j=e?`const flicking = new Flicking("#flick", {
  ${m(e)}
});

`:'const flicking = new Flicking("#flick")',f=t.length>0?`flicking.addPlugins(${t.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?m(e[1]):e[1]??""}
}`:""})`)});`:"",x=[...t.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...v],k=Object.keys(l).map(e=>{let i=l[e];return`flicking.on("${e}", ${i})
`}).join(""),u=i.filter(e=>e.isSlot);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${g&&` ${g}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${u.length?`
  ${u.map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,n.jsx)(s.A,{className:"language-js",title:"js",children:`${p(x)}

${h}${j}${f}${k}`.trim()})]})},m=({options:e,panels:i,events:l={},methods:c={},plugins:t,siblings:a,imports:o=[],viewportClass:g=""})=>{let m=t?`
  private _plugins = [${v(t)}];
`:"",h=i.filter(e=>e.isSlot),j=[["{ Component }","react"],[h.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],f=Object.keys(c).map(e=>`
const ${e} = ${c[e]};`).join("");f&&(f+="\n"),t&&j.push([`{ ${t.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),j.push(...o);let x=h.length?`
      <ViewportSlot>
        ${h.map(e=>`<${e.tag}${d(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",k=Object.keys(l).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${l[e]}}`).join("");return(0,n.jsx)(s.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(j,{includeFlicking:!1})}
${f}
export default class DemoComponent extends Component {${m}
  public render() {
    return ${a?"<>\n    ":""}<Flicking${g&&` className="${g}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${t?" plugins={this._plugins}":""}${k}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${d(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${x}
    </Flicking>${a?`
    ${a.map(e=>`<${e.tag}${d(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},h=({options:e,panels:i,events:l={},methods:c={},plugins:t,siblings:a=[],imports:g=[],viewportClass:m=""})=>{let h=o(e),j=i.filter(e=>e.isSlot),f=t?`,
  data() {
    return {
      plugins: [${v(t)}]
    }
  }`:"",x=j.length?`
  <template #viewport>
    ${j.map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",k=[...(t??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],u=Object.keys(c),$=u.length>0?`,
  methods: {
    ${u.map(e=>`${e}: ${c[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",y=Object.keys(l).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${l[e]}"`).join("");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{className:"language-html",title:"template",children:`<Flicking${m&&` class="${m}"`}${e?` :options="{ ${h} }"`:""}${t?' :plugins="plugins"':""}${y}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n  ")}${x}
</Flicking>${a?`
${a.map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,n.jsx)(s.A,{className:"language-js",title:"script",children:`${p(k,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${f}${$}
}`})]})},j=({js:e,react:i,vue3:l,style:a,...d})=>(0,n.jsxs)("div",{children:[(0,n.jsxs)(t.A,{groupId:"cfc",defaultValue:"js",children:[(0,n.jsx)(c.A,{value:"react",label:"React",children:i||(0,n.jsx)(m,{...d})}),(0,n.jsx)(c.A,{value:"vue3",label:"Vue@3",children:l||(0,n.jsx)(h,{...d})}),(0,n.jsx)(c.A,{value:"js",label:"JavaScript",children:e||(0,n.jsx)(g,{...d})})]}),a&&(0,n.jsx)(s.A,{className:"language-css",title:"style",children:`${a}`})]})}}]);