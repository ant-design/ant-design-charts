import { IntlCache, IntlConfig, IntlShape } from './types';
export interface CreateIntlFn<T = string, C extends IntlConfig<T> = IntlConfig<T>, S extends IntlShape<T> = IntlShape<T>> {
    (config: C, cache?: IntlCache): S;
}
/**
 * Create intl object
 * @param config intl config
 * @param cache cache for formatter instances to prevent memory leak
 */
export declare function createIntl<T = string>(config: IntlConfig<T>, cache?: IntlCache): IntlShape<T>;
