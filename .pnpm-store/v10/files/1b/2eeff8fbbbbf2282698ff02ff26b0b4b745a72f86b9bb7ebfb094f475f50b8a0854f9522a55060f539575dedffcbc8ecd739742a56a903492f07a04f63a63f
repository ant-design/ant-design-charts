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
    healpixRaw: function() {
        return healpixRaw;
    }
});
var _index = require("../../d3-array/src/index.js");
var _index1 = require("../../d3-geo/src/index.js");
var _collignon = require("./collignon.js");
var _cylindricalEqualArea = require("./cylindricalEqualArea.js");
var _math = require("./math.js");
var K = 3, healpixParallel = (0, _math.asin)(1 - 1 / K) * _math.degrees, healpixLambert = (0, _cylindricalEqualArea.cylindricalEqualAreaRaw)(0);
function healpixRaw(H) {
    var phi0 = healpixParallel * _math.radians, dx = (0, _collignon.collignonRaw)(_math.pi, phi0)[0] - (0, _collignon.collignonRaw)(-_math.pi, phi0)[0], y0 = healpixLambert(0, phi0)[1], y1 = (0, _collignon.collignonRaw)(0, phi0)[1], dy1 = _math.sqrtPi - y1, k = _math.tau / H, w = 4 / _math.tau, h = y0 + dy1 * dy1 * 4 / _math.tau;
    function forward(lambda, phi) {
        var point, phi2 = (0, _math.abs)(phi);
        if (phi2 > phi0) {
            var i = (0, _math.min)(H - 1, (0, _math.max)(0, (0, _math.floor)((lambda + _math.pi) / k)));
            lambda += _math.pi * (H - 1) / H - i * k;
            point = (0, _collignon.collignonRaw)(lambda, phi2);
            point[0] = point[0] * _math.tau / dx - _math.tau * (H - 1) / (2 * H) + i * _math.tau / H;
            point[1] = y0 + (point[1] - y1) * 4 * dy1 / _math.tau;
            if (phi < 0) point[1] = -point[1];
        } else {
            point = healpixLambert(lambda, phi);
        }
        point[0] *= w, point[1] /= h;
        return point;
    }
    forward.invert = function(x, y) {
        x /= w, y *= h;
        var y2 = (0, _math.abs)(y);
        if (y2 > y0) {
            var i = (0, _math.min)(H - 1, (0, _math.max)(0, (0, _math.floor)((x + _math.pi) / k)));
            x = (x + _math.pi * (H - 1) / H - i * k) * dx / _math.tau;
            var point = _collignon.collignonRaw.invert(x, 0.25 * (y2 - y0) * _math.tau / dy1 + y1);
            point[0] -= _math.pi * (H - 1) / H - i * k;
            if (y < 0) point[1] = -point[1];
            return point;
        }
        return healpixLambert.invert(x, y);
    };
    return forward;
}
function sphereTop(x, i) {
    return [
        x,
        i & 1 ? 90 - _math.epsilon : healpixParallel
    ];
}
function sphereBottom(x, i) {
    return [
        x,
        i & 1 ? -90 + _math.epsilon : -healpixParallel
    ];
}
function sphereNudge(d) {
    return [
        d[0] * (1 - _math.epsilon),
        d[1]
    ];
}
function sphere(step) {
    var c = [].concat((0, _index.range)(-180, 180 + step / 2, step).map(sphereTop), (0, _index.range)(180, -180 - step / 2, -step).map(sphereBottom));
    return {
        type: "Polygon",
        coordinates: [
            step === 180 ? c.map(sphereNudge) : c
        ]
    };
}
function _default() {
    var H = 4, m = (0, _index1.geoProjectionMutator)(healpixRaw), p = m(H), stream_ = p.stream;
    p.lobes = function(_) {
        return arguments.length ? m(H = +_) : H;
    };
    p.stream = function(stream) {
        var rotate = p.rotate(), rotateStream = stream_(stream), sphereStream = (p.rotate([
            0,
            0
        ]), stream_(stream));
        p.rotate(rotate);
        rotateStream.sphere = function() {
            (0, _index1.geoStream)(sphere(180 / H), sphereStream);
        };
        return rotateStream;
    };
    return p.scale(239.75);
}
