"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["586"],{7591(e,i,n){n.r(i),n.d(i,{metadata:()=>l,default:()=>m,frontMatter:()=>o,contentTitle:()=>p,toc:()=>g,assets:()=>h});var l=JSON.parse('{"id":"demos/advanced/render-only-visible","title":"Render Only Visible","description":"renderOnlyVisible \uC635\uC158\uC73C\uB85C \uBCF4\uC774\uB294 \uD328\uB110\uB9CC \uB80C\uB354\uB9C1\uD558\uC5EC \uCD08\uAE30 \uB85C\uB529 \uC131\uB2A5\uC744 \uD5A5\uC0C1\uC2DC\uD0B5\uB2C8\uB2E4","source":"@site/docs/demos/advanced/render-only-visible.mdx","sourceDirName":"demos/advanced","slug":"/demos/advanced/render-only-visible","permalink":"/flicking-docs-test/ko/docs/demos/advanced/render-only-visible","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/advanced/render-only-visible.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Render Only Visible","id":"render-only-visible","slug":"/demos/advanced/render-only-visible","sidebar_position":2,"description":"renderOnlyVisible \uC635\uC158\uC73C\uB85C \uBCF4\uC774\uB294 \uD328\uB110\uB9CC \uB80C\uB354\uB9C1\uD558\uC5EC \uCD08\uAE30 \uB85C\uB529 \uC131\uB2A5\uC744 \uD5A5\uC0C1\uC2DC\uD0B5\uB2C8\uB2E4","keywords":["flicking","carousel","renderOnlyVisible","performance","optimization","lazy","\uB80C\uB354\uB9C1","\uC131\uB2A5","\uCD5C\uC801\uD654","\uC9C0\uC5F0"]},"sidebar":"demosSidebar","previous":{"title":"Virtual Scroll","permalink":"/flicking-docs-test/ko/docs/demos/advanced/virtual-scroll"},"next":{"title":"Fractional Size","permalink":"/flicking-docs-test/ko/docs/demos/advanced/fractional-size"}}'),s=n(65723),r=n(54187),t=n(27449),d=n(72722);n(22155);let c=`
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
.render-counter {
  margin-top: 8px;
  padding: 8px 12px;
  background: #f5f5f5;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
}
.render-counter strong {
  color: #3e8ed0;
}
`,a=()=>{let e=`import { useRef, useState, useEffect } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "./styles.css";

const TOTAL_PANELS = 20;
const COLORS = ["#3e8ed0", "#00d1b2", "#f14668", "#ffe08a", "#48c78e", "#9c27b0", "#ff5722"];

// \u{D328}\u{B110} \u{CEF4}\u{D3EC}\u{B10C}\u{D2B8} - \u{B80C}\u{B354}\u{B9C1} \u{C2DC} \u{CE74}\u{C6B4}\u{D2B8} \u{C99D}\u{AC00}
function Panel({ index, color, onRender }) {
  useEffect(() => {
    onRender(index);
  }, [index, onRender]);

  return (
    <div className="flicking-panel" style={{ background: color }}>
      Panel {index + 1}
    </div>
  );
}

