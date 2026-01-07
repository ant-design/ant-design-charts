import type { Graph, Layout, LayoutMapping, MDSLayoutOptions } from './types';
/**
 * <zh/> 多维缩放算法布局
 *
 * <en/> Multidimensional scaling layout
 */
export declare class MDSLayout implements Layout<MDSLayoutOptions> {
    options: MDSLayoutOptions;
    id: string;
    constructor(options?: MDSLayoutOptions);
    /**
     * Return the positions of nodes and edges(if needed).
     */
    execute(graph: Graph, options?: MDSLayoutOptions): Promise<LayoutMapping>;
    /**
     * To directly assign the positions to the nodes.
     */
    assign(graph: Graph, options?: MDSLayoutOptions): Promise<void>;
    private genericMDSLayout;
}
