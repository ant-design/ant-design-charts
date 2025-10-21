"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTickVector = getTickVector;
exports.getTickPoints = getTickPoints;
exports.renderTicks = renderTicks;
var tslib_1 = require("tslib");
var util_1 = require("@antv/util");
var animation_1 = require("../../../animation");
var util_2 = require("../../../util");
var constant_1 = require("../constant");
var line_1 = require("./line");
var utils_1 = require("./utils");
function getTickVector(value, attr) {
    return (0, utils_1.getDirectionVector)(value, attr.tickDirection, attr);
}
function getTickPoints(unitVector, tickLength) {
    var _a = tslib_1.__read(unitVector, 2), dx = _a[0], dy = _a[1];
    return [
        [0, 0],
        [dx * tickLength, dy * tickLength],
    ];
}
function getTickLineLayout(datum, index, data, tickVector, attr) {
    var tickLength = attr.tickLength;
    var _a = tslib_1.__read(getTickPoints(tickVector, (0, util_2.getCallbackValue)(tickLength, [datum, index, data])), 2), _b = tslib_1.__read(_a[0], 2), x1 = _b[0], y1 = _b[1], _c = tslib_1.__read(_a[1], 2), x2 = _c[0], y2 = _c[1];
    return { x1: x1, x2: x2, y1: y1, y2: y2 };
}
function createTickEl(container, datum, index, data, attr) {
    var formatter = attr.tickFormatter;
    var tickVector = getTickVector(datum.value, attr);
    var el = 'line';
    if ((0, util_1.isFunction)(formatter))
        el = function () { return (0, util_2.getCallbackValue)(formatter, [datum, index, data, tickVector]); };
    return container.append(el).attr('className', constant_1.CLASS_NAMES.tickItem.name);
}
function applyTickStyle(datum, index, data, tick, group, attr, style) {
    var tickVector = getTickVector(datum.value, attr);
    var _a = getTickLineLayout(datum, index, data, tickVector, attr), x1 = _a.x1, x2 = _a.x2, y1 = _a.y1, y2 = _a.y2;
    var _b = tslib_1.__read((0, util_2.splitStyle)((0, utils_1.getCallbackStyle)(style, [datum, index, data, tickVector])), 2), tickStyle = _b[0], groupStyle = _b[1];
    tick.node().nodeName === 'line' && tick.styles(tslib_1.__assign({ x1: x1, x2: x2, y1: y1, y2: y2 }, tickStyle));
    group.attr(groupStyle);
    tick.styles(tickStyle);
}
function createTick(datum, index, data, attr, tickAttr, animate) {
    var tick = createTickEl((0, util_2.select)(this), datum, index, data, attr);
    applyTickStyle(datum, index, data, tick, this, attr, tickAttr);
    var _a = tslib_1.__read((0, line_1.getValuePos)(datum.value, attr), 2), x = _a[0], y = _a[1];
    return (0, animation_1.transition)(this, { transform: "translate(".concat(x, ", ").concat(y, ")") }, animate);
}
function renderTicks(container, axisData, attr, animate) {
    var finalData = (0, utils_1.filterExec)(axisData, attr.tickFilter);
    var tickAttr = (0, util_2.subStyleProps)(attr, 'tick');
    return container
        .selectAll(constant_1.CLASS_NAMES.tick.class)
        .data(finalData, function (d) { return d.id || d.label; })
        .join(function (enter) {
        return enter
            .append('g')
            .attr('className', constant_1.CLASS_NAMES.tick.name)
            .transition(function (datum, index) {
            return createTick.call(this, datum, index, finalData, attr, tickAttr, false);
        });
    }, function (update) {
        return update.transition(function (datum, index) {
            this.removeChildren();
            return createTick.call(this, datum, index, finalData, attr, tickAttr, animate.update);
        });
    }, function (exit) {
        return exit.transition(function () {
            var _this = this;
            var animation = (0, animation_1.fadeOut)(this.childNodes[0], animate.exit);
            (0, animation_1.onAnimateFinished)(animation, function () { return _this.remove(); });
            return animation;
        });
    })
        .transitions();
}
//# sourceMappingURL=ticks.js.map