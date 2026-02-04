"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useBreakpoint = exports.getScreenClassName = exports.MediaQueryEnum = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _query = _interopRequireDefault(require("./query"));
var MediaQueryEnum = exports.MediaQueryEnum = {
  xs: {
    maxWidth: 575,
    matchMedia: '(max-width: 575px)'
  },
  sm: {
    minWidth: 576,
    maxWidth: 767,
    matchMedia: '(min-width: 576px) and (max-width: 767px)'
  },
  md: {
    minWidth: 768,
    maxWidth: 991,
    matchMedia: '(min-width: 768px) and (max-width: 991px)'
  },
  lg: {
    minWidth: 992,
    maxWidth: 1199,
    matchMedia: '(min-width: 992px) and (max-width: 1199px)'
  },
  xl: {
    minWidth: 1200,
    maxWidth: 1599,
    matchMedia: '(min-width: 1200px) and (max-width: 1599px)'
  },
  xxl: {
    minWidth: 1600,
    matchMedia: '(min-width: 1600px)'
  }
};
/**
 * loop query screen className
 * Array.find will throw a error
 * `Rendered more hooks than during the previous render.`
 * So should use Array.forEach
 */
var getScreenClassName = exports.getScreenClassName = function getScreenClassName() {
  var queryKey = undefined;
  // support ssr
  if (typeof window === 'undefined') {
    return queryKey;
  }
  var mediaQueryKey = Object.keys(MediaQueryEnum).find(function (key) {
    var matchMedia = MediaQueryEnum[key].matchMedia;
    if (window.matchMedia(matchMedia).matches) {
      return true;
    }
    return false;
  });
  queryKey = mediaQueryKey;
  return queryKey;
};
var useBreakpoint = exports.useBreakpoint = function useBreakpoint() {
  var isMd = (0, _query.default)(MediaQueryEnum.md.matchMedia);
  var isLg = (0, _query.default)(MediaQueryEnum.lg.matchMedia);
  var isXxl = (0, _query.default)(MediaQueryEnum.xxl.matchMedia);
  var isXl = (0, _query.default)(MediaQueryEnum.xl.matchMedia);
  var isSm = (0, _query.default)(MediaQueryEnum.sm.matchMedia);
  var isXs = (0, _query.default)(MediaQueryEnum.xs.matchMedia);
  var _useState = (0, _react.useState)(getScreenClassName()),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    colSpan = _useState2[0],
    setColSpan = _useState2[1];
  (0, _react.useEffect)(function () {
    if (process.env.NODE_ENV === 'TEST') {
      setColSpan(process.env.USE_MEDIA || 'md');
      return;
    }
    if (isXxl) {
      setColSpan('xxl');
      return;
    }
    if (isXl) {
      setColSpan('xl');
      return;
    }
    if (isLg) {
      setColSpan('lg');
      return;
    }
    if (isMd) {
      setColSpan('md');
      return;
    }
    if (isSm) {
      setColSpan('sm');
      return;
    }
    if (isXs) {
      setColSpan('xs');
      return;
    }
    setColSpan('md');
  }, [isMd, isLg, isXxl, isXl, isSm, isXs]);
  return colSpan;
};