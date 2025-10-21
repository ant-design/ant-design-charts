import XStream from "../x-stream";
import xFetch from "./x-fetch";

/**
 * Compatible with the parameters of OpenAI's chat.completions.create,
 * with plans to support more parameters and adapters in the future
 */

class XRequestClass {
  baseURL;
  model;
  defaultHeaders;
  customOptions;
  constructor(options) {
    const {
      baseURL,
      model,
      dangerouslyApiKey,
      ...customOptions
    } = options;
    this.baseURL = options.baseURL;
    this.model = options.model;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      ...(options.dangerouslyApiKey && {
        Authorization: options.dangerouslyApiKey
      })
    };
    this.customOptions = customOptions;
  }
  static init(options) {
    if (!options.baseURL || typeof options.baseURL !== 'string') throw new Error('The baseURL is not valid!');
    return new XRequestClass(options);
  }
  create = async (params, callbacks, transformStream) => {
    const abortController = new AbortController();
    const requestInit = {
      method: 'POST',
      body: JSON.stringify({
        model: this.model,
        ...params
      }),
      headers: this.defaultHeaders,
      signal: abortController.signal
    };
    callbacks?.onStream?.(abortController);
    try {
      const response = await xFetch(this.baseURL, {
        fetch: this.customOptions.fetch,
        ...requestInit
      });
      if (transformStream) {
        await this.customResponseHandler(response, callbacks, transformStream);
        return;
      }
      const contentType = response.headers.get('content-type') || '';
      const mimeType = contentType.split(';')[0].trim();
      switch (mimeType) {
        /** SSE */
        case 'text/event-stream':
          await this.sseResponseHandler(response, callbacks);
          break;

        /** JSON */
        case 'application/json':
          await this.jsonResponseHandler(response, callbacks);
          break;
        default:
          throw new Error(`The response content-type: ${contentType} is not support!`);
      }
    } catch (error) {
      const err = error instanceof Error ? error : new Error('Unknown error!');
      callbacks?.onError?.(err);
      throw err;
    }
  };
  customResponseHandler = async (response, callbacks, transformStream) => {
    const chunks = [];
    for await (const chunk of XStream({
      readableStream: response.body,
      transformStream
    })) {
      chunks.push(chunk);
      callbacks?.onUpdate?.(chunk);
    }
    callbacks?.onSuccess?.(chunks);
  };
  sseResponseHandler = async (response, callbacks) => {
    const chunks = [];
    const stream = XStream({
      readableStream: response.body
    });
    for await (const chunk of stream) {
      chunks.push(chunk);
      callbacks?.onUpdate?.(chunk);
    }
    callbacks?.onSuccess?.(chunks);
  };
  jsonResponseHandler = async (response, callbacks) => {
    const chunk = await response.json();
    callbacks?.onUpdate?.(chunk);
    callbacks?.onSuccess?.([chunk]);
  };
}
const XRequest = XRequestClass.init;
export default XRequest;