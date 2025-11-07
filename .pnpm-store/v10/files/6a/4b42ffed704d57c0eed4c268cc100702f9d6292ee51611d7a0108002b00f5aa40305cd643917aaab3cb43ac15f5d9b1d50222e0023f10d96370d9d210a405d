"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.path2Curve = path2Curve;
var tslib_1 = require("tslib");
var params_parser_1 = require("../parser/params-parser");
var fix_arc_1 = require("../process/fix-arc");
var normalize_path_1 = require("../process/normalize-path");
var is_curve_array_1 = require("../util/is-curve-array");
var segment_2_cubic_1 = require("../process/segment-2-cubic");
// import { fixPath } from '../process/fix-path';
function path2Curve(pathInput, needZCommandIndexes) {
    if (needZCommandIndexes === void 0) { needZCommandIndexes = false; }
    if ((0, is_curve_array_1.isCurveArray)(pathInput)) {
        var cloned = [].concat(pathInput);
        if (needZCommandIndexes) {
            return [cloned, []];
        }
        else {
            return cloned;
        }
    }
    // fixPath will remove 'Z' command
    // const path = fixPath(normalizePath(pathInput));
    var path = (0, normalize_path_1.normalizePath)(pathInput);
    var params = tslib_1.__assign({}, params_parser_1.paramsParser);
    var allPathCommands = [];
    var pathCommand = '';
    var ii = path.length;
    var segment;
    var seglen;
    var zCommandIndexes = [];
    for (var i = 0; i < ii; i += 1) {
        if (path[i])
            pathCommand = path[i][0];
        allPathCommands[i] = pathCommand;
        var curveSegment = (0, segment_2_cubic_1.segmentToCubic)(path[i], params);
        path[i] = curveSegment;
        (0, fix_arc_1.fixArc)(path, allPathCommands, i);
        ii = path.length; // solves curveArrays ending in Z
        // keep Z command account for lineJoin
        // @see https://github.com/antvis/util/issues/68
        if (pathCommand === 'Z') {
            zCommandIndexes.push(i);
        }
        segment = path[i];
        seglen = segment.length;
        params.x1 = +segment[seglen - 2];
        params.y1 = +segment[seglen - 1];
        params.x2 = +segment[seglen - 4] || params.x1;
        params.y2 = +segment[seglen - 3] || params.y1;
    }
    // validate
    if (needZCommandIndexes) {
        return [path, zCommandIndexes];
    }
    else {
        return path;
    }
}
//# sourceMappingURL=path-2-curve.js.map