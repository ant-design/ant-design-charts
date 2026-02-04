"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHex = toHex;
exports.arr2rgb = arr2rgb;
/**
 * 将数值从 0-255 转换成 16 进制字符串
 * @param value
 * @returns
 */
function toHex(value) {
    var x16Value = Math.round(value).toString(16);
    return x16Value.length === 1 ? "0".concat(x16Value) : x16Value;
}
/**
 * 数组转换成颜色
 * @param arr
 * @returns
 */
function arr2rgb(arr) {
    return "#".concat(toHex(arr[0])).concat(toHex(arr[1])).concat(toHex(arr[2]));
}
//# sourceMappingURL=arr2rgb.js.map