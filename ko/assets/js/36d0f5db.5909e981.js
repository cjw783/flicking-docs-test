"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["7242"],{62398(e,i,s){s.r(i),s.d(i,{metadata:()=>t,default:()=>x,frontMatter:()=>a,contentTitle:()=>u,toc:()=>h,assets:()=>p});var t=JSON.parse('{"id":"demos/advanced/resize-optimization","title":"Resize Optimization","description":"\uB9AC\uC0AC\uC774\uC988 \uAD00\uB828 \uC635\uC158 \uC870\uD569\uC73C\uB85C \uD06C\uAE30 \uBCC0\uACBD \uAC10\uC9C0\uC640 \uC131\uB2A5\uC744 \uCD5C\uC801\uD654\uD569\uB2C8\uB2E4","source":"@site/docs/demos/advanced/resize-optimization.mdx","sourceDirName":"demos/advanced","slug":"/demos/advanced/resize-optimization","permalink":"/flicking-docs-test/ko/docs/demos/advanced/resize-optimization","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/advanced/resize-optimization.mdx","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Resize Optimization","id":"resize-optimization","slug":"/demos/advanced/resize-optimization","sidebar_position":7,"description":"\uB9AC\uC0AC\uC774\uC988 \uAD00\uB828 \uC635\uC158 \uC870\uD569\uC73C\uB85C \uD06C\uAE30 \uBCC0\uACBD \uAC10\uC9C0\uC640 \uC131\uB2A5\uC744 \uCD5C\uC801\uD654\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","resize","autoResize","resizeDebounce","ResizeObserver","\uC131\uB2A5"]},"sidebar":"demosSidebar","previous":{"title":"Lazy Load","permalink":"/flicking-docs-test/ko/docs/demos/advanced/lazy-load"},"next":{"title":"Add / Remove","permalink":"/flicking-docs-test/ko/docs/demos/advanced/add-remove"}}'),n=s(65723),c=s(54187),o=s(27449),r=s(72722);s(22155);let l=`
.flicking-panel {
  width: 200px;
  height: 150px;
  margin-right: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: white;
}

.demo-section {
  margin-bottom: 24px;
}

.demo-label {
  font-weight: bold;
  margin-bottom: 8px;
  color: #666;
  font-size: 14px;
}

.resize-log {
  margin-top: 8px;
  padding: 8px 12px;
  background: #f5f5f5;
  border-radius: 4px;
  font-size: 13px;
  color: #333;
  max-height: 80px;
  overflow-y: auto;
}

.resize-container {
  border: 2px dashed #ccc;
  padding: 12px;
  resize: horizontal;
  overflow: hidden;
  min-width: 200px;
}

.controls {
  display: flex;
  gap: 8px;
  margin-top: 12px;
  flex-wrap: wrap;
}

.button {
  padding: 6px 12px;
  border: 2px solid #3498db;
  background: transparent;
  color: #3498db;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
}

.button:hover {
  background: #3498db;
  color: white;
}

.button.active {
  background: #3498db;
  color: white;
}
`,d=()=>{let e=`import Flicking from "@egjs/react-flicking";
import "@egjs/flicking/dist/flicking.css";
import { useState, useRef, useCallback } from "react";

const COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6"];

