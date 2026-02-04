import { __assign } from "tslib";
import { paramsParser } from '../parser/params-parser';
import { fixArc } from '../process/fix-arc';
import { normalizePath } from '../process/normalize-path';
import { isCurveArray } from '../util/is-curve-array';
import { segmentToCubic } from '../process/segment-2-cubic';
// import { fixPath } from '../process/fix-path';
export function path2Curve(pathInput, needZCommandIndexes) {
    if (needZCommandIndexes === void 0) { needZCommandIndexes = false; }
    if (isCurveArray(pathInput)) {
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
    var path = normalizePath(pathInput);
    var params = __assign({}, paramsParser);
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
        var curveSegment = segmentToCubic(path[i], params);
        path[i] = curveSegment;
        fixArc(path, allPathCommands, i);
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