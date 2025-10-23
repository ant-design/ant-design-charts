import type { DisplayObjectConfig } from '@antv/g';
import type { PathArray } from '@antv/util';
import type { Point, PolylineRouter } from '../../types';
import type { BaseEdgeStyleProps } from './base-edge';
import { BaseEdge } from './base-edge';
/**
 * <zh/> 折线样式配置项
 *
 * <en/> Polyline style properties
 */
export interface PolylineStyleProps extends BaseEdgeStyleProps {
    /**
     * <zh/> 圆角半径
     *
     * <en/> The radius of the rounded corner
     * @defaultValue 0
     */
    radius?: number;
    /**
     * <zh/> 控制点数组
     *
     * <en/> Control point array
     */
    controlPoints?: Point[];
    /**
     * <zh/> 是否启用路由，默认开启且 controlPoints 会自动计入
     *
     * <en/> Whether to enable routing, it is enabled by default and controlPoints will be automatically included
     * @defaultValue false
     */
    router?: PolylineRouter;
}
type ParsedPolylineStyleProps = Required<PolylineStyleProps>;
/**
 * <zh/> 折线
 *
 * <en/> Polyline
 */
export declare class Polyline extends BaseEdge {
    static defaultStyleProps: Partial<PolylineStyleProps>;
    constructor(options: DisplayObjectConfig<PolylineStyleProps>);
    protected getControlPoints(attributes: ParsedPolylineStyleProps): Point[];
    protected getPoints(attributes: ParsedPolylineStyleProps): Point[];
    protected getKeyPath(attributes: ParsedPolylineStyleProps): PathArray;
    protected getLoopPath(attributes: ParsedPolylineStyleProps): PathArray;
}
export {};
