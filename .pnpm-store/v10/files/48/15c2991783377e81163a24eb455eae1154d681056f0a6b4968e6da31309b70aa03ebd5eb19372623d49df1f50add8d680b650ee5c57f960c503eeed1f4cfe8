import type { ID } from '@antv/graphlib';
import type { Simulation } from 'd3-force';
import type { Graph, LayoutMapping, LayoutWithIterations } from '../types';
import type { D3ForceLayoutOptions, EdgeDatum, NodeDatum } from './types';
export declare class D3ForceLayout<T extends D3ForceLayoutOptions = D3ForceLayoutOptions> implements LayoutWithIterations<T> {
    id: string;
    simulation: Simulation<NodeDatum, EdgeDatum>;
    protected resolver: (value: LayoutMapping) => void;
    protected config: {
        inputNodeAttrs: string[];
        outputNodeAttrs: string[];
        simulationAttrs: string[];
    };
    protected forceMap: Record<string, Function>;
    options: Partial<T>;
    protected context: {
        assign: boolean;
        options: Partial<T>;
        nodes: NodeDatum[];
        edges: EdgeDatum[];
        graph?: Graph;
    };
    constructor(options?: Partial<T>);
    execute(graph: Graph, options?: T): Promise<LayoutMapping>;
    assign(graph: Graph, options?: T): Promise<void>;
    stop(): void;
    tick(iterations?: number): LayoutMapping;
    restart(): void;
    setFixedPosition(id: ID, position: (number | null)[]): void;
    protected getOptions(options: Partial<T>): T;
    protected genericLayout(assign: boolean, graph: Graph, options?: T): Promise<LayoutMapping>;
    protected getResult(): LayoutMapping;
    protected initSimulation(): Simulation<NodeDatum, EdgeDatum>;
    protected setSimulation(options: T): Simulation<NodeDatum, EdgeDatum>;
}
