"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.area = area;
const d3_array_1 = require("@antv/vendor/d3-array");
const vector_1 = require("../../../utils/vector");
/**
 * Only for Area label.
 */
function area(position, points, value, coordinate) {
    const l = points.length / 2;
    const Y1 = points.slice(0, l);
    const Y0 = points.slice(l);
    // Get the maximal space for label.
    let idx = (0, d3_array_1.maxIndex)(Y1, (p, i) => Math.abs(p[1] - Y0[i][1]));
    // Do not show label at first and last.
    idx = Math.max(Math.min(idx, l - 2), 1);
    const mid = (i) => [Y1[i][0], (Y1[i][1] + Y0[i][1]) / 2];
    const point = mid(idx);
    const prev = mid(idx - 1);
    const next = mid(idx + 1);
    // todo: G rotate only support deg.
    const rotate = ((0, vector_1.angle)((0, vector_1.sub)(next, prev)) / Math.PI) * 180;
    return {
        x: point[0],
        y: point[1],
        transform: `rotate(${rotate})`,
        textAlign: 'center',
        textBaseline: 'middle',
    };
}
//# sourceMappingURL=area.js.map