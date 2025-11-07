import { AABB } from '@antv/g';
import type { Point } from '../types';
/**
 * Get WordWrapWidth for a text according the the length of the label and 'maxWidth'.
 * @param length  - length
 * @param maxWidth - maxWidth
 * @returns wordWrapWidth
 */
export declare function getWordWrapWidthWithBase(length: number, maxWidth: string | number): number;
/**
 * Get the proper wordWrapWidth for a labelShape according the the 'maxWidth' of keyShape.
 * @param keyShapeBox - keyShapeBox
 * @param maxWidth - maxWidth
 * @param zoom - zoom
 * @param enableBalanceShape - enableBalanceShape
 * @returns Get WordWrapWidth by bbox
 */
export declare function getWordWrapWidthByBox(keyShapeBox: AABB, maxWidth: string | number, zoom?: number, enableBalanceShape?: boolean): number;
/**
 * Get the proper wordWrapWidth for a labelShape according the the distance between two end points and 'maxWidth'.
 * @param points - points
 * @param maxWidth - maxWidth
 * @param zoom - zoom
 * @returns - wordWrapWidth for text
 */
export declare function getWordWrapWidthByEnds(points: [Point, Point], maxWidth: string | number, zoom?: number): number;
