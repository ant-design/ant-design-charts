"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zhTWIntl = exports.zhCNIntl = exports.viVNIntl = exports.uzUZIntl = exports.ukUAIntl = exports.trTRIntl = exports.thTHIntl = exports.svSEIntl = exports.srRSIntl = exports.skSKIntl = exports.ruRUIntl = exports.roROIntl = exports.ptBRIntl = exports.plPLIntl = exports.nlNLIntl = exports.msMYIntl = exports.mnMNIntl = exports.koKRIntl = exports.jaJPIntl = exports.itITIntl = exports.intlMapKeys = exports.intlMap = exports.idIDIntl = exports.hrHRIntl = exports.heILIntl = exports.frFRIntl = exports.findIntlKeyByAntdLocaleKey = exports.faIRIntl = exports.esESIntl = exports.enUSIntl = exports.enGBIntl = exports.deDEIntl = exports.csCZIntl = exports.createIntl = exports.caESIntl = exports.arEGIntl = void 0;
var _rcUtil = require("rc-util");
var _ar_EG = _interopRequireDefault(require("./locale/ar_EG"));
var _ca_ES = _interopRequireDefault(require("./locale/ca_ES"));
var _cs_CZ = _interopRequireDefault(require("./locale/cs_CZ"));
var _de_DE = _interopRequireDefault(require("./locale/de_DE"));
var _en_GB = _interopRequireDefault(require("./locale/en_GB"));
var _en_US = _interopRequireDefault(require("./locale/en_US"));
var _es_ES = _interopRequireDefault(require("./locale/es_ES"));
var _fa_IR = _interopRequireDefault(require("./locale/fa_IR"));
var _fr_FR = _interopRequireDefault(require("./locale/fr_FR"));
var _he_IL = _interopRequireDefault(require("./locale/he_IL"));
var _hr_HR = _interopRequireDefault(require("./locale/hr_HR"));
var _id_ID = _interopRequireDefault(require("./locale/id_ID"));
var _it_IT = _interopRequireDefault(require("./locale/it_IT"));
var _ja_JP = _interopRequireDefault(require("./locale/ja_JP"));
var _ko_KR = _interopRequireDefault(require("./locale/ko_KR"));
var _mn_MN = _interopRequireDefault(require("./locale/mn_MN"));
var _ms_MY = _interopRequireDefault(require("./locale/ms_MY"));
var _nl_NL = _interopRequireDefault(require("./locale/nl_NL"));
var _pl_PL = _interopRequireDefault(require("./locale/pl_PL"));
var _pt_BR = _interopRequireDefault(require("./locale/pt_BR"));
var _ro_RO = _interopRequireDefault(require("./locale/ro_RO"));
var _ru_RU = _interopRequireDefault(require("./locale/ru_RU"));
var _sk_SK = _interopRequireDefault(require("./locale/sk_SK"));
var _sr_RS = _interopRequireDefault(require("./locale/sr_RS"));
var _sv_SE = _interopRequireDefault(require("./locale/sv_SE"));
var _th_TH = _interopRequireDefault(require("./locale/th_TH"));
var _tr_TR = _interopRequireDefault(require("./locale/tr_TR"));
var _uk_UA = _interopRequireDefault(require("./locale/uk_UA"));
var _uz_UZ = _interopRequireDefault(require("./locale/uz_UZ"));
var _vi_VN = _interopRequireDefault(require("./locale/vi_VN"));
var _zh_CN = _interopRequireDefault(require("./locale/zh_CN"));
var _zh_HK = _interopRequireDefault(require("./locale/zh_HK"));
var _zh_TW = _interopRequireDefault(require("./locale/zh_TW"));
/**
 * 创建一个国际化的操作函数
 *
 * @param locale
 * @param localeMap
 */
