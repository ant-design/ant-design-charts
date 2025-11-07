"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var tslib_1 = require("tslib");
var util_1 = require("@antv/util");
var core_1 = require("../../core");
var util_2 = require("../../util");
var marker_1 = require("../marker");
var constant_1 = require("./constant");
var Button = /** @class */ (function (_super) {
    tslib_1.__extends(Button, _super);
    function Button(options) {
        var _this = _super.call(this, options, {
            cursor: 'pointer',
            padding: 10,
            size: 'middle',
            type: 'default',
            text: '',
            state: 'default',
            markerAlign: 'left',
            markerSpacing: 5,
            default: {
                buttonLineWidth: 1,
                buttonRadius: 5,
            },
            active: {},
        }) || this;
        _this.state = 'default';
        _this.clickEvents = function () {
            var _a = _this.attributes, onClick = _a.onClick, state = _a.state;
            // 点击事件
            if (state !== 'disabled')
                onClick === null || onClick === void 0 ? void 0 : onClick.call(_this, _this);
        };
        _this.mouseenterEvent = function () {
            var state = _this.attributes.state;
            if (state !== 'disabled') {
                _this.state = 'active';
                _this.render(_this.attributes, _this);
            }
        };
        _this.mouseleaveEvent = function () {
            var state = _this.attributes.state;
            _this.state = state;
            _this.render(_this.attributes, _this);
        };
        return _this;
    }
    Object.defineProperty(Button.prototype, "markerSize", {
        get: function () {
            var markerSymbol = this.attributes.markerSymbol;
            var markerStyle = this.getStyle('marker');
            var markerSize = !markerSymbol ? 0 : (markerStyle === null || markerStyle === void 0 ? void 0 : markerStyle.size) || 2;
            return markerSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "textAvailableWidth", {
        /* 获得文本可用宽度 */
        get: function () {
            var _a = this.attributes, markerSymbol = _a.markerSymbol, padding = _a.padding, ellipsis = _a.ellipsis, bWidth = _a.width, spacing = _a.markerSpacing;
            if (!ellipsis)
                return Infinity;
            /* 按钮总宽度 */
            var width = ((0, util_1.isUndefined)(bWidth) ? this.getStyle('button').width : bWidth);
            if (markerSymbol)
                return width - padding * 2 - spacing - this.markerSize;
            return width - padding * 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "buttonHeight", {
        get: function () {
            var height = this.attributes.height;
            if (height)
                return +height;
            return +this.getStyle('button').height;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 根据size、type属性生成实际渲染的属性
     */
    Button.prototype.getStyle = function (name) {
        var _a = this.attributes, size = _a.size, type = _a.type;
        var state = this.state;
        var mixedStyle = (0, util_1.deepMix)({}, constant_1.SIZE_STYLE[size], constant_1.TYPE_STYLE[type][state], this.attributes.default, this.attributes[state]);
        if (state === 'disabled') {
            // 从DISABLED_STYLE中pick中pick mixedStyle里已有的style
            Object.keys(mixedStyle).forEach(function (key) {
                if (key in constant_1.DISABLED_STYLE) {
                    // @ts-ignore
                    mixedStyle[key] = constant_1.DISABLED_STYLE[key];
                }
            });
            Object.keys(constant_1.DISABLED_STYLE.strict).forEach(function (key) {
                // @ts-ignore
                mixedStyle[key] = constant_1.DISABLED_STYLE.strict[key];
            });
            (0, util_1.deepMix)(mixedStyle, this.attributes.disabled || {});
        }
        return (0, util_2.subStyleProps)(mixedStyle, name);
    };
    // @todo 处理 markerAlign='right' 的场景. 方案: left marker & right marker 处理为两个 shape, 互相不干扰
    Button.prototype.render = function (attributes, container) {
        var _a = attributes.text, text = _a === void 0 ? '' : _a, _b = attributes.padding, padding = _b === void 0 ? 0 : _b, markerSymbol = attributes.markerSymbol, _c = attributes.markerSpacing, markerSpacing = _c === void 0 ? 0 : _c, _d = attributes.x, x = _d === void 0 ? 0 : _d, _e = attributes.y, y = _e === void 0 ? 0 : _e;
        container.attr({
            cursor: this.state === 'disabled' ? 'not-allowed' : 'pointer',
        });
        var _f = tslib_1.__read((0, util_2.parseSeriesAttr)(padding), 4), pt = _f[0], pr = _f[1], pb = _f[2], pl = _f[3];
        var height = this.buttonHeight;
        var markerStyle = this.getStyle('marker');
        var markerSize = this.markerSize;
        var style = tslib_1.__assign(tslib_1.__assign({}, markerStyle), { symbol: markerSymbol, x: x + pl + markerSize / 2, y: y + height / 2, size: markerSize });
        var markerShape = (0, util_2.maybeAppend)(container, '.marker', function () { return new marker_1.Marker({ className: 'marker', style: style }); })
            .update({ style: style })
            .node();
        var bounds = markerShape.getLocalBounds();
        var textStyle = this.getStyle('text');
        this.textShape = (0, util_2.maybeAppend)(container, '.text', 'text')
            .attr('className', 'text')
            .styles(tslib_1.__assign(tslib_1.__assign({ x: x + (markerSize ? bounds.max[0] + markerSpacing : pl), y: y + height / 2 }, textStyle), { text: text, textAlign: 'left', textBaseline: 'middle', wordWrap: true, wordWrapWidth: this.textAvailableWidth, maxLines: 1, textOverflow: '...' }))
            .node();
        var textBounds = this.textShape.getLocalBounds();
        var buttonStyle = this.getStyle('button');
        (0, util_2.select)(container)
            .maybeAppendByClassName('.background', 'rect')
            .styles(tslib_1.__assign(tslib_1.__assign({ zIndex: -1 }, buttonStyle), { x: x, y: y, height: height, width: pl + (markerSize ? markerSize + markerSpacing : 0) + textBounds.halfExtents[0] * 2 + pr }));
    };
    /**
     * 组件的更新
     */
    Button.prototype.update = function (attr) {
        if (attr === void 0) { attr = {}; }
        this.attr((0, util_1.deepMix)({}, this.attributes, attr));
        var state = this.attributes.state;
        // 更新状态
        this.state = state;
        this.render(this.attributes, this);
    };
    /** 更新状态 (不需要走 update) */
    Button.prototype.setState = function (state) {
        this.update({ state: state });
    };
    Button.prototype.hide = function () {
        // @ts-ignore
        this.style.visibility = 'hidden';
    };
    Button.prototype.show = function () {
        // @ts-ignore
        this.style.visibility = 'visible';
    };
    Button.prototype.bindEvents = function () {
        this.addEventListener('click', this.clickEvents);
        this.addEventListener('mouseenter', this.mouseenterEvent);
        this.addEventListener('mouseleave', this.mouseleaveEvent);
    };
    /**
     * 组件类型
     */
    Button.tag = 'button';
    return Button;
}(core_1.Component));
exports.Button = Button;
//# sourceMappingURL=index.js.map