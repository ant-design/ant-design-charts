"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRGB = void 0;
var lodash_1 = require("../lodash");
var arr2rgb_1 = require("./arr2rgb");
var RGB_REG = /rgba?\(([\s.,0-9]+)\)/;
/**
 * 创建辅助 tag 取颜色
 * @returns
 */
function getTmp() {
    var i = document.getElementById('antv-web-colour-picker');
    if (i) {
        return i;
    }
    i = document.createElement('i');
    i.id = 'antv-web-colour-picker';
    i.title = 'Web Colour Picker';
    i.style.display = 'none';
    document.body.appendChild(i);
    return i;
}
/**
 * 将颜色转换到 rgb 的格式
 * @param {color} color 颜色
 * @return 将颜色转换到 '#ffffff' 的格式
 */
function toRGBString(color) {
    // 如果已经是 rgb的格式
    if (color[0] === '#' && color.length === 7) {
        return color;
    }
    var iEl = getTmp();
    iEl.style.color = color;
    var rst = document.defaultView.getComputedStyle(iEl, '').getPropertyValue('color');
    var matches = RGB_REG.exec(rst);
    var cArray = matches[1].split(/\s*,\s*/).map(function (s) { return Number(s); });
    rst = (0, arr2rgb_1.arr2rgb)(cArray);
    return rst;
}
/**
 * export with memoize.
 * @param color
 * @returns
 */
exports.toRGB = (0, lodash_1.memoize)(toRGBString, function (color) { return color; }, 256);
//# sourceMappingURL=torgb.js.map