"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useResponsive = void 0;
var _responsive = require("../utils/responsive");
var _antd = require("antd");
var _react = require("react");
var useResponsive = exports.useResponsive = function useResponsive() {
  var breakpoints = _antd.Grid.useBreakpoint();
  return (0, _react.useMemo)(function () {
    return (0, _responsive.convertBreakpointToResponsive)(breakpoints);
  }, [breakpoints]);
};