import { NumberFormatOptions } from '@formatjs/ecma402-abstract';
import { MessageFormatElement } from '@formatjs/icu-messageformat-parser';
declare global {
    namespace FormatjsIntl {
        interface Message {
        }
        interface IntlConfig {
        }
        interface Formats {
        }
    }
}
type Format<Source = string> = Source extends keyof FormatjsIntl.Formats ? FormatjsIntl.Formats[Source] : string;
export interface Formats {
    number: Record<Format<'number'>, NumberFormatOptions>;
    date: Record<Format<'date'>, Intl.DateTimeFormatOptions>;
    time: Record<Format<'time'>, Intl.DateTimeFormatOptions>;
}
export interface FormatterCache {
    number: Record<string, NumberFormatOptions>;
    dateTime: Record<string, Intl.DateTimeFormat>;
    pluralRules: Record<string, Intl.PluralRules>;
}
export interface Formatters {
    getNumberFormat(locals?: string | string[], opts?: NumberFormatOptions): Intl.NumberFormat;
    getDateTimeFormat(...args: ConstructorParameters<typeof Intl.DateTimeFormat>): Intl.DateTimeFormat;
    getPluralRules(...args: ConstructorParameters<typeof Intl.PluralRules>): Intl.PluralRules;
}
export declare enum PART_TYPE {
    literal = 0,
    object = 1
}
export interface LiteralPart {
    type: PART_TYPE.literal;
    value: string;
}
export interface ObjectPart<T = any> {
    type: PART_TYPE.object;
    value: T;
}
export type MessageFormatPart<T> = LiteralPart | ObjectPart<T>;
export type PrimitiveType = string | number | boolean | null | undefined | Date;
export declare function isFormatXMLElementFn<T>(el: PrimitiveType | T | FormatXMLElementFn<T>): el is FormatXMLElementFn<T>;
export declare function formatToParts<T>(els: MessageFormatElement[], locales: string | string[], formatters: Formatters, formats: Formats, values?: Record<string, PrimitiveType | T | FormatXMLElementFn<T>>, currentPluralValue?: number, originalMessage?: string): MessageFormatPart<T>[];
export type FormatXMLElementFn<T, R = string | T | (string | T)[]> = (parts: Array<string | T>) => R;
export {};
