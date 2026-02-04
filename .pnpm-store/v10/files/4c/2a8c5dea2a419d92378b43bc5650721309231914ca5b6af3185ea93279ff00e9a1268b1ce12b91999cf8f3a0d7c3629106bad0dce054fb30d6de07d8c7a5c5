import { deepMix } from '@antv/util';
import { Path } from '../../shapes';
import { classNames } from '../../util';
import { CLASSNAME_SUFFIX_MAP } from './classname-map';
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
    mainGroup: CLASSNAME_SUFFIX_MAP.mainGroup,
    gridGroup: CLASSNAME_SUFFIX_MAP.gridGroup,
    grid: CLASSNAME_SUFFIX_MAP.grid,
    lineGroup: CLASSNAME_SUFFIX_MAP.lineGroup,
    line: CLASSNAME_SUFFIX_MAP.line,
    tickGroup: CLASSNAME_SUFFIX_MAP.tickGroup,
    tick: CLASSNAME_SUFFIX_MAP.tick,
    tickItem: CLASSNAME_SUFFIX_MAP.tickItem,
    labelGroup: CLASSNAME_SUFFIX_MAP.labelGroup,
    label: CLASSNAME_SUFFIX_MAP.label,
    labelItem: CLASSNAME_SUFFIX_MAP.labelItem,
    titleGroup: CLASSNAME_SUFFIX_MAP.titleGroup,
    title: CLASSNAME_SUFFIX_MAP.title,
    lineFirst: CLASSNAME_SUFFIX_MAP.lineFirst,
    lineSecond: CLASSNAME_SUFFIX_MAP.lineSecond,
}, 'axis');
//# sourceMappingURL=constant.js.map