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
var _noop = /*#__PURE__*/ _interop_require_default(require("../noop.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _default() {
    var lines = [], line;
    return {
        point: function point(x, y, m) {
            line.push([
                x,
                y,
                m
            ]);
        },
        lineStart: function lineStart() {
            lines.push(line = []);
        },
        lineEnd: _noop.default,
        rejoin: function rejoin() {
            if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
        },
        result: function result() {
            var result = lines;
            lines = [];
            line = null;
            return result;
        }
    };
}
