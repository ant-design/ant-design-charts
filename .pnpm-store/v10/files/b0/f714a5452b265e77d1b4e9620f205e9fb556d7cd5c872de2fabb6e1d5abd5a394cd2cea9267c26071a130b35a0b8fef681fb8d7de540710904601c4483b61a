import { get } from 'rc-util';
import arEG from "./locale/ar_EG";
import caES from "./locale/ca_ES";
import csCZ from "./locale/cs_CZ";
import deDE from "./locale/de_DE";
import enGB from "./locale/en_GB";
import enUS from "./locale/en_US";
import esES from "./locale/es_ES";
import faIR from "./locale/fa_IR";
import frFR from "./locale/fr_FR";
import heIL from "./locale/he_IL";
import hrHR from "./locale/hr_HR";
import idID from "./locale/id_ID";
import itIT from "./locale/it_IT";
import jaJP from "./locale/ja_JP";
import koKR from "./locale/ko_KR";
import mnMN from "./locale/mn_MN";
import msMY from "./locale/ms_MY";
import nlNL from "./locale/nl_NL";
import plPL from "./locale/pl_PL";
import ptBR from "./locale/pt_BR";
import roRO from "./locale/ro_RO";
import ruRU from "./locale/ru_RU";
import skSK from "./locale/sk_SK";
import srRS from "./locale/sr_RS";
import svSE from "./locale/sv_SE";
import thTH from "./locale/th_TH";
import trTR from "./locale/tr_TR";
import ukUA from "./locale/uk_UA";
import uzUZ from "./locale/uz_UZ";
import viVN from "./locale/vi_VN";
import zhCN from "./locale/zh_CN";
import zhHK from "./locale/zh_HK";
import zhTW from "./locale/zh_TW";
/**
 * 创建一个国际化的操作函数
 *
 * @param locale
 * @param localeMap
 */
export var createIntl = function createIntl(locale, localeMap) {
  return {
    getMessage: function getMessage(id, defaultMessage) {
      var msg = get(localeMap, id.replace(/\[(\d+)\]/g, '.$1').split('.')) || '';
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
var mnMNIntl = createIntl('mn_MN', mnMN);
var arEGIntl = createIntl('ar_EG', arEG);
var zhCNIntl = createIntl('zh_CN', zhCN);
var enUSIntl = createIntl('en_US', enUS);
var enGBIntl = createIntl('en_GB', enGB);
var viVNIntl = createIntl('vi_VN', viVN);
var itITIntl = createIntl('it_IT', itIT);
var jaJPIntl = createIntl('ja_JP', jaJP);
var esESIntl = createIntl('es_ES', esES);
var caESIntl = createIntl('ca_ES', caES);
var ruRUIntl = createIntl('ru_RU', ruRU);
var srRSIntl = createIntl('sr_RS', srRS);
var msMYIntl = createIntl('ms_MY', msMY);
var zhTWIntl = createIntl('zh_TW', zhTW);
var zhHKIntl = createIntl('zh_HK', zhHK);
var frFRIntl = createIntl('fr_FR', frFR);
var ptBRIntl = createIntl('pt_BR', ptBR);
var koKRIntl = createIntl('ko_KR', koKR);
var idIDIntl = createIntl('id_ID', idID);
var deDEIntl = createIntl('de_DE', deDE);
var faIRIntl = createIntl('fa_IR', faIR);
var trTRIntl = createIntl('tr_TR', trTR);
var plPLIntl = createIntl('pl_PL', plPL);
var hrHRIntl = createIntl('hr_', hrHR);
var thTHIntl = createIntl('th_TH', thTH);
var csCZIntl = createIntl('cs_cz', csCZ);
var skSKIntl = createIntl('sk_SK', skSK);
var heILIntl = createIntl('he_IL', heIL);
var ukUAIntl = createIntl('uk_UA', ukUA);
var uzUZIntl = createIntl('uz_UZ', uzUZ);
var nlNLIntl = createIntl('nl_NL', nlNL);
var roROIntl = createIntl('ro_RO', roRO);
var svSEIntl = createIntl('sv_SE', svSE);
var intlMap = {
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
var intlMapKeys = Object.keys(intlMap);

/**
 * 根据 antd 的 key 来找到的 locale 插件的 key
 *
 * @param localeKey
 */
export var findIntlKeyByAntdLocaleKey = function findIntlKeyByAntdLocaleKey(localeKey) {
  var localeName = (localeKey || 'zh-CN').toLocaleLowerCase();
  return intlMapKeys.find(function (intlKey) {
    var LowerCaseKey = intlKey.toLocaleLowerCase();
    return LowerCaseKey.includes(localeName);
  });
};
export { arEGIntl, caESIntl, csCZIntl, deDEIntl, enGBIntl, enUSIntl, esESIntl, faIRIntl, frFRIntl, heILIntl, hrHRIntl, idIDIntl, intlMap, intlMapKeys, itITIntl, jaJPIntl, koKRIntl, mnMNIntl, msMYIntl, nlNLIntl, plPLIntl, ptBRIntl, roROIntl, ruRUIntl, skSKIntl, srRSIntl, svSEIntl, thTHIntl, trTRIntl, ukUAIntl, uzUZIntl, viVNIntl, zhCNIntl, zhTWIntl };