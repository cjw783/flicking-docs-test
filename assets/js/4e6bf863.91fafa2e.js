"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["5918"],{88996(e,n,i){i.r(n),i.d(n,{metadata:()=>l,default:()=>f,frontMatter:()=>o,contentTitle:()=>p,toc:()=>g,assets:()=>h});var l=JSON.parse('{"id":"demos/advanced/infinite-scroll","title":"Infinite Scroll","description":"needPanelThreshold \uC635\uC158\uACFC needPanel \uC774\uBCA4\uD2B8\uB85C \uBB34\uD55C \uC2A4\uD06C\uB864\uC744 \uAD6C\uD604\uD569\uB2C8\uB2E4","source":"@site/docs/demos/advanced/infinite-scroll.mdx","sourceDirName":"demos/advanced","slug":"/demos/advanced/infinite-scroll","permalink":"/flicking-docs-test/docs/demos/advanced/infinite-scroll","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/advanced/infinite-scroll.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Infinite Scroll","id":"infinite-scroll","slug":"/demos/advanced/infinite-scroll","sidebar_position":4,"description":"needPanelThreshold \uC635\uC158\uACFC needPanel \uC774\uBCA4\uD2B8\uB85C \uBB34\uD55C \uC2A4\uD06C\uB864\uC744 \uAD6C\uD604\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","infinite","scroll","needPanel","threshold","\uBB34\uD55C","\uC2A4\uD06C\uB864","\uB3D9\uC801"]},"sidebar":"demosSidebar","previous":{"title":"Fractional Size","permalink":"/flicking-docs-test/docs/demos/advanced/fractional-size"},"next":{"title":"Resize On Contents Ready","permalink":"/flicking-docs-test/docs/demos/advanced/resize-on-contents-ready"}}'),s=i(65723),t=i(54187),d=i(27449),c=i(72722);i(22155);let a=`
.flicking-panel {
  width: 200px;
  height: 120px;
  margin-right: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: white;
}

.demo-container {
  margin-bottom: 32px;
}
.demo-label {
  font-weight: bold;
  margin-bottom: 8px;
  color: #666;
}
.demo-info {
  font-size: 14px;
  color: #888;
  margin-bottom: 12px;
}
.panel-counter {
  margin-top: 8px;
  padding: 8px 12px;
  background: #f5f5f5;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
}
.panel-counter strong {
  color: #3e8ed0;
}
.event-log {
  margin-top: 8px;
  padding: 8px 12px;
  background: #e8f4f8;
  border-radius: 4px;
  font-size: 13px;
  color: #333;
  font-family: monospace;
  max-height: 80px;
  overflow-y: auto;
}
`,r=()=>{let e=`import { useRef, useState } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "./styles.css";

const COLORS = ["#3e8ed0", "#00d1b2", "#f14668", "#ffe08a", "#48c78e", "#9c27b0", "#ff5722"];

