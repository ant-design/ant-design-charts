import React from 'react';
import type { ActionItem } from './interface';
export interface ActionsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
    /**
     * @desc 包含多个操作项的列表
     * @descEN A list containing multiple action items.
     */
    items: ActionItem[];
    /**
     * @desc 根节点样式类
     * @descEN Root node style class.
     */
    rootClassName?: string;
    /**
     * @desc 子操作项是否占据一行
     * @descEN Whether the child action items occupy a line.
     * @default false
     */
    block?: boolean;
    /**
     * @desc Item 操作项被点击时的回调函数。
     * @descEN Callback function when an action item is clicked.
     */
    onClick?: (menuInfo: {
        item: ActionItem;
        key: string;
        keyPath: string[];
        domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
    }) => void;
    /**
     * @desc 根节点样式
     * @descEN Style for the root node.
     */
    style?: React.CSSProperties;
    /**
     * @desc 变体
     * @descEN Variant.
     * @default 'borderless'
     */
    variant?: 'borderless' | 'border';
    /**
     * @desc 样式类名的前缀。
     * @descEN Prefix for style class names.
     */
    prefixCls?: string;
}
declare const Actions: React.FC<ActionsProps>;
export default Actions;
