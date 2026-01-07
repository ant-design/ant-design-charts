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
    curveRadialLinear: function() {
        return curveRadialLinear;
    },
    default: function() {
        return curveRadial;
    }
});
var _linear = /*#__PURE__*/ _interop_require_default(require("./linear.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var curveRadialLinear = curveRadial(_linear.default);
function Radial(curve) {
    this._curve = curve;
}
Radial.prototype = {
    areaStart: function areaStart() {
        this._curve.areaStart();
    },
    areaEnd: function areaEnd() {
        this._curve.areaEnd();
    },
    lineStart: function lineStart() {
        this._curve.lineStart();
    },
    lineEnd: function lineEnd() {
        this._curve.lineEnd();
    },
    point: function point(a, r) {
        this._curve.point(r * Math.sin(a), r * -Math.cos(a));
    }
};
function curveRadial(curve) {
    function radial(context) {
        return new Radial(curve(context));
    }
    radial._curve = curve;
    return radial;
}
