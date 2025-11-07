import { __read } from "tslib";
import { degToRad, parseSeriesAttr, textOf } from '../../../util';
var Bounds = /** @class */ (function () {
    function Bounds(x1, y1, x2, y2) {
        this.set(x1, y1, x2, y2);
    }
    Object.defineProperty(Bounds.prototype, "left", {
        get: function () {
            return this.x1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "top", {
        get: function () {
            return this.y1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "right", {
        get: function () {
            return this.x2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "bottom", {
        get: function () {
            return this.y2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "width", {
        get: function () {
            return this.defined('x2') && this.defined('x1') ? this.x2 - this.x1 : undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "height", {
        get: function () {
            return this.defined('y2') && this.defined('y1') ? this.y2 - this.y1 : undefined;
        },
        enumerable: false,
        configurable: true
    });
    Bounds.prototype.rotatedPoints = function (radian, x, y) {
        var _a = this, x1 = _a.x1, y1 = _a.y1, x2 = _a.x2, y2 = _a.y2;
        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        var cx = x - x * cos + y * sin;
        var cy = y - x * sin - y * cos;
        var points = [
            [cos * x1 - sin * y2 + cx, sin * x1 + cos * y2 + cy],
            [cos * x2 - sin * y2 + cx, sin * x2 + cos * y2 + cy],
            [cos * x1 - sin * y1 + cx, sin * x1 + cos * y1 + cy],
            [cos * x2 - sin * y1 + cx, sin * x2 + cos * y1 + cy],
        ];
        return points;
    };
    Bounds.prototype.set = function (x1, y1, x2, y2) {
        if (x2 < x1) {
            this.x2 = x1;
            this.x1 = x2;
        }
        else {
            this.x1 = x1;
            this.x2 = x2;
        }
        if (y2 < y1) {
            this.y2 = y1;
            this.y1 = y2;
        }
        else {
            this.y1 = y1;
            this.y2 = y2;
        }
        return this;
    };
    Bounds.prototype.defined = function (key) {
        return this[key] !== Number.MAX_VALUE && this[key] !== -Number.MAX_VALUE;
    };
    return Bounds;
}());
export { Bounds };
/**
 * Can't use getBounds directly since we should not use AABB here.
 */
export function getBounds(item, margin) {
    var angle = item.getEulerAngles() || 0;
    item.setEulerAngles(0);
    // get dimensions
    var _a = item.getBounds(), _b = __read(_a.min, 2), x = _b[0], y = _b[1], _c = __read(_a.max, 2), right = _c[0], bottom = _c[1];
    var _d = item.getBBox(), w = _d.width, h = _d.height;
    var height = h;
    var dx = 0;
    var dy = 0;
    var anchorX = x;
    var anchorY = y;
    var text = textOf(item);
    if (text) {
        // [to fix] 目前 G 上计算 bbox 有一点误差
        height -= 1.5;
        var a = text.style.textAlign;
        var b_1 = text.style.textBaseline;
        // horizontal alignment
        if (a === 'center') {
            anchorX = (x + right) / 2;
        }
        else if (a === 'right' || a === 'end') {
            anchorX = right;
        }
        else {
            // left by default, do nothing
        }
        // vertical alignment
        if (b_1 === 'middle') {
            anchorY = (y + bottom) / 2;
        }
        else if (b_1 === 'bottom') {
            anchorY = bottom;
        }
    }
    var _e = __read(parseSeriesAttr(margin), 4), _f = _e[0], t = _f === void 0 ? 0 : _f, _g = _e[1], r = _g === void 0 ? 0 : _g, _h = _e[2], b = _h === void 0 ? t : _h, _j = _e[3], l = _j === void 0 ? r : _j;
    var bounds = new Bounds((dx += x) - l, (dy += y) - t, dx + w + r, dy + height + b);
    item.setEulerAngles(angle);
    return bounds.rotatedPoints(degToRad(angle), anchorX, anchorY);
}
//# sourceMappingURL=bounds.js.map