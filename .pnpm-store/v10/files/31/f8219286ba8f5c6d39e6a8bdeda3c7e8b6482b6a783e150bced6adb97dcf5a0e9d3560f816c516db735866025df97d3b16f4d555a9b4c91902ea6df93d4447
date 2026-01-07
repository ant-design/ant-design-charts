"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ignore = void 0;
var ignore = exports.ignore = function ignore(item) {
  // 几种特殊的 value 不处理
  if (item.valueType && typeof item.valueType === 'string' && ['index', 'indexBorder', 'option'].includes(item === null || item === void 0 ? void 0 : item.valueType)) {
    return null;
  }
  return true;
};