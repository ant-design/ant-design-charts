"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genSubStyleComponent = exports.genStyleHooks = exports.genComponentStyleHook = void 0;
var _cssinjsUtils = require("@ant-design/cssinjs-utils");
var _xProvider = require("../x-provider");
var _useToken = require("./useToken");
const {
  genStyleHooks,
  genComponentStyleHook,
  genSubStyleComponent
} = (0, _cssinjsUtils.genStyleUtils)({
  usePrefix: () => {
    const {
      getPrefixCls,
      iconPrefixCls
    } = (0, _xProvider.useXProviderContext)();
    return {
      iconPrefixCls,
      rootPrefixCls: getPrefixCls()
    };
  },
  useToken: () => {
    const [theme, realToken, hashId, token, cssVar] = (0, _useToken.useInternalToken)();
    return {
      theme,
      realToken,
      hashId,
      token,
      cssVar
    };
  },
  useCSP: () => {
    const {
      csp
    } = (0, _xProvider.useXProviderContext)();
    return csp ?? {};
  },
  layer: {
    name: 'antdx',
    dependencies: ['antd']
  }
});
exports.genSubStyleComponent = genSubStyleComponent;
exports.genComponentStyleHook = genComponentStyleHook;
exports.genStyleHooks = genStyleHooks;