"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extend3D = exports.extend = void 0;
// 对普通的变换函数进行扩展
// 对于长度大于2的向量，两两为一个点的 x 和 y 坐标
// 依次变换后合成新的向量返回
function extend(transform) {
    return function (vector) {
        var v = [];
        for (var i = 0; i < vector.length - 1; i += 2) {
            var from = [vector[i], vector[i + 1]];
            var to = transform(from);
            v.push.apply(v, __spreadArray([], __read(to), false));
        }
        return v;
    };
}
exports.extend = extend;
function extend3D(transform) {
    return function (vector) {
        var v = [];
        for (var i = 0; i < vector.length - 1; i += 3) {
            var from = [vector[i], vector[i + 1], vector[i + 2]];
            var to = transform(from);
            v.push.apply(v, __spreadArray([], __read(to), false));
        }
        return v;
    };
}
exports.extend3D = extend3D;
//# sourceMappingURL=extend.js.map