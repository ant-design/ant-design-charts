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
import { deepMix, isNumber } from '@antv/util';
import { subObject } from '../utils/helper';
import { prettyNumber } from '../utils/number';
import { LiquidShape } from '../shape';
const DEFAULT_OPTIONS = {
    axis: {
        x: false,
        y: false,
    },
    legend: false,
    tooltip: false,
    encode: {
        x: 'type',
        y: 'percent',
    },
    scale: {
        y: {
            domain: [0, 1],
        },
    },
    style: {
        shape: LiquidShape,
    },
    animate: {
        enter: {
            type: 'fadeIn',
        },
    },
};
const DEFAULT_TEXT_OPTIONS = {
    type: 'text',
    style: {
        x: '50%',
        y: '50%',
        textAlign: 'center',
        textBaseline: 'middle',
        fontSize: 20,
        fontWeight: 800,
        fill: '#888',
    },
    animate: {
        enter: {
            type: 'fadeIn',
        },
    },
};
export const Liquid = (options) => {
    const { data = {}, style = {}, animate } = options, resOptions = __rest(options, ["data", "style", "animate"]);
    // Compatible with old data structures: { percent: number } and percent >= 0.
    const percent = Math.max(0, isNumber(data) ? data : data === null || data === void 0 ? void 0 : data.percent);
    const newData = [{ percent, type: 'liquid' }];
    const contentStyle = Object.assign(Object.assign({}, subObject(style, 'text')), subObject(style, 'content'));
    const outline = subObject(style, 'outline');
    const wave = subObject(style, 'wave');
    const background = subObject(style, 'background');
    return [
        deepMix({}, DEFAULT_OPTIONS, Object.assign({ type: 'interval', data: newData, style: {
                liquidOptions: {
                    percent,
                    liquidShape: style === null || style === void 0 ? void 0 : style.shape,
                },
                styleOptions: Object.assign(Object.assign({}, style), { outline,
                    wave,
                    background }),
            }, animate }, resOptions)),
        deepMix({}, DEFAULT_TEXT_OPTIONS, {
            style: Object.assign({ text: `${prettyNumber(percent * 100)} %` }, contentStyle),
            animate,
        }),
    ];
};
Liquid.props = {};
//# sourceMappingURL=liquid.js.map