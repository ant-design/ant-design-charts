import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect, useState } from 'react';
import { useLatest } from "../useLatest";
/**
 * 一个去抖的setState 减少更新的频率
 * @param  {T} value
 * @param  {number=100} delay
 * @param  {DependencyList} deps?
 * @returns T
 */
export function useDebounceValue(value) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var deps = arguments.length > 2 ? arguments[2] : undefined;
  var _useState = useState(value),
    _useState2 = _slicedToArray(_useState, 2),
    debouncedValue = _useState2[0],
    setDebouncedValue = _useState2[1];
  var valueRef = useLatest(value);
  useEffect(function () {
    var handler = setTimeout(function () {
      setDebouncedValue(valueRef.current);
    }, delay);
    return function () {
      return clearTimeout(handler);
    };
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  deps ? [delay].concat(_toConsumableArray(deps)) : undefined);
  return debouncedValue;
}