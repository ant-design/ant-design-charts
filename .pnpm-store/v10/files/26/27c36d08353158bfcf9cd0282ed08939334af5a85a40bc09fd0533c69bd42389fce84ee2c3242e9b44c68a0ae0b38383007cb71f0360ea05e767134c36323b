"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openVisibleCompatible = exports.getVersion = void 0;
var _antd = require("antd");
var _omitUndefined = require("../omitUndefined");
var _index = require("./index");
var getVersion = exports.getVersion = function getVersion() {
  var _process;
  if (typeof process === 'undefined') return _antd.version;
  return ((_process = process) === null || _process === void 0 || (_process = _process.env) === null || _process === void 0 ? void 0 : _process.ANTD_VERSION) || _antd.version;
};
var openVisibleCompatible = exports.openVisibleCompatible = function openVisibleCompatible(open, onOpenChange) {
  var props = (0, _index.compareVersions)(getVersion(), '4.23.0') > -1 ? {
    open: open,
    onOpenChange: onOpenChange
  } : {
    visible: open,
    onVisibleChange: onOpenChange
  };
  return (0, _omitUndefined.omitUndefined)(props);
};