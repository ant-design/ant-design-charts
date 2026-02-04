"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "conicProjection", {
    enumerable: true,
    get: function() {
        return conicProjection;
    }
});
var _math = require("../math.js");
var _index = require("./index.js");
function conicProjection(projectAt) {
    var phi0 = 0, phi1 = _math.pi / 3, m = (0, _index.projectionMutator)(projectAt), p = m(phi0, phi1);
    p.parallels = function(_) {
        return arguments.length ? m(phi0 = _[0] * _math.radians, phi1 = _[1] * _math.radians) : [
            phi0 * _math.degrees,
            phi1 * _math.degrees
        ];
    };
    return p;
}
