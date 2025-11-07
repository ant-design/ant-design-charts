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
var _index = require("../../../d3-array/src/index.js");
var _math = require("../math.js");
var _noop = /*#__PURE__*/ _interop_require_default(require("../noop.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var lengthSum = new _index.Adder(), lengthRing, x00, y00, x0, y0;
var lengthStream = {
    point: _noop.default,
    lineStart: function lineStart() {
        lengthStream.point = lengthPointFirst;
    },
    lineEnd: function lineEnd() {
        if (lengthRing) lengthPoint(x00, y00);
        lengthStream.point = _noop.default;
    },
    polygonStart: function polygonStart() {
        lengthRing = true;
    },
    polygonEnd: function polygonEnd() {
        lengthRing = null;
    },
    result: function result() {
        var length = +lengthSum;
        lengthSum = new _index.Adder();
        return length;
    }
};
function lengthPointFirst(x, y) {
    lengthStream.point = lengthPoint;
    x00 = x0 = x, y00 = y0 = y;
}
function lengthPoint(x, y) {
    x0 -= x, y0 -= y;
    lengthSum.add((0, _math.sqrt)(x0 * x0 + y0 * y0));
    x0 = x, y0 = y;
}
var _default = lengthStream;
