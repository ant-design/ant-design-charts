"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPathBBoxTotalLength = getPathBBoxTotalLength;
var tslib_1 = require("tslib");
var path_length_factory_1 = require("./path-length-factory");
/**
 * Returns the bounding box of a shape.
 */
function getPathBBoxTotalLength(path, options) {
    if (!path) {
        return {
            length: 0,
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
    var _a = (0, path_length_factory_1.pathLengthFactory)(path, undefined, tslib_1.__assign(tslib_1.__assign({}, options), { bbox: true, length: true })), length = _a.length, _b = _a.min, xMin = _b.x, yMin = _b.y, _c = _a.max, xMax = _c.x, yMax = _c.y;
    var width = xMax - xMin;
    var height = yMax - yMin;
    return {
        length: length,
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
//# sourceMappingURL=get-path-bbox-total-length.js.map