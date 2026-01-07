"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderValueType = void 0;
var _dependency = require("./dependency");
var _divider = require("./divider");
var _field = require("./field");
var _formList = require("./formList");
var _formSet = require("./formSet");
var _group = require("./group");
var _ignore = require("./ignore");
// 按照数组顺序执行
var tasks = [_ignore.ignore, _group.group, _formList.formList, _formSet.formSet, _divider.divider, _dependency.dependency];
var renderValueType = exports.renderValueType = function renderValueType(item, helpers) {
  for (var cur = 0; cur < tasks.length; cur++) {
    var task = tasks[cur];
    var dom = task(item, helpers);

    // False 不再遍历
    // if (dom === false) {
    //   return false;
    if (dom === true) {
      // True 继续下一次
      continue;
    } else {
      // Other Is Dom
      return dom;
    }
  }

  // 最后执行
  return (0, _field.field)(item, helpers);
};