import { TabPaneProps } from 'antd';
import type { LabelTooltipType } from 'antd/lib/form/FormItemLabel';
import type { SearchProps } from 'antd/lib/input';
import React from 'react';
import type { ListToolBarHeaderMenuProps } from './HeaderMenu';
export type ListToolBarSetting = {
    icon: React.ReactNode;
    tooltip?: LabelTooltipType | string;
    key?: string;
    onClick?: (key?: string) => void;
};
/** Antd 默认直接导出了 rc 组件中的 Tab.Pane 组件。 */
type TabPane = TabPaneProps & {
    key?: string;
};
export type ListToolBarTabs = {
    activeKey?: string;
    defaultActiveKey?: string;
    onChange?: (activeKey: string) => void;
    items?: TabPane[];
};
export type ListToolBarMenu = ListToolBarHeaderMenuProps;
type SearchPropType = (SearchProps & {
    onSearch: (searchValue: string) => Promise<false | void> | false | void;
}) | React.ReactNode | boolean;
type SettingPropType = React.ReactNode | ListToolBarSetting;
export type ListToolBarProps = {
    prefixCls?: string;
    className?: string;
    style?: React.CSSProperties;
    /** 标题 */
    title?: React.ReactNode;
    /** 副标题 */
    subTitle?: React.ReactNode;
    /** 标题提示 */
    tooltip?: string | LabelTooltipType;
    /** 搜索输入栏相关配置 */
    search?: SearchPropType;
    /** 搜索回调 */
    onSearch?: (keyWords: string) => void;
    /** 工具栏右侧操作区 */
    actions?: React.ReactNode[];
    /** 工作栏右侧设置区 */
    settings?: SettingPropType[];
    /** 是否多行展示 */
    multipleLine?: boolean;
    /** 过滤区，通常配合 LightFilter 使用 */
    filter?: React.ReactNode;
    /** 标签页配置，仅当 `multipleLine` 为 true 时有效 */
    tabs?: ListToolBarTabs;
    /** 菜单配置 */
    menu?: ListToolBarMenu;
};
declare const ListToolBar: React.FC<ListToolBarProps>;
export default ListToolBar;
