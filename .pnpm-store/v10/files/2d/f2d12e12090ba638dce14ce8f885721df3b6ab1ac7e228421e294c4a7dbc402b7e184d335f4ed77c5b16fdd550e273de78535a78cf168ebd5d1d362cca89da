"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingTranslationError = exports.MessageFormatError = exports.IntlFormatError = exports.MissingDataError = exports.InvalidConfigError = exports.UnsupportedFormatterError = exports.IntlError = exports.IntlErrorCode = void 0;
var tslib_1 = require("tslib");
var IntlErrorCode;
(function (IntlErrorCode) {
    IntlErrorCode["FORMAT_ERROR"] = "FORMAT_ERROR";
    IntlErrorCode["UNSUPPORTED_FORMATTER"] = "UNSUPPORTED_FORMATTER";
    IntlErrorCode["INVALID_CONFIG"] = "INVALID_CONFIG";
    IntlErrorCode["MISSING_DATA"] = "MISSING_DATA";
    IntlErrorCode["MISSING_TRANSLATION"] = "MISSING_TRANSLATION";
})(IntlErrorCode || (exports.IntlErrorCode = IntlErrorCode = {}));
var IntlError = /** @class */ (function (_super) {
    tslib_1.__extends(IntlError, _super);
    function IntlError(code, message, exception) {
        var _this = this;
        var err = exception
            ? exception instanceof Error
                ? exception
                : new Error(String(exception))
            : undefined;
        _this = _super.call(this, "[@formatjs/intl Error ".concat(code, "] ").concat(message, "\n").concat(err ? "\n".concat(err.message, "\n").concat(err.stack) : '')) || this;
        _this.code = code;
        // @ts-ignore just so we don't need to declare dep on @types/node
        if (typeof Error.captureStackTrace === 'function') {
            // @ts-ignore just so we don't need to declare dep on @types/node
            Error.captureStackTrace(_this, IntlError);
        }
        return _this;
    }
    return IntlError;
}(Error));
exports.IntlError = IntlError;
var UnsupportedFormatterError = /** @class */ (function (_super) {
    tslib_1.__extends(UnsupportedFormatterError, _super);
    function UnsupportedFormatterError(message, exception) {
        return _super.call(this, IntlErrorCode.UNSUPPORTED_FORMATTER, message, exception) || this;
    }
    return UnsupportedFormatterError;
}(IntlError));
exports.UnsupportedFormatterError = UnsupportedFormatterError;
var InvalidConfigError = /** @class */ (function (_super) {
    tslib_1.__extends(InvalidConfigError, _super);
    function InvalidConfigError(message, exception) {
        return _super.call(this, IntlErrorCode.INVALID_CONFIG, message, exception) || this;
    }
    return InvalidConfigError;
}(IntlError));
exports.InvalidConfigError = InvalidConfigError;
var MissingDataError = /** @class */ (function (_super) {
    tslib_1.__extends(MissingDataError, _super);
    function MissingDataError(message, exception) {
        return _super.call(this, IntlErrorCode.MISSING_DATA, message, exception) || this;
    }
    return MissingDataError;
}(IntlError));
exports.MissingDataError = MissingDataError;
var IntlFormatError = /** @class */ (function (_super) {
    tslib_1.__extends(IntlFormatError, _super);
    function IntlFormatError(message, locale, exception) {
        var _this = _super.call(this, IntlErrorCode.FORMAT_ERROR, "".concat(message, "\nLocale: ").concat(locale, "\n"), exception) || this;
        _this.locale = locale;
        return _this;
    }
    return IntlFormatError;
}(IntlError));
exports.IntlFormatError = IntlFormatError;
var MessageFormatError = /** @class */ (function (_super) {
    tslib_1.__extends(MessageFormatError, _super);
    function MessageFormatError(message, locale, descriptor, exception) {
        var _this = _super.call(this, "".concat(message, "\nMessageID: ").concat(descriptor === null || descriptor === void 0 ? void 0 : descriptor.id, "\nDefault Message: ").concat(descriptor === null || descriptor === void 0 ? void 0 : descriptor.defaultMessage, "\nDescription: ").concat(descriptor === null || descriptor === void 0 ? void 0 : descriptor.description, "\n"), locale, exception) || this;
        _this.descriptor = descriptor;
        _this.locale = locale;
        return _this;
    }
    return MessageFormatError;
}(IntlFormatError));
exports.MessageFormatError = MessageFormatError;
var MissingTranslationError = /** @class */ (function (_super) {
    tslib_1.__extends(MissingTranslationError, _super);
    function MissingTranslationError(descriptor, locale) {
        var _this = _super.call(this, IntlErrorCode.MISSING_TRANSLATION, "Missing message: \"".concat(descriptor.id, "\" for locale \"").concat(locale, "\", using ").concat(descriptor.defaultMessage
            ? "default message (".concat(typeof descriptor.defaultMessage === 'string'
                ? descriptor.defaultMessage
                : descriptor.defaultMessage
                    .map(function (e) { var _a; return (_a = e.value) !== null && _a !== void 0 ? _a : JSON.stringify(e); })
                    .join(), ")")
            : 'id', " as fallback.")) || this;
        _this.descriptor = descriptor;
        return _this;
    }
    return MissingTranslationError;
}(IntlError));
exports.MissingTranslationError = MissingTranslationError;
