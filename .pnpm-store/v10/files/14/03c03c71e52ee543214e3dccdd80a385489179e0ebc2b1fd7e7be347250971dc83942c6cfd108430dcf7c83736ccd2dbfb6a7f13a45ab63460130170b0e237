"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.angleTo = angleTo;
var gl_matrix_1 = require("gl-matrix");
var direction_1 = require("./direction");
/**
 * 二维向量 v1 到 v2 的夹角
 * @param v1
 * @param v2
 * @param direct
 */
function angleTo(v1, v2, direct) {
    var ang = gl_matrix_1.vec2.angle(v1, v2);
    var angleLargeThanPI = (0, direction_1.direction)(v1, v2) >= 0;
    if (direct) {
        if (angleLargeThanPI) {
            return Math.PI * 2 - ang;
        }
        return ang;
    }
    if (angleLargeThanPI) {
        return ang;
    }
    return Math.PI * 2 - ang;
}
//# sourceMappingURL=angle-to.js.map