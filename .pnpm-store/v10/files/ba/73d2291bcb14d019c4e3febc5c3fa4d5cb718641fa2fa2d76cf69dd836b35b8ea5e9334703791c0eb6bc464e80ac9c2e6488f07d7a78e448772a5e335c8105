import type { DisplayObjectConfig } from '@antv/g';
import type { Point } from '../../types';
import type { IconStyleProps, PolygonStyleProps } from '../shapes';
import { Polygon } from '../shapes/polygon';
/**
 * <zh/> 六边形节点样式配置项
 *
 * <en/> Hexagon node style props
 */
export interface HexagonStyleProps extends PolygonStyleProps {
    /**
     * <zh/> 外半径，默认为宽高的最小值的一半
     *
     * <en/> outer radius, default is half of the minimum value of width and height
     */
    outerR?: number;
}
/**
 * <zh/> 六边形节点
 *
 * <en/> Hexagon node
 */
export declare class Hexagon extends Polygon<HexagonStyleProps> {
    constructor(options: DisplayObjectConfig<HexagonStyleProps>);
    private getOuterR;
    protected getPoints(attributes: Required<HexagonStyleProps>): Point[];
    protected getIconStyle(attributes: Required<HexagonStyleProps>): false | IconStyleProps;
}
