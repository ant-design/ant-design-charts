import { GraphData, NodeConfig } from "./types";
/**
 * Generate all connected components for an undirected graph
 * @param graph
 */
export declare const detectConnectedComponents: (graphData: GraphData) => NodeConfig[][];
/**
 * Tarjan's Algorithm 复杂度  O(|V|+|E|)
 * For directed graph only
 * a directed graph is said to be strongly connected if "every vertex is reachable from every other vertex".
 * refer: http://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm
 * @param graph
 * @return a list of strongly connected components
 */
export declare const detectStrongConnectComponents: (graphData: GraphData) => NodeConfig[][];
export default function getConnectedComponents(graphData: GraphData, directed?: boolean): NodeConfig[][];
