import type { ILocalesConfig, IRouteMeta, ISidebarGroup } from './types';
export declare const getLocaleClearPath: (routePath: string, locale: ILocalesConfig[0]) => string;
/**
 * get parent path from route path
 */
export declare function getRouteParentPath(path: string, { meta, is2LevelNav, locale, }: {
    meta?: IRouteMeta;
    is2LevelNav: boolean;
    locale: ILocalesConfig[0];
}): string;
/**
 * hook for get sidebar data for all nav
 */
export declare const useFullSidebarData: () => Record<string, ISidebarGroup[]>;
interface ITreeSidebarLeaf {
    path: string;
    title: string;
    order: number;
    children: (ITreeSidebarLeaf | ISidebarGroup)[];
}
/**
 * hook for get full sidebar data in tree structure
 */
export declare const useTreeSidebarData: () => ITreeSidebarLeaf[];
/**
 * hook for get sidebar data for current nav
 */
export declare const useSidebarData: () => ISidebarGroup[];
export {};