var createIntl = exports.createIntl = function createIntl(locale, localeMap) {
  return {
    getMessage: function getMessage(id, defaultMessage) {
      var msg = (0, _rcUtil.get)(localeMap, id.replace(/\[(\d+)\]/g, '.$1').split('.')) || '';
      if (msg) return msg;
      var localKey = locale.replace('_', '-');
      if (localKey === 'zh-CN') {
        return defaultMessage;
      }
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      var intl = intlMap['zh-CN'];
      return intl ? intl.getMessage(id, defaultMessage) : defaultMessage;
    },
    locale: locale
  };
};
var mnMNIntl = exports.mnMNIntl = createIntl('mn_MN', _mn_MN.default);
var arEGIntl = exports.arEGIntl = createIntl('ar_EG', _ar_EG.default);
var zhCNIntl = exports.zhCNIntl = createIntl('zh_CN', _zh_CN.default);
var enUSIntl = exports.enUSIntl = createIntl('en_US', _en_US.default);
var enGBIntl = exports.enGBIntl = createIntl('en_GB', _en_GB.default);
var viVNIntl = exports.viVNIntl = createIntl('vi_VN', _vi_VN.default);
var itITIntl = exports.itITIntl = createIntl('it_IT', _it_IT.default);
var jaJPIntl = exports.jaJPIntl = createIntl('ja_JP', _ja_JP.default);
var esESIntl = exports.esESIntl = createIntl('es_ES', _es_ES.default);
var caESIntl = exports.caESIntl = createIntl('ca_ES', _ca_ES.default);
var ruRUIntl = exports.ruRUIntl = createIntl('ru_RU', _ru_RU.default);
var srRSIntl = exports.srRSIntl = createIntl('sr_RS', _sr_RS.default);
var msMYIntl = exports.msMYIntl = createIntl('ms_MY', _ms_MY.default);
var zhTWIntl = exports.zhTWIntl = createIntl('zh_TW', _zh_TW.default);
var zhHKIntl = createIntl('zh_HK', _zh_HK.default);
var frFRIntl = exports.frFRIntl = createIntl('fr_FR', _fr_FR.default);
var ptBRIntl = exports.ptBRIntl = createIntl('pt_BR', _pt_BR.default);
var koKRIntl = exports.koKRIntl = createIntl('ko_KR', _ko_KR.default);
var idIDIntl = exports.idIDIntl = createIntl('id_ID', _id_ID.default);
var deDEIntl = exports.deDEIntl = createIntl('de_DE', _de_DE.default);
var faIRIntl = exports.faIRIntl = createIntl('fa_IR', _fa_IR.default);
var trTRIntl = exports.trTRIntl = createIntl('tr_TR', _tr_TR.default);
var plPLIntl = exports.plPLIntl = createIntl('pl_PL', _pl_PL.default);
var hrHRIntl = exports.hrHRIntl = createIntl('hr_', _hr_HR.default);
var thTHIntl = exports.thTHIntl = createIntl('th_TH', _th_TH.default);
var csCZIntl = exports.csCZIntl = createIntl('cs_cz', _cs_CZ.default);
var skSKIntl = exports.skSKIntl = createIntl('sk_SK', _sk_SK.default);
var heILIntl = exports.heILIntl = createIntl('he_IL', _he_IL.default);
var ukUAIntl = exports.ukUAIntl = createIntl('uk_UA', _uk_UA.default);
var uzUZIntl = exports.uzUZIntl = createIntl('uz_UZ', _uz_UZ.default);
var nlNLIntl = exports.nlNLIntl = createIntl('nl_NL', _nl_NL.default);
var roROIntl = exports.roROIntl = createIntl('ro_RO', _ro_RO.default);
var svSEIntl = exports.svSEIntl = createIntl('sv_SE', _sv_SE.default);
var intlMap = exports.intlMap = {
  'mn-MN': mnMNIntl,
  'ar-EG': arEGIntl,
  'zh-CN': zhCNIntl,
  'en-US': enUSIntl,
  'en-GB': enGBIntl,
  'vi-VN': viVNIntl,
  'it-IT': itITIntl,
  'ja-JP': jaJPIntl,
  'es-ES': esESIntl,
  'ca-ES': caESIntl,
  'ru-RU': ruRUIntl,
  'sr-RS': srRSIntl,
  'ms-MY': msMYIntl,
  'zh-TW': zhTWIntl,
  'zh-HK': zhHKIntl,
  'fr-FR': frFRIntl,
  'pt-BR': ptBRIntl,
  'ko-KR': koKRIntl,
  'id-ID': idIDIntl,
  'de-DE': deDEIntl,
  'fa-IR': faIRIntl,
  'tr-TR': trTRIntl,
  'pl-PL': plPLIntl,
  'hr-HR': hrHRIntl,
  'th-TH': thTHIntl,
  'cs-CZ': csCZIntl,
  'sk-SK': skSKIntl,
  'he-IL': heILIntl,
  'uk-UA': ukUAIntl,
  'uz-UZ': uzUZIntl,
  'nl-NL': nlNLIntl,
  'ro-RO': roROIntl,
  'sv-SE': svSEIntl
};
var intlMapKeys = exports.intlMapKeys = Object.keys(intlMap);

/**
 * 根据 antd 的 key 来找到的 locale 插件的 key
 *
 * @param localeKey
 */
var findIntlKeyByAntdLocaleKey = exports.findIntlKeyByAntdLocaleKey = function findIntlKeyByAntdLocaleKey(localeKey) {
  var localeName = (localeKey || 'zh-CN').toLocaleLowerCase();
  return intlMapKeys.find(function (intlKey) {
    var LowerCaseKey = intlKey.toLocaleLowerCase();
    return LowerCaseKey.includes(localeName);
  });
};