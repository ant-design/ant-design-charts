/**
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#fields
 */
export type SSEFields = 'data' | 'event' | 'id' | 'retry';
/**
 * @example
 * const sseObject = {
 *    event: 'delta',
 *    data: '{ key: "world!" }',
 * };
 */
export type SSEOutput = Partial<Record<SSEFields, any>>;
export interface XStreamOptions<Output> {
    /**
     * @description Readable stream of binary data
     * @link https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream
     */
    readableStream: ReadableStream<Uint8Array>;
    /**
     * @description Support customizable transformStream to transform streams
     * @default sseTransformStream
     * @link https://developer.mozilla.org/en-US/docs/Web/API/TransformStream
     */
    transformStream?: TransformStream<string, Output>;
}
type XReadableStream<R = SSEOutput> = ReadableStream<R> & AsyncGenerator<R>;
/**
 * @description Transform Uint8Array binary stream to {@link SSEOutput} by default
 * @warning The `XStream` only support the `utf-8` encoding. More encoding support maybe in the future.
 */
declare function XStream<Output = SSEOutput>(options: XStreamOptions<Output>): XReadableStream<Output>;
export default XStream;
