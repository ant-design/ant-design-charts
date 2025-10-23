"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  isNeedOpenHash: true,
  ConfigConsumer: true,
  ProConfigProvider: true,
  useIntl: true,
  ProProvider: true
};
exports.isNeedOpenHash = exports.default = exports.ProProvider = exports.ProConfigProvider = exports.ConfigConsumer = void 0;
exports.useIntl = useIntl;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _cssinjs = require("@ant-design/cssinjs");
var _antd = require("antd");
var _zh_CN = _interopRequireDefault(require("antd/lib/locale/zh_CN"));
var _react = _interopRequireWildcard(require("react"));
var _swr = require("swr");
var _intl = require("./intl");
Object.keys(_intl).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _intl[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _intl[key];
    }
  });
});
var _dayjs = _interopRequireDefault(require("dayjs"));
var _layoutToken = require("./typing/layoutToken");
var _useStyle = require("./useStyle");
Object.keys(_useStyle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useStyle[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useStyle[key];
    }
  });
});
var _token = require("./useStyle/token");
var _merge = require("./utils/merge");
require("dayjs/locale/zh-cn");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["locale", "getPrefixCls"],
  _excluded2 = ["locale", "theme"];
var omitUndefined = function omitUndefined(obj) {
  var newObj = {};
  Object.keys(obj || {}).forEach(function (key) {
    if (obj[key] !== undefined) {
      newObj[key] = obj[key];
    }
  });
  if (Object.keys(newObj).length < 1) {
    return undefined;
  }
  return newObj;
};

/**
 * 用于判断当前是否需要开启哈希（Hash）模式。
 * 首先也会判断当前是否处于测试环境中（通过 process.env.NODE_ENV === 'TEST' 判断），
 * 如果是，则返回 false。否则，直接返回 true 表示需要打开。
 * @returns
 */
var isNeedOpenHash = exports.isNeedOpenHash = function isNeedOpenHash() {
  var _process$env$NODE_ENV, _process$env$NODE_ENV2;
  if (typeof process !== 'undefined' && (((_process$env$NODE_ENV = process.env.NODE_ENV) === null || _process$env$NODE_ENV === void 0 ? void 0 : _process$env$NODE_ENV.toUpperCase()) === 'TEST' || ((_process$env$NODE_ENV2 = process.env.NODE_ENV) === null || _process$env$NODE_ENV2 === void 0 ? void 0 : _process$env$NODE_ENV2.toUpperCase()) === 'DEV')) {
    return false;
  }
  return true;
};

/**
 * 用于配置 ValueEnum 的通用配置
 */

/**
 * 支持 Map 和 Object
 *
 * @name ValueEnum 的类型
 */

/**
 * 支持 Map 和 Object
 */

/**
 * BaseProFieldFC 的类型设置
 */

/** Render 第二个参数，里面包含了一些常用的参数 */

/**
 * 自带的token 配置
 */

/* Creating a context object with the default values. */
var ProConfigContext = /*#__PURE__*/_react.default.createContext({
  intl: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _intl.zhCNIntl), {}, {
    locale: 'default'
  }),
  valueTypeMap: {},
  theme: _token.emptyTheme,
  hashed: true,
  dark: false,
  token: _token.defaultToken
});
var ConfigConsumer = exports.ConfigConsumer = ProConfigContext.Consumer;

/**
 * 组件解除挂载后清空一下 cache
 * @date 2022-11-28
 * @returns null
 */
var CacheClean = function CacheClean() {
  var _useSWRConfig = (0, _swr.useSWRConfig)(),
    cache = _useSWRConfig.cache;
  (0, _react.useEffect)(function () {
    return function () {
      // is a map
      // @ts-ignore
      cache.clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
};

/**
 * 用于配置 Pro 的组件,分装之后会简单一些
 * @param props
 * @returns
 */
var ConfigProviderContainer = function ConfigProviderContainer(props) {
  var _proTheme$useToken;
  var children = props.children,
    dark = props.dark,
    valueTypeMap = props.valueTypeMap,
    _props$autoClearCache = props.autoClearCache,
    autoClearCache = _props$autoClearCache === void 0 ? false : _props$autoClearCache,
    propsToken = props.token,
    prefixCls = props.prefixCls,
    intl = props.intl;
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    locale = _useContext.locale,
    getPrefixCls = _useContext.getPrefixCls,
    restConfig = (0, _objectWithoutProperties2.default)(_useContext, _excluded);
  var tokenContext = (_proTheme$useToken = _useStyle.proTheme.useToken) === null || _proTheme$useToken === void 0 ? void 0 : _proTheme$useToken.call(_useStyle.proTheme);
  var proProvide = (0, _react.useContext)(ProConfigContext);

  /**
   * pro 的 类
   * @type {string}
   * @example .ant-pro
   */

  var proComponentsCls = prefixCls ? ".".concat(prefixCls) : ".".concat(getPrefixCls(), "-pro");
  var antCls = '.' + getPrefixCls();
  var salt = "".concat(proComponentsCls);
  /**
   * 合并一下token，不然导致嵌套 token 失效
   */
  var proLayoutTokenMerge = (0, _react.useMemo)(function () {
    return (0, _layoutToken.getLayoutDesignToken)(propsToken || {}, tokenContext.token || _token.defaultToken);
  }, [propsToken, tokenContext.token]);
  var proProvideValue = (0, _react.useMemo)(function () {
    var _proProvide$intl;
    var localeName = locale === null || locale === void 0 ? void 0 : locale.locale;
    var key = (0, _intl.findIntlKeyByAntdLocaleKey)(localeName);
    // antd 的 key 存在的时候以 antd 的为主
    var resolvedIntl = intl !== null && intl !== void 0 ? intl : localeName && ((_proProvide$intl = proProvide.intl) === null || _proProvide$intl === void 0 ? void 0 : _proProvide$intl.locale) === 'default' ? _intl.intlMap[key] : proProvide.intl || _intl.intlMap[key];
    return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, proProvide), {}, {
      dark: dark !== null && dark !== void 0 ? dark : proProvide.dark,
      token: (0, _merge.merge)(proProvide.token, tokenContext.token, {
        proComponentsCls: proComponentsCls,
        antCls: antCls,
        themeId: tokenContext.theme.id,
        layout: proLayoutTokenMerge
      }),
      intl: resolvedIntl || _intl.zhCNIntl
    });
  }, [locale === null || locale === void 0 ? void 0 : locale.locale, proProvide, dark, tokenContext.token, tokenContext.theme.id, proComponentsCls, antCls, proLayoutTokenMerge, intl]);
  var finalToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, proProvideValue.token || {}), {}, {
    proComponentsCls: proComponentsCls
  });
  var _useCacheToken = (0, _cssinjs.useCacheToken)(tokenContext.theme, [tokenContext.token, finalToken !== null && finalToken !== void 0 ? finalToken : {}], {
      salt: salt,
      override: finalToken
    }),
    _useCacheToken2 = (0, _slicedToArray2.default)(_useCacheToken, 2),
    token = _useCacheToken2[0],
    nativeHashId = _useCacheToken2[1];
  var hashed = (0, _react.useMemo)(function () {
    if (props.hashed === false) {
      return false;
    }
    if (proProvide.hashed === false) return false;
    return true;
  }, [proProvide.hashed, props.hashed]);
  var hashId = (0, _react.useMemo)(function () {
    if (props.hashed === false) {
      return '';
    }
    if (proProvide.hashed === false) return '';
    //Fix issue with hashId code
    if (isNeedOpenHash() === false) {
      return '';
    } else if (tokenContext.hashId) {
      return tokenContext.hashId;
    } else {
      // 生产环境或其他环境
      return nativeHashId;
    }
  }, [nativeHashId, proProvide.hashed, props.hashed]);
  (0, _react.useEffect)(function () {
    _dayjs.default.locale((locale === null || locale === void 0 ? void 0 : locale.locale) || 'zh-cn');
  }, [locale === null || locale === void 0 ? void 0 : locale.locale]);
  var themeConfig = (0, _react.useMemo)(function () {
    return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, restConfig.theme), {}, {
      hashId: hashId,
      hashed: hashed && isNeedOpenHash()
    });
  }, [restConfig.theme, hashId, hashed, isNeedOpenHash()]);
  var proConfigContextValue = (0, _react.useMemo)(function () {
    return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, proProvideValue), {}, {
      valueTypeMap: valueTypeMap || (proProvideValue === null || proProvideValue === void 0 ? void 0 : proProvideValue.valueTypeMap),
      token: token,
      theme: tokenContext.theme,
      hashed: hashed,
      hashId: hashId
    });
  }, [proProvideValue, valueTypeMap, token, tokenContext.theme, hashed, hashId]);
  var configProviderDom = (0, _react.useMemo)(function () {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.ConfigProvider, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, restConfig), {}, {
      theme: themeConfig,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ProConfigContext.Provider, {
        value: proConfigContextValue,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [autoClearCache && /*#__PURE__*/(0, _jsxRuntime.jsx)(CacheClean, {}), children]
        })
      })
    }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restConfig, themeConfig, proConfigContextValue, autoClearCache, children]);
  if (!autoClearCache) return configProviderDom;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_swr.SWRConfig, {
    value: {
      provider: function provider() {
        return new Map();
      }
    },
    children: configProviderDom
  });
};

/**
 * 用于配置 Pro 的一些全局性的东西
 * @param props
 * @returns
 */
var ProConfigProvider = exports.ProConfigProvider = function ProConfigProvider(props) {
  var needDeps = props.needDeps,
    dark = props.dark,
    token = props.token;
  var proProvide = (0, _react.useContext)(ProConfigContext);
  var _useContext2 = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    locale = _useContext2.locale,
    theme = _useContext2.theme,
    rest = (0, _objectWithoutProperties2.default)(_useContext2, _excluded2);

  // 是不是不需要渲染 provide
  var isNullProvide = needDeps && proProvide.hashId !== undefined && Object.keys(props).sort().join('-') === 'children-needDeps';
  if (isNullProvide) return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: props.children
  });
  var mergeAlgorithm = function mergeAlgorithm() {
    var isDark = dark !== null && dark !== void 0 ? dark : proProvide.dark;
    if (isDark && !Array.isArray(theme === null || theme === void 0 ? void 0 : theme.algorithm)) {
      return [theme === null || theme === void 0 ? void 0 : theme.algorithm, _useStyle.proTheme.darkAlgorithm].filter(Boolean);
    }
    if (isDark && Array.isArray(theme === null || theme === void 0 ? void 0 : theme.algorithm)) {
      return [].concat((0, _toConsumableArray2.default)((theme === null || theme === void 0 ? void 0 : theme.algorithm) || []), [_useStyle.proTheme.darkAlgorithm]).filter(Boolean);
    }
    return theme === null || theme === void 0 ? void 0 : theme.algorithm;
  };
  // 自动注入 antd 的配置
  var configProvider = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, rest), {}, {
    locale: locale || _zh_CN.default,
    theme: omitUndefined((0, _objectSpread2.default)((0, _objectSpread2.default)({}, theme), {}, {
      algorithm: mergeAlgorithm()
    }))
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.ConfigProvider, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, configProvider), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ConfigProviderContainer, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
      token: token
    }))
  }));
};

/**
 * It returns the intl object from the context if it exists, otherwise it returns the intl object for
 * 获取国际化的方法
 * @param locale
 * @param localeMap
 * the current locale
 * @returns The return value of the function is the intl object.
 */
function useIntl() {
  var _useContext3 = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    locale = _useContext3.locale;
  var _useContext4 = (0, _react.useContext)(ProConfigContext),
    intl = _useContext4.intl;
  if (intl && intl.locale !== 'default') {
    return intl || _intl.zhCNIntl;
  }
  if (locale !== null && locale !== void 0 && locale.locale) {
    return _intl.intlMap[(0, _intl.findIntlKeyByAntdLocaleKey)(locale.locale)] || _intl.zhCNIntl;
  }
  return _intl.zhCNIntl;
}
ProConfigContext.displayName = 'ProProvider';
var ProProvider = exports.ProProvider = ProConfigContext;
var _default = exports.default = ProConfigContext;