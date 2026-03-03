"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["5273"],{79653(e,i,l){l.r(i),l.d(i,{metadata:()=>n,default:()=>u,frontMatter:()=>o,contentTitle:()=>p,toc:()=>v,assets:()=>g});var n=JSON.parse('{"id":"demos/basic/disable-input","title":"Disable Input","description":"disableOnInit \uC635\uC158\uC73C\uB85C \uCD08\uAE30\uD654 \uC2DC \uC0AC\uC6A9\uC790 \uC785\uB825\uC744 \uBE44\uD65C\uC131\uD654\uD569\uB2C8\uB2E4","source":"@site/docs/demos/basic/disable-input.mdx","sourceDirName":"demos/basic","slug":"/demos/basic/disable-input","permalink":"/flicking-docs-test/docs/demos/basic/disable-input","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/basic/disable-input.mdx","tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"Disable Input","id":"disable-input","slug":"/demos/basic/disable-input","sidebar_position":13,"description":"disableOnInit \uC635\uC158\uC73C\uB85C \uCD08\uAE30\uD654 \uC2DC \uC0AC\uC6A9\uC790 \uC785\uB825\uC744 \uBE44\uD65C\uC131\uD654\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","disableOnInit","disable","enable","\uBE44\uD65C\uC131\uD654"]},"sidebar":"demosSidebar","previous":{"title":"Input Type","permalink":"/flicking-docs-test/docs/demos/basic/input-type"},"next":{"title":"Default Index","permalink":"/flicking-docs-test/docs/demos/basic/default-index"}}'),s=l(65723),t=l(54187),a=l(27449),c=l(72722);l(22155);let d=`
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
.controls {
  margin-top: 8px;
}
.controls button {
  margin-right: 8px;
  padding: 6px 12px;
  cursor: pointer;
}
`,r=()=>{let e=`import { useRef, useState } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "./styles.css";

