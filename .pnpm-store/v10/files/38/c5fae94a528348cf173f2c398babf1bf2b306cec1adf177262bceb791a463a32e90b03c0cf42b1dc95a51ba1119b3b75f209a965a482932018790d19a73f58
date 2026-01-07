"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverlapUtils = void 0;
exports.canProcessOverlap = canProcessOverlap;
exports.processOverlap = processOverlap;
var tslib_1 = require("tslib");
var util_1 = require("../../../util");
var autoEllipsis_1 = tslib_1.__importDefault(require("./autoEllipsis"));
var autoHide_1 = tslib_1.__importDefault(require("./autoHide"));
var autoRotate_1 = tslib_1.__importDefault(require("./autoRotate"));
var autoWrap_1 = tslib_1.__importDefault(require("./autoWrap"));
exports.OverlapUtils = new Map([
    ['hide', autoHide_1.default],
    ['rotate', autoRotate_1.default],
    ['ellipsis', autoEllipsis_1.default],
    ['wrap', autoWrap_1.default],
]);
function canProcessOverlap(labels, attr, type) {
    if (attr.labelOverlap.length < 1)
        return false;
    if (type === 'hide')
        return !(0, util_1.isInOffscreenGroup)(labels[0]);
    if (type === 'rotate')
        return !labels.some(function (label) { var _a; return !!((_a = label.attr('transform')) === null || _a === void 0 ? void 0 : _a.includes('rotate')); });
    if (type === 'ellipsis' || type === 'wrap')
        return labels.filter(function (item) { return item.querySelector('text'); }).length >= 1;
    return true;
}
function processOverlap(labels, attr, main, utils) {
    var _a = attr.labelOverlap, labelOverlap = _a === void 0 ? [] : _a;
    if (!labelOverlap.length)
        return;
    labelOverlap.forEach(function (overlapCfg) {
        var type = overlapCfg.type;
        var util = exports.OverlapUtils.get(type);
        if (canProcessOverlap(labels, attr, type))
            util === null || util === void 0 ? void 0 : util(labels, overlapCfg, attr, utils, main);
    });
}
//# sourceMappingURL=index.js.map