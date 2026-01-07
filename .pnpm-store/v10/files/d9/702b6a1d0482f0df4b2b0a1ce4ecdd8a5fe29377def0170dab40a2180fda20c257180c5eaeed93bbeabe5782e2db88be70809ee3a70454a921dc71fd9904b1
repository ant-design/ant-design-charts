"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, // A composite projection for the United States, configured by default for
// 960×500. The projection also works quite well at 960×600 if you change the
// scale to 1285 and adjust the translate accordingly. The set of standard
// parallels for each region comes from USGS, which is published here:
// http://egsc.usgs.gov/isb/pubs/MapProjections/projections.html#albers
"default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _math = require("../math.js");
var _albers = /*#__PURE__*/ _interop_require_default(require("./albers.js"));
var _conicEqualArea = /*#__PURE__*/ _interop_require_default(require("./conicEqualArea.js"));
var _fit = require("./fit.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function multiplex(streams) {
    var n = streams.length;
    return {
        point: function point(x, y) {
            var i = -1;
            while(++i < n)streams[i].point(x, y);
        },
        sphere: function sphere() {
            var i = -1;
            while(++i < n)streams[i].sphere();
        },
        lineStart: function lineStart() {
            var i = -1;
            while(++i < n)streams[i].lineStart();
        },
        lineEnd: function lineEnd() {
            var i = -1;
            while(++i < n)streams[i].lineEnd();
        },
        polygonStart: function polygonStart() {
            var i = -1;
            while(++i < n)streams[i].polygonStart();
        },
        polygonEnd: function polygonEnd() {
            var i = -1;
            while(++i < n)streams[i].polygonEnd();
        }
    };
}
function _default() {
    var cache, cacheStream, lower48 = (0, _albers.default)(), lower48Point, alaska = (0, _conicEqualArea.default)().rotate([
        154,
        0
    ]).center([
        -2,
        58.5
    ]).parallels([
        55,
        65
    ]), alaskaPoint, hawaii = (0, _conicEqualArea.default)().rotate([
        157,
        0
    ]).center([
        -3,
        19.9
    ]).parallels([
        8,
        18
    ]), hawaiiPoint, point, pointStream = {
        point: function point1(x, y) {
            point = [
                x,
                y
            ];
        }
    };
    function albersUsa(coordinates) {
        var x = coordinates[0], y = coordinates[1];
        return point = null, (lower48Point.point(x, y), point) || (alaskaPoint.point(x, y), point) || (hawaiiPoint.point(x, y), point);
    }
    albersUsa.invert = function(coordinates) {
        var k = lower48.scale(), t = lower48.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
        return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii : lower48).invert(coordinates);
    };
    albersUsa.stream = function(stream) {
        return cache && cacheStream === stream ? cache : cache = multiplex([
            lower48.stream(cacheStream = stream),
            alaska.stream(stream),
            hawaii.stream(stream)
        ]);
    };
    albersUsa.precision = function(_) {
        if (!arguments.length) return lower48.precision();
        lower48.precision(_), alaska.precision(_), hawaii.precision(_);
        return reset();
    };
    albersUsa.scale = function(_) {
        if (!arguments.length) return lower48.scale();
        lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
        return albersUsa.translate(lower48.translate());
    };
    albersUsa.translate = function(_) {
        if (!arguments.length) return lower48.translate();
        var k = lower48.scale(), x = +_[0], y = +_[1];
        lower48Point = lower48.translate(_).clipExtent([
            [
                x - 0.455 * k,
                y - 0.238 * k
            ],
            [
                x + 0.455 * k,
                y + 0.238 * k
            ]
        ]).stream(pointStream);
        alaskaPoint = alaska.translate([
            x - 0.307 * k,
            y + 0.201 * k
        ]).clipExtent([
            [
                x - 0.425 * k + _math.epsilon,
                y + 0.120 * k + _math.epsilon
            ],
            [
                x - 0.214 * k - _math.epsilon,
                y + 0.234 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        hawaiiPoint = hawaii.translate([
            x - 0.205 * k,
            y + 0.212 * k
        ]).clipExtent([
            [
                x - 0.214 * k + _math.epsilon,
                y + 0.166 * k + _math.epsilon
            ],
            [
                x - 0.115 * k - _math.epsilon,
                y + 0.234 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        return reset();
    };
    albersUsa.fitExtent = function(extent, object) {
        return (0, _fit.fitExtent)(albersUsa, extent, object);
    };
    albersUsa.fitSize = function(size, object) {
        return (0, _fit.fitSize)(albersUsa, size, object);
    };
    albersUsa.fitWidth = function(width, object) {
        return (0, _fit.fitWidth)(albersUsa, width, object);
    };
    albersUsa.fitHeight = function(height, object) {
        return (0, _fit.fitHeight)(albersUsa, height, object);
    };
    function reset() {
        cache = cacheStream = null;
        return albersUsa;
    }
    return albersUsa.scale(1070);
}
