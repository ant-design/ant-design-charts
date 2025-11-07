import { isInOffscreenGroup } from '../../../util';
import ellipsis from './autoEllipsis';
import hide from './autoHide';
import rotate from './autoRotate';
import wrap from './autoWrap';
export var OverlapUtils = new Map([
    ['hide', hide],
    ['rotate', rotate],
    ['ellipsis', ellipsis],
    ['wrap', wrap],
]);
export function canProcessOverlap(labels, attr, type) {
    if (attr.labelOverlap.length < 1)
        return false;
    if (type === 'hide')
        return !isInOffscreenGroup(labels[0]);
    if (type === 'rotate')
        return !labels.some(function (label) { var _a; return !!((_a = label.attr('transform')) === null || _a === void 0 ? void 0 : _a.includes('rotate')); });
    if (type === 'ellipsis' || type === 'wrap')
        return labels.filter(function (item) { return item.querySelector('text'); }).length >= 1;
    return true;
}
export function processOverlap(labels, attr, main, utils) {
    var _a = attr.labelOverlap, labelOverlap = _a === void 0 ? [] : _a;
    if (!labelOverlap.length)
        return;
    labelOverlap.forEach(function (overlapCfg) {
        var type = overlapCfg.type;
        var util = OverlapUtils.get(type);
        if (canProcessOverlap(labels, attr, type))
            util === null || util === void 0 ? void 0 : util(labels, overlapCfg, attr, utils, main);
    });
}
//# sourceMappingURL=index.js.map