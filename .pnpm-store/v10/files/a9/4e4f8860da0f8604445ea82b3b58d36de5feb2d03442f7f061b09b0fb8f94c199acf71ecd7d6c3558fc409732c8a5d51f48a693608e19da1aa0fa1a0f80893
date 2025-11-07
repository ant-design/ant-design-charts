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
    armadilloRaw: function() {
        return armadilloRaw;
    },
    default: function() {
        return _default;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function armadilloRaw(phi0) {
    var sinPhi0 = (0, _math.sin)(phi0), cosPhi0 = (0, _math.cos)(phi0), sPhi0 = phi0 >= 0 ? 1 : -1, tanPhi0 = (0, _math.tan)(sPhi0 * phi0), k = (1 + sinPhi0 - cosPhi0) / 2;
    function forward(lambda, phi) {
        var cosPhi = (0, _math.cos)(phi), cosLambda = (0, _math.cos)(lambda /= 2);
        return [
            (1 + cosPhi) * (0, _math.sin)(lambda),
            (sPhi0 * phi > -(0, _math.atan2)(cosLambda, tanPhi0) - 1e-3 ? 0 : -sPhi0 * 10) + k + (0, _math.sin)(phi) * cosPhi0 - (1 + cosPhi) * sinPhi0 * cosLambda // TODO D3 core should allow null or [NaN, NaN] to be returned.
        ];
    }
    forward.invert = function(x, y) {
        var lambda = 0, phi = 0, i = 50;
        do {
            var cosLambda = (0, _math.cos)(lambda), sinLambda = (0, _math.sin)(lambda), cosPhi = (0, _math.cos)(phi), sinPhi = (0, _math.sin)(phi), A = 1 + cosPhi, fx = A * sinLambda - x, fy = k + sinPhi * cosPhi0 - A * sinPhi0 * cosLambda - y, dxdLambda = A * cosLambda / 2, dxdPhi = -sinLambda * sinPhi, dydLambda = sinPhi0 * A * sinLambda / 2, dydPhi = cosPhi0 * cosPhi + sinPhi0 * cosLambda * sinPhi, denominator = dxdPhi * dydLambda - dydPhi * dxdLambda, dLambda = (fy * dxdPhi - fx * dydPhi) / denominator / 2, dPhi = (fx * dydLambda - fy * dxdLambda) / denominator;
            if ((0, _math.abs)(dPhi) > 2) dPhi /= 2;
            lambda -= dLambda, phi -= dPhi;
        }while (((0, _math.abs)(dLambda) > _math.epsilon || (0, _math.abs)(dPhi) > _math.epsilon) && --i > 0);
        return sPhi0 * phi > -(0, _math.atan2)((0, _math.cos)(lambda), tanPhi0) - 1e-3 ? [
            lambda * 2,
            phi
        ] : null;
    };
    return forward;
}
function _default() {
    var phi0 = 20 * _math.radians, sPhi0 = phi0 >= 0 ? 1 : -1, tanPhi0 = (0, _math.tan)(sPhi0 * phi0), m = (0, _index.geoProjectionMutator)(armadilloRaw), p = m(phi0), stream_ = p.stream;
    p.parallel = function(_) {
        if (!arguments.length) return phi0 * _math.degrees;
        tanPhi0 = (0, _math.tan)((sPhi0 = (phi0 = _ * _math.radians) >= 0 ? 1 : -1) * phi0);
        return m(phi0);
    };
    p.stream = function(stream) {
        var rotate = p.rotate(), rotateStream = stream_(stream), sphereStream = (p.rotate([
            0,
            0
        ]), stream_(stream)), precision = p.precision();
        p.rotate(rotate);
        rotateStream.sphere = function() {
            sphereStream.polygonStart(), sphereStream.lineStart();
            for(var lambda = sPhi0 * -180; sPhi0 * lambda < 180; lambda += sPhi0 * 90)sphereStream.point(lambda, sPhi0 * 90);
            if (phi0) while(sPhi0 * (lambda -= 3 * sPhi0 * precision) >= -180){
                sphereStream.point(lambda, sPhi0 * -(0, _math.atan2)((0, _math.cos)(lambda * _math.radians / 2), tanPhi0) * _math.degrees);
            }
            sphereStream.lineEnd(), sphereStream.polygonEnd();
        };
        return rotateStream;
    };
    return p.scale(218.695).center([
        0,
        28.0974
    ]);
}
