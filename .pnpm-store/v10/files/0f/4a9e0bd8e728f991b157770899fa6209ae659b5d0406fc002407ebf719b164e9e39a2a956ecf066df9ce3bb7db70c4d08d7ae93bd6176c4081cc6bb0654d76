import { Graph } from '@antv/graphlib';
import type { Matrix, Edge, Node, OutNode, Point } from '../types';
export declare const floydWarshall: (adjMatrix: Matrix[]) => Matrix[];
export declare const getAdjMatrix: (data: {
    nodes: Node[];
    edges: Edge[];
}, directed: boolean) => Matrix[];
/**
 * scale matrix
 * @param matrix [ [], [], [] ]
 * @param ratio
 */
export declare const scaleMatrix: (matrix: Matrix[], ratio: number) => Matrix[];
/**
 * calculate the bounding box for the nodes according to their x, y, and size
 * @param nodes nodes in the layout
 * @returns
 */
export declare const getLayoutBBox: (nodes: OutNode[]) => {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
};
/**
 * calculate the euclidean distance form p1 to p2
 * @param p1
 * @param p2
 * @returns
 */
export declare const getEuclideanDistance: (p1: Point, p2: Point) => number;
/**
 * Depth first search begin from nodes in graphCore data.
 * @param graphCore graphlib data structure
 * @param nodes begin nodes
 * @param fn will be called while visiting each node
 * @param mode 'TB' - visit from top to bottom; 'BT' - visit from bottom to top;
 * @returns
 */
export declare const graphTreeDfs: (graph: Graph<any, any>, nodes: Node[], fn: (n: Node) => void, mode: 'TB' | 'BT', treeKey: string, stopFns?: {
    stopBranchFn?: (node: Node) => boolean;
    stopAllFn?: (node: Node) => boolean;
}) => void;
