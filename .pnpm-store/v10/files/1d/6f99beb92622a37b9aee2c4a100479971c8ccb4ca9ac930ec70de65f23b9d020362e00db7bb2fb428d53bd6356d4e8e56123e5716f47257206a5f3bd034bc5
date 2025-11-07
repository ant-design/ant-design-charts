"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _constant = require("./constant");
var _index = _interopRequireDefault(require("./index.worker"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * 创建一个在worker中运行的算法
 * @param type 算法类型
 */
var createWorker = function createWorker(type) {
  return function () {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      data[_i] = arguments[_i];
    }
    return new Promise(function (resolve, reject) {
      var worker = new _index.default();
      worker.postMessage({
        _algorithmType: type,
        data: data
      });
      worker.onmessage = function (event) {
        var _a = event.data,
          data = _a.data,
          _algorithmType = _a._algorithmType;
        if (_constant.MESSAGE.SUCCESS === _algorithmType) {
          resolve(data);
        } else {
          reject();
        }
        worker.terminate();
      };
    });
  };
};
var _default = createWorker;
exports.default = _default;