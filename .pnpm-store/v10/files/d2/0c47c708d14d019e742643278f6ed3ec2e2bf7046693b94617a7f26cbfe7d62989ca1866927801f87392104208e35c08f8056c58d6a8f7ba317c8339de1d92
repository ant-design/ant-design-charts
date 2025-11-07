import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { serializeCSS } from "../../core";
import { useAntdToken } from "../../hooks";
import { isReactCssResult } from "../../utils";
import { convertBreakpointToResponsive } from "../../utils/responsive";
import { useMemo } from 'react';
export var useMediaQueryMap = function useMediaQueryMap() {
  var token = useAntdToken();
  var breakpoints = {
    xs: "@media (max-width: ".concat(token.screenXSMax, "px)"),
    sm: "@media (max-width: ".concat(token.screenSMMax, "px)"),
    md: "@media (max-width: ".concat(token.screenMDMax, "px)"),
    lg: "@media (max-width: ".concat(token.screenLGMax, "px)"),
    xl: "@media (max-width: ".concat(token.screenXLMax, "px)"),
    xxl: "@media (min-width: ".concat(token.screenXXLMin, "px)")
  };
  return useMemo(function () {
    return convertBreakpointToResponsive(breakpoints);
  }, [token]);
};

/**
 * 将响应式对象转换为字符串
 * @param obj
 * @param map
 */
export var convertResponsiveStyleToString = function convertResponsiveStyleToString(obj, map) {
  return Object.entries(obj).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    var str = value;
    if (!isReactCssResult(value)) {
      str = serializeCSS(value);
    }

    // @ts-ignore
    return map[key] ? "".concat(map[key], " {").concat(str.styles, "}") : '';
  }).join('');
};