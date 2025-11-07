"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scanSegment = scanSegment;
var finalize_segment_1 = require("./finalize-segment");
var params_count_1 = require("./params-count");
var scan_flag_1 = require("./scan-flag");
var scan_param_1 = require("./scan-param");
var skip_spaces_1 = require("./skip-spaces");
var is_path_command_1 = require("./is-path-command");
var is_digit_start_1 = require("./is-digit-start");
var is_arc_command_1 = require("./is-arc-command");
/**
 * Scans every character in the path string to determine
 * where a segment starts and where it ends.
 */
function scanSegment(path) {
    var max = path.max, pathValue = path.pathValue, index = path.index;
    var cmdCode = pathValue.charCodeAt(index);
    var reqParams = params_count_1.paramsCount[pathValue[index].toLowerCase()];
    path.segmentStart = index;
    if (!(0, is_path_command_1.isPathCommand)(cmdCode)) {
        path.err = "[path-util]: Invalid path value \"".concat(pathValue[index], "\" is not a path command");
        return;
    }
    path.index += 1;
    (0, skip_spaces_1.skipSpaces)(path);
    path.data = [];
    if (!reqParams) {
        // Z
        (0, finalize_segment_1.finalizeSegment)(path);
        return;
    }
    for (;;) {
        for (var i = reqParams; i > 0; i -= 1) {
            if ((0, is_arc_command_1.isArcCommand)(cmdCode) && (i === 3 || i === 4))
                (0, scan_flag_1.scanFlag)(path);
            else
                (0, scan_param_1.scanParam)(path);
            if (path.err.length) {
                return;
            }
            path.data.push(path.param);
            (0, skip_spaces_1.skipSpaces)(path);
            // after ',' param is mandatory
            if (path.index < max && pathValue.charCodeAt(path.index) === 0x2c /* , */) {
                path.index += 1;
                (0, skip_spaces_1.skipSpaces)(path);
            }
        }
        if (path.index >= path.max) {
            break;
        }
        // Stop on next segment
        if (!(0, is_digit_start_1.isDigitStart)(pathValue.charCodeAt(path.index))) {
            break;
        }
    }
    (0, finalize_segment_1.finalizeSegment)(path);
}
//# sourceMappingURL=scan-segment.js.map