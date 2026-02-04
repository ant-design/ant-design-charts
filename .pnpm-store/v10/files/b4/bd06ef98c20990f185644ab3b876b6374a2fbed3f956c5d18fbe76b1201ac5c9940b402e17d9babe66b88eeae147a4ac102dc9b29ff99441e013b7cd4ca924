"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUrl = void 0;
/**
 * 判断是不是一个 url
 * @param  {string|undefined} path
 * @returns boolean
 */
var isUrl = exports.isUrl = function isUrl(path) {
  if (!path) return false;
  if (!path.startsWith('http')) {
    return false;
  }
  try {
    var url = new URL(path);
    return !!url;
  } catch (error) {
    return false;
  }
};