"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    // Note: 6-element arrays are used to denote the 3x3 affine transform matrix:
    // [a, b, c,
    //  d, e, f,
    //  0, 0, 1] - this redundant row is left out.
    // Transform matrix for [a0, a1] -> [b0, b1].
    default: function() {
        return _default;
    },
    inverse: function() {
        return inverse;
    },
    multiply: function() {
        return multiply;
    }
});
var _math = require("../math.js");
function _default(a, b) {
    var u = subtract(a[1], a[0]), v = subtract(b[1], b[0]), phi = angle(u, v), s = length(u) / length(v);
    return multiply([
        1,
        0,
        a[0][0],
        0,
        1,
        a[0][1]
    ], multiply([
        s,
        0,
        0,
        0,
        s,
        0
    ], multiply([
        (0, _math.cos)(phi),
        (0, _math.sin)(phi),
        0,
        -(0, _math.sin)(phi),
        (0, _math.cos)(phi),
        0
    ], [
        1,
        0,
        -b[0][0],
        0,
        1,
        -b[0][1]
    ])));
}
function inverse(m) {
    var k = 1 / (m[0] * m[4] - m[1] * m[3]);
    return [
        k * m[4],
        -k * m[1],
        k * (m[1] * m[5] - m[2] * m[4]),
        -k * m[3],
        k * m[0],
        k * (m[2] * m[3] - m[0] * m[5])
    ];
}
function multiply(a, b) {
    return [
        a[0] * b[0] + a[1] * b[3],
        a[0] * b[1] + a[1] * b[4],
        a[0] * b[2] + a[1] * b[5] + a[2],
        a[3] * b[0] + a[4] * b[3],
        a[3] * b[1] + a[4] * b[4],
        a[3] * b[2] + a[4] * b[5] + a[5]
    ];
}
// Subtracts 2D vectors.
function subtract(a, b) {
    return [
        a[0] - b[0],
        a[1] - b[1]
    ];
}
// Magnitude of a 2D vector.
function length(v) {
    return (0, _math.sqrt)(v[0] * v[0] + v[1] * v[1]);
}
// Angle between two 2D vectors.
function angle(a, b) {
    return (0, _math.atan2)(a[0] * b[1] - a[1] * b[0], a[0] * b[0] + a[1] * b[1]);
}
