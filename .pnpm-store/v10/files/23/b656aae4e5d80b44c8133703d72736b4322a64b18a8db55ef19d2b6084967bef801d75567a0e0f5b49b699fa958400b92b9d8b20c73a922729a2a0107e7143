import { GraphData } from './types';
declare const detectDirectedCycle: (graphData: GraphData) => {
    [key: string]: string;
};
/**
 * 检测无向图中的所有Base cycles
 * refer: https://www.codeproject.com/Articles/1158232/Enumerating-All-Cycles-in-an-Undirected-Graph
 * @param graph
 * @param nodeIds 节点 ID 的数组
 * @param include 包含或排除指定的节点
 * @return [{[key: string]: INode}] 返回一组base cycles
 */
export declare const detectAllUndirectedCycle: (graphData: GraphData, nodeIds?: string[], include?: boolean) => any[];
/**
 * Johnson's algorithm, 时间复杂度 O((V + E)(C + 1))$ and space bounded by O(V + E)
 * refer: https://www.cs.tufts.edu/comp/150GA/homeworks/hw1/Johnson%2075.PDF
 * refer: https://networkx.github.io/documentation/stable/_modules/networkx/algorithms/cycles.html#simple_cycles
 * @param graph
 * @param nodeIds 节点 ID 的数组
 * @param include 包含或排除指定的节点
 * @return [{[key: string]: INode}] 返回所有的 simple cycles
 */
export declare const detectAllDirectedCycle: (graphData: GraphData, nodeIds?: string[], include?: boolean) => any[];
/**
 * 查找图中所有满足要求的圈
 * @param graph
 * @param directed 是否为有向图
 * @param nodeIds 节点 ID 的数组，若不指定，则返回图中所有的圈
 * @param include 包含或排除指定的节点
 * @return [{[key: string]: Node}] 包含所有环的数组，每个环用一个Object表示，其中key为节点id，value为该节点在环中指向的下一个节点
 */
export declare const detectAllCycles: (graphData: GraphData, directed?: boolean, nodeIds?: string[], include?: boolean) => any[];
export default detectDirectedCycle;
