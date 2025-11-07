// Adapted from science.js by Jason Davies
// License: https://github.com/jasondavies/science.js/blob/master/LICENSE
// Source: https://github.com/jasondavies/science.js/blob/master/src/stats/loess.js
// Adapted from vega-statistics by Jeffrey Heer
// License: https://github.com/vega/vega/blob/f058b099decad9db78301405dd0d2e9d8ba3d51a/LICENSE
// Source: https://github.com/vega/vega/blob/f21cb8792b4e0cbe2b1a3fd44b0f5db370dbaadb/packages/vega-statistics/src/regression/loess.js
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _median = require("./utils/median");
var _ols = require("./utils/ols");
var _points = require("./utils/points");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var maxiters = 2, epsilon = 1e-12;
function _default() {
    var x = function(d) {
        return d[0];
    }, y = function(d) {
        return d[1];
    }, bandwidth = .3;
    function loess(data) {
        var _points1 = _sliced_to_array((0, _points.points)(data, x, y, true), 4), xv = _points1[0], yv = _points1[1], ux = _points1[2], uy = _points1[3], n = xv.length, bw = Math.max(2, ~~(bandwidth * n)), yhat = new Float64Array(n), residuals = new Float64Array(n), robustWeights = new Float64Array(n).fill(1);
        for(var iter = -1; ++iter <= maxiters;){
            var interval = [
                0,
                bw - 1
            ];
            for(var i = 0; i < n; ++i){
                var dx = xv[i], i0 = interval[0], i1 = interval[1], edge = dx - xv[i0] > xv[i1] - dx ? i0 : i1;
                var W = 0, X = 0, Y = 0, XY = 0, X2 = 0, denom = 1 / Math.abs(xv[edge] - dx || 1); // Avoid singularity
                for(var k = i0; k <= i1; ++k){
                    var xk = xv[k], yk = yv[k], w = tricube(Math.abs(dx - xk) * denom) * robustWeights[k], xkw = xk * w;
                    W += w;
                    X += xkw;
                    Y += yk * w;
                    XY += yk * xkw;
                    X2 += xk * xkw;
                }
                // Linear regression fit
                var _ols1 = _sliced_to_array((0, _ols.ols)(X / W, Y / W, XY / W, X2 / W), 2), a = _ols1[0], b = _ols1[1];
                yhat[i] = a + b * dx;
                residuals[i] = Math.abs(yv[i] - yhat[i]);
                updateInterval(xv, i + 1, interval);
            }
            if (iter === maxiters) {
                break;
            }
            var medianResidual = (0, _median.median)(residuals);
            if (Math.abs(medianResidual) < epsilon) break;
            for(var i2 = 0, arg = void 0, w1 = void 0; i2 < n; ++i2){
                arg = residuals[i2] / (6 * medianResidual);
                // Default to epsilon (rather than zero) for large deviations
                // Keeping weights tiny but non-zero prevents singularites
                robustWeights[i2] = arg >= 1 ? epsilon : (w1 = 1 - arg * arg) * w1;
            }
        }
        return output(xv, yhat, ux, uy);
    }
    loess.bandwidth = function(bw) {
        return arguments.length ? (bandwidth = bw, loess) : bandwidth;
    };
    loess.x = function(fn) {
        return arguments.length ? (x = fn, loess) : x;
    };
    loess.y = function(fn) {
        return arguments.length ? (y = fn, loess) : y;
    };
    return loess;
}
// Weighting kernel for local regression
function tricube(x) {
    return (x = 1 - x * x * x) * x * x;
}
// Advance sliding window interval of nearest neighbors
function updateInterval(xv, i, interval) {
    var val = xv[i], left = interval[0], right = interval[1] + 1;
    if (right >= xv.length) return;
    // Step right if distance to new right edge is <= distance to old left edge
    // Step when distance is equal to ensure movement over duplicate x values
    while(i > left && xv[right] - val <= val - xv[left]){
        interval[0] = ++left;
        interval[1] = right;
        ++right;
    }
}
// Generate smoothed output points
// Average points with repeated x values
function output(xv, yhat, ux, uy) {
    var n = xv.length, out = [];
    var i = 0, cnt = 0, prev = [], v;
    for(; i < n; ++i){
        v = xv[i] + ux;
        if (prev[0] === v) {
            // Average output values via online update
            prev[1] += (yhat[i] - prev[1]) / ++cnt;
        } else {
            // Add new output point
            cnt = 0;
            prev[1] += uy;
            prev = [
                v,
                yhat[i]
            ];
            out.push(prev);
        }
    }
    prev[1] += uy;
    return out;
}
