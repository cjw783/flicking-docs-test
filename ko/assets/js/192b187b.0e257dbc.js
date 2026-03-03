"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["7650"],{47221(e,i,l){l.r(i),l.d(i,{metadata:()=>n,default:()=>m,frontMatter:()=>o,contentTitle:()=>p,toc:()=>v,assets:()=>g});var n=JSON.parse('{"id":"demos/basic/alignment","title":"Alignment","description":"align \uC635\uC158\uC73C\uB85C \uBDF0\uD3EC\uD2B8 \uB0B4 \uD328\uB110 \uC815\uB82C \uC704\uCE58\uB97C \uC81C\uC5B4\uD569\uB2C8\uB2E4","source":"@site/docs/demos/basic/alignment.mdx","sourceDirName":"demos/basic","slug":"/demos/basic/alignment","permalink":"/flicking-docs-test/ko/docs/demos/basic/alignment","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/basic/alignment.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Alignment","id":"alignment","slug":"/demos/basic/alignment","sidebar_position":2,"description":"align \uC635\uC158\uC73C\uB85C \uBDF0\uD3EC\uD2B8 \uB0B4 \uD328\uB110 \uC815\uB82C \uC704\uCE58\uB97C \uC81C\uC5B4\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","align","alignment","\uC815\uB82C","prev","center","next"]},"sidebar":"demosSidebar","previous":{"title":"Default","permalink":"/flicking-docs-test/ko/docs/demos/basic/default"},"next":{"title":"Circular","permalink":"/flicking-docs-test/ko/docs/demos/basic/circular"}}'),s=l(65723),c=l(54187),a=l(27449),t=l(72722);l(22155);let d=`
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
      {/* align: "prev" - \u{D328}\u{B110}\u{C774} \u{C67C}\u{CABD}\u{C5D0} \u{C815}\u{B82C} */}
      <div className="demo-container">
        <div className="demo-label">align: "prev"</div>
        <Flicking align="prev">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>

      {/* align: "center" - \u{D328}\u{B110}\u{C774} \u{C911}\u{C559}\u{C5D0} \u{C815}\u{B82C} */}
      <div className="demo-container">
        <div className="demo-label">align: "center"</div>
        <Flicking align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>

      {/* align: "next" - \u{D328}\u{B110}\u{C774} \u{C624}\u{B978}\u{CABD}\u{C5D0} \u{C815}\u{B82C} */}
      <div className="demo-container">
        <div className="demo-label">align: "next"</div>
        <Flicking align="next">
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
    <!-- align: "prev" - \u{D328}\u{B110}\u{C774} \u{C67C}\u{CABD}\u{C5D0} \u{C815}\u{B82C} -->
    <div class="demo-container">
      <div class="demo-label">align: "prev"</div>
      <Flicking :options="{ align: 'prev' }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
    </div>

    <!-- align: "center" - \u{D328}\u{B110}\u{C774} \u{C911}\u{C559}\u{C5D0} \u{C815}\u{B82C} -->
    <div class="demo-container">
      <div class="demo-label">align: "center"</div>
      <Flicking :options="{ align: 'center' }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
    </div>

    <!-- align: "next" - \u{D328}\u{B110}\u{C774} \u{C624}\u{B978}\u{CABD}\u{C5D0} \u{C815}\u{B82C} -->
    <div class="demo-container">
      <div class="demo-label">align: "next"</div>
      <Flicking :options="{ align: 'next' }">
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
</style>`,n=(0,s.jsx)(a.A,{template:"vue3",code:l,css:d}),c=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

// align: "prev"
new Flicking("#flick-prev", { align: "prev" });

// align: "center"
new Flicking("#flick-center", { align: "center" });

// align: "next"
new Flicking("#flick-next", { align: "next" });`,r=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <!-- align: "prev" -->
  <div class="demo-container">
    <div class="demo-label">align: "prev"</div>
    <div id="flick-prev" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </div>
    </div>
  </div>

  <!-- align: "center" -->
  <div class="demo-container">
    <div class="demo-label">align: "center"</div>
    <div id="flick-center" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </div>
    </div>
  </div>

  <!-- align: "next" -->
  <div class="demo-container">
    <div class="demo-label">align: "next"</div>
    <div id="flick-next" class="flicking-viewport">
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
</html>`,o=(0,s.jsx)(a.A,{template:"vanilla",code:c,html:r,css:d});return(0,s.jsx)(t.A,{options:{},panels:[],react:i,vue3:n,js:o})},o={title:"Alignment",id:"alignment",slug:"/demos/basic/alignment",sidebar_position:2,description:"align \uC635\uC158\uC73C\uB85C \uBDF0\uD3EC\uD2B8 \uB0B4 \uD328\uB110 \uC815\uB82C \uC704\uCE58\uB97C \uC81C\uC5B4\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","align","alignment","\uC815\uB82C","prev","center","next"]},p="Alignment",g={},v=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uAC12\uBCC4 \uBE44\uAD50",id:"\uAC12\uBCC4-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"&quot;prev&quot; \uC0C1\uC138",id:"prev-\uC0C1\uC138",level:3},{value:"&quot;center&quot; \uC0C1\uC138",id:"center-\uC0C1\uC138",level:3},{value:"&quot;next&quot; \uC0C1\uC138",id:"next-\uC0C1\uC138",level:3},{value:"\uC22B\uC790/\uBB38\uC790\uC5F4 \uAC12 \uC0C1\uC138",id:"\uC22B\uC790\uBB38\uC790\uC5F4-\uAC12-\uC0C1\uC138",level:3},{value:"\uC5F0\uAD00 \uC635\uC158",id:"\uC5F0\uAD00-\uC635\uC158",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function h(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"alignment",children:"Alignment"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#align",children:(0,s.jsx)(i.code,{children:"align"})})," \uC635\uC158\uC73C\uB85C \uBDF0\uD3EC\uD2B8 \uB0B4 \uD328\uB110\uC758 \uC815\uB82C \uC704\uCE58\uB97C \uC81C\uC5B4\uD569\uB2C8\uB2E4. \uD328\uB110\uC774 \uC67C\uCABD, \uC911\uC559, \uC624\uB978\uCABD \uC911 \uC5B4\uB514\uC5D0 \uC704\uCE58\uD560\uC9C0 \uACB0\uC815\uD569\uB2C8\uB2E4."]}),"\n",(0,s.jsx)(r,{}),"\n",(0,s.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,s.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\uC635\uC158"}),(0,s.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,s.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,s.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#align",children:(0,s.jsx)(i.code,{children:"align"})})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'"prev" | "center" | "next" | number | string'})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'"center"'})}),(0,s.jsx)(i.td,{children:"\uD328\uB110 \uC815\uB82C \uC704\uCE58"})]})})]}),"\n",(0,s.jsx)(i.h3,{id:"\uAC12\uBCC4-\uBE44\uAD50",children:"\uAC12\uBCC4 \uBE44\uAD50"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\uAC12"}),(0,s.jsx)(i.th,{children:"\uB3D9\uC791"}),(0,s.jsx)(i.th,{children:"\uC801\uD569\uD55C \uC0C1\uD669"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'"prev"'})}),(0,s.jsx)(i.td,{children:"\uD604\uC7AC \uD328\uB110\uC774 \uBDF0\uD3EC\uD2B8 \uC67C\uCABD(\uC138\uB85C\uBA74 \uC704)\uC5D0 \uC815\uB82C"}),(0,s.jsx)(i.td,{children:"\uAC24\uB7EC\uB9AC, \uB9AC\uC2A4\uD2B8\uD615 UI"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'"center"'})}),(0,s.jsx)(i.td,{children:"\uD604\uC7AC \uD328\uB110\uC774 \uBDF0\uD3EC\uD2B8 \uC911\uC559\uC5D0 \uC815\uB82C"}),(0,s.jsx)(i.td,{children:"\uC2A4\uD3EC\uD2B8\uB77C\uC774\uD2B8, \uC81C\uD488 \uC1FC\uCF00\uC774\uC2A4"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'"next"'})}),(0,s.jsx)(i.td,{children:"\uD604\uC7AC \uD328\uB110\uC774 \uBDF0\uD3EC\uD2B8 \uC624\uB978\uCABD(\uC138\uB85C\uBA74 \uC544\uB798)\uC5D0 \uC815\uB82C"}),(0,s.jsx)(i.td,{children:"RTL \uC778\uD130\uD398\uC774\uC2A4, \uD2B9\uC218 \uB808\uC774\uC544\uC6C3"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"\uC22B\uC790/\uBB38\uC790\uC5F4"}),(0,s.jsxs)(i.td,{children:["\uC9C0\uC815\uD55C \uC704\uCE58\uC5D0 \uC815\uB82C (",(0,s.jsx)(i.code,{children:"0.25"}),", ",(0,s.jsx)(i.code,{children:'"100px"'}),", ",(0,s.jsx)(i.code,{children:'"50% - 25px"'}),")"]}),(0,s.jsx)(i.td,{children:"\uC815\uBC00\uD55C \uCEE4\uC2A4\uD140 \uC704\uCE58"})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,s.jsx)(i.h3,{id:"prev-\uC0C1\uC138",children:'"prev" \uC0C1\uC138'}),"\n",(0,s.jsx)(i.p,{children:"\uD328\uB110\uC758 \uC2DC\uC791\uC810(\uC67C\uCABD \uB610\uB294 \uC704)\uC774 \uBDF0\uD3EC\uD2B8\uC758 \uC2DC\uC791\uC810\uC5D0 \uB9DE\uCDB0\uC9D1\uB2C8\uB2E4. \uB9AC\uC2A4\uD2B8\uB97C \uB118\uAE30\uB4EF \uC790\uC5F0\uC2A4\uB7EC\uC6B4 \uD750\uB984\uC744 \uB9CC\uB4ED\uB2C8\uB2E4. LTR(\uC67C\uCABD\u2192\uC624\uB978\uCABD) \uC778\uD130\uD398\uC774\uC2A4\uC5D0\uC11C \uAC00\uC7A5 \uC9C1\uAD00\uC801\uC785\uB2C8\uB2E4."}),"\n",(0,s.jsx)(i.h3,{id:"center-\uC0C1\uC138",children:'"center" \uC0C1\uC138'}),"\n",(0,s.jsx)(i.p,{children:"\uD328\uB110\uC758 \uC911\uC2EC\uC774 \uBDF0\uD3EC\uD2B8\uC758 \uC911\uC2EC\uC5D0 \uB9DE\uCDB0\uC9D1\uB2C8\uB2E4. \uD604\uC7AC \uD328\uB110\uC5D0 \uC2DC\uAC01\uC801 \uC9D1\uC911\uC744 \uC720\uB3C4\uD558\uBA70, \uC88C\uC6B0\uC5D0 \uC774\uC804/\uB2E4\uC74C \uD328\uB110\uC774 \uC0B4\uC9DD \uBCF4\uC774\uB294 \uD6A8\uACFC\uB97C \uC904 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n",(0,s.jsx)(i.h3,{id:"next-\uC0C1\uC138",children:'"next" \uC0C1\uC138'}),"\n",(0,s.jsx)(i.p,{children:"\uD328\uB110\uC758 \uB05D\uC810(\uC624\uB978\uCABD \uB610\uB294 \uC544\uB798)\uC774 \uBDF0\uD3EC\uD2B8\uC758 \uB05D\uC810\uC5D0 \uB9DE\uCDB0\uC9D1\uB2C8\uB2E4. RTL(\uC624\uB978\uCABD\u2192\uC67C\uCABD) \uC5B8\uC5B4 \uC778\uD130\uD398\uC774\uC2A4\uB098 \uD2B9\uC218\uD55C \uB514\uC790\uC778 \uC694\uAD6C\uC0AC\uD56D\uC5D0 \uC0AC\uC6A9\uB429\uB2C8\uB2E4."}),"\n",(0,s.jsx)(i.h3,{id:"\uC22B\uC790\uBB38\uC790\uC5F4-\uAC12-\uC0C1\uC138",children:"\uC22B\uC790/\uBB38\uC790\uC5F4 \uAC12 \uC0C1\uC138"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"0"})," ~ ",(0,s.jsx)(i.code,{children:"1"})," \uC22B\uC790: \uBDF0\uD3EC\uD2B8 \uB108\uBE44\uC758 \uBE44\uC728 (0=\uC67C\uCABD, 0.5=\uC911\uC559, 1=\uC624\uB978\uCABD)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"100px"'}),": \uBDF0\uD3EC\uD2B8 \uC67C\uCABD\uC5D0\uC11C 100px \uC704\uCE58"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"50% - 25px"'}),": \uC218\uC2DD \uACC4\uC0B0 \uAC00\uB2A5"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\uC5F0\uAD00-\uC635\uC158",children:"\uC5F0\uAD00 \uC635\uC158"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"panelsPerView\uC640\uC758 \uAD00\uACC4"}),": ",(0,s.jsx)(i.code,{children:"panelsPerView"}),"\uAC00 \uC124\uC815\uB418\uBA74 \uC815\uB82C \uAE30\uC900\uC810\uC774 \uAC1C\uBCC4 \uD328\uB110\uC774 \uC544\uB2CC \uBCF4\uC774\uB294 \uD328\uB110 \uADF8\uB8F9\uC758 \uC911\uC2EC\uC774 \uB429\uB2C8\uB2E4"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"circular\uC640\uC758 \uAD00\uACC4"}),": ",(0,s.jsx)(i.code,{children:"circular: true"}),"\uC640 ",(0,s.jsx)(i.code,{children:'align: "center"'})," \uC870\uD569\uC774 \uAC00\uC7A5 \uC77C\uBC18\uC801\uC778 \uCE90\uB7EC\uC140 \uD328\uD134\uC785\uB2C8\uB2E4"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,s.jsx)(i.admonition,{title:"\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:'"prev"'}),": \uC774\uBBF8\uC9C0 \uAC24\uB7EC\uB9AC, \uAE30\uC0AC \uBAA9\uB85D, \uC378\uB124\uC77C \uB124\uBE44\uAC8C\uC774\uC158"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:'"center"'}),": \uC81C\uD488 \uC0C1\uC138, \uD788\uC5B4\uB85C \uC2AC\uB77C\uC774\uB354, \uCE74\uB4DC \uCE90\uB7EC\uC140"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:'"next"'}),": \uC544\uB78D\uC5B4/\uD788\uBE0C\uB9AC\uC5B4 UI, \uC5ED\uBC29\uD5A5 \uD0C0\uC784\uB77C\uC778"]}),"\n"]})}),"\n",(0,s.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,s.jsx)(i.admonition,{title:"\uC8FC\uC758",type:"warning",children:(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"panelsPerView"})," \uC0AC\uC6A9 \uC2DC \uC815\uB82C \uB3D9\uC791\uC774 \uB2EC\uB77C\uC9D1\uB2C8\uB2E4. \uAC1C\uBCC4 \uD328\uB110\uC774 \uC544\uB2CC \uD328\uB110 \uADF8\uB8F9 \uAE30\uC900\uC73C\uB85C \uC815\uB82C\uB429\uB2C8\uB2E4."]}),"\n",(0,s.jsx)(i.li,{children:"\uD328\uB110 \uD06C\uAE30\uAC00 \uBDF0\uD3EC\uD2B8\uBCF4\uB2E4 \uD06C\uBA74 \uC608\uC0C1\uACFC \uB2E4\uB974\uAC8C \uBCF4\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n"]})}),"\n",(0,s.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,s.jsx)(i.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#panelsperview",children:(0,s.jsx)(i.code,{children:"panelsPerView"})}),": \uD654\uBA74\uB2F9 \uD328\uB110 \uC218 (\uC815\uB82C \uACC4\uC0B0\uC5D0 \uC601\uD5A5)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#circular",children:(0,s.jsx)(i.code,{children:"circular"})}),": \uC21C\uD658 \uBAA8\uB4DC"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"./circular",children:"Circular"}),": \uC21C\uD658 \uBAA8\uB4DC\uC640 \uC815\uB82C \uC870\uD569"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"./panels-per-view",children:"Panels Per View"}),": \uB2E4\uC911 \uD328\uB110 \uD45C\uC2DC\uC640 \uC815\uB82C"]}),"\n"]})]})}function m(e={}){let{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},27449(e,i,l){l.d(i,{A:()=>o});var n=l(65723),s=l(19612);l(22155);let c="^4.11.4",a={react:{"@egjs/react-flicking":c,"@egjs/flicking":c},vue3:{"@egjs/vue3-flicking":c,"@egjs/flicking":c},vanilla:{"@egjs/flicking":c}},t=`<!DOCTYPE html>
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
</head>`):v+g)},...o}),customSetup:{dependencies:{...a[l],...c}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===l?["/App.tsx","/styles.css"]:"vue3"===l?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===l?"/App.tsx":"vue3"===l?"/src/App.vue":"/src/index.js"}})}},72722(e,i,l){l.d(i,{A:()=>x});var n=l(65723),s=l(34622),c=l(7210),a=l(78863);l(22155);let t=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,d=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",r=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${t(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(i=>`${i}: ${t(e[i],"'")}`).join(", ")}`,p=(e,{prefix:i,includeFlicking:l=!0}={})=>{let n=l?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&n.push(...e),`${n.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},g=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,v=({options:e,panels:i,events:l={},methods:c={},plugins:a=[],siblings:o=[],imports:g=[],viewportClass:v=""})=>{let h=e=>`${Object.keys(e).map(i=>`${i}: ${t(e[i])}`).join(",\n  ")}`,m=Object.keys(c).map(e=>`const ${e} = ${c[e]};
`).join(""),x=e?`const flicking = new Flicking("#flick", {
  ${h(e)}
});

`:'const flicking = new Flicking("#flick")',j=a.length>0?`flicking.addPlugins(${a.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?h(e[1]):e[1]??""}
}`:""})`)});`:"",f=[...a.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],k=Object.keys(l).map(e=>{let i=l[e];return`flicking.on("${e}", ${i})
`}).join(""),u=i.filter(e=>e.isSlot);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${v&&` ${v}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${u.length?`
  ${u.map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,n.jsx)(s.A,{className:"language-js",title:"js",children:`${p(f)}

${m}${x}${j}${k}`.trim()})]})},h=({options:e,panels:i,events:l={},methods:c={},plugins:a,siblings:t,imports:o=[],viewportClass:v=""})=>{let h=a?`
  private _plugins = [${g(a)}];
`:"",m=i.filter(e=>e.isSlot),x=[["{ Component }","react"],[m.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],j=Object.keys(c).map(e=>`
const ${e} = ${c[e]};`).join("");j&&(j+="\n"),a&&x.push([`{ ${a.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),x.push(...o);let f=m.length?`
      <ViewportSlot>
        ${m.map(e=>`<${e.tag}${d(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",k=Object.keys(l).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${l[e]}}`).join("");return(0,n.jsx)(s.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(x,{includeFlicking:!1})}
${j}
export default class DemoComponent extends Component {${h}
  public render() {
    return ${t?"<>\n    ":""}<Flicking${v&&` className="${v}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${a?" plugins={this._plugins}":""}${k}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${d(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${f}
    </Flicking>${t?`
    ${t.map(e=>`<${e.tag}${d(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},m=({options:e,panels:i,events:l={},methods:c={},plugins:a,siblings:t=[],imports:v=[],viewportClass:h=""})=>{let m=o(e),x=i.filter(e=>e.isSlot),j=a?`,
  data() {
    return {
      plugins: [${g(a)}]
    }
  }`:"",f=x.length?`
  <template #viewport>
    ${x.map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",k=[...(a??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...v],u=Object.keys(c),$=u.length>0?`,
  methods: {
    ${u.map(e=>`${e}: ${c[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",b=Object.keys(l).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${l[e]}"`).join("");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{className:"language-html",title:"template",children:`<Flicking${h&&` class="${h}"`}${e?` :options="{ ${m} }"`:""}${a?' :plugins="plugins"':""}${b}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n  ")}${f}
</Flicking>${t?`
${t.map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,n.jsx)(s.A,{className:"language-js",title:"script",children:`${p(k,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${j}${$}
}`})]})},x=({js:e,react:i,vue3:l,style:t,...d})=>(0,n.jsxs)("div",{children:[(0,n.jsxs)(a.A,{groupId:"cfc",defaultValue:"js",children:[(0,n.jsx)(c.A,{value:"react",label:"React",children:i||(0,n.jsx)(h,{...d})}),(0,n.jsx)(c.A,{value:"vue3",label:"Vue@3",children:l||(0,n.jsx)(m,{...d})}),(0,n.jsx)(c.A,{value:"js",label:"JavaScript",children:e||(0,n.jsx)(v,{...d})})]}),t&&(0,n.jsx)(s.A,{className:"language-css",title:"style",children:`${t}`})]})}}]);