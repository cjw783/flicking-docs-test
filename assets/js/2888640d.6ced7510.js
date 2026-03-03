"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["8296"],{28251(e,i,l){l.r(i),l.d(i,{metadata:()=>n,default:()=>u,frontMatter:()=>o,contentTitle:()=>p,toc:()=>g,assets:()=>h});var n=JSON.parse('{"id":"demos/advanced/carousel","title":"Carousel","description":"circular, panelsPerView, align \uC635\uC158 \uC870\uD569\uC73C\uB85C \uC804\uD615\uC801 \uCE90\uB7EC\uC140 UI\uB97C \uAD6C\uC131\uD569\uB2C8\uB2E4","source":"@site/docs/demos/advanced/carousel.mdx","sourceDirName":"demos/advanced","slug":"/demos/advanced/carousel","permalink":"/flicking-docs-test/docs/demos/advanced/carousel","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/advanced/carousel.mdx","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"Carousel","id":"carousel","slug":"/demos/advanced/carousel","sidebar_position":9,"description":"circular, panelsPerView, align \uC635\uC158 \uC870\uD569\uC73C\uB85C \uC804\uD615\uC801 \uCE90\uB7EC\uC140 UI\uB97C \uAD6C\uC131\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","circular","panelsPerView","\uC21C\uD658","\uCE90\uB7EC\uC140","\uC2AC\uB77C\uC774\uB354"]},"sidebar":"demosSidebar","previous":{"title":"Add / Remove","permalink":"/flicking-docs-test/docs/demos/advanced/add-remove"},"next":{"title":"Fullpage Scroll","permalink":"/flicking-docs-test/docs/demos/advanced/fullpage-scroll"}}'),c=l(65723),s=l(54187),r=l(27449),a=l(72722);l(22155);let t=`
.flicking-panel {
  height: 200px;
  margin-right: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.demo-section {
  margin-bottom: 24px;
}

.demo-label {
  font-weight: bold;
  margin-bottom: 8px;
  color: #555;
  font-size: 14px;
}
`,d=()=>{let e=`import Flicking from "@egjs/react-flicking";
import "@egjs/flicking/dist/flicking.css";

const COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6",
                "#1abc9c", "#e67e22", "#2980b9"];

export default function App() {
  const panels = COLORS.map((color, i) => (
    <div className="flicking-panel" key={i} style={{ background: color }}>
      {i + 1}
    </div>
  ));

  return (
    <div>
      <div className="demo-section">
        <div className="demo-label">
          circular + panelsPerView: 3 + align: "prev"
        </div>
        <Flicking circular={true} panelsPerView={3} align="prev">
          {panels}
        </Flicking>
      </div>

      <div className="demo-section">
        <div className="demo-label">
          circular + panelsPerView: 1 + align: "center"
        </div>
        <Flicking circular={true} panelsPerView={1} align="center">
          {COLORS.map((color, i) => (
            <div className="flicking-panel" key={i}
                 style={{ background: color }}>
              {i + 1}
            </div>
          ))}
        </Flicking>
      </div>

      <div className="demo-section">
        <div className="demo-label">
          circular: false + panelsPerView: 3 (\u{B05D}\u{C774} \u{C788}\u{B294} \u{C2AC}\u{B77C}\u{C774}\u{B354})
        </div>
        <Flicking circular={false} panelsPerView={3} align="prev" bound={true}>
          {COLORS.map((color, i) => (
            <div className="flicking-panel" key={i}
                 style={{ background: color }}>
              {i + 1}
            </div>
          ))}
        </Flicking>
      </div>
    </div>
  );
}`,i=`<template>
  <div>
    <div class="demo-section">
      <div class="demo-label">
        circular + panelsPerView: 3 + align: "prev"
      </div>
      <Flicking :options="{ circular: true, panelsPerView: 3, align: 'prev' }">
        <div v-for="(color, i) in COLORS" :key="i"
             class="flicking-panel" :style="{ background: color }">
          {{ i + 1 }}
        </div>
      </Flicking>
    </div>

    <div class="demo-section">
      <div class="demo-label">
        circular + panelsPerView: 1 + align: "center"
      </div>
      <Flicking :options="{ circular: true, panelsPerView: 1, align: 'center' }">
        <div v-for="(color, i) in COLORS" :key="'b' + i"
             class="flicking-panel" :style="{ background: color }">
          {{ i + 1 }}
        </div>
      </Flicking>
    </div>

    <div class="demo-section">
      <div class="demo-label">
        circular: false + panelsPerView: 3 (\u{B05D}\u{C774} \u{C788}\u{B294} \u{C2AC}\u{B77C}\u{C774}\u{B354})
      </div>
      <Flicking :options="{ circular: false, panelsPerView: 3, align: 'prev', bound: true }">
        <div v-for="(color, i) in COLORS" :key="'c' + i"
             class="flicking-panel" :style="{ background: color }">
          {{ i + 1 }}
        </div>
      </Flicking>
    </div>
  </div>
