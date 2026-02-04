import type { DisplayObjectConfig, PolygonStyleProps as GPolygonStyleProps, Group } from '@antv/g';
import { Polygon as GPolygon } from '@antv/g';
import type { Point } from '../../types';
import type { BaseNodeStyleProps } from '../nodes/base-node';
import { BaseNode } from '../nodes/base-node';
/**
 * <zh/> 多边形节点样式配置项
 *
 * <en/> Polygon node style props
 */
export interface PolygonStyleProps extends BaseNodeStyleProps {
    /**
     * <zh/> 多边形的顶点坐标
     *
     * <en/> The vertex coordinates of the polygon
     * @internal
     */
    points?: ([number, number] | [number, number, number])[];
}
/**
 * Abstract class for polygon nodes,i.e triangle, diamond, hexagon, etc.
 */
export declare abstract class Polygon<T extends PolygonStyleProps = PolygonStyleProps> extends BaseNode<T> {
    constructor(options: DisplayObjectConfig<T>);
    get parsedAttributes(): Required<T>;
    protected drawKeyShape(attributes: Required<T>, container: Group): GPolygon | undefined;
    protected getKeyStyle(attributes: Required<T>): GPolygonStyleProps;
    protected abstract getPoints(attributes: Required<T>): Point[];
    getIntersectPoint(point: Point, useExtendedLine?: boolean): Point;
}
