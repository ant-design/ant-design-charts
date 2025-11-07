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
    gingeryRaw: function() {
        return gingeryRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function gingeryRaw(rho, n) {
    var k = 2 * _math.pi / n, rho2 = rho * rho;
    function forward(lambda, phi) {
        var p = (0, _index.geoAzimuthalEquidistantRaw)(lambda, phi), x = p[0], y = p[1], r2 = x * x + y * y;
        if (r2 > rho2) {
            var r = (0, _math.sqrt)(r2), theta = (0, _math.atan2)(y, x), theta0 = k * (0, _math.round)(theta / k), alpha = theta - theta0, rhoCosAlpha = rho * (0, _math.cos)(alpha), k_ = (rho * (0, _math.sin)(alpha) - alpha * (0, _math.sin)(rhoCosAlpha)) / (_math.halfPi - rhoCosAlpha), s_ = gingeryLength(alpha, k_), e = (_math.pi - rho) / gingeryIntegrate(s_, rhoCosAlpha, _math.pi);
            x = r;
            var i = 50, delta;
            do {
                x -= delta = (rho + gingeryIntegrate(s_, rhoCosAlpha, x) * e - r) / (s_(x) * e);
            }while ((0, _math.abs)(delta) > _math.epsilon && --i > 0);
            y = alpha * (0, _math.sin)(x);
            if (x < _math.halfPi) y -= k_ * (x - _math.halfPi);
            var s = (0, _math.sin)(theta0), c = (0, _math.cos)(theta0);
            p[0] = x * c - y * s;
            p[1] = x * s + y * c;
        }
        return p;
    }
    forward.invert = function(x, y) {
        var r2 = x * x + y * y;
        if (r2 > rho2) {
            var r = (0, _math.sqrt)(r2), theta = (0, _math.atan2)(y, x), theta0 = k * (0, _math.round)(theta / k), dTheta = theta - theta0;
            x = r * (0, _math.cos)(dTheta);
            y = r * (0, _math.sin)(dTheta);
            var x_halfPi = x - _math.halfPi, sinx = (0, _math.sin)(x), alpha = y / sinx, delta = x < _math.halfPi ? Infinity : 0, i = 10;
            while(true){
                var rhosinAlpha = rho * (0, _math.sin)(alpha), rhoCosAlpha = rho * (0, _math.cos)(alpha), sinRhoCosAlpha = (0, _math.sin)(rhoCosAlpha), halfPi_RhoCosAlpha = _math.halfPi - rhoCosAlpha, k_ = (rhosinAlpha - alpha * sinRhoCosAlpha) / halfPi_RhoCosAlpha, s_ = gingeryLength(alpha, k_);
                if ((0, _math.abs)(delta) < _math.epsilon2 || !--i) break;
                alpha -= delta = (alpha * sinx - k_ * x_halfPi - y) / (sinx - x_halfPi * 2 * (halfPi_RhoCosAlpha * (rhoCosAlpha + alpha * rhosinAlpha * (0, _math.cos)(rhoCosAlpha) - sinRhoCosAlpha) - rhosinAlpha * (rhosinAlpha - alpha * sinRhoCosAlpha)) / (halfPi_RhoCosAlpha * halfPi_RhoCosAlpha));
            }
            r = rho + gingeryIntegrate(s_, rhoCosAlpha, x) * (_math.pi - rho) / gingeryIntegrate(s_, rhoCosAlpha, _math.pi);
            theta = theta0 + alpha;
            x = r * (0, _math.cos)(theta);
            y = r * (0, _math.sin)(theta);
        }
        return _index.geoAzimuthalEquidistantRaw.invert(x, y);
    };
    return forward;
}
function gingeryLength(alpha, k) {
    return function(x) {
        var y_ = alpha * (0, _math.cos)(x);
        if (x < _math.halfPi) y_ -= k;
        return (0, _math.sqrt)(1 + y_ * y_);
    };
}
// Numerical integration: trapezoidal rule.
function gingeryIntegrate(f, a, b) {
    var n = 50, h = (b - a) / n, s = f(a) + f(b);
    for(var i = 1, x = a; i < n; ++i)s += 2 * f(x += h);
    return s * 0.5 * h;
}
function _default() {
    var n = 6, rho = 30 * _math.radians, cRho = (0, _math.cos)(rho), sRho = (0, _math.sin)(rho), m = (0, _index.geoProjectionMutator)(gingeryRaw), p = m(rho, n), stream_ = p.stream, epsilon = 1e-2, cr = -(0, _math.cos)(epsilon * _math.radians), sr = (0, _math.sin)(epsilon * _math.radians);
    p.radius = function(_) {
        if (!arguments.length) return rho * _math.degrees;
        cRho = (0, _math.cos)(rho = _ * _math.radians);
        sRho = (0, _math.sin)(rho);
        return m(rho, n);
    };
    p.lobes = function(_) {
        if (!arguments.length) return n;
        return m(rho, n = +_);
    };
    p.stream = function(stream) {
        var rotate = p.rotate(), rotateStream = stream_(stream), sphereStream = (p.rotate([
            0,
            0
        ]), stream_(stream));
        p.rotate(rotate);
        rotateStream.sphere = function() {
            sphereStream.polygonStart(), sphereStream.lineStart();
            for(var i = 0, delta = 2 * _math.pi / n, phi = 0; i < n; ++i, phi -= delta){
                sphereStream.point((0, _math.atan2)(sr * (0, _math.cos)(phi), cr) * _math.degrees, (0, _math.asin)(sr * (0, _math.sin)(phi)) * _math.degrees);
                sphereStream.point((0, _math.atan2)(sRho * (0, _math.cos)(phi - delta / 2), cRho) * _math.degrees, (0, _math.asin)(sRho * (0, _math.sin)(phi - delta / 2)) * _math.degrees);
            }
            sphereStream.lineEnd(), sphereStream.polygonEnd();
        };
        return rotateStream;
    };
    return p.rotate([
        90,
        -40
    ]).scale(91.7095).clipAngle(180 - 1e-3);
}
