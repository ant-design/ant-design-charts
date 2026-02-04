import type { Graph, GridLayoutOptions, Layout, LayoutMapping } from './types';
/**
 * <zh/> 网格布局
 *
 * <en/> Grid layout
 */
export declare class GridLayout implements Layout<GridLayoutOptions> {
    options: GridLayoutOptions;
    id: string;
    constructor(options?: GridLayoutOptions);
    /**
     * Return the positions of nodes and edges(if needed).
     */
    execute(graph: Graph, options?: GridLayoutOptions): Promise<LayoutMapping>;
    /**
     * To directly assign the positions to the nodes.
     */
    assign(graph: Graph, options?: GridLayoutOptions): Promise<void>;
    private genericGridLayout;
}
