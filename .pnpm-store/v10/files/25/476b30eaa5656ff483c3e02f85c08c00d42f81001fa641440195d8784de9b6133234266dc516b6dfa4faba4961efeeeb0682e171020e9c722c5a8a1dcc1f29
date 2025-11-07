"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollapsedIcon = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Arrow = require("../SiderMenu/Arrow");
var _style = require("./style");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["isMobile", "collapsed"];
var CollapsedIcon = exports.CollapsedIcon = function CollapsedIcon(props) {
  var isMobile = props.isMobile,
    collapsed = props.collapsed,
    rest = (0, _objectWithoutProperties2.default)(props, _excluded);
  var _useStyle = (0, _style.useStyle)(props.className),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  if (isMobile && collapsed) return null;
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsx)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, rest), {}, {
    className: (0, _classnames.default)(props.className, hashId, (0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(props.className, "-collapsed"), collapsed), "".concat(props.className, "-is-mobile"), isMobile)),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Arrow.ArrowSvgIcon, {})
  })));
};