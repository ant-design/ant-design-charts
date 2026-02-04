import { getAdjMatrixAsync, connectedComponentAsync, getDegreeAsync, getInDegreeAsync, getOutDegreeAsync, detectCycleAsync, detectAllCyclesAsync, detectAllDirectedCycleAsync, detectAllUndirectedCycleAsync, dijkstraAsync, findAllPathAsync, findShortestPathAsync, floydWarshallAsync, labelPropagationAsync, louvainAsync, minimumSpanningTreeAsync, pageRankAsync, getNeighborsAsync, GADDIAsync } from './workers/index';
declare const detectDirectedCycleAsync: (graphData: import("./types").GraphData) => Promise<{
    [key: string]: string;
}>;
export { getAdjMatrixAsync, connectedComponentAsync, getDegreeAsync, getInDegreeAsync, getOutDegreeAsync, detectCycleAsync, detectDirectedCycleAsync, detectAllCyclesAsync, detectAllDirectedCycleAsync, detectAllUndirectedCycleAsync, dijkstraAsync, findAllPathAsync, findShortestPathAsync, floydWarshallAsync, labelPropagationAsync, louvainAsync, minimumSpanningTreeAsync, pageRankAsync, getNeighborsAsync, GADDIAsync, };
declare const _default: {
    getAdjMatrixAsync: (graphData: import("./types").GraphData, directed?: boolean) => Promise<import("./types").Matrix[]>;
    connectedComponentAsync: (graphData: import("./types").GraphData, directed?: boolean) => Promise<import("./types").NodeConfig[][]>;
    getDegreeAsync: (graphData: import("./types").GraphData) => Promise<import("./types").DegreeType>;
    getInDegreeAsync: (graphData: import("./types").GraphData, nodeId: string) => Promise<import("./types").DegreeType>;
    getOutDegreeAsync: (graphData: import("./types").GraphData, nodeId: string) => Promise<import("./types").DegreeType>;
    detectCycleAsync: (graphData: import("./types").GraphData) => Promise<{
        [key: string]: string;
    }>;
    detectDirectedCycleAsync: (graphData: import("./types").GraphData) => Promise<{
        [key: string]: string;
    }>;
    detectAllCyclesAsync: (graphData: import("./types").GraphData) => Promise<{
        [key: string]: string;
    }>;
    detectAllDirectedCycleAsync: (graphData: import("./types").GraphData) => Promise<{
        [key: string]: string;
    }>;
    detectAllUndirectedCycleAsync: (graphData: import("./types").GraphData) => Promise<{
        [key: string]: string;
    }>;
    dijkstraAsync: (graphData: import("./types").GraphData, source: string, directed?: boolean, weightPropertyName?: string) => Promise<{
        length: number;
        path: any;
        allPath: any;
    }>;
    findAllPathAsync: (graphData: import("./types").GraphData, start: string, end: string, directed?: boolean) => Promise<string[][]>;
    findShortestPathAsync: (graphData: import("./types").GraphData, start: string, end: string, directed?: boolean, weightPropertyName?: string) => Promise<{
        length: number;
        path: any;
        allPath: any;
    }>;
    floydWarshallAsync: (graphData: import("./types").GraphData, directed?: boolean) => Promise<import("./types").Matrix[]>;
    labelPropagationAsync: (graphData: import("./types").GraphData, directed: boolean, weightPropertyName: string, maxIteration?: number) => Promise<import("./types").ClusterData>;
    louvainAsync: (graphData: import("./types").GraphData, directed: boolean, weightPropertyName: string, threshold: number) => Promise<import("./types").ClusterData>;
    minimumSpanningTreeAsync: (graphData: import("./types").GraphData, weight?: boolean, algo?: string) => Promise<import("./types").EdgeConfig[]>;
    pageRankAsync: (graphData: import("./types").GraphData, epsilon?: number, linkProb?: number) => Promise<{
        [key: string]: number;
    }>;
    getNeighborsAsync: (nodeId: string, edges: import("./types").EdgeConfig[], type?: "source" | "target") => Promise<string[]>;
    GADDIAsync: (graphData: import("./types").GraphData, pattern: import("./types").GraphData, directed: boolean, k: number, length: number, nodeLabelProp?: string, edgeLabelProp?: string) => Promise<import("./types").GraphData[]>;
};
export default _default;
