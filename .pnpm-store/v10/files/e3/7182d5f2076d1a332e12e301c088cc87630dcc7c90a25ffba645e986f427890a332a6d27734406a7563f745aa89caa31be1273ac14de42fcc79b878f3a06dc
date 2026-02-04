"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Continuous = void 0;
var tslib_1 = require("tslib");
var g_1 = require("@antv/g");
var scale_1 = require("@antv/scale");
var util_1 = require("@antv/util");
var core_1 = require("../../core");
var util_2 = require("../../util");
var axis_1 = require("../axis");
var constant_1 = require("../axis/constant");
var indicator_1 = require("../indicator");
var handle_1 = require("../slider/handle");
var title_1 = require("./title");
var constant_2 = require("./constant");
var classname_1 = require("./utils/classname");
var handle_2 = require("./continuous/handle");
var ribbon_1 = require("./continuous/ribbon");
var utils_1 = require("./continuous/utils");
var utils_2 = require("./utils");
function getMinMax(data) {
    return {
        min: Math.min.apply(Math, tslib_1.__spreadArray([], tslib_1.__read(data.map(function (d) { return d.value; })), false)),
        max: Math.max.apply(Math, tslib_1.__spreadArray([], tslib_1.__read(data.map(function (d) { return d.value; })), false)),
    };
}
var Continuous = /** @class */ (function (_super) {
    tslib_1.__extends(Continuous, _super);
    function Continuous(options) {
        var _this = _super.call(this, options, constant_2.CONTINUOUS_DEFAULT_OPTIONS) || this;
        _this.eventToOffsetScale = new scale_1.Linear({});
        _this.innerRibbonScale = new scale_1.Linear({});
        _this.cacheLabelBBox = null;
        _this.cacheHandleBBox = null;
        _this.onHovering = function (e) {
            var _a = _this.attributes, data = _a.data, block = _a.block;
            e.stopPropagation();
            var value = _this.getValueByCanvasPoint(e);
            if (block) {
                var range = (0, utils_1.getNextTickValue)(data.map(function (_a) {
                    var value = _a.value;
                    return value;
                }), value).range;
                var selection = _this.getRealSelection(range);
                _this.showIndicator((range[0] + range[1]) / 2, "".concat(selection[0], "-").concat(selection[1]));
                _this.dispatchIndicated(value, range);
            }
            else {
                var safetyValue = _this.getTickValue(value);
                _this.showIndicator(safetyValue, "".concat(_this.getRealValue(safetyValue)));
                _this.dispatchIndicated(safetyValue);
            }
        };
        _this.onDragStart = function (target) { return function (e) {
            e.stopPropagation();
            // 关闭滑动
            if (!_this.attributes.slidable)
                return;
            _this.target = target;
            _this.prevValue = _this.getTickValue(_this.getValueByCanvasPoint(e));
            document.addEventListener('mousemove', _this.onDragging);
            document.addEventListener('touchmove', _this.onDragging);
            document.addEventListener('mouseleave', _this.onDragEnd);
            document.addEventListener('mouseup', _this.onDragEnd);
            document.addEventListener('mouseup', _this.onDragEnd);
            document.addEventListener('touchend', _this.onDragEnd);
        }; };
        _this.onDragging = function (e) {
            var target = _this.target;
            _this.updateMouse();
            var _a = tslib_1.__read(_this.selection, 2), start = _a[0], end = _a[1];
            var currValue = _this.getTickValue(_this.getValueByCanvasPoint(e));
            var diffValue = currValue - _this.prevValue;
            if (target === 'start')
                start !== currValue && _this.updateSelection(currValue, end);
            else if (target === 'end')
                end !== currValue && _this.updateSelection(start, currValue);
            else if (target === 'ribbon' && diffValue !== 0) {
                _this.prevValue = currValue;
                _this.updateSelection(diffValue, diffValue, true);
            }
        };
        _this.onDragEnd = function () {
            _this.style.cursor = 'pointer';
            document.removeEventListener('mousemove', _this.onDragging);
            document.removeEventListener('touchmove', _this.onDragging);
            document.removeEventListener('mouseup', _this.onDragEnd);
            document.removeEventListener('touchend', _this.onDragEnd);
        };
        return _this;
    }
    Object.defineProperty(Continuous.prototype, "handleOffsetRatio", {
        get: function () {
            return this.ifHorizontal(0.5, 0.5);
        },
        enumerable: false,
        configurable: true
    });
    Continuous.prototype.getBBox = function () {
        var _a = this.attributes, width = _a.width, height = _a.height;
        return new util_2.BBox(0, 0, width, height);
    };
    Continuous.prototype.render = function (attributes, container) {
        var _this = this;
        // Set root container className
        var classNamePrefix = attributes.classNamePrefix;
        var baseClassName = container.className || 'legend-continuous';
        if (classNamePrefix) {
            container.attr('className', "".concat(baseClassName, " ").concat(classNamePrefix, "legend"));
        }
        else if (!container.className) {
            container.attr('className', 'legend-continuous');
        }
        // 渲染顺序
        // 1. 绘制 title, 获得可用空间
        // 2. 绘制 label, handle
        // 3. 基于可用空间、label高度、handle 宽高，计算 ribbon 宽高
        // 4. 绘制 ribbon
        // 5. 调整 label、handle 位置
        var showLabel = attributes.showLabel;
        /** title */
        this.renderTitle((0, util_2.select)(container));
        var _a = this.availableSpace, x = _a.x, y = _a.y;
        /** label */
        /** content */
        var contentGroup = (0, util_2.select)(container)
            .maybeAppendByClassName(constant_2.CLASS_NAMES.contentGroup, 'g')
            .styles({ transform: "translate(".concat(x, ", ").concat(y, ")") });
        var labelGroup = contentGroup.maybeAppendByClassName(constant_2.CLASS_NAMES.labelGroup, 'g').styles({ zIndex: 1 });
        (0, util_2.ifShow)(!!showLabel, labelGroup, function (group) {
            _this.renderLabel(group);
        });
        var ribbonGroup = contentGroup.maybeAppendByClassName(constant_2.CLASS_NAMES.ribbonGroup, 'g').styles({ zIndex: 0 });
        /** handle */
        this.handlesGroup = contentGroup.maybeAppendByClassName(constant_2.CLASS_NAMES.handlesGroup, 'g').styles({ zIndex: 2 });
        this.renderHandles();
        /** ribbon */
        this.renderRibbon(ribbonGroup);
        this.renderIndicator(contentGroup);
        /** adjust */
        this.adjustLabel();
        this.adjustHandles();
        // this.adjustTitle();
    };
    Object.defineProperty(Continuous.prototype, "range", {
        get: function () {
            var _a = this.attributes, data = _a.data, domain = _a.domain;
            return domain ? { min: domain[0], max: domain[1] } : getMinMax(data);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Continuous.prototype, "ribbonScale", {
        get: function () {
            var _a = this.range, min = _a.min, max = _a.max;
            this.innerRibbonScale.update({
                domain: [min, max],
                range: [0, 1],
            });
            return this.innerRibbonScale;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Continuous.prototype, "ribbonRange", {
        get: function () {
            var _a = tslib_1.__read(this.selection, 2), min = _a[0], max = _a[1];
            var scale = this.ribbonScale;
            return [scale.map(min), scale.map(max)];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Continuous.prototype, "selection", {
        get: function () {
            var _a = this.range, min = _a.min, max = _a.max;
            var _b = this.attributes.defaultValue, _c = _b === void 0 ? [min, max] : _b, _d = tslib_1.__read(_c, 2), start = _d[0], end = _d[1];
            return [start, end];
        },
        enumerable: false,
        configurable: true
    });
    Continuous.prototype.ifHorizontal = function (a, b) {
        return (0, utils_2.ifHorizontal)(this.attributes.orientation, typeof a === 'function' ? a() : a, typeof b === 'function' ? b() : b);
    };
    Continuous.prototype.renderTitle = function (container) {
        var _a = this.attributes, showTitle = _a.showTitle, titleText = _a.titleText, width = _a.width, height = _a.height, classNamePrefix = _a.classNamePrefix;
        var style = (0, util_2.subStyleProps)(this.attributes, 'title');
        var finalTitleStyle = tslib_1.__assign(tslib_1.__assign({}, style), { width: width, height: height, text: titleText, classNamePrefix: classNamePrefix });
        var that = this;
        container
            .selectAll(constant_2.CLASS_NAMES.title.class)
            .data(showTitle ? [titleText] : [])
            .join(function (enter) {
            return enter
                .append(function () { return new title_1.Title({ style: finalTitleStyle }); })
                .attr('className', constant_2.CLASS_NAMES.title.name)
                .each(function () {
                that.title = this;
            });
        }, function (update) { return update.update(finalTitleStyle); }, function (exit) {
            return exit
                .each(function () {
                that.title = undefined;
            })
                .remove();
        });
    };
    Object.defineProperty(Continuous.prototype, "availableSpace", {
        get: function () {
            if (this.title)
                return this.title.getAvailableSpace();
            var _a = this.attributes, width = _a.width, height = _a.height;
            return new util_2.BBox(0, 0, width, height);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Continuous.prototype, "labelFixedSpacing", {
        get: function () {
            var showTick = this.attributes.showTick;
            return showTick ? 5 : 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Continuous.prototype, "labelPosition", {
        get: function () {
            var _a = this.attributes, orientation = _a.orientation, labelDirection = _a.labelDirection;
            var positions = {
                vertical: { positive: 'right', negative: 'left' },
                horizontal: { positive: 'bottom', negative: 'top' },
            };
            return positions[orientation][labelDirection];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Continuous.prototype, "labelBBox", {
        get: function () {
            var _a;
            var showLabel = this.attributes.showLabel;
            if (!showLabel)
                return new util_2.BBox(0, 0, 0, 0);
            if (this.cacheLabelBBox)
                return this.cacheLabelBBox;
            var _b = ((_a = this.label.querySelector(constant_1.CLASS_NAMES.labelGroup.class)) === null || _a === void 0 ? void 0 : _a.children.slice(-1)[0]).getBBox(), width = _b.width, height = _b.height;
            this.cacheLabelBBox = new util_2.BBox(0, 0, width, height);
            return this.cacheLabelBBox;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Continuous.prototype, "labelShape", {
        get: function () {
            var _a = this.attributes, showLabel = _a.showLabel, _b = _a.labelSpacing, labelSpacing = _b === void 0 ? 0 : _b;
            if (!showLabel)
                return { width: 0, height: 0, size: 0, length: 0 };
            var _c = this.labelBBox, width = _c.width, height = _c.height;
            var size = this.ifHorizontal(height, width) + labelSpacing + this.labelFixedSpacing;
            var length = this.ifHorizontal(width, height);
            return { width: width, height: height, size: size, length: length };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Continuous.prototype, "ribbonBBox", {
        get: function () {
            var _a = this.attributes, showHandle = _a.showHandle, userDefinedRibbonSize = _a.ribbonSize;
            var _b = this.availableSpace, availableWidth = _b.width, availableHeight = _b.height;
            var _c = this.labelShape, labelSize = _c.size, labelLength = _c.length;
            var _d = tslib_1.__read(this.ifHorizontal([availableHeight, availableWidth], [availableWidth, availableHeight]), 2), availableSize = _d[0], availableLength = _d[1];
            var _e = showHandle ? this.handleShape : { size: 0, length: 0 }, handleSize = _e.size, handleLength = _e.length;
            var handleRatio = this.handleOffsetRatio;
            var ribbonSize = 0;
            var labelPosition = this.labelPosition;
            if (userDefinedRibbonSize) {
                ribbonSize = userDefinedRibbonSize;
            }
            else if (['bottom', 'right'].includes(labelPosition)) {
                ribbonSize = Math.min(availableSize - labelSize, (availableSize - handleSize) / handleRatio);
            }
            else if (availableSize * (1 - handleRatio) > handleSize) {
                ribbonSize = Math.max(availableSize - labelSize, 0);
            }
            else
                ribbonSize = Math.max((availableSize - labelSize - handleSize) / handleRatio, 0);
            var edgeLength = Math.max(handleLength, labelLength);
            var ribbonLength = availableLength - edgeLength;
            var _f = tslib_1.__read(this.ifHorizontal([ribbonLength, ribbonSize], [ribbonSize, ribbonLength]), 2), width = _f[0], height = _f[1];
            // 需要考虑 handle 的占用空间
            // todo 为了防止因为 handle 文本变化导致的 ribbon 位置变化，handle size 取最大值
            var finalLabelOccupy = ['top', 'left'].includes(labelPosition) ? labelSize : 0;
            var _g = tslib_1.__read(this.ifHorizontal([edgeLength / 2, finalLabelOccupy], [finalLabelOccupy, edgeLength / 2]), 2), x = _g[0], y = _g[1];
            return new util_2.BBox(x, y, width, height);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Continuous.prototype, "ribbonShape", {
        get: function () {
            var _a = this.ribbonBBox, width = _a.width, height = _a.height;
            return this.ifHorizontal({ size: height, length: width }, { size: width, length: height });
        },
        enumerable: false,
        configurable: true
    });
    Continuous.prototype.renderRibbon = function (container) {
        var _a = this.attributes, data = _a.data, type = _a.type, orientation = _a.orientation, color = _a.color, block = _a.block, classNamePrefix = _a.classNamePrefix;
        var ribbonStyle = (0, util_2.subStyleProps)(this.attributes, 'ribbon');
        var _b = this.range, min = _b.min, max = _b.max;
        var _c = this.ribbonBBox, x = _c.x, y = _c.y;
        var _d = this.ribbonShape, length = _d.length, size = _d.size;
        var style = (0, util_2.deepAssign)({
            transform: "translate(".concat(x, ", ").concat(y, ")"),
            length: length,
            size: size,
            type: type,
            orientation: orientation,
            color: color,
            block: block,
            partition: data.map(function (d) { return (d.value - min) / (max - min); }),
            range: this.ribbonRange,
            classNamePrefix: classNamePrefix,
        }, ribbonStyle);
        var ribbonClassName = (0, classname_1.getLegendClassName)(constant_2.CLASS_NAMES.ribbon.name, constant_2.CLASSNAME_SUFFIX_MAP.ribbon, classNamePrefix);
        this.ribbon = container
            .maybeAppendByClassName(constant_2.CLASS_NAMES.ribbon, function () {
            return new ribbon_1.Ribbon({
                style: style,
                className: ribbonClassName,
            });
        })
            .update(style);
    };
    Continuous.prototype.getHandleClassName = function (type) {
        // @ts-ignore
        return "".concat(constant_2.CLASS_NAMES.prefix("".concat(type, "-handle")));
    };
    Continuous.prototype.renderHandles = function () {
        var _a = this.attributes, showHandle = _a.showHandle, orientation = _a.orientation, classNamePrefix = _a.classNamePrefix;
        var handleStyle = (0, util_2.subStyleProps)(this.attributes, 'handle');
        var _b = tslib_1.__read(this.selection, 2), min = _b[0], max = _b[1];
        var style = tslib_1.__assign(tslib_1.__assign({}, handleStyle), { orientation: orientation, classNamePrefix: classNamePrefix });
        var _c = handleStyle.shape, shape = _c === void 0 ? 'slider' : _c;
        var HandleCtor = shape === 'basic' ? handle_2.Handle : handle_1.Handle;
        var that = this;
        var baseHandleClassName = (0, classname_1.getLegendClassName)(constant_2.CLASS_NAMES.handle.name, constant_2.CLASSNAME_SUFFIX_MAP.handle, classNamePrefix);
        this.handlesGroup
            .selectAll(constant_2.CLASS_NAMES.handle.class)
            .data(showHandle
            ? [
                { value: min, type: 'start' },
                { value: max, type: 'end' },
            ]
            : [], function (d) { return d.type; })
            .join(function (enter) {
            return enter
                .append(function () { return new HandleCtor({ style: style, className: baseHandleClassName }); })
                .attr('className', function (_a) {
                var type = _a.type;
                return "".concat(baseHandleClassName, " ").concat(that.getHandleClassName(type));
            })
                .each(function (_a) {
                var type = _a.type, labelText = _a.value;
                this.update({ labelText: labelText });
                var name = "".concat(type, "Handle");
                that[name] = this;
                this.addEventListener('pointerdown', that.onDragStart(type));
            });
        }, function (update) {
            return update.update(style).each(function (_a) {
                var labelText = _a.value;
                this.update({ labelText: labelText });
            });
        }, function (exit) {
            return exit
                .each(function (_a) {
                var type = _a.type;
                var name = "".concat(type, "Handle");
                that[name] = undefined;
            })
                .remove();
        });
    };
    Continuous.prototype.adjustHandles = function () {
        var _a = tslib_1.__read(this.selection, 2), min = _a[0], max = _a[1];
        this.setHandlePosition('start', min);
        this.setHandlePosition('end', max);
        // Update SliderHandle sub-elements className after rendering
        var _b = this.attributes, classNamePrefix = _b.classNamePrefix, showHandle = _b.showHandle;
        var _c = (0, util_2.subStyleProps)(this.attributes, 'handle').shape, shape = _c === void 0 ? 'slider' : _c;
        if (showHandle && shape === 'slider' && classNamePrefix) {
            if (this.startHandle)
                this.updateSliderHandleClassNames(this.startHandle, classNamePrefix);
            if (this.endHandle)
                this.updateSliderHandleClassNames(this.endHandle, classNamePrefix);
        }
    };
    /**
     * Update SliderHandle sub-elements className to use legend prefix
     * SliderHandle generates: handle-icon-rect, handle-icon-line, handle-label
     * Should add legend className: g2-legend-handle-marker, g2-legend-handle-label
     */
    Continuous.prototype.updateSliderHandleClassNames = function (handle, classNamePrefix) {
        // Get the actual DOM node from the component
        var container = handle.container || handle;
        // Update icon elements (rect and lines) to use handleMarker suffix
        var iconRect = container.querySelector('.handle-icon-rect');
        if (iconRect) {
            var markerClassName = (0, classname_1.getLegendClassName)('handle-icon-rect', constant_2.CLASSNAME_SUFFIX_MAP.handleMarker, classNamePrefix);
            iconRect.setAttribute('class', markerClassName);
            // Line elements are children of rect element
            var iconLines = iconRect.querySelectorAll('line');
            iconLines.forEach(function (line) {
                var currentClass = line.getAttribute('class') || '';
                var baseClass = currentClass.split(' ')[0]; // e.g., 'handle-icon-line-1'
                var markerClassName = (0, classname_1.getLegendClassName)(baseClass, constant_2.CLASSNAME_SUFFIX_MAP.handleMarker, classNamePrefix);
                line.setAttribute('class', markerClassName);
            });
        }
        // Update label element to use handleLabel suffix
        var label = container.querySelector('.handle-label');
        if (label) {
            var labelClassName = (0, classname_1.getLegendClassName)('handle-label', constant_2.CLASSNAME_SUFFIX_MAP.handleLabel, classNamePrefix);
            label.setAttribute('class', labelClassName);
        }
    };
    Object.defineProperty(Continuous.prototype, "handleBBox", {
        get: function () {
            if (this.cacheHandleBBox)
                return this.cacheHandleBBox;
            if (!this.attributes.showHandle)
                return new util_2.BBox(0, 0, 0, 0);
            var _a = this.startHandle.getBBox(), startHandleWidth = _a.width, startHandleHeight = _a.height;
            var _b = this.endHandle.getBBox(), endHandleWidth = _b.width, endHandleHeight = _b.height;
            var _c = tslib_1.__read([Math.max(startHandleWidth, endHandleWidth), Math.max(startHandleHeight, endHandleHeight)], 2), width = _c[0], height = _c[1];
            this.cacheHandleBBox = new util_2.BBox(0, 0, width, height);
            return this.cacheHandleBBox;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Continuous.prototype, "handleShape", {
        /**
         *  因为 handle label 的宽高是动态的，所以 handle bbox 是第一次渲染时的 bbox
         */
        get: function () {
            var _a = this.handleBBox, width = _a.width, height = _a.height;
            var _b = tslib_1.__read(this.ifHorizontal([height, width], [width, height]), 2), size = _b[0], length = _b[1];
            return { width: width, height: height, size: size, length: length };
        },
        enumerable: false,
        configurable: true
    });
    Continuous.prototype.setHandlePosition = function (type, value) {
        var handleFormatter = this.attributes.handleFormatter;
        var _a = this.ribbonBBox, ribbonX = _a.x, ribbonY = _a.y;
        var ribbonSize = this.ribbonShape.size;
        var offset = this.getOffset(value);
        var _b = tslib_1.__read(this.ifHorizontal([ribbonX + offset, ribbonY + ribbonSize * this.handleOffsetRatio], [ribbonX + ribbonSize * this.handleOffsetRatio, ribbonY + offset]), 2), x = _b[0], y = _b[1];
        var handle = this.handlesGroup.select(".".concat(this.getHandleClassName(type))).node();
        handle === null || handle === void 0 ? void 0 : handle.update({ transform: "translate(".concat(x, ", ").concat(y, ")"), formatter: handleFormatter });
    };
    Continuous.prototype.renderIndicator = function (container) {
        var classNamePrefix = this.attributes.classNamePrefix;
        var style = (0, util_2.subStyleProps)(this.attributes, 'indicator');
        var indicatorClassName = (0, classname_1.getLegendClassName)(constant_2.CLASS_NAMES.indicator.name, constant_2.CLASSNAME_SUFFIX_MAP.indicator, classNamePrefix);
        this.indicator = container
            .maybeAppendByClassName(constant_2.CLASS_NAMES.indicator, function () {
            return new indicator_1.Indicator({
                style: style,
                className: indicatorClassName,
            });
        })
            .update(style);
        // this.hideIndicator();
    };
    Object.defineProperty(Continuous.prototype, "labelData", {
        get: function () {
            var _this = this;
            var data = this.attributes.data;
            return data.reduce(function (acc, curr, index, arr) {
                var _a, _b;
                var id = (_a = curr === null || curr === void 0 ? void 0 : curr.id) !== null && _a !== void 0 ? _a : index.toString();
                acc.push(tslib_1.__assign(tslib_1.__assign({}, curr), { id: id, index: index, type: 'value', label: (_b = curr === null || curr === void 0 ? void 0 : curr.label) !== null && _b !== void 0 ? _b : curr.value.toString(), value: _this.ribbonScale.map(curr.value) }));
                if (index < arr.length - 1) {
                    var next = arr[index + 1];
                    var _c = tslib_1.__read([curr.value, next.value], 2), cr = _c[0], nx = _c[1];
                    var midVal = (cr + nx) / 2;
                    acc.push(tslib_1.__assign(tslib_1.__assign({}, curr), { id: id, index: index, type: 'range', range: [cr, nx], label: [cr, nx].join('~'), value: _this.ribbonScale.map(midVal) }));
                }
                return acc;
            }, []);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Continuous.prototype, "labelStyle", {
        get: function () {
            var _a = tslib_1.__read(['center', 'middle'], 2), labelTextAlign = _a[0], labelTextBaseline = _a[1];
            var labelPosition = this.labelPosition;
            if (labelPosition === 'top')
                labelTextBaseline = 'bottom';
            else if (labelPosition === 'bottom')
                labelTextBaseline = 'top';
            else if (labelPosition === 'left')
                labelTextAlign = 'end';
            else if (labelPosition === 'right')
                labelTextAlign = 'start';
            return {
                labelTextAlign: labelTextAlign,
                labelTextBaseline: labelTextBaseline,
            };
        },
        enumerable: false,
        configurable: true
    });
    Continuous.prototype.renderLabel = function (container) {
        var _a = this.attributes, _b = _a.showTick, showTick = _b === void 0 ? false : _b, labelFilter = _a.labelFilter, labelFormatter = _a.labelFormatter;
        var tickStyle = (0, util_2.subStyleProps)(this.attributes, 'tick');
        var labelStyle = (0, util_2.subStyleProps)(this.attributes, 'label');
        var align = labelStyle.align;
        var style = (0, util_2.deepAssign)(tslib_1.__assign({ showLine: false, showGrid: false, showTick: showTick, type: 'linear', startPos: [0, 0], endPos: [0, 0], tickDirection: 'negative', labelTransform: 'rotate(0)' }, this.labelStyle), (0, util_2.superStyleProps)(tickStyle, 'tick'), (0, util_2.superStyleProps)(labelStyle, 'label'), { data: this.labelData });
        var functionStyle = {
            tickFilter: function (datum, index, data) {
                if ((datum === null || datum === void 0 ? void 0 : datum.type) !== 'value')
                    return false;
                if (labelFilter)
                    return labelFilter(datum, datum.index, data.filter(function (d) { return d.type !== 'value'; }));
                return true;
            },
            labelFilter: function (datum, index, data) {
                if ((datum === null || datum === void 0 ? void 0 : datum.type) !== align)
                    return false;
                if (labelFilter)
                    return labelFilter(datum, datum.index, data.filter(function (d) { return d.type === align; }));
                return true;
            },
            labelFormatter: labelFormatter,
        };
        var finalLabelStyle = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, style), functionStyle), { labelOverlap: [{ type: 'hide' }] });
        this.label = container.maybeAppendByClassName(constant_2.CLASS_NAMES.label, function () { return new axis_1.Axis({ style: finalLabelStyle }); }).node();
        this.label.update(finalLabelStyle, false);
    };
    Object.defineProperty(Continuous.prototype, "labelAxisStyle", {
        get: function () {
            // @ts-ignore
            var _a = this.attributes, showTick = _a.showTick, labelDirection = _a.labelDirection, labelSpacing = _a.labelSpacing, definedTickLength = _a.tickLength;
            var ribbonSize = this.ribbonShape.size;
            var labelPosition = this.labelPosition;
            var labelFixedSpacing = this.labelFixedSpacing;
            var _b = tslib_1.__read([0, 0, 0], 3), offset = _b[0], spacing = _b[1], tickLength = _b[2];
            var internalVal = definedTickLength !== null && definedTickLength !== void 0 ? definedTickLength : ribbonSize;
            if (showTick) {
                tickLength = internalVal;
                spacing = labelFixedSpacing;
                if (labelDirection === 'positive') {
                    if (labelPosition === 'right') {
                        offset = internalVal;
                        tickLength = internalVal;
                    }
                    else if (labelPosition === 'bottom')
                        offset = tickLength;
                }
                else if (labelDirection === 'negative') {
                    if (labelPosition === 'top')
                        offset = ribbonSize;
                    else if (labelPosition === 'left')
                        offset = ribbonSize;
                }
            }
            else if (labelDirection === 'positive') {
                if (labelPosition === 'right')
                    spacing = internalVal;
                else if (labelPosition === 'bottom') {
                    offset = ribbonSize + labelFixedSpacing;
                    spacing = labelSpacing;
                }
            }
            else if (labelDirection === 'negative') {
                if (labelPosition === 'left')
                    spacing = labelSpacing;
                else if (labelPosition === 'top')
                    spacing = labelSpacing;
            }
            return { offset: offset, spacing: spacing, tickLength: tickLength };
        },
        enumerable: false,
        configurable: true
    });
    Continuous.prototype.adjustLabel = function () {
        var showLabel = this.attributes.showLabel;
        if (!showLabel)
            return;
        var _a = this.ribbonBBox, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        var _b = this.labelAxisStyle, axisOffset = _b.offset, axisSpacing = _b.spacing, axisTickLength = _b.tickLength;
        var _c = tslib_1.__read(this.ifHorizontal([
            [x, y + axisOffset],
            [x + width, y + axisOffset],
        ], [
            [x + axisOffset, y + height],
            [x + axisOffset, y],
        ]), 2), startPos = _c[0], endPos = _c[1];
        this.label.update({
            startPos: startPos,
            endPos: endPos,
            tickLength: axisTickLength,
            labelSpacing: axisSpacing,
        }, false);
    };
    Continuous.prototype.bindEvents = function () {
        this.style.cursor = 'pointer';
        // 绑定 drag 开始事件
        this.ribbon.on('pointerdown', this.onDragStart('ribbon'));
        this.ribbon.on('pointermove', this.onHovering);
        this.addEventListener('pointerout', this.hideIndicator);
    };
    Continuous.prototype.showIndicator = function (value, text) {
        if (text === void 0) { text = "".concat(value); }
        var showIndicator = this.attributes.showIndicator;
        if (!showIndicator || typeof value !== 'number') {
            this.hideIndicator();
            return;
        }
        var _a = this.range, min = _a.min, max = _a.max;
        var _b = this.ribbonBBox, x = _b.x, y = _b.y;
        var safeValue = (0, util_1.clamp)(value, min, max);
        var offset = this.getOffset(safeValue);
        var pos = this.ifHorizontal([offset + x, y], [x, offset + y]);
        this.indicator.update({
            x: pos[0],
            y: pos[1],
            position: this.ifHorizontal('top', 'left'),
            labelText: text,
        });
        (0, util_2.show)(this.indicator.node());
    };
    Continuous.prototype.hideIndicator = function () {
        (0, util_2.hide)(this.indicator.node());
    };
    Continuous.prototype.updateMouse = function () {
        if (this.attributes.slidable)
            this.style.cursor = 'grabbing';
    };
    Continuous.prototype.setSelection = function (start, end) {
        this.updateSelection(start, end);
    };
    Continuous.prototype.updateSelection = function (stVal, endVal, isOffset) {
        var _a;
        if (isOffset === void 0) { isOffset = false; }
        var _b = tslib_1.__read(this.selection, 2), currSt = _b[0], currEnd = _b[1];
        var _c = tslib_1.__read([stVal, endVal], 2), start = _c[0], end = _c[1];
        if (isOffset) {
            // 获取当前值
            start += currSt;
            end += currEnd;
        }
        // 值校验
        var _d = this.range, min = _d.min, max = _d.max;
        _a = tslib_1.__read((0, utils_2.getSafetySelections)([min, max], [start, end], this.selection), 2), start = _a[0], end = _a[1];
        this.update({ defaultValue: [start, end] });
        this.dispatchSelection();
    };
    Object.defineProperty(Continuous.prototype, "step", {
        get: function () {
            var _a = this.attributes.step, step = _a === void 0 ? 1 : _a;
            var _b = this.range, min = _b.min, max = _b.max;
            if ((0, util_1.isUndefined)(step))
                return (0, util_2.toPrecision)((max - min) * constant_2.STEP_RATIO, 0);
            return step;
        },
        enumerable: false,
        configurable: true
    });
    Continuous.prototype.getTickValue = function (value) {
        var _a = this.attributes, data = _a.data, block = _a.block;
        var min = this.range.min;
        if (block)
            return (0, utils_1.getNextTickValue)(data.map(function (_a) {
                var value = _a.value;
                return value;
            }), value).tick;
        return (0, utils_2.getStepValueByValue)(value, this.step, min);
    };
    /**
     * 事件触发的位置对应的value值
     */
    Continuous.prototype.getValueByCanvasPoint = function (e) {
        var _a = this.range, min = _a.min, max = _a.max;
        var _b = tslib_1.__read(this.ribbon.node().getPosition(), 2), x = _b[0], y = _b[1];
        var startPos = this.ifHorizontal(x, y);
        var currValue = this.ifHorizontal.apply(this, tslib_1.__spreadArray([], tslib_1.__read((0, util_2.getEventPos)(e)), false));
        var offset = currValue - startPos;
        var value = (0, util_1.clamp)(this.getOffset(offset, true), min, max);
        return value;
    };
    /** reverse: 屏幕偏移量 -> 值 */
    Continuous.prototype.getOffset = function (value, reverse) {
        if (reverse === void 0) { reverse = false; }
        var _a = this.range, min = _a.min, max = _a.max;
        var ribbonLen = this.ribbonShape.length;
        var scale = this.eventToOffsetScale;
        scale.update({ domain: [min, max], range: [0, ribbonLen] });
        if (reverse)
            return scale.invert(value);
        return scale.map(value);
    };
    Continuous.prototype.getRealSelection = function (range) {
        var max = this.range.max;
        var _a = tslib_1.__read(range, 2), start = _a[0], end = _a[1];
        return this.ifHorizontal([start, end], [max - end, max - start]);
    };
    Continuous.prototype.getRealValue = function (value) {
        var max = this.range.max;
        return this.ifHorizontal(value, max - value);
    };
    Continuous.prototype.dispatchSelection = function () {
        var selection = this.getRealSelection(this.selection);
        var evt = new g_1.CustomEvent('valuechange', {
            detail: {
                value: selection,
            },
        });
        this.dispatchEvent(evt);
    };
    Continuous.prototype.dispatchIndicated = function (value, range) {
        var _this = this;
        var max = this.range.max;
        var detail = this.ifHorizontal(function () {
            return {
                value: value,
                range: range,
            };
        }, function () {
            return {
                value: max - value,
                range: range ? _this.getRealSelection(range) : undefined,
            };
        });
        var evt = new g_1.CustomEvent('indicate', {
            detail: detail,
        });
        this.dispatchEvent(evt);
    };
    return Continuous;
}(core_1.Component));
exports.Continuous = Continuous;
//# sourceMappingURL=continuous.js.map