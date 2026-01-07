import type { DisplayObjectConfig } from '@antv/g';
import type { NodePortStyleProps, Point, TriangleDirection } from '../../types';
import type { PolygonStyleProps } from '../shapes';
import { IconStyleProps } from '../shapes';
import { Polygon } from '../shapes/polygon';
/**
 * <zh/> 三角形节点样式配置项
 *
 * <en/> Triangle node style props
 */
export interface TriangleStyleProps extends PolygonStyleProps {
    /**
     * <zh/> 三角形的方向
     *
     * <en/> The direction of the triangle
     * @defaultValue 'up'
     */
    direction?: TriangleDirection;
}
/**
 * <zh/> 三角形节点
 *
 * <en/> Triangle node
 */
export declare class Triangle extends Polygon<TriangleStyleProps> {
    static defaultStyleProps: Partial<TriangleStyleProps>;
    constructor(options: DisplayObjectConfig<TriangleStyleProps>);
    protected getPoints(attributes: Required<TriangleStyleProps>): Point[];
    protected getPortXY(attributes: Required<TriangleStyleProps>, style: NodePortStyleProps): Point;
    protected getIconStyle(attributes: Required<TriangleStyleProps>): false | IconStyleProps;
}
