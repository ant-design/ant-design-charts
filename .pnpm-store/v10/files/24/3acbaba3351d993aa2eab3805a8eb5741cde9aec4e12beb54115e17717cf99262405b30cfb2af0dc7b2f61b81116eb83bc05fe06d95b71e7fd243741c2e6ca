"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDeepEqual = void 0;
exports.useDeepCompareEffect = useDeepCompareEffect;
exports.useDeepCompareEffectDebounce = useDeepCompareEffectDebounce;
exports.useDeepCompareMemoize = useDeepCompareMemoize;
var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/regeneratorRuntime"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = require("react");
var _isDeepEqualReact = require("../../isDeepEqualReact");
var _useDebounceFn = require("../useDebounceFn");
var isDeepEqual = exports.isDeepEqual = function isDeepEqual(a, b, ignoreKeys) {
  return (0, _isDeepEqualReact.isDeepEqualReact)(a, b, ignoreKeys);
};
function useDeepCompareMemoize(value, ignoreKeys) {
  var ref = (0, _react.useRef)();
  // it can be done by using useMemo as well
  // but useRef is rather cleaner and easier
  if (!isDeepEqual(value, ref.current, ignoreKeys)) {
    ref.current = value;
  }
  return ref.current;
}
function useDeepCompareEffect(effect, dependencies, ignoreKeys) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  (0, _react.useEffect)(effect, useDeepCompareMemoize(dependencies || [], ignoreKeys));
}
function useDeepCompareEffectDebounce(effect, dependencies, ignoreKeys, waitTime) {
  var effectDn = (0, _useDebounceFn.useDebounceFn)( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee() {
    return (0, _regeneratorRuntime2.default)().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          effect();
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })), waitTime || 16);
  (0, _react.useEffect)(function () {
    effectDn.run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, useDeepCompareMemoize(dependencies || [], ignoreKeys));
}