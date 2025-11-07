"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_INTL_CONFIG = void 0;
exports.invariant = invariant;
exports.filterProps = filterProps;
exports.createIntlCache = createIntlCache;
exports.createFormatters = createFormatters;
exports.getNamedFormat = getNamedFormat;
var tslib_1 = require("tslib");
var fast_memoize_1 = require("@formatjs/fast-memoize");
var intl_messageformat_1 = require("intl-messageformat");
var error_1 = require("./error");
function invariant(condition, message, Err) {
    if (Err === void 0) { Err = Error; }
    if (!condition) {
        throw new Err(message);
    }
}
function filterProps(props, allowlist, defaults) {
    if (defaults === void 0) { defaults = {}; }
    return allowlist.reduce(function (filtered, name) {
        if (name in props) {
            filtered[name] = props[name];
        }
        else if (name in defaults) {
            filtered[name] = defaults[name];
        }
        return filtered;
    }, {});
}
var defaultErrorHandler = function (error) {
    // @ts-ignore just so we don't need to declare dep on @types/node
    if (process.env.NODE_ENV !== 'production') {
        console.error(error);
    }
};
var defaultWarnHandler = function (warning) {
    // @ts-ignore just so we don't need to declare dep on @types/node
    if (process.env.NODE_ENV !== 'production') {
        console.warn(warning);
    }
};
exports.DEFAULT_INTL_CONFIG = {
    formats: {},
    messages: {},
    timeZone: undefined,
    defaultLocale: 'en',
    defaultFormats: {},
    fallbackOnEmptyString: true,
    onError: defaultErrorHandler,
    onWarn: defaultWarnHandler,
};
function createIntlCache() {
    return {
        dateTime: {},
        number: {},
        message: {},
        relativeTime: {},
        pluralRules: {},
        list: {},
        displayNames: {},
    };
}
function createFastMemoizeCache(store) {
    return {
        create: function () {
            return {
                get: function (key) {
                    return store[key];
                },
                set: function (key, value) {
                    store[key] = value;
                },
            };
        },
    };
}
/**
 * Create intl formatters and populate cache
 * @param cache explicit cache to prevent leaking memory
 */
function createFormatters(cache) {
    if (cache === void 0) { cache = createIntlCache(); }
    var RelativeTimeFormat = Intl.RelativeTimeFormat;
    var ListFormat = Intl.ListFormat;
    var DisplayNames = Intl.DisplayNames;
    var getDateTimeFormat = (0, fast_memoize_1.memoize)(function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new ((_a = Intl.DateTimeFormat).bind.apply(_a, tslib_1.__spreadArray([void 0], args, false)))();
    }, {
        cache: createFastMemoizeCache(cache.dateTime),
        strategy: fast_memoize_1.strategies.variadic,
    });
    var getNumberFormat = (0, fast_memoize_1.memoize)(function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new ((_a = Intl.NumberFormat).bind.apply(_a, tslib_1.__spreadArray([void 0], args, false)))();
    }, {
        cache: createFastMemoizeCache(cache.number),
        strategy: fast_memoize_1.strategies.variadic,
    });
    var getPluralRules = (0, fast_memoize_1.memoize)(function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new ((_a = Intl.PluralRules).bind.apply(_a, tslib_1.__spreadArray([void 0], args, false)))();
    }, {
        cache: createFastMemoizeCache(cache.pluralRules),
        strategy: fast_memoize_1.strategies.variadic,
    });
    return {
        getDateTimeFormat: getDateTimeFormat,
        getNumberFormat: getNumberFormat,
        getMessageFormat: (0, fast_memoize_1.memoize)(function (message, locales, overrideFormats, opts) {
            return new intl_messageformat_1.IntlMessageFormat(message, locales, overrideFormats, tslib_1.__assign({ formatters: {
                    getNumberFormat: getNumberFormat,
                    getDateTimeFormat: getDateTimeFormat,
                    getPluralRules: getPluralRules,
                } }, (opts || {})));
        }, {
            cache: createFastMemoizeCache(cache.message),
            strategy: fast_memoize_1.strategies.variadic,
        }),
        getRelativeTimeFormat: (0, fast_memoize_1.memoize)(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new (RelativeTimeFormat.bind.apply(RelativeTimeFormat, tslib_1.__spreadArray([void 0], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.relativeTime),
            strategy: fast_memoize_1.strategies.variadic,
        }),
        getPluralRules: getPluralRules,
        getListFormat: (0, fast_memoize_1.memoize)(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new (ListFormat.bind.apply(ListFormat, tslib_1.__spreadArray([void 0], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.list),
            strategy: fast_memoize_1.strategies.variadic,
        }),
        getDisplayNames: (0, fast_memoize_1.memoize)(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new (DisplayNames.bind.apply(DisplayNames, tslib_1.__spreadArray([void 0], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.displayNames),
            strategy: fast_memoize_1.strategies.variadic,
        }),
    };
}
function getNamedFormat(formats, type, name, onError) {
    var formatType = formats && formats[type];
    var format;
    if (formatType) {
        format = formatType[name];
    }
    if (format) {
        return format;
    }
    onError(new error_1.UnsupportedFormatterError("No ".concat(type, " format named: ").concat(name)));
}
