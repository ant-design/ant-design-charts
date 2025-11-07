import { __read, __spreadArray } from "tslib";
import { defined, getLocalBBox, hide } from '../../../util';
import { isAxisHorizontal, isAxisVertical } from '../guides/line';
import { boundTest } from '../utils/test';
var methods = {
    parity: function (items, _a) {
        var _b = _a.seq, seq = _b === void 0 ? 2 : _b;
        return items.filter(function (item, i) { return (i % seq ? (hide(item), false) : true); });
    },
};
var filterDefined = function (arr) { return arr.filter(defined); };
export default function hideLabels(labels, overlapCfg, attr, utils) {
    var count = labels.length;
    var keepHeader = overlapCfg.keepHeader, keepTail = overlapCfg.keepTail;
    if (count <= 1 || (count === 2 && keepHeader && keepTail))
        return;
    var parityHide = methods.parity;
    var reset = function (els) { return (els.forEach(utils.show), els); };
    var seq = 2;
    var source = labels.slice();
    var target = labels.slice();
    var minLabelWidth = Math.min.apply(Math, __spreadArray([1], __read(labels.map(function (d) { return d.getBBox().width; })), false));
    if (attr.type === 'linear' && (isAxisHorizontal(attr) || isAxisVertical(attr))) {
        var minX = getLocalBBox(labels[0]).left;
        var maxX = getLocalBBox(labels[count - 1]).right;
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
        boundTest(filterDefined(last ? __spreadArray(__spreadArray([last], __read(target), false), [first], false) : __spreadArray([first], __read(target), false)), attr, overlapCfg === null || overlapCfg === void 0 ? void 0 : overlapCfg.margin).length) {
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