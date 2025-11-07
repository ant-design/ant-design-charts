import { __assign } from "tslib";
import { Text } from '../../shapes';
import { maybeAppend, select } from '../../util';
export function getTitleShapeBBox(titleShape) {
    var box = { left: 0, top: 0, width: 0, height: 0 };
    if ((titleShape === null || titleShape === void 0 ? void 0 : titleShape.tagName) === 'html') {
        var _a = titleShape.style, width = _a.width, height = _a.height;
        box = { left: 0, top: 0, width: width, height: height };
    }
    else if (titleShape) {
        var _b = titleShape.getLocalBounds(), min = _b.min, halfExtents = _b.halfExtents;
        box = {
            left: min[0],
            top: min[1],
            width: halfExtents[0] * 2,
            height: halfExtents[1] * 2,
        };
    }
    return { left: 0, top: 0, right: box.width, bottom: box.height };
}
export function renderTitle(container, cfg) {
    if (!cfg) {
        var shape = container.querySelector('.legend-title');
        if (shape)
            shape.remove();
        return null;
    }
    var style = cfg.style;
    var className = "legend-title";
    return maybeAppend(container, ".".concat(className), function () { return new Text({ className: className, style: style }); })
        .call(function (selection) {
        selection.styles({
            fontSize: 12,
            textBaseline: 'top',
            text: cfg.content,
        });
    })
        .styles(style)
        .node();
}
export function renderGroup(container, className, x, y) {
    return maybeAppend(container, ".".concat(className), 'g').styles({ className: className, x: x, y: y }).node();
}
export function renderRect(container, className, width, height, style) {
    if (style === void 0) { style = {}; }
    return select(container)
        .maybeAppendByClassName(className, 'rect')
        .styles(__assign({ zIndex: -1, width: width, height: height }, style))
        .node();
}
//# sourceMappingURL=base.js.map