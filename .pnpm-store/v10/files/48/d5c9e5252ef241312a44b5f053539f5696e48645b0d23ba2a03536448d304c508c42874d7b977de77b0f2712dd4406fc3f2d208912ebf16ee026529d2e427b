import type { RuntimeContext } from '../../runtime/types';
import type { BasePluginOptions } from '../base-plugin';
import { BasePlugin } from '../base-plugin';
/**
 * <zh/> 边绑定插件的配置项
 *
 * <en/> Edge bundling options
 */
export interface EdgeBundlingOptions extends BasePluginOptions {
    /**
     * <zh/> 边的强度
     *
     * <en/> The strength of the edge
     * @defaultValue 0.1
     */
    K?: number;
    /**
     * <zh/> 初始步长。在后续的周期中，步长将双倍递增
     *
     * <en/> An initial step size. In subsequent cycles, the step size will double incrementally
     * @defaultValue 0.1
     */
    lambda?: number;
    /**
     * <zh/> 模拟周期数
     *
     * <en/> The number of simulation cycles
     * @defaultValue 6
     */
    cycles?: number;
    /**
     * <zh/> 初始切割点数。在后续的周期中，切割点数将根据 `divRate` 逐步递增
     *
     * <en/> An initial number of subdivision points for each edge. In subsequent cycles, the number of subdivision points will increase gradually according to `divRate`
     * @defaultValue 1
     */
    divisions?: number;
    /**
     * <zh/> 切割点数增长率
     *
     * <en/> The rate at which the number of subdivision points increases
     * @defaultValue 2
     */
    divRate?: number;
    /**
     * <zh/> 指定在第一个周期中执行的迭代次数。在后续的周期中，迭代次数将根据 `iterRate` 逐步递减
     *
     * <en/> The number of iteration steps during the first cycle. In subsequent cycles, the number of iterations will decrease gradually according to `iterRate`
     * @defaultValue 90
     */
    iterations?: number;
    /**
     * <zh/> 迭代次数递减率
     *
     * <en/> The rate at which the number of iterations decreases
     * @defaultValue 2 / 3
     */
    iterRate?: number;
    /**
     * <zh/> 边兼容性阈值，决定了哪些边应该被绑定在一起
     *
     * <en/> Edge compatibility threshold, which determines which edges should be bundled together
     * @defaultValue 0.6
     */
    bundleThreshold?: number;
}
/**
 * <zh/> 边绑定
 *
 * <en/> Edge bundling
 * @remarks
 * <zh/> 边绑定（Edge Bundling）是一种图可视化技术，用于减少复杂网络图中的视觉混乱，并揭示图中的高级别模式和结构。其思想是将相邻的边捆绑在一起。
 *
 * <zh/> G6 中提供的边绑定插件是基于 FEDB（Force-Directed Edge Bundling for Graph Visualization）一文的实现：将边建模为可以相互吸引的柔性弹簧，通过自组织的方式进行捆绑。
 *
 * <en/> Edge bundling is a graph visualization technique used to reduce visual clutter in complex network graphs and reveal high-level patterns and structures in the graph. The idea is to bundle adjacent edges together.
 *
 * <en/> The edge bundling plugin provided in G6 is based on the implementation of the paper FEDB (Force-Directed Edge Bundling for Graph Visualization): modeling edges as flexible springs that can attract each other and bundling them in a self-organizing way.
 */
export declare class EdgeBundling extends BasePlugin<EdgeBundlingOptions> {
    static defaultOptions: Partial<EdgeBundlingOptions>;
    constructor(context: RuntimeContext, options?: EdgeBundlingOptions);
    private edgeBundles;
    private edgePoints;
    private get nodeMap();
    private divideEdges;
    private getVectorPosition;
    private measureEdgeCompatibility;
    private getEdgeBundles;
    private getSpringForce;
    private getElectrostaticForce;
    private getEdgeForces;
    protected onBundle: () => void;
    private bindEvents;
    private unbindEvents;
    destroy(): void;
}