export default function App() {
  const flickingRef = useRef(null);
  const [logs, setLogs] = useState([]);
  const [config, setConfig] = useState({
    autoResize: true,
    useResizeObserver: true,
    resizeDebounce: 0,
    maxResizeDebounce: 100,
    optimizeSizeUpdate: false
  });

  const addLog = useCallback((msg) => {
    const time = new Date().toLocaleTimeString("ko-KR", {
      hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit",
      fractionalSecondDigits: 3
    });
    setLogs(prev => [\`[\${time}] \${msg}\`, ...prev].slice(0, 20));
  }, []);

  const handleResize = useCallback(() => {
    addLog("resize() \u{D638}\u{CD9C}\u{B428}");
  }, [addLog]);

  return (
    <div>
      <div className="controls">
        <button
          className={\`button \${config.autoResize ? "active" : ""}\`}
          onClick={() => setConfig(c => ({ ...c, autoResize: !c.autoResize }))}
        >
          autoResize: {config.autoResize ? "true" : "false"}
        </button>
        <button
          className={\`button \${config.useResizeObserver ? "active" : ""}\`}
          onClick={() => setConfig(c => ({ ...c, useResizeObserver: !c.useResizeObserver }))}
        >
          useResizeObserver: {config.useResizeObserver ? "true" : "false"}
        </button>
        <button
          className={\`button \${config.resizeDebounce > 0 ? "active" : ""}\`}
          onClick={() => setConfig(c => ({ ...c, resizeDebounce: c.resizeDebounce === 0 ? 300 : 0 }))}
        >
          resizeDebounce: {config.resizeDebounce}ms
        </button>
        <button
          className={\`button \${config.optimizeSizeUpdate ? "active" : ""}\`}
          onClick={() => setConfig(c => ({ ...c, optimizeSizeUpdate: !c.optimizeSizeUpdate }))}
        >
          optimizeSizeUpdate: {config.optimizeSizeUpdate ? "true" : "false"}
        </button>
      </div>

      <p style={{ fontSize: 13, color: "#888", margin: "8px 0" }}>
        \u{C544}\u{B798} \u{CEE8}\u{D14C}\u{C774}\u{B108}\u{C758} \u{C624}\u{B978}\u{CABD} \u{D558}\u{B2E8}\u{C744} \u{B4DC}\u{B798}\u{ADF8}\u{D558}\u{C5EC} \u{D06C}\u{AE30}\u{B97C} \u{C870}\u{C808}\u{D574} \u{BCF4}\u{C138}\u{C694}.
      </p>

      <div className="resize-container">
        <Flicking
          key={JSON.stringify(config)}
          ref={flickingRef}
          autoResize={config.autoResize}
          useResizeObserver={config.useResizeObserver}
          resizeDebounce={config.resizeDebounce}
          maxResizeDebounce={config.maxResizeDebounce}
          optimizeSizeUpdate={config.optimizeSizeUpdate}
          onResize={handleResize}
        >
          {COLORS.map((color, i) => (
            <div className="flicking-panel" key={i} style={{ background: color }}>
              {i + 1}
            </div>
          ))}
        </Flicking>
      </div>

      <div className="resize-log">
        {logs.length === 0
          ? "\u{B9AC}\u{C0AC}\u{C774}\u{C988} \u{B85C}\u{ADF8}\u{AC00} \u{C5EC}\u{AE30}\u{C5D0} \u{D45C}\u{C2DC}\u{B429}\u{B2C8}\u{B2E4}..."
          : logs.map((log, i) => <div key={i}>{log}</div>)
        }
      </div>

      {!config.autoResize && (
        <div className="controls">
          <button className="button"
            onClick={() => flickingRef.current?.resize()}>
            \u{C218}\u{B3D9} resize() \u{D638}\u{CD9C}
          </button>
        </div>
      )}
    </div>
  );
}`,i=`<template>
  <div>
    <div class="controls">
      <button :class="['button', autoResize && 'active']"
              @click="autoResize = !autoResize">
        autoResize: {{ autoResize }}
      </button>
      <button :class="['button', useResizeObserver && 'active']"
              @click="useResizeObserver = !useResizeObserver">
        useResizeObserver: {{ useResizeObserver }}
      </button>
      <button :class="['button', resizeDebounce > 0 && 'active']"
              @click="resizeDebounce = resizeDebounce === 0 ? 300 : 0">
        resizeDebounce: {{ resizeDebounce }}ms
      </button>
      <button :class="['button', optimizeSizeUpdate && 'active']"
              @click="optimizeSizeUpdate = !optimizeSizeUpdate">
        optimizeSizeUpdate: {{ optimizeSizeUpdate }}
      </button>
    </div>

    <p style="font-size: 13px; color: #888; margin: 8px 0">
      \u{C544}\u{B798} \u{CEE8}\u{D14C}\u{C774}\u{B108}\u{C758} \u{C624}\u{B978}\u{CABD} \u{D558}\u{B2E8}\u{C744} \u{B4DC}\u{B798}\u{ADF8}\u{D558}\u{C5EC} \u{D06C}\u{AE30}\u{B97C} \u{C870}\u{C808}\u{D574} \u{BCF4}\u{C138}\u{C694}.
    </p>

    <div class="resize-container">
      <Flicking
        :key="configKey"
        :options="flickingOptions"
        @resize="onResize"
      >
        <div v-for="(color, i) in COLORS" :key="i"
             class="flicking-panel" :style="{ background: color }">
          {{ i + 1 }}
        </div>
      </Flicking>
    </div>

    <div class="resize-log">
      <template v-if="logs.length === 0">
        \u{B9AC}\u{C0AC}\u{C774}\u{C988} \u{B85C}\u{ADF8}\u{AC00} \u{C5EC}\u{AE30}\u{C5D0} \u{D45C}\u{C2DC}\u{B429}\u{B2C8}\u{B2E4}...
      </template>
      <div v-for="(log, i) in logs" :key="i">{{ log }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Flicking from "@egjs/vue3-flicking";
import "@egjs/flicking/dist/flicking.css";

const COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6"];

const autoResize = ref(true);
const useResizeObserver = ref(true);
const resizeDebounce = ref(0);
const optimizeSizeUpdate = ref(false);
const logs = ref([]);

const configKey = computed(() =>
  \`\${autoResize.value}-\${useResizeObserver.value}-\${resizeDebounce.value}-\${optimizeSizeUpdate.value}\`
);

const flickingOptions = computed(() => ({
  autoResize: autoResize.value,
  useResizeObserver: useResizeObserver.value,
  resizeDebounce: resizeDebounce.value,
  maxResizeDebounce: 100,
  optimizeSizeUpdate: optimizeSizeUpdate.value
}));

const onResize = () => {
  const time = new Date().toLocaleTimeString("ko-KR", {
    hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit"
  });
  logs.value = [\`[\${time}] resize() \u{D638}\u{CD9C}\u{B428}\`, ...logs.value].slice(0, 20);
};
</script>`,s=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";

const COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6"];

const camera = document.querySelector(".flicking-camera");
COLORS.forEach((color, i) => {
  const panel = document.createElement("div");
  panel.className = "flicking-panel";
  panel.style.background = color;
  panel.textContent = i + 1;
  camera.appendChild(panel);
});

const logEl = document.querySelector(".resize-log");
const logs = [];

const addLog = (msg) => {
  const time = new Date().toLocaleTimeString("ko-KR", {
    hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit"
  });
  logs.unshift(\`[\${time}] \${msg}\`);
  if (logs.length > 20) logs.pop();
  logEl.innerHTML = logs.map(l => \`<div>\${l}</div>\`).join("");
};

let flicking = new Flicking("#flick", {
  autoResize: true,
  useResizeObserver: true,
  resizeDebounce: 0,
  maxResizeDebounce: 100,
  optimizeSizeUpdate: false
});

flicking.on("resize", () => addLog("resize() \u{D638}\u{CD9C}\u{B428}"));

// \u{BC84}\u{D2BC} \u{C774}\u{BCA4}\u{D2B8}
document.getElementById("btn-auto").addEventListener("click", () => {
  const cur = flicking.autoResize;
  flicking.autoResize = !cur;
  document.getElementById("btn-auto").textContent = \`autoResize: \${!cur}\`;
  addLog(\`autoResize \u{2192} \${!cur}\`);
});

document.getElementById("btn-observer").addEventListener("click", () => {
  const cur = flicking.useResizeObserver;
  flicking.useResizeObserver = !cur;
  document.getElementById("btn-observer").textContent = \`useResizeObserver: \${!cur}\`;
  addLog(\`useResizeObserver \u{2192} \${!cur}\`);
});

document.getElementById("btn-debounce").addEventListener("click", () => {
  const next = flicking.resizeDebounce === 0 ? 300 : 0;
  flicking.resizeDebounce = next;
  document.getElementById("btn-debounce").textContent = \`resizeDebounce: \${next}ms\`;
  addLog(\`resizeDebounce \u{2192} \${next}ms\`);
});`,t=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <div id="app">
    <div class="controls">
      <button class="button active" id="btn-auto">autoResize: true</button>
      <button class="button active" id="btn-observer">useResizeObserver: true</button>
      <button class="button" id="btn-debounce">resizeDebounce: 0ms</button>
    </div>
    <p style="font-size: 13px; color: #888; margin: 8px 0">
      \u{C544}\u{B798} \u{CEE8}\u{D14C}\u{C774}\u{B108}\u{C758} \u{C624}\u{B978}\u{CABD} \u{D558}\u{B2E8}\u{C744} \u{B4DC}\u{B798}\u{ADF8}\u{D558}\u{C5EC} \u{D06C}\u{AE30}\u{B97C} \u{C870}\u{C808}\u{D574} \u{BCF4}\u{C138}\u{C694}.
    </p>
    <div class="resize-container">
      <div id="flick" class="flicking-viewport">
        <div class="flicking-camera"></div>
      </div>
    </div>
    <div class="resize-log">\u{B9AC}\u{C0AC}\u{C774}\u{C988} \u{B85C}\u{ADF8}\u{AC00} \u{C5EC}\u{AE30}\u{C5D0} \u{D45C}\u{C2DC}\u{B429}\u{B2C8}\u{B2E4}...</div>
  </div>
</body>
</html>`;return(0,n.jsx)(r.A,{options:{},panels:[],react:(0,n.jsx)(o.A,{template:"react",code:e,css:l}),vue3:(0,n.jsx)(o.A,{template:"vue3",code:i,css:l}),js:(0,n.jsx)(o.A,{template:"vanilla",code:s,html:t,css:l})})},a={title:"Resize Optimization",id:"resize-optimization",slug:"/demos/advanced/resize-optimization",sidebar_position:7,description:"\uB9AC\uC0AC\uC774\uC988 \uAD00\uB828 \uC635\uC158 \uC870\uD569\uC73C\uB85C \uD06C\uAE30 \uBCC0\uACBD \uAC10\uC9C0\uC640 \uC131\uB2A5\uC744 \uCD5C\uC801\uD654\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","resize","autoResize","resizeDebounce","ResizeObserver","\uC131\uB2A5"]},u="Resize Optimization",p={},h=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uC635\uC158 \uC870\uD569 \uBE44\uAD50",id:"\uC635\uC158-\uC870\uD569-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"autoResize",id:"autoresize",level:3},{value:"useResizeObserver",id:"useresizeobserver",level:3},{value:"resizeDebounce / maxResizeDebounce",id:"resizedebounce--maxresizedebounce",level:3},{value:"optimizeSizeUpdate",id:"optimizesizeupdate",level:3},{value:"\uC5F0\uAD00 \uC635\uC158",id:"\uC5F0\uAD00-\uC635\uC158",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function g(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"resize-optimization",children:"Resize Optimization"})}),"\n",(0,n.jsx)(i.p,{children:"\uB9AC\uC0AC\uC774\uC988 \uAD00\uB828 \uC635\uC158\uB4E4\uC744 \uC870\uD569\uD558\uC5EC \uBDF0\uD3EC\uD2B8 \uD06C\uAE30 \uBCC0\uACBD \uAC10\uC9C0 \uBC29\uC2DD\uACFC \uC131\uB2A5\uC744 \uC81C\uC5B4\uD569\uB2C8\uB2E4."}),"\n",(0,n.jsx)(d,{}),"\n",(0,n.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,n.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"\uC635\uC158"}),(0,n.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,n.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,n.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#autoresize",children:(0,n.jsx)(i.code,{children:"autoResize"})})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"boolean"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"true"})}),(0,n.jsxs)(i.td,{children:["\uBDF0\uD3EC\uD2B8 \uD06C\uAE30 \uBCC0\uACBD \uC2DC \uC790\uB3D9 ",(0,n.jsx)(i.code,{children:"resize()"})," \uD638\uCD9C"]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#useresizeobserver",children:(0,n.jsx)(i.code,{children:"useResizeObserver"})})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"boolean"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"true"})}),(0,n.jsx)(i.td,{children:"ResizeObserver \uC0AC\uC6A9 \uC5EC\uBD80 (false\uBA74 window resize)"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#resizedebounce",children:(0,n.jsx)(i.code,{children:"resizeDebounce"})})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"number"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"0"})}),(0,n.jsx)(i.td,{children:"resize \uD638\uCD9C \uB514\uBC14\uC6B4\uC2A4 \uC9C0\uC5F0 (ms)"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#maxresizedebounce",children:(0,n.jsx)(i.code,{children:"maxResizeDebounce"})})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"number"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"100"})}),(0,n.jsx)(i.td,{children:"\uB514\uBC14\uC6B4\uC2A4 \uCD5C\uB300 \uC9C0\uC5F0 \uBCF4\uC7A5 (ms)"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#optimizesizeupdate",children:(0,n.jsx)(i.code,{children:"optimizeSizeUpdate"})})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"boolean"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"false"})}),(0,n.jsx)(i.td,{children:"\uBC29\uD5A5\uC5D0 \uB530\uB77C \uBD88\uD544\uC694\uD55C \uCD95 \uBCC0\uACBD \uBB34\uC2DC"})]})]})]}),"\n",(0,n.jsx)(i.h3,{id:"\uC635\uC158-\uC870\uD569-\uBE44\uAD50",children:"\uC635\uC158 \uC870\uD569 \uBE44\uAD50"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"\uC870\uD569"}),(0,n.jsx)(i.th,{children:"\uB3D9\uC791"}),(0,n.jsx)(i.th,{children:"\uC801\uD569\uD55C \uC0C1\uD669"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"autoResize: true"})," + ",(0,n.jsx)(i.code,{children:"useResizeObserver: true"})]}),(0,n.jsx)(i.td,{children:"\uC694\uC18C \uD06C\uAE30 \uBCC0\uACBD \uC989\uC2DC \uAC10\uC9C0"}),(0,n.jsx)(i.td,{children:"\uC77C\uBC18\uC801\uC778 \uC0AC\uC6A9 (\uAE30\uBCF8\uAC12)"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"autoResize: true"})," + ",(0,n.jsx)(i.code,{children:"useResizeObserver: false"})]}),(0,n.jsx)(i.td,{children:"window resize\uB9CC \uAC10\uC9C0"}),(0,n.jsx)(i.td,{children:"\uC694\uC18C \uD06C\uAE30\uB294 \uACE0\uC815, \uCC3D \uD06C\uAE30\uB9CC \uBCC0\uD558\uB294 \uACBD\uC6B0"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"autoResize: true"})," + ",(0,n.jsx)(i.code,{children:"resizeDebounce: 200"})]}),(0,n.jsx)(i.td,{children:"200ms \uB514\uBC14\uC6B4\uC2A4 \uC801\uC6A9"}),(0,n.jsx)(i.td,{children:"\uBE48\uBC88\uD55C \uD06C\uAE30 \uBCC0\uACBD\uC774 \uC77C\uC5B4\uB098\uB294 \uACBD\uC6B0"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"autoResize: false"})}),(0,n.jsxs)(i.td,{children:["\uC218\uB3D9 ",(0,n.jsx)(i.code,{children:"resize()"})," \uD638\uCD9C \uD544\uC694"]}),(0,n.jsx)(i.td,{children:"\uD06C\uAE30 \uBCC0\uACBD \uC2DC\uC810\uC744 \uC9C1\uC811 \uC81C\uC5B4\uD558\uACE0 \uC2F6\uC744 \uB54C"})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,n.jsx)(i.h3,{id:"autoresize",children:"autoResize"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"autoResize: true"}),"(\uAE30\uBCF8\uAC12)\uC774\uBA74 \uBDF0\uD3EC\uD2B8 \uD06C\uAE30\uAC00 \uBCC0\uACBD\uB420 \uB54C \uC790\uB3D9\uC73C\uB85C ",(0,n.jsx)(i.code,{children:"resize()"})," \uBA54\uC18C\uB4DC\uB97C \uD638\uCD9C\uD569\uB2C8\uB2E4. ",(0,n.jsx)(i.code,{children:"false"}),"\uB85C \uC124\uC815\uD558\uBA74 \uAC1C\uBC1C\uC790\uAC00 \uC9C1\uC811 ",(0,n.jsx)(i.code,{children:"flicking.resize()"}),"\uB97C \uD638\uCD9C\uD574\uC57C \uD569\uB2C8\uB2E4."]}),"\n",(0,n.jsx)(i.h3,{id:"useresizeobserver",children:"useResizeObserver"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"useResizeObserver: true"}),"(\uAE30\uBCF8\uAC12)\uC774\uBA74 ",(0,n.jsx)(i.code,{children:"ResizeObserver"})," API\uB85C \uC694\uC18C \uB2E8\uC704 \uD06C\uAE30 \uBCC0\uACBD\uC744 \uAC10\uC9C0\uD569\uB2C8\uB2E4. ",(0,n.jsx)(i.code,{children:"false"}),"\uC774\uBA74 ",(0,n.jsx)(i.code,{children:"window"}),"\uC758 ",(0,n.jsx)(i.code,{children:"resize"})," \uC774\uBCA4\uD2B8\uB9CC \uAC10\uC9C0\uD558\uBBC0\uB85C, \uBD80\uBAA8 \uC694\uC18C \uD06C\uAE30\uAC00 \uBCC0\uD574\uB3C4 \uAC10\uC9C0\uD558\uC9C0 \uBABB\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n",(0,n.jsx)(i.h3,{id:"resizedebounce--maxresizedebounce",children:"resizeDebounce / maxResizeDebounce"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"resizeDebounce"}),"\uB294 resize \uD638\uCD9C\uC744 \uC9C0\uC815\uB41C \uC2DC\uAC04\uB9CC\uD07C \uC9C0\uC5F0\uC2DC\uD0B5\uB2C8\uB2E4. \uC9C0\uC5F0 \uC911 \uD06C\uAE30\uAC00 \uB2E4\uC2DC \uBCC0\uACBD\uB418\uBA74 \uD0C0\uC774\uBA38\uAC00 \uB9AC\uC14B\uB429\uB2C8\uB2E4. ",(0,n.jsx)(i.code,{children:"maxResizeDebounce"}),"\uB294 \uC774 \uC9C0\uC5F0\uC758 \uCD5C\uB300\uCE58\uB97C \uBCF4\uC7A5\uD558\uC5EC, \uCD5C\uC18C\uD55C n ms\uB9C8\uB2E4 \uD55C \uBC88\uC740 resize\uAC00 \uC2E4\uD589\uB429\uB2C8\uB2E4."]}),"\n",(0,n.jsx)(i.h3,{id:"optimizesizeupdate",children:"optimizeSizeUpdate"}),"\n",(0,n.jsx)(i.p,{children:"\uAC00\uB85C \uBC29\uD5A5 Flicking\uC774\uBA74 \uB108\uBE44 \uBCC0\uACBD\uB9CC, \uC138\uB85C \uBC29\uD5A5\uC774\uBA74 \uB192\uC774 \uBCC0\uACBD\uB9CC \uAC10\uC9C0\uD569\uB2C8\uB2E4. \uD328\uB110 \uB192\uC774\uAC00 \uB2E4\uC591\uD560 \uB54C \uBD88\uD544\uC694\uD55C \uB9AC\uC0AC\uC774\uC9D5\uC73C\uB85C \uC778\uD55C \uAE5C\uBE61\uC784\uC744 \uBC29\uC9C0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n",(0,n.jsx)(i.h3,{id:"\uC5F0\uAD00-\uC635\uC158",children:"\uC5F0\uAD00 \uC635\uC158"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsxs)(i.strong,{children:[(0,n.jsx)(i.code,{children:"autoResize"}),"\uC640 ",(0,n.jsx)(i.code,{children:"useResizeObserver"}),"\uC758 \uAD00\uACC4"]}),": ",(0,n.jsx)(i.code,{children:"useResizeObserver"}),"\uB294 ",(0,n.jsx)(i.code,{children:"autoResize: true"}),"\uC77C \uB54C\uB9CC \uC758\uBBF8\uAC00 \uC788\uC74C"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsxs)(i.strong,{children:[(0,n.jsx)(i.code,{children:"resizeDebounce"}),"\uC640 ",(0,n.jsx)(i.code,{children:"maxResizeDebounce"}),"\uC758 \uAD00\uACC4"]}),": ",(0,n.jsx)(i.code,{children:"maxResizeDebounce"}),"\uB294 ",(0,n.jsx)(i.code,{children:"resizeDebounce"}),"\uAC00 0\uBCF4\uB2E4 \uD074 \uB54C\uB9CC \uC758\uBBF8\uAC00 \uC788\uC74C"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsxs)(i.strong,{children:[(0,n.jsx)(i.code,{children:"optimizeSizeUpdate"}),"\uC640 ",(0,n.jsx)(i.code,{children:"autoResize"}),"\uC758 \uAD00\uACC4"]}),": ",(0,n.jsx)(i.code,{children:"optimizeSizeUpdate"}),"\uB294 ",(0,n.jsx)(i.code,{children:"autoResize: true"}),"\uC77C \uB54C\uB9CC \uB3D9\uC791"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,n.jsx)(i.admonition,{title:"\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"\uBC18\uC751\uD615 \uB808\uC774\uC544\uC6C3"}),": \uAE30\uBCF8\uAC12 \uADF8\uB300\uB85C \uC0AC\uC6A9 (autoResize + ResizeObserver)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"\uCC44\uD305/\uB77C\uC774\uBE0C \uD53C\uB4DC"}),": ",(0,n.jsx)(i.code,{children:"resizeDebounce"}),"\uB85C \uBE48\uBC88\uD55C resize \uCF5C \uC808\uAC10"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"\uD0ED \uC804\uD658 UI"}),": ",(0,n.jsx)(i.code,{children:"autoResize: false"}),"\uB85C \uD0ED\uC774 \uD65C\uC131\uD654\uB420 \uB54C\uB9CC \uC218\uB3D9 resize"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"\uC138\uB85C \uC2A4\uD06C\uB864 \uB0B4 \uAC00\uB85C \uC2AC\uB77C\uC774\uB354"}),": ",(0,n.jsx)(i.code,{children:"optimizeSizeUpdate: true"}),"\uB85C \uBD88\uD544\uC694\uD55C \uC5C5\uB370\uC774\uD2B8 \uBC29\uC9C0"]}),"\n"]})}),"\n",(0,n.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,n.jsx)(i.admonition,{title:"\uC8FC\uC758",type:"warning",children:(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"autoResize: false"}),"\uB85C \uC124\uC815\uD55C \uACBD\uC6B0, \uBDF0\uD3EC\uD2B8 \uD06C\uAE30 \uBCC0\uACBD \uD6C4 \uBC18\uB4DC\uC2DC ",(0,n.jsx)(i.code,{children:"resize()"}),"\uB97C \uD638\uCD9C\uD574\uC57C \uD569\uB2C8\uB2E4"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"useResizeObserver: false"}),"\uC774\uBA74 CSS \uB808\uC774\uC544\uC6C3 \uBCC0\uACBD(flex, grid \uB4F1)\uC5D0 \uC758\uD55C \uD06C\uAE30 \uBCC0\uACBD\uC744 \uAC10\uC9C0\uD558\uC9C0 \uBABB\uD569\uB2C8\uB2E4"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"resizeDebounce"})," \uAC12\uC774 \uB108\uBB34 \uD06C\uBA74 \uC0AC\uC6A9\uC790\uAC00 \uD06C\uAE30 \uBCC0\uACBD \uD6C4 \uD328\uB110\uC774 \uB2A6\uAC8C \uC7AC\uBC30\uCE58\uB418\uC5B4 \uBCF4\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4"]}),"\n"]})}),"\n",(0,n.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,n.jsx)(i.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#autoresize",children:(0,n.jsx)(i.code,{children:"autoResize"})}),": \uC790\uB3D9 \uB9AC\uC0AC\uC774\uC988"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#useresizeobserver",children:(0,n.jsx)(i.code,{children:"useResizeObserver"})}),": ResizeObserver \uC0AC\uC6A9"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#resizedebounce",children:(0,n.jsx)(i.code,{children:"resizeDebounce"})}),": \uB9AC\uC0AC\uC774\uC988 \uB514\uBC14\uC6B4\uC2A4"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#maxresizedebounce",children:(0,n.jsx)(i.code,{children:"maxResizeDebounce"})}),": \uCD5C\uB300 \uB514\uBC14\uC6B4\uC2A4"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#optimizesizeupdate",children:(0,n.jsx)(i.code,{children:"optimizeSizeUpdate"})}),": \uC0AC\uC774\uC988 \uC5C5\uB370\uC774\uD2B8 \uCD5C\uC801\uD654"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"./resize-on-contents-ready",children:"Resize On Contents Ready"}),": \uCF58\uD150\uCE20 \uB85C\uB4DC \uD6C4 \uC790\uB3D9 \uB9AC\uC0AC\uC774\uC988"]}),"\n"]})]})}function x(e={}){let{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},27449(e,i,s){s.d(i,{A:()=>a});var t=s(65723),n=s(19612);s(22155);let c="^4.11.4",o={react:{"@egjs/react-flicking":c,"@egjs/flicking":c},vue3:{"@egjs/vue3-flicking":c,"@egjs/flicking":c},vanilla:{"@egjs/flicking":c}},r=`<!DOCTYPE html>
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
</html>`,l=`import { StrictMode } from "react";
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
`;function a({code:e,html:i,template:s="react",dependencies:c={},files:a={},css:u=""}){var p;let h,g,x;return(0,t.jsx)(n.OZ,{template:"vue3"===s?"vue":"vanilla"===s?"vanilla":"react",files:(x={"/styles.css":{code:g=u?`${d}
${u}`:d},...a},"react"===s?{"/App.tsx":{code:e},"/index.js":{code:l,hidden:!0},...x}:"vue3"===s?{"/src/App.vue":{code:e},...x}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),s=[],t=[],n=!1;for(let e of i)n?t.push(e):e.trimStart().startsWith("import ")||""===e.trim()?s.push(e.replace('"../styles.css"','"./styles.css"')):(n=!0,t.push(e));for(;t.length>0&&""===t[t.length-1].trim();)t.pop();return[...s,"","const _run = () => {",...t.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:g},"/index.html":{code:(h="<style>.flicking-viewport{opacity:0}</style>",(p=i||r).includes("</head>")?p.replace("</head>",`${h}
</head>`):h+p)},...a}),customSetup:{dependencies:{...o[s],...c}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===s?["/App.tsx","/styles.css"]:"vue3"===s?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===s?"/App.tsx":"vue3"===s?"/src/App.vue":"/src/index.js"}})}},72722(e,i,s){s.d(i,{A:()=>m});var t=s(65723),n=s(34622),c=s(7210),o=s(78863);s(22155);let r=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,l=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",d=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${r(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",a=e=>`${Object.keys(e).map(i=>`${i}: ${r(e[i],"'")}`).join(", ")}`,u=(e,{prefix:i,includeFlicking:s=!0}={})=>{let t=s?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&t.push(...e),`${t.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},p=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${a(e[1])} }`:e[1]??""}`).join(", ")})`,h=({options:e,panels:i,events:s={},methods:c={},plugins:o=[],siblings:a=[],imports:p=[],viewportClass:h=""})=>{let g=e=>`${Object.keys(e).map(i=>`${i}: ${r(e[i])}`).join(",\n  ")}`,x=Object.keys(c).map(e=>`const ${e} = ${c[e]};
`).join(""),m=e?`const flicking = new Flicking("#flick", {
  ${g(e)}
});

`:'const flicking = new Flicking("#flick")',z=o.length>0?`flicking.addPlugins(${o.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?g(e[1]):e[1]??""}
}`:""})`)});`:"",j=[...o.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...p],b=Object.keys(s).map(e=>{let i=s[e];return`flicking.on("${e}", ${i})
`}).join(""),f=i.filter(e=>e.isSlot);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${h&&` ${h}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${l(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${f.length?`
  ${f.map(e=>`<${e.tag}${l(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${a?"\n"+a.map(e=>`<${e.tag}${l(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,t.jsx)(n.A,{className:"language-js",title:"js",children:`${u(j)}

${x}${m}${z}${b}`.trim()})]})},g=({options:e,panels:i,events:s={},methods:c={},plugins:o,siblings:r,imports:a=[],viewportClass:h=""})=>{let g=o?`
  private _plugins = [${p(o)}];
`:"",x=i.filter(e=>e.isSlot),m=[["{ Component }","react"],[x.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],z=Object.keys(c).map(e=>`
const ${e} = ${c[e]};`).join("");z&&(z+="\n"),o&&m.push([`{ ${o.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),m.push(...a);let j=x.length?`
      <ViewportSlot>
        ${x.map(e=>`<${e.tag}${l(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",b=Object.keys(s).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${s[e]}}`).join("");return(0,t.jsx)(n.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${u(m,{includeFlicking:!1})}
${z}
export default class DemoComponent extends Component {${g}
  public render() {
    return ${r?"<>\n    ":""}<Flicking${h&&` className="${h}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${o?" plugins={this._plugins}":""}${b}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${l(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${j}
    </Flicking>${r?`
    ${r.map(e=>`<${e.tag}${l(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},x=({options:e,panels:i,events:s={},methods:c={},plugins:o,siblings:r=[],imports:h=[],viewportClass:g=""})=>{let x=a(e),m=i.filter(e=>e.isSlot),z=o?`,
  data() {
    return {
      plugins: [${p(o)}]
    }
  }`:"",j=m.length?`
  <template #viewport>
    ${m.map(e=>`<${e.tag}${l(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",b=[...(o??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...h],f=Object.keys(c),v=f.length>0?`,
  methods: {
    ${f.map(e=>`${e}: ${c[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",$=Object.keys(s).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${s[e]}"`).join("");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.A,{className:"language-html",title:"template",children:`<Flicking${g&&` class="${g}"`}${e?` :options="{ ${x} }"`:""}${o?' :plugins="plugins"':""}${$}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${l(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}${j}
</Flicking>${r?`
${r.map(e=>`<${e.tag}${l(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,t.jsx)(n.A,{className:"language-js",title:"script",children:`${u(b,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${z}${v}
}`})]})},m=({js:e,react:i,vue3:s,style:r,...l})=>(0,t.jsxs)("div",{children:[(0,t.jsxs)(o.A,{groupId:"cfc",defaultValue:"js",children:[(0,t.jsx)(c.A,{value:"react",label:"React",children:i||(0,t.jsx)(g,{...l})}),(0,t.jsx)(c.A,{value:"vue3",label:"Vue@3",children:s||(0,t.jsx)(x,{...l})}),(0,t.jsx)(c.A,{value:"js",label:"JavaScript",children:e||(0,t.jsx)(h,{...l})})]}),r&&(0,t.jsx)(n.A,{className:"language-css",title:"style",children:`${r}`})]})}}]);