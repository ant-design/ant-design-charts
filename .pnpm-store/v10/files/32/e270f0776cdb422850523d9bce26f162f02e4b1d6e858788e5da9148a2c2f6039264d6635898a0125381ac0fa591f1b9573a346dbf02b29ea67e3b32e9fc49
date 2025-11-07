import type { ProSettings } from './defaultSettings';
import type { MenuDataItem } from './typing';
type BreadcrumbItem = Omit<MenuDataItem, 'children' | 'routes'> & {
    routes?: BreadcrumbItem;
};
export declare const matchParamsPath: (pathname: string, breadcrumb?: Record<string, BreadcrumbItem>, breadcrumbMap?: Map<string, BreadcrumbItem>) => BreadcrumbItem;
export type GetPageTitleProps = {
    pathname?: string;
    breadcrumb?: Record<string, BreadcrumbItem>;
    breadcrumbMap?: Map<string, BreadcrumbItem>;
    menu?: ProSettings['menu'];
    title?: ProSettings['title'];
    pageName?: string;
    formatMessage?: (data: {
        id: any;
        defaultMessage?: string;
    }) => string;
};
/**
 * 获取关于 pageTitle 的所有信息方便包装
 *
 * @param props
 * @param ignoreTitle
 */
export declare const getPageTitleInfo: (props: GetPageTitleProps, ignoreTitle?: boolean) => {
    title: string;
    id: string;
    pageName: string;
};
export declare const getPageTitle: (props: GetPageTitleProps, ignoreTitle?: boolean) => string;
export {};
