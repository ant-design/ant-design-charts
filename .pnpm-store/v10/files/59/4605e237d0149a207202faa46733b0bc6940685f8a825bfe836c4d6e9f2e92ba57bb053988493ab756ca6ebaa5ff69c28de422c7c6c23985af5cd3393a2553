import type { RuntimeContext } from '../runtime/types';
import type { BaseTransformOptions } from './base-transform';
import { BaseTransform } from './base-transform';
/**
 * <zh/> 根据径向布局自动调整节点标签样式的配置项
 *
 * <en/> Options for automatically adjusting the style of node labels according to the radial layout
 */
export interface PlaceRadialLabelsOptions extends BaseTransformOptions {
    /**
     * <zh/> 偏移量
     *
     * <en/> Offset
     */
    offset?: number;
}
/**
 * <zh/> 根据径向布局自动调整节点标签样式，包括位置和旋转角度
 *
 * <en/> Automatically adjust the style of node labels according to the radial layout, including position and rotation angle
 */
export declare class PlaceRadialLabels extends BaseTransform<PlaceRadialLabelsOptions> {
    static defaultOptions: Partial<PlaceRadialLabelsOptions>;
    constructor(context: RuntimeContext, options: PlaceRadialLabelsOptions);
    private get ref();
    afterLayout(): void;
}
