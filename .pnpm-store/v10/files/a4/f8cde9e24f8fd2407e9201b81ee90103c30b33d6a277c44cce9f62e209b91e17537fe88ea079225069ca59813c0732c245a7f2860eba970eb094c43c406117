export const supportsRequestStreams = (() => {
    let duplexAccessed = false;
    let hasContentType = false;
    const supportsReadableStream = typeof globalThis.ReadableStream === 'function';
    const supportsRequest = typeof globalThis.Request === 'function';
    if (supportsReadableStream && supportsRequest) {
        try {
            hasContentType = new globalThis.Request('https://empty.invalid', {
                body: new globalThis.ReadableStream(),
                method: 'POST',
                // @ts-expect-error - Types are outdated.
                get duplex() {
                    duplexAccessed = true;
                    return 'half';
                },
            }).headers.has('Content-Type');
        }
        catch (error) {
            // QQBrowser on iOS throws "unsupported BodyInit type" error (see issue #581)
            if (error instanceof Error && error.message === 'unsupported BodyInit type') {
                return false;
            }
            throw error;
        }
    }
    return duplexAccessed && !hasContentType;
})();
export const supportsAbortController = typeof globalThis.AbortController === 'function';
export const supportsAbortSignal = typeof globalThis.AbortSignal === 'function' && typeof globalThis.AbortSignal.any === 'function';
export const supportsResponseStreams = typeof globalThis.ReadableStream === 'function';
export const supportsFormData = typeof globalThis.FormData === 'function';
export const requestMethods = ['get', 'post', 'put', 'patch', 'head', 'delete'];
const validate = () => undefined;
validate();
export const responseTypes = {
    json: 'application/json',
    text: 'text/*',
    formData: 'multipart/form-data',
    arrayBuffer: '*/*',
    blob: '*/*',
    // Supported in modern Fetch implementations (for example, browsers and recent Node.js/undici).
    // We still feature-check at runtime before exposing the shortcut.
    bytes: '*/*',
};
// The maximum value of a 32bit int (see issue #117)
export const maxSafeTimeout = 2_147_483_647;
// Size in bytes of a typical form boundary, used to help estimate upload size
export const usualFormBoundarySize = new TextEncoder().encode('------WebKitFormBoundaryaxpyiPgbbPti10Rw').length;
export const stop = Symbol('stop');
/**
Marker returned by ky.retry() to signal a forced retry from afterResponse hooks.
*/
export class RetryMarker {
    options;
    constructor(options) {
        this.options = options;
    }
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
export const retry = (options) => new RetryMarker(options);
export const kyOptionKeys = {
    json: true,
    parseJson: true,
    stringifyJson: true,
    searchParams: true,
    prefixUrl: true,
    retry: true,
    timeout: true,
    hooks: true,
    throwHttpErrors: true,
    onDownloadProgress: true,
    onUploadProgress: true,
    fetch: true,
    context: true,
};
// Vendor-specific fetch options that should always be passed to fetch()
// even if they appear on the Request object due to vendor patching.
// See: https://github.com/sindresorhus/ky/issues/541
export const vendorSpecificOptions = {
    next: true, // Next.js cache revalidation (revalidate, tags)
};
// Standard RequestInit options that should NOT be passed separately to fetch()
// because they're already applied to the Request object.
// Note: `dispatcher` and `priority` are NOT included here - they're fetch-only
// options that the Request constructor doesn't accept, so they need to be passed
// separately to fetch().
export const requestOptionsRegistry = {
    method: true,
    headers: true,
    body: true,
    mode: true,
    credentials: true,
    cache: true,
    redirect: true,
    referrer: true,
    referrerPolicy: true,
    integrity: true,
    keepalive: true,
    signal: true,
    window: true,
    duplex: true,
};
//# sourceMappingURL=constants.js.map