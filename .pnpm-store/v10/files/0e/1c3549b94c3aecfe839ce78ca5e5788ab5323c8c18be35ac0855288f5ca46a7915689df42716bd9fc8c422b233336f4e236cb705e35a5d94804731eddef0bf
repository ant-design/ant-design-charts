"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseCurve = reverseCurve;
// reverse CURVE based pathArray segments only
function reverseCurve(pathArray) {
    var rotatedCurve = pathArray
        .slice(1)
        .map(function (x, i, curveOnly) {
        // @ts-ignore
        return !i ? pathArray[0].slice(1).concat(x.slice(1)) : curveOnly[i - 1].slice(-2).concat(x.slice(1));
    })
        // @ts-ignore
        .map(function (x) { return x.map(function (y, i) { return x[x.length - i - 2 * (1 - (i % 2))]; }); })
        .reverse();
    return [['M'].concat(rotatedCurve[0].slice(0, 2))].concat(rotatedCurve.map(function (x) { return ['C'].concat(x.slice(2)); }));
}
//# sourceMappingURL=reverse-curve.js.map