type Callable = (...args: any[]) => any;
type CallableWithOverloadsWithAlternativeReturn<T, U> = T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
} ? {
    (...args: A1): R1 | U;
    (...args: A2): R2 | U;
    (...args: A3): R3 | U;
    (...args: A4): R4 | U;
    (...args: A5): R5 | U;
    (...args: A6): R6 | U;
    (...args: A7): R7 | U;
    (...args: A8): R8 | U;
    (...args: A9): R9 | U;
} : T;
type AttemptifyAsyncOptions<T> = {
    onError: (error: unknown) => T;
};
type AttemptifySyncOptions<T> = {
    onError: (error: unknown) => T;
};
type RetryifyAsyncOptions = {
    isRetriable: (error: unknown) => boolean;
};
type RetryifyAsyncCallOptions = {
    timeout: number;
    interval?: number;
};
type RetryifySyncOptions = {
    isRetriable: (error: unknown) => boolean;
};
type RetryifySyncCallOptions = {
    timeout: number;
};
export type { Callable, CallableWithOverloadsWithAlternativeReturn };
export type { AttemptifyAsyncOptions, AttemptifySyncOptions };
export type { RetryifyAsyncOptions, RetryifyAsyncCallOptions, RetryifySyncOptions, RetryifySyncCallOptions };
