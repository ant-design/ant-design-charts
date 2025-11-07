// Adapted from vega-statistics by Jeffrey Heer
// License: https://github.com/vega/vega/blob/f058b099decad9db78301405dd0d2e9d8ba3d51a/LICENSE
// Source: https://github.com/vega/vega/blob/f058b099decad9db78301405dd0d2e9d8ba3d51a/packages/vega-statistics/src/regression/points.js
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
    points: function() {
        return points;
    },
    visitPoints: function() {
        return visitPoints;
    }
});
function points(data, x, y, sort) {
    data = data.filter(function(d, i) {
        var u = x(d, i), v = y(d, i);
        return u != null && isFinite(u) && v != null && isFinite(v);
    });
    if (sort) {
        data.sort(function(a, b) {
            return x(a) - x(b);
        });
    }
    var n = data.length, X = new Float64Array(n), Y = new Float64Array(n);
    // extract values, calculate means
    var ux = 0, uy = 0, xv, yv, d;
    for(var i = 0; i < n;){
        d = data[i];
        X[i] = xv = +x(d, i, data);
        Y[i] = yv = +y(d, i, data);
        ++i;
        ux += (xv - ux) / i;
        uy += (yv - uy) / i;
    }
    // mean center the data
    for(var i1 = 0; i1 < n; ++i1){
        X[i1] -= ux;
        Y[i1] -= uy;
    }
    return [
        X,
        Y,
        ux,
        uy
    ];
}
function visitPoints(data, x, y, cb) {
    var iterations = 0;
    for(var i = 0, n = data.length; i < n; i++){
        var d = data[i], dx = +x(d, i, data), dy = +y(d, i, data);
        if (dx != null && isFinite(dx) && dy != null && isFinite(dy)) {
            cb(dx, dy, iterations++);
        }
    }
}
