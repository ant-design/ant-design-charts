import { Circle } from './circle';
import type { BaseStyleProps, DisplayObjectConfig, Group } from '@antv/g';
import type { CategoricalPalette } from '../../palettes/types';
import type { DonutRound, Prefix } from '../../types';
import type { CircleStyleProps } from './circle';
/**
 * <zh/> 甜甜圈节点样式配置项
 *
 * <en/> Donut node style props
 */
export interface DonutStyleProps extends CircleStyleProps, Prefix<'donut', BaseStyleProps> {
    /**
     * <zh/> 内环半径，使用百分比或者像素值
     *
     * <en/> Inner ring radius, using percentage or pixel value.
     * @defaultValue '50%'
     */
    innerR?: string | number;
    /**
     * <zh/> 圆环数据
     *
     * <en/> Donut data.
     */
    donuts?: number[] | DonutRound[];
    /**
     * <zh/> 颜色或者色板名
     *
     * <en/> Color or palette.
     * @defaultValue 'tableau'
     */
    donutPalette?: string | CategoricalPalette;
}
/**
 * <zh/> 甜甜圈节点
 *
 * <en/> Donut node
 */
export declare class Donut extends Circle {
    static defaultStyleProps: Partial<DonutStyleProps>;
    constructor(options: DisplayObjectConfig<DonutStyleProps>);
    private parseOuterR;
    private parseInnerR;
    protected drawDonutShape(attributes: Required<DonutStyleProps>, container: Group): void;
    render(attributes: Required<DonutStyleProps>, container?: Group): void;
}
