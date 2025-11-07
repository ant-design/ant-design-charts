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
        return twoPointAzimuthal;
    },
    twoPointAzimuthalRaw: function() {
        return twoPointAzimuthalRaw;
    },
    twoPointAzimuthalUsa: function() {
        return twoPointAzimuthalUsa;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
var _twoPoint = /*#__PURE__*/ _interop_require_default(require("./twoPoint.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function twoPointAzimuthalRaw(d) {
    var cosd = (0, _math.cos)(d);
    function forward(lambda, phi) {
        var coordinates = (0, _index.geoGnomonicRaw)(lambda, phi);
        coordinates[0] *= cosd;
        return coordinates;
    }
    forward.invert = function(x, y) {
        return _index.geoGnomonicRaw.invert(x / cosd, y);
    };
    return forward;
}
function twoPointAzimuthalUsa() {
    return twoPointAzimuthal([
        -158,
        21.5
    ], [
        -77,
        39
    ]).clipAngle(60).scale(400);
}
function twoPointAzimuthal(p0, p1) {
    return (0, _twoPoint.default)(twoPointAzimuthalRaw, p0, p1);
}
