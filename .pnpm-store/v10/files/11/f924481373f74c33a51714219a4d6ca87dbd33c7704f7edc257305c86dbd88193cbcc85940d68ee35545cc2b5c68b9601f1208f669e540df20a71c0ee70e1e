import type { AnyObject } from '../_util/type';
import type { SSEOutput, XStreamOptions } from '../x-stream';
interface RequestFnInfo<Message> extends AnyObject {
    messages?: Message[];
    message?: Message;
}
export type RequestFn<Message, Input, Output> = (info: Input, callbacks: {
    onUpdate: (chunk: Output) => void;
    onSuccess: (chunks: Output[]) => void;
    onError: (error: Error) => void;
    onStream?: (abortController: AbortController) => void;
}, transformStream?: XStreamOptions<Message>['transformStream']) => void;
export interface XAgentConfigPreset {
    baseURL: string;
    key: string;
    model: string;
    dangerouslyApiKey: string;
}
export interface XAgentConfigCustom<Message, Input, Output> {
    request?: RequestFn<Message, Input, Output>;
}
export type XAgentConfig<Message, Input, Output> = Partial<XAgentConfigPreset> & XAgentConfigCustom<Message, Input, Output>;
/** This is a wrap class to avoid developer can get too much on origin object */
export declare class XAgent<Message = string, Input = RequestFnInfo<Message>, Output = SSEOutput> {
    config: XAgentConfig<Message, Input, Output>;
    private requestingMap;
    constructor(config: XAgentConfig<Message, Input, Output>);
    private finishRequest;
    request: RequestFn<Message, Input, Output>;
    isRequesting(): boolean;
}
export default function useXAgent<Message = string, Input = RequestFnInfo<Message>, Output = SSEOutput>(config: XAgentConfig<Message, Input, Output>): readonly [XAgent<Message, Input, Output>];
export {};
