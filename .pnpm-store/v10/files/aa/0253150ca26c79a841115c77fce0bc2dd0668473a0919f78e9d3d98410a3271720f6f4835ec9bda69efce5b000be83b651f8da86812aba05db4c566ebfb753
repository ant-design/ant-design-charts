"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _core = require("../../core");
var _hooks = require("../../hooks");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["stylish"];
var TokenContainer = function TokenContainer(_ref) {
  var children = _ref.children,
    customTokenOrFn = _ref.customToken,
    defaultCustomTokenFn = _ref.defaultCustomToken,
    stylishOrGetStylish = _ref.customStylish,
    prefixCls = _ref.prefixCls,
    StyledThemeProvider = _ref.StyledThemeProvider;
  var themeState = (0, _hooks.useThemeMode)();
  var appearance = themeState.appearance,
    isDarkMode = themeState.isDarkMode;
  var _useAntdTheme = (0, _hooks.useAntdTheme)(),
    antdStylish = _useAntdTheme.stylish,
    token = (0, _objectWithoutProperties2.default)(_useAntdTheme, _excluded);

  // 获取默认的自定义 token
  var defaultCustomToken = (0, _react.useMemo)(function () {
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
  var customToken = (0, _react.useMemo)(function () {
    if (customTokenOrFn instanceof Function) {
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, defaultCustomToken), customTokenOrFn({
        token: token,
        appearance: appearance,
        isDarkMode: isDarkMode
      }));
    }
    return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, defaultCustomToken), customTokenOrFn);
  }, [defaultCustomToken, customTokenOrFn, token, appearance]);

  // 获取 stylish
  var customStylish = (0, _react.useMemo)(function () {
    if (!stylishOrGetStylish) return {};
    return stylishOrGetStylish({
      token: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), customToken),
      stylish: antdStylish,
      appearance: appearance,
      isDarkMode: isDarkMode,
      css: _core.serializeCSS
    });
  }, [stylishOrGetStylish, token, customToken, antdStylish, appearance]);
  var stylish = (0, _react.useMemo)(function () {
    return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, customStylish), antdStylish);
  }, [customStylish, antdStylish]);
  var theme = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), customToken), {}, {
    stylish: stylish
  }, themeState), {}, {
    prefixCls: prefixCls
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledThemeProvider, {
    theme: theme,
    children: children
  });
};
var _default = exports.default = TokenContainer;