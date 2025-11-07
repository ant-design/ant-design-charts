"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.segmentsIntersect = segmentsIntersect;
const robust_orientation_1 = __importDefault(require("./robust-orientation"));
function checkCollinear(a0, a1, b0, b1) {
    for (let d = 0; d < 2; ++d) {
        const x0 = a0[d];
        const y0 = a1[d];
        const [l0, h0] = [Math.min(x0, y0), Math.max(x0, y0)];
        const x1 = b0[d];
        const y1 = b1[d];
        const [l1, h1] = [Math.min(x1, y1), Math.max(x1, y1)];
        if (h1 < l0 || h0 < l1)
            return false;
    }
    return true;
}
function segmentsIntersect(a0, a1, b0, b1) {
    const x0 = (0, robust_orientation_1.default)(a0, b0, b1);
    const y0 = (0, robust_orientation_1.default)(a1, b0, b1);
    if ((x0 > 0 && y0 > 0) || (x0 < 0 && y0 < 0))
        return false;
    const x1 = (0, robust_orientation_1.default)(b0, a0, a1);
    const y1 = (0, robust_orientation_1.default)(b1, a0, a1);
    if ((x1 > 0 && y1 > 0) || (x1 < 0 && y1 < 0))
        return false;
    if (x0 === 0 && y0 === 0 && x1 === 0 && y1 === 0) {
        return checkCollinear(a0, a1, b0, b1);
    }
    return true;
}
//# sourceMappingURL=robust-segment-intersect.js.map