export default function App() {
  const flickingRef = useRef(null);
  const [panels, setPanels] = useState([0, 1, 2, 3, 4]);
  const [logs, setLogs] = useState([]);
  const nextId = useRef(5);

  const addLog = (message) => {
    setLogs(prev => [...prev.slice(-4), message]);
  };

  const handleNeedPanel = (e) => {
    const direction = e.direction;
    addLog(\`needPanel: direction=\${direction === 1 ? "NEXT" : "PREV"}\`);

    if (direction === 1) {
      // NEXT: \u{B4A4}\u{C5D0} \u{D328}\u{B110} \u{CD94}\u{AC00}
      const newPanels = [nextId.current, nextId.current + 1, nextId.current + 2];
      nextId.current += 3;
      setPanels(prev => [...prev, ...newPanels]);
      addLog(\`\u{CD94}\u{AC00}\u{B428}: Panel \${newPanels.join(", ")}\`);
    }
  };

  return (
    <div>
      <div className="demo-container">
        <div className="demo-label">needPanelThreshold: 100</div>
        <div className="demo-info">\u{B05D}\u{C5D0}\u{C11C} 100px \u{C804}\u{C5D0} needPanel \u{C774}\u{BCA4}\u{D2B8} \u{BC1C}\u{C0DD} \u{2192} \u{D328}\u{B110} \u{C790}\u{B3D9} \u{CD94}\u{AC00}</div>
        <Flicking
          ref={flickingRef}
          align="prev"
          needPanelThreshold={100}
          onNeedPanel={handleNeedPanel}
        >
          {panels.map((id) => (
            <div
              key={id}
              className="flicking-panel"
              style={{ background: COLORS[id % COLORS.length] }}
            >
              Panel {id + 1}
            </div>
          ))}
        </Flicking>
        <div className="panel-counter">
          \u{D604}\u{C7AC} \u{D328}\u{B110} \u{C218}: <strong>{panels.length}</strong>\u{AC1C} (\u{B05D}\u{AE4C}\u{C9C0} \u{C2A4}\u{D06C}\u{B864}\u{D558}\u{BA74} \u{C790}\u{B3D9} \u{CD94}\u{AC00})
        </div>
        <div className="event-log">
          {logs.length === 0 ? "\u{C774}\u{BCA4}\u{D2B8} \u{B85C}\u{ADF8}..." : logs.map((log, i) => <div key={i}>{log}</div>)}
        </div>
      </div>
    </div>
  );
}`,n=(0,s.jsx)(d.A,{template:"react",code:e,css:a}),i=`<template>
  <div>
    <div class="demo-container">
      <div class="demo-label">needPanelThreshold: 100</div>
      <div class="demo-info">\u{B05D}\u{C5D0}\u{C11C} 100px \u{C804}\u{C5D0} needPanel \u{C774}\u{BCA4}\u{D2B8} \u{BC1C}\u{C0DD} \u{2192} \u{D328}\u{B110} \u{C790}\u{B3D9} \u{CD94}\u{AC00}</div>
      <Flicking
        ref="flicking"
        align="prev"
        :needPanelThreshold="100"
        @needPanel="handleNeedPanel"
      >
        <div
          v-for="id in panels"
          :key="id"
          class="flicking-panel"
          :style="{ background: colors[id % colors.length] }"
        >
          Panel {{ id + 1 }}
        </div>
      </Flicking>
      <div class="panel-counter">
        \u{D604}\u{C7AC} \u{D328}\u{B110} \u{C218}: <strong>{{ panels.length }}</strong>\u{AC1C} (\u{B05D}\u{AE4C}\u{C9C0} \u{C2A4}\u{D06C}\u{B864}\u{D558}\u{BA74} \u{C790}\u{B3D9} \u{CD94}\u{AC00})
      </div>
      <div class="event-log">
        <div v-if="logs.length === 0">\u{C774}\u{BCA4}\u{D2B8} \u{B85C}\u{ADF8}...</div>
        <div v-for="(log, i) in logs" :key="i">{{ log }}</div>
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
    return {
      colors: ["#3e8ed0", "#00d1b2", "#f14668", "#ffe08a", "#48c78e", "#9c27b0", "#ff5722"],
      panels: [0, 1, 2, 3, 4],
      logs: [],
      nextId: 5
    };
  },
  methods: {
    addLog(message) {
      this.logs = [...this.logs.slice(-4), message];
    },
    handleNeedPanel(e) {
      const direction = e.direction;
      this.addLog(\`needPanel: direction=\${direction === 1 ? "NEXT" : "PREV"}\`);

      if (direction === 1) {
        // NEXT: \u{B4A4}\u{C5D0} \u{D328}\u{B110} \u{CD94}\u{AC00}
        const newPanels = [this.nextId, this.nextId + 1, this.nextId + 2];
        this.nextId += 3;
        this.panels = [...this.panels, ...newPanels];
        this.addLog(\`\u{CD94}\u{AC00}\u{B428}: Panel \${newPanels.map(p => p + 1).join(", ")}\`);
      }
    }
  }
};
</script>

<style>
.flicking-panel {
  width: 200px;
  height: 120px;
  margin-right: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: white;
}
.demo-container { margin-bottom: 32px; }
.demo-label { font-weight: bold; margin-bottom: 8px; color: #666; }
.demo-info { font-size: 14px; color: #888; margin-bottom: 12px; }
.panel-counter { margin-top: 8px; padding: 8px 12px; background: #f5f5f5; border-radius: 4px; font-size: 14px; color: #333; }
.panel-counter strong { color: #3e8ed0; }
.event-log { margin-top: 8px; padding: 8px 12px; background: #e8f4f8; border-radius: 4px; font-size: 13px; color: #333; font-family: monospace; max-height: 80px; overflow-y: auto; }
</style>`,l=(0,s.jsx)(d.A,{template:"vue3",code:i,css:a}),t=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

const COLORS = ["#3e8ed0", "#00d1b2", "#f14668", "#ffe08a", "#48c78e", "#9c27b0", "#ff5722"];
let nextId = 5;

const flicking = new Flicking("#flick", {
  align: "prev",
  needPanelThreshold: 100
});

function addLog(message) {
  const logEl = document.getElementById("event-log");
  const div = document.createElement("div");
  div.textContent = message;
  logEl.appendChild(div);
  // \u{CD5C}\u{ADFC} 5\u{AC1C}\u{B9CC} \u{C720}\u{C9C0}
  while (logEl.children.length > 5) {
    logEl.removeChild(logEl.firstChild);
  }
}

function updateCounter() {
  const count = flicking.panelCount;
  document.getElementById("panel-count").textContent = count;
}

flicking.on("needPanel", (e) => {
  const direction = e.direction;
  addLog(\`needPanel: direction=\${direction === 1 ? "NEXT" : "PREV"}\`);

  if (direction === 1) {
    // NEXT: \u{B4A4}\u{C5D0} \u{D328}\u{B110} \u{CD94}\u{AC00}
    const newPanels = [];
    for (let i = 0; i < 3; i++) {
      const panel = document.createElement("div");
      panel.className = "flicking-panel";
      panel.style.background = COLORS[nextId % COLORS.length];
      panel.textContent = \`Panel \${nextId + 1}\`;
      newPanels.push(panel);
      nextId++;
    }
    flicking.append(newPanels);
    addLog(\`\u{CD94}\u{AC00}\u{B428}: 3\u{AC1C} \u{D328}\u{B110}\`);
    updateCounter();
  }
});

flicking.on("ready", updateCounter);
`,r=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <div class="demo-container">
    <div class="demo-label">needPanelThreshold: 100</div>
    <div class="demo-info">\u{B05D}\u{C5D0}\u{C11C} 100px \u{C804}\u{C5D0} needPanel \u{C774}\u{BCA4}\u{D2B8} \u{BC1C}\u{C0DD} \u{2192} \u{D328}\u{B110} \u{C790}\u{B3D9} \u{CD94}\u{AC00}</div>
    <div id="flick" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel" style="background: #3e8ed0">Panel 1</div>
        <div class="flicking-panel" style="background: #00d1b2">Panel 2</div>
        <div class="flicking-panel" style="background: #f14668">Panel 3</div>
        <div class="flicking-panel" style="background: #ffe08a">Panel 4</div>
        <div class="flicking-panel" style="background: #48c78e">Panel 5</div>
      </div>
    </div>
    <div class="panel-counter">
      \u{D604}\u{C7AC} \u{D328}\u{B110} \u{C218}: <strong id="panel-count">5</strong>\u{AC1C} (\u{B05D}\u{AE4C}\u{C9C0} \u{C2A4}\u{D06C}\u{B864}\u{D558}\u{BA74} \u{C790}\u{B3D9} \u{CD94}\u{AC00})
    </div>
    <div id="event-log" class="event-log">
      \u{C774}\u{BCA4}\u{D2B8} \u{B85C}\u{ADF8}...
    </div>
  </div>

</body>
</html>`,o=(0,s.jsx)(d.A,{template:"vanilla",code:t,html:r,css:a});return(0,s.jsx)(c.A,{options:{},panels:[],react:n,vue3:l,js:o})},o={title:"Infinite Scroll",id:"infinite-scroll",slug:"/demos/advanced/infinite-scroll",sidebar_position:4,description:"needPanelThreshold \uC635\uC158\uACFC needPanel \uC774\uBCA4\uD2B8\uB85C \uBB34\uD55C \uC2A4\uD06C\uB864\uC744 \uAD6C\uD604\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","infinite","scroll","needPanel","threshold","\uBB34\uD55C","\uC2A4\uD06C\uB864","\uB3D9\uC801"]},p="Infinite Scroll",h={},g=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uC774\uBCA4\uD2B8",id:"\uAD00\uB828-\uC774\uBCA4\uD2B8",level:3},{value:"\uC784\uACC4\uAC12\uBCC4 \uBE44\uAD50",id:"\uC784\uACC4\uAC12\uBCC4-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"\uB3D9\uC791 \uC6D0\uB9AC",id:"\uB3D9\uC791-\uC6D0\uB9AC",level:3},{value:"needPanel \uC774\uBCA4\uD2B8",id:"needpanel-\uC774\uBCA4\uD2B8",level:3},{value:"Vanilla JS\uC5D0\uC11C \uD328\uB110 \uCD94\uAC00",id:"vanilla-js\uC5D0\uC11C-\uD328\uB110-\uCD94\uAC00",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC774\uBCA4\uD2B8",id:"\uAD00\uB828-\uC774\uBCA4\uD2B8-1",level:3},{value:"\uAD00\uB828 \uBA54\uC11C\uB4DC",id:"\uAD00\uB828-\uBA54\uC11C\uB4DC",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function x(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"infinite-scroll",children:"Infinite Scroll"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"../../api/interfaces/FlickingOptions#needpanelthreshold",children:(0,s.jsx)(n.code,{children:"needPanelThreshold"})})," \uC635\uC158\uACFC ",(0,s.jsx)(n.code,{children:"needPanel"})," \uC774\uBCA4\uD2B8\uB85C \uBB34\uD55C \uC2A4\uD06C\uB864\uC744 \uAD6C\uD604\uD569\uB2C8\uB2E4."]}),"\n",(0,s.jsx)(r,{}),"\n",(0,s.jsx)(n.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,s.jsx)(n.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\uC635\uC158"}),(0,s.jsx)(n.th,{children:"\uD0C0\uC785"}),(0,s.jsx)(n.th,{children:"\uAE30\uBCF8\uAC12"}),(0,s.jsx)(n.th,{children:"\uC124\uBA85"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../api/interfaces/FlickingOptions#needpanelthreshold",children:(0,s.jsx)(n.code,{children:"needPanelThreshold"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0"})}),(0,s.jsx)(n.td,{children:"needPanel \uC774\uBCA4\uD2B8 \uBC1C\uC0DD \uC784\uACC4\uAC12 (px)"})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"\uAD00\uB828-\uC774\uBCA4\uD2B8",children:"\uAD00\uB828 \uC774\uBCA4\uD2B8"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\uC774\uBCA4\uD2B8"}),(0,s.jsx)(n.th,{children:"\uC124\uBA85"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../api/interfaces/NeedPanelEvent",children:(0,s.jsx)(n.code,{children:"needPanel"})})}),(0,s.jsx)(n.td,{children:"\uBDF0\uD3EC\uD2B8 \uB05D\uC5D0 \uBE48 \uACF5\uAC04\uC774 \uBCF4\uC77C \uB54C \uBC1C\uC0DD"})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"\uC784\uACC4\uAC12\uBCC4-\uBE44\uAD50",children:"\uC784\uACC4\uAC12\uBCC4 \uBE44\uAD50"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"needPanelThreshold"}),(0,s.jsx)(n.th,{children:"\uB3D9\uC791"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"0"})," (\uAE30\uBCF8\uAC12)"]}),(0,s.jsx)(n.td,{children:"\uB05D\uC5D0 \uC644\uC804\uD788 \uB3C4\uB2EC\uD574\uC57C \uC774\uBCA4\uD2B8 \uBC1C\uC0DD"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"100"})}),(0,s.jsx)(n.td,{children:"\uB05D\uC5D0\uC11C 100px \uC804\uC5D0 \uC774\uBCA4\uD2B8 \uBC1C\uC0DD (\uD504\uB9AC\uB85C\uB529)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"200"})}),(0,s.jsx)(n.td,{children:"\uB05D\uC5D0\uC11C 200px \uC804\uC5D0 \uC774\uBCA4\uD2B8 \uBC1C\uC0DD"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,s.jsx)(n.h3,{id:"\uB3D9\uC791-\uC6D0\uB9AC",children:"\uB3D9\uC791 \uC6D0\uB9AC"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\uC2A4\uD06C\uB864\uD558\uC5EC \uBDF0\uD3EC\uD2B8 \uB05D\uC5D0 \uAC00\uAE4C\uC6CC\uC9D0"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"needPanelThreshold"})," \uAC70\uB9AC \uB0B4\uC5D0 \uB4E4\uC5B4\uC624\uBA74 ",(0,s.jsx)(n.code,{children:"needPanel"})," \uC774\uBCA4\uD2B8 \uBC1C\uC0DD"]}),"\n",(0,s.jsx)(n.li,{children:"\uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC\uC5D0\uC11C \uC0C8 \uD328\uB110 \uCD94\uAC00"}),"\n",(0,s.jsx)(n.li,{children:"\uACC4\uC18D \uC2A4\uD06C\uB864 \uAC00\uB2A5"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"<Flicking\n  needPanelThreshold={100}\n  onNeedPanel={(e) => {\n    if (e.direction === 1) { // NEXT\n      // \uB4A4\uC5D0 \uD328\uB110 \uCD94\uAC00\n      setPanels(prev => [...prev, newPanel]);\n    }\n  }}\n>\n  {panels.map(p => <Panel key={p.id} />)}\n</Flicking>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"needpanel-\uC774\uBCA4\uD2B8",children:"needPanel \uC774\uBCA4\uD2B8"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"interface NeedPanelEvent {\n  direction: number; // DIRECTION.PREV \uB610\uB294 DIRECTION.NEXT\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"direction"}),"\uC73C\uB85C \uC5B4\uB290 \uBC29\uD5A5\uC5D0 \uD328\uB110\uC774 \uD544\uC694\uD55C\uC9C0 \uD655\uC778"]}),"\n",(0,s.jsx)(n.li,{children:"PREV: \uC55E\uC5D0 \uD328\uB110 \uCD94\uAC00 \uD544\uC694 (prepend)"}),"\n",(0,s.jsx)(n.li,{children:"NEXT: \uB4A4\uC5D0 \uD328\uB110 \uCD94\uAC00 \uD544\uC694 (append)"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"vanilla-js\uC5D0\uC11C-\uD328\uB110-\uCD94\uAC00",children:"Vanilla JS\uC5D0\uC11C \uD328\uB110 \uCD94\uAC00"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'flicking.on("needPanel", (e) => {\n  if (e.direction === 1) { // NEXT\n    const newPanel = document.createElement("div");\n    newPanel.className = "flicking-panel";\n    newPanel.textContent = "New Panel";\n    flicking.append(newPanel);\n  }\n});\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,s.jsxs)(n.admonition,{title:"\uC5B8\uC81C needPanelThreshold\uB97C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\uC0AC\uC6A9 \uAD8C\uC7A5:"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\uBB34\uD55C \uC2A4\uD06C\uB864 \uAD6C\uD604"}),"\n",(0,s.jsx)(n.li,{children:"\uD398\uC774\uC9C0\uB124\uC774\uC158 (\uB05D\uC5D0 \uB3C4\uB2EC\uD558\uBA74 \uB2E4\uC74C \uD398\uC774\uC9C0 \uB85C\uB4DC)"}),"\n",(0,s.jsx)(n.li,{children:"\uB300\uB7C9 \uB370\uC774\uD130\uC758 \uC810\uC9C4\uC801 \uB85C\uB529"}),"\n"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\uC801\uC808\uD55C \uC784\uACC4\uAC12:"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"0"}),": \uB05D\uC5D0 \uC815\uD655\uD788 \uB3C4\uB2EC\uD574\uC57C \uD560 \uB54C"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"100~200"}),": \uC77C\uBC18\uC801\uC778 \uD504\uB9AC\uB85C\uB529"]}),"\n",(0,s.jsx)(n.li,{children:"\uBDF0\uD3EC\uD2B8 \uB108\uBE44 \uC774\uC0C1: \uB9E4\uC6B0 \uACF5\uACA9\uC801\uC778 \uD504\uB9AC\uB85C\uB529"}),"\n"]})]}),"\n",(0,s.jsx)(n.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,s.jsx)(n.admonition,{title:"\uC774\uBCA4\uD2B8 \uC911\uBCF5 \uBC1C\uC0DD",type:"warning",children:(0,s.jsx)(n.p,{children:"\uD328\uB110 \uCD94\uAC00 \uC911\uC5D0 needPanel \uC774\uBCA4\uD2B8\uAC00 \uB2E4\uC2DC \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB85C\uB529 \uC0C1\uD0DC\uB97C \uAD00\uB9AC\uD558\uC5EC \uC911\uBCF5 \uC694\uCCAD\uC744 \uBC29\uC9C0\uD558\uC138\uC694."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"const [isLoading, setIsLoading] = useState(false);\n\nconst handleNeedPanel = async (e) => {\n  if (isLoading) return; // \uC911\uBCF5 \uBC29\uC9C0\n  setIsLoading(true);\n\n  await loadMorePanels();\n\n  setIsLoading(false);\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,s.jsx)(n.h3,{id:"\uAD00\uB828-\uC774\uBCA4\uD2B8-1",children:"\uAD00\uB828 \uC774\uBCA4\uD2B8"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../../api/interfaces/NeedPanelEvent",children:(0,s.jsx)(n.code,{children:"needPanel"})}),": \uD328\uB110 \uCD94\uAC00 \uD544\uC694 \uC774\uBCA4\uD2B8"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\uAD00\uB828-\uBA54\uC11C\uB4DC",children:"\uAD00\uB828 \uBA54\uC11C\uB4DC"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../../api/classes/Flicking#append",children:(0,s.jsx)(n.code,{children:"append"})}),": \uD328\uB110 \uB4A4\uC5D0 \uCD94\uAC00"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../../api/classes/Flicking#prepend",children:(0,s.jsx)(n.code,{children:"prepend"})}),": \uD328\uB110 \uC55E\uC5D0 \uCD94\uAC00"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"./virtual-scroll",children:"Virtual Scroll"}),": \uB300\uB7C9 \uD328\uB110\uC758 \uAC00\uC0C1 \uB80C\uB354\uB9C1"]}),"\n"]})]})}function f(e={}){let{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},27449(e,n,i){i.d(n,{A:()=>o});var l=i(65723),s=i(19612);i(22155);let t="^4.11.4",d={react:{"@egjs/react-flicking":t,"@egjs/flicking":t},vue3:{"@egjs/vue3-flicking":t,"@egjs/flicking":t},vanilla:{"@egjs/flicking":t}},c=`<!DOCTYPE html>
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
`;function o({code:e,html:n,template:i="react",dependencies:t={},files:o={},css:p=""}){var h;let g,x,f;return(0,l.jsx)(s.OZ,{template:"vue3"===i?"vue":"vanilla"===i?"vanilla":"react",files:(f={"/styles.css":{code:x=p?`${r}
${p}`:r},...o},"react"===i?{"/App.tsx":{code:e},"/index.js":{code:a,hidden:!0},...f}:"vue3"===i?{"/src/App.vue":{code:e},...f}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let n=e.split("\n"),i=[],l=[],s=!1;for(let e of n)s?l.push(e):e.trimStart().startsWith("import ")||""===e.trim()?i.push(e.replace('"../styles.css"','"./styles.css"')):(s=!0,l.push(e));for(;l.length>0&&""===l[l.length-1].trim();)l.pop();return[...i,"","const _run = () => {",...l.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:x},"/index.html":{code:(g="<style>.flicking-viewport{opacity:0}</style>",(h=n||c).includes("</head>")?h.replace("</head>",`${g}
</head>`):g+h)},...o}),customSetup:{dependencies:{...d[i],...t}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===i?["/App.tsx","/styles.css"]:"vue3"===i?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===i?"/App.tsx":"vue3"===i?"/src/App.vue":"/src/index.js"}})}},72722(e,n,i){i.d(n,{A:()=>m});var l=i(65723),s=i(34622),t=i(7210),d=i(78863);i(22155);let c=(e,n='"')=>"string"==typeof e?`${n}${e}${n}`:e,a=(e,n="class")=>e.class?` ${n}="${e.class}"`:"",r=(e,n=!1)=>e.style?n?` style={{ ${Object.keys(e.style).map(n=>`${n}: ${c(e.style[n])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(n=>`${n}: ${e.style[n]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(n=>`${n}: ${c(e[n],"'")}`).join(", ")}`,p=(e,{prefix:n,includeFlicking:i=!0}={})=>{let l=i?[["Flicking",`@egjs/${n?`${n}-`:""}flicking`]]:[];return e&&l.push(...e),`${l.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},h=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,g=({options:e,panels:n,events:i={},methods:t={},plugins:d=[],siblings:o=[],imports:h=[],viewportClass:g=""})=>{let x=e=>`${Object.keys(e).map(n=>`${n}: ${c(e[n])}`).join(",\n  ")}`,f=Object.keys(t).map(e=>`const ${e} = ${t[e]};
`).join(""),m=e?`const flicking = new Flicking("#flick", {
  ${x(e)}
});

`:'const flicking = new Flicking("#flick")',j=d.length>0?`flicking.addPlugins(${d.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?x(e[1]):e[1]??""}
}`:""})`)});`:"",u=[...d.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...h],v=Object.keys(i).map(e=>{let n=i[e];return`flicking.on("${e}", ${n})
`}).join(""),$=n.filter(e=>e.isSlot);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${g&&` ${g}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${n.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${$.length?`
  ${$.map(e=>`<${e.tag}${a(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${a(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,l.jsx)(s.A,{className:"language-js",title:"js",children:`${p(u)}

${f}${m}${j}${v}`.trim()})]})},x=({options:e,panels:n,events:i={},methods:t={},plugins:d,siblings:c,imports:o=[],viewportClass:g=""})=>{let x=d?`
  private _plugins = [${h(d)}];
`:"",f=n.filter(e=>e.isSlot),m=[["{ Component }","react"],[f.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],j=Object.keys(t).map(e=>`
const ${e} = ${t[e]};`).join("");j&&(j+="\n"),d&&m.push([`{ ${d.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),m.push(...o);let u=f.length?`
      <ViewportSlot>
        ${f.map(e=>`<${e.tag}${a(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",v=Object.keys(i).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${i[e]}}`).join("");return(0,l.jsx)(s.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(m,{includeFlicking:!1})}
${j}
export default class DemoComponent extends Component {${x}
  public render() {
    return ${c?"<>\n    ":""}<Flicking${g&&` className="${g}"`}${e?` ${Object.keys(e).map(n=>`${n}=${"string"==typeof e[n]?`"${e[n]}"`:`{${e[n]}}`}`).join(" ")}`:""}${d?" plugins={this._plugins}":""}${v}>
      ${n.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${u}
    </Flicking>${c?`
    ${c.map(e=>`<${e.tag}${a(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},f=({options:e,panels:n,events:i={},methods:t={},plugins:d,siblings:c=[],imports:g=[],viewportClass:x=""})=>{let f=o(e),m=n.filter(e=>e.isSlot),j=d?`,
  data() {
    return {
      plugins: [${h(d)}]
    }
  }`:"",u=m.length?`
  <template #viewport>
    ${m.map(e=>`<${e.tag}${a(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",v=[...(d??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],$=Object.keys(t),k=$.length>0?`,
  methods: {
    ${$.map(e=>`${e}: ${t[e].split("\n").map((e,n)=>n>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",b=Object.keys(i).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${i[e]}"`).join("");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.A,{className:"language-html",title:"template",children:`<Flicking${x&&` class="${x}"`}${e?` :options="{ ${f} }"`:""}${d?' :plugins="plugins"':""}${b}>
  ${n.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n  ")}${u}
</Flicking>${c?`
${c.map(e=>`<${e.tag}${a(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,l.jsx)(s.A,{className:"language-js",title:"script",children:`${p(v,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${j}${k}
}`})]})},m=({js:e,react:n,vue3:i,style:c,...a})=>(0,l.jsxs)("div",{children:[(0,l.jsxs)(d.A,{groupId:"cfc",defaultValue:"js",children:[(0,l.jsx)(t.A,{value:"react",label:"React",children:n||(0,l.jsx)(x,{...a})}),(0,l.jsx)(t.A,{value:"vue3",label:"Vue@3",children:i||(0,l.jsx)(f,{...a})}),(0,l.jsx)(t.A,{value:"js",label:"JavaScript",children:e||(0,l.jsx)(g,{...a})})]}),c&&(0,l.jsx)(s.A,{className:"language-css",title:"style",children:`${c}`})]})}}]);