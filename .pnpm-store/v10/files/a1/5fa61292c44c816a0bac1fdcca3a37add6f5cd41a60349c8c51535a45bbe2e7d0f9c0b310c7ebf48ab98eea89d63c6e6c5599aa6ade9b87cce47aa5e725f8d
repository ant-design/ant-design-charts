"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sparkline = void 0;
var tslib_1 = require("tslib");
var scale_1 = require("@antv/scale");
var util_1 = require("@antv/util");
var core_1 = require("../../core");
var util_2 = require("../../util");
var columns_1 = require("./columns");
var lines_1 = require("./lines");
var path_1 = require("./path");
var utils_1 = require("./utils");
var Sparkline = /** @class */ (function (_super) {
    tslib_1.__extends(Sparkline, _super);
    function Sparkline(options) {
        return _super.call(this, options, {
            type: 'line',
            x: 0,
            y: 0,
            width: 200,
            height: 20,
            isStack: false,
            color: ['#83daad', '#edbf45', '#d2cef9', '#e290b3', '#6f63f4'],
            smooth: true,
            lineLineWidth: 1,
            areaOpacity: 0,
            isGroup: false,
            columnLineWidth: 1,
            columnStroke: '#fff',
            scale: 1,
            spacing: 0,
        }) || this;
    }
    Object.defineProperty(Sparkline.prototype, "rawData", {
        /**
         * 将data统一格式化为数组形式
         * 如果堆叠，则生成堆叠数据
         */
        get: function () {
            var rawData = this.attributes.data;
            if (!rawData || (rawData === null || rawData === void 0 ? void 0 : rawData.length) === 0)
                return [[]];
            var data = (0, util_1.clone)(rawData);
            // number[] -> number[][]
            return (0, util_1.isNumber)(data[0]) ? [data] : data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sparkline.prototype, "data", {
        get: function () {
            if (this.attributes.isStack)
                return (0, utils_1.getStackedData)(this.rawData);
            return this.rawData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sparkline.prototype, "scales", {
        get: function () {
            return this.createScales(this.data);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sparkline.prototype, "baseline", {
        /**
         * 基准线，默认为 0
         */
        get: function () {
            var y = this.scales.y;
            var _a = tslib_1.__read(y.getOptions().domain || [0, 0], 2), y1 = _a[0], y2 = _a[1];
            if (y2 < 0) {
                return y.map(y2);
            }
            return y.map(y1 < 0 ? 0 : y1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sparkline.prototype, "containerShape", {
        get: function () {
            var _a = this.attributes, width = _a.width, height = _a.height;
            return { width: width, height: height };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sparkline.prototype, "linesStyle", {
        get: function () {
            var _this = this;
            var _a = this.attributes, type = _a.type, isStack = _a.isStack, smooth = _a.smooth;
            if (type !== 'line')
                throw new Error('linesStyle can only be used in line type');
            var areaStyle = (0, util_2.subStyleProps)(this.attributes, 'area');
            var lineStyle = (0, util_2.subStyleProps)(this.attributes, 'line');
            var width = this.containerShape.width;
            var data = this.data;
            if (data[0].length === 0)
                return { lines: [], areas: [] };
            var _b = this.scales, x = _b.x, y = _b.y;
            // 线条Path
            var lines = (0, path_1.dataToLines)(data, { type: 'line', x: x, y: y });
            // 生成区域path
            var areas = [];
            if (areaStyle) {
                var baseline = this.baseline;
                if (isStack) {
                    areas = smooth
                        ? (0, path_1.linesToStackCurveAreaPaths)(lines, width, baseline)
                        : (0, path_1.linesToStackAreaPaths)(lines, width, baseline);
                }
                else {
                    areas = (0, path_1.linesToAreaPaths)(lines, smooth, width, baseline);
                }
            }
            return {
                lines: lines.map(function (line, idx) {
                    return tslib_1.__assign({ stroke: _this.getColor(idx), d: smooth ? (0, path_1.lineToCurvePath)(line) : (0, path_1.lineToLinePath)(line) }, lineStyle);
                }),
                areas: areas.map(function (path, idx) {
                    return tslib_1.__assign({ d: path, fill: _this.getColor(idx) }, areaStyle);
                }),
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sparkline.prototype, "columnsStyle", {
        get: function () {
            var _this = this;
            var columnStyle = (0, util_2.subStyleProps)(this.attributes, 'column');
            var _a = this.attributes, isStack = _a.isStack, type = _a.type, scale = _a.scale;
            if (type !== 'column')
                throw new Error('columnsStyle can only be used in column type');
            var height = this.containerShape.height;
            var data = this.rawData;
            if (!data)
                return { columns: [] };
            if (isStack)
                data = (0, utils_1.getStackedData)(data);
            var _b = this.createScales(data), x = _b.x, y = _b.y;
            var _c = tslib_1.__read((0, utils_1.getRange)(data), 2), minVal = _c[0], maxVal = _c[1];
            var heightScale = new scale_1.Linear({
                domain: [0, maxVal - (minVal > 0 ? 0 : minVal)],
                range: [0, height * scale],
            });
            var bandWidth = x.getBandWidth();
            var rawData = this.rawData;
            return {
                columns: data.map(function (column, i) {
                    return column.map(function (val, j) {
                        var barWidth = bandWidth / data.length;
                        var getShape = function () {
                            return {
                                x: x.map(j) + barWidth * i,
                                y: val >= 0 ? y.map(val) : y.map(0),
                                width: barWidth,
                                height: heightScale.map(Math.abs(val)),
                            };
                        };
                        var getStackShape = function () {
                            return {
                                x: x.map(j),
                                y: y.map(val),
                                width: bandWidth,
                                height: heightScale.map(rawData[i][j]),
                            };
                        };
                        return tslib_1.__assign(tslib_1.__assign({ fill: _this.getColor(i) }, columnStyle), (isStack ? getStackShape() : getShape()));
                    });
                }),
            };
        },
        enumerable: false,
        configurable: true
    });
    Sparkline.prototype.render = function (attributes, container) {
        (0, util_2.maybeAppend)(container, '.container', 'rect').attr('className', 'container').node();
        var type = attributes.type, x = attributes.x, y = attributes.y;
        var className = "spark".concat(type);
        var style = tslib_1.__assign({ x: x, y: y }, (type === 'line' ? this.linesStyle : this.columnsStyle));
        (0, util_2.select)(container)
            .selectAll('.spark')
            .data([type])
            .join(function (enter) {
            return enter
                .append(function (type) {
                if (type === 'line')
                    return new lines_1.Lines({ className: className, style: style });
                return new columns_1.Columns({ className: className, style: style });
            })
                .attr('className', "spark ".concat(className));
        }, function (update) { return update.update(style); }, function (exit) { return exit.remove(); });
    };
    /**
     * 根据数据索引获取color
     */
    Sparkline.prototype.getColor = function (index) {
        var color = this.attributes.color;
        if ((0, util_1.isArray)(color)) {
            return color[index % color.length];
        }
        if ((0, util_1.isFunction)(color)) {
            return color.call(null, index);
        }
        return color;
    };
    /**
     * 根据数据生成scale
     */
    Sparkline.prototype.createScales = function (data) {
        var _a, _b;
        var _c = this.attributes, type = _c.type, scale = _c.scale, _d = _c.range, range = _d === void 0 ? [] : _d, spacing = _c.spacing;
        var _e = this.containerShape, width = _e.width, height = _e.height;
        var _f = tslib_1.__read((0, utils_1.getRange)(data), 2), minVal = _f[0], maxVal = _f[1];
        var yScale = new scale_1.Linear({
            domain: [(_a = range[0]) !== null && _a !== void 0 ? _a : minVal, (_b = range[1]) !== null && _b !== void 0 ? _b : maxVal],
            range: [height, height * (1 - scale)],
        });
        if (type === 'line') {
            return {
                type: type,
                x: new scale_1.Linear({
                    domain: [0, data[0].length - 1],
                    range: [0, width],
                }),
                y: yScale,
            };
        }
        return {
            type: type,
            x: new scale_1.Band({
                domain: data[0].map(function (val, idx) { return idx; }),
                range: [0, width],
                paddingInner: spacing,
                paddingOuter: spacing / 2,
                align: 0.5,
            }),
            y: yScale,
        };
    };
    Sparkline.tag = 'sparkline';
    return Sparkline;
}(core_1.Component));
exports.Sparkline = Sparkline;
//# sourceMappingURL=index.js.map