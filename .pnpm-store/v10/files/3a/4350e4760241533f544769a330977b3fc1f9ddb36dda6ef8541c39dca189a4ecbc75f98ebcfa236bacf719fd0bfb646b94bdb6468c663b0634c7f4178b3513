import type { ConcentricLayoutOptions, Graph, Layout, LayoutMapping } from './types';
/**
 * <zh/> 同心圆布局
 *
 * <en/> Concentric layout
 */
export declare class ConcentricLayout implements Layout<ConcentricLayoutOptions> {
    options: ConcentricLayoutOptions;
    id: string;
    constructor(options?: ConcentricLayoutOptions);
    /**
     * Return the positions of nodes and edges(if needed).
     */
    execute(graph: Graph, options?: ConcentricLayoutOptions): Promise<LayoutMapping>;
    /**
     * To directly assign the positions to the nodes.
     */
    assign(graph: Graph, options?: ConcentricLayoutOptions): Promise<void>;
    private genericConcentricLayout;
}
