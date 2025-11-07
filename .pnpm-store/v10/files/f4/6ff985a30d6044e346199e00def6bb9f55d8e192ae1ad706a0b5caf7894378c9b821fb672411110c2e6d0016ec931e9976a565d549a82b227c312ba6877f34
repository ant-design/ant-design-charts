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
    default: function() {
        return _default;
    },
    stepAfter: function() {
        return stepAfter;
    },
    stepBefore: function() {
        return stepBefore;
    }
});
function Step(context, t) {
    this._context = context;
    this._t = t;
}
Step.prototype = {
    areaStart: function areaStart() {
        this._line = 0;
    },
    areaEnd: function areaEnd() {
        this._line = NaN;
    },
    lineStart: function lineStart() {
        this._x = this._y = NaN;
        this._point = 0;
    },
    lineEnd: function lineEnd() {
        if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
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
                {
                    if (this._t <= 0) {
                        this._context.lineTo(this._x, y);
                        this._context.lineTo(x, y);
                    } else {
                        var x1 = this._x * (1 - this._t) + x * this._t;
                        this._context.lineTo(x1, this._y);
                        this._context.lineTo(x1, y);
                    }
                    break;
                }
        }
        this._x = x, this._y = y;
    }
};
function _default(context) {
    return new Step(context, 0.5);
}
function stepBefore(context) {
    return new Step(context, 0);
}
function stepAfter(context) {
    return new Step(context, 1);
}
