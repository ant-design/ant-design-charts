import type { BreadcrumbProps } from 'antd';
import type H from 'history';
import type { ProLayoutProps } from '../ProLayout';
import type { ProSettings } from '../defaultSettings';
import type { MenuDataItem, MessageDescriptor, WithFalse } from '../typing';
export declare const getVersion: () => string;
export type BreadcrumbProLayoutProps = {
    breadcrumbList?: {
        title: string;
        href: string;
    }[];
    home?: string;
    location?: H.Location | {
        pathname?: string;
    };
    menu?: ProSettings['menu'];
    breadcrumbMap?: Map<string, MenuDataItem>;
    formatMessage?: (message: MessageDescriptor) => string;
    breadcrumbRender?: WithFalse<(routers: BreadcrumbProps['items']) => BreadcrumbProps['items']>;
    itemRender?: BreadcrumbProps['itemRender'];
};
export declare const getBreadcrumb: (breadcrumbMap: Map<string, MenuDataItem>, url: string) => MenuDataItem;
export declare const getBreadcrumbFromProps: (props: BreadcrumbProLayoutProps) => {
    location: BreadcrumbProLayoutProps['location'];
    breadcrumbMap: BreadcrumbProLayoutProps['breadcrumbMap'];
};
export type BreadcrumbListReturn = Pick<BreadcrumbProps, Extract<keyof BreadcrumbProps, 'items' | 'itemRender'>>;
/** 将参数转化为面包屑 Convert parameters into breadcrumbs */
export declare const genBreadcrumbProps: (props: BreadcrumbProLayoutProps) => BreadcrumbProps['items'];
export declare const getBreadcrumbProps: (props: Omit<BreadcrumbProLayoutProps, "breadcrumbRender"> & {
    breadcrumbRender?: WithFalse<(routers: BreadcrumbProps['items']) => BreadcrumbProps['items']> | undefined;
}, layoutPros: ProLayoutProps) => BreadcrumbListReturn;
