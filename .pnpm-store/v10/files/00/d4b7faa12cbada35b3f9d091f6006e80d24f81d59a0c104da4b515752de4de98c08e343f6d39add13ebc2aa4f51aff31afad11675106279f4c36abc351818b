"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertStylishToString = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
/**
 * 将 stylish 中的 styles 取出作为 可复用的 string
 * @param stylish
 */
var convertStylishToString = exports.convertStylishToString = function convertStylishToString(stylish) {
  return Object.fromEntries(Object.entries(stylish).map(function (_ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    return [key, value.styles];
  }));
};