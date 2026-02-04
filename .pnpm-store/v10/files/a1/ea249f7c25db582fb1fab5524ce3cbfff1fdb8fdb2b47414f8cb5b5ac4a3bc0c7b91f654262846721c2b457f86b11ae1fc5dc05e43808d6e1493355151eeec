import type { ConfigProviderProps, GetProp } from 'antd';
import type { CSSMotionProps } from 'rc-motion';
import React from 'react';
import type { ThoughtChainProps } from './';
export declare enum THOUGHT_CHAIN_ITEM_STATUS {
    /**
     * @desc 等待状态
     */
    PENDING = "pending",
    /**
     * @desc 成功状态
     */
    SUCCESS = "success",
    /**
     * @desc 错误状态
     */
    ERROR = "error"
}
export interface ThoughtChainItem {
    /**
     * @desc 思维节点唯一标识符
     * @descEN Unique identifier
     */
    key?: string;
    /**
     * @desc 思维节点图标
     * @descEN Thought chain item icon
     */
    icon?: React.ReactNode;
    /**
     * @desc 思维节点标题
     * @descEN Thought chain item title
     */
    title?: React.ReactNode;
    /**
     * @desc 思维节点描述
     * @descEN Thought chain item description
     */
    description?: React.ReactNode;
    /**
     * @desc 思维节点额外内容
     * @descEN Thought chain item extra content
     */
    extra?: React.ReactNode;
    /**
     * @desc 思维节点内容
     * @descEN Thought chain item content
     */
    content?: React.ReactNode;
    /**
     * @desc 思维节点脚注
     * @descEN Thought chain item footer
     */
    footer?: React.ReactNode;
    /**
     * @desc 思维节点状态
     * @descEN Thought chain item status
     */
    status?: `${THOUGHT_CHAIN_ITEM_STATUS}`;
}
export declare const ThoughtChainNodeContext: React.Context<{
    prefixCls?: string | undefined;
    collapseMotion?: CSSMotionProps | undefined;
    enableCollapse?: boolean | undefined;
    expandedKeys?: string[] | undefined;
    direction?: GetProp<ConfigProviderProps, "direction"> | undefined;
    styles?: ThoughtChainProps['styles'];
    classNames?: ThoughtChainProps['classNames'];
}>;
interface ThoughtChainNodeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
    info?: ThoughtChainItem;
    nextStatus?: ThoughtChainItem['status'];
    onClick?: (key: string) => void;
}
declare const ThoughtChainNode: React.FC<ThoughtChainNodeProps>;
export default ThoughtChainNode;