</template>

<script setup>
import Flicking from "@egjs/vue3-flicking";
import "@egjs/flicking/dist/flicking.css";

const COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6",
                "#1abc9c", "#e67e22", "#2980b9"];
</script>`,l=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";

const COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6",
                "#1abc9c", "#e67e22", "#2980b9"];

function createPanels(containerId) {
  const camera = document.querySelector(\`#\${containerId} .flicking-camera\`);
  COLORS.forEach((color, i) => {
    const panel = document.createElement("div");
    panel.className = "flicking-panel";
    panel.style.background = color;
    panel.textContent = i + 1;
    camera.appendChild(panel);
  });
}

createPanels("flick1");
createPanels("flick2");
createPanels("flick3");

new Flicking("#flick1", {
  circular: true,
  panelsPerView: 3,
  align: "prev"
});

new Flicking("#flick2", {
  circular: true,
  panelsPerView: 1,
  align: "center"
});

new Flicking("#flick3", {
  circular: false,
  panelsPerView: 3,
  align: "prev",
  bound: true
});`,n=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <div id="app">
    <div class="demo-section">
      <div class="demo-label">circular + panelsPerView: 3 + align: "prev"</div>
      <div id="flick1" class="flicking-viewport">
        <div class="flicking-camera"></div>
      </div>
    </div>
    <div class="demo-section">
      <div class="demo-label">circular + panelsPerView: 1 + align: "center"</div>
      <div id="flick2" class="flicking-viewport">
        <div class="flicking-camera"></div>
      </div>
    </div>
    <div class="demo-section">
      <div class="demo-label">circular: false + panelsPerView: 3 (\u{B05D}\u{C774} \u{C788}\u{B294} \u{C2AC}\u{B77C}\u{C774}\u{B354})</div>
      <div id="flick3" class="flicking-viewport">
        <div class="flicking-camera"></div>
      </div>
    </div>
  </div>
