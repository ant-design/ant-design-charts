"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  createThemeProvider: true
};
exports.createThemeProvider = void 0;
var _react = require("react");
var _setupStyled = require("../../functions/setupStyled");
var _createStyledThemeProvider = require("../createStyledThemeProvider");
var _AntdProvider = _interopRequireDefault(require("./AntdProvider"));
var _ThemeSwitcher = _interopRequireDefault(require("./ThemeSwitcher"));
var _TokenContainer = _interopRequireDefault(require("./TokenContainer"));
var _jsxRuntime = require("react/jsx-runtime");
var _type = require("./type");
Object.keys(_type).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _type[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _type[key];
    }
  });
});
/**
 * @title CreateThemeProviderOptions
 * @category Interfaces
 * @description 用于创建主题提供者的选项接口
 */

var createThemeProvider = exports.createThemeProvider = function createThemeProvider(option) {
  // 如果有全局配置 styledConfig，那么 ThemeProvider
  var DefaultStyledThemeProvider = option.styledConfig ? (0, _createStyledThemeProvider.createStyledThemeProvider)(option.styledConfig) : undefined;
  var StyleEngineContext = option.StyleEngineContext;
  return /*#__PURE__*/(0, _react.memo)(function (_ref) {
    var children = _ref.children,
      customToken = _ref.customToken,
      customStylish = _ref.customStylish,
      theme = _ref.theme,
      getStaticInstance = _ref.getStaticInstance,
      outPrefixCls = _ref.prefixCls,
      staticInstanceConfig = _ref.staticInstanceConfig,
      appearance = _ref.appearance,
      defaultAppearance = _ref.defaultAppearance,
      onAppearanceChange = _ref.onAppearanceChange,
      themeMode = _ref.themeMode,
      defaultThemeMode = _ref.defaultThemeMode,
      onThemeModeChange = _ref.onThemeModeChange,
      styled = _ref.styled;
    // 从上一层的 Context 中获取上下文信息，以实现嵌套继承的效果
    var _useContext = (0, _react.useContext)(StyleEngineContext),
      defaultPrefixCls = _useContext.prefixCls,
      StyledThemeContext = _useContext.StyledThemeContext,
      CustomThemeContext = _useContext.CustomThemeContext;
    var defaultCustomToken = (0, _react.useContext)(CustomThemeContext);
    var StyledThemeProvider = styled ? (0, _createStyledThemeProvider.createStyledThemeProvider)(styled) : DefaultStyledThemeProvider || _setupStyled.DEFAULT_THEME_PROVIDER;
    var prefixCls = outPrefixCls || defaultPrefixCls;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(StyleEngineContext.Provider, {
      value: {
        prefixCls: prefixCls,
        StyledThemeContext: (styled === null || styled === void 0 ? void 0 : styled.ThemeContext) || StyledThemeContext || _setupStyled.DEFAULT_THEME_CONTEXT,
        CustomThemeContext: CustomThemeContext
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ThemeSwitcher.default, {
        themeMode: themeMode,
        defaultThemeMode: defaultThemeMode,
        onThemeModeChange: onThemeModeChange,
        defaultAppearance: defaultAppearance,
        appearance: appearance,
        onAppearanceChange: onAppearanceChange,
        useTheme: option.useTheme,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_AntdProvider.default, {
          prefixCls: prefixCls,
          staticInstanceConfig: staticInstanceConfig,
          theme: theme,
          getStaticInstance: getStaticInstance,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TokenContainer.default, {
            prefixCls: prefixCls,
            customToken: customToken,
            defaultCustomToken: defaultCustomToken,
            customStylish: customStylish,
            StyledThemeProvider: StyledThemeProvider,
            children: children
          })
        })
      })
    });
  });
};