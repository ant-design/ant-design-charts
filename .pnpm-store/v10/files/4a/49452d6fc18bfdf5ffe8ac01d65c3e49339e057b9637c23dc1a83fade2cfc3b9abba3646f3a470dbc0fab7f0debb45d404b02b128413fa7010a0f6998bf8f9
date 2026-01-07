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
 * Maps normalized value to normalized helix coordinate at the center of the bounding box.
 * @param params [x0, x1, y0, y1]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @returns transformer
 */
export var helix = function (params, x, y, width, height) {
    var _a = __read(params, 4), startAngle = _a[0], endAngle = _a[1], innerRadius = _a[2], outerRadius = _a[3];
    // 计算螺旋系数：r = a + b * theta
    // d = 2 * PI * b
    // 这里不管 startAngle 从多少开始，都从 0 开始计算
    // 这样才能保证坐标系在 bounding box 里面
    var count = (endAngle - 0) / (2 * Math.PI) + 1;
    var d = (outerRadius - innerRadius) / count;
    var b = d / (Math.PI * 2);
    // 当 theta 为 0 的时候的极径
    var step = new Linear({
        range: [innerRadius, innerRadius + d * 0.99], // 防止和下一个螺线重合
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
            var a = step.map(v2);
            // 根据长宽比调整，使得极坐标系内切外接矩形
            var x = Math.cos(theta) * (b * theta + a) * sx;
            var y = Math.sin(theta) * (b * theta + a) * sy;
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
            var t = Math.atan2(y, x) + Math.floor(r / d) * Math.PI * 2;
            var theta = adjustAngle(t, startAngle, endAngle);
            var a = r - b * theta;
            var v1 = angle.invert(theta);
            var v2 = step.invert(a);
            return [v1, v2];
        },
    };
};
//# sourceMappingURL=helix.js.map