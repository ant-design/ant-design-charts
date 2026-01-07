import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["stylish"];
import { useMemo } from 'react';
import { serializeCSS } from "../../core";
import { useAntdTheme, useThemeMode } from "../../hooks";
import { jsx as _jsx } from "react/jsx-runtime";
var TokenContainer = function TokenContainer(_ref) {
  var children = _ref.children,
    customTokenOrFn = _ref.customToken,
    defaultCustomTokenFn = _ref.defaultCustomToken,
    stylishOrGetStylish = _ref.customStylish,
    prefixCls = _ref.prefixCls,
    StyledThemeProvider = _ref.StyledThemeProvider;
  var themeState = useThemeMode();
  var appearance = themeState.appearance,
    isDarkMode = themeState.isDarkMode;
  var _useAntdTheme = useAntdTheme(),
    antdStylish = _useAntdTheme.stylish,
    token = _objectWithoutProperties(_useAntdTheme, _excluded);

  // 获取默认的自定义 token
  var defaultCustomToken = useMemo(function () {
    if (!defaultCustomTokenFn) return {};
    if (defaultCustomTokenFn instanceof Function) {
      return defaultCustomTokenFn({
        token: token,
        appearance: appearance,
        isDarkMode: isDarkMode
      });
    }
    return defaultCustomTokenFn;
  }, [defaultCustomTokenFn, token, appearance]);

  // 获取 自定义 token
  var customToken = useMemo(function () {
    if (customTokenOrFn instanceof Function) {
      return _objectSpread(_objectSpread({}, defaultCustomToken), customTokenOrFn({
        token: token,
        appearance: appearance,
        isDarkMode: isDarkMode
      }));
    }
    return _objectSpread(_objectSpread({}, defaultCustomToken), customTokenOrFn);
  }, [defaultCustomToken, customTokenOrFn, token, appearance]);

  // 获取 stylish
  var customStylish = useMemo(function () {
    if (!stylishOrGetStylish) return {};
    return stylishOrGetStylish({
      token: _objectSpread(_objectSpread({}, token), customToken),
      stylish: antdStylish,
      appearance: appearance,
      isDarkMode: isDarkMode,
      css: serializeCSS
    });
  }, [stylishOrGetStylish, token, customToken, antdStylish, appearance]);
  var stylish = useMemo(function () {
    return _objectSpread(_objectSpread({}, customStylish), antdStylish);
  }, [customStylish, antdStylish]);
  var theme = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, token), customToken), {}, {
    stylish: stylish
  }, themeState), {}, {
    prefixCls: prefixCls
  });
  return /*#__PURE__*/_jsx(StyledThemeProvider, {
    theme: theme,
    children: children
  });
};
export default TokenContainer;