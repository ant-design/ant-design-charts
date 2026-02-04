import { Graph, ID, Node } from '@antv/graphlib';
import { EdgeData, Graph as IGraph, NodeData } from '../types';
export declare const addDummyNode: (g: IGraph, type: string, data: NodeData, name: string) => ID;
export declare const simplify: (g: IGraph) => Graph<NodeData, EdgeData>;
export declare const asNonCompoundGraph: (g: IGraph) => IGraph;
export declare const zipObject: <T = any>(keys: ID[], values: T[]) => Record<ID, T>;
export declare const successorWeights: (g: IGraph) => Record<ID, Record<string, number>>;
export declare const predecessorWeights: (g: IGraph) => Record<ID, Record<ID, number>>;
export declare const intersectRect: (rect: {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
}, point: {
    x?: number;
    y?: number;
}) => {
    x: number;
    y: number;
};
export declare const buildLayerMatrix: (g: IGraph) => ID[][];
export declare const normalizeRanks: (g: IGraph) => void;
export declare const removeEmptyRanks: (g: IGraph, nodeRankFactor?: number) => void;
export declare const addBorderNode: (g: IGraph, prefix: string, rank?: number, order?: number) => ID;
export declare const maxRank: (g: IGraph) => number;
export declare const partition: <T = any>(collection: T[], fn: (val: T) => boolean) => {
    lhs: T[];
    rhs: T[];
};
export declare const minBy: <T = any>(array: T[], func: (param: T) => number) => T;
/**
 * @description DFS traversal.
 * @description.zh-CN DFS 遍历。
 */
export declare const dfs: (graph: IGraph, node: Node<NodeData> | Node<NodeData>[], order: 'pre' | 'post', isDirected: boolean) => ID[];
