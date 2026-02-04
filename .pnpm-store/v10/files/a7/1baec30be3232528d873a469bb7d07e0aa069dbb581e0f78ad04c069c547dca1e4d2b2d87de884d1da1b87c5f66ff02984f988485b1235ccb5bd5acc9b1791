"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menuOverlayCompatible = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _antd = require("antd");
var _omitUndefined = require("../omitUndefined");
var _index = require("./index");
var _openVisibleCompatible = require("./openVisibleCompatible");
var _jsxRuntime = require("react/jsx-runtime");
var menuOverlayCompatible = exports.menuOverlayCompatible = function menuOverlayCompatible(menu) {
  var props = (0, _index.compareVersions)((0, _openVisibleCompatible.getVersion)(), '4.24.0') > -1 ? {
    menu: menu
  } : {
    overlay: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Menu, (0, _objectSpread2.default)({}, menu))
  };
  return (0, _omitUndefined.omitUndefined)(props);
};