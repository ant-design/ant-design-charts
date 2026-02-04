"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "configure", {
  enumerable: true,
  get: function get() {
    return _safeStableStringify.configure;
  }
});
exports.stringify = exports.default = void 0;
var _safeStableStringify = require("safe-stable-stringify");
var stringify = exports.stringify = (0, _safeStableStringify.configure)({
  bigint: true,
  circularValue: 'Magic circle!',
  deterministic: false,
  maximumDepth: 4
  //   maximumBreadth: 4,
});
var _default = exports.default = stringify;