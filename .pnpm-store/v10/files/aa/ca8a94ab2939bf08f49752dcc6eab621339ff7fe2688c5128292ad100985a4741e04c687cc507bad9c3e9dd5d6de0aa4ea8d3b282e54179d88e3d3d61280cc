import type { GenerateStyle } from '@ant-design/pro-provider';
import type { AffixProps, BreadcrumbProps, TabPaneProps, TabsProps } from 'antd';
import { SpinProps } from 'antd';
import type { ReactNode } from 'react';
import React from 'react';
import type { WithFalse } from '../../typing';
import type { FooterToolbarProps } from '../FooterToolbar';
import type { PageHeaderProps } from '../PageHeader';
import type { WaterMarkProps } from '../WaterMark';
import type { PageContainerToken, pageContainerToken } from './style';
import 'antd/lib/breadcrumb/style';
export type PageHeaderTabConfig = {
    /** @name tabs 的列表 */
    tabList?: (TabPaneProps & {
        key?: React.Key;
    })[];
    /** @name tabActiveKey 当前选中 tab 的 key */
    tabActiveKey?: TabsProps['activeKey'];
    /** @name tab 修改时触发 */
    onTabChange?: TabsProps['onChange'];
    /** @name tab 上额外的区域 */
    tabBarExtraContent?: TabsProps['tabBarExtraContent'];
    /** @name tabs 的其他配置 */
    tabProps?: TabsProps;
    /**
     * @deprecated 请使用 fixedHeader
     * @name fixHeader 固定 PageHeader 到页面顶部
     */
    fixHeader?: boolean;
    /** @name fixedHeader 固定 PageHeader 到页面顶部 */
    fixedHeader?: boolean;
};
export type PageContainerProps = {
    title?: React.ReactNode | false;
    content?: React.ReactNode;
    extraContent?: React.ReactNode;
    prefixCls?: string;
    footer?: ReactNode[];
    /**
     * @name token 自定义的 token
     */
    token?: pageContainerToken;
    /**
     * 与 antd 完全相同
     *
     * @name PageHeader 的配置
     */
    header?: Partial<PageHeaderProps> & {
        children?: React.ReactNode;
    };
    /** @name pageHeaderRender 自定义 pageHeader */
    pageHeaderRender?: WithFalse<(props: PageContainerProps) => React.ReactNode>;
    /**
     * 与 antd 完全相同
     *
     * @name affixProps 固钉的配置
     */
    affixProps?: Omit<AffixProps, 'children'>;
    /**
     * 只加载内容区域
     *
     * @name loading 是否加载
     */
    loading?: boolean | SpinProps | React.ReactNode;
    /**
     * 自定义 breadcrumb,
     * @name breadcrumbRender 返回false不展示
     */
    breadcrumbRender?: PageHeaderProps['breadcrumbRender'] | false;
    /** @name WaterMarkProps 水印的配置 */
    waterMarkProps?: WaterMarkProps;
    /** @name BreadcrumbProps 配置面包屑 */
    breadcrumb?: BreadcrumbProps;
    children?: React.ReactNode;
    stylish?: GenerateStyle<PageContainerToken>;
    footerStylish?: GenerateStyle<PageContainerToken>;
    footerToolBarProps?: FooterToolbarProps;
} & PageHeaderTabConfig & Omit<PageHeaderProps, 'title' | 'footer' | 'breadcrumbRender' | 'breadcrumb'>;
/**
 * 配置与面包屑相同，只是增加了自动根据路由计算面包屑的功能。此功能必须要在 ProLayout 中使用。
 *
 * @param props
 * @returns
 */
declare const ProBreadcrumb: React.FC<BreadcrumbProps>;
declare const PageContainer: React.FC<PageContainerProps>;
declare const ProPageHeader: (props: PageContainerProps & {
    prefixedClassName: string;
}) => import("react/jsx-runtime").JSX.Element | null;
export { PageContainer, ProBreadcrumb, ProPageHeader };
