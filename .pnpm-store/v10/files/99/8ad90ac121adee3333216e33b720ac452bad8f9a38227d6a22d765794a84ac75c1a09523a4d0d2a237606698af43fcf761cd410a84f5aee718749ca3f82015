import { type KyOptionsRegistry } from '../types/options.js';
export declare const supportsRequestStreams: boolean;
export declare const supportsAbortController: boolean;
export declare const supportsAbortSignal: boolean;
export declare const supportsResponseStreams: boolean;
export declare const supportsFormData: boolean;
export declare const requestMethods: readonly ["get", "post", "put", "patch", "head", "delete"];
export declare const responseTypes: {
    readonly json: "application/json";
    readonly text: "text/*";
    readonly formData: "multipart/form-data";
    readonly arrayBuffer: "*/*";
    readonly blob: "*/*";
    readonly bytes: "*/*";
};
export declare const maxSafeTimeout = 2147483647;
export declare const usualFormBoundarySize: number;
export declare const stop: unique symbol;
/**
Options for forcing a retry via `ky.retry()`.
*/
export type ForceRetryOptions = {
    /**
    Custom delay in milliseconds before retrying.

    If not provided, uses the default retry delay calculation based on `retry.delay` configuration.

    **Note:** Custom delays bypass jitter and `backoffLimit`. This is intentional, as custom delays often come from server responses (e.g., `Retry-After` headers) and should be respected exactly as specified.
    */
    delay?: number;
    /**
    Error code for the retry.

    This machine-readable identifier will be included in the error message passed to `beforeRetry` hooks, allowing you to distinguish between different types of forced retries.

    @example
    ```
    return ky.retry({code: 'RATE_LIMIT'});
    // Resulting error message: 'Forced retry: RATE_LIMIT'
    ```
    */
    code?: string;
    /**
    Original error that caused the retry.

    This allows you to preserve the error chain when forcing a retry based on caught exceptions. The error will be set as the `cause` of the `ForceRetryError`, enabling proper error chain traversal.

    @example
    ```
    try {
        const data = await response.clone().json();
        validateBusinessLogic(data);
    } catch (error) {
        return ky.retry({
            code: 'VALIDATION_FAILED',
            cause: error  // Preserves original error in chain
        });
    }
    ```
    */
    cause?: Error;
    /**
    Custom request to use for the retry.

    This allows you to modify or completely replace the request during a forced retry. The custom request becomes the starting point for the retry - `beforeRetry` hooks can still further modify it if needed.

    **Note:** The custom request's `signal` will be replaced with Ky's managed signal to handle timeouts and user-provided abort signals correctly. If the original request body has been consumed, you must provide a new body or clone the request before consuming.

    @example
    ```
    // Fallback to a different endpoint
    return ky.retry({
        request: new Request('https://backup-api.com/endpoint', {
            method: request.method,
            headers: request.headers,
        }),
        code: 'BACKUP_ENDPOINT'
    });

    // Retry with refreshed authentication token
    const data = await response.clone().json();
    return ky.retry({
        request: new Request(request, {
            headers: {
                ...Object.fromEntries(request.headers),
                'Authorization': `Bearer ${data.newToken}`
            }
        }),
        code: 'TOKEN_REFRESHED'
    });
    ```
    */
    request?: Request;
};
/**
Marker returned by ky.retry() to signal a forced retry from afterResponse hooks.
*/
export declare class RetryMarker {
    options?: ForceRetryOptions | undefined;
    constructor(options?: ForceRetryOptions | undefined);
}
/**
Force a retry from an `afterResponse` hook.

This allows you to retry a request based on the response content, even if the response has a successful status code. The retry will respect the `retry.limit` option and skip the `shouldRetry` check. The forced retry is observable in `beforeRetry` hooks, where the error will be a `ForceRetryError`.

@param options - Optional configuration for the retry.

@example
```
import ky, {isForceRetryError} from 'ky';

const api = ky.extend({
    hooks: {
        afterResponse: [
            async (request, options, response) => {
                // Retry based on response body content
                if (response.status === 200) {
                    const data = await response.clone().json();

                    // Simple retry with default delay
                    if (data.error?.code === 'TEMPORARY_ERROR') {
                        return ky.retry();
                    }

                    // Retry with custom delay from API response
                    if (data.error?.code === 'RATE_LIMIT') {
                        return ky.retry({
                            delay: data.error.retryAfter * 1000,
                            code: 'RATE_LIMIT'
                        });
                    }

                    // Retry with a modified request (e.g., fallback endpoint)
                    if (data.error?.code === 'FALLBACK_TO_BACKUP') {
                        return ky.retry({
                            request: new Request('https://backup-api.com/endpoint', {
                                method: request.method,
                                headers: request.headers,
                            }),
                            code: 'BACKUP_ENDPOINT'
                        });
                    }

                    // Retry with refreshed authentication
                    if (data.error?.code === 'TOKEN_REFRESH' && data.newToken) {
                        return ky.retry({
                            request: new Request(request, {
                                headers: {
                                    ...Object.fromEntries(request.headers),
                                    'Authorization': `Bearer ${data.newToken}`
                                }
                            }),
                            code: 'TOKEN_REFRESHED'
                        });
                    }

                    // Retry with cause to preserve error chain
                    try {
                        validateResponse(data);
                    } catch (error) {
                        return ky.retry({
                            code: 'VALIDATION_FAILED',
                            cause: error
                        });
                    }
                }
            }
        ],
        beforeRetry: [
            ({error, retryCount}) => {
                // Observable in beforeRetry hooks
                if (isForceRetryError(error)) {
                    console.log(`Forced retry #${retryCount}: ${error.message}`);
                    // Example output: "Forced retry #1: Forced retry: RATE_LIMIT"
                }
            }
        ]
    }
});

const response = await api.get('https://example.com/api');
```
*/
export declare const retry: (options?: ForceRetryOptions) => RetryMarker;
export declare const kyOptionKeys: KyOptionsRegistry;
export declare const vendorSpecificOptions: {
    readonly next: true;
};
export declare const requestOptionsRegistry: {
    readonly method: true;
    readonly headers: true;
    readonly body: true;
    readonly mode: true;
    readonly credentials: true;
    readonly cache: true;
    readonly redirect: true;
    readonly referrer: true;
    readonly referrerPolicy: true;
    readonly integrity: true;
    readonly keepalive: true;
    readonly signal: true;
    readonly window: true;
    readonly duplex: true;
};
