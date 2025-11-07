import { __assign, __extends, __read, __spreadArray } from "tslib";
import { Component } from '../../core';
import { Group, Rect } from '../../shapes';
import { deepAssign, parseSeriesAttr, subStyleProps } from '../../util';
import { Backward, ChartType, Forward, PlayPause, Reset, SelectionType, SpeedSelect, Split } from './icons';
var componentsMap = {
    reset: Reset,
    speed: SpeedSelect,
    backward: Backward,
    playPause: PlayPause,
    forward: Forward,
    selectionType: SelectionType,
    chartType: ChartType,
    split: Split,
};
var Controller = /** @class */ (function (_super) {
    __extends(Controller, _super);
    function Controller(options) {
        var _this = _super.call(this, deepAssign({}, Controller.defaultOptions, options)) || this;
        _this.background = _this.appendChild(new Rect({}));
        _this.functions = _this.appendChild(new Group({}));
        return _this;
    }
    Object.defineProperty(Controller.prototype, "padding", {
        get: function () {
            return parseSeriesAttr(this.attributes.padding);
        },
        enumerable: false,
        configurable: true
    });
    Controller.prototype.renderBackground = function () {
        var _a = this.style, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        var backgroundStyle = subStyleProps(this.attributes, 'background');
        this.background.attr(__assign({ x: x, y: y, width: width, height: height }, backgroundStyle));
    };
    Controller.prototype.renderFunctions = function () {
        var _this = this;
        var _a;
        var _b = this.attributes, functions = _b.functions, iconSize = _b.iconSize, iconSpacing = _b.iconSpacing, x = _b.x, y = _b.y, width = _b.width, height = _b.height, align = _b.align;
        var _c = __read(this.padding, 4), right = _c[1], left = _c[3];
        var components = functions.reduce(function (prev, curr) {
            if (prev.length && curr.length) {
                return prev.concat.apply(prev, __spreadArray(['split'], __read(curr), false));
            }
            return prev.concat.apply(prev, __spreadArray([], __read(curr), false));
        }, []);
        var componentsWidth = components.length * (iconSize + iconSpacing) - iconSpacing;
        var xOffset = {
            left: left + iconSize / 2,
            center: (width - componentsWidth) / 2 + iconSize / 2,
            right: width - componentsWidth - left - right + iconSize / 2,
        }[align] || 0;
        (_a = this.speedSelect) === null || _a === void 0 ? void 0 : _a.destroy();
        this.functions.removeChildren();
        components.forEach(function (name, index) {
            var _a;
            var Ctor = componentsMap[name];
            var style = {
                x: x + index * (iconSize + iconSpacing) + xOffset,
                y: y + height / 2,
                size: iconSize,
            };
            if (Ctor === SpeedSelect) {
                style.speed = _this.attributes.speed;
                style.onSelect = function (value) { return _this.handleFunctionChange(name, { value: value }); };
            }
            else if ([PlayPause, SelectionType, ChartType].includes(Ctor)) {
                style.onChange = function (value) { return _this.handleFunctionChange(name, { value: value }); };
                if (Ctor === PlayPause)
                    style.type = _this.attributes.state === 'play' ? 'pause' : 'play';
                if (Ctor === SelectionType)
                    style.type = _this.attributes.selectionType === 'range' ? 'value' : 'range';
                if (Ctor === ChartType)
                    style.type = _this.attributes.chartType === 'line' ? 'column' : 'line';
            }
            else {
                // IconBase
                style.onClick = function () { return _this.handleFunctionChange(name, { value: name }); };
            }
            if (Ctor === SpeedSelect) {
                // SpeedSelect 直接插入到 canvas
                var canvas = (_a = _this.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView;
                if (canvas) {
                    _this.speedSelect = new Ctor({ style: __assign(__assign({}, style), { zIndex: 100 }) });
                    canvas.appendChild(_this.speedSelect);
                }
            }
            else {
                _this.functions.appendChild(new Ctor({ style: style }));
            }
        });
    };
    Controller.prototype.disconnectedCallback = function () {
        var _a;
        _super.prototype.disconnectedCallback.call(this);
        (_a = this.speedSelect) === null || _a === void 0 ? void 0 : _a.destroy();
    };
    Controller.prototype.render = function () {
        this.renderBackground();
        this.renderFunctions();
    };
    Controller.prototype.handleFunctionChange = function (name, value) {
        var onChange = this.attributes.onChange;
        onChange === null || onChange === void 0 ? void 0 : onChange(name, value);
    };
    Controller.defaultOptions = {
        style: {
            x: 0,
            y: 0,
            width: 300,
            height: 40,
            padding: 0,
            align: 'center',
            iconSize: 25,
            iconSpacing: 0,
            speed: 1,
            state: 'pause',
            chartType: 'line',
            selectionType: 'range',
            backgroundFill: '#fbfdff',
            backgroundStroke: '#ebedf0',
            functions: [
                ['reset', 'speed'],
                ['backward', 'playPause', 'forward'],
                ['selectionType', 'chartType'],
            ],
        },
    };
    return Controller;
}(Component));
export { Controller };
//# sourceMappingURL=controller.js.map