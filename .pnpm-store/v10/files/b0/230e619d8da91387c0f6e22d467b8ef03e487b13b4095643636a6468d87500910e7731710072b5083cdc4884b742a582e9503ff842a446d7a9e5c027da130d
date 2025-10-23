import { __assign, __read } from "tslib";
import { isFunction } from '@antv/util';
import { fadeOut, onAnimateFinished, transition } from '../../../animation';
import { getCallbackValue, select, splitStyle, subStyleProps } from '../../../util';
import { CLASS_NAMES } from '../constant';
import { getValuePos } from './line';
import { filterExec, getCallbackStyle, getDirectionVector } from './utils';
export function getTickVector(value, attr) {
    return getDirectionVector(value, attr.tickDirection, attr);
}
export function getTickPoints(unitVector, tickLength) {
    var _a = __read(unitVector, 2), dx = _a[0], dy = _a[1];
    return [
        [0, 0],
        [dx * tickLength, dy * tickLength],
    ];
}
function getTickLineLayout(datum, index, data, tickVector, attr) {
    var tickLength = attr.tickLength;
    var _a = __read(getTickPoints(tickVector, getCallbackValue(tickLength, [datum, index, data])), 2), _b = __read(_a[0], 2), x1 = _b[0], y1 = _b[1], _c = __read(_a[1], 2), x2 = _c[0], y2 = _c[1];
    return { x1: x1, x2: x2, y1: y1, y2: y2 };
}
function createTickEl(container, datum, index, data, attr) {
    var formatter = attr.tickFormatter;
    var tickVector = getTickVector(datum.value, attr);
    var el = 'line';
    if (isFunction(formatter))
        el = function () { return getCallbackValue(formatter, [datum, index, data, tickVector]); };
    return container.append(el).attr('className', CLASS_NAMES.tickItem.name);
}
function applyTickStyle(datum, index, data, tick, group, attr, style) {
    var tickVector = getTickVector(datum.value, attr);
    var _a = getTickLineLayout(datum, index, data, tickVector, attr), x1 = _a.x1, x2 = _a.x2, y1 = _a.y1, y2 = _a.y2;
    var _b = __read(splitStyle(getCallbackStyle(style, [datum, index, data, tickVector])), 2), tickStyle = _b[0], groupStyle = _b[1];
    tick.node().nodeName === 'line' && tick.styles(__assign({ x1: x1, x2: x2, y1: y1, y2: y2 }, tickStyle));
    group.attr(groupStyle);
    tick.styles(tickStyle);
}
function createTick(datum, index, data, attr, tickAttr, animate) {
    var tick = createTickEl(select(this), datum, index, data, attr);
    applyTickStyle(datum, index, data, tick, this, attr, tickAttr);
    var _a = __read(getValuePos(datum.value, attr), 2), x = _a[0], y = _a[1];
    return transition(this, { transform: "translate(".concat(x, ", ").concat(y, ")") }, animate);
}
export function renderTicks(container, axisData, attr, animate) {
    var finalData = filterExec(axisData, attr.tickFilter);
    var tickAttr = subStyleProps(attr, 'tick');
    return container
        .selectAll(CLASS_NAMES.tick.class)
        .data(finalData, function (d) { return d.id || d.label; })
        .join(function (enter) {
        return enter
            .append('g')
            .attr('className', CLASS_NAMES.tick.name)
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
            var animation = fadeOut(this.childNodes[0], animate.exit);
            onAnimateFinished(animation, function () { return _this.remove(); });
            return animation;
        });
    })
        .transitions();
}
//# sourceMappingURL=ticks.js.map