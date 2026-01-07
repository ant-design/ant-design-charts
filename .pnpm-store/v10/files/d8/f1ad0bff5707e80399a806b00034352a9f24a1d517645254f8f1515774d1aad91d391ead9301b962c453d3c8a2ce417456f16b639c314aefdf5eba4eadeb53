var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Linear } from '@antv/scale';
import { adjustAngle } from '../utils';
/**
 * Maps normalized value to normalized polar coordinate at the center of the bounding box.
 * It is used for Nightingale Rose Diagram.
 * @param params [x0, x1, y0, y1]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @returns transformer
 */
export var polar = function (params, x, y, width, height) {
    var _a = __read(params, 4), startAngle = _a[0], endAngle = _a[1], innerRadius = _a[2], outerRadius = _a[3];
    var radius = new Linear({
        range: [innerRadius, outerRadius],
    });
    var angle = new Linear({
        range: [startAngle, endAngle],
    });
    var aspect = height / width;
    var sx = aspect > 1 ? 1 : aspect;
    var sy = aspect > 1 ? 1 / aspect : 1;
    return {
        transform: function (vector) {
            var _a = __read(vector, 2), v1 = _a[0], v2 = _a[1];
            var theta = angle.map(v1);
            var r = radius.map(v2);
            // 根据长宽比调整，使得极坐标系内切外接矩形
            var x = r * Math.cos(theta) * sx;
            var y = r * Math.sin(theta) * sy;
            // 将坐标的原点移动到外接矩形的中心，并且将长度设置为一半
            var dx = x * 0.5 + 0.5;
            var dy = y * 0.5 + 0.5;
            return [dx, dy];
        },
        untransform: function (vector) {
            var _a = __read(vector, 2), dx = _a[0], dy = _a[1];
            var x = ((dx - 0.5) * 2) / sx;
            var y = ((dy - 0.5) * 2) / sy;
            var r = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
            var t = Math.atan2(y, x);
            var theta = adjustAngle(t, startAngle, endAngle);
            var v1 = angle.invert(theta);
            var v2 = radius.invert(r);
            return [v1, v2];
        },
    };
};
//# sourceMappingURL=polar.js.map