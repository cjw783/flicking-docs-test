"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["9270"],{32619(e,i,n){n.r(i),n.d(i,{metadata:()=>l,default:()=>m,frontMatter:()=>o,contentTitle:()=>r,toc:()=>g,assets:()=>u});var l=JSON.parse('{"id":"demos/basic/input-type","title":"Input Type","description":"inputType \uC635\uC158\uC73C\uB85C \uD65C\uC131\uD654\uD560 \uC785\uB825 \uC7A5\uCE58 \uD0C0\uC785\uC744 \uC124\uC815\uD569\uB2C8\uB2E4","source":"@site/docs/demos/basic/input-type.mdx","sourceDirName":"demos/basic","slug":"/demos/basic/input-type","permalink":"/flicking-docs-test/ko/docs/demos/basic/input-type","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/basic/input-type.mdx","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"Input Type","id":"input-type","slug":"/demos/basic/input-type","sidebar_position":12,"description":"inputType \uC635\uC158\uC73C\uB85C \uD65C\uC131\uD654\uD560 \uC785\uB825 \uC7A5\uCE58 \uD0C0\uC785\uC744 \uC124\uC815\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","inputType","touch","mouse","\uC785\uB825","\uD130\uCE58","\uB9C8\uC6B0\uC2A4"]},"sidebar":"demosSidebar","previous":{"title":"Threshold","permalink":"/flicking-docs-test/ko/docs/demos/basic/threshold"},"next":{"title":"Disable Input","permalink":"/flicking-docs-test/ko/docs/demos/basic/disable-input"}}'),s=n(65723),t=n(54187),c=n(27449),a=n(72722);n(22155);let d=`
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
`,p=()=>{let e=`import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "./styles.css";

