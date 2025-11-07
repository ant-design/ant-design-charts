"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormatter = getFormatter;
exports.formatNumber = formatNumber;
exports.formatNumberToParts = formatNumberToParts;
var error_1 = require("./error");
var utils_1 = require("./utils");
var NUMBER_FORMAT_OPTIONS = [
    'style',
    'currency',
    'unit',
    'unitDisplay',
    'useGrouping',
    'minimumIntegerDigits',
    'minimumFractionDigits',
    'maximumFractionDigits',
    'minimumSignificantDigits',
    'maximumSignificantDigits',
    // ES2020 NumberFormat
    'compactDisplay',
    'currencyDisplay',
    'currencySign',
    'notation',
    'signDisplay',
    'unit',
    'unitDisplay',
    'numberingSystem',
    // ES2023 NumberFormat
    'trailingZeroDisplay',
    'roundingPriority',
    'roundingIncrement',
    'roundingMode',
];
function getFormatter(_a, getNumberFormat, options) {
    var locale = _a.locale, formats = _a.formats, onError = _a.onError;
    if (options === void 0) { options = {}; }
    var format = options.format;
    var defaults = ((format &&
        (0, utils_1.getNamedFormat)(formats, 'number', format, onError)) ||
        {});
    var filteredOptions = (0, utils_1.filterProps)(options, NUMBER_FORMAT_OPTIONS, defaults);
    return getNumberFormat(locale, filteredOptions);
}
function formatNumber(config, getNumberFormat, value, options) {
    if (options === void 0) { options = {}; }
    try {
        return getFormatter(config, getNumberFormat, options).format(value);
    }
    catch (e) {
        config.onError(new error_1.IntlFormatError('Error formatting number.', config.locale, e));
    }
    return String(value);
}
function formatNumberToParts(config, getNumberFormat, value, options) {
    if (options === void 0) { options = {}; }
    try {
        return getFormatter(config, getNumberFormat, options).formatToParts(value);
    }
    catch (e) {
        config.onError(new error_1.IntlFormatError('Error formatting number.', config.locale, e));
    }
    return [];
}
