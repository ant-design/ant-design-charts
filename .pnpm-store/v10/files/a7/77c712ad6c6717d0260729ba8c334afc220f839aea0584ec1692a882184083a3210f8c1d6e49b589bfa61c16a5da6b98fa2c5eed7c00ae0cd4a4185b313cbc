"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchBrowserPrefers = void 0;
var matchBrowserPrefers = exports.matchBrowserPrefers = function matchBrowserPrefers(mode) {
  if (typeof window !== 'undefined') {
    return matchMedia && matchMedia("(prefers-color-scheme: ".concat(mode, ")"));
  }
  // 针对 ssr 做特处
  return {
    matches: false
  };
};