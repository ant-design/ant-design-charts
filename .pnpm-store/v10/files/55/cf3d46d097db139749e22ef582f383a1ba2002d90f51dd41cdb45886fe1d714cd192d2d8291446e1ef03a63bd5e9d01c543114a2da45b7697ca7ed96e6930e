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
    arcosh: function() {
        return arcosh;
    },
    arsinh: function() {
        return arsinh;
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
    cosh: function() {
        return cosh;
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
    log: function() {
        return log;
    },
    max: function() {
        return max;
    },
    min: function() {
        return min;
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
    round: function() {
        return round;
    },
    sign: function() {
        return sign;
    },
    sin: function() {
        return sin;
    },
    sinci: function() {
        return sinci;
    },
    sinh: function() {
        return sinh;
    },
    sqrt: function() {
        return sqrt;
    },
    sqrt1_2: function() {
        return sqrt1_2;
    },
    sqrt2: function() {
        return sqrt2;
    },
    sqrtPi: function() {
        return sqrtPi;
    },
    tan: function() {
        return tan;
    },
    tanh: function() {
        return tanh;
    },
    tau: function() {
        return tau;
    }
});
var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var ceil = Math.ceil;
var cos = Math.cos;
var exp = Math.exp;
var floor = Math.floor;
var log = Math.log;
var max = Math.max;
var min = Math.min;
var pow = Math.pow;
var round = Math.round;
var sign = Math.sign || function(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
};
var sin = Math.sin;
var tan = Math.tan;
var epsilon = 1e-6;
var epsilon2 = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var sqrt1_2 = Math.SQRT1_2;
var sqrt2 = sqrt(2);
var sqrtPi = sqrt(pi);
var tau = pi * 2;
var degrees = 180 / pi;
var radians = pi / 180;
function sinci(x) {
    return x ? x / Math.sin(x) : 1;
}
function asin(x) {
    return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}
function acos(x) {
    return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}
function sqrt(x) {
    return x > 0 ? Math.sqrt(x) : 0;
}
function tanh(x) {
    x = exp(2 * x);
    return (x - 1) / (x + 1);
}
function sinh(x) {
    return (exp(x) - exp(-x)) / 2;
}
function cosh(x) {
    return (exp(x) + exp(-x)) / 2;
}
function arsinh(x) {
    return log(x + sqrt(x * x + 1));
}
function arcosh(x) {
    return log(x + sqrt(x * x - 1));
}
