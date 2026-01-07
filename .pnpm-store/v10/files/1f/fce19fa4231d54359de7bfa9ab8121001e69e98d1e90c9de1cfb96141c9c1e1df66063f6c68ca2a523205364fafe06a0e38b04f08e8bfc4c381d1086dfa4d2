import { FormatDateOptions, FormatDisplayNameOptions, FormatListOptions, FormatNumberOptions } from '@formatjs/intl';
import * as React from 'react';
import { IntlShape } from '../types';
type Formatter = {
    formatDate: FormatDateOptions;
    formatTime: FormatDateOptions;
    formatNumber: FormatNumberOptions;
    formatList: FormatListOptions;
    formatDisplayName: FormatDisplayNameOptions;
};
export declare const FormattedNumberParts: React.FC<Formatter['formatNumber'] & {
    value: Parameters<IntlShape['formatNumber']>[0];
    children(val: Intl.NumberFormatPart[]): React.ReactElement | null;
}>;
export declare const FormattedListParts: React.FC<Formatter['formatList'] & {
    value: Parameters<IntlShape['formatList']>[0];
    children(val: ReturnType<Intl.ListFormat['formatToParts']>): React.ReactElement | null;
}>;
export declare function createFormattedDateTimePartsComponent<Name extends 'formatDate' | 'formatTime'>(name: Name): React.FC<Formatter[Name] & {
    value: Parameters<IntlShape[Name]>[0];
    children(val: Intl.DateTimeFormatPart[]): React.ReactElement | null;
}>;
export declare function createFormattedComponent<Name extends keyof Formatter>(name: Name): React.FC<Formatter[Name] & {
    value: Parameters<IntlShape[Name]>[0];
    children?(val: string): React.ReactElement | null;
}>;
export {};
