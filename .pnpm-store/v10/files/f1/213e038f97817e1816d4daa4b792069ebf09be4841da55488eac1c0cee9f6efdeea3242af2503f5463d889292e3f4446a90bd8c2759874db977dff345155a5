import { MessageFormatElement, parse, ParserOptions } from '@formatjs/icu-messageformat-parser';
import { Formats, Formatters, FormatXMLElementFn, MessageFormatPart, PrimitiveType } from './formatters';
export interface Options extends Omit<ParserOptions, 'locale'> {
    formatters?: Formatters;
}
export declare class IntlMessageFormat {
    private readonly ast;
    private readonly locales;
    private readonly resolvedLocale?;
    private readonly formatters;
    private readonly formats;
    private readonly message;
    private readonly formatterCache;
    constructor(message: string | MessageFormatElement[], locales?: string | string[], overrideFormats?: Partial<Formats>, opts?: Options);
    format: <T = void>(values?: Record<string, PrimitiveType | T | FormatXMLElementFn<T>>) => string | T | (string | T)[];
    formatToParts: <T>(values?: Record<string, PrimitiveType | T | FormatXMLElementFn<T>>) => MessageFormatPart<T>[];
    resolvedOptions: () => {
        locale: string;
    };
    getAst: () => MessageFormatElement[];
    private static memoizedDefaultLocale;
    static get defaultLocale(): string;
    static resolveLocale: (locales: string | string[]) => Intl.Locale | undefined;
    static __parse: typeof parse | undefined;
    static formats: Formats;
}
