import { EdgeConfig } from './types';
/**
 * 获取指定节点的所有邻居
 * @param nodeId 节点 ID
 * @param edges 图中的所有边数据
 * @param type 邻居类型
 */
export declare const getNeighbors: (nodeId: string, edges?: EdgeConfig[], type?: 'target' | 'source' | undefined) => string[];
/**
 * 获取指定节点的出边
 * @param nodeId 节点 ID
 * @param edges 图中的所有边数据
 */
export declare const getOutEdgesNodeId: (nodeId: string, edges: EdgeConfig[]) => EdgeConfig[];
/**
 * 获取指定节点的边，包括出边和入边
 * @param nodeId 节点 ID
 * @param edges 图中的所有边数据
 */
export declare const getEdgesByNodeId: (nodeId: string, edges: EdgeConfig[]) => EdgeConfig[];
/**
 * 生成唯一的 ID，规则是序号 + 时间戳
 * @param index 序号
 */
export declare const uniqueId: (index?: number) => string;
