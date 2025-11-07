"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return lab;
    }
});
var _index = require("../../d3-color/src/index.js");
var _color = /*#__PURE__*/ _interop_require_default(require("./color.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function lab(start, end) {
    var l = (0, _color.default)((start = (0, _index.lab)(start)).l, (end = (0, _index.lab)(end)).l), a = (0, _color.default)(start.a, end.a), b = (0, _color.default)(start.b, end.b), opacity = (0, _color.default)(start.opacity, end.opacity);
    return function(t) {
        start.l = l(t);
        start.a = a(t);
        start.b = b(t);
        start.opacity = opacity(t);
        return start + "";
    };
}
