import type { ForceRetryOptions } from '../core/constants.js';
/**
Internal error used to signal a forced retry from afterResponse hooks.
This is thrown when a user returns ky.retry() from an afterResponse hook.
*/
export declare class ForceRetryError extends Error {
    name: "ForceRetryError";
    customDelay: number | undefined;
    code: string | undefined;
    customRequest: Request | undefined;
    constructor(options?: ForceRetryOptions);
}
