"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartModeHandle = exports.TimeModeHandle = void 0;
var tslib_1 = require("tslib");
var core_1 = require("../../core");
var shapes_1 = require("../../shapes");
var util_1 = require("../../util");
var deep_assign_1 = require("../../util/deep-assign");
var TimeModeHandle = /** @class */ (function (_super) {
    tslib_1.__extends(TimeModeHandle, _super);
    function TimeModeHandle(options) {
        var _this = _super.call(this, (0, deep_assign_1.deepAssign)({}, TimeModeHandle.defaultOptions, options)) || this;
        _this.bindEvents();
        return _this;
    }
    TimeModeHandle.prototype.bindEvents = function () {
        var _this = this;
        this.addEventListener('mouseenter', function () {
            _this.attr('lineWidth', Math.ceil(+(_this.style.r || 0) / 2));
        });
        this.addEventListener('mouseleave', function () {
            _this.attr('lineWidth', 0);
        });
    };
    TimeModeHandle.defaultOptions = {
        style: {
            r: 5,
            fill: '#3f7cf7',
            lineWidth: 0,
            stroke: '#3f7cf7',
            strokeOpacity: 0.5,
            cursor: 'pointer',
        },
    };
    return TimeModeHandle;
}(shapes_1.Circle));
exports.TimeModeHandle = TimeModeHandle;
var ChartModeHandle = /** @class */ (function (_super) {
    tslib_1.__extends(ChartModeHandle, _super);
    function ChartModeHandle(options) {
        return _super.call(this, (0, deep_assign_1.deepAssign)({}, ChartModeHandle.defaultOptions, options)) || this;
    }
    ChartModeHandle.prototype.renderBackground = function () {
        var _a = this.attributes, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        var style = (0, util_1.subStyleProps)(this.attributes, 'background');
        (0, util_1.select)(this)
            .maybeAppend('background', 'rect')
            .attr('className', 'background')
            .styles(tslib_1.__assign({ x: x - width / 2, y: y - height / 2, width: width, height: height }, style));
    };
    ChartModeHandle.prototype.renderIcon = function () {
        var _a = this.attributes, x = _a.x, y = _a.y, iconSize = _a.iconSize;
        var style = (0, util_1.subStyleProps)(this.attributes, 'icon');
        var diffX = 1;
        var diffY = iconSize / 2;
        (0, util_1.select)(this)
            .maybeAppend('icon-left-line', 'line')
            .attr('className', 'icon-left-line')
            .styles(tslib_1.__assign({ x1: x - diffX, y1: y - diffY, x2: x - diffX, y2: y + diffY }, style));
        (0, util_1.select)(this)
            .maybeAppend('icon-right-line', 'line')
            .attr('className', 'icon-right-line')
            .styles(tslib_1.__assign({ x1: x + diffX, y1: y - diffY, x2: x + diffX, y2: y + diffY }, style));
    };
    ChartModeHandle.prototype.renderBorder = function () {
        var _a = this.attributes, xx = _a.x, y = _a.y, width = _a.width, height = _a.height, type = _a.type;
        var style = (0, util_1.subStyleProps)(this.attributes, 'border');
        var x = type === 'start' ? +width / 2 : -width / 2;
        (0, util_1.select)(this)
            .maybeAppend('border', 'line')
            .attr('className', 'border')
            .styles(tslib_1.__assign({ x1: x + xx, y1: y - height / 2, x2: x + xx, y2: y + height / 2 }, style));
    };
    ChartModeHandle.prototype.render = function () {
        this.renderBackground();
        this.renderIcon();
        this.renderBorder();
    };
    ChartModeHandle.defaultOptions = {
        style: {
            x: 0,
            y: 0,
            width: 10,
            height: 50,
            iconSize: 10,
            type: 'start',
            backgroundFill: '#fff',
            backgroundFillOpacity: 0.5,
            iconStroke: '#9a9a9a',
            iconLineWidth: 1,
            borderStroke: '#e8e8e8',
            borderLineWidth: 1,
        },
    };
    return ChartModeHandle;
}(core_1.Component));
exports.ChartModeHandle = ChartModeHandle;
//# sourceMappingURL=handle.js.map