"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLASS_NAMES = exports.NAME_VALUE_RATIO = exports.STEP_RATIO = exports.CONTINUOUS_DEFAULT_OPTIONS = exports.CATEGORY_DEFAULT_OPTIONS = exports.LEGEND_BASE_DEFAULT_OPTIONS = void 0;
var util_1 = require("../../util");
var handle_1 = require("./continuous/handle");
exports.LEGEND_BASE_DEFAULT_OPTIONS = {
    showTitle: true,
    padding: 0,
    orientation: 'horizontal',
    backgroundFill: 'transparent',
    titleText: '',
    titleSpacing: 4,
    titlePosition: 'top-left',
    titleFill: '#2C3542',
    titleFontWeight: 'bold',
    titleFontFamily: 'sans-serif',
    titleFontSize: 12,
};
exports.CATEGORY_DEFAULT_OPTIONS = (0, util_1.deepAssign)({}, exports.LEGEND_BASE_DEFAULT_OPTIONS, {});
exports.CONTINUOUS_DEFAULT_OPTIONS = (0, util_1.deepAssign)({}, exports.LEGEND_BASE_DEFAULT_OPTIONS, (0, util_1.superStyleProps)(handle_1.DEFAULT_HANDLE_CFG, 'handle'), {
    color: [
        '#d0e3fa',
        '#acc7f6',
        '#8daaf2',
        '#6d8eea',
        '#4d73cd',
        '#325bb1',
        '#5a3e75',
        '#8c3c79',
        '#e23455',
        '#e7655b',
    ],
    indicatorBackgroundFill: '#262626',
    indicatorLabelFill: 'white',
    indicatorLabelFontSize: 12,
    indicatorVisibility: 'hidden',
    labelAlign: 'value',
    labelDirection: 'positive',
    labelSpacing: 5,
    showHandle: true,
    showIndicator: true,
    showLabel: true,
    slidable: true,
    titleText: '',
    type: 'continuous',
});
// 连续图例步长比例
exports.STEP_RATIO = 0.01;
// 分类图例name和value宽度比例
exports.NAME_VALUE_RATIO = 0.5;
exports.CLASS_NAMES = (0, util_1.classNames)({
    title: 'title',
    titleGroup: 'title-group',
    items: 'items',
    itemsGroup: 'items-group',
    contentGroup: 'content-group',
    ribbonGroup: 'ribbon-group',
    ribbon: 'ribbon',
    handlesGroup: 'handles-group',
    handle: 'handle',
    startHandle: 'start-handle',
    endHandle: 'end-handle',
    labelGroup: 'label-group',
    label: 'label',
    indicator: 'indicator',
}, 'legend');
//# sourceMappingURL=constant.js.map