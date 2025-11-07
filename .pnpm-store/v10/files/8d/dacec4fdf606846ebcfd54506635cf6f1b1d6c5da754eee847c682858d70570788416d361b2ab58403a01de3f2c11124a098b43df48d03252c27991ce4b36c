import type { AABB } from '@antv/g';
import type { Anchor, NodeLikeData, Placement, Point, RelativePlacement } from '../types';
/**
 * <zh/> 获取节点/ combo 的位置坐标
 *
 * <en/> Get the position of node/combo
 * @param datum - <zh/> 节点/ combo 的数据 | <en/> data of node/combo
 * @returns - <zh/> 坐标 | <en/> position
 */
export declare function positionOf(datum: NodeLikeData): Point;
/**
 * <zh/> 检查数据是否有位置坐标
 *
 * <en/> Check if the data has a position coordinate
 * @param datum - <zh/> 节点/ combo 的数据 | <en/> data of node/combo
 * @returns - <zh/> 是否有位置坐标 | <en/> Whether there is a position coordinate
 */
export declare function hasPosition(datum: NodeLikeData): boolean;
/**
 * <zh/> 获取相对位置坐标
 *
 * <en/> Get position by relative placement
 * @param bbox - <zh/> 元素包围盒 | <en/> element bounding box
 * @param placement - <zh/> 相对于元素的位置 | <en/> Point relative to element
 * @returns - <zh/> 坐标 | <en/> position
 */
export declare function getXYByRelativePlacement(bbox: AABB, placement: RelativePlacement): Point;
/**
 * <zh/> 获取位置坐标
 *
 * <en/> Get position by placement
 * @param bbox - <zh/> 元素包围盒 | <en/> element bounding box
 * @param placement - <zh/> 相对于元素的位置 | <en/> Point relative to element
 * @returns - <zh/> 坐标 | <en/> position
 */
export declare function getXYByPlacement(bbox: AABB, placement?: Placement): Point;
/**
 * <zh/> 获取锚点坐标
 *
 * <en/> Get anchor position
 * @param bbox - <zh/> 元素包围盒 | <en/> element bounding box
 * @param anchor - <zh/> 锚点位置 | <en/> Anchor
 * @returns - <zh/> 坐标 | <en/> position
 */
export declare function getXYByAnchor(bbox: AABB, anchor: Anchor): Point;
/**
 * <zh/> 通过 rect points 路径点获取 position 方位配置.
 *
 * <en/> The rect points command is used to obtain the position and orientation configuration.
 * @param points Points
 * @returns `{ left: number; right: number; top: number; bottom: number }`
 */
export declare const getPositionByRectPoints: (points: Point[]) => {
    left: number;
    right: number;
    top: number;
    bottom: number;
};
