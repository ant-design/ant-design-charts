"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLanguage = exports.gLocaleObject = void 0;
var _proUtils = require("@ant-design/pro-utils");
var _enUS = _interopRequireDefault(require("./en-US"));
var _itIT = _interopRequireDefault(require("./it-IT"));
var _koKR = _interopRequireDefault(require("./ko-KR"));
var _zhCN = _interopRequireDefault(require("./zh-CN"));
var _zhTW = _interopRequireDefault(require("./zh-TW"));
var locales = {
  'zh-CN': _zhCN.default,
  'zh-TW': _zhTW.default,
  'en-US': _enUS.default,
  'it-IT': _itIT.default,
  'ko-KR': _koKR.default
};
var getLanguage = exports.getLanguage = function getLanguage() {
  // support ssr
  if (!(0, _proUtils.isBrowser)()) return 'zh-CN';
  var lang = window.localStorage.getItem('umi_locale');
  return lang || window.g_locale || navigator.language;
};
var gLocaleObject = exports.gLocaleObject = function gLocaleObject() {
  var gLocale = getLanguage();
  return locales[gLocale] || locales['zh-CN'];
};