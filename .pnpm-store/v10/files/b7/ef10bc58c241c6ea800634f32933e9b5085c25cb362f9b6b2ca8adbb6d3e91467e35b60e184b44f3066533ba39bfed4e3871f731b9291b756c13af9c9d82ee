/// <reference types="node" />
import type { ServerResponse } from 'http';
declare class UmiApiResponse {
    private _res;
    constructor(res: ServerResponse);
    status(statusCode: number): this;
    header(key: string, value: string): this;
    setCookie(key: string, value: string): this;
    end(data: any): this;
    text(data: string): this;
    html(data: string): this;
    json(data: any): this;
}
export default UmiApiResponse;
