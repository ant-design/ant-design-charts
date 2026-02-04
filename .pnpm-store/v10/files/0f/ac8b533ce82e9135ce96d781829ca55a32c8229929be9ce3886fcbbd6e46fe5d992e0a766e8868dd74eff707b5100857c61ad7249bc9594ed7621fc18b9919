import type { AvatarProps } from 'antd';
import React from 'react';
import type { PureSettings } from '../../defaultSettings';
import type { MenuDataItem } from '../../index';
import type { WithFalse } from '../../typing';
import type { AppItemProps, AppListProps } from '../AppsLogoComponents/types';
import type { HeaderViewProps } from '../Header';
import type { PrivateSiderMenuProps, SiderMenuProps } from '../SiderMenu/SiderMenu';
export type GlobalHeaderProps = {
    collapsed?: boolean;
    onCollapse?: (collapsed: boolean) => void;
    isMobile?: boolean;
    logo?: React.ReactNode;
    /**
     * @name 虽然叫menuRender，但是其实是整个 SiderMenu 面板的渲染函数
     *
     * @example 收起时完成不展示菜单 menuRender={(props,defaultDom)=> props.collapsed ? null : defaultDom}
     * @example 不展示菜单 menuRender={false}
     */
    menuRender?: WithFalse<(props: HeaderViewProps, defaultDom: React.ReactNode) => React.ReactNode>;
    /**
     * @deprecated
     * 使用 actionsRender 和 avatarProps 代替
     */
    rightContentRender?: WithFalse<(props: HeaderViewProps) => React.ReactNode>;
    className?: string;
    prefixCls?: string;
    /** 相关品牌的列表 */
    appList?: AppListProps;
    /** 相关品牌的列表项 点击事件，当事件存在时，appList 内配置的 url 不在自动跳转 */
    itemClick?: (item: AppItemProps, popoverRef?: React.RefObject<HTMLSpanElement>) => void;
    menuData?: MenuDataItem[];
    onMenuHeaderClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    style?: React.CSSProperties;
    menuHeaderRender?: SiderMenuProps['menuHeaderRender'];
    /**
     * @name 顶部区域的渲染，包含内部的 menu
     *
     * @example headerContentRender={(props) => <div>管理控制台 </div>}
     */
    headerContentRender?: WithFalse<(props: HeaderViewProps, defaultDom: React.ReactNode) => React.ReactNode>;
    collapsedButtonRender?: SiderMenuProps['collapsedButtonRender'];
    splitMenus?: boolean;
    /** Layout的操作功能列表，不同的 layout 会放到不同的位置 */
    actionsRender?: WithFalse<(props: HeaderViewProps) => React.ReactNode[] | React.ReactNode>;
    /** 头像的设置 */
    avatarProps?: WithFalse<AvatarProps & {
        title?: React.ReactNode;
        render?: (props: AvatarProps, defaultDom: React.ReactNode, siderProps: SiderMenuProps) => React.ReactNode;
    }>;
    children?: React.ReactNode;
} & Partial<PureSettings>;
declare const GlobalHeader: React.FC<GlobalHeaderProps & PrivateSiderMenuProps>;
export { GlobalHeader };
