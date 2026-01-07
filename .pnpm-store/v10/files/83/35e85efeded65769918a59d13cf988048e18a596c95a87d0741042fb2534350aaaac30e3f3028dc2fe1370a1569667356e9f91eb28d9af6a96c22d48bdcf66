import { requestMethods } from '../core/constants.js';
export const normalizeRequestMethod = (input) => requestMethods.includes(input) ? input.toUpperCase() : input;
const retryMethods = ['get', 'put', 'head', 'delete', 'options', 'trace'];
const retryStatusCodes = [408, 413, 429, 500, 502, 503, 504];
const retryAfterStatusCodes = [413, 429, 503];
const defaultRetryOptions = {
    limit: 2,
    methods: retryMethods,
    statusCodes: retryStatusCodes,
    afterStatusCodes: retryAfterStatusCodes,
    maxRetryAfter: Number.POSITIVE_INFINITY,
    backoffLimit: Number.POSITIVE_INFINITY,
    delay: attemptCount => 0.3 * (2 ** (attemptCount - 1)) * 1000,
    jitter: undefined,
    retryOnTimeout: false,
};
export const normalizeRetryOptions = (retry = {}) => {
    if (typeof retry === 'number') {
        return {
            ...defaultRetryOptions,
            limit: retry,
        };
    }
    if (retry.methods && !Array.isArray(retry.methods)) {
        throw new Error('retry.methods must be an array');
    }
    retry.methods &&= retry.methods.map(method => method.toLowerCase());
    if (retry.statusCodes && !Array.isArray(retry.statusCodes)) {
        throw new Error('retry.statusCodes must be an array');
    }
    const normalizedRetry = Object.fromEntries(Object.entries(retry).filter(([, value]) => value !== undefined));
    return {
        ...defaultRetryOptions,
        ...normalizedRetry,
    };
};
//# sourceMappingURL=normalize.js.map