"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMediaQueryMap = exports.convertResponsiveStyleToString = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _core = require("../../core");
var _hooks = require("../../hooks");
var _utils = require("../../utils");
var _responsive = require("../../utils/responsive");
var _react = require("react");
var useMediaQueryMap = exports.useMediaQueryMap = function useMediaQueryMap() {
  var token = (0, _hooks.useAntdToken)();
  var breakpoints = {
    xs: "@media (max-width: ".concat(token.screenXSMax, "px)"),
    sm: "@media (max-width: ".concat(token.screenSMMax, "px)"),
    md: "@media (max-width: ".concat(token.screenMDMax, "px)"),
    lg: "@media (max-width: ".concat(token.screenLGMax, "px)"),
    xl: "@media (max-width: ".concat(token.screenXLMax, "px)"),
    xxl: "@media (min-width: ".concat(token.screenXXLMin, "px)")
  };
  return (0, _react.useMemo)(function () {
    return (0, _responsive.convertBreakpointToResponsive)(breakpoints);
  }, [token]);
};

/**
 * 将响应式对象转换为字符串
 * @param obj
 * @param map
 */
var convertResponsiveStyleToString = exports.convertResponsiveStyleToString = function convertResponsiveStyleToString(obj, map) {
  return Object.entries(obj).map(function (_ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    var str = value;
    if (!(0, _utils.isReactCssResult)(value)) {
      str = (0, _core.serializeCSS)(value);
    }

    // @ts-ignore
    return map[key] ? "".concat(map[key], " {").concat(str.styles, "}") : '';
  }).join('');
};