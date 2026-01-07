import { useMemo } from 'react';
import { serializeCSS } from "../core";
import { createAntdStylish } from "../stylish/button";
import { convertStylishToString } from "../utils/convertStylish";
import { useAntdToken } from "./useAntdToken";
import { useThemeMode } from "./useThemeMode";
export var useAntdStylish = function useAntdStylish() {
  var token = useAntdToken();
  var _useThemeMode = useThemeMode(),
    appearance = _useThemeMode.appearance,
    isDarkMode = _useThemeMode.isDarkMode;
  return useMemo(function () {
    return convertStylishToString(createAntdStylish({
      token: token,
      css: serializeCSS,
      appearance: appearance,
      isDarkMode: isDarkMode
    }));
  }, [token, appearance, isDarkMode]);
};