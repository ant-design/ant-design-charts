export type Matrix = number[];
export interface NodeConfig {
    id: string;
    clusterId?: string;
    [key: string]: any;
}
export interface EdgeConfig {
    source: string;
    target: string;
    weight?: number;
    [key: string]: any;
}
export interface GraphData {
    nodes?: NodeConfig[];
    edges?: EdgeConfig[];
}
export interface Cluster {
    id: string;
    nodes: NodeConfig[];
    sumTot?: number;
}
export interface ClusterData {
    clusters: Cluster[];
    clusterEdges: EdgeConfig[];
}
export interface ClusterMap {
    [key: string]: Cluster;
}
export interface IAlgorithmCallbacks {
    enter?: (param: {
        current: string;
        previous: string;
    }) => void;
    leave?: (param: {
        current: string;
        previous?: string;
    }) => void;
    allowTraversal?: (param: {
        previous?: string;
        current?: string;
        next: string;
    }) => boolean;
}
export interface DegreeType {
    [key: string]: {
        degree: number;
        inDegree: number;
        outDegree: number;
    };
}
export declare enum DistanceType {
    EuclideanDistance = "euclideanDistance"
}
export interface PlainObject {
    [key: string]: any;
}
export interface KeyValueMap {
    [key: string]: any[];
}
export interface IAlgorithm {
    getAdjMatrix: (graphData: GraphData, directed?: boolean) => Matrix[];
    breadthFirstSearch: (graphData: GraphData, startNodeId: string, originalCallbacks?: IAlgorithmCallbacks, directed?: boolean) => void;
    connectedComponent: (graphData: GraphData, directed?: boolean) => NodeConfig[][];
    getDegree: (graphData: GraphData) => DegreeType;
    getInDegree: (graphData: GraphData, nodeId: string) => number;
    getOutDegree: (graphData: GraphData, nodeId: string) => number;
    detectCycle: (graphData: GraphData) => {
        [key: string]: string;
    };
    detectDirectedCycle: (graphData: GraphData) => {
        [key: string]: string;
    };
    detectAllCycles: (graphData: GraphData, directed?: boolean, nodeIds?: string[], include?: boolean) => any;
    detectAllDirectedCycle: (graphData: GraphData, nodeIds?: string[], include?: boolean) => any;
    detectAllUndirectedCycle: (graphData: GraphData, nodeIds?: string[], include?: boolean) => any;
    depthFirstSearch: (graphData: GraphData, startNodeId: string, callbacks?: IAlgorithmCallbacks) => void;
    dijkstra: (graphData: GraphData, source: string, directed?: boolean, weightPropertyName?: string) => {
        length: object;
        allPath: object;
        path: object;
    };
    findAllPath: (graphData: GraphData, start: string, end: string, directed?: boolean) => any;
    findShortestPath: (graphData: GraphData, start: string, end: string, directed?: boolean, weightPropertyName?: string) => any;
    floydWarshall: (graphData: GraphData, directed?: boolean) => Matrix[];
    labelPropagation: (graphData: GraphData, directed?: boolean, weightPropertyName?: string, maxIteration?: number) => ClusterData;
    louvain: (graphData: GraphData, directed: boolean, weightPropertyName: string, threshold: number) => ClusterData;
    minimumSpanningTree: (graphData: GraphData, weight?: string, algo?: string) => EdgeConfig[];
    pageRank: (graphData: GraphData, epsilon?: number, linkProb?: number) => {
        [key: string]: number;
    };
    getNeighbors: (nodeId: string, edges?: EdgeConfig[], type?: 'target' | 'source' | undefined) => string[];
    Stack: any;
    GADDI: (graphData: GraphData, pattern: GraphData, directed: boolean, k: number, length: number, nodeLabelProp: string, edgeLabelProp: string) => GraphData[];
    getAdjMatrixAsync: (graphData: GraphData, directed?: boolean) => Matrix[];
    connectedComponentAsync: (graphData: GraphData, directed?: boolean) => NodeConfig[][];
    getDegreeAsync: (graphData: GraphData) => DegreeType;
    getInDegreeAsync: (graphData: GraphData, nodeId: string) => number;
    getOutDegreeAsync: (graphData: GraphData, nodeId: string) => number;
    detectCycleAsync: (graphData: GraphData) => {
        [key: string]: string;
    };
    detectDirectedCycleAsync: (graphData: GraphData) => {
        [key: string]: string;
    };
    detectAllCyclesAsync: (graphData: GraphData, directed?: boolean, nodeIds?: string[], include?: boolean) => any;
    detectAllDirectedCycleAsync: (graphData: GraphData, nodeIds?: string[], include?: boolean) => any;
    detectAllUndirectedCycleAsync: (graphData: GraphData, nodeIds?: string[], include?: boolean) => any;
    dijkstraAsync: (graphData: GraphData, source: string, directed?: boolean, weightPropertyName?: string) => {
        length: object;
        allPath: object;
        path: object;
    };
    findAllPathAsync: (graphData: GraphData, start: string, end: string, directed?: boolean) => any;
    findShortestPathAsync: (graphData: GraphData, start: string, end: string, directed?: boolean, weightPropertyName?: string) => any;
    floydWarshallAsync: (graphData: GraphData, directed?: boolean) => Matrix[];
    labelPropagationAsync: (graphData: GraphData, directed?: boolean, weightPropertyName?: string, maxIteration?: number) => ClusterData;
    louvainAsync: (graphData: GraphData, directed: boolean, weightPropertyName: string, threshold: number) => ClusterData;
    minimumSpanningTreeAsync: (graphData: GraphData, weight?: string, algo?: string) => EdgeConfig[];
    pageRankAsync: (graphData: GraphData, epsilon?: number, linkProb?: number) => {
        [key: string]: number;
    };
    getNeighborsAsync: (nodeId: string, edges?: EdgeConfig[], type?: 'target' | 'source' | undefined) => string[];
    GADDIAsync: (graphData: GraphData, pattern: GraphData, directed: boolean, k: number, length: number, nodeLabelProp: string, edgeLabelProp: string) => GraphData[];
}
