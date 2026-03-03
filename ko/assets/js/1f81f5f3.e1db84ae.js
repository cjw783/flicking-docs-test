"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["6714"],{73599(e,n,i){i.r(n),i.d(n,{metadata:()=>l,default:()=>m,frontMatter:()=>o,contentTitle:()=>p,toc:()=>h,assets:()=>u});var l=JSON.parse('{"id":"demos/advanced/virtual-scroll","title":"Virtual Scroll","description":"virtual \uC635\uC158\uC73C\uB85C \uB300\uB7C9\uC758 \uD328\uB110\uC744 \uD6A8\uC728\uC801\uC73C\uB85C \uB80C\uB354\uB9C1\uD558\uC5EC \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9\uC744 \uC904\uC785\uB2C8\uB2E4","source":"@site/docs/demos/advanced/virtual-scroll.mdx","sourceDirName":"demos/advanced","slug":"/demos/advanced/virtual-scroll","permalink":"/flicking-docs-test/ko/docs/demos/advanced/virtual-scroll","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/advanced/virtual-scroll.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Virtual Scroll","id":"virtual-scroll","slug":"/demos/advanced/virtual-scroll","sidebar_position":1,"description":"virtual \uC635\uC158\uC73C\uB85C \uB300\uB7C9\uC758 \uD328\uB110\uC744 \uD6A8\uC728\uC801\uC73C\uB85C \uB80C\uB354\uB9C1\uD558\uC5EC \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9\uC744 \uC904\uC785\uB2C8\uB2E4","keywords":["flicking","carousel","virtual","performance","memory","optimization","\uAC00\uC0C1","\uC131\uB2A5","\uBA54\uBAA8\uB9AC","\uCD5C\uC801\uD654"]},"sidebar":"demosSidebar","previous":{"title":"Nested","permalink":"/flicking-docs-test/ko/docs/demos/basic/nested"},"next":{"title":"Render Only Visible","permalink":"/flicking-docs-test/ko/docs/demos/advanced/render-only-visible"}}'),t=i(65723),r=i(54187),s=i(27449),a=i(72722);i(22155);let c=`
.flicking-panel {
  width: 200px;
  height: 120px;
  margin-right: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
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
.dom-counter {
  margin-top: 8px;
  padding: 8px 12px;
  background: #f5f5f5;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
}
.dom-counter strong {
  color: #3e8ed0;
}
`,d=()=>{let e=`import { useRef, useState, useEffect } from "react";
import Flicking, { VirtualPanel } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "./styles.css";

const TOTAL_PANELS = 1000;
const COLORS = ["#3e8ed0", "#00d1b2", "#f14668", "#ffe08a", "#48c78e", "#9c27b0", "#ff5722"];

export default function App() {
  const normalFlickingRef = useRef(null);
  const virtualFlickingRef = useRef(null);
  const [normalDomCount, setNormalDomCount] = useState(0);
  const [virtualDomCount, setVirtualDomCount] = useState(0);

  // DOM \u{C694}\u{C18C} \u{AC1C}\u{C218} \u{C5C5}\u{B370}\u{C774}\u{D2B8}
  const updateDomCounts = () => {
    if (normalFlickingRef.current) {
      const panels = normalFlickingRef.current.element.querySelectorAll(".flicking-panel");
      setNormalDomCount(panels.length);
    }
    if (virtualFlickingRef.current) {
      const panels = virtualFlickingRef.current.element.querySelectorAll(".flicking-panel");
      setVirtualDomCount(panels.length);
    }
  };

  useEffect(() => {
    updateDomCounts();
  }, []);

  // \u{C77C}\u{BC18} \u{BAA8}\u{B4DC}\u{C6A9} \u{D328}\u{B110} \u{BC30}\u{C5F4} (100\u{AC1C}\u{B9CC} - 1000\u{AC1C}\u{B294} \u{BA54}\u{BAA8}\u{B9AC} \u{BB38}\u{C81C})
  const normalPanels = Array.from({ length: 100 }, (_, i) => ({
    index: i,
    color: COLORS[i % COLORS.length]
  }));

  return (
    <div>
      {/* Virtual \u{BAA8}\u{B4DC}: 1000\u{AC1C} \u{D328}\u{B110} */}
      <div className="demo-container">
        <div className="demo-label">virtual \u{D65C}\u{C131}\u{D654} (1000\u{AC1C} \u{D328}\u{B110})</div>
        <div className="demo-info">panelsPerView + 1\u{AC1C}\u{C758} DOM \u{C694}\u{C18C}\u{B9CC} \u{C720}\u{C9C0}</div>
        <Flicking
          ref={virtualFlickingRef}
          align="prev"
          panelsPerView={3}
          virtual={{
            renderPanel: (panel, index) => \`Panel \${index + 1}\`,
            initialPanelCount: TOTAL_PANELS,
            cache: true,
            panelClass: "flicking-panel"
          }}
          onMove={() => updateDomCounts()}
          style={{ "--panel-bg": COLORS[0] }}
        />
        <div className="dom-counter">
          \u{CD1D} <strong>{TOTAL_PANELS}</strong>\u{AC1C} \u{D328}\u{B110} \u{C911} DOM \u{C694}\u{C18C}: <strong>{virtualDomCount}</strong>\u{AC1C}
        </div>
      </div>

      {/* \u{C77C}\u{BC18} \u{BAA8}\u{B4DC}: 100\u{AC1C} \u{D328}\u{B110} (\u{BE44}\u{AD50}\u{C6A9}) */}
      <div className="demo-container">
        <div className="demo-label">virtual \u{BE44}\u{D65C}\u{C131}\u{D654} (100\u{AC1C} \u{D328}\u{B110} - \u{BE44}\u{AD50}\u{C6A9})</div>
        <div className="demo-info">\u{BAA8}\u{B4E0} \u{D328}\u{B110}\u{C774} DOM\u{C5D0} \u{C874}\u{C7AC}</div>
        <Flicking
          ref={normalFlickingRef}
          align="prev"
          onReady={() => updateDomCounts()}
        >
          {normalPanels.map((panel) => (
            <div
              key={panel.index}
              className="flicking-panel"
              style={{ background: panel.color }}
            >
              Panel {panel.index + 1}
            </div>
          ))}
        </Flicking>
        <div className="dom-counter">
          \u{CD1D} <strong>{normalPanels.length}</strong>\u{AC1C} \u{D328}\u{B110} = DOM \u{C694}\u{C18C}: <strong>{normalDomCount}</strong>\u{AC1C}
        </div>
      </div>
    </div>
  );
}`,n=(0,t.jsx)(s.A,{template:"react",code:e,css:c}),i=`<template>
  <div>
    <!-- Virtual \u{BAA8}\u{B4DC}: 1000\u{AC1C} \u{D328}\u{B110} -->
    <div class="demo-container">
      <div class="demo-label">virtual \u{D65C}\u{C131}\u{D654} (1000\u{AC1C} \u{D328}\u{B110})</div>
      <div class="demo-info">panelsPerView + 1\u{AC1C}\u{C758} DOM \u{C694}\u{C18C}\u{B9CC} \u{C720}\u{C9C0}</div>
      <Flicking
        ref="virtualFlicking"
        align="prev"
        :panelsPerView="3"
        :virtual="{
          renderPanel: (panel, index) => \\\`Panel \\\${index + 1}\\\`,
          initialPanelCount: 1000,
          cache: true,
          panelClass: 'flicking-panel'
        }"
        @move="updateDomCounts"
        @ready="updateDomCounts"
      />
      <div class="dom-counter">
        \u{CD1D} <strong>1000</strong>\u{AC1C} \u{D328}\u{B110} \u{C911} DOM \u{C694}\u{C18C}: <strong>{{ virtualDomCount }}</strong>\u{AC1C}
      </div>
    </div>

    <!-- \u{C77C}\u{BC18} \u{BAA8}\u{B4DC}: 100\u{AC1C} \u{D328}\u{B110} (\u{BE44}\u{AD50}\u{C6A9}) -->
    <div class="demo-container">
      <div class="demo-label">virtual \u{BE44}\u{D65C}\u{C131}\u{D654} (100\u{AC1C} \u{D328}\u{B110} - \u{BE44}\u{AD50}\u{C6A9})</div>
      <div class="demo-info">\u{BAA8}\u{B4E0} \u{D328}\u{B110}\u{C774} DOM\u{C5D0} \u{C874}\u{C7AC}</div>
      <Flicking
        ref="normalFlicking"
        align="prev"
        @ready="updateDomCounts"
      >
        <div
          v-for="panel in normalPanels"
          :key="panel.index"
          class="flicking-panel"
          :style="{ background: panel.color }"
        >
          Panel {{ panel.index + 1 }}
        </div>
      </Flicking>
      <div class="dom-counter">
        \u{CD1D} <strong>{{ normalPanels.length }}</strong>\u{AC1C} \u{D328}\u{B110} = DOM \u{C694}\u{C18C}: <strong>{{ normalDomCount }}</strong>\u{AC1C}
      </div>
    </div>
  </div>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";

const COLORS = ["#3e8ed0", "#00d1b2", "#f14668", "#ffe08a", "#48c78e", "#9c27b0", "#ff5722"];

export default {
  components: { Flicking },
  data() {
    return {
      normalDomCount: 0,
      virtualDomCount: 0,
      normalPanels: Array.from({ length: 100 }, (_, i) => ({
        index: i,
        color: COLORS[i % COLORS.length]
      }))
    };
  },
  methods: {
    updateDomCounts() {
      this.$nextTick(() => {
        if (this.$refs.normalFlicking) {
          const panels = this.$refs.normalFlicking.$el.querySelectorAll(".flicking-panel");
          this.normalDomCount = panels.length;
        }
        if (this.$refs.virtualFlicking) {
          const panels = this.$refs.virtualFlicking.$el.querySelectorAll(".flicking-panel");
          this.virtualDomCount = panels.length;
        }
      });
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
  font-size: 20px;
  font-weight: bold;
  color: white;
  background: #3e8ed0;
}
.demo-container { margin-bottom: 32px; }
.demo-label { font-weight: bold; margin-bottom: 8px; color: #666; }
.demo-info { font-size: 14px; color: #888; margin-bottom: 12px; }
.dom-counter { margin-top: 8px; padding: 8px 12px; background: #f5f5f5; border-radius: 4px; font-size: 14px; color: #333; }
.dom-counter strong { color: #3e8ed0; }
</style>`,l=(0,t.jsx)(s.A,{template:"vue3",code:i,css:c}),r=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

const TOTAL_PANELS = 1000;
const COLORS = ["#3e8ed0", "#00d1b2", "#f14668", "#ffe08a", "#48c78e", "#9c27b0", "#ff5722"];

// Virtual \u{BAA8}\u{B4DC}: 1000\u{AC1C} \u{D328}\u{B110}
const virtualFlicking = new Flicking("#flick-virtual", {
  align: "prev",
  panelsPerView: 3,
  virtual: {
    renderPanel: (panel, index) => \`<span>Panel \${index + 1}</span>\`,
    initialPanelCount: TOTAL_PANELS,
    cache: true,
    panelClass: "flicking-panel"
  }
});

// \u{C77C}\u{BC18} \u{BAA8}\u{B4DC}: 100\u{AC1C} \u{D328}\u{B110} (\u{BE44}\u{AD50}\u{C6A9})
// \u{C77C}\u{BC18} \u{BAA8}\u{B4DC}\u{C5D0}\u{C11C}\u{B294} \u{D328}\u{B110}\u{C744} \u{C9C1}\u{C811} HTML\u{B85C} \u{C0DD}\u{C131}
const normalFlicking = new Flicking("#flick-normal", {
  align: "prev"
});

// DOM \u{C694}\u{C18C} \u{AC1C}\u{C218} \u{C5C5}\u{B370}\u{C774}\u{D2B8}
function updateDomCounts() {
  const virtualCount = document.querySelectorAll("#flick-virtual .flicking-panel").length;
  const normalCount = document.querySelectorAll("#flick-normal .flicking-panel").length;

  document.getElementById("virtual-count").textContent = virtualCount;
  document.getElementById("normal-count").textContent = normalCount;
}

virtualFlicking.on("move", updateDomCounts);
virtualFlicking.on("ready", updateDomCounts);
normalFlicking.on("ready", updateDomCounts);

updateDomCounts();`,d=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <!-- Virtual \u{BAA8}\u{B4DC}: 1000\u{AC1C} \u{D328}\u{B110} -->
  <div class="demo-container">
    <div class="demo-label">virtual \u{D65C}\u{C131}\u{D654} (1000\u{AC1C} \u{D328}\u{B110})</div>
    <div class="demo-info">panelsPerView + 1\u{AC1C}\u{C758} DOM \u{C694}\u{C18C}\u{B9CC} \u{C720}\u{C9C0}</div>
    <div id="flick-virtual" class="flicking-viewport">
      <div class="flicking-camera">
        <!-- virtual \u{BAA8}\u{B4DC}\u{C5D0}\u{C11C}\u{B294} \u{D328}\u{B110}\u{C774} \u{C790}\u{B3D9} \u{C0DD}\u{C131}\u{B428} -->
      </div>
    </div>
    <div class="dom-counter">
      \u{CD1D} <strong>1000</strong>\u{AC1C} \u{D328}\u{B110} \u{C911} DOM \u{C694}\u{C18C}: <strong id="virtual-count">0</strong>\u{AC1C}
    </div>
  </div>

  <!-- \u{C77C}\u{BC18} \u{BAA8}\u{B4DC}: 100\u{AC1C} \u{D328}\u{B110} (\u{BE44}\u{AD50}\u{C6A9}) -->
  <div class="demo-container">
    <div class="demo-label">virtual \u{BE44}\u{D65C}\u{C131}\u{D654} (100\u{AC1C} \u{D328}\u{B110} - \u{BE44}\u{AD50}\u{C6A9})</div>
    <div class="demo-info">\u{BAA8}\u{B4E0} \u{D328}\u{B110}\u{C774} DOM\u{C5D0} \u{C874}\u{C7AC}</div>
    <div id="flick-normal" class="flicking-viewport">
      <div class="flicking-camera">
        ${Array.from({length:100},(e,n)=>`
        <div class="flicking-panel" style="background: ${["#3e8ed0","#00d1b2","#f14668","#ffe08a","#48c78e","#9c27b0","#ff5722"][n%7]}">Panel ${n+1}</div>`).join("")}
      </div>
    </div>
    <div class="dom-counter">
      \u{CD1D} <strong>100</strong>\u{AC1C} \u{D328}\u{B110} = DOM \u{C694}\u{C18C}: <strong id="normal-count">0</strong>\u{AC1C}
    </div>
  </div>

</body>
</html>`,o=(0,t.jsx)(s.A,{template:"vanilla",code:r,html:d,css:c});return(0,t.jsx)(a.A,{options:{},panels:[],react:n,vue3:l,js:o})},o={title:"Virtual Scroll",id:"virtual-scroll",slug:"/demos/advanced/virtual-scroll",sidebar_position:1,description:"virtual \uC635\uC158\uC73C\uB85C \uB300\uB7C9\uC758 \uD328\uB110\uC744 \uD6A8\uC728\uC801\uC73C\uB85C \uB80C\uB354\uB9C1\uD558\uC5EC \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9\uC744 \uC904\uC785\uB2C8\uB2E4",keywords:["flicking","carousel","virtual","performance","memory","optimization","\uAC00\uC0C1","\uC131\uB2A5","\uBA54\uBAA8\uB9AC","\uCD5C\uC801\uD654"]},p="Virtual Scroll",u={},h=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"VirtualOptions \uC18D\uC131",id:"virtualoptions-\uC18D\uC131",level:3},{value:"\uBAA8\uB4DC\uBCC4 \uBE44\uAD50",id:"\uBAA8\uB4DC\uBCC4-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"Virtual \uB80C\uB354\uB9C1 \uC6D0\uB9AC",id:"virtual-\uB80C\uB354\uB9C1-\uC6D0\uB9AC",level:3},{value:"\uD544\uC218 \uC124\uC815: panelsPerView",id:"\uD544\uC218-\uC124\uC815-panelsperview",level:3},{value:"renderPanel \uCF5C\uBC31",id:"renderpanel-\uCF5C\uBC31",level:3},{value:"cache \uC635\uC158",id:"cache-\uC635\uC158",level:3},{value:"VirtualManager \uBA54\uC11C\uB4DC",id:"virtualmanager-\uBA54\uC11C\uB4DC",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:2},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uD074\uB798\uC2A4",id:"\uAD00\uB828-\uD074\uB798\uC2A4",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function g(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"virtual-scroll",children:"Virtual Scroll"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"../../api/interfaces/FlickingOptions#virtual",children:(0,t.jsx)(n.code,{children:"virtual"})})," \uC635\uC158\uC73C\uB85C \uB300\uB7C9\uC758 \uD328\uB110\uC744 \uAC00\uC0C1 \uB80C\uB354\uB9C1\uD558\uC5EC \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9\uC744 \uB300\uD3ED \uC904\uC785\uB2C8\uB2E4."]}),"\n",(0,t.jsx)(d,{}),"\n",(0,t.jsx)(n.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,t.jsx)(n.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\uC635\uC158"}),(0,t.jsx)(n.th,{children:"\uD0C0\uC785"}),(0,t.jsx)(n.th,{children:"\uAE30\uBCF8\uAC12"}),(0,t.jsx)(n.th,{children:"\uC124\uBA85"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../api/interfaces/FlickingOptions#virtual",children:(0,t.jsx)(n.code,{children:"virtual"})})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"VirtualOptions | null"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"null"})}),(0,t.jsx)(n.td,{children:"\uAC00\uC0C1 \uB80C\uB354\uB9C1 \uC124\uC815"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../api/interfaces/FlickingOptions#panelsperview",children:(0,t.jsx)(n.code,{children:"panelsPerView"})})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"-1"})}),(0,t.jsx)(n.td,{children:"\uBDF0\uD3EC\uD2B8\uC5D0 \uBCF4\uC774\uB294 \uD328\uB110 \uC218 (virtual \uC0AC\uC6A9 \uC2DC \uD544\uC218)"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"virtualoptions-\uC18D\uC131",children:"VirtualOptions \uC18D\uC131"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\uC18D\uC131"}),(0,t.jsx)(n.th,{children:"\uD0C0\uC785"}),(0,t.jsx)(n.th,{children:"\uAE30\uBCF8\uAC12"}),(0,t.jsx)(n.th,{children:"\uC124\uBA85"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"renderPanel"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"(panel, index) => string"})}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"\uD328\uB110 innerHTML \uBC18\uD658 \uD568\uC218"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"initialPanelCount"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"-1"})}),(0,t.jsx)(n.td,{children:"\uCD08\uAE30 \uAC00\uC0C1 \uD328\uB110 \uC218"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"cache"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"\uB80C\uB354\uB9C1 \uACB0\uACFC \uCE90\uC2F1 \uC5EC\uBD80"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"panelClass"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'"flicking-panel"'})}),(0,t.jsx)(n.td,{children:"\uD328\uB110 \uC694\uC18C \uD074\uB798\uC2A4\uBA85"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"\uBAA8\uB4DC\uBCC4-\uBE44\uAD50",children:"\uBAA8\uB4DC\uBCC4 \uBE44\uAD50"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\uBAA8\uB4DC"}),(0,t.jsx)(n.th,{children:"\uD328\uB110 1000\uAC1C \uC2DC DOM \uC694\uC18C"}),(0,t.jsx)(n.th,{children:"\uBA54\uBAA8\uB9AC \uC0AC\uC6A9"}),(0,t.jsx)(n.th,{children:"\uCD08\uAE30 \uB80C\uB354\uB9C1"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\uC77C\uBC18 \uBAA8\uB4DC"}),(0,t.jsx)(n.td,{children:"1000\uAC1C"}),(0,t.jsx)(n.td,{children:"\uB192\uC74C"}),(0,t.jsx)(n.td,{children:"\uB290\uB9BC"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"virtual \uBAA8\uB4DC"}),(0,t.jsxs)(n.td,{children:["~4\uAC1C (",(0,t.jsx)(n.code,{children:"panelsPerView + 1"}),")"]}),(0,t.jsx)(n.td,{children:"\uB0AE\uC74C"}),(0,t.jsx)(n.td,{children:"\uBE60\uB984"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,t.jsx)(n.h3,{id:"virtual-\uB80C\uB354\uB9C1-\uC6D0\uB9AC",children:"Virtual \uB80C\uB354\uB9C1 \uC6D0\uB9AC"}),"\n",(0,t.jsx)(n.p,{children:"Virtual \uBAA8\uB4DC\uB294 \uD654\uBA74\uC5D0 \uBCF4\uC774\uB294 \uD328\uB110 + \uBC84\uD37C\uB9CC \uC2E4\uC81C DOM\uC5D0 \uC720\uC9C0\uD569\uB2C8\uB2E4:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'// 1000\uAC1C\uC758 \uB17C\uB9AC\uC801 \uD328\uB110, \uC2E4\uC81C DOM\uC740 4\uAC1C\uB9CC\nconst flicking = new Flicking("#el", {\n  panelsPerView: 3,  // \uD544\uC218: \uD654\uBA74\uC5D0 \uBCF4\uC774\uB294 \uD328\uB110 \uC218\n  virtual: {\n    renderPanel: (panel, index) => `Panel ${index + 1}`,\n    initialPanelCount: 1000,\n    cache: true  // \uB3D9\uC77C \uD328\uB110 \uC7AC\uB80C\uB354\uB9C1 \uBC29\uC9C0\n  }\n});\n'})}),"\n",(0,t.jsx)(n.p,{children:"\uC2A4\uD06C\uB864 \uC2DC DOM \uC694\uC18C\uB97C \uC7AC\uD65C\uC6A9\uD558\uC5EC \uC0C8 \uD328\uB110 \uB0B4\uC6A9\uC73C\uB85C \uAD50\uCCB4\uD569\uB2C8\uB2E4. \uC774 \uBC29\uC2DD\uC73C\uB85C 1000\uAC1C, 10000\uAC1C \uC774\uC0C1\uC758 \uD328\uB110\uB3C4 \uC77C\uC815\uD55C \uBA54\uBAA8\uB9AC\uB85C \uCC98\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n",(0,t.jsx)(n.h3,{id:"\uD544\uC218-\uC124\uC815-panelsperview",children:"\uD544\uC218 \uC124\uC815: panelsPerView"}),"\n",(0,t.jsx)(n.admonition,{title:"panelsPerView \uD544\uC218",type:"warning",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"virtual"})," \uC635\uC158\uC744 \uC0AC\uC6A9\uD558\uB824\uBA74 \uBC18\uB4DC\uC2DC ",(0,t.jsx)(n.code,{children:"panelsPerView"}),"\uB97C \uC591\uC218\uB85C \uC124\uC815\uD574\uC57C \uD569\uB2C8\uB2E4.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"panelsPerView: -1"})," (\uC790\uB3D9)\uC774\uBA74 virtual\uC740 \uBB34\uC2DC\uB429\uB2C8\uB2E4."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// \uC62C\uBC14\uB978 \uC124\uC815\n{ panelsPerView: 3, virtual: { ... } }  // \uB3D9\uC791\uD568\n\n// \uC798\uBABB\uB41C \uC124\uC815\n{ panelsPerView: -1, virtual: { ... } }  // virtual \uBB34\uC2DC\uB428\n"})}),"\n",(0,t.jsx)(n.h3,{id:"renderpanel-\uCF5C\uBC31",children:"renderPanel \uCF5C\uBC31"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"renderPanel"}),"\uC740 \uD328\uB110\uC774 \uD654\uBA74\uC5D0 \uB098\uD0C0\uB0A0 \uB54C\uB9C8\uB2E4 \uD638\uCD9C\uB418\uC5B4 innerHTML\uC744 \uBC18\uD658\uD569\uB2C8\uB2E4:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'virtual: {\n  renderPanel: (panel, index) => {\n    // index: 0\uBD80\uD130 \uC2DC\uC791\uD558\uB294 \uD328\uB110 \uC778\uB371\uC2A4\n    return `\n      <img src="/images/item-${index}.jpg" />\n      <span>Item ${index + 1}</span>\n    `;\n  },\n  initialPanelCount: 1000\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"cache-\uC635\uC158",children:"cache \uC635\uC158"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// cache: true (\uAD8C\uC7A5 - \uC815\uC801 \uCF58\uD150\uCE20)\nvirtual: {\n  renderPanel: (panel, index) => `Panel ${index}`,\n  cache: true  // \uD55C \uBC88 \uB80C\uB354\uB9C1\uB41C \uD328\uB110 \uB0B4\uC6A9 \uC7AC\uC0AC\uC6A9\n}\n\n// cache: false (\uB3D9\uC801 \uCF58\uD150\uCE20)\nvirtual: {\n  renderPanel: (panel, index) => `Panel ${index}: ${Date.now()}`,\n  cache: false  // \uB9E4\uBC88 \uC0C8\uB85C \uB80C\uB354\uB9C1\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"virtualmanager-\uBA54\uC11C\uB4DC",children:"VirtualManager \uBA54\uC11C\uB4DC"}),"\n",(0,t.jsx)(n.p,{children:"\uB7F0\uD0C0\uC784\uC5D0 \uAC00\uC0C1 \uD328\uB110\uC744 \uCD94\uAC00/\uC81C\uAC70\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// \uD328\uB110 \uCD94\uAC00\nflicking.virtual.append(100);     // \uB05D\uC5D0 100\uAC1C \uCD94\uAC00\nflicking.virtual.prepend(50);     // \uC55E\uC5D0 50\uAC1C \uCD94\uAC00\nflicking.virtual.insert(10, 20);  // \uC778\uB371\uC2A4 10\uC5D0 20\uAC1C \uC0BD\uC785\n\n// \uD328\uB110 \uC81C\uAC70\nflicking.virtual.remove(0, 10);   // \uC778\uB371\uC2A4 0\uBD80\uD130 10\uAC1C \uC81C\uAC70\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,t.jsxs)(n.admonition,{title:"\uC5B8\uC81C virtual\uC744 \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\uC0AC\uC6A9 \uAD8C\uC7A5:"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\uD328\uB110 \uC218\uAC00 \uB9CE\uC740 \uACBD\uC6B0 (50\uAC1C \uC774\uC0C1)"}),"\n",(0,t.jsx)(n.li,{children:"\uC774\uBBF8\uC9C0 \uAC24\uB7EC\uB9AC, \uC0C1\uD488 \uBAA9\uB85D \uB4F1 \uB300\uB7C9 \uB370\uC774\uD130"}),"\n",(0,t.jsx)(n.li,{children:"\uBB34\uD55C \uC2A4\uD06C\uB864 \uAD6C\uD604"}),"\n",(0,t.jsx)(n.li,{children:"\uBA54\uBAA8\uB9AC \uC81C\uC57D\uC774 \uC788\uB294 \uBAA8\uBC14\uC77C \uD658\uACBD"}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC544\uB3C4 \uB418\uB294 \uACBD\uC6B0:"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\uD328\uB110 \uC218\uAC00 \uC801\uC740 \uACBD\uC6B0 (10\uAC1C \uBBF8\uB9CC)"}),"\n",(0,t.jsx)(n.li,{children:"\uBCF5\uC7A1\uD55C \uD328\uB110 \uC0C1\uD638\uC791\uC6A9\uC774 \uD544\uC694\uD55C \uACBD\uC6B0"}),"\n",(0,t.jsx)(n.li,{children:"\uD328\uB110 \uB0B4\uC6A9\uC774 \uB9E4\uC6B0 \uB3D9\uC801\uC778 \uACBD\uC6B0"}),"\n"]})]}),"\n",(0,t.jsx)(n.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,t.jsx)(n.admonition,{title:"\uD504\uB808\uC784\uC6CC\uD06C\uBCC4 \uCC28\uC774",type:"warning",children:(0,t.jsxs)(n.p,{children:["React, Vue\uC5D0\uC11C\uB294 ",(0,t.jsx)(n.code,{children:"renderPanel"}),"\uC774 \uBB38\uC790\uC5F4 HTML\uC744 \uBC18\uD658\uD569\uB2C8\uB2E4. \uCEF4\uD3EC\uB10C\uD2B8 \uB80C\uB354\uB9C1\uC774 \uD544\uC694\uD558\uBA74 ",(0,t.jsx)(n.a,{href:"../../api/interfaces/FlickingOptions#renderonlyvisible",children:(0,t.jsx)(n.code,{children:"renderOnlyVisible"})})," \uC635\uC158\uC744 \uACE0\uB824\uD558\uC138\uC694."]})}),"\n",(0,t.jsx)(n.admonition,{title:"renderPanel \uC131\uB2A5",type:"warning",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"renderPanel"}),"\uC740 \uC2A4\uD06C\uB864 \uC911 \uBE48\uBC88\uD788 \uD638\uCD9C\uB429\uB2C8\uB2E4. \uBCF5\uC7A1\uD55C \uC5F0\uC0B0\uC774\uB098 DOM \uC870\uC791\uC740 \uD53C\uD558\uACE0, ",(0,t.jsx)(n.code,{children:"cache: true"}),"\uB97C \uD65C\uC6A9\uD558\uC138\uC694."]})}),"\n",(0,t.jsx)(n.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,t.jsx)(n.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../../api/interfaces/FlickingOptions#panelsperview",children:(0,t.jsx)(n.code,{children:"panelsPerView"})}),": \uBDF0\uD3EC\uD2B8\uC5D0 \uBCF4\uC774\uB294 \uD328\uB110 \uC218"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../../api/interfaces/FlickingOptions#renderonlyvisible",children:(0,t.jsx)(n.code,{children:"renderOnlyVisible"})}),": React/Vue\uC5D0\uC11C \uBCF4\uC774\uB294 \uD328\uB110\uB9CC \uB80C\uB354\uB9C1"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\uAD00\uB828-\uD074\uB798\uC2A4",children:"\uAD00\uB828 \uD074\uB798\uC2A4"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../../api/classes/VirtualManager",children:(0,t.jsx)(n.code,{children:"VirtualManager"})}),": \uAC00\uC0C1 \uD328\uB110 \uAD00\uB9AC\uC790"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"./render-only-visible",children:"Render Only Visible"}),": \uD504\uB808\uC784\uC6CC\uD06C \uCD5C\uC801\uD654 \uB80C\uB354\uB9C1"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"./infinite-scroll",children:"Infinite Scroll"}),": \uBB34\uD55C \uC2A4\uD06C\uB864 \uAD6C\uD604"]}),"\n"]})]})}function m(e={}){let{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},27449(e,n,i){i.d(n,{A:()=>o});var l=i(65723),t=i(19612);i(22155);let r="^4.11.4",s={react:{"@egjs/react-flicking":r,"@egjs/flicking":r},vue3:{"@egjs/vue3-flicking":r,"@egjs/flicking":r},vanilla:{"@egjs/flicking":r}},a=`<!DOCTYPE html>
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
`;function o({code:e,html:n,template:i="react",dependencies:r={},files:o={},css:p=""}){var u;let h,g,m;return(0,l.jsx)(t.OZ,{template:"vue3"===i?"vue":"vanilla"===i?"vanilla":"react",files:(m={"/styles.css":{code:g=p?`${d}
${p}`:d},...o},"react"===i?{"/App.tsx":{code:e},"/index.js":{code:c,hidden:!0},...m}:"vue3"===i?{"/src/App.vue":{code:e},...m}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let n=e.split("\n"),i=[],l=[],t=!1;for(let e of n)t?l.push(e):e.trimStart().startsWith("import ")||""===e.trim()?i.push(e.replace('"../styles.css"','"./styles.css"')):(t=!0,l.push(e));for(;l.length>0&&""===l[l.length-1].trim();)l.pop();return[...i,"","const _run = () => {",...l.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:g},"/index.html":{code:(h="<style>.flicking-viewport{opacity:0}</style>",(u=n||a).includes("</head>")?u.replace("</head>",`${h}
</head>`):h+u)},...o}),customSetup:{dependencies:{...s[i],...r}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===i?["/App.tsx","/styles.css"]:"vue3"===i?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===i?"/App.tsx":"vue3"===i?"/src/App.vue":"/src/index.js"}})}},72722(e,n,i){i.d(n,{A:()=>x});var l=i(65723),t=i(34622),r=i(7210),s=i(78863);i(22155);let a=(e,n='"')=>"string"==typeof e?`${n}${e}${n}`:e,c=(e,n="class")=>e.class?` ${n}="${e.class}"`:"",d=(e,n=!1)=>e.style?n?` style={{ ${Object.keys(e.style).map(n=>`${n}: ${a(e.style[n])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(n=>`${n}: ${e.style[n]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(n=>`${n}: ${a(e[n],"'")}`).join(", ")}`,p=(e,{prefix:n,includeFlicking:i=!0}={})=>{let l=i?[["Flicking",`@egjs/${n?`${n}-`:""}flicking`]]:[];return e&&l.push(...e),`${l.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},u=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,h=({options:e,panels:n,events:i={},methods:r={},plugins:s=[],siblings:o=[],imports:u=[],viewportClass:h=""})=>{let g=e=>`${Object.keys(e).map(n=>`${n}: ${a(e[n])}`).join(",\n  ")}`,m=Object.keys(r).map(e=>`const ${e} = ${r[e]};
`).join(""),x=e?`const flicking = new Flicking("#flick", {
  ${g(e)}
});

`:'const flicking = new Flicking("#flick")',j=s.length>0?`flicking.addPlugins(${s.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?g(e[1]):e[1]??""}
}`:""})`)});`:"",v=[...s.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...u],f=Object.keys(i).map(e=>{let n=i[e];return`flicking.on("${e}", ${n})
`}).join(""),$=n.filter(e=>e.isSlot);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${h&&` ${h}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${n.filter(e=>!e.isSlot).map(e=>`<${e.tag}${c(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${$.length?`
  ${$.map(e=>`<${e.tag}${c(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${c(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,l.jsx)(t.A,{className:"language-js",title:"js",children:`${p(v)}

${m}${x}${j}${f}`.trim()})]})},g=({options:e,panels:n,events:i={},methods:r={},plugins:s,siblings:a,imports:o=[],viewportClass:h=""})=>{let g=s?`
  private _plugins = [${u(s)}];
`:"",m=n.filter(e=>e.isSlot),x=[["{ Component }","react"],[m.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],j=Object.keys(r).map(e=>`
const ${e} = ${r[e]};`).join("");j&&(j+="\n"),s&&x.push([`{ ${s.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),x.push(...o);let v=m.length?`
      <ViewportSlot>
        ${m.map(e=>`<${e.tag}${c(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",f=Object.keys(i).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${i[e]}}`).join("");return(0,l.jsx)(t.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(x,{includeFlicking:!1})}
${j}
export default class DemoComponent extends Component {${g}
  public render() {
    return ${a?"<>\n    ":""}<Flicking${h&&` className="${h}"`}${e?` ${Object.keys(e).map(n=>`${n}=${"string"==typeof e[n]?`"${e[n]}"`:`{${e[n]}}`}`).join(" ")}`:""}${s?" plugins={this._plugins}":""}${f}>
      ${n.filter(e=>!e.isSlot).map(e=>`<${e.tag}${c(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${v}
    </Flicking>${a?`
    ${a.map(e=>`<${e.tag}${c(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},m=({options:e,panels:n,events:i={},methods:r={},plugins:s,siblings:a=[],imports:h=[],viewportClass:g=""})=>{let m=o(e),x=n.filter(e=>e.isSlot),j=s?`,
  data() {
    return {
      plugins: [${u(s)}]
    }
  }`:"",v=x.length?`
  <template #viewport>
    ${x.map(e=>`<${e.tag}${c(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",f=[...(s??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...h],$=Object.keys(r),k=$.length>0?`,
  methods: {
    ${$.map(e=>`${e}: ${r[e].split("\n").map((e,n)=>n>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",b=Object.keys(i).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${i[e]}"`).join("");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.A,{className:"language-html",title:"template",children:`<Flicking${g&&` class="${g}"`}${e?` :options="{ ${m} }"`:""}${s?' :plugins="plugins"':""}${b}>
  ${n.filter(e=>!e.isSlot).map(e=>`<${e.tag}${c(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}${v}
</Flicking>${a?`
${a.map(e=>`<${e.tag}${c(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,l.jsx)(t.A,{className:"language-js",title:"script",children:`${p(f,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${j}${k}
}`})]})},x=({js:e,react:n,vue3:i,style:a,...c})=>(0,l.jsxs)("div",{children:[(0,l.jsxs)(s.A,{groupId:"cfc",defaultValue:"js",children:[(0,l.jsx)(r.A,{value:"react",label:"React",children:n||(0,l.jsx)(g,{...c})}),(0,l.jsx)(r.A,{value:"vue3",label:"Vue@3",children:i||(0,l.jsx)(m,{...c})}),(0,l.jsx)(r.A,{value:"js",label:"JavaScript",children:e||(0,l.jsx)(h,{...c})})]}),a&&(0,l.jsx)(t.A,{className:"language-css",title:"style",children:`${a}`})]})}}]);