/// <reference types="node" />
import { RequestListener } from 'http';
import { HttpsServerOptions } from './types';
export type { Server as SpdyServer } from 'spdy';
export declare function resolveHttpsConfig(httpsConfig: HttpsServerOptions): Promise<{
    key: string;
    cert: string;
}>;
export declare function createHttpsServer(app: RequestListener, httpsConfig: HttpsServerOptions): Promise<import("spdy").server.Server>;
