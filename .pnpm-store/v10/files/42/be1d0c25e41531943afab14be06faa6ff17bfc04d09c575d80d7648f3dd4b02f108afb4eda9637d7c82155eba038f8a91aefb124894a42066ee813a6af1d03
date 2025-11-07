import { BaseLayout } from '../layouts';
import type { GraphData, LayoutOptions } from '../spec';
import type { STDLayoutOptions } from '../spec/layout';
import type { DrawData } from '../transforms/types';
import type { RuntimeContext } from './types';
export declare class LayoutController {
    private context;
    private supervisor?;
    private instance?;
    private instances;
    private animationResult?;
    private get presetOptions();
    private get options();
    constructor(context: RuntimeContext);
    getLayoutInstance(): BaseLayout[];
    /**
     * <zh/> 前布局，即在绘制前执行布局
     *
     * <en/> Pre-layout, that is, perform layout before drawing
     * @param data - <zh/> 绘制数据 | <en/> Draw data
     * @remarks
     * <zh/> 前布局应该只在首次绘制前执行，后续更新不会触发
     *
     * <en/> Pre-layout should only be executed before the first drawing, and subsequent updates will not trigger
     */
    preLayout(data: DrawData): Promise<void>;
    /**
     * <zh/> 后布局，即在完成绘制后执行布局
     *
     * <en/> Post layout, that is, perform layout after drawing
     * @param layoutOptions - <zh/> 布局配置项 | <en/> Layout options
     */
    postLayout(layoutOptions?: LayoutOptions | undefined): Promise<void>;
    private transformDataAfterLayout;
    /**
     * <zh/> 模拟布局
     *
     * <en/> Simulate layout
     * @returns <zh/> 模拟布局结果 | <en/> Simulated layout result
     */
    simulate(): Promise<GraphData>;
    stepLayout(data: GraphData, options: STDLayoutOptions, index: number): Promise<GraphData>;
    private graphLayout;
    private treeLayout;
    private inferTreeLayoutOffset;
    stopLayout(): void;
    getLayoutData(options: STDLayoutOptions): GraphData;
    /**
     * <zh/> 创建布局实例
     *
     * <en/> Create layout instance
     * @param options - <zh/> 布局配置项 | <en/> Layout options
     * @returns <zh/> 布局对象 | <en/> Layout object
     */
    private initGraphLayout;
    private updateElementPosition;
    destroy(): void;
}
