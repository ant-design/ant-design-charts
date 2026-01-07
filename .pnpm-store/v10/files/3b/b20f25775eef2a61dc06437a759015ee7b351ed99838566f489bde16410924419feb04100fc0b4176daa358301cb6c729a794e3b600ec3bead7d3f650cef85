import type { DisplayObjectConfig, RectStyleProps as GRectStyleProps } from '@antv/g';
import { Rect as GRect, Group } from '@antv/g';
import type { BaseComboStyleProps } from './base-combo';
import { BaseCombo } from './base-combo';
/**
 * <zh/> 矩形组合样式配置项
 *
 * <en/> Rect combo style props
 */
export interface RectComboStyleProps extends BaseComboStyleProps {
}
/**
 * <zh/> 矩形组合
 *
 * <en/> Rect combo
 */
export declare class RectCombo extends BaseCombo<RectComboStyleProps> {
    constructor(options: DisplayObjectConfig<RectComboStyleProps>);
    protected drawKeyShape(attributes: Required<RectComboStyleProps>, container: Group): GRect | undefined;
    protected getKeyStyle(attributes: Required<RectComboStyleProps>): GRectStyleProps;
}
