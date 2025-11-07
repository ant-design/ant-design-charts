"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAntdStylish = void 0;
var _react = require("react");
var _core = require("../core");
var _button = require("../stylish/button");
var _convertStylish = require("../utils/convertStylish");
var _useAntdToken = require("./useAntdToken");
var _useThemeMode2 = require("./useThemeMode");
var useAntdStylish = exports.useAntdStylish = function useAntdStylish() {
  var token = (0, _useAntdToken.useAntdToken)();
  var _useThemeMode = (0, _useThemeMode2.useThemeMode)(),
    appearance = _useThemeMode.appearance,
    isDarkMode = _useThemeMode.isDarkMode;
  return (0, _react.useMemo)(function () {
    return (0, _convertStylish.convertStylishToString)((0, _button.createAntdStylish)({
      token: token,
      css: _core.serializeCSS,
      appearance: appearance,
      isDarkMode: isDarkMode
    }));
  }, [token, appearance, isDarkMode]);
};