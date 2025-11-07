import type { AtomComponentAsset, AtomFunctionAsset } from 'dumi-assets-types';
import { chokidar } from 'umi/plugin-utils';
export interface IPatchFile {
    event: 'add' | 'addDir' | 'change' | 'unlink' | 'unlinkDir';
    fileName: string;
}
export interface IAtomAssetsParserResult {
    components: Record<string, AtomComponentAsset>;
    functions: Record<string, AtomFunctionAsset>;
}
/**
 * The parsing and extraction of language metadata should be implemented separately
 */
export interface ILanguageMetaParser {
    patch(file: IPatchFile): void;
    parse(): Promise<IAtomAssetsParserResult>;
    destroy(): Promise<void>;
}
export interface IHandleWatcherArgs {
    patch: ILanguageMetaParser['patch'];
    parse: () => void;
    watchArgs: {
        paths: string | string[];
        options: chokidar.WatchOptions;
    };
}
export interface IBaseAtomAssetsParserParams<T> {
    entryFile: string;
    resolveDir: string;
    parser: T;
    handleWatcher?: (watcher: chokidar.FSWatcher, params: IHandleWatcherArgs) => chokidar.FSWatcher;
    watchOptions?: chokidar.WatchOptions;
}
export declare class BaseAtomAssetsParser<T extends ILanguageMetaParser = ILanguageMetaParser> {
    private watchArgs;
    private watcher;
    private handleWatcher?;
    private entryDir;
    private resolveDir;
    private readonly parser;
    private isParsing;
    private parseDeferrer;
    private cbs;
    constructor(opts: IBaseAtomAssetsParserParams<T>);
    parse(): Promise<IAtomAssetsParserResult>;
    watch(cb: (data: IAtomAssetsParserResult) => void): void;
    unwatch(cb: (data: IAtomAssetsParserResult) => void): void;
    patchWatchArgs(handler: (args: BaseAtomAssetsParser<T>['watchArgs']) => BaseAtomAssetsParser<T>['watchArgs']): void;
    getWatchArgs(): {
        paths: string | string[];
        options: chokidar.WatchOptions;
    };
    destroyWorker(): Promise<void>;
}
export type IAtomAssetsParser = InstanceType<typeof BaseAtomAssetsParser>;