export default function App() {
  return (
    <div>
      {/* inputType: ["touch", "mouse"] (\u{AE30}\u{BCF8}\u{AC12}) */}
      <div className="demo-container">
        <div className="demo-label">inputType: ["touch", "mouse"] (\u{AE30}\u{BCF8}\u{AC12})</div>
        <Flicking inputType={["touch", "mouse"]} align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>

      {/* inputType: ["touch"] */}
      <div className="demo-container">
        <div className="demo-label">inputType: ["touch"] (\u{D130}\u{CE58}\u{B9CC}, \u{B9C8}\u{C6B0}\u{C2A4} \u{B4DC}\u{B798}\u{ADF8} \u{BD88}\u{AC00})</div>
        <Flicking inputType={["touch"]} align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>

      {/* inputType: ["mouse"] */}
      <div className="demo-container">
        <div className="demo-label">inputType: ["mouse"] (\u{B9C8}\u{C6B0}\u{C2A4}\u{B9CC}, \u{D130}\u{CE58} \u{BD88}\u{AC00})</div>
        <Flicking inputType={["mouse"]} align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>
    </div>
  );
}`,i=(0,s.jsx)(c.A,{template:"react",code:e,css:d}),n=`<template>
  <div>
    <!-- inputType: ["touch", "mouse"] (\u{AE30}\u{BCF8}\u{AC12}) -->
    <div class="demo-container">
      <div class="demo-label">inputType: ["touch", "mouse"] (\u{AE30}\u{BCF8}\u{AC12})</div>
      <Flicking :options="{ inputType: ['touch', 'mouse'], align: 'center' }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
    </div>

    <!-- inputType: ["touch"] -->
    <div class="demo-container">
      <div class="demo-label">inputType: ["touch"] (\u{D130}\u{CE58}\u{B9CC}, \u{B9C8}\u{C6B0}\u{C2A4} \u{B4DC}\u{B798}\u{ADF8} \u{BD88}\u{AC00})</div>
      <Flicking :options="{ inputType: ['touch'], align: 'center' }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
    </div>

    <!-- inputType: ["mouse"] -->
    <div class="demo-container">
      <div class="demo-label">inputType: ["mouse"] (\u{B9C8}\u{C6B0}\u{C2A4}\u{B9CC}, \u{D130}\u{CE58} \u{BD88}\u{AC00})</div>
      <Flicking :options="{ inputType: ['mouse'], align: 'center' }">
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
</style>`,l=(0,s.jsx)(c.A,{template:"vue3",code:n,css:d}),t=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

// inputType: ["touch", "mouse"] (\u{AE30}\u{BCF8}\u{AC12})
new Flicking("#flick-both", {
  inputType: ["touch", "mouse"],
  align: "center"
});

// inputType: ["touch"]
new Flicking("#flick-touch", {
  inputType: ["touch"],
  align: "center"
});

// inputType: ["mouse"]
new Flicking("#flick-mouse", {
  inputType: ["mouse"],
  align: "center"
});`,p=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <!-- inputType: ["touch", "mouse"] (\u{AE30}\u{BCF8}\u{AC12}) -->
  <div class="demo-container">
    <div class="demo-label">inputType: ["touch", "mouse"] (\u{AE30}\u{BCF8}\u{AC12})</div>
    <div id="flick-both" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </div>
    </div>
  </div>

  <!-- inputType: ["touch"] -->
  <div class="demo-container">
    <div class="demo-label">inputType: ["touch"] (\u{D130}\u{CE58}\u{B9CC}, \u{B9C8}\u{C6B0}\u{C2A4} \u{B4DC}\u{B798}\u{ADF8} \u{BD88}\u{AC00})</div>
    <div id="flick-touch" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </div>
    </div>
  </div>

  <!-- inputType: ["mouse"] -->
  <div class="demo-container">
    <div class="demo-label">inputType: ["mouse"] (\u{B9C8}\u{C6B0}\u{C2A4}\u{B9CC}, \u{D130}\u{CE58} \u{BD88}\u{AC00})</div>
    <div id="flick-mouse" class="flicking-viewport">
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
</html>`,o=(0,s.jsx)(c.A,{template:"vanilla",code:t,html:p,css:d});return(0,s.jsx)(a.A,{options:{},panels:[],react:i,vue3:l,js:o})},o={title:"Input Type",id:"input-type",slug:"/demos/basic/input-type",sidebar_position:12,description:"inputType \uC635\uC158\uC73C\uB85C \uD65C\uC131\uD654\uD560 \uC785\uB825 \uC7A5\uCE58 \uD0C0\uC785\uC744 \uC124\uC815\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","inputType","touch","mouse","\uC785\uB825","\uD130\uCE58","\uB9C8\uC6B0\uC2A4"]},r="Input Type",u={},g=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uAC12\uBCC4 \uBE44\uAD50",id:"\uAC12\uBCC4-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"inputType \uB3D9\uC791 \uC6D0\uB9AC",id:"inputtype-\uB3D9\uC791-\uC6D0\uB9AC",level:3},{value:"\uC9C0\uC6D0\uB418\uB294 \uC785\uB825 \uD0C0\uC785",id:"\uC9C0\uC6D0\uB418\uB294-\uC785\uB825-\uD0C0\uC785",level:3},{value:"\uC5F0\uAD00 \uC635\uC158",id:"\uC5F0\uAD00-\uC635\uC158",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function h(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"input-type",children:"Input Type"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#inputtype",children:(0,s.jsx)(i.code,{children:"inputType"})})," \uC635\uC158\uC73C\uB85C \uD65C\uC131\uD654\uD560 \uC785\uB825 \uC7A5\uCE58 \uD0C0\uC785\uC744 \uBC30\uC5F4\uB85C \uC124\uC815\uD569\uB2C8\uB2E4. \uD2B9\uC815 \uC785\uB825 \uC7A5\uCE58\uB9CC \uD5C8\uC6A9\uD558\uAC70\uB098 \uC81C\uD55C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n",(0,s.jsx)(p,{}),"\n",(0,s.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,s.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\uC635\uC158"}),(0,s.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,s.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,s.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#inputtype",children:(0,s.jsx)(i.code,{children:"inputType"})})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"string[]"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'["touch", "mouse"]'})}),(0,s.jsx)(i.td,{children:"\uD65C\uC131\uD654\uD560 \uC785\uB825 \uC7A5\uCE58 \uD0C0\uC785"})]})})]}),"\n",(0,s.jsx)(i.h3,{id:"\uAC12\uBCC4-\uBE44\uAD50",children:"\uAC12\uBCC4 \uBE44\uAD50"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\uAC12"}),(0,s.jsx)(i.th,{children:"\uB3D9\uC791"}),(0,s.jsx)(i.th,{children:"\uC801\uD569\uD55C \uC0C1\uD669"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'["touch", "mouse"]'})}),(0,s.jsx)(i.td,{children:"\uD130\uCE58\uC640 \uB9C8\uC6B0\uC2A4 \uBAA8\uB450 \uD5C8\uC6A9 (\uAE30\uBCF8\uAC12)"}),(0,s.jsx)(i.td,{children:"\uC77C\uBC18\uC801\uC778 \uC0AC\uC6A9, \uD06C\uB85C\uC2A4 \uD50C\uB7AB\uD3FC"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'["touch"]'})}),(0,s.jsx)(i.td,{children:"\uD130\uCE58\uB9CC \uD5C8\uC6A9, \uB9C8\uC6B0\uC2A4 \uB4DC\uB798\uADF8 \uBB34\uC2DC"}),(0,s.jsx)(i.td,{children:"\uD130\uCE58 \uC804\uC6A9 UI, \uB9C8\uC6B0\uC2A4 \uB4DC\uB798\uADF8 \uBC29\uC9C0"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'["mouse"]'})}),(0,s.jsx)(i.td,{children:"\uB9C8\uC6B0\uC2A4\uB9CC \uD5C8\uC6A9, \uD130\uCE58 \uBB34\uC2DC"}),(0,s.jsx)(i.td,{children:"\uB370\uC2A4\uD06C\uD1B1 \uC804\uC6A9 UI"})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,s.jsx)(i.h3,{id:"inputtype-\uB3D9\uC791-\uC6D0\uB9AC",children:"inputType \uB3D9\uC791 \uC6D0\uB9AC"}),"\n",(0,s.jsx)(i.p,{children:"\uBC30\uC5F4\uC5D0 \uD3EC\uD568\uB41C \uC785\uB825 \uD0C0\uC785\uB9CC Flicking \uC870\uC791\uC5D0 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uD3EC\uD568\uB418\uC9C0 \uC54A\uC740 \uC785\uB825 \uD0C0\uC785\uC740 \uBB34\uC2DC\uB429\uB2C8\uB2E4."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",children:'// \uBAA8\uB4E0 \uC785\uB825 \uD5C8\uC6A9 (\uAE30\uBCF8\uAC12)\ninputType: ["touch", "mouse"]\n\n// \uD130\uCE58\uB9CC \uD5C8\uC6A9\ninputType: ["touch"]\n\n// \uB9C8\uC6B0\uC2A4\uB9CC \uD5C8\uC6A9\ninputType: ["mouse"]\n\n// \uBAA8\uB4E0 \uC785\uB825 \uBE44\uD65C\uC131\uD654\ninputType: []\n'})}),"\n",(0,s.jsx)(i.h3,{id:"\uC9C0\uC6D0\uB418\uB294-\uC785\uB825-\uD0C0\uC785",children:"\uC9C0\uC6D0\uB418\uB294 \uC785\uB825 \uD0C0\uC785"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"touch"'}),": \uD130\uCE58\uC2A4\uD06C\uB9B0 \uC785\uB825 (\uC2A4\uB9C8\uD2B8\uD3F0, \uD0DC\uBE14\uB9BF)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"mouse"'}),": \uB9C8\uC6B0\uC2A4 \uB4DC\uB798\uADF8 \uC785\uB825 (\uB370\uC2A4\uD06C\uD1B1)"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\uC5F0\uAD00-\uC635\uC158",children:"\uC5F0\uAD00 \uC635\uC158"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"disableOnInit\uACFC\uC758 \uAD00\uACC4"}),": ",(0,s.jsx)(i.code,{children:"disableOnInit: true"}),"\uB294 \uBAA8\uB4E0 \uC785\uB825\uC744 \uBE44\uD65C\uC131\uD654\uD558\uC9C0\uB9CC, ",(0,s.jsx)(i.code,{children:"inputType: []"}),"\uB3C4 \uB3D9\uC77C\uD55C \uD6A8\uACFC\uB97C \uB0C5\uB2C8\uB2E4. \uCC28\uC774\uC810\uC740 disableOnInit\uC740 \uB098\uC911\uC5D0 enable()\uB85C \uD65C\uC131\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,s.jsx)(i.admonition,{title:"\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:'["touch", "mouse"]'}),": \uC77C\uBC18\uC801\uC778 \uC6F9 \uC571, \uB2E4\uC591\uD55C \uB514\uBC14\uC774\uC2A4 \uC9C0\uC6D0"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:'["touch"]'}),": \uBAA8\uBC14\uC77C \uC804\uC6A9 UI, \uB370\uC2A4\uD06C\uD1B1\uC5D0\uC11C \uBC84\uD2BC/\uD654\uC0B4\uD45C\uB85C\uB9CC \uC81C\uC5B4\uD558\uACE0 \uC2F6\uC744 \uB54C"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:'["mouse"]'}),": \uB370\uC2A4\uD06C\uD1B1 \uC804\uC6A9 \uC571, \uD130\uCE58 \uC785\uB825\uC774 \uB2E4\uB978 \uC6A9\uB3C4\uB85C \uC0AC\uC6A9\uB420 \uB54C"]}),"\n"]})}),"\n",(0,s.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,s.jsx)(i.admonition,{title:"\uC785\uB825 \uC81C\uD55C \uC2DC \uB300\uC548 \uC81C\uACF5",type:"warning",children:(0,s.jsx)(i.p,{children:"\uD2B9\uC815 \uC785\uB825 \uD0C0\uC785\uC744 \uC81C\uD55C\uD558\uBA74 \uD574\uB2F9 \uB514\uBC14\uC774\uC2A4 \uC0AC\uC6A9\uC790\uAC00 \uC870\uC791\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uB124\uBE44\uAC8C\uC774\uC158 \uBC84\uD2BC\uC774\uB098 \uD0A4\uBCF4\uB4DC \uC81C\uC5B4 \uB4F1 \uB300\uC548\uC744 \uD568\uAED8 \uC81C\uACF5\uD558\uC138\uC694."})}),"\n",(0,s.jsx)(i.admonition,{title:"\uC811\uADFC\uC131 \uACE0\uB824",type:"warning",children:(0,s.jsxs)(i.p,{children:["\uC77C\uBC18\uC801\uC73C\uB85C \uAE30\uBCF8\uAC12 ",(0,s.jsx)(i.code,{children:'["touch", "mouse"]'}),"\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uC811\uADFC\uC131 \uCE21\uBA74\uC5D0\uC11C \uAD8C\uC7A5\uB429\uB2C8\uB2E4. \uD2B9\uBCC4\uD55C \uC774\uC720\uAC00 \uC5C6\uB2E4\uBA74 \uC785\uB825 \uD0C0\uC785\uC744 \uC81C\uD55C\uD558\uC9C0 \uB9C8\uC138\uC694."]})}),"\n",(0,s.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,s.jsx)(i.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#disableoninit",children:(0,s.jsx)(i.code,{children:"disableOnInit"})}),": \uCD08\uAE30 \uC785\uB825 \uBE44\uD65C\uC131\uD654"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"./disable-input",children:"Disable Input"}),": \uC785\uB825 \uBE44\uD65C\uC131\uD654"]}),"\n"]})]})}function m(e={}){let{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},27449(e,i,n){n.d(i,{A:()=>o});var l=n(65723),s=n(19612);n(22155);let t="^4.11.4",c={react:{"@egjs/react-flicking":t,"@egjs/flicking":t},vue3:{"@egjs/vue3-flicking":t,"@egjs/flicking":t},vanilla:{"@egjs/flicking":t}},a=`<!DOCTYPE html>
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
  </StrictMode>);`,p=`
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
`;function o({code:e,html:i,template:n="react",dependencies:t={},files:o={},css:r=""}){var u;let g,h,m;return(0,l.jsx)(s.OZ,{template:"vue3"===n?"vue":"vanilla"===n?"vanilla":"react",files:(m={"/styles.css":{code:h=r?`${p}
${r}`:p},...o},"react"===n?{"/App.tsx":{code:e},"/index.js":{code:d,hidden:!0},...m}:"vue3"===n?{"/src/App.vue":{code:e},...m}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),n=[],l=[],s=!1;for(let e of i)s?l.push(e):e.trimStart().startsWith("import ")||""===e.trim()?n.push(e.replace('"../styles.css"','"./styles.css"')):(s=!0,l.push(e));for(;l.length>0&&""===l[l.length-1].trim();)l.pop();return[...n,"","const _run = () => {",...l.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:h},"/index.html":{code:(g="<style>.flicking-viewport{opacity:0}</style>",(u=i||a).includes("</head>")?u.replace("</head>",`${g}
</head>`):g+u)},...o}),customSetup:{dependencies:{...c[n],...t}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===n?["/App.tsx","/styles.css"]:"vue3"===n?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===n?"/App.tsx":"vue3"===n?"/src/App.vue":"/src/index.js"}})}},72722(e,i,n){n.d(i,{A:()=>v});var l=n(65723),s=n(34622),t=n(7210),c=n(78863);n(22155);let a=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,d=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",p=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${a(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(i=>`${i}: ${a(e[i],"'")}`).join(", ")}`,r=(e,{prefix:i,includeFlicking:n=!0}={})=>{let l=n?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&l.push(...e),`${l.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},u=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,g=({options:e,panels:i,events:n={},methods:t={},plugins:c=[],siblings:o=[],imports:u=[],viewportClass:g=""})=>{let h=e=>`${Object.keys(e).map(i=>`${i}: ${a(e[i])}`).join(",\n  ")}`,m=Object.keys(t).map(e=>`const ${e} = ${t[e]};
`).join(""),v=e?`const flicking = new Flicking("#flick", {
  ${h(e)}
});

`:'const flicking = new Flicking("#flick")',j=c.length>0?`flicking.addPlugins(${c.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?h(e[1]):e[1]??""}
}`:""})`)});`:"",f=[...c.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...u],k=Object.keys(n).map(e=>{let i=n[e];return`flicking.on("${e}", ${i})
`}).join(""),x=i.filter(e=>e.isSlot);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${g&&` ${g}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${d(e)}${p(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${x.length?`
  ${x.map(e=>`<${e.tag}${d(e)}${p(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${d(e)}${p(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,l.jsx)(s.A,{className:"language-js",title:"js",children:`${r(f)}

${m}${v}${j}${k}`.trim()})]})},h=({options:e,panels:i,events:n={},methods:t={},plugins:c,siblings:a,imports:o=[],viewportClass:g=""})=>{let h=c?`
  private _plugins = [${u(c)}];
`:"",m=i.filter(e=>e.isSlot),v=[["{ Component }","react"],[m.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],j=Object.keys(t).map(e=>`
const ${e} = ${t[e]};`).join("");j&&(j+="\n"),c&&v.push([`{ ${c.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),v.push(...o);let f=m.length?`
      <ViewportSlot>
        ${m.map(e=>`<${e.tag}${d(e,"className")}${p(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",k=Object.keys(n).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${n[e]}}`).join("");return(0,l.jsx)(s.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${r(v,{includeFlicking:!1})}
${j}
export default class DemoComponent extends Component {${h}
  public render() {
    return ${a?"<>\n    ":""}<Flicking${g&&` className="${g}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${c?" plugins={this._plugins}":""}${k}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${d(e,"className")}${p(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${f}
    </Flicking>${a?`
    ${a.map(e=>`<${e.tag}${d(e,"className")}${p(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},m=({options:e,panels:i,events:n={},methods:t={},plugins:c,siblings:a=[],imports:g=[],viewportClass:h=""})=>{let m=o(e),v=i.filter(e=>e.isSlot),j=c?`,
  data() {
    return {
      plugins: [${u(c)}]
    }
  }`:"",f=v.length?`
  <template #viewport>
    ${v.map(e=>`<${e.tag}${d(e)}${p(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",k=[...(c??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],x=Object.keys(t),$=x.length>0?`,
  methods: {
    ${x.map(e=>`${e}: ${t[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",y=Object.keys(n).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${n[e]}"`).join("");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.A,{className:"language-html",title:"template",children:`<Flicking${h&&` class="${h}"`}${e?` :options="{ ${m} }"`:""}${c?' :plugins="plugins"':""}${y}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${d(e)}${p(e)}>${e.content}</${e.tag}>`).join("\n  ")}${f}
</Flicking>${a?`
${a.map(e=>`<${e.tag}${d(e)}${p(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,l.jsx)(s.A,{className:"language-js",title:"script",children:`${r(k,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${j}${$}
}`})]})},v=({js:e,react:i,vue3:n,style:a,...d})=>(0,l.jsxs)("div",{children:[(0,l.jsxs)(c.A,{groupId:"cfc",defaultValue:"js",children:[(0,l.jsx)(t.A,{value:"react",label:"React",children:i||(0,l.jsx)(h,{...d})}),(0,l.jsx)(t.A,{value:"vue3",label:"Vue@3",children:n||(0,l.jsx)(m,{...d})}),(0,l.jsx)(t.A,{value:"js",label:"JavaScript",children:e||(0,l.jsx)(g,{...d})})]}),a&&(0,l.jsx)(s.A,{className:"language-css",title:"style",children:`${a}`})]})}}]);