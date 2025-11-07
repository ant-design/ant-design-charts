import { __assign, __read, __rest } from "tslib";
import { transition } from '../../../animation';
import { normalize, parsePosition, parseSeriesAttr, percentTransform, renderExtDo, scale, select, splitStyle, subStyleProps, } from '../../../util';
import { CLASS_NAMES } from '../constant';
import { applyClassName } from '../utils/classname';
import { CLASSNAME_SUFFIX_MAP } from '../classname-map';
function getTitlePosition(mainGroup, titleGroup, attr) {
    var _a = attr.titlePosition, position = _a === void 0 ? 'lb' : _a, spacing = attr.titleSpacing;
    var pos = parsePosition(position);
    var _b = mainGroup.node().getLocalBounds(), _c = __read(_b.min, 2), mainX = _c[0], mainY = _c[1], _d = __read(_b.halfExtents, 2), mainHalfWidth = _d[0], mainHalfHeight = _d[1];
    var _e = __read(titleGroup.node().getLocalBounds().halfExtents, 2), titleHalfWidth = _e[0], titleHalfHeight = _e[1];
    var _f = __read([mainX + mainHalfWidth, mainY + mainHalfHeight], 2), x = _f[0], y = _f[1];
    var _g = __read(parseSeriesAttr(spacing), 4), spacingTop = _g[0], spacingRight = _g[1], spacingBottom = _g[2], spacingLeft = _g[3];
    if (['start', 'end'].includes(position) && attr.type === 'linear') {
        var startPos = attr.startPos, endPos = attr.endPos;
        // todo did not consider the truncate case
        var _h = __read(position === 'start' ? [startPos, endPos] : [endPos, startPos], 2), from = _h[0], to = _h[1];
        var direction = normalize([-to[0] + from[0], -to[1] + from[1]]);
        var _j = __read(scale(direction, spacingTop), 2), dx = _j[0], dy = _j[1];
        return { x: from[0] + dx, y: from[1] + dy };
    }
    if (pos.includes('t'))
        y -= mainHalfHeight + titleHalfHeight + spacingTop;
    if (pos.includes('r'))
        x += mainHalfWidth + titleHalfWidth + spacingRight;
    if (pos.includes('l'))
        x -= mainHalfWidth + titleHalfWidth + spacingLeft;
    if (pos.includes('b'))
        y += mainHalfHeight + titleHalfHeight + spacingBottom;
    return { x: x, y: y };
}
function inferTransform(n, direction, position) {
    var halfExtents = n.getGeometryBounds().halfExtents;
    var height = halfExtents[1] * 2;
    if (direction === 'vertical') {
        if (position === 'left')
            return "rotate(-90) translate(0, ".concat(height / 2, ")");
        if (position === 'right')
            return "rotate(-90) translate(0, -".concat(height / 2, ")");
    }
    return '';
}
function applyTitleStyle(title, group, axis, attr, animate) {
    var style = subStyleProps(attr, 'title');
    var _a = __read(splitStyle(style), 2), titleStyle = _a[0], _b = _a[1], specified = _b.transform, transformOrigin = _b.transformOrigin, groupStyle = __rest(_b, ["transform", "transformOrigin"]);
    group.styles(groupStyle);
    var transform = specified || inferTransform(title.node(), titleStyle.direction, titleStyle.position);
    title.styles(__assign(__assign({}, titleStyle), { transformOrigin: transformOrigin }));
    percentTransform(title.node(), transform);
    var _c = getTitlePosition(
    // @ts-ignore
    select(axis._offscreen || axis.querySelector(CLASS_NAMES.mainGroup.class)), group, attr), x = _c.x, y = _c.y;
    var animation = transition(group.node(), { transform: "translate(".concat(x, ", ").concat(y, ")") }, animate);
    return animation;
}
export function renderTitle(container, axis, attr, animate) {
    var titleText = attr.titleText, classNamePrefix = attr.classNamePrefix;
    return container
        .selectAll(CLASS_NAMES.title.class)
        .data([{ title: titleText }].filter(function (d) { return !!d.title; }), function (d, i) { return d.title; })
        .join(function (enter) {
        var titles = enter
            .append(function () { return renderExtDo(titleText); })
            .attr('className', CLASS_NAMES.title.name)
            .transition(function () {
            return applyTitleStyle(select(this), container, axis, attr, animate.enter);
        });
        applyClassName(titles, CLASS_NAMES.title, CLASSNAME_SUFFIX_MAP.title, classNamePrefix);
        return titles;
    }, function (update) {
        return update.transition(function () {
            return applyTitleStyle(select(this), container, axis, attr, animate.update);
        });
    }, function (exit) { return exit.remove(); })
        .transitions();
}
//# sourceMappingURL=title.js.map