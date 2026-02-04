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
exports.Liquid = void 0;
const util_1 = require("@antv/util");
const helper_1 = require("../utils/helper");
const number_1 = require("../utils/number");
const shape_1 = require("../shape");
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
        shape: shape_1.LiquidShape,
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
const Liquid = (options) => {
    const { data = {}, style = {}, animate } = options, resOptions = __rest(options, ["data", "style", "animate"]);
    // Compatible with old data structures: { percent: number } and percent >= 0.
    const percent = Math.max(0, (0, util_1.isNumber)(data) ? data : data === null || data === void 0 ? void 0 : data.percent);
    const newData = [{ percent, type: 'liquid' }];
    const contentStyle = Object.assign(Object.assign({}, (0, helper_1.subObject)(style, 'text')), (0, helper_1.subObject)(style, 'content'));
    const outline = (0, helper_1.subObject)(style, 'outline');
    const wave = (0, helper_1.subObject)(style, 'wave');
    const background = (0, helper_1.subObject)(style, 'background');
    return [
        (0, util_1.deepMix)({}, DEFAULT_OPTIONS, Object.assign({ type: 'interval', data: newData, style: {
                liquidOptions: {
                    percent,
                    liquidShape: style === null || style === void 0 ? void 0 : style.shape,
                },
                styleOptions: Object.assign(Object.assign({}, style), { outline,
                    wave,
                    background }),
            }, animate }, resOptions)),
        (0, util_1.deepMix)({}, DEFAULT_TEXT_OPTIONS, {
            style: Object.assign({ text: `${(0, number_1.prettyNumber)(percent * 100)} %` }, contentStyle),
            animate,
        }),
    ];
};
exports.Liquid = Liquid;
exports.Liquid.props = {};
//# sourceMappingURL=liquid.js.map