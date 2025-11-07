"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transform = transform;
var gl_matrix_1 = require("gl-matrix");
function leftTranslate(out, a, v) {
    var transMat = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    gl_matrix_1.mat3.fromTranslation(transMat, v);
    return gl_matrix_1.mat3.multiply(out, transMat, a);
}
function leftRotate(out, a, rad) {
    var rotateMat = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    gl_matrix_1.mat3.fromRotation(rotateMat, rad);
    return gl_matrix_1.mat3.multiply(out, rotateMat, a);
}
function leftScale(out, a, v) {
    var scaleMat = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    gl_matrix_1.mat3.fromScaling(scaleMat, v);
    return gl_matrix_1.mat3.multiply(out, scaleMat, a);
}
function leftMultiply(out, a, a1) {
    return gl_matrix_1.mat3.multiply(out, a1, a);
}
/**
 * 根据 actions 来做 transform
 * @param m
 * @param actions
 */
function transform(m, actions) {
    var matrix = m ? [].concat(m) : [1, 0, 0, 0, 1, 0, 0, 0, 1];
    for (var i = 0, len = actions.length; i < len; i++) {
        var action = actions[i];
        switch (action[0]) {
            case 't':
                leftTranslate(matrix, matrix, [action[1], action[2]]);
                break;
            case 's':
                leftScale(matrix, matrix, [action[1], action[2]]);
                break;
            case 'r':
                leftRotate(matrix, matrix, action[1]);
                break;
            case 'm':
                leftMultiply(matrix, matrix, action[1]);
                break;
            default:
                break;
        }
    }
    return matrix;
}
//# sourceMappingURL=transform.js.map