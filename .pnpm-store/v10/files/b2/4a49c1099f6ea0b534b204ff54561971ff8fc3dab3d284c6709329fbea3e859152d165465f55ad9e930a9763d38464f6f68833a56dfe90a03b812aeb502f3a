import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { useStyleRegister } from '@ant-design/cssinjs';
import { TinyColor } from '@ctrl/tinycolor';
import { ConfigProvider as AntdConfigProvider, theme } from 'antd';
import { useContext } from 'react';
import { ProProvider } from "../index";
import * as batToken from "./token";

/**
 * 把一个颜色设置一下透明度
 * @example (#fff, 0.5) => rgba(255, 255, 255, 0.5)
 * @param baseColor {string}
 * @param alpha {0-1}
 * @returns rgba {string}
 */
export var setAlpha = function setAlpha(baseColor, alpha) {
  return new TinyColor(baseColor).setAlpha(alpha).toRgbString();
};

/**
 * 把一个颜色修改一些明度
 * @example (#000, 50) => #808080
 * @param baseColor {string}
 * @param brightness {0-100}
 * @returns hexColor {string}
 */
export var lighten = function lighten(baseColor, brightness) {
  var instance = new TinyColor(baseColor);
  return instance.lighten(brightness).toHexString();
};
var genTheme = function genTheme() {
  if (typeof theme === 'undefined' || !theme) return batToken;
  return theme;
};
export var proTheme = genTheme();
export var useToken = proTheme.useToken;
export var resetComponent = function resetComponent(token) {
  return {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    color: token.colorText,
    fontSize: token.fontSize,
    lineHeight: token.lineHeight,
    listStyle: 'none'
  };
};
export var operationUnit = function operationUnit(token) {
  return {
    // FIXME: This use link but is a operation unit. Seems should be a colorPrimary.
    // And Typography use this to generate link style which should not do this.
    color: token.colorLink,
    outline: 'none',
    cursor: 'pointer',
    transition: "color ".concat(token.motionDurationSlow),
    '&:focus, &:hover': {
      color: token.colorLinkHover
    },
    '&:active': {
      color: token.colorLinkActive
    }
  };
};

/**
 * 封装了一下 antd 的 useStyle，支持了一下antd@4
 * @param componentName {string} 组件的名字
 * @param styleFn {GenerateStyle} 生成样式的函数
 * @returns UseStyleResult
 */
export function useStyle(componentName, styleFn) {
  var _token$proComponentsC;
  var _useContext = useContext(ProProvider),
    _useContext$token = _useContext.token,
    token = _useContext$token === void 0 ? {} : _useContext$token;
  var _useContext2 = useContext(ProProvider),
    hashed = _useContext2.hashed;
  var _useToken = useToken(),
    antdToken = _useToken.token,
    hashId = _useToken.hashId;
  var _useContext3 = useContext(ProProvider),
    provideTheme = _useContext3.theme;
  var _useContext4 = useContext(AntdConfigProvider.ConfigContext),
    getPrefixCls = _useContext4.getPrefixCls,
    csp = _useContext4.csp;

  // 如果不在 ProProvider 里面，就用 antd 的
  if (!token.layout) {
    token = _objectSpread({}, antdToken);
  }
  token.proComponentsCls = (_token$proComponentsC = token.proComponentsCls) !== null && _token$proComponentsC !== void 0 ? _token$proComponentsC : ".".concat(getPrefixCls('pro'));
  token.antCls = ".".concat(getPrefixCls());
  return {
    wrapSSR: useStyleRegister({
      theme: provideTheme,
      token: token,
      path: [componentName],
      nonce: csp === null || csp === void 0 ? void 0 : csp.nonce,
      layer: {
        name: 'antd-pro'
      }
    }, function () {
      return styleFn(token);
    }),
    hashId: hashed ? hashId : ''
  };
}