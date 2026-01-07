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
    solve: function() {
        return solve;
    },
    solve2d: function() {
        return solve2d;
    }
});
var _math = require("./math.js");
function solve(f, y, x) {
    var steps = 100, delta, f0, f1;
    x = x === undefined ? 0 : +x;
    y = +y;
    do {
        f0 = f(x);
        f1 = f(x + _math.epsilon);
        if (f0 === f1) f1 = f0 + _math.epsilon;
        x -= delta = -1 * _math.epsilon * (f0 - y) / (f0 - f1);
    }while (steps-- > 0 && (0, _math.abs)(delta) > _math.epsilon);
    return steps < 0 ? NaN : x;
}
function solve2d(f, MAX_ITERATIONS, eps) {
    if (MAX_ITERATIONS === undefined) MAX_ITERATIONS = 40;
    if (eps === undefined) eps = _math.epsilon2;
    return function(x, y, a, b) {
        var err2, da, db;
        a = a === undefined ? 0 : +a;
        b = b === undefined ? 0 : +b;
        for(var i = 0; i < MAX_ITERATIONS; i++){
            var p = f(a, b), // diffs
            tx = p[0] - x, ty = p[1] - y;
            if ((0, _math.abs)(tx) < eps && (0, _math.abs)(ty) < eps) break; // we're there!
            // backtrack if we overshot
            var h = tx * tx + ty * ty;
            if (h > err2) {
                a -= da /= 2;
                b -= db /= 2;
                continue;
            }
            err2 = h;
            // partial derivatives
            var ea = (a > 0 ? -1 : 1) * eps, eb = (b > 0 ? -1 : 1) * eps, pa = f(a + ea, b), pb = f(a, b + eb), dxa = (pa[0] - p[0]) / ea, dya = (pa[1] - p[1]) / ea, dxb = (pb[0] - p[0]) / eb, dyb = (pb[1] - p[1]) / eb, // determinant
            D = dyb * dxa - dya * dxb, // newton step — or half-step for small D
            l = ((0, _math.abs)(D) < 0.5 ? 0.5 : 1) / D;
            da = (ty * dxb - tx * dyb) * l;
            db = (tx * dya - ty * dxa) * l;
            a += da;
            b += db;
            if ((0, _math.abs)(da) < eps && (0, _math.abs)(db) < eps) break; // we're crawling
        }
        return [
            a,
            b
        ];
    };
}
