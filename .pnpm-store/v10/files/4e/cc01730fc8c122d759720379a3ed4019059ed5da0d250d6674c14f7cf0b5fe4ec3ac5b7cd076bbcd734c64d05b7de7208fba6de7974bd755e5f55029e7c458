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
var _index = /*#__PURE__*/ _interop_require_default(require("./index.js"));
var _math = require("../math.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _default = (0, _index.default)(function() {
    return true;
}, clipAntimeridianLine, clipAntimeridianInterpolate, [
    -_math.pi,
    -_math.halfPi
]);
// Takes a line and cuts into visible segments. Return values: 0 - there were
// intersections or the line was empty; 1 - no intersections; 2 - there were
// intersections, and the first and last segments should be rejoined.
function clipAntimeridianLine(stream) {
    var lambda0 = NaN, phi0 = NaN, sign0 = NaN, clean; // no intersections
    return {
        lineStart: function lineStart() {
            stream.lineStart();
            clean = 1;
        },
        point: function point(lambda1, phi1) {
            var sign1 = lambda1 > 0 ? _math.pi : -_math.pi, delta = (0, _math.abs)(lambda1 - lambda0);
            if ((0, _math.abs)(delta - _math.pi) < _math.epsilon) {
                stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? _math.halfPi : -_math.halfPi);
                stream.point(sign0, phi0);
                stream.lineEnd();
                stream.lineStart();
                stream.point(sign1, phi0);
                stream.point(lambda1, phi0);
                clean = 0;
            } else if (sign0 !== sign1 && delta >= _math.pi) {
                if ((0, _math.abs)(lambda0 - sign0) < _math.epsilon) lambda0 -= sign0 * _math.epsilon; // handle degeneracies
                if ((0, _math.abs)(lambda1 - sign1) < _math.epsilon) lambda1 -= sign1 * _math.epsilon;
                phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
                stream.point(sign0, phi0);
                stream.lineEnd();
                stream.lineStart();
                stream.point(sign1, phi0);
                clean = 0;
            }
            stream.point(lambda0 = lambda1, phi0 = phi1);
            sign0 = sign1;
        },
        lineEnd: function lineEnd() {
            stream.lineEnd();
            lambda0 = phi0 = NaN;
        },
        clean: function clean1() {
            return 2 - clean; // if intersections, rejoin first and last segments
        }
    };
}
function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
    var cosPhi0, cosPhi1, sinLambda0Lambda1 = (0, _math.sin)(lambda0 - lambda1);
    return (0, _math.abs)(sinLambda0Lambda1) > _math.epsilon ? (0, _math.atan)(((0, _math.sin)(phi0) * (cosPhi1 = (0, _math.cos)(phi1)) * (0, _math.sin)(lambda1) - (0, _math.sin)(phi1) * (cosPhi0 = (0, _math.cos)(phi0)) * (0, _math.sin)(lambda0)) / (cosPhi0 * cosPhi1 * sinLambda0Lambda1)) : (phi0 + phi1) / 2;
}
function clipAntimeridianInterpolate(from, to, direction, stream) {
    var phi;
    if (from == null) {
        phi = direction * _math.halfPi;
        stream.point(-_math.pi, phi);
        stream.point(0, phi);
        stream.point(_math.pi, phi);
        stream.point(_math.pi, 0);
        stream.point(_math.pi, -phi);
        stream.point(0, -phi);
        stream.point(-_math.pi, -phi);
        stream.point(-_math.pi, 0);
        stream.point(-_math.pi, phi);
    } else if ((0, _math.abs)(from[0] - to[0]) > _math.epsilon) {
        var lambda = from[0] < to[0] ? _math.pi : -_math.pi;
        phi = direction * lambda / 2;
        stream.point(-lambda, phi);
        stream.point(0, phi);
        stream.point(lambda, phi);
    } else {
        stream.point(to[0], to[1]);
    }
}
