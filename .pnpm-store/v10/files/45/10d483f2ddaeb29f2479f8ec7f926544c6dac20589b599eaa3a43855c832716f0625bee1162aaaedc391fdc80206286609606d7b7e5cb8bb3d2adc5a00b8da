import { NumberFormatOptions } from '@formatjs/ecma402-abstract';
import { CustomFormatConfig, FormatDateOptions, MessageDescriptor } from '@formatjs/intl';
import * as React from 'react';
import { createIntl } from './src/components/createIntl';
import FormattedDateTimeRange from './src/components/dateTimeRange';
import injectIntl, { Context as IntlContext, Provider as RawIntlProvider, WithIntlProps, WrappedComponentProps } from './src/components/injectIntl';
import FormattedMessage from './src/components/message';
import FormattedPlural from './src/components/plural';
import IntlProvider from './src/components/provider';
import FormattedRelativeTime from './src/components/relative';
import useIntl from './src/components/useIntl';
import { IntlShape } from './src/types';
export { createIntlCache, CustomFormatConfig, CustomFormats, FormatDateOptions, FormatDisplayNameOptions, FormatListOptions, FormatNumberOptions, FormatPluralOptions, FormatRelativeTimeOptions, Formatters, IntlCache, IntlFormatters, InvalidConfigError, MessageDescriptor, MessageFormatError, MissingDataError, MissingTranslationError, IntlError as ReactIntlError, IntlErrorCode as ReactIntlErrorCode, UnsupportedFormatterError, } from '@formatjs/intl';
export { IntlConfig, IntlShape, ResolvedIntlConfig } from './src/types';
export { createIntl, FormattedDateTimeRange, FormattedMessage, FormattedPlural, FormattedRelativeTime, injectIntl, IntlContext, IntlProvider, RawIntlProvider, useIntl, WithIntlProps, WrappedComponentProps, };
export declare function defineMessages<K extends keyof any, T = MessageDescriptor, U extends Record<K, T> = Record<K, T>>(msgs: U): U;
export declare function defineMessage<T extends MessageDescriptor>(msg: T): T;
export declare const FormattedDate: React.FC<Intl.DateTimeFormatOptions & CustomFormatConfig & {
    value: string | number | Date | undefined;
    children?(formattedDate: string): React.ReactElement | null;
}>;
export declare const FormattedTime: React.FC<Intl.DateTimeFormatOptions & CustomFormatConfig & {
    value: string | number | Date | undefined;
    children?(formattedTime: string): React.ReactElement | null;
}>;
export declare const FormattedNumber: React.FC<Omit<NumberFormatOptions, 'localeMatcher'> & CustomFormatConfig<'number'> & {
    value: Parameters<IntlShape['formatNumber']>[0];
    children?(formattedNumber: string): React.ReactElement | null;
}>;
export declare const FormattedList: React.FC<Intl.ListFormatOptions & {
    value: readonly React.ReactNode[];
}>;
export declare const FormattedDisplayName: React.FC<Intl.DisplayNamesOptions & {
    value: string;
}>;
export declare const FormattedDateParts: React.FC<FormatDateOptions & {
    value: Parameters<Intl.DateTimeFormat['format']>[0] | string;
    children(val: Intl.DateTimeFormatPart[]): React.ReactElement | null;
}>;
export declare const FormattedTimeParts: React.FC<FormatDateOptions & {
    value: Parameters<Intl.DateTimeFormat['format']>[0] | string;
    children(val: Intl.DateTimeFormatPart[]): React.ReactElement | null;
}>;
export type { MessageFormatElement } from '@formatjs/icu-messageformat-parser';
export type { PrimitiveType } from 'intl-messageformat';
export { FormattedListParts, FormattedNumberParts, } from './src/components/createFormattedComponent';
