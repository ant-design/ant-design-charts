import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import { fadeOut, onAnimateFinished, transition } from '../../animation';
import { Component } from '../../core';
import { classNames, distance, getCallbackValue, getPrimitiveAttributes, select } from '../../util';
var CLASS_NAMES = classNames({
    lineGroup: 'line-group',
    line: 'line',
    regionGroup: 'region-group',
    region: 'region',
}, 'grid');
function getStraightPath(points) {
    return points.reduce(function (acc, curr, idx) {
        acc.push(__spreadArray([idx === 0 ? 'M' : 'L'], __read(curr), false));
        return acc;
    }, []);
}
function getSurroundPath(points, attr, reversed) {
    var _a = attr.connect, connect = _a === void 0 ? 'line' : _a, center = attr.center;
    if (connect === 'line')
        return getStraightPath(points);
    if (!center)
        return [];
    var radius = distance(points[0], center);
    var sweepFlag = reversed ? 0 : 1;
    return points.reduce(function (r, p, idx) {
        if (idx === 0)
            r.push(__spreadArray(['M'], __read(p), false));
        else
            r.push(__spreadArray(['A', radius, radius, 0, 0, sweepFlag], __read(p), false));
        return r;
    }, []);
}
function getLinePath(points, cfg, reversed) {
    if (cfg.type === 'surround')
        return getSurroundPath(points, cfg, reversed);
    return getStraightPath(points);
}
function connectPaths(from, to, cfg) {
    var type = cfg.type, connect = cfg.connect, center = cfg.center, closed = cfg.closed;
    var closeFlag = closed ? [['Z']] : [];
    var _a = __read([getLinePath(from, cfg), getLinePath(to.slice().reverse(), cfg, true)], 2), path1 = _a[0], path2 = _a[1];
    var _b = __read([from[0], to.slice(-1)[0]], 2), startOfFrom = _b[0], endOfTo = _b[1];
    var createPath = function (insertA, insertB) {
        return [path1, insertA, path2, insertB, closeFlag].flat();
    };
    if (connect === 'line' || type === 'surround') {
        return createPath([__spreadArray(['L'], __read(endOfTo), false)], [__spreadArray(['L'], __read(startOfFrom), false)]);
    }
    if (!center)
        throw new Error('Arc grid need to specified center');
    var _c = __read([distance(endOfTo, center), distance(startOfFrom, center)], 2), raduis1 = _c[0], radius2 = _c[1];
    return createPath([
        __spreadArray(['A', raduis1, raduis1, 0, 0, 1], __read(endOfTo), false),
        __spreadArray(['L'], __read(endOfTo), false),
    ], [
        __spreadArray(['A', radius2, radius2, 0, 0, 0], __read(startOfFrom), false),
        __spreadArray(['L'], __read(startOfFrom), false),
    ]);
}
function renderGridLine(container, data, attr, style) {
    var animate = attr.animate, isBillboard = attr.isBillboard;
    var lines = data.map(function (item, idx) {
        return {
            id: item.id || "grid-line-".concat(idx),
            d: getLinePath(item.points, attr),
        };
    });
    return container
        .selectAll(CLASS_NAMES.line.class)
        .data(lines, function (d) { return d.id; })
        .join(function (enter) {
        return enter.append('path').each(function (datum, index) {
            var lineStyle = getCallbackValue(getPrimitiveAttributes(__assign({ d: datum.d }, style)), [datum, index, lines]);
            this.attr(__assign({ class: CLASS_NAMES.line.name, stroke: '#D9D9D9', lineWidth: 1, lineDash: [4, 4], isBillboard: isBillboard }, lineStyle));
        });
    }, function (update) {
        return update.transition(function (datum, index) {
            var lineStyle = getCallbackValue(getPrimitiveAttributes(__assign({ d: datum.d }, style)), [datum, index, lines]);
            return transition(this, lineStyle, animate.update);
        });
    }, function (exit) {
        return exit.transition(function () {
            var _this = this;
            var animation = fadeOut(this, animate.exit);
            onAnimateFinished(animation, function () { return _this.remove(); });
            return animation;
        });
    })
        .transitions();
}
function renderAlternateRegion(container, data, style) {
    var animate = style.animate, connect = style.connect, areaFill = style.areaFill;
    if (data.length < 2 || !areaFill || !connect)
        return [];
    var colors = Array.isArray(areaFill) ? areaFill : [areaFill, 'transparent'];
    var getColor = function (idx) { return colors[idx % colors.length]; };
    var regions = [];
    for (var idx = 0; idx < data.length - 1; idx++) {
        var _a = __read([data[idx].points, data[idx + 1].points], 2), prev = _a[0], curr = _a[1];
        var path = connectPaths(prev, curr, style);
        regions.push({ d: path, fill: getColor(idx) });
    }
    return container
        .selectAll(CLASS_NAMES.region.class)
        .data(regions, function (_, i) { return i; })
        .join(function (enter) {
        return enter
            .append('path')
            .each(function (datum, index) {
            var regionStyle = getCallbackValue(datum, [datum, index, regions]);
            this.attr(regionStyle);
        })
            .attr('className', CLASS_NAMES.region.name);
    }, function (update) {
        return update.transition(function (datum, index) {
            var regionStyle = getCallbackValue(datum, [datum, index, regions]);
            return transition(this, regionStyle, animate.update);
        });
    }, function (exit) {
        return exit.transition(function () {
            var _this = this;
            var animation = fadeOut(this, animate.exit);
            onAnimateFinished(animation, function () { return _this.remove(); });
            return animation;
        });
    })
        .transitions();
}
function getData(attr) {
    var _a = attr.data, data = _a === void 0 ? [] : _a, closed = attr.closed;
    if (!closed)
        return data;
    return data.map(function (datum) {
        var points = datum.points;
        var _a = __read(points, 1), start = _a[0];
        return __assign(__assign({}, datum), { points: __spreadArray(__spreadArray([], __read(points), false), [start], false) });
    });
}
var Grid = /** @class */ (function (_super) {
    __extends(Grid, _super);
    function Grid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Grid.prototype.render = function (attributes, container) {
        // @ts-ignore do no passBy className
        var type = attributes.type, center = attributes.center, areaFill = attributes.areaFill, closed = attributes.closed, style = __rest(attributes, ["type", "center", "areaFill", "closed"]);
        var data = getData(attributes);
        var lineGroup = select(container).maybeAppendByClassName(CLASS_NAMES.lineGroup, 'g');
        var regionGroup = select(container).maybeAppendByClassName(CLASS_NAMES.regionGroup, 'g');
        var lineTransitions = renderGridLine(lineGroup, data, attributes, style);
        var reigionTransitions = renderAlternateRegion(regionGroup, data, attributes);
        return __spreadArray(__spreadArray([], __read(lineTransitions), false), __read(reigionTransitions), false);
    };
    return Grid;
}(Component));
export { Grid };
//# sourceMappingURL=index.js.map