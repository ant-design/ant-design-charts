"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _useMergeValue5 = _interopRequireDefault(require("use-merge-value"));
var _context = require("../../context");
var _matchBrowserPrefers2 = require("../../utils/matchBrowserPrefers");
var _safeStartTransition = require("../../utils/safeStartTransition");
var _jsxRuntime = require("react/jsx-runtime");
var darkThemeMatch;
var ThemeObserver = function ThemeObserver(_ref) {
  var themeMode = _ref.themeMode,
    setAppearance = _ref.setAppearance,
    setBrowserPrefers = _ref.setBrowserPrefers;
  var matchBrowserTheme = function matchBrowserTheme() {
    (0, _safeStartTransition.safeStartTransition)(function () {
      if ((0, _matchBrowserPrefers2.matchBrowserPrefers)('dark').matches) {
        setAppearance('dark');
      } else {
        setAppearance('light');
      }
    });
  };
  var updateBrowserTheme = function updateBrowserTheme() {
    (0, _safeStartTransition.safeStartTransition)(function () {
      if ((0, _matchBrowserPrefers2.matchBrowserPrefers)('dark').matches) {
        setBrowserPrefers('dark');
      } else {
        setBrowserPrefers('light');
      }
    });
  };

  // 自动监听系统主题变更
  (0, _react.useLayoutEffect)(function () {
    // 如果不是自动，就明确设定亮暗色
    if (themeMode !== 'auto') {
      (0, _safeStartTransition.safeStartTransition)(function () {
        setAppearance(themeMode);
      });
      return;
    }
    // 如果是自动的话，则去做一次匹配，并开始监听
    setTimeout(matchBrowserTheme, 1);
    if (!darkThemeMatch) {
      darkThemeMatch = (0, _matchBrowserPrefers2.matchBrowserPrefers)('dark');
    }
    darkThemeMatch.addEventListener('change', matchBrowserTheme);
    return function () {
      darkThemeMatch.removeEventListener('change', matchBrowserTheme);
    };
  }, [themeMode]);
  (0, _react.useLayoutEffect)(function () {
    if (!darkThemeMatch) {
      darkThemeMatch = (0, _matchBrowserPrefers2.matchBrowserPrefers)('dark');
    }
    darkThemeMatch.addEventListener('change', updateBrowserTheme);
    return function () {
      darkThemeMatch.removeEventListener('change', updateBrowserTheme);
    };
  }, []);
  return null;
};
var ThemeSwitcher = /*#__PURE__*/(0, _react.memo)(function (_ref2) {
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
  var _useMergeValue = (0, _useMergeValue5.default)('light', {
      value: themeModeProps,
      defaultValue: defaultThemeMode !== null && defaultThemeMode !== void 0 ? defaultThemeMode : upperThemeMode,
      onChange: function onChange(v) {
        return onThemeModeChange === null || onThemeModeChange === void 0 ? void 0 : onThemeModeChange(v);
      }
    }),
    _useMergeValue2 = (0, _slicedToArray2.default)(_useMergeValue, 2),
    themeMode = _useMergeValue2[0],
    setThemeMode = _useMergeValue2[1];
  var _useMergeValue3 = (0, _useMergeValue5.default)('light', {
      value: appearanceProp,
      defaultValue: defaultAppearance !== null && defaultAppearance !== void 0 ? defaultAppearance : upperAppearance,
      onChange: function onChange(v) {
        return onAppearanceChange === null || onAppearanceChange === void 0 ? void 0 : onAppearanceChange(v);
      }
    }),
    _useMergeValue4 = (0, _slicedToArray2.default)(_useMergeValue3, 2),
    appearance = _useMergeValue4[0],
    setAppearance = _useMergeValue4[1];
  var _useState = (0, _react.useState)((_matchBrowserPrefers = (0, _matchBrowserPrefers2.matchBrowserPrefers)('dark')) !== null && _matchBrowserPrefers !== void 0 && _matchBrowserPrefers.matches ? 'dark' : 'light'),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    browserPrefers = _useState2[0],
    setBrowserPrefers = _useState2[1];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_context.ThemeModeContext.Provider, {
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
    typeof window !== 'undefined' && /*#__PURE__*/(0, _jsxRuntime.jsx)(ThemeObserver, {
      themeMode: themeMode,
      setAppearance: setAppearance,
      setBrowserPrefers: setBrowserPrefers
    }), children]
  });
});
ThemeSwitcher.displayName = 'ThemeSwitcher';
var _default = exports.default = ThemeSwitcher;