import type { DisplayObjectConfig, RectStyleProps as GRectStyleProps, Group } from '@antv/g';
import { ImageStyleProps as GImageStyleProps } from '@antv/g';
import type { IconStyleProps } from '../shapes';
import { Image as ImageShape } from '../shapes';
import type { BaseNodeStyleProps } from './base-node';
import { BaseNode } from './base-node';
/**
 * <zh/> 图片节点样式配置项
 *
 * <en/> Image node style props
 */
export interface ImageStyleProps extends BaseNodeStyleProps {
    /**
     * <zh/> 图片来源，即图片地址字符串
     *
     * <en/> Image source, i.e. image address string
     */
    img?: string | HTMLImageElement;
    /**
     * <zh/> 该属性为 img 的别名
     *
     * <en/> This property is an alias for img
     */
    src?: string | HTMLImageElement;
}
/**
 * <zh/> 图片节点
 *
 * <en/> Image node
 */
export declare class Image extends BaseNode<ImageStyleProps> {
    static defaultStyleProps: Partial<ImageStyleProps>;
    constructor(options: DisplayObjectConfig<ImageStyleProps>);
    protected getKeyStyle(attributes: Required<ImageStyleProps>): GImageStyleProps;
    getBounds(): import("@antv/g").AABB;
    protected getHaloStyle(attributes: Required<ImageStyleProps>): false | GRectStyleProps;
    protected getIconStyle(attributes: Required<ImageStyleProps>): false | IconStyleProps;
    protected drawKeyShape(attributes: Required<ImageStyleProps>, container: Group): ImageShape | undefined;
    protected drawHaloShape(attributes: Required<ImageStyleProps>, container: Group): void;
    update(attr?: Partial<ImageStyleProps>): void;
}
