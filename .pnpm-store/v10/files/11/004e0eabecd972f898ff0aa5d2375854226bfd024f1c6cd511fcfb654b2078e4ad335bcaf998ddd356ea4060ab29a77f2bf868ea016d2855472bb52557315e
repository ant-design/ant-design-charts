"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timebar = void 0;
var tslib_1 = require("tslib");
var util_1 = require("@antv/util");
var core_1 = require("../../core");
var shapes_1 = require("../../shapes");
var util_2 = require("../../util");
var axis_1 = require("../axis");
var slider_1 = require("../slider");
var controller_1 = require("./controller");
var handle_1 = require("./handle");
var utils_1 = require("./utils");
var Timebar = /** @class */ (function (_super) {
    tslib_1.__extends(Timebar, _super);
    function Timebar(options) {
        var _this = _super.call(this, (0, util_2.deepAssign)({}, Timebar.defaultOptions, options)) || this;
        _this.axis = _this.appendChild(new axis_1.Axis({
            style: { type: 'linear', startPos: [0, 0], endPos: [0, 0], data: [], showArrow: false, animate: false },
        }));
        /** 时间线 group，用于放置 timeline 或者 chart */
        _this.timeline = _this.appendChild(new slider_1.Slider({
            style: {
                onChange: function (values) {
                    _this.handleSliderChange(values);
                },
            },
        }));
        _this.controller = _this.appendChild(new controller_1.Controller({}));
        _this.states = {};
        _this.handleSliderChange = function (values) {
            var prevValues = (function () {
                var val = _this.states.values;
                if (Array.isArray(val))
                    return tslib_1.__spreadArray([], tslib_1.__read(val), false);
                return val;
            })();
            _this.setBySliderValues(values);
            _this.dispatchOnChange(prevValues);
        };
        var _a = _this.attributes, selectionType = _a.selectionType, chartType = _a.chartType, speed = _a.speed, state = _a.state, playMode = _a.playMode, values = _a.values;
        _this.states = { chartType: chartType, playMode: playMode, selectionType: selectionType, speed: speed, state: state };
        _this.setByTimebarValues(values);
        return _this;
    }
    Object.defineProperty(Timebar.prototype, "data", {
        get: function () {
            var data = this.attributes.data;
            var compareFn = function (a, b) {
                if (a.time < b.time)
                    return -1;
                if (a.time > b.time)
                    return 1;
                return 0;
            };
            return data.sort(compareFn);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Timebar.prototype, "space", {
        /** 计算空间分配 */
        get: function () {
            var _a = this.attributes, x = _a.x, y = _a.y, width = _a.width, height = _a.height, type = _a.type, controllerHeight = _a.controllerHeight;
            var availableTimelineHeight = (0, util_1.clamp)(+height - controllerHeight, 0, +height);
            var controllerBBox = new util_2.BBox(x, y + +height - controllerHeight, +width, controllerHeight);
            // chart 模式下可用
            var axisBBox;
            var axisHeight = 0;
            if (type === 'chart') {
                // axis 默认分配高度为 35
                axisHeight = 35;
                axisBBox = new util_2.BBox(x, y + availableTimelineHeight - axisHeight, +width, axisHeight);
            }
            else
                axisBBox = new util_2.BBox();
            var timelineHeight = type === 'time' ? 10 : availableTimelineHeight;
            var timelineBBox = new util_2.BBox(x, y + (type === 'time' ? availableTimelineHeight : availableTimelineHeight - timelineHeight), +width, timelineHeight - axisHeight);
            return { axisBBox: axisBBox, controllerBBox: controllerBBox, timelineBBox: timelineBBox };
        },
        enumerable: false,
        configurable: true
    });
    Timebar.prototype.setBySliderValues = function (val) {
        var _a, _b;
        var data = this.data;
        var _c = tslib_1.__read(Array.isArray(val) ? val : [0, val], 2), startRatio = _c[0], endRatio = _c[1];
        var length = data.length;
        var startDatum = data[Math.floor(startRatio * length)];
        var endDatum = data[Math.ceil(endRatio * length) - (Array.isArray(val) ? 0 : 1)];
        // 如果 endDatum 不存在，则其已经比最大的时间范围更大
        this.states.values = [(_a = startDatum === null || startDatum === void 0 ? void 0 : startDatum.time) !== null && _a !== void 0 ? _a : data[0].time, (_b = endDatum === null || endDatum === void 0 ? void 0 : endDatum.time) !== null && _b !== void 0 ? _b : Infinity];
    };
    Timebar.prototype.setByTimebarValues = function (val) {
        var _a, _b, _c;
        var data = this.data;
        var _d = tslib_1.__read(Array.isArray(val) ? val : [undefined, val], 2), start = _d[0], end = _d[1];
        var startDatum = data.find(function (_a) {
            var time = _a.time;
            return time === start;
        });
        var endDatum = data.find(function (_a) {
            var time = _a.time;
            return time === end;
        });
        this.states.values = [(_a = startDatum === null || startDatum === void 0 ? void 0 : startDatum.time) !== null && _a !== void 0 ? _a : (_b = data[0]) === null || _b === void 0 ? void 0 : _b.time, (_c = endDatum === null || endDatum === void 0 ? void 0 : endDatum.time) !== null && _c !== void 0 ? _c : Infinity];
    };
    Timebar.prototype.setByIndex = function (index) {
        var _a, _b, _c, _d;
        var data = this.data;
        var _e = tslib_1.__read(index, 2), startIndex = _e[0], endIndex = _e[1];
        this.states.values = [(_b = (_a = data[startIndex]) === null || _a === void 0 ? void 0 : _a.time) !== null && _b !== void 0 ? _b : data[0].time, (_d = (_c = this.data[endIndex]) === null || _c === void 0 ? void 0 : _c.time) !== null && _d !== void 0 ? _d : Infinity];
    };
    Object.defineProperty(Timebar.prototype, "sliderValues", {
        /**
         * 获取 timebar 的 values
         */
        get: function () {
            var _a = this.states, values = _a.values, selectionType = _a.selectionType;
            var _b = tslib_1.__read(Array.isArray(values) ? values : [undefined, values], 2), start = _b[0], end = _b[1];
            var data = this.data;
            var length = data.length;
            var isValue = selectionType === 'value';
            var getStartValue = function () {
                var startDatumIndex = data.findIndex(function (_a) {
                    var time = _a.time;
                    return time === start;
                });
                if (isValue)
                    return 0;
                if (startDatumIndex > -1)
                    return startDatumIndex / length;
                // value 模式下默认取 0
                return 0;
            };
            var getEndValue = function () {
                if (end === Infinity)
                    return 1;
                var endDatumIndex = data.findIndex(function (_a) {
                    var time = _a.time;
                    return time === end;
                });
                if (endDatumIndex > -1)
                    return endDatumIndex / length;
                // range 模式下默认取 1，value 模式下默认取 0.5
                if (isValue)
                    return 0.5;
                return 1;
            };
            return [getStartValue(), getEndValue()];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Timebar.prototype, "values", {
        get: function () {
            var _a = this.states, values = _a.values, selectionType = _a.selectionType;
            var _b = tslib_1.__read(Array.isArray(values) ? values : [this.data[0].time, values], 2), start = _b[0], end = _b[1];
            if (selectionType === 'value')
                return end;
            return [start, end];
        },
        enumerable: false,
        configurable: true
    });
    Timebar.prototype.getDatumByRatio = function (ratio) {
        var data = this.data;
        var length = data.length;
        var index = Math.floor(ratio * (length - 1));
        return data[index];
    };
    Object.defineProperty(Timebar.prototype, "chartHandleIconShape", {
        get: function () {
            var selectionType = this.states.selectionType;
            var height = this.space.timelineBBox.height;
            if (selectionType === 'range')
                return function (type) { return new handle_1.ChartModeHandle({ style: { type: type, height: height, iconSize: height / 6 } }); };
            return function () {
                return new shapes_1.Line({ style: { x1: 0, y1: -height / 2, x2: 0, y2: height / 2, lineWidth: 2, stroke: '#c8c8c8' } });
            };
        },
        enumerable: false,
        configurable: true
    });
    Timebar.prototype.getChartStyle = function (bbox) {
        var _this = this;
        var x = bbox.x, y = bbox.y, width = bbox.width, height = bbox.height;
        var _a = this.states, selectionType = _a.selectionType, chartType = _a.chartType;
        var data = this.data;
        var _b = this.attributes, type = _b.type, userDefinedLabelFormatter = _b.labelFormatter;
        var _c = (0, util_2.subStyleProps)(this.attributes, 'chart'), ignoreType = _c.type, userDefinedChartStyle = tslib_1.__rest(_c, ["type"]);
        var isRange = selectionType === 'range';
        if (type === 'time') {
            return tslib_1.__assign({ handleIconShape: function () { return new handle_1.TimeModeHandle({}); }, selectionFill: '#2e7ff8', selectionFillOpacity: 1, showLabelOnInteraction: true, handleLabelDy: isRange ? -15 : 0, autoFitLabel: isRange, handleSpacing: isRange ? -15 : 0, trackFill: '#edeeef', trackLength: width, trackOpacity: 0.5, trackRadius: height / 2, trackSize: height / 2, type: selectionType, values: this.sliderValues, formatter: function (value) {
                    if (userDefinedLabelFormatter)
                        return userDefinedLabelFormatter(value);
                    var time = _this.getDatumByRatio(value).time;
                    if (typeof time === 'number')
                        return (0, utils_1.parseBySeries)(time);
                    return (0, util_2.formatTime)(time, 'YYYY-MM-DD HH:mm:ss');
                }, transform: "translate(".concat(x, ", ").concat(y, ")"), 
                // x,
                // y,
                zIndex: 1 }, userDefinedChartStyle);
        }
        // type === 'chart'
        var handleIconOffset = selectionType === 'range' ? 5 : 0;
        var sparklineData = data.map(function (_a) {
            var value = _a.value;
            return value;
        });
        return tslib_1.__assign({ handleIconOffset: handleIconOffset, handleIconShape: this.chartHandleIconShape, selectionFill: '#fff', selectionFillOpacity: 0.5, selectionType: 'invert', sparklineSpacing: 0.1, sparklineColumnLineWidth: 0, sparklineColor: '#d4e5fd', sparklineAreaOpacity: 1, sparklineAreaLineWidth: 0, sparklineData: sparklineData, sparklineType: chartType, sparklineScale: 0.8, trackLength: width, trackSize: height, type: selectionType, values: this.sliderValues, 
            // x,
            // y,
            transform: "translate(".concat(x, ", ").concat(y, ")"), zIndex: 1 }, userDefinedChartStyle);
    };
    Timebar.prototype.renderChart = function (bbox) {
        if (bbox === void 0) { bbox = this.space.timelineBBox; }
        this.timeline.update(this.getChartStyle(bbox));
    };
    Timebar.prototype.updateSelection = function () {
        this.timeline.setValues(this.sliderValues, true);
        this.handleSliderChange(this.sliderValues);
    };
    Timebar.prototype.getAxisStyle = function (bbox) {
        var data = this.data;
        var _a = this.attributes, interval = _a.interval, userDefinedLabelFormatter = _a.labelFormatter;
        var userDefinedAxisStyle = (0, util_2.subStyleProps)(this.attributes, 'axis');
        var x = bbox.x, y = bbox.y, width = bbox.width;
        // 需要补一个刻度
        var axisData = tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(data), false), [{ time: 0 }], false).map(function (_a, index, arr) {
            var time = _a.time;
            return ({
                label: "".concat(time),
                value: index / (arr.length - 1),
                time: time,
            });
        });
        var style = tslib_1.__assign({ startPos: [x, y], endPos: [x + width, y], data: axisData, 
            // hide last label
            labelFilter: function (_datum, index) { return index < axisData.length - 1; }, labelFormatter: function (_a) {
                var time = _a.time;
                return userDefinedLabelFormatter ? userDefinedLabelFormatter(time) : (0, utils_1.labelFormatter)(time, interval);
            } }, userDefinedAxisStyle);
        return style;
    };
    Timebar.prototype.renderAxis = function (bbox) {
        if (bbox === void 0) { bbox = this.space.axisBBox; }
        var type = this.attributes.type;
        if (type !== 'chart')
            return;
        this.axis.update(this.getAxisStyle(bbox));
    };
    Timebar.prototype.renderController = function (bbox) {
        if (bbox === void 0) { bbox = this.space.controllerBBox; }
        var type = this.attributes.type;
        var _a = this.states, state = _a.state, speed = _a.speed, selectionType = _a.selectionType, chartType = _a.chartType;
        var userDefinedControllerStyle = (0, util_2.subStyleProps)(this.attributes, 'controller');
        var that = this;
        var style = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, bbox), { iconSize: 20, speed: speed, state: state, selectionType: selectionType, chartType: chartType, onChange: function (type, _a) {
                var value = _a.value;
                switch (type) {
                    case 'reset':
                        that.internalReset();
                        break;
                    case 'speed':
                        that.handleSpeedChange(value);
                        break;
                    case 'backward':
                        that.internalBackward();
                        break;
                    case 'playPause':
                        if (value === 'play')
                            that.internalPlay();
                        else
                            that.internalPause();
                        break;
                    case 'forward':
                        that.internalForward();
                        break;
                    case 'selectionType':
                        that.handleSelectionTypeChange(value);
                        break;
                    case 'chartType':
                        that.handleChartTypeChange(value);
                        break;
                    default:
                        break;
                }
            } }), userDefinedControllerStyle);
        if (type === 'time') {
            style.functions = [['reset', 'speed'], ['backward', 'playPause', 'forward'], ['selectionType']];
        }
        this.controller.update(style);
    };
    Timebar.prototype.dispatchOnChange = function (prevValues) {
        var data = this.data;
        var onChange = this.attributes.onChange;
        var _a = this.states, values = _a.values, selectionType = _a.selectionType;
        var _b = tslib_1.__read(values, 2), start = _b[0], end = _b[1];
        var endTime = end === Infinity ? data.at(-1).time : end;
        var newValues = selectionType === 'range' ? [start, endTime] : endTime;
        var isEqual = function (val1, val2) {
            if (Array.isArray(val1)) {
                if (!Array.isArray(val2))
                    return false;
                if (val1[0] === val2[0]) {
                    if (val1[1] === val2[1])
                        return true;
                    if (val1[1] === Infinity || val2[1] === Infinity)
                        return true;
                }
                return false;
            }
            if (Array.isArray(val2))
                return false;
            return val1 === val2;
        };
        // 如果和当前值不同，才响应
        if (!prevValues || !isEqual(prevValues, newValues)) {
            onChange === null || onChange === void 0 ? void 0 : onChange(selectionType === 'range' ? [start, endTime] : endTime);
        }
    };
    Timebar.prototype.internalReset = function (preventEvent) {
        var _a, _b;
        var selectionType = this.states.selectionType;
        this.internalPause();
        this.setBySliderValues(selectionType === 'range' ? [0, 1] : [0, 0]);
        this.renderController();
        this.updateSelection();
        if (!preventEvent) {
            (_b = (_a = this.attributes) === null || _a === void 0 ? void 0 : _a.onReset) === null || _b === void 0 ? void 0 : _b.call(_a);
            this.dispatchOnChange();
        }
    };
    Timebar.prototype.reset = function () {
        this.internalReset();
    };
    Timebar.prototype.moveSelection = function (direction, preventEvent) {
        var data = this.data;
        var length = data.length;
        var _a = this.states, values = _a.values, selectionType = _a.selectionType, playMode = _a.playMode;
        var _b = tslib_1.__read(values, 2), startTime = _b[0], endTime = _b[1];
        var startIndex = data.findIndex(function (_a) {
            var time = _a.time;
            return time === startTime;
        });
        var endIndex = data.findIndex(function (_a) {
            var time = _a.time;
            return time === endTime;
        });
        if (endIndex === -1)
            endIndex = length;
        var diff = direction === 'backward' ? -1 : 1;
        var currentIndexes;
        if (selectionType === 'range') {
            // end 后移一个时间间隔
            if (playMode === 'acc') {
                currentIndexes = [startIndex, endIndex + diff];
                // 如果回退过程中，start 和 end 相遇，则 end 重置到 length
                if (diff === -1 && startIndex === endIndex) {
                    currentIndexes = [startIndex, length];
                }
            }
            // start, end 后移一个时间间隔
            else
                currentIndexes = [startIndex + diff, endIndex + diff];
        }
        // end 后移一个时间间隔
        else
            currentIndexes = [startIndex, endIndex + diff];
        var normalizeIndexes = function (indexes) {
            // 先进行排序
            var _a = tslib_1.__read(indexes.sort(function (a, b) { return a - b; }), 2), start = _a[0], end = _a[1];
            // 保证 index 在 [0, length]
            var clampIndex = function (index) { return (0, util_1.clamp)(index, 0, length); };
            // 如果 end 超出最大值
            if (end > length) {
                // value 模式下，重置到 0
                if (selectionType === 'value')
                    return [0, 0];
                // 移动到 start
                if (playMode === 'acc')
                    return [clampIndex(start), clampIndex(start)];
                // 整体移动到起始位置
                return [0, clampIndex(end - start)];
            }
            // 如果是倒放，到头时，整体移动到末尾
            if (start < 0) {
                if (playMode === 'acc')
                    return [0, clampIndex(end)];
                return [clampIndex(start + length - end), length];
            }
            return [clampIndex(start), clampIndex(end)];
        };
        var normalizedIndexes = normalizeIndexes(currentIndexes);
        this.setByIndex(normalizedIndexes);
        this.updateSelection();
        return normalizedIndexes;
    };
    Timebar.prototype.internalBackward = function (preventEvent) {
        var _a, _b;
        var indexes = this.moveSelection('backward', preventEvent);
        if (!preventEvent) {
            (_b = (_a = this.attributes) === null || _a === void 0 ? void 0 : _a.onBackward) === null || _b === void 0 ? void 0 : _b.call(_a);
            this.dispatchOnChange();
        }
        return indexes;
    };
    Timebar.prototype.backward = function () {
        this.internalBackward();
    };
    Timebar.prototype.internalPlay = function (preventEvent) {
        var _this = this;
        var _a, _b;
        var data = this.data;
        var loop = this.attributes.loop;
        var _c = this.states.speed, speed = _c === void 0 ? 1 : _c;
        this.playInterval = window.setInterval(function () {
            var indexes = _this.internalForward();
            // 如果不是循环播放，则播放到最后一个值时暂停
            if (indexes[1] === data.length && !loop) {
                // 这里需要抛出暂停事件
                _this.internalPause();
                _this.renderController();
            }
        }, 1000 / speed);
        this.states.state = 'play';
        !preventEvent && ((_b = (_a = this.attributes) === null || _a === void 0 ? void 0 : _a.onPlay) === null || _b === void 0 ? void 0 : _b.call(_a));
    };
    Timebar.prototype.play = function () {
        this.internalPlay();
    };
    Timebar.prototype.internalPause = function (preventEvent) {
        var _a, _b;
        clearInterval(this.playInterval);
        this.states.state = 'pause';
        !preventEvent && ((_b = (_a = this.attributes) === null || _a === void 0 ? void 0 : _a.onPause) === null || _b === void 0 ? void 0 : _b.call(_a));
    };
    Timebar.prototype.pause = function () {
        this.internalPause();
    };
    Timebar.prototype.internalForward = function (preventEvent) {
        var _a, _b;
        var indexes = this.moveSelection('forward', preventEvent);
        if (!preventEvent) {
            (_b = (_a = this.attributes) === null || _a === void 0 ? void 0 : _a.onForward) === null || _b === void 0 ? void 0 : _b.call(_a);
            this.dispatchOnChange();
        }
        return indexes;
    };
    Timebar.prototype.forward = function () {
        this.internalForward();
    };
    Timebar.prototype.handleSpeedChange = function (value) {
        var _a, _b;
        this.states.speed = value;
        var state = this.states.state;
        if (state === 'play') {
            // 重新设定 interval
            this.internalPause(true);
            this.internalPlay(true);
        }
        (_b = (_a = this.attributes) === null || _a === void 0 ? void 0 : _a.onSpeedChange) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    };
    Timebar.prototype.handleSelectionTypeChange = function (type) {
        var _a, _b;
        this.states.selectionType = type;
        this.renderChart();
        (_b = (_a = this.attributes) === null || _a === void 0 ? void 0 : _a.onSelectionTypeChange) === null || _b === void 0 ? void 0 : _b.call(_a, type);
    };
    Timebar.prototype.handleChartTypeChange = function (type) {
        var _a, _b;
        this.states.chartType = type;
        this.renderChart();
        (_b = (_a = this.attributes) === null || _a === void 0 ? void 0 : _a.onChartTypeChange) === null || _b === void 0 ? void 0 : _b.call(_a, type);
    };
    Timebar.prototype.render = function () {
        var _a = this.space, axisBBox = _a.axisBBox, controllerBBox = _a.controllerBBox, timelineBBox = _a.timelineBBox;
        this.renderController(controllerBBox);
        this.renderAxis(axisBBox);
        this.renderChart(timelineBBox);
        if (this.states.state === 'play')
            this.internalPlay();
    };
    Timebar.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.internalPause(true);
    };
    Timebar.defaultOptions = {
        style: {
            x: 0,
            y: 0,
            axisLabelFill: '#6e6e6e',
            axisLabelTextAlign: 'left',
            axisLabelTextBaseline: 'top',
            axisLabelTransform: 'translate(5, -12)',
            axisLineLineWidth: 1,
            axisLineStroke: '#cacdd1',
            axisTickLength: 15,
            axisTickLineWidth: 1,
            axisTickStroke: '#cacdd1',
            chartShowLabel: false,
            chartType: 'line',
            controllerAlign: 'center',
            controllerHeight: 40,
            data: [],
            interval: 'day',
            loop: false,
            playMode: 'acc',
            selectionType: 'range',
            type: 'time',
        },
    };
    return Timebar;
}(core_1.Component));
exports.Timebar = Timebar;
//# sourceMappingURL=timebar.js.map