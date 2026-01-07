"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePathString = parsePathString;
var is_path_array_1 = require("../util/is-path-array");
var scan_segment_1 = require("./scan-segment");
var skip_spaces_1 = require("./skip-spaces");
var path_parser_1 = require("./path-parser");
/**
 * Parses a path string value and returns an array
 * of segments we like to call `pathArray`.
 */
function parsePathString(pathInput) {
    if ((0, is_path_array_1.isPathArray)(pathInput)) {
        return [].concat(pathInput);
    }
    var path = new path_parser_1.PathParser(pathInput);
    (0, skip_spaces_1.skipSpaces)(path);
    while (path.index < path.max && !path.err.length) {
        (0, scan_segment_1.scanSegment)(path);
    }
    return path.err ? path.err : path.segments;
}
//# sourceMappingURL=parse-path-string.js.map