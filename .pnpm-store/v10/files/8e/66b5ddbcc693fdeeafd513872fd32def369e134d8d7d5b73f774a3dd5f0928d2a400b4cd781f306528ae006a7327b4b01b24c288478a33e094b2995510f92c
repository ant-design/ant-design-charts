import { __read } from "tslib";
var BBox = /** @class */ (function () {
    function BBox(x, y, width, height) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    Object.defineProperty(BBox.prototype, "bottom", {
        get: function () {
            return this.y + this.height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BBox.prototype, "left", {
        get: function () {
            return this.x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BBox.prototype, "right", {
        get: function () {
            return this.x + this.width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BBox.prototype, "top", {
        get: function () {
            return this.y;
        },
        enumerable: false,
        configurable: true
    });
    BBox.fromRect = function (other) {
        return new BBox(other.x, other.y, other.width, other.height);
    };
    BBox.prototype.toJSON = function () {
        return {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            top: this.top,
            right: this.right,
            bottom: this.bottom,
            left: this.left,
        };
    };
    /**
     * 点是否在 bbox 中
     * @param p
     */
    BBox.prototype.isPointIn = function (x, y) {
        return x >= this.left && x <= this.right && y >= this.top && y <= this.bottom;
    };
    return BBox;
}());
export { BBox };
export function getRenderBBox(element) {
    var _a = element.getRenderBounds(), _b = __read(_a.min, 2), minX = _b[0], minY = _b[1], _c = __read(_a.max, 2), maxX = _c[0], maxY = _c[1];
    var width = maxX - minX;
    var height = maxY - minY;
    return new BBox(minX, minY, width, height);
}
//# sourceMappingURL=bbox.js.map