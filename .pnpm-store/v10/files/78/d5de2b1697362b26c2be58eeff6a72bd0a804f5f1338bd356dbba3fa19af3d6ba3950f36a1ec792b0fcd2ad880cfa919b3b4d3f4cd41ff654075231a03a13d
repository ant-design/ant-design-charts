import { ID } from '@antv/graphlib';
import { Graph as IGraph } from '../types';
import type { DagreAlign, DagreRankdir } from './types';
export declare const layout: (g: IGraph, options: {
    keepNodeOrder: boolean;
    prevGraph: IGraph | null;
    edgeLabelSpace?: boolean;
    align?: DagreAlign;
    nodesep?: number;
    edgesep?: number;
    ranksep?: number;
    acyclicer: string;
    nodeOrder: ID[];
    ranker: 'network-simplex' | 'tight-tree' | 'longest-path';
    rankdir: DagreRankdir;
}) => {
    width: number;
    height: number;
};
