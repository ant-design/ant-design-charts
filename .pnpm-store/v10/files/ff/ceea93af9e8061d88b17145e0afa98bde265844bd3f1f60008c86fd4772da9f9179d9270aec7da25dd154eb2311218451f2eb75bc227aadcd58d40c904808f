import { __assign, __extends, __read } from "tslib";
import { CustomEvent } from '@antv/g';
import { clamp } from '@antv/util';
import { Component } from '../../core';
import { getEventPos, parseSeriesAttr, select, subStyleProps, superStyleProps } from '../../util';
import { Slider } from '../slider';
var Scrollbar = /** @class */ (function (_super) {
    __extends(Scrollbar, _super);
    function Scrollbar(options) {
        var _this = _super.call(this, options, {
            x: 0,
            y: 0,
            isRound: true,
            orientation: 'vertical',
            padding: [2, 2, 2, 2],
            scrollable: true,
            slidable: true,
            thumbCursor: 'default',
            trackSize: 10,
            value: 0,
        }) || this;
        _this.range = [0, 1];
        /**
         * 值改变事件
         */
        _this.onValueChange = function (oldValue) {
            var newValue = _this.attributes.value;
            if (oldValue === newValue)
                return;
            var evtVal = {
                detail: {
                    oldValue: oldValue,
                    value: newValue,
                },
            };
            _this.dispatchEvent(new CustomEvent('scroll', evtVal));
            _this.dispatchEvent(new CustomEvent('valuechange', evtVal));
        };
        /**
         * 点击轨道事件
         */
        _this.onTrackClick = function (e) {
            var slidable = _this.attributes.slidable;
            if (!slidable)
                return;
            var _a = __read(_this.getLocalPosition(), 2), x = _a[0], y = _a[1];
            var _b = __read(_this.padding, 4), top = _b[0], left = _b[3];
            var basePos = _this.getOrientVal([x + left, y + top]);
            var clickPos = _this.getOrientVal(getEventPos(e));
            var value = (clickPos - basePos) / _this.trackLength;
            _this.setValue(value, true);
        };
        _this.onThumbMouseenter = function (e) {
            _this.dispatchEvent(new CustomEvent('thumbMouseenter', { detail: e.detail }));
        };
        _this.onTrackMouseenter = function (e) {
            _this.dispatchEvent(new CustomEvent('trackMouseenter', { detail: e.detail }));
        };
        _this.onThumbMouseleave = function (e) {
            _this.dispatchEvent(new CustomEvent('thumbMouseleave', { detail: e.detail }));
        };
        _this.onTrackMouseleave = function (e) {
            _this.dispatchEvent(new CustomEvent('trackMouseleave', { detail: e.detail }));
        };
        return _this;
    }
    Object.defineProperty(Scrollbar.prototype, "padding", {
        get: function () {
            var padding = this.attributes.padding;
            return parseSeriesAttr(padding);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "value", {
        get: function () {
            var value = this.attributes.value;
            var _a = __read(this.range, 2), min = _a[0], max = _a[1];
            return clamp(value, min, max);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "trackLength", {
        get: function () {
            var _a = this.attributes, viewportLength = _a.viewportLength, _b = _a.trackLength, trackLength = _b === void 0 ? viewportLength : _b;
            return trackLength;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "availableSpace", {
        get: function () {
            var trackSize = this.attributes.trackSize;
            var trackLength = this.trackLength;
            var _a = __read(this.padding, 4), top = _a[0], right = _a[1], bottom = _a[2], left = _a[3];
            var _b = __read(this.getOrientVal([
                [trackLength, trackSize],
                [trackSize, trackLength],
            ]), 2), width = _b[0], height = _b[1];
            return {
                x: left,
                y: top,
                width: +width - (left + right),
                height: +height - (top + bottom),
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "trackRadius", {
        get: function () {
            var _a = this.attributes, isRound = _a.isRound, trackSize = _a.trackSize;
            if (!isRound)
                return 0;
            return trackSize / 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "thumbRadius", {
        get: function () {
            var _a = this.attributes, isRound = _a.isRound, thumbRadius = _a.thumbRadius;
            if (!isRound)
                return 0;
            var _b = this.availableSpace, width = _b.width, height = _b.height;
            return thumbRadius || this.getOrientVal([height, width]) / 2;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * accord to thumbLen and value, calculate the values of slider
     */
    Scrollbar.prototype.getValues = function (value) {
        if (value === void 0) { value = this.value; }
        var _a = this.attributes, viewportLength = _a.viewportLength, contentLength = _a.contentLength;
        var unit = viewportLength / contentLength;
        var _b = __read(this.range, 2), min = _b[0], max = _b[1];
        var start = value * (max - min - unit);
        return [start, start + unit];
    };
    Scrollbar.prototype.getValue = function () {
        return this.value;
    };
    Scrollbar.prototype.renderSlider = function (container) {
        var _a = this.attributes, x = _a.x, y = _a.y, orientation = _a.orientation, trackSize = _a.trackSize, padding = _a.padding, slidable = _a.slidable;
        var trackStyle = subStyleProps(this.attributes, 'track');
        var selectionStyle = subStyleProps(this.attributes, 'thumb');
        var style = __assign(__assign({ x: x, y: y, brushable: false, orientation: orientation, padding: padding, selectionRadius: this.thumbRadius, showHandle: false, slidable: slidable, trackLength: this.trackLength, trackRadius: this.trackRadius, trackSize: trackSize, values: this.getValues() }, superStyleProps(trackStyle, 'track')), superStyleProps(selectionStyle, 'selection'));
        this.slider = select(container)
            .maybeAppendByClassName('scrollbar', function () { return new Slider({ style: style }); })
            .update(style)
            .node();
    };
    Scrollbar.prototype.render = function (attributes, container) {
        this.renderSlider(container);
    };
    /**
     * 设置value
     * @param value 当前位置的占比
     */
    Scrollbar.prototype.setValue = function (value, animate) {
        if (animate === void 0) { animate = false; }
        var oldValue = this.attributes.value;
        var _a = __read(this.range, 2), min = _a[0], max = _a[1];
        this.slider.setValues(this.getValues(clamp(value, min, max)), animate);
        // 通知触发valueChange
        // todo 调用 setValue 不触发 valuechange
        this.onValueChange(oldValue);
    };
    Scrollbar.prototype.bindEvents = function () {
        var _this = this;
        this.slider.addEventListener('trackClick', function (e) {
            e.stopPropagation();
            _this.onTrackClick(e.detail);
        });
        this.onHover();
    };
    /**
     * 根据orient取出对应轴向上的值
     * 主要用于取鼠标坐标在orient方向上的位置
     */
    Scrollbar.prototype.getOrientVal = function (values) {
        var orientation = this.attributes.orientation;
        return orientation === 'horizontal' ? values[0] : values[1];
    };
    /**
     * 悬浮事件
     */
    Scrollbar.prototype.onHover = function () {
        this.slider.addEventListener('selectionMouseenter', this.onThumbMouseenter);
        this.slider.addEventListener('trackMouseenter', this.onTrackMouseenter);
        this.slider.addEventListener('selectionMouseleave', this.onThumbMouseleave);
        this.slider.addEventListener('trackMouseleave', this.onTrackMouseleave);
    };
    Scrollbar.tag = 'scrollbar';
    return Scrollbar;
}(Component));
export { Scrollbar };
//# sourceMappingURL=index.js.map