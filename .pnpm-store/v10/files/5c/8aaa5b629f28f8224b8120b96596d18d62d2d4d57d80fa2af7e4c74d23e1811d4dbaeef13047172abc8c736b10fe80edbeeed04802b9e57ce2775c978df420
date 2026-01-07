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
    winkel3Raw: function() {
        return winkel3Raw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _aitoff = require("./aitoff.js");
var _math = require("./math.js");
function winkel3Raw(lambda, phi) {
    var coordinates = (0, _aitoff.aitoffRaw)(lambda, phi);
    return [
        (coordinates[0] + lambda / _math.halfPi) / 2,
        (coordinates[1] + phi) / 2
    ];
}
winkel3Raw.invert = function(x, y) {
    var lambda = x, phi = y, i = 25;
    do {
        var cosphi = (0, _math.cos)(phi), sinphi = (0, _math.sin)(phi), sin_2phi = (0, _math.sin)(2 * phi), sin2phi = sinphi * sinphi, cos2phi = cosphi * cosphi, sinlambda = (0, _math.sin)(lambda), coslambda_2 = (0, _math.cos)(lambda / 2), sinlambda_2 = (0, _math.sin)(lambda / 2), sin2lambda_2 = sinlambda_2 * sinlambda_2, C = 1 - cos2phi * coslambda_2 * coslambda_2, E = C ? (0, _math.acos)(cosphi * coslambda_2) * (0, _math.sqrt)(F = 1 / C) : F = 0, F, fx = 0.5 * (2 * E * cosphi * sinlambda_2 + lambda / _math.halfPi) - x, fy = 0.5 * (E * sinphi + phi) - y, dxdlambda = 0.5 * F * (cos2phi * sin2lambda_2 + E * cosphi * coslambda_2 * sin2phi) + 0.5 / _math.halfPi, dxdphi = F * (sinlambda * sin_2phi / 4 - E * sinphi * sinlambda_2), dydlambda = 0.125 * F * (sin_2phi * sinlambda_2 - E * sinphi * cos2phi * sinlambda), dydphi = 0.5 * F * (sin2phi * coslambda_2 + E * sin2lambda_2 * cosphi) + 0.5, denominator = dxdphi * dydlambda - dydphi * dxdlambda, dlambda = (fy * dxdphi - fx * dydphi) / denominator, dphi = (fx * dydlambda - fy * dxdlambda) / denominator;
        lambda -= dlambda, phi -= dphi;
    }while (((0, _math.abs)(dlambda) > _math.epsilon || (0, _math.abs)(dphi) > _math.epsilon) && --i > 0);
    return [
        lambda,
        phi
    ];
};
function _default() {
    return (0, _index.geoProjection)(winkel3Raw).scale(158.837);
}
