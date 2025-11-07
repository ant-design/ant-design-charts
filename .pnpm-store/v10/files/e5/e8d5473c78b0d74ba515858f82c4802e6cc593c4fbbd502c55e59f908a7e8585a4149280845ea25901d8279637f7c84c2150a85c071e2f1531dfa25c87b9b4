"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberInterpolate = void 0;
exports.arrayInterpolate = arrayInterpolate;
exports.objectInterpolate = objectInterpolate;
exports.interpolate = interpolate;
var tslib_1 = require("tslib");
var numberInterpolate = function (from, to) {
    return function (t) {
        return from * (1 - t) + to * t;
    };
};
exports.numberInterpolate = numberInterpolate;
function arrayInterpolate(from, to) {
    var nb = to ? to.length : 0;
    var na = from ? Math.min(nb, from.length) : 0;
    return function (t) {
        var x = new Array(na);
        var c = new Array(nb);
        var i = 0;
        for (i = 0; i < na; ++i)
            x[i] = interpolate(from[i], to[i]);
        for (; i < nb; ++i)
            c[i] = to[i];
        for (i = 0; i < na; ++i)
            c[i] = x[i](t);
        return c;
    };
}
function objectInterpolate(from, to) {
    if (from === void 0) { from = {}; }
    if (to === void 0) { to = {}; }
    var i = {};
    var c = {};
    Object.entries(to).forEach(function (_a) {
        var _b = tslib_1.__read(_a, 2), k = _b[0], v = _b[1];
        if (k in from)
            i[k] = interpolate(from[k], v);
        else
            c[k] = v;
    });
    return function (t) {
        Object.entries(i).forEach(function (_a) {
            var _b = tslib_1.__read(_a, 2), k = _b[0], v = _b[1];
            return (c[k] = v(t));
        });
        return c;
    };
}
function interpolate(from, to) {
    if (typeof from === 'number' && typeof to === 'number') {
        // @ts-ignore
        return (0, exports.numberInterpolate)(from, to);
    }
    if (Array.isArray(from) && Array.isArray(to)) {
        // @ts-ignore
        return arrayInterpolate(from, to);
    }
    if (typeof from === 'object' && typeof to === 'object') {
        // @ts-ignore
        return objectInterpolate(from, to);
    }
    return (function (t) { return from; });
}
//# sourceMappingURL=interpolate.js.map