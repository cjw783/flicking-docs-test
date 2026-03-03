"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["8807"],{87452(e,i,n){n.r(i),n.d(i,{metadata:()=>t,default:()=>h,frontMatter:()=>d,contentTitle:()=>p,toc:()=>g,assets:()=>f});var t=JSON.parse('{"id":"demos/advanced/fractional-size","title":"Fractional Size","description":"useFractionalSize \uC635\uC158\uC73C\uB85C \uC18C\uC218\uC810 \uD06C\uAE30\uC758 \uD328\uB110\uC5D0\uC11C \uBC1C\uC0DD\uD558\uB294 1px \uC624\uCC28\uB97C \uBC29\uC9C0\uD569\uB2C8\uB2E4","source":"@site/docs/demos/advanced/fractional-size.mdx","sourceDirName":"demos/advanced","slug":"/demos/advanced/fractional-size","permalink":"/flicking-docs-test/docs/demos/advanced/fractional-size","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/advanced/fractional-size.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Fractional Size","id":"fractional-size","slug":"/demos/advanced/fractional-size","sidebar_position":3,"description":"useFractionalSize \uC635\uC158\uC73C\uB85C \uC18C\uC218\uC810 \uD06C\uAE30\uC758 \uD328\uB110\uC5D0\uC11C \uBC1C\uC0DD\uD558\uB294 1px \uC624\uCC28\uB97C \uBC29\uC9C0\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","useFractionalSize","subpixel","precision","\uC18C\uC218\uC810","\uC815\uBC00\uB3C4","\uC624\uCC28"]},"sidebar":"demosSidebar","previous":{"title":"Render Only Visible","permalink":"/flicking-docs-test/docs/demos/advanced/render-only-visible"},"next":{"title":"Infinite Scroll","permalink":"/flicking-docs-test/docs/demos/advanced/infinite-scroll"}}'),l=n(65723),s=n(54187),a=n(27449),c=n(72722);n(22155);let r=`
.flicking-viewport {
  margin-bottom: 8px;
}

.flicking-panel {
  height: 120px;
  margin-right: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  color: white;
}

