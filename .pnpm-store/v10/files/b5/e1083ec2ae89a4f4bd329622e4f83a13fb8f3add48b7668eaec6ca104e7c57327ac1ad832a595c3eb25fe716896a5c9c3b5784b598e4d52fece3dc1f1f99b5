"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDisplayName = formatDisplayName;
var utils_1 = require("./utils");
var intl_messageformat_1 = require("intl-messageformat");
var error_1 = require("./error");
var DISPLAY_NAMES_OPTONS = [
    'style',
    'type',
    'fallback',
    'languageDisplay',
];
function formatDisplayName(_a, getDisplayNames, value, options) {
    var locale = _a.locale, onError = _a.onError;
    var DisplayNames = Intl.DisplayNames;
    if (!DisplayNames) {
        onError(new intl_messageformat_1.FormatError("Intl.DisplayNames is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-displaynames\"\n", intl_messageformat_1.ErrorCode.MISSING_INTL_API));
    }
    var filteredOptions = (0, utils_1.filterProps)(options, DISPLAY_NAMES_OPTONS);
    try {
        return getDisplayNames(locale, filteredOptions).of(value);
    }
    catch (e) {
        onError(new error_1.IntlFormatError('Error formatting display name.', locale, e));
    }
}
