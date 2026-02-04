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
    rotateRadians: function() {
        return rotateRadians;
    }
});
var _compose = /*#__PURE__*/ _interop_require_default(require("./compose.js"));
var _math = require("./math.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function rotationIdentity(lambda, phi) {
    if ((0, _math.abs)(lambda) > _math.pi) lambda -= Math.round(lambda / _math.tau) * _math.tau;
    return [
        lambda,
        phi
    ];
}
rotationIdentity.invert = rotationIdentity;
function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
    return (deltaLambda %= _math.tau) ? deltaPhi || deltaGamma ? (0, _compose.default)(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma)) : rotationLambda(deltaLambda) : deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma) : rotationIdentity;
}
function forwardRotationLambda(deltaLambda) {
    return function(lambda, phi) {
        lambda += deltaLambda;
        if ((0, _math.abs)(lambda) > _math.pi) lambda -= Math.round(lambda / _math.tau) * _math.tau;
        return [
            lambda,
            phi
        ];
    };
}
function rotationLambda(deltaLambda) {
    var rotation = forwardRotationLambda(deltaLambda);
    rotation.invert = forwardRotationLambda(-deltaLambda);
    return rotation;
}
function rotationPhiGamma(deltaPhi, deltaGamma) {
    var cosDeltaPhi = (0, _math.cos)(deltaPhi), sinDeltaPhi = (0, _math.sin)(deltaPhi), cosDeltaGamma = (0, _math.cos)(deltaGamma), sinDeltaGamma = (0, _math.sin)(deltaGamma);
    function rotation(lambda, phi) {
        var cosPhi = (0, _math.cos)(phi), x = (0, _math.cos)(lambda) * cosPhi, y = (0, _math.sin)(lambda) * cosPhi, z = (0, _math.sin)(phi), k = z * cosDeltaPhi + x * sinDeltaPhi;
        return [
            (0, _math.atan2)(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
            (0, _math.asin)(k * cosDeltaGamma + y * sinDeltaGamma)
        ];
    }
    rotation.invert = function(lambda, phi) {
        var cosPhi = (0, _math.cos)(phi), x = (0, _math.cos)(lambda) * cosPhi, y = (0, _math.sin)(lambda) * cosPhi, z = (0, _math.sin)(phi), k = z * cosDeltaGamma - y * sinDeltaGamma;
        return [
            (0, _math.atan2)(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
            (0, _math.asin)(k * cosDeltaPhi - x * sinDeltaPhi)
        ];
    };
    return rotation;
}
function _default(rotate) {
    rotate = rotateRadians(rotate[0] * _math.radians, rotate[1] * _math.radians, rotate.length > 2 ? rotate[2] * _math.radians : 0);
    function forward(coordinates) {
        coordinates = rotate(coordinates[0] * _math.radians, coordinates[1] * _math.radians);
        return coordinates[0] *= _math.degrees, coordinates[1] *= _math.degrees, coordinates;
    }
    forward.invert = function(coordinates) {
        coordinates = rotate.invert(coordinates[0] * _math.radians, coordinates[1] * _math.radians);
        return coordinates[0] *= _math.degrees, coordinates[1] *= _math.degrees, coordinates;
    };
    return forward;
}
