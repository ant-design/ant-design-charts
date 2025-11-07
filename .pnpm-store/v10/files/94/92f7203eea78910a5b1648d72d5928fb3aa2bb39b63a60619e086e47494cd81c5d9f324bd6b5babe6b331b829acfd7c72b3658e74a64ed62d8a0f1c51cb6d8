import { ID, Node } from '@antv/graphlib';
import type { Graph as IGraph, NodeData } from '../../types';
import type { DagreAlign } from '../types';
type Conflicts = Record<ID, Record<ID, boolean>>;
export declare const findType1Conflicts: (g: IGraph, layering?: ID[][]) => {};
export declare const findType2Conflicts: (g: IGraph, layering?: ID[][]) => {};
export declare const findOtherInnerSegmentNode: (g: IGraph, v: ID) => Node<NodeData>;
export declare const addConflict: (conflicts: Conflicts, v: ID, w: ID) => void;
export declare const hasConflict: (conflicts: Conflicts, v: ID, w: ID) => boolean;
export declare const verticalAlignment: (g: IGraph, layering: ID[][], conflicts: Conflicts, neighborFn: (v: ID) => Node<NodeData>[]) => {
    root: Record<ID, ID>;
    align: Record<ID, ID>;
};
export declare const horizontalCompaction: (g: IGraph, layering: ID[][], root: Record<ID, ID>, align: Record<ID, ID>, nodesep: number, edgesep: number, reverseSep?: boolean) => Record<ID, number>;
export declare const buildBlockGraph: (g: IGraph, layering: ID[][], root: Record<ID, ID>, nodesep: number, edgesep: number, reverseSep?: boolean) => IGraph;
export declare const findSmallestWidthAlignment: (g: IGraph, xss: Record<string, Record<string, number>>) => Record<string, number>;
export declare function alignCoordinates(xss: Record<string, Record<string, number>>, alignTo: Record<string, number>): void;
export declare const balance: (xss: Record<string, Record<string, number>>, align?: DagreAlign) => Record<string, number>;
export declare const positionX: (g: IGraph, options?: Partial<{
    align: DagreAlign;
    nodesep: number;
    edgesep: number;
}>) => Record<string, number>;
export declare const sep: (nodeSep: number, edgeSep: number, reverseSep: boolean) => (g: IGraph, v: ID, w: ID) => number;
export declare const width: (g: IGraph, v: ID) => any;
export {};
