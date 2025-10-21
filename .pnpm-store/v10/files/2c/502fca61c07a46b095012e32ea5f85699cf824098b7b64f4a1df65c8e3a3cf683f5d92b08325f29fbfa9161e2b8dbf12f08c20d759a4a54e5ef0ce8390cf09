import { __read, __spreadArray } from "tslib";
import { get } from '@antv/util';
import { transition } from '../../../animation';
import { degToRad, keyframeInterpolate, omit, renderExtDo, scaleToPixel, subStyleProps, } from '../../../util';
import { CLASS_NAMES } from '../constant';
import { getLineAngle, getLineTangentVector } from './utils';
export function getLinearValuePos(value, attr) {
    var _a = __read(attr.startPos, 2), sx = _a[0], sy = _a[1], _b = __read(attr.endPos, 2), ex = _b[0], ey = _b[1];
    var _c = __read([ex - sx, ey - sy], 2), dx = _c[0], dy = _c[1];
    return [sx + dx * value, sy + dy * value];
}
export function getArcValuePos(value, attr) {
    var radius = attr.radius, _a = __read(attr.center, 2), cx = _a[0], cy = _a[1];
    var angle = degToRad(getLineAngle(value, attr));
    return [cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)];
}
export function getValuePos(value, attr) {
    if (attr.type === 'linear')
        return getLinearValuePos(value, attr);
    return getArcValuePos(value, attr);
}
export function isAxisHorizontal(attr) {
    return getLineTangentVector(0, attr)[1] === 0;
}
export function isAxisVertical(attr) {
    return getLineTangentVector(0, attr)[0] === 0;
}
function isCircle(startAngle, endAngle) {
    return endAngle - startAngle === 360;
}
function getArcPath(startAngle, endAngle, cx, cy, radius) {
    var diffAngle = endAngle - startAngle;
    var _a = __read([radius, radius], 2), rx = _a[0], ry = _a[1];
    var _b = __read([degToRad(startAngle), degToRad(endAngle)], 2), startAngleRadians = _b[0], endAngleRadians = _b[1];
    var getPosByAngle = function (angle) { return [cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)]; };
    var _c = __read(getPosByAngle(startAngleRadians), 2), x1 = _c[0], y1 = _c[1];
    var _d = __read(getPosByAngle(endAngleRadians), 2), x2 = _d[0], y2 = _d[1];
    if (isCircle(startAngle, endAngle)) {
        var middleAngleRadians = (endAngleRadians + startAngleRadians) / 2;
        var _e = __read(getPosByAngle(middleAngleRadians), 2), xm = _e[0], ym = _e[1];
        return [
            ['M', x1, y1],
            ['A', rx, ry, 0, 1, 0, xm, ym],
            ['A', rx, ry, 0, 1, 0, x2, y2],
        ];
    }
    // 大小弧
    var large = diffAngle > 180 ? 1 : 0;
    // 1-顺时针 0-逆时针
    var sweep = startAngle > endAngle ? 0 : 1;
    var isClosePath = false;
    return isClosePath
        ? "M".concat(cx, ",").concat(cy, ",L").concat(x1, ",").concat(y1, ",A").concat(rx, ",").concat(ry, ",0,").concat(large, ",").concat(sweep, ",").concat(x2, ",").concat(y2, ",L").concat(cx, ",").concat(cy)
        : "M".concat(x1, ",").concat(y1, ",A").concat(rx, ",").concat(ry, ",0,").concat(large, ",").concat(sweep, ",").concat(x2, ",").concat(y2);
}
function getArcAttr(arc) {
    var _a = arc.attributes, startAngle = _a.startAngle, endAngle = _a.endAngle, center = _a.center, radius = _a.radius;
    return __spreadArray(__spreadArray([startAngle, endAngle], __read(center), false), [radius], false);
}
function renderArc(container, attr, style, animate) {
    var startAngle = attr.startAngle, endAngle = attr.endAngle, center = attr.center, radius = attr.radius;
    return container
        .selectAll(CLASS_NAMES.line.class)
        .data([{ d: getArcPath.apply(void 0, __spreadArray(__spreadArray([startAngle, endAngle], __read(center), false), [radius], false)) }], function (d, i) { return i; })
        .join(function (enter) {
        return enter
            .append('path')
            .attr('className', CLASS_NAMES.line.name)
            .styles(attr)
            .styles({ d: function (d) { return d.d; } });
    }, function (update) {
        return update
            .transition(function () {
            var _this = this;
            var animation = keyframeInterpolate(this, getArcAttr(this), __spreadArray(__spreadArray([startAngle, endAngle], __read(center), false), [radius], false), animate.update);
            if (animation) {
                var layout = function () {
                    var data = get(_this.attributes, '__keyframe_data__');
                    _this.style.d = getArcPath.apply(void 0, __spreadArray([], __read(data), false));
                };
                animation.onframe = layout;
                animation.onfinish = layout;
            }
            return animation;
        })
            .styles(attr);
    }, function (exit) { return exit.remove(); })
        .styles(style)
        .transitions();
}
function renderTruncation(container, _a) {
    var truncRange = _a.truncRange, truncShape = _a.truncShape, lineExtension = _a.lineExtension;
    // TODO
}
function extendLine(startPos, endPos, range) {
    if (range === void 0) { range = [0, 0]; }
    var _a = __read([startPos, endPos, range], 3), _b = __read(_a[0], 2), x1 = _b[0], y1 = _b[1], _c = __read(_a[1], 2), x2 = _c[0], y2 = _c[1], _d = __read(_a[2], 2), l1 = _d[0], l2 = _d[1];
    var _e = __read([x2 - x1, y2 - y1], 2), x = _e[0], y = _e[1];
    var L = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    var _f = __read([-l1 / L, l2 / L], 2), s1 = _f[0], s2 = _f[1];
    return [s1 * x, s1 * y, s2 * x, s2 * y];
}
function getLinePath(points) {
    var _a = __read(points, 2), _b = __read(_a[0], 2), x1 = _b[0], y1 = _b[1], _c = __read(_a[1], 2), x2 = _c[0], y2 = _c[1];
    return { x1: x1, y1: y1, x2: x2, y2: y2 };
}
function renderLinear(container, attr, style, animate) {
    var showTrunc = attr.showTrunc, startPos = attr.startPos, endPos = attr.endPos, truncRange = attr.truncRange, lineExtension = attr.lineExtension;
    var _a = __read([startPos, endPos], 2), _b = __read(_a[0], 2), x1 = _b[0], y1 = _b[1], _c = __read(_a[1], 2), x2 = _c[0], y2 = _c[1];
    var _d = __read(lineExtension ? extendLine(startPos, endPos, lineExtension) : new Array(4).fill(0), 4), ox1 = _d[0], oy1 = _d[1], ox2 = _d[2], oy2 = _d[3];
    var renderLine = function (data) {
        return container
            .selectAll(CLASS_NAMES.line.class)
            .data(data, function (d, i) { return i; })
            .join(function (enter) {
            return enter
                .append('line')
                .attr('className', function (d) { return "".concat(CLASS_NAMES.line.name, " ").concat(d.className); })
                .styles(style)
                .transition(function (d) {
                return transition(this, getLinePath(d.line), false);
            });
        }, function (update) {
            return update.styles(style).transition(function (_a) {
                var line = _a.line;
                return transition(this, getLinePath(line), animate.update);
            });
        }, function (exit) { return exit.remove(); })
            .transitions();
    };
    if (!showTrunc || !truncRange) {
        return renderLine([
            {
                line: [
                    [x1 + ox1, y1 + oy1],
                    [x2 + ox2, y2 + oy2],
                ],
                className: CLASS_NAMES.line.name,
            },
        ]);
    }
    var _e = __read(truncRange, 2), r1 = _e[0], r2 = _e[1];
    var dx = x2 - x1;
    var dy = y2 - y1;
    var _f = __read([x1 + dx * r1, y1 + dy * r1], 2), x3 = _f[0], y3 = _f[1];
    var _g = __read([x1 + dx * r2, y1 + dy * r2], 2), x4 = _g[0], y4 = _g[1];
    var animation = renderLine([
        {
            line: [
                [x1 + ox1, y1 + oy1],
                [x3, y3],
            ],
            className: CLASS_NAMES.lineFirst.name,
        },
        {
            line: [
                [x4, y4],
                [x2 + ox2, y2 + oy2],
            ],
            className: CLASS_NAMES.lineSecond.name,
        },
    ]);
    renderTruncation(container, attr);
    return animation;
}
function renderAxisArrow(container, type, attr, style) {
    var showArrow = attr.showArrow, showTrunc = attr.showTrunc, lineArrow = attr.lineArrow, lineArrowOffset = attr.lineArrowOffset, lineArrowSize = attr.lineArrowSize;
    var shapeToAddArrow;
    if (type === 'arc')
        shapeToAddArrow = container.select(CLASS_NAMES.line.class);
    else if (showTrunc)
        shapeToAddArrow = container.select(CLASS_NAMES.lineSecond.class);
    else
        shapeToAddArrow = container.select(CLASS_NAMES.line.class);
    if (!showArrow || !lineArrow || (attr.type === 'arc' && isCircle(attr.startAngle, attr.endAngle))) {
        var node = shapeToAddArrow.node();
        if (node)
            node.style.markerEnd = undefined;
        return;
    }
    var arrow = renderExtDo(lineArrow);
    arrow.attr(style);
    scaleToPixel(arrow, lineArrowSize, true);
    shapeToAddArrow.style('markerEnd', arrow).style('markerEndOffset', -lineArrowOffset);
}
export function renderAxisLine(container, attr, animate) {
    var type = attr.type;
    var animation;
    var style = subStyleProps(attr, 'line');
    if (type === 'linear')
        animation = renderLinear(container, attr, omit(style, 'arrow'), animate);
    else
        animation = renderArc(container, attr, omit(style, 'arrow'), animate);
    renderAxisArrow(container, type, attr, style);
    return animation;
}
//# sourceMappingURL=line.js.map