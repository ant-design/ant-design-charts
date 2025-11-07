"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTranslate = getTranslate;
exports.percentTransform = percentTransform;
var tslib_1 = require("tslib");
function getTranslate(node, x, y) {
    var _a = node.getBBox(), width = _a.width, height = _a.height;
    var _b = tslib_1.__read([x, y].map(function (v, i) {
        var _a;
        return v.includes('%')
            ? (parseFloat(((_a = v.match(/[+-]?([0-9]*[.])?[0-9]+/)) === null || _a === void 0 ? void 0 : _a[0]) || '0') / 100) * (i === 0 ? width : height)
            : v;
    }), 2), tx = _b[0], ty = _b[1];
    return [tx, ty];
}
/**
 * transform that support translate percent value
 */
function percentTransform(node, val) {
    if (!val)
        return;
    try {
        var reg = /translate\(([+-]*[\d]+[%]*),[ ]*([+-]*[\d]+[%]*)\)/g;
        var computedVal = val.replace(reg, function (match, x, y) { return "translate(".concat(getTranslate(node, x, y), ")"); });
        node.attr('transform', computedVal);
    }
    catch (e) {
        // do nothing
    }
}
//# sourceMappingURL=transform.js.map