export default function App() {
  const [normalRendered, setNormalRendered] = useState(new Set());
  const [visibleRendered, setVisibleRendered] = useState(new Set());

  const panels = Array.from({ length: TOTAL_PANELS }, (_, i) => ({
    index: i,
    color: COLORS[i % COLORS.length]
  }));

  const handleNormalRender = (index) => {
    setNormalRendered(prev => new Set([...prev, index]));
  };

  const handleVisibleRender = (index) => {
    setVisibleRendered(prev => new Set([...prev, index]));
  };

  return (
    <div>
      {/* renderOnlyVisible: true */}
      <div className="demo-container">
        <div className="demo-label">renderOnlyVisible: true</div>
        <div className="demo-info">\u{BCF4}\u{C774}\u{B294} \u{D328}\u{B110}\u{B9CC} \u{B80C}\u{B354}\u{B9C1} (\u{C2A4}\u{D06C}\u{B864}\u{D558}\u{BA74} \u{CD94}\u{AC00} \u{B80C}\u{B354}\u{B9C1})</div>
        <Flicking align="prev" renderOnlyVisible={true}>
          {panels.map((panel) => (
            <Panel
              key={panel.index}
              index={panel.index}
              color={panel.color}
              onRender={handleVisibleRender}
            />
          ))}
        </Flicking>
        <div className="render-counter">
          \u{B80C}\u{B354}\u{B9C1}\u{B41C} \u{D328}\u{B110}: <strong>{visibleRendered.size}</strong> / {TOTAL_PANELS}\u{AC1C}
        </div>
      </div>

      {/* renderOnlyVisible: false (\u{AE30}\u{BCF8}\u{AC12}) */}
      <div className="demo-container">
        <div className="demo-label">renderOnlyVisible: false (\u{AE30}\u{BCF8}\u{AC12})</div>
        <div className="demo-info">\u{BAA8}\u{B4E0} \u{D328}\u{B110}\u{C774} \u{C989}\u{C2DC} \u{B80C}\u{B354}\u{B9C1}\u{B428}</div>
        <Flicking align="prev" renderOnlyVisible={false}>
          {panels.map((panel) => (
            <Panel
              key={panel.index}
              index={panel.index}
              color={panel.color}
              onRender={handleNormalRender}
            />
          ))}
        </Flicking>
        <div className="render-counter">
          \u{B80C}\u{B354}\u{B9C1}\u{B41C} \u{D328}\u{B110}: <strong>{normalRendered.size}</strong> / {TOTAL_PANELS}\u{AC1C}
        </div>
      </div>
    </div>
  );
}`,i=(0,s.jsx)(t.A,{template:"react",code:e,css:c}),n=`<template>
  <div>
    <!-- renderOnlyVisible: true -->
    <div class="demo-container">
      <div class="demo-label">renderOnlyVisible: true</div>
      <div class="demo-info">\u{BCF4}\u{C774}\u{B294} \u{D328}\u{B110}\u{B9CC} \u{B80C}\u{B354}\u{B9C1} (\u{C2A4}\u{D06C}\u{B864}\u{D558}\u{BA74} \u{CD94}\u{AC00} \u{B80C}\u{B354}\u{B9C1})</div>
      <Flicking align="prev" :renderOnlyVisible="true">
        <div
          v-for="panel in panels"
          :key="'visible-' + panel.index"
          class="flicking-panel"
          :style="{ background: panel.color }"
          :ref="el => trackVisibleRender(panel.index)"
        >
          Panel {{ panel.index + 1 }}
        </div>
      </Flicking>
      <div class="render-counter">
        \u{B80C}\u{B354}\u{B9C1}\u{B41C} \u{D328}\u{B110}: <strong>{{ visibleRenderedCount }}</strong> / {{ panels.length }}\u{AC1C}
      </div>
    </div>

    <!-- renderOnlyVisible: false (\u{AE30}\u{BCF8}\u{AC12}) -->
    <div class="demo-container">
      <div class="demo-label">renderOnlyVisible: false (\u{AE30}\u{BCF8}\u{AC12})</div>
      <div class="demo-info">\u{BAA8}\u{B4E0} \u{D328}\u{B110}\u{C774} \u{C989}\u{C2DC} \u{B80C}\u{B354}\u{B9C1}\u{B428}</div>
      <Flicking align="prev" :renderOnlyVisible="false">
        <div
          v-for="panel in panels"
          :key="'normal-' + panel.index"
          class="flicking-panel"
          :style="{ background: panel.color }"
          :ref="el => trackNormalRender(panel.index)"
        >
          Panel {{ panel.index + 1 }}
        </div>
      </Flicking>
      <div class="render-counter">
        \u{B80C}\u{B354}\u{B9C1}\u{B41C} \u{D328}\u{B110}: <strong>{{ normalRenderedCount }}</strong> / {{ panels.length }}\u{AC1C}
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
      panels: Array.from({ length: 20 }, (_, i) => ({
        index: i,
        color: COLORS[i % COLORS.length]
      })),
      visibleRendered: new Set(),
      normalRendered: new Set()
    };
  },
  computed: {
    visibleRenderedCount() {
      return this.visibleRendered.size;
    },
    normalRenderedCount() {
      return this.normalRendered.size;
    }
  },
  methods: {
    trackVisibleRender(index) {
      if (!this.visibleRendered.has(index)) {
        this.visibleRendered = new Set([...this.visibleRendered, index]);
      }
    },
    trackNormalRender(index) {
      if (!this.normalRendered.has(index)) {
        this.normalRendered = new Set([...this.normalRendered, index]);
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
.render-counter { margin-top: 8px; padding: 8px 12px; background: #f5f5f5; border-radius: 4px; font-size: 14px; color: #333; }
.render-counter strong { color: #3e8ed0; }
</style>`,l=(0,s.jsx)(t.A,{template:"vue3",code:n,css:c}),r=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

// renderOnlyVisible\u{C740} React/Vue \u{B4F1} \u{D504}\u{B808}\u{C784}\u{C6CC}\u{D06C} \u{C804}\u{C6A9} \u{C635}\u{C158}\u{C785}\u{B2C8}\u{B2E4}.
// Vanilla JS\u{C5D0}\u{C11C}\u{B294} \u{BAA8}\u{B4E0} \u{D328}\u{B110}\u{C774} HTML\u{C5D0} \u{C774}\u{BBF8} \u{C874}\u{C7AC}\u{D558}\u{BBC0}\u{B85C} \u{C774} \u{C635}\u{C158}\u{C774} \u{C758}\u{BBF8}\u{AC00} \u{C5C6}\u{C2B5}\u{B2C8}\u{B2E4}.

const flicking = new Flicking("#flick", {
  align: "prev"
});

// \u{D328}\u{B110} \u{AC1C}\u{C218} \u{D45C}\u{C2DC}
const panelCount = document.querySelectorAll(".flicking-panel").length;
document.getElementById("panel-count").textContent = panelCount;
`,a=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <div class="demo-container">
    <div class="demo-label">Vanilla JS (\u{CC38}\u{ACE0}\u{C6A9})</div>
    <div class="demo-info">renderOnlyVisible\u{C740} React/Vue \u{D504}\u{B808}\u{C784}\u{C6CC}\u{D06C} \u{C804}\u{C6A9} \u{C635}\u{C158}\u{C785}\u{B2C8}\u{B2E4}</div>
    <div id="flick" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel" style="background: #3e8ed0">Panel 1</div>
        <div class="flicking-panel" style="background: #00d1b2">Panel 2</div>
        <div class="flicking-panel" style="background: #f14668">Panel 3</div>
        <div class="flicking-panel" style="background: #ffe08a">Panel 4</div>
        <div class="flicking-panel" style="background: #48c78e">Panel 5</div>
        <div class="flicking-panel" style="background: #9c27b0">Panel 6</div>
        <div class="flicking-panel" style="background: #ff5722">Panel 7</div>
        <div class="flicking-panel" style="background: #3e8ed0">Panel 8</div>
        <div class="flicking-panel" style="background: #00d1b2">Panel 9</div>
        <div class="flicking-panel" style="background: #f14668">Panel 10</div>
      </div>
    </div>
    <div class="render-counter">
      DOM\u{C5D0} \u{C874}\u{C7AC}\u{D558}\u{B294} \u{D328}\u{B110}: <strong id="panel-count">0</strong>\u{AC1C} (\u{BAA8}\u{B450} \u{B80C}\u{B354}\u{B9C1}\u{B428})
    </div>
  </div>

</body>
</html>`,o=(0,s.jsx)(t.A,{template:"vanilla",code:r,html:a,css:c});return(0,s.jsx)(d.A,{options:{},panels:[],react:i,vue3:l,js:o})},o={title:"Render Only Visible",id:"render-only-visible",slug:"/demos/advanced/render-only-visible",sidebar_position:2,description:"renderOnlyVisible \uC635\uC158\uC73C\uB85C \uBCF4\uC774\uB294 \uD328\uB110\uB9CC \uB80C\uB354\uB9C1\uD558\uC5EC \uCD08\uAE30 \uB85C\uB529 \uC131\uB2A5\uC744 \uD5A5\uC0C1\uC2DC\uD0B5\uB2C8\uB2E4",keywords:["flicking","carousel","renderOnlyVisible","performance","optimization","lazy","\uB80C\uB354\uB9C1","\uC131\uB2A5","\uCD5C\uC801\uD654","\uC9C0\uC5F0"]},p="Render Only Visible",h={},g=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uBAA8\uB4DC\uBCC4 \uBE44\uAD50",id:"\uBAA8\uB4DC\uBCC4-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"\uB3D9\uC791 \uC6D0\uB9AC",id:"\uB3D9\uC791-\uC6D0\uB9AC",level:3},{value:"virtual \uC635\uC158\uACFC\uC758 \uCC28\uC774",id:"virtual-\uC635\uC158\uACFC\uC758-\uCC28\uC774",level:3},{value:"\uD504\uB808\uC784\uC6CC\uD06C \uC804\uC6A9 \uC635\uC158",id:"\uD504\uB808\uC784\uC6CC\uD06C-\uC804\uC6A9-\uC635\uC158",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function x(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"render-only-visible",children:"Render Only Visible"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#renderonlyvisible",children:(0,s.jsx)(i.code,{children:"renderOnlyVisible"})})," \uC635\uC158\uC73C\uB85C \uBCF4\uC774\uB294 \uD328\uB110\uB9CC \uB80C\uB354\uB9C1\uD558\uC5EC \uCD08\uAE30 \uB85C\uB529 \uC131\uB2A5\uC744 \uD5A5\uC0C1\uC2DC\uD0B5\uB2C8\uB2E4."]}),"\n",(0,s.jsx)(a,{}),"\n",(0,s.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,s.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\uC635\uC158"}),(0,s.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,s.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,s.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#renderonlyvisible",children:(0,s.jsx)(i.code,{children:"renderOnlyVisible"})})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"boolean"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"false"})}),(0,s.jsx)(i.td,{children:"\uBCF4\uC774\uB294 \uD328\uB110\uB9CC \uB80C\uB354\uB9C1"})]})})]}),"\n",(0,s.jsx)(i.h3,{id:"\uBAA8\uB4DC\uBCC4-\uBE44\uAD50",children:"\uBAA8\uB4DC\uBCC4 \uBE44\uAD50"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\uC124\uC815"}),(0,s.jsx)(i.th,{children:"\uCD08\uAE30 \uB80C\uB354\uB9C1"}),(0,s.jsx)(i.th,{children:"\uC2A4\uD06C\uB864 \uC2DC"}),(0,s.jsx)(i.th,{children:"\uBA54\uBAA8\uB9AC"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:[(0,s.jsx)(i.code,{children:"false"})," (\uAE30\uBCF8\uAC12)"]}),(0,s.jsx)(i.td,{children:"\uBAA8\uB4E0 \uD328\uB110 \uC989\uC2DC \uB80C\uB354\uB9C1"}),(0,s.jsx)(i.td,{children:"\uBCC0\uD654 \uC5C6\uC74C"}),(0,s.jsx)(i.td,{children:"\uB192\uC74C"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"true"})}),(0,s.jsx)(i.td,{children:"\uBCF4\uC774\uB294 \uD328\uB110\uB9CC \uB80C\uB354\uB9C1"}),(0,s.jsx)(i.td,{children:"\uCD94\uAC00 \uD328\uB110 \uB80C\uB354\uB9C1"}),(0,s.jsx)(i.td,{children:"\uB0AE\uC74C (\uCD08\uAE30)"})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,s.jsx)(i.h3,{id:"\uB3D9\uC791-\uC6D0\uB9AC",children:"\uB3D9\uC791 \uC6D0\uB9AC"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"renderOnlyVisible: true"}),"\uB97C \uC124\uC815\uD558\uBA74 \uD654\uBA74\uC5D0 \uBCF4\uC774\uB294 \uD328\uB110\uB9CC \uC2E4\uC81C\uB85C \uB80C\uB354\uB9C1\uB429\uB2C8\uB2E4:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-tsx",children:"// React \uC608\uC2DC\n<Flicking renderOnlyVisible={true}>\n  {panels.map(p => <Panel key={p.id} />)}\n</Flicking>\n"})}),"\n",(0,s.jsx)(i.p,{children:"\uC2A4\uD06C\uB864\uD558\uC5EC \uC0C8 \uD328\uB110\uC774 \uD654\uBA74\uC5D0 \uB4E4\uC5B4\uC624\uBA74 \uD574\uB2F9 \uD328\uB110\uC774 \uB80C\uB354\uB9C1\uB429\uB2C8\uB2E4. \uC774\uBBF8 \uB80C\uB354\uB9C1\uB41C \uD328\uB110\uC740 \uD654\uBA74\uC5D0\uC11C \uBC97\uC5B4\uB098\uB3C4 \uC720\uC9C0\uB429\uB2C8\uB2E4."}),"\n",(0,s.jsx)(i.h3,{id:"virtual-\uC635\uC158\uACFC\uC758-\uCC28\uC774",children:"virtual \uC635\uC158\uACFC\uC758 \uCC28\uC774"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\uD2B9\uC131"}),(0,s.jsx)(i.th,{children:(0,s.jsx)(i.code,{children:"renderOnlyVisible"})}),(0,s.jsx)(i.th,{children:(0,s.jsx)(i.code,{children:"virtual"})})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"DOM \uC694\uC18C \uC218"}),(0,s.jsx)(i.td,{children:"\uBAA8\uB4E0 \uD328\uB110 (\uC810\uC9C4\uC801 \uC0DD\uC131)"}),(0,s.jsx)(i.td,{children:"panelsPerView + \uBC84\uD37C"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"\uC801\uC6A9 \uB300\uC0C1"}),(0,s.jsx)(i.td,{children:"React, Vue \uB4F1 \uD504\uB808\uC784\uC6CC\uD06C"}),(0,s.jsx)(i.td,{children:"\uBAA8\uB4E0 \uD658\uACBD"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"\uD328\uB110 \uCF58\uD150\uCE20"}),(0,s.jsx)(i.td,{children:"React/Vue \uCEF4\uD3EC\uB10C\uD2B8 \uC0AC\uC6A9 \uAC00\uB2A5"}),(0,s.jsx)(i.td,{children:"innerHTML \uBB38\uC790\uC5F4\uB9CC"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"\uC124\uC815 \uBCF5\uC7A1\uB3C4"}),(0,s.jsx)(i.td,{children:"\uB2E8\uC21C (boolean)"}),(0,s.jsx)(i.td,{children:"\uBCF5\uC7A1 (renderPanel \uCF5C\uBC31 \uD544\uC694)"})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"\uD504\uB808\uC784\uC6CC\uD06C-\uC804\uC6A9-\uC635\uC158",children:"\uD504\uB808\uC784\uC6CC\uD06C \uC804\uC6A9 \uC635\uC158"}),"\n",(0,s.jsx)(i.admonition,{title:"Vanilla JS \uBBF8\uC9C0\uC6D0",type:"warning",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"renderOnlyVisible"}),"\uC740 React, Vue \uB4F1 \uD504\uB808\uC784\uC6CC\uD06C \uC804\uC6A9 \uC635\uC158\uC785\uB2C8\uB2E4. Vanilla JS\uC5D0\uC11C\uB294 HTML\uC5D0 \uD328\uB110\uC774 \uC774\uBBF8 \uC874\uC7AC\uD558\uBBC0\uB85C \uC774 \uC635\uC158\uC774 \uC758\uBBF8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."]})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-tsx",children:"// React - \uC9C0\uC6D0\n<Flicking renderOnlyVisible={true}>\n  {panels.map(p => <ComplexPanel key={p.id} data={p} />)}\n</Flicking>\n\n// Vanilla JS - \uC774 \uC635\uC158\uC740 \uD6A8\uACFC \uC5C6\uC74C\n// \uD328\uB110\uC774 HTML\uC5D0 \uC774\uBBF8 \uC874\uC7AC\uD558\uAE30 \uB54C\uBB38\n"})}),"\n",(0,s.jsx)(i.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,s.jsxs)(i.admonition,{title:"\uC5B8\uC81C renderOnlyVisible\uC744 \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:[(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\uC0AC\uC6A9 \uAD8C\uC7A5:"})}),(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\uD328\uB110 \uB0B4\uC6A9\uC774 \uBCF5\uC7A1\uD55C React/Vue \uCEF4\uD3EC\uB10C\uD2B8\uC778 \uACBD\uC6B0"}),"\n",(0,s.jsx)(i.li,{children:"\uCD08\uAE30 \uB85C\uB529 \uC2DC\uAC04\uC774 \uC911\uC694\uD55C \uACBD\uC6B0"}),"\n",(0,s.jsx)(i.li,{children:"\uD328\uB110 \uC218\uAC00 \uB9CE\uC9C0\uB9CC virtual\uC758 \uBCF5\uC7A1\uC131\uC744 \uD53C\uD558\uACE0 \uC2F6\uC740 \uACBD\uC6B0"}),"\n"]}),(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"virtual\uC774 \uB354 \uC801\uD569\uD55C \uACBD\uC6B0:"})}),(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\uD328\uB110 \uC218\uAC00 \uB9E4\uC6B0 \uB9CE\uC740 \uACBD\uC6B0 (100\uAC1C \uC774\uC0C1)"}),"\n",(0,s.jsx)(i.li,{children:"\uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9\uC744 \uCD5C\uC18C\uD654\uD574\uC57C \uD558\uB294 \uACBD\uC6B0"}),"\n",(0,s.jsx)(i.li,{children:"\uB2E8\uC21C\uD55C \uD328\uB110 \uB0B4\uC6A9\uC778 \uACBD\uC6B0"}),"\n"]})]}),"\n",(0,s.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,s.jsx)(i.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#virtual",children:(0,s.jsx)(i.code,{children:"virtual"})}),": DOM \uC694\uC18C \uC790\uCCB4\uB97C \uC81C\uD55C\uD558\uB294 \uAC00\uC0C1\uD654"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"./virtual-scroll",children:"Virtual Scroll"}),": virtual \uC635\uC158\uC744 \uC0AC\uC6A9\uD55C \uAC00\uC0C1\uD654"]}),"\n"]})]})}function m(e={}){let{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},27449(e,i,n){n.d(i,{A:()=>o});var l=n(65723),s=n(19612);n(22155);let r="^4.11.4",t={react:{"@egjs/react-flicking":r,"@egjs/flicking":r},vue3:{"@egjs/vue3-flicking":r,"@egjs/flicking":r},vanilla:{"@egjs/flicking":r}},d=`<!DOCTYPE html>
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
`;function o({code:e,html:i,template:n="react",dependencies:r={},files:o={},css:p=""}){var h;let g,x,m;return(0,l.jsx)(s.OZ,{template:"vue3"===n?"vue":"vanilla"===n?"vanilla":"react",files:(m={"/styles.css":{code:x=p?`${a}
${p}`:a},...o},"react"===n?{"/App.tsx":{code:e},"/index.js":{code:c,hidden:!0},...m}:"vue3"===n?{"/src/App.vue":{code:e},...m}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),n=[],l=[],s=!1;for(let e of i)s?l.push(e):e.trimStart().startsWith("import ")||""===e.trim()?n.push(e.replace('"../styles.css"','"./styles.css"')):(s=!0,l.push(e));for(;l.length>0&&""===l[l.length-1].trim();)l.pop();return[...n,"","const _run = () => {",...l.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:x},"/index.html":{code:(g="<style>.flicking-viewport{opacity:0}</style>",(h=i||d).includes("</head>")?h.replace("</head>",`${g}
</head>`):g+h)},...o}),customSetup:{dependencies:{...t[n],...r}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===n?["/App.tsx","/styles.css"]:"vue3"===n?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===n?"/App.tsx":"vue3"===n?"/src/App.vue":"/src/index.js"}})}},72722(e,i,n){n.d(i,{A:()=>u});var l=n(65723),s=n(34622),r=n(7210),t=n(78863);n(22155);let d=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,c=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",a=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${d(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(i=>`${i}: ${d(e[i],"'")}`).join(", ")}`,p=(e,{prefix:i,includeFlicking:n=!0}={})=>{let l=n?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&l.push(...e),`${l.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},h=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,g=({options:e,panels:i,events:n={},methods:r={},plugins:t=[],siblings:o=[],imports:h=[],viewportClass:g=""})=>{let x=e=>`${Object.keys(e).map(i=>`${i}: ${d(e[i])}`).join(",\n  ")}`,m=Object.keys(r).map(e=>`const ${e} = ${r[e]};
`).join(""),u=e?`const flicking = new Flicking("#flick", {
  ${x(e)}
});

`:'const flicking = new Flicking("#flick")',v=t.length>0?`flicking.addPlugins(${t.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?x(e[1]):e[1]??""}
}`:""})`)});`:"",j=[...t.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...h],f=Object.keys(n).map(e=>{let i=n[e];return`flicking.on("${e}", ${i})
`}).join(""),b=i.filter(e=>e.isSlot);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${g&&` ${g}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${c(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${b.length?`
  ${b.map(e=>`<${e.tag}${c(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${c(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,l.jsx)(s.A,{className:"language-js",title:"js",children:`${p(j)}

${m}${u}${v}${f}`.trim()})]})},x=({options:e,panels:i,events:n={},methods:r={},plugins:t,siblings:d,imports:o=[],viewportClass:g=""})=>{let x=t?`
  private _plugins = [${h(t)}];
`:"",m=i.filter(e=>e.isSlot),u=[["{ Component }","react"],[m.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],v=Object.keys(r).map(e=>`
const ${e} = ${r[e]};`).join("");v&&(v+="\n"),t&&u.push([`{ ${t.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),u.push(...o);let j=m.length?`
      <ViewportSlot>
        ${m.map(e=>`<${e.tag}${c(e,"className")}${a(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",f=Object.keys(n).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${n[e]}}`).join("");return(0,l.jsx)(s.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(u,{includeFlicking:!1})}
${v}
export default class DemoComponent extends Component {${x}
  public render() {
    return ${d?"<>\n    ":""}<Flicking${g&&` className="${g}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${t?" plugins={this._plugins}":""}${f}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${c(e,"className")}${a(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${j}
    </Flicking>${d?`
    ${d.map(e=>`<${e.tag}${c(e,"className")}${a(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},m=({options:e,panels:i,events:n={},methods:r={},plugins:t,siblings:d=[],imports:g=[],viewportClass:x=""})=>{let m=o(e),u=i.filter(e=>e.isSlot),v=t?`,
  data() {
    return {
      plugins: [${h(t)}]
    }
  }`:"",j=u.length?`
  <template #viewport>
    ${u.map(e=>`<${e.tag}${c(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",f=[...(t??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],b=Object.keys(r),$=b.length>0?`,
  methods: {
    ${b.map(e=>`${e}: ${r[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",k=Object.keys(n).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${n[e]}"`).join("");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.A,{className:"language-html",title:"template",children:`<Flicking${x&&` class="${x}"`}${e?` :options="{ ${m} }"`:""}${t?' :plugins="plugins"':""}${k}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${c(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n  ")}${j}
</Flicking>${d?`
${d.map(e=>`<${e.tag}${c(e)}${a(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,l.jsx)(s.A,{className:"language-js",title:"script",children:`${p(f,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${v}${$}
}`})]})},u=({js:e,react:i,vue3:n,style:d,...c})=>(0,l.jsxs)("div",{children:[(0,l.jsxs)(t.A,{groupId:"cfc",defaultValue:"js",children:[(0,l.jsx)(r.A,{value:"react",label:"React",children:i||(0,l.jsx)(x,{...c})}),(0,l.jsx)(r.A,{value:"vue3",label:"Vue@3",children:n||(0,l.jsx)(m,{...c})}),(0,l.jsx)(r.A,{value:"js",label:"JavaScript",children:e||(0,l.jsx)(g,{...c})})]}),d&&(0,l.jsx)(s.A,{className:"language-css",title:"style",children:`${d}`})]})}}]);