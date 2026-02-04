import { __assign, __extends, __read } from "tslib";
import { CustomEvent } from '@antv/g';
import { clamp } from '@antv/util';
import { transition } from '../../animation';
import { Component } from '../../core';
import { Text } from '../../shapes';
import { getEventViewportPos, ifShow, parseSeriesAttr, select, subStyleProps, superStyleProps, toPrecision, } from '../../util';
import { Sparkline } from '../sparkline';
import { CLASS_NAMES, HANDLE_DEFAULT_CFG, HANDLE_ICON_DEFAULT_CFG, HANDLE_LABEL_DEFAULT_CFG } from './constant';
import { Handle } from './handle';
var Slider = /** @class */ (function (_super) {
    __extends(Slider, _super);
    function Slider(options) {
        var _this = _super.call(this, options, __assign(__assign(__assign({ x: 0, y: 0, animate: { duration: 100, fill: 'both' }, brushable: true, formatter: function (val) { return val.toString(); }, handleSpacing: 2, orientation: 'horizontal', padding: 0, autoFitLabel: true, scrollable: true, selectionFill: '#5B8FF9', selectionFillOpacity: 0.45, selectionZIndex: 2, showHandle: true, showLabel: true, slidable: true, trackFill: '#416180', trackLength: 200, trackOpacity: 0.05, trackSize: 20, trackZIndex: -1, values: [0, 1], type: 'range', selectionType: 'select', handleIconOffset: 0 }, superStyleProps(HANDLE_DEFAULT_CFG, 'handle')), superStyleProps(HANDLE_ICON_DEFAULT_CFG, 'handleIcon')), superStyleProps(HANDLE_LABEL_DEFAULT_CFG, 'handleLabel'))) || this;
        _this.range = [0, 1];
        _this.onDragStart = function (target) { return function (e) {
            e.stopPropagation();
            _this.target = target;
            _this.prevPos = _this.getOrientVal(getEventViewportPos(e));
            var _a = _this.availableSpace, x = _a.x, y = _a.y;
            var _b = _this.getBBox(), X = _b.x, Y = _b.y;
            _this.selectionStartPos = _this.getRatio(_this.prevPos - _this.getOrientVal([x, y]) - _this.getOrientVal([+X, +Y]));
            _this.selectionWidth = 0;
            document.addEventListener('pointermove', _this.onDragging);
            document.addEventListener('pointerup', _this.onDragEnd);
        }; };
        _this.onDragging = function (e) {
            var _a = _this.attributes, slidable = _a.slidable, brushable = _a.brushable, type = _a.type;
            e.stopPropagation();
            var currPos = _this.getOrientVal(getEventViewportPos(e));
            var diffPos = currPos - _this.prevPos;
            if (!diffPos)
                return;
            var deltaVal = _this.getRatio(diffPos);
            switch (_this.target) {
                case 'start':
                    if (slidable)
                        _this.setValuesOffset(deltaVal);
                    break;
                case 'end':
                    if (slidable)
                        _this.setValuesOffset(0, deltaVal);
                    break;
                case 'selection':
                    if (slidable)
                        _this.setValuesOffset(deltaVal, deltaVal);
                    break;
                case 'track':
                    if (!brushable)
                        return;
                    // 绘制蒙板
                    _this.selectionWidth += deltaVal;
                    if (type === 'range') {
                        _this.innerSetValues([_this.selectionStartPos, _this.selectionStartPos + _this.selectionWidth].sort(), true);
                    }
                    else
                        _this.innerSetValues([0, _this.selectionStartPos + _this.selectionWidth], true);
                    break;
                default:
                    break;
            }
            _this.prevPos = currPos;
        };
        _this.onDragEnd = function () {
            document.removeEventListener('pointermove', _this.onDragging);
            document.removeEventListener('pointermove', _this.onDragging);
            document.removeEventListener('pointerup', _this.onDragEnd);
            _this.target = '';
            // 更新 handle 状态
            _this.updateHandlesPosition(false);
        };
        _this.onValueChange = function (oldValue) {
            var _a = _this.attributes, onChange = _a.onChange, type = _a.type;
            var internalOldValue = type === 'range' ? oldValue : oldValue[1];
            var value = type === 'range' ? _this.getValues() : _this.getValues()[1];
            var evt = new CustomEvent('valuechange', {
                detail: { oldValue: internalOldValue, value: value },
            });
            _this.dispatchEvent(evt);
            onChange === null || onChange === void 0 ? void 0 : onChange(value);
        };
        _this.selectionStartPos = 0;
        _this.selectionWidth = 0;
        _this.prevPos = 0;
        _this.target = '';
        return _this;
    }
    Object.defineProperty(Slider.prototype, "values", {
        get: function () {
            return this.attributes.values;
        },
        set: function (values) {
            this.attributes.values = this.clampValues(values);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "sparklineStyle", {
        get: function () {
            var orientation = this.attributes.orientation;
            if (orientation !== 'horizontal')
                return null;
            var attr = subStyleProps(this.attributes, 'sparkline');
            return __assign(__assign({ zIndex: 0 }, this.availableSpace), attr);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "shape", {
        get: function () {
            var _a = this.attributes, trackLength = _a.trackLength, trackSize = _a.trackSize;
            var _b = __read(this.getOrientVal([
                [trackLength, trackSize],
                [trackSize, trackLength],
            ]), 2), width = _b[0], height = _b[1];
            return { width: width, height: height };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "availableSpace", {
        get: function () {
            var _a = this.attributes, x = _a.x, y = _a.y, padding = _a.padding;
            var _b = __read(parseSeriesAttr(padding), 4), top = _b[0], right = _b[1], bottom = _b[2], left = _b[3];
            var _c = this.shape, width = _c.width, height = _c.height;
            return {
                x: left,
                y: top,
                width: width - (left + right),
                height: height - (top + bottom),
            };
        },
        enumerable: false,
        configurable: true
    });
    Slider.prototype.getValues = function () {
        return this.values;
    };
    /** 不触发重绘 */
    Slider.prototype.setValues = function (values, animate) {
        if (values === void 0) { values = [0, 0]; }
        if (animate === void 0) { animate = false; }
        this.attributes.values = values;
        var animation = animate === false ? false : this.attributes.animate;
        this.updateSelectionArea(animation);
        this.updateHandlesPosition(animation);
    };
    Slider.prototype.updateSelectionArea = function (animation) {
        var newSelectionArea = this.calcSelectionArea();
        this.foregroundGroup.selectAll(CLASS_NAMES.selection.class).each(function (datum, index) {
            transition(this, newSelectionArea[index], animation);
        });
    };
    Slider.prototype.updateHandlesPosition = function (animation) {
        if (!this.attributes.showHandle)
            return;
        this.startHandle && transition(this.startHandle, this.getHandleStyle('start'), animation);
        this.endHandle && transition(this.endHandle, this.getHandleStyle('end'), animation);
    };
    Slider.prototype.innerSetValues = function (values, trigger) {
        if (values === void 0) { values = [0, 0]; }
        if (trigger === void 0) { trigger = false; }
        var oldValues = this.values;
        var newValues = this.clampValues(values);
        this.attributes.values = newValues;
        this.setValues(newValues);
        if (trigger) {
            this.onValueChange(oldValues);
        }
    };
    Slider.prototype.renderTrack = function (container) {
        var _a = this.attributes, x = _a.x, y = _a.y;
        var style = subStyleProps(this.attributes, 'track');
        this.trackShape = select(container)
            .maybeAppendByClassName(CLASS_NAMES.track, 'rect')
            .styles(__assign(__assign({ x: x, y: y }, this.shape), style));
    };
    Slider.prototype.renderBrushArea = function (container) {
        var _a = this.attributes, x = _a.x, y = _a.y, brushable = _a.brushable;
        this.brushArea = select(container)
            .maybeAppendByClassName(CLASS_NAMES.brushArea, 'rect')
            .styles(__assign({ x: x, y: y, fill: 'transparent', cursor: brushable ? 'crosshair' : 'default' }, this.shape));
    };
    Slider.prototype.renderSparkline = function (container) {
        var _this = this;
        var _a = this.attributes, x = _a.x, y = _a.y, orientation = _a.orientation;
        var sparklineGroup = select(container).maybeAppendByClassName(CLASS_NAMES.sparklineGroup, 'g');
        ifShow(orientation === 'horizontal', sparklineGroup, function (group) {
            var style = __assign(__assign({}, _this.sparklineStyle), { x: x, y: y });
            group.maybeAppendByClassName(CLASS_NAMES.sparkline, function () { return new Sparkline({ style: style }); }).update(style);
        });
    };
    Slider.prototype.renderHandles = function () {
        var _this = this;
        var _a;
        var _b = this.attributes, showHandle = _b.showHandle, type = _b.type;
        var availableHandle = type === 'range' ? ['start', 'end'] : ['end'];
        var data = showHandle ? availableHandle : [];
        var that = this;
        (_a = this.foregroundGroup) === null || _a === void 0 ? void 0 : _a.selectAll(CLASS_NAMES.handle.class).data(data.map(function (type) { return ({ type: type }); }), function (d) { return d.type; }).join(function (enter) {
            return enter
                .append(function (_a) {
                var type = _a.type;
                return new Handle({ style: _this.getHandleStyle(type) });
            })
                .each(function (_a) {
                var type = _a.type;
                this.attr('class', "".concat(CLASS_NAMES.handle.name, " ").concat(type, "-handle"));
                var name = "".concat(type, "Handle");
                that[name] = this;
                this.addEventListener('pointerdown', that.onDragStart(type));
            });
        }, function (update) {
            return update.each(function (_a) {
                var type = _a.type;
                this.update(that.getHandleStyle(type));
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
    Slider.prototype.renderSelection = function (container) {
        var _a = this.attributes, x = _a.x, y = _a.y, type = _a.type, selectionType = _a.selectionType;
        this.foregroundGroup = select(container).maybeAppendByClassName(CLASS_NAMES.foreground, 'g');
        // value 类型的 slider 不渲染选区
        var selectionStyle = subStyleProps(this.attributes, 'selection');
        var applyStyle = function (selection) {
            return selection
                .style('visibility', function (d) { return (d.show ? 'visible' : 'hidden'); })
                .style('cursor', function (d) {
                if (selectionType === 'select')
                    return 'grab';
                if (selectionType === 'invert')
                    return 'crosshair';
                return 'default';
            })
                .styles(__assign(__assign({}, selectionStyle), { transform: "translate(".concat(x, ", ").concat(y, ")") }));
        };
        var that = this;
        this.foregroundGroup
            .selectAll(CLASS_NAMES.selection.class)
            .data(type === 'value'
            ? []
            : this.calcSelectionArea().map(function (area, index) { return ({
                style: __assign({}, area),
                index: index,
                // 是否可见
                show: selectionType === 'select' ? index === 1 : index !== 1,
            }); }), function (d) { return d.index; })
            .join(function (enter) {
            return enter
                .append('rect')
                .attr('className', CLASS_NAMES.selection.name)
                .call(applyStyle)
                .each(function (datum, index) {
                var _this = this;
                if (index === 1) {
                    that.selectionShape = select(this);
                    // 选区drag事件
                    this.on('pointerdown', function (e) {
                        _this.attr('cursor', 'grabbing');
                        that.onDragStart('selection')(e);
                    });
                    // 选区hover事件
                    that.dispatchCustomEvent(this, 'pointerenter', 'selectionMouseenter');
                    that.dispatchCustomEvent(this, 'pointerleave', 'selectionMouseleave');
                    that.dispatchCustomEvent(this, 'click', 'selectionClick');
                    // 拖拽交互
                    this.addEventListener('pointerdown', function () {
                        _this.attr('cursor', 'grabbing');
                    });
                    this.addEventListener('pointerup', function () {
                        _this.attr('cursor', 'pointer');
                    });
                    this.addEventListener('pointerover', function () {
                        _this.attr('cursor', 'pointer');
                    });
                }
                else {
                    this.on('pointerdown', that.onDragStart('track'));
                }
            });
        }, function (update) { return update.call(applyStyle); }, function (exit) { return exit.remove(); });
        this.updateSelectionArea(false);
        this.renderHandles();
    };
    Slider.prototype.render = function (attributes, container) {
        this.renderTrack(container);
        this.renderSparkline(container);
        this.renderBrushArea(container);
        this.renderSelection(container);
    };
    Slider.prototype.clampValues = function (values, precision) {
        var _a;
        if (precision === void 0) { precision = 4; }
        var _b = __read(this.range, 2), min = _b[0], max = _b[1];
        var _c = __read(this.getValues().map(function (num) { return toPrecision(num, precision); }), 2), prevStart = _c[0], prevEnd = _c[1];
        var internalValues = Array.isArray(values) ? values : [prevStart, values !== null && values !== void 0 ? values : prevEnd];
        var _d = __read((internalValues || [prevStart, prevEnd]).map(function (num) { return toPrecision(num, precision); }), 2), startVal = _d[0], endVal = _d[1];
        if (this.attributes.type === 'value')
            return [0, clamp(endVal, min, max)];
        // 交换startVal endVal
        if (startVal > endVal) {
            _a = __read([endVal, startVal], 2), startVal = _a[0], endVal = _a[1];
        }
        var range = endVal - startVal;
        // 超出范围就全选
        if (range > max - min)
            return [min, max];
        if (startVal < min) {
            if (prevStart === min && prevEnd === endVal)
                return [min, endVal];
            return [min, range + min];
        }
        if (endVal > max) {
            if (prevEnd === max && prevStart === startVal)
                return [startVal, max];
            return [max - range, max];
        }
        // 保留小数
        return [startVal, endVal];
    };
    /**
     * 计算选区坐标和宽高
     * 默认用来计算前景位置大小
     */
    Slider.prototype.calcSelectionArea = function (values) {
        var _a = __read(this.clampValues(values), 2), start = _a[0], end = _a[1];
        var _b = this.availableSpace, x = _b.x, y = _b.y, width = _b.width, height = _b.height;
        // 中间为选区，两端为反选区
        return this.getOrientVal([
            [
                { y: y, height: height, x: x, width: start * width },
                { y: y, height: height, x: start * width + x, width: (end - start) * width },
                { y: y, height: height, x: end * width, width: (1 - end) * width },
            ],
            [
                { x: x, width: width, y: y, height: start * height },
                { x: x, width: width, y: start * height + y, height: (end - start) * height },
                { x: x, width: width, y: end * height, height: (1 - end) * height },
            ],
        ]);
    };
    /**
     * 计算手柄的x y
     */
    Slider.prototype.calcHandlePosition = function (handleType) {
        var handleIconOffset = this.attributes.handleIconOffset;
        var _a = this.availableSpace, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        var _b = __read(this.clampValues(), 2), stVal = _b[0], endVal = _b[1];
        var offset = handleType === 'start' ? -handleIconOffset : handleIconOffset;
        var L = (handleType === 'start' ? stVal : endVal) * this.getOrientVal([width, height]) + offset;
        return {
            x: x + this.getOrientVal([L, width / 2]),
            y: y + this.getOrientVal([height / 2, L]),
        };
    };
    Slider.prototype.inferTextStyle = function (handleType) {
        var orientation = this.attributes.orientation;
        if (orientation === 'horizontal')
            return {};
        if (handleType === 'start')
            return { transformOrigin: 'left center', transform: 'rotate(90)', textAlign: 'start' };
        if (handleType === 'end')
            return { transformOrigin: 'right center', transform: 'rotate(90)', textAlign: 'end' };
        return {};
    };
    /**
     * 计算手柄应当处于的位置
     * @param handleType start手柄还是end手柄
     * @returns
     */
    Slider.prototype.calcHandleText = function (handleType) {
        var _a;
        var _b = this.attributes, type = _b.type, orientation = _b.orientation, formatter = _b.formatter, autoFitLabel = _b.autoFitLabel;
        var handleStyle = subStyleProps(this.attributes, 'handle');
        var labelStyle = subStyleProps(handleStyle, 'label');
        var spacing = handleStyle.spacing;
        var size = this.getHandleSize();
        var values = this.clampValues();
        var value = handleType === 'start' ? values[0] : values[1];
        var text = formatter(value);
        var temp = new Text({
            style: __assign(__assign(__assign({}, labelStyle), this.inferTextStyle(handleType)), { text: text }),
        });
        // 文字包围盒的宽高
        var _c = temp.getBBox(), textWidth = _c.width, textHeight = _c.height;
        temp.destroy();
        if (!autoFitLabel) {
            if (type === 'value')
                return { text: text, x: 0, y: -textHeight - spacing };
            var finaleWidth = spacing + size + (orientation === 'horizontal' ? textWidth / 2 : 0);
            return _a = { text: text }, _a[orientation === 'horizontal' ? 'x' : 'y'] = handleType === 'start' ? -finaleWidth : finaleWidth, _a;
        }
        var x = 0;
        var y = 0;
        // 相对于获取两端可用空间
        var _d = this.availableSpace, iW = _d.width, iH = _d.height;
        var _e = this.calcSelectionArea()[1], fX = _e.x, fY = _e.y, fW = _e.width, fH = _e.height;
        var totalSpacing = spacing + size;
        if (orientation === 'horizontal') {
            var finalWidth = totalSpacing + textWidth / 2;
            if (handleType === 'start') {
                var left = fX - totalSpacing - textWidth;
                x = left > 0 ? -finalWidth : finalWidth;
            }
            else {
                var sign = iW - fX - fW - totalSpacing > textWidth;
                x = sign ? finalWidth : -finalWidth;
            }
        }
        else {
            var positiveSize = totalSpacing;
            var negativeSize = textHeight + totalSpacing;
            if (handleType === 'start') {
                y = fY - size > textHeight ? -negativeSize : positiveSize;
            }
            else {
                y = iH - (fY + fH) - size > textHeight ? negativeSize : -positiveSize;
            }
        }
        return { x: x, y: y, text: text };
    };
    Slider.prototype.getHandleLabelStyle = function (handleType) {
        var style = subStyleProps(this.attributes, 'handleLabel');
        return __assign(__assign(__assign({}, style), this.calcHandleText(handleType)), this.inferTextStyle(handleType));
    };
    Slider.prototype.getHandleIconStyle = function () {
        var shape = this.attributes.handleIconShape;
        var style = subStyleProps(this.attributes, 'handleIcon');
        var cursor = this.getOrientVal(['ew-resize', 'ns-resize']);
        var size = this.getHandleSize();
        return __assign({ cursor: cursor, shape: shape, size: size }, style);
    };
    Slider.prototype.getHandleStyle = function (handleType) {
        var _a = this.attributes, ox = _a.x, oy = _a.y, showLabel = _a.showLabel, showLabelOnInteraction = _a.showLabelOnInteraction, orientation = _a.orientation;
        var _b = this.calcHandlePosition(handleType), x = _b.x, y = _b.y;
        var textStyle = this.calcHandleText(handleType);
        var internalShowLabel = showLabel;
        if (!showLabel && showLabelOnInteraction) {
            if (this.target)
                internalShowLabel = true;
            else
                internalShowLabel = false;
        }
        return __assign(__assign(__assign({}, superStyleProps(this.getHandleIconStyle(), 'icon')), superStyleProps(__assign(__assign({}, this.getHandleLabelStyle(handleType)), textStyle), 'label')), { transform: "translate(".concat(x + ox, ", ").concat(y + oy, ")"), orientation: orientation, showLabel: internalShowLabel, type: handleType, zIndex: 3 });
    };
    Slider.prototype.getHandleSize = function () {
        var _a = this.attributes, size = _a.handleIconSize, width = _a.width, height = _a.height;
        if (size)
            return size;
        // 没设置 size 的话，高度就取 height + 4 高度，手柄宽度是高度的 1/ 2.4
        return Math.floor((this.getOrientVal([+height, +width]) + 4) / 2.4);
    };
    Slider.prototype.getOrientVal = function (_a) {
        var _b = __read(_a, 2), x = _b[0], y = _b[1];
        var orientation = this.attributes.orientation;
        return orientation === 'horizontal' ? x : y;
    };
    Slider.prototype.setValuesOffset = function (stOffset, endOffset) {
        if (endOffset === void 0) { endOffset = 0; }
        var type = this.attributes.type;
        var _a = __read(this.getValues(), 2), oldStartVal = _a[0], oldEndVal = _a[1];
        var internalStartOffset = type === 'range' ? stOffset : 0;
        var values = [oldStartVal + internalStartOffset, oldEndVal + endOffset].sort();
        this.innerSetValues(values, true);
    };
    Slider.prototype.getRatio = function (val) {
        var _a = this.availableSpace, width = _a.width, height = _a.height;
        return val / this.getOrientVal([width, height]);
    };
    Slider.prototype.dispatchCustomEvent = function (target, event, name) {
        var _this = this;
        target.on(event, function (e) {
            e.stopPropagation();
            _this.dispatchEvent(new CustomEvent(name, { detail: e }));
        });
    };
    Slider.prototype.bindEvents = function () {
        // scroll 事件
        this.addEventListener('wheel', this.onScroll);
        var brushArea = this.brushArea;
        this.dispatchCustomEvent(brushArea, 'click', 'trackClick');
        this.dispatchCustomEvent(brushArea, 'pointerenter', 'trackMouseenter');
        this.dispatchCustomEvent(brushArea, 'pointerleave', 'trackMouseleave');
        // Drag and brush
        brushArea.on('pointerdown', this.onDragStart('track'));
    };
    Slider.prototype.onScroll = function (event) {
        var scrollable = this.attributes.scrollable;
        if (scrollable) {
            var deltaX = event.deltaX, deltaY = event.deltaY;
            var offset = deltaY || deltaX;
            var deltaVal = this.getRatio(offset);
            this.setValuesOffset(deltaVal, deltaVal);
        }
    };
    Slider.tag = 'slider';
    return Slider;
}(Component));
export { Slider };
//# sourceMappingURL=index.js.map