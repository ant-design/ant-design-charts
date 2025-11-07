"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTitleShapeBBox = getTitleShapeBBox;
exports.renderTitle = renderTitle;
exports.renderGroup = renderGroup;
exports.renderRect = renderRect;
var tslib_1 = require("tslib");
var shapes_1 = require("../../shapes");
var util_1 = require("../../util");
function getTitleShapeBBox(titleShape) {
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
function renderTitle(container, cfg) {
    if (!cfg) {
        var shape = container.querySelector('.legend-title');
        if (shape)
            shape.remove();
        return null;
    }
    var style = cfg.style;
    var className = "legend-title";
    return (0, util_1.maybeAppend)(container, ".".concat(className), function () { return new shapes_1.Text({ className: className, style: style }); })
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
function renderGroup(container, className, x, y) {
    return (0, util_1.maybeAppend)(container, ".".concat(className), 'g').styles({ className: className, x: x, y: y }).node();
}
function renderRect(container, className, width, height, style) {
    if (style === void 0) { style = {}; }
    return (0, util_1.select)(container)
        .maybeAppendByClassName(className, 'rect')
        .styles(tslib_1.__assign({ zIndex: -1, width: width, height: height }, style))
        .node();
}
//# sourceMappingURL=base.js.map