"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapContent = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _proProvider = require("@ant-design/pro-provider");
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var WrapContent = exports.WrapContent = function WrapContent(props) {
  var _useContext = (0, _react.useContext)(_proProvider.ProProvider),
    hashId = _useContext.hashId;
  var style = props.style,
    prefixCls = props.prefixCls,
    children = props.children,
    _props$hasPageContain = props.hasPageContainer,
    hasPageContainer = _props$hasPageContain === void 0 ? 0 : _props$hasPageContain;
  var contentClassName = (0, _classnames.default)("".concat(prefixCls, "-content"), hashId, (0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(prefixCls, "-has-header"), props.hasHeader), "".concat(prefixCls, "-content-has-page-container"), hasPageContainer > 0));
  var ErrorComponent = props.ErrorBoundary || _proUtils.ErrorBoundary;
  return props.ErrorBoundary === false ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Layout.Content, {
    className: contentClassName,
    style: style,
    children: children
  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(ErrorComponent, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Layout.Content, {
      className: contentClassName,
      style: style,
      children: children
    })
  });
};