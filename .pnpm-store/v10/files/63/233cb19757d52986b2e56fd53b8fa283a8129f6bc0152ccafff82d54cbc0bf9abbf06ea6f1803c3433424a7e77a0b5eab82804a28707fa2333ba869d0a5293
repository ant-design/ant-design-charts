"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderExtDo = renderExtDo;
exports.renderHtmlExtDo = renderHtmlExtDo;
var tslib_1 = require("tslib");
var util_1 = require("@antv/util");
var shapes_1 = require("../shapes");
function renderExtDo(el) {
    if (typeof el === 'function')
        return el();
    return (0, util_1.isString)(el) || (0, util_1.isNumber)(el) ? new shapes_1.Text({ style: { text: String(el) } }) : el;
}
function renderHtmlExtDo(el, style) {
    if (typeof el === 'function')
        return el();
    return (0, util_1.isString)(el) || (0, util_1.isNumber)(el)
        ? new shapes_1.HTML({
            style: tslib_1.__assign(tslib_1.__assign({ pointerEvents: 'auto' }, style), { innerHTML: el }),
        })
        : el;
}
//# sourceMappingURL=extend-display-object.js.map