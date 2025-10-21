import { deepMix } from '@antv/util';
import { Path } from '../../shapes';
import { classNames } from '../../util';
export var AXIS_BASE_DEFAULT_ATTR = {
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
        return new Path({
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
export var ARC_DEFAULT_OPTIONS = deepMix({}, AXIS_BASE_DEFAULT_ATTR, {
    style: {
        type: 'arc',
    },
});
export var HELIX_DEFAULT_OPTIONS = deepMix({}, AXIS_BASE_DEFAULT_ATTR, {
    style: {},
});
export var CLASS_NAMES = classNames({
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