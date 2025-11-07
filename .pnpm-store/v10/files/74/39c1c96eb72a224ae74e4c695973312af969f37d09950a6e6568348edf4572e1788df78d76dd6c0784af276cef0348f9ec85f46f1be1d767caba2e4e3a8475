import React from 'react';
import { type ConversationsItemProps } from './Item';
import type { Conversation, Groupable } from './interface';
/**
 * @desc 会话列表组件参数
 * @descEN Props for the conversation list component
 */
export interface ConversationsProps extends React.HTMLAttributes<HTMLUListElement> {
    /**
     * @desc 会话列表数据源
     * @descEN Data source for the conversation list
     */
    items?: Conversation[];
    /**
     * @desc 当前选中的值
     * @descEN Currently selected value
     */
    activeKey?: Conversation['key'];
    /**
     * @desc 默认选中值
     * @descEN Default selected value
     */
    defaultActiveKey?: Conversation['key'];
    /**
     * @desc 选中变更回调
     * @descEN Callback for selection change
     */
    onActiveChange?: (value: string) => void;
    /**
     * @desc 会话操作菜单
     * @descEN Operation menu for conversations
     */
    menu?: ConversationsItemProps['menu'] | ((value: Conversation) => ConversationsItemProps['menu']);
    /**
     * @desc 是否支持分组, 开启后默认按 {@link Conversation.group} 字段分组
     * @descEN If grouping is supported, it defaults to the {@link Conversation.group} field
     */
    groupable?: boolean | Groupable;
    /**
     * @desc 语义化结构 style
     * @descEN Semantic structure styles
     */
    styles?: Partial<Record<'item', React.CSSProperties>>;
    /**
     * @desc 语义化结构 className
     * @descEN Semantic structure class names
     */
    classNames?: Partial<Record<'item', string>>;
    /**
     * @desc 自定义前缀
     * @descEN Prefix
     */
    prefixCls?: string;
    /**
     * @desc 自定义根类名
     * @descEN Custom class name
     */
    rootClassName?: string;
}
declare const Conversations: React.FC<ConversationsProps>;
export type { Conversation };
export default Conversations;
