interface MessagePayload {
    [key: string]: any;
}
interface RequestData {
    type: string;
    payload: MessagePayload;
}
export declare class RDC {
    private port;
    private pending;
    constructor(port: MessagePort);
    request<TResult = null>({ type, payload }: RequestData): Promise<TResult | null>;
    private messageListener;
    private cleanResult;
}
export {};
