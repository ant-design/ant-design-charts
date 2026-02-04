import EventEmitter from '@antv/event-emitter';
import { Edge, Graph, Node } from '@antv/graphlib';
import type { Layout, LayoutSupervisor } from './types';
/**
 * The payload transferred from main thread to the worker.
 */
export interface Payload {
    layout: {
        id: string;
        options: any;
        iterations: number;
    };
    nodes: Node<any>[];
    edges: Edge<any>[];
}
export interface SupervisorOptions {
    /**
     * Iterations run in algorithm such as d3force, will be passed in `tick()` later.
     */
    iterations: number;
}
/**
 * @example
 * const graph = new Graph();
 * const layout = new CircularLayout();
 *
 * const supervisor = new Supervisor(graph, layout, { iterations: 1000 });
 * const positions = await supervisor.execute();
 * supervisor.stop();
 * supervisor.kill();
 */
export declare class Supervisor extends EventEmitter implements LayoutSupervisor {
    private graph;
    private layout;
    private options?;
    /**
     * Internal worker.
     */
    private proxy;
    /**
     * Flag of running state.
     */
    private running;
    constructor(graph: Graph<any, any>, layout: Layout<any>, options?: Partial<SupervisorOptions>);
    spawnWorker(): void;
    execute(): Promise<any>;
    stop(): this;
    kill(): void;
    isRunning(): boolean;
}
