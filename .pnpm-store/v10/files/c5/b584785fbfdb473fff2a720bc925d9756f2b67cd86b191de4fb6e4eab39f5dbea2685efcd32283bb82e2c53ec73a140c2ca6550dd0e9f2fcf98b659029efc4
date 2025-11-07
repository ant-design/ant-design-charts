"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormatter = getFormatter;
exports.formatDate = formatDate;
exports.formatTime = formatTime;
exports.formatDateTimeRange = formatDateTimeRange;
exports.formatDateToParts = formatDateToParts;
exports.formatTimeToParts = formatTimeToParts;
var tslib_1 = require("tslib");
var error_1 = require("./error");
var utils_1 = require("./utils");
var DATE_TIME_FORMAT_OPTIONS = [
    'formatMatcher',
    'timeZone',
    'hour12',
    'weekday',
    'era',
    'year',
    'month',
    'day',
    'hour',
    'minute',
    'second',
    'timeZoneName',
    'hourCycle',
    'dateStyle',
    'timeStyle',
    'calendar',
    // 'dayPeriod',
    'numberingSystem',
    'fractionalSecondDigits',
];
function getFormatter(_a, type, getDateTimeFormat, options) {
    var locale = _a.locale, formats = _a.formats, onError = _a.onError, timeZone = _a.timeZone;
    if (options === void 0) { options = {}; }
    var format = options.format;
    var defaults = tslib_1.__assign(tslib_1.__assign({}, (timeZone && { timeZone: timeZone })), (format && (0, utils_1.getNamedFormat)(formats, type, format, onError)));
    var filteredOptions = (0, utils_1.filterProps)(options, DATE_TIME_FORMAT_OPTIONS, defaults);
    if (type === 'time' &&
        !filteredOptions.hour &&
        !filteredOptions.minute &&
        !filteredOptions.second &&
        !filteredOptions.timeStyle &&
        !filteredOptions.dateStyle) {
        // Add default formatting options if hour, minute, or second isn't defined.
        filteredOptions = tslib_1.__assign(tslib_1.__assign({}, filteredOptions), { hour: 'numeric', minute: 'numeric' });
    }
    return getDateTimeFormat(locale, filteredOptions);
}
function formatDate(config, getDateTimeFormat) {
    var _a = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        _a[_i - 2] = arguments[_i];
    }
    var value = _a[0], _b = _a[1], options = _b === void 0 ? {} : _b;
    var date = typeof value === 'string' ? new Date(value || 0) : value;
    try {
        return getFormatter(config, 'date', getDateTimeFormat, options).format(date);
    }
    catch (e) {
        config.onError(new error_1.IntlFormatError('Error formatting date.', config.locale, e));
    }
    return String(date);
}
function formatTime(config, getDateTimeFormat) {
    var _a = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        _a[_i - 2] = arguments[_i];
    }
    var value = _a[0], _b = _a[1], options = _b === void 0 ? {} : _b;
    var date = typeof value === 'string' ? new Date(value || 0) : value;
    try {
        return getFormatter(config, 'time', getDateTimeFormat, options).format(date);
    }
    catch (e) {
        config.onError(new error_1.IntlFormatError('Error formatting time.', config.locale, e));
    }
    return String(date);
}
function formatDateTimeRange(config, getDateTimeFormat) {
    var _a = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        _a[_i - 2] = arguments[_i];
    }
    var from = _a[0], to = _a[1], _b = _a[2], options = _b === void 0 ? {} : _b;
    var fromDate = typeof from === 'string' ? new Date(from || 0) : from;
    var toDate = typeof to === 'string' ? new Date(to || 0) : to;
    try {
        return getFormatter(config, 'dateTimeRange', getDateTimeFormat, options).formatRange(fromDate, toDate);
    }
    catch (e) {
        config.onError(new error_1.IntlFormatError('Error formatting date time range.', config.locale, e));
    }
    return String(fromDate);
}
function formatDateToParts(config, getDateTimeFormat) {
    var _a = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        _a[_i - 2] = arguments[_i];
    }
    var value = _a[0], _b = _a[1], options = _b === void 0 ? {} : _b;
    var date = typeof value === 'string' ? new Date(value || 0) : value;
    try {
        return getFormatter(config, 'date', getDateTimeFormat, options).formatToParts(date); // TODO: remove this when https://github.com/microsoft/TypeScript/pull/50402 is merged
    }
    catch (e) {
        config.onError(new error_1.IntlFormatError('Error formatting date.', config.locale, e));
    }
    return [];
}
function formatTimeToParts(config, getDateTimeFormat) {
    var _a = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        _a[_i - 2] = arguments[_i];
    }
    var value = _a[0], _b = _a[1], options = _b === void 0 ? {} : _b;
    var date = typeof value === 'string' ? new Date(value || 0) : value;
    try {
        return getFormatter(config, 'time', getDateTimeFormat, options).formatToParts(date); // TODO: remove this when https://github.com/microsoft/TypeScript/pull/50402 is merged
    }
    catch (e) {
        config.onError(new error_1.IntlFormatError('Error formatting time.', config.locale, e));
    }
    return [];
}
