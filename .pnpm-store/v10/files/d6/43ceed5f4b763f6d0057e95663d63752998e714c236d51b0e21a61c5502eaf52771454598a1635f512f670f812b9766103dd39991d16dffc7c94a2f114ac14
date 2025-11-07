"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, // Adapted from regression-js by Tom Alexander
// Source: https://github.com/Tom-Alexander/regression-js/blob/master/src/regression.js#L246
// License: https://github.com/Tom-Alexander/regression-js/blob/master/LICENSE
// ...with ideas from vega-statistics by Jeffrey Heer
// Source: https://github.com/vega/vega/blob/f21cb8792b4e0cbe2b1a3fd44b0f5db370dbaadb/packages/vega-statistics/src/regression/poly.js
// License: https://github.com/vega/vega/blob/f058b099decad9db78301405dd0d2e9d8ba3d51a/LICENSE
"default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _determination = require("./utils/determination");
var _interpose = require("./utils/interpose");
var _points = require("./utils/points");
var _linear = /*#__PURE__*/ _interop_require_default(require("./linear"));
var _quadratic = /*#__PURE__*/ _interop_require_default(require("./quadratic"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
function _default() {
    var x = function(d) {
        return d[0];
    }, y = function(d) {
        return d[1];
    }, order = 3, domain;
    function polynomial(data) {
        // Use more efficient methods for lower orders
        if (order === 1) {
            var o = (0, _linear.default)().x(x).y(y).domain(domain)(data);
            o.coefficients = [
                o.b,
                o.a
            ];
            delete o.a;
            delete o.b;
            return o;
        }
        if (order === 2) {
            var o1 = (0, _quadratic.default)().x(x).y(y).domain(domain)(data);
            o1.coefficients = [
                o1.c,
                o1.b,
                o1.a
            ];
            delete o1.a;
            delete o1.b;
            delete o1.c;
            return o1;
        }
        var _points1 = _sliced_to_array((0, _points.points)(data, x, y), 4), xv = _points1[0], yv = _points1[1], ux = _points1[2], uy = _points1[3], n = xv.length, lhs = [], rhs = [], k = order + 1;
        var Y = 0, n0 = 0, xmin = domain ? +domain[0] : Infinity, xmax = domain ? +domain[1] : -Infinity;
        (0, _points.visitPoints)(data, x, y, function(dx, dy) {
            ++n0;
            Y += (dy - Y) / n0;
            if (!domain) {
                if (dx < xmin) xmin = dx;
                if (dx > xmax) xmax = dx;
            }
        });
        var i, j, l, v, c;
        for(i = 0; i < k; ++i){
            for(l = 0, v = 0; l < n; ++l){
                v += Math.pow(xv[l], i) * yv[l];
            }
            lhs.push(v);
            c = new Float64Array(k);
            for(j = 0; j < k; ++j){
                for(l = 0, v = 0; l < n; ++l){
                    v += Math.pow(xv[l], i + j);
                }
                c[j] = v;
            }
            rhs.push(c);
        }
        rhs.push(lhs);
        var coef = gaussianElimination(rhs), fn = function(x) {
            x -= ux;
            var y = uy + coef[0] + coef[1] * x + coef[2] * x * x;
            for(i = 3; i < k; ++i)y += coef[i] * Math.pow(x, i);
            return y;
        }, out = (0, _interpose.interpose)(xmin, xmax, fn);
        out.coefficients = uncenter(k, coef, -ux, uy);
        out.predict = fn;
        out.rSquared = (0, _determination.determination)(data, x, y, Y, fn);
        return out;
    }
    polynomial.domain = function(arr) {
        return arguments.length ? (domain = arr, polynomial) : domain;
    };
    polynomial.x = function(fn) {
        return arguments.length ? (x = fn, polynomial) : x;
    };
    polynomial.y = function(fn) {
        return arguments.length ? (y = fn, polynomial) : y;
    };
    polynomial.order = function(n) {
        return arguments.length ? (order = n, polynomial) : order;
    };
    return polynomial;
}
function uncenter(k, a, x, y) {
    var z = Array(k);
    var i, j, v, c;
    // initialize to zero
    for(i = 0; i < k; ++i)z[i] = 0;
    // polynomial expansion
    for(i = k - 1; i >= 0; --i){
        v = a[i];
        c = 1;
        z[i] += v;
        for(j = 1; j <= i; ++j){
            c *= (i + 1 - j) / j; // binomial coefficent
            z[i - j] += v * Math.pow(x, j) * c;
        }
    }
    // bias term
    z[0] += y;
    return z;
}
// Given an array for a two-dimensional matrix and the polynomial order,
// solve A * x = b using Gaussian elimination.
function gaussianElimination(matrix) {
    var n = matrix.length - 1, coef = [];
    var i, j, k, r, t;
    for(i = 0; i < n; ++i){
        r = i; // max row
        for(j = i + 1; j < n; ++j){
            if (Math.abs(matrix[i][j]) > Math.abs(matrix[i][r])) {
                r = j;
            }
        }
        for(k = i; k < n + 1; ++k){
            t = matrix[k][i];
            matrix[k][i] = matrix[k][r];
            matrix[k][r] = t;
        }
        for(j = i + 1; j < n; ++j){
            for(k = n; k >= i; k--){
                matrix[k][j] -= matrix[k][i] * matrix[i][j] / matrix[i][i];
            }
        }
    }
    for(j = n - 1; j >= 0; --j){
        t = 0;
        for(k = j + 1; k < n; ++k){
            t += matrix[k][j] * coef[k];
        }
        coef[j] = (matrix[n][j] - t) / matrix[j][j];
    }
    return coef;
}
