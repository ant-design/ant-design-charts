import type { DisplayObjectConfig, RectStyleProps as GRectStyleProps, Group } from '@antv/g';
import { Rect as GRect } from '@antv/g';
import type { IconStyleProps } from '../shapes';
import type { BaseNodeStyleProps } from './base-node';
import { BaseNode } from './base-node';
/**
 * <zh/> 矩形节点样式配置项
 *
 * <en/> Rect node style props
 */
export interface RectStyleProps extends BaseNodeStyleProps {
}
type ParsedRectStyleProps = Required<RectStyleProps>;
/**
 * <zh/> 矩形节点
 *
 * <en/> Rect node
 */
export declare class Rect extends BaseNode<RectStyleProps> {
    constructor(options: DisplayObjectConfig<RectStyleProps>);
    protected getKeyStyle(attributes: ParsedRectStyleProps): GRectStyleProps;
    protected getIconStyle(attributes: ParsedRectStyleProps): false | IconStyleProps;
    protected drawKeyShape(attributes: ParsedRectStyleProps, container: Group): GRect | undefined;
}
export {};
