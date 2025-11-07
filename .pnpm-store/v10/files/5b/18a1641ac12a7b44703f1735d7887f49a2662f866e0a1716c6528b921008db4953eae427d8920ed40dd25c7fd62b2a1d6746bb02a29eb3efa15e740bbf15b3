import type { ForceLayoutOptions, Graph, LayoutMapping, LayoutWithIterations, Point } from '../types';
import { CalcGraph, FormatedOptions } from './types';
/**
 * <zh/> 力导向布局
 *
 * <en/> Force-directed layout
 */
export declare class ForceLayout implements LayoutWithIterations<ForceLayoutOptions> {
    options: ForceLayoutOptions;
    id: string;
    /**
     * time interval for layout force animations
     */
    private timeInterval;
    /**
     * compare with minMovement to end the nodes' movement
     */
    private judgingDistance;
    private running;
    private lastLayoutNodes;
    private lastLayoutEdges;
    private lastAssign;
    private lastCalcGraph;
    private lastGraph;
    private lastOptions;
    private lastVelMap;
    private lastResult;
    constructor(options?: ForceLayoutOptions);
    /**
     * Return the positions of nodes and edges(if needed).
     */
    execute(graph: Graph, options?: ForceLayoutOptions): Promise<LayoutMapping>;
    /**
     * To directly assign the positions to the nodes.
     */
    assign(graph: Graph, options?: ForceLayoutOptions): Promise<void>;
    /**
     * Stop simulation immediately.
     */
    stop(): void;
    /**
     * Manually steps the simulation by the specified number of iterations.
     * @see https://github.com/d3/d3-force#simulation_tick
     */
    tick(iterations?: number): LayoutMapping;
    private genericForceLayout;
    /**
     * Format merged layout options.
     * @param options merged layout options
     * @param graph original graph
     * @returns
     */
    private formatOptions;
    /**
     * Format centripetalOption in the option.
     * @param options merged layout options
     * @param calcGraph calculation graph
     */
    private formatCentripetal;
    /**
     * One iteration.
     * @param calcGraph calculation graph
     * @param graph origin graph
     * @param iter current iteration index
     * @param velMap nodes' velocity map
     * @param options formatted layout options
     * @returns
     */
    private runOneStep;
    /**
     * Calculate graph energy for monitoring convergence.
     * @param accMap acceleration map
     * @param nodes calculation nodes
     * @returns energy
     */
    private calTotalEnergy;
    /**
     * Calculate the repulsive forces according to coulombs law.
     * @param calcGraph calculation graph
     * @param accMap acceleration map
     * @param options formatted layout options
     */
    calRepulsive(calcGraph: CalcGraph, accMap: {
        [id: string]: Point;
    }, options: FormatedOptions): void;
    /**
     * Calculate the attractive forces according to hooks law.
     * @param calcGraph calculation graph
     * @param accMap acceleration map
     */
    calAttractive(calcGraph: CalcGraph, accMap: {
        [id: string]: Point;
    }, options: FormatedOptions): void;
    /**
     * Calculate the gravity forces toward center.
     * @param calcGraph calculation graph
     * @param graph origin graph
     * @param accMap acceleration map
     * @param options formatted layout options
     */
    calGravity(calcGraph: CalcGraph, graph: Graph, accMap: {
        [id: string]: Point;
    }, options: FormatedOptions): void;
    /**
     * Update the velocities for nodes.
     * @param calcGraph calculation graph
     * @param accMap acceleration map
     * @param velMap velocity map
     * @param options formatted layout options
     * @returns
     */
    updateVelocity(calcGraph: CalcGraph, accMap: {
        [id: string]: Point;
    }, velMap: {
        [id: string]: Point;
    }, options: FormatedOptions): void;
    /**
     * Update nodes' positions.
     * @param graph origin graph
     * @param calcGraph calculatition graph
     * @param velMap velocity map
     * @param options formatted layou options
     * @returns
     */
    updatePosition(graph: Graph, calcGraph: CalcGraph, velMap: {
        [id: string]: Point;
    }, options: FormatedOptions): void;
}
