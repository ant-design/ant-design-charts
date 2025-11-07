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
    abs: function() {
        return abs;
    },
    acos: function() {
        return acos;
    },
    asin: function() {
        return asin;
    },
    atan: function() {
        return atan;
    },
    atan2: function() {
        return atan2;
    },
    ceil: function() {
        return ceil;
    },
    cos: function() {
        return cos;
    },
    degrees: function() {
        return degrees;
    },
    epsilon: function() {
        return epsilon;
    },
    epsilon2: function() {
        return epsilon2;
    },
    exp: function() {
        return exp;
    },
    floor: function() {
        return floor;
    },
    halfPi: function() {
        return halfPi;
    },
    haversin: function() {
        return haversin;
    },
    hypot: function() {
        return hypot;
    },
    log: function() {
        return log;
    },
    pi: function() {
        return pi;
    },
    pow: function() {
        return pow;
    },
    quarterPi: function() {
        return quarterPi;
    },
    radians: function() {
        return radians;
    },
    sign: function() {
        return sign;
    },
    sin: function() {
        return sin;
    },
    sqrt: function() {
        return sqrt;
    },
    tan: function() {
        return tan;
    },
    tau: function() {
        return tau;
    }
});
var epsilon = 1e-6;
var epsilon2 = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var tau = pi * 2;
var degrees = 180 / pi;
var radians = pi / 180;
var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos = Math.cos;
var ceil = Math.ceil;
var exp = Math.exp;
var floor = Math.floor;
var hypot = Math.hypot;
var log = Math.log;
var pow = Math.pow;
var sin = Math.sin;
var sign = Math.sign || function(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
};
var sqrt = Math.sqrt;
var tan = Math.tan;
function acos(x) {
    return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}
function asin(x) {
    return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}
function haversin(x) {
    return (x = sin(x / 2)) * x;
}
