"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _useDeepCompareEffect = require("../useDeepCompareEffect");
/**
 * `useDeepCompareMemo` will only recompute the memoized value when one of the
 * `deps` has changed.
 *
 * Usage note: only use this if `deps` are objects or arrays that contain
 * objects. Otherwise you should just use React.useMemo.
 *
 */
function useDeepCompareMemo(factory, dependencies) {
  return _react.default.useMemo(factory, (0, _useDeepCompareEffect.useDeepCompareMemoize)(dependencies));
}
var _default = exports.default = useDeepCompareMemo;