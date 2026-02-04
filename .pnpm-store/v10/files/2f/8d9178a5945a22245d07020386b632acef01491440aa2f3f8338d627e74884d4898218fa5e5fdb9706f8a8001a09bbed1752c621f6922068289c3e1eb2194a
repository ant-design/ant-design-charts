import { __assign } from "tslib";
import { isNumber, isString } from '@antv/util';
import { Text, HTML } from '../shapes';
export function renderExtDo(el) {
    if (typeof el === 'function')
        return el();
    return isString(el) || isNumber(el) ? new Text({ style: { text: String(el) } }) : el;
}
export function renderHtmlExtDo(el, style) {
    if (typeof el === 'function')
        return el();
    return isString(el) || isNumber(el)
        ? new HTML({
            style: __assign(__assign({ pointerEvents: 'auto' }, style), { innerHTML: el }),
        })
        : el;
}
//# sourceMappingURL=extend-display-object.js.map