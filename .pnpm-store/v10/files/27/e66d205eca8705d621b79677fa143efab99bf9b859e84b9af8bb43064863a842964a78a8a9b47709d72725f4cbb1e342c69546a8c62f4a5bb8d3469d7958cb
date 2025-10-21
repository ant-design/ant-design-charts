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
function _default() {
    var x = function(d) {
        return d[0];
    }, y = function(d) {
        return d[1];
    }, domain;
    function exponential(data) {
        var n = 0, Y = 0, YL = 0, XY = 0, XYL = 0, X2Y = 0, xmin = domain ? +domain[0] : Infinity, xmax = domain ? +domain[1] : -Infinity;
        (0, _points.visitPoints)(data, x, y, function(dx, dy) {
            var ly = Math.log(dy), xy = dx * dy;
            ++n;
            Y += (dy - Y) / n;
            XY += (xy - XY) / n;
            X2Y += (dx * xy - X2Y) / n;
            YL += (dy * ly - YL) / n;
            XYL += (xy * ly - XYL) / n;
            if (!domain) {
                if (dx < xmin) xmin = dx;
                if (dx > xmax) xmax = dx;
            }
        });
        var _ols1 = _sliced_to_array((0, _ols.ols)(XY / Y, YL / Y, XYL / Y, X2Y / Y), 2), a = _ols1[0], b = _ols1[1];
        a = Math.exp(a);
        var fn = function(x) {
            return a * Math.exp(b * x);
        }, out = (0, _interpose.interpose)(xmin, xmax, fn);
        out.a = a;
        out.b = b;
        out.predict = fn;
        out.rSquared = (0, _determination.determination)(data, x, y, Y, fn);
        return out;
    }
    exponential.domain = function(arr) {
        return arguments.length ? (domain = arr, exponential) : domain;
    };
    exponential.x = function(fn) {
        return arguments.length ? (x = fn, exponential) : x;
    };
    exponential.y = function(fn) {
        return arguments.length ? (y = fn, exponential) : y;
    };
    return exponential;
}
