"use strict";(self.webpackChunk_umijs_ui=self.webpackChunk_umijs_ui||[]).push([[733],{19264:function(S,r,n){n.d(r,{U:function(){return s},u:function(){return l}});var l=["@umijs/core","@umijs/preset-umi","virtual:","@umijs/plugin-run","@umijs/did-you-know"],s={dark:{fill:"#fff",shadowColor:"blue",stroke:"#fff"},light:{fill:"#333",shadowColor:"#ccc",stroke:"#bbb"}}},86041:function(S,r,n){n.d(r,{O:function(){return s}});var l=n(36729);function s(){return(0,l.useQuery)(["appData"],{queryFn:function(){return fetch("/__umi/api/app-data").then(function(f){return f.json()})}})}},56654:function(S,r,n){n.r(r),n.d(r,{default:function(){return Q}});var l=n(51353),s=n.n(l),O=n(45990),f=n.n(O),k=n(28056),x=n.n(k),w=n(19264),R=function(i){var a=i.time,p=a.hooks,u=a.register,d={register:u},T=Object.keys(p).reduce(function(b,m){var v=p[m],h=v.reduce(function(C,g){return C+g});return h>0&&(d[m]=h),b+h},0);return{totalTime:T+u,detail:d}},U=n(86846),E=n(14077),P=n(69019),I=n(46423),z=n(27690),j=n(18855),c=n(36729),t=n(29088),Z,A,D,F=c.styled.div(Z||(Z=x()([`
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
`]))),W=c.styled.div(A||(A=x()([`
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
`]))),B=c.styled.div(D||(D=x()([`
  margin-top: 2rem;
  max-height: `,`px;
  overflow-y: auto;

  .ant-list-item {
    color: var(--text-color);
    border-color: var(--border-color);
  }

  .ant-list-item {
    padding-left: 1rem;

    &:last-child {
      border-block-end: 1px solid var(--border-color);
    }
  }

  .ant-empty-description {
    color: var(--empty-text-color);
  }

  .item-content {
    &-title {
      font-weight: 600;
      color: var(--text-color);

      &-name {
        margin-right: 1rem;
      }
    }

    &-path {
      margin-top: 0.5rem;
    }
  }
`])),window.innerHeight-176),H=function(i){var a=i.plugins,p=(0,j.useState)(!1),u=f()(p,2),d=u[0],T=u[1],b=(0,j.useState)(""),m=f()(b,2),v=m[0],h=m[1],C=(0,j.useMemo)(function(){var g=Object.keys(a);return g.filter(function(e){return e.indexOf(v)>-1}).filter(function(e){return d?!0:w.u.every(function(o){return!e.startsWith(o)})}).map(function(e){var o=a[e],N=R(o),$=N.totalTime,M=N.detail,G=Object.keys(M).map(function(L){return(0,t.jsxs)("div",{children:[L,": ",M[L],"ms"]},L)});return s()({name:e,totalTime:$,detailTxt:G},o)}).sort(function(e,o){return o.totalTime-e.totalTime})},[a,d,v]);return(0,t.jsxs)("div",{children:[(0,t.jsx)(F,{children:(0,t.jsxs)("div",{className:"switch-container",children:[(0,t.jsx)(U.Z,{onChange:T}),"show inner plugins"]})}),(0,t.jsx)(W,{children:(0,t.jsx)(E.Z,{size:"large",value:v,onChange:function(e){return h(e.target.value)},prefix:(0,t.jsx)(c.Icon,{width:"24",height:"24",icon:"ant-design:search-outlined",className:"search-icon"})})}),(0,t.jsx)(B,{children:(0,t.jsx)(P.ZP,{itemLayout:"horizontal",dataSource:C,renderItem:function(e){return(0,t.jsx)(P.ZP.Item,{children:(0,t.jsxs)("div",{className:"item-content",children:[(0,t.jsxs)("div",{className:"item-content-title",children:[(0,t.jsx)("span",{className:"item-content-title-name",children:e.name}),(0,t.jsx)(I.Z,{color:"blue",children:e.key}),e.totalTime?(0,t.jsx)(I.Z,{color:"red",children:(0,t.jsx)(z.Z,{content:e.detailTxt,children:(0,t.jsxs)("div",{style:{cursor:"pointer",display:"flex",alignItems:"center"},children:[e.totalTime,"ms",(0,t.jsx)(c.Icon,{width:"14",height:"14",icon:"ant-design:info-circle-outlined",style:{marginLeft:".25rem"}})]})})}):null]}),e.path?(0,t.jsx)("div",{className:"item-content-path",children:e.path}):null]})})}})})]})},K=n(86041);function Q(){var y=(0,K.O)(),i=y.data;return i?(0,t.jsx)("div",{children:(0,t.jsx)(H,{plugins:i.plugins})}):(0,t.jsx)("div",{children:"Loading..."})}}}]);
