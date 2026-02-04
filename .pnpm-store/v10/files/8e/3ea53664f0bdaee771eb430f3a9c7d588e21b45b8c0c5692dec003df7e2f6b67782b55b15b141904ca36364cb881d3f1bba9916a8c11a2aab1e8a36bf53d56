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
    berghausRaw: function() {
        return berghausRaw;
    },
    default: function() {
        return _default;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function berghausRaw(lobes) {
    var k = 2 * _math.pi / lobes;
    function forward(lambda, phi) {
        var p = (0, _index.geoAzimuthalEquidistantRaw)(lambda, phi);
        if ((0, _math.abs)(lambda) > _math.halfPi) {
            var theta = (0, _math.atan2)(p[1], p[0]), r = (0, _math.sqrt)(p[0] * p[0] + p[1] * p[1]), theta0 = k * (0, _math.round)((theta - _math.halfPi) / k) + _math.halfPi, alpha = (0, _math.atan2)((0, _math.sin)(theta -= theta0), 2 - (0, _math.cos)(theta)); // angle relative to lobe end
            theta = theta0 + (0, _math.asin)(_math.pi / r * (0, _math.sin)(alpha)) - alpha;
            p[0] = r * (0, _math.cos)(theta);
            p[1] = r * (0, _math.sin)(theta);
        }
        return p;
    }
    forward.invert = function(x, y) {
        var r = (0, _math.sqrt)(x * x + y * y);
        if (r > _math.halfPi) {
            var theta = (0, _math.atan2)(y, x), theta0 = k * (0, _math.round)((theta - _math.halfPi) / k) + _math.halfPi, s = theta > theta0 ? -1 : 1, A = r * (0, _math.cos)(theta0 - theta), cotAlpha = 1 / (0, _math.tan)(s * (0, _math.acos)((A - _math.pi) / (0, _math.sqrt)(_math.pi * (_math.pi - 2 * A) + r * r)));
            theta = theta0 + 2 * (0, _math.atan)((cotAlpha + s * (0, _math.sqrt)(cotAlpha * cotAlpha - 3)) / 3);
            x = r * (0, _math.cos)(theta), y = r * (0, _math.sin)(theta);
        }
        return _index.geoAzimuthalEquidistantRaw.invert(x, y);
    };
    return forward;
}
function _default() {
    var lobes = 5, m = (0, _index.geoProjectionMutator)(berghausRaw), p = m(lobes), projectionStream = p.stream, epsilon = 1e-2, cr = -(0, _math.cos)(epsilon * _math.radians), sr = (0, _math.sin)(epsilon * _math.radians);
    p.lobes = function(_) {
        return arguments.length ? m(lobes = +_) : lobes;
    };
    p.stream = function(stream) {
        var rotate = p.rotate(), rotateStream = projectionStream(stream), sphereStream = (p.rotate([
            0,
            0
        ]), projectionStream(stream));
        p.rotate(rotate);
        rotateStream.sphere = function() {
            sphereStream.polygonStart(), sphereStream.lineStart();
            for(var i = 0, delta = 360 / lobes, delta0 = 2 * _math.pi / lobes, phi = 90 - 180 / lobes, phi0 = _math.halfPi; i < lobes; ++i, phi -= delta, phi0 -= delta0){
                sphereStream.point((0, _math.atan2)(sr * (0, _math.cos)(phi0), cr) * _math.degrees, (0, _math.asin)(sr * (0, _math.sin)(phi0)) * _math.degrees);
                if (phi < -90) {
                    sphereStream.point(-90, -180 - phi - epsilon);
                    sphereStream.point(-90, -180 - phi + epsilon);
                } else {
                    sphereStream.point(90, phi + epsilon);
                    sphereStream.point(90, phi - epsilon);
                }
            }
            sphereStream.lineEnd(), sphereStream.polygonEnd();
        };
        return rotateStream;
    };
    return p.scale(87.8076).center([
        0,
        17.1875
    ]).clipAngle(180 - 1e-3);
}
