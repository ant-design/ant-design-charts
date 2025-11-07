"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Basis: function() {
        return Basis;
    },
    default: function() {
        return _default;
    },
    point: function() {
        return point;
    }
});
function point(that, x, y) {
    that._context.bezierCurveTo((2 * that._x0 + that._x1) / 3, (2 * that._y0 + that._y1) / 3, (that._x0 + 2 * that._x1) / 3, (that._y0 + 2 * that._y1) / 3, (that._x0 + 4 * that._x1 + x) / 6, (that._y0 + 4 * that._y1 + y) / 6);
}
function Basis(context) {
    this._context = context;
}
Basis.prototype = {
    areaStart: function areaStart() {
        this._line = 0;
    },
    areaEnd: function areaEnd() {
        this._line = NaN;
    },
    lineStart: function lineStart() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN;
        this._point = 0;
    },
    lineEnd: function lineEnd() {
        switch(this._point){
            case 3:
                point(this, this._x1, this._y1); // falls through
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
        }
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function point1(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // falls through
            default:
                point(this, x, y);
                break;
        }
        this._x0 = this._x1, this._x1 = x;
        this._y0 = this._y1, this._y1 = y;
    }
};
function _default(context) {
    return new Basis(context);
}
