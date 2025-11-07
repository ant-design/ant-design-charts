import getAdjMatrix from './adjacent-matrix';
import breadthFirstSearch from './bfs';
import connectedComponent from './connected-component';
import getDegree from './degree';
import { getInDegree, getOutDegree } from './degree';
import detectCycle, { detectAllCycles, detectAllDirectedCycle, detectAllUndirectedCycle } from './detect-cycle';
import depthFirstSearch from './dfs';
import dijkstra from './dijkstra';
import { findAllPath, findShortestPath } from './find-path';
import floydWarshall from './floydWarshall';
import labelPropagation from './label-propagation';
import louvain from './louvain';
import iLouvain from './i-louvain';
import kCore from './k-core';
import kMeans from './k-means';
import cosineSimilarity from './cosine-similarity';
import nodesCosineSimilarity from './nodes-cosine-similarity';
import minimumSpanningTree from './mts';
import pageRank from './pageRank';
import GADDI from './gaddi';
import Stack from './structs/stack';
import { getNeighbors } from './util';
import { IAlgorithm } from './types';
declare const detectDirectedCycle: (graphData: import("./types").GraphData) => {
    [key: string]: string;
};
export { getAdjMatrix, breadthFirstSearch, connectedComponent, getDegree, getInDegree, getOutDegree, detectCycle, detectDirectedCycle, detectAllCycles, detectAllDirectedCycle, detectAllUndirectedCycle, depthFirstSearch, dijkstra, findAllPath, findShortestPath, floydWarshall, labelPropagation, louvain, iLouvain, kCore, kMeans, cosineSimilarity, nodesCosineSimilarity, minimumSpanningTree, pageRank, getNeighbors, Stack, GADDI, IAlgorithm };
declare const _default: {
    getAdjMatrix: (graphData: import("./types").GraphData, directed?: boolean) => import("./types").Matrix[];
    breadthFirstSearch: (graphData: import("./types").GraphData, startNodeId: string, originalCallbacks?: import("./types").IAlgorithmCallbacks, directed?: boolean) => void;
    connectedComponent: typeof connectedComponent;
    getDegree: (graphData: import("./types").GraphData) => import("./types").DegreeType;
    getInDegree: (graphData: import("./types").GraphData, nodeId: string) => number;
    getOutDegree: (graphData: import("./types").GraphData, nodeId: string) => number;
    detectCycle: (graphData: import("./types").GraphData) => {
        [key: string]: string;
    };
    detectDirectedCycle: (graphData: import("./types").GraphData) => {
        [key: string]: string;
    };
    detectAllCycles: (graphData: import("./types").GraphData, directed?: boolean, nodeIds?: string[], include?: boolean) => any[];
    detectAllDirectedCycle: (graphData: import("./types").GraphData, nodeIds?: string[], include?: boolean) => any[];
    detectAllUndirectedCycle: (graphData: import("./types").GraphData, nodeIds?: string[], include?: boolean) => any[];
    depthFirstSearch: typeof depthFirstSearch;
    dijkstra: (graphData: import("./types").GraphData, source: string, directed?: boolean, weightPropertyName?: string) => {
        length: {};
        path: {};
        allPath: {};
    };
    findAllPath: (graphData: import("./types").GraphData, start: string, end: string, directed?: boolean) => any[];
    findShortestPath: (graphData: import("./types").GraphData, start: string, end: string, directed?: boolean, weightPropertyName?: string) => {
        length: any;
        path: any;
        allPath: any;
    };
    floydWarshall: (graphData: import("./types").GraphData, directed?: boolean) => import("./types").Matrix[];
    labelPropagation: (graphData: import("./types").GraphData, directed?: boolean, weightPropertyName?: string, maxIteration?: number) => import("./types").ClusterData;
    louvain: (graphData: import("./types").GraphData, directed?: boolean, weightPropertyName?: string, threshold?: number, inertialModularity?: boolean, propertyKey?: string, involvedKeys?: string[], uninvolvedKeys?: string[], inertialWeight?: number) => import("./types").ClusterData;
    iLouvain: (graphData: import("./types").GraphData, directed?: boolean, weightPropertyName?: string, threshold?: number, propertyKey?: string, involvedKeys?: string[], uninvolvedKeys?: string[], inertialWeight?: number) => import("./types").ClusterData;
    kCore: (graphData: import("./types").GraphData, k?: number) => import("./types").GraphData;
    kMeans: (data: import("./types").GraphData, k?: number, propertyKey?: string, involvedKeys?: string[], uninvolvedKeys?: string[], distanceType?: import("./types").DistanceType) => import("./types").ClusterData;
    cosineSimilarity: (item: number[], targetItem: number[]) => number;
    nodesCosineSimilarity: (nodes: import("./types").NodeConfig[], seedNode: import("./types").NodeConfig, propertyKey?: string, involvedKeys?: string[], uninvolvedKeys?: string[]) => {
        allCosineSimilarity: number[];
        similarNodes: import("./types").NodeConfig[];
    };
    minimumSpanningTree: (graphData: import("./types").GraphData, weight?: string, algo?: string) => import("./types").EdgeConfig[];
    pageRank: (graphData: import("./types").GraphData, epsilon?: number, linkProb?: number) => {
        [key: string]: number;
    };
    getNeighbors: (nodeId: string, edges?: import("./types").EdgeConfig[], type?: "source" | "target") => string[];
    Stack: typeof Stack;
    GADDI: (graphData: import("./types").GraphData, pattern: import("./types").GraphData, directed: boolean, k: number, length: number, nodeLabelProp?: string, edgeLabelProp?: string) => import("./types").GraphData[];
};
export default _default;
