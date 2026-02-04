import { MESSAGE } from './constant';
import Worker from './index.worker';
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
      var worker = new Worker();
      worker.postMessage({
        _algorithmType: type,
        data: data
      });
      worker.onmessage = function (event) {
        var _a = event.data,
          data = _a.data,
          _algorithmType = _a._algorithmType;
        if (MESSAGE.SUCCESS === _algorithmType) {
          resolve(data);
        } else {
          reject();
        }
        worker.terminate();
      };
    });
  };
};
export default createWorker;