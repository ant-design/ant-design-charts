"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
var tslib_1 = require("tslib");
var animation_1 = require("../../animation");
var core_1 = require("../../core");
var util_1 = require("../../util");
var CLASS_NAMES = (0, util_1.classNames)({
    lineGroup: 'line-group',
    line: 'line',
    regionGroup: 'region-group',
    region: 'region',
}, 'grid');
function getStraightPath(points) {
    return points.reduce(function (acc, curr, idx) {
        acc.push(tslib_1.__spreadArray([idx === 0 ? 'M' : 'L'], tslib_1.__read(curr), false));
        return acc;
    }, []);
}
function getSurroundPath(points, attr, reversed) {
    var _a = attr.connect, connect = _a === void 0 ? 'line' : _a, center = attr.center;
    if (connect === 'line')
        return getStraightPath(points);
    if (!center)
        return [];
    var radius = (0, util_1.distance)(points[0], center);
    var sweepFlag = reversed ? 0 : 1;
    return points.reduce(function (r, p, idx) {
        if (idx === 0)
            r.push(tslib_1.__spreadArray(['M'], tslib_1.__read(p), false));
        else
            r.push(tslib_1.__spreadArray(['A', radius, radius, 0, 0, sweepFlag], tslib_1.__read(p), false));
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
    var _a = tslib_1.__read([getLinePath(from, cfg), getLinePath(to.slice().reverse(), cfg, true)], 2), path1 = _a[0], path2 = _a[1];
    var _b = tslib_1.__read([from[0], to.slice(-1)[0]], 2), startOfFrom = _b[0], endOfTo = _b[1];
    var createPath = function (insertA, insertB) {
        return [path1, insertA, path2, insertB, closeFlag].flat();
    };
    if (connect === 'line' || type === 'surround') {
        return createPath([tslib_1.__spreadArray(['L'], tslib_1.__read(endOfTo), false)], [tslib_1.__spreadArray(['L'], tslib_1.__read(startOfFrom), false)]);
    }
    if (!center)
        throw new Error('Arc grid need to specified center');
    var _c = tslib_1.__read([(0, util_1.distance)(endOfTo, center), (0, util_1.distance)(startOfFrom, center)], 2), raduis1 = _c[0], radius2 = _c[1];
    return createPath([
        tslib_1.__spreadArray(['A', raduis1, raduis1, 0, 0, 1], tslib_1.__read(endOfTo), false),
        tslib_1.__spreadArray(['L'], tslib_1.__read(endOfTo), false),
    ], [
        tslib_1.__spreadArray(['A', radius2, radius2, 0, 0, 0], tslib_1.__read(startOfFrom), false),
        tslib_1.__spreadArray(['L'], tslib_1.__read(startOfFrom), false),
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
            var lineStyle = (0, util_1.getCallbackValue)((0, util_1.getPrimitiveAttributes)(tslib_1.__assign({ d: datum.d }, style)), [datum, index, lines]);
            this.attr(tslib_1.__assign({ class: CLASS_NAMES.line.name, stroke: '#D9D9D9', lineWidth: 1, lineDash: [4, 4], isBillboard: isBillboard }, lineStyle));
        });
    }, function (update) {
        return update.transition(function (datum, index) {
            var lineStyle = (0, util_1.getCallbackValue)((0, util_1.getPrimitiveAttributes)(tslib_1.__assign({ d: datum.d }, style)), [datum, index, lines]);
            return (0, animation_1.transition)(this, lineStyle, animate.update);
        });
    }, function (exit) {
        return exit.transition(function () {
            var _this = this;
            var animation = (0, animation_1.fadeOut)(this, animate.exit);
            (0, animation_1.onAnimateFinished)(animation, function () { return _this.remove(); });
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
        var _a = tslib_1.__read([data[idx].points, data[idx + 1].points], 2), prev = _a[0], curr = _a[1];
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
            var regionStyle = (0, util_1.getCallbackValue)(datum, [datum, index, regions]);
            this.attr(regionStyle);
        })
            .attr('className', CLASS_NAMES.region.name);
    }, function (update) {
        return update.transition(function (datum, index) {
            var regionStyle = (0, util_1.getCallbackValue)(datum, [datum, index, regions]);
            return (0, animation_1.transition)(this, regionStyle, animate.update);
        });
    }, function (exit) {
        return exit.transition(function () {
            var _this = this;
            var animation = (0, animation_1.fadeOut)(this, animate.exit);
            (0, animation_1.onAnimateFinished)(animation, function () { return _this.remove(); });
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
        var _a = tslib_1.__read(points, 1), start = _a[0];
        return tslib_1.__assign(tslib_1.__assign({}, datum), { points: tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(points), false), [start], false) });
    });
}
var Grid = /** @class */ (function (_super) {
    tslib_1.__extends(Grid, _super);
    function Grid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Grid.prototype.render = function (attributes, container) {
        // @ts-ignore do no passBy className
        var type = attributes.type, center = attributes.center, areaFill = attributes.areaFill, closed = attributes.closed, style = tslib_1.__rest(attributes, ["type", "center", "areaFill", "closed"]);
        var data = getData(attributes);
        var lineGroup = (0, util_1.select)(container).maybeAppendByClassName(CLASS_NAMES.lineGroup, 'g');
        var regionGroup = (0, util_1.select)(container).maybeAppendByClassName(CLASS_NAMES.regionGroup, 'g');
        var lineTransitions = renderGridLine(lineGroup, data, attributes, style);
        var reigionTransitions = renderAlternateRegion(regionGroup, data, attributes);
        return tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(lineTransitions), false), tslib_1.__read(reigionTransitions), false);
    };
    return Grid;
}(core_1.Component));
exports.Grid = Grid;
//# sourceMappingURL=index.js.map