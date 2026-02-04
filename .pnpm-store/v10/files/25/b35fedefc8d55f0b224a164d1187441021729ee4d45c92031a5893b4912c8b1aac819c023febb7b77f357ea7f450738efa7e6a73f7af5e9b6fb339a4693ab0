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
    hammerRetroazimuthalRaw: function() {
        return hammerRetroazimuthalRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function hammerRetroazimuthalRaw(phi0) {
    var sinPhi0 = (0, _math.sin)(phi0), cosPhi0 = (0, _math.cos)(phi0), rotate = hammerRetroazimuthalRotation(phi0);
    rotate.invert = hammerRetroazimuthalRotation(-phi0);
    function forward(lambda, phi) {
        var p = rotate(lambda, phi);
        lambda = p[0], phi = p[1];
        var sinPhi = (0, _math.sin)(phi), cosPhi = (0, _math.cos)(phi), cosLambda = (0, _math.cos)(lambda), z = (0, _math.acos)(sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosLambda), sinz = (0, _math.sin)(z), K = (0, _math.abs)(sinz) > _math.epsilon ? z / sinz : 1;
        return [
            K * cosPhi0 * (0, _math.sin)(lambda),
            ((0, _math.abs)(lambda) > _math.halfPi ? K : -K // rotate for back hemisphere
            ) * (sinPhi0 * cosPhi - cosPhi0 * sinPhi * cosLambda)
        ];
    }
    forward.invert = function(x, y) {
        var rho = (0, _math.sqrt)(x * x + y * y), sinz = -(0, _math.sin)(rho), cosz = (0, _math.cos)(rho), a = rho * cosz, b = -y * sinz, c = rho * sinPhi0, d = (0, _math.sqrt)(a * a + b * b - c * c), phi = (0, _math.atan2)(a * c + b * d, b * c - a * d), lambda = (rho > _math.halfPi ? -1 : 1) * (0, _math.atan2)(x * sinz, rho * (0, _math.cos)(phi) * cosz + y * (0, _math.sin)(phi) * sinz);
        return rotate.invert(lambda, phi);
    };
    return forward;
}
// Latitudinal rotation by phi0.
// Temporary hack until D3 supports arbitrary small-circle clipping origins.
function hammerRetroazimuthalRotation(phi0) {
    var sinPhi0 = (0, _math.sin)(phi0), cosPhi0 = (0, _math.cos)(phi0);
    return function(lambda, phi) {
        var cosPhi = (0, _math.cos)(phi), x = (0, _math.cos)(lambda) * cosPhi, y = (0, _math.sin)(lambda) * cosPhi, z = (0, _math.sin)(phi);
        return [
            (0, _math.atan2)(y, x * cosPhi0 - z * sinPhi0),
            (0, _math.asin)(z * cosPhi0 + x * sinPhi0)
        ];
    };
}
function _default() {
    var phi0 = 0, m = (0, _index.geoProjectionMutator)(hammerRetroazimuthalRaw), p = m(phi0), rotate_ = p.rotate, stream_ = p.stream, circle = (0, _index.geoCircle)();
    p.parallel = function(_) {
        if (!arguments.length) return phi0 * _math.degrees;
        var r = p.rotate();
        return m(phi0 = _ * _math.radians).rotate(r);
    };
    // Temporary hack; see hammerRetroazimuthalRotation.
    p.rotate = function(_) {
        if (!arguments.length) return _ = rotate_.call(p), _[1] += phi0 * _math.degrees, _;
        rotate_.call(p, [
            _[0],
            _[1] - phi0 * _math.degrees
        ]);
        circle.center([
            -_[0],
            -_[1]
        ]);
        return p;
    };
    p.stream = function(stream) {
        stream = stream_(stream);
        stream.sphere = function() {
            stream.polygonStart();
            var epsilon = 1e-2, ring = circle.radius(90 - epsilon)().coordinates[0], n = ring.length - 1, i = -1, p;
            stream.lineStart();
            while(++i < n)stream.point((p = ring[i])[0], p[1]);
            stream.lineEnd();
            ring = circle.radius(90 + epsilon)().coordinates[0];
            n = ring.length - 1;
            stream.lineStart();
            while(--i >= 0)stream.point((p = ring[i])[0], p[1]);
            stream.lineEnd();
            stream.polygonEnd();
        };
        return stream;
    };
    return p.scale(79.4187).parallel(45).clipAngle(180 - 1e-3);
}
