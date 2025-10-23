import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { memo, useLayoutEffect, useState } from 'react';
import useMergeValue from 'use-merge-value';
import { ThemeModeContext } from "../../context";
import { matchBrowserPrefers } from "../../utils/matchBrowserPrefers";
import { safeStartTransition } from "../../utils/safeStartTransition";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var darkThemeMatch;
var ThemeObserver = function ThemeObserver(_ref) {
  var themeMode = _ref.themeMode,
    setAppearance = _ref.setAppearance,
    setBrowserPrefers = _ref.setBrowserPrefers;
  var matchBrowserTheme = function matchBrowserTheme() {
    safeStartTransition(function () {
      if (matchBrowserPrefers('dark').matches) {
        setAppearance('dark');
      } else {
        setAppearance('light');
      }
    });
  };
  var updateBrowserTheme = function updateBrowserTheme() {
    safeStartTransition(function () {
      if (matchBrowserPrefers('dark').matches) {
        setBrowserPrefers('dark');
      } else {
        setBrowserPrefers('light');
      }
    });
  };

  // 自动监听系统主题变更
  useLayoutEffect(function () {
    // 如果不是自动，就明确设定亮暗色
    if (themeMode !== 'auto') {
      safeStartTransition(function () {
        setAppearance(themeMode);
      });
      return;
    }
    // 如果是自动的话，则去做一次匹配，并开始监听
    setTimeout(matchBrowserTheme, 1);
    if (!darkThemeMatch) {
      darkThemeMatch = matchBrowserPrefers('dark');
    }
    darkThemeMatch.addEventListener('change', matchBrowserTheme);
    return function () {
      darkThemeMatch.removeEventListener('change', matchBrowserTheme);
    };
  }, [themeMode]);
  useLayoutEffect(function () {
    if (!darkThemeMatch) {
      darkThemeMatch = matchBrowserPrefers('dark');
    }
    darkThemeMatch.addEventListener('change', updateBrowserTheme);
    return function () {
      darkThemeMatch.removeEventListener('change', updateBrowserTheme);
    };
  }, []);
  return null;
};
var ThemeSwitcher = /*#__PURE__*/memo(function (_ref2) {
  var _matchBrowserPrefers;
  var children = _ref2.children,
    appearanceProp = _ref2.appearance,
    defaultAppearance = _ref2.defaultAppearance,
    onAppearanceChange = _ref2.onAppearanceChange,
    themeModeProps = _ref2.themeMode,
    defaultThemeMode = _ref2.defaultThemeMode,
    onThemeModeChange = _ref2.onThemeModeChange,
    useTheme = _ref2.useTheme;
  var _useTheme = useTheme(),
    upperAppearance = _useTheme.appearance,
    upperThemeMode = _useTheme.themeMode;
  var _useMergeValue = useMergeValue('light', {
      value: themeModeProps,
      defaultValue: defaultThemeMode !== null && defaultThemeMode !== void 0 ? defaultThemeMode : upperThemeMode,
      onChange: function onChange(v) {
        return onThemeModeChange === null || onThemeModeChange === void 0 ? void 0 : onThemeModeChange(v);
      }
    }),
    _useMergeValue2 = _slicedToArray(_useMergeValue, 2),
    themeMode = _useMergeValue2[0],
    setThemeMode = _useMergeValue2[1];
  var _useMergeValue3 = useMergeValue('light', {
      value: appearanceProp,
      defaultValue: defaultAppearance !== null && defaultAppearance !== void 0 ? defaultAppearance : upperAppearance,
      onChange: function onChange(v) {
        return onAppearanceChange === null || onAppearanceChange === void 0 ? void 0 : onAppearanceChange(v);
      }
    }),
    _useMergeValue4 = _slicedToArray(_useMergeValue3, 2),
    appearance = _useMergeValue4[0],
    setAppearance = _useMergeValue4[1];
  var _useState = useState((_matchBrowserPrefers = matchBrowserPrefers('dark')) !== null && _matchBrowserPrefers !== void 0 && _matchBrowserPrefers.matches ? 'dark' : 'light'),
    _useState2 = _slicedToArray(_useState, 2),
    browserPrefers = _useState2[0],
    setBrowserPrefers = _useState2[1];
  return /*#__PURE__*/_jsxs(ThemeModeContext.Provider, {
    value: {
      themeMode: themeMode,
      setThemeMode: setThemeMode,
      appearance: appearance,
      setAppearance: setAppearance,
      isDarkMode: appearance === 'dark',
      browserPrefers: browserPrefers
    },
    children: [
    // Wait until after client-side hydration to show
    typeof window !== 'undefined' && /*#__PURE__*/_jsx(ThemeObserver, {
      themeMode: themeMode,
      setAppearance: setAppearance,
      setBrowserPrefers: setBrowserPrefers
    }), children]
  });
});
ThemeSwitcher.displayName = 'ThemeSwitcher';
export default ThemeSwitcher;