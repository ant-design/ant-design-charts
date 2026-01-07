"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatMessage = void 0;
var tslib_1 = require("tslib");
var icu_messageformat_parser_1 = require("@formatjs/icu-messageformat-parser");
var intl_messageformat_1 = require("intl-messageformat");
var error_1 = require("./error");
var utils_1 = require("./utils");
function setTimeZoneInOptions(opts, timeZone) {
    return Object.keys(opts).reduce(function (all, k) {
        all[k] = tslib_1.__assign({ timeZone: timeZone }, opts[k]);
        return all;
    }, {});
}
function deepMergeOptions(opts1, opts2) {
    var keys = Object.keys(tslib_1.__assign(tslib_1.__assign({}, opts1), opts2));
    return keys.reduce(function (all, k) {
        all[k] = tslib_1.__assign(tslib_1.__assign({}, (opts1[k] || {})), (opts2[k] || {}));
        return all;
    }, {});
}
function deepMergeFormatsAndSetTimeZone(f1, timeZone) {
    if (!timeZone) {
        return f1;
    }
    var mfFormats = intl_messageformat_1.IntlMessageFormat.formats;
    return tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, mfFormats), f1), { date: deepMergeOptions(setTimeZoneInOptions(mfFormats.date, timeZone), setTimeZoneInOptions(f1.date || {}, timeZone)), time: deepMergeOptions(setTimeZoneInOptions(mfFormats.time, timeZone), setTimeZoneInOptions(f1.time || {}, timeZone)) });
}
var formatMessage = function (_a, state, messageDescriptor, values, opts) {
    var locale = _a.locale, formats = _a.formats, messages = _a.messages, defaultLocale = _a.defaultLocale, defaultFormats = _a.defaultFormats, fallbackOnEmptyString = _a.fallbackOnEmptyString, onError = _a.onError, timeZone = _a.timeZone, defaultRichTextElements = _a.defaultRichTextElements;
    if (messageDescriptor === void 0) { messageDescriptor = { id: '' }; }
    var msgId = messageDescriptor.id, defaultMessage = messageDescriptor.defaultMessage;
    // `id` is a required field of a Message Descriptor.
    (0, utils_1.invariant)(!!msgId, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
    var id = String(msgId);
    var message = 
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    messages &&
        Object.prototype.hasOwnProperty.call(messages, id) &&
        messages[id];
    // IMPORTANT: Hot path if `message` is AST with a single literal node
    if (Array.isArray(message) &&
        message.length === 1 &&
        message[0].type === icu_messageformat_parser_1.TYPE.literal) {
        return message[0].value;
    }
    // IMPORTANT: Hot path straight lookup for performance
    if (!values &&
        message &&
        typeof message === 'string' &&
        !defaultRichTextElements) {
        return message.replace(/'\{(.*?)\}'/gi, "{$1}");
    }
    values = tslib_1.__assign(tslib_1.__assign({}, defaultRichTextElements), (values || {}));
    formats = deepMergeFormatsAndSetTimeZone(formats, timeZone);
    defaultFormats = deepMergeFormatsAndSetTimeZone(defaultFormats, timeZone);
    if (!message) {
        if (fallbackOnEmptyString === false && message === '') {
            return message;
        }
        if (!defaultMessage ||
            (locale && locale.toLowerCase() !== defaultLocale.toLowerCase())) {
            // This prevents warnings from littering the console in development
            // when no `messages` are passed into the <IntlProvider> for the
            // default locale.
            onError(new error_1.MissingTranslationError(messageDescriptor, locale));
        }
        if (defaultMessage) {
            try {
                var formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats, opts);
                return formatter.format(values);
            }
            catch (e) {
                onError(new error_1.MessageFormatError("Error formatting default message for: \"".concat(id, "\", rendering default message verbatim"), locale, messageDescriptor, e));
                return typeof defaultMessage === 'string' ? defaultMessage : id;
            }
        }
        return id;
    }
    // We have the translated message
    try {
        var formatter = state.getMessageFormat(message, locale, formats, tslib_1.__assign({ formatters: state }, (opts || {})));
        return formatter.format(values);
    }
    catch (e) {
        onError(new error_1.MessageFormatError("Error formatting message: \"".concat(id, "\", using ").concat(defaultMessage ? 'default message' : 'id', " as fallback."), locale, messageDescriptor, e));
    }
    if (defaultMessage) {
        try {
            var formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats, opts);
            return formatter.format(values);
        }
        catch (e) {
            onError(new error_1.MessageFormatError("Error formatting the default message for: \"".concat(id, "\", rendering message verbatim"), locale, messageDescriptor, e));
        }
    }
    if (typeof message === 'string') {
        return message;
    }
    if (typeof defaultMessage === 'string') {
        return defaultMessage;
    }
    return id;
};
exports.formatMessage = formatMessage;
