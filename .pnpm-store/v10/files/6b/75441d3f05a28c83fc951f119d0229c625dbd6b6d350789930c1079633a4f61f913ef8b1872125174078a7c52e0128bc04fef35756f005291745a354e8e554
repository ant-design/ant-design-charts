import { Edge, ID } from '@antv/graphlib';
import { EdgeData, Graph as IGraph } from '../../types';
export declare const networkSimplex: (og: IGraph) => void;
export declare const initCutValues: (t: IGraph, g: IGraph) => void;
export declare const calcCutValue: (t: IGraph, g: IGraph, child: ID) => number;
export declare const initLowLimValues: (tree: IGraph, root?: ID) => void;
export declare const leaveEdge: (tree: IGraph) => Edge<EdgeData>;
export declare const enterEdge: (t: IGraph, g: IGraph, edge: Edge<EdgeData>) => Edge<EdgeData>;
/**
 *
 * @param t
 * @param g
 * @param e edge to remove
 * @param f edge to add
 */
export declare const exchangeEdges: (t: IGraph, g: IGraph, e: Edge<EdgeData>, f: Edge<EdgeData>) => void;
