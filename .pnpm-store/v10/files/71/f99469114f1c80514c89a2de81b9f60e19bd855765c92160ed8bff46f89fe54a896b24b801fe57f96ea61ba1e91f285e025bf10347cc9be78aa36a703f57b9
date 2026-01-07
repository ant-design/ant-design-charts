import type { IAnimation } from '@antv/g';
import type { AnimationEffectTiming, STDAnimation } from '../animations/types';
import type { GraphOptions } from '../spec';
import type { AnimationStage } from '../spec/element/animation';
import type { ElementType, Keyframe } from '../types';
export declare function createAnimationsProxy(animations: IAnimation[]): IAnimation | null;
export declare function createAnimationsProxy(sourceAnimation: IAnimation, targetAnimations: IAnimation[]): IAnimation;
/**
 * <zh/> 预处理关键帧，过滤掉无用动画的属性
 *
 * <en/> Preprocess keyframes, filter out the properties of useless animations
 * @param keyframes - <zh/> 关键帧 | <en/> keyframes
 * @returns <zh/> 关键帧 | <en/> keyframes
 */
export declare function preprocessKeyframes(keyframes: Keyframe[]): Keyframe[];
/**
 * <zh/> 获取属性的默认值
 *
 * <en/> Get default value of attribute
 * @param name - <zh/> 属性名 | <en/> Attribute name
 * @returns <zh/> 属性默认值 | <en/> Attribute default value
 * @remarks
 * <zh/> 执行动画过程中，一些属性没有显式指定属性值，但实际上在 G 中存在属性值，因此通过该方法获取其实际默认值
 *
 * <en/> During the animation, some attributes do not explicitly specify the attribute value, but in fact there is an attribute value in G, so use this method to get the actual default value
 */
export declare function inferDefaultValue(name: string): false | "visible" | 0 | 1 | never[] | undefined;
/**
 * <zh/> 获取动画配置
 *
 * <en/> Get global animation configuration
 * @param options - <zh/> G6 配置项（用于获取全局动画配置） | <en/> G6 configuration(used to get global animation configuration)
 * @param localAnimation - <zh/> 局部动画配置 | <en/> local animation configuration
 * @returns <zh/> 动画配置 | <en/> animation configuration
 */
export declare function getAnimationOptions(options: GraphOptions, localAnimation: boolean | AnimationEffectTiming | undefined): false | AnimationEffectTiming;
/**
 * <zh/> 获取元素的动画
 *
 * <en/> Get element animation
 * @param options - <zh/> G6 配置项 | <en/> G6 configuration
 * @param elementType - <zh/> 元素类型 | <en/> element type
 * @param stage - <zh/> 动画阶段 | <en/> animation stage
 * @param localAnimation - <zh/> 局部动画配置 | <en/> local animation configuration
 * @returns <zh/> 动画时序配置 | <en/> animation timing configuration
 */
export declare function getElementAnimationOptions(options: GraphOptions, elementType: ElementType, stage: AnimationStage, localAnimation?: AnimationEffectTiming | boolean): STDAnimation;
