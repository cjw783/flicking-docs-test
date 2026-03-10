"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["6375"],{30331(e,i,n){n.r(i),n.d(i,{metadata:()=>l,default:()=>h,frontMatter:()=>o,contentTitle:()=>p,toc:()=>v,assets:()=>g});var l=JSON.parse('{"id":"demos/basic/prevent-click","title":"Prevent Click","description":"preventClickOnDrag \uC635\uC158\uC73C\uB85C \uB4DC\uB798\uADF8 \uD6C4 \uBC1C\uC0DD\uD558\uB294 \uC758\uB3C4\uCE58 \uC54A\uC740 \uD074\uB9AD \uC774\uBCA4\uD2B8\uB97C \uBC29\uC9C0\uD569\uB2C8\uB2E4","source":"@site/docs/demos/basic/prevent-click.mdx","sourceDirName":"demos/basic","slug":"/demos/basic/prevent-click","permalink":"/flicking-docs-test/docs/demos/basic/prevent-click","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/basic/prevent-click.mdx","tags":[],"version":"current","sidebarPosition":19,"frontMatter":{"title":"Prevent Click","id":"prevent-click","slug":"/demos/basic/prevent-click","sidebar_position":19,"description":"preventClickOnDrag \uC635\uC158\uC73C\uB85C \uB4DC\uB798\uADF8 \uD6C4 \uBC1C\uC0DD\uD558\uB294 \uC758\uB3C4\uCE58 \uC54A\uC740 \uD074\uB9AD \uC774\uBCA4\uD2B8\uB97C \uBC29\uC9C0\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","preventClickOnDrag","preventDefaultOnDrag","click","drag","\uD074\uB9AD \uBC29\uC9C0"]},"sidebar":"demosSidebar","previous":{"title":"Interruptable","permalink":"/flicking-docs-test/docs/demos/basic/interruptable"},"next":{"title":"Virtual Scroll","permalink":"/flicking-docs-test/docs/demos/advanced/virtual-scroll"}}'),c=n(65723),t=n(54187),s=n(27449),r=n(72722);n(22155);let a=`
.flicking-panel {
  width: 50%;
  height: 120px;
  cursor: pointer;
  user-select: none;
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
.click-count {
  margin-top: 8px;
  font-size: 14px;
  color: #333;
}
.demo-hint {
  margin-top: 4px;
  font-size: 13px;
  color: #888;
}
`,d=()=>{let e=`import { useState } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "./styles.css";

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      {/* preventClickOnDrag: true (\u{AE30}\u{BCF8}\u{AC12}) */}
      <div className="demo-container">
        <div className="demo-label">preventClickOnDrag: true (\u{AE30}\u{BCF8}\u{AC12})</div>
        <Flicking align="center" preventClickOnDrag={true}>
          <div className="flicking-panel panel-1" onClick={() => setCount1(c => c + 1)}>click</div>
          <div className="flicking-panel panel-2" onClick={() => setCount1(c => c + 1)}>click</div>
          <div className="flicking-panel panel-3" onClick={() => setCount1(c => c + 1)}>click</div>
          <div className="flicking-panel panel-4" onClick={() => setCount1(c => c + 1)}>click</div>
          <div className="flicking-panel panel-5" onClick={() => setCount1(c => c + 1)}>click</div>
        </Flicking>
        <div className="click-count">\u{D074}\u{B9AD} \u{D69F}\u{C218}: {count1}</div>
        <div className="demo-hint">\u{B4DC}\u{B798}\u{ADF8} \u{D6C4} \u{D074}\u{B9AD}\u{C740} \u{BB34}\u{C2DC}\u{B429}\u{B2C8}\u{B2E4}. \u{C21C}\u{C218}\u{D558}\u{AC8C} \u{D0ED}/\u{D074}\u{B9AD} \u{C2DC}\u{C5D0}\u{B9CC} \u{CE74}\u{C6B4}\u{D2B8} \u{C99D}\u{AC00}.</div>
      </div>

      {/* preventClickOnDrag: false */}
      <div className="demo-container">
        <div className="demo-label">preventClickOnDrag: false</div>
        <Flicking align="center" preventClickOnDrag={false}>
          <div className="flicking-panel panel-1" onClick={() => setCount2(c => c + 1)}>click</div>
          <div className="flicking-panel panel-2" onClick={() => setCount2(c => c + 1)}>click</div>
          <div className="flicking-panel panel-3" onClick={() => setCount2(c => c + 1)}>click</div>
          <div className="flicking-panel panel-4" onClick={() => setCount2(c => c + 1)}>click</div>
          <div className="flicking-panel panel-5" onClick={() => setCount2(c => c + 1)}>click</div>
        </Flicking>
        <div className="click-count">\u{D074}\u{B9AD} \u{D69F}\u{C218}: {count2}</div>
        <div className="demo-hint">\u{B4DC}\u{B798}\u{ADF8} \u{D6C4} \u{C190}\u{C744} \u{B5C4} \u{B54C}\u{B3C4} \u{D074}\u{B9AD} \u{C774}\u{BCA4}\u{D2B8}\u{AC00} \u{BC1C}\u{C0DD}\u{D569}\u{B2C8}\u{B2E4}.</div>
      </div>
    </div>
  );
}`,i=(0,c.jsx)(s.A,{template:"react",code:e,css:a}),n=`<template>
  <div>
    <!-- preventClickOnDrag: true (\u{AE30}\u{BCF8}\u{AC12}) -->
    <div class="demo-container">
      <div class="demo-label">preventClickOnDrag: true (\u{AE30}\u{BCF8}\u{AC12})</div>
      <Flicking :options="{ align: 'center', preventClickOnDrag: true }">
        <div class="flicking-panel panel-1" @click="count1++">click</div>
        <div class="flicking-panel panel-2" @click="count1++">click</div>
        <div class="flicking-panel panel-3" @click="count1++">click</div>
        <div class="flicking-panel panel-4" @click="count1++">click</div>
        <div class="flicking-panel panel-5" @click="count1++">click</div>
      </Flicking>
      <div class="click-count">\u{D074}\u{B9AD} \u{D69F}\u{C218}: {{ count1 }}</div>
      <div class="demo-hint">\u{B4DC}\u{B798}\u{ADF8} \u{D6C4} \u{D074}\u{B9AD}\u{C740} \u{BB34}\u{C2DC}\u{B429}\u{B2C8}\u{B2E4}. \u{C21C}\u{C218}\u{D558}\u{AC8C} \u{D0ED}/\u{D074}\u{B9AD} \u{C2DC}\u{C5D0}\u{B9CC} \u{CE74}\u{C6B4}\u{D2B8} \u{C99D}\u{AC00}.</div>
    </div>

    <!-- preventClickOnDrag: false -->
    <div class="demo-container">
      <div class="demo-label">preventClickOnDrag: false</div>
      <Flicking :options="{ align: 'center', preventClickOnDrag: false }">
        <div class="flicking-panel panel-1" @click="count2++">click</div>
        <div class="flicking-panel panel-2" @click="count2++">click</div>
        <div class="flicking-panel panel-3" @click="count2++">click</div>
        <div class="flicking-panel panel-4" @click="count2++">click</div>
        <div class="flicking-panel panel-5" @click="count2++">click</div>
      </Flicking>
      <div class="click-count">\u{D074}\u{B9AD} \u{D69F}\u{C218}: {{ count2 }}</div>
      <div class="demo-hint">\u{B4DC}\u{B798}\u{ADF8} \u{D6C4} \u{C190}\u{C744} \u{B5C4} \u{B54C}\u{B3C4} \u{D074}\u{B9AD} \u{C774}\u{BCA4}\u{D2B8}\u{AC00} \u{BC1C}\u{C0DD}\u{D569}\u{B2C8}\u{B2E4}.</div>
    </div>
  </div>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";

