"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatList = formatList;
exports.formatListToParts = formatListToParts;
var tslib_1 = require("tslib");
var intl_messageformat_1 = require("intl-messageformat");
var error_1 = require("./error");
var utils_1 = require("./utils");
var LIST_FORMAT_OPTIONS = [
    'type',
    'style',
];
var now = Date.now();
function generateToken(i) {
    return "".concat(now, "_").concat(i, "_").concat(now);
}
function formatList(opts, getListFormat, values, options) {
    if (options === void 0) { options = {}; }
    var results = formatListToParts(opts, getListFormat, values, options).reduce(function (all, el) {
        var val = el.value;
        if (typeof val !== 'string') {
            all.push(val);
        }
        else if (typeof all[all.length - 1] === 'string') {
            all[all.length - 1] += val;
        }
        else {
            all.push(val);
        }
        return all;
    }, []);
    return results.length === 1 ? results[0] : results.length === 0 ? '' : results;
}
function formatListToParts(_a, getListFormat, values, options) {
    var locale = _a.locale, onError = _a.onError;
    if (options === void 0) { options = {}; }
    var ListFormat = Intl.ListFormat;
    if (!ListFormat) {
        onError(new intl_messageformat_1.FormatError("Intl.ListFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-listformat\"\n", intl_messageformat_1.ErrorCode.MISSING_INTL_API));
    }
    var filteredOptions = (0, utils_1.filterProps)(options, LIST_FORMAT_OPTIONS);
    try {
        var richValues_1 = {};
        var serializedValues = Array.from(values).map(function (v, i) {
            if (typeof v === 'object' && v !== null) {
                var id = generateToken(i);
                richValues_1[id] = v;
                return id;
            }
            return String(v);
        });
        return getListFormat(locale, filteredOptions)
            .formatToParts(serializedValues)
            .map(function (part) {
            return (part.type === 'literal'
                ? part
                : tslib_1.__assign(tslib_1.__assign({}, part), { value: richValues_1[part.value] || part.value }));
        });
    }
    catch (e) {
        onError(new error_1.IntlFormatError('Error formatting list.', locale, e));
    }
    // @ts-ignore
    return values;
}
