import { __assign } from "tslib";
import { pathLengthFactory } from './path-length-factory';
/**
 * Returns the shape total length, or the equivalent to `shape.getTotalLength()`.
 *
 * The `normalizePath` version is lighter, faster, more efficient and more accurate
 * with paths that are not `curveArray`.
 */
export function getTotalLength(pathInput, options) {
    return pathLengthFactory(pathInput, undefined, __assign(__assign({}, options), { bbox: false, length: true })).length;
}
//# sourceMappingURL=get-total-length.js.map