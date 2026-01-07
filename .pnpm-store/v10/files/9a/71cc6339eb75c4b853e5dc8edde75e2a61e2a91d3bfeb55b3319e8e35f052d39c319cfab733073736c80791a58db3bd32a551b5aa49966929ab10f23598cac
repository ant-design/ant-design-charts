"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var algorithm = _interopRequireWildcard(require("./algorithm"));
var _constant = require("./constant");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ctx = typeof self !== 'undefined' ? self : {};
ctx.onmessage = function (event) {
  var _a = event.data,
    _algorithmType = _a._algorithmType,
    data = _a.data;
  // 如果发送内容没有私有类型。说明不是自己发的。不管
  // fix: https://github.com/antvis/algorithm/issues/25
  if (!_algorithmType) {
    return;
  }
  if (typeof algorithm[_algorithmType] === 'function') {
    var result = algorithm[_algorithmType].apply(algorithm, data);
    ctx.postMessage({
      _algorithmType: _constant.MESSAGE.SUCCESS,
      data: result
    });
    return;
  }
  ctx.postMessage({
    _algorithmType: _constant.MESSAGE.FAILURE
  });
};
// https://stackoverflow.com/questions/50210416/webpack-worker-loader-fails-to-compile-typescript-worker
var _default = null;
exports.default = _default;