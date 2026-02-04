import { ImportSpecifier } from '@umijs/bundler-utils/compiled/es-module-lexer';
import type { FileChangeEvent, FileContentCache } from './types';
export declare type MergedCodeInfo = {
    code: string;
    imports: readonly ImportSpecifier[];
};
export declare type Listener = (info: MergedCodeInfo) => void;
export declare class LazySourceCodeCache {
    private readonly srcPath;
    private readonly cachePath;
    private folderWatch;
    private listeners;
    private ignores;
    fileContentCache: FileContentCache;
    private pendingFilesEvents;
    private root;
    private tsConfigRaw;
    constructor(opts: {
        cwd: string;
        cachePath: string;
        root: string;
    });
    init(files: string[]): Promise<void>;
    initWithScan(): Promise<void>;
    private initFileList;
    getSrcPath(): string;
    loadFiles(files: string[]): Promise<void>;
    getMergedCode(): {
        code: string;
        imports: readonly ImportSpecifier[];
    };
    replayChangeEvents(): FileChangeEvent[];
    handleFileChangeEvents(events: FileChangeEvent[]): Promise<void>;
    notify(): void;
    register(l: Listener): () => void;
    filesLoader(files: string[]): Promise<Record<string, string>>;
    unwatch(): void;
}
