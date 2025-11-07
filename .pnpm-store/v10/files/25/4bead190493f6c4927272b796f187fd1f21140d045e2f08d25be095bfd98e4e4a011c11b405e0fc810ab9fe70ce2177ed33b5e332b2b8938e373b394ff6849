import React from 'react';
export declare const SelectKeyProvide: React.Context<{
    selectedKey: string | undefined;
    setSelectedKey: (key: string | undefined) => void;
}>;
export type ProHelpPanelProps = {
    /**
     * 帮助面板的标题
     */
    title?: string;
    /**
     * 帮助面板首次打开时的默认选中文档的键名
     */
    defaultSelectedKey?: string;
    /**
     * 当前选中的帮助文档的键名。如果提供了这个 prop，那么该组件将是一个受控组件，其状态将由父组件管理。如果未提供，那么该组件将是一个非受控组件，其状态将在组件内部管理。
     */
    selectedKey?: string;
    /**
     * 当选中的文档键名发生变化时调用的回调函数。新的键名将作为参数传递给该函数。
     */
    onSelectedKeyChange?: (key: string | undefined) => void;
    /**
     *控制左侧面板是否能够打开
     */
    showLeftPanel?: boolean;
    /**
     * 当左侧面板打开状态发生变化时调用的回调函数。新的打开状态将作为参数传递给该函数。
     */
    onShowLeftPanelChange?: (show: boolean) => void;
    /**
     * 是否显示边框
     */
    bordered?: boolean;
    /**
     * 当帮助面板关闭时调用的回调函数。
     */
    onClose?: () => void;
    /**
     * 帮助面板的高度，可以是数字或字符串类型。
     */
    height?: number | string;
    /**
     * 帮助面板的页脚
     */
    footer?: React.ReactNode;
    /**
     * 在一页内加载所有的 children 内容
     */
    infiniteScrollFull?: boolean;
    /**
     * 自定义渲染 extra 部分的内容
     *
     * @param {React.ReactNode} collapsePannelAction - 折叠收起的左侧按钮
     * @param {React.ReactNode} helpSelectAction - 默认的帮助筛选按钮
     * @param {React.ReactNode} closeAction - 关闭操作按钮
     * @returns {React.ReactNode} - 返回自定义渲染的 extra 操作按钮
     *
     */
    extraRender?: (collapsePannelAction: React.ReactNode, helpSelectAction: React.ReactNode, closeAction: React.ReactNode) => React.ReactNode;
};
/**
 * ProHelpPanel 组件是一个帮助中心面板组件，具有可折叠的左侧菜单和右侧帮助内容区域。
 * 左侧菜单显示了帮助文档的目录结构，右侧帮助内容区域显示了用户选中的帮助文档内容。
 * 在左侧菜单中，用户可以通过点击目录来选择并显示相应的文档内容。
 * @param param0
 * @returns
 */
export declare const ProHelpPanel: React.FC<ProHelpPanelProps>;
