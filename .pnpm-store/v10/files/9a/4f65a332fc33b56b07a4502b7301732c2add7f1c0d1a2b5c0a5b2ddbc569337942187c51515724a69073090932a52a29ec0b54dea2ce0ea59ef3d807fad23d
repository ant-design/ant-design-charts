"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormattedNumberParts = exports.FormattedListParts = exports.FormattedTimeParts = exports.FormattedDateParts = exports.FormattedDisplayName = exports.FormattedList = exports.FormattedNumber = exports.FormattedTime = exports.FormattedDate = exports.useIntl = exports.RawIntlProvider = exports.IntlProvider = exports.IntlContext = exports.injectIntl = exports.FormattedRelativeTime = exports.FormattedPlural = exports.FormattedMessage = exports.FormattedDateTimeRange = exports.createIntl = exports.UnsupportedFormatterError = exports.ReactIntlErrorCode = exports.ReactIntlError = exports.MissingTranslationError = exports.MissingDataError = exports.MessageFormatError = exports.InvalidConfigError = exports.createIntlCache = void 0;
exports.defineMessages = defineMessages;
exports.defineMessage = defineMessage;
var tslib_1 = require("tslib");
var createFormattedComponent_1 = require("./src/components/createFormattedComponent");
var createIntl_1 = require("./src/components/createIntl");
Object.defineProperty(exports, "createIntl", { enumerable: true, get: function () { return createIntl_1.createIntl; } });
var dateTimeRange_1 = tslib_1.__importDefault(require("./src/components/dateTimeRange"));
exports.FormattedDateTimeRange = dateTimeRange_1.default;
var injectIntl_1 = tslib_1.__importStar(require("./src/components/injectIntl"));
exports.injectIntl = injectIntl_1.default;
Object.defineProperty(exports, "IntlContext", { enumerable: true, get: function () { return injectIntl_1.Context; } });
Object.defineProperty(exports, "RawIntlProvider", { enumerable: true, get: function () { return injectIntl_1.Provider; } });
var message_1 = tslib_1.__importDefault(require("./src/components/message"));
exports.FormattedMessage = message_1.default;
var plural_1 = tslib_1.__importDefault(require("./src/components/plural"));
exports.FormattedPlural = plural_1.default;
var provider_1 = tslib_1.__importDefault(require("./src/components/provider"));
exports.IntlProvider = provider_1.default;
var relative_1 = tslib_1.__importDefault(require("./src/components/relative"));
exports.FormattedRelativeTime = relative_1.default;
var useIntl_1 = tslib_1.__importDefault(require("./src/components/useIntl"));
exports.useIntl = useIntl_1.default;
var intl_1 = require("@formatjs/intl");
Object.defineProperty(exports, "createIntlCache", { enumerable: true, get: function () { return intl_1.createIntlCache; } });
Object.defineProperty(exports, "InvalidConfigError", { enumerable: true, get: function () { return intl_1.InvalidConfigError; } });
Object.defineProperty(exports, "MessageFormatError", { enumerable: true, get: function () { return intl_1.MessageFormatError; } });
Object.defineProperty(exports, "MissingDataError", { enumerable: true, get: function () { return intl_1.MissingDataError; } });
Object.defineProperty(exports, "MissingTranslationError", { enumerable: true, get: function () { return intl_1.MissingTranslationError; } });
Object.defineProperty(exports, "ReactIntlError", { enumerable: true, get: function () { return intl_1.IntlError; } });
Object.defineProperty(exports, "ReactIntlErrorCode", { enumerable: true, get: function () { return intl_1.IntlErrorCode; } });
Object.defineProperty(exports, "UnsupportedFormatterError", { enumerable: true, get: function () { return intl_1.UnsupportedFormatterError; } });
function defineMessages(msgs) {
    return msgs;
}
function defineMessage(msg) {
    return msg;
}
// IMPORTANT: Explicit here to prevent api-extractor from outputing `import('./src/types').CustomFormatConfig`
exports.FormattedDate = (0, createFormattedComponent_1.createFormattedComponent)('formatDate');
exports.FormattedTime = (0, createFormattedComponent_1.createFormattedComponent)('formatTime');
exports.FormattedNumber = (0, createFormattedComponent_1.createFormattedComponent)('formatNumber');
exports.FormattedList = (0, createFormattedComponent_1.createFormattedComponent)('formatList');
exports.FormattedDisplayName = (0, createFormattedComponent_1.createFormattedComponent)('formatDisplayName');
exports.FormattedDateParts = (0, createFormattedComponent_1.createFormattedDateTimePartsComponent)('formatDate');
exports.FormattedTimeParts = (0, createFormattedComponent_1.createFormattedDateTimePartsComponent)('formatTime');
var createFormattedComponent_2 = require("./src/components/createFormattedComponent");
Object.defineProperty(exports, "FormattedListParts", { enumerable: true, get: function () { return createFormattedComponent_2.FormattedListParts; } });
Object.defineProperty(exports, "FormattedNumberParts", { enumerable: true, get: function () { return createFormattedComponent_2.FormattedNumberParts; } });
