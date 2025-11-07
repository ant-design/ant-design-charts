export declare const UNICODE_EXTENSION_SEQUENCE_REGEX: RegExp;
export declare function invariant(condition: boolean, message: string, Err?: any): asserts condition;
export declare function findMatchingDistance(desired: string, supported: string): number;
interface LocaleMatchingResult {
    distances: Record<string, Record<string, number>>;
    matchedSupportedLocale?: string;
    matchedDesiredLocale?: string;
}
export declare function findBestMatch(requestedLocales: readonly string[], supportedLocales: readonly string[], threshold?: number): LocaleMatchingResult;
export {};
