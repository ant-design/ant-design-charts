"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultContent = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("./index");
var _jsxRuntime = require("react/jsx-runtime");
var DefaultContent = exports.DefaultContent = function DefaultContent(props) {
  var appList = props.appList,
    baseClassName = props.baseClassName,
    hashId = props.hashId,
    itemClick = props.itemClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "".concat(baseClassName, "-content ").concat(hashId).trim(),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
      className: "".concat(baseClassName, "-content-list ").concat(hashId).trim(),
      children: appList === null || appList === void 0 ? void 0 : appList.map(function (app, index) {
        var _app$children;
        if (app !== null && app !== void 0 && (_app$children = app.children) !== null && _app$children !== void 0 && _app$children.length) {
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "".concat(baseClassName, "-content-list-item-group ").concat(hashId).trim(),
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "".concat(baseClassName, "-content-list-item-group-title ").concat(hashId).trim(),
              children: app.title
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(DefaultContent, {
              hashId: hashId,
              itemClick: itemClick,
              appList: app === null || app === void 0 ? void 0 : app.children,
              baseClassName: baseClassName
            })]
          }, index);
        }
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          className: "".concat(baseClassName, "-content-list-item ").concat(hashId).trim(),
          onClick: function onClick(e) {
            e.stopPropagation();
            itemClick === null || itemClick === void 0 || itemClick(app);
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
            href: itemClick ? undefined : app.url,
            target: app.target,
            rel: "noreferrer",
            children: [(0, _index.defaultRenderLogo)(app.icon), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                children: app.title
              }), app.desc ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: app.desc
              }) : null]
            })]
          })
        }, index);
      })
    })
  });
};