"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertUnicodeExtensionAndCanonicalize = InsertUnicodeExtensionAndCanonicalize;
var CanonicalizeUnicodeLocaleId_1 = require("./CanonicalizeUnicodeLocaleId");
var utils_1 = require("./utils");
function InsertUnicodeExtensionAndCanonicalize(locale, attributes, keywords) {
    (0, utils_1.invariant)(locale.indexOf('-u-') === -1, 'Expected locale to not have a Unicode locale extension');
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
        return (0, CanonicalizeUnicodeLocaleId_1.CanonicalizeUnicodeLocaleId)(locale);
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
    return (0, CanonicalizeUnicodeLocaleId_1.CanonicalizeUnicodeLocaleId)(newLocale);
}
