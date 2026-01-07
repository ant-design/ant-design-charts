import { NumberFormatOptions } from '@formatjs/ecma402-abstract';
import { CustomFormats, Formatters, IntlCache, OnErrorFn, ResolvedIntlConfig } from './types';
export declare function invariant(condition: boolean, message: string, Err?: any): asserts condition;
export declare function filterProps<T extends Record<string, any>, K extends string>(props: T, allowlist: Array<K>, defaults?: Partial<T>): Pick<T, K>;
export declare const DEFAULT_INTL_CONFIG: Pick<ResolvedIntlConfig<any>, 'fallbackOnEmptyString' | 'formats' | 'messages' | 'timeZone' | 'defaultLocale' | 'defaultFormats' | 'onError' | 'onWarn'>;
export declare function createIntlCache(): IntlCache;
/**
 * Create intl formatters and populate cache
 * @param cache explicit cache to prevent leaking memory
 */
export declare function createFormatters(cache?: IntlCache): Formatters;
export declare function getNamedFormat<T extends keyof CustomFormats>(formats: CustomFormats, type: T, name: string, onError: OnErrorFn): NumberFormatOptions | Intl.DateTimeFormatOptions | Intl.RelativeTimeFormatOptions | undefined;
