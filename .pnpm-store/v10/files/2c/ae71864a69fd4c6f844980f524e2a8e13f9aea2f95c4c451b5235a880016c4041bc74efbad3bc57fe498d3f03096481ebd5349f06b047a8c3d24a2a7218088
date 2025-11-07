import type { ComboData, EdgeData, GraphData, NodeData } from '../spec';
import type { DataID, ID } from '../types';
/**
 * <zh/> 获取节点/边/Combo 的 ID
 *
 * <en/> get the id of node/edge/combo
 * @param data - <zh/> 节点/边/Combo 的数据 | <en/> data of node/edge/combo
 * @returns <zh/> 节点/边/Combo 的 ID | <en/> ID of node/edge/combo
 */
export declare function idOf(data: Partial<NodeData | EdgeData | ComboData>): ID;
/**
 * <zh/> 获取节点/Combo 的父节点 ID
 *
 * <en/> get the parent id of node/combo
 * @param data - <zh/> 节点/Combo 的数据 | <en/> data of node/combo
 * @returns <zh/> 节点/Combo 的父节点 ID | <en/> parent id of node/combo
 */
export declare function parentIdOf(data: Partial<NodeData | ComboData>): string | null | undefined;
export declare function idsOf(data: GraphData, flat: true): ID[];
export declare function idsOf(data: GraphData, flat: false): DataID;
