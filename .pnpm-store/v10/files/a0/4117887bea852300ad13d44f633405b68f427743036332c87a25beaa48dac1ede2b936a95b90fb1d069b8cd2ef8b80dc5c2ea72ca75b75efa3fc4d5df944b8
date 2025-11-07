import { __assign } from "tslib";
import { pathLengthFactory } from './path-length-factory';
/**
 * Returns [x,y] coordinates of a point at a given length of a shape.
 */
export function getPointAtLength(pathInput, distance, options) {
    return pathLengthFactory(pathInput, distance, __assign(__assign({}, options), { bbox: false, length: true })).point;
}
//# sourceMappingURL=get-point-at-length.js.map