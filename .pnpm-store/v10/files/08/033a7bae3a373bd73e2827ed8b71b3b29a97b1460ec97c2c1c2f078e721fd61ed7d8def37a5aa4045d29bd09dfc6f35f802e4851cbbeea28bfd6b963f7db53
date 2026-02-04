import { CustomFormats, Formatters, MessageDescriptor, OnErrorFn } from './types';
import { MessageFormatElement } from '@formatjs/icu-messageformat-parser';
import { FormatXMLElementFn, Formatters as IntlMessageFormatFormatters, Options, PrimitiveType } from 'intl-messageformat';
export type FormatMessageFn<T> = ({ locale, formats, messages, defaultLocale, defaultFormats, fallbackOnEmptyString, onError, timeZone, defaultRichTextElements, }: {
    locale: string;
    timeZone?: string;
    formats: CustomFormats;
    messages: Record<string, string> | Record<string, MessageFormatElement[]>;
    defaultLocale: string;
    defaultFormats: CustomFormats;
    defaultRichTextElements?: Record<string, FormatXMLElementFn<T>>;
    fallbackOnEmptyString?: boolean;
    onError: OnErrorFn;
}, state: IntlMessageFormatFormatters & Pick<Formatters, 'getMessageFormat'>, messageDescriptor: MessageDescriptor, values?: Record<string, PrimitiveType | T | FormatXMLElementFn<T>>, opts?: Options) => T extends string ? string : Array<T | string> | string | T;
export declare const formatMessage: FormatMessageFn<any>;
