import type { GenerateStyle, ProTokenType } from '@ant-design/pro-provider';
import type { BreadcrumbProps } from 'antd';
import type { AnyObject } from 'antd/es/_util/type';
import type { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import type { CSSProperties } from 'react';
import React from 'react';
import type { HeaderViewProps } from './components/Header';
import type { SiderMenuProps } from './components/SiderMenu/SiderMenu';
import type { SiderMenuToken } from './components/SiderMenu/style';
import type { WaterMarkProps } from './components/WaterMark';
import type { GetPageTitleProps } from './getPageTitle';
import type { LocaleType } from './locales';
import type { MenuDataItem, MessageDescriptor, RouterTypes, WithFalse } from './typing';
type LayoutItemType = ItemType & {
    linkPath?: string;
    component?: string;
};
export type LayoutBreadcrumbProps<T extends AnyObject = AnyObject> = {
    minLength?: number;
    itemRender?: (route: LayoutItemType, params: T, routes: LayoutItemType[], paths: string[]) => React.ReactNode;
};
type GlobalTypes = Omit<Partial<RouterTypes> & SiderMenuProps & HeaderViewProps & {
    token?: ProTokenType['layout'];
}, 'collapsed'>;
export type ProLayoutProps = GlobalTypes & {
    stylish?: {
        header?: GenerateStyle<SiderMenuToken>;
        sider?: GenerateStyle<SiderMenuToken>;
    };
    /** Layout 的品牌配置，表现为一张背景图片 */
    bgLayoutImgList?: {
        src?: string;
        width?: string;
        height?: string;
        left?: number;
        top?: number;
        bottom?: number;
        right?: number;
    }[];
    /**
     * @name 简约模式，设置了之后不渲染的任何 layout 的东西，但是会有 context，可以获取到当前菜单。
     *
     * @example pure={true}
     */
    pure?: boolean;
    /**
     * @name logo 的配置，可以配置url，React 组件 和 false
     *
     * @example 设置 logo 为网络地址  logo="https://avatars1.githubusercontent.com/u/8186664?s=460&v=4"
     * @example 设置 logo 为组件  logo={<img src="https://avatars1.githubusercontent.com/u/8186664?s=460&v=4"/>}
     * @example 设置 logo 为 false 不显示 logo  logo={false}
     * @example 设置 logo 为 方法  logo={()=> <img src="https://avatars1.githubusercontent.com/u/8186664?s=460&v=4"/> }
     * */
    logo?: React.ReactNode | JSX.Element | WithFalse<() => React.ReactNode | JSX.Element>;
    /**
     * @name 页面切换的时候触发
     *
     * @example 获取切换的页面地址 onPageChange={(location) => { console.log("切换到："+location.pathname) }}
     *
     * */
    onPageChange?: (location?: RouterTypes['location']) => void;
    /**
     * @name layout 的 loading 效果，设置完成之后只展示一个 loading
     *
     * @example loading={true}
     */
    loading?: boolean;
    /**
     * @name layout
     *
     * @description "zh-CN" | "zh-TW" | "en-US" | "it-IT" | "ko-KR"
     * @example 中文 layout="zh-CN"
     * @example 英文 layout="en-US"
     */
    locale?: LocaleType;
    /**
     * @name 是否收起 layout 是严格受控的，可以 设置为 true，一直收起
     *
     * @example collapsed={true}
     */
    collapsed?: boolean;
    /**
     * @name 收起和展开的时候触发事件
     *
     * @example onCollapse=(collapsed)=>{ setCollapsed(collapsed) };
     */
    onCollapse?: (collapsed: boolean) => void;
    /**
     * @name 页脚的配置
     *
     * @example 不展示dom footerRender={false}
     * @example 使用 layout 的  DefaultFooter   footerRender={() => (<DefaultFooter copyright="这是一条测试文案"/>}
     */
    footerRender?: WithFalse<(props: ProLayoutProps & {
        hasSiderMenu?: boolean;
    }, defaultDom: React.ReactNode) => React.ReactNode>;
    /**
     * @name 设置 PageHeader 的面包屑，只能处理数据
     *
     * @example 手动设置 breadcrumbRender={(routers = []) => [ { path: '/', breadcrumbName: '主页'} ]
     * @example 增加一项 breadcrumbRender={(routers = []) => { return [{ path: '/', breadcrumbName: '主页'} ,...routers ]}
     * @example 删除首页 breadcrumbRender={(routers = []) => { return routers.filter(item => item.path !== '/')}
     * @example 不显示面包屑 breadcrumbRender={false}
     */
    breadcrumbRender?: WithFalse<(routers: BreadcrumbProps['items']) => BreadcrumbProps['items']>;
    /**
     * @name 设置页面的标题
     * @example 根据页面的路由设置标题 pageTitleRender={(props) => { return props.location.pathname }}
     * @example 不显示标题 pageTitleRender={false}
     * @example 根据默认的标题设置 pageTitleRender={(props,defaultPageTitle) => { return defaultPageTitle + '这是一个测试标题' }}
     * @example 根据 info 来自己组合标题 pageTitleRender={(props,defaultPageTitle,info) => { return info.title + "-" + info.pageName }
     */
    pageTitleRender?: WithFalse<(props: GetPageTitleProps, defaultPageTitle?: string, info?: {
        title: string;
        id: string;
        pageName: string;
    }) => string>;
    /**
     * @name 处理 menuData 的数据，可以动态的控制数据
     * @see 尽量不要用异步数据来处理，否则可能造成更新不及时，如果异步数据推荐使用 menu.request 和 params。
     *
     * @example 删除一些菜单 menuDataRender=((menuData) => { return menuData.filter(item => item.name !== 'test') })
     * @example 增加一些菜单 menuDataRender={(menuData) => { return menuData.concat({ path: '/test', name: '测试', icon: 'smile' }) }}
     * @example 修改菜单 menuDataRender={(menuData) => { return menuData.map(item => { if (item.name === 'test') { item.name = '测试' } return item }) }}
     * @example 打平数据 menuDataRender={(menuData) => { return menuData.reduce((pre, item) => { return pre.concat(item.children || []) }, []) }}
     */
    menuDataRender?: (menuData: MenuDataItem[]) => MenuDataItem[];
    /**
     * @name 处理每个面包屑的配置，需要直接返回 dom
     * @description (route: Route, params: any, routes: Array<Route>, paths: Array<string>) => React.ReactNode
     *
     * @example 设置 disabled： itemRender={(route, params, routes, paths) => { return <Button disabled>{route.breadcrumbName}</Button> }}
     * @example 拼接 path： itemRender={(route, params, routes, paths) => { return <a href={paths.join('/')}>{route.breadcrumbName}</a> }}
     */
    itemRender?: BreadcrumbProps['itemRender'];
    formatMessage?: (message: MessageDescriptor) => string;
    /** @name 是否禁用移动端模式
     *
     * @see 有的管理系统不需要移动端模式，此属性设置为true即可
     * @example disableMobile={true}
     *  */
    disableMobile?: boolean;
    /**
     * content 的样式
     *
     * @example 背景颜色为红色 contentStyle={{ backgroundColor: 'red '}}
     */
    contentStyle?: CSSProperties;
    className?: string;
    /** PageHeader 的 BreadcrumbProps 配置，会透传下去 */
    breadcrumbProps?: Omit<BreadcrumbProps, 'itemRender'> & LayoutBreadcrumbProps;
    /** @name 水印的相关配置 */
    waterMarkProps?: WaterMarkProps;
    /**
     * @name 操作菜单重新刷新
     *
     * @example  重新获取菜单 actionRef.current.reload();
     * */
    actionRef?: React.MutableRefObject<{
        reload: () => void;
    } | undefined>;
    /**
     * @name 错误处理组件
     *
     * @example ErrorBoundary={MyErrorBoundary}
     */
    ErrorBoundary?: React.ComponentClass<any, any> | boolean;
    /**
     * @name  侧边菜单的类型, menu.type 的快捷方式
     * @type "sub" | "group"
     * @example group
     */
    siderMenuType?: 'sub' | 'group';
    isChildrenLayout?: boolean;
};
export type BasicLayoutContext = {
    [K in 'location']: ProLayoutProps[K];
} & {
    breadcrumb: Record<string, MenuDataItem>;
};
declare const ProLayout: React.FC<ProLayoutProps>;
export { ProLayout };
