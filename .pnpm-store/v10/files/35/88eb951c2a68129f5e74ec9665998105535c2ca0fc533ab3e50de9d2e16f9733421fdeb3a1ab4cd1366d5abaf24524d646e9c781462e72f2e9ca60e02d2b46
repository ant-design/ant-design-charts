"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useMediaQuery;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function useMediaQuery(mediaQuery) {
  var isSsr = typeof window === 'undefined';
  var _useState = (0, _react.useState)(function () {
      return isSsr ? false : window.matchMedia(mediaQuery).matches;
    }),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    matches = _useState2[0],
    setMatches = _useState2[1];
  (0, _react.useLayoutEffect)(function () {
    if (isSsr) {
      return;
    }
    var mediaQueryList = window.matchMedia(mediaQuery);
    var listener = function listener(e) {
      return setMatches(e.matches);
    };
    mediaQueryList.addListener(listener);
    return function () {
      return mediaQueryList.removeListener(listener);
    };
  }, [mediaQuery]);
  return matches;
}