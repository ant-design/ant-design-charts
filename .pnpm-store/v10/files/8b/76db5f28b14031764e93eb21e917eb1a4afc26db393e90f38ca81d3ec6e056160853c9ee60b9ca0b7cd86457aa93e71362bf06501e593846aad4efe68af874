import { BaseLayout } from '../layouts/base-layout';
import type { LayoutMapping } from '@antv/layout';
import type { AntVLayout } from '../layouts/types';
import type { RuntimeContext } from '../runtime/types';
import type { GraphData } from '../spec/data';
import type { LayoutOptions, STDLayoutOptions } from '../spec/layout';
/**
 * <zh/> 判断是否是 combo 布局
 *
 * <en/> Determine if it is a combo layout
 * @param options - <zh/> 布局配置项 | <en/> Layout options
 * @returns <zh/> 是否是 combo 布局 | <en/> Whether it is a combo layout
 */
export declare function isComboLayout(options: STDLayoutOptions): boolean;
/**
 * <zh/> 判断是否是树图布局
 *
 * <en/> Determine if it is a tree layout
 * @param options - <zh/> 布局配置项 | <en/> Layout options
 * @returns <zh/> 是否是树图布局 | <en/> Whether it is a tree layout
 */
export declare function isTreeLayout(options: STDLayoutOptions): boolean;
/**
 * <zh/> 数据中是否指定了位置
 *
 * <en/> Is the position specified in the data
 * @param data - <zh/> 数据 | <en/> Data
 * @returns <zh/> 是否指定了位置 | <en/> Is the position specified
 */
export declare function isPositionSpecified(data: Record<string, unknown>): boolean;
/**
 * <zh/> 是否是前布局
 *
 * <en/> Is pre-layout
 * @remarks
 * <zh/> 前布局是指在初始化元素前计算布局，适用于一些布局需要提前计算位置的场景。
 *
 * <en/> Pre-layout refers to calculating the layout before initializing the elements, which is suitable for some layouts that need to calculate the position in advance.
 * @param options - <zh/> 布局配置项 | <en/> Layout options
 * @returns <zh/> 是否是前布局 | <en/> Is it a pre-layout
 */
export declare function isPreLayout(options?: LayoutOptions): boolean | undefined;
/**
 * <zh/> 将图布局结果转换为 G6 数据
 *
 * <en/> Convert the layout result to G6 data
 * @param layoutMapping - <zh/> 布局映射 | <en/> Layout mapping
 * @returns <zh/> G6 数据 | <en/> G6 data
 */
export declare function layoutMapping2GraphData(layoutMapping: LayoutMapping): GraphData;
/**
 * <zh/> 将 @antv/layout 布局适配为 G6 布局
 *
 * <en/> Adapt @antv/layout layout to G6 layout
 * @param Ctor - <zh/> 布局类 | <en/> Layout class
 * @param context - <zh/> 运行时上下文 | <en/> Runtime context
 * @returns <zh/> G6 布局类 | <en/> G6 layout class
 */
export declare function layoutAdapter(Ctor: new (options: Record<string, unknown>) => AntVLayout, context: RuntimeContext): new (context: RuntimeContext, options?: Record<string, unknown>) => BaseLayout;
/**
 * <zh/> 调用布局成员方法
 *
 * <en/> Call layout member methods
 * @remarks
 * <zh/> 提供一种通用的调用方式来调用 G6 布局和 \@antv/layout 布局上的方法
 *
 * <en/> Provide a common way to call methods on G6 layout and \@antv/layout layout
 * @param layout - <zh/> 布局实例 | <en/> Layout instance
 * @param method - <zh/> 方法名 | <en/> Method name
 * @param args - <zh/> 参数 | <en/> Arguments
 * @returns <zh/> 返回值 | <en/> Return value
 */
export declare function invokeLayoutMethod(layout: BaseLayout, method: string, ...args: unknown[]): any;
/**
 * <zh/> 获取布局成员属性
 *
 * <en/> Get layout member properties
 * @param layout - <zh/> 布局实例 | <en/> Layout instance
 * @param name - <zh/> 属性名 | <en/> Property name
 * @returns <zh/> 返回值 | <en/> Return value
 */
export declare function getLayoutProperty(layout: BaseLayout, name: string): any;
