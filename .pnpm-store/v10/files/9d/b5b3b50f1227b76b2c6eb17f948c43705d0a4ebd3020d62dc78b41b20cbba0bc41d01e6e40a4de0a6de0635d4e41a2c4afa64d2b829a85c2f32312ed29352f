"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderTitle = renderTitle;
var tslib_1 = require("tslib");
var animation_1 = require("../../../animation");
var util_1 = require("../../../util");
var constant_1 = require("../constant");
var classname_1 = require("../utils/classname");
var classname_map_1 = require("../classname-map");
function getTitlePosition(mainGroup, titleGroup, attr) {
    var _a = attr.titlePosition, position = _a === void 0 ? 'lb' : _a, spacing = attr.titleSpacing;
    var pos = (0, util_1.parsePosition)(position);
    var _b = mainGroup.node().getLocalBounds(), _c = tslib_1.__read(_b.min, 2), mainX = _c[0], mainY = _c[1], _d = tslib_1.__read(_b.halfExtents, 2), mainHalfWidth = _d[0], mainHalfHeight = _d[1];
    var _e = tslib_1.__read(titleGroup.node().getLocalBounds().halfExtents, 2), titleHalfWidth = _e[0], titleHalfHeight = _e[1];
    var _f = tslib_1.__read([mainX + mainHalfWidth, mainY + mainHalfHeight], 2), x = _f[0], y = _f[1];
    var _g = tslib_1.__read((0, util_1.parseSeriesAttr)(spacing), 4), spacingTop = _g[0], spacingRight = _g[1], spacingBottom = _g[2], spacingLeft = _g[3];
    if (['start', 'end'].includes(position) && attr.type === 'linear') {
        var startPos = attr.startPos, endPos = attr.endPos;
        // todo did not consider the truncate case
        var _h = tslib_1.__read(position === 'start' ? [startPos, endPos] : [endPos, startPos], 2), from = _h[0], to = _h[1];
        var direction = (0, util_1.normalize)([-to[0] + from[0], -to[1] + from[1]]);
        var _j = tslib_1.__read((0, util_1.scale)(direction, spacingTop), 2), dx = _j[0], dy = _j[1];
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
    var style = (0, util_1.subStyleProps)(attr, 'title');
    var _a = tslib_1.__read((0, util_1.splitStyle)(style), 2), titleStyle = _a[0], _b = _a[1], specified = _b.transform, transformOrigin = _b.transformOrigin, groupStyle = tslib_1.__rest(_b, ["transform", "transformOrigin"]);
    group.styles(groupStyle);
    var transform = specified || inferTransform(title.node(), titleStyle.direction, titleStyle.position);
    title.styles(tslib_1.__assign(tslib_1.__assign({}, titleStyle), { transformOrigin: transformOrigin }));
    (0, util_1.percentTransform)(title.node(), transform);
    var _c = getTitlePosition(
    // @ts-ignore
    (0, util_1.select)(axis._offscreen || axis.querySelector(constant_1.CLASS_NAMES.mainGroup.class)), group, attr), x = _c.x, y = _c.y;
    var animation = (0, animation_1.transition)(group.node(), { transform: "translate(".concat(x, ", ").concat(y, ")") }, animate);
    return animation;
}
function renderTitle(container, axis, attr, animate) {
    var titleText = attr.titleText, classNamePrefix = attr.classNamePrefix;
    return container
        .selectAll(constant_1.CLASS_NAMES.title.class)
        .data([{ title: titleText }].filter(function (d) { return !!d.title; }), function (d, i) { return d.title; })
        .join(function (enter) {
        var titles = enter
            .append(function () { return (0, util_1.renderExtDo)(titleText); })
            .attr('className', constant_1.CLASS_NAMES.title.name)
            .transition(function () {
            return applyTitleStyle((0, util_1.select)(this), container, axis, attr, animate.enter);
        });
        (0, classname_1.applyClassName)(titles, constant_1.CLASS_NAMES.title, classname_map_1.CLASSNAME_SUFFIX_MAP.title, classNamePrefix);
        return titles;
    }, function (update) {
        return update.transition(function () {
            return applyTitleStyle((0, util_1.select)(this), container, axis, attr, animate.update);
        });
    }, function (exit) { return exit.remove(); })
        .transitions();
}
//# sourceMappingURL=title.js.map