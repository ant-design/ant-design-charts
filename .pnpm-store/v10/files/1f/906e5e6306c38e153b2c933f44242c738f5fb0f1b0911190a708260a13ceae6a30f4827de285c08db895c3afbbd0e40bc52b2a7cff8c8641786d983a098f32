import { __assign, __extends, __read } from "tslib";
import { deepMix, isNil, pick } from '@antv/util';
import { Component } from '../../core';
import { Text } from '../../shapes';
import { maybeAppend, parseSeriesAttr, subStyleProps } from '../../util';
import { Tag } from '../tag';
var Breadcrumb = /** @class */ (function (_super) {
    __extends(Breadcrumb, _super);
    /**
     *
     * @param options
     */
    function Breadcrumb(options) {
        return _super.call(this, deepMix({}, Breadcrumb.defaultOptions, options)) || this;
    }
    Breadcrumb.prototype.render = function (attributes, container) {
        var x = attributes.x, y = attributes.y, items = attributes.items, textStyle = attributes.textStyle, _a = attributes.padding, padding = _a === void 0 ? 0 : _a, width = attributes.width, separator = attributes.separator;
        var _b = __read(parseSeriesAttr(padding), 3), top = _b[0], right = _b[1], left = _b[2];
        var tagStyle = subStyleProps(attributes, 'tag');
        var selection = maybeAppend(container, '.container', 'g').styles({
            className: 'container',
            x: x + left,
            y: y + top,
        });
        var cursorX = 0;
        var cursorY = 0;
        selection.node().removeChildren();
        var _loop_1 = function (i) {
            var datum = items[i];
            var shape = new Tag({
                className: 'breadcrumb-item',
                style: __assign(__assign(__assign(__assign({ transform: "translate(".concat(cursorX, ", ").concat(cursorY, ")") }, tagStyle), { text: isNil(datum.text) ? datum.id : datum.text }), pick(datum, ['marker'])), { 
                    // 强制不需要背景
                    padding: 0 }),
            });
            selection.append(function () { return shape; });
            var bounds = shape.getLocalBounds();
            var shapeW = bounds.halfExtents[0] * 2;
            var shapeH = bounds.halfExtents[1] * 2;
            cursorX += shapeW;
            // todo 换行策略还需要考虑 分隔符
            if (!isNil(width)) {
                var avaliableWidth = width - right;
                if (cursorX > avaliableWidth) {
                    shape.attr({ transform: "translateY(".concat(cursorY + shapeH, ")") });
                    // 更新光标
                    cursorX = shapeW;
                    cursorY += shapeH;
                }
            }
            // 绑定事件
            this_1.bindInnerEvents(shape, datum);
            var _c = separator || {}, _d = _c.spacing, spacing = _d === void 0 ? 0 : _d, _e = _c.text, text = _e === void 0 ? '/' : _e, style = _c.style;
            // 最后一个分隔符，不需要渲染
            if (i !== items.length - 1) {
                var shape_1 = new Text({
                    className: "".concat(Breadcrumb.tag, "-separator"),
                    id: "".concat(Breadcrumb.tag, "-separator-").concat(i),
                    style: __assign(__assign({ x: cursorX + spacing, y: cursorY + shapeH / 2 }, style), { text: text, textAlign: 'end', textBaseline: 'middle' }),
                });
                selection.append(function () { return shape_1; });
                var bounds_1 = shape_1.getLocalBounds();
                cursorX += bounds_1.halfExtents[0] * 2 + spacing;
            }
        };
        var this_1 = this;
        for (var i = 0; i < items.length; i++) {
            _loop_1(i);
        }
    };
    /**
     * 组件更新
     * @param cfg
     */
    Breadcrumb.prototype.update = function (cfg) {
        this.attr(deepMix({}, this.attributes, cfg));
        this.render(this.attributes, this);
    };
    /**
     * 面包屑绑定事件
     * @param shape
     * @param item
     */
    Breadcrumb.prototype.bindInnerEvents = function (shape, item) {
        var _a = this.attributes, items = _a.items, onClick = _a.onClick;
        if (onClick) {
            shape.addEventListener('click', function () {
                onClick.call(shape, item.id, item, items);
            });
        }
    };
    /**
     * 标签类型
     */
    Breadcrumb.tag = 'breadcrumb';
    /**
     * 默认参数
     */
    Breadcrumb.defaultOptions = {
        style: {
            separator: {
                text: '/',
                style: {
                    fontSize: 14,
                    fill: 'rgba(0, 0, 0, 0.45)',
                },
                spacing: 8,
            },
            textStyle: {
                default: {
                    fontSize: 14,
                    fill: 'rgba(0, 0, 0, 0.45)',
                },
                active: {
                    fill: '#5468ff',
                    cursor: 'pointer',
                },
            },
            padding: [8, 8, 8, 8],
        },
    };
    return Breadcrumb;
}(Component));
export { Breadcrumb };
//# sourceMappingURL=index.js.map