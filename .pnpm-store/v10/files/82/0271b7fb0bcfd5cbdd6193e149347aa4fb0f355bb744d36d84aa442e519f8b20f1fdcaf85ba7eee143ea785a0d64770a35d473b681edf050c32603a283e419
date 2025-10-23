"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
var tslib_1 = require("tslib");
var util_1 = require("@antv/util");
var core_1 = require("../../core");
var util_2 = require("../../util");
var tag_1 = require("../tag");
var constant_1 = require("./constant");
// 开启颜色 默认
var OPTION_COLOR = '#1890FF';
// 关闭颜色 默认
var CLOSE_COLOR = '#00000040';
function getHandleShapeStyle(shape, spacing, checked) {
    if (spacing === void 0) { spacing = 0; }
    if (checked === void 0) { checked = true; }
    var size = Number(shape.style.height) - spacing * 2;
    return {
        x: checked ? Number(shape.style.width) + Number(shape.style.x) - spacing - size : Number(shape.style.x) + spacing,
        y: Number(shape.style.y) + spacing,
        width: size,
        height: size,
        radius: size / 2,
    };
}
function getTagShapeStyle(backgroundStyle, _a, spacing, checked) {
    var width = _a.width, height = _a.height;
    if (spacing === void 0) { spacing = 0; }
    if (checked === void 0) { checked = true; }
    return {
        x: checked
            ? Number(backgroundStyle.x) + spacing
            : Number(backgroundStyle.width) + Number(backgroundStyle.x) - width,
        y: Number(backgroundStyle.y) + (Number(backgroundStyle.height) - height) / 2,
    };
}
var Switch = /** @class */ (function (_super) {
    tslib_1.__extends(Switch, _super);
    function Switch(options) {
        return _super.call(this, options, {
            x: 0,
            y: 0,
            size: 'default',
            spacing: 2,
            checked: true,
            disabled: false,
        }) || this;
    }
    Switch.prototype.render = function (attributes, container) {
        var _this = this;
        var size = attributes.size, spacing = attributes.spacing, disabled = attributes.disabled, checked = attributes.checked, unCheckedChildren = attributes.unCheckedChildren, checkedChildren = attributes.checkedChildren;
        var group = (0, util_2.select)(container).maybeAppendByClassName('switch-content', 'g').node();
        var bounds = group.getLocalBounds();
        var _a = (0, util_1.get)(constant_1.SIZE_STYLE, size, constant_1.SIZE_STYLE.default), sizeStyle = _a.sizeStyle, tagStyle = _a.tagStyle;
        // 其他统一属性
        var cursor = disabled ? 'no-drop' : 'pointer';
        var color = checked ? OPTION_COLOR : CLOSE_COLOR;
        // 背景位置大小配置
        var backgroundStyle = sizeStyle;
        // Tag 配置, 创建
        var tagCfg = checked ? checkedChildren : unCheckedChildren;
        if (checkedChildren || unCheckedChildren) {
            (0, util_2.select)(group)
                .maybeAppendByClassName('switch-tag', function () { return new tag_1.Tag({}); })
                .call(function (selection) {
                var tagShape = selection.node();
                tagShape.update(tslib_1.__assign(tslib_1.__assign({ cursor: cursor, backgroundStyle: null, text: false, marker: false }, tagStyle), tagCfg));
                // 增加 整体宽度 需要对 tag 提前渲染获得 width 然后通过 width 计算 x 的位置
                // @ts-ignore
                var _a = (tagShape === null || tagShape === void 0 ? void 0 : tagShape.getLocalBounds()) || {}, max = _a.max, min = _a.min;
                var width = max[0] - min[0] + sizeStyle.radius;
                var height = max[1] - min[1];
                // 计算获得背景宽度
                var backgroundWidth = Math.max(width + sizeStyle.height + 2, sizeStyle.width);
                backgroundStyle = tslib_1.__assign(tslib_1.__assign({}, sizeStyle), { width: backgroundWidth });
                tagShape.update(getTagShapeStyle({
                    x: bounds.min[0],
                    y: bounds.min[1],
                    width: backgroundWidth,
                    height: backgroundStyle.height,
                }, { width: width, height: height }, backgroundStyle.radius, checked));
            });
        }
        // 背景 组件
        var backgroundShape = (0, util_2.select)(group)
            .maybeAppendByClassName('switch-background', 'rect')
            .styles(tslib_1.__assign({ zIndex: (group.style.zIndex || 0) - 1, x: bounds.min[0], y: bounds.min[1], fill: color, cursor: cursor, fillOpacity: disabled ? 0.4 : 1 }, backgroundStyle))
            .node();
        // 背景阴影动效 组件
        var backgroundStrokeShape = (0, util_2.select)(group)
            .maybeAppendByClassName('switch-background-stroke', 'rect')
            .styles(tslib_1.__assign({ zIndex: (group.style.zIndex || 0) - 2, x: bounds.min[0], y: bounds.min[1], stroke: color, lineWidth: 0 }, backgroundStyle))
            .node();
        // 控件 组件
        (0, util_2.select)(group)
            .maybeAppendByClassName('switch-handle', 'rect')
            .styles({
            fill: '#fff',
            cursor: cursor,
        })
            .call(function (selection) {
            var _a, _b;
            var handleShape = selection.node();
            // 动画添加 通过获取 开启 和 关闭的 x 来实现动画效果
            var newHandleShapeStyle = getHandleShapeStyle(backgroundShape, spacing, checked);
            var oldHandleShapeStyle = getHandleShapeStyle(backgroundShape, spacing, !checked);
            if (handleShape.attr('x') && !(0, util_1.isEqual)(newHandleShapeStyle, oldHandleShapeStyle) && _this.checked !== checked) {
                // 调整控件 和 tag 位置
                handleShape.attr(oldHandleShapeStyle);
                // 清理之前的动画
                (_a = handleShape.getAnimations()[0]) === null || _a === void 0 ? void 0 : _a.cancel();
                (_b = backgroundStrokeShape.getAnimations()[0]) === null || _b === void 0 ? void 0 : _b.cancel();
                // 控件组建变化添加动画 动画为 原 x -> 新 x
                handleShape.animate([{ x: oldHandleShapeStyle.x }, { x: newHandleShapeStyle.x }], {
                    duration: 120,
                    fill: 'both',
                });
                // 动效组件变化添加动画 动画为 由内向外的 渐淡扩散
                backgroundStrokeShape.animate([
                    { lineWidth: 0, strokeOpacity: 0.5 },
                    { lineWidth: 14, strokeOpacity: 0 },
                ], {
                    duration: 400,
                    easing: 'ease-on',
                });
            }
            else {
                handleShape.attr(newHandleShapeStyle);
            }
        });
        this.checked = !!checked;
    };
    /**
     * 组件 switch
     */
    Switch.tag = 'switch';
    return Switch;
}(core_1.Component));
exports.Switch = Switch;
//# sourceMappingURL=index.js.map