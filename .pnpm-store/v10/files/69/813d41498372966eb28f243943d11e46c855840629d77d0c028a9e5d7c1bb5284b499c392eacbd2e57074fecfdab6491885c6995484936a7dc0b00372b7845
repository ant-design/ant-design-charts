import type { Graph, Node, Point } from '../types';
export type RadialNonoverlapForceOptions = {
    positions: Point[];
    focusIdx: number;
    radii: number[];
    iterations: number;
    height: number;
    width: number;
    k: number;
    strictRadial: boolean;
    nodes: Node[];
    speed?: number;
    gravity?: number;
    nodeSizeFunc: (node: Node) => number;
};
export declare const radialNonoverlapForce: (graph: Graph, options: RadialNonoverlapForceOptions) => Point[];
