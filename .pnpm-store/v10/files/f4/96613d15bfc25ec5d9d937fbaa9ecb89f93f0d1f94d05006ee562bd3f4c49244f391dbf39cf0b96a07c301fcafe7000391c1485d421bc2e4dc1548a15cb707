import type { HmrIdentifiers, NapiUpdateMessage, NapiWrittenEndpoint, StackFrame } from "./binding";
import * as binding from "./binding";
import { ProjectOptions, RawEntrypoints, Update } from "./types";
export declare class TurbopackInternalError extends Error {
    name: string;
    constructor(cause: Error);
}
export declare function projectFactory(): (options: Required<ProjectOptions>, turboEngineOptions: binding.NapiTurboEngineOptions) => Promise<{
    readonly _nativeProject: {
        __napiType: "Project";
    };
    update(options: Partial<ProjectOptions>): Promise<void>;
    writeAllEntrypointsToDisk(): Promise<TurbopackResult<RawEntrypoints>>;
    entrypointsSubscribe(): AsyncGenerator<{
        apps: {
            readonly _nativeEndpoint: {
                __napiType: "Endpoint";
            };
            writeToDisk(): Promise<TurbopackResult<NapiWrittenEndpoint>>;
            clientChanged(): Promise<AsyncIterableIterator<TurbopackResult<{}>>>;
            serverChanged(includeIssues: boolean): Promise<AsyncIterableIterator<TurbopackResult<{}>>>;
        }[];
        libraries: {
            readonly _nativeEndpoint: {
                __napiType: "Endpoint";
            };
            writeToDisk(): Promise<TurbopackResult<NapiWrittenEndpoint>>;
            clientChanged(): Promise<AsyncIterableIterator<TurbopackResult<{}>>>;
            serverChanged(includeIssues: boolean): Promise<AsyncIterableIterator<TurbopackResult<{}>>>;
        }[];
        issues: binding.NapiIssue[];
        diagnostics: binding.NapiDiagnostic[];
    }, void, unknown>;
    hmrEvents(identifier: string): AsyncIterableIterator<TurbopackResult<Update>>;
    hmrIdentifiersSubscribe(): AsyncIterableIterator<TurbopackResult<HmrIdentifiers>>;
    traceSource(stackFrame: StackFrame, currentDirectoryFileUrl: string): Promise<StackFrame | null>;
    getSourceForAsset(filePath: string): Promise<string | null>;
    getSourceMap(filePath: string): Promise<string | null>;
    getSourceMapSync(filePath: string): string | null;
    updateInfoSubscribe(aggregationMs: number): AsyncIterableIterator<TurbopackResult<NapiUpdateMessage>>;
    shutdown(): Promise<void>;
    onExit(): Promise<void>;
}>;