</body>
</html>`;return(0,c.jsx)(a.A,{options:{},panels:[],react:(0,c.jsx)(r.A,{template:"react",code:e,css:t}),vue3:(0,c.jsx)(r.A,{template:"vue3",code:i,css:t}),js:(0,c.jsx)(r.A,{template:"vanilla",code:l,html:n,css:t})})},o={title:"Carousel",id:"carousel",slug:"/demos/advanced/carousel",sidebar_position:9,description:"circular, panelsPerView, align \uC635\uC158 \uC870\uD569\uC73C\uB85C \uC804\uD615\uC801 \uCE90\uB7EC\uC140 UI\uB97C \uAD6C\uC131\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","circular","panelsPerView","\uC21C\uD658","\uCE90\uB7EC\uC140","\uC2AC\uB77C\uC774\uB354"]},p="Carousel",h={},g=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uC870\uD569\uBCC4 \uBE44\uAD50",id:"\uC870\uD569\uBCC4-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"circular + panelsPerView \uC870\uD569",id:"circular--panelsperview-\uC870\uD569",level:3},{value:"align\uC758 \uC5ED\uD560",id:"align\uC758-\uC5ED\uD560",level:3},{value:"\uBE44\uC21C\uD658 \uC2AC\uB77C\uC774\uB354",id:"\uBE44\uC21C\uD658-\uC2AC\uB77C\uC774\uB354",level:3},{value:"\uC5F0\uAD00 \uC635\uC158",id:"\uC5F0\uAD00-\uC635\uC158",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function j(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.header,{children:(0,c.jsx)(i.h1,{id:"carousel",children:"Carousel"})}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#circular",children:(0,c.jsx)(i.code,{children:"circular"})}),", ",(0,c.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#panelsperview",children:(0,c.jsx)(i.code,{children:"panelsPerView"})}),", ",(0,c.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#align",children:(0,c.jsx)(i.code,{children:"align"})})," \uC635\uC158\uC744 \uC870\uD569\uD558\uC5EC \uB2E4\uC591\uD55C \uCE90\uB7EC\uC140 UI\uB97C \uAD6C\uC131\uD569\uB2C8\uB2E4."]}),"\n",(0,c.jsx)(d,{}),"\n",(0,c.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,c.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,c.jsxs)(i.table,{children:[(0,c.jsx)(i.thead,{children:(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.th,{children:"\uC635\uC158"}),(0,c.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,c.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,c.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,c.jsxs)(i.tbody,{children:[(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:(0,c.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#circular",children:(0,c.jsx)(i.code,{children:"circular"})})}),(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:"boolean"})}),(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:"false"})}),(0,c.jsx)(i.td,{children:"\uC21C\uD658 \uBAA8\uB4DC"})]}),(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:(0,c.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#panelsperview",children:(0,c.jsx)(i.code,{children:"panelsPerView"})})}),(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:"number"})}),(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:"-1"})}),(0,c.jsx)(i.td,{children:"\uD654\uBA74\uB2F9 \uD328\uB110 \uC218 (-1\uC774\uBA74 \uBE44\uD65C\uC131)"})]}),(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:(0,c.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#align",children:(0,c.jsx)(i.code,{children:"align"})})}),(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:"string | number"})}),(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:'"center"'})}),(0,c.jsx)(i.td,{children:"\uD328\uB110 \uC815\uB82C \uC704\uCE58"})]})]})]}),"\n",(0,c.jsx)(i.h3,{id:"\uC870\uD569\uBCC4-\uBE44\uAD50",children:"\uC870\uD569\uBCC4 \uBE44\uAD50"}),"\n",(0,c.jsxs)(i.table,{children:[(0,c.jsx)(i.thead,{children:(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.th,{children:"\uC870\uD569"}),(0,c.jsx)(i.th,{children:"\uB3D9\uC791"}),(0,c.jsx)(i.th,{children:"\uC801\uD569\uD55C \uC0C1\uD669"})]})}),(0,c.jsxs)(i.tbody,{children:[(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:'circular + panelsPerView: 3 + align: "prev"'})}),(0,c.jsx)(i.td,{children:"3\uAC1C\uC529 \uBCF4\uC774\uB294 \uBB34\uD55C \uC21C\uD658"}),(0,c.jsx)(i.td,{children:"\uC0C1\uD488 \uBAA9\uB85D, \uCE74\uB4DC \uCE90\uB7EC\uC140"})]}),(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:'circular + panelsPerView: 1 + align: "center"'})}),(0,c.jsx)(i.td,{children:"1\uAC1C\uC529 \uC911\uC559 \uC815\uB82C \uBB34\uD55C \uC21C\uD658"}),(0,c.jsx)(i.td,{children:"\uD788\uC5B4\uB85C \uC2AC\uB77C\uC774\uB354, \uBC30\uB108"})]}),(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:"circular: false + panelsPerView: 3 + bound"})}),(0,c.jsx)(i.td,{children:"\uB05D\uC774 \uC788\uB294 3\uC5F4 \uC2AC\uB77C\uC774\uB354"}),(0,c.jsx)(i.td,{children:"\uC720\uD55C \uBAA9\uB85D, \uAC24\uB7EC\uB9AC"})]})]})]}),"\n",(0,c.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,c.jsx)(i.h3,{id:"circular--panelsperview-\uC870\uD569",children:"circular + panelsPerView \uC870\uD569"}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"circular: true"}),"\uC640 ",(0,c.jsx)(i.code,{children:"panelsPerView"}),"\uB97C \uD568\uAED8 \uC0AC\uC6A9\uD558\uBA74 \uC9C0\uC815\uB41C \uC218\uC758 \uD328\uB110\uC774 \uD654\uBA74\uC5D0 \uBCF4\uC774\uBA74\uC11C \uBB34\uD55C \uC21C\uD658\uB429\uB2C8\uB2E4. \uD328\uB110 \uB108\uBE44\uB294 ",(0,c.jsx)(i.code,{children:"100% / panelsPerView"}),"\uB85C \uC790\uB3D9 \uACC4\uC0B0\uB429\uB2C8\uB2E4."]}),"\n",(0,c.jsx)(i.h3,{id:"align\uC758-\uC5ED\uD560",children:"align\uC758 \uC5ED\uD560"}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.code,{children:'"prev"'}),": \uD328\uB110\uC774 \uC67C\uCABD \uC815\uB82C \u2192 \uB9AC\uC2A4\uD2B8\uD615 \uCE90\uB7EC\uC140\uC5D0 \uC801\uD569"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.code,{children:'"center"'}),": \uD604\uC7AC \uD328\uB110\uC774 \uC911\uC559 \u2192 \uC2A4\uD3EC\uD2B8\uB77C\uC774\uD2B8\uD615\uC5D0 \uC801\uD569"]}),"\n"]}),"\n",(0,c.jsx)(i.h3,{id:"\uBE44\uC21C\uD658-\uC2AC\uB77C\uC774\uB354",children:"\uBE44\uC21C\uD658 \uC2AC\uB77C\uC774\uB354"}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"circular: false"})," + ",(0,c.jsx)(i.code,{children:"bound: true"}),"\uB85C \uC124\uC815\uD558\uBA74 \uB05D\uC5D0\uC11C \uBE48 \uACF5\uAC04 \uC5C6\uC774 \uBA48\uCD94\uB294 \uC77C\uBC18 \uC2AC\uB77C\uC774\uB354\uAC00 \uB429\uB2C8\uB2E4."]}),"\n",(0,c.jsx)(i.h3,{id:"\uC5F0\uAD00-\uC635\uC158",children:"\uC5F0\uAD00 \uC635\uC158"}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsxs)(i.strong,{children:[(0,c.jsx)(i.code,{children:"circularFallback"}),"\uACFC\uC758 \uAD00\uACC4"]}),": \uD328\uB110 \uC218\uAC00 \uBD80\uC871\uD558\uC5EC \uC21C\uD658\uC774 \uBD88\uAC00\uB2A5\uD560 \uB54C \uB300\uCCB4 \uB3D9\uC791 \uC124\uC815"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsxs)(i.strong,{children:[(0,c.jsx)(i.code,{children:"bound"}),"\uC640\uC758 \uAD00\uACC4"]}),": ",(0,c.jsx)(i.code,{children:"circular: false"}),"\uC77C \uB54C ",(0,c.jsx)(i.code,{children:"bound: true"}),"\uB85C \uBE48 \uACF5\uAC04 \uBC29\uC9C0"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsxs)(i.strong,{children:[(0,c.jsx)(i.code,{children:"noPanelStyleOverride"}),"\uC640\uC758 \uAD00\uACC4"]}),": ",(0,c.jsx)(i.code,{children:"panelsPerView"})," \uC0AC\uC6A9 \uC2DC \uD328\uB110 \uB108\uBE44 \uC790\uB3D9 \uC124\uC815\uC744 \uB044\uACE0 CSS\uB85C \uC9C1\uC811 \uC81C\uC5B4 \uAC00\uB2A5"]}),"\n"]}),"\n",(0,c.jsx)(i.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,c.jsx)(i.admonition,{title:"\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:"\uC0C1\uD488 \uCE90\uB7EC\uC140"}),": ",(0,c.jsx)(i.code,{children:"circular + panelsPerView: 3~5"})," \uC870\uD569"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:"\uD788\uC5B4\uB85C \uBC30\uB108"}),": ",(0,c.jsx)(i.code,{children:'circular + panelsPerView: 1 + align: "center"'})," \uC870\uD569"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:"\uC774\uBBF8\uC9C0 \uAC24\uB7EC\uB9AC"}),": ",(0,c.jsx)(i.code,{children:"circular: false + panelsPerView: 3 + bound"})," \uC870\uD569"]}),"\n"]})}),"\n",(0,c.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,c.jsx)(i.admonition,{title:"\uC8FC\uC758",type:"warning",children:(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.code,{children:"circular: true"}),"\uAC00 \uB3D9\uC791\uD558\uB824\uBA74 \uD328\uB110 \uCD1D \uB108\uBE44\uAC00 \uBDF0\uD3EC\uD2B8\uBCF4\uB2E4 \uCEE4\uC57C \uD569\uB2C8\uB2E4. \uD328\uB110\uC774 \uBD80\uC871\uD558\uBA74 ",(0,c.jsx)(i.code,{children:"circularFallback"})," \uC124\uC815\uC744 \uD655\uC778\uD558\uC138\uC694."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.code,{children:"panelsPerView"}),"\uB97C \uC124\uC815\uD558\uBA74 \uD328\uB110\uC758 CSS width\uAC00 \uC790\uB3D9\uC73C\uB85C \uC624\uBC84\uB77C\uC774\uB4DC\uB429\uB2C8\uB2E4. CSS\uC5D0\uC11C \uBCC4\uB3C4\uB85C width\uB97C \uC124\uC815\uD558\uBA74 \uCDA9\uB3CC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]})}),"\n",(0,c.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,c.jsx)(i.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#circular",children:(0,c.jsx)(i.code,{children:"circular"})}),": \uC21C\uD658 \uBAA8\uB4DC"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#panelsperview",children:(0,c.jsx)(i.code,{children:"panelsPerView"})}),": \uD654\uBA74\uB2F9 \uD328\uB110 \uC218"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#align",children:(0,c.jsx)(i.code,{children:"align"})}),": \uD328\uB110 \uC815\uB82C"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#circularfallback",children:(0,c.jsx)(i.code,{children:"circularFallback"})}),": \uC21C\uD658 \uBD88\uAC00 \uC2DC \uB300\uCCB4 \uB3D9\uC791"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#bound",children:(0,c.jsx)(i.code,{children:"bound"})}),": \uACBD\uACC4 \uC81C\uD55C"]}),"\n"]}),"\n",(0,c.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"../basic/circular",children:"Circular"}),": circular \uC635\uC158 \uC790\uCCB4\uC758 on/off \uBE44\uAD50"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"../basic/panels-per-view",children:"Panels Per View"}),": panelsPerView \uC635\uC158 \uC0C1\uC138"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"./fullpage-scroll",children:"Fullpage Scroll"}),": \uB2E4\uB978 \uC635\uC158 \uC870\uD569 \uD328\uD134"]}),"\n"]})]})}function u(e={}){let{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,c.jsx)(i,{...e,children:(0,c.jsx)(j,{...e})}):j(e)}},27449(e,i,l){l.d(i,{A:()=>o});var n=l(65723),c=l(19612);l(22155);let s="^4.11.4",r={react:{"@egjs/react-flicking":s,"@egjs/flicking":s},vue3:{"@egjs/vue3-flicking":s,"@egjs/flicking":s},vanilla:{"@egjs/flicking":s}},a=`<!DOCTYPE html>
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
</html>`,t=`import { StrictMode } from "react";
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
`;function o({code:e,html:i,template:l="react",dependencies:s={},files:o={},css:p=""}){var h;let g,j,u;return(0,n.jsx)(c.OZ,{template:"vue3"===l?"vue":"vanilla"===l?"vanilla":"react",files:(u={"/styles.css":{code:j=p?`${d}
${p}`:d},...o},"react"===l?{"/App.tsx":{code:e},"/index.js":{code:t,hidden:!0},...u}:"vue3"===l?{"/src/App.vue":{code:e},...u}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),l=[],n=[],c=!1;for(let e of i)c?n.push(e):e.trimStart().startsWith("import ")||""===e.trim()?l.push(e.replace('"../styles.css"','"./styles.css"')):(c=!0,n.push(e));for(;n.length>0&&""===n[n.length-1].trim();)n.pop();return[...l,"","const _run = () => {",...n.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:j},"/index.html":{code:(g="<style>.flicking-viewport{opacity:0}</style>",(h=i||a).includes("</head>")?h.replace("</head>",`${g}
</head>`):g+h)},...o}),customSetup:{dependencies:{...r[l],...s}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===l?["/App.tsx","/styles.css"]:"vue3"===l?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===l?"/App.tsx":"vue3"===l?"/src/App.vue":"/src/index.js"}})}},72722(e,i,l){l.d(i,{A:()=>x});var n=l(65723),c=l(34622),s=l(7210),r=l(78863);l(22155);let a=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,t=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",d=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${a(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(i=>`${i}: ${a(e[i],"'")}`).join(", ")}`,p=(e,{prefix:i,includeFlicking:l=!0}={})=>{let n=l?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&n.push(...e),`${n.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},h=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,g=({options:e,panels:i,events:l={},methods:s={},plugins:r=[],siblings:o=[],imports:h=[],viewportClass:g=""})=>{let j=e=>`${Object.keys(e).map(i=>`${i}: ${a(e[i])}`).join(",\n  ")}`,u=Object.keys(s).map(e=>`const ${e} = ${s[e]};
`).join(""),x=e?`const flicking = new Flicking("#flick", {
  ${j(e)}
});

`:'const flicking = new Flicking("#flick")',m=r.length>0?`flicking.addPlugins(${r.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?j(e[1]):e[1]??""}
}`:""})`)});`:"",v=[...r.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...h],f=Object.keys(l).map(e=>{let i=l[e];return`flicking.on("${e}", ${i})
`}).join(""),$=i.filter(e=>e.isSlot);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${g&&` ${g}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${t(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${$.length?`
  ${$.map(e=>`<${e.tag}${t(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${t(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,n.jsx)(c.A,{className:"language-js",title:"js",children:`${p(v)}

${u}${x}${m}${f}`.trim()})]})},j=({options:e,panels:i,events:l={},methods:s={},plugins:r,siblings:a,imports:o=[],viewportClass:g=""})=>{let j=r?`
  private _plugins = [${h(r)}];
`:"",u=i.filter(e=>e.isSlot),x=[["{ Component }","react"],[u.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],m=Object.keys(s).map(e=>`
const ${e} = ${s[e]};`).join("");m&&(m+="\n"),r&&x.push([`{ ${r.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),x.push(...o);let v=u.length?`
      <ViewportSlot>
        ${u.map(e=>`<${e.tag}${t(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",f=Object.keys(l).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${l[e]}}`).join("");return(0,n.jsx)(c.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(x,{includeFlicking:!1})}
${m}
export default class DemoComponent extends Component {${j}
  public render() {
    return ${a?"<>\n    ":""}<Flicking${g&&` className="${g}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${r?" plugins={this._plugins}":""}${f}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${t(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${v}
    </Flicking>${a?`
    ${a.map(e=>`<${e.tag}${t(e,"className")}${d(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},u=({options:e,panels:i,events:l={},methods:s={},plugins:r,siblings:a=[],imports:g=[],viewportClass:j=""})=>{let u=o(e),x=i.filter(e=>e.isSlot),m=r?`,
  data() {
    return {
      plugins: [${h(r)}]
    }
  }`:"",v=x.length?`
  <template #viewport>
    ${x.map(e=>`<${e.tag}${t(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",f=[...(r??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],$=Object.keys(s),k=$.length>0?`,
  methods: {
    ${$.map(e=>`${e}: ${s[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",b=Object.keys(l).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${l[e]}"`).join("");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.A,{className:"language-html",title:"template",children:`<Flicking${j&&` class="${j}"`}${e?` :options="{ ${u} }"`:""}${r?' :plugins="plugins"':""}${b}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${t(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n  ")}${v}
</Flicking>${a?`
${a.map(e=>`<${e.tag}${t(e)}${d(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,n.jsx)(c.A,{className:"language-js",title:"script",children:`${p(f,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${m}${k}
}`})]})},x=({js:e,react:i,vue3:l,style:a,...t})=>(0,n.jsxs)("div",{children:[(0,n.jsxs)(r.A,{groupId:"cfc",defaultValue:"js",children:[(0,n.jsx)(s.A,{value:"react",label:"React",children:i||(0,n.jsx)(j,{...t})}),(0,n.jsx)(s.A,{value:"vue3",label:"Vue@3",children:l||(0,n.jsx)(u,{...t})}),(0,n.jsx)(s.A,{value:"js",label:"JavaScript",children:e||(0,n.jsx)(g,{...t})})]}),a&&(0,n.jsx)(c.A,{className:"language-css",title:"style",children:`${a}`})]})}}]);