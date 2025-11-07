"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbortError = void 0;
exports.onabort = onabort;
class AbortError extends Error {
    constructor(reason) {
        // TS does not recognizes the cause clause
        // @ts-expect-error
        super('The task has been aborted', { cause: reason });
    }
    get name() {
        return 'AbortError';
    }
}
exports.AbortError = AbortError;
function onabort(abortSignal, listener) {
    if ('addEventListener' in abortSignal) {
        abortSignal.addEventListener('abort', listener, { once: true });
    }
    else {
        abortSignal.once('abort', listener);
    }
}
//# sourceMappingURL=abort.js.map