"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = patchFs;
var _lists = require("./util/lists");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function patchFs(vol) {
  var fs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : require('fs');
  var bkp = {};
  var patch = function patch(key, newValue) {
    bkp[key] = fs[key];
    fs[key] = newValue;
  };
  var patchMethod = function patchMethod(key) {
    return patch(key, vol[key].bind(vol));
  };
  var _iterator = _createForOfIteratorHelper(_lists.fsProps),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var prop = _step.value;
      if (typeof vol[prop] !== 'undefined') patch(prop, vol[prop]);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (typeof vol.StatWatcher === 'function') {
    patch('StatWatcher', vol.FSWatcher.bind(null, vol));
  }
  if (typeof vol.FSWatcher === 'function') {
    patch('FSWatcher', vol.StatWatcher.bind(null, vol));
  }
  if (typeof vol.ReadStream === 'function') {
    patch('ReadStream', vol.ReadStream.bind(null, vol));
  }
  if (typeof vol.WriteStream === 'function') {
    patch('WriteStream', vol.WriteStream.bind(null, vol));
  }
  if (typeof vol._toUnixTimestamp === 'function') patchMethod('_toUnixTimestamp');
  var _iterator2 = _createForOfIteratorHelper(_lists.fsAsyncMethods),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var method = _step2.value;
      if (typeof vol[method] === 'function') patchMethod(method);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  var _iterator3 = _createForOfIteratorHelper(_lists.fsSyncMethods),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _method = _step3.value;
      if (typeof vol[_method] === 'function') patchMethod(_method);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  var promisesBackup;
  try {
    promisesBackup = fs.promises;
    Object.defineProperty(fs, 'promises', {
      get: function get() {
        return vol.promises;
      }
    });
  } catch (_unused) {
    undefined;
  }
  return function unpatch() {
    for (var key in bkp) fs[key] = bkp[key];
    if (promisesBackup) {
      Object.defineProperty(fs, 'promises', {
        get: function get() {
          return promisesBackup;
        }
      });
    }
  };
}
;