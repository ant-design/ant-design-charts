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
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function _default(projectAt) {
    var phi0 = 0, m = (0, _index.geoProjectionMutator)(projectAt), p = m(phi0);
    p.parallel = function(_) {
        return arguments.length ? m(phi0 = _ * _math.radians) : phi0 * _math.degrees;
    };
    return p;
}
