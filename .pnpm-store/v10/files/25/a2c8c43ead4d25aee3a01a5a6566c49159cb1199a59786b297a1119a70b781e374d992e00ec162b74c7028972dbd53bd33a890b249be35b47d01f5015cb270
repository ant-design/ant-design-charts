"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runFunction = runFunction;
/** 如果是个方法执行一下它 */
function runFunction(valueEnum) {
  if (typeof valueEnum === 'function') {
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }
    return valueEnum.apply(void 0, rest);
  }
  return valueEnum;
}