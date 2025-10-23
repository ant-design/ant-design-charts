import type { IApi } from '../../types';
export interface IImportmapData {
    importMap: {
        imports: Record<string, string>;
        scopes: Record<string, any>;
    };
    deps: {
        name: string;
        version: string;
        type: string;
    }[];
}
export interface IPkgData {
    pkgJsonContent: IApi['pkg'];
    pkgInfo: {
        name: string;
        version: string;
        type: 'esm';
        exports: {
            name: string;
            path: string;
            from: string;
            deps: {
                name: string;
                version: string;
                usedMap: Record<string, {
                    usedNamespace?: boolean;
                    usedDefault?: boolean;
                    usedNames: string[];
                }>;
            }[];
        }[];
        assets: any[];
    };
}
/**
 * class for connect esmi server
 */
export default class ESMIService {
    cdnOrigin: string;
    cacheDir: string;
    cache: Record<string, IImportmapData>;
    constructor(opts: {
        cdnOrigin: string;
        cacheDir: string;
    });
    /**
     * get cache file path by cache key
     * @param data  pkg data
     */
    static getCacheKey(data: IPkgData): string;
    /**
     * get importmap cache by cache key
     * @param key cache key
     */
    getCache(key: string): IImportmapData;
    /**
     * set importmap cache
     * @param key   cache key
     * @param data  importmap data
     */
    setCache(key: string, data: IImportmapData): void;
    /**
     * build importmap from deps tree
     * @param data  package data
     * @returns ticketId
     */
    build(data: IPkgData): Promise<string | undefined>;
    /**
     * get importmap from deps tree
     * @param data  package data
     * @returns importmap
     */
    getImportmap(data: IPkgData): Promise<IImportmapData | undefined>;
}
