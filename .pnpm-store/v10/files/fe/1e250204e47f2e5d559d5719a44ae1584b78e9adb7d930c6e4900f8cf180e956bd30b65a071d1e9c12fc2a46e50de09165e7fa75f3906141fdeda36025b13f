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
        return projection;
    },
    projectionMutator: function() {
        return projectionMutator;
    }
});
var _antimeridian = /*#__PURE__*/ _interop_require_default(require("../clip/antimeridian.js"));
var _circle = /*#__PURE__*/ _interop_require_default(require("../clip/circle.js"));
var _rectangle = /*#__PURE__*/ _interop_require_default(require("../clip/rectangle.js"));
var _compose = /*#__PURE__*/ _interop_require_default(require("../compose.js"));
var _identity = /*#__PURE__*/ _interop_require_default(require("../identity.js"));
var _math = require("../math.js");
var _rotation = require("../rotation.js");
var _transform = require("../transform.js");
var _fit = require("./fit.js");
var _resample = /*#__PURE__*/ _interop_require_default(require("./resample.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var transformRadians = (0, _transform.transformer)({
    point: function point(x, y) {
        this.stream.point(x * _math.radians, y * _math.radians);
    }
});
function transformRotate(rotate) {
    return (0, _transform.transformer)({
        point: function point(x, y) {
            var r = rotate(x, y);
            return this.stream.point(r[0], r[1]);
        }
    });
}
function scaleTranslate(k, dx, dy, sx, sy) {
    function transform(x, y) {
        x *= sx;
        y *= sy;
        return [
            dx + k * x,
            dy - k * y
        ];
    }
    transform.invert = function(x, y) {
        return [
            (x - dx) / k * sx,
            (dy - y) / k * sy
        ];
    };
    return transform;
}
function scaleTranslateRotate(k, dx, dy, sx, sy, alpha) {
    if (!alpha) return scaleTranslate(k, dx, dy, sx, sy);
    var cosAlpha = (0, _math.cos)(alpha), sinAlpha = (0, _math.sin)(alpha), a = cosAlpha * k, b = sinAlpha * k, ai = cosAlpha / k, bi = sinAlpha / k, ci = (sinAlpha * dy - cosAlpha * dx) / k, fi = (sinAlpha * dx + cosAlpha * dy) / k;
    function transform(x, y) {
        x *= sx;
        y *= sy;
        return [
            a * x - b * y + dx,
            dy - b * x - a * y
        ];
    }
    transform.invert = function(x, y) {
        return [
            sx * (ai * x - bi * y + ci),
            sy * (fi - bi * x - ai * y)
        ];
    };
    return transform;
}
function projection(project) {
    return projectionMutator(function() {
        return project;
    })();
}
function projectionMutator(projectAt) {
    var project, k = 150, x = 480, y = 250, lambda = 0, phi = 0, deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, alpha = 0, sx = 1, sy = 1, theta = null, preclip = _antimeridian.default, x0 = null, y0, x1, y1, postclip = _identity.default, delta2 = 0.5, projectResample, projectTransform, projectRotateTransform, cache, cacheStream;
    function projection(point) {
        return projectRotateTransform(point[0] * _math.radians, point[1] * _math.radians);
    }
    function invert(point) {
        point = projectRotateTransform.invert(point[0], point[1]);
        return point && [
            point[0] * _math.degrees,
            point[1] * _math.degrees
        ];
    }
    projection.stream = function(stream) {
        return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
    };
    projection.preclip = function(_) {
        return arguments.length ? (preclip = _, theta = undefined, reset()) : preclip;
    };
    projection.postclip = function(_) {
        return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
    };
    projection.clipAngle = function(_) {
        return arguments.length ? (preclip = +_ ? (0, _circle.default)(theta = _ * _math.radians) : (theta = null, _antimeridian.default), reset()) : theta * _math.degrees;
    };
    projection.clipExtent = function(_) {
        return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, _identity.default) : (0, _rectangle.default)(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [
            [
                x0,
                y0
            ],
            [
                x1,
                y1
            ]
        ];
    };
    projection.scale = function(_) {
        return arguments.length ? (k = +_, recenter()) : k;
    };
    projection.translate = function(_) {
        return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [
            x,
            y
        ];
    };
    projection.center = function(_) {
        return arguments.length ? (lambda = _[0] % 360 * _math.radians, phi = _[1] % 360 * _math.radians, recenter()) : [
            lambda * _math.degrees,
            phi * _math.degrees
        ];
    };
    projection.rotate = function(_) {
        return arguments.length ? (deltaLambda = _[0] % 360 * _math.radians, deltaPhi = _[1] % 360 * _math.radians, deltaGamma = _.length > 2 ? _[2] % 360 * _math.radians : 0, recenter()) : [
            deltaLambda * _math.degrees,
            deltaPhi * _math.degrees,
            deltaGamma * _math.degrees
        ];
    };
    projection.angle = function(_) {
        return arguments.length ? (alpha = _ % 360 * _math.radians, recenter()) : alpha * _math.degrees;
    };
    projection.reflectX = function(_) {
        return arguments.length ? (sx = _ ? -1 : 1, recenter()) : sx < 0;
    };
    projection.reflectY = function(_) {
        return arguments.length ? (sy = _ ? -1 : 1, recenter()) : sy < 0;
    };
    projection.precision = function(_) {
        return arguments.length ? (projectResample = (0, _resample.default)(projectTransform, delta2 = _ * _), reset()) : (0, _math.sqrt)(delta2);
    };
    projection.fitExtent = function(extent, object) {
        return (0, _fit.fitExtent)(projection, extent, object);
    };
    projection.fitSize = function(size, object) {
        return (0, _fit.fitSize)(projection, size, object);
    };
    projection.fitWidth = function(width, object) {
        return (0, _fit.fitWidth)(projection, width, object);
    };
    projection.fitHeight = function(height, object) {
        return (0, _fit.fitHeight)(projection, height, object);
    };
    function recenter() {
        var center = scaleTranslateRotate(k, 0, 0, sx, sy, alpha).apply(null, project(lambda, phi)), transform = scaleTranslateRotate(k, x - center[0], y - center[1], sx, sy, alpha);
        rotate = (0, _rotation.rotateRadians)(deltaLambda, deltaPhi, deltaGamma);
        projectTransform = (0, _compose.default)(project, transform);
        projectRotateTransform = (0, _compose.default)(rotate, projectTransform);
        projectResample = (0, _resample.default)(projectTransform, delta2);
        return reset();
    }
    function reset() {
        cache = cacheStream = null;
        return projection;
    }
    return function() {
        project = projectAt.apply(this, arguments);
        projection.invert = project.invert && invert;
        return recenter();
    };
}
