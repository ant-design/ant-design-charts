"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStyledThemeProvider = void 0;
var _jsxRuntime = require("react/jsx-runtime");
/**
 * 创建一个 styled api 的 ThemeProvider
 *  如果用户有设定 ThemeProvider，就使用用户的，否则使用 ThemeContext.Provider
 * @param styledConfig
 */
var createStyledThemeProvider = exports.createStyledThemeProvider = function createStyledThemeProvider(styledConfig) {
  if (styledConfig.ThemeProvider) return styledConfig.ThemeProvider;
  var ThemeContext = styledConfig.ThemeContext;
  return function (props) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(ThemeContext.Provider, {
      value: props.theme,
      children: props.children
    });
  };
};