import { isBrowser } from '@ant-design/pro-utils';
import enUSLocal from "./en-US";
import itITLocal from "./it-IT";
import koKRLocal from "./ko-KR";
import zhLocal from "./zh-CN";
import zhTWLocal from "./zh-TW";
var locales = {
  'zh-CN': zhLocal,
  'zh-TW': zhTWLocal,
  'en-US': enUSLocal,
  'it-IT': itITLocal,
  'ko-KR': koKRLocal
};
export var getLanguage = function getLanguage() {
  // support ssr
  if (!isBrowser()) return 'zh-CN';
  var lang = window.localStorage.getItem('umi_locale');
  return lang || window.g_locale || navigator.language;
};
export var gLocaleObject = function gLocaleObject() {
  var gLocale = getLanguage();
  return locales[gLocale] || locales['zh-CN'];
};