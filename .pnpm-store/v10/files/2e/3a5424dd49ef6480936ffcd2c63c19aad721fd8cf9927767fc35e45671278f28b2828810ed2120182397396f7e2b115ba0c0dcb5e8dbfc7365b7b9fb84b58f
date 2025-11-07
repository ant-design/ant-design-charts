import { memo, useContext } from 'react';
import { DEFAULT_THEME_CONTEXT, DEFAULT_THEME_PROVIDER } from "../../functions/setupStyled";
import { createStyledThemeProvider } from "../createStyledThemeProvider";
import AntdProvider from "./AntdProvider";
import ThemeSwitcher from "./ThemeSwitcher";
import TokenContainer from "./TokenContainer";
import { jsx as _jsx } from "react/jsx-runtime";
export * from "./type";
/**
 * @title CreateThemeProviderOptions
 * @category Interfaces
 * @description 用于创建主题提供者的选项接口
 */

export var createThemeProvider = function createThemeProvider(option) {
  // 如果有全局配置 styledConfig，那么 ThemeProvider
  var DefaultStyledThemeProvider = option.styledConfig ? createStyledThemeProvider(option.styledConfig) : undefined;
  var StyleEngineContext = option.StyleEngineContext;
  return /*#__PURE__*/memo(function (_ref) {
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
    var _useContext = useContext(StyleEngineContext),
      defaultPrefixCls = _useContext.prefixCls,
      StyledThemeContext = _useContext.StyledThemeContext,
      CustomThemeContext = _useContext.CustomThemeContext;
    var defaultCustomToken = useContext(CustomThemeContext);
    var StyledThemeProvider = styled ? createStyledThemeProvider(styled) : DefaultStyledThemeProvider || DEFAULT_THEME_PROVIDER;
    var prefixCls = outPrefixCls || defaultPrefixCls;
    return /*#__PURE__*/_jsx(StyleEngineContext.Provider, {
      value: {
        prefixCls: prefixCls,
        StyledThemeContext: (styled === null || styled === void 0 ? void 0 : styled.ThemeContext) || StyledThemeContext || DEFAULT_THEME_CONTEXT,
        CustomThemeContext: CustomThemeContext
      },
      children: /*#__PURE__*/_jsx(ThemeSwitcher, {
        themeMode: themeMode,
        defaultThemeMode: defaultThemeMode,
        onThemeModeChange: onThemeModeChange,
        defaultAppearance: defaultAppearance,
        appearance: appearance,
        onAppearanceChange: onAppearanceChange,
        useTheme: option.useTheme,
        children: /*#__PURE__*/_jsx(AntdProvider, {
          prefixCls: prefixCls,
          staticInstanceConfig: staticInstanceConfig,
          theme: theme,
          getStaticInstance: getStaticInstance,
          children: /*#__PURE__*/_jsx(TokenContainer, {
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