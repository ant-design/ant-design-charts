"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ellipseLabels;
var tslib_1 = require("tslib");
var util_1 = require("@antv/util");
var util_2 = require("../../../util");
var test_1 = require("../utils/test");
function parseLengthString(str, font) {
    if (font === void 0) { font = {}; }
    if ((0, util_1.isNil)(str))
        return 0;
    if (typeof str === 'number')
        return str;
    return Math.floor((0, util_2.measureTextWidth)(str, font));
}
function ellipseLabels(labels, overlapCfg, attr, utils) {
    if (labels.length <= 0)
        return;
    var _a = overlapCfg.suffix, suffix = _a === void 0 ? '...' : _a, minLength = overlapCfg.minLength, _b = overlapCfg.maxLength, maxLength = _b === void 0 ? Infinity : _b, _c = overlapCfg.step, ellipsisStep = _c === void 0 ? ' ' : _c, _d = overlapCfg.margin, margin = _d === void 0 ? [0, 0, 0, 0] : _d;
    var font = (0, util_2.getFont)(utils.getTextShape(labels[0]));
    var step = parseLengthString(ellipsisStep, font);
    var min = minLength ? parseLengthString(minLength, font) : step;
    var max = parseLengthString(maxLength, font);
    // Enable to ellipsis label when overlap.
    if ((0, util_1.isNil)(max) || max === Infinity) {
        max = Math.max.apply(null, labels.map(function (d) { return d.getBBox().width; }));
    }
    // Generally, 100 ticks cost less than 300ms. If cost time exceed, means ticks count is too large to see.
    var source = labels.slice();
    var _e = tslib_1.__read(margin, 4), _f = _e[0], top = _f === void 0 ? 0 : _f, _g = _e[1], right = _g === void 0 ? 0 : _g, _h = _e[2], bottom = _h === void 0 ? top : _h, _j = _e[3], left = _j === void 0 ? right : _j;
    var _loop_1 = function (allowedLength) {
        source.forEach(function (label) {
            utils.ellipsis(utils.getTextShape(label), allowedLength, suffix);
        });
        source = (0, test_1.boundTest)(labels, attr, margin);
        // 碰撞检测
        if (source.length < 1)
            return { value: void 0 };
    };
    for (var allowedLength = max; allowedLength > min + step; allowedLength -= step) {
        var state_1 = _loop_1(allowedLength);
        if (typeof state_1 === "object")
            return state_1.value;
    }
}
//# sourceMappingURL=autoEllipsis.js.map