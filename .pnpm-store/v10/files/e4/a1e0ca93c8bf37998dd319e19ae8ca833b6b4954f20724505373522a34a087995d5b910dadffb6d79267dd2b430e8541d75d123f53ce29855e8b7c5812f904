import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import { useEffect, useRef } from 'react';
import { isDeepEqualReact } from "../../isDeepEqualReact";
import { useDebounceFn } from "../useDebounceFn";
export var isDeepEqual = function isDeepEqual(a, b, ignoreKeys) {
  return isDeepEqualReact(a, b, ignoreKeys);
};
export function useDeepCompareMemoize(value, ignoreKeys) {
  var ref = useRef();
  // it can be done by using useMemo as well
  // but useRef is rather cleaner and easier
  if (!isDeepEqual(value, ref.current, ignoreKeys)) {
    ref.current = value;
  }
  return ref.current;
}
export function useDeepCompareEffect(effect, dependencies, ignoreKeys) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, useDeepCompareMemoize(dependencies || [], ignoreKeys));
}
export function useDeepCompareEffectDebounce(effect, dependencies, ignoreKeys, waitTime) {
  var effectDn = useDebounceFn( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          effect();
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })), waitTime || 16);
  useEffect(function () {
    effectDn.run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, useDeepCompareMemoize(dependencies || [], ignoreKeys));
}