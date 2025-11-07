"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = hideLabels;
var tslib_1 = require("tslib");
var util_1 = require("../../../util");
var line_1 = require("../guides/line");
var test_1 = require("../utils/test");
var methods = {
    parity: function (items, _a) {
        var _b = _a.seq, seq = _b === void 0 ? 2 : _b;
        return items.filter(function (item, i) { return (i % seq ? ((0, util_1.hide)(item), false) : true); });
    },
};
var filterDefined = function (arr) { return arr.filter(util_1.defined); };
function hideLabels(labels, overlapCfg, attr, utils) {
    var count = labels.length;
    var keepHeader = overlapCfg.keepHeader, keepTail = overlapCfg.keepTail;
    if (count <= 1 || (count === 2 && keepHeader && keepTail))
        return;
    var parityHide = methods.parity;
    var reset = function (els) { return (els.forEach(utils.show), els); };
    var seq = 2;
    var source = labels.slice();
    var target = labels.slice();
    var minLabelWidth = Math.min.apply(Math, tslib_1.__spreadArray([1], tslib_1.__read(labels.map(function (d) { return d.getBBox().width; })), false));
    if (attr.type === 'linear' && ((0, line_1.isAxisHorizontal)(attr) || (0, line_1.isAxisVertical)(attr))) {
        var minX = (0, util_1.getLocalBBox)(labels[0]).left;
        var maxX = (0, util_1.getLocalBBox)(labels[count - 1]).right;
        var distance = Math.abs(maxX - minX) || 1;
        seq = Math.max(Math.floor((count * minLabelWidth) / distance), seq);
    }
    var first;
    var last;
    if (keepHeader)
        first = source.splice(0, 1)[0];
    if (keepTail) {
        last = source.splice(-1, 1)[0];
        source.reverse();
    }
    reset(source);
    while (seq < labels.length &&
        (0, test_1.boundTest)(filterDefined(last ? tslib_1.__spreadArray(tslib_1.__spreadArray([last], tslib_1.__read(target), false), [first], false) : tslib_1.__spreadArray([first], tslib_1.__read(target), false)), attr, overlapCfg === null || overlapCfg === void 0 ? void 0 : overlapCfg.margin).length) {
        // 每两步，减一个 (不需要考虑保留 first)
        if (last && !first && seq % 2 === 0) {
            var rest = source.splice(0, 1);
            rest.forEach(utils.hide);
        }
        else if (last && first) {
            // 如果有 first 的话，每一步，减一个（增加迭代次数）
            var rest = source.splice(0, 1);
            rest.forEach(utils.hide);
        }
        target = parityHide(reset(source), { seq: seq });
        seq++;
    }
}
//# sourceMappingURL=autoHide.js.map