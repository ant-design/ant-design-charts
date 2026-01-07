export interface XFetchMiddlewares {
    onRequest?: (...ags: Parameters<typeof fetch>) => Promise<Parameters<typeof fetch>>;
    onResponse?: (response: Response) => Promise<Response>;
}
export interface XFetchOptions extends RequestInit {
    /**
     * @description A typeof fetch function
     * @default globalThis.fetch
     */
    fetch?: typeof fetch;
    /**
     * @description Middleware for request and response
     */
    middlewares?: XFetchMiddlewares;
}
export type XFetchType = (baseURL: Parameters<typeof fetch>[0], options?: XFetchOptions) => Promise<Response>;
declare const XFetch: XFetchType;
export default XFetch;
