import * as algorithm from './algorithm';
import { MESSAGE } from './constant';
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
      _algorithmType: MESSAGE.SUCCESS,
      data: result
    });
    return;
  }
  ctx.postMessage({
    _algorithmType: MESSAGE.FAILURE
  });
};
// https://stackoverflow.com/questions/50210416/webpack-worker-loader-fails-to-compile-typescript-worker
export default null;