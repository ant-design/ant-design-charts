import { __assign } from "tslib";
import { ErrorCode, FormatError } from 'intl-messageformat';
import { IntlFormatError } from './error';
import { filterProps } from './utils';
var LIST_FORMAT_OPTIONS = [
    'type',
    'style',
];
var now = Date.now();
function generateToken(i) {
    return "".concat(now, "_").concat(i, "_").concat(now);
}
export function formatList(opts, getListFormat, values, options) {
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
export function formatListToParts(_a, getListFormat, values, options) {
    var locale = _a.locale, onError = _a.onError;
    if (options === void 0) { options = {}; }
    var ListFormat = Intl.ListFormat;
    if (!ListFormat) {
        onError(new FormatError("Intl.ListFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-listformat\"\n", ErrorCode.MISSING_INTL_API));
    }
    var filteredOptions = filterProps(options, LIST_FORMAT_OPTIONS);
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
                : __assign(__assign({}, part), { value: richValues_1[part.value] || part.value }));
        });
    }
    catch (e) {
        onError(new IntlFormatError('Error formatting list.', locale, e));
    }
    // @ts-ignore
    return values;
}
