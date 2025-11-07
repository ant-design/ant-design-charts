"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "patchFs", {
  enumerable: true,
  get: function get() {
    return _patchFs["default"];
  }
});
Object.defineProperty(exports, "patchRequire", {
  enumerable: true,
  get: function get() {
    return _patchRequire["default"];
  }
});
Object.defineProperty(exports, "unixify", {
  enumerable: true,
  get: function get() {
    return _correctPath.unixify;
  }
});
exports.util = void 0;
var _patchFs = _interopRequireDefault(require("./patchFs"));
var _patchRequire = _interopRequireDefault(require("./patchRequire"));
var _correctPath = require("./correctPath");
var util = _interopRequireWildcard(require("./util/lists"));
exports.util = util;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }