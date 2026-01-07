import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["locale", "getPrefixCls"],
  _excluded2 = ["locale", "theme"];
import { useCacheToken } from '@ant-design/cssinjs';
import { ConfigProvider as AntdConfigProvider } from 'antd';
import zh_CN from "antd/es/locale/zh_CN";
import React, { useContext, useEffect, useMemo } from 'react';
import { SWRConfig, useSWRConfig } from 'swr';
import { findIntlKeyByAntdLocaleKey, intlMap, zhCNIntl } from "./intl";
import dayjs from 'dayjs';
import { getLayoutDesignToken } from "./typing/layoutToken";
import { proTheme } from "./useStyle";
import { defaultToken, emptyTheme } from "./useStyle/token";
import { merge } from "./utils/merge";
import 'dayjs/locale/zh-cn';
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export * from "./intl";
export * from "./useStyle";
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
export var isNeedOpenHash = function isNeedOpenHash() {
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
var ProConfigContext = /*#__PURE__*/React.createContext({
  intl: _objectSpread(_objectSpread({}, zhCNIntl), {}, {
    locale: 'default'
  }),
  valueTypeMap: {},
  theme: emptyTheme,
  hashed: true,
  dark: false,
  token: defaultToken
});
var ConfigConsumer = ProConfigContext.Consumer;

/**
 * 组件解除挂载后清空一下 cache
 * @date 2022-11-28
 * @returns null
 */
export { ConfigConsumer };
var CacheClean = function CacheClean() {
  var _useSWRConfig = useSWRConfig(),
    cache = _useSWRConfig.cache;
  useEffect(function () {
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
  var _useContext = useContext(AntdConfigProvider.ConfigContext),
    locale = _useContext.locale,
    getPrefixCls = _useContext.getPrefixCls,
    restConfig = _objectWithoutProperties(_useContext, _excluded);
  var tokenContext = (_proTheme$useToken = proTheme.useToken) === null || _proTheme$useToken === void 0 ? void 0 : _proTheme$useToken.call(proTheme);
  var proProvide = useContext(ProConfigContext);

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
  var proLayoutTokenMerge = useMemo(function () {
    return getLayoutDesignToken(propsToken || {}, tokenContext.token || defaultToken);
  }, [propsToken, tokenContext.token]);
  var proProvideValue = useMemo(function () {
    var _proProvide$intl;
    var localeName = locale === null || locale === void 0 ? void 0 : locale.locale;
    var key = findIntlKeyByAntdLocaleKey(localeName);
    // antd 的 key 存在的时候以 antd 的为主
    var resolvedIntl = intl !== null && intl !== void 0 ? intl : localeName && ((_proProvide$intl = proProvide.intl) === null || _proProvide$intl === void 0 ? void 0 : _proProvide$intl.locale) === 'default' ? intlMap[key] : proProvide.intl || intlMap[key];
    return _objectSpread(_objectSpread({}, proProvide), {}, {
      dark: dark !== null && dark !== void 0 ? dark : proProvide.dark,
      token: merge(proProvide.token, tokenContext.token, {
        proComponentsCls: proComponentsCls,
        antCls: antCls,
        themeId: tokenContext.theme.id,
        layout: proLayoutTokenMerge
      }),
      intl: resolvedIntl || zhCNIntl
    });
  }, [locale === null || locale === void 0 ? void 0 : locale.locale, proProvide, dark, tokenContext.token, tokenContext.theme.id, proComponentsCls, antCls, proLayoutTokenMerge, intl]);
  var finalToken = _objectSpread(_objectSpread({}, proProvideValue.token || {}), {}, {
    proComponentsCls: proComponentsCls
  });
  var _useCacheToken = useCacheToken(tokenContext.theme, [tokenContext.token, finalToken !== null && finalToken !== void 0 ? finalToken : {}], {
      salt: salt,
      override: finalToken
    }),
    _useCacheToken2 = _slicedToArray(_useCacheToken, 2),
    token = _useCacheToken2[0],
    nativeHashId = _useCacheToken2[1];
  var hashed = useMemo(function () {
    if (props.hashed === false) {
      return false;
    }
    if (proProvide.hashed === false) return false;
    return true;
  }, [proProvide.hashed, props.hashed]);
  var hashId = useMemo(function () {
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
  useEffect(function () {
    dayjs.locale((locale === null || locale === void 0 ? void 0 : locale.locale) || 'zh-cn');
  }, [locale === null || locale === void 0 ? void 0 : locale.locale]);
  var themeConfig = useMemo(function () {
    return _objectSpread(_objectSpread({}, restConfig.theme), {}, {
      hashId: hashId,
      hashed: hashed && isNeedOpenHash()
    });
  }, [restConfig.theme, hashId, hashed, isNeedOpenHash()]);
  var proConfigContextValue = useMemo(function () {
    return _objectSpread(_objectSpread({}, proProvideValue), {}, {
      valueTypeMap: valueTypeMap || (proProvideValue === null || proProvideValue === void 0 ? void 0 : proProvideValue.valueTypeMap),
      token: token,
      theme: tokenContext.theme,
      hashed: hashed,
      hashId: hashId
    });
  }, [proProvideValue, valueTypeMap, token, tokenContext.theme, hashed, hashId]);
  var configProviderDom = useMemo(function () {
    return /*#__PURE__*/_jsx(AntdConfigProvider, _objectSpread(_objectSpread({}, restConfig), {}, {
      theme: themeConfig,
      children: /*#__PURE__*/_jsx(ProConfigContext.Provider, {
        value: proConfigContextValue,
        children: /*#__PURE__*/_jsxs(_Fragment, {
          children: [autoClearCache && /*#__PURE__*/_jsx(CacheClean, {}), children]
        })
      })
    }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restConfig, themeConfig, proConfigContextValue, autoClearCache, children]);
  if (!autoClearCache) return configProviderDom;
  return /*#__PURE__*/_jsx(SWRConfig, {
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
export var ProConfigProvider = function ProConfigProvider(props) {
  var needDeps = props.needDeps,
    dark = props.dark,
    token = props.token;
  var proProvide = useContext(ProConfigContext);
  var _useContext2 = useContext(AntdConfigProvider.ConfigContext),
    locale = _useContext2.locale,
    theme = _useContext2.theme,
    rest = _objectWithoutProperties(_useContext2, _excluded2);

  // 是不是不需要渲染 provide
  var isNullProvide = needDeps && proProvide.hashId !== undefined && Object.keys(props).sort().join('-') === 'children-needDeps';
  if (isNullProvide) return /*#__PURE__*/_jsx(_Fragment, {
    children: props.children
  });
  var mergeAlgorithm = function mergeAlgorithm() {
    var isDark = dark !== null && dark !== void 0 ? dark : proProvide.dark;
    if (isDark && !Array.isArray(theme === null || theme === void 0 ? void 0 : theme.algorithm)) {
      return [theme === null || theme === void 0 ? void 0 : theme.algorithm, proTheme.darkAlgorithm].filter(Boolean);
    }
    if (isDark && Array.isArray(theme === null || theme === void 0 ? void 0 : theme.algorithm)) {
      return [].concat(_toConsumableArray((theme === null || theme === void 0 ? void 0 : theme.algorithm) || []), [proTheme.darkAlgorithm]).filter(Boolean);
    }
    return theme === null || theme === void 0 ? void 0 : theme.algorithm;
  };
  // 自动注入 antd 的配置
  var configProvider = _objectSpread(_objectSpread({}, rest), {}, {
    locale: locale || zh_CN,
    theme: omitUndefined(_objectSpread(_objectSpread({}, theme), {}, {
      algorithm: mergeAlgorithm()
    }))
  });
  return /*#__PURE__*/_jsx(AntdConfigProvider, _objectSpread(_objectSpread({}, configProvider), {}, {
    children: /*#__PURE__*/_jsx(ConfigProviderContainer, _objectSpread(_objectSpread({}, props), {}, {
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
export function useIntl() {
  var _useContext3 = useContext(AntdConfigProvider.ConfigContext),
    locale = _useContext3.locale;
  var _useContext4 = useContext(ProConfigContext),
    intl = _useContext4.intl;
  if (intl && intl.locale !== 'default') {
    return intl || zhCNIntl;
  }
  if (locale !== null && locale !== void 0 && locale.locale) {
    return intlMap[findIntlKeyByAntdLocaleKey(locale.locale)] || zhCNIntl;
  }
  return zhCNIntl;
}
ProConfigContext.displayName = 'ProProvider';
export var ProProvider = ProConfigContext;
export default ProConfigContext;