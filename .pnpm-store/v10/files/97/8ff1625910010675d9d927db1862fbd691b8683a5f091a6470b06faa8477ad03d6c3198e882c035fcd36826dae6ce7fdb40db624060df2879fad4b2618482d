import type { DisplayObjectConfig } from '@antv/g';
import type { Point } from '../../types';
import type { CubicStyleProps } from './cubic';
import { Cubic } from './cubic';
/**
 * <zh/> 径向贝塞尔曲线样式配置项
 *
 * <en/> Radial cubic style props
 */
export interface CubicRadialStyleProps extends CubicStyleProps {
}
/**
 * <zh/> 径向贝塞尔曲线
 *
 * <en/> Radial cubic edge
 */
export declare class CubicRadial extends Cubic {
    static defaultStyleProps: Partial<CubicStyleProps>;
    constructor(options: DisplayObjectConfig<CubicStyleProps>);
    private get ref();
    protected getEndpoints(attributes: Required<CubicStyleProps>): [Point, Point];
    private toRadialCoordinate;
    protected getControlPoints(sourcePoint: Point, targetPoint: Point, curvePosition: [number, number], curveOffset: [number, number]): [Point, Point];
}
