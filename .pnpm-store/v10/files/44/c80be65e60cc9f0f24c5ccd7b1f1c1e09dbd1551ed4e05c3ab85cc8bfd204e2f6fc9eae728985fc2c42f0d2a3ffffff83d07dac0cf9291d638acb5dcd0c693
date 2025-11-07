"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scanFlag = scanFlag;
/**
 * Validates an A (arc-to) specific path command value.
 * Usually a `large-arc-flag` or `sweep-flag`.
 */
function scanFlag(path) {
    var index = path.index, pathValue = path.pathValue;
    var code = pathValue.charCodeAt(index);
    if (code === 0x30 /* 0 */) {
        path.param = 0;
        path.index += 1;
        return;
    }
    if (code === 0x31 /* 1 */) {
        path.param = 1;
        path.index += 1;
        return;
    }
    path.err = "[path-util]: invalid Arc flag \"".concat(pathValue[index], "\", expecting 0 or 1 at index ").concat(index);
}
//# sourceMappingURL=scan-flag.js.map