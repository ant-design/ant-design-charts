"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDebounceValue = useDebounceValue;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _useLatest = require("../useLatest");
/**
 * 一个去抖的setState 减少更新的频率
 * @param  {T} value
 * @param  {number=100} delay
 * @param  {DependencyList} deps?
 * @returns T
 */
function useDebounceValue(value) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var deps = arguments.length > 2 ? arguments[2] : undefined;
  var _useState = (0, _react.useState)(value),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    debouncedValue = _useState2[0],
    setDebouncedValue = _useState2[1];
  var valueRef = (0, _useLatest.useLatest)(value);
  (0, _react.useEffect)(function () {
    var handler = setTimeout(function () {
      setDebouncedValue(valueRef.current);
    }, delay);
    return function () {
      return clearTimeout(handler);
    };
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  deps ? [delay].concat((0, _toConsumableArray2.default)(deps)) : undefined);
  return debouncedValue;
}