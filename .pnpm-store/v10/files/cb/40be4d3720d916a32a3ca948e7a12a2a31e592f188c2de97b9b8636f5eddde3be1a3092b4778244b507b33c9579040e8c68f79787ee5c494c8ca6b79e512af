"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "interpose", {
    enumerable: true,
    get: function() {
        return interpose;
    }
});
var _geometry = require("./geometry");
function interpose(xmin, xmax, predict) {
    var l = Math.log(xmax - xmin) * Math.LOG10E + 1 | 0;
    var precision = 1 * Math.pow(10, -l / 2 - 1), maxIter = 1e4;
    var points = [
        px(xmin),
        px(xmax)
    ], iter = 0;
    while(find(points) && iter < maxIter);
    return points;
    function px(x) {
        return [
            x,
            predict(x)
        ];
    }
    function find(points) {
        iter++;
        var n = points.length;
        var found = false;
        for(var i = 0; i < n - 1; i++){
            var p0 = points[i], p1 = points[i + 1], m = (0, _geometry.midpoint)([
                p0,
                p1
            ]), mp = px(m[0]), a0 = (0, _geometry.angle)([
                p0,
                m
            ]), a1 = (0, _geometry.angle)([
                p0,
                mp
            ]), a = Math.abs(a0 - a1);
            if (a > precision) {
                points.splice(i + 1, 0, mp);
                found = true;
            }
        }
        return found;
    }
}
