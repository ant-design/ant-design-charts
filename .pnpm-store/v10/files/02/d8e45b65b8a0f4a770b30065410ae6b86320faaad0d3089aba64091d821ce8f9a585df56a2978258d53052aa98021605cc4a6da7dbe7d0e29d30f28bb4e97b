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
    circleStream: function() {
        return circleStream;
    },
    default: function() {
        return _default;
    }
});
var _cartesian = require("./cartesian.js");
var _constant = /*#__PURE__*/ _interop_require_default(require("./constant.js"));
var _math = require("./math.js");
var _rotation = require("./rotation.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function circleStream(stream, radius, delta, direction, t0, t1) {
    if (!delta) return;
    var cosRadius = (0, _math.cos)(radius), sinRadius = (0, _math.sin)(radius), step = direction * delta;
    if (t0 == null) {
        t0 = radius + direction * _math.tau;
        t1 = radius - step / 2;
    } else {
        t0 = circleRadius(cosRadius, t0);
        t1 = circleRadius(cosRadius, t1);
        if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * _math.tau;
    }
    for(var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step){
        point = (0, _cartesian.spherical)([
            cosRadius,
            -sinRadius * (0, _math.cos)(t),
            -sinRadius * (0, _math.sin)(t)
        ]);
        stream.point(point[0], point[1]);
    }
}
// Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
function circleRadius(cosRadius, point) {
    point = (0, _cartesian.cartesian)(point), point[0] -= cosRadius;
    (0, _cartesian.cartesianNormalizeInPlace)(point);
    var radius = (0, _math.acos)(-point[1]);
    return ((-point[2] < 0 ? -radius : radius) + _math.tau - _math.epsilon) % _math.tau;
}
function _default() {
    var center = (0, _constant.default)([
        0,
        0
    ]), radius = (0, _constant.default)(90), precision = (0, _constant.default)(2), ring, rotate, stream = {
        point: point
    };
    function point(x, y) {
        ring.push(x = rotate(x, y));
        x[0] *= _math.degrees, x[1] *= _math.degrees;
    }
    function circle() {
        var c = center.apply(this, arguments), r = radius.apply(this, arguments) * _math.radians, p = precision.apply(this, arguments) * _math.radians;
        ring = [];
        rotate = (0, _rotation.rotateRadians)(-c[0] * _math.radians, -c[1] * _math.radians, 0).invert;
        circleStream(stream, r, p, 1);
        c = {
            type: "Polygon",
            coordinates: [
                ring
            ]
        };
        ring = rotate = null;
        return c;
    }
    circle.center = function(_) {
        return arguments.length ? (center = typeof _ === "function" ? _ : (0, _constant.default)([
            +_[0],
            +_[1]
        ]), circle) : center;
    };
    circle.radius = function(_) {
        return arguments.length ? (radius = typeof _ === "function" ? _ : (0, _constant.default)(+_), circle) : radius;
    };
    circle.precision = function(_) {
        return arguments.length ? (precision = typeof _ === "function" ? _ : (0, _constant.default)(+_), circle) : precision;
    };
    return circle;
}
