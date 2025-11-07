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
function Linear(context) {
    this._context = context;
}
Linear.prototype = {
    areaStart: function areaStart() {
        this._line = 0;
    },
    areaEnd: function areaEnd() {
        this._line = NaN;
    },
    lineStart: function lineStart() {
        this._point = 0;
    },
    lineEnd: function lineEnd() {
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function point(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2; // falls through
            default:
                this._context.lineTo(x, y);
                break;
        }
    }
};
function _default(context) {
    return new Linear(context);
}
