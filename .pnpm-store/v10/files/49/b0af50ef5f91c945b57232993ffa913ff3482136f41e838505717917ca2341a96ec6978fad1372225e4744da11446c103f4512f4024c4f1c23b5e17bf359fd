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
    transverseMercatorRaw: function() {
        return transverseMercatorRaw;
    }
});
var _math = require("../math.js");
var _mercator = require("./mercator.js");
function transverseMercatorRaw(lambda, phi) {
    return [
        (0, _math.log)((0, _math.tan)((_math.halfPi + phi) / 2)),
        -lambda
    ];
}
transverseMercatorRaw.invert = function(x, y) {
    return [
        -y,
        2 * (0, _math.atan)((0, _math.exp)(x)) - _math.halfPi
    ];
};
function _default() {
    var m = (0, _mercator.mercatorProjection)(transverseMercatorRaw), center = m.center, rotate = m.rotate;
    m.center = function(_) {
        return arguments.length ? center([
            -_[1],
            _[0]
        ]) : (_ = center(), [
            _[1],
            -_[0]
        ]);
    };
    m.rotate = function(_) {
        return arguments.length ? rotate([
            _[0],
            _[1],
            _.length > 2 ? _[2] + 90 : 90
        ]) : (_ = rotate(), [
            _[0],
            _[1],
            _[2] - 90
        ]);
    };
    return rotate([
        0,
        0,
        90
    ]).scale(159.155);
}
