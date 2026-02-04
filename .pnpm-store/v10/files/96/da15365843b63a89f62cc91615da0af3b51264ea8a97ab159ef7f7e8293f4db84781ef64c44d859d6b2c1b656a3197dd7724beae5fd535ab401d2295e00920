import type { ForceAtlas2LayoutOptions, Graph, Layout, LayoutMapping } from '../types';
/**
 * <zh/> Atlas2 力导向布局
 *
 * <en/> Force Atlas 2 layout
 */
export declare class ForceAtlas2Layout implements Layout<ForceAtlas2LayoutOptions> {
    options: ForceAtlas2LayoutOptions;
    id: string;
    constructor(options?: ForceAtlas2LayoutOptions);
    /**
     * Return the positions of nodes and edges(if needed).
     */
    execute(graph: Graph, options?: ForceAtlas2LayoutOptions): Promise<LayoutMapping>;
    /**
     * To directly assign the positions to the nodes.
     */
    assign(graph: Graph, options?: ForceAtlas2LayoutOptions): Promise<void>;
    private genericForceAtlas2Layout;
    /**
     * Init the node positions if there is no initial positions.
     * And pre-calculate the size (max of width and height) for each node.
     * @param calcGraph graph for calculation
     * @param nodeSize node size config from layout options
     * @returns {SizeMap} node'id mapped to max of its width and height
     */
    private getSizes;
    /**
     * Format the options.
     * @param options input options
     * @param nodeNum number of nodes
     * @returns formatted options
     */
    private formatOptions;
    /**
     * Loops for fa2.
     * @param calcGraph graph for calculation
     * @param graph original graph
     * @param iteration iteration number
     * @param sizes nodes' size
     * @param options formatted layout options
     * @returns
     */
    private run;
    /**
     * One step for a loop.
     * @param graph graph for calculation
     * @param params parameters for a loop
     * @param options formatted layout's input options
     * @returns
     */
    private oneStep;
    /**
     * Calculate the attract forces for nodes.
     * @param graph graph for calculation
     * @param iter current iteration index
     * @param preventOverlapIters the iteration number for preventing overlappings
     * @param sizes nodes' sizes
     * @param forces forces for nodes, which will be modified
     * @param options formatted layout's input options
     * @returns
     */
    private getAttrForces;
    /**
     * Calculate the repulsive forces for nodes under barnesHut mode.
     * @param graph graph for calculatiion
     * @param forces forces for nodes, which will be modified
     * @param bodies force body map
     * @param options formatted layout's input options
     * @returns
     */
    private getOptRepGraForces;
    /**
     * Calculate the repulsive forces for nodes.
     * @param graph graph for calculatiion
     * @param iter current iteration index
     * @param preventOverlapIters the iteration number for preventing overlappings
     * @param forces forces for nodes, which will be modified
     * @param krPrime larger the krPrime, larger the repulsive force
     * @param sizes nodes' sizes
     * @param options formatted layout's input options
     * @returns
     */
    private getRepGraForces;
    /**
     * Update node positions.
     * @param graph graph for calculatiion
     * @param forces forces for nodes, which will be modified
     * @param preForces previous forces for nodes, which will be modified
     * @param sg constant for move distance of one step
     * @param options formatted layout's input options
     * @returns
     */
    private updatePos;
}
