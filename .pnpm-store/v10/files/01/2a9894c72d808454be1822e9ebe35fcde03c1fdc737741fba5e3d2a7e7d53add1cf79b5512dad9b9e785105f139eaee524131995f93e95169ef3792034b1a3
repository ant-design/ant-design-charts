"use strict";(self.webpackChunk_umijs_ui=self.webpackChunk_umijs_ui||[]).push([[321],{19264:function(y,c,e){e.d(c,{U:function(){return l},u:function(){return m}});var m=["@umijs/core","@umijs/preset-umi","virtual:","@umijs/plugin-run","@umijs/did-you-know"],l={dark:{fill:"#fff",shadowColor:"blue",stroke:"#fff"},light:{fill:"#333",shadowColor:"#ccc",stroke:"#bbb"}}},86041:function(y,c,e){e.d(c,{O:function(){return l}});var m=e(36729);function l(){return(0,m.useQuery)(["appData"],{queryFn:function(){return fetch("/__umi/api/app-data").then(function(b){return b.json()})}})}},83417:function(y,c,e){e.d(c,{N:function(){return j},S:function(){return l}});var m=e(36729),l=(0,m.proxy)({menus:[{name:"Overview",path:"/",icon:"fund-projection-screen-outlined"},{name:"Configuration",path:"/config",icon:"control-outlined"},{name:"Routes",path:"/routes",icon:"cluster-outlined"},{name:"Plugins",path:"/plugins",icon:"api-outlined"},{name:"Imports",path:"/imports",icon:"right-square-outlined"}],mode:"light"}),j={toggleMode:function(){var k=l.mode==="light"?"dark":"light";l.mode=k,document.querySelector("html").classList.toggle("dark")}}},41128:function(y,c,e){e.r(c),e.d(c,{default:function(){return J}});var m=e(45990),l=e.n(m),j=e(19264),b=e(83417),k=e(91376),L=e(18855),S=e(36729),n=e(29088),N=[{color:"#2463eb",backgroud:"#dbedff"},{color:"#ec4899",backgroud:"#fbe7f3"},{color:"#f97315",backgroud:"#ffedd5"},{color:"#8b5cf6",backgroud:"#ede9fe"},{color:"#079669",backgroud:"#ecfdf5"}],M=function(a){var h=a.routes,r=a.onNodeClick,t=(0,S.useSnapshot)(b.S),o=t.mode;return(0,L.useEffect)(function(){var d=j.U[o].stroke,s=document.getElementById("route-container"),E=s.scrollWidth,C=window.innerHeight-32,u=new k.ZP.TreeGraph({container:"route-container",width:E,height:C,modes:{default:["drag-canvas","zoom-canvas"]},animate:!1,defaultNode:{size:[108,48],type:"rect",style:{radius:5,fill:"#dbedff",stroke:d,cursor:"pointer"},anchorPoints:[[0,.5],[1,.5]]},defaultEdge:{type:"cubic-horizontal",style:{stroke:d,lineDash:[10,5],endArrow:{path:"M 0,0 L 4,2 L 4,-2 Z",fill:"#e2e2e2"}}},layout:{type:"compactBox",direction:"LR",getHeight:function(){return 48},getWidth:function(){return 120},getVGap:function(){return 10},getHGap:function(){return 80},getSide:function(){return"right"}}});u.node(function(i){var g=i.id,v=i.depth,D=g.split("/").slice(-1)[0],A=N[v%N.length],I=A.color,Q=A.backgroud;return{style:{fill:Q,stroke:I},label:D,labelCfg:{position:"center",offset:5,style:{fill:I,cursor:"pointer"}}}}),u.on("node:click",function(i){var g=i.item,v=g._cfg.id;r(v)}),u.data(h[0]),u.render(),u.fitCenter();var x=function(){var g=document.getElementById("route-container"),v=g.scrollWidth,D=window.innerHeight-32;u.changeSize(v,D)};return window.addEventListener("resize",x),function(){window.removeEventListener("resize",x)}},[h,o]),(0,n.jsx)("div",{children:(0,n.jsx)("div",{id:"route-container"})})},T=e(28056),P=e.n(T),O,W=S.styled.pre(O||(O=P()([`
  background: var(--bg-color);
  font-size: 0.88rem;
  font-family: 'MonoLisa', sans-serif;
  padding: 16px;
  color: var(--text-color);
`])));function F(f){return(0,n.jsx)(W,{children:(0,n.jsx)("code",{children:typeof f.code=="string"?f.code:JSON.stringify(f.code,null,2)})})}var R=e(48197),B=e(13951),w,H=R.Z.Panel,G=S.styled.div(w||(w=P()([`
  color: #333;

  .info-item {
    margin-bottom: 1rem;

    .label {
      margin-top: 0.5rem;
      overflow: auto;
      background: #f0f0f0;
      border-radius: 0.5rem;
      padding: 0.5rem 1rem;
    }

    .code-label {
      margin-top: 0.5rem;
    }

    .ant-collapse,
    .ant-collapse-item {
      border: 0;

      .ant-collapse-content {
        border: 0;
        background: #f0f0f0;
      }

      .ant-collapse-header {
        background: #f0f0f0;
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
      }

      .ant-collapse-item-active {
        .ant-collapse-header {
          border-radius: 0.5rem 0.5rem 0 0;
        }
      }
    }
  }
`]))),U=function(a){var h=a.open,r=a.info,t=a.onClose;return r?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(B.Z,{title:"Route Information",placement:"left",open:h,width:600,onClose:t,mask:!1,children:(0,n.jsxs)(G,{children:[(0,n.jsxs)("div",{className:"info-item",children:[(0,n.jsx)("h3",{children:"RoutePath"}),(0,n.jsx)("div",{className:"label",children:r.absPath})]}),(0,n.jsxs)("div",{className:"info-item",children:[(0,n.jsx)("h3",{children:"FilePath"}),(0,n.jsx)("div",{className:"label",children:r.__absFile||r.file})]}),(0,n.jsxs)("div",{className:"info-item",children:[(0,n.jsx)("h3",{children:"CodeContent"}),(0,n.jsx)("div",{className:"code-label",children:(0,n.jsx)(R.Z,{children:(0,n.jsx)(H,{header:"Code Content",children:(0,n.jsx)(F,{code:r.__content})},"1")})})]})]})})}):null},Z=e(86041),K=e(51353),p=e.n(K),z="__FEAKE_LAYOUT__",V=function(a){var h=Object.keys(a),r=[],t={};return h.forEach(function(o){var d=a[o],s=d.parentId;if(!s){if(!t[o]){t[o]=p()(p()({},d),{},{children:[]}),r.push(t[o]);return}r.push(p()(p()({},t[o]),d));return}if(t[o]||(t[o]=p()(p()({},d),{},{children:[]})),t[s]){t[s].children.push(t[o]);return}t[s]={id:s,children:[t[o]]}}),r.length>1?[{id:z,isLayout:!0,children:r}]:r};function J(){var f=(0,L.useState)(!1),a=l()(f,2),h=a[0],r=a[1],t=(0,L.useState)(""),o=l()(t,2),d=o[0],s=o[1],E=(0,Z.O)(),C=E.data;if(!C)return(0,n.jsx)("div",{children:"Loading..."});var u=C.routes,x=u[d],i=function(v){v!==z&&(s(v),r(!0))};return(0,n.jsxs)("div",{children:[(0,n.jsx)(U,{open:h,info:x,onClose:function(){return r(!1)}}),(0,n.jsx)(M,{routes:V(u),onNodeClick:i})]})}}}]);
