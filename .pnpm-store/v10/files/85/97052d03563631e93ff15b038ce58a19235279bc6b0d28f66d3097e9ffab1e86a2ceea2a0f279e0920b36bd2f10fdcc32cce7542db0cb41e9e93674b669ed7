import { getPropertiesAtPoint } from './get-properties-at-point';
/**
 * Checks if a given point is in the stroke of a path.
 */
export function isPointInStroke(pathInput, point) {
    var distance = getPropertiesAtPoint(pathInput, point).distance;
    return Math.abs(distance) < 0.001; // 0.01 might be more permissive
}
//# sourceMappingURL=is-point-in-stroke.js.map