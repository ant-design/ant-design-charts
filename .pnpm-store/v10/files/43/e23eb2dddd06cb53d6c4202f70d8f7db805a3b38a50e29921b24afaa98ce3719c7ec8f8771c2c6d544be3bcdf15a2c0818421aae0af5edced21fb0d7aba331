import type { Node, Point, ShortestPathRouterOptions } from '../../types';
/**
 * <zh/> 估算从起点到多个锚点的最小代价
 *
 * <en/> Estimate minimum cost from the starting point to multiple anchor points
 * @param from - <zh/> 起点 | <en/> source point
 * @param anchors - <zh/> 锚点 | <en/> anchor points
 * @param distFunc - <zh/> 距离函数 | <en/> distance function
 * @returns <zh/> 最小成本 | <en/> minimum cost
 */
export declare function estimateCost(from: Point, anchors: Point[], distFunc: (p1: Point, p2: Point) => number): number;
/**
 * <zh/> 已知一个点集与一个参考点，从点集中找到距离参考点最近的点
 *
 * <en/> Given a set of points and a reference point, find the point closest to the reference point from the set of points
 * @param points - <zh/> 点集 | <en/> set of points
 * @param refPoint - <zh/> 参考点 | <en/> reference point
 * @param distFunc - <zh/> 距离函数 | <en/> distance function
 * @returns <zh/> 最近的点 | <en/> nearest point
 */
export declare function getNearestPoint(points: Point[], refPoint: Point, distFunc: (p1: Point, p2: Point) => number): Point;
/**
 * Find the shortest path between a given source node to a destination node according to A* Search Algorithm：https://www.geeksforgeeks.org/a-search-algorithm/
 * @param sourceNode - <zh/> 源节点 | <en/> source node
 * @param targetNode - <zh/> 目标节点 | <en/> target node
 * @param nodes - <zh/> 图上所有节点 | <en/> all nodes on the graph
 * @param config - <zh/> 路由配置 | <en/> router options
 * @returns <zh/> 控制点数组 | <en/> control point array
 */
export declare function aStarSearch(sourceNode: Node, targetNode: Node, nodes: Node[], config: ShortestPathRouterOptions): Point[];
type Item = {
    id: string;
    value: number;
};
/**
 * <zh/> 有序数组，按升序排列
 *
 * <en/> Sorted array, sorted in ascending order
 */
export declare class SortedArray {
    arr: Item[];
    private map;
    constructor();
    private _innerAdd;
    /**
     * <zh/> 将新项添加到适当的索引位置
     *
     * <en/> Add the new item to the appropriate index
     * @param item - <zh/> 新项 | <en/> new item
     */
    add(item: Item): void;
    remove(id: string): void;
    private _clearAndGetMinId;
    private _findFirstId;
    minId(clear: boolean): string | undefined;
}
export {};
