"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMarker = parseMarker;
var util_1 = require("@antv/util");
/**
 * 解析marker类型
 */
function parseMarker(icon) {
    var type = 'default';
    if ((0, util_1.isObject)(icon) && icon instanceof Image)
        type = 'image';
    else if ((0, util_1.isFunction)(icon))
        type = 'symbol';
    else if ((0, util_1.isString)(icon)) {
        var dataURLsPattern = new RegExp('data:(image|text)');
        if (icon.match(dataURLsPattern)) {
            type = 'base64';
        }
        else if (/^(https?:\/\/(([a-zA-Z0-9]+-?)+[a-zA-Z0-9]+\.)+[a-zA-Z]+)(:\d+)?(\/.*)?(\?.*)?(#.*)?$/.test(icon)) {
            type = 'url';
        }
        else {
            // 不然就当作symbol string 处理
            type = 'symbol';
        }
    }
    return type;
}
//# sourceMappingURL=utils.js.map