import { __extends, __read, __rest } from "tslib";
import { Component } from '../../../core';
import { BBox, classNames, ifShow, parsePosition, parseSeriesAttr, select, splitStyle } from '../../../util';
import { getLegendClassName } from '../utils/classname';
import { CLASSNAME_SUFFIX_MAP } from '../constant';
var CLASS_NAMES = classNames({
    text: 'text',
}, 'title');
/**
 * calculate the actual bbox of the element with title
 * @example a legend with width x, height y, but the real bbox is x1 < x, y1 < y
 */
export function getBBox(title, content) {
    var _a = title.attributes, position = _a.position, spacing = _a.spacing, inset = _a.inset, text = _a.text;
    var titleBBox = title.getBBox();
    var contentBBox = content.getBBox();
    var pos = parsePosition(position);
    var _b = __read(parseSeriesAttr(text ? spacing : 0), 4), spacingTop = _b[0], spacingRight = _b[1], spacingBottom = _b[2], spacingLeft = _b[3];
    var _c = __read(parseSeriesAttr(inset), 4), insetTop = _c[0], insetRight = _c[1], insetBottom = _c[2], insetLeft = _c[3];
    var _d = __read([spacingLeft + spacingRight, spacingTop + spacingBottom], 2), spacingWidth = _d[0], spacingHeight = _d[1];
    var _e = __read([insetLeft + insetRight, insetTop + insetBottom], 2), insetWidth = _e[0], insetHeight = _e[1];
    // 只基于第一个 pos 进行判断
    // 如果在左边或者上边，直接包围盒相加再加上间距
    if (pos[0] === 'l') {
        return new BBox(titleBBox.x, titleBBox.y, contentBBox.width + titleBBox.width + spacingWidth + insetWidth, Math.max(contentBBox.height + insetHeight, titleBBox.height));
    }
    if (pos[0] === 't') {
        return new BBox(titleBBox.x, titleBBox.y, Math.max(contentBBox.width + insetWidth, titleBBox.width), contentBBox.height + titleBBox.height + spacingHeight + insetHeight);
    }
    // 如果在右边或者下边，基于 content.width, content.height 相加再加上间距
    var _f = __read([
        content.attributes.width || contentBBox.width,
        content.attributes.height || contentBBox.height,
    ], 2), contentWidth = _f[0], contentHeight = _f[1];
    return new BBox(contentBBox.x, contentBBox.y, contentWidth + titleBBox.width + spacingWidth + insetWidth, contentHeight + titleBBox.height + spacingHeight + insetHeight);
}
function mayApplyStyle(el, style) {
    var finalStyle = Object.entries(style).reduce(function (acc, _a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        var currAttr = el.node().attr(key);
        if (!currAttr)
            acc[key] = value;
        return acc;
    }, {});
    el.styles(finalStyle);
}
function getTitleLayout(cfg) {
    var _a, _b, _c, _d;
    var _e = cfg, width = _e.width, height = _e.height, position = _e.position;
    var _f = __read([+width / 2, +height / 2], 2), hW = _f[0], hH = _f[1];
    var _g = __read([+hW, +hH, 'center', 'middle'], 4), x = _g[0], y = _g[1], textAlign = _g[2], textBaseline = _g[3];
    var pos = parsePosition(position);
    if (pos.includes('l'))
        _a = __read([0, 'start'], 2), x = _a[0], textAlign = _a[1];
    if (pos.includes('r'))
        _b = __read([+width, 'end'], 2), x = _b[0], textAlign = _b[1];
    if (pos.includes('t'))
        _c = __read([0, 'top'], 2), y = _c[0], textBaseline = _c[1];
    if (pos.includes('b'))
        _d = __read([+height, 'bottom'], 2), y = _d[0], textBaseline = _d[1];
    return { x: x, y: y, textAlign: textAlign, textBaseline: textBaseline };
}
var Title = /** @class */ (function (_super) {
    __extends(Title, _super);
    function Title(options) {
        return _super.call(this, options, {
            text: '',
            width: 0,
            height: 0,
            fill: '#4a505a',
            fontWeight: 'bold',
            fontSize: 12,
            fontFamily: 'sans-serif',
            inset: 0,
            spacing: 0,
            position: 'top-left',
        }) || this;
    }
    Title.prototype.getAvailableSpace = function () {
        var container = this;
        var _a = this.attributes, containerWidth = _a.width, containerHeight = _a.height, position = _a.position, spacing = _a.spacing, inset = _a.inset;
        var title = container.querySelector(CLASS_NAMES.text.class);
        if (!title)
            return new BBox(0, 0, +containerWidth, +containerHeight);
        var _b = title.getBBox(), titleWidth = _b.width, titleHeight = _b.height;
        var _c = __read(parseSeriesAttr(spacing), 4), spacingTop = _c[0], spacingRight = _c[1], spacingBottom = _c[2], spacingLeft = _c[3];
        var _d = __read([0, 0, +containerWidth, +containerHeight], 4), x = _d[0], y = _d[1], width = _d[2], height = _d[3];
        var pos = parsePosition(position);
        if (pos.includes('i'))
            return new BBox(x, y, width, height);
        pos.forEach(function (p, i) {
            var _a, _b, _c, _d;
            if (p === 't')
                _a = __read(i === 0
                    ? [titleHeight + spacingBottom, +containerHeight - titleHeight - spacingBottom]
                    : [0, +containerHeight], 2), y = _a[0], height = _a[1];
            if (p === 'r')
                _b = __read([+containerWidth - titleWidth - spacingLeft], 1), width = _b[0];
            if (p === 'b')
                _c = __read([+containerHeight - titleHeight - spacingTop], 1), height = _c[0];
            if (p === 'l')
                _d = __read(i === 0 ? [titleWidth + spacingRight, +containerWidth - titleWidth - spacingRight] : [0, +containerWidth], 2), x = _d[0], width = _d[1];
        });
        var _e = __read(parseSeriesAttr(inset), 4), insetTop = _e[0], insetRight = _e[1], insetBottom = _e[2], insetLeft = _e[3];
        var _f = __read([insetLeft + insetRight, insetTop + insetBottom], 2), insetWidth = _f[0], insetHeight = _f[1];
        return new BBox(x + insetLeft, y + insetTop, width - insetWidth, height - insetHeight);
    };
    Title.prototype.getBBox = function () {
        if (this.title)
            return this.title.getBBox();
        return new BBox(0, 0, 0, 0);
    };
    Title.prototype.render = function (attributes, container) {
        var _this = this;
        var width = attributes.width, height = attributes.height, position = attributes.position, spacing = attributes.spacing, classNamePrefix = attributes.classNamePrefix, restStyle = __rest(attributes, ["width", "height", "position", "spacing", "classNamePrefix"]);
        var _a = __read(splitStyle(restStyle), 1), titleStyle = _a[0];
        var _b = getTitleLayout(attributes), x = _b.x, y = _b.y, textAlign = _b.textAlign, textBaseline = _b.textBaseline;
        ifShow(!!restStyle.text, select(container), function (group) {
            var titleClassName = getLegendClassName(CLASS_NAMES.text.name, CLASSNAME_SUFFIX_MAP.title, classNamePrefix);
            _this.title = group
                .maybeAppendByClassName(CLASS_NAMES.text, 'text')
                .attr('className', titleClassName)
                .styles(titleStyle)
                .call(mayApplyStyle, { x: x, y: y, textAlign: textAlign, textBaseline: textBaseline })
                .node();
        });
    };
    return Title;
}(Component));
export { Title };
//# sourceMappingURL=index.js.map