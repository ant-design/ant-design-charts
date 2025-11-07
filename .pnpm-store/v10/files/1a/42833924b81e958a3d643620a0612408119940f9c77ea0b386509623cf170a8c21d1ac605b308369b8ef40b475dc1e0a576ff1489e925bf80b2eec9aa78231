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
exports.reflectY = exports.reflectX = exports.reflect = void 0;
var scale_1 = require("./scale");
/**
 * Apply reflect transformation for current vector.
 * @param args same as scale
 * @returns transformer
 */
var reflect = function (params) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return scale_1.scale.apply(void 0, __spreadArray([[-1, -1]], __read(args), false));
};
exports.reflect = reflect;
/**
 * Apply reflect transformation for current vector.
 * @param args same as scale
 * @returns transformer
 */
var reflectX = function (params) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return scale_1.scale.apply(void 0, __spreadArray([[-1, 1]], __read(args), false));
};
exports.reflectX = reflectX;
/**
 * Apply reflect transformation for current vector.
 * @param args same as scale
 * @returns transformer
 */
var reflectY = function (params) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return scale_1.scale.apply(void 0, __spreadArray([[1, -1]], __read(args), false));
};
exports.reflectY = reflectY;
//# sourceMappingURL=reflect.js.map