"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["2738"],{74703(e,i,n){n.r(i),n.d(i,{metadata:()=>l,default:()=>x,frontMatter:()=>o,contentTitle:()=>h,toc:()=>g,assets:()=>p});var l=JSON.parse('{"id":"demos/advanced/lazy-load","title":"Lazy Load","description":"renderOnlyVisible \uC635\uC158\uACFC visibleChange \uC774\uBCA4\uD2B8\uB85C \uBCF4\uC774\uB294 \uD328\uB110\uB9CC \uC774\uBBF8\uC9C0\uB97C \uB85C\uB4DC\uD569\uB2C8\uB2E4","source":"@site/docs/demos/advanced/lazy-load.mdx","sourceDirName":"demos/advanced","slug":"/demos/advanced/lazy-load","permalink":"/flicking-docs-test/ko/docs/demos/advanced/lazy-load","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/advanced/lazy-load.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Lazy Load","id":"lazy-load","slug":"/demos/advanced/lazy-load","sidebar_position":6,"description":"renderOnlyVisible \uC635\uC158\uACFC visibleChange \uC774\uBCA4\uD2B8\uB85C \uBCF4\uC774\uB294 \uD328\uB110\uB9CC \uC774\uBBF8\uC9C0\uB97C \uB85C\uB4DC\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","lazy load","renderOnlyVisible","visibleChange","\uC131\uB2A5","\uCD5C\uC801\uD654"]},"sidebar":"demosSidebar","previous":{"title":"Resize On Contents Ready","permalink":"/flicking-docs-test/ko/docs/demos/advanced/resize-on-contents-ready"},"next":{"title":"Resize Optimization","permalink":"/flicking-docs-test/ko/docs/demos/advanced/resize-optimization"}}'),s=n(65723),t=n(54187),d=n(27449),c=n(72722);n(22155);let a=`
.flicking-panel {
  width: 250px;
  height: 180px;
  margin-right: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  color: white;
  position: relative;
  overflow: hidden;
}

.flicking-panel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.flicking-panel .placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #ddd;
  color: #999;
  font-size: 14px;
}

.info-bar {
  margin-top: 12px;
  padding: 8px 12px;
  background: #f5f5f5;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
}
`,r=()=>{let e=`import Flicking from "@egjs/react-flicking";
import "@egjs/flicking/dist/flicking.css";
import { useState, useCallback } from "react";

const TOTAL = 100;
const COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6"];
const getImageUrl = (i) => \`https://picsum.photos/seed/\${i}/250/180\`;

export default function App() {
  const [loadedSet, setLoadedSet] = useState(new Set());
  const [loadedCount, setLoadedCount] = useState(0);

  const handleVisibleChange = useCallback((e) => {
    setLoadedSet(prev => {
      const next = new Set(prev);
      e.added.forEach(panel => next.add(panel.index));
      const newCount = next.size;
      setLoadedCount(newCount);
      return next;
    });
  }, []);

  const handleReady = useCallback((e) => {
    const visiblePanels = e.currentTarget.visiblePanels;
    setLoadedSet(prev => {
      const next = new Set(prev);
      visiblePanels.forEach(panel => next.add(panel.index));
      setLoadedCount(next.size);
      return next;
    });
  }, []);

  return (
    <div>
      <Flicking
        renderOnlyVisible={true}
        align="prev"
        bound={true}
        preventDefaultOnDrag={true}
        onReady={handleReady}
        onVisibleChange={handleVisibleChange}
      >
        {Array.from({ length: TOTAL }, (_, i) => (
          <div className="flicking-panel" key={i}
               style={{ background: COLORS[i % COLORS.length] }}>
            {loadedSet.has(i)
              ? <img src={getImageUrl(i)} alt={\`Panel \${i}\`} />
              : <div className="placeholder">Panel {i}</div>
            }
          </div>
        ))}
      </Flicking>
      <div className="info-bar">
        \u{C774}\u{BBF8}\u{C9C0} \u{B85C}\u{B4DC}: {loadedCount} / {TOTAL}
        (\u{BCF4}\u{C774}\u{B294} \u{D328}\u{B110}\u{B9CC} \u{B85C}\u{B4DC})
      </div>
    </div>
  );
}`,i=`<template>
  <div>
    <Flicking
      :options="{ renderOnlyVisible: true, align: 'prev', bound: true, preventDefaultOnDrag: true }"
      @ready="onReady"
      @visible-change="onVisibleChange"
    >
      <div
        v-for="i in TOTAL"
        :key="i - 1"
        class="flicking-panel"
        :style="{ background: COLORS[(i - 1) % COLORS.length] }"
      >
        <img
          v-if="loadedSet.has(i - 1)"
          :src="getImageUrl(i - 1)"
          :alt="'Panel ' + (i - 1)"
        />
        <div v-else class="placeholder">Panel {{ i - 1 }}</div>
      </div>
    </Flicking>
    <div class="info-bar">
      \u{C774}\u{BBF8}\u{C9C0} \u{B85C}\u{B4DC}: {{ loadedCount }} / {{ TOTAL }}
      (\u{BCF4}\u{C774}\u{B294} \u{D328}\u{B110}\u{B9CC} \u{B85C}\u{B4DC})
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Flicking from "@egjs/vue3-flicking";
import "@egjs/flicking/dist/flicking.css";

const TOTAL = 100;
const COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6"];
const getImageUrl = (i) => \`https://picsum.photos/seed/\${i}/250/180\`;

const loadedSet = ref(new Set());
const loadedCount = ref(0);

const onReady = (e) => {
  e.currentTarget.visiblePanels.forEach(panel => {
    loadedSet.value.add(panel.index);
  });
  loadedCount.value = loadedSet.value.size;
};

const onVisibleChange = (e) => {
  e.added.forEach(panel => {
    loadedSet.value.add(panel.index);
  });
  loadedCount.value = loadedSet.value.size;
};
</script>`,n=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";

const TOTAL = 100;
const COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6"];
const getImageUrl = (i) => \`https://picsum.photos/seed/\${i}/250/180\`;

const camera = document.querySelector(".flicking-camera");
for (let i = 0; i < TOTAL; i++) {
  const panel = document.createElement("div");
  panel.className = "flicking-panel";
  panel.style.background = COLORS[i % COLORS.length];
  panel.innerHTML = \`<div class="placeholder">Panel \${i}</div>\`;
  camera.appendChild(panel);
}

const loadedSet = new Set();
const infoBar = document.querySelector(".info-bar");

const updateInfo = () => {
  infoBar.textContent = \`\u{C774}\u{BBF8}\u{C9C0} \u{B85C}\u{B4DC}: \${loadedSet.size} / \${TOTAL} (\u{BCF4}\u{C774}\u{B294} \u{D328}\u{B110}\u{B9CC} \u{B85C}\u{B4DC})\`;
};

const loadImage = (panel) => {
  const idx = panel.index;
  if (loadedSet.has(idx)) return;
  loadedSet.add(idx);
  panel.element.innerHTML = \`<img src="\${getImageUrl(idx)}" alt="Panel \${idx}" />\`;
  updateInfo();
};

const flicking = new Flicking("#flick", {
  renderOnlyVisible: true,
  align: "prev",
  bound: true,
  preventDefaultOnDrag: true
});

flicking.on("ready", (e) => {
  e.currentTarget.visiblePanels.forEach(loadImage);
});

flicking.on("visibleChange", (e) => {
  e.added.forEach(loadImage);
});`,l=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <div id="app">
    <div id="flick" class="flicking-viewport">
      <div class="flicking-camera"></div>
    </div>
    <div class="info-bar">\u{C774}\u{BBF8}\u{C9C0} \u{B85C}\u{B4DC}: 0 / 100 (\u{BCF4}\u{C774}\u{B294} \u{D328}\u{B110}\u{B9CC} \u{B85C}\u{B4DC})</div>
  </div>
</body>
</html>`;return(0,s.jsx)(c.A,{options:{renderOnlyVisible:!0,align:"prev",bound:!0},panels:[],react:(0,s.jsx)(d.A,{template:"react",code:e,css:a}),vue3:(0,s.jsx)(d.A,{template:"vue3",code:i,css:a}),js:(0,s.jsx)(d.A,{template:"vanilla",code:n,html:l,css:a})})},o={title:"Lazy Load",id:"lazy-load",slug:"/demos/advanced/lazy-load",sidebar_position:6,description:"renderOnlyVisible \uC635\uC158\uACFC visibleChange \uC774\uBCA4\uD2B8\uB85C \uBCF4\uC774\uB294 \uD328\uB110\uB9CC \uC774\uBBF8\uC9C0\uB97C \uB85C\uB4DC\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","lazy load","renderOnlyVisible","visibleChange","\uC131\uB2A5","\uCD5C\uC801\uD654"]},h="Lazy Load",p={},g=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158/\uC774\uBCA4\uD2B8",id:"\uC8FC\uC694-\uC635\uC158\uC774\uBCA4\uD2B8",level:3},{value:"\uC774\uBCA4\uD2B8 \uC18D\uC131",id:"\uC774\uBCA4\uD2B8-\uC18D\uC131",level:3},{value:"\uB3D9\uC791 \uBE44\uAD50",id:"\uB3D9\uC791-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"\uB3D9\uC791 \uC6D0\uB9AC",id:"\uB3D9\uC791-\uC6D0\uB9AC",level:3},{value:"\uCD08\uAE30 \uB85C\uB4DC",id:"\uCD08\uAE30-\uB85C\uB4DC",level:3},{value:"\uC5F0\uAD00 \uC635\uC158",id:"\uC5F0\uAD00-\uC635\uC158",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function j(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"lazy-load",children:"Lazy Load"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#renderonlyvisible",children:(0,s.jsx)(i.code,{children:"renderOnlyVisible"})})," \uC635\uC158\uACFC ",(0,s.jsx)(i.code,{children:"visibleChange"})," \uC774\uBCA4\uD2B8\uB97C \uC870\uD569\uD558\uC5EC, \uBCF4\uC774\uB294 \uD328\uB110\uB9CC \uC774\uBBF8\uC9C0\uB97C \uB85C\uB4DC\uD558\uB294 \uC131\uB2A5 \uCD5C\uC801\uD654 \uD328\uD134\uC785\uB2C8\uB2E4."]}),"\n",(0,s.jsx)(r,{}),"\n",(0,s.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,s.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158\uC774\uBCA4\uD2B8",children:"\uC8FC\uC694 \uC635\uC158/\uC774\uBCA4\uD2B8"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\uD56D\uBAA9"}),(0,s.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,s.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,s.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#renderonlyvisible",children:(0,s.jsx)(i.code,{children:"renderOnlyVisible"})})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"boolean"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"false"})}),(0,s.jsx)(i.td,{children:"\uBCF4\uC774\uB294 \uD328\uB110\uB9CC \uB80C\uB354\uB9C1"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingEvents#visiblechange",children:(0,s.jsx)(i.code,{children:"visibleChange"})})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"VisibleChangeEvent"})}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"\uD654\uBA74\uC5D0 \uBCF4\uC774\uB294 \uD328\uB110\uC774 \uBCC0\uACBD\uB420 \uB54C \uBC1C\uC0DD"})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"\uC774\uBCA4\uD2B8-\uC18D\uC131",children:"\uC774\uBCA4\uD2B8 \uC18D\uC131"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\uC18D\uC131"}),(0,s.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,s.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"added"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Panel[]"})}),(0,s.jsx)(i.td,{children:"\uC0C8\uB85C \uD654\uBA74\uC5D0 \uC9C4\uC785\uD55C \uD328\uB110"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"removed"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Panel[]"})}),(0,s.jsx)(i.td,{children:"\uD654\uBA74\uC5D0\uC11C \uBC97\uC5B4\uB09C \uD328\uB110"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"visiblePanels"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Panel[]"})}),(0,s.jsx)(i.td,{children:"\uD604\uC7AC \uD654\uBA74\uC5D0 \uBCF4\uC774\uB294 \uD328\uB110 \uC804\uCCB4"})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"\uB3D9\uC791-\uBE44\uAD50",children:"\uB3D9\uC791 \uBE44\uAD50"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\uBC29\uC2DD"}),(0,s.jsx)(i.th,{children:"\uC774\uBBF8\uC9C0 \uB85C\uB4DC \uC2DC\uC810"}),(0,s.jsx)(i.th,{children:"\uC801\uD569\uD55C \uC0C1\uD669"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"\uC77C\uBC18 \uB85C\uB529"}),(0,s.jsx)(i.td,{children:"\uBAA8\uB4E0 \uD328\uB110 \uD55C \uBC88\uC5D0 \uB85C\uB4DC"}),(0,s.jsx)(i.td,{children:"\uD328\uB110\uC774 \uC801\uC744 \uB54C (10\uAC1C \uC774\uD558)"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Lazy \uB85C\uB529"}),(0,s.jsx)(i.td,{children:"\uD654\uBA74\uC5D0 \uC9C4\uC785\uD560 \uB54C \uB85C\uB4DC"}),(0,s.jsx)(i.td,{children:"\uD328\uB110\uC774 \uB9CE\uC744 \uB54C (\uC218\uC2ED~\uC218\uBC31 \uAC1C)"})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,s.jsx)(i.h3,{id:"\uB3D9\uC791-\uC6D0\uB9AC",children:"\uB3D9\uC791 \uC6D0\uB9AC"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"renderOnlyVisible: true"}),"\uB85C \uBCF4\uC774\uB294 \uD328\uB110\uB9CC \uB80C\uB354\uB9C1"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"visibleChange"})," \uC774\uBCA4\uD2B8\uC758 ",(0,s.jsx)(i.code,{children:"added"})," \uBC30\uC5F4\uC5D0\uC11C \uC0C8\uB85C \uBCF4\uC774\uB294 \uD328\uB110 \uAC10\uC9C0"]}),"\n",(0,s.jsx)(i.li,{children:"\uD574\uB2F9 \uD328\uB110\uC758 \uC774\uBBF8\uC9C0\uB97C \uB85C\uB4DC\uD558\uACE0, \uB85C\uB4DC \uC5EC\uBD80\uB97C \uAE30\uB85D"}),"\n",(0,s.jsx)(i.li,{children:"\uD55C\uBC88 \uB85C\uB4DC\uB41C \uC774\uBBF8\uC9C0\uB294 \uB2E4\uC2DC \uB85C\uB4DC\uD558\uC9C0 \uC54A\uC74C (Set\uC73C\uB85C \uCD94\uC801)"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\uCD08\uAE30-\uB85C\uB4DC",children:"\uCD08\uAE30 \uB85C\uB4DC"}),"\n",(0,s.jsxs)(i.p,{children:["Flicking\uC774 \uCD08\uAE30\uD654\uB41C \uC9C1\uD6C4\uC5D0\uB294 ",(0,s.jsx)(i.code,{children:"visibleChange"}),"\uAC00 \uC544\uC9C1 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uC73C\uBBC0\uB85C, ",(0,s.jsx)(i.code,{children:"ready"})," \uC774\uBCA4\uD2B8\uC5D0\uC11C \uCD08\uAE30 visible \uD328\uB110\uC758 \uC774\uBBF8\uC9C0\uB97C \uB85C\uB4DC\uD574\uC57C \uD569\uB2C8\uB2E4."]}),"\n",(0,s.jsx)(i.h3,{id:"\uC5F0\uAD00-\uC635\uC158",children:"\uC5F0\uAD00 \uC635\uC158"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsxs)(i.strong,{children:[(0,s.jsx)(i.code,{children:"renderOnlyVisible"}),"\uACFC\uC758 \uAD00\uACC4"]}),": \uC774 \uC635\uC158\uC774 \uD575\uC2EC. \uBCF4\uC774\uC9C0 \uC54A\uB294 \uD328\uB110\uC758 \uB80C\uB354\uB9C1\uC744 \uC0DD\uB7B5\uD558\uC5EC DOM \uBD80\uB2F4\uC744 \uC904\uC784"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsxs)(i.strong,{children:[(0,s.jsx)(i.code,{children:"bound"}),"\uC640\uC758 \uAD00\uACC4"]}),": ",(0,s.jsx)(i.code,{children:"bound: true"}),"\uC640 \uD568\uAED8 \uC4F0\uBA74 \uB05D\uC5D0\uC11C \uBE48 \uACF5\uAC04 \uC5C6\uC774 \uC790\uC5F0\uC2A4\uB7EC\uC6B4 \uC2A4\uD06C\uB864 \uAC00\uB2A5"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsxs)(i.strong,{children:[(0,s.jsx)(i.code,{children:"align"}),"\uACFC\uC758 \uAD00\uACC4"]}),": ",(0,s.jsx)(i.code,{children:'align: "prev"'}),"\uB85C \uB9AC\uC2A4\uD2B8\uD615 \uB808\uC774\uC544\uC6C3\uC5D0 \uC801\uD569"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,s.jsx)(i.admonition,{title:"\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\uB300\uB7C9 \uC774\uBBF8\uC9C0\uAC00 \uD3EC\uD568\uB41C \uAC24\uB7EC\uB9AC (50\uAC1C \uC774\uC0C1)"}),"\n",(0,s.jsx)(i.li,{children:"\uBB34\uD55C \uC2A4\uD06C\uB864 \uD53C\uB4DC\uC5D0\uC11C \uC774\uBBF8\uC9C0 \uCD5C\uC801\uD654"}),"\n",(0,s.jsx)(i.li,{children:"\uBAA8\uBC14\uC77C \uD658\uACBD\uC5D0\uC11C \uB124\uD2B8\uC6CC\uD06C \uBD80\uB2F4 \uACBD\uAC10"}),"\n"]})}),"\n",(0,s.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,s.jsx)(i.admonition,{title:"\uC8FC\uC758",type:"warning",children:(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"renderOnlyVisible"}),"\uC740 \uD504\uB808\uC784\uC6CC\uD06C(React, Vue) \uD658\uACBD\uC5D0\uC11C \uC0AC\uC6A9\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"visibleChange"})," \uC774\uBCA4\uD2B8\uC758 ",(0,s.jsx)(i.code,{children:"added"})," \uD328\uB110\uC740 ",(0,s.jsx)(i.code,{children:"Panel"})," \uAC1D\uCCB4\uC774\uBA70, ",(0,s.jsx)(i.code,{children:"index"})," \uC18D\uC131\uC73C\uB85C \uC2DD\uBCC4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4"]}),"\n",(0,s.jsxs)(i.li,{children:["\uCD08\uAE30 \uB85C\uB4DC \uC2DC ",(0,s.jsx)(i.code,{children:"ready"})," \uC774\uBCA4\uD2B8\uC5D0\uC11C \uBCC4\uB3C4\uB85C visible \uD328\uB110\uC744 \uCC98\uB9AC\uD574\uC57C \uD569\uB2C8\uB2E4"]}),"\n"]})}),"\n",(0,s.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,s.jsx)(i.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#renderonlyvisible",children:(0,s.jsx)(i.code,{children:"renderOnlyVisible"})}),": \uBCF4\uC774\uB294 \uD328\uB110\uB9CC \uB80C\uB354\uB9C1"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#bound",children:(0,s.jsx)(i.code,{children:"bound"})}),": \uACBD\uACC4 \uC81C\uD55C"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"./render-only-visible",children:"Render Only Visible"}),": renderOnlyVisible \uC635\uC158 \uC790\uCCB4\uC758 on/off \uBE44\uAD50"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"./virtual-scroll",children:"Virtual Scroll"}),": virtual \uBAA8\uB4DC\uB97C \uC0AC\uC6A9\uD55C \uB300\uB7C9 \uD328\uB110 \uCC98\uB9AC"]}),"\n"]})]})}function x(e={}){let{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},27449(e,i,n){n.d(i,{A:()=>o});var l=n(65723),s=n(19612);n(22155);let t="^4.11.4",d={react:{"@egjs/react-flicking":t,"@egjs/flicking":t},vue3:{"@egjs/vue3-flicking":t,"@egjs/flicking":t},vanilla:{"@egjs/flicking":t}},c=`<!DOCTYPE html>
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
`;function o({code:e,html:i,template:n="react",dependencies:t={},files:o={},css:h=""}){var p;let g,j,x;return(0,l.jsx)(s.OZ,{template:"vue3"===n?"vue":"vanilla"===n?"vanilla":"react",files:(x={"/styles.css":{code:j=h?`${r}
${h}`:r},...o},"react"===n?{"/App.tsx":{code:e},"/index.js":{code:a,hidden:!0},...x}:"vue3"===n?{"/src/App.vue":{code:e},...x}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),n=[],l=[],s=!1;for(let e of i)s?l.push(e):e.trimStart().startsWith("import ")||""===e.trim()?n.push(e.replace('"../styles.css"','"./styles.css"')):(s=!0,l.push(e));for(;l.length>0&&""===l[l.length-1].trim();)l.pop();return[...n,"","const _run = () => {",...l.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:j},"/index.html":{code:(g="<style>.flicking-viewport{opacity:0}</style>",(p=i||c).includes("</head>")?p.replace("</head>",`${g}
</head>`):g+p)},...o}),customSetup:{dependencies:{...d[n],...t}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===n?["/App.tsx","/styles.css"]:"vue3"===n?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===n?"/App.tsx":"vue3"===n?"/src/App.vue":"/src/index.js"}})}},72722(e,i,n){n.d(i,{A:()=>u});var l=n(65723),s=n(34622),t=n(7210),d=n(78863);n(22155);let c=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,a=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",r=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${c(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(i=>`${i}: ${c(e[i],"'")}`).join(", ")}`,h=(e,{prefix:i,includeFlicking:n=!0}={})=>{let l=n?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&l.push(...e),`${l.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},p=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,g=({options:e,panels:i,events:n={},methods:t={},plugins:d=[],siblings:o=[],imports:p=[],viewportClass:g=""})=>{let j=e=>`${Object.keys(e).map(i=>`${i}: ${c(e[i])}`).join(",\n  ")}`,x=Object.keys(t).map(e=>`const ${e} = ${t[e]};
`).join(""),u=e?`const flicking = new Flicking("#flick", {
  ${j(e)}
});

`:'const flicking = new Flicking("#flick")',m=d.length>0?`flicking.addPlugins(${d.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?j(e[1]):e[1]??""}
}`:""})`)});`:"",v=[...d.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...p],f=Object.keys(n).map(e=>{let i=n[e];return`flicking.on("${e}", ${i})
`}).join(""),$=i.filter(e=>e.isSlot);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${g&&` ${g}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${$.length?`
  ${$.map(e=>`<${e.tag}${a(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${a(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,l.jsx)(s.A,{className:"language-js",title:"js",children:`${h(v)}

${x}${u}${m}${f}`.trim()})]})},j=({options:e,panels:i,events:n={},methods:t={},plugins:d,siblings:c,imports:o=[],viewportClass:g=""})=>{let j=d?`
  private _plugins = [${p(d)}];
`:"",x=i.filter(e=>e.isSlot),u=[["{ Component }","react"],[x.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],m=Object.keys(t).map(e=>`
const ${e} = ${t[e]};`).join("");m&&(m+="\n"),d&&u.push([`{ ${d.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),u.push(...o);let v=x.length?`
      <ViewportSlot>
        ${x.map(e=>`<${e.tag}${a(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",f=Object.keys(n).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${n[e]}}`).join("");return(0,l.jsx)(s.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${h(u,{includeFlicking:!1})}
${m}
export default class DemoComponent extends Component {${j}
  public render() {
    return ${c?"<>\n    ":""}<Flicking${g&&` className="${g}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${d?" plugins={this._plugins}":""}${f}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${v}
    </Flicking>${c?`
    ${c.map(e=>`<${e.tag}${a(e,"className")}${r(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},x=({options:e,panels:i,events:n={},methods:t={},plugins:d,siblings:c=[],imports:g=[],viewportClass:j=""})=>{let x=o(e),u=i.filter(e=>e.isSlot),m=d?`,
  data() {
    return {
      plugins: [${p(d)}]
    }
  }`:"",v=u.length?`
  <template #viewport>
    ${u.map(e=>`<${e.tag}${a(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",f=[...(d??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],$=Object.keys(t),b=$.length>0?`,
  methods: {
    ${$.map(e=>`${e}: ${t[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",y=Object.keys(n).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${n[e]}"`).join("");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.A,{className:"language-html",title:"template",children:`<Flicking${j&&` class="${j}"`}${e?` :options="{ ${x} }"`:""}${d?' :plugins="plugins"':""}${y}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n  ")}${v}
</Flicking>${c?`
${c.map(e=>`<${e.tag}${a(e)}${r(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,l.jsx)(s.A,{className:"language-js",title:"script",children:`${h(f,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${m}${b}
}`})]})},u=({js:e,react:i,vue3:n,style:c,...a})=>(0,l.jsxs)("div",{children:[(0,l.jsxs)(d.A,{groupId:"cfc",defaultValue:"js",children:[(0,l.jsx)(t.A,{value:"react",label:"React",children:i||(0,l.jsx)(j,{...a})}),(0,l.jsx)(t.A,{value:"vue3",label:"Vue@3",children:n||(0,l.jsx)(x,{...a})}),(0,l.jsx)(t.A,{value:"js",label:"JavaScript",children:e||(0,l.jsx)(g,{...a})})]}),c&&(0,l.jsx)(s.A,{className:"language-css",title:"style",children:`${c}`})]})}}]);