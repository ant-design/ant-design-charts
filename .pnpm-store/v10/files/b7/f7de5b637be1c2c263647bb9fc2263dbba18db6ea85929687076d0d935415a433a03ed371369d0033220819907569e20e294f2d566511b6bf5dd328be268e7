"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.safeStartTransition = void 0;
var _react = require("react");
var safeStartTransition = exports.safeStartTransition = function safeStartTransition(func) {
  if (typeof _react.startTransition === 'function') {
    (0, _react.startTransition)(func);
  } else {
    func();
  }
};