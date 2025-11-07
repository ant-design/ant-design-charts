import type { EdgeConfig, GraphLabel, NodeConfig } from 'dagre';
import type { Graph, Layout, LayoutMapping, Node } from './types';
import { type Size } from './util/size';
export interface DagreLayoutOptions extends GraphLabel, NodeConfig, EdgeConfig {
    nodeSize?: Size | ((node: Node) => Size);
}
/**
 * <zh/> Dagre 布局
 *
 * <en/> Dagre layout
 */
export declare class DagreLayout implements Layout<DagreLayoutOptions> {
    static defaultOptions: Partial<DagreLayoutOptions>;
    id: string;
    options: Partial<DagreLayoutOptions>;
    constructor(options: Partial<DagreLayoutOptions>);
    execute(graph: Graph, options?: DagreLayoutOptions): Promise<LayoutMapping>;
    assign(graph: Graph, options?: DagreLayoutOptions): Promise<void>;
    private genericDagreLayout;
}
