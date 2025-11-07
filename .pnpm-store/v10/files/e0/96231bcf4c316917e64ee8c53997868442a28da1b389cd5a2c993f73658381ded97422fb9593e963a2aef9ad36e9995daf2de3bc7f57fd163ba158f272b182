"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPlural = formatPlural;
var intl_messageformat_1 = require("intl-messageformat");
var error_1 = require("./error");
var utils_1 = require("./utils");
var PLURAL_FORMAT_OPTIONS = ['type'];
function formatPlural(_a, getPluralRules, value, options) {
    var locale = _a.locale, onError = _a.onError;
    if (options === void 0) { options = {}; }
    if (!Intl.PluralRules) {
        onError(new intl_messageformat_1.FormatError("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", intl_messageformat_1.ErrorCode.MISSING_INTL_API));
    }
    var filteredOptions = (0, utils_1.filterProps)(options, PLURAL_FORMAT_OPTIONS);
    try {
        return getPluralRules(locale, filteredOptions).select(value);
    }
    catch (e) {
        onError(new error_1.IntlFormatError('Error formatting plural.', locale, e));
    }
    return 'other';
}
