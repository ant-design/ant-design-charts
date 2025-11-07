"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compatibleBorder = void 0;
var _antd = require("antd");
var _compareVersions = require("../compareVersions");
/**
 * 兼容 antd 5.13.0 以下版本的 bordered 属性
 * @param bordered
 * @returns
 */
var compatibleBorder = exports.compatibleBorder = function compatibleBorder(bordered) {
  if (bordered === undefined) {
    return {};
  }
  return (0, _compareVersions.compareVersions)(_antd.version, '5.13.0') <= 0 ? {
    bordered: bordered
  } : {
    variant: bordered ? undefined : 'borderless'
  };
};