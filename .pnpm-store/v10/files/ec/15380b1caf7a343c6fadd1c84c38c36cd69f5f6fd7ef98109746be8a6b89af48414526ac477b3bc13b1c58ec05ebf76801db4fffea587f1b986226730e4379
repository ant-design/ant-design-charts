import type { DisplayObjectConfig, CircleStyleProps as GCircleStyleProps, Group } from '@antv/g';
import { Circle as GCircle } from '@antv/g';
import type { Point } from '../../types';
import type { IconStyleProps } from '../shapes';
import type { BaseNodeStyleProps } from './base-node';
import { BaseNode } from './base-node';
/**
 * <zh/> 圆形节点样式配置项
 *
 * <en/> Circle node style props
 */
export interface CircleStyleProps extends BaseNodeStyleProps {
}
/**
 * <zh/> 圆形节点
 *
 * <en/> Circle node
 */
export declare class Circle extends BaseNode {
    static defaultStyleProps: Partial<CircleStyleProps>;
    constructor(options: DisplayObjectConfig<CircleStyleProps>);
    protected drawKeyShape(attributes: Required<CircleStyleProps>, container: Group): GCircle | undefined;
    protected getKeyStyle(attributes: Required<CircleStyleProps>): GCircleStyleProps;
    protected getIconStyle(attributes: Required<CircleStyleProps>): false | IconStyleProps;
    getIntersectPoint(point: Point, useExtendedLine?: boolean): Point;
}
