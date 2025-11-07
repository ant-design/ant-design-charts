import { __assign, __extends, __read } from "tslib";
import { isNil } from '@antv/util';
import { Component } from '../../core';
import { Text } from '../../shapes';
import { maybeAppend, parseSeriesAttr, select, subStyleProps } from '../../util';
import { Marker } from '../marker';
function adjust(container, paddingLeft, paddingTop, align, baseline) {
    var bounds = container.getLocalBounds();
    var x = 0;
    var y = 0;
    if (align === 'start')
        x = paddingLeft;
    if (align === 'center')
        x = -bounds.halfExtents[0];
    if (align === 'end')
        x = -paddingLeft - bounds.halfExtents[0] * 2;
    if (baseline === 'top')
        y = paddingTop + bounds.halfExtents[1];
    if (baseline === 'middle')
        y = 0;
    if (baseline === 'bottom')
        y = paddingTop - bounds.halfExtents[1] * 2;
    container.setLocalPosition([x, y]);
}
function getTextPosition(markerShape, spacing) {
    // @ts-ignore
    var bounds = markerShape.getLocalBounds();
    return {
        x: bounds.halfExtents[0] ? bounds.max[0] + (spacing || 0) : markerShape.style.x,
        y: bounds.halfExtents[1] ? (bounds.min[1] + bounds.max[1]) / 2 : markerShape.style.y,
    };
}
/**
 * 带文本、图标的 Tag 组件，支持 iconfont 组件
 *
 * 组成元素：Marker + Text + BackgroundRect
 */
var Tag = /** @class */ (function (_super) {
    __extends(Tag, _super);
    function Tag(options) {
        return _super.call(this, options, {
            padding: 4,
            spacing: 4,
        }) || this;
    }
    Tag.prototype.render = function (attributes, container) {
        var _a = attributes.padding, padding = _a === void 0 ? 0 : _a, marker = attributes.marker, text = attributes.text, radius = attributes.radius, spacing = attributes.spacing, align = attributes.align, verticalAlign = attributes.verticalAlign;
        var labelStyle = subStyleProps(attributes, 'label');
        var backgroundStyle = subStyleProps(attributes, 'background');
        var _b = __read(parseSeriesAttr(padding), 4), pt = _b[0], pr = _b[1], pb = _b[2], pl = _b[3];
        var group = maybeAppend(container, '.tag-content', 'g')
            .attr('className', 'tag-content')
            .style('zIndex', 0)
            .node();
        var markerStyle = marker || { symbol: 'triangle', size: 0 };
        var markerShape = maybeAppend(group, '.tag-marker', function () { return new Marker({ style: markerStyle }); })
            .attr('className', 'tag-marker')
            .update(markerStyle)
            .node();
        var _c = getTextPosition(markerShape, spacing), x = _c.x, y = _c.y;
        select(group)
            .maybeAppendByClassName('tag-text', function () { return new Text(); })
            .styles(__assign(__assign({ fontSize: 12, text: isNil(text) ? '' : "".concat(text), x: x, y: y }, labelStyle), { textBaseline: 'middle' }))
            .call(function (selection) {
            // text 为空字符串或者 false 但 textShape 依然形成了体积
            if (!text)
                selection.remove();
        });
        adjust(group, pl, pt, align || 'start', verticalAlign || 'top');
        var bounds = group.getLocalBounds();
        select(container)
            .maybeAppendByClassName('tag-background', 'rect')
            .styles(__assign({ zIndex: -1, y: bounds.min[1] - pt, x: bounds.min[0] - pl, width: backgroundStyle !== null ? pl + pr + bounds.halfExtents[0] * 2 : 0, height: backgroundStyle !== null ? pt + pb + bounds.halfExtents[1] * 2 : 0, radius: radius !== null && radius !== void 0 ? radius : 2, fill: '#fafafa', stroke: '#d9d9d9', lineWidth: 1 }, backgroundStyle));
    };
    /**
     * 标签类型
     */
    Tag.tag = 'tag';
    return Tag;
}(Component));
export { Tag };
//# sourceMappingURL=index.js.map