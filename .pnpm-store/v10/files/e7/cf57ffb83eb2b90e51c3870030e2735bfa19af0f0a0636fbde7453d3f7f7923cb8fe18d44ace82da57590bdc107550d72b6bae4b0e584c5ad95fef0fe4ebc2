import type * as IndexModule from './index';
export declare const registerGlobalPlugins: typeof IndexModule.registerGlobalPlugins;
export declare const getRemoteEntry: typeof IndexModule.getRemoteEntry;
export declare const getRemoteInfo: typeof IndexModule.getRemoteInfo;
export declare const loadScript: typeof IndexModule.loadScript;
export declare const loadScriptNode: typeof IndexModule.loadScriptNode;
export declare const init: typeof IndexModule.init;
export declare const loadRemote: typeof IndexModule.loadRemote;
export declare const loadShare: typeof IndexModule.loadShare;
export declare const loadShareSync: typeof IndexModule.loadShareSync;
export declare const preloadRemote: typeof IndexModule.preloadRemote;
export declare const registerRemotes: typeof IndexModule.registerRemotes;
export declare const registerPlugins: typeof IndexModule.registerPlugins;
export declare const getInstance: typeof IndexModule.getInstance;
export declare class FederationHost implements IndexModule.FederationHost {
    private _instance;
    private _args;
    constructor(...args: ConstructorParameters<typeof IndexModule.FederationHost>);
    private _getInstance;
    get options(): import("packages/runtime-core/dist/types.cjs").Options;
    set options(value: import("packages/runtime-core/dist/types.cjs").Options);
    get hooks(): import("packages/runtime-core/dist/src/utils/hooks").PluginSystem<{
        beforeInit: import("packages/runtime-core/dist/src/utils/hooks").SyncWaterfallHook<{
            userOptions: import("packages/runtime-core/dist/src").UserOptions;
            options: import("packages/runtime-core/dist/types.cjs").Options;
            origin: IndexModule.FederationHost;
            shareInfo: import("packages/runtime-core/dist/types.cjs").ShareInfos;
        }>;
        init: import("packages/runtime-core/dist/src/utils/hooks").SyncHook<[{
            options: import("packages/runtime-core/dist/types.cjs").Options;
            origin: IndexModule.FederationHost;
        }], void>;
        beforeInitContainer: import("packages/runtime-core/dist/src/utils/hooks").AsyncWaterfallHook<{
            shareScope: import("packages/runtime-core/dist/types.cjs").ShareScopeMap[string];
            initScope: import("packages/runtime-core/dist/types.cjs").InitScope;
            remoteEntryInitOptions: import("packages/runtime-core/dist/types.cjs").RemoteEntryInitOptions;
            remoteInfo: import("packages/runtime-core/dist/types.cjs").RemoteInfo;
            origin: IndexModule.FederationHost;
        }>;
        initContainer: import("packages/runtime-core/dist/src/utils/hooks").AsyncWaterfallHook<{
            shareScope: import("packages/runtime-core/dist/types.cjs").ShareScopeMap[string];
            initScope: import("packages/runtime-core/dist/types.cjs").InitScope;
            remoteEntryInitOptions: import("packages/runtime-core/dist/types.cjs").RemoteEntryInitOptions;
            remoteInfo: import("packages/runtime-core/dist/types.cjs").RemoteInfo;
            remoteEntryExports: import("packages/runtime-core/dist/types.cjs").RemoteEntryExports;
            origin: IndexModule.FederationHost;
            id: string;
            remoteSnapshot?: import("packages/sdk/dist/src").ModuleInfo;
        }>;
    }>;
    get version(): string;
    get name(): string;
    get moduleCache(): Map<string, IndexModule.Module>;
    get snapshotHandler(): import("packages/runtime-core/dist/src/plugins/snapshot/SnapshotHandler").SnapshotHandler;
    get sharedHandler(): import("packages/runtime-core/dist/src/shared").SharedHandler;
    get remoteHandler(): import("packages/runtime-core/dist/src/remote").RemoteHandler;
    get shareScopeMap(): import("packages/runtime-core/dist/types.cjs").ShareScopeMap;
    get loaderHook(): import("packages/runtime-core/dist/src/utils/hooks").PluginSystem<{
        getModuleInfo: import("packages/runtime-core/dist/src/utils/hooks").SyncHook<[{
            target: Record<string, any>;
            key: any;
        }], void | {
            value: any | undefined;
            key: string;
        }>;
        createScript: import("packages/runtime-core/dist/src/utils/hooks").SyncHook<[{
            url: string;
            attrs?: Record<string, any>;
        }], import("packages/sdk/dist/src").CreateScriptHookReturn>;
        createLink: import("packages/runtime-core/dist/src/utils/hooks").SyncHook<[{
            url: string;
            attrs?: Record<string, any>;
        }], void | HTMLLinkElement>;
        fetch: import("packages/runtime-core/dist/src/utils/hooks").AsyncHook<[string, RequestInit], false | void | Promise<Response>>;
        loadEntryError: import("packages/runtime-core/dist/src/utils/hooks").AsyncHook<[{
            getRemoteEntry: typeof IndexModule.getRemoteEntry;
            origin: IndexModule.FederationHost;
            remoteInfo: import("packages/runtime-core/dist/types.cjs").RemoteInfo;
            remoteEntryExports?: import("packages/runtime-core/dist/types.cjs").RemoteEntryExports | undefined;
            globalLoading: Record<string, Promise<void | import("packages/runtime-core/dist/types.cjs").RemoteEntryExports> | undefined>;
            uniqueKey: string;
        }], Promise<(() => Promise<import("packages/runtime-core/dist/types.cjs").RemoteEntryExports | undefined>) | undefined>>;
        getModuleFactory: import("packages/runtime-core/dist/src/utils/hooks").AsyncHook<[{
            remoteEntryExports: import("packages/runtime-core/dist/types.cjs").RemoteEntryExports;
            expose: string;
            moduleInfo: import("packages/runtime-core/dist/types.cjs").RemoteInfo;
        }], Promise<(() => Promise<IndexModule.Module>) | undefined>>;
    }>;
    get bridgeHook(): import("packages/runtime-core/dist/src/utils/hooks").PluginSystem<{
        beforeBridgeRender: import("packages/runtime-core/dist/src/utils/hooks").SyncHook<[Record<string, any>], void | Record<string, any>>;
        afterBridgeRender: import("packages/runtime-core/dist/src/utils/hooks").SyncHook<[Record<string, any>], void | Record<string, any>>;
        beforeBridgeDestroy: import("packages/runtime-core/dist/src/utils/hooks").SyncHook<[Record<string, any>], void | Record<string, any>>;
        afterBridgeDestroy: import("packages/runtime-core/dist/src/utils/hooks").SyncHook<[Record<string, any>], void | Record<string, any>>;
    }>;
    initOptions(...args: Parameters<IndexModule.FederationHost['initOptions']>): import("packages/runtime-core/dist/types.cjs").Options;
    loadShare<T>(...args: Parameters<IndexModule.FederationHost['loadShare']>): Promise<false | (() => T | undefined)>;
    loadShareSync<T>(...args: Parameters<IndexModule.FederationHost['loadShareSync']>): () => T | never;
    initializeSharing(...args: Parameters<IndexModule.FederationHost['initializeSharing']>): Promise<void>[];
    initRawContainer(...args: Parameters<IndexModule.FederationHost['initRawContainer']>): IndexModule.Module;
    loadRemote<T>(...args: Parameters<IndexModule.FederationHost['loadRemote']>): Promise<T | null>;
    preloadRemote(...args: Parameters<IndexModule.FederationHost['preloadRemote']>): Promise<void>;
    initShareScopeMap(...args: Parameters<IndexModule.FederationHost['initShareScopeMap']>): void;
    registerPlugins(...args: Parameters<IndexModule.FederationHost['registerPlugins']>): void;
    registerRemotes(...args: Parameters<IndexModule.FederationHost['registerRemotes']>): void;
    formatOptions(...args: Parameters<IndexModule.FederationHost['formatOptions']>): import("packages/runtime-core/dist/types.cjs").Options;
}
export interface ModuleInterface {
    remoteInfo: IndexModule.Module['remoteInfo'];
    inited: IndexModule.Module['inited'];
    lib: IndexModule.Module['lib'];
    host: IndexModule.Module['host'];
    getEntry(...args: Parameters<IndexModule.Module['getEntry']>): ReturnType<IndexModule.Module['getEntry']>;
    get(...args: Parameters<IndexModule.Module['get']>): ReturnType<IndexModule.Module['get']>;
}
export declare class Module implements ModuleInterface {
    private _instance;
    private _args;
    constructor(...args: ConstructorParameters<typeof IndexModule.Module>);
    private _getInstance;
    get remoteInfo(): import("packages/runtime-core/dist/types.cjs").RemoteInfo;
    set remoteInfo(value: import("packages/runtime-core/dist/types.cjs").RemoteInfo);
    get inited(): boolean;
    set inited(value: boolean);
    get lib(): import("packages/runtime-core/dist/types.cjs").RemoteEntryExports | undefined;
    set lib(value: import("packages/runtime-core/dist/types.cjs").RemoteEntryExports | undefined);
    get host(): IndexModule.FederationHost;
    set host(value: IndexModule.FederationHost);
    getEntry(...args: Parameters<IndexModule.Module['getEntry']>): Promise<import("packages/runtime-core/dist/types.cjs").RemoteEntryExports>;
    get(...args: Parameters<IndexModule.Module['get']>): Promise<any>;
    private wraperFactory;
}
