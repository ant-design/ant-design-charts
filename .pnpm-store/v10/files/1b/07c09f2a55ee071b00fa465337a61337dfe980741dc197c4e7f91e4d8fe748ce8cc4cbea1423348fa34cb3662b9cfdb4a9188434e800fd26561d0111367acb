import type { ComboData, EdgeData, GraphData, NodeData } from '../spec';
import type { ElementDatum } from '../types';
/**
 * <zh/> 合并两个 节点/边/Combo 的数据
 *
 * <en/> Merge the data of two nodes/edges/combos
 * @param original - <zh/> 原始数据 | <en/> original data
 * @param modified - <zh/> 待合并的数据 | <en/> data to be merged
 * @returns <zh/> 合并后的数据 | <en/> merged data
 * @remarks
 * <zh/> 只会合并第一层的数据，data、style 下的二级数据会被覆盖
 *
 * <en/> Only the first level of data will be merged, the second level of data under data and style will be overwritten
 */
export declare function mergeElementsData<T extends NodeData | EdgeData | ComboData>(original: T, modified: Partial<T>): T;
/**
 * <zh/> 克隆元素数据
 *
 * <en/> Clone clement data
 * @param data - <zh/> 待克隆的数据 | <en/> data to be cloned
 * @returns <zh/> 克隆后的数据 | <en/> cloned data
 * @remarks
 * <zh/> 只会克隆到第二层（data、style）
 *
 * <en/> Only clone to the second level (data, style)
 */
export declare function cloneElementData<T extends NodeData | EdgeData | ComboData>(data: T): T;
/**
 * <zh/> 判断数据是否为空
 *
 * <en/> Determine if the data is empty
 * @param data - <zh/> 图数据 | <en/> graph data
 * @returns <zh/> 是否为空 | <en/> is empty
 */
export declare function isEmptyData(data: GraphData): boolean;
/**
 * <zh/> 判断两个元素数据是否相等
 *
 * <en/> Determine if two element data are equal
 * @param original - <zh/> 原始数据 | <en/> original data
 * @param modified - <zh/> 修改后的数据 | <en/> modified data
 * @returns <zh/> 是否相等 | <en/> is equal
 * @remarks
 * <zh/> 相比于 isEqual，这个方法不会比较更下层的数据
 *
 * <en/> Compared to isEqual, this method does not compare data at a lower level
 */
export declare function isElementDataEqual(original?: Partial<ElementDatum>, modified?: Partial<ElementDatum>): boolean;
