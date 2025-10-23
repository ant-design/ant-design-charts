import type { DisplayObjectConfig, CircleStyleProps as GCircleStyleProps } from '@antv/g';
import { Circle as GCircle, Group } from '@antv/g';
import type { Point, STDSize } from '../../types';
import type { BaseComboStyleProps } from './base-combo';
import { BaseCombo } from './base-combo';
/**
 * <zh/> 圆形组合样式配置项
 *
 * <en/> Circle combo style props
 */
export interface CircleComboStyleProps extends BaseComboStyleProps {
}
/**
 * <zh/> 圆形组合
 *
 * <en/> Circle combo
 */
export declare class CircleCombo extends BaseCombo<CircleComboStyleProps> {
    constructor(options: DisplayObjectConfig<CircleComboStyleProps>);
    protected drawKeyShape(attributes: Required<CircleComboStyleProps>, container: Group): GCircle | undefined;
    protected getKeyStyle(attributes: Required<CircleComboStyleProps>): GCircleStyleProps;
    protected getCollapsedKeySize(attributes: Required<CircleComboStyleProps>): STDSize;
    protected getExpandedKeySize(attributes: Required<CircleComboStyleProps>): STDSize;
    getIntersectPoint(point: Point, useExtendedLine?: boolean): Point;
}
