import { BestFitMatcher } from './BestFitMatcher';
import { CanonicalizeUValue } from './CanonicalizeUValue';
import { InsertUnicodeExtensionAndCanonicalize } from './InsertUnicodeExtensionAndCanonicalize';
import { LookupMatcher } from './LookupMatcher';
import { UnicodeExtensionComponents } from './UnicodeExtensionComponents';
import { invariant } from './utils';
/**
 * https://tc39.es/ecma402/#sec-resolvelocale
 */
export function ResolveLocale(availableLocales, requestedLocales, options, relevantExtensionKeys, localeData, getDefaultLocale) {
    var _a;
    var matcher = options.localeMatcher;
    var r;
    if (matcher === 'lookup') {
        r = LookupMatcher(Array.from(availableLocales), requestedLocales, getDefaultLocale);
    }
    else {
        r = BestFitMatcher(Array.from(availableLocales), requestedLocales, getDefaultLocale);
    }
    if (r == null) {
        r = {
            locale: getDefaultLocale(),
            extension: '',
        };
    }
    var foundLocale = r.locale;
    var foundLocaleData = localeData[foundLocale];
    // TODO: We can't really guarantee that the locale data is available
    // invariant(
    //   foundLocaleData !== undefined,
    //   `Missing locale data for ${foundLocale}`
    // )
    var result = { locale: 'en', dataLocale: foundLocale };
    var components;
    var keywords;
    if (r.extension) {
        components = UnicodeExtensionComponents(r.extension);
        keywords = components.keywords;
    }
    else {
        keywords = [];
    }
    var supportedKeywords = [];
    var _loop_1 = function (key) {
        // TODO: Shouldn't default to empty array, see TODO above
        var keyLocaleData = (_a = foundLocaleData === null || foundLocaleData === void 0 ? void 0 : foundLocaleData[key]) !== null && _a !== void 0 ? _a : [];
        invariant(Array.isArray(keyLocaleData), "keyLocaleData for ".concat(key, " must be an array"));
        var value = keyLocaleData[0];
        invariant(value === undefined || typeof value === 'string', "value must be a string or undefined");
        var supportedKeyword = void 0;
        var entry = keywords.find(function (k) { return k.key === key; });
        if (entry) {
            var requestedValue = entry.value;
            if (requestedValue !== '') {
                if (keyLocaleData.indexOf(requestedValue) > -1) {
                    value = requestedValue;
                    supportedKeyword = {
                        key: key,
                        value: value,
                    };
                }
            }
            else if (keyLocaleData.indexOf('true') > -1) {
                value = 'true';
                supportedKeyword = {
                    key: key,
                    value: value,
                };
            }
        }
        var optionsValue = options[key];
        invariant(optionsValue == null || typeof optionsValue === 'string', "optionsValue must be a string or undefined");
        if (typeof optionsValue === 'string') {
            var ukey = key.toLowerCase();
            optionsValue = CanonicalizeUValue(ukey, optionsValue);
            if (optionsValue === '') {
                optionsValue = 'true';
            }
        }
        if (optionsValue !== value && keyLocaleData.indexOf(optionsValue) > -1) {
            value = optionsValue;
            supportedKeyword = undefined;
        }
        if (supportedKeyword) {
            supportedKeywords.push(supportedKeyword);
        }
        result[key] = value;
    };
    for (var _i = 0, relevantExtensionKeys_1 = relevantExtensionKeys; _i < relevantExtensionKeys_1.length; _i++) {
        var key = relevantExtensionKeys_1[_i];
        _loop_1(key);
    }
    var supportedAttributes = [];
    if (supportedKeywords.length > 0) {
        supportedAttributes = [];
        foundLocale = InsertUnicodeExtensionAndCanonicalize(foundLocale, supportedAttributes, supportedKeywords);
    }
    result.locale = foundLocale;
    return result;
}
