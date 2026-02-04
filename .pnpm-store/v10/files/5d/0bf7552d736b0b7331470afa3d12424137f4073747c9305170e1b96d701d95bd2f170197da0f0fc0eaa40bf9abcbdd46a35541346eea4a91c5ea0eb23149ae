interface AbortSignalEventTargetAddOptions {
    once: boolean;
}
export interface AbortSignalEventTarget {
    addEventListener: (name: 'abort', listener: () => void, options?: AbortSignalEventTargetAddOptions) => void;
    removeEventListener: (name: 'abort', listener: () => void) => void;
    aborted?: boolean;
    reason?: unknown;
}
export interface AbortSignalEventEmitter {
    off: (name: 'abort', listener: () => void) => void;
    once: (name: 'abort', listener: () => void) => void;
}
export type AbortSignalAny = AbortSignalEventTarget | AbortSignalEventEmitter;
export declare class AbortError extends Error {
    constructor(reason?: AbortSignalEventTarget['reason']);
    get name(): string;
}
export declare function onabort(abortSignal: AbortSignalAny, listener: () => void): void;
export {};
