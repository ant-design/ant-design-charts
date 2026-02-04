"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridContent = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _RouteContext = require("../../context/RouteContext");
var _style = require("./style");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * This component can support contentWidth so you don't need to calculate the width
 * contentWidth=Fixed, width will is 1200
 *
 * @param props
 */
var GridContent = exports.GridContent = function GridContent(props) {
  var value = (0, _react.useContext)(_RouteContext.RouteContext);
  var children = props.children,
    propsContentWidth = props.contentWidth,
    propsClassName = props.className,
    style = props.style;
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = props.prefixCls || getPrefixCls('pro');
  var contentWidth = propsContentWidth || value.contentWidth;
  var className = "".concat(prefixCls, "-grid-content");
  var _useStyle = (0, _style.useStyle)(className),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var isWide = contentWidth === 'Fixed' && value.layout === 'top';
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _classnames.default)(className, hashId, propsClassName, (0, _defineProperty2.default)({}, "".concat(className, "-wide"), isWide)),
    style: style,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "".concat(prefixCls, "-grid-content-children ").concat(hashId).trim(),
      children: children
    })
  }));
};