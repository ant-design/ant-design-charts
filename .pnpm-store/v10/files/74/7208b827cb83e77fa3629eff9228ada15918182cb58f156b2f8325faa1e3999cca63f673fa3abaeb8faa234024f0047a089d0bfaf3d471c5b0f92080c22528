"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scrollbar = void 0;
const component_1 = require("@antv/component");
/**
 * Scrollbar component.
 */
const Scrollbar = (options) => {
    const { orientation, labelFormatter, style } = options, rest = __rest(options, ["orientation", "labelFormatter", "style"]);
    return ({ scales: [scale], value, theme }) => {
        const { bbox } = value;
        const { x, y, width, height } = bbox;
        const { scrollbar: scrollbarTheme = {} } = theme;
        const { ratio, range } = scale.getOptions();
        const mainSize = orientation === 'horizontal' ? width : height;
        const actualSize = mainSize / ratio;
        const [r0, r1] = range;
        const value1 = r1 > r0 ? 0 : 1;
        return new component_1.Scrollbar({
            className: 'g2-scrollbar',
            style: Object.assign({}, scrollbarTheme, Object.assign(Object.assign(Object.assign(Object.assign({}, style), { x,
                y, trackLength: mainSize, value: value1 }), rest), { orientation, contentLength: actualSize, viewportLength: mainSize })),
        });
    };
};
exports.Scrollbar = Scrollbar;
exports.Scrollbar.props = {
    defaultPosition: 'bottom',
    defaultSize: 24,
    defaultOrder: 1,
    defaultCrossPadding: [12, 12],
    defaultPadding: [12, 12],
};
//# sourceMappingURL=scrollbar.js.map