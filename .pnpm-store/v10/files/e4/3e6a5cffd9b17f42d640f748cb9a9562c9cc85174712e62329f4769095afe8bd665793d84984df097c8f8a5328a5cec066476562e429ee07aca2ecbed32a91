import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { useContext, useMemo } from 'react';
import { DEFAULT_THEME_CONTEXT } from "../functions/setupStyled";
import { useAntdTheme } from "../hooks/useAntdTheme";
import { useThemeMode } from "../hooks/useThemeMode";
import { ConfigProvider } from 'antd';
export var createUseTheme = function createUseTheme(options) {
  return function () {
    var StyleEngineContext = options.StyleEngineContext;
    var _useContext = useContext(StyleEngineContext),
      StyledThemeContext = _useContext.StyledThemeContext,
      CustomThemeContext = _useContext.CustomThemeContext,
      outPrefixCls = _useContext.prefixCls;
    var antdTheme = useAntdTheme();
    var themeState = useThemeMode();
    var defaultCustomTheme = useContext(CustomThemeContext);
    var styledTheme = useContext(StyledThemeContext !== null && StyledThemeContext !== void 0 ? StyledThemeContext : DEFAULT_THEME_CONTEXT) || {};
    var _useContext2 = useContext(ConfigProvider.ConfigContext),
      iconPrefixCls = _useContext2.iconPrefixCls,
      getPrefixCls = _useContext2.getPrefixCls;
    var antdPrefixCls = getPrefixCls();
    // 只有当用户在 createInstance 中传入与 ant 不一样的 prefixCls 时，才会使用用户的 prefixCls
    // 否则其他情况下都优先使用 antd 的 prefixCls
    var prefixCls = outPrefixCls && outPrefixCls !== 'ant' ? outPrefixCls : antdPrefixCls;
    var initTheme = useMemo(function () {
      return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, antdTheme), themeState), defaultCustomTheme), {}, {
        prefixCls: prefixCls,
        iconPrefixCls: iconPrefixCls
      });
    }, [antdTheme, themeState, defaultCustomTheme, prefixCls, iconPrefixCls]);

    //  如果是个空值，说明没有套 Provider，返回 antdTheme 的默认值
    if (!styledTheme || Object.keys(styledTheme).length === 0) {
      return initTheme;
    }
    return _objectSpread(_objectSpread({}, styledTheme), {}, {
      prefixCls: prefixCls,
      iconPrefixCls: iconPrefixCls
    });
  };
};