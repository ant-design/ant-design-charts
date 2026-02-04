export interface ResolveLocaleResult {
    locale: string;
    dataLocale: string;
    [k: string]: any;
}
/**
 * https://tc39.es/ecma402/#sec-resolvelocale
 */
export declare function ResolveLocale<K extends string, D extends {
    [k in K]: any;
}>(availableLocales: Set<string> | readonly string[], requestedLocales: readonly string[], options: {
    localeMatcher: string;
    [k: string]: string;
}, relevantExtensionKeys: K[], localeData: Record<string, D | undefined>, getDefaultLocale: () => string): ResolveLocaleResult;
