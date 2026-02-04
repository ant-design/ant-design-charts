"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Option = void 0;
var tslib_1 = require("tslib");
var core_1 = require("../../core");
var shapes_1 = require("../../shapes");
var util_1 = require("../../util");
var deep_assign_1 = require("../../util/deep-assign");
var Option = /** @class */ (function (_super) {
    tslib_1.__extends(Option, _super);
    function Option(options) {
        var _this = _super.call(this, (0, deep_assign_1.deepAssign)({}, Option.defaultOptions, options)) || this;
        _this.hoverColor = '#f5f5f5';
        _this.selectedColor = '#e6f7ff';
        _this.background = _this.appendChild(new shapes_1.Rect({}));
        _this.label = _this.background.appendChild(new shapes_1.Group({}));
        return _this;
    }
    Object.defineProperty(Option.prototype, "padding", {
        get: function () {
            return (0, util_1.parseSeriesAttr)(this.style.padding);
        },
        enumerable: false,
        configurable: true
    });
    Option.prototype.renderLabel = function () {
        var _a = this.style, label = _a.label, value = _a.value;
        var labelStyle = (0, util_1.subStyleProps)(this.attributes, 'label');
        (0, util_1.select)(this.label)
            .maybeAppend('.label', function () { return (0, util_1.renderExtDo)(label); })
            .attr('className', 'label')
            .styles(labelStyle);
        // bind data to label
        this.label.attr('__data__', value);
    };
    Option.prototype.renderBackground = function () {
        var labelBBox = this.label.getBBox();
        var _a = tslib_1.__read(this.padding, 4), top = _a[0], right = _a[1], bottom = _a[2], left = _a[3];
        var labelWidth = labelBBox.width, labelHeight = labelBBox.height;
        var backgroundWidth = labelWidth + left + right;
        var backgroundHeight = labelHeight + top + bottom;
        var backgroundStyle = (0, util_1.subStyleProps)(this.attributes, 'background');
        var _b = this.style, _c = _b.width, styleWidth = _c === void 0 ? 0 : _c, _d = _b.height, styleHeight = _d === void 0 ? 0 : _d, selected = _b.selected;
        this.background.attr(tslib_1.__assign(tslib_1.__assign({}, backgroundStyle), { width: Math.max(backgroundWidth, styleWidth), height: Math.max(backgroundHeight, styleHeight), fill: selected ? this.selectedColor : '#fff' }));
        // place label
        this.label.attr({ transform: "translate(".concat(left, ", ").concat((backgroundHeight - labelHeight) / 2, ")") });
    };
    Option.prototype.render = function () {
        this.renderLabel();
        this.renderBackground();
    };
    Option.prototype.bindEvents = function () {
        var _this = this;
        this.addEventListener('pointerenter', function () {
            if (_this.style.selected)
                return;
            _this.background.attr('fill', _this.hoverColor);
        });
        this.addEventListener('pointerleave', function () {
            if (_this.style.selected)
                return;
            _this.background.attr('fill', _this.style.backgroundFill);
        });
        var item = this;
        this.addEventListener('click', function () {
            var _a = _this.style, label = _a.label, value = _a.value, onClick = _a.onClick;
            onClick === null || onClick === void 0 ? void 0 : onClick(value, { label: label, value: value }, item);
        });
    };
    Option.defaultOptions = {
        style: {
            value: '',
            label: '',
            cursor: 'pointer',
        },
    };
    return Option;
}(core_1.Component));
exports.Option = Option;
//# sourceMappingURL=option.js.map