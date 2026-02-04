import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createContext } from 'react';
import { CacheManager, createCSS, createEmotion, serializeCSS } from "../core";
import { createEmotionContext } from "../factories/createEmotionContext";
import { createGlobalStyleFactory } from "../factories/createGlobalStyle";
import { createStylishFactory } from "../factories/createStyish";
import { createStyleProvider } from "../factories/createStyleProvider";
import { createStylesFactory } from "../factories/createStyles";
import { createThemeProvider } from "../factories/createThemeProvider";
import { createUseTheme } from "../factories/createUseTheme";

// 为 SSR 添加一个全局的 cacheManager，用于统一抽取 ssr 样式

var cacheManager = new CacheManager();
if (typeof global !== 'undefined') {
  global.__ANTD_STYLE_CACHE_MANAGER_FOR_SSR__ = cacheManager;
}
/**
 * Creates a new instance of antd-style
 * 创建一个新的 antd-style 实例
 */
export var createInstance = function createInstance(options) {
  var _options$key, _options$speedy, _internalOptions$styl;
  var internalOptions = _objectSpread(_objectSpread({}, options), {}, {
    key: (_options$key = options.key) !== null && _options$key !== void 0 ? _options$key : 'zcss',
    // 新建的 instance key 如果不传，则设为 zcss- 使得该 key 和 acss 不一样
    speedy: (_options$speedy = options.speedy) !== null && _options$speedy !== void 0 ? _options$speedy : false
  });
  var emotion = createEmotion({
    key: internalOptions.key,
    speedy: internalOptions.speedy,
    container: internalOptions.container
  });
  var EmotionContext = createEmotionContext(emotion);
  var StyleProvider = createStyleProvider(EmotionContext);

  // 将 cache 存到全局管理器中
  emotion.cache = cacheManager.add(emotion.cache);

  // ******* 下面这些都和主题相关，如果做了任何改动，都需要排查一遍 ************* //

  var CustomThemeContext = /*#__PURE__*/createContext(internalOptions.customToken ? internalOptions.customToken : {});
  var styledThemeContext = (_internalOptions$styl = internalOptions.styled) === null || _internalOptions$styl === void 0 ? void 0 : _internalOptions$styl.ThemeContext;
  var StyleEngineContext = /*#__PURE__*/createContext({
    CustomThemeContext: CustomThemeContext,
    StyledThemeContext: styledThemeContext,
    prefixCls: internalOptions === null || internalOptions === void 0 ? void 0 : internalOptions.prefixCls,
    iconPrefixCls: internalOptions === null || internalOptions === void 0 ? void 0 : internalOptions.iconPrefixCls
  });
  var useTheme = createUseTheme({
    StyleEngineContext: StyleEngineContext
  });
  var createStyles = createStylesFactory({
    hashPriority: internalOptions.hashPriority,
    useTheme: useTheme,
    EmotionContext: EmotionContext
  });
  var createGlobalStyle = createGlobalStyleFactory(useTheme);
  var createStylish = createStylishFactory(createStyles);
  var ThemeProvider = createThemeProvider({
    styledConfig: internalOptions.styled,
    StyleEngineContext: StyleEngineContext,
    useTheme: useTheme
  });
  ThemeProvider.displayName = 'AntdStyleThemeProvider';

  // ******** 上面这些都和主题相关，如果做了任何改动，都需要排查一遍 ************ //
  var _createCSS = createCSS(emotion.cache, {
      hashPriority: internalOptions.hashPriority
    }),
    cx = _createCSS.cx;
  var injectGlobal = emotion.injectGlobal,
    keyframes = emotion.keyframes;
  return {
    // ******************** //
    // **** 样式生成相关 **** //
    // ******************** //
    createStyles: createStyles,
    createGlobalStyle: createGlobalStyle,
    createStylish: createStylish,
    // ******************** //
    // **** 基础样式方法 **** //
    // ******************** //
    css: serializeCSS,
    cx: cx,
    keyframes: keyframes,
    injectGlobal: injectGlobal,
    //******************** //
    //****  样式表管理  **** //
    //******************** //
    styleManager: emotion,
    // ******************** //
    // ***** 主题相关 ***** //
    // ******************** //
    useTheme: useTheme,
    StyleProvider: StyleProvider,
    ThemeProvider: ThemeProvider
  };
};