"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
var tslib_1 = require("tslib");
var core_1 = require("../../core");
var shapes_1 = require("../../shapes");
var util_1 = require("../../util");
var icons_1 = require("./icons");
var componentsMap = {
    reset: icons_1.Reset,
    speed: icons_1.SpeedSelect,
    backward: icons_1.Backward,
    playPause: icons_1.PlayPause,
    forward: icons_1.Forward,
    selectionType: icons_1.SelectionType,
    chartType: icons_1.ChartType,
    split: icons_1.Split,
};
var Controller = /** @class */ (function (_super) {
    tslib_1.__extends(Controller, _super);
    function Controller(options) {
        var _this = _super.call(this, (0, util_1.deepAssign)({}, Controller.defaultOptions, options)) || this;
        _this.background = _this.appendChild(new shapes_1.Rect({}));
        _this.functions = _this.appendChild(new shapes_1.Group({}));
        return _this;
    }
    Object.defineProperty(Controller.prototype, "padding", {
        get: function () {
            return (0, util_1.parseSeriesAttr)(this.attributes.padding);
        },
        enumerable: false,
        configurable: true
    });
    Controller.prototype.renderBackground = function () {
        var _a = this.style, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        var backgroundStyle = (0, util_1.subStyleProps)(this.attributes, 'background');
        this.background.attr(tslib_1.__assign({ x: x, y: y, width: width, height: height }, backgroundStyle));
    };
    Controller.prototype.renderFunctions = function () {
        var _this = this;
        var _a;
        var _b = this.attributes, functions = _b.functions, iconSize = _b.iconSize, iconSpacing = _b.iconSpacing, x = _b.x, y = _b.y, width = _b.width, height = _b.height, align = _b.align;
        var _c = tslib_1.__read(this.padding, 4), right = _c[1], left = _c[3];
        var components = functions.reduce(function (prev, curr) {
            if (prev.length && curr.length) {
                return prev.concat.apply(prev, tslib_1.__spreadArray(['split'], tslib_1.__read(curr), false));
            }
            return prev.concat.apply(prev, tslib_1.__spreadArray([], tslib_1.__read(curr), false));
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
            if (Ctor === icons_1.SpeedSelect) {
                style.speed = _this.attributes.speed;
                style.onSelect = function (value) { return _this.handleFunctionChange(name, { value: value }); };
            }
            else if ([icons_1.PlayPause, icons_1.SelectionType, icons_1.ChartType].includes(Ctor)) {
                style.onChange = function (value) { return _this.handleFunctionChange(name, { value: value }); };
                if (Ctor === icons_1.PlayPause)
                    style.type = _this.attributes.state === 'play' ? 'pause' : 'play';
                if (Ctor === icons_1.SelectionType)
                    style.type = _this.attributes.selectionType === 'range' ? 'value' : 'range';
                if (Ctor === icons_1.ChartType)
                    style.type = _this.attributes.chartType === 'line' ? 'column' : 'line';
            }
            else {
                // IconBase
                style.onClick = function () { return _this.handleFunctionChange(name, { value: name }); };
            }
            if (Ctor === icons_1.SpeedSelect) {
                // SpeedSelect 直接插入到 canvas
                var canvas = (_a = _this.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView;
                if (canvas) {
                    _this.speedSelect = new Ctor({ style: tslib_1.__assign(tslib_1.__assign({}, style), { zIndex: 100 }) });
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
}(core_1.Component));
exports.Controller = Controller;
//# sourceMappingURL=controller.js.map