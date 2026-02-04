import type { FruchtermanLayoutOptions, Graph, LayoutMapping, LayoutWithIterations } from './types';
/**
 * <zh/> Fruchterman 力导向布局
 *
 * <en/> Fruchterman force-directed layout
 */
export declare class FruchtermanLayout implements LayoutWithIterations<FruchtermanLayoutOptions> {
    options: FruchtermanLayoutOptions;
    id: string;
    private timeInterval;
    private running;
    private lastLayoutNodes;
    private lastLayoutEdges;
    private lastAssign;
    private lastGraph;
    private lastOptions;
    private lastClusterMap;
    private lastResult;
    constructor(options?: FruchtermanLayoutOptions);
    /**
     * Return the positions of nodes and edges(if needed).
     */
    execute(graph: Graph, options?: FruchtermanLayoutOptions): Promise<LayoutMapping>;
    /**
     * To directly assign the positions to the nodes.
     */
    assign(graph: Graph, options?: FruchtermanLayoutOptions): Promise<void>;
    /**
     * Stop simulation immediately.
     */
    stop(): void;
    /**
     * Manually steps the simulation by the specified number of iterations.
     * @see https://github.com/d3/d3-force#simulation_tick
     */
    tick(iterations?: number): LayoutMapping;
    private genericFruchtermanLayout;
    private formatOptions;
    private runOneStep;
    private applyCalculate;
    private calRepulsive;
    private calAttractive;
}
