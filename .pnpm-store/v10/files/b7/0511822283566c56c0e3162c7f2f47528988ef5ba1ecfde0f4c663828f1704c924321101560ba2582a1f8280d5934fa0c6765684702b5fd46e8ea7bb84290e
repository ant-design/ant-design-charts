import type { IAnimation } from '@antv/g';
import type { AnimationContext, AnimationEffectTiming } from '../animations/types';
import type { ID, Point } from '../types';
import type { RuntimeContext } from './types';
export declare class Animation {
    private context;
    constructor(context: RuntimeContext);
    private tasks;
    private animations;
    private getTasks;
    add(context: AnimationContext, callbacks?: AnimationCallbacks): void;
    animate(localAnimation?: AnimationEffectTiming | boolean, callbacks?: AnimationCallbacks, extendOptions?: ExtendOptions): IAnimation | null;
    /**
     * <zh/> 推断额外的动画样式
     *
     * <en/> Infer additional animation styles
     * @param context - <zh/> 动画上下文 | <en/> Animation context
     * @param options - <zh/> 扩展选项 | <en/> Extend options
     * @returns <zh/> 始态样式与终态样式 | <en/> Initial style and final style
     */
    inferStyle(context: AnimationContext, options?: ExtendOptions): [Record<string, unknown>, Record<string, unknown>];
    stop(): void;
    clear(): void;
    /**
     * <zh/> 释放存量动画对象
     *
     * <en/> Release stock animation objects
     * @description see: https://github.com/antvis/G/issues/1731
     */
    private release;
    destroy(): void;
}
interface AnimationCallbacks {
    before?: () => void;
    beforeAnimate?: (animation: IAnimation) => void;
    afterAnimate?: (animation: IAnimation) => void;
    after?: () => void;
}
interface ExtendOptions {
    /**
     * <zh/> stage 为 collapse 时，指定当前展开/收起的目标元素及其后代元素
     *
     * <en/> When the stage is collapse, specify the target element and its descendants to expand/collapse
     */
    collapse?: {
        target: ID;
        descendants: ID[];
        position: Point;
    };
    /**
     * <zh/> stage 为 expand 时，指定当前展开/收起的目标元素及其后代元素
     *
     * <en/> When the stage is expand, specify the target element and its descendants to expand/collapse
     */
    expand?: {
        target: ID;
        descendants: ID[];
        position: Point;
    };
}
export {};
