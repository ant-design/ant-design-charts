import { ModuleInfo, GlobalModuleInfo } from '@module-federation/sdk';
import { Options, UserOptions, PreloadAssets, PreloadOptions, PreloadRemoteArgs, Remote, RemoteInfo, RemoteEntryExports, CallFrom } from '../type';
import { FederationHost } from '../core';
import { PluginSystem, AsyncHook, AsyncWaterfallHook, SyncHook, SyncWaterfallHook } from '../utils/hooks';
import { Module, ModuleOptions } from '../module';
export interface LoadRemoteMatch {
    id: string;
    pkgNameOrAlias: string;
    expose: string;
    remote: Remote;
    options: Options;
    origin: FederationHost;
    remoteInfo: RemoteInfo;
    remoteSnapshot?: ModuleInfo;
}
export declare class RemoteHandler {
    host: FederationHost;
    idToRemoteMap: Record<string, {
        name: string;
        expose: string;
    }>;
    hooks: PluginSystem<{
        beforeRegisterRemote: SyncWaterfallHook<{
            remote: Remote;
            origin: FederationHost;
        }>;
        registerRemote: SyncWaterfallHook<{
            remote: Remote;
            origin: FederationHost;
        }>;
        beforeRequest: AsyncWaterfallHook<{
            id: string;
            options: Options;
            origin: FederationHost;
        }>;
        onLoad: AsyncHook<[{
            id: string;
            expose: string;
            pkgNameOrAlias: string;
            remote: Remote;
            options: ModuleOptions;
            origin: FederationHost;
            exposeModule: any;
            exposeModuleFactory: any;
            moduleInstance: Module;
        }], void>;
        handlePreloadModule: SyncHook<[{
            id: string;
            name: string;
            remote: Remote;
            remoteSnapshot: ModuleInfo;
            preloadConfig: PreloadRemoteArgs;
            origin: FederationHost;
        }], void>;
        errorLoadRemote: AsyncHook<[{
            id: string;
            error: unknown;
            options?: any;
            from: CallFrom;
            lifecycle: "beforeRequest" | "beforeLoadShare" | "afterResolve" | "onLoad";
            origin: FederationHost;
        }], unknown>;
        beforePreloadRemote: AsyncHook<[{
            preloadOps: Array<PreloadRemoteArgs>;
            options: Options;
            origin: FederationHost;
        }], false | void | Promise<false | void>>;
        generatePreloadAssets: AsyncHook<[{
            origin: FederationHost;
            preloadOptions: PreloadOptions[number];
            remote: Remote;
            remoteInfo: RemoteInfo;
            remoteSnapshot: ModuleInfo;
            globalSnapshot: GlobalModuleInfo;
        }], Promise<PreloadAssets>>;
        afterPreloadRemote: AsyncHook<{
            preloadOps: Array<PreloadRemoteArgs>;
            options: Options;
            origin: FederationHost;
        }, false | void | Promise<false | void>>;
        loadEntry: AsyncHook<[{
            loaderHook: FederationHost["loaderHook"];
            remoteInfo: RemoteInfo;
            remoteEntryExports?: RemoteEntryExports;
        }], Promise<RemoteEntryExports>>;
    }>;
    constructor(host: FederationHost);
    formatAndRegisterRemote(globalOptions: Options, userOptions: UserOptions): Remote[];
    setIdToRemoteMap(id: string, remoteMatchInfo: LoadRemoteMatch): void;
    loadRemote<T>(id: string, options?: {
        loadFactory?: boolean;
        from: CallFrom;
    }): Promise<T | null>;
    preloadRemote(preloadOptions: Array<PreloadRemoteArgs>): Promise<void>;
    registerRemotes(remotes: Remote[], options?: {
        force?: boolean;
    }): void;
    getRemoteModuleAndOptions(options: {
        id: string;
    }): Promise<{
        module: Module;
        moduleOptions: ModuleOptions;
        remoteMatchInfo: LoadRemoteMatch;
    }>;
    registerRemote(remote: Remote, targetRemotes: Remote[], options?: {
        force?: boolean;
    }): void;
    private removeRemote;
}
