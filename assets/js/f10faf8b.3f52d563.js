"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["9374"],{44184(e,i,n){n.r(i),n.d(i,{metadata:()=>s,default:()=>h,frontMatter:()=>o,contentTitle:()=>p,toc:()=>g,assets:()=>v});var s=JSON.parse('{"id":"demos/basic/nested","title":"Nested","description":"nested \uC635\uC158\uC73C\uB85C \uC911\uCCA9\uB41C Flicking\uC5D0\uC11C \uACBD\uACC4 \uB3C4\uB2EC \uC2DC \uBD80\uBAA8\uB85C \uC81C\uC5B4\uB97C \uC804\uD658\uD569\uB2C8\uB2E4","source":"@site/docs/demos/basic/nested.mdx","sourceDirName":"demos/basic","slug":"/demos/basic/nested","permalink":"/flicking-docs-test/docs/demos/basic/nested","draft":false,"unlisted":false,"editUrl":"https://github.com/naver/egjs-flicking/edit/master/docs/docs/demos/basic/nested.mdx","tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"title":"Nested","id":"nested","slug":"/demos/basic/nested","sidebar_position":17,"description":"nested \uC635\uC158\uC73C\uB85C \uC911\uCCA9\uB41C Flicking\uC5D0\uC11C \uACBD\uACC4 \uB3C4\uB2EC \uC2DC \uBD80\uBAA8\uB85C \uC81C\uC5B4\uB97C \uC804\uD658\uD569\uB2C8\uB2E4","keywords":["flicking","carousel","nested","parent","child","\uC911\uCCA9","\uBD80\uBAA8"]},"sidebar":"demosSidebar","previous":{"title":"Adaptive","permalink":"/flicking-docs-test/docs/demos/basic/adaptive"},"next":{"title":"Interruptable","permalink":"/flicking-docs-test/docs/demos/basic/interruptable"}}'),l=n(65723),t=n(54187),d=n(27449),r=n(72722);n(22155);let a=`
.outer-panel {
  width: 80%;
  height: 180px;
  padding: 10px;
  box-sizing: border-box;
}
.outer-1 { background: #3e8ed0; }
.outer-2 { background: #00d1b2; }
.outer-3 { background: #f14668; }

.inner-viewport {
  height: 100%;
  background: rgba(255,255,255,0.2);
  border-radius: 8px;
}
.inner-panel {
  width: 60%;
  height: 140px;
  background: rgba(255,255,255,0.3);
  border: 2px solid rgba(255,255,255,0.5);
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
  font-size: 12px;
  color: #888;
  margin-bottom: 8px;
}
`,c=()=>{let e=`import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "./styles.css";

export default function App() {
  return (
    <div>
      {/* nested: false */}
      <div className="demo-container">
        <div className="demo-label">nested: false (\u{B0B4}\u{BD80} \u{B05D}\u{C5D0}\u{C11C} \u{BD80}\u{BAA8} \u{C774}\u{B3D9} \u{C548} \u{B428})</div>
        <div className="demo-hint">\u{B0B4}\u{BD80} Flicking \u{B05D}\u{C5D0} \u{B3C4}\u{B2EC}\u{D574}\u{B3C4} \u{C678}\u{BD80}\u{AC00} \u{C6C0}\u{C9C1}\u{C774}\u{C9C0} \u{C54A}\u{C2B5}\u{B2C8}\u{B2E4}</div>
        <Flicking align="center">
          <div className="outer-panel outer-1">
            <Flicking className="inner-viewport" nested={false} align="center" bound={true}>
              <div className="inner-panel">\u{B0B4}\u{BD80} 1</div>
              <div className="inner-panel">\u{B0B4}\u{BD80} 2</div>
              <div className="inner-panel">\u{B0B4}\u{BD80} 3</div>
            </Flicking>
          </div>
          <div className="outer-panel outer-2">
            <Flicking className="inner-viewport" nested={false} align="center" bound={true}>
              <div className="inner-panel">\u{B0B4}\u{BD80} 1</div>
              <div className="inner-panel">\u{B0B4}\u{BD80} 2</div>
              <div className="inner-panel">\u{B0B4}\u{BD80} 3</div>
            </Flicking>
          </div>
          <div className="outer-panel outer-3">
            <Flicking className="inner-viewport" nested={false} align="center" bound={true}>
              <div className="inner-panel">\u{B0B4}\u{BD80} 1</div>
              <div className="inner-panel">\u{B0B4}\u{BD80} 2</div>
              <div className="inner-panel">\u{B0B4}\u{BD80} 3</div>
            </Flicking>
          </div>
        </Flicking>
      </div>

      {/* nested: true */}
      <div className="demo-container">
        <div className="demo-label">nested: true (\u{B0B4}\u{BD80} \u{B05D}\u{C5D0}\u{C11C} \u{BD80}\u{BAA8}\u{B85C} \u{C804}\u{D658})</div>
        <div className="demo-hint">\u{B0B4}\u{BD80} Flicking \u{B05D}\u{C5D0} \u{B3C4}\u{B2EC}\u{D558}\u{BA74} \u{C678}\u{BD80} Flicking\u{C774} \u{C6C0}\u{C9C1}\u{C785}\u{B2C8}\u{B2E4}</div>
        <Flicking align="center">
          <div className="outer-panel outer-1">
            <Flicking className="inner-viewport" nested={true} align="center" bound={true}>
              <div className="inner-panel">\u{B0B4}\u{BD80} 1</div>
              <div className="inner-panel">\u{B0B4}\u{BD80} 2</div>
              <div className="inner-panel">\u{B0B4}\u{BD80} 3</div>
            </Flicking>
          </div>
          <div className="outer-panel outer-2">
            <Flicking className="inner-viewport" nested={true} align="center" bound={true}>
              <div className="inner-panel">\u{B0B4}\u{BD80} 1</div>
              <div className="inner-panel">\u{B0B4}\u{BD80} 2</div>
              <div className="inner-panel">\u{B0B4}\u{BD80} 3</div>
            </Flicking>
          </div>
          <div className="outer-panel outer-3">
            <Flicking className="inner-viewport" nested={true} align="center" bound={true}>
              <div className="inner-panel">\u{B0B4}\u{BD80} 1</div>
              <div className="inner-panel">\u{B0B4}\u{BD80} 2</div>
              <div className="inner-panel">\u{B0B4}\u{BD80} 3</div>
            </Flicking>
          </div>
        </Flicking>
      </div>
    </div>
  );
}`,i=(0,l.jsx)(d.A,{template:"react",code:e,css:a}),n=`<template>
  <div>
    <!-- nested: false -->
    <div class="demo-container">
      <div class="demo-label">nested: false (\u{B0B4}\u{BD80} \u{B05D}\u{C5D0}\u{C11C} \u{BD80}\u{BAA8} \u{C774}\u{B3D9} \u{C548} \u{B428})</div>
      <div class="demo-hint">\u{B0B4}\u{BD80} Flicking \u{B05D}\u{C5D0} \u{B3C4}\u{B2EC}\u{D574}\u{B3C4} \u{C678}\u{BD80}\u{AC00} \u{C6C0}\u{C9C1}\u{C774}\u{C9C0} \u{C54A}\u{C2B5}\u{B2C8}\u{B2E4}</div>
      <Flicking :options="{ align: 'center' }">
        <div class="outer-panel outer-1">
          <Flicking class="inner-viewport" :options="{ nested: false, align: 'center', bound: true }">
            <div class="inner-panel">\u{B0B4}\u{BD80} 1</div>
            <div class="inner-panel">\u{B0B4}\u{BD80} 2</div>
            <div class="inner-panel">\u{B0B4}\u{BD80} 3</div>
          </Flicking>
        </div>
        <div class="outer-panel outer-2">
          <Flicking class="inner-viewport" :options="{ nested: false, align: 'center', bound: true }">
            <div class="inner-panel">\u{B0B4}\u{BD80} 1</div>
            <div class="inner-panel">\u{B0B4}\u{BD80} 2</div>
            <div class="inner-panel">\u{B0B4}\u{BD80} 3</div>
          </Flicking>
        </div>
        <div class="outer-panel outer-3">
          <Flicking class="inner-viewport" :options="{ nested: false, align: 'center', bound: true }">
            <div class="inner-panel">\u{B0B4}\u{BD80} 1</div>
            <div class="inner-panel">\u{B0B4}\u{BD80} 2</div>
            <div class="inner-panel">\u{B0B4}\u{BD80} 3</div>
          </Flicking>
        </div>
      </Flicking>
    </div>

    <!-- nested: true -->
    <div class="demo-container">
      <div class="demo-label">nested: true (\u{B0B4}\u{BD80} \u{B05D}\u{C5D0}\u{C11C} \u{BD80}\u{BAA8}\u{B85C} \u{C804}\u{D658})</div>
      <div class="demo-hint">\u{B0B4}\u{BD80} Flicking \u{B05D}\u{C5D0} \u{B3C4}\u{B2EC}\u{D558}\u{BA74} \u{C678}\u{BD80} Flicking\u{C774} \u{C6C0}\u{C9C1}\u{C785}\u{B2C8}\u{B2E4}</div>
      <Flicking :options="{ align: 'center' }">
        <div class="outer-panel outer-1">
          <Flicking class="inner-viewport" :options="{ nested: true, align: 'center', bound: true }">
            <div class="inner-panel">\u{B0B4}\u{BD80} 1</div>
            <div class="inner-panel">\u{B0B4}\u{BD80} 2</div>
            <div class="inner-panel">\u{B0B4}\u{BD80} 3</div>
          </Flicking>
        </div>
        <div class="outer-panel outer-2">
          <Flicking class="inner-viewport" :options="{ nested: true, align: 'center', bound: true }">
            <div class="inner-panel">\u{B0B4}\u{BD80} 1</div>
            <div class="inner-panel">\u{B0B4}\u{BD80} 2</div>
            <div class="inner-panel">\u{B0B4}\u{BD80} 3</div>
          </Flicking>
        </div>
        <div class="outer-panel outer-3">
          <Flicking class="inner-viewport" :options="{ nested: true, align: 'center', bound: true }">
            <div class="inner-panel">\u{B0B4}\u{BD80} 1</div>
            <div class="inner-panel">\u{B0B4}\u{BD80} 2</div>
            <div class="inner-panel">\u{B0B4}\u{BD80} 3</div>
          </Flicking>
        </div>
      </Flicking>
    </div>
  </div>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";

export default {
  components: { Flicking }
};
</script>

<style>
.outer-panel {
  width: 80%;
  height: 180px;
  padding: 10px;
  box-sizing: border-box;
  margin-right: 10px;
  border-radius: 8px;
}
.outer-1 { background: #3e8ed0; }
.outer-2 { background: #00d1b2; }
.outer-3 { background: #f14668; }
.inner-viewport { height: 100%; background: rgba(255,255,255,0.2); border-radius: 8px; }
.inner-panel {
  width: 60%;
  height: 140px;
  margin-right: 10px;
  border-radius: 8px;
  background: rgba(255,255,255,0.3);
  border: 2px solid rgba(255,255,255,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
}
.demo-container { margin-bottom: 24px; }
.demo-label { font-weight: bold; margin-bottom: 8px; color: #666; }
.demo-hint { font-size: 12px; color: #888; margin-bottom: 8px; }
</style>`,s=(0,l.jsx)(d.A,{template:"vue3",code:n,css:a}),t=`import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "../styles.css";

// nested: false
new Flicking("#outer-false", { align: "center" });
document.querySelectorAll("#outer-false .inner-viewport").forEach(el => {
  new Flicking(el, { nested: false, align: "center", bound: true });
});

// nested: true
new Flicking("#outer-true", { align: "center" });
document.querySelectorAll("#outer-true .inner-viewport").forEach(el => {
  new Flicking(el, { nested: true, align: "center", bound: true });
});`,c=`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <!-- nested: false -->
  <div class="demo-container">
    <div class="demo-label">nested: false (\u{B0B4}\u{BD80} \u{B05D}\u{C5D0}\u{C11C} \u{BD80}\u{BAA8} \u{C774}\u{B3D9} \u{C548} \u{B428})</div>
    <div class="demo-hint">\u{B0B4}\u{BD80} Flicking \u{B05D}\u{C5D0} \u{B3C4}\u{B2EC}\u{D574}\u{B3C4} \u{C678}\u{BD80}\u{AC00} \u{C6C0}\u{C9C1}\u{C774}\u{C9C0} \u{C54A}\u{C2B5}\u{B2C8}\u{B2E4}</div>
    <div id="outer-false" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="outer-panel outer-1">
          <div class="flicking-viewport inner-viewport">
            <div class="flicking-camera">
              <div class="inner-panel">\u{B0B4}\u{BD80} 1</div>
              <div class="inner-panel">\u{B0B4}\u{BD80} 2</div>
              <div class="inner-panel">\u{B0B4}\u{BD80} 3</div>
            </div>
          </div>
        </div>
        <div class="outer-panel outer-2">
          <div class="flicking-viewport inner-viewport">
            <div class="flicking-camera">
              <div class="inner-panel">\u{B0B4}\u{BD80} 1</div>
              <div class="inner-panel">\u{B0B4}\u{BD80} 2</div>
              <div class="inner-panel">\u{B0B4}\u{BD80} 3</div>
            </div>
          </div>
        </div>
        <div class="outer-panel outer-3">
          <div class="flicking-viewport inner-viewport">
            <div class="flicking-camera">
              <div class="inner-panel">\u{B0B4}\u{BD80} 1</div>
              <div class="inner-panel">\u{B0B4}\u{BD80} 2</div>
              <div class="inner-panel">\u{B0B4}\u{BD80} 3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- nested: true -->
  <div class="demo-container">
    <div class="demo-label">nested: true (\u{B0B4}\u{BD80} \u{B05D}\u{C5D0}\u{C11C} \u{BD80}\u{BAA8}\u{B85C} \u{C804}\u{D658})</div>
    <div class="demo-hint">\u{B0B4}\u{BD80} Flicking \u{B05D}\u{C5D0} \u{B3C4}\u{B2EC}\u{D558}\u{BA74} \u{C678}\u{BD80} Flicking\u{C774} \u{C6C0}\u{C9C1}\u{C785}\u{B2C8}\u{B2E4}</div>
    <div id="outer-true" class="flicking-viewport">
      <div class="flicking-camera">
        <div class="outer-panel outer-1">
          <div class="flicking-viewport inner-viewport">
            <div class="flicking-camera">
              <div class="inner-panel">\u{B0B4}\u{BD80} 1</div>
              <div class="inner-panel">\u{B0B4}\u{BD80} 2</div>
              <div class="inner-panel">\u{B0B4}\u{BD80} 3</div>
            </div>
          </div>
        </div>
        <div class="outer-panel outer-2">
          <div class="flicking-viewport inner-viewport">
            <div class="flicking-camera">
              <div class="inner-panel">\u{B0B4}\u{BD80} 1</div>
              <div class="inner-panel">\u{B0B4}\u{BD80} 2</div>
              <div class="inner-panel">\u{B0B4}\u{BD80} 3</div>
            </div>
          </div>
        </div>
        <div class="outer-panel outer-3">
          <div class="flicking-viewport inner-viewport">
            <div class="flicking-camera">
              <div class="inner-panel">\u{B0B4}\u{BD80} 1</div>
              <div class="inner-panel">\u{B0B4}\u{BD80} 2</div>
              <div class="inner-panel">\u{B0B4}\u{BD80} 3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</body>
</html>`,o=(0,l.jsx)(d.A,{template:"vanilla",code:t,html:c,css:a});return(0,l.jsx)(r.A,{options:{},panels:[],react:i,vue3:s,js:o})},o={title:"Nested",id:"nested",slug:"/demos/basic/nested",sidebar_position:17,description:"nested \uC635\uC158\uC73C\uB85C \uC911\uCCA9\uB41C Flicking\uC5D0\uC11C \uACBD\uACC4 \uB3C4\uB2EC \uC2DC \uBD80\uBAA8\uB85C \uC81C\uC5B4\uB97C \uC804\uD658\uD569\uB2C8\uB2E4",keywords:["flicking","carousel","nested","parent","child","\uC911\uCCA9","\uBD80\uBAA8"]},p="Nested",v={},g=[{value:"\uC694\uC57D",id:"\uC694\uC57D",level:2},{value:"\uC8FC\uC694 \uC635\uC158",id:"\uC8FC\uC694-\uC635\uC158",level:3},{value:"\uAC12\uBCC4 \uBE44\uAD50",id:"\uAC12\uBCC4-\uBE44\uAD50",level:3},{value:"\uC0C1\uC138 \uC124\uBA85",id:"\uC0C1\uC138-\uC124\uBA85",level:2},{value:"nested \uB3D9\uC791 \uC6D0\uB9AC",id:"nested-\uB3D9\uC791-\uC6D0\uB9AC",level:3},{value:"\uC5B8\uC81C \uD544\uC694\uD55C\uAC00?",id:"\uC5B8\uC81C-\uD544\uC694\uD55C\uAC00",level:3},{value:"\uC5F0\uAD00 \uC635\uC158",id:"\uC5F0\uAD00-\uC635\uC158",level:3},{value:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624",id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",level:3},{value:"\uC8FC\uC758\uC0AC\uD56D",id:"\uC8FC\uC758\uC0AC\uD56D",level:3},{value:"\uAD00\uB828 \uB9C1\uD06C",id:"\uAD00\uB828-\uB9C1\uD06C",level:2},{value:"\uAD00\uB828 \uC635\uC158",id:"\uAD00\uB828-\uC635\uC158",level:3},{value:"\uAD00\uB828 \uB370\uBAA8",id:"\uAD00\uB828-\uB370\uBAA8",level:3}];function u(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.header,{children:(0,l.jsx)(i.h1,{id:"nested",children:"Nested"})}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#nested",children:(0,l.jsx)(i.code,{children:"nested"})})," \uC635\uC158\uC73C\uB85C \uC911\uCCA9\uB41C Flicking\uC5D0\uC11C \uC790\uC2DD\uC774 \uACBD\uACC4\uC5D0 \uB3C4\uB2EC\uD558\uBA74 \uBD80\uBAA8 Flicking\uC73C\uB85C \uC81C\uC5B4\uB97C \uC804\uD658\uD569\uB2C8\uB2E4. \uAC19\uC740 \uBC29\uD5A5\uC758 \uC911\uCCA9 Flicking\uC5D0\uC11C \uC790\uC5F0\uC2A4\uB7EC\uC6B4 UX\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."]}),"\n",(0,l.jsx)(c,{}),"\n",(0,l.jsx)(i.h2,{id:"\uC694\uC57D",children:"\uC694\uC57D"}),"\n",(0,l.jsx)(i.h3,{id:"\uC8FC\uC694-\uC635\uC158",children:"\uC8FC\uC694 \uC635\uC158"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"\uC635\uC158"}),(0,l.jsx)(i.th,{children:"\uD0C0\uC785"}),(0,l.jsx)(i.th,{children:"\uAE30\uBCF8\uAC12"}),(0,l.jsx)(i.th,{children:"\uC124\uBA85"})]})}),(0,l.jsx)(i.tbody,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#nested",children:(0,l.jsx)(i.code,{children:"nested"})})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"boolean"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"false"})}),(0,l.jsx)(i.td,{children:"\uACBD\uACC4 \uB3C4\uB2EC \uC2DC \uBD80\uBAA8\uB85C \uC81C\uC5B4 \uC804\uD658"})]})})]}),"\n",(0,l.jsx)(i.h3,{id:"\uAC12\uBCC4-\uBE44\uAD50",children:"\uAC12\uBCC4 \uBE44\uAD50"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"\uAC12"}),(0,l.jsx)(i.th,{children:"\uB3D9\uC791"}),(0,l.jsx)(i.th,{children:"\uC801\uD569\uD55C \uC0C1\uD669"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"false"})}),(0,l.jsx)(i.td,{children:"\uB0B4\uBD80 \uACBD\uACC4\uC5D0\uC11C \uBA48\uCDA4, \uBD80\uBAA8 \uC774\uB3D9 \uC548 \uB428 (\uAE30\uBCF8\uAC12)"}),(0,l.jsx)(i.td,{children:"\uB3C5\uB9BD\uC801\uC778 \uB0B4\uBD80 \uCE90\uB7EC\uC140"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"true"})}),(0,l.jsx)(i.td,{children:"\uB0B4\uBD80 \uACBD\uACC4 \uB3C4\uB2EC \uD6C4 \uBD80\uBAA8\uB85C \uC81C\uC5B4 \uC804\uD658"}),(0,l.jsx)(i.td,{children:"\uAC19\uC740 \uBC29\uD5A5\uC758 \uC911\uCCA9 \uCE90\uB7EC\uC140"})]})]})]}),"\n",(0,l.jsx)(i.h2,{id:"\uC0C1\uC138-\uC124\uBA85",children:"\uC0C1\uC138 \uC124\uBA85"}),"\n",(0,l.jsx)(i.h3,{id:"nested-\uB3D9\uC791-\uC6D0\uB9AC",children:"nested \uB3D9\uC791 \uC6D0\uB9AC"}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"nested: true"}),"\uB85C \uC124\uC815\uB41C \uC790\uC2DD Flicking\uC774 \uCCAB \uBC88\uC9F8 \uB610\uB294 \uB9C8\uC9C0\uB9C9 \uD328\uB110\uC5D0 \uB3C4\uB2EC\uD55C \uD6C4 \uAC19\uC740 \uBC29\uD5A5\uC73C\uB85C \uACC4\uC18D \uB4DC\uB798\uADF8\uD558\uBA74, \uBD80\uBAA8 Flicking\uC774 \uB300\uC2E0 \uC774\uB3D9\uD569\uB2C8\uB2E4."]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-jsx",children:'// \uBD80\uBAA8 Flicking\n<Flicking>\n  <div className="panel">\n    {/* \uC790\uC2DD Flicking - nested \uC124\uC815 */}\n    <Flicking nested={true} bound={true}>\n      <div>\uB0B4\uBD80 1</div>\n      <div>\uB0B4\uBD80 2</div>\n    </Flicking>\n  </div>\n</Flicking>\n'})}),"\n",(0,l.jsx)(i.h3,{id:"\uC5B8\uC81C-\uD544\uC694\uD55C\uAC00",children:"\uC5B8\uC81C \uD544\uC694\uD55C\uAC00?"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"\uD544\uC694\uD55C \uACBD\uC6B0"}),": \uBD80\uBAA8\uC640 \uC790\uC2DD\uC774 ",(0,l.jsx)(i.strong,{children:"\uAC19\uC740 \uBC29\uD5A5"}),"(\uB458 \uB2E4 horizontal: true \uB610\uB294 \uB458 \uB2E4 false)"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"\uBD88\uD544\uC694\uD55C \uACBD\uC6B0"}),": \uBD80\uBAA8\uC640 \uC790\uC2DD\uC774 ",(0,l.jsx)(i.strong,{children:"\uB2E4\uB978 \uBC29\uD5A5"}),"(\uD558\uB098\uB294 \uC218\uD3C9, \uD558\uB098\uB294 \uC218\uC9C1) - \uC790\uB3D9\uC73C\uB85C \uAD6C\uBD84\uB428"]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"\uC5F0\uAD00-\uC635\uC158",children:"\uC5F0\uAD00 \uC635\uC158"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"bound\uC640\uC758 \uAD00\uACC4"}),": ",(0,l.jsx)(i.code,{children:"bound: true"}),"\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD558\uBA74 \uB0B4\uBD80 \uACBD\uACC4\uAC00 \uBA85\uD655\uD574\uC838 nested \uB3D9\uC791\uC774 \uB354 \uC790\uC5F0\uC2A4\uB7FD\uC2B5\uB2C8\uB2E4."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"horizontal\uACFC\uC758 \uAD00\uACC4"}),": \uBD80\uBAA8/\uC790\uC2DD\uC758 horizontal \uAC12\uC774 \uB2E4\uB974\uBA74 nested \uC635\uC158 \uC5C6\uC774\uB3C4 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uB3D9\uC791\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"\uC0AC\uC6A9-\uC2DC\uB098\uB9AC\uC624",children:"\uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624"}),"\n",(0,l.jsx)(i.admonition,{title:"\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB098\uC694?",type:"info",children:(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"nested: true"}),": \uCE74\uD14C\uACE0\uB9AC\uBCC4 \uC0C1\uD488 \uCE90\uB7EC\uC140 (\uC678\uBD80: \uCE74\uD14C\uACE0\uB9AC, \uB0B4\uBD80: \uC0C1\uD488)"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"nested: false"}),": \uB3C5\uB9BD\uC801\uC73C\uB85C \uB3D9\uC791\uD574\uC57C \uD558\uB294 \uB0B4\uBD80 \uCE90\uB7EC\uC140"]}),"\n"]})}),"\n",(0,l.jsx)(i.h3,{id:"\uC8FC\uC758\uC0AC\uD56D",children:"\uC8FC\uC758\uC0AC\uD56D"}),"\n",(0,l.jsx)(i.admonition,{title:"\uC790\uC2DD Flicking\uC5D0 \uC124\uC815",type:"warning",children:(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"nested"})," \uC635\uC158\uC740 \uC790\uC2DD(\uB0B4\uBD80) Flicking\uC5D0 \uC124\uC815\uD569\uB2C8\uB2E4. \uBD80\uBAA8\uC5D0\uB294 \uC124\uC815\uD560 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."]})}),"\n",(0,l.jsx)(i.admonition,{title:"\uB2E4\uB978 \uBC29\uD5A5\uC774\uBA74 \uBD88\uD544\uC694",type:"warning",children:(0,l.jsx)(i.p,{children:"\uBD80\uBAA8\uAC00 \uC218\uD3C9\uC774\uACE0 \uC790\uC2DD\uC774 \uC218\uC9C1(\uB610\uB294 \uBC18\uB300)\uC774\uBA74 nested \uC635\uC158 \uC5C6\uC774\uB3C4 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uB3D9\uC791\uD569\uB2C8\uB2E4."})}),"\n",(0,l.jsx)(i.h2,{id:"\uAD00\uB828-\uB9C1\uD06C",children:"\uAD00\uB828 \uB9C1\uD06C"}),"\n",(0,l.jsx)(i.h3,{id:"\uAD00\uB828-\uC635\uC158",children:"\uAD00\uB828 \uC635\uC158"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#bound",children:(0,l.jsx)(i.code,{children:"bound"})}),": \uACBD\uACC4 \uC81C\uD55C (nested\uC640 \uD568\uAED8 \uC0AC\uC6A9 \uAD8C\uC7A5)"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"../../api/interfaces/FlickingOptions#horizontal",children:(0,l.jsx)(i.code,{children:"horizontal"})}),": \uC774\uB3D9 \uBC29\uD5A5"]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"\uAD00\uB828-\uB370\uBAA8",children:"\uAD00\uB828 \uB370\uBAA8"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"./bound",children:"Bound"}),": \uACBD\uACC4 \uC81C\uD55C \uBAA8\uB4DC"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"./vertical",children:"Vertical"}),": \uC218\uC9C1 \uBAA8\uB4DC (\uB2E4\uB978 \uBC29\uD5A5 \uC870\uD569)"]}),"\n"]})]})}function h(e={}){let{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},27449(e,i,n){n.d(i,{A:()=>o});var s=n(65723),l=n(19612);n(22155);let t="^4.11.4",d={react:{"@egjs/react-flicking":t,"@egjs/flicking":t},vue3:{"@egjs/vue3-flicking":t,"@egjs/flicking":t},vanilla:{"@egjs/flicking":t}},r=`<!DOCTYPE html>
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
`;function o({code:e,html:i,template:n="react",dependencies:t={},files:o={},css:p=""}){var v;let g,u,h;return(0,s.jsx)(l.OZ,{template:"vue3"===n?"vue":"vanilla"===n?"vanilla":"react",files:(h={"/styles.css":{code:u=p?`${c}
${p}`:c},...o},"react"===n?{"/App.tsx":{code:e},"/index.js":{code:a,hidden:!0},...h}:"vue3"===n?{"/src/App.vue":{code:e},...h}:{"/src/index.js":{code:e},"/index.js":{code:function(e){let i=e.split("\n"),n=[],s=[],l=!1;for(let e of i)l?s.push(e):e.trimStart().startsWith("import ")||""===e.trim()?n.push(e.replace('"../styles.css"','"./styles.css"')):(l=!0,s.push(e));for(;s.length>0&&""===s[s.length-1].trim();)s.pop();return[...n,"","const _run = () => {",...s.map(e=>`  ${e}`),'  document.querySelectorAll(".flicking-viewport").forEach(el => { el.style.opacity = "1"; });',"};","",'if (document.readyState === "loading") {','  document.addEventListener("DOMContentLoaded", _run);',"} else {","  _run();","}"].join("\n")}(e),hidden:!0},"/styles.css":{code:u},"/index.html":{code:(g="<style>.flicking-viewport{opacity:0}</style>",(v=i||r).includes("</head>")?v.replace("</head>",`${g}
</head>`):g+v)},...o}),customSetup:{dependencies:{...d[n],...t}},options:{showLineNumbers:!0,editorHeight:400,externalResources:[],visibleFiles:"react"===n?["/App.tsx","/styles.css"]:"vue3"===n?["/src/App.vue","/styles.css"]:["/src/index.js","/index.html","/styles.css"],activeFile:"react"===n?"/App.tsx":"vue3"===n?"/src/App.vue":"/src/index.js"}})}},72722(e,i,n){n.d(i,{A:()=>m});var s=n(65723),l=n(34622),t=n(7210),d=n(78863);n(22155);let r=(e,i='"')=>"string"==typeof e?`${i}${e}${i}`:e,a=(e,i="class")=>e.class?` ${i}="${e.class}"`:"",c=(e,i=!1)=>e.style?i?` style={{ ${Object.keys(e.style).map(i=>`${i}: ${r(e.style[i])}`).join(", ")} }}`:` style="${Object.keys(e.style).map(i=>`${i}: ${e.style[i]};`).join(" ")}"`:"",o=e=>`${Object.keys(e).map(i=>`${i}: ${r(e[i],"'")}`).join(", ")}`,p=(e,{prefix:i,includeFlicking:n=!0}={})=>{let s=n?[["Flicking",`@egjs/${i?`${i}-`:""}flicking`]]:[];return e&&s.push(...e),`${s.map(e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`).join("\n")}`},v=e=>`${e.map(e=>`new ${e[0]}(${"object"==typeof e[1]?`{ ${o(e[1])} }`:e[1]??""}`).join(", ")})`,g=({options:e,panels:i,events:n={},methods:t={},plugins:d=[],siblings:o=[],imports:v=[],viewportClass:g=""})=>{let u=e=>`${Object.keys(e).map(i=>`${i}: ${r(e[i])}`).join(",\n  ")}`,h=Object.keys(t).map(e=>`const ${e} = ${t[e]};
`).join(""),m=e?`const flicking = new Flicking("#flick", {
  ${u(e)}
});

`:'const flicking = new Flicking("#flick")',j=d.length>0?`flicking.addPlugins(${d.map(e=>`new ${e[0]}(${e[1]?`{
  ${"object"==typeof e[1]?u(e[1]):e[1]??""}
}`:""})`)});`:"",x=[...d.map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...v],k=Object.keys(n).map(e=>{let i=n[e];return`flicking.on("${e}", ${i})
`}).join(""),f=i.filter(e=>e.isSlot);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.A,{className:"language-html",title:"html",children:`<div id="flick" class="flicking-viewport${g&&` ${g}`}${!1===e.horizontal?" vertical":""}">
  <div class="flicking-camera">
    ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e)}${c(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </div>${f.length?`
  ${f.map(e=>`<${e.tag}${a(e)}${c(e)}>${e.content}</${e.tag}>`).join("\n  ")}`:""}
</div>${o?"\n"+o.map(e=>`<${e.tag}${a(e)}${c(e)}>${e.content}</${e.tag}>`).join("\n"):""}`}),(0,s.jsx)(l.A,{className:"language-js",title:"js",children:`${p(x)}

${h}${m}${j}${k}`.trim()})]})},u=({options:e,panels:i,events:n={},methods:t={},plugins:d,siblings:r,imports:o=[],viewportClass:g=""})=>{let u=d?`
  private _plugins = [${v(d)}];
`:"",h=i.filter(e=>e.isSlot),m=[["{ Component }","react"],[h.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],j=Object.keys(t).map(e=>`
const ${e} = ${t[e]};`).join("");j&&(j+="\n"),d&&m.push([`{ ${d.map(e=>e[0])} }`,"@egjs/flicking-plugins"]),m.push(...o);let x=h.length?`
      <ViewportSlot>
        ${h.map(e=>`<${e.tag}${a(e,"className")}${c(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n        ")}
      </ViewportSlot>`:"",k=Object.keys(n).map(e=>` on${e[0].toUpperCase()+e.slice(1)}={${n[e]}}`).join("");return(0,s.jsx)(l.A,{className:"language-jsx",title:"DemoComponent.jsx",children:`${p(m,{includeFlicking:!1})}
${j}
export default class DemoComponent extends Component {${u}
  public render() {
    return ${r?"<>\n    ":""}<Flicking${g&&` className="${g}"`}${e?` ${Object.keys(e).map(i=>`${i}=${"string"==typeof e[i]?`"${e[i]}"`:`{${e[i]}}`}`).join(" ")}`:""}${d?" plugins={this._plugins}":""}${k}>
      ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e,"className")}${c(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n      ")}${x}
    </Flicking>${r?`
    ${r.map(e=>`<${e.tag}${a(e,"className")}${c(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`).join("\n    ")}
    </>`:""};
  }
}`})},h=({options:e,panels:i,events:n={},methods:t={},plugins:d,siblings:r=[],imports:g=[],viewportClass:u=""})=>{let h=o(e),m=i.filter(e=>e.isSlot),j=d?`,
  data() {
    return {
      plugins: [${v(d)}]
    }
  }`:"",x=m.length?`
  <template #viewport>
    ${m.map(e=>`<${e.tag}${a(e)}${c(e)}>${e.content}</${e.tag}>`).join("\n    ")}
  </template>`:"",k=[...(d??[]).map(e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"]),...g],f=Object.keys(t),$=f.length>0?`,
  methods: {
    ${f.map(e=>`${e}: ${t[e].split("\n").map((e,i)=>i>0?`    ${e}`:e).join("\n")}`).join(",\n")}
  }`:"",b=Object.keys(n).map(e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${n[e]}"`).join("");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.A,{className:"language-html",title:"template",children:`<Flicking${u&&` class="${u}"`}${e?` :options="{ ${h} }"`:""}${d?' :plugins="plugins"':""}${b}>
  ${i.filter(e=>!e.isSlot).map(e=>`<${e.tag}${a(e)}${c(e)}>${e.content}</${e.tag}>`).join("\n  ")}${x}
</Flicking>${r?`
${r.map(e=>`<${e.tag}${a(e)}${c(e)}>${e.content}</${e.tag}>`).join("\n")}`:""}`}),(0,s.jsx)(l.A,{className:"language-js",title:"script",children:`${p(k,{prefix:"vue3"})}

export default {
  components: {
    Flicking
  }${j}${$}
}`})]})},m=({js:e,react:i,vue3:n,style:r,...a})=>(0,s.jsxs)("div",{children:[(0,s.jsxs)(d.A,{groupId:"cfc",defaultValue:"js",children:[(0,s.jsx)(t.A,{value:"react",label:"React",children:i||(0,s.jsx)(u,{...a})}),(0,s.jsx)(t.A,{value:"vue3",label:"Vue@3",children:n||(0,s.jsx)(h,{...a})}),(0,s.jsx)(t.A,{value:"js",label:"JavaScript",children:e||(0,s.jsx)(g,{...a})})]}),r&&(0,s.jsx)(l.A,{className:"language-css",title:"style",children:`${r}`})]})}}]);