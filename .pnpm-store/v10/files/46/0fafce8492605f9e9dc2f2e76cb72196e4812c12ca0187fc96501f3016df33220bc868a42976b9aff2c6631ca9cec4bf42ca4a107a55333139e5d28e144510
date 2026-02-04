"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setConfig = void 0;
/**
 * 进行全局配置
 */
const setConfig = config => {
  const {
    fetchBase64
  } = config;
  if (typeof fetchBase64 === 'function') {
    window.HTML2SKETCH_FETCH_BASE64 = fetchBase64;
  }
};
exports.setConfig = setConfig;