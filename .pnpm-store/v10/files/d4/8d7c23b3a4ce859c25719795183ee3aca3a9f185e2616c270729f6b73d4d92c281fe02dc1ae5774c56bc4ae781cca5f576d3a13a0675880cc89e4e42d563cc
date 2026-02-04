import { type t } from './common';
export declare class FileSystemCache {
    static hashAlgorithms: t.HashAlgorithm[];
    readonly basePath: string;
    readonly ns?: any;
    readonly extension?: string;
    readonly hash: t.HashAlgorithm;
    readonly ttl: number;
    basePathExists?: boolean;
    constructor(options?: t.FileSystemCacheOptions);
    path(key: string): string;
    fileExists(key: string): Promise<boolean>;
    ensureBasePath(): Promise<void>;
    get(key: string, defaultValue?: any): Promise<any>;
    getSync(key: string, defaultValue?: any): any;
    set(key: string, value: any, ttl?: number): Promise<{
        path: string;
    }>;
    setSync(key: string, value: any, ttl?: number): this;
    remove(key: string): Promise<void>;
    clear(): Promise<void>;
    save(input: ({
        key: string;
        value: any;
    } | null | undefined)[]): Promise<{
        paths: string[];
    }>;
    load(): Promise<{
        files: {
            path: string;
            value: any;
        }[];
    }>;
}
