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
var _index = require("../../d3-scale/src/index.js");
var _index1 = require("../../d3-interpolate/src/index.js");
var _colors = /*#__PURE__*/ _interop_require_default(require("./colors.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _default(range) {
    var s = (0, _index.scaleSequential)((0, _index1.interpolateRgbBasisClosed)((0, _colors.default)(range))).clamp(true);
    delete s.clamp;
    return s;
}
