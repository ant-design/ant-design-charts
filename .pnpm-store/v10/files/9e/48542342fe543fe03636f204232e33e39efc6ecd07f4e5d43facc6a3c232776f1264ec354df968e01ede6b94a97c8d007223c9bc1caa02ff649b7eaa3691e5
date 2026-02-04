"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupStyled = exports.DEFAULT_THEME_PROVIDER = exports.DEFAULT_THEME_CONTEXT = void 0;
var _react = require("@emotion/react");
var _createStyledThemeProvider = require("../factories/createStyledThemeProvider");
var DEFAULT_THEME_PROVIDER = exports.DEFAULT_THEME_PROVIDER = _react.ThemeProvider;
var DEFAULT_THEME_CONTEXT = exports.DEFAULT_THEME_CONTEXT = _react.ThemeContext;
var setupStyled = exports.setupStyled = function setupStyled(config) {
  if (!config.ThemeContext) {
    throw 'ThemeContext is required. Please check your config.';
  }
  exports.DEFAULT_THEME_CONTEXT = DEFAULT_THEME_CONTEXT = config.ThemeContext;
  exports.DEFAULT_THEME_PROVIDER = DEFAULT_THEME_PROVIDER = (0, _createStyledThemeProvider.createStyledThemeProvider)(config);
};