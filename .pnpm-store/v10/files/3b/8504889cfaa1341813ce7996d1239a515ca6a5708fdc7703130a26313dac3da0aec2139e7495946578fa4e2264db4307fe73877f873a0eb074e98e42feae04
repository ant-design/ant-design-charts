import { IncomingMessage, ServerResponse } from "http";
import send from "send";
import { Duplex, Writable } from "stream";
import { BundleOptions } from "./types";
import { WebpackConfig } from "./webpackCompat";
export declare function serve(bundleOptions: BundleOptions, projectPath?: string, rootPath?: string, serverOptions?: StartServerOptions): Promise<void>;
export declare function serve(webpackConfig: WebpackConfig, projectPath?: string, rootPath?: string, serverOptions?: StartServerOptions): Promise<void>;
export interface SelfSignedCertificate {
    key: string;
    cert: string;
    rootCA?: string;
}
export interface StartServerOptions {
    port: number;
    https?: boolean;
    hostname?: string;
    selfSignedCertificate?: SelfSignedCertificate;
}
export type RequestHandler = (req: IncomingMessage, res: ServerResponse) => Promise<void>;
export type UpgradeHandler = (req: IncomingMessage, socket: Duplex, head: Buffer) => Promise<void>;
export type ServerInitResult = {
    requestHandler: RequestHandler;
    upgradeHandler: UpgradeHandler;
    closeUpgraded: () => void;
};
export declare function startServer(serverOptions: StartServerOptions, bundleOptions: BundleOptions, projectPath: string, rootPath?: string): Promise<void>;
export declare function initialize(bundleOptions: BundleOptions, projectPath: string, rootPath?: string): Promise<ServerInitResult>;
export declare function pipeToNodeResponse(readable: ReadableStream<Uint8Array>, res: ServerResponse, waitUntilForEnd?: Promise<unknown>): Promise<void>;
export declare function createAbortController(response: Writable): AbortController;
export declare function isAbortError(e: any): e is Error & {
    name: "AbortError";
};
export declare const ResponseAbortedName = "ResponseAborted";
export declare class ResponseAborted extends Error {
    readonly name = "ResponseAborted";
}
export declare class DetachedPromise<T = any> {
    readonly resolve: (value: T | PromiseLike<T>) => void;
    readonly reject: (reason: any) => void;
    readonly promise: Promise<T>;
    constructor();
}
export declare function serveStatic(req: IncomingMessage, res: ServerResponse, path: string, opts?: Parameters<typeof send>[2]): Promise<void>;
export declare function formatHostname(hostname: string): string;
