"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAlpha = exports.resetComponent = exports.proTheme = exports.operationUnit = exports.lighten = void 0;
exports.useStyle = useStyle;
exports.useToken = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _cssinjs = require("@ant-design/cssinjs");
var _tinycolor = require("@ctrl/tinycolor");
var _antd = require("antd");
var _react = require("react");
var _index = require("../index");
var batToken = _interopRequireWildcard(require("./token"));
/**
 * 把一个颜色设置一下透明度
 * @example (#fff, 0.5) => rgba(255, 255, 255, 0.5)
 * @param baseColor {string}
 * @param alpha {0-1}
 * @returns rgba {string}
 */
var setAlpha = exports.setAlpha = function setAlpha(baseColor, alpha) {
  return new _tinycolor.TinyColor(baseColor).setAlpha(alpha).toRgbString();
};

/**
 * 把一个颜色修改一些明度
 * @example (#000, 50) => #808080
 * @param baseColor {string}
 * @param brightness {0-100}
 * @returns hexColor {string}
 */
var lighten = exports.lighten = function lighten(baseColor, brightness) {
  var instance = new _tinycolor.TinyColor(baseColor);
  return instance.lighten(brightness).toHexString();
};
var genTheme = function genTheme() {
  if (typeof _antd.theme === 'undefined' || !_antd.theme) return batToken;
  return _antd.theme;
};
var proTheme = exports.proTheme = genTheme();
var useToken = exports.useToken = proTheme.useToken;
var resetComponent = exports.resetComponent = function resetComponent(token) {
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
var operationUnit = exports.operationUnit = function operationUnit(token) {
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
function useStyle(componentName, styleFn) {
  var _token$proComponentsC;
  var _useContext = (0, _react.useContext)(_index.ProProvider),
    _useContext$token = _useContext.token,
    token = _useContext$token === void 0 ? {} : _useContext$token;
  var _useContext2 = (0, _react.useContext)(_index.ProProvider),
    hashed = _useContext2.hashed;
  var _useToken = useToken(),
    antdToken = _useToken.token,
    hashId = _useToken.hashId;
  var _useContext3 = (0, _react.useContext)(_index.ProProvider),
    provideTheme = _useContext3.theme;
  var _useContext4 = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext4.getPrefixCls,
    csp = _useContext4.csp;

  // 如果不在 ProProvider 里面，就用 antd 的
  if (!token.layout) {
    token = (0, _objectSpread2.default)({}, antdToken);
  }
  token.proComponentsCls = (_token$proComponentsC = token.proComponentsCls) !== null && _token$proComponentsC !== void 0 ? _token$proComponentsC : ".".concat(getPrefixCls('pro'));
  token.antCls = ".".concat(getPrefixCls());
  return {
    wrapSSR: (0, _cssinjs.useStyleRegister)({
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