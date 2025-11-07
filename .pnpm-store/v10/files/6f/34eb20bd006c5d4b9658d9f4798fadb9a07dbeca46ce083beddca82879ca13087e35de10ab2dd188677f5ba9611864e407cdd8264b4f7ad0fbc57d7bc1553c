"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useSyncState;
var _react = _interopRequireDefault(require("react"));
function useSyncState(defaultValue) {
  const [, forceUpdate] = _react.default.useState(0);
  const stateRef = _react.default.useRef(typeof defaultValue === 'function' ? defaultValue() : defaultValue);
  const setState = _react.default.useCallback(action => {
    stateRef.current = typeof action === 'function' ? action(stateRef.current) : action;
    forceUpdate(prev => prev + 1);
  }, []);
  const getState = _react.default.useCallback(() => stateRef.current, []);
  return [stateRef.current, setState, getState];
}