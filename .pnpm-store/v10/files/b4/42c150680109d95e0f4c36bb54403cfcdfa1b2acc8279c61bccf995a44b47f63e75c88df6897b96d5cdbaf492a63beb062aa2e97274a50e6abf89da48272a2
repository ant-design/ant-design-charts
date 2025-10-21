import type { Graph, Layout, LayoutMapping, RadialLayoutOptions } from '../types';
/**
 * <zh/> 径向布局
 *
 * <en/> Radial layout
 */
export declare class RadialLayout implements Layout<RadialLayoutOptions> {
    options: RadialLayoutOptions;
    id: string;
    constructor(options?: RadialLayoutOptions);
    /**
     * Return the positions of nodes and edges(if needed).
     */
    execute(graph: Graph, options?: RadialLayoutOptions): Promise<LayoutMapping>;
    /**
     * To directly assign the positions to the nodes.
     */
    assign(graph: Graph, options?: RadialLayoutOptions): Promise<void>;
    private genericRadialLayout;
    private run;
    private oneIteration;
}
