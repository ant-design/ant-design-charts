"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.path2String = path2String;
var round_path_1 = require("../process/round-path");
/**
 * Returns a valid `d` attribute string value created
 * by rounding values and concatenating the `pathArray` segments.
 */
function path2String(path, round) {
    if (round === void 0) { round = 'off'; }
    return (0, round_path_1.roundPath)(path, round)
        .map(function (x) { return x[0] + x.slice(1).join(' '); })
        .join('');
}
//# sourceMappingURL=path-2-string.js.map