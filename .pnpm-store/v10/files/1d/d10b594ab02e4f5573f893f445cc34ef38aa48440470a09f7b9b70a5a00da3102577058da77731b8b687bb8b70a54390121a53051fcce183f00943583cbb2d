import { CanonicalizeUnicodeLocaleId } from './CanonicalizeUnicodeLocaleId';
import { invariant } from './utils';
export function InsertUnicodeExtensionAndCanonicalize(locale, attributes, keywords) {
    invariant(locale.indexOf('-u-') === -1, 'Expected locale to not have a Unicode locale extension');
    var extension = '-u';
    for (var _i = 0, attributes_1 = attributes; _i < attributes_1.length; _i++) {
        var attr = attributes_1[_i];
        extension += "-".concat(attr);
    }
    for (var _a = 0, keywords_1 = keywords; _a < keywords_1.length; _a++) {
        var kw = keywords_1[_a];
        var key = kw.key, value = kw.value;
        extension += "-".concat(key);
        if (value !== '') {
            extension += "-".concat(value);
        }
    }
    if (extension === '-u') {
        return CanonicalizeUnicodeLocaleId(locale);
    }
    var privateIndex = locale.indexOf('-x-');
    var newLocale;
    if (privateIndex === -1) {
        newLocale = locale + extension;
    }
    else {
        var preExtension = locale.slice(0, privateIndex);
        var postExtension = locale.slice(privateIndex);
        newLocale = preExtension + extension + postExtension;
    }
    return CanonicalizeUnicodeLocaleId(newLocale);
}
