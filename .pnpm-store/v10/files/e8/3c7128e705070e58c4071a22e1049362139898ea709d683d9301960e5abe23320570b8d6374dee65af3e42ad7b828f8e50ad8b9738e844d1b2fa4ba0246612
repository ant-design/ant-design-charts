import type { CircularLayoutOptions, Graph, Layout, LayoutMapping } from './types';
/**
 * <zh/> 环形布局
 *
 * <en/> Circular layout
 */
export declare class CircularLayout implements Layout<CircularLayoutOptions> {
    options: CircularLayoutOptions;
    id: string;
    constructor(options?: CircularLayoutOptions);
    /**
     * Return the positions of nodes and edges(if needed).
     */
    execute(graph: Graph, options?: CircularLayoutOptions): Promise<LayoutMapping>;
    /**
     * To directly assign the positions to the nodes.
     */
    assign(graph: Graph, options?: CircularLayoutOptions): Promise<void>;
    private genericCircularLayout;
}
