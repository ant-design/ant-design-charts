import type { MenuDataItem, Route, MessageDescriptor } from '../types';
export declare const childrenPropsName = "routes";
export declare function stripQueryStringAndHashFromPath(url: string): string;
export declare const isUrl: (path: string) => boolean;
export declare const getKeyByPath: (item: MenuDataItem) => string | undefined;
/**
 * @param routeList 路由配置
 * @param locale 是否使用国际化
 * @param formatMessage 国际化的程序
 * @param ignoreFilter 是否筛选掉不展示的 menuItem 项，plugin-layout需要所有项目来计算布局样式
 * @returns { breadcrumb, menuData}
 */
declare const transformRoute: (routeList: Route[], locale?: boolean | undefined, formatMessage?: ((message: MessageDescriptor) => string) | undefined, ignoreFilter?: boolean | undefined) => {
    breadcrumb: Map<string, MenuDataItem>;
    menuData: MenuDataItem[];
};
export default transformRoute;
