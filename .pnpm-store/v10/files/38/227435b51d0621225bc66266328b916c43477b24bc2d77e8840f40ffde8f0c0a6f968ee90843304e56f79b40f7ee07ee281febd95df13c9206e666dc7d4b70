import { __assign } from "tslib";
import { pathLengthFactory } from './path-length-factory';
/**
 * Returns the bounding box of a shape.
 */
export function getPathBBox(path, options) {
    if (!path) {
        return {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            x2: 0,
            y2: 0,
            cx: 0,
            cy: 0,
            cz: 0,
        };
    }
    var _a = pathLengthFactory(path, undefined, __assign(__assign({}, options), { length: false })), _b = _a.min, xMin = _b.x, yMin = _b.y, _c = _a.max, xMax = _c.x, yMax = _c.y;
    var width = xMax - xMin;
    var height = yMax - yMin;
    return {
        width: width,
        height: height,
        x: xMin,
        y: yMin,
        x2: xMax,
        y2: yMax,
        cx: xMin + width / 2,
        cy: yMin + height / 2,
        // an estimted guess
        cz: Math.max(width, height) + Math.min(width, height) / 2,
    };
}
//# sourceMappingURL=get-path-bbox.js.map