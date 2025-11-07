"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "withPath", {
    enumerable: true,
    get: function() {
        return withPath;
    }
});
var _index = require("../../d3-path/src/index.js");
function withPath(shape) {
    var digits = 3;
    shape.digits = function(_) {
        if (!arguments.length) return digits;
        if (_ == null) {
            digits = null;
        } else {
            var d = Math.floor(_);
            if (!(d >= 0)) throw new RangeError("invalid digits: ".concat(_));
            digits = d;
        }
        return shape;
    };
    return function() {
        return new _index.Path(digits);
    };
}
