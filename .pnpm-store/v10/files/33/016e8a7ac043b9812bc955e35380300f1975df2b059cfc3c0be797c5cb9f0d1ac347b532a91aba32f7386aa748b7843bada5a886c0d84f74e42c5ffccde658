import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import { ElementEvent } from '@antv/g';
import { Component } from '../../core';
import { Group } from '../../shapes';
import { BBox, classNames, hide, isHorizontal, parseSeriesAttr, renderExtDo, select, show, splitStyle, subStyleProps, } from '../../util';
import { DEFAULT_INDICATOR_STYLE_PROPS } from './constant';
var CLASS_NAMES = classNames({
    background: 'background',
    labelGroup: 'label-group',
    label: 'label',
}, 'indicator');
var Indicator = /** @class */ (function (_super) {
    __extends(Indicator, _super);
    function Indicator(options) {
        var _this = _super.call(this, options, DEFAULT_INDICATOR_STYLE_PROPS) || this;
        _this.point = [0, 0];
        _this.group = _this.appendChild(new Group({}));
        _this.isMutationObserved = true;
        return _this;
    }
    Indicator.prototype.renderBackground = function () {
        if (!this.label)
            return;
        var _a = this.attributes, position = _a.position, padding = _a.padding;
        var _b = __read(parseSeriesAttr(padding), 4), t = _b[0], r = _b[1], b = _b[2], l = _b[3];
        var _c = this.label.node().getLocalBounds(), min = _c.min, max = _c.max;
        var bbox = new BBox(min[0] - l, min[1] - t, max[0] + r - min[0] + l, max[1] + b - min[1] + t);
        var path = this.getPath(position, bbox);
        var style = subStyleProps(this.attributes, 'background');
        this.background = select(this.group)
            .maybeAppendByClassName(CLASS_NAMES.background, 'path')
            .styles(__assign(__assign({}, style), { d: path }));
        this.group.appendChild(this.label.node());
    };
    Indicator.prototype.renderLabel = function () {
        var _a = this.attributes, formatter = _a.formatter, labelText = _a.labelText;
        var style = subStyleProps(this.attributes, 'label');
        var _b = __read(splitStyle(style), 2), _c = _b[0], groupStyle = _b[1], rawText = _c.text, textStyle = __rest(_c, ["text"]);
        this.label = select(this.group).maybeAppendByClassName(CLASS_NAMES.labelGroup, 'g').styles(groupStyle);
        if (!labelText)
            return;
        var text = this.label
            .maybeAppendByClassName(CLASS_NAMES.label, function () { return renderExtDo(formatter(labelText)); })
            .style('text', formatter(labelText).toString());
        text.selectAll('text').styles(textStyle);
    };
    Indicator.prototype.adjustLayout = function () {
        var _a = __read(this.point, 2), dx = _a[0], dy = _a[1];
        var _b = this.attributes, x = _b.x, y = _b.y;
        this.group.attr('transform', "translate(".concat(x - dx, ", ").concat(y - dy, ")"));
    };
    Indicator.prototype.getPath = function (position, bbox) {
        var r = this.attributes.radius;
        var x = bbox.x, y = bbox.y, width = bbox.width, height = bbox.height;
        var pathArray = [
            // 0 开始路径
            ['M', x + r, y],
            // 1 上边线
            ['L', x + width - r, y],
            // 2 右上角圆弧
            ['A', r, r, 0, 0, 1, x + width, y + r],
            // 3 右边线
            ['L', x + width, y + height - r],
            // 4 右下角圆弧
            ['A', r, r, 0, 0, 1, x + width - r, y + height],
            // 5 下边线
            ['L', x + r, y + height],
            // 6 左下角圆弧
            ['A', r, r, 0, 0, 1, x, y + height - r],
            // 7 左边线
            ['L', x, y + r],
            // 8 左上角圆弧
            ['A', r, r, 0, 0, 1, x + r, y],
            // 9 关闭路径
            ['Z'],
        ];
        // 将 position 反方向的边线替换为带尖角的边线
        var revertPositionMap = { top: 4, right: 6, bottom: 0, left: 2 };
        var index = revertPositionMap[position];
        var newPath = this.createCorner([pathArray[index].slice(-2), pathArray[index + 1].slice(-2)]);
        // 替换
        pathArray.splice.apply(pathArray, __spreadArray([index + 1, 1], __read(newPath), false));
        pathArray[0][0] = 'M';
        return pathArray;
    };
    Indicator.prototype.createCorner = function (edge, size) {
        if (size === void 0) { size = 10; }
        // intrinsic parameter
        var cornerScale = 0.8;
        var isH = isHorizontal.apply(void 0, __spreadArray([], __read(edge), false));
        var _a = __read(edge, 2), _b = __read(_a[0], 2), x0 = _b[0], y0 = _b[1], _c = __read(_a[1], 2), x1 = _c[0], y1 = _c[1];
        var _d = __read(isH ? [x1 - x0, [x0, x1]] : [y1 - y0, [y0, y1]], 2), len = _d[0], _e = __read(_d[1], 2), b0 = _e[0], b1 = _e[1];
        var hL = len / 2;
        var sign = len / Math.abs(len);
        var cL = size * sign;
        var hCL = cL / 2;
        var cS = ((cL * Math.sqrt(3)) / 2) * cornerScale;
        var _f = __read([b0, b0 + hL - hCL, b0 + hL, b0 + hL + hCL, b1], 5), a0 = _f[0], a1 = _f[1], a2 = _f[2], a3 = _f[3], a4 = _f[4];
        if (isH) {
            this.point = [a2, y0 - cS];
            return [
                ['L', a0, y0],
                ['L', a1, y0],
                ['L', a2, y0 - cS],
                ['L', a3, y0],
                ['L', a4, y0],
            ];
        }
        this.point = [x0 + cS, a2];
        return [
            ['L', x0, a0],
            ['L', x0, a1],
            ['L', x0 + cS, a2],
            ['L', x0, a3],
            ['L', x0, a4],
        ];
    };
    Indicator.prototype.applyVisibility = function () {
        var visibility = this.attributes.visibility;
        if (visibility === 'hidden')
            hide(this);
        else
            show(this);
    };
    Indicator.prototype.bindEvents = function () {
        this.label.on(ElementEvent.BOUNDS_CHANGED, this.renderBackground);
    };
    Indicator.prototype.render = function () {
        this.renderLabel();
        this.renderBackground();
        this.adjustLayout();
        this.applyVisibility();
    };
    return Indicator;
}(Component));
export { Indicator };
//# sourceMappingURL=indicator.js.map