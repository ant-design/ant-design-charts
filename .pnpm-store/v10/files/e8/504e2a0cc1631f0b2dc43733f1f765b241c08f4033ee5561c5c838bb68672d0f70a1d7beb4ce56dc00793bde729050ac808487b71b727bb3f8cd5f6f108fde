import type { CSSMotionProps } from 'rc-motion';
export type CollapsibleOptions = {
    /**
     * @desc 当前展开的节点
     * @descEN current expanded keys
     */
    expandedKeys?: string[];
    /**
     * @desc 展开节点变化回调
     * @descEN callback when expanded keys change
     */
    onExpand?: (expandedKeys: string[]) => void;
};
export type Collapsible = boolean | CollapsibleOptions;
type RequiredCollapsibleOptions = Required<CollapsibleOptions>;
type UseCollapsible = (collapsible?: Collapsible, prefixCls?: string, rootPrefixCls?: string) => [
    boolean,
    RequiredCollapsibleOptions['expandedKeys'],
    ((curKey: string) => void) | undefined,
    CSSMotionProps
];
declare const useCollapsible: UseCollapsible;
export default useCollapsible;
