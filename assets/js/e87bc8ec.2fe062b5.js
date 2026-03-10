"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["7207"],{82165(e,n,i){i.r(n),i.d(n,{metadata:()=>s,default:()=>b,frontMatter:()=>o,contentTitle:()=>p,toc:()=>v,assets:()=>h});var s=JSON.parse('{"id":"demos/advanced/observe-panel-resize","title":"Observe Panel Resize","description":"observePanelResize \uC635\uC158\uC73C\uB85C \uD328\uB110 \uC694\uC18C\uC758 \uD06C\uAE30 \uBCC0\uACBD\uC744 \uC790\uB3D9\uC73C\uB85C \uAC10\uC9C0\uD574 \uB808\uC774\uC544\uC6C3\uC744 \uC7AC\uACC4\uC0B0\uD569\uB2C8\uB2E4","source":"@site/docs/demos/advanced/observe-panel-resize.mdx","sourceDirName":"demos/advanced","slug":"/demos/advanced/observe-panel-resize","permalink":"/flicking-docs-test/docs/demos/advanced/observe-panel-resize","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/advanced/observe-panel-resize.mdx","tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"title":"Observe Panel Resize","id":"observe-panel-resize","slug":"/demos/advanced/observe-panel-resize","sidebar_position":18,"description":"observePanelResize \uC635\uC158\uC73C\uB85C \uD328\uB110 \uC694\uC18C\uC758 \uD06C\uAE30 \uBCC0\uACBD\uC744 \uC790\uB3D9\uC73C\uB85C \uAC10\uC9C0\uD574 \uB808\uC774\uC544\uC6C3\uC744 \uC7AC\uACC4\uC0B0\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","observePanelResize","ResizeObserver","resize","\uD328\uB110 \uB9AC\uC0AC\uC774\uC988","\uB3D9\uC801 \uD06C\uAE30"]},"sidebar":"demosSidebar","previous":{"title":"CSS Order","permalink":"/flicking-docs-test/docs/demos/advanced/use-css-order"},"next":{"title":"Fade","permalink":"/flicking-docs-test/docs/demos/plugins/fade"}}'),l=i(65723),t=i(54187),a=i(27449),r=i(72722);i(22155);let c=`
.flicking-panel {
  height: 120px;
  transition: width 0.3s;
}
.panel-1 { background: #3e8ed0; }
.panel-2 { background: #00d1b2; }
.panel-3 { background: #f14668; }
.panel-4 { background: #ffe08a; color: #333; }
.panel-5 { background: #48c78e; }

.panel-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 8px;
}
.panel-inner button {
  padding: 4px 10px;
  font-size: 12px;
  cursor: pointer;
  background: rgba(255,255,255,0.3);
  border: 1px solid rgba(255,255,255,0.6);
  color: inherit;
  border-radius: 4px;
}
.demo-container {
  margin-bottom: 24px;
}
.demo-label {
  font-weight: bold;
  margin-bottom: 8px;
  color: #666;
}
.demo-hint {
  margin-top: 6px;
  font-size: 13px;
  color: #888;
}
`,d=()=>{let e=`import { useRef } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "./styles.css";

function setupButtons(flicking) {
  flicking.panels.forEach(panel => {
    const btn = panel.element.querySelector(".expand-btn");
    if (!btn) return;
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const isWide = panel.element.style.width === "70%";
      panel.element.style.width = isWide ? "40%" : "70%";
      btn.textContent = isWide ? "\u{B113}\u{D788}\u{AE30}" : "\u{C904}\u{C774}\u{AE30}";
    });
  });
}

function FlickingDemo({ label, observePanelResize, hint }) {
  const ref = useRef(null);
  return (
    <div className="demo-container">
      <div className="demo-label">{label}</div>
      <Flicking
        ref={ref}
        align="center"
        observePanelResize={observePanelResize}
        onReady={() => setupButtons(ref.current)}
      >
        <div className="flicking-panel panel-1" style={{ width: "40%" }}><div className="panel-inner"><span>Panel 1</span><button className="expand-btn">\u{B113}\u{D788}\u{AE30}</button></div></div>
        <div className="flicking-panel panel-2" style={{ width: "40%" }}><div className="panel-inner"><span>Panel 2</span><button className="expand-btn">\u{B113}\u{D788}\u{AE30}</button></div></div>
        <div className="flicking-panel panel-3" style={{ width: "40%" }}><div className="panel-inner"><span>Panel 3</span><button className="expand-btn">\u{B113}\u{D788}\u{AE30}</button></div></div>
        <div className="flicking-panel panel-4" style={{ width: "40%" }}><div className="panel-inner"><span>Panel 4</span><button className="expand-btn">\u{B113}\u{D788}\u{AE30}</button></div></div>
        <div className="flicking-panel panel-5" style={{ width: "40%" }}><div className="panel-inner"><span>Panel 5</span><button className="expand-btn">\u{B113}\u{D788}\u{AE30}</button></div></div>
      </Flicking>
      <div className="demo-hint">{hint}</div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <FlickingDemo
        label="observePanelResize: false (\u{AE30}\u{BCF8}\u{AC12})"
        observePanelResize={false}
        hint="\u{D328}\u{B110}\u{C744} \u{B113}\u{D600}\u{B3C4} Flicking\u{C774} \u{AC10}\u{C9C0}\u{D558}\u{C9C0} \u{BABB}\u{D574} alignment\u{AC00} \u{C5B4}\u{AE0B}\u{B0A9}\u{B2C8}\u{B2E4}"
      />
      <FlickingDemo
        label="observePanelResize: true"
        observePanelResize={true}
        hint="\u{D328}\u{B110}\u{C744} \u{B113}\u{D788}\u{BA74} Flicking\u{C774} \u{C790}\u{B3D9}\u{C73C}\u{B85C} \u{B808}\u{C774}\u{C544}\u{C6C3}\u{C744} \u{C7AC}\u{ACC4}\u{C0B0}\u{D569}\u{B2C8}\u{B2E4}"
      />
    </div>
  );
}`,n=(0,l.jsx)(a.A,{template:"react",code:e,css:c}),i=`<template>
  <div>
    <!-- observePanelResize: false (\u{AE30}\u{BCF8}\u{AC12}) -->
    <div class="demo-container">
      <div class="demo-label">observePanelResize: false (\u{AE30}\u{BCF8}\u{AC12})</div>
      <Flicking :options="{ align: 'center', observePanelResize: false }">
        <div
          v-for="(panel, i) in panels"
          :key="i"
          class="flicking-panel"
          :class="panel.bg"
          :style="{ width: panel.wide ? '70%' : '40%' }"
        >
          <div class="panel-inner">
            <span>Panel {{ i + 1 }}</span>
            <button @click.stop="panel.wide = !panel.wide">
              {{ panel.wide ? '\u{C904}\u{C774}\u{AE30}' : '\u{B113}\u{D788}\u{AE30}' }}
            </button>
          </div>
        </div>
      </Flicking>
      <div class="demo-hint">\u{D328}\u{B110}\u{C744} \u{B113}\u{D600}\u{B3C4} Flicking\u{C774} \u{AC10}\u{C9C0}\u{D558}\u{C9C0} \u{BABB}\u{D574} alignment\u{AC00} \u{C5B4}\u{AE0B}\u{B0A9}\u{B2C8}\u{B2E4}</div>
    </div>

    <!-- observePanelResize: true -->
    <div class="demo-container">
      <div class="demo-label">observePanelResize: true</div>
      <Flicking :options="{ align: 'center', observePanelResize: true }">
        <div
          v-for="(panel, i) in panels2"
          :key="i"
          class="flicking-panel"
          :class="panel.bg"
          :style="{ width: panel.wide ? '70%' : '40%' }"
        >
          <div class="panel-inner">
            <span>Panel {{ i + 1 }}</span>
            <button @click.stop="panel.wide = !panel.wide">
              {{ panel.wide ? '\u{C904}\u{C774}\u{AE30}' : '\u{B113}\u{D788}\u{AE30}' }}
            </button>
          </div>
        </div>
      </Flicking>
      <div class="demo-hint">\u{D328}\u{B110}\u{C744} \u{B113}\u{D788}\u{BA74} Flicking\u{C774} \u{C790}\u{B3D9}\u{C73C}\u{B85C} \u{B808}\u{C774}\u{C544}\u{C6C3}\u{C744} \u{C7AC}\u{ACC4}\u{C0B0}\u{D569}\u{B2C8}\u{B2E4}</div>
    </div>
  </div>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";

const bgs = ["panel-1", "panel-2", "panel-3", "panel-4", "panel-5"];
const makePanels = () => bgs.map(bg => ({ bg, wide: false }));

export default {
  components: { Flicking },
  data() {
    return {
      panels: makePanels(),
      panels2: makePanels()
    };
  }
};
</script>

<style>
.flicking-panel {
  height: 120px;
  border-radius: 8px;
  margin-right: 10px;
  transition: width 0.3s;
  font-size: 18px;
  font-weight: bold;
  color: white;
}
.panel-1 { background: #3e8ed0; }
.panel-2 { background: #00d1b2; }
.panel-3 { background: #f14668; }
.panel-4 { background: #ffe08a; color: #333; }
.panel-5 { background: #48c78e; }
.panel-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 8px;
}
.panel-inner button {
  padding: 4px 10px;
  font-size: 12px;
  cursor: pointer;
  background: rgba(255,255,255,0.3);
  border: 1px solid rgba(255,255,255,0.6);
  color: inherit;
  border-radius: 4px;
}
.demo-container { margin-bottom: 24px; }
.demo-label { font-weight: bold; margin-bottom: 8px; color: #666; }
.demo-hint { margin-top: 6px; font-size: 13px; color: #888; }
</style>`,s=(0,l.jsx)(a.A,{template:"vue3",code:i,css:c}),t=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

// observePanelResize: false (\u{AE30}\u{BCF8}\u{AC12})
const flick1 = new Flicking("#flick-default", {
  align: "center",
  observePanelResize: false
});

// observePanelResize: true
const flick2 = new Flicking("#flick-observe", {
  align: "center",
  observePanelResize: true
});

// \u{BC84}\u{D2BC} \u{D074}\u{B9AD} \u{C2DC} \u{D574}\u{B2F9} \u{D328}\u{B110} \u{B108}\u{BE44} \u{D1A0}\u{AE00}
document.querySelectorAll(".expand-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.stopPropagation();
    const panel = btn.closest(".flicking-panel");
    const isWide = panel.style.width === "70%";
    panel.style.width = isWide ? "40%" : "70%";
    btn.textContent = isWide ? "\u{B113}\u{D788}\u{AE30}" : "\u{C904}\u{C774}\u{AE30}";
  });
});`,d=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <!-- observePanelResize: false (\u{AE30}\u{BCF8}\u{AC12}) -->
  <div class="demo-container">
    <div class="demo-label">observePanelResize: false (\u{AE30}\u{BCF8}\u{AC12})</div>
    <div id="flick-default" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1" style="width:40%">
          <div class="panel-inner"><span>Panel 1</span><button class="expand-btn">\u{B113}\u{D788}\u{AE30}</button></div>
        </div>
        <div class="flicking-panel panel-2" style="width:40%">
          <div class="panel-inner"><span>Panel 2</span><button class="expand-btn">\u{B113}\u{D788}\u{AE30}</button></div>
        </div>
        <div class="flicking-panel panel-3" style="width:40%">
          <div class="panel-inner"><span>Panel 3</span><button class="expand-btn">\u{B113}\u{D788}\u{AE30}</button></div>
        </div>
        <div class="flicking-panel panel-4" style="width:40%">
          <div class="panel-inner"><span>Panel 4</span><button class="expand-btn">\u{B113}\u{D788}\u{AE30}</button></div>
        </div>
        <div class="flicking-panel panel-5" style="width:40%">
          <div class="panel-inner"><span>Panel 5</span><button class="expand-btn">\u{B113}\u{D788}\u{AE30}</button></div>
        </div>
      </div>
    </div>
    <div class="demo-hint">\u{D328}\u{B110}\u{C744} \u{B113}\u{D600}\u{B3C4} Flicking\u{C774} \u{AC10}\u{C9C0}\u{D558}\u{C9C0} \u{BABB}\u{D574} alignment\u{AC00} \u{C5B4}\u{AE0B}\u{B0A9}\u{B2C8}\u{B2E4}</div>
  </div>

  <!-- observePanelResize: true -->
  <div class="demo-container">
    <div class="demo-label">observePanelResize: true</div>
    <div id="flick-observe" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel panel-1" style="width:40%">
          <div class="panel-inner"><span>Panel 1</span><button class="expand-btn">\u{B113}\u{D788}\u{AE30}</button></div>
        </div>
        <div class="flicking-panel panel-2" style="width:40%">
          <div class="panel-inner"><span>Panel 2</span><button class="expand-btn">\u{B113}\u{D788}\u{AE30}</button></div>
        </div>
        <div class="flicking-panel panel-3" style="width:40%">
          <div class="panel-inner"><span>Panel 3</span><button class="expand-btn">\u{B113}\u{D788}\u{AE30}</button></div>
        </div>
        <div class="flicking-panel panel-4" style="width:40%">
          <div class="panel-inner"><span>Panel 4</span><button class="expand-btn">\u{B113}\u{D788}\u{AE30}</button></div>
        </div>
        <div class="flicking-panel panel-5" style="width:40%">
          <div class="panel-inner"><span>Panel 5</span><button class="expand-btn">\u{B113}\u{D788}\u{AE30}</button></div>
        </div>
      </div>
    </div>
    <div class="demo-hint">\u{D328}\u{B110}\u{C744} \u{B113}\u{D788}\u{BA74} Flicking\u{C774} \u{C790}\u{B3D9}\u{C73C}\u{B85C} \u{B808}\u{C774}\u{C544}\u{C6C3}\u{C744} \u{C7AC}\u{ACC4}\u{C0B0}\u{D569}\u{B2C8}\u{B2E4}</div>
  </div>

</body>
</html>`,o=(0,l.jsx)(a.A,{template:"vanilla",code:t,html:d,css:c});return(0,l.jsx)(r.A,{options:{},panels:[],react:n,vue3:s,js:o})},o={title:"Observe Panel Resize",id:"observe-panel-resize",slug:"/demos/advanced/observe-panel-resize",sidebar_position:18,description:"observePanelResize \uC635\uC158\uC73C\uB85C \uD328\uB110 \uC694\uC18C\uC758 \uD06C\uAE30 \uBCC0\uACBD\uC744 \uC790\uB3D9\uC73C\uB85C \uAC10\uC9C0\uD574 \uB808\uC774\uC544\uC6C3\uC744 \uC7AC\uACC4\uC0B0\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","observePanelResize","ResizeObserver","resize","\uD328\uB110 \uB9AC\uC0AC\uC774\uC988","\uB3D9\uC801 \uD06C\uAE30"]},p="Observe Panel Resize",h={},v=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uC758\uC874 \uC635\uC158",id:"\uC758\uC874-\uC635\uC158",level:3},{value:"\uAC12\uBCC4 \uBE44\uAD50",id:"\uAC12\uBCC4-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"observePanelResize \uB3D9\uC791 \uC6D0\uB9AC",id:"observepanelresize-\uB3D9\uC791-\uC6D0\uB9AC",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function g(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"observe-panel-resize",children:"Observe Panel Resize"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"../../api/interfaces/FlickingOptions#observepanelresize",children:(0,l.jsx)(n.code,{children:"observePanelResize"})})," \uC635\uC158\uC73C\uB85C \uAC01 \uD328\uB110 \uC694\uC18C\uC5D0 ",(0,l.jsx)(n.code,{children:"ResizeObserver"}),"\uB97C \uC5F0\uACB0\uD574, \uD328\uB110 \uD06C\uAE30\uAC00 \uBCC0\uACBD\uB420 \uB54C Flicking\uC774 \uC790\uB3D9\uC73C\uB85C \uB808\uC774\uC544\uC6C3\uC744 \uC7AC\uACC4\uC0B0\uD558\uB3C4\uB85D \uD569\uB2C8\uB2E4."]}),"\n",(0,l.jsx)(n.p,{children:'\uD328\uB110 \uC548\uC758 "\uB113\uD788\uAE30" \uBC84\uD2BC\uC744 \uB20C\uB7EC \uB450 \uCE90\uB7EC\uC140\uC758 \uCC28\uC774\uB97C \uD655\uC778\uD558\uC138\uC694.'}),"\n",(0,l.jsx)(d,{}),"\n",(0,l.jsx)(n.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,l.jsx)(n.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\uC635\uC158"}),(0,l.jsx)(n.th,{children:"\uD0C0\uC785"}),(0,l.jsx)(n.th,{children:"\uAE30\uBCF8\uAC12"}),(0,l.jsx)(n.th,{children:"\uC124\uBA85"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../api/interfaces/FlickingOptions#observepanelresize",children:(0,l.jsx)(n.code,{children:"observePanelResize"})})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"boolean"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"false"})}),(0,l.jsx)(n.td,{children:"\uD328\uB110 \uC694\uC18C\uC758 \uD06C\uAE30 \uBCC0\uACBD\uC744 ResizeObserver\uB85C \uAC10\uC9C0"})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"\uC758\uC874-\uC635\uC158",children:"\uC758\uC874 \uC635\uC158"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"observePanelResize"}),"\uB294 ",(0,l.jsx)(n.a,{href:"../../api/interfaces/FlickingOptions#useresizeobserver",children:(0,l.jsx)(n.code,{children:"useResizeObserver"})}),"\uAC00 ",(0,l.jsx)(n.code,{children:"true"}),"\uC77C \uB54C\uB9CC \uB3D9\uC791\uD569\uB2C8\uB2E4. ",(0,l.jsx)(n.code,{children:"useResizeObserver"}),"\uC758 \uAE30\uBCF8\uAC12\uC774 ",(0,l.jsx)(n.code,{children:"true"}),"\uC774\uBBC0\uB85C \uBCC4\uB3C4 \uC124\uC815 \uC5C6\uC774 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n",(0,l.jsx)(n.h3,{id:"\uAC12\uBCC4-\uBE44\uAD50",children:"\uAC12\uBCC4 \uBE44\uAD50"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\uAC12"}),(0,l.jsx)(n.th,{children:"\uB3D9\uC791"}),(0,l.jsx)(n.th,{children:"\uC801\uD569\uD55C \uC0C1\uD669"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"false"})}),(0,l.jsx)(n.td,{children:"\uBDF0\uD3EC\uD2B8 \uD06C\uAE30 \uBCC0\uACBD\uB9CC \uAC10\uC9C0 (\uAE30\uBCF8\uAC12)"}),(0,l.jsx)(n.td,{children:"\uD328\uB110 \uD06C\uAE30\uAC00 \uACE0\uC815\uB41C \uC77C\uBC18 \uCE90\uB7EC\uC140"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"true"})}),(0,l.jsx)(n.td,{children:"\uD328\uB110\uBCC4 \uD06C\uAE30 \uBCC0\uACBD\uB3C4 \uAC10\uC9C0, \uC790\uB3D9 \uC7AC\uACC4\uC0B0"}),(0,l.jsx)(n.td,{children:"\uB3D9\uC801 \uCF58\uD150\uCE20, \uC774\uBBF8\uC9C0 \uB85C\uB4DC, \uC544\uCF54\uB514\uC5B8 \uD328\uB110"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,l.jsx)(n.h3,{id:"observepanelresize-\uB3D9\uC791-\uC6D0\uB9AC",children:"observePanelResize \uB3D9\uC791 \uC6D0\uB9AC"}),"\n",(0,l.jsxs)(n.p,{children:["\uAE30\uBCF8\uC801\uC73C\uB85C Flicking\uC758 ",(0,l.jsx)(n.code,{children:"autoResize"}),"\uB294 ",(0,l.jsx)(n.strong,{children:"\uBDF0\uD3EC\uD2B8(\uCEE8\uD14C\uC774\uB108) \uC694\uC18C"}),"\uC758 \uD06C\uAE30 \uBCC0\uACBD\uB9CC \uAC10\uC9C0\uD569\uB2C8\uB2E4. \uD328\uB110 \uB0B4\uBD80 \uCF58\uD150\uCE20\uAC00 \uBC14\uB00C\uC5B4 \uD328\uB110 \uC790\uCCB4\uC758 \uD06C\uAE30\uAC00 \uB2EC\uB77C\uC9C0\uB354\uB77C\uB3C4 Flicking\uC740 \uC774\uB97C \uC54C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"observePanelResize: true"}),"\uB85C \uC124\uC815\uD558\uBA74 \uAC01 \uD328\uB110 \uC694\uC18C\uC5D0\uB3C4 ",(0,l.jsx)(n.code,{children:"ResizeObserver"}),"\uAC00 \uC5F0\uACB0\uB429\uB2C8\uB2E4. \uD328\uB110 \uD06C\uAE30\uAC00 \uBCC0\uACBD\uB418\uB294 \uC989\uC2DC ",(0,l.jsx)(n.code,{children:"beforeResize"})," / ",(0,l.jsx)(n.code,{children:"afterResize"})," \uC774\uBCA4\uD2B8\uAC00 \uBC1C\uC0DD\uD558\uACE0 \uB808\uC774\uC544\uC6C3\uC774 \uC7AC\uACC4\uC0B0\uB429\uB2C8\uB2E4."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'const flicking = new Flicking("#el", {\n  observePanelResize: true\n  // useResizeObserver: true (\uAE30\uBCF8\uAC12\uC774\uBBC0\uB85C \uC0DD\uB7B5 \uAC00\uB2A5)\n});\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,l.jsx)(n.admonition,{title:"\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\uC774\uBBF8\uC9C0\uAC00 \uD3EC\uD568\uB41C \uD328\uB110"}),": \uC774\uBBF8\uC9C0 \uB85C\uB4DC \uC644\uB8CC \uD6C4 \uC2E4\uC81C \uD06C\uAE30\uB85C \uD328\uB110\uC774 \uCEE4\uC9C8 \uB54C"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\uC544\uCF54\uB514\uC5B8/\uD1A0\uAE00 \uD328\uB110"}),": \uC0AC\uC6A9\uC790 \uC778\uD130\uB799\uC158\uC73C\uB85C \uD328\uB110 \uB192\uC774\uAC00 \uBCC0\uD560 \uB54C"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\uB3D9\uC801 \uCF58\uD150\uCE20"}),": API \uC751\uB2F5 \uD6C4 \uD328\uB110 \uB0B4 \uCF58\uD150\uCE20\uAC00 \uCD94\uAC00\uB418\uC5B4 \uD06C\uAE30\uAC00 \uBCC0\uD560 \uB54C"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsxs)(n.strong,{children:[(0,l.jsx)(n.code,{children:"adaptive: true"}),"\uC640 \uD568\uAED8"]}),": \uBDF0\uD3EC\uD2B8 \uB192\uC774\uAC00 \uD65C\uC131 \uD328\uB110 \uB192\uC774\uC5D0 \uB9DE\uCDB0 \uBC14\uB00C\uB294 \uCE90\uB7EC\uC140\uC5D0\uC11C \uD328\uB110 \uB0B4\uC6A9\uC774 \uB3D9\uC801\uC73C\uB85C \uBCC0\uD560 \uB54C"]}),"\n"]})}),"\n",(0,l.jsx)(n.admonition,{title:"\uC131\uB2A5 \uACE0\uB824",type:"warning",children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"observePanelResize: true"}),"\uB294 \uBAA8\uB4E0 \uD328\uB110\uC5D0 ResizeObserver\uB97C \uC5F0\uACB0\uD558\uBBC0\uB85C, \uD328\uB110 \uC218\uAC00 \uB9CE\uC744 \uB54C \uC57D\uAC04\uC758 \uC624\uBC84\uD5E4\uB4DC\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD328\uB110 \uD06C\uAE30\uAC00 \uACE0\uC815\uB41C \uC77C\uBC18 \uCE90\uB7EC\uC140\uC5D0\uC11C\uB294 \uAE30\uBCF8\uAC12(",(0,l.jsx)(n.code,{children:"false"}),")\uC744 \uC720\uC9C0\uD558\uC138\uC694."]})}),"\n",(0,l.jsx)(n.admonition,{title:"resizeOnContentsReady\uC640\uC758 \uCC28\uC774",type:"warning",children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"../../api/interfaces/FlickingOptions#resizeoncontentsready",children:(0,l.jsx)(n.code,{children:"resizeOnContentsReady"})}),"\uB294 \uCD08\uAE30\uD654 \uC2DC \uC774\uBBF8\uC9C0/\uBBF8\uB514\uC5B4 \uB85C\uB4DC \uC644\uB8CC\uB97C \uD55C \uBC88 \uAE30\uB2E4\uB9AC\uB294 \uC635\uC158\uC785\uB2C8\uB2E4. ",(0,l.jsx)(n.code,{children:"observePanelResize"}),"\uB294 \uCD08\uAE30\uD654 \uC774\uD6C4\uC5D0\uB3C4 \uC9C0\uC18D\uC801\uC73C\uB85C \uD328\uB110 \uD06C\uAE30\uB97C \uAD00\uCC30\uD569\uB2C8\uB2E4. \uC6A9\uB3C4\uAC00 \uB2E4\uB974\uBBC0\uB85C \uC0C1\uD669\uC5D0 \uB9DE\uAC8C \uC120\uD0DD\uD558\uC138\uC694."]})}),"\n",(0,l.jsx)(n.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,l.jsx)(n.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../../api/interfaces/FlickingOptions#useresizeobserver",children:(0,l.jsx)(n.code,{children:"useResizeObserver"})}),": ResizeObserver \uC0AC\uC6A9 \uC5EC\uBD80 (\uC758\uC874 \uC635\uC158)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../../api/interfaces/FlickingOptions#autoresize",children:(0,l.jsx)(n.code,{children:"autoResize"})}),": \uBDF0\uD3EC\uD2B8 \uD06C\uAE30 \uBCC0\uACBD \uC2DC \uC790\uB3D9 \uC7AC\uACC4\uC0B0"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../../api/interfaces/FlickingOptions#resizeoncontentsready",children:(0,l.jsx)(n.code,{children:"resizeOnContentsReady"})}),": \uCD08\uAE30 \uCF58\uD150\uCE20 \uB85C\uB4DC \uC644\uB8CC \uD6C4 \uB9AC\uC0AC\uC774\uC988"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../../api/interfaces/FlickingOptions#adaptive",children:(0,l.jsx)(n.code,{children:"adaptive"})}),": \uBDF0\uD3EC\uD2B8 \uB192\uC774 \uC790\uB3D9 \uC870\uC808"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../basic/adaptive",children:"Adaptive"}),": \uBDF0\uD3EC\uD2B8 \uB192\uC774 \uC790\uB3D9 \uC870\uC808"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"./resize-optimization",children:"Resize Optimization"}),": \uB9AC\uC0AC\uC774\uC988 \uC131\uB2A5 \uCD5C\uC801\uD654"]}),"\n"]})]})}function b(e={}){let{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(g,{...e})}):g(e)}},27449(e,n,i){i.d(n,{A:()=>o});var s=i(65723),l=i(19612);i(22155);let t="^4.11.4",a={react:{"@egjs/react-flicking":t,"@egjs/flicking":t},vue3:{"@egjs/vue3-flicking":t,"@egjs/flicking":t},vanilla:{"@egjs/flicking":t}},r=`<!DOCTYPE html>
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
`;function o({code:e,html:n,template:i="react",dependencies:t={},files:o={},css:p=""}){var h;let v,g,b;return(0,s.jsx)(l.OZ,{template:"vue3"===i?"vue":"vanilla"===i?"vanilla":"react",files:(b={"/styles.css":{code:g=p?`${d}
${p}`:d},...o},"react"===i?{"/App.tsx":{code:e},"/index.js":{code:c,hidden:!0},...b}:"vue3"===i?{"/src/App.vue":{code:e},...b}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let n=e.split("\n"),i=[],s=[],l=!1;for(let e of n)l?s.push(e):e.trimStart().startsWith("import ")||""===e.trim()?i.push(e.replace('"../styles.css"','"./styles.css"')):(l=!0,s.push(e));for(;s.length>0&&""===s[s.length-1].trim();)s.pop();return[...i,"","const _run = () => {",...s.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:g},"/index.html":{code:(v="<style>.flicking-viewport{opacity:0}</style>",(h=n||r).includes("</head>")?h.replace("</head>",`${v}
</head>`):v+h)},...o}),customSetup:{dependencies:{...a[i],...t}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===i?["/App.tsx","/styles.css"]:"vue3"===i?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===i?"/App.tsx":"vue3"===i?"/src/App.vue":"/src/index.js"}})}},72722(e,n,i){i.d(n,{A:()=>u});var s=i(65723),l=i(34622),t=i(7210),a=i(78863);i(22155);let r=(e,n='"')=>"string"==typeof e?`${n}${e}${n}`:e,c=(e,n="class")=>e.class?` ${n}="${e.class}"`:"",d=(e,n=!1)=>e.style?n?` style={{ ${Object.keys(e.style).map(n=>`${n}: ${r(e.style[n])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(n=>`${n}: ${e.style[n]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(n=>`${n}: ${r(e[n],"'")}`).join(", ")}`,p=(e,{prefix:n,includeFlicking:i=!0}={})=>{let s=i?[["Flicking",`@egjs/${n?`${n}-`:""}flicking`]]:[];return e&&s.push(...e),`${s.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},h=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,v=({options:e,panels:n,events:i={},methods:t={},plugins:a=[],siblings:o=[],imports:h=[],viewportClass:v=""})=>{let g=e=>`${Object.keys(e).map(n=>`${n}: ${r(e[n])}`).join(",\n  ")}`,b=Object.keys(t).map(e=>`const ${e} = ${t[e]};
`).join(""),u=e?`const flicking = new Flicking("#flick", {
  ${g(e)}
});

`:'const flicking = new Flicking("#flick")',x=a.length>0?`flicking.addPlugins(${a.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?g(e[1]):e[1]??""}
}`:""})`)});`:"",m=[...a.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...h],j=Object.keys(i).map(e=>{let n=i[e];return`flicking.on("${e}", ${n})
`}).join(""),f=n.filter(e=>e.isSlot);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${v&&` ${v}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${n.filter(e=>!e.isSlot).map(e=>`<${e.tag}${c(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${f.length?`
  ${f.map(e=>`<${e.tag}${c(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${c(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,s.jsx)(l.A,{className:"language-js",title:"js",children:`${p(m)}

${b}${u}${x}${j}`.trim()})]})},g=({options:e,panels:n,events:i={},methods:t={},plugins:a,siblings:r,imports:o=[],viewportClass:v=""})=>{let g=a?`
  private _plugins = [${h(a)}];
`:"",b=n.filter(e=>e.isSlot),u=[["{ Component }","react"],[b.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],x=Object.keys(t).map(e=>`
const ${e} = ${t[e]};`).join("");x&&(x+="\n"),a&&u.push([`{ ${a.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),u.push(...o);let m=b.length?`
      <ViewportSlot>
        ${b.map(e=>`<${e.tag}${c(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",j=Object.keys(i).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${i[e]}}`).join("");return(0,s.jsx)(l.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(u,{includeFlicking:!1})}
${x}
export default class DemoComponent extends Component {${g}
  public render() {
    return ${r?"<>\n    ":""}<Flicking${v&&` className="${v}"`}${e?` ${Object.keys(e).map(n=>`${n}=${"string"==typeof e[n]?`"${e[n]}"`:`{${e[n]}}`}`).join(" ")}`:""}${a?" plugins={this._plugins}":""}${j}>
      ${n.filter(e=>!e.isSlot).map(e=>`<${e.tag}${c(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${m}
    </Flicking>${r?`
    ${r.map(e=>`<${e.tag}${c(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},b=({options:e,panels:n,events:i={},methods:t={},plugins:a,siblings:r=[],imports:v=[],viewportClass:g=""})=>{let b=o(e),u=n.filter(e=>e.isSlot),x=a?`,
  data() {
    return {
      plugins: [${h(a)}]
    }
  }`:"",m=u.length?`
  <template #viewport>
    ${u.map(e=>`<${e.tag}${c(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",j=[...(a??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...v],f=Object.keys(t),k=f.length>0?`,
  methods: {
    ${f.map(e=>`${e}: ${t[e].split("\n").map((e,n)=>n>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",$=Object.keys(i).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${i[e]}"`).join("");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.A,{className:"language-html",title:"template",children:`<Flicking${g&&` class="${g}"`}${e?` :options="{ ${b} }"`:""}${a?' :plugins="plugins"':""}${$}>
  ${n.filter(e=>!e.isSlot).map(e=>`<${e.tag}${c(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}${m}
</Flicking>${r?`
${r.map(e=>`<${e.tag}${c(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,s.jsx)(l.A,{className:"language-js",title:"script",children:`${p(j,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${x}${k}
}`})]})},u=({js:e,react:n,vue3:i,style:r,...c})=>(0,s.jsxs)("div",{children:[(0,s.jsxs)(a.A,{groupId:"cfc",defaultValue:"js",children:[(0,s.jsx)(t.A,{value:"react",label:"React",children:n||(0,s.jsx)(g,{...c})}),(0,s.jsx)(t.A,{value:"vue3",label:"Vue@3",children:i||(0,s.jsx)(b,{...c})}),(0,s.jsx)(t.A,{value:"js",label:"JavaScript",children:e||(0,s.jsx)(v,{...c})})]}),r&&(0,s.jsx)(l.A,{className:"language-css",title:"style",children:`${r}`})]})}}]);