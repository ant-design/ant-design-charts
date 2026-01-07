import { ImportSpecifier } from '@umijs/bundler-utils/compiled/es-module-lexer';
import { AutoUpdateFolderCache } from './AutoUpdateFolderCache';
import type { FileChangeEvent } from './types';
export declare type MergedCodeInfo = {
    code: string;
    imports: readonly ImportSpecifier[];
    events: FileChangeEvent[];
};
export declare type Listener = (info: MergedCodeInfo) => void;
export declare class AutoUpdateSrcCodeCache {
    private readonly srcPath;
    private readonly cachePath;
    folderCache: AutoUpdateFolderCache;
    private listeners;
    private ignores;
    constructor(opts: {
        cwd: string;
        cachePath: string;
    });
    init(): Promise<void>;
    private initFileList;
    batchProcess(files: string[]): Promise<void>;
    getMergedCode(): {
        code: string;
        imports: readonly ImportSpecifier[];
    };
    register(l: Listener): () => void;
    unwatch(): Promise<void>;
}
