import { NonError } from './NonError.js';
/**
Internal error used to signal a forced retry from afterResponse hooks.
This is thrown when a user returns ky.retry() from an afterResponse hook.
*/
export class ForceRetryError extends Error {
    name = 'ForceRetryError';
    customDelay;
    code;
    customRequest;
    constructor(options) {
        // Runtime protection: wrap non-Error causes in NonError
        // TypeScript type is Error for guidance, but JS users can pass anything
        const cause = options?.cause
            ? (options.cause instanceof Error ? options.cause : new NonError(options.cause))
            : undefined;
        super(options?.code ? `Forced retry: ${options.code}` : 'Forced retry', cause ? { cause } : undefined);
        this.customDelay = options?.delay;
        this.code = options?.code;
        this.customRequest = options?.request;
    }
}
//# sourceMappingURL=ForceRetryError.js.map