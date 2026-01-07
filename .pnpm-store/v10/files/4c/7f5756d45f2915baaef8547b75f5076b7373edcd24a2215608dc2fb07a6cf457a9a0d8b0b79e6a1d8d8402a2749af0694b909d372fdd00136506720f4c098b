"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "cylindricalEqualAreaRaw", {
    enumerable: true,
    get: function() {
        return cylindricalEqualAreaRaw;
    }
});
var _math = require("../math.js");
function cylindricalEqualAreaRaw(phi0) {
    var cosPhi0 = (0, _math.cos)(phi0);
    function forward(lambda, phi) {
        return [
            lambda * cosPhi0,
            (0, _math.sin)(phi) / cosPhi0
        ];
    }
    forward.invert = function(x, y) {
        return [
            x / cosPhi0,
            (0, _math.asin)(y * cosPhi0)
        ];
    };
    return forward;
}
