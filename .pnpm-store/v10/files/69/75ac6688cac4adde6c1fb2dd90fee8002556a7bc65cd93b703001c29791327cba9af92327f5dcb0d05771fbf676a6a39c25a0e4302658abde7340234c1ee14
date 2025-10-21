import type { Graph, Layout, LayoutMapping, RandomLayoutOptions } from './types';
/**
 * <zh/> 随机布局
 *
 * <en/> Random layout
 */
export declare class RandomLayout implements Layout<RandomLayoutOptions> {
    options: RandomLayoutOptions;
    id: string;
    constructor(options?: RandomLayoutOptions);
    /**
     * Return the positions of nodes and edges(if needed).
     */
    execute(graph: Graph, options?: RandomLayoutOptions): Promise<LayoutMapping>;
    /**
     * To directly assign the positions to the nodes.
     */
    assign(graph: Graph, options?: RandomLayoutOptions): Promise<void>;
    private genericRandomLayout;
}
