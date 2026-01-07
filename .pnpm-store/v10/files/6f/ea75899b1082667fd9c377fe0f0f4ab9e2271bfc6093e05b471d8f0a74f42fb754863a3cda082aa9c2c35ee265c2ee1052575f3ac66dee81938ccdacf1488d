"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDropdownValueType = void 0;
var isDropdownValueType = exports.isDropdownValueType = function isDropdownValueType(valueType) {
  var isDropdown = false;
  if (typeof valueType === 'string' && valueType.startsWith('date') && !valueType.endsWith('Range') || valueType === 'select' || valueType === 'time') {
    isDropdown = true;
  }
  return isDropdown;
};