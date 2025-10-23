import { chokidar } from '@umijs/utils';
export declare function addUnWatch(unWatcher: Function): void;
export declare function watch(opts: {
    path: string | ReadonlyArray<string>;
    watchOpts?: chokidar.WatchOptions;
    addToUnWatches?: boolean;
    onChange: (event: string, path: string) => void;
}): chokidar.FSWatcher;
export declare function createDebouncedHandler(opts: {
    timeout?: number;
    onChange: (opts: {
        files: {
            event: string;
            path: string;
        }[];
    }) => Promise<any>;
}): (event: string, path: string) => void;
export declare function unwatch(): void;
export declare function expandJSPaths(path: string): string[];
export declare function expandCSSPaths(path: string): string[];
