import { __assign } from "tslib";
import { formatDate, formatDateTimeRange, formatDateToParts, formatTime, formatTimeToParts, } from './dateTime';
import { formatDisplayName } from './displayName';
import { InvalidConfigError, MissingDataError } from './error';
import { formatList, formatListToParts } from './list';
import { formatMessage } from './message';
import { formatNumber, formatNumberToParts } from './number';
import { formatPlural } from './plural';
import { formatRelativeTime } from './relativeTime';
import { createFormatters, DEFAULT_INTL_CONFIG } from './utils';
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
export function createIntl(config, cache) {
    var formatters = createFormatters(cache);
    var resolvedConfig = __assign(__assign({}, DEFAULT_INTL_CONFIG), config);
    var locale = resolvedConfig.locale, defaultLocale = resolvedConfig.defaultLocale, onError = resolvedConfig.onError;
    if (!locale) {
        if (onError) {
            onError(new InvalidConfigError("\"locale\" was not configured, using \"".concat(defaultLocale, "\" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details")));
        }
        // Since there's no registered locale data for `locale`, this will
        // fallback to the `defaultLocale` to make sure things can render.
        // The `messages` are overridden to the `defaultProps` empty object
        // to maintain referential equality across re-renders. It's assumed
        // each <FormattedMessage> contains a `defaultMessage` prop.
        resolvedConfig.locale = resolvedConfig.defaultLocale || 'en';
    }
    else if (!Intl.NumberFormat.supportedLocalesOf(locale).length && onError) {
        onError(new MissingDataError("Missing locale data for locale: \"".concat(locale, "\" in Intl.NumberFormat. Using default locale: \"").concat(defaultLocale, "\" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details")));
    }
    else if (!Intl.DateTimeFormat.supportedLocalesOf(locale).length &&
        onError) {
        onError(new MissingDataError("Missing locale data for locale: \"".concat(locale, "\" in Intl.DateTimeFormat. Using default locale: \"").concat(defaultLocale, "\" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details")));
    }
    verifyConfigMessages(resolvedConfig);
    return __assign(__assign({}, resolvedConfig), { formatters: formatters, formatNumber: formatNumber.bind(null, resolvedConfig, formatters.getNumberFormat), formatNumberToParts: formatNumberToParts.bind(null, resolvedConfig, formatters.getNumberFormat), formatRelativeTime: formatRelativeTime.bind(null, resolvedConfig, formatters.getRelativeTimeFormat), formatDate: formatDate.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatDateToParts: formatDateToParts.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatTime: formatTime.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatDateTimeRange: formatDateTimeRange.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatTimeToParts: formatTimeToParts.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatPlural: formatPlural.bind(null, resolvedConfig, formatters.getPluralRules), formatMessage: formatMessage.bind(null, resolvedConfig, formatters), $t: formatMessage.bind(null, resolvedConfig, formatters), formatList: formatList.bind(null, resolvedConfig, formatters.getListFormat), formatListToParts: formatListToParts.bind(null, resolvedConfig, formatters.getListFormat), formatDisplayName: formatDisplayName.bind(null, resolvedConfig, formatters.getDisplayNames) });
}
