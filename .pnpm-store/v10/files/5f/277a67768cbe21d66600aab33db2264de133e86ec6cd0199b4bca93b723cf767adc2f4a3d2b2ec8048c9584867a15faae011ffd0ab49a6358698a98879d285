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
var _determination = require("./utils/determination");
var _interpose = require("./utils/interpose");
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
function _default() {
    var x = function(d) {
        return d[0];
    }, y = function(d) {
        return d[1];
    }, domain;
    function quadratic(data) {
        var _points1 = _sliced_to_array((0, _points.points)(data, x, y), 4), xv = _points1[0], yv = _points1[1], ux = _points1[2], uy = _points1[3], n = xv.length;
        var X2 = 0, X3 = 0, X4 = 0, XY = 0, X2Y = 0, i, dx, dy, x2;
        for(i = 0; i < n;){
            dx = xv[i];
            dy = yv[i++];
            x2 = dx * dx;
            X2 += (x2 - X2) / i;
            X3 += (x2 * dx - X3) / i;
            X4 += (x2 * x2 - X4) / i;
            XY += (dx * dy - XY) / i;
            X2Y += (x2 * dy - X2Y) / i;
        }
        var Y = 0, n0 = 0, xmin = domain ? +domain[0] : Infinity, xmax = domain ? +domain[1] : -Infinity;
        (0, _points.visitPoints)(data, x, y, function(dx, dy) {
            n0++;
            Y += (dy - Y) / n0;
            if (!domain) {
                if (dx < xmin) xmin = dx;
                if (dx > xmax) xmax = dx;
            }
        });
        var X2X2 = X4 - X2 * X2, d = X2 * X2X2 - X3 * X3, a = (X2Y * X2 - XY * X3) / d, b = (XY * X2X2 - X2Y * X3) / d, c = -a * X2, fn = function(x) {
            x = x - ux;
            return a * x * x + b * x + c + uy;
        };
        var out = (0, _interpose.interpose)(xmin, xmax, fn);
        out.a = a;
        out.b = b - 2 * a * ux;
        out.c = c - b * ux + a * ux * ux + uy;
        out.predict = fn;
        out.rSquared = (0, _determination.determination)(data, x, y, Y, fn);
        return out;
    }
    quadratic.domain = function(arr) {
        return arguments.length ? (domain = arr, quadratic) : domain;
    };
    quadratic.x = function(fn) {
        return arguments.length ? (x = fn, quadratic) : x;
    };
    quadratic.y = function(fn) {
        return arguments.length ? (y = fn, quadratic) : y;
    };
    return quadratic;
}
