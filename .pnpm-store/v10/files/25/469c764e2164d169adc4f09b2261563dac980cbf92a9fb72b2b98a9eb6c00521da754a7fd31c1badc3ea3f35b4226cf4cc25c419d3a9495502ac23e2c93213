import type { RuntimeContext } from '../runtime/types';
import type { EdgeData } from '../spec';
import type { EdgeStyle } from '../spec/element/edge';
import type { ID, IPointerEvent } from '../types';
import type { BaseBehaviorOptions } from './base-behavior';
import { BaseBehavior } from './base-behavior';
/**
 * <zh/> 创建边交互配置项
 *
 * <en/> Create edge behavior options
 */
export interface CreateEdgeOptions extends BaseBehaviorOptions {
    /**
     * <zh/> 是否启用创建边的功能
     *
     * <en/> Whether to enable the function of creating edges
     * @defaultValue true
     */
    enable?: boolean | ((event: IPointerEvent) => boolean);
    /**
     * <zh/> 新建边的样式配置
     *
     * <en/> Style configs of the new edge
     */
    style?: EdgeStyle;
    /**
     * <zh/> 交互配置 点击 或 拖拽
     *
     * <en/> trigger click or drag.
     * @defaultValue 'drag'
     */
    trigger?: 'click' | 'drag';
    /**
     * <zh/> 成功创建边回调
     *
     * <en/> Callback when create is completed.
     */
    onFinish?: (edge: EdgeData) => void;
    /**
     * <zh/> 创建边回调，返回边数据。如果返回 undefined，则不创建该边。
     *
     * <en/> Callback when create edge, return EdgeData. If returns undefined, the edge will not be created.
     */
    onCreate?: (edge: EdgeData) => EdgeData | undefined;
}
/**
 * <zh/> 创建边交互
 *
 * <en/> Create edge behavior
 * @remarks
 * <zh/> 通过拖拽或点击节点创建边，支持自定义边样式。
 *
 * <en/> Create edges by dragging or clicking nodes, and support custom edge styles.
 */
export declare class CreateEdge extends BaseBehavior<CreateEdgeOptions> {
    static defaultOptions: Partial<CreateEdgeOptions>;
    source?: ID;
    constructor(context: RuntimeContext, options: CreateEdgeOptions);
    /**
     * Update options
     * @param options - The options to update
     * @internal
     */
    update(options: Partial<CreateEdgeOptions>): void;
    private bindEvents;
    private drop;
    private handleCreateEdge;
    private updateAssistEdge;
    private createEdge;
    private cancelEdge;
    private getSelectedNodeIDs;
    private validate;
    private unbindEvents;
    destroy(): void;
}
