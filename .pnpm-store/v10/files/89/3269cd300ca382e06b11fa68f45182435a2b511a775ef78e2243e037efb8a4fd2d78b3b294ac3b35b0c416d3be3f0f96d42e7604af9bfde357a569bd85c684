/**
 * NOTE: DO NOT USE ADVANCED SYNTAX IN THIS FILE, TO AVOID INSERT HELPERS TO REDUCE SCRIPT SIZE.
 */
import type { IRouteChunkFilesMap } from './routePreloadOnLoad';
export type { IRouteChunkFilesMap };
export interface IPreloadRouteFile {
    type: 'js' | 'css' | (string & {});
    url: string;
    attrs: ([string, string] | [string])[];
}
export declare const PRELOAD_ROUTE_MAP_SCP_TYPE = "umi-route-chunk-files-map";
export declare const PRELOAD_ROUTE_HELPER = "preload_helper";
export declare function getPreloadRouteFiles(path: string, map: IRouteChunkFilesMap, opts: {
    publicPath: string;
}): IPreloadRouteFile[] | undefined;
