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
    elasticIn: function() {
        return elasticIn;
    },
    elasticInOut: function() {
        return elasticInOut;
    },
    elasticOut: function() {
        return elasticOut;
    }
});
var _math = require("./math.js");
var tau = 2 * Math.PI, amplitude = 1, period = 0.3;
var elasticIn = function custom(a, p) {
    var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
    function elasticIn(t) {
        return a * (0, _math.tpmt)(- --t) * Math.sin((s - t) / p);
    }
    elasticIn.amplitude = function(a) {
        return custom(a, p * tau);
    };
    elasticIn.period = function(p) {
        return custom(a, p);
    };
    return elasticIn;
}(amplitude, period);
var elasticOut = function custom(a, p) {
    var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
    function elasticOut(t) {
        return 1 - a * (0, _math.tpmt)(t = +t) * Math.sin((t + s) / p);
    }
    elasticOut.amplitude = function(a) {
        return custom(a, p * tau);
    };
    elasticOut.period = function(p) {
        return custom(a, p);
    };
    return elasticOut;
}(amplitude, period);
var elasticInOut = function custom(a, p) {
    var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
    function elasticInOut(t) {
        return ((t = t * 2 - 1) < 0 ? a * (0, _math.tpmt)(-t) * Math.sin((s - t) / p) : 2 - a * (0, _math.tpmt)(t) * Math.sin((s + t) / p)) / 2;
    }
    elasticInOut.amplitude = function(a) {
        return custom(a, p * tau);
    };
    elasticInOut.period = function(p) {
        return custom(a, p);
    };
    return elasticInOut;
}(amplitude, period);
