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
        return _default;
    },
    gringortenRaw: function() {
        return gringortenRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
var _square = /*#__PURE__*/ _interop_require_default(require("./square.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function gringortenRaw(lambda, phi) {
    var sLambda = (0, _math.sign)(lambda), sPhi = (0, _math.sign)(phi), cosPhi = (0, _math.cos)(phi), x = (0, _math.cos)(lambda) * cosPhi, y = (0, _math.sin)(lambda) * cosPhi, z = (0, _math.sin)(sPhi * phi);
    lambda = (0, _math.abs)((0, _math.atan2)(y, z));
    phi = (0, _math.asin)(x);
    if ((0, _math.abs)(lambda - _math.halfPi) > _math.epsilon) lambda %= _math.halfPi;
    var point = gringortenHexadecant(lambda > _math.pi / 4 ? _math.halfPi - lambda : lambda, phi);
    if (lambda > _math.pi / 4) z = point[0], point[0] = -point[1], point[1] = -z;
    return point[0] *= sLambda, point[1] *= -sPhi, point;
}
gringortenRaw.invert = function(x, y) {
    if ((0, _math.abs)(x) > 1) x = (0, _math.sign)(x) * 2 - x;
    if ((0, _math.abs)(y) > 1) y = (0, _math.sign)(y) * 2 - y;
    var sx = (0, _math.sign)(x), sy = (0, _math.sign)(y), x0 = -sx * x, y0 = -sy * y, t = y0 / x0 < 1, p = gringortenHexadecantInvert(t ? y0 : x0, t ? x0 : y0), lambda = p[0], phi = p[1], cosPhi = (0, _math.cos)(phi);
    if (t) lambda = -_math.halfPi - lambda;
    return [
        sx * ((0, _math.atan2)((0, _math.sin)(lambda) * cosPhi, -(0, _math.sin)(phi)) + _math.pi),
        sy * (0, _math.asin)((0, _math.cos)(lambda) * cosPhi)
    ];
};
function gringortenHexadecant(lambda, phi) {
    if (phi === _math.halfPi) return [
        0,
        0
    ];
    var sinPhi = (0, _math.sin)(phi), r = sinPhi * sinPhi, r2 = r * r, j = 1 + r2, k = 1 + 3 * r2, q = 1 - r2, z = (0, _math.asin)(1 / (0, _math.sqrt)(j)), v = q + r * j * z, p2 = (1 - sinPhi) / v, p = (0, _math.sqrt)(p2), a2 = p2 * j, a = (0, _math.sqrt)(a2), h = p * q, x, i;
    if (lambda === 0) return [
        0,
        -(h + r * a)
    ];
    var cosPhi = (0, _math.cos)(phi), secPhi = 1 / cosPhi, drdPhi = 2 * sinPhi * cosPhi, dvdPhi = (-3 * r + z * k) * drdPhi, dp2dPhi = (-v * cosPhi - (1 - sinPhi) * dvdPhi) / (v * v), dpdPhi = 0.5 * dp2dPhi / p, dhdPhi = q * dpdPhi - 2 * r * p * drdPhi, dra2dPhi = r * j * dp2dPhi + p2 * k * drdPhi, mu = -secPhi * drdPhi, nu = -secPhi * dra2dPhi, zeta = -2 * secPhi * dhdPhi, lambda1 = 4 * lambda / _math.pi, delta;
    // Slower but accurate bisection method.
    if (lambda > 0.222 * _math.pi || phi < _math.pi / 4 && lambda > 0.175 * _math.pi) {
        x = (h + r * (0, _math.sqrt)(a2 * (1 + r2) - h * h)) / (1 + r2);
        if (lambda > _math.pi / 4) return [
            x,
            x
        ];
        var x1 = x, x0 = 0.5 * x;
        x = 0.5 * (x0 + x1), i = 50;
        do {
            var g = (0, _math.sqrt)(a2 - x * x), f = x * (zeta + mu * g) + nu * (0, _math.asin)(x / a) - lambda1;
            if (!f) break;
            if (f < 0) x0 = x;
            else x1 = x;
            x = 0.5 * (x0 + x1);
        }while ((0, _math.abs)(x1 - x0) > _math.epsilon && --i > 0);
    } else {
        x = _math.epsilon, i = 25;
        do {
            var x2 = x * x, g2 = (0, _math.sqrt)(a2 - x2), zetaMug = zeta + mu * g2, f2 = x * zetaMug + nu * (0, _math.asin)(x / a) - lambda1, df = zetaMug + (nu - mu * x2) / g2;
            x -= delta = g2 ? f2 / df : 0;
        }while ((0, _math.abs)(delta) > _math.epsilon && --i > 0);
    }
    return [
        x,
        -h - r * (0, _math.sqrt)(a2 - x * x)
    ];
}
function gringortenHexadecantInvert(x, y) {
    var x0 = 0, x1 = 1, r = 0.5, i = 50;
    while(true){
        var r2 = r * r, sinPhi = (0, _math.sqrt)(r), z = (0, _math.asin)(1 / (0, _math.sqrt)(1 + r2)), v = 1 - r2 + r * (1 + r2) * z, p2 = (1 - sinPhi) / v, p = (0, _math.sqrt)(p2), a2 = p2 * (1 + r2), h = p * (1 - r2), g2 = a2 - x * x, g = (0, _math.sqrt)(g2), y0 = y + h + r * g;
        if ((0, _math.abs)(x1 - x0) < _math.epsilon2 || --i === 0 || y0 === 0) break;
        if (y0 > 0) x0 = r;
        else x1 = r;
        r = 0.5 * (x0 + x1);
    }
    if (!i) return null;
    var phi = (0, _math.asin)(sinPhi), cosPhi = (0, _math.cos)(phi), secPhi = 1 / cosPhi, drdPhi = 2 * sinPhi * cosPhi, dvdPhi = (-3 * r + z * (1 + 3 * r2)) * drdPhi, dp2dPhi = (-v * cosPhi - (1 - sinPhi) * dvdPhi) / (v * v), dpdPhi = 0.5 * dp2dPhi / p, dhdPhi = (1 - r2) * dpdPhi - 2 * r * p * drdPhi, zeta = -2 * secPhi * dhdPhi, mu = -secPhi * drdPhi, nu = -secPhi * (r * (1 + r2) * dp2dPhi + p2 * (1 + 3 * r2) * drdPhi);
    return [
        _math.pi / 4 * (x * (zeta + mu * g) + nu * (0, _math.asin)(x / (0, _math.sqrt)(a2))),
        phi
    ];
}
function _default() {
    return (0, _index.geoProjection)((0, _square.default)(gringortenRaw)).scale(239.75);
}
