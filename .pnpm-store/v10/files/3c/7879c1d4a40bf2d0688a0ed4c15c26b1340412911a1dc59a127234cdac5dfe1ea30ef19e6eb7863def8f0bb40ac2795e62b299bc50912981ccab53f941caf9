"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizePath = normalizePath;
var tslib_1 = require("tslib");
var is_normalized_array_1 = require("../util/is-normalized-array");
var params_parser_1 = require("../parser/params-parser");
var path_2_absolute_1 = require("../convert/path-2-absolute");
var normalize_segment_1 = require("./normalize-segment");
/**
 * @example
 * const path = 'M0 0 H50';
 * const normalizedPath = SVGPathCommander.normalizePath(path);
 * // result => [['M', 0, 0], ['L', 50, 0]]
 */
function normalizePath(pathInput) {
    if ((0, is_normalized_array_1.isNormalizedArray)(pathInput)) {
        return [].concat(pathInput);
    }
    var path = (0, path_2_absolute_1.path2Absolute)(pathInput);
    var params = tslib_1.__assign({}, params_parser_1.paramsParser);
    for (var i = 0; i < path.length; i += 1) {
        // Save current path command
        path[i] = (0, normalize_segment_1.normalizeSegment)(path[i], params);
        var segment = path[i];
        var seglen = segment.length;
        params.x1 = +segment[seglen - 2];
        params.y1 = +segment[seglen - 1];
        params.x2 = +segment[seglen - 4] || params.x1;
        params.y2 = +segment[seglen - 3] || params.y1;
    }
    return path;
}
//# sourceMappingURL=normalize-path.js.map