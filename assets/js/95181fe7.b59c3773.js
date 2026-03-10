"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["5268"],{96316(e,i,l){l.r(i),l.d(i,{metadata:()=>n,default:()=>f,frontMatter:()=>o,contentTitle:()=>p,toc:()=>m,assets:()=>u});var n=JSON.parse('{"id":"demos/advanced/use-css-order","title":"CSS Order","description":"useCSSOrder \uC635\uC158\uC73C\uB85C circular \uBAA8\uB4DC\uC5D0\uC11C DOM \uC21C\uC11C \uB300\uC2E0 CSS order \uC18D\uC131\uC73C\uB85C \uD328\uB110 \uC21C\uC11C\uB97C \uAD00\uB9AC\uD569\uB2C8\uB2E4","source":"@site/docs/demos/advanced/use-css-order.mdx","sourceDirName":"demos/advanced","slug":"/demos/advanced/use-css-order","permalink":"/flicking-docs-test/docs/demos/advanced/use-css-order","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/advanced/use-css-order.mdx","tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"title":"CSS Order","id":"use-css-order","slug":"/demos/advanced/use-css-order","sidebar_position":17,"description":"useCSSOrder \uC635\uC158\uC73C\uB85C circular \uBAA8\uB4DC\uC5D0\uC11C DOM \uC21C\uC11C \uB300\uC2E0 CSS order \uC18D\uC131\uC73C\uB85C \uD328\uB110 \uC21C\uC11C\uB97C \uAD00\uB9AC\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","useCSSOrder","circular","DOM","CSS order","iframe","\uC21C\uD658"]},"sidebar":"demosSidebar","previous":{"title":"Animation Threshold","permalink":"/flicking-docs-test/docs/demos/advanced/animation-threshold"},"next":{"title":"Observe Panel Resize","permalink":"/flicking-docs-test/docs/demos/advanced/observe-panel-resize"}}'),r=l(65723),s=l(54187),t=l(27449),d=l(72722);l(22155);let c=`
.flicking-panel {
  width: 40%;
  height: 140px;
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
.dom-order-display {
  margin-top: 8px;
  font-size: 13px;
  color: #555;
  font-family: monospace;
}
.controls {
  margin-top: 8px;
  display: flex;
  gap: 8px;
}
.controls button {
  padding: 6px 12px;
  cursor: pointer;
}
`,a=()=>{let e=`import { useRef, useState } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "./styles.css";

function FlickingDemo({ label, useCSSOrder }) {
  const ref = useRef(null);
  const [domOrder, setDomOrder] = useState("\u{2014}");

  const updateDomOrder = () => {
    const camera = ref.current?.camera?.element;
    if (!camera) return;
    const ids = [...camera.children].map(el => el.dataset.id).join(" \u{2192} ");
    setDomOrder(ids);
  };

  return (
    <div className="demo-container">
      <div className="demo-label">{label}</div>
      <Flicking
        ref={ref}
        circular={true}
        useCSSOrder={useCSSOrder}
        align="center"
        onMoveEnd={updateDomOrder}
        onReady={updateDomOrder}
      >
        <div className="flicking-panel panel-1" data-id="1">Panel 1</div>
        <div className="flicking-panel panel-2" data-id="2">Panel 2</div>
        <div className="flicking-panel panel-3" data-id="3">Panel 3</div>
        <div className="flicking-panel panel-4" data-id="4">Panel 4</div>
        <div className="flicking-panel panel-5" data-id="5">Panel 5</div>
      </Flicking>
      <div className="controls">
        <button onClick={() => ref.current?.prev().catch(() => {})}>Prev</button>
        <button onClick={() => ref.current?.next().catch(() => {})}>Next</button>
      </div>
      <div className="dom-order-display">DOM \u{C21C}\u{C11C}: {domOrder}</div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <FlickingDemo
        label="useCSSOrder: false (\u{AE30}\u{BCF8}\u{AC12}) \u{2014} circular \u{C2DC} DOM \u{B178}\u{B4DC} \u{C21C}\u{C11C} \u{BCC0}\u{ACBD}"
        useCSSOrder={false}
      />
      <FlickingDemo
        label="useCSSOrder: true \u{2014} DOM \u{C21C}\u{C11C} \u{C720}\u{C9C0}, CSS order \u{C18D}\u{C131}\u{C73C}\u{B85C} \u{C2DC}\u{AC01}\u{C801} \u{C21C}\u{C11C} \u{C870}\u{C815}"
        useCSSOrder={true}
      />
    </div>
  );
}`,i=(0,r.jsx)(t.A,{template:"react",code:e,css:c}),l=`<template>
  <div>
    <!-- useCSSOrder: false (\u{AE30}\u{BCF8}\u{AC12}) -->
    <div class="demo-container">
      <div class="demo-label">useCSSOrder: false (\u{AE30}\u{BCF8}\u{AC12}) \u{2014} circular \u{C2DC} DOM \u{B178}\u{B4DC} \u{C21C}\u{C11C} \u{BCC0}\u{ACBD}</div>
      <Flicking
        ref="flick1"
        :options="{ circular: true, useCSSOrder: false, align: 'center' }"
        @moveEnd="updateDomOrder(1)"
        @ready="updateDomOrder(1)"
      >
        <div class="flicking-panel panel-1" data-id="1">Panel 1</div>
        <div class="flicking-panel panel-2" data-id="2">Panel 2</div>
        <div class="flicking-panel panel-3" data-id="3">Panel 3</div>
        <div class="flicking-panel panel-4" data-id="4">Panel 4</div>
        <div class="flicking-panel panel-5" data-id="5">Panel 5</div>
      </Flicking>
      <div class="controls">
        <button @click="$refs.flick1.prev().catch(() => {})">Prev</button>
        <button @click="$refs.flick1.next().catch(() => {})">Next</button>
      </div>
      <div class="dom-order-display">DOM \u{C21C}\u{C11C}: {{ domOrder1 }}</div>
    </div>

    <!-- useCSSOrder: true -->
    <div class="demo-container">
      <div class="demo-label">useCSSOrder: true \u{2014} DOM \u{C21C}\u{C11C} \u{C720}\u{C9C0}, CSS order \u{C18D}\u{C131}\u{C73C}\u{B85C} \u{C2DC}\u{AC01}\u{C801} \u{C21C}\u{C11C} \u{C870}\u{C815}</div>
      <Flicking
        ref="flick2"
        :options="{ circular: true, useCSSOrder: true, align: 'center' }"
        @moveEnd="updateDomOrder(2)"
        @ready="updateDomOrder(2)"
      >
        <div class="flicking-panel panel-1" data-id="1">Panel 1</div>
        <div class="flicking-panel panel-2" data-id="2">Panel 2</div>
        <div class="flicking-panel panel-3" data-id="3">Panel 3</div>
        <div class="flicking-panel panel-4" data-id="4">Panel 4</div>
        <div class="flicking-panel panel-5" data-id="5">Panel 5</div>
      </Flicking>
      <div class="controls">
        <button @click="$refs.flick2.prev().catch(() => {})">Prev</button>
        <button @click="$refs.flick2.next().catch(() => {})">Next</button>
      </div>
      <div class="dom-order-display">DOM \u{C21C}\u{C11C}: {{ domOrder2 }}</div>
    </div>
  </div>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";

export default {
  components: { Flicking },
  data() {
    return { domOrder1: "1 2 3 4 5", domOrder2: "1 2 3 4 5" };
  },
  methods: {
    updateDomOrder(n) {
      const ref = this.$refs["flick" + n];
      if (!ref) return;
      const camera = ref.$el?.querySelector(".flicking-camera");
      if (!camera) return;
      const ids = [...camera.children].map(el => el.dataset.id).join(" \u{2192} ");
      this["domOrder" + n] = ids;
    }
  }
};
</script>

<style>
.flicking-panel {
  width: 40%;
  height: 140px;
  margin-right: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-align: center;
}
.panel-1 { background: #3e8ed0; }
.panel-2 { background: #00d1b2; }
.panel-3 { background: #f14668; }
.panel-4 { background: #ffe08a; color: #333; }
.panel-5 { background: #48c78e; }
.demo-container { margin-bottom: 24px; }
.demo-label { font-weight: bold; margin-bottom: 8px; color: #666; }
.controls { margin-top: 8px; display: flex; gap: 8px; }
.controls button { padding: 6px 12px; cursor: pointer; }
.dom-order-display { margin-top: 6px; font-size: 13px; color: #555; font-family: monospace; }
</style>`,n=(0,r.jsx)(t.A,{template:"vue3",code:l,css:c}),s=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

function updateDomOrder(flicking, labelEl) {
  const camera = flicking.camera.element;
  const ids = [...camera.children].map(el => el.dataset.id).join(" \u{2192} ");
  labelEl.textContent = "DOM \u{C21C}\u{C11C}: " + ids;
}

// useCSSOrder: false (\u{AE30}\u{BCF8}\u{AC12})
const flick1 = new Flicking("#flick-default", {
  circular: true,
  useCSSOrder: false,
  align: "center"
});

const log1 = document.getElementById("log1");
const update1 = () => updateDomOrder(flick1, log1);
flick1.on("ready", update1);
flick1.on("moveEnd", update1);

document.getElementById("prev1").addEventListener("click", () => flick1.prev().catch(() => {}));
document.getElementById("next1").addEventListener("click", () => flick1.next().catch(() => {}));

// useCSSOrder: true
const flick2 = new Flicking("#flick-cssorder", {
  circular: true,
  useCSSOrder: true,
  align: "center"
});

const log2 = document.getElementById("log2");
const update2 = () => updateDomOrder(flick2, log2);
flick2.on("ready", update2);
flick2.on("moveEnd", update2);

document.getElementById("prev2").addEventListener("click", () => flick2.prev().catch(() => {}));
document.getElementById("next2").addEventListener("click", () => flick2.next().catch(() => {}));`,a=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <!-- useCSSOrder: false (\u{AE30}\u{BCF8}\u{AC12}) -->
  <div class="demo-container">
    <div class="demo-label">useCSSOrder: false (\u{AE30}\u{BCF8}\u{AC12}) \u{2014} circular \u{C2DC} DOM \u{B178}\u{B4DC} \u{C21C}\u{C11C} \u{BCC0}\u{ACBD}</div>
    <div id="flick-default" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1" data-id="1">Panel 1</div>
        <div class="flicking-panel panel-2" data-id="2">Panel 2</div>
        <div class="flicking-panel panel-3" data-id="3">Panel 3</div>
        <div class="flicking-panel panel-4" data-id="4">Panel 4</div>
        <div class="flicking-panel panel-5" data-id="5">Panel 5</div>
      </div>
    </div>
    <div class="controls">
      <button id="prev1">Prev</button>
      <button id="next1">Next</button>
    </div>
    <div class="dom-order-display" id="log1">DOM \u{C21C}\u{C11C}: \u{2014}</div>
  </div>

  <!-- useCSSOrder: true -->
  <div class="demo-container">
    <div class="demo-label">useCSSOrder: true \u{2014} DOM \u{C21C}\u{C11C} \u{C720}\u{C9C0}, CSS order \u{C18D}\u{C131}\u{C73C}\u{B85C} \u{C2DC}\u{AC01}\u{C801} \u{C21C}\u{C11C} \u{C870}\u{C815}</div>
    <div id="flick-cssorder" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1" data-id="1">Panel 1</div>
        <div class="flicking-panel panel-2" data-id="2">Panel 2</div>
        <div class="flicking-panel panel-3" data-id="3">Panel 3</div>
        <div class="flicking-panel panel-4" data-id="4">Panel 4</div>
        <div class="flicking-panel panel-5" data-id="5">Panel 5</div>
      </div>
    </div>
    <div class="controls">
      <button id="prev2">Prev</button>
      <button id="next2">Next</button>
    </div>
    <div class="dom-order-display" id="log2">DOM \u{C21C}\u{C11C}: \u{2014}</div>
  </div>

</body>
</html>`,o=(0,r.jsx)(t.A,{template:"vanilla",code:s,html:a,css:c});return(0,r.jsx)(d.A,{options:{},panels:[],react:i,vue3:n,js:o})},o={title:"CSS Order",id:"use-css-order",slug:"/demos/advanced/use-css-order",sidebar_position:17,description:"useCSSOrder \uC635\uC158\uC73C\uB85C circular \uBAA8\uB4DC\uC5D0\uC11C DOM \uC21C\uC11C \uB300\uC2E0 CSS order \uC18D\uC131\uC73C\uB85C \uD328\uB110 \uC21C\uC11C\uB97C \uAD00\uB9AC\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","useCSSOrder","circular","DOM","CSS order","iframe","\uC21C\uD658"]},p="CSS Order",u={},m=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uAC12\uBCC4 \uBE44\uAD50",id:"\uAC12\uBCC4-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"useCSSOrder \uB3D9\uC791 \uC6D0\uB9AC",id:"usecssorder-\uB3D9\uC791-\uC6D0\uB9AC",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function g(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"css-order",children:"CSS Order"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#usecssorder",children:(0,r.jsx)(i.code,{children:"useCSSOrder"})})," \uC635\uC158\uC73C\uB85C ",(0,r.jsx)(i.code,{children:"circular"})," \uBAA8\uB4DC\uC5D0\uC11C \uD328\uB110\uC758 \uC2DC\uAC01\uC801 \uC21C\uC11C\uB97C \uAD00\uB9AC\uD558\uB294 \uBC29\uC2DD\uC744 \uC124\uC815\uD569\uB2C8\uB2E4. \uAE30\uBCF8\uAC12(",(0,r.jsx)(i.code,{children:"false"}),")\uC740 DOM \uB178\uB4DC \uC21C\uC11C\uB97C \uC9C1\uC811 \uBCC0\uACBD\uD558\uACE0, ",(0,r.jsx)(i.code,{children:"true"}),"\uB85C \uC124\uC815\uD558\uBA74 CSS ",(0,r.jsx)(i.code,{children:"order"})," \uC18D\uC131\uC744 \uC0AC\uC6A9\uD574 DOM \uC21C\uC11C\uB294 \uADF8\uB300\uB85C \uC720\uC9C0\uD569\uB2C8\uB2E4."]}),"\n",(0,r.jsx)(i.p,{children:'\uD328\uB110\uC744 \uC21C\uD658 \uC774\uB3D9\uD55C \uD6C4 \uC544\uB798\uC758 "DOM \uC21C\uC11C" \uD45C\uC2DC\uAC00 \uC5B4\uB5BB\uAC8C \uB2EC\uB77C\uC9C0\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694.'}),"\n",(0,r.jsx)(a,{}),"\n",(0,r.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,r.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"\uC635\uC158"}),(0,r.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,r.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,r.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,r.jsx)(i.tbody,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#usecssorder",children:(0,r.jsx)(i.code,{children:"useCSSOrder"})})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"boolean"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"false"})}),(0,r.jsx)(i.td,{children:"CSS order \uC18D\uC131\uC73C\uB85C \uD328\uB110 \uC21C\uC11C \uAD00\uB9AC"})]})})]}),"\n",(0,r.jsx)(i.h3,{id:"\uAC12\uBCC4-\uBE44\uAD50",children:"\uAC12\uBCC4 \uBE44\uAD50"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"\uAC12"}),(0,r.jsx)(i.th,{children:"\uB3D9\uC791"}),(0,r.jsx)(i.th,{children:"\uC801\uD569\uD55C \uC0C1\uD669"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"false"})}),(0,r.jsx)(i.td,{children:"circular \uC21C\uD658 \uC2DC DOM \uB178\uB4DC\uB97C \uC9C1\uC811 \uC7AC\uBC30\uCE58 (\uAE30\uBCF8\uAC12)"}),(0,r.jsx)(i.td,{children:"\uC77C\uBC18\uC801\uC778 \uCE90\uB7EC\uC140"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"true"})}),(0,r.jsxs)(i.td,{children:["DOM \uC21C\uC11C \uACE0\uC815, CSS ",(0,r.jsx)(i.code,{children:"order"})," \uC18D\uC131\uC73C\uB85C \uC2DC\uAC01\uC801 \uC21C\uC11C \uC870\uC815"]}),(0,r.jsx)(i.td,{children:"iframe, video, \uC0C1\uD0DC \uC720\uC9C0\uAC00 \uD544\uC694\uD55C \uD328\uB110"})]})]})]}),"\n",(0,r.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,r.jsx)(i.h3,{id:"usecssorder-\uB3D9\uC791-\uC6D0\uB9AC",children:"useCSSOrder \uB3D9\uC791 \uC6D0\uB9AC"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"circular: true"}),"\uC778 Flicking\uC740 \uC21C\uD658 \uD6A8\uACFC\uB97C \uB9CC\uB4E4\uAE30 \uC704\uD574 \uD328\uB110\uB4E4\uC758 \uC21C\uC11C\uB97C \uC7AC\uBC30\uCE58\uD569\uB2C8\uB2E4."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsxs)(i.strong,{children:[(0,r.jsx)(i.code,{children:"useCSSOrder: false"})," (\uAE30\uBCF8\uAC12)"]}),": \uD328\uB110 DOM \uB178\uB4DC\uB97C \uC2E4\uC81C\uB85C \uC774\uB3D9\uC2DC\uCF1C \uC21C\uC11C\uB97C \uBCC0\uACBD\uD569\uB2C8\uB2E4. \uB2E8\uC21C div \uD328\uB110\uC5D0\uB294 \uBB38\uC81C\uC5C6\uC9C0\uB9CC, ",(0,r.jsx)(i.code,{children:"<iframe>"}),"\uC774\uB098 ",(0,r.jsx)(i.code,{children:"<video>"})," \uCC98\uB7FC DOM \uC774\uB3D9 \uC2DC \uB9AC\uB85C\uB4DC\uB418\uB294 \uC694\uC18C\uB97C \uD3EC\uD568\uD55C \uD328\uB110\uC5D0\uC11C\uB294 \uC21C\uD658\uD560 \uB54C\uB9C8\uB2E4 \uCF58\uD150\uCE20\uAC00 \uCD08\uAE30\uD654\uB429\uB2C8\uB2E4."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.code,{children:"useCSSOrder: true"})}),": DOM \uB178\uB4DC\uB294 \uC6D0\uB798 \uC704\uCE58\uC5D0 \uACE0\uC815\uD558\uACE0, CSS flexbox\uC758 ",(0,r.jsx)(i.code,{children:"order"})," \uC18D\uC131\uC73C\uB85C \uC2DC\uAC01\uC801 \uC21C\uC11C\uB9CC \uBCC0\uACBD\uD569\uB2C8\uB2E4. DOM \uC7AC\uBC30\uCE58\uAC00 \uC5C6\uC73C\uBBC0\uB85C iframe\uC774\uB098 video\uAC00 \uB9AC\uB85C\uB4DC\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-javascript",children:'// iframe \uD328\uB110\uC774 \uC788\uB294 circular \uCE90\uB7EC\uC140\nconst flicking = new Flicking("#el", {\n  circular: true,\n  useCSSOrder: true  // DOM \uC7AC\uBC30\uCE58 \uC5C6\uC774 CSS order\uB85C \uAD00\uB9AC\n});\n'})}),"\n",(0,r.jsx)(i.admonition,{title:"Svelte\uC5D0\uC11C\uB294 \uD56D\uC0C1 useCSSOrder",type:"info",children:(0,r.jsxs)(i.p,{children:["Svelte \uBC14\uC778\uB529\uC744 \uC0AC\uC6A9\uD560 \uB54C\uB294 \uB0B4\uBD80\uC801\uC73C\uB85C \uD56D\uC0C1 ",(0,r.jsx)(i.code,{children:"useCSSOrder: true"}),"\uAC00 \uC801\uC6A9\uB429\uB2C8\uB2E4. Svelte\uC758 \uB80C\uB354\uB9C1 \uBC29\uC2DD\uACFC DOM \uC7AC\uBC30\uCE58\uAC00 \uCDA9\uB3CC\uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4."]})}),"\n",(0,r.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,r.jsx)(i.admonition,{title:"CSS order\uC640 flexbox",type:"warning",children:(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"useCSSOrder: true"}),"\uB294 Flicking\uC758 \uCE74\uBA54\uB77C \uC5D8\uB9AC\uBA3C\uD2B8(",(0,r.jsx)(i.code,{children:"flicking-camera"}),")\uAC00 flexbox \uB808\uC774\uC544\uC6C3\uC744 \uC0AC\uC6A9\uD55C\uB2E4\uB294 \uC804\uC81C \uD558\uC5D0 \uB3D9\uC791\uD569\uB2C8\uB2E4. \uCEE4\uC2A4\uD140 CSS\uB85C flexbox\uB97C \uC81C\uAC70\uD558\uBA74 \uC21C\uC11C\uAC00 \uC62C\uBC14\uB974\uAC8C \uC801\uC6A9\uB418\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]})}),"\n",(0,r.jsx)(i.admonition,{title:"circular\uAC00 \uC544\uB2CC \uACBD\uC6B0",type:"warning",children:(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"circular: false"}),"\uC774\uBA74 \uD328\uB110 \uC7AC\uBC30\uCE58\uAC00 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uC73C\uBBC0\uB85C ",(0,r.jsx)(i.code,{children:"useCSSOrder"})," \uC635\uC158\uC740 \uC758\uBBF8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."]})}),"\n",(0,r.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,r.jsx)(i.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#circular",children:(0,r.jsx)(i.code,{children:"circular"})}),": \uC21C\uD658 \uBAA8\uB4DC \uC124\uC815"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#circularfallback",children:(0,r.jsx)(i.code,{children:"circularFallback"})}),": \uC21C\uD658 \uBD88\uAC00 \uC2DC \uB300\uCCB4 \uB3D9\uC791"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"../basic/circular",children:"Circular"}),": \uC21C\uD658 \uBAA8\uB4DC \uAE30\uBCF8 \uC0AC\uC6A9\uBC95"]}),"\n"]})]})}function f(e={}){let{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},27449(e,i,l){l.d(i,{A:()=>o});var n=l(65723),r=l(19612);l(22155);let s="^4.11.4",t={react:{"@egjs/react-flicking":s,"@egjs/flicking":s},vue3:{"@egjs/vue3-flicking":s,"@egjs/flicking":s},vanilla:{"@egjs/flicking":s}},d=`<!DOCTYPE html>
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
  </StrictMode>);`,a=`
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
`;function o({code:e,html:i,template:l="react",dependencies:s={},files:o={},css:p=""}){var u;let m,g,f;return(0,n.jsx)(r.OZ,{template:"vue3"===l?"vue":"vanilla"===l?"vanilla":"react",files:(f={"/styles.css":{code:g=p?`${a}
${p}`:a},...o},"react"===l?{"/App.tsx":{code:e},"/index.js":{code:c,hidden:!0},...f}:"vue3"===l?{"/src/App.vue":{code:e},...f}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),l=[],n=[],r=!1;for(let e of i)r?n.push(e):e.trimStart().startsWith("import ")||""===e.trim()?l.push(e.replace('"../styles.css"','"./styles.css"')):(r=!0,n.push(e));for(;n.length>0&&""===n[n.length-1].trim();)n.pop();return[...l,"","const _run = () => {",...n.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:g},"/index.html":{code:(m="<style>.flicking-viewport{opacity:0}</style>",(u=i||d).includes("</head>")?u.replace("</head>",`${m}
</head>`):m+u)},...o}),customSetup:{dependencies:{...t[l],...s}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===l?["/App.tsx","/styles.css"]:"vue3"===l?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===l?"/App.tsx":"vue3"===l?"/src/App.vue":"/src/index.js"}})}},72722(e,i,l){l.d(i,{A:()=>h});var n=l(65723),r=l(34622),s=l(7210),t=l(78863);l(22155);let d=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,c=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",a=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${d(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(i=>`${i}: ${d(e[i],"'")}`).join(", ")}`,p=(e,{prefix:i,includeFlicking:l=!0}={})=>{let n=l?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&n.push(...e),`${n.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},u=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,m=({options:e,panels:i,events:l={},methods:s={},plugins:t=[],siblings:o=[],imports:u=[],viewportClass:m=""})=>{let g=e=>`${Object.keys(e).map(i=>`${i}: ${d(e[i])}`).join(",\n  ")}`,f=Object.keys(s).map(e=>`const ${e} = ${s[e]};
`).join(""),h=e?`const flicking = new Flicking("#flick", {
  ${g(e)}
});

`:'const flicking = new Flicking("#flick")',v=t.length>0?`flicking.addPlugins(${t.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?g(e[1]):e[1]??""}
}`:""})`)});`:"",x=[...t.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...u],j=Object.keys(l).map(e=>{let i=l[e];return`flicking.on("${e}", ${i})
`}).join(""),k=i.filter(e=>e.isSlot);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${m&&` ${m}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${c(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${k.length?`
  ${k.map(e=>`<${e.tag}${c(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${c(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,n.jsx)(r.A,{className:"language-js",title:"js",children:`${p(x)}

${f}${h}${v}${j}`.trim()})]})},g=({options:e,panels:i,events:l={},methods:s={},plugins:t,siblings:d,imports:o=[],viewportClass:m=""})=>{let g=t?`
  private _plugins = [${u(t)}];
`:"",f=i.filter(e=>e.isSlot),h=[["{ Component }","react"],[f.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],v=Object.keys(s).map(e=>`
const ${e} = ${s[e]};`).join("");v&&(v+="\n"),t&&h.push([`{ ${t.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),h.push(...o);let x=f.length?`
      <ViewportSlot>
        ${f.map(e=>`<${e.tag}${c(e,"className")}${a(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",j=Object.keys(l).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${l[e]}}`).join("");return(0,n.jsx)(r.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(h,{includeFlicking:!1})}
${v}
export default class DemoComponent extends Component {${g}
  public render() {
    return ${d?"<>\n    ":""}<Flicking${m&&` className="${m}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${t?" plugins={this._plugins}":""}${j}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${c(e,"className")}${a(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${x}
    </Flicking>${d?`
    ${d.map(e=>`<${e.tag}${c(e,"className")}${a(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},f=({options:e,panels:i,events:l={},methods:s={},plugins:t,siblings:d=[],imports:m=[],viewportClass:g=""})=>{let f=o(e),h=i.filter(e=>e.isSlot),v=t?`,
  data() {
    return {
      plugins: [${u(t)}]
    }
  }`:"",x=h.length?`
  <template #viewport>
    ${h.map(e=>`<${e.tag}${c(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",j=[...(t??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...m],k=Object.keys(s),$=k.length>0?`,
  methods: {
    ${k.map(e=>`${e}: ${s[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",S=Object.keys(l).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${l[e]}"`).join("");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.A,{className:"language-html",title:"template",children:`<Flicking${g&&` class="${g}"`}${e?` :options="{ ${f} }"`:""}${t?' :plugins="plugins"':""}${S}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${c(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n  ")}${x}
</Flicking>${d?`
${d.map(e=>`<${e.tag}${c(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,n.jsx)(r.A,{className:"language-js",title:"script",children:`${p(j,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${v}${$}
}`})]})},h=({js:e,react:i,vue3:l,style:d,...c})=>(0,n.jsxs)("div",{children:[(0,n.jsxs)(t.A,{groupId:"cfc",defaultValue:"js",children:[(0,n.jsx)(s.A,{value:"react",label:"React",children:i||(0,n.jsx)(g,{...c})}),(0,n.jsx)(s.A,{value:"vue3",label:"Vue@3",children:l||(0,n.jsx)(f,{...c})}),(0,n.jsx)(s.A,{value:"js",label:"JavaScript",children:e||(0,n.jsx)(m,{...c})})]}),d&&(0,n.jsx)(r.A,{className:"language-css",title:"style",children:`${d}`})]})}}]);