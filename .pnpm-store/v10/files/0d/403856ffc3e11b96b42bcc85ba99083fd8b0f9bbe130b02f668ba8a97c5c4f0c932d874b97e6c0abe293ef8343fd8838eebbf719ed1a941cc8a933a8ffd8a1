import type { GenerateStyle } from '@ant-design/pro-provider';
import type { AvatarProps, SiderProps } from 'antd';
import type { CSSProperties, ReactNode } from 'react';
import React from 'react';
import type { WithFalse } from '../../typing';
import type { AppItemProps, AppListProps } from '../AppsLogoComponents/types';
import type { HeaderViewProps } from '../Header';
import type { BaseMenuProps } from './BaseMenu';
import type { SiderMenuToken } from './style/stylish';
export type HeaderRenderKey = 'menuHeaderRender' | 'headerTitleRender';
/**
 * 渲染 title 和 logo
 *
 * @param props
 * @param renderKey
 * @returns
 */
export declare const renderLogoAndTitle: (props: SiderMenuProps, renderKey?: HeaderRenderKey) => React.ReactNode;
export type SiderMenuProps = {
    /** 品牌logo的标识 */
    logo?: React.ReactNode;
    /** 相关品牌的列表 */
    appList?: AppListProps;
    appListRender?: (props: AppListProps, defaultDom: React.ReactNode) => React.ReactNode;
    /** 相关品牌的列表项 点击事件，当事件存在时，appList 内配置的 url 不在自动跳转 */
    itemClick?: (item: AppItemProps, popoverRef?: React.RefObject<HTMLSpanElement>) => void;
    /** 菜单的宽度 */
    siderWidth?: number;
    /** 头像的设置 */
    avatarProps?: WithFalse<AvatarProps & {
        title?: React.ReactNode;
        render?: (avatarProps: AvatarProps, defaultDom: React.ReactNode, props: SiderMenuProps) => React.ReactNode;
    }>;
    /** Layout的操作功能列表，不同的 layout 会放到不同的位置 */
    actionsRender?: WithFalse<(props: HeaderViewProps) => React.ReactNode[] | React.ReactNode>;
    /**
     * @name  菜单 logo 和 title 区域的渲染
     *
     * @example 不要logo : menuHeaderRender={(logo,title)=> title}
     * @example 不要title : menuHeaderRender={(logo,title)=> logo}
     * @example 展开的时候显示title,收起显示 logo： menuHeaderRender={(logo,title,props)=> props.collapsed ? logo : title}
     * @example 不要这个区域了 : menuHeaderRender={false}
     */
    menuHeaderRender?: WithFalse<(logo: React.ReactNode, title: React.ReactNode, props?: SiderMenuProps) => React.ReactNode>;
    /**
     * @name 侧边菜单底部的配置，可以增加一些底部操作
     *
     * @example 底部增加超链接 menuFooterRender={()=><a href="https://pro.ant.design">pro.ant.design</a>}
     * @example 根据收起展开配置不同的 dom  menuFooterRender={()=>collapsed? null :<a href="https://pro.ant.design">pro.ant.design</a>}
     */
    menuFooterRender?: WithFalse<(props?: SiderMenuProps) => React.ReactNode>;
    /**
     * @name  侧边菜单，菜单区域的处理,可以单独处理菜单的dom
     *
     * @example 增加菜单区域的背景颜色 menuContentRender={(props,defaultDom)=><div style={{backgroundColor:"red"}}>{defaultDom}</div>}
     * @example 某些情况下不显示菜单 menuContentRender={(props)=> return <div>不显示菜单</div>}
     */
    menuContentRender?: WithFalse<(props: SiderMenuProps, defaultDom: React.ReactNode) => React.ReactNode>;
    /**
     * @name 侧边菜单 title 和 logo 下面区域的渲染，一般会增加个搜索框
     *
     * @example  增加一个搜索框 menuExtraRender={()=>(<Search placeholder="请输入" />)}
     * @example  根据收起展开配置不同的 dom： menuExtraRender={()=>collapsed? null : <Search placeholder="请输入" />}
     */
    menuExtraRender?: WithFalse<(props: SiderMenuProps) => React.ReactNode>;
    /**
     * @name 自定义展开收起按钮的渲染
     *
     * @example 使用文字渲染 collapsedButtonRender={(collapsed)=>collapsed?"展开":"收起"})}
     * @example 使用icon渲染 collapsedButtonRender={(collapsed)=>collapsed?<MenuUnfoldOutlined />:<MenuFoldOutlined />}
     * @example 不渲染按钮 collapsedButtonRender={false}
     */
    collapsedButtonRender?: WithFalse<(collapsed?: boolean, defaultDom?: React.ReactNode) => React.ReactNode>;
    /**
     * @name 菜单是否收起的断点，设置成false 可以禁用
     *
     * @example 禁用断点  breakpoint={false}
     * @example 最小的屏幕再收起 breakpoint={"xs"}
     */
    breakpoint?: SiderProps['breakpoint'] | false;
    /**
     * @name 菜单顶部logo 和 title 区域的点击事件
     *
     * @example 点击跳转到首页 onMenuHeaderClick={()=>{ history.push('/') }}
     */
    onMenuHeaderClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    /**
     * @name 侧边菜单底部的一些快捷链接
     *
     * @example links={[<a href="ant.design"> 访问官网 </a>,<a href="help.ant.design"> 帮助 </a>]}
     */
    links?: React.ReactNode[];
    onOpenChange?: (openKeys: WithFalse<string[]>) => void;
    getContainer?: false;
    /**
     * @name 侧边菜单的logo的样式，可以调整下大小
     *
     * @example 设置logo的大小为 42px logoStyle={{width: '42px', height: '42px'}}
     */
    logoStyle?: CSSProperties;
    hide?: boolean;
    className?: string;
    style?: CSSProperties;
} & Pick<BaseMenuProps, Exclude<keyof BaseMenuProps, ['onCollapse']>>;
export type PrivateSiderMenuProps = {
    matchMenuKeys: string[];
    originCollapsed?: boolean;
    menuRenderType?: 'header' | 'sider';
    stylish?: GenerateStyle<SiderMenuToken>;
};
declare const SiderMenu: React.FC<SiderMenuProps & PrivateSiderMenuProps>;
export { SiderMenu };
