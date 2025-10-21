import { PluginManager } from 'dumi';
import { useLayoutEffect } from 'react';
import type { AgnosticComponentModule, IDemoData, ILocale, INav, INavItem, IRouteMeta, IRoutesById, IUserNavValue } from './types';
/**
 * private instance, do not use it in your code
 */
export declare let pluginManager: PluginManager;
export declare const setPluginManager: (pm: PluginManager) => void;
export declare const useLocaleDocRoutes: () => IRoutesById;
/**
 * 在 react 18 中需要新的 render 方式，这个函数用来处理不同的 jsx 模式。
 * @param version react version
 * @returns code string
 */
export declare const genReactRenderCode: (version: string) => string;
export declare const useIsomorphicLayoutEffect: typeof useLayoutEffect;
/**
 * common comparer for sidebar/nav items
 */
export declare const useRouteDataComparer: <T extends {
    order?: number | undefined;
    link?: string | undefined;
    path?: string | undefined;
    title?: string | undefined;
}>() => (a: T, b: T) => number;
/**
 * common util for pick meta to sort sidebar/nav items
 */
export declare const pickRouteSortMeta: (original: Partial<Pick<INavItem, 'order' | 'title'>>, field: 'nav' | 'nav.second' | 'group', fm: IRouteMeta['frontmatter']) => Partial<Pick<INavItem, "title" | "order">>;
export declare function getLocaleNav(nav: IUserNavValue | INav, locale: ILocale): import("./types").IUserNavItems;
export declare function getAgnosticComponentModule(component: IDemoData['component']): Promise<AgnosticComponentModule>;
