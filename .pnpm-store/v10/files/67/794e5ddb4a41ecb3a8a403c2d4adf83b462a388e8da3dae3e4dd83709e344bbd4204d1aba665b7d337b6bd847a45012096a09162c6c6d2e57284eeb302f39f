"use strict";
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIntl = void 0;
var tslib_1 = require("tslib");
var intl_1 = require("@formatjs/intl");
var intl_messageformat_1 = require("intl-messageformat");
var utils_1 = require("../utils");
function assignUniqueKeysToFormatXMLElementFnArgument(values) {
    if (!values) {
        return values;
    }
    return Object.keys(values).reduce(function (acc, k) {
        var v = values[k];
        acc[k] = (0, intl_messageformat_1.isFormatXMLElementFn)(v)
            ? (0, utils_1.assignUniqueKeysToParts)(v)
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
    var chunks = intl_1.formatMessage.apply(void 0, tslib_1.__spreadArray([config,
        formatters,
        descriptor,
        values], rest, false));
    if (Array.isArray(chunks)) {
        return (0, utils_1.toKeyedReactNodeArray)(chunks);
    }
    return chunks;
};
/**
 * Create intl object
 * @param config intl config
 * @param cache cache for formatter instances to prevent memory leak
 */
var createIntl = function (_a, cache) {
    var rawDefaultRichTextElements = _a.defaultRichTextElements, config = tslib_1.__rest(_a, ["defaultRichTextElements"]);
    var defaultRichTextElements = assignUniqueKeysToFormatXMLElementFnArgument(rawDefaultRichTextElements);
    var coreIntl = (0, intl_1.createIntl)(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, utils_1.DEFAULT_INTL_CONFIG), config), { defaultRichTextElements: defaultRichTextElements }), cache);
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
    return tslib_1.__assign(tslib_1.__assign({}, coreIntl), { formatMessage: formatMessage.bind(null, resolvedConfig, coreIntl.formatters), $t: formatMessage.bind(null, resolvedConfig, coreIntl.formatters) });
};
exports.createIntl = createIntl;
