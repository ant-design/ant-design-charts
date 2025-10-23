"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartType = exports.SelectionType = exports.PlayPause = exports.ToggleIcon = exports.SpeedSelect = exports.Split = exports.BarChart = exports.LineChart = exports.Value = exports.Range = exports.Pause = exports.Play = exports.Forward = exports.Backward = exports.Reset = exports.IconBase = void 0;
var tslib_1 = require("tslib");
var util_1 = require("@antv/util");
var core_1 = require("../../core");
var shapes_1 = require("../../shapes");
var util_2 = require("../../util");
var indicator_1 = require("../indicator");
var select_1 = require("../select");
var IconBase = /** @class */ (function (_super) {
    tslib_1.__extends(IconBase, _super);
    function IconBase(options) {
        var _this = _super.call(this, (0, util_2.deepAssign)({}, { style: { backgroundOpacity: IconBase.backgroundOpacities.default } }, IconBase.defaultOptions, options)) || this;
        /** hover 时是否显示背景 */
        _this.showBackground = true;
        _this.background = _this.appendChild(new shapes_1.Rect({}));
        _this.icon = _this.appendChild(new shapes_1.Group({}));
        return _this;
    }
    Object.defineProperty(IconBase.prototype, "label", {
        get: function () {
            return 'BaseIcon';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IconBase.prototype, "lineWidth", {
        get: function () {
            return Math.log10(this.attributes.size);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IconBase.prototype, "padding", {
        get: function () {
            return (0, util_2.parseSeriesAttr)(this.attributes.size / 5);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IconBase.prototype, "iconSize", {
        get: function () {
            var size = this.attributes.size;
            var _a = tslib_1.__read(this.padding, 4), top = _a[0], right = _a[1], bottom = _a[2], left = _a[3];
            return Math.max(size - Math.max(left + right, top + bottom), this.lineWidth * 2 + 1);
        },
        enumerable: false,
        configurable: true
    });
    IconBase.prototype.renderBackground = function () {
        var _a = this.attributes, x = _a.x, y = _a.y, size = _a.size;
        var halfSize = size / 2;
        var backgroundStyle = (0, util_2.subStyleProps)(this.attributes, 'background');
        this.background.attr(tslib_1.__assign({ x: x - halfSize, y: y - halfSize, width: size, height: size }, backgroundStyle));
    };
    IconBase.prototype.showIndicator = function () {
        if (!this.label)
            return;
        var size = this.attributes.size;
        var _a = this.background.getBBox(), x = _a.x, y = _a.y;
        this.indicator.update({ x: x + size / 2, y: y - 5, labelText: this.label, visibility: 'visible' });
    };
    IconBase.prototype.hideIndicator = function () {
        this.indicator.update({ visibility: 'hidden' });
    };
    IconBase.prototype.connectedCallback = function () {
        var _a;
        _super.prototype.connectedCallback.call(this);
        // indicator 脱离文档流，需要手动添加到 canvas
        var size = this.attributes.size;
        var _b = this.background.getBBox(), x = _b.x, y = _b.y;
        var canvas = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView;
        if (canvas) {
            this.indicator = canvas.appendChild(new indicator_1.Indicator({
                style: {
                    x: x + size / 2,
                    y: y - size / 2,
                    visibility: 'hidden',
                    position: 'top',
                    radius: 3,
                    zIndex: 100,
                },
            }));
        }
    };
    IconBase.prototype.disconnectedCallback = function () {
        this.indicator.destroy();
    };
    IconBase.prototype.render = function () {
        this.renderIcon();
        if (this.showBackground)
            this.renderBackground();
    };
    IconBase.prototype.bindEvents = function () {
        var _this = this;
        var onClick = this.attributes.onClick;
        this.addEventListener('click', function () {
            onClick === null || onClick === void 0 ? void 0 : onClick(_this);
        });
        if (this.showBackground) {
            var resetBackground_1 = function () { return _this.background.attr({ opacity: IconBase.backgroundOpacities.default }); };
            var hoverBackground_1 = function () { return _this.background.attr({ opacity: IconBase.backgroundOpacities.hover }); };
            var activeBackground_1 = function () { return _this.background.attr({ opacity: IconBase.backgroundOpacities.active }); };
            this.addEventListener('pointerenter', function () {
                hoverBackground_1();
                _this.showIndicator();
            });
            this.addEventListener('pointerleave', function () {
                resetBackground_1();
                _this.hideIndicator();
            });
            this.addEventListener('pointerdown', function () {
                activeBackground_1();
            });
            this.addEventListener('pointerup', function () {
                resetBackground_1();
            });
        }
    };
    IconBase.tag = 'IconBase';
    IconBase.defaultOptions = {
        style: {
            x: 0,
            y: 0,
            size: 10,
            color: '#565758',
            backgroundRadius: 4,
            backgroundFill: '#e2e2e2',
        },
    };
    IconBase.backgroundOpacities = {
        default: 0,
        hover: 0.8,
        active: 1,
    };
    return IconBase;
}(core_1.Component));
exports.IconBase = IconBase;
var arrow = function (size, color) {
    if (color === void 0) { color = '#565758'; }
    return new shapes_1.Path({
        style: {
            fill: color,
            d: "M ".concat(size, ",").concat(size, " L -").concat(size, ",0 L ").concat(size, ",-").concat(size, " Z"),
            transformOrigin: 'center',
        },
    });
};
/** 重置 */
var Reset = /** @class */ (function (_super) {
    tslib_1.__extends(Reset, _super);
    function Reset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Reset.prototype.arcPath = function (cx, cy, radius) {
        var _a = tslib_1.__read([radius, radius], 2), rx = _a[0], ry = _a[1];
        var getPosByAngle = function (angle) { return [cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)]; };
        var _b = tslib_1.__read(getPosByAngle((-5 / 4) * Math.PI), 2), x1 = _b[0], y1 = _b[1];
        var _c = tslib_1.__read(getPosByAngle((1 / 4) * Math.PI), 2), x2 = _c[0], y2 = _c[1];
        return "M".concat(x1, ",").concat(y1, ",A").concat(rx, ",").concat(ry, ",0,1,1,").concat(x2, ",").concat(y2);
    };
    Object.defineProperty(Reset.prototype, "label", {
        get: function () {
            return '重置';
        },
        enumerable: false,
        configurable: true
    });
    Reset.prototype.renderIcon = function () {
        var _a = this.attributes, x = _a.x, y = _a.y, color = _a.color;
        var size = this.iconSize;
        var lineWidth = this.lineWidth;
        var arrowSize = lineWidth + 0.5;
        (0, util_2.select)(this.icon)
            .maybeAppend('.reset', 'path')
            .styles({
            stroke: color,
            lineWidth: lineWidth,
            d: this.arcPath(x, y, size / 2 - lineWidth),
            markerStart: arrow(arrowSize, color),
        });
    };
    return Reset;
}(IconBase));
exports.Reset = Reset;
/** 快退 */
var Backward = /** @class */ (function (_super) {
    tslib_1.__extends(Backward, _super);
    function Backward() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Backward.prototype, "label", {
        get: function () {
            return '快退';
        },
        enumerable: false,
        configurable: true
    });
    Backward.prototype.renderIcon = function () {
        var _a = this.attributes, x = _a.x, y = _a.y, color = _a.color;
        var size = this.iconSize;
        var deltaX = size / 2;
        var deltaY = size / 2 / Math.pow(3, 0.5);
        var points = [
            [x, y],
            [x, y - deltaY],
            [x - deltaX, y],
            [x, y + deltaY],
            [x, y],
            [x + deltaX, y - deltaY],
            [x + deltaX, y + deltaY],
            [x, y],
        ];
        (0, util_2.select)(this.icon).maybeAppend('.backward', 'polygon').styles({
            points: points,
            fill: color,
        });
    };
    return Backward;
}(IconBase));
exports.Backward = Backward;
/** 快进 */
var Forward = /** @class */ (function (_super) {
    tslib_1.__extends(Forward, _super);
    function Forward() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Forward.prototype, "label", {
        get: function () {
            return '快进';
        },
        enumerable: false,
        configurable: true
    });
    Forward.prototype.renderIcon = function () {
        var _a = this.attributes, x = _a.x, y = _a.y, color = _a.color;
        var size = this.iconSize;
        var deltaX = size / 2;
        var deltaY = size / 2 / Math.pow(3, 0.5);
        var points = [
            [x, y],
            [x, y - deltaY],
            [x + deltaX, y],
            [x, y + deltaY],
            [x, y],
            [x - deltaX, y - deltaY],
            [x - deltaX, y + deltaY],
            [x, y],
        ];
        (0, util_2.select)(this.icon).maybeAppend('.forward', 'polygon').styles({
            points: points,
            fill: color,
        });
    };
    return Forward;
}(IconBase));
exports.Forward = Forward;
var Play = /** @class */ (function (_super) {
    tslib_1.__extends(Play, _super);
    function Play() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Play.prototype, "label", {
        get: function () {
            return '播放';
        },
        enumerable: false,
        configurable: true
    });
    Play.prototype.renderIcon = function () {
        var _a = this.attributes, x = _a.x, y = _a.y, color = _a.color;
        var size = this.iconSize;
        var deltaX = (size / 3) * Math.pow(3, 0.5) * 0.8;
        var points = [
            [x + deltaX, y],
            [x - deltaX / 2, y - (size / 2) * 0.8],
            [x - deltaX / 2, y + (size / 2) * 0.8],
            [x + deltaX, y],
        ];
        (0, util_2.select)(this.icon).maybeAppend('.play', 'polygon').styles({
            points: points,
            fill: color,
        });
    };
    return Play;
}(IconBase));
exports.Play = Play;
var Pause = /** @class */ (function (_super) {
    tslib_1.__extends(Pause, _super);
    function Pause() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Pause.prototype, "label", {
        get: function () {
            return '暂停';
        },
        enumerable: false,
        configurable: true
    });
    Pause.prototype.renderIcon = function () {
        var _a = this.attributes, x = _a.x, y = _a.y, color = _a.color;
        var size = this.iconSize;
        var deltaX = size / 3;
        var points = [
            [x - deltaX, y - size / 2],
            [x - deltaX, y + size / 2],
            [x - deltaX / 2, y + size / 2],
            [x - deltaX / 2, y - size / 2],
            [x - deltaX, y - size / 2],
            [x + deltaX / 2, y - size / 2],
            [x + deltaX / 2, y + size / 2],
            [x + deltaX, y + size / 2],
            [x + deltaX, y - size / 2],
        ];
        (0, util_2.select)(this.icon).maybeAppend('.pause', 'polygon').styles({
            points: points,
            fill: color,
        });
    };
    return Pause;
}(IconBase));
exports.Pause = Pause;
/** 时间范围 */
var Range = /** @class */ (function (_super) {
    tslib_1.__extends(Range, _super);
    function Range() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Range.prototype, "label", {
        get: function () {
            return '范围时间';
        },
        enumerable: false,
        configurable: true
    });
    Range.prototype.renderIcon = function () {
        var _a = this.attributes, x = _a.x, y = _a.y, color = _a.color;
        var _b = this, size = _b.iconSize, lineWidth = _b.lineWidth;
        var gap = lineWidth;
        (0, util_2.select)(this.icon)
            .maybeAppend('.left-line', 'line')
            .styles({
            x1: x - size / 2,
            y1: y - size / 2,
            x2: x - size / 2,
            y2: y + size / 2,
            stroke: color,
            lineWidth: lineWidth,
        });
        (0, util_2.select)(this.icon)
            .maybeAppend('.right-line', 'line')
            .styles({
            x1: x + size / 2,
            y1: y - size / 2,
            x2: x + size / 2,
            y2: y + size / 2,
            stroke: color,
            lineWidth: lineWidth,
        });
        (0, util_2.select)(this.icon)
            .maybeAppend('.left-arrow', 'line')
            .styles({
            x1: x,
            y1: y,
            x2: x - size / 2 + gap * 2,
            y2: y,
            stroke: color,
            lineWidth: lineWidth,
            markerEnd: arrow(lineWidth * 2, color),
        });
        (0, util_2.select)(this.icon)
            .maybeAppend('.right-arrow', 'line')
            .styles({
            x1: x,
            y1: y,
            x2: x + size / 2 - gap * 2,
            y2: y,
            stroke: color,
            lineWidth: lineWidth,
            markerEnd: arrow(lineWidth * 2, color),
        });
    };
    return Range;
}(IconBase));
exports.Range = Range;
/** 值范围 */
var Value = /** @class */ (function (_super) {
    tslib_1.__extends(Value, _super);
    function Value() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Value.prototype, "label", {
        get: function () {
            return '单一时间';
        },
        enumerable: false,
        configurable: true
    });
    Value.prototype.renderIcon = function () {
        var _a = this.attributes, x = _a.x, y = _a.y, color = _a.color;
        var _b = this, size = _b.iconSize, lineWidth = _b.lineWidth;
        (0, util_2.select)(this.icon)
            .maybeAppend('.line', 'line')
            .styles({
            x1: x,
            y1: y - size / 2,
            x2: x,
            y2: y + size / 2,
            stroke: color,
            lineWidth: lineWidth,
        });
        var gap = lineWidth;
        (0, util_2.select)(this.icon)
            .maybeAppend('.left-arrow', 'line')
            .styles({
            x1: x - size / 2 - gap * 2,
            y1: y,
            x2: x - gap * 2,
            y2: y,
            stroke: color,
            lineWidth: lineWidth,
            markerEnd: arrow(lineWidth * 2, color),
        });
        (0, util_2.select)(this.icon)
            .maybeAppend('.right-arrow', 'line')
            .styles({
            x1: x + size / 2 + gap * 2,
            y1: y,
            x2: x + gap * 2,
            y2: y,
            stroke: color,
            lineWidth: lineWidth,
            markerEnd: arrow(lineWidth * 2, color),
        });
    };
    return Value;
}(IconBase));
exports.Value = Value;
var getCoordinatePoints = function (size) {
    return [
        [-size / 2, -size / 2],
        [-size / 2, size / 2],
        [size / 2, size / 2],
    ];
};
var LineChart = /** @class */ (function (_super) {
    tslib_1.__extends(LineChart, _super);
    function LineChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(LineChart.prototype, "label", {
        get: function () {
            return '折线图';
        },
        enumerable: false,
        configurable: true
    });
    LineChart.prototype.renderIcon = function () {
        var _a = this.attributes, x = _a.x, y = _a.y, color = _a.color;
        var _b = this, size = _b.iconSize, lineWidth = _b.lineWidth;
        var gap = lineWidth;
        var deltaX = (size - gap * 2 - lineWidth) / 4;
        var deltaY = (size - gap * 2 - lineWidth) / 2;
        var _c = tslib_1.__read([x - size / 2 + gap, y + size / 2 - gap * 2], 2), ox = _c[0], oy = _c[1];
        (0, util_2.select)(this.icon)
            .maybeAppend('.coordinate', 'polyline')
            .styles({
            points: getCoordinatePoints(size).map(function (_a) {
                var _b = tslib_1.__read(_a, 2), px = _b[0], py = _b[1];
                return [px + x, py + y];
            }),
            stroke: color,
            lineWidth: lineWidth,
        });
        (0, util_2.select)(this.icon)
            .maybeAppend('.line', 'polyline')
            .styles({
            points: [
                [ox, oy],
                [ox + deltaX, oy - deltaY],
                [ox + deltaX * 2, oy],
                [ox + deltaX * 4, oy - deltaY * 2],
            ],
            stroke: color,
            lineWidth: lineWidth,
        });
    };
    return LineChart;
}(IconBase));
exports.LineChart = LineChart;
var BarChart = /** @class */ (function (_super) {
    tslib_1.__extends(BarChart, _super);
    function BarChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BarChart.prototype, "label", {
        get: function () {
            return '条形图';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarChart.prototype, "data", {
        get: function () {
            return [1, 4, 2, 4, 3];
        },
        enumerable: false,
        configurable: true
    });
    BarChart.prototype.renderIcon = function () {
        var data = this.data;
        var _a = this.attributes, x = _a.x, y = _a.y, color = _a.color;
        var _b = this, size = _b.iconSize, lineWidth = _b.lineWidth;
        var gap = lineWidth;
        var deltaX = (size - gap) / data.length;
        var deltaY = (size - gap * 2) / 4;
        var _c = tslib_1.__read([x - size / 2 + gap * 2, y + size / 2 - gap], 2), ox = _c[0], oy = _c[1];
        (0, util_2.select)(this.icon)
            .maybeAppend('.coordinate', 'polyline')
            .styles({
            points: getCoordinatePoints(size).map(function (_a) {
                var _b = tslib_1.__read(_a, 2), px = _b[0], py = _b[1];
                return [px + x, py + y];
            }),
            stroke: color,
            lineWidth: lineWidth,
        });
        (0, util_2.select)(this.icon)
            .maybeAppend('.bars', 'g')
            .selectAll('.column')
            .data(this.data.map(function (value, index) { return ({ value: value, index: index }); }))
            .join(function (enter) {
            return enter
                .append('line')
                .attr('className', 'column')
                .style('x1', function (_a) {
                var index = _a.index;
                return ox + deltaX * index;
            })
                .style('y1', oy)
                .style('x2', function (_a) {
                var index = _a.index;
                return ox + deltaX * index;
            })
                .style('y2', function (_a) {
                var value = _a.value;
                return oy - deltaY * value;
            })
                .styles({
                y1: oy,
                stroke: color,
                lineWidth: lineWidth,
            });
        });
    };
    return BarChart;
}(IconBase));
exports.BarChart = BarChart;
/** 分割线 */
var Split = /** @class */ (function (_super) {
    tslib_1.__extends(Split, _super);
    function Split(options) {
        var _this = _super.call(this, (0, util_2.deepAssign)({}, { style: { color: '#d8d9d9' } }, options)) || this;
        _this.showBackground = false;
        return _this;
    }
    Split.prototype.renderIcon = function () {
        var _a = this.attributes, x = _a.x, y = _a.y, color = _a.color;
        var _b = this, size = _b.iconSize, lineWidth = _b.lineWidth;
        (0, util_2.select)(this.icon)
            .maybeAppend('.split', 'line')
            .styles({
            x1: x,
            y1: y - size / 2,
            x2: x,
            y2: y + size / 2,
            stroke: color,
            lineWidth: lineWidth,
        });
    };
    return Split;
}(IconBase));
exports.Split = Split;
var SpeedSelect = /** @class */ (function (_super) {
    tslib_1.__extends(SpeedSelect, _super);
    function SpeedSelect() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.showBackground = false;
        return _this;
    }
    Object.defineProperty(SpeedSelect.prototype, "padding", {
        get: function () {
            return (0, util_2.parseSeriesAttr)(0);
        },
        enumerable: false,
        configurable: true
    });
    SpeedSelect.prototype.renderIcon = function () {
        var iconSize = this.iconSize;
        var _a = this.attributes, x = _a.x, y = _a.y, _b = _a.speed, speed = _b === void 0 ? 1 : _b;
        var inheritStyle = (0, util_1.omit)(this.attributes, [
            'x',
            'y',
            'transform',
            'transformOrigin',
            'width',
            'height',
            'size',
            'color',
            'speed',
        ]);
        var width = (0, util_1.clamp)(iconSize, 20, Infinity);
        var height = 20;
        var style = tslib_1.__assign(tslib_1.__assign({}, inheritStyle), { x: x - width / 2, y: y - height / 2, width: width, height: height, defaultValue: speed, bordered: false, showDropdownIcon: false, selectRadius: 2, dropdownPadding: this.padding, dropdownRadius: 2, dropdownSpacing: iconSize / 5, placeholderFontSize: iconSize / 2, optionPadding: 0, optionLabelFontSize: iconSize / 2, optionBackgroundRadius: 1, options: [
                { label: '1x', value: 1 },
                { label: '1.5x', value: 1.5 },
                { label: '2x', value: 2 },
            ] });
        (0, util_2.select)(this.icon)
            .maybeAppend('.speed', function () { return new select_1.Select({ style: style }); })
            .attr('className', 'speed')
            .each(function () {
            this.update(style);
        });
    };
    SpeedSelect.tag = 'SpeedSelect';
    return SpeedSelect;
}(IconBase));
exports.SpeedSelect = SpeedSelect;
var ToggleIcon = /** @class */ (function (_super) {
    tslib_1.__extends(ToggleIcon, _super);
    function ToggleIcon(options) {
        var _this = _super.call(this, options) || this;
        _this.icon = _this.appendChild(new shapes_1.Group({}));
        _this.currentType = _this.attributes.type;
        return _this;
    }
    ToggleIcon.prototype.getType = function () {
        return this.currentType;
    };
    ToggleIcon.prototype.render = function () {
        var _this = this;
        var _a = this.attributes, onChange = _a.onChange, restStyles = tslib_1.__rest(_a, ["onChange"]);
        (0, util_2.select)(this.icon)
            .selectAll('.icon')
            .data([this.currentType])
            .join(function (enter) {
            return enter
                .append(function (type) {
                var _a;
                var Ctor = (_a = _this.toggles.find(function (_a) {
                    var _b = tslib_1.__read(_a, 1), key = _b[0];
                    return key === type;
                })) === null || _a === void 0 ? void 0 : _a[1];
                if (!Ctor)
                    throw new Error("Invalid type: ".concat(type));
                return new Ctor({});
            })
                .attr('className', 'icon')
                .styles(restStyles, false)
                .update({});
        }, function (update) { return update.styles({ restStyles: restStyles }).update({}); }, function (exit) { return exit.remove(); });
    };
    ToggleIcon.prototype.bindEvents = function () {
        var _this = this;
        var onChange = this.attributes.onChange;
        this.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var nextIndex = (_this.toggles.findIndex(function (_a) {
                var _b = tslib_1.__read(_a, 1), key = _b[0];
                return key === _this.currentType;
            }) + 1) % _this.toggles.length;
            var nextType = _this.toggles[nextIndex][0];
            onChange === null || onChange === void 0 ? void 0 : onChange(_this.currentType);
            _this.currentType = nextType;
            _this.render();
        });
    };
    ToggleIcon.tag = 'ToggleIcon';
    return ToggleIcon;
}(core_1.Component));
exports.ToggleIcon = ToggleIcon;
var PlayPause = /** @class */ (function (_super) {
    tslib_1.__extends(PlayPause, _super);
    function PlayPause(options) {
        var _this = _super.call(this, (0, util_2.deepAssign)({}, { style: { type: 'play' } }, options)) || this;
        _this.toggles = [
            ['play', Play],
            ['pause', Pause],
        ];
        return _this;
    }
    return PlayPause;
}(ToggleIcon));
exports.PlayPause = PlayPause;
var SelectionType = /** @class */ (function (_super) {
    tslib_1.__extends(SelectionType, _super);
    function SelectionType(options) {
        var _this = _super.call(this, (0, util_2.deepAssign)({}, { style: { type: 'range' } }, options)) || this;
        _this.toggles = [
            ['range', Range],
            ['value', Value],
        ];
        return _this;
    }
    return SelectionType;
}(ToggleIcon));
exports.SelectionType = SelectionType;
var ChartType = /** @class */ (function (_super) {
    tslib_1.__extends(ChartType, _super);
    function ChartType(options) {
        var _this = _super.call(this, (0, util_2.deepAssign)({}, { style: { type: 'column' } }, options)) || this;
        _this.toggles = [
            ['line', LineChart],
            ['column', BarChart],
        ];
        return _this;
    }
    return ChartType;
}(ToggleIcon));
exports.ChartType = ChartType;
//# sourceMappingURL=icons.js.map