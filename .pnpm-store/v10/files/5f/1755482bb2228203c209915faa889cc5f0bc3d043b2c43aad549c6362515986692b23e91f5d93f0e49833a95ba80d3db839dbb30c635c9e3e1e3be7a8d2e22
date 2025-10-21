import { Edge as IEdge, Graph as IGraph, Node as INode } from '@antv/graphlib';
import { CentripetalOptions, Edge, EdgeData, ForceLayoutOptions, Node, NodeData, PointTuple } from '../types';
export interface CalcNodeData extends NodeData {
    x: number;
    y: number;
    z?: number;
    mass: number;
    nodeStrength: number;
}
export type CalcNode = INode<CalcNodeData>;
export interface CalcEdgeData extends EdgeData {
    linkDistance?: number;
    edgeStrength?: number;
}
export type CalcEdge = IEdge<CalcEdgeData>;
export type CalcGraph = IGraph<CalcNodeData, CalcEdgeData>;
interface FormatCentripetalOptions extends CentripetalOptions {
    leaf: (node: Node, nodes: Node[], edges: Edge[]) => number;
    /** Force strength for single nodes. */
    single: (node: Node) => number;
    /** Force strength for other nodes. */
    others: (node: Node) => number;
}
export interface FormatedOptions extends ForceLayoutOptions {
    width: number;
    height: number;
    center: PointTuple;
    minMovement: number;
    maxIteration: number;
    factor: number;
    interval: number;
    damping: number;
    maxSpeed: number;
    coulombDisScale: number;
    centripetalOptions: FormatCentripetalOptions;
    nodeSize: (d?: Node) => number;
    getMass: (d?: Node) => number;
    nodeStrength: (d?: Node) => number;
    edgeStrength: (d?: Edge) => number;
    linkDistance: (edge?: Edge, source?: any, target?: any) => number;
    clusterNodeStrength: (node?: Node) => number;
}
export {};