export default function App() {
  const flickingRef = useRef(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleInput = () => {
    if (flickingRef.current) {
      if (isDisabled) {
        flickingRef.current.enableInput();
      } else {
        flickingRef.current.disableInput();
      }
      setIsDisabled(!isDisabled);
    }
  };

  return (
    <div>
      {/* disableOnInit: false (\u{AE30}\u{BCF8}\u{AC12}) */}
      <div className="demo-container">
        <div className="demo-label">disableOnInit: false (\u{AE30}\u{BCF8}\u{AC12}, \u{B4DC}\u{B798}\u{ADF8} \u{AC00}\u{B2A5})</div>
        <Flicking disableOnInit={false} align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>

      {/* disableOnInit: true */}
      <div className="demo-container">
        <div className="demo-label">disableOnInit: true (\u{B4DC}\u{B798}\u{ADF8} \u{BD88}\u{AC00}, \u{BC84}\u{D2BC}\u{C73C}\u{B85C}\u{B9CC} \u{C81C}\u{C5B4})</div>
        <Flicking disableOnInit={true} align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
      </div>

      {/* \u{B3D9}\u{C801} \u{D1A0}\u{AE00} \u{C608}\u{C81C} */}
      <div className="demo-container">
        <div className="demo-label">\u{B3D9}\u{C801} \u{D1A0}\u{AE00}: {isDisabled ? "\u{BE44}\u{D65C}\u{C131}\u{D654}\u{B428}" : "\u{D65C}\u{C131}\u{D654}\u{B428}"}</div>
        <Flicking ref={flickingRef} align="center">
          <div className="flicking-panel panel-1">1</div>
          <div className="flicking-panel panel-2">2</div>
          <div className="flicking-panel panel-3">3</div>
          <div className="flicking-panel panel-4">4</div>
          <div className="flicking-panel panel-5">5</div>
        </Flicking>
        <div className="controls">
          <button onClick={toggleInput}>
            {isDisabled ? "\u{C785}\u{B825} \u{D65C}\u{C131}\u{D654}" : "\u{C785}\u{B825} \u{BE44}\u{D65C}\u{C131}\u{D654}"}
          </button>
        </div>
      </div>
    </div>
  );
}`,i=(0,s.jsx)(a.A,{template:"react",code:e,css:d}),l=`<template>
  <div>
    <!-- disableOnInit: false (\u{AE30}\u{BCF8}\u{AC12}) -->
    <div class="demo-container">
      <div class="demo-label">disableOnInit: false (\u{AE30}\u{BCF8}\u{AC12}, \u{B4DC}\u{B798}\u{ADF8} \u{AC00}\u{B2A5})</div>
      <Flicking :options="{ disableOnInit: false, align: 'center' }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
    </div>

    <!-- disableOnInit: true -->
    <div class="demo-container">
      <div class="demo-label">disableOnInit: true (\u{B4DC}\u{B798}\u{ADF8} \u{BD88}\u{AC00}, \u{BC84}\u{D2BC}\u{C73C}\u{B85C}\u{B9CC} \u{C81C}\u{C5B4})</div>
      <Flicking :options="{ disableOnInit: true, align: 'center' }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
    </div>

    <!-- \u{B3D9}\u{C801} \u{D1A0}\u{AE00} \u{C608}\u{C81C} -->
    <div class="demo-container">
      <div class="demo-label">\u{B3D9}\u{C801} \u{D1A0}\u{AE00}: {{ isDisabled ? "\u{BE44}\u{D65C}\u{C131}\u{D654}\u{B428}" : "\u{D65C}\u{C131}\u{D654}\u{B428}" }}</div>
      <Flicking ref="flicking" :options="{ align: 'center' }">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </Flicking>
      <div class="controls">
        <button @click="toggleInput">
          {{ isDisabled ? "\u{C785}\u{B825} \u{D65C}\u{C131}\u{D654}" : "\u{C785}\u{B825} \u{BE44}\u{D65C}\u{C131}\u{D654}" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";

export default {
  components: { Flicking },
  data() {
    return { isDisabled: false };
  },
  methods: {
    toggleInput() {
      const flicking = this.$refs.flicking;
      if (this.isDisabled) {
        flicking.enableInput();
      } else {
        flicking.disableInput();
      }
      this.isDisabled = !this.isDisabled;
    }
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
}
.panel-1 { background: #3e8ed0; }
.panel-2 { background: #00d1b2; }
.panel-3 { background: #f14668; }
.panel-4 { background: #ffe08a; color: #333; }
.panel-5 { background: #48c78e; }
.demo-container { margin-bottom: 24px; }
.demo-label { font-weight: bold; margin-bottom: 8px; color: #666; }
.controls { margin-top: 8px; }
.controls button { margin-right: 8px; padding: 6px 12px; cursor: pointer; }
</style>`,n=(0,s.jsx)(a.A,{template:"vue3",code:l,css:d}),t=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

// disableOnInit: false (\u{AE30}\u{BCF8}\u{AC12})
new Flicking("#flick-enabled", {
  disableOnInit: false,
  align: "center"
});

// disableOnInit: true
new Flicking("#flick-disabled", {
  disableOnInit: true,
  align: "center"
});

// \u{B3D9}\u{C801} \u{D1A0}\u{AE00} \u{C608}\u{C81C}
const flickingToggle = new Flicking("#flick-toggle", {
  align: "center"
});

let isDisabled = false;
const button = document.getElementById("toggle-btn");
const label = document.getElementById("toggle-label");

button.addEventListener("click", () => {
  if (isDisabled) {
    flickingToggle.enableInput();
    button.textContent = "\u{C785}\u{B825} \u{BE44}\u{D65C}\u{C131}\u{D654}";
    label.textContent = "\u{B3D9}\u{C801} \u{D1A0}\u{AE00}: \u{D65C}\u{C131}\u{D654}\u{B428}";
  } else {
    flickingToggle.disableInput();
    button.textContent = "\u{C785}\u{B825} \u{D65C}\u{C131}\u{D654}";
    label.textContent = "\u{B3D9}\u{C801} \u{D1A0}\u{AE00}: \u{BE44}\u{D65C}\u{C131}\u{D654}\u{B428}";
  }
  isDisabled = !isDisabled;
});`,r=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <!-- disableOnInit: false (\u{AE30}\u{BCF8}\u{AC12}) -->
  <div class="demo-container">
    <div class="demo-label">disableOnInit: false (\u{AE30}\u{BCF8}\u{AC12}, \u{B4DC}\u{B798}\u{ADF8} \u{AC00}\u{B2A5})</div>
    <div id="flick-enabled" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </div>
    </div>
  </div>

  <!-- disableOnInit: true -->
  <div class="demo-container">
    <div class="demo-label">disableOnInit: true (\u{B4DC}\u{B798}\u{ADF8} \u{BD88}\u{AC00}, \u{BC84}\u{D2BC}\u{C73C}\u{B85C}\u{B9CC} \u{C81C}\u{C5B4})</div>
    <div id="flick-disabled" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </div>
    </div>
  </div>

  <!-- \u{B3D9}\u{C801} \u{D1A0}\u{AE00} \u{C608}\u{C81C} -->
  <div class="demo-container">
    <div class="demo-label" id="toggle-label">\u{B3D9}\u{C801} \u{D1A0}\u{AE00}: \u{D65C}\u{C131}\u{D654}\u{B428}</div>
    <div id="flick-toggle" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1">1</div>
        <div class="flicking-panel panel-2">2</div>
        <div class="flicking-panel panel-3">3</div>
        <div class="flicking-panel panel-4">4</div>
        <div class="flicking-panel panel-5">5</div>
      </div>
    </div>
    <div class="controls">
      <button id="toggle-btn">\u{C785}\u{B825} \u{BE44}\u{D65C}\u{C131}\u{D654}</button>
    </div>
  </div>

</body>
</html>`,o=(0,s.jsx)(a.A,{template:"vanilla",code:t,html:r,css:d});return(0,s.jsx)(c.A,{options:{},panels:[],react:i,vue3:n,js:o})},o={title:"Disable Input",id:"disable-input",slug:"/demos/basic/disable-input",sidebar_position:13,description:"disableOnInit \uC635\uC158\uC73C\uB85C \uCD08\uAE30\uD654 \uC2DC \uC0AC\uC6A9\uC790 \uC785\uB825\uC744 \uBE44\uD65C\uC131\uD654\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","disableOnInit","disable","enable","\uBE44\uD65C\uC131\uD654"]},p="Disable Input",g={},v=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uAC12\uBCC4 \uBE44\uAD50",id:"\uAC12\uBCC4-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"disableOnInit \uB3D9\uC791 \uC6D0\uB9AC",id:"disableoninit-\uB3D9\uC791-\uC6D0\uB9AC",level:3},{value:"\uB3D9\uC801 \uC81C\uC5B4 \uBA54\uC11C\uB4DC",id:"\uB3D9\uC801-\uC81C\uC5B4-\uBA54\uC11C\uB4DC",level:3},{value:"\uC5F0\uAD00 \uC635\uC158",id:"\uC5F0\uAD00-\uC635\uC158",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function f(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"disable-input",children:"Disable Input"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#disableoninit",children:(0,s.jsx)(i.code,{children:"disableOnInit"})})," \uC635\uC158\uC73C\uB85C \uCD08\uAE30\uD654 \uC2DC \uC0AC\uC6A9\uC790 \uC785\uB825(\uB4DC\uB798\uADF8)\uC744 \uBE44\uD65C\uC131\uD654\uD569\uB2C8\uB2E4. \uBC84\uD2BC\uC774\uB098 API\uB85C\uB9CC \uC81C\uC5B4\uD558\uB294 \uCE90\uB7EC\uC140\uC5D0 \uC720\uC6A9\uD569\uB2C8\uB2E4."]}),"\n",(0,s.jsx)(r,{}),"\n",(0,s.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,s.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\uC635\uC158"}),(0,s.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,s.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,s.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#disableoninit",children:(0,s.jsx)(i.code,{children:"disableOnInit"})})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"boolean"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"false"})}),(0,s.jsx)(i.td,{children:"\uCD08\uAE30\uD654 \uC2DC \uC785\uB825 \uBE44\uD65C\uC131\uD654"})]})})]}),"\n",(0,s.jsx)(i.h3,{id:"\uAC12\uBCC4-\uBE44\uAD50",children:"\uAC12\uBCC4 \uBE44\uAD50"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\uAC12"}),(0,s.jsx)(i.th,{children:"\uB3D9\uC791"}),(0,s.jsx)(i.th,{children:"\uC801\uD569\uD55C \uC0C1\uD669"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"false"})}),(0,s.jsx)(i.td,{children:"\uB4DC\uB798\uADF8\uB85C \uD328\uB110 \uC774\uB3D9 \uAC00\uB2A5 (\uAE30\uBCF8\uAC12)"}),(0,s.jsx)(i.td,{children:"\uC77C\uBC18\uC801\uC778 \uCE90\uB7EC\uC140"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"true"})}),(0,s.jsx)(i.td,{children:"\uB4DC\uB798\uADF8 \uBB34\uC2DC, API\uB85C\uB9CC \uC81C\uC5B4 \uAC00\uB2A5"}),(0,s.jsx)(i.td,{children:"\uC790\uB3D9 \uC7AC\uC0DD \uC2AC\uB77C\uC774\uB354, \uBC84\uD2BC \uC81C\uC5B4 \uC804\uC6A9"})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,s.jsx)(i.h3,{id:"disableoninit-\uB3D9\uC791-\uC6D0\uB9AC",children:"disableOnInit \uB3D9\uC791 \uC6D0\uB9AC"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"disableOnInit: true"}),"\uB85C \uC124\uC815\uD558\uBA74 \uCD08\uAE30\uD654 \uC2DC \uC790\uB3D9\uC73C\uB85C ",(0,s.jsx)(i.code,{children:"disableInput()"})," \uBA54\uC11C\uB4DC\uAC00 \uD638\uCD9C\uB429\uB2C8\uB2E4. \uC774\uD6C4 \uC0AC\uC6A9\uC790 \uB4DC\uB798\uADF8 \uC785\uB825\uC740 \uBB34\uC2DC\uB418\uC9C0\uB9CC, ",(0,s.jsx)(i.code,{children:"moveTo()"}),", ",(0,s.jsx)(i.code,{children:"prev()"}),", ",(0,s.jsx)(i.code,{children:"next()"})," \uB4F1 \uD504\uB85C\uADF8\uB798\uB9E4\uD2F1 \uC81C\uC5B4\uB294 \uC815\uC0C1 \uB3D9\uC791\uD569\uB2C8\uB2E4."]}),"\n",(0,s.jsx)(i.h3,{id:"\uB3D9\uC801-\uC81C\uC5B4-\uBA54\uC11C\uB4DC",children:"\uB3D9\uC801 \uC81C\uC5B4 \uBA54\uC11C\uB4DC"}),"\n",(0,s.jsx)(i.p,{children:"\uB7F0\uD0C0\uC784\uC5D0 \uC785\uB825 \uD65C\uC131\uD654 \uC0C1\uD0DC\uB97C \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",children:'const flicking = new Flicking("#el");\n\n// \uC785\uB825 \uBE44\uD65C\uC131\uD654\nflicking.disableInput();\n\n// \uC785\uB825 \uD65C\uC131\uD654\nflicking.enableInput();\n'})}),"\n",(0,s.jsx)(i.h3,{id:"\uC5F0\uAD00-\uC635\uC158",children:"\uC5F0\uAD00 \uC635\uC158"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"inputType\uACFC\uC758 \uAD00\uACC4"}),": ",(0,s.jsx)(i.code,{children:"inputType: []"}),"\uB3C4 \uC785\uB825\uC744 \uBE44\uD65C\uC131\uD654\uD558\uC9C0\uB9CC, ",(0,s.jsx)(i.code,{children:"disableOnInit"}),"\uC740 \uB098\uC911\uC5D0 ",(0,s.jsx)(i.code,{children:"enableInput()"}),"\uC73C\uB85C \uD65C\uC131\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,s.jsx)(i.admonition,{title:"\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"disableOnInit: true"}),": \uC790\uB3D9 \uC7AC\uC0DD \uCE90\uB7EC\uC140, \uBC84\uD2BC/\uD654\uC0B4\uD45C\uB85C\uB9CC \uC81C\uC5B4\uD558\uB294 UI, \uD130\uCE58 \uBC29\uC9C0\uAC00 \uD544\uC694\uD55C \uD504\uB808\uC820\uD14C\uC774\uC158"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"\uB3D9\uC801 \uD1A0\uAE00"}),": \uD2B9\uC815 \uC870\uAC74\uC5D0\uC11C\uB9CC \uB4DC\uB798\uADF8 \uD5C8\uC6A9, \uBAA8\uB2EC \uC5F4\uB9BC \uC2DC \uBC30\uACBD \uCE90\uB7EC\uC140 \uBE44\uD65C\uC131\uD654"]}),"\n"]})}),"\n",(0,s.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,s.jsx)(i.admonition,{title:"\uB300\uC548 \uC81C\uC5B4 \uC218\uB2E8 \uC81C\uACF5",type:"warning",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"disableOnInit: true"}),"\uB85C \uC124\uC815\uD558\uBA74 \uB4DC\uB798\uADF8\uAC00 \uBD88\uAC00\uB2A5\uD569\uB2C8\uB2E4. \uB124\uBE44\uAC8C\uC774\uC158 \uBC84\uD2BC, \uD654\uC0B4\uD45C, \uB610\uB294 \uD0A4\uBCF4\uB4DC \uC81C\uC5B4 \uB4F1 \uB300\uC548\uC744 \uBC18\uB4DC\uC2DC \uC81C\uACF5\uD558\uC138\uC694."]})}),"\n",(0,s.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,s.jsx)(i.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#inputtype",children:(0,s.jsx)(i.code,{children:"inputType"})}),": \uC785\uB825 \uC7A5\uCE58 \uD0C0\uC785 \uC81C\uD55C"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"./input-type",children:"Input Type"}),": \uC785\uB825 \uC7A5\uCE58 \uD0C0\uC785 \uC124\uC815"]}),"\n"]})]})}function u(e={}){let{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},27449(e,i,l){l.d(i,{A:()=>o});var n=l(65723),s=l(19612);l(22155);let t="^4.11.4",a={react:{"@egjs/react-flicking":t,"@egjs/flicking":t},vue3:{"@egjs/vue3-flicking":t,"@egjs/flicking":t},vanilla:{"@egjs/flicking":t}},c=`<!DOCTYPE html>
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
`;function o({code:e,html:i,template:l="react",dependencies:t={},files:o={},css:p=""}){var g;let v,f,u;return(0,n.jsx)(s.OZ,{template:"vue3"===l?"vue":"vanilla"===l?"vanilla":"react",files:(u={"/styles.css":{code:f=p?`${r}
${p}`:r},...o},"react"===l?{"/App.tsx":{code:e},"/index.js":{code:d,hidden:!0},...u}:"vue3"===l?{"/src/App.vue":{code:e},...u}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),l=[],n=[],s=!1;for(let e of i)s?n.push(e):e.trimStart().startsWith("import ")||""===e.trim()?l.push(e.replace('"../styles.css"','"./styles.css"')):(s=!0,n.push(e));for(;n.length>0&&""===n[n.length-1].trim();)n.pop();return[...l,"","const _run = () => {",...n.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:f},"/index.html":{code:(v="<style>.flicking-viewport{opacity:0}</style>",(g=i||c).includes("</head>")?g.replace("</head>",`${v}
</head>`):v+g)},...o}),customSetup:{dependencies:{...a[l],...t}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===l?["/App.tsx","/styles.css"]:"vue3"===l?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===l?"/App.tsx":"vue3"===l?"/src/App.vue":"/src/index.js"}})}},72722(e,i,l){l.d(i,{A:()=>h});var n=l(65723),s=l(34622),t=l(7210),a=l(78863);l(22155);let c=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,d=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",r=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${c(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(i=>`${i}: ${c(e[i],"'")}`).join(", ")}`,p=(e,{prefix:i,includeFlicking:l=!0}={})=>{let n=l?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&n.push(...e),`${n.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},g=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,v=({options:e,panels:i,events:l={},methods:t={},plugins:a=[],siblings:o=[],imports:g=[],viewportClass:v=""})=>{let f=e=>`${Object.keys(e).map(i=>`${i}: ${c(e[i])}`).join(",\n  ")}`,u=Object.keys(t).map(e=>`const ${e} = ${t[e]};
`).join(""),h=e?`const flicking = new Flicking("#flick", {
  ${f(e)}
});

`:'const flicking = new Flicking("#flick")',m=a.length>0?`flicking.addPlugins(${a.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?f(e[1]):e[1]??""}
}`:""})`)});`:"",b=[...a.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],k=Object.keys(l).map(e=>{let i=l[e];return`flicking.on("${e}", ${i})
`}).join(""),j=i.filter(e=>e.isSlot);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${v&&` ${v}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${j.length?`
  ${j.map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,n.jsx)(s.A,{className:"language-js",title:"js",children:`${p(b)}

${u}${h}${m}${k}`.trim()})]})},f=({options:e,panels:i,events:l={},methods:t={},plugins:a,siblings:c,imports:o=[],viewportClass:v=""})=>{let f=a?`
  private _plugins = [${g(a)}];
`:"",u=i.filter(e=>e.isSlot),h=[["{ Component }","react"],[u.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],m=Object.keys(t).map(e=>`
const ${e} = ${t[e]};`).join("");m&&(m+="\n"),a&&h.push([`{ ${a.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),h.push(...o);let b=u.length?`
      <ViewportSlot>
        ${u.map(e=>`<${e.tag}${d(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",k=Object.keys(l).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${l[e]}}`).join("");return(0,n.jsx)(s.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(h,{includeFlicking:!1})}
${m}
export default class DemoComponent extends Component {${f}
  public render() {
    return ${c?"<>\n    ":""}<Flicking${v&&` className="${v}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${a?" plugins={this._plugins}":""}${k}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${d(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${b}
    </Flicking>${c?`
    ${c.map(e=>`<${e.tag}${d(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},u=({options:e,panels:i,events:l={},methods:t={},plugins:a,siblings:c=[],imports:v=[],viewportClass:f=""})=>{let u=o(e),h=i.filter(e=>e.isSlot),m=a?`,
  data() {
    return {
      plugins: [${g(a)}]
    }
  }`:"",b=h.length?`
  <template #viewport>
    ${h.map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",k=[...(a??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...v],j=Object.keys(t),x=j.length>0?`,
  methods: {
    ${j.map(e=>`${e}: ${t[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",$=Object.keys(l).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${l[e]}"`).join("");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{className:"language-html",title:"template",children:`<Flicking${f&&` class="${f}"`}${e?` :options="{ ${u} }"`:""}${a?' :plugins="plugins"':""}${$}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n  ")}${b}
</Flicking>${c?`
${c.map(e=>`<${e.tag}${d(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,n.jsx)(s.A,{className:"language-js",title:"script",children:`${p(k,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${m}${x}
}`})]})},h=({js:e,react:i,vue3:l,style:c,...d})=>(0,n.jsxs)("div",{children:[(0,n.jsxs)(a.A,{groupId:"cfc",defaultValue:"js",children:[(0,n.jsx)(t.A,{value:"react",label:"React",children:i||(0,n.jsx)(f,{...d})}),(0,n.jsx)(t.A,{value:"vue3",label:"Vue@3",children:l||(0,n.jsx)(u,{...d})}),(0,n.jsx)(t.A,{value:"js",label:"JavaScript",children:e||(0,n.jsx)(v,{...d})})]}),c&&(0,n.jsx)(s.A,{className:"language-css",title:"style",children:`${c}`})]})}}]);