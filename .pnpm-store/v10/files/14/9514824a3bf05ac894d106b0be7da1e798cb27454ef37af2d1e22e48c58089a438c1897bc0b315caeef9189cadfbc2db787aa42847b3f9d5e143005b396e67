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
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function gilbertForward(point) {
    return [
        point[0] / 2,
        (0, _math.asin)((0, _math.tan)(point[1] / 2 * _math.radians)) * _math.degrees
    ];
}
function gilbertInvert(point) {
    return [
        point[0] * 2,
        2 * (0, _math.atan)((0, _math.sin)(point[1] * _math.radians)) * _math.degrees
    ];
}
function _default(projectionType) {
    if (projectionType == null) projectionType = _index.geoOrthographic;
    var projection = projectionType(), equirectangular = (0, _index.geoEquirectangular)().scale(_math.degrees).precision(0).clipAngle(null).translate([
        0,
        0
    ]); // antimeridian cutting
    function gilbert(point) {
        return projection(gilbertForward(point));
    }
    if (projection.invert) gilbert.invert = function(point) {
        return gilbertInvert(projection.invert(point));
    };
    gilbert.stream = function(stream) {
        var s1 = projection.stream(stream), s0 = equirectangular.stream({
            point: function point(lambda, phi) {
                s1.point(lambda / 2, (0, _math.asin)((0, _math.tan)(-phi / 2 * _math.radians)) * _math.degrees);
            },
            lineStart: function lineStart() {
                s1.lineStart();
            },
            lineEnd: function lineEnd() {
                s1.lineEnd();
            },
            polygonStart: function polygonStart() {
                s1.polygonStart();
            },
            polygonEnd: function polygonEnd() {
                s1.polygonEnd();
            }
        });
        s0.sphere = s1.sphere;
        return s0;
    };
    function property(name) {
        gilbert[name] = function() {
            return arguments.length ? (projection[name].apply(projection, arguments), gilbert) : projection[name]();
        };
    }
    gilbert.rotate = function(_) {
        return arguments.length ? (equirectangular.rotate(_), gilbert) : equirectangular.rotate();
    };
    gilbert.center = function(_) {
        return arguments.length ? (projection.center(gilbertForward(_)), gilbert) : gilbertInvert(projection.center());
    };
    property("angle");
    property("clipAngle");
    property("clipExtent");
    property("fitExtent");
    property("fitHeight");
    property("fitSize");
    property("fitWidth");
    property("scale");
    property("translate");
    property("precision");
    return gilbert.scale(249.5);
}
