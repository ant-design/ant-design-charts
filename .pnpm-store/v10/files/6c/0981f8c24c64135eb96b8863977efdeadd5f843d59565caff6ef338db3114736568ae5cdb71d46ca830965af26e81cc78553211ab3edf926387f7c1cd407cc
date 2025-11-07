"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intersection = intersection;
var tslib_1 = require("tslib");
function inside(x1, x2, y1, y2, xk, yk) {
    return ((x1 === x2 || (Math.min(x1, x2) <= xk && xk <= Math.max(x1, x2))) &&
        (y1 === y2 || (Math.min(y1, y2) <= yk && yk <= Math.max(y1, y2))));
}
function update(ans, x, y) {
    var out = ans;
    if (!ans.length || x < ans[0] || (x === ans[0] && y < ans[1])) {
        out[0] = x;
        out[1] = y;
    }
}
/**
 * 求两个线段的交点坐标
 * 参考：https://leetcode-cn.com/problems/intersection-lcci/solution/jiao-dian-by-leetcode-solution/
 */
function intersection(_a, _b, _c, _d) {
    var _e = tslib_1.__read(_a, 2), x1 = _e[0], y1 = _e[1];
    var _f = tslib_1.__read(_b, 2), x2 = _f[0], y2 = _f[1];
    var _g = tslib_1.__read(_c, 2), x3 = _g[0], y3 = _g[1];
    var _h = tslib_1.__read(_d, 2), x4 = _h[0], y4 = _h[1];
    var ans = [];
    // 若两直线平行
    if ((y4 - y3) * (x2 - x1) === (y2 - y1) * (x4 - x3)) {
        // 若两线段有重合
        if ((y2 - y1) * (x3 - x1) === (y3 - y1) * (x2 - x1)) {
            // 分别判断四个点
            if (inside(x1, x2, y1, y2, x3, y3)) {
                update(ans, x3, y3);
            }
            if (inside(x1, x2, y1, y2, x4, y4)) {
                update(ans, x4, y4);
            }
            if (inside(x3, x4, y3, y4, x1, y1)) {
                update(ans, x1, y1);
            }
            if (inside(x3, x4, y3, y4, x2, y2)) {
                update(ans, x2, y2);
            }
        }
    }
    else {
        // 联立方程得到 t1 和 t2 的值
        var t1 = (x3 * (y4 - y3) + y1 * (x4 - x3) - y3 * (x4 - x3) - x1 * (y4 - y3)) /
            ((x2 - x1) * (y4 - y3) - (x4 - x3) * (y2 - y1));
        var t2 = (x1 * (y2 - y1) + y3 * (x2 - x1) - y1 * (x2 - x1) - x3 * (y2 - y1)) /
            ((x4 - x3) * (y2 - y1) - (x2 - x1) * (y4 - y3));
        // 判断 t1 和 t2 是否均在 [0, 1] 之间
        if (t1 >= 0.0 && t1 <= 1.0 && t2 >= 0.0 && t2 <= 1.0) {
            ans[0] = x1 + t1 * (x2 - x1);
            ans[1] = y1 + t1 * (y2 - y1);
        }
    }
    return ans;
}
//# sourceMappingURL=lines-intersection.js.map