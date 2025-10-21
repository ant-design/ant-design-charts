import { BaseExtension } from '../registry/extension';
import type { DrawContext } from '../runtime/element';
import type { CustomBehaviorOption } from '../spec/behavior';
import type { DrawData } from './types';
export type BaseTransformOptions = CustomBehaviorOption;
/**
 * <zh/> 数据转换的基类
 *
 * <en/> Base class for data transforms
 */
export declare abstract class BaseTransform<T extends BaseTransformOptions = BaseTransformOptions> extends BaseExtension<T> {
    beforeDraw(data: DrawData, context: DrawContext): DrawData;
    afterLayout(type: 'pre', data: DrawData): void;
    afterLayout(type: 'post', data?: undefined): void;
}
