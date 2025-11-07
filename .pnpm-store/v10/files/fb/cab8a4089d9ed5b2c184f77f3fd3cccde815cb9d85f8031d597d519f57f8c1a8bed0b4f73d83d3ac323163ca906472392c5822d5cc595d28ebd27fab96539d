import { IncomingMessage } from "http";
import { Duplex } from "stream";
import type webpack from "webpack";
import { BundleOptions, Project, Update as TurbopackUpdate } from "./types";
export declare const enum HMR_ACTIONS_SENT_TO_BROWSER {
    RELOAD = "reload",
    CLIENT_CHANGES = "clientChanges",
    SERVER_ONLY_CHANGES = "serverOnlyChanges",
    SYNC = "sync",
    BUILT = "built",
    BUILDING = "building",
    TURBOPACK_MESSAGE = "turbopack-message",
    TURBOPACK_CONNECTED = "turbopack-connected"
}
export interface TurbopackMessageAction {
    action: HMR_ACTIONS_SENT_TO_BROWSER.TURBOPACK_MESSAGE;
    data: TurbopackUpdate | TurbopackUpdate[];
}
export interface TurbopackConnectedAction {
    action: HMR_ACTIONS_SENT_TO_BROWSER.TURBOPACK_CONNECTED;
    data: {
        sessionId: number;
    };
}
interface BuildingAction {
    action: HMR_ACTIONS_SENT_TO_BROWSER.BUILDING;
}
export interface CompilationError {
    moduleName?: string;
    message: string;
    details?: string;
    moduleTrace?: Array<{
        moduleName?: string;
    }>;
    stack?: string;
}
export interface SyncAction {
    action: HMR_ACTIONS_SENT_TO_BROWSER.SYNC;
    hash: string;
    errors: ReadonlyArray<CompilationError>;
    warnings: ReadonlyArray<CompilationError>;
    updatedModules?: ReadonlyArray<string>;
}
export interface BuiltAction {
    action: HMR_ACTIONS_SENT_TO_BROWSER.BUILT;
    hash: string;
    errors: ReadonlyArray<CompilationError>;
    warnings: ReadonlyArray<CompilationError>;
    updatedModules?: ReadonlyArray<string>;
}
export interface ReloadAction {
    action: HMR_ACTIONS_SENT_TO_BROWSER.RELOAD;
    data: string;
}
export type HMR_ACTION_TYPES = TurbopackMessageAction | TurbopackConnectedAction | BuildingAction | SyncAction | BuiltAction | ReloadAction;
export interface HotReloaderInterface {
    turbopackProject?: Project;
    serverStats: webpack.Stats | null;
    setHmrServerError(error: Error | null): void;
    clearHmrServerError(): void;
    start(): Promise<void>;
    send(action: HMR_ACTION_TYPES): void;
    onHMR(req: IncomingMessage, socket: Duplex, head: Buffer, onUpgrade?: (client: {
        send(data: string): void;
    }) => void): void;
    buildFallbackError(): Promise<void>;
    close(): void;
}
export type ChangeSubscriptions = Map<string, Promise<AsyncIterableIterator<TurbopackResult>>>;
export type ReadyIds = Set<string>;
export type StartBuilding = (id: string, forceRebuild: boolean) => () => void;
export type ClientState = {
    hmrPayloads: Map<string, HMR_ACTION_TYPES>;
    turbopackUpdates: TurbopackUpdate[];
    subscriptions: Map<string, AsyncIterator<any>>;
};
export type SendHmr = (id: string, payload: HMR_ACTION_TYPES) => void;
export declare const FAST_REFRESH_RUNTIME_RELOAD = "Fast Refresh had to perform a full reload due to a runtime error.";
export declare function createHotReloader(bundleOptions: BundleOptions, projectPath?: string, rootPath?: string): Promise<HotReloaderInterface>;
export {};
