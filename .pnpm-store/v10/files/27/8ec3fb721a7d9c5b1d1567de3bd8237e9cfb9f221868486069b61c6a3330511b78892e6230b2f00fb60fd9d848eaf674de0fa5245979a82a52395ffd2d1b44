import { __assign, __read } from "tslib";
import { isFunction } from '@antv/util';
import { degToRad, getCallbackValue, scale, subStyleProps } from '../../../util';
import { Grid } from '../../grid';
import { CLASS_NAMES } from '../constant';
import { getValuePos } from './line';
import { filterExec, getDirectionVector } from './utils';
function getGridVector(value, attr) {
    return getDirectionVector(value, attr.gridDirection, attr);
}
function getGridCenter(attr) {
    var type = attr.type, gridCenter = attr.gridCenter;
    if (type === 'linear')
        return gridCenter;
    return gridCenter || attr.center;
}
function renderStraight(data, attr) {
    var gridLength = attr.gridLength;
    return data.map(function (_a, index) {
        var value = _a.value;
        var _b = __read(getValuePos(value, attr), 2), x = _b[0], y = _b[1];
        var _c = __read(scale(getGridVector(value, attr), gridLength), 2), dx = _c[0], dy = _c[1];
        return {
            id: index,
            points: [
                [x, y],
                [x + dx, y + dy],
            ],
        };
    });
}
function renderSurround(data, attr) {
    var controlAngles = attr.gridControlAngles;
    var center = getGridCenter(attr);
    if (!center)
        throw new Error('grid center is not provide');
    if (data.length < 2)
        throw new Error('Invalid grid data');
    if (!controlAngles || controlAngles.length === 0)
        throw new Error('Invalid gridControlAngles');
    var _a = __read(center, 2), cx = _a[0], cy = _a[1];
    return data.map(function (_a, index) {
        var value = _a.value;
        var _b = __read(getValuePos(value, attr), 2), sx = _b[0], sy = _b[1];
        var _c = __read([sx - cx, sy - cy], 2), dx = _c[0], dy = _c[1];
        var points = [];
        controlAngles.forEach(function (angle) {
            var angleInRad = degToRad(angle);
            var _a = __read([Math.cos(angleInRad), Math.sin(angleInRad)], 2), cosa = _a[0], sina = _a[1];
            var x = dx * cosa - dy * sina + cx;
            var y = dx * sina + dy * cosa + cy;
            points.push([x, y]);
        });
        return { points: points, id: index };
    });
}
export function renderGrid(container, data, attr, animate) {
    var gridAttr = subStyleProps(attr, 'grid');
    var type = gridAttr.type, areaFill = gridAttr.areaFill;
    var center = getGridCenter(attr);
    var finalData = filterExec(data, attr.gridFilter);
    var gridItems = type === 'segment' ? renderStraight(finalData, attr) : renderSurround(finalData, attr);
    var style = __assign(__assign({}, gridAttr), { center: center, areaFill: isFunction(areaFill)
            ? finalData.map(function (datum, index) { return getCallbackValue(areaFill, [datum, index, finalData]); })
            : areaFill, animate: animate, data: gridItems });
    return container
        .selectAll(CLASS_NAMES.grid.class)
        .data([1])
        .join(function (enter) { return enter.append(function () { return new Grid({ style: style }); }).attr('className', CLASS_NAMES.grid.name); }, function (update) {
        return update.transition(function () {
            return this.update(style);
        });
    }, function (exit) { return exit.remove(); })
        .transitions();
}
//# sourceMappingURL=grid.js.map