"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
var tslib_1 = require("tslib");
var g_1 = require("@antv/g");
var core_1 = require("../../core");
var shapes_1 = require("../../shapes");
var util_1 = require("../../util");
var deep_assign_1 = require("../../util/deep-assign");
var option_1 = require("./option");
var Select = /** @class */ (function (_super) {
    tslib_1.__extends(Select, _super);
    function Select(options) {
        var _a, _b;
        var _this = _super.call(this, (0, deep_assign_1.deepAssign)({}, Select.defaultOptions, options)) || this;
        /** 当前 value */
        _this.currentValue = (_a = Select.defaultOptions.style) === null || _a === void 0 ? void 0 : _a.defaultValue;
        _this.isPointerInSelect = false;
        _this.select = _this.appendChild(new shapes_1.Rect({
            className: 'select',
            style: {
                cursor: 'pointer',
                width: 0,
                height: 0,
            },
        }));
        _this.dropdown = _this.appendChild(new shapes_1.Rect({
            className: 'dropdown',
        }));
        var defaultValue = _this.style.defaultValue;
        if (defaultValue && ((_b = _this.style.options) === null || _b === void 0 ? void 0 : _b.some(function (option) { return option.value === defaultValue; }))) {
            _this.currentValue = defaultValue;
        }
        return _this;
    }
    Select.prototype.setValue = function (value) {
        this.currentValue = value;
        this.render();
    };
    Select.prototype.getValue = function () {
        return this.currentValue;
    };
    Object.defineProperty(Select.prototype, "dropdownPadding", {
        get: function () {
            return (0, util_1.parseSeriesAttr)(this.style.dropdownPadding);
        },
        enumerable: false,
        configurable: true
    });
    Select.prototype.renderSelect = function () {
        var _this = this;
        var _a;
        var _b = this.style, x = _b.x, y = _b.y, width = _b.width, height = _b.height, bordered = _b.bordered, showDropdownIcon = _b.showDropdownIcon;
        var selectStyle = (0, util_1.subStyleProps)(this.attributes, 'select');
        var placeholderStyle = (0, util_1.subStyleProps)(this.attributes, 'placeholder');
        this.select.attr(tslib_1.__assign(tslib_1.__assign({ x: x, y: y, width: width, height: height }, selectStyle), { fill: '#fff', strokeWidth: bordered ? 1 : 0 }));
        var padding = this.dropdownPadding;
        // dropdown icon
        var iconSize = 10;
        if (showDropdownIcon) {
            (0, util_1.select)(this.select)
                .maybeAppend('.dropdown-icon', 'path')
                .style('d', 'M-5,-3.5 L0,3.5 L5,-3.5')
                .style('transform', "translate(".concat(x + width - iconSize - padding[1] - padding[3], ", ").concat(y + height / 2, ")"))
                .style('lineWidth', 1)
                .style('stroke', this.select.style.stroke);
        }
        var currentOption = (_a = this.style.options) === null || _a === void 0 ? void 0 : _a.find(function (option) { return option.value === _this.currentValue; });
        // placeholder
        var finalPlaceholderStyle = tslib_1.__assign({ x: x + padding[3] }, placeholderStyle);
        (0, util_1.select)(this.select)
            .selectAll('.placeholder')
            .data(!currentOption ? [1] : [])
            .join(function (enter) {
            return enter
                .append('text')
                .attr('className', 'placeholder')
                .styles(finalPlaceholderStyle)
                .style('y', function () {
                var bbox = this.getBBox();
                return y + (height - bbox.height) / 2;
            });
        }, function (update) { return update.styles(finalPlaceholderStyle); }, function (exit) { return exit.remove(); });
        // value
        var labelStyle = (0, util_1.subStyleProps)(this.attributes, 'optionLabel');
        var finalValueStyle = tslib_1.__assign({ x: x + padding[3] }, labelStyle);
        (0, util_1.select)(this.select)
            .selectAll('.value')
            .data(currentOption ? [currentOption] : [])
            .join(function (enter) {
            return enter
                .append(function (datum) { return (0, util_1.renderExtDo)(datum.label); })
                .attr('className', 'value')
                .styles(finalValueStyle)
                .style('y', function () {
                var bbox = this.getBBox();
                return y + (height - bbox.height) / 2;
            });
        }, function (update) { return update.styles(finalValueStyle); }, function (exit) { return exit.remove(); });
    };
    Select.prototype.renderDropdown = function () {
        var _this = this;
        var _a, _b;
        var _c = this.style, x = _c.x, y = _c.y, width = _c.width, height = _c.height, options = _c.options, onSelect = _c.onSelect, open = _c.open;
        var dropdownStyle = (0, util_1.subStyleProps)(this.attributes, 'dropdown');
        var optionStyle = (0, util_1.subStyleProps)(this.attributes, 'option');
        var padding = this.dropdownPadding;
        (0, util_1.select)(this.dropdown)
            .maybeAppend('.dropdown-container', 'g')
            .attr('className', 'dropdown-container')
            .selectAll('.dropdown-item')
            .data(options, function (datum) { return datum.value; })
            .join(function (enter) {
            return enter
                .append(function (datum) {
                return new option_1.Option({
                    className: 'dropdown-item',
                    style: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, datum), optionStyle), { width: width - padding[1] - padding[3], selected: datum.value === _this.currentValue, onClick: function (value, option, item) {
                            _this.setValue(value);
                            onSelect === null || onSelect === void 0 ? void 0 : onSelect(value, option, item);
                            _this.dispatchEvent(new g_1.CustomEvent('change', { detail: { value: value, option: option, item: item } }));
                            (0, util_1.hide)(_this.dropdown);
                        } }),
                });
            })
                .each(function (datum, i) {
                var _a;
                var nodes = (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.children;
                var accHeight = nodes.reduce(function (acc, curr, index) {
                    if (index < i) {
                        acc += curr.getBBox().height;
                    }
                    return acc;
                }, 0);
                // 设置偏移
                this.attr('transform', "translate(".concat(padding[3], ", ").concat(padding[0] + accHeight, ")"));
            });
        }, function (update) {
            return update.update(function (datum) {
                return { selected: datum.value === _this.currentValue };
            });
        }, function (exit) { return exit.remove(); });
        var bbox = (_b = (_a = this.dropdown.getElementsByClassName('dropdown-container')) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.getBBox();
        var spacing = dropdownStyle.spacing;
        this.dropdown.attr(tslib_1.__assign({ transform: "translate(".concat(x, ", ").concat(y + height + spacing, ")"), width: bbox.width + padding[1] + padding[3], height: bbox.height + padding[0] + padding[2] }, dropdownStyle));
        // 默认隐藏
        !open && (0, util_1.hide)(this.dropdown);
    };
    Select.prototype.render = function () {
        this.renderSelect();
        this.renderDropdown();
    };
    Select.prototype.bindEvents = function () {
        var _this = this;
        this.addEventListener('click', function (e) {
            e.stopPropagation();
        });
        this.select.addEventListener('click', function () {
            if (_this.dropdown.style.visibility === 'visible')
                (0, util_1.hide)(_this.dropdown);
            else {
                (0, util_1.show)(_this.dropdown);
            }
        });
        // mock blur
        this.addEventListener('pointerenter', function () {
            _this.isPointerInSelect = true;
        });
        this.addEventListener('pointerleave', function () {
            _this.isPointerInSelect = false;
        });
        document === null || document === void 0 ? void 0 : document.addEventListener('click', function () {
            if (!_this.isPointerInSelect) {
                (0, util_1.hide)(_this.dropdown);
            }
        });
    };
    Select.defaultOptions = {
        style: {
            x: 0,
            y: 0,
            width: 140,
            height: 32,
            options: [],
            bordered: true,
            defaultValue: '',
            selectRadius: 8,
            selectStroke: '#d9d9d9',
            showDropdownIcon: true,
            placeholderText: '请选择',
            placeholderFontSize: 12,
            placeholderTextBaseline: 'top',
            placeholderFill: '#c2c2c2',
            dropdownFill: '#fff',
            dropdownStroke: '#d9d9d9',
            dropdownRadius: 8,
            dropdownShadowBlur: 4,
            dropdownShadowColor: 'rgba(0, 0, 0, 0.08)',
            dropdownPadding: 8,
            dropdownSpacing: 10,
            optionPadding: [8, 12],
            optionFontSize: 12,
            optionTextBaseline: 'top',
            optionBackgroundFill: '#fff',
            optionBackgroundRadius: 4,
            optionLabelFontSize: 12,
            optionLabelTextBaseline: 'top',
        },
    };
    return Select;
}(core_1.Component));
exports.Select = Select;
//# sourceMappingURL=select.js.map