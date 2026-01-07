import type { DisplayObjectConfig, EllipseStyleProps as GEllipseStyleProps, Group } from '@antv/g';
import { Ellipse as GEllipse } from '@antv/g';
import type { Point } from '../../types';
import type { IconStyleProps } from '../shapes';
import type { BaseNodeStyleProps } from './base-node';
import { BaseNode } from './base-node';
/**
 * <zh/> 椭圆节点样式配置项
 *
 * <en/> Ellipse node style props
 */
export interface EllipseStyleProps extends BaseNodeStyleProps {
}
/**
 * <zh/> 椭圆节点
 *
 * <en/> Ellipse node
 */
export declare class Ellipse extends BaseNode {
    static defaultStyleProps: Partial<EllipseStyleProps>;
    constructor(options: DisplayObjectConfig<EllipseStyleProps>);
    protected drawKeyShape(attributes: Required<EllipseStyleProps>, container: Group): GEllipse | undefined;
    protected getKeyStyle(attributes: Required<EllipseStyleProps>): GEllipseStyleProps;
    protected getIconStyle(attributes: Required<EllipseStyleProps>): false | IconStyleProps;
    getIntersectPoint(point: Point, useExtendedLine?: boolean): Point;
}
