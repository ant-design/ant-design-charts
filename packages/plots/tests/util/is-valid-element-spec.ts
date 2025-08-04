import { isValidElement } from '../../src/util';

const BUILD_ASSESTS = `(e,t)=>{let{title:a,items:n}=t,r=0;return n.forEach((e=>{r=e.origin.times})),r=Number(r.toFixed(1)),l().createElement("div",null,l().createElement("div",{style:{fontSize:14,fontWeight:"bold",paddingBottom:10}},a,":",l().createElement("span",{style:{float:"right",marginLeft:5}},r)),n.map((e=>{const{name:t,color:a,origin:n}=e;return l().createElement("div",{key:n.bus},l().createElement("div",{style:{margin:0,display:"flex",justifyContent:"space-between"}},l().createElement("div",null,l().createElement("span",{style:{display:"inline-block",width:6,height:6,borderRadius:"50%",backgroundColor:a,marginRight:6}}),l().createElement("span",null,n.bus)),l().createElement("b",{style:{marginLeft:10}},n.times)))})))}`
const BUILD_ASSESTS_BIGFISH = `return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:ie.header,children:[(0,o.jsx)("p",{className:ie.title,children:null==i?void 0:null===(t=i[0])||void 0===t?void 0:null===(n=t.origin)||void 0===n?void 0:n.timeDimension}),(0,o.jsx)("div",{children:null==a?void 0:a.map((e,n)=>(0,o.jsx)(t9.default,{color:"error",children:e.origin.displayLabel},n))})]}),(0,o.jsx)("div",{className:ie.content,children:null==i?void 0:i.map((e,n)=>{var t,i;return(0,o.jsxs)("div",{className:ie.items,children:[(0,o.jsxs)("div",{className:ie.left,children:[(0,o.jsx)("div",{className:ie.icon,style:{background:null==e?void 0:e.color}}),(0,o.jsxs)("span",{className:ie.desc,children:[null==e?void 0:null===(t=e.origin)||void 0===t?void 0:t.analysisDimension,"\uFF1A"]})]}),(0,o.jsx)("span",{className:ie.value,children:(0,ey.formatNumberAsThousandth)((null==e?void 0:null===(i=e.origin)||void 0===i?void 0:i.value)||0)})]},n);})})]});`
const BUILD_ASSESTS_BIGFISH_DEV = `return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: _indexlessasmodule.default.header,
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        className: _indexlessasmodule.default.title,
                        children: items === null || items === void 0 ? void 0 : (_items_ = items[0]) === null || _items_ === void 0 ? void 0 : (_items__origin = _items_.origin) === null || _items__origin === void 0 ? void 0 : _items__origin.timeDimension
                    }, void 0, false, {
                        fileName: "index.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        children: displayLabelList === null || displayLabelList === void 0 ? void 0 : displayLabelList.map((it, index)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tag, {
                                color: "error",
                                children: it.origin.displayLabel
                            }, index, false, {
                                fileName: "index.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "index.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "index.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: _indexlessasmodule.default.content,
                children: items === null || items === void 0 ? void 0 : items.map((it, index)=>{
                    var _it_origin, _it_origin1;
                    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: _indexlessasmodule.default.items,
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                className: _indexlessasmodule.default.left,
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        className: _indexlessasmodule.default.icon,
                                        style: {
                                            background: it === null || it === void 0 ? void 0 : it.color
                                        }
                                    }, void 0, false, {
                                        fileName: "index.tsx",
                                        lineNumber: 31,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                        className: _indexlessasmodule.default.desc,
                                        children: [
                                            it === null || it === void 0 ? void 0 : (_it_origin = it.origin) === null || _it_origin === void 0 ? void 0 : _it_origin.analysisDimension,
                                            "："
                                        ]
                                    }, void 0, true, {
                                        fileName: "index.tsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "index.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: _indexlessasmodule.default.value,
                                children: (0, _fishutils.formatNumberAsThousandth)((it === null || it === void 0 ? void 0 : (_it_origin1 = it.origin) === null || _it_origin1 === void 0 ? void 0 : _it_origin1.value) || 0)
                            }, void 0, false, {
                                fileName: "index.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "index.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this);
                })
            }, void 0, false, {
                fileName: "index.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "index.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);`
const BUILD_ASSESTS_BIGFISH_DEV2 = `(event, { items })=>{
                                    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_TipContent.default, {
                                        items: items
                                    }, void 0, false, {
                                        fileName: "index.tsx",
                                        lineNumber: 316,
                                        columnNumber: 24
                                    }, this);
                                }`

describe('isValidElement', () => {
  it('ice build product', async () => {
    expect(isValidElement(BUILD_ASSESTS)).toBeTruthy();
  });

  it('build product with bigfish', async () => {
    expect(isValidElement(BUILD_ASSESTS_BIGFISH)).toBeTruthy();
  });

  it('build product with bigfish dev', async () => {
    expect(isValidElement(BUILD_ASSESTS_BIGFISH_DEV)).toBeTruthy();
  });

  it('build product with bigfish dev2', async () => {
    expect(isValidElement(BUILD_ASSESTS_BIGFISH_DEV2)).toBeTruthy();
  });

  it('should return true for basic React patterns', () => {
    expect(isValidElement('import React from "react"')).toBeTruthy();
    expect(isValidElement('const children: []')).toBeTruthy();
  });

  it('should return false for SVG/HTML elements only', () => {
    expect(isValidElement('l().createElement("g", null)')).toBeFalsy();
    expect(isValidElement('l().createElement("circle", null)')).toBeFalsy();
  });

  it('should return true for custom React components', () => {
    expect(isValidElement('l().createElement("CustomComponent", null)')).toBeTruthy();
  });

  it('should return false for empty or invalid input', () => {
    expect(isValidElement('')).toBeFalsy();
    expect(isValidElement('plain text')).toBeFalsy();
  });
});
