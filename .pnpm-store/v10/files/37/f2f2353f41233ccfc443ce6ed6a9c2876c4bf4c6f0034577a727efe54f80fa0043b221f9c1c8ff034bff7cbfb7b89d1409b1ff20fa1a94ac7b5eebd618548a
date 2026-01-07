"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalLength = getTotalLength;
var tslib_1 = require("tslib");
var path_length_factory_1 = require("./path-length-factory");
/**
 * Returns the shape total length, or the equivalent to `shape.getTotalLength()`.
 *
 * The `normalizePath` version is lighter, faster, more efficient and more accurate
 * with paths that are not `curveArray`.
 */
function getTotalLength(pathInput, options) {
    return (0, path_length_factory_1.pathLengthFactory)(pathInput, undefined, tslib_1.__assign(tslib_1.__assign({}, options), { bbox: false, length: true })).length;
}
//# sourceMappingURL=get-total-length.js.map