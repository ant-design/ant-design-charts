"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUseTheme = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _react = require("react");
var _setupStyled = require("../functions/setupStyled");
var _useAntdTheme = require("../hooks/useAntdTheme");
var _useThemeMode = require("../hooks/useThemeMode");
var _antd = require("antd");
var createUseTheme = exports.createUseTheme = function createUseTheme(options) {
  return function () {
    var StyleEngineContext = options.StyleEngineContext;
    var _useContext = (0, _react.useContext)(StyleEngineContext),
      StyledThemeContext = _useContext.StyledThemeContext,
      CustomThemeContext = _useContext.CustomThemeContext,
      outPrefixCls = _useContext.prefixCls;
    var antdTheme = (0, _useAntdTheme.useAntdTheme)();
    var themeState = (0, _useThemeMode.useThemeMode)();
    var defaultCustomTheme = (0, _react.useContext)(CustomThemeContext);
    var styledTheme = (0, _react.useContext)(StyledThemeContext !== null && StyledThemeContext !== void 0 ? StyledThemeContext : _setupStyled.DEFAULT_THEME_CONTEXT) || {};
    var _useContext2 = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
      iconPrefixCls = _useContext2.iconPrefixCls,
      getPrefixCls = _useContext2.getPrefixCls;
    var antdPrefixCls = getPrefixCls();
    // 只有当用户在 createInstance 中传入与 ant 不一样的 prefixCls 时，才会使用用户的 prefixCls
    // 否则其他情况下都优先使用 antd 的 prefixCls
    var prefixCls = outPrefixCls && outPrefixCls !== 'ant' ? outPrefixCls : antdPrefixCls;
    var initTheme = (0, _react.useMemo)(function () {
      return (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, antdTheme), themeState), defaultCustomTheme), {}, {
        prefixCls: prefixCls,
        iconPrefixCls: iconPrefixCls
      });
    }, [antdTheme, themeState, defaultCustomTheme, prefixCls, iconPrefixCls]);

    //  如果是个空值，说明没有套 Provider，返回 antdTheme 的默认值
    if (!styledTheme || Object.keys(styledTheme).length === 0) {
      return initTheme;
    }
    return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, styledTheme), {}, {
      prefixCls: prefixCls,
      iconPrefixCls: iconPrefixCls
    });
  };
};