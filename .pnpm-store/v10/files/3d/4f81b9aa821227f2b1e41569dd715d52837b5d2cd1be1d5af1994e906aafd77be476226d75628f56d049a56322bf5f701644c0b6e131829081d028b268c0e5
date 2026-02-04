import { AABB, BaseStyleProps, DisplayObject, DisplayObjectConfig, Group } from '@antv/g';
import type { CollapsedMarkerStyleProps, Combo, ID, NodeLikeData, Padding, Point, Prefix, STDSize, Size } from '../../types';
import type { BaseNodeStyleProps } from '../nodes';
import { BaseNode } from '../nodes';
import { IconStyleProps } from '../shapes';
/**
 * <zh/> 组合通用样式配置项
 *
 * <en/> Common style props for combo
 */
export interface BaseComboStyleProps extends BaseNodeStyleProps, Prefix<'collapsed', BaseStyleProps>, Prefix<'collapsedMarker', CollapsedMarkerStyleProps> {
    /**
     * <zh/> 组合展开后的默认大小
     *
     * <en/> The default size of combo when expanded
     */
    size?: Size;
    /**
     * <zh/> 组合收起后的默认大小
     *
     * <en/> The default size of combo when collapsed
     */
    collapsedSize?: Size;
    /**
     * <zh/> 组合的子元素，可以是节点或者组合
     *
     * <en/> The children of combo, which can be nodes or combos
     */
    childrenNode?: ID[];
    /**
     * <zh/> 组合的子元素数据
     *
     * <en/> The data of the children of combo
     * @remarks
     * <zh/> 如果组合是收起状态，children 可能为空，通过 childrenData 能够获取完整的子元素数据
     *
     * <en/> If the combo is collapsed, children may be empty, and the complete child element data can be obtained through childrenData
     */
    childrenData?: NodeLikeData[];
    /**
     * <zh/> 组合的内边距，只在展开状态下生效
     *
     * <en/> The padding of combo, only effective when expanded
     */
    padding?: Padding;
    /**
     * <zh/> 组合收起时是否显示标记
     *
     * <en/> Whether to show the marker when the combo is collapsed
     */
    collapsedMarker?: boolean;
}
/**
 * <zh/> 组合元素的基类
 *
 * <en/> Base class of combo
 * @remarks
 * <zh/> 自定义组合时，推荐使用这个类作为基类。这样，用户只需要专注于实现 keyShape 的绘制逻辑
 *
 * <en/> When customizing a combo, it is recommended to use this class as the base class. In this way, users only need to focus on the logic of drawing keyShape
 */
export declare abstract class BaseCombo<S extends BaseComboStyleProps = BaseComboStyleProps> extends BaseNode<S> implements Combo {
    type: string;
    static defaultStyleProps: Partial<BaseComboStyleProps>;
    constructor(options: DisplayObjectConfig<BaseComboStyleProps>);
    /**
     * Draw the key shape of combo
     */
    protected abstract drawKeyShape(attributes: Required<S>, container: Group): DisplayObject | undefined;
    protected getKeySize(attributes: Required<S>): STDSize;
    protected getEmptyKeySize(attributes: Required<S>): STDSize;
    protected getCollapsedKeySize(attributes: Required<S>): STDSize;
    protected getExpandedKeySize(attributes: Required<S>): STDSize;
    protected getContentBBox(attributes: Required<S>): AABB;
    protected drawCollapsedMarkerShape(attributes: Required<S>, container: Group): void;
    protected getCollapsedMarkerStyle(attributes: Required<S>): IconStyleProps | false;
    protected getCollapsedMarkerText(type: CollapsedMarkerStyleProps['type'], attributes: Required<S>): string;
    getComboPosition(attributes: Required<S>): Point;
    protected getComboStyle(attributes: Required<S>): {
        x: number;
        y: number;
        transform: (string | number)[][];
    };
    protected updateComboPosition(attributes: Required<S>): void;
    render(attributes: Required<S>, container?: Group): void;
    update(attr?: Partial<S>): void;
    protected onframe(): void;
    animate(keyframes: Keyframe[], options?: number | KeyframeAnimationOptions): import("@antv/g").IAnimation | null;
}
