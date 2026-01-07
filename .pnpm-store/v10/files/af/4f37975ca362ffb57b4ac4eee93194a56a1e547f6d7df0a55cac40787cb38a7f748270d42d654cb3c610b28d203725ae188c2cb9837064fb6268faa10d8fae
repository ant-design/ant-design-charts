"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finalizeSegment = finalizeSegment;
var params_count_1 = require("./params-count");
/**
 * Breaks the parsing of a pathString once a segment is finalized.
 */
function finalizeSegment(path) {
    var pathCommand = path.pathValue[path.segmentStart];
    var LK = pathCommand.toLowerCase();
    var data = path.data;
    while (data.length >= params_count_1.paramsCount[LK]) {
        // overloaded `moveTo`
        // https://github.com/rveciana/svg-path-properties/blob/master/src/parse.ts
        if (LK === 'm' && data.length > 2) {
            // @ts-ignore
            path.segments.push([pathCommand].concat(data.splice(0, 2)));
            LK = 'l';
            pathCommand = pathCommand === 'm' ? 'l' : 'L';
        }
        else {
            // @ts-ignore
            path.segments.push([pathCommand].concat(data.splice(0, params_count_1.paramsCount[LK])));
        }
        if (!params_count_1.paramsCount[LK]) {
            break;
        }
    }
}
//# sourceMappingURL=finalize-segment.js.map