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
function LinearClosed(context) {
    this._context = context;
}
LinearClosed.prototype = {
    areaStart: _noop.default,
    areaEnd: _noop.default,
    lineStart: function lineStart() {
        this._point = 0;
    },
    lineEnd: function lineEnd() {
        if (this._point) this._context.closePath();
    },
    point: function point(x, y) {
        x = +x, y = +y;
        if (this._point) this._context.lineTo(x, y);
        else this._point = 1, this._context.moveTo(x, y);
    }
};
function _default(context) {
    return new LinearClosed(context);
}
