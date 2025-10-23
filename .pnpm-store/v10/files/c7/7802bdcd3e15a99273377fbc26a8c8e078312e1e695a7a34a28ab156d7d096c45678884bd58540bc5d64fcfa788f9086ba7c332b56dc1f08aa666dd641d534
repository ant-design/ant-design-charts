"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLASS_NAMES = exports.HELIX_DEFAULT_OPTIONS = exports.ARC_DEFAULT_OPTIONS = exports.AXIS_BASE_DEFAULT_ATTR = void 0;
var util_1 = require("@antv/util");
var shapes_1 = require("../../shapes");
var util_2 = require("../../util");
exports.AXIS_BASE_DEFAULT_ATTR = {
    data: [],
    animate: {
        enter: false,
        update: {
            duration: 100,
            easing: 'ease-in-out-sine',
            fill: 'both',
        },
        exit: {
            duration: 100,
            fill: 'both',
        },
    },
    showArrow: true,
    showGrid: true,
    showLabel: true,
    showLine: true,
    showTick: true,
    showTitle: true,
    showTrunc: false,
    dataThreshold: 100,
    lineLineWidth: 1,
    lineStroke: 'black',
    crossPadding: 10,
    titleFill: 'black',
    titleFontSize: 12,
    titlePosition: 'lb',
    titleSpacing: 0,
    titleTextAlign: 'center',
    titleTextBaseline: 'middle',
    lineArrow: function () {
        return new shapes_1.Path({
            style: {
                d: [['M', 10, 10], ['L', -10, 0], ['L', 10, -10], ['L', 0, 0], ['L', 10, 10], ['Z']],
                fill: 'black',
                transformOrigin: 'center',
            },
        });
    },
    labelAlign: 'parallel',
    labelDirection: 'positive',
    labelFontSize: 12,
    labelSpacing: 0,
    gridConnect: 'line',
    gridControlAngles: [],
    gridDirection: 'positive',
    gridLength: 0,
    gridType: 'segment',
    lineArrowOffset: 15,
    lineArrowSize: 10,
    tickDirection: 'positive',
    tickLength: 5,
    tickLineWidth: 1,
    tickStroke: 'black',
    labelOverlap: [
    // { type: 'rotate', optionalAngles: [0, 45, 90] },
    // { type: 'ellipsis', suffix: '...', minLength: 14, maxLength: 160 },
    // { type: 'hide' },
    ],
};
exports.ARC_DEFAULT_OPTIONS = (0, util_1.deepMix)({}, exports.AXIS_BASE_DEFAULT_ATTR, {
    style: {
        type: 'arc',
    },
});
exports.HELIX_DEFAULT_OPTIONS = (0, util_1.deepMix)({}, exports.AXIS_BASE_DEFAULT_ATTR, {
    style: {},
});
exports.CLASS_NAMES = (0, util_2.classNames)({
    mainGroup: 'main-group',
    gridGroup: 'grid-group',
    grid: 'grid',
    lineGroup: 'line-group',
    line: 'line',
    tickGroup: 'tick-group',
    tick: 'tick',
    tickItem: 'tick-item',
    labelGroup: 'label-group',
    label: 'label',
    labelItem: 'label-item',
    titleGroup: 'title-group',
    title: 'title',
    lineFirst: 'line-first',
    lineSecond: 'line-second',
}, 'axis');
//# sourceMappingURL=constant.js.map