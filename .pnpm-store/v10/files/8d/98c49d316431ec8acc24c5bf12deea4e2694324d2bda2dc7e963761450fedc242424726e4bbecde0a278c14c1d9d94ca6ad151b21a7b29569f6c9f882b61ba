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
var _rectangle = /*#__PURE__*/ _interop_require_default(require("../clip/rectangle.js"));
var _identity = /*#__PURE__*/ _interop_require_default(require("../identity.js"));
var _transform = require("../transform.js");
var _fit = require("./fit.js");
var _math = require("../math.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _default() {
    var k = 1, tx = 0, ty = 0, sx = 1, sy = 1, alpha = 0, ca, sa, x0 = null, y0, x1, y1, kx = 1, ky = 1, transform = (0, _transform.transformer)({
        point: function point(x, y) {
            var p = projection([
                x,
                y
            ]);
            this.stream.point(p[0], p[1]);
        }
    }), postclip = _identity.default, cache, cacheStream;
    function reset() {
        kx = k * sx;
        ky = k * sy;
        cache = cacheStream = null;
        return projection;
    }
    function projection(p) {
        var x = p[0] * kx, y = p[1] * ky;
        if (alpha) {
            var t = y * ca - x * sa;
            x = x * ca + y * sa;
            y = t;
        }
        return [
            x + tx,
            y + ty
        ];
    }
    projection.invert = function(p) {
        var x = p[0] - tx, y = p[1] - ty;
        if (alpha) {
            var t = y * ca + x * sa;
            x = x * ca - y * sa;
            y = t;
        }
        return [
            x / kx,
            y / ky
        ];
    };
    projection.stream = function(stream) {
        return cache && cacheStream === stream ? cache : cache = transform(postclip(cacheStream = stream));
    };
    projection.postclip = function(_) {
        return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
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
        return arguments.length ? (k = +_, reset()) : k;
    };
    projection.translate = function(_) {
        return arguments.length ? (tx = +_[0], ty = +_[1], reset()) : [
            tx,
            ty
        ];
    };
    projection.angle = function(_) {
        return arguments.length ? (alpha = _ % 360 * _math.radians, sa = (0, _math.sin)(alpha), ca = (0, _math.cos)(alpha), reset()) : alpha * _math.degrees;
    };
    projection.reflectX = function(_) {
        return arguments.length ? (sx = _ ? -1 : 1, reset()) : sx < 0;
    };
    projection.reflectY = function(_) {
        return arguments.length ? (sy = _ ? -1 : 1, reset()) : sy < 0;
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
    return projection;
}
