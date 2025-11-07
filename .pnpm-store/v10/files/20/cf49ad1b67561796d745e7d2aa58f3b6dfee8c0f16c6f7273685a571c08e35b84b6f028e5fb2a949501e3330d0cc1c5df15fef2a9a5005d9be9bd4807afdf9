"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gemv = exports.weightedSum = exports.scale = exports.norm2 = exports.dot = exports.zerosM = exports.zeros = void 0;
// need some basic operations on vectors, rather than adding a dependency,
// just define here
function zeros(x) {
    const r = new Array(x);
    for (let i = 0; i < x; ++i) {
        r[i] = 0;
    }
    return r;
}
exports.zeros = zeros;
function zerosM(x, y) {
    return zeros(x).map(() => zeros(y));
}
exports.zerosM = zerosM;
function dot(a, b) {
    let ret = 0;
    for (let i = 0; i < a.length; ++i) {
        ret += a[i] * b[i];
    }
    return ret;
}
exports.dot = dot;
function norm2(a) {
    return Math.sqrt(dot(a, a));
}
exports.norm2 = norm2;
function scale(ret, value, c) {
    for (let i = 0; i < value.length; ++i) {
        ret[i] = value[i] * c;
    }
}
exports.scale = scale;
function weightedSum(ret, w1, v1, w2, v2) {
    for (let j = 0; j < ret.length; ++j) {
        ret[j] = w1 * v1[j] + w2 * v2[j];
    }
}
exports.weightedSum = weightedSum;
function gemv(output, A, x) {
    for (let i = 0; i < output.length; ++i) {
        output[i] = dot(A[i], x);
    }
}
exports.gemv = gemv;
//# sourceMappingURL=blas1.js.map