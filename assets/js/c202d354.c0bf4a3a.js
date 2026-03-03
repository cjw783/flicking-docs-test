"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["2439"],{51794(e,i,s){s.r(i),s.d(i,{metadata:()=>n,default:()=>u,frontMatter:()=>o,contentTitle:()=>p,toc:()=>m,assets:()=>g});var n=JSON.parse('{"id":"demos/advanced/resize-on-contents-ready","title":"Resize On Contents Ready","description":"resizeOnContentsReady \uC635\uC158\uC73C\uB85C \uC774\uBBF8\uC9C0/\uBE44\uB514\uC624 \uB85C\uB4DC \uD6C4 \uC790\uB3D9\uC73C\uB85C \uB808\uC774\uC544\uC6C3\uC744 \uC7AC\uACC4\uC0B0\uD569\uB2C8\uB2E4","source":"@site/docs/demos/advanced/resize-on-contents-ready.mdx","sourceDirName":"demos/advanced","slug":"/demos/advanced/resize-on-contents-ready","permalink":"/flicking-docs-test/docs/demos/advanced/resize-on-contents-ready","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/advanced/resize-on-contents-ready.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Resize On Contents Ready","id":"resize-on-contents-ready","slug":"/demos/advanced/resize-on-contents-ready","sidebar_position":5,"description":"resizeOnContentsReady \uC635\uC158\uC73C\uB85C \uC774\uBBF8\uC9C0/\uBE44\uB514\uC624 \uB85C\uB4DC \uD6C4 \uC790\uB3D9\uC73C\uB85C \uB808\uC774\uC544\uC6C3\uC744 \uC7AC\uACC4\uC0B0\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","resize","image","video","load","adaptive","\uB9AC\uC0AC\uC774\uC988","\uC774\uBBF8\uC9C0","\uB85C\uB4DC"]},"sidebar":"demosSidebar","previous":{"title":"Infinite Scroll","permalink":"/flicking-docs-test/docs/demos/advanced/infinite-scroll"},"next":{"title":"Lazy Load","permalink":"/flicking-docs-test/docs/demos/advanced/lazy-load"}}'),t=s(65723),l=s(54187),a=s(27449),d=s(72722);s(22155);let r=`
.flicking-viewport {
  margin-bottom: 8px;
}

.flicking-panel {
  width: 250px;
  margin-right: 10px;
  border-radius: 8px;
  overflow: hidden;
  background: #f5f5f5;
}

.flicking-panel img {
  width: 100%;
  height: auto;
  display: block;
}

.panel-label {
  padding: 8px;
  text-align: center;
  font-weight: bold;
  color: #333;
  background: #e0e0e0;
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
.status-display {
  margin-top: 8px;
  padding: 8px 12px;
  background: #f5f5f5;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
}
.status-display strong {
  color: #3e8ed0;
}
`,c=()=>{let e=`import { useRef, useState } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "./styles.css";

// \u{B2E4}\u{C591}\u{D55C} \u{D06C}\u{AE30}\u{C758} \u{C774}\u{BBF8}\u{C9C0} URL (placeholder)
const IMAGES = [
  "https://picsum.photos/250/150?random=1",
  "https://picsum.photos/250/200?random=2",
  "https://picsum.photos/250/180?random=3",
  "https://picsum.photos/250/220?random=4",
];

export default function App() {
  const [autoResizeStatus, setAutoResizeStatus] = useState("\u{C774}\u{BBF8}\u{C9C0} \u{B85C}\u{B529} \u{C911}...");
  const [manualResizeStatus, setManualResizeStatus] = useState("\u{C774}\u{BBF8}\u{C9C0} \u{B85C}\u{B529} \u{C911}...");

  return (
    <div>
      {/* resizeOnContentsReady: true + adaptive: true */}
      <div className="demo-container">
        <div className="demo-label">resizeOnContentsReady: true + adaptive: true</div>
        <div className="demo-info">\u{C774}\u{BBF8}\u{C9C0} \u{B85C}\u{B4DC} \u{C644}\u{B8CC} \u{C2DC} \u{C790}\u{B3D9}\u{C73C}\u{B85C} resize() \u{D638}\u{CD9C} \u{2192} \u{BDF0}\u{D3EC}\u{D2B8} \u{B192}\u{C774} \u{C790}\u{B3D9} \u{C870}\u{C815}</div>
        <Flicking
          align="prev"
          adaptive={true}
          resizeOnContentsReady={true}
          preventDefaultOnDrag={true}
          onReady={() => setAutoResizeStatus("Flicking \u{CD08}\u{AE30}\u{D654} \u{C644}\u{B8CC}")}
          onContentError={(e) => setAutoResizeStatus("\u{C774}\u{BBF8}\u{C9C0} \u{B85C}\u{B4DC} \u{C2E4}\u{D328}")}
        >
          {IMAGES.map((src, i) => (
            <div key={i} className="flicking-panel">
              <img
                src={src}
                alt={\`Panel \${i + 1}\`}
                onLoad={() => setAutoResizeStatus(\`\u{C774}\u{BBF8}\u{C9C0} \${i + 1} \u{B85C}\u{B4DC} \u{C644}\u{B8CC} \u{2192} \u{C790}\u{B3D9} resize\`)}
              />
            </div>
          ))}
        </Flicking>
        <div className="status-display">
          \u{C0C1}\u{D0DC}: <strong>{autoResizeStatus}</strong>
        </div>
      </div>

      {/* resizeOnContentsReady: false (\u{AE30}\u{BCF8}\u{AC12}) */}
      <div className="demo-container">
        <div className="demo-label">resizeOnContentsReady: false (\u{AE30}\u{BCF8}\u{AC12})</div>
        <div className="demo-info">\u{C774}\u{BBF8}\u{C9C0} \u{B85C}\u{B4DC} \u{D6C4}\u{C5D0}\u{B3C4} resize() \u{C790}\u{B3D9} \u{D638}\u{CD9C} \u{C548} \u{B428} \u{2192} \u{B192}\u{C774}\u{AC00} \u{B9DE}\u{C9C0} \u{C54A}\u{C744} \u{C218} \u{C788}\u{C74C}</div>
        <Flicking
          align="prev"
          adaptive={true}
          resizeOnContentsReady={false}
          preventDefaultOnDrag={true}
          onReady={() => setManualResizeStatus("Flicking \u{CD08}\u{AE30}\u{D654} \u{C644}\u{B8CC} (\u{C774}\u{BBF8}\u{C9C0} \u{B85C}\u{B4DC} \u{C804})")}
        >
          {IMAGES.map((src, i) => (
            <div key={i} className="flicking-panel">
              <img
                src={src}
                alt={\`Panel \${i + 1}\`}
                onLoad={() => setManualResizeStatus(\`\u{C774}\u{BBF8}\u{C9C0} \${i + 1} \u{B85C}\u{B4DC} \u{C644}\u{B8CC} (resize \u{C548} \u{B428})\`)}
              />
            </div>
          ))}
        </Flicking>
        <div className="status-display">
          \u{C0C1}\u{D0DC}: <strong>{manualResizeStatus}</strong>
        </div>
      </div>
    </div>
  );
}`,i=(0,t.jsx)(a.A,{template:"react",code:e,css:r}),s=`<template>
  <div>
    <!-- resizeOnContentsReady: true + adaptive: true -->
    <div class="demo-container">
      <div class="demo-label">resizeOnContentsReady: true + adaptive: true</div>
      <div class="demo-info">\u{C774}\u{BBF8}\u{C9C0} \u{B85C}\u{B4DC} \u{C644}\u{B8CC} \u{C2DC} \u{C790}\u{B3D9}\u{C73C}\u{B85C} resize() \u{D638}\u{CD9C} \u{2192} \u{BDF0}\u{D3EC}\u{D2B8} \u{B192}\u{C774} \u{C790}\u{B3D9} \u{C870}\u{C815}</div>
      <Flicking
        align="prev"
        :adaptive="true"
        :resizeOnContentsReady="true"
        :preventDefaultOnDrag="true"
        @ready="autoResizeStatus = 'Flicking \u{CD08}\u{AE30}\u{D654} \u{C644}\u{B8CC}'"
      >
        <div v-for="(src, i) in images" :key="'auto-' + i" class="flicking-panel">
          <img
            :src="src"
            :alt="'Panel ' + (i + 1)"
            @load="autoResizeStatus = '\u{C774}\u{BBF8}\u{C9C0} ' + (i + 1) + ' \u{B85C}\u{B4DC} \u{C644}\u{B8CC} \u{2192} \u{C790}\u{B3D9} resize'"
          />
          <div class="panel-label">Panel {{ i + 1 }}</div>
        </div>
      </Flicking>
      <div class="status-display">
        \u{C0C1}\u{D0DC}: <strong>{{ autoResizeStatus }}</strong>
      </div>
    </div>

    <!-- resizeOnContentsReady: false (\u{AE30}\u{BCF8}\u{AC12}) -->
    <div class="demo-container">
      <div class="demo-label">resizeOnContentsReady: false (\u{AE30}\u{BCF8}\u{AC12})</div>
      <div class="demo-info">\u{C774}\u{BBF8}\u{C9C0} \u{B85C}\u{B4DC} \u{D6C4}\u{C5D0}\u{B3C4} resize() \u{C790}\u{B3D9} \u{D638}\u{CD9C} \u{C548} \u{B428} \u{2192} \u{B192}\u{C774}\u{AC00} \u{B9DE}\u{C9C0} \u{C54A}\u{C744} \u{C218} \u{C788}\u{C74C}</div>
      <Flicking
        align="prev"
        :adaptive="true"
        :resizeOnContentsReady="false"
        :preventDefaultOnDrag="true"
        @ready="manualResizeStatus = 'Flicking \u{CD08}\u{AE30}\u{D654} \u{C644}\u{B8CC} (\u{C774}\u{BBF8}\u{C9C0} \u{B85C}\u{B4DC} \u{C804})'"
      >
        <div v-for="(src, i) in images" :key="'manual-' + i" class="flicking-panel">
          <img
            :src="src"
            :alt="'Panel ' + (i + 1)"
            @load="manualResizeStatus = '\u{C774}\u{BBF8}\u{C9C0} ' + (i + 1) + ' \u{B85C}\u{B4DC} \u{C644}\u{B8CC} (resize \u{C548} \u{B428})'"
          />
          <div class="panel-label">Panel {{ i + 1 }}</div>
        </div>
      </Flicking>
      <div class="status-display">
        \u{C0C1}\u{D0DC}: <strong>{{ manualResizeStatus }}</strong>
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
      images: [
        "https://picsum.photos/250/150?random=1",
        "https://picsum.photos/250/200?random=2",
        "https://picsum.photos/250/180?random=3",
        "https://picsum.photos/250/220?random=4",
      ],
      autoResizeStatus: "\u{C774}\u{BBF8}\u{C9C0} \u{B85C}\u{B529} \u{C911}...",
      manualResizeStatus: "\u{C774}\u{BBF8}\u{C9C0} \u{B85C}\u{B529} \u{C911}..."
    };
  }
};
</script>

<style>
.flicking-panel {
  width: 250px;
  margin-right: 10px;
  border-radius: 8px;
  overflow: hidden;
  background: #f5f5f5;
}
.flicking-panel img {
  width: 100%;
  height: auto;
  display: block;
}
.panel-label {
  padding: 8px;
  text-align: center;
  font-weight: bold;
  color: #333;
  background: #e0e0e0;
}
.demo-container { margin-bottom: 32px; }
.demo-label { font-weight: bold; margin-bottom: 8px; color: #666; }
.demo-info { font-size: 14px; color: #888; margin-bottom: 12px; }
.status-display { margin-top: 8px; padding: 8px 12px; background: #f5f5f5; border-radius: 4px; font-size: 14px; color: #333; }
.status-display strong { color: #3e8ed0; }
</style>`,n=(0,t.jsx)(a.A,{template:"vue3",code:s,css:r}),l=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

// resizeOnContentsReady: true + adaptive: true
const autoFlicking = new Flicking("#flick-auto", {
  align: "prev",
  adaptive: true,
  resizeOnContentsReady: true,
  preventDefaultOnDrag: true
});

autoFlicking.on("ready", () => {
  document.getElementById("auto-status").textContent = "Flicking \u{CD08}\u{AE30}\u{D654} \u{C644}\u{B8CC}";
});

// resizeOnContentsReady: false (\u{AE30}\u{BCF8}\u{AC12})
const manualFlicking = new Flicking("#flick-manual", {
  align: "prev",
  adaptive: true,
  resizeOnContentsReady: false,
  preventDefaultOnDrag: true
});

manualFlicking.on("ready", () => {
  document.getElementById("manual-status").textContent = "Flicking \u{CD08}\u{AE30}\u{D654} \u{C644}\u{B8CC} (\u{C774}\u{BBF8}\u{C9C0} \u{B85C}\u{B4DC} \u{C804})";
});

// \u{C774}\u{BBF8}\u{C9C0} \u{B85C}\u{B4DC} \u{C0C1}\u{D0DC} \u{CD94}\u{C801}
document.querySelectorAll("#flick-auto img").forEach((img, i) => {
  img.addEventListener("load", () => {
    document.getElementById("auto-status").textContent = \`\u{C774}\u{BBF8}\u{C9C0} \${i + 1} \u{B85C}\u{B4DC} \u{C644}\u{B8CC} \u{2192} \u{C790}\u{B3D9} resize\`;
  });
});

document.querySelectorAll("#flick-manual img").forEach((img, i) => {
  img.addEventListener("load", () => {
    document.getElementById("manual-status").textContent = \`\u{C774}\u{BBF8}\u{C9C0} \${i + 1} \u{B85C}\u{B4DC} \u{C644}\u{B8CC} (resize \u{C548} \u{B428})\`;
  });
});
`,c=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <!-- resizeOnContentsReady: true + adaptive: true -->
  <div class="demo-container">
    <div class="demo-label">resizeOnContentsReady: true + adaptive: true</div>
    <div class="demo-info">\u{C774}\u{BBF8}\u{C9C0} \u{B85C}\u{B4DC} \u{C644}\u{B8CC} \u{C2DC} \u{C790}\u{B3D9}\u{C73C}\u{B85C} resize() \u{D638}\u{CD9C} \u{2192} \u{BDF0}\u{D3EC}\u{D2B8} \u{B192}\u{C774} \u{C790}\u{B3D9} \u{C870}\u{C815}</div>
    <div id="flick-auto" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel">
          <img src="https://picsum.photos/250/150?random=1" alt="Panel 1" />
          <div class="panel-label">Panel 1</div>
        </div>
        <div class="flicking-panel">
          <img src="https://picsum.photos/250/200?random=2" alt="Panel 2" />
          <div class="panel-label">Panel 2</div>
        </div>
        <div class="flicking-panel">
          <img src="https://picsum.photos/250/180?random=3" alt="Panel 3" />
          <div class="panel-label">Panel 3</div>
        </div>
        <div class="flicking-panel">
          <img src="https://picsum.photos/250/220?random=4" alt="Panel 4" />
          <div class="panel-label">Panel 4</div>
        </div>
      </div>
    </div>
    <div class="status-display">
      \u{C0C1}\u{D0DC}: <strong id="auto-status">\u{C774}\u{BBF8}\u{C9C0} \u{B85C}\u{B529} \u{C911}...</strong>
    </div>
  </div>

  <!-- resizeOnContentsReady: false (\u{AE30}\u{BCF8}\u{AC12}) -->
  <div class="demo-container">
    <div class="demo-label">resizeOnContentsReady: false (\u{AE30}\u{BCF8}\u{AC12})</div>
    <div class="demo-info">\u{C774}\u{BBF8}\u{C9C0} \u{B85C}\u{B4DC} \u{D6C4}\u{C5D0}\u{B3C4} resize() \u{C790}\u{B3D9} \u{D638}\u{CD9C} \u{C548} \u{B428} \u{2192} \u{B192}\u{C774}\u{AC00} \u{B9DE}\u{C9C0} \u{C54A}\u{C744} \u{C218} \u{C788}\u{C74C}</div>
    <div id="flick-manual" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="flicking-panel">
          <img src="https://picsum.photos/250/150?random=5" alt="Panel 1" />
          <div class="panel-label">Panel 1</div>
        </div>
        <div class="flicking-panel">
          <img src="https://picsum.photos/250/200?random=6" alt="Panel 2" />
          <div class="panel-label">Panel 2</div>
        </div>
        <div class="flicking-panel">
          <img src="https://picsum.photos/250/180?random=7" alt="Panel 3" />
          <div class="panel-label">Panel 3</div>
        </div>
        <div class="flicking-panel">
          <img src="https://picsum.photos/250/220?random=8" alt="Panel 4" />
          <div class="panel-label">Panel 4</div>
        </div>
      </div>
    </div>
    <div class="status-display">
      \u{C0C1}\u{D0DC}: <strong id="manual-status">\u{C774}\u{BBF8}\u{C9C0} \u{B85C}\u{B529} \u{C911}...</strong>
    </div>
  </div>

</body>
</html>`,o=(0,t.jsx)(a.A,{template:"vanilla",code:l,html:c,css:r});return(0,t.jsx)(d.A,{options:{},panels:[],react:i,vue3:n,js:o})},o={title:"Resize On Contents Ready",id:"resize-on-contents-ready",slug:"/demos/advanced/resize-on-contents-ready",sidebar_position:5,description:"resizeOnContentsReady \uC635\uC158\uC73C\uB85C \uC774\uBBF8\uC9C0/\uBE44\uB514\uC624 \uB85C\uB4DC \uD6C4 \uC790\uB3D9\uC73C\uB85C \uB808\uC774\uC544\uC6C3\uC744 \uC7AC\uACC4\uC0B0\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","resize","image","video","load","adaptive","\uB9AC\uC0AC\uC774\uC988","\uC774\uBBF8\uC9C0","\uB85C\uB4DC"]},p="Resize On Contents Ready",g={},m=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uBAA8\uB4DC\uBCC4 \uBE44\uAD50",id:"\uBAA8\uB4DC\uBCC4-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"\uB3D9\uC791 \uC6D0\uB9AC",id:"\uB3D9\uC791-\uC6D0\uB9AC",level:3},{value:"adaptive\uC640 \uD568\uAED8 \uC0AC\uC6A9",id:"adaptive\uC640-\uD568\uAED8-\uC0AC\uC6A9",level:3},{value:"\uAC10\uC9C0 \uB300\uC0C1 \uCF58\uD150\uCE20",id:"\uAC10\uC9C0-\uB300\uC0C1-\uCF58\uD150\uCE20",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uC218\uB3D9 resize \uB300\uC548",id:"\uC218\uB3D9-resize-\uB300\uC548",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uBA54\uC11C\uB4DC",id:"\uAD00\uB828-\uBA54\uC11C\uB4DC",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function h(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"resize-on-contents-ready",children:"Resize On Contents Ready"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#resizeoncontentsready",children:(0,t.jsx)(i.code,{children:"resizeOnContentsReady"})})," \uC635\uC158\uC73C\uB85C \uC774\uBBF8\uC9C0/\uBE44\uB514\uC624 \uB85C\uB4DC \uD6C4 \uC790\uB3D9\uC73C\uB85C \uB808\uC774\uC544\uC6C3\uC744 \uC7AC\uACC4\uC0B0\uD569\uB2C8\uB2E4."]}),"\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,t.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\uC635\uC158"}),(0,t.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,t.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,t.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#resizeoncontentsready",children:(0,t.jsx)(i.code,{children:"resizeOnContentsReady"})})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"boolean"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"false"})}),(0,t.jsx)(i.td,{children:"\uCF58\uD150\uCE20 \uB85C\uB4DC \uC2DC \uC790\uB3D9 resize"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#adaptive",children:(0,t.jsx)(i.code,{children:"adaptive"})})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"boolean"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"false"})}),(0,t.jsx)(i.td,{children:"\uD328\uB110 \uB192\uC774\uC5D0 \uB9DE\uAC8C \uBDF0\uD3EC\uD2B8 \uB192\uC774 \uC870\uC815"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"\uBAA8\uB4DC\uBCC4-\uBE44\uAD50",children:"\uBAA8\uB4DC\uBCC4 \uBE44\uAD50"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"resizeOnContentsReady"}),(0,t.jsx)(i.th,{children:"adaptive"}),(0,t.jsx)(i.th,{children:"\uB3D9\uC791"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"false"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"true"})}),(0,t.jsx)(i.td,{children:"\uCD08\uAE30\uD654 \uC2DC\uC810\uC758 \uB192\uC774\uB85C \uACE0\uC815, \uC774\uBBF8\uC9C0 \uB85C\uB4DC \uD6C4 \uBD88\uC77C\uCE58 \uAC00\uB2A5"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"true"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"true"})}),(0,t.jsx)(i.td,{children:"\uC774\uBBF8\uC9C0 \uB85C\uB4DC \uC2DC \uC790\uB3D9 resize \u2192 \uBDF0\uD3EC\uD2B8 \uB192\uC774 \uC790\uB3D9 \uC870\uC815"})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,t.jsx)(i.h3,{id:"\uB3D9\uC791-\uC6D0\uB9AC",children:"\uB3D9\uC791 \uC6D0\uB9AC"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Flicking \uCD08\uAE30\uD654 \uC2DC\uC810\uC5D0 \uD328\uB110 \uD06C\uAE30 \uACC4\uC0B0"}),"\n",(0,t.jsx)(i.li,{children:"\uC774\uBBF8\uC9C0/\uBE44\uB514\uC624\uAC00 \uC544\uC9C1 \uB85C\uB4DC\uB418\uC9C0 \uC54A\uC544 \uD06C\uAE30\uAC00 0 \uB610\uB294 placeholder \uD06C\uAE30"}),"\n",(0,t.jsx)(i.li,{children:"\uC774\uBBF8\uC9C0 \uB85C\uB4DC \uC644\uB8CC \uD6C4 \uC2E4\uC81C \uD06C\uAE30\uB85C \uBCC0\uACBD"}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"resizeOnContentsReady: true"}),"\uBA74 \uC790\uB3D9\uC73C\uB85C ",(0,t.jsx)(i.code,{children:"resize()"})," \uD638\uCD9C \u2192 \uB808\uC774\uC544\uC6C3 \uC7AC\uACC4\uC0B0"]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",children:'<Flicking\n  adaptive={true}\n  resizeOnContentsReady={true}\n>\n  <div className="panel">\n    <img src="image.jpg" /> {/* \uB85C\uB4DC \uC644\uB8CC \uC2DC \uC790\uB3D9 resize */}\n  </div>\n</Flicking>\n'})}),"\n",(0,t.jsx)(i.h3,{id:"adaptive\uC640-\uD568\uAED8-\uC0AC\uC6A9",children:"adaptive\uC640 \uD568\uAED8 \uC0AC\uC6A9"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"resizeOnContentsReady"}),"\uB294 ",(0,t.jsx)(i.code,{children:"adaptive"}),"\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD560 \uB54C \uD6A8\uACFC\uC801\uC785\uB2C8\uB2E4:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"adaptive"}),": \uD604\uC7AC \uD328\uB110 \uB192\uC774\uC5D0 \uB9DE\uAC8C \uBDF0\uD3EC\uD2B8 \uB192\uC774 \uC870\uC815"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"resizeOnContentsReady"}),": \uC774\uBBF8\uC9C0 \uB85C\uB4DC \uC2DC resize \uD2B8\uB9AC\uAC70"]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",children:"// \uAD8C\uC7A5 \uC870\uD569\n<Flicking\n  adaptive={true}\n  resizeOnContentsReady={true}\n>\n  {images.map(img => (\n    <div key={img.id}>\n      <img src={img.src} />\n    </div>\n  ))}\n</Flicking>\n"})}),"\n",(0,t.jsx)(i.h3,{id:"\uAC10\uC9C0-\uB300\uC0C1-\uCF58\uD150\uCE20",children:"\uAC10\uC9C0 \uB300\uC0C1 \uCF58\uD150\uCE20"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"resizeOnContentsReady"}),"\uB294 \uB2E4\uC74C \uCF58\uD150\uCE20\uC758 load \uC774\uBCA4\uD2B8\uB97C \uAC10\uC9C0\uD569\uB2C8\uB2E4:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"<img>"})," \uC774\uBBF8\uC9C0"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"<video>"})," \uBE44\uB514\uC624"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,t.jsxs)(i.admonition,{title:"\uC5B8\uC81C resizeOnContentsReady\uB97C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:[(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"\uC0AC\uC6A9 \uAD8C\uC7A5:"})}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"\uD328\uB110\uC5D0 \uC774\uBBF8\uC9C0/\uBE44\uB514\uC624\uAC00 \uD3EC\uD568\uB41C \uACBD\uC6B0"}),"\n",(0,t.jsx)(i.li,{children:"\uC774\uBBF8\uC9C0 \uD06C\uAE30\uAC00 \uBBF8\uB9AC \uC9C0\uC815\uB418\uC9C0 \uC54A\uC740 \uACBD\uC6B0"}),"\n",(0,t.jsx)(i.li,{children:"adaptive \uC635\uC158\uACFC \uD568\uAED8 \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0"}),"\n",(0,t.jsx)(i.li,{children:"\uB124\uD2B8\uC6CC\uD06C\uC5D0\uC11C \uC774\uBBF8\uC9C0\uB97C \uB85C\uB4DC\uD558\uB294 \uACBD\uC6B0"}),"\n"]}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"\uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC544\uB3C4 \uB418\uB294 \uACBD\uC6B0:"})}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"\uC774\uBBF8\uC9C0 \uD06C\uAE30\uAC00 CSS\uB85C \uBBF8\uB9AC \uACE0\uC815\uB41C \uACBD\uC6B0"}),"\n",(0,t.jsx)(i.li,{children:"\uD14D\uC2A4\uD2B8\uB9CC \uC788\uB294 \uD328\uB110"}),"\n",(0,t.jsx)(i.li,{children:"\uC774\uBBF8\uC9C0\uAC00 base64 \uC778\uB77C\uC778\uC73C\uB85C \uD3EC\uD568\uB41C \uACBD\uC6B0"}),"\n"]})]}),"\n",(0,t.jsx)(i.h3,{id:"\uC218\uB3D9-resize-\uB300\uC548",children:"\uC218\uB3D9 resize \uB300\uC548"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"resizeOnContentsReady: false"}),"\uC77C \uB54C \uC218\uB3D9\uC73C\uB85C resize\uB97C \uD638\uCD9C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:'// \uC774\uBBF8\uC9C0 \uB85C\uB4DC \uC644\uB8CC \uD6C4 \uC218\uB3D9 resize\nimg.addEventListener("load", () => {\n  flicking.resize();\n});\n'})}),"\n",(0,t.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,t.jsx)(i.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#adaptive",children:(0,t.jsx)(i.code,{children:"adaptive"})}),": \uBDF0\uD3EC\uD2B8 \uB192\uC774 \uC790\uB3D9 \uC870\uC815"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#autoresize",children:(0,t.jsx)(i.code,{children:"autoResize"})}),": \uC708\uB3C4\uC6B0 \uB9AC\uC0AC\uC774\uC988 \uC2DC \uC790\uB3D9 resize"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"\uAD00\uB828-\uBA54\uC11C\uB4DC",children:"\uAD00\uB828 \uBA54\uC11C\uB4DC"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"../../api/classes/Flicking#resize",children:(0,t.jsx)(i.code,{children:"resize"})}),": \uC218\uB3D9 \uB808\uC774\uC544\uC6C3 \uC7AC\uACC4\uC0B0"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"../basic/adaptive",children:"Adaptive"}),": adaptive \uC635\uC158 \uB370\uBAA8"]}),"\n"]})]})}function u(e={}){let{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},27449(e,i,s){s.d(i,{A:()=>o});var n=s(65723),t=s(19612);s(22155);let l="^4.11.4",a={react:{"@egjs/react-flicking":l,"@egjs/flicking":l},vue3:{"@egjs/vue3-flicking":l,"@egjs/flicking":l},vanilla:{"@egjs/flicking":l}},d=`<!DOCTYPE html>
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
  </StrictMode>);`,c=`
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
`;function o({code:e,html:i,template:s="react",dependencies:l={},files:o={},css:p=""}){var g;let m,h,u;return(0,n.jsx)(t.OZ,{template:"vue3"===s?"vue":"vanilla"===s?"vanilla":"react",files:(u={"/styles.css":{code:h=p?`${c}
${p}`:c},...o},"react"===s?{"/App.tsx":{code:e},"/index.js":{code:r,hidden:!0},...u}:"vue3"===s?{"/src/App.vue":{code:e},...u}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),s=[],n=[],t=!1;for(let e of i)t?n.push(e):e.trimStart().startsWith("import ")||""===e.trim()?s.push(e.replace('"../styles.css"','"./styles.css"')):(t=!0,n.push(e));for(;n.length>0&&""===n[n.length-1].trim();)n.pop();return[...s,"","const _run = () => {",...n.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:h},"/index.html":{code:(m="<style>.flicking-viewport{opacity:0}</style>",(g=i||d).includes("</head>")?g.replace("</head>",`${m}
</head>`):m+g)},...o}),customSetup:{dependencies:{...a[s],...l}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===s?["/App.tsx","/styles.css"]:"vue3"===s?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===s?"/App.tsx":"vue3"===s?"/src/App.vue":"/src/index.js"}})}},72722(e,i,s){s.d(i,{A:()=>v});var n=s(65723),t=s(34622),l=s(7210),a=s(78863);s(22155);let d=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,r=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",c=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${d(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(i=>`${i}: ${d(e[i],"'")}`).join(", ")}`,p=(e,{prefix:i,includeFlicking:s=!0}={})=>{let n=s?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&n.push(...e),`${n.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},g=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,m=({options:e,panels:i,events:s={},methods:l={},plugins:a=[],siblings:o=[],imports:g=[],viewportClass:m=""})=>{let h=e=>`${Object.keys(e).map(i=>`${i}: ${d(e[i])}`).join(",\n  ")}`,u=Object.keys(l).map(e=>`const ${e} = ${l[e]};
`).join(""),v=e?`const flicking = new Flicking("#flick", {
  ${h(e)}
});

`:'const flicking = new Flicking("#flick")',x=a.length>0?`flicking.addPlugins(${a.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?h(e[1]):e[1]??""}
}`:""})`)});`:"",j=[...a.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],f=Object.keys(s).map(e=>{let i=s[e];return`flicking.on("${e}", ${i})
`}).join(""),k=i.filter(e=>e.isSlot);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${m&&` ${m}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e)}${c(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${k.length?`
  ${k.map(e=>`<${e.tag}${r(e)}${c(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${r(e)}${c(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,n.jsx)(t.A,{className:"language-js",title:"js",children:`${p(j)}

${u}${v}${x}${f}`.trim()})]})},h=({options:e,panels:i,events:s={},methods:l={},plugins:a,siblings:d,imports:o=[],viewportClass:m=""})=>{let h=a?`
  private _plugins = [${g(a)}];
`:"",u=i.filter(e=>e.isSlot),v=[["{ Component }","react"],[u.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],x=Object.keys(l).map(e=>`
const ${e} = ${l[e]};`).join("");x&&(x+="\n"),a&&v.push([`{ ${a.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),v.push(...o);let j=u.length?`
      <ViewportSlot>
        ${u.map(e=>`<${e.tag}${r(e,"className")}${c(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",f=Object.keys(s).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${s[e]}}`).join("");return(0,n.jsx)(t.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(v,{includeFlicking:!1})}
${x}
export default class DemoComponent extends Component {${h}
  public render() {
    return ${d?"<>\n    ":""}<Flicking${m&&` className="${m}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${a?" plugins={this._plugins}":""}${f}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e,"className")}${c(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${j}
    </Flicking>${d?`
    ${d.map(e=>`<${e.tag}${r(e,"className")}${c(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},u=({options:e,panels:i,events:s={},methods:l={},plugins:a,siblings:d=[],imports:m=[],viewportClass:h=""})=>{let u=o(e),v=i.filter(e=>e.isSlot),x=a?`,
  data() {
    return {
      plugins: [${g(a)}]
    }
  }`:"",j=v.length?`
  <template #viewport>
    ${v.map(e=>`<${e.tag}${r(e)}${c(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",f=[...(a??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...m],k=Object.keys(l),$=k.length>0?`,
  methods: {
    ${k.map(e=>`${e}: ${l[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",y=Object.keys(s).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${s[e]}"`).join("");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.A,{className:"language-html",title:"template",children:`<Flicking${h&&` class="${h}"`}${e?` :options="{ ${u} }"`:""}${a?' :plugins="plugins"':""}${y}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${r(e)}${c(e)}>${e.content}</${e.tag}>`).join("\n  ")}${j}
</Flicking>${d?`
${d.map(e=>`<${e.tag}${r(e)}${c(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,n.jsx)(t.A,{className:"language-js",title:"script",children:`${p(f,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${x}${$}
}`})]})},v=({js:e,react:i,vue3:s,style:d,...r})=>(0,n.jsxs)("div",{children:[(0,n.jsxs)(a.A,{groupId:"cfc",defaultValue:"js",children:[(0,n.jsx)(l.A,{value:"react",label:"React",children:i||(0,n.jsx)(h,{...r})}),(0,n.jsx)(l.A,{value:"vue3",label:"Vue@3",children:s||(0,n.jsx)(u,{...r})}),(0,n.jsx)(l.A,{value:"js",label:"JavaScript",children:e||(0,n.jsx)(m,{...r})})]}),d&&(0,n.jsx)(t.A,{className:"language-css",title:"style",children:`${d}`})]})}}]);