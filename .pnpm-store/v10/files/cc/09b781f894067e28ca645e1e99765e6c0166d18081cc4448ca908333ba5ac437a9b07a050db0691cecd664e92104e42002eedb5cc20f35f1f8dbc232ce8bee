"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatRelativeTime = formatRelativeTime;
var utils_1 = require("./utils");
var intl_messageformat_1 = require("intl-messageformat");
var error_1 = require("./error");
var RELATIVE_TIME_FORMAT_OPTIONS = ['numeric', 'style'];
function getFormatter(_a, getRelativeTimeFormat, options) {
    var locale = _a.locale, formats = _a.formats, onError = _a.onError;
    if (options === void 0) { options = {}; }
    var format = options.format;
    var defaults = (!!format && (0, utils_1.getNamedFormat)(formats, 'relative', format, onError)) || {};
    var filteredOptions = (0, utils_1.filterProps)(options, RELATIVE_TIME_FORMAT_OPTIONS, defaults);
    return getRelativeTimeFormat(locale, filteredOptions);
}
function formatRelativeTime(config, getRelativeTimeFormat, value, unit, options) {
    if (options === void 0) { options = {}; }
    if (!unit) {
        unit = 'second';
    }
    var RelativeTimeFormat = Intl.RelativeTimeFormat;
    if (!RelativeTimeFormat) {
        config.onError(new intl_messageformat_1.FormatError("Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-relativetimeformat\"\n", intl_messageformat_1.ErrorCode.MISSING_INTL_API));
    }
    try {
        return getFormatter(config, getRelativeTimeFormat, options).format(value, unit);
    }
    catch (e) {
        config.onError(new error_1.IntlFormatError('Error formatting relative time.', config.locale, e));
    }
    return String(value);
}
