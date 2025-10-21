import EventEmitter from '@antv/event-emitter';
import { Graph } from '@antv/graphlib';
import type { Layout, LayoutSupervisor } from './types';
import type { SupervisorOptions } from './supervisor';
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
    private worker;
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
