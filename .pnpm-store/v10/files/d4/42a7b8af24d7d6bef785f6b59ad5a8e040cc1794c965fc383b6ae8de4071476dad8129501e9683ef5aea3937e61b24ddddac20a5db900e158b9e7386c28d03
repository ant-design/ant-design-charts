import React from 'react';
import type { ConfigProviderProps } from 'antd';
import type { ThoughtChainItem } from './Item';
import type { Collapsible } from './hooks/useCollapsible';
export type SemanticType = 'item' | 'itemHeader' | 'itemContent' | 'itemFooter';
export interface ThoughtChainProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    /**
     * @desc 思维节点集合
     * @descEN chain items
     */
    items?: ThoughtChainItem[];
    /**
     * @desc 是否可折叠
     * @descEN Whether collapsible
     */
    collapsible?: Collapsible;
    /**
     * @desc 组件大小
     * @descEN Component size
     */
    size?: ConfigProviderProps['componentSize'];
    /**
     * @desc 语义化结构 style
     * @descEN Semantic structure styles
     */
    styles?: Partial<Record<SemanticType, React.CSSProperties>>;
    /**
     * @desc 语义化结构 className
     * @descEN Semantic structure class names
     */
    classNames?: Partial<Record<SemanticType, string>>;
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
declare const ThoughtChain: React.FC<ThoughtChainProps>;
export type { ThoughtChainItem };
export default ThoughtChain;
