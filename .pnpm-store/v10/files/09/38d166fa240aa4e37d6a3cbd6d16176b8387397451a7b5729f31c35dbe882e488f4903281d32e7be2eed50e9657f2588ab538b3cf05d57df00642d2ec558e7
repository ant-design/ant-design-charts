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
    cartesian: function() {
        return cartesian;
    },
    cartesianAddInPlace: function() {
        return cartesianAddInPlace;
    },
    cartesianCross: function() {
        return cartesianCross;
    },
    cartesianDot: function() {
        return cartesianDot;
    },
    cartesianNormalizeInPlace: function() {
        return cartesianNormalizeInPlace;
    },
    cartesianScale: function() {
        return cartesianScale;
    },
    spherical: function() {
        return spherical;
    }
});
var _math = require("./math.js");
function spherical(cartesian) {
    return [
        (0, _math.atan2)(cartesian[1], cartesian[0]),
        (0, _math.asin)(cartesian[2])
    ];
}
function cartesian(spherical) {
    var lambda = spherical[0], phi = spherical[1], cosPhi = (0, _math.cos)(phi);
    return [
        cosPhi * (0, _math.cos)(lambda),
        cosPhi * (0, _math.sin)(lambda),
        (0, _math.sin)(phi)
    ];
}
function cartesianDot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cartesianCross(a, b) {
    return [
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0]
    ];
}
function cartesianAddInPlace(a, b) {
    a[0] += b[0], a[1] += b[1], a[2] += b[2];
}
function cartesianScale(vector, k) {
    return [
        vector[0] * k,
        vector[1] * k,
        vector[2] * k
    ];
}
function cartesianNormalizeInPlace(d) {
    var l = (0, _math.sqrt)(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    d[0] /= l, d[1] /= l, d[2] /= l;
}
