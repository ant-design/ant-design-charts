"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serializeCSS = void 0;
var _serialize = require("@emotion/serialize");
/**
 * @title CSS 序列化函数
 * @param template - 模板字符串数组
 * @param args - CSS 插值数组
 * @returns CSS 序列化后的样式
 */

/**
 * 提供给 createStyles 方法，用于将用户写入的 css 字符串序列化成特定结构的样式对象
 * @param args
 */
var serializeCSS = exports.serializeCSS = function serializeCSS() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return (
    // @ts-ignore
    (0, _serialize.serializeStyles)(args)
  );
};