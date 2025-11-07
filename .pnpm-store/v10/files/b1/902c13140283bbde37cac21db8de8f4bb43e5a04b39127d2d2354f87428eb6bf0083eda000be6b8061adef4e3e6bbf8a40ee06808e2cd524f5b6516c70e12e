/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
import { __assign, __rest, __spreadArray } from "tslib";
import { createIntl as coreCreateIntl, formatMessage as coreFormatMessage, } from '@formatjs/intl';
import { isFormatXMLElementFn, } from 'intl-messageformat';
import { DEFAULT_INTL_CONFIG, assignUniqueKeysToParts, toKeyedReactNodeArray, } from '../utils';
function assignUniqueKeysToFormatXMLElementFnArgument(values) {
    if (!values) {
        return values;
    }
    return Object.keys(values).reduce(function (acc, k) {
        var v = values[k];
        acc[k] = isFormatXMLElementFn(v)
            ? assignUniqueKeysToParts(v)
            : v;
        return acc;
    }, {});
}
var formatMessage = function (config, formatters, descriptor, rawValues) {
    var rest = [];
    for (var _i = 4; _i < arguments.length; _i++) {
        rest[_i - 4] = arguments[_i];
    }
    var values = assignUniqueKeysToFormatXMLElementFnArgument(rawValues);
    var chunks = coreFormatMessage.apply(void 0, __spreadArray([config,
        formatters,
        descriptor,
        values], rest, false));
    if (Array.isArray(chunks)) {
        return toKeyedReactNodeArray(chunks);
    }
    return chunks;
};
/**
 * Create intl object
 * @param config intl config
 * @param cache cache for formatter instances to prevent memory leak
 */
export var createIntl = function (_a, cache) {
    var rawDefaultRichTextElements = _a.defaultRichTextElements, config = __rest(_a, ["defaultRichTextElements"]);
    var defaultRichTextElements = assignUniqueKeysToFormatXMLElementFnArgument(rawDefaultRichTextElements);
    var coreIntl = coreCreateIntl(__assign(__assign(__assign({}, DEFAULT_INTL_CONFIG), config), { defaultRichTextElements: defaultRichTextElements }), cache);
    var resolvedConfig = {
        locale: coreIntl.locale,
        timeZone: coreIntl.timeZone,
        fallbackOnEmptyString: coreIntl.fallbackOnEmptyString,
        formats: coreIntl.formats,
        defaultLocale: coreIntl.defaultLocale,
        defaultFormats: coreIntl.defaultFormats,
        messages: coreIntl.messages,
        onError: coreIntl.onError,
        defaultRichTextElements: defaultRichTextElements,
    };
    return __assign(__assign({}, coreIntl), { formatMessage: formatMessage.bind(null, resolvedConfig, coreIntl.formatters), $t: formatMessage.bind(null, resolvedConfig, coreIntl.formatters) });
};
