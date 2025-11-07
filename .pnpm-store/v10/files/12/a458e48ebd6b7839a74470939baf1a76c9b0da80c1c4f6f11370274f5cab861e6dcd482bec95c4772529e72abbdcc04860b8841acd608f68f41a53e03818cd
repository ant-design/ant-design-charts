import { GlobalModuleInfo, Manifest, ModuleInfo } from '@module-federation/sdk';
import { Options, Remote } from '../../type';
import { getGlobalSnapshot } from '../../global';
import { PluginSystem, AsyncHook, AsyncWaterfallHook } from '../../utils/hooks';
import { FederationHost } from '../../core';
export declare function getGlobalRemoteInfo(moduleInfo: Remote, origin: FederationHost): {
    hostGlobalSnapshot: ModuleInfo | undefined;
    globalSnapshot: ReturnType<typeof getGlobalSnapshot>;
    remoteSnapshot: GlobalModuleInfo[string] | undefined;
};
export declare class SnapshotHandler {
    loadingHostSnapshot: Promise<GlobalModuleInfo | void> | null;
    HostInstance: FederationHost;
    manifestCache: Map<string, Manifest>;
    hooks: PluginSystem<{
        beforeLoadRemoteSnapshot: AsyncHook<[{
            options: Options;
            moduleInfo: Remote;
        }], void>;
        loadSnapshot: AsyncWaterfallHook<{
            options: Options;
            moduleInfo: Remote;
            hostGlobalSnapshot: GlobalModuleInfo[string] | undefined;
            globalSnapshot: ReturnType<typeof getGlobalSnapshot>;
            remoteSnapshot?: GlobalModuleInfo[string] | undefined;
        }>;
        loadRemoteSnapshot: AsyncWaterfallHook<{
            options: Options;
            moduleInfo: Remote;
            manifestJson?: Manifest;
            manifestUrl?: string;
            remoteSnapshot: ModuleInfo;
            from: "global" | "manifest";
        }>;
        afterLoadSnapshot: AsyncWaterfallHook<{
            options: Options;
            moduleInfo: Remote;
            remoteSnapshot: ModuleInfo;
        }>;
    }>;
    loaderHook: FederationHost['loaderHook'];
    manifestLoading: Record<string, Promise<ModuleInfo>>;
    constructor(HostInstance: FederationHost);
    loadSnapshot(moduleInfo: Remote): Promise<{
        remoteSnapshot: GlobalModuleInfo[string] | undefined;
        globalSnapshot: ReturnType<typeof getGlobalSnapshot>;
    }>;
    loadRemoteSnapshotInfo(moduleInfo: Remote): Promise<{
        remoteSnapshot: ModuleInfo;
        globalSnapshot: GlobalModuleInfo;
    }> | never;
    getGlobalRemoteInfo(moduleInfo: Remote): {
        hostGlobalSnapshot: ModuleInfo | undefined;
        globalSnapshot: ReturnType<typeof getGlobalSnapshot>;
        remoteSnapshot: GlobalModuleInfo[string] | undefined;
    };
    private getManifestJson;
}
