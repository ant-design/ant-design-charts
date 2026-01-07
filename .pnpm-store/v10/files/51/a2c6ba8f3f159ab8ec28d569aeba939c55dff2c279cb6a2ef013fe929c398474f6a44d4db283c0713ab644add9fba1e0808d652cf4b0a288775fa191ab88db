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
    default: function() {
        return wagner;
    },
    wagner7: function() {
        return wagner7;
    },
    wagnerRaw: function() {
        return wagnerRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function wagnerFormula(cx, cy, m1, m2, n) {
    function forward(lambda, phi) {
        var s = m1 * (0, _math.sin)(m2 * phi), c0 = (0, _math.sqrt)(1 - s * s), c1 = (0, _math.sqrt)(2 / (1 + c0 * (0, _math.cos)(lambda *= n)));
        return [
            cx * c0 * c1 * (0, _math.sin)(lambda),
            cy * s * c1
        ];
    }
    forward.invert = function(x, y) {
        var t1 = x / cx, t2 = y / cy, p = (0, _math.sqrt)(t1 * t1 + t2 * t2), c = 2 * (0, _math.asin)(p / 2);
        return [
            (0, _math.atan2)(x * (0, _math.tan)(c), cx * p) / n,
            p && (0, _math.asin)(y * (0, _math.sin)(c) / (cy * m1 * p)) / m2
        ];
    };
    return forward;
}
function wagnerRaw(poleline, parallels, inflation, ratio) {
    // 60 is always used as reference parallel
    var phi1 = _math.pi / 3;
    // sanitizing the input values
    // poleline and parallels may approximate but never equal 0
    poleline = (0, _math.max)(poleline, _math.epsilon);
    parallels = (0, _math.max)(parallels, _math.epsilon);
    // poleline must be <= 90; parallels may approximate but never equal 180
    poleline = (0, _math.min)(poleline, _math.halfPi);
    parallels = (0, _math.min)(parallels, _math.pi - _math.epsilon);
    // 0 <= inflation <= 99.999
    inflation = (0, _math.max)(inflation, 0);
    inflation = (0, _math.min)(inflation, 100 - _math.epsilon);
    // ratio > 0.
    // sensible values, i.e. something that renders a map which still can be
    // recognized as world map, are e.g. 20 <= ratio <= 1000.
    ratio = (0, _math.max)(ratio, _math.epsilon);
    // convert values from boehm notation
    // areal inflation e.g. from 0 to 1 or 20 to 1.2:
    var vinflation = inflation / 100 + 1;
    // axial ratio e.g. from 200 to 2:
    var vratio = ratio / 100;
    // the other ones are a bit more complicated...
    var m2 = (0, _math.acos)(vinflation * (0, _math.cos)(phi1)) / phi1, m1 = (0, _math.sin)(poleline) / (0, _math.sin)(m2 * _math.halfPi), n = parallels / _math.pi, k = (0, _math.sqrt)(vratio * (0, _math.sin)(poleline / 2) / (0, _math.sin)(parallels / 2)), cx = k / (0, _math.sqrt)(n * m1 * m2), cy = 1 / (k * (0, _math.sqrt)(n * m1 * m2));
    return wagnerFormula(cx, cy, m1, m2, n);
}
function wagner() {
    // default values generate wagner8
    var poleline = 65 * _math.radians, parallels = 60 * _math.radians, inflation = 20, ratio = 200, mutate = (0, _index.geoProjectionMutator)(wagnerRaw), projection = mutate(poleline, parallels, inflation, ratio);
    projection.poleline = function(_) {
        return arguments.length ? mutate(poleline = +_ * _math.radians, parallels, inflation, ratio) : poleline * _math.degrees;
    };
    projection.parallels = function(_) {
        return arguments.length ? mutate(poleline, parallels = +_ * _math.radians, inflation, ratio) : parallels * _math.degrees;
    };
    projection.inflation = function(_) {
        return arguments.length ? mutate(poleline, parallels, inflation = +_, ratio) : inflation;
    };
    projection.ratio = function(_) {
        return arguments.length ? mutate(poleline, parallels, inflation, ratio = +_) : ratio;
    };
    return projection.scale(163.775);
}
function wagner7() {
    return wagner().poleline(65).parallels(60).inflation(0).ratio(200).scale(172.633);
}
