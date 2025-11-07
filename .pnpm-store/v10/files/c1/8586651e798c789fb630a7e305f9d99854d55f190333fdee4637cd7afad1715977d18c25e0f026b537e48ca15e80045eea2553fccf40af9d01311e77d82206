import type { SSEOutput, XStreamOptions } from '../x-stream';
import type { XFetchOptions } from './x-fetch';
import type { AnyObject } from '../_util/type';
export interface XRequestBaseOptions {
    /**
     * @description Base URL, e.g., 'https://api.example.com/v1/chat'
     */
    baseURL: string;
    /**
     * @description Model name, e.g., 'gpt-3.5-turbo'
     */
    model?: string;
    /**
     * @warning 🔥🔥 Its dangerously!
     *
     * Enabling the dangerouslyApiKey option can be dangerous because it exposes
     * your secret API credentials in the client-side code. Web browsers are inherently
     * less secure than server environments, any user with access to the browser can
     * potentially inspect, extract, and misuse these credentials. This could lead to
     * unauthorized access using your credentials and potentially compromise sensitive
     * data or functionality.
     */
    dangerouslyApiKey?: string;
}
interface XRequestCustomOptions {
    /**
     * @description Custom fetch
     */
    fetch?: XFetchOptions['fetch'];
}
export type XRequestOptions = XRequestBaseOptions & XRequestCustomOptions;
type XRequestMessageContent = string | AnyObject;
interface XRequestMessage extends AnyObject {
    role?: string;
    content?: XRequestMessageContent;
}
/**
 * Compatible with the parameters of OpenAI's chat.completions.create,
 * with plans to support more parameters and adapters in the future
 */
export interface XRequestParams {
    /**
     * @description Model name, e.g., 'gpt-3.5-turbo'
     * @default XRequestOptions.model
     */
    model?: string;
    /**
     * @description Indicates whether to use streaming for the response
     */
    stream?: boolean;
    /**
     * @description The messages to be sent to the model
     */
    messages?: XRequestMessage[];
}
export interface XRequestCallbacks<Output> {
    /**
     * @description Callback when the request is successful
     */
    onSuccess: (chunks: Output[]) => void;
    /**
     * @description Callback when the request fails
     */
    onError: (error: Error) => void;
    /**
     * @description Callback when the request is updated
     */
    onUpdate: (chunk: Output) => void;
    /**
     * @description Callback monitoring and control the stream
     */
    onStream?: (abortController: AbortController) => void;
}
export type XRequestFunction<Input = AnyObject, Output = SSEOutput> = (params: XRequestParams & Input, callbacks: XRequestCallbacks<Output>, transformStream?: XStreamOptions<Output>['transformStream']) => Promise<void>;
declare class XRequestClass {
    readonly baseURL: string;
    readonly model: string | undefined;
    private defaultHeaders;
    private customOptions;
    private constructor();
    static init(options: XRequestOptions): XRequestClass;
    create: <Input = AnyObject, Output = Partial<Record<import("../x-stream").SSEFields, any>>>(params: XRequestParams & Input, callbacks?: XRequestCallbacks<Output>, transformStream?: XStreamOptions<Output>['transformStream']) => Promise<void>;
    private customResponseHandler;
    private sseResponseHandler;
    private jsonResponseHandler;
}
declare const XRequest: typeof XRequestClass.init;
export default XRequest;
