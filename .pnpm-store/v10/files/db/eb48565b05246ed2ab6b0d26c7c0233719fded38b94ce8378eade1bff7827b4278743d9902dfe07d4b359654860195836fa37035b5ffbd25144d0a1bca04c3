import type { BaseStyleProps } from '@antv/g';
import type { AnimationStage } from '../spec/element/animation';
import type { Combo, Edge, Element, ElementDatum, ElementType, ID, Node, State } from '../types';
import type { RuntimeContext } from './types';
export declare class ElementController {
    private context;
    private container;
    private elementMap;
    private shapeTypeMap;
    constructor(context: RuntimeContext);
    init(): void;
    private initContainer;
    private emit;
    private forEachElementData;
    getElementType(elementType: ElementType, datum: ElementDatum): string;
    private getTheme;
    getThemeStyle(elementType: ElementType): import("../spec/element/node").NodeStyle | import("../spec/element/edge").EdgeStyle | import("../spec/element/combo").ComboStyle;
    getThemeStateStyle(elementType: ElementType, states: State[]): any;
    private paletteStyle;
    private computePaletteStyle;
    getPaletteStyle(elementType: ElementType, id: ID): BaseStyleProps;
    private defaultStyle;
    /**
     * <zh/> 计算单个元素的默认样式
     *
     * <en/> compute default style of single element
     */
    private computeElementDefaultStyle;
    private computeElementsDefaultStyle;
    getDefaultStyle(id: ID): Record<string, unknown>;
    private getElementState;
    private stateStyle;
    /**
     * <zh/> 获取单个元素的单个状态的样式
     *
     * <en/> get single state style of single element
     */
    private getElementStateStyle;
    /**
     * <zh/> 计算单个元素的合并状态样式
     *
     * <en/> compute merged state style of single element
     */
    private computeElementStatesStyle;
    /**
     * <zh/> 计算全部元素的状态样式
     *
     * <en/> compute state style of all elements
     * @param ids - <zh/> 计算指定元素的状态样式 | <en/> compute state style of specified elements
     */
    private computeElementsStatesStyle;
    getStateStyle(id: ID): Record<string, unknown>;
    private computeStyle;
    getElement<T extends Element>(id: ID): T | undefined;
    getNodes(): Node[];
    getEdges(): Edge[];
    getCombos(): Combo[];
    getElementComputedStyle(elementType: ElementType, datum: ElementDatum): any;
    private getDrawData;
    /**
     * <zh/> 开始绘制流程
     *
     * <en/> start render process
     */
    draw(context?: DrawContext): import("@antv/g").IAnimation | null | undefined;
    preLayoutDraw(context?: DrawContext): Promise<import("@antv/g").IAnimation | null | undefined>;
    private setAnimationTask;
    private computeChangesAndDrawData;
    private transformData;
    private createElement;
    private createElements;
    private getUpdateStageStyle;
    private updateElement;
    private updateElements;
    private visibilityCache;
    /**
     * <zh/> 标记销毁元素
     *
     * <en/> mark destroy element
     * @param data - <zh/> 绘制数据 | <en/> draw data
     */
    private markDestroyElement;
    private destroyElement;
    private destroyElements;
    private clearElement;
    /**
     * <zh/> 将布局结果对齐到元素，避免视图偏移。会修改布局结果
     *
     * <en/> Align the layout result to the element to avoid view offset. Will modify the layout result
     * @param layoutResult - <zh/> 布局结果 | <en/> layout result
     * @param id - <zh/> 元素 ID | <en/> element ID
     */
    private alignLayoutResultToElement;
    /**
     * <zh/> 收起节点
     *
     * <en/> collapse node
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @param options - <zh/> 选项 | <en/> options
     */
    collapseNode(id: ID, options: CollapseExpandNodeOptions): Promise<void>;
    /**
     * <zh/> 展开节点
     *
     * <en/> expand node
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @param animation - <zh/> 是否使用动画，默认为 true | <en/> Whether to use animation, default is true
     */
    expandNode(id: ID, options: CollapseExpandNodeOptions): Promise<void>;
    collapseCombo(id: ID, animation: boolean): Promise<void>;
    expandCombo(id: ID, animation: boolean): Promise<void>;
    /**
     * <zh/> 清空所有元素
     *
     * <en/> clear all elements
     */
    clear(): void;
    destroy(): void;
}
export interface DrawContext {
    /** <zh/> 是否使用动画，默认为 true | <en/> Whether to use animation, default is true */
    animation?: boolean;
    /** <zh/> 当前绘制阶段 | <en/> Current draw stage */
    stage?: AnimationStage;
    /** <zh/> 是否不抛出事件 | <en/> Whether not to dispatch events */
    silence?: boolean;
    /** <zh/> 收起/展开的对象 ID | <en/> ID of the object to collapse/expand */
    collapseExpandTarget?: ID;
    /** <zh/> 绘制类型 | <en/> Draw type */
    type?: 'render' | 'draw';
    /** <zh/> 展开阶段的目标元素 id | <en/> ID of the target element in the expand stage */
    target?: ID;
}
/**
 * <zh/> 展开/收起节点选项
 *
 * <en/> Expand / collapse node options
 */
export interface CollapseExpandNodeOptions {
    /**
     * <zh/> 是否使用动画
     *
     * <en/> Whether to use animation
     */
    animation?: boolean;
    /**
     * <zh/> 保证展开/收起的节点位置不变
     *
     * <en/> Ensure that the position of the expanded/collapsed node remains unchanged
     */
    align?: boolean;
}
