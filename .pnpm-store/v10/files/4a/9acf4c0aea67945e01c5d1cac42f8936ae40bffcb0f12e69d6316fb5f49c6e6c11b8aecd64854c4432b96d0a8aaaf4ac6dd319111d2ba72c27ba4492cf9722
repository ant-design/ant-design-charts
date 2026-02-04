import type { MenuProps } from 'antd';
import React from 'react';
import type { PureSettings } from '../../defaultSettings';
import type { MenuDataItem, MessageDescriptor, RouterTypes, WithFalse } from '../../typing';
import type { PrivateSiderMenuProps } from './SiderMenu';
export type MenuMode = 'vertical' | 'vertical-left' | 'vertical-right' | 'horizontal' | 'inline';
export type BaseMenuProps = {
    className?: string;
    /** 默认的是否展开，会受到 breakpoint 的影响 */
    defaultCollapsed?: boolean;
    collapsed?: boolean;
    splitMenus?: boolean;
    isMobile?: boolean;
    menuData?: MenuDataItem[];
    mode?: MenuMode;
    onCollapse?: (collapsed: boolean) => void;
    openKeys?: WithFalse<string[]> | undefined;
    handleOpenChange?: (openKeys: string[]) => void;
    iconPrefixes?: string;
    /** 要给菜单的props, 参考antd-menu的属性。https://ant.design/components/menu-cn/ */
    menuProps?: MenuProps;
    style?: React.CSSProperties;
    formatMessage?: (message: MessageDescriptor) => string;
    /**
     * @name 处理父级菜单的 props，可以覆写菜单的点击功能，一般用于埋点
     * @see 子级的菜单要使用 menuItemRender 来处理
     *
     * @example 使用 a 标签跳转到特殊的地址 subMenuItemRender={(item, defaultDom) => { return <a onClick={()=> history.push(item.path) }>{defaultDom}</a> }}
     * @example 增加埋点 subMenuItemRender={(item, defaultDom) => { return <a onClick={()=> log.click(item.name) }>{defaultDom}</a> }}
     */
    subMenuItemRender?: WithFalse<(item: MenuDataItem & {
        isUrl: boolean;
    }, defaultDom: React.ReactNode, menuProps: BaseMenuProps) => React.ReactNode>;
    /**
     * @name 处理菜单的 props，可以覆写菜单的点击功能，一般结合 Router 框架使用
     * @see 非子级的菜单要使用 subMenuItemRender 来处理
     *
     * @example 使用 a 标签 menuItemRender={(item, defaultDom) => { return <a onClick={()=> history.push(item.path) }>{defaultDom}</a> }}
     * @example 使用 Link 标签 menuItemRender={(item, defaultDom) => { return <Link to={item.path}>{defaultDom}</Link> }}
     */
    menuItemRender?: WithFalse<(item: MenuDataItem & {
        isUrl: boolean;
        onClick: () => void;
    }, defaultDom: React.ReactNode, menuProps: BaseMenuProps & Partial<PrivateSiderMenuProps>) => React.ReactNode>;
    /**
     * 修改 name，如果想做个简单的国际化，可以使用这个方法
     */
    menuTextRender?: WithFalse<(item: MenuDataItem, defaultText: React.ReactNode, menuProps: BaseMenuProps) => React.ReactNode>;
    /**
     * @name 处理 menuData 的方法，与 menuDataRender 不同，postMenuData处理完成后会直接渲染，不再进行国际化和拼接处理
     *
     * @example 增加菜单图标 postMenuData={(menuData) => { return menuData.map(item => { return { ...item, icon: <Icon type={item.icon} /> } }) }}
     */
    postMenuData?: (menusData?: MenuDataItem[]) => MenuDataItem[];
} & Partial<RouterTypes> & Omit<MenuProps, 'openKeys' | 'onOpenChange' | 'title'> & Partial<PureSettings>;
declare const BaseMenu: React.FC<BaseMenuProps & PrivateSiderMenuProps>;
export { BaseMenu };
