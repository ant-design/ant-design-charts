import { DisplayObjectConfig, Group, RectStyleProps, TextStyleProps } from '@antv/g';
import type { Padding } from '../../types/padding';
import type { Prefix } from '../../types/prefix';
import { BaseShape } from './base-shape';
/**
 * <zh/> 标签样式
 *
 * <en/> Label style
 */
export interface LabelStyleProps extends TextStyleProps, Prefix<'background', RectStyleProps> {
    /**
     * <zh/> 是否显示背景
     *
     * <en/> Whether to show background
     */
    background?: boolean;
    /**
     * <zh/> 标签内边距
     *
     * <en/> Label padding
     * @defaultValue 0
     */
    padding?: Padding;
}
/**
 * <zh/> 标签
 *
 * <en/> Label
 * @remarks
 * <zh/> 标签是一种具有背景的文本图形。
 *
 * <en/> Label is a text shape with background.
 */
export declare class Label extends BaseShape<LabelStyleProps> {
    static defaultStyleProps: Partial<LabelStyleProps>;
    constructor(options: DisplayObjectConfig<LabelStyleProps>);
    protected isTextStyle(key: string): boolean;
    protected isBackgroundStyle(key: string): boolean;
    protected getTextStyle(attributes: Required<LabelStyleProps>): TextStyleProps;
    protected getBackgroundStyle(attributes: Required<LabelStyleProps>): false | RectStyleProps;
    render(attributes?: Required<LabelStyleProps>, container?: Group): void;
    getGeometryBounds(): import("@antv/g").AABB;
}
