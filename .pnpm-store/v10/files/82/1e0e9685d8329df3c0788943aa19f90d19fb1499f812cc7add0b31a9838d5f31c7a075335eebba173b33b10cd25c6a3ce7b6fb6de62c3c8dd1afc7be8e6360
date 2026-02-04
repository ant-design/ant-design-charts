import { __extends, __read } from "tslib";
import { deepAssign, hide, intersection, lineLen, rotate, scale } from '../../util';
import { CrosshairBase } from './base';
import { POLYGON_CROSSHAIR_DEFAULT_STYLE } from './constant';
var PolygonCrosshair = /** @class */ (function (_super) {
    __extends(PolygonCrosshair, _super);
    function PolygonCrosshair(options) {
        return _super.call(this, deepAssign({}, PolygonCrosshair.defaultOptions, options)) || this;
    }
    Object.defineProperty(PolygonCrosshair.prototype, "crosshairPath", {
        get: function () {
            return this.createPolygonPath();
        },
        enumerable: false,
        configurable: true
    });
    PolygonCrosshair.prototype.update = function (cfg) {
        _super.prototype.update.call(this, cfg);
    };
    Object.defineProperty(PolygonCrosshair.prototype, "points", {
        /**
         * 得到从中心出发，各个点方向的单位向量
         */
        get: function () {
            var _a = this.attributes, startAngle = _a.startAngle, sides = _a.sides;
            var a = (Math.PI * 2) / sides;
            // 单位向量
            var unit = [1, 0];
            var points = [];
            for (var i = 0; i < sides; i += 1) {
                points.push(rotate(unit, [0, 0], (startAngle / 180) * Math.PI + a * i));
            }
            return points;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 1. 判断point位于哪一个扇区
     * 2. 计算中心到point的线段与所在扇区的边的交点
     * 3. 计算等效半径
     */
    PolygonCrosshair.prototype.setPointer = function (_a) {
        var _b = __read(_a, 2), x = _b[0], y = _b[1];
        _super.prototype.setPointer.call(this, [x, y]);
        var _c = __read(this.localPointer, 2), lx = _c[0], ly = _c[1];
        var center = this.attributes.center;
        // 求交点
        var _d = __read(this.intersection([lx, ly]), 2), ix = _d[0], iy = _d[1];
        if (!ix || !iy)
            return;
        var equivalentRadius = lineLen(center, [lx, ly]) / lineLen(center, [ix, iy]);
        var path = this.createPolygonPath(equivalentRadius);
        this.crosshairShape.attr({ d: path });
    };
    PolygonCrosshair.prototype.adjustLayout = function () {
        hide(this.tagShape);
    };
    PolygonCrosshair.prototype.createPolygonPath = function (radius) {
        var _a = this.attributes, defaultRadius = _a.defaultRadius, _b = __read(_a.center, 2), cx = _b[0], cy = _b[1];
        var path = this.points.map(function (_a, index) {
            var _b = __read(_a, 2), x = _b[0], y = _b[1];
            var _c = __read(scale([x, y], radius || defaultRadius), 2), tx = _c[0], ty = _c[1];
            return [index === 0 ? 'M' : 'L', cx + tx, cy + ty];
        });
        path.push(['Z']);
        return path;
    };
    /**
     * 求点与扇区单位边的交点
     */
    PolygonCrosshair.prototype.intersection = function (_a) {
        var _b;
        var _c = __read(_a, 2), x = _c[0], y = _c[1];
        var points = this.points;
        var _d = __read(this.attributes.center, 2), cx = _d[0], cy = _d[1];
        var ix;
        var iy;
        // 遍历每个边
        for (var i = 1; i <= points.length; i += 1) {
            var _e = __read(points[i - 1], 2), sx = _e[0], sy = _e[1];
            var _f = __read(points[i % points.length], 2), ex = _f[0], ey = _f[1];
            var inter = intersection([x, y], [cx, cy], [sx + cx, sy + cy], [ex + cx, ey + cy]);
            if (inter.length !== 0) {
                // 存在交点
                _b = __read(inter, 2), ix = _b[0], iy = _b[1];
            }
        }
        return [ix, iy];
    };
    PolygonCrosshair.tag = 'polygon-crosshair';
    PolygonCrosshair.defaultOptions = {
        style: POLYGON_CROSSHAIR_DEFAULT_STYLE,
    };
    return PolygonCrosshair;
}(CrosshairBase));
export { PolygonCrosshair };
//# sourceMappingURL=polygon.js.map