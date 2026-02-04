import { CustomFormats, Formatters, IntlFormatters, OnErrorFn } from './types';
export declare function getFormatter({ locale, formats, onError, }: {
    locale: string;
    formats: CustomFormats;
    onError: OnErrorFn;
}, getNumberFormat: Formatters['getNumberFormat'], options?: Parameters<IntlFormatters['formatNumber']>[1]): Intl.NumberFormat;
export declare function formatNumber(config: {
    locale: string;
    formats: CustomFormats;
    onError: OnErrorFn;
}, getNumberFormat: Formatters['getNumberFormat'], value: Parameters<IntlFormatters['formatNumber']>[0], options?: Parameters<IntlFormatters['formatNumber']>[1]): string;
export declare function formatNumberToParts(config: {
    locale: string;
    formats: CustomFormats;
    onError: OnErrorFn;
}, getNumberFormat: Formatters['getNumberFormat'], value: Parameters<IntlFormatters['formatNumber']>[0], options?: Parameters<IntlFormatters['formatNumber']>[1]): Intl.NumberFormatPart[];
