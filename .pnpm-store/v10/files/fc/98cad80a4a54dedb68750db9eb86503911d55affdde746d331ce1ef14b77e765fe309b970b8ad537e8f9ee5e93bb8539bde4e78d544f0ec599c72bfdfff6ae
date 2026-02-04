/// <reference lib="webworker" />
import type { RequestHandler } from '@umijs/bundler-utils/compiled/express';
import React from 'react';
import type { IhtmlPageOpts, UmiRequest } from './types';
interface RouteLoaders {
    [key: string]: () => Promise<any>;
}
export declare type ServerInsertedHTMLHook = (callbacks: () => React.ReactNode) => void;
interface CreateRequestServerlessOptions {
    /**
     * folder path for `build-manifest.json`
     */
    sourceDir?: string;
}
interface CreateRequestHandlerOptions extends CreateRequestServerlessOptions {
    routesWithServerLoader: RouteLoaders;
    pluginManager: any;
    manifest: ((sourceDir?: string) => {
        assets: Record<string, string>;
    }) | {
        assets: Record<string, string>;
    };
    getRoutes: (PluginManager: any) => any;
    getClientRootComponent: (PluginManager: any) => any;
    createHistory: (opts: any) => any;
    helmetContext?: any;
    reactVersion: string;
    ServerInsertedHTMLContext: React.Context<ServerInsertedHTMLHook | null>;
    htmlPageOpts: IhtmlPageOpts;
    __INTERNAL_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
        pureApp: boolean;
        pureHtml: boolean;
    };
    mountElementId: string;
    basename?: string;
    useStream?: boolean;
}
export declare function createMarkupGenerator(opts: CreateRequestHandlerOptions): (url: string) => Promise<unknown>;
declare type IExpressRequestHandlerArgs = Parameters<RequestHandler>;
declare type IWorkerRequestHandlerArgs = [
    ev: FetchEvent,
    opts?: {
        modifyResponse?: (res: Response) => Promise<Response> | Response;
    }
];
export default function createRequestHandler(opts: CreateRequestHandlerOptions): (...args: IExpressRequestHandlerArgs | IWorkerRequestHandlerArgs) => Promise<void>;
export declare function createUmiHandler(opts: CreateRequestHandlerOptions): (req: UmiRequest, params?: CreateRequestHandlerOptions) => Promise<NodeJS.ReadableStream>;
export declare function createUmiServerLoader(opts: CreateRequestHandlerOptions): (req: UmiRequest) => Promise<any>;
export declare function createAppRootElement(opts: CreateRequestHandlerOptions): (...args: IExpressRequestHandlerArgs | IWorkerRequestHandlerArgs) => Promise<() => React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined>;
export {};