/* \u{C18C}\u{C218}\u{C810} \u{B108}\u{BE44}\u{B97C} \u{C720}\u{BC1C}\u{D558}\u{B294} \u{C124}\u{C815} */
.fractional-panel {
  width: 33.33%;
  box-sizing: border-box;
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
.size-display {
  margin-top: 8px;
  padding: 8px 12px;
  background: #f5f5f5;
  border-radius: 4px;
  font-size: 13px;
  color: #333;
  font-family: monospace;
}
.size-display strong {
  color: #3e8ed0;
}
`,o=()=>{let e=`import { useRef, useState, useEffect } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "./styles.css";

const COLORS = ["#3e8ed0", "#00d1b2", "#f14668", "#ffe08a", "#48c78e", "#9c27b0"];

export default function App() {
  const fractionalRef = useRef(null);
  const integerRef = useRef(null);
  const [fractionalSize, setFractionalSize] = useState("");
  const [integerSize, setIntegerSize] = useState("");

  const updateSizes = () => {
    if (fractionalRef.current) {
      const panel = fractionalRef.current.element.querySelector(".flicking-panel");
      if (panel) {
        const rect = panel.getBoundingClientRect();
        const offset = panel.offsetWidth;
        setFractionalSize(\`getBoundingClientRect: \${rect.width.toFixed(2)}px / offsetWidth: \${offset}px\`);
      }
    }
    if (integerRef.current) {
      const panel = integerRef.current.element.querySelector(".flicking-panel");
      if (panel) {
        const rect = panel.getBoundingClientRect();
        const offset = panel.offsetWidth;
        setIntegerSize(\`getBoundingClientRect: \${rect.width.toFixed(2)}px / offsetWidth: \${offset}px\`);
      }
    }
  };

  useEffect(() => {
    // \u{C57D}\u{AC04}\u{C758} \u{C9C0}\u{C5F0} \u{D6C4} \u{C0AC}\u{C774}\u{C988} \u{CE21}\u{C815} (\u{B80C}\u{B354}\u{B9C1} \u{C644}\u{B8CC} \u{B300}\u{AE30})
    const timer = setTimeout(updateSizes, 100);
    return () => clearTimeout(timer);
  }, []);

  const panels = [0, 1, 2, 3, 4, 5];

  return (
    <div>
      {/* useFractionalSize: true */}
      <div className="demo-container">
        <div className="demo-label">useFractionalSize: true</div>
        <div className="demo-info">getBoundingClientRect \u{C0AC}\u{C6A9} (\u{C18C}\u{C218}\u{C810} \u{C815}\u{BC00}\u{B3C4})</div>
        <Flicking
          ref={fractionalRef}
          align="prev"
          useFractionalSize={true}
          onReady={updateSizes}
        >
          {panels.map((i) => (
            <div
              key={i}
              className="flicking-panel fractional-panel"
              style={{ background: COLORS[i % COLORS.length] }}
            >
              Panel {i + 1}
            </div>
          ))}
        </Flicking>
        <div className="size-display">
          \u{D328}\u{B110} \u{D06C}\u{AE30}: <strong>{fractionalSize}</strong>
        </div>
      </div>

      {/* useFractionalSize: false (\u{AE30}\u{BCF8}\u{AC12}) */}
      <div className="demo-container">
        <div className="demo-label">useFractionalSize: false (\u{AE30}\u{BCF8}\u{AC12})</div>
        <div className="demo-info">offsetWidth \u{C0AC}\u{C6A9} (\u{C815}\u{C218} \u{BC18}\u{C62C}\u{B9BC})</div>
        <Flicking
          ref={integerRef}
          align="prev"
          useFractionalSize={false}
          onReady={updateSizes}
        >
          {panels.map((i) => (
            <div
              key={i}
              className="flicking-panel fractional-panel"
              style={{ background: COLORS[i % COLORS.length] }}
            >
              Panel {i + 1}
            </div>
          ))}
        </Flicking>
        <div className="size-display">
          \u{D328}\u{B110} \u{D06C}\u{AE30}: <strong>{integerSize}</strong>
        </div>
      </div>
    </div>
  );
}`,i=(0,l.jsx)(a.A,{template:"react",code:e,css:r}),n=`<template>
  <div>
    <!-- useFractionalSize: true -->
    <div class="demo-container">
      <div class="demo-label">useFractionalSize: true</div>
      <div class="demo-info">getBoundingClientRect \u{C0AC}\u{C6A9} (\u{C18C}\u{C218}\u{C810} \u{C815}\u{BC00}\u{B3C4})</div>
      <Flicking
        ref="fractionalFlicking"
        align="prev"
        :useFractionalSize="true"
        @ready="updateSizes"
      >
        <div
          v-for="i in 6"
          :key="'frac-' + i"
          class="flicking-panel fractional-panel"
          :style="{ background: colors[(i - 1) % colors.length] }"
        >
          Panel {{ i }}
        </div>
      </Flicking>
      <div class="size-display">
        \u{D328}\u{B110} \u{D06C}\u{AE30}: <strong>{{ fractionalSize }}</strong>
      </div>
    </div>

    <!-- useFractionalSize: false (\u{AE30}\u{BCF8}\u{AC12}) -->
    <div class="demo-container">
      <div class="demo-label">useFractionalSize: false (\u{AE30}\u{BCF8}\u{AC12})</div>
      <div class="demo-info">offsetWidth \u{C0AC}\u{C6A9} (\u{C815}\u{C218} \u{BC18}\u{C62C}\u{B9BC})</div>
      <Flicking
        ref="integerFlicking"
        align="prev"
        :useFractionalSize="false"
        @ready="updateSizes"
      >
        <div
          v-for="i in 6"
          :key="'int-' + i"
          class="flicking-panel fractional-panel"
          :style="{ background: colors[(i - 1) % colors.length] }"
        >
          Panel {{ i }}
        </div>
      </Flicking>
      <div class="size-display">
        \u{D328}\u{B110} \u{D06C}\u{AE30}: <strong>{{ integerSize }}</strong>
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
      colors: ["#3e8ed0", "#00d1b2", "#f14668", "#ffe08a", "#48c78e", "#9c27b0"],
      fractionalSize: "",
      integerSize: ""
    };
  },
  methods: {
    updateSizes() {
      this.$nextTick(() => {
        if (this.$refs.fractionalFlicking) {
          const panel = this.$refs.fractionalFlicking.$el.querySelector(".flicking-panel");
          if (panel) {
            const rect = panel.getBoundingClientRect();
            const offset = panel.offsetWidth;
            this.fractionalSize = \`getBoundingClientRect: \${rect.width.toFixed(2)}px / offsetWidth: \${offset}px\`;
          }
        }
        if (this.$refs.integerFlicking) {
          const panel = this.$refs.integerFlicking.$el.querySelector(".flicking-panel");
          if (panel) {
            const rect = panel.getBoundingClientRect();
            const offset = panel.offsetWidth;
            this.integerSize = \`getBoundingClientRect: \${rect.width.toFixed(2)}px / offsetWidth: \${offset}px\`;
          }
        }
      });
    }
  }
};
</script>

<style>
.flicking-panel {
  height: 120px;
  margin-right: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  color: white;
}
.fractional-panel {
  width: 33.33%;
  box-sizing: border-box;
}
.demo-container { margin-bottom: 32px; }
.demo-label { font-weight: bold; margin-bottom: 8px; color: #666; }
.demo-info { font-size: 14px; color: #888; margin-bottom: 12px; }
.size-display { margin-top: 8px; padding: 8px 12px; background: #f5f5f5; border-radius: 4px; font-size: 13px; color: #333; font-family: monospace; }
.size-display strong { color: #3e8ed0; }
</style>`,t=(0,l.jsx)(a.A,{template:"vue3",code:n,css:r}),s=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

// useFractionalSize: true
const fractionalFlicking = new Flicking("#flick-fractional", {
  align: "prev",
  useFractionalSize: true
});

// useFractionalSize: false (\u{AE30}\u{BCF8}\u{AC12})
const integerFlicking = new Flicking("#flick-integer", {
  align: "prev",
  useFractionalSize: false
});

// \u{D328}\u{B110} \u{D06C}\u{AE30} \u{D45C}\u{C2DC}
function updateSizes() {
  const fracPanel = document.querySelector("#flick-fractional .flicking-panel");
  const intPanel = document.querySelector("#flick-integer .flicking-panel");

  if (fracPanel) {
    const rect = fracPanel.getBoundingClientRect();
    const offset = fracPanel.offsetWidth;
    document.getElementById("frac-size").textContent =
      \`getBoundingClientRect: \${rect.width.toFixed(2)}px / offsetWidth: \${offset}px\`;
  }

  if (intPanel) {
    const rect = intPanel.getBoundingClientRect();
    const offset = intPanel.offsetWidth;
    document.getElementById("int-size").textContent =
      \`getBoundingClientRect: \${rect.width.toFixed(2)}px / offsetWidth: \${offset}px\`;
  }
}

fractionalFlicking.on("ready", updateSizes);
integerFlicking.on("ready", updateSizes);
`,o=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <!-- useFractionalSize: true -->
  <div class="demo-container">
    <div class="demo-label">useFractionalSize: true</div>
    <div class="demo-info">getBoundingClientRect \u{C0AC}\u{C6A9} (\u{C18C}\u{C218}\u{C810} \u{C815}\u{BC00}\u{B3C4})</div>
    <div id="flick-fractional" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel fractional-panel" style="background: #3e8ed0">Panel 1</div>
        <div class="flicking-panel fractional-panel" style="background: #00d1b2">Panel 2</div>
        <div class="flicking-panel fractional-panel" style="background: #f14668">Panel 3</div>
        <div class="flicking-panel fractional-panel" style="background: #ffe08a">Panel 4</div>
        <div class="flicking-panel fractional-panel" style="background: #48c78e">Panel 5</div>
        <div class="flicking-panel fractional-panel" style="background: #9c27b0">Panel 6</div>
      </div>
    </div>
    <div class="size-display">
      \u{D328}\u{B110} \u{D06C}\u{AE30}: <strong id="frac-size">\u{CE21}\u{C815} \u{C911}...</strong>
    </div>
  </div>

  <!-- useFractionalSize: false (\u{AE30}\u{BCF8}\u{AC12}) -->
  <div class="demo-container">
    <div class="demo-label">useFractionalSize: false (\u{AE30}\u{BCF8}\u{AC12})</div>
    <div class="demo-info">offsetWidth \u{C0AC}\u{C6A9} (\u{C815}\u{C218} \u{BC18}\u{C62C}\u{B9BC})</div>
    <div id="flick-integer" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel fractional-panel" style="background: #3e8ed0">Panel 1</div>
        <div class="flicking-panel fractional-panel" style="background: #00d1b2">Panel 2</div>
        <div class="flicking-panel fractional-panel" style="background: #f14668">Panel 3</div>
        <div class="flicking-panel fractional-panel" style="background: #ffe08a">Panel 4</div>
        <div class="flicking-panel fractional-panel" style="background: #48c78e">Panel 5</div>
        <div class="flicking-panel fractional-panel" style="background: #9c27b0">Panel 6</div>
      </div>
    </div>
    <div class="size-display">
      \u{D328}\u{B110} \u{D06C}\u{AE30}: <strong id="int-size">\u{CE21}\u{C815} \u{C911}...</strong>
    </div>
  </div>

</body>
</html>`,d=(0,l.jsx)(a.A,{template:"vanilla",code:s,html:o,css:r});return(0,l.jsx)(c.A,{options:{},panels:[],react:i,vue3:t,js:d})},d={title:"Fractional Size",id:"fractional-size",slug:"/demos/advanced/fractional-size",sidebar_position:3,description:"useFractionalSize \uC635\uC158\uC73C\uB85C \uC18C\uC218\uC810 \uD06C\uAE30\uC758 \uD328\uB110\uC5D0\uC11C \uBC1C\uC0DD\uD558\uB294 1px \uC624\uCC28\uB97C \uBC29\uC9C0\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","useFractionalSize","subpixel","precision","\uC18C\uC218\uC810","\uC815\uBC00\uB3C4","\uC624\uCC28"]},p="Fractional Size",f={},g=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uBAA8\uB4DC\uBCC4 \uBE44\uAD50",id:"\uBAA8\uB4DC\uBCC4-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"1px \uC624\uCC28 \uBB38\uC81C",id:"1px-\uC624\uCC28-\uBB38\uC81C",level:3},{value:"\uB3D9\uC791 \uC6D0\uB9AC",id:"\uB3D9\uC791-\uC6D0\uB9AC",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3}];function u(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.header,{children:(0,l.jsx)(i.h1,{id:"fractional-size",children:"Fractional Size"})}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#usefractionalsize",children:(0,l.jsx)(i.code,{children:"useFractionalSize"})})," \uC635\uC158\uC73C\uB85C \uC18C\uC218\uC810 \uD06C\uAE30\uC758 \uD328\uB110\uC5D0\uC11C \uBC1C\uC0DD\uD558\uB294 1px \uC624\uCC28\uB97C \uBC29\uC9C0\uD569\uB2C8\uB2E4."]}),"\n",(0,l.jsx)(o,{}),"\n",(0,l.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,l.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"\uC635\uC158"}),(0,l.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,l.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,l.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,l.jsx)(i.tbody,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#usefractionalsize",children:(0,l.jsx)(i.code,{children:"useFractionalSize"})})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"boolean"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"false"})}),(0,l.jsx)(i.td,{children:"\uC18C\uC218\uC810 \uC815\uBC00\uB3C4\uB85C \uD06C\uAE30 \uACC4\uC0B0"})]})})]}),"\n",(0,l.jsx)(i.h3,{id:"\uBAA8\uB4DC\uBCC4-\uBE44\uAD50",children:"\uBAA8\uB4DC\uBCC4 \uBE44\uAD50"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"\uC124\uC815"}),(0,l.jsx)(i.th,{children:"\uD06C\uAE30 \uCE21\uC815 \uBC29\uC2DD"}),(0,l.jsx)(i.th,{children:"\uC815\uBC00\uB3C4"}),(0,l.jsx)(i.th,{children:"\uC131\uB2A5"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsxs)(i.td,{children:[(0,l.jsx)(i.code,{children:"false"})," (\uAE30\uBCF8\uAC12)"]}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"offsetWidth"})}),(0,l.jsx)(i.td,{children:"\uC815\uC218 (\uBC18\uC62C\uB9BC)"}),(0,l.jsx)(i.td,{children:"\uBE60\uB984"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"true"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"getBoundingClientRect"})}),(0,l.jsx)(i.td,{children:"\uC18C\uC218\uC810"}),(0,l.jsx)(i.td,{children:"\uC57D\uAC04 \uB290\uB9BC"})]})]})]}),"\n",(0,l.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,l.jsx)(i.h3,{id:"1px-\uC624\uCC28-\uBB38\uC81C",children:"1px \uC624\uCC28 \uBB38\uC81C"}),"\n",(0,l.jsx)(i.p,{children:"\uD328\uB110 \uB108\uBE44\uAC00 \uC18C\uC218\uC810\uC77C \uB54C \uC815\uB82C \uC624\uCC28\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{children:"\uBDF0\uD3EC\uD2B8: 300px\n\uD328\uB110 \uB108\uBE44: 33.33% = 99.99px\n\noffsetWidth \uC0AC\uC6A9 \uC2DC:\n- \uD328\uB110 1: 100px (\uBC18\uC62C\uB9BC)\n- \uD328\uB110 2: 100px\n- \uD328\uB110 3: 100px\n- \uD569\uACC4: 300px (\uC2E4\uC81C\uBCF4\uB2E4 0.03px \uD07C)\n"})}),"\n",(0,l.jsx)(i.p,{children:"\uC774 \uC624\uCC28\uAC00 \uB204\uC801\uB418\uBA74 \uB9C8\uC9C0\uB9C9 \uD328\uB110\uC758 \uC815\uB82C\uC774 \uC5B4\uAE0B\uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n",(0,l.jsx)(i.h3,{id:"\uB3D9\uC791-\uC6D0\uB9AC",children:"\uB3D9\uC791 \uC6D0\uB9AC"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-javascript",children:"// false (\uAE30\uBCF8\uAC12): offsetWidth \uC0AC\uC6A9\nconst width = panel.offsetWidth; // 100 (\uC815\uC218)\n\n// true: getBoundingClientRect \uC0AC\uC6A9\nconst width = panel.getBoundingClientRect().width; // 99.99 (\uC18C\uC218\uC810)\n"})}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"useFractionalSize: true"}),"\uB97C \uC124\uC815\uD558\uBA74 Flicking\uC774 \uB0B4\uBD80\uC801\uC73C\uB85C \uC18C\uC218\uC810 \uC815\uBC00\uB3C4\uB85C \uD06C\uAE30\uB97C \uACC4\uC0B0\uD569\uB2C8\uB2E4."]}),"\n",(0,l.jsx)(i.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,l.jsxs)(i.admonition,{title:"\uC5B8\uC81C useFractionalSize\uB97C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:[(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"\uC0AC\uC6A9 \uAD8C\uC7A5:"})}),(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\uD328\uB110 \uB108\uBE44\uB97C % \uB2E8\uC704\uB85C \uC124\uC815\uD55C \uACBD\uC6B0 (33.33%, 16.66% \uB4F1)"}),"\n",(0,l.jsx)(i.li,{children:"\uD328\uB110 \uC815\uB82C\uC774 \uBBF8\uC138\uD558\uAC8C \uC5B4\uAE0B\uB098\uB294 \uACBD\uC6B0"}),"\n",(0,l.jsx)(i.li,{children:"\uACE0\uD574\uC0C1\uB3C4 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uC815\uBC00\uD55C \uB80C\uB354\uB9C1\uC774 \uD544\uC694\uD55C \uACBD\uC6B0"}),"\n"]}),(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"\uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC544\uB3C4 \uB418\uB294 \uACBD\uC6B0:"})}),(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\uD328\uB110 \uB108\uBE44\uAC00 \uC815\uC218 px\uC778 \uACBD\uC6B0 (200px, 300px \uB4F1)"}),"\n",(0,l.jsx)(i.li,{children:"\uBBF8\uC138\uD55C \uC815\uB82C \uC624\uCC28\uAC00 \uBB38\uC81C\uB418\uC9C0 \uC54A\uB294 \uACBD\uC6B0"}),"\n",(0,l.jsx)(i.li,{children:"\uC131\uB2A5\uC774 \uC911\uC694\uD55C \uACBD\uC6B0"}),"\n"]})]}),"\n",(0,l.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,l.jsx)(i.admonition,{title:"\uC131\uB2A5 \uACE0\uB824",type:"warning",children:(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"getBoundingClientRect()"}),"\uB294 ",(0,l.jsx)(i.code,{children:"offsetWidth"}),"\uBCF4\uB2E4 \uC57D\uAC04 \uB290\uB9BD\uB2C8\uB2E4. \uD328\uB110 \uC218\uAC00 \uB9E4\uC6B0 \uB9CE\uAC70\uB098 \uBE48\uBC88\uD55C \uB9AC\uC0AC\uC774\uC988\uAC00 \uBC1C\uC0DD\uD558\uB294 \uACBD\uC6B0 \uC131\uB2A5 \uC601\uD5A5\uC744 \uACE0\uB824\uD558\uC138\uC694."]})}),"\n",(0,l.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,l.jsx)(i.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#autoresize",children:(0,l.jsx)(i.code,{children:"autoResize"})}),": \uC790\uB3D9 \uB9AC\uC0AC\uC774\uC988"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#useresizeobserver",children:(0,l.jsx)(i.code,{children:"useResizeObserver"})}),": ResizeObserver \uC0AC\uC6A9 \uC5EC\uBD80"]}),"\n"]})]})}function h(e={}){let{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},27449(e,i,n){n.d(i,{A:()=>d});var t=n(65723),l=n(19612);n(22155);let s="^4.11.4",a={react:{"@egjs/react-flicking":s,"@egjs/flicking":s},vue3:{"@egjs/vue3-flicking":s,"@egjs/flicking":s},vanilla:{"@egjs/flicking":s}},c=`<!DOCTYPE html>
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
</html>`,r=`import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>);`,o=`
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
`;function d({code:e,html:i,template:n="react",dependencies:s={},files:d={},css:p=""}){var f;let g,u,h;return(0,t.jsx)(l.OZ,{template:"vue3"===n?"vue":"vanilla"===n?"vanilla":"react",files:(h={"/styles.css":{code:u=p?`${o}
${p}`:o},...d},"react"===n?{"/App.tsx":{code:e},"/index.js":{code:r,hidden:!0},...h}:"vue3"===n?{"/src/App.vue":{code:e},...h}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),n=[],t=[],l=!1;for(let e of i)l?t.push(e):e.trimStart().startsWith("import ")||""===e.trim()?n.push(e.replace('"../styles.css"','"./styles.css"')):(l=!0,t.push(e));for(;t.length>0&&""===t[t.length-1].trim();)t.pop();return[...n,"","const _run = () => {",...t.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:u},"/index.html":{code:(g="<style>.flicking-viewport{opacity:0}</style>",(f=i||c).includes("</head>")?f.replace("</head>",`${g}
</head>`):g+f)},...d}),customSetup:{dependencies:{...a[n],...s}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===n?["/App.tsx","/styles.css"]:"vue3"===n?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===n?"/App.tsx":"vue3"===n?"/src/App.vue":"/src/index.js"}})}},72722(e,i,n){n.d(i,{A:()=>x});var t=n(65723),l=n(34622),s=n(7210),a=n(78863);n(22155);let c=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,r=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",o=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${c(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",d=e=>`${Object.keys(e).map(i=>`${i}: ${c(e[i],"'")}`).join(", ")}`,p=(e,{prefix:i,includeFlicking:n=!0}={})=>{let t=n?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&t.push(...e),`${t.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},f=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${d(e[1])} }`:e[1]??""}`).join(", ")})`,g=({options:e,panels:i,events:n={},methods:s={},plugins:a=[],siblings:d=[],imports:f=[],viewportClass:g=""})=>{let u=e=>`${Object.keys(e).map(i=>`${i}: ${c(e[i])}`).join(",\n  ")}`,h=Object.keys(s).map(e=>`const ${e} = ${s[e]};
`).join(""),x=e?`const flicking = new Flicking("#flick", {
  ${u(e)}
});

`:'const flicking = new Flicking("#flick")',m=a.length>0?`flicking.addPlugins(${a.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?u(e[1]):e[1]??""}
}`:""})`)});`:"",v=[...a.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...f],j=Object.keys(n).map(e=>{let i=n[e];return`flicking.on("${e}", ${i})
`}).join(""),$=i.filter(e=>e.isSlot);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${g&&` ${g}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${$.length?`
  ${$.map(e=>`<${e.tag}${r(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${d?"\n"+d.map(e=>`<${e.tag}${r(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,t.jsx)(l.A,{className:"language-js",title:"js",children:`${p(v)}

${h}${x}${m}${j}`.trim()})]})},u=({options:e,panels:i,events:n={},methods:s={},plugins:a,siblings:c,imports:d=[],viewportClass:g=""})=>{let u=a?`
  private _plugins = [${f(a)}];
`:"",h=i.filter(e=>e.isSlot),x=[["{ Component }","react"],[h.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],m=Object.keys(s).map(e=>`
const ${e} = ${s[e]};`).join("");m&&(m+="\n"),a&&x.push([`{ ${a.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),x.push(...d);let v=h.length?`
      <ViewportSlot>
        ${h.map(e=>`<${e.tag}${r(e,"className")}${o(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",j=Object.keys(n).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${n[e]}}`).join("");return(0,t.jsx)(l.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(x,{includeFlicking:!1})}
${m}
export default class DemoComponent extends Component {${u}
  public render() {
    return ${c?"<>\n    ":""}<Flicking${g&&` className="${g}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${a?" plugins={this._plugins}":""}${j}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e,"className")}${o(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${v}
    </Flicking>${c?`
    ${c.map(e=>`<${e.tag}${r(e,"className")}${o(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},h=({options:e,panels:i,events:n={},methods:s={},plugins:a,siblings:c=[],imports:g=[],viewportClass:u=""})=>{let h=d(e),x=i.filter(e=>e.isSlot),m=a?`,
  data() {
    return {
      plugins: [${f(a)}]
    }
  }`:"",v=x.length?`
  <template #viewport>
    ${x.map(e=>`<${e.tag}${r(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",j=[...(a??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],$=Object.keys(s),k=$.length>0?`,
  methods: {
    ${$.map(e=>`${e}: ${s[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",y=Object.keys(n).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${n[e]}"`).join("");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.A,{className:"language-html",title:"template",children:`<Flicking${u&&` class="${u}"`}${e?` :options="{ ${h} }"`:""}${a?' :plugins="plugins"':""}${y}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n  ")}${v}
</Flicking>${c?`
${c.map(e=>`<${e.tag}${r(e)}${o(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,t.jsx)(l.A,{className:"language-js",title:"script",children:`${p(j,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${m}${k}
}`})]})},x=({js:e,react:i,vue3:n,style:c,...r})=>(0,t.jsxs)("div",{children:[(0,t.jsxs)(a.A,{groupId:"cfc",defaultValue:"js",children:[(0,t.jsx)(s.A,{value:"react",label:"React",children:i||(0,t.jsx)(u,{...r})}),(0,t.jsx)(s.A,{value:"vue3",label:"Vue@3",children:n||(0,t.jsx)(h,{...r})}),(0,t.jsx)(s.A,{value:"js",label:"JavaScript",children:e||(0,t.jsx)(g,{...r})})]}),c&&(0,t.jsx)(l.A,{className:"language-css",title:"style",children:`${c}`})]})}}]);