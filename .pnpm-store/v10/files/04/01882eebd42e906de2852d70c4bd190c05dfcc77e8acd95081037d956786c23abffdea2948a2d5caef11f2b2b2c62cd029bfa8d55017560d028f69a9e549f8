import type { BaseStyleProps, DisplayObject, DisplayObjectConfig, Group, IAnimation } from '@antv/g';
import { CustomElement } from '@antv/g';
import type { Keyframe } from '../../types';
export interface BaseShapeStyleProps extends BaseStyleProps {
}
/**
 * <zh/> 图形基类
 *
 * <en/> Base class for shapes
 */
export declare abstract class BaseShape<StyleProps extends BaseShapeStyleProps> extends CustomElement<StyleProps> {
    constructor(options: DisplayObjectConfig<StyleProps>);
    /**
     * <zh/> 解析后的属性
     *
     * <en/> parsed attributes
     * @returns <zh/> 解析后的属性 | <en/> parsed attributes
     * @internal
     */
    protected get parsedAttributes(): Required<StyleProps>;
    /**
     * <zh/> 图形实例映射表
     *
     * <en/> shape instance map
     * @internal
     */
    protected shapeMap: Record<string, DisplayObject>;
    /**
     * <zh/> 动画实例映射表
     *
     * <en/> animation instance map
     * @internal
     */
    protected animateMap: Record<string, IAnimation>;
    /**
     * <zh/> 创建、更新或删除图形
     *
     * <en/> create, update or remove shape
     * @param className - <zh/> 图形名称 | <en/> shape name
     * @param Ctor - <zh/> 图形类型 | <en/> shape type
     * @param style - <zh/> 图形样式。若要删除图形，传入 false | <en/> shape style. Pass false to remove the shape
     * @param container - <zh/> 容器 | <en/> container
     * @param hooks - <zh/> 钩子函数 | <en/> hooks
     * @returns <zh/> 图形实例 | <en/> shape instance
     */
    protected upsert<T extends DisplayObject>(className: string, Ctor: string | {
        new (...args: any[]): T;
    }, style: T['attributes'] | false, container: DisplayObject, hooks?: UpsertHooks): T | undefined;
    update(attr?: Partial<StyleProps>): void;
    /**
     * <zh/> 在初始化时会被自动调用
     *
     * <en/> will be called automatically when initializing
     * @param attributes
     * @param container
     */
    abstract render(attributes: Required<StyleProps>, container: Group): void;
    bindEvents(): void;
    /**
     * <zh/> 从给定的属性对象中提取图形样式属性。删除特定的属性，如位置、变换和类名
     *
     * <en/> Extracts the shape styles from a given attribute object.
     * Removes specific styles like position, transformation, and class name.
     * @param style - <zh/> 属性对象 | <en/> attribute object
     * @returns <zh/> 仅包含样式属性的对象 | <en/> An object containing only the style properties.
     */
    getGraphicStyle<T extends Record<string, any>>(style: T): Omit<T, 'x' | 'y' | 'z' | 'transform' | 'transformOrigin' | 'className' | 'class' | 'zIndex' | 'visibility'>;
    /**
     * Get the prefix pairs for composite shapes used to handle animation
     * @returns tuples array where each tuple contains a key corresponding to a method `get${key}Style` and its shape prefix
     * @internal
     */
    protected get compositeShapes(): [string, string][];
    animate(keyframes: Keyframe[], options?: number | KeyframeAnimationOptions): IAnimation | null;
    getShape<T extends DisplayObject>(name: string): T;
    private setVisibility;
    destroy(): void;
}
/**
 * <zh/> 图形 upsert 方法生命周期钩子
 *
 * <en/> Shape upsert method lifecycle hooks
 */
export interface UpsertHooks {
    /**
     * <zh/> 图形创建前
     *
     * <en/> Before creating the shape
     */
    beforeCreate?: () => void;
    /**
     * <zh/> 图形创建后
     *
     * <en/> After creating the shape
     * @param instance - <zh/> 图形实例 | <en/> shape instance
     */
    afterCreate?: (instance: DisplayObject) => void;
    /**
     * <zh/> 图形更新前
     *
     * <en/> Before updating the shape
     * @param instance - <zh/> 图形实例 | <en/> shape instance
     */
    beforeUpdate?: (instance: DisplayObject) => void;
    /**
     * <zh/> 图形更新后
     *
     * <en/> After updating the shape
     * @param instance - <zh/> 图形实例 | <en/> shape instance
     */
    afterUpdate?: (instance: DisplayObject) => void;
    /**
     * <zh/> 图形销毁前
     *
     * <en/> Before destroying the shape
     * @param instance - <zh/> 图形实例 | <en/> shape instance
     */
    beforeDestroy?: (instance: DisplayObject) => void;
    /**
     * <zh/> 图形销毁后
     *
     * <en/> After destroying the shape
     * @param instance - <zh/> 图形实例 | <en/> shape instance
     */
    afterDestroy?: (instance: DisplayObject) => void;
}