export default {
  components: { Flicking },
  data() {
    return { count1: 0, count2: 0 };
  }
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
  cursor: pointer;
  user-select: none;
}
.panel-1 { background: #3e8ed0; }
.panel-2 { background: #00d1b2; }
.panel-3 { background: #f14668; }
.panel-4 { background: #ffe08a; color: #333; }
.panel-5 { background: #48c78e; }
.demo-container { margin-bottom: 24px; }
.demo-label { font-weight: bold; margin-bottom: 8px; color: #666; }
.click-count { margin-top: 8px; font-size: 14px; color: #333; }
.demo-hint { margin-top: 4px; font-size: 13px; color: #888; }
</style>`,l=(0,c.jsx)(s.A,{template:"vue3",code:n,css:a}),t=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

// preventClickOnDrag: true (\u{AE30}\u{BCF8}\u{AC12})
const flick1 = new Flicking("#flick-prevent", {
  align: "center",
  preventClickOnDrag: true
});

let count1 = 0;
document.querySelectorAll("#flick-prevent .flicking-panel").forEach(el => {
  el.addEventListener("click", () => {
    count1++;
    document.getElementById("count1").textContent = "\u{D074}\u{B9AD} \u{D69F}\u{C218}: " + count1;
  });
});

// preventClickOnDrag: false
const flick2 = new Flicking("#flick-no-prevent", {
  align: "center",
  preventClickOnDrag: false
});

let count2 = 0;
document.querySelectorAll("#flick-no-prevent .flicking-panel").forEach(el => {
  el.addEventListener("click", () => {
    count2++;
    document.getElementById("count2").textContent = "\u{D074}\u{B9AD} \u{D69F}\u{C218}: " + count2;
  });
});`,d=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <!-- preventClickOnDrag: true (\u{AE30}\u{BCF8}\u{AC12}) -->
  <div class="demo-container">
    <div class="demo-label">preventClickOnDrag: true (\u{AE30}\u{BCF8}\u{AC12})</div>
    <div id="flick-prevent" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">click</div>
        <div class="flicking-panel panel-2">click</div>
        <div class="flicking-panel panel-3">click</div>
        <div class="flicking-panel panel-4">click</div>
        <div class="flicking-panel panel-5">click</div>
      </div>
    </div>
    <div class="click-count" id="count1">\u{D074}\u{B9AD} \u{D69F}\u{C218}: 0</div>
    <div class="demo-hint">\u{B4DC}\u{B798}\u{ADF8} \u{D6C4} \u{D074}\u{B9AD}\u{C740} \u{BB34}\u{C2DC}\u{B429}\u{B2C8}\u{B2E4}. \u{C21C}\u{C218}\u{D558}\u{AC8C} \u{D0ED}/\u{D074}\u{B9AD} \u{C2DC}\u{C5D0}\u{B9CC} \u{CE74}\u{C6B4}\u{D2B8} \u{C99D}\u{AC00}.</div>
  </div>

  <!-- preventClickOnDrag: false -->
  <div class="demo-container">
    <div class="demo-label">preventClickOnDrag: false</div>
    <div id="flick-no-prevent" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">click</div>
        <div class="flicking-panel panel-2">click</div>
        <div class="flicking-panel panel-3">click</div>
        <div class="flicking-panel panel-4">click</div>
        <div class="flicking-panel panel-5">click</div>
      </div>
    </div>
    <div class="click-count" id="count2">\u{D074}\u{B9AD} \u{D69F}\u{C218}: 0</div>
    <div class="demo-hint">\u{B4DC}\u{B798}\u{ADF8} \u{D6C4} \u{C190}\u{C744} \u{B5C4} \u{B54C}\u{B3C4} \u{D074}\u{B9AD} \u{C774}\u{BCA4}\u{D2B8}\u{AC00} \u{BC1C}\u{C0DD}\u{D569}\u{B2C8}\u{B2E4}.</div>
  </div>

</body>
</html>`,o=(0,c.jsx)(s.A,{template:"vanilla",code:t,html:d,css:a});return(0,c.jsx)(r.A,{options:{},panels:[],react:i,vue3:l,js:o})},o={title:"Prevent Click",id:"prevent-click",slug:"/demos/basic/prevent-click",sidebar_position:19,description:"preventClickOnDrag \uC635\uC158\uC73C\uB85C \uB4DC\uB798\uADF8 \uD6C4 \uBC1C\uC0DD\uD558\uB294 \uC758\uB3C4\uCE58 \uC54A\uC740 \uD074\uB9AD \uC774\uBCA4\uD2B8\uB97C \uBC29\uC9C0\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","preventClickOnDrag","preventDefaultOnDrag","click","drag","\uD074\uB9AD \uBC29\uC9C0"]},p="Prevent Click",g={},v=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uAC12\uBCC4 \uBE44\uAD50",id:"\uAC12\uBCC4-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"preventClickOnDrag \uB3D9\uC791 \uC6D0\uB9AC",id:"preventclickondrag-\uB3D9\uC791-\uC6D0\uB9AC",level:3},{value:"preventDefaultOnDrag",id:"preventdefaultondrag",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function k(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.header,{children:(0,c.jsx)(i.h1,{id:"prevent-click",children:"Prevent Click"})}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#preventclickondrag",children:(0,c.jsx)(i.code,{children:"preventClickOnDrag"})})," \uC635\uC158\uC73C\uB85C \uB4DC\uB798\uADF8 \uD6C4 \uC758\uB3C4\uCE58 \uC54A\uAC8C \uBC1C\uC0DD\uD558\uB294 \uD074\uB9AD \uC774\uBCA4\uD2B8\uB97C \uBC29\uC9C0\uD569\uB2C8\uB2E4. \uD328\uB110 \uC548\uC5D0 \uB9C1\uD06C\uB098 \uBC84\uD2BC\uC774 \uC788\uC744 \uB54C \uD2B9\uD788 \uC911\uC694\uD569\uB2C8\uB2E4."]}),"\n",(0,c.jsx)(i.p,{children:"\uD328\uB110\uC744 \uB4DC\uB798\uADF8\uD55C \uB4A4 \uC190\uC744 \uB5BC\uBCF4\uBA74 \uD074\uB9AD \uCC98\uB9AC \uBC29\uC2DD\uC758 \uCC28\uC774\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n",(0,c.jsx)(d,{}),"\n",(0,c.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,c.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,c.jsxs)(i.table,{children:[(0,c.jsx)(i.thead,{children:(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.th,{children:"\uC635\uC158"}),(0,c.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,c.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,c.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,c.jsxs)(i.tbody,{children:[(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:(0,c.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#preventclickondrag",children:(0,c.jsx)(i.code,{children:"preventClickOnDrag"})})}),(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:"boolean"})}),(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:"true"})}),(0,c.jsx)(i.td,{children:"\uB4DC\uB798\uADF8 \uD6C4 \uD074\uB9AD \uC774\uBCA4\uD2B8 \uBC29\uC9C0"})]}),(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:(0,c.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#preventdefaultondrag",children:(0,c.jsx)(i.code,{children:"preventDefaultOnDrag"})})}),(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:"boolean"})}),(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:"false"})}),(0,c.jsx)(i.td,{children:"\uB4DC\uB798\uADF8 \uC911 \uBE0C\uB77C\uC6B0\uC800 \uAE30\uBCF8 \uB3D9\uC791 \uBC29\uC9C0"})]})]})]}),"\n",(0,c.jsx)(i.h3,{id:"\uAC12\uBCC4-\uBE44\uAD50",children:"\uAC12\uBCC4 \uBE44\uAD50"}),"\n",(0,c.jsxs)(i.table,{children:[(0,c.jsx)(i.thead,{children:(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.th,{children:"\uC635\uC158"}),(0,c.jsx)(i.th,{children:"\uAC12"}),(0,c.jsx)(i.th,{children:"\uB3D9\uC791"}),(0,c.jsx)(i.th,{children:"\uC801\uD569\uD55C \uC0C1\uD669"})]})}),(0,c.jsxs)(i.tbody,{children:[(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:"preventClickOnDrag"})}),(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:"true"})}),(0,c.jsx)(i.td,{children:"\uB4DC\uB798\uADF8 \uD6C4 \uD074\uB9AD \uC774\uBCA4\uD2B8 \uBB34\uC2DC (\uAE30\uBCF8\uAC12)"}),(0,c.jsx)(i.td,{children:"\uD328\uB110 \uB0B4 \uB9C1\uD06C/\uBC84\uD2BC\uC774 \uC788\uB294 \uC77C\uBC18 \uCE90\uB7EC\uC140"})]}),(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:"preventClickOnDrag"})}),(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:"false"})}),(0,c.jsx)(i.td,{children:"\uB4DC\uB798\uADF8 \uD6C4\uC5D0\uB3C4 \uD074\uB9AD \uC774\uBCA4\uD2B8 \uBC1C\uC0DD"}),(0,c.jsx)(i.td,{children:"\uD074\uB9AD \uC774\uBCA4\uD2B8\uB97C \uC9C1\uC811 \uAD00\uB9AC\uD558\uB294 \uACBD\uC6B0"})]}),(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:"preventDefaultOnDrag"})}),(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:"true"})}),(0,c.jsx)(i.td,{children:"\uB4DC\uB798\uADF8 \uC911 \uD14D\uC2A4\uD2B8 \uC120\uD0DD \uB4F1 \uAE30\uBCF8 \uB3D9\uC791 \uBC29\uC9C0"}),(0,c.jsx)(i.td,{children:"\uD14D\uC2A4\uD2B8 \uC120\uD0DD \uBC29\uC9C0\uAC00 \uD544\uC694\uD55C \uACBD\uC6B0"})]}),(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:"preventDefaultOnDrag"})}),(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:"false"})}),(0,c.jsx)(i.td,{children:"\uAE30\uBCF8 \uB3D9\uC791 \uD5C8\uC6A9 (\uAE30\uBCF8\uAC12)"}),(0,c.jsx)(i.td,{children:"\uB300\uBD80\uBD84\uC758 \uC77C\uBC18\uC801\uC778 \uCE90\uB7EC\uC140"})]})]})]}),"\n",(0,c.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,c.jsx)(i.h3,{id:"preventclickondrag-\uB3D9\uC791-\uC6D0\uB9AC",children:"preventClickOnDrag \uB3D9\uC791 \uC6D0\uB9AC"}),"\n",(0,c.jsxs)(i.p,{children:["\uD130\uCE58/\uB9C8\uC6B0\uC2A4 \uB4DC\uB798\uADF8\uAC00 \uB05D\uB0A0 \uB54C \uBE0C\uB77C\uC6B0\uC800\uB294 \uC790\uC5F0\uC2A4\uB7FD\uAC8C ",(0,c.jsx)(i.code,{children:"click"})," \uC774\uBCA4\uD2B8\uB97C \uBC1C\uC0DD\uC2DC\uD0B5\uB2C8\uB2E4. \uCE90\uB7EC\uC140\uC744 \uB4DC\uB798\uADF8\uD574 \uD328\uB110\uC744 \uB118\uAE34 \uD6C4 \uC190\uAC00\uB77D\uC744 \uB5C4 \uB54C \uD328\uB110 \uC548\uC758 \uB9C1\uD06C\uB098 \uBC84\uD2BC\uC774 \uC758\uB3C4\uCE58 \uC54A\uAC8C \uD074\uB9AD\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"preventClickOnDrag: true"}),"(\uAE30\uBCF8\uAC12)\uB85C \uC124\uC815\uD558\uBA74 \uB4DC\uB798\uADF8\uAC00 \uBC1C\uC0DD\uD55C \uC778\uD130\uB799\uC158\uC5D0\uC11C\uC758 \uD074\uB9AD \uC774\uBCA4\uD2B8\uB97C \uBB34\uC2DC\uD569\uB2C8\uB2E4. \uB2E8\uC21C \uD0ED/\uD074\uB9AD(\uB4DC\uB798\uADF8 \uC5C6\uC74C)\uC740 \uC815\uC0C1\uC801\uC73C\uB85C \uB3D9\uC791\uD569\uB2C8\uB2E4."]}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-javascript",children:'// \uAE30\uBCF8\uAC12: \uB4DC\uB798\uADF8 \uD6C4 \uD074\uB9AD \uBC29\uC9C0 (\uAD8C\uC7A5)\nconst flicking = new Flicking("#el", {\n  preventClickOnDrag: true\n});\n\n// \uB4DC\uB798\uADF8 \uD6C4\uC5D0\uB3C4 \uD074\uB9AD \uD5C8\uC6A9\nconst flicking = new Flicking("#el", {\n  preventClickOnDrag: false\n});\n'})}),"\n",(0,c.jsx)(i.h3,{id:"preventdefaultondrag",children:"preventDefaultOnDrag"}),"\n",(0,c.jsxs)(i.p,{children:["\uB4DC\uB798\uADF8 \uC911 ",(0,c.jsx)(i.code,{children:"preventDefault()"}),"\uB97C \uD638\uCD9C\uD574 \uBE0C\uB77C\uC6B0\uC800 \uAE30\uBCF8 \uB3D9\uC791(\uD14D\uC2A4\uD2B8 \uC120\uD0DD, \uC774\uBBF8\uC9C0 \uB4DC\uB798\uADF8 \uB4F1)\uC744 \uB9C9\uC2B5\uB2C8\uB2E4."]}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-javascript",children:'const flicking = new Flicking("#el", {\n  preventDefaultOnDrag: true  // \uB4DC\uB798\uADF8 \uC911 \uD14D\uC2A4\uD2B8 \uC120\uD0DD \uBD88\uAC00\n});\n'})}),"\n",(0,c.jsx)(i.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,c.jsx)(i.admonition,{title:"\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:"\uD328\uB110 \uC548\uC5D0 \uB9C1\uD06C/\uBC84\uD2BC\uC774 \uC788\uB294 \uACBD\uC6B0"}),": ",(0,c.jsx)(i.code,{children:"preventClickOnDrag: true"}),"\uB85C \uC124\uC815\uD574 \uB4DC\uB798\uADF8 \uD6C4 \uC758\uB3C4\uCE58 \uC54A\uC740 \uC774\uB3D9\uC744 \uBC29\uC9C0\uD558\uC138\uC694."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:"\uD14D\uC2A4\uD2B8\uAC00 \uB9CE\uC740 \uD328\uB110"}),": ",(0,c.jsx)(i.code,{children:"preventDefaultOnDrag: true"}),"\uB85C \uB4DC\uB798\uADF8 \uC911 \uD14D\uC2A4\uD2B8 \uC120\uD0DD\uC744 \uB9C9\uC544 \uC0AC\uC6A9\uC131\uC744 \uD5A5\uC0C1\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]})}),"\n",(0,c.jsx)(i.admonition,{title:"preventClickOnDrag: false \uC0AC\uC6A9 \uC2DC",type:"warning",children:(0,c.jsx)(i.p,{children:"\uB4DC\uB798\uADF8 \uD6C4\uC5D0\uB3C4 \uD074\uB9AD\uC774 \uBC1C\uC0DD\uD558\uBBC0\uB85C, \uC9E7\uC740 \uB4DC\uB798\uADF8 \uD6C4 \uC758\uB3C4\uCE58 \uC54A\uC740 \uB9C1\uD06C \uC774\uB3D9\uC774\uB098 \uBC84\uD2BC \uD074\uB9AD\uC774 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD074\uB9AD \uC774\uBCA4\uD2B8\uB97C \uC9C1\uC811 \uAD00\uB9AC(\uC608: \uB4DC\uB798\uADF8 \uAC70\uB9AC\uB97C \uCE21\uC815\uD574 \uD074\uB9AD \uC5EC\uBD80 \uD310\uB2E8)\uD560 \uB54C\uB9CC \uC0AC\uC6A9\uD558\uC138\uC694."})}),"\n",(0,c.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,c.jsx)(i.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#inputtype",children:(0,c.jsx)(i.code,{children:"inputType"})}),": \uC785\uB825 \uC7A5\uCE58 \uD0C0\uC785 \uC124\uC815"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#threshold",children:(0,c.jsx)(i.code,{children:"threshold"})}),": \uD328\uB110 \uC804\uD658 \uCD5C\uC18C \uB4DC\uB798\uADF8 \uAC70\uB9AC"]}),"\n"]}),"\n",(0,c.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"./input-type",children:"Input Type"}),": \uC785\uB825 \uC7A5\uCE58 \uD0C0\uC785 \uC81C\uD55C"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"./threshold",children:"Threshold"}),": \uD328\uB110 \uC804\uD658 \uC784\uACC4\uAC12 \uC124\uC815"]}),"\n"]})]})}function h(e={}){let{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,c.jsx)(i,{...e,children:(0,c.jsx)(k,{...e})}):k(e)}},27449(e,i,n){n.d(i,{A:()=>o});var l=n(65723),c=n(19612);n(22155);let t="^4.11.4",s={react:{"@egjs/react-flicking":t,"@egjs/flicking":t},vue3:{"@egjs/vue3-flicking":t,"@egjs/flicking":t},vanilla:{"@egjs/flicking":t}},r=`<!DOCTYPE html>
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
`;function o({code:e,html:i,template:n="react",dependencies:t={},files:o={},css:p=""}){var g;let v,k,h;return(0,l.jsx)(c.OZ,{template:"vue3"===n?"vue":"vanilla"===n?"vanilla":"react",files:(h={"/styles.css":{code:k=p?`${d}
${p}`:d},...o},"react"===n?{"/App.tsx":{code:e},"/index.js":{code:a,hidden:!0},...h}:"vue3"===n?{"/src/App.vue":{code:e},...h}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),n=[],l=[],c=!1;for(let e of i)c?l.push(e):e.trimStart().startsWith("import ")||""===e.trim()?n.push(e.replace('"../styles.css"','"./styles.css"')):(c=!0,l.push(e));for(;l.length>0&&""===l[l.length-1].trim();)l.pop();return[...n,"","const _run = () => {",...l.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:k},"/index.html":{code:(v="<style>.flicking-viewport{opacity:0}</style>",(g=i||r).includes("</head>")?g.replace("</head>",`${v}
</head>`):v+g)},...o}),customSetup:{dependencies:{...s[n],...t}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===n?["/App.tsx","/styles.css"]:"vue3"===n?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===n?"/App.tsx":"vue3"===n?"/src/App.vue":"/src/index.js"}})}},72722(e,i,n){n.d(i,{A:()=>u});var l=n(65723),c=n(34622),t=n(7210),s=n(78863);n(22155);let r=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,a=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",d=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${r(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(i=>`${i}: ${r(e[i],"'")}`).join(", ")}`,p=(e,{prefix:i,includeFlicking:n=!0}={})=>{let l=n?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&l.push(...e),`${l.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},g=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,v=({options:e,panels:i,events:n={},methods:t={},plugins:s=[],siblings:o=[],imports:g=[],viewportClass:v=""})=>{let k=e=>`${Object.keys(e).map(i=>`${i}: ${r(e[i])}`).join(",\n  ")}`,h=Object.keys(t).map(e=>`const ${e} = ${t[e]};
`).join(""),u=e?`const flicking = new Flicking("#flick", {
  ${k(e)}
});

`:'const flicking = new Flicking("#flick")',m=s.length>0?`flicking.addPlugins(${s.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?k(e[1]):e[1]??""}
}`:""})`)});`:"",j=[...s.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],f=Object.keys(n).map(e=>{let i=n[e];return`flicking.on("${e}", ${i})
`}).join(""),x=i.filter(e=>e.isSlot);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${v&&` ${v}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${x.length?`
  ${x.map(e=>`<${e.tag}${a(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${a(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,l.jsx)(c.A,{className:"language-js",title:"js",children:`${p(j)}

${h}${u}${m}${f}`.trim()})]})},k=({options:e,panels:i,events:n={},methods:t={},plugins:s,siblings:r,imports:o=[],viewportClass:v=""})=>{let k=s?`
  private _plugins = [${g(s)}];
`:"",h=i.filter(e=>e.isSlot),u=[["{ Component }","react"],[h.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],m=Object.keys(t).map(e=>`
const ${e} = ${t[e]};`).join("");m&&(m+="\n"),s&&u.push([`{ ${s.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),u.push(...o);let j=h.length?`
      <ViewportSlot>
        ${h.map(e=>`<${e.tag}${a(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",f=Object.keys(n).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${n[e]}}`).join("");return(0,l.jsx)(c.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(u,{includeFlicking:!1})}
${m}
export default class DemoComponent extends Component {${k}
  public render() {
    return ${r?"<>\n    ":""}<Flicking${v&&` className="${v}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${s?" plugins={this._plugins}":""}${f}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${j}
    </Flicking>${r?`
    ${r.map(e=>`<${e.tag}${a(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},h=({options:e,panels:i,events:n={},methods:t={},plugins:s,siblings:r=[],imports:v=[],viewportClass:k=""})=>{let h=o(e),u=i.filter(e=>e.isSlot),m=s?`,
  data() {
    return {
      plugins: [${g(s)}]
    }
  }`:"",j=u.length?`
  <template #viewport>
    ${u.map(e=>`<${e.tag}${a(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",f=[...(s??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...v],x=Object.keys(t),$=x.length>0?`,
  methods: {
    ${x.map(e=>`${e}: ${t[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",b=Object.keys(n).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${n[e]}"`).join("");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.A,{className:"language-html",title:"template",children:`<Flicking${k&&` class="${k}"`}${e?` :options="{ ${h} }"`:""}${s?' :plugins="plugins"':""}${b}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}${j}
</Flicking>${r?`
${r.map(e=>`<${e.tag}${a(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,l.jsx)(c.A,{className:"language-js",title:"script",children:`${p(f,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${m}${$}
}`})]})},u=({js:e,react:i,vue3:n,style:r,...a})=>(0,l.jsxs)("div",{children:[(0,l.jsxs)(s.A,{groupId:"cfc",defaultValue:"js",children:[(0,l.jsx)(t.A,{value:"react",label:"React",children:i||(0,l.jsx)(k,{...a})}),(0,l.jsx)(t.A,{value:"vue3",label:"Vue@3",children:n||(0,l.jsx)(h,{...a})}),(0,l.jsx)(t.A,{value:"js",label:"JavaScript",children:e||(0,l.jsx)(v,{...a})})]}),r&&(0,l.jsx)(c.A,{className:"language-css",title:"style",children:`${r}`})]})}}]);