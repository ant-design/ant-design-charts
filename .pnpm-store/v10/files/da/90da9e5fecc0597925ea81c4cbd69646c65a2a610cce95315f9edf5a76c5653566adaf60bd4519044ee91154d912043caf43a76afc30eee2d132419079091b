import { ThemeContext, ThemeProvider } from '@emotion/react';
import { createStyledThemeProvider } from "../factories/createStyledThemeProvider";
export var DEFAULT_THEME_PROVIDER = ThemeProvider;
export var DEFAULT_THEME_CONTEXT = ThemeContext;
export var setupStyled = function setupStyled(config) {
  if (!config.ThemeContext) {
    throw 'ThemeContext is required. Please check your config.';
  }
  DEFAULT_THEME_CONTEXT = config.ThemeContext;
  DEFAULT_THEME_PROVIDER = createStyledThemeProvider(config);
};