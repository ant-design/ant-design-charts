import type { ComboCombinedLayoutOptions, Graph, Layout, LayoutMapping } from './types';
/**
 * <zh/> 组合布局
 *
 * <en/> Combo-Combined layout
 */
export declare class ComboCombinedLayout implements Layout<ComboCombinedLayoutOptions> {
    options: ComboCombinedLayoutOptions;
    id: string;
    constructor(options?: ComboCombinedLayoutOptions);
    /**
     * Return the positions of nodes and edges(if needed).
     */
    execute(graph: Graph, options?: ComboCombinedLayoutOptions): Promise<LayoutMapping>;
    /**
     * To directly assign the positions to the nodes.
     */
    assign(graph: Graph, options?: ComboCombinedLayoutOptions): Promise<void>;
    private genericComboCombinedLayout;
    private initVals;
    private getInnerGraphs;
}
