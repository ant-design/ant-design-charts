"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIntl = createIntl;
var tslib_1 = require("tslib");
var dateTime_1 = require("./dateTime");
var displayName_1 = require("./displayName");
var error_1 = require("./error");
var list_1 = require("./list");
var message_1 = require("./message");
var number_1 = require("./number");
var plural_1 = require("./plural");
var relativeTime_1 = require("./relativeTime");
var utils_1 = require("./utils");
function messagesContainString(messages) {
    var firstMessage = messages ? messages[Object.keys(messages)[0]] : undefined;
    return typeof firstMessage === 'string';
}
function verifyConfigMessages(config) {
    if (config.onWarn &&
        config.defaultRichTextElements &&
        messagesContainString(config.messages || {})) {
        config.onWarn("[@formatjs/intl] \"defaultRichTextElements\" was specified but \"message\" was not pre-compiled. \nPlease consider using \"@formatjs/cli\" to pre-compile your messages for performance.\nFor more details see https://formatjs.github.io/docs/getting-started/message-distribution");
    }
}
/**
 * Create intl object
 * @param config intl config
 * @param cache cache for formatter instances to prevent memory leak
 */
function createIntl(config, cache) {
    var formatters = (0, utils_1.createFormatters)(cache);
    var resolvedConfig = tslib_1.__assign(tslib_1.__assign({}, utils_1.DEFAULT_INTL_CONFIG), config);
    var locale = resolvedConfig.locale, defaultLocale = resolvedConfig.defaultLocale, onError = resolvedConfig.onError;
    if (!locale) {
        if (onError) {
            onError(new error_1.InvalidConfigError("\"locale\" was not configured, using \"".concat(defaultLocale, "\" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details")));
        }
        // Since there's no registered locale data for `locale`, this will
        // fallback to the `defaultLocale` to make sure things can render.
        // The `messages` are overridden to the `defaultProps` empty object
        // to maintain referential equality across re-renders. It's assumed
        // each <FormattedMessage> contains a `defaultMessage` prop.
        resolvedConfig.locale = resolvedConfig.defaultLocale || 'en';
    }
    else if (!Intl.NumberFormat.supportedLocalesOf(locale).length && onError) {
        onError(new error_1.MissingDataError("Missing locale data for locale: \"".concat(locale, "\" in Intl.NumberFormat. Using default locale: \"").concat(defaultLocale, "\" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details")));
    }
    else if (!Intl.DateTimeFormat.supportedLocalesOf(locale).length &&
        onError) {
        onError(new error_1.MissingDataError("Missing locale data for locale: \"".concat(locale, "\" in Intl.DateTimeFormat. Using default locale: \"").concat(defaultLocale, "\" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details")));
    }
    verifyConfigMessages(resolvedConfig);
    return tslib_1.__assign(tslib_1.__assign({}, resolvedConfig), { formatters: formatters, formatNumber: number_1.formatNumber.bind(null, resolvedConfig, formatters.getNumberFormat), formatNumberToParts: number_1.formatNumberToParts.bind(null, resolvedConfig, formatters.getNumberFormat), formatRelativeTime: relativeTime_1.formatRelativeTime.bind(null, resolvedConfig, formatters.getRelativeTimeFormat), formatDate: dateTime_1.formatDate.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatDateToParts: dateTime_1.formatDateToParts.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatTime: dateTime_1.formatTime.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatDateTimeRange: dateTime_1.formatDateTimeRange.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatTimeToParts: dateTime_1.formatTimeToParts.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatPlural: plural_1.formatPlural.bind(null, resolvedConfig, formatters.getPluralRules), formatMessage: message_1.formatMessage.bind(null, resolvedConfig, formatters), $t: message_1.formatMessage.bind(null, resolvedConfig, formatters), formatList: list_1.formatList.bind(null, resolvedConfig, formatters.getListFormat), formatListToParts: list_1.formatListToParts.bind(null, resolvedConfig, formatters.getListFormat), formatDisplayName: displayName_1.formatDisplayName.bind(null, resolvedConfig, formatters.getDisplayNames) });
}
