import { FederationHost } from '../core';
import { Remote, RemoteEntryExports, RemoteInfo } from '../type';
export declare function getRemoteEntryUniqueKey(remoteInfo: RemoteInfo): string;
export declare function getRemoteEntry({ origin, remoteEntryExports, remoteInfo, }: {
    origin: FederationHost;
    remoteInfo: RemoteInfo;
    remoteEntryExports?: RemoteEntryExports | undefined;
}): Promise<RemoteEntryExports | false | void>;
export declare function getRemoteInfo(remote: Remote): RemoteInfo;
