"use strict";(self.webpackChunk_umijs_ui=self.webpackChunk_umijs_ui||[]).push([[312],{83645:function(B,x,e){e.d(x,{N:function(){return L}});var j=e(28056),o=e.n(j),D=e(36729),h=e(29088),O,k=D.styled.div(O||(O=o()([`
  display: inline-block;

  .view {
    display: inline-block;
    border: 1px solid var(--border-color);
    padding: 0.25rem 0.75rem;
    position: relative;
    cursor: pointer;
    color: var(--second-text-color);

    &.active {
      cursor: unset;
      z-index: 10;
      color: var(--highlight-color);
      border-color: var(--highlight-color);
    }

    &:first-child {
      border-bottom-left-radius: 4px;
      border-top-left-radius: 4px;
    }

    &:last-child {
      left: -1px;
      border-bottom-right-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
`]))),L=function(P){var R=P.value,f=P.options,C=f===void 0?[]:f,n=P.onChange;return(0,h.jsx)(k,{children:C.map(function(u){return(0,h.jsx)("span",{className:R===u.value?"view active":"view",onClick:function(){return n(u.value)},children:u.icon?(0,h.jsx)(D.Icon,{width:"24",height:"24",icon:"ant-design:".concat(u.icon)}):u.str},u.value)})})}},19264:function(B,x,e){e.d(x,{U:function(){return o},u:function(){return j}});var j=["@umijs/core","@umijs/preset-umi","virtual:","@umijs/plugin-run","@umijs/did-you-know"],o={dark:{fill:"#fff",shadowColor:"blue",stroke:"#fff"},light:{fill:"#333",shadowColor:"#ccc",stroke:"#bbb"}}},86041:function(B,x,e){e.d(x,{O:function(){return o}});var j=e(36729);function o(){return(0,j.useQuery)(["appData"],{queryFn:function(){return fetch("/__umi/api/app-data").then(function(h){return h.json()})}})}},83417:function(B,x,e){e.d(x,{N:function(){return D},S:function(){return o}});var j=e(36729),o=(0,j.proxy)({menus:[{name:"Overview",path:"/",icon:"fund-projection-screen-outlined"},{name:"Configuration",path:"/config",icon:"control-outlined"},{name:"Routes",path:"/routes",icon:"cluster-outlined"},{name:"Plugins",path:"/plugins",icon:"api-outlined"},{name:"Imports",path:"/imports",icon:"right-square-outlined"}],mode:"light"}),D={toggleMode:function(){var O=o.mode==="light"?"dark":"light";o.mode=O,document.querySelector("html").classList.toggle("dark")}}},27812:function(B,x,e){e.r(x),e.d(x,{default:function(){return ue}});var j=e(45990),o=e.n(j),D=e(28056),h=e.n(D),O=e(83645),k=e(65645),L=e.n(k),U=e(19264),P=e(83417),R=e(91376),f=e(18855),C=e(36729),n=e(29088),u="#117cf3",Z=function(g,c){var v,a;switch(c){case"tsx":case"jsx":if(g){v="circle",a="#BDD2FD";break}v="circle",a="#FBE5A2";break;case"ts":case"js":if(g){v="diamond",a="#BDEFDB";break}v="diamond",a="#FF9D4D";break;default:a="#dfaefd",v="diamond"}return{type:v,color:a}},X=function(g){var c=g.metaFile,v=(0,C.useSnapshot)(P.S),a=v.mode,s=(0,f.useRef)(null),b=(0,f.useMemo)(function(){var E=U.U[a],w=E.shadowColor,y=E.fill,d=c.inputs,i=Object.keys(d);console.log("files",i);var _=i.reduce(function(M,m,S){var A=o()(M,2),N=A[0],I=A[1],F=String(S),W=m.startsWith(".umi/"),ce=m.split(".").slice(-1)[0],J=Z(W,ce),ve=J.type,me=J.color,he={id:F,path:m,label:m.split("/").slice(-1)[0],type:ve,style:{fill:me,stroke:0},stateStyles:{selected:{fill:u,stroke:0}},labelCfg:{position:"bottom",style:{fill:y,shadowColor:w,shadowBlur:10}}};return N.push(he),I[m]=F,[N,I]},[[],{}]),r=o()(_,2),t=r[0],l=r[1],p=i.reduce(function(M,m){var S=d[m].imports||[],A=l[m],N=S.filter(function(I){return I.original}).map(function(I){var F=I.path,W=l[F];return{source:A,target:W,stateStyles:{selected:{stroke:u,fill:u,shadowBlur:0,endArrow:{stroke:u,path:"M 0,0 L 6,3 L 6,-3 Z",fill:u}}}}});return[].concat(L()(M),L()(N))},[]);return{nodes:t,edges:p}},[c,a]);return(0,f.useEffect)(function(){var E=document.getElementById("container"),w=E.scrollWidth,y=window.innerHeight-100,d=new R.ZP.Graph({container:"container",width:w,height:y,fitCenter:!0,modes:{default:["zoom-canvas","drag-canvas","drag-node"]},layout:{type:"forceAtlas2",preventOverlap:!0,kr:20},defaultNode:{size:24},animate:!0,defaultEdge:{style:{endArrow:{path:"M 0,0 L 4,2 L 4,-2 Z",fill:"#e2e2e2"}}}}),i=function(t,l){var p,M=((p=t._cfg)===null||p===void 0?void 0:p.edges)||[];M.forEach(function(m){d.setItemState(m,"selected",l)}),d.setItemState(t,"selected",l)};d.on("click",function(r){var t,l,p=((t=r.item)===null||t===void 0||(l=t._cfg)===null||l===void 0?void 0:l.type)||null;p!=="node"&&s.current&&i(s.current,!1)}),d.on("node:click",function(r){var t=r.item;if(t===s.current){i(t,!1),s.current=null;return}s.current&&i(s.current,!1),i(t,!0),s.current=t}),d.data(b),d.render();var _=function(){var t=document.getElementById("container"),l=t.scrollWidth,p=window.innerHeight-100;d.changeSize(l,p)};return window.addEventListener("resize",_),function(){window.removeEventListener("resize",_),s.current=null,d.destroy()}},[b]),(0,n.jsx)("div",{children:(0,n.jsx)("div",{id:"container"})})},Y=e(86846),q=e(14077),z=e(69019),V=e(32226),ee=e(22625),H,K,$,te=C.styled.div(H||(H=h()([`
  .switch-container {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;

    .ant-switch {
      margin-right: 0.5rem;
      background: var(--border-color);

      &-checked {
        background: var(--highlight-color);
      }
    }
  }
`]))),ne=C.styled.div(K||(K=h()([`
  background: var(--bg-color);

  .ant-input-affix-wrapper {
    background: var(--bg-color);
    border-color: var(--border-color);
  }

  .ant-input {
    background: var(--bg-color);
    color: var(--text-color);
  }

  .search-icon {
    margin-right: 0.5rem;
    color: var(--second-text-color);
  }
`]))),re=C.styled.div($||($=h()([`
  margin-top: 2rem;

  .ant-list-item {
    color: var(--text-color);
    border-color: var(--border-color);
    padding-left: 1rem;
  }

  .ant-empty-description {
    color: var(--empty-text-color);
  }
`]))),G=47,oe=[/node_modules/],ie=function(g){return oe.some(function(c){return c.test(g)})},ae=function(g){var c=g.metaFile,v=(0,f.useState)(!1),a=o()(v,2),s=a[0],b=a[1],E=(0,f.useState)(""),w=o()(E,2),y=w[0],d=w[1],i=(0,f.useMemo)(function(){var r=c.inputs,t=Object.keys(r).reduce(function(l,p){var M=r[p].imports||[],m=M.map(function(S){return S.path}).filter(function(S){var A=S.indexOf(y)!==-1;return A&&(s||!ie(S))});return[].concat(L()(l),L()(m))},[]);return Array.from(new Set(t)).sort()},[c,s,y]),_=(0,f.useMemo)(function(){var r=window.innerHeight-216,t=G*i.length;return t>r?r:t},[i]);return(0,n.jsxs)("div",{children:[(0,n.jsx)(te,{children:(0,n.jsxs)("div",{className:"switch-container",children:[(0,n.jsx)(Y.Z,{onChange:b}),"show node_modules paths"]})}),(0,n.jsx)(ne,{children:(0,n.jsx)(q.Z,{size:"large",value:y,onChange:function(t){return d(t.target.value)},prefix:(0,n.jsx)(C.Icon,{width:"24",height:"24",icon:"ant-design:search-outlined",className:"search-icon"})})}),(0,n.jsx)(re,{children:i!=null&&i.length?(0,n.jsx)(z.ZP,{bordered:!0,children:(0,n.jsx)(ee.Z,{data:i,height:_,itemHeight:G,itemKey:function(t){return t},children:function(t,l){return(0,n.jsx)(z.ZP.Item,{children:(0,n.jsx)("div",{children:t})})}})}):(0,n.jsx)(V.Z,{image:V.Z.PRESENTED_IMAGE_SIMPLE,description:"No Data"})})]})},se=e(86041),Q,le=C.styled.div(Q||(Q=h()([""]))),de=[{value:"list",icon:"bars-outlined"},{value:"chart",icon:"pie-chart-outlined"}];function ue(){var T=(0,f.useState)("list"),g=o()(T,2),c=g[0],v=g[1],a=(0,se.O)(),s=a.data;if(!s)return(0,n.jsx)("div",{children:"Loading..."});var b=s.prepare.buildResult.metafile,E=function(){if(!b)return(0,n.jsx)("div",{children:"please set metaFile: true"});switch(c){case"list":return(0,n.jsx)(ae,{metaFile:b});case"chart":return(0,n.jsx)(X,{metaFile:b})}};return(0,n.jsxs)(le,{children:[(0,n.jsx)("div",{children:(0,n.jsx)(O.N,{value:c,options:de,onChange:function(y){return v(y)}})}),(0,n.jsx)("div",{style:{marginTop:"1rem"},children:E()})]})}}}]);
