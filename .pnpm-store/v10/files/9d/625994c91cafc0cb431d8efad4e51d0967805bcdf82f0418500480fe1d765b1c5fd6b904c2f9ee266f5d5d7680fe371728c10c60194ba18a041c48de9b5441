"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultFooter = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _icons = require("@ant-design/icons");
var _antd = require("antd");
var _react = _interopRequireWildcard(require("react"));
var _GlobalFooter = require("./GlobalFooter");
var _jsxRuntime = require("react/jsx-runtime");
var Footer = _antd.Layout.Footer;
var DefaultFooter = exports.DefaultFooter = function DefaultFooter(_ref) {
  var links = _ref.links,
    copyright = _ref.copyright,
    style = _ref.style,
    className = _ref.className,
    prefixCls = _ref.prefixCls;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Footer, {
    className: className,
    style: (0, _objectSpread2.default)({
      padding: 0
    }, style),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_GlobalFooter.GlobalFooter, {
      links: links,
      prefixCls: prefixCls,
      copyright: copyright === false ? null : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.CopyrightOutlined, {}), " ", copyright]
      })
    })
  });
};