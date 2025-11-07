import type { DisplayObjectConfig } from '@antv/g';
import type { NodePortStyleProps, Point } from '../../types';
import type { IconStyleProps, PolygonStyleProps } from '../shapes';
import { Polygon } from '../shapes/polygon';
/**
 * <zh/> 五角星节点样式配置项
 *
 * <en/> Star node style props
 */
export interface StarStyleProps extends PolygonStyleProps {
    /**
     * <zh/> 内半径，默认为外半径的 3/8
     *
     * <en/> Inner radius, default is 3/8 of the outer radius
     */
    innerR?: number;
}
/**
 * <zh/> 五角星节点
 *
 * <en/> Star node
 */
export declare class Star extends Polygon<StarStyleProps> {
    constructor(options: DisplayObjectConfig<StarStyleProps>);
    private getInnerR;
    private getOuterR;
    protected getPoints(attributes: Required<StarStyleProps>): Point[];
    protected getIconStyle(attributes: Required<StarStyleProps>): false | IconStyleProps;
    protected getPortXY(attributes: Required<StarStyleProps>, style: NodePortStyleProps): Point;
}
