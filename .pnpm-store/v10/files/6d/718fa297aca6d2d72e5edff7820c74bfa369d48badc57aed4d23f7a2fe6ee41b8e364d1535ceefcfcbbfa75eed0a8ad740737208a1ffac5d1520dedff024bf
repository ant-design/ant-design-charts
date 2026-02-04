import { __extends, __read } from "tslib";
import { deepAssign, getShapeSpace, hide, show } from '../../util';
import { CrosshairBase } from './base';
import { LINE_CROSSHAIR_DEFAULT_STYLE } from './constant';
var LineCrosshair = /** @class */ (function (_super) {
    __extends(LineCrosshair, _super);
    function LineCrosshair(options) {
        return _super.call(this, deepAssign({}, LineCrosshair.defaultOptions, options)) || this;
    }
    Object.defineProperty(LineCrosshair.prototype, "crosshairPath", {
        get: function () {
            var _a = this.attributes, _b = __read(_a.startPos, 2), sx = _b[0], sy = _b[1], _c = __read(_a.endPos, 2), ex = _c[0], ey = _c[1];
            var path = [['M', 0, 0], ['L', ex - sx, ey - sy], ['Z']];
            return path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LineCrosshair.prototype, "localPointer", {
        /**
         * 获得 pointer 的相对坐标
         */
        get: function () {
            if (!this.pointer)
                return this.attributes.startPos;
            var _a = __read(this.getPosition(), 2), bx = _a[0], by = _a[1];
            var _b = __read(this.pointer, 2), x = _b[0], y = _b[1];
            return [x - bx, y - by];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LineCrosshair.prototype, "isVertical", {
        get: function () {
            var _a = this.attributes, _b = __read(_a.startPos, 2), x1 = _b[0], y1 = _b[1], _c = __read(_a.endPos, 2), x2 = _c[0], y2 = _c[1];
            return x1 === x2 && y1 !== y2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LineCrosshair.prototype, "tagShapeSpace", {
        get: function () {
            var _a = getShapeSpace(this.tagShape), width = _a.width, height = _a.height;
            return { width: width, height: height };
        },
        enumerable: false,
        configurable: true
    });
    LineCrosshair.prototype.update = function (cfg) {
        _super.prototype.update.call(this, cfg);
    };
    /**
     * 将线移动至对应位置
     */
    LineCrosshair.prototype.setPointer = function (pointer) {
        _super.prototype.setPointer.call(this, pointer);
        this.adjustPosition();
    };
    LineCrosshair.prototype.setText = function (text) {
        this.tagShape.update({ text: text });
        this.adjustTag();
    };
    LineCrosshair.prototype.adjustLayout = function () {
        this.adjustPosition();
        this.adjustTag();
    };
    /**
     * 调整this位置
     */
    LineCrosshair.prototype.adjustPosition = function () {
        var _a = __read(this.localPointer, 2), lx = _a[0], ly = _a[1];
        var _b = __read(this.attributes.startPos, 2), sx = _b[0], sy = _b[1];
        var targetPos = this.getOrientVal([sx, ly], [lx, sy]);
        this.shapesGroup.setLocalPosition(targetPos);
    };
    /**
     * 调整tag位置
     */
    LineCrosshair.prototype.adjustTag = function () {
        var _a = this.attributes, tagText = _a.tagText, tagPosition = _a.tagPosition, _b = __read(_a.startPos, 2), x1 = _b[0], y1 = _b[1], _c = __read(_a.endPos, 2), x2 = _c[0], y2 = _c[1];
        if (!tagText || tagText === '') {
            hide(this.tagShape);
            return;
        }
        show(this.tagShape);
        var _d = this.tagShapeSpace, width = _d.width, height = _d.height;
        // 偏移量
        var _e = __read(this.getOrientVal({
            start: [-width / 2, height / 2],
            end: [x2 - x1 + width / 2, height / 2],
        }, {
            start: [0, 0],
            end: [0, y2 - y1 + height],
        })[tagPosition], 2), xOffset = _e[0], yOffset = _e[1];
        this.tagShape.setLocalPosition(xOffset, yOffset);
    };
    LineCrosshair.prototype.getOrientVal = function (v1, v2) {
        return this.isVertical ? v2 : v1;
    };
    LineCrosshair.tag = 'line-crosshair';
    LineCrosshair.defaultOptions = {
        style: LINE_CROSSHAIR_DEFAULT_STYLE,
    };
    return LineCrosshair;
}(CrosshairBase));
export { LineCrosshair };
//# sourceMappingURL=line.js.map