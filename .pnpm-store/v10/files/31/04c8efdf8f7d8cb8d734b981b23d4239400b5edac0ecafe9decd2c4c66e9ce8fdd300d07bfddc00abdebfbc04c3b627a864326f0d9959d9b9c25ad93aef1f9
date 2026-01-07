import type { RetryOptions } from '../types/retry.js';
export declare const normalizeRequestMethod: (input: string) => string;
type InternalRetryOptions = Required<Omit<RetryOptions, 'shouldRetry'>> & Pick<RetryOptions, 'shouldRetry'>;
export declare const normalizeRetryOptions: (retry?: number | RetryOptions) => InternalRetryOptions;
export {};
