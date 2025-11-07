import type { FileChangeEvent, Event } from './types';
export declare class FolderWatch {
    private readonly cwd;
    private watcher;
    private readyPromise;
    private listeners;
    private eventMap;
    constructor(opts: {
        cwd: string;
        exts: string[];
        ignored: string[];
        events: Event[];
    });
    init(): Promise<void>;
    private startWatch;
    private notify;
    listen(f: (e: FileChangeEvent) => void): () => void;
}
