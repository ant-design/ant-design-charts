import type { IAnimation } from '@antv/g';
import type { RuntimeContext } from '../runtime/types';
import type { Keyframe } from '../types';
import type { BaseShapeStyleProps } from './shapes';
import { BaseShape } from './shapes';
export declare abstract class BaseElement<T extends BaseShapeStyleProps> extends BaseShape<T> {
    protected get context(): RuntimeContext;
    protected get parsedAttributes(): Required<T>;
    /**
     * <zh/> 动画帧执行函数
     *
     * <en/> Animation frame execution function
     */
    protected onframe(): void;
    animate(keyframes: Keyframe[], options?: number | KeyframeAnimationOptions | undefined): IAnimation | null;
}
