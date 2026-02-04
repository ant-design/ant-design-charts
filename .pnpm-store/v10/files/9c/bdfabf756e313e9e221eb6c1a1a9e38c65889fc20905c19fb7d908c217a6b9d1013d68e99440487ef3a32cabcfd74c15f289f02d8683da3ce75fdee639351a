/// <reference types="node" />
/// <reference types="node" />
import type { IncomingMessage } from 'http';
import type { IRoute } from '../../types';
declare class UmiApiRequest {
    private _req;
    private readonly _params;
    constructor(req: IncomingMessage, apiRoutes: IRoute[]);
    get params(): {
        [key: string]: string;
    };
    private _body;
    get body(): any;
    get headers(): import("http").IncomingHttpHeaders;
    get method(): string | undefined;
    get query(): {
        [key: string]: string | string[];
    };
    get cookies(): {
        [key: string]: string;
    } | undefined;
    get url(): string | undefined;
    get pathName(): string | undefined;
    readBody(): Promise<void>;
}
export declare function parseMultipart(body: Buffer, boundary: string): {
    [key: string]: any;
};
export declare function parseUrlEncoded(body: string): {
    [key: string]: any;
};
export default UmiApiRequest;
