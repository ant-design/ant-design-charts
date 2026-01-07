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
var areaSum = new _index.Adder(), areaRingSum = new _index.Adder(), x00, y00, x0, y0;
var areaStream = {
    point: _noop.default,
    lineStart: _noop.default,
    lineEnd: _noop.default,
    polygonStart: function polygonStart() {
        areaStream.lineStart = areaRingStart;
        areaStream.lineEnd = areaRingEnd;
    },
    polygonEnd: function polygonEnd() {
        areaStream.lineStart = areaStream.lineEnd = areaStream.point = _noop.default;
        areaSum.add((0, _math.abs)(areaRingSum));
        areaRingSum = new _index.Adder();
    },
    result: function result() {
        var area = areaSum / 2;
        areaSum = new _index.Adder();
        return area;
    }
};
function areaRingStart() {
    areaStream.point = areaPointFirst;
}
function areaPointFirst(x, y) {
    areaStream.point = areaPoint;
    x00 = x0 = x, y00 = y0 = y;
}
function areaPoint(x, y) {
    areaRingSum.add(y0 * x - x0 * y);
    x0 = x, y0 = y;
}
function areaRingEnd() {
    areaPoint(x00, y00);
}
var _default = areaStream;
