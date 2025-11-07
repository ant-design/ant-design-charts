import type { EdgeData, GraphData, NodeData } from '../spec';
import type { TreeData } from '../types';
type TreeDataGetter = {
    getNodeData?: (datum: TreeData, depth: number) => NodeData;
    getEdgeData?: (source: TreeData, target: TreeData) => EdgeData;
    getChildren?: (datum: TreeData) => TreeData[];
};
/**
 * <zh/> 将树数据转换为图数据
 *
 * <en/> Convert tree data to graph data
 * @param treeData - <zh/> 树数据 | <en/> Tree data
 * @param getter - <zh/> 获取节点和边的方法 | <en/> Methods to get nodes and edges
 * @returns <zh/> 图数据 | <en/> Graph data
 */
export declare function treeToGraphData(treeData: TreeData, getter?: TreeDataGetter): GraphData;
export {};
