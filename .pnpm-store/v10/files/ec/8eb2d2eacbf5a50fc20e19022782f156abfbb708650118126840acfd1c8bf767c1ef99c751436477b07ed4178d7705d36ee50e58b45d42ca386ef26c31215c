import type { FileChangeEvent, FileContentCache } from './types';
export declare class AutoUpdateFolderCache {
    fileContentCache: FileContentCache;
    private watcher;
    private readonly readyPromise;
    private readonly cwd;
    pendingChanges: FileChangeEvent[];
    private readonly debouchedHandleChanges;
    private readonly onCacheUpdated;
    private readonly filesLoader;
    constructor(opts: {
        cwd: string;
        exts: string[];
        onCacheUpdate: (cache: FileContentCache, events: FileChangeEvent[]) => void;
        debouncedTimeout?: number;
        ignored: string[];
        filesLoader?: (files: string[]) => Promise<Record<string, string>>;
    });
    unwatch(): Promise<void>;
    init(): Promise<void>;
    private watchAll;
    getFileCache(): FileContentCache;
    loadFiles(files: string[]): Promise<void>;
    private _defaultLoader;
}
