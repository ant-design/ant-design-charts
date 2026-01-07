import { MessageDescriptor } from './types';
export declare enum IntlErrorCode {
    FORMAT_ERROR = "FORMAT_ERROR",
    UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER",
    INVALID_CONFIG = "INVALID_CONFIG",
    MISSING_DATA = "MISSING_DATA",
    MISSING_TRANSLATION = "MISSING_TRANSLATION"
}
export declare class IntlError<T extends IntlErrorCode = IntlErrorCode.FORMAT_ERROR> extends Error {
    readonly code: T;
    constructor(code: T, message: string, exception?: Error | unknown);
}
export declare class UnsupportedFormatterError extends IntlError<IntlErrorCode.UNSUPPORTED_FORMATTER> {
    constructor(message: string, exception?: Error | unknown);
}
export declare class InvalidConfigError extends IntlError<IntlErrorCode.INVALID_CONFIG> {
    constructor(message: string, exception?: Error | unknown);
}
export declare class MissingDataError extends IntlError<IntlErrorCode.MISSING_DATA> {
    constructor(message: string, exception?: Error | unknown);
}
export declare class IntlFormatError extends IntlError<IntlErrorCode.FORMAT_ERROR> {
    readonly descriptor?: MessageDescriptor;
    readonly locale: string;
    constructor(message: string, locale: string, exception?: Error | unknown);
}
export declare class MessageFormatError extends IntlFormatError {
    readonly descriptor?: MessageDescriptor;
    readonly locale: string;
    constructor(message: string, locale: string, descriptor?: MessageDescriptor, exception?: Error | unknown);
}
export declare class MissingTranslationError extends IntlError<IntlErrorCode.MISSING_TRANSLATION> {
    readonly descriptor?: MessageDescriptor;
    constructor(descriptor: MessageDescriptor, locale: string);
}
