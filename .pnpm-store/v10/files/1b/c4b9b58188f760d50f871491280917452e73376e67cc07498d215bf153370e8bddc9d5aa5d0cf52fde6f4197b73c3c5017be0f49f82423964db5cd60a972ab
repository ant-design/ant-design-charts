import type { ElementDatum, ElementType } from '../types';
import type { DrawData } from './types';
/**
 * <zh/> 重新分配绘制任务
 *
 * <en/> Reassign drawing tasks
 * @param input - <zh/>绘制数据 | <en/>DrawData
 * @param type - <zh/>类型 | <en/>type
 * @param elementType - <zh/>元素类型 | <en/>element type
 * @param datum - <zh/>数据 | <en/>data
 * @param overwrite - <zh/>是否覆盖现有数据 | <en/>whether to overwrite existing data
 */
export declare function reassignTo(input: DrawData, type: 'add' | 'update' | 'remove', elementType: ElementType, datum: ElementDatum, overwrite?: boolean): void;
/**
 * <zh/> 判断样式是否与原始样式一致
 *
 * <en/> Determine whether the style is consistent with the original style
 * @param style - <zh/> 样式 | <en/> style
 * @param originalStyle - <zh/> 原始样式 | <en/> original style
 * @returns <zh/> 是否一致 | <en/> Whether it is consistent
 */
export declare function isStyleEqual(style: Record<string, unknown>, originalStyle: Record<string, unknown>): boolean;
