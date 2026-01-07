import { __extends, __read } from "tslib";
import { deepAssign, hide } from '../../util';
import { circle } from '../marker/symbol';
import { CrosshairBase } from './base';
import { CIRCLE_CROSSHAIR_DEFAULT_STYLE } from './constant';
var CircleCrosshair = /** @class */ (function (_super) {
    __extends(CircleCrosshair, _super);
    function CircleCrosshair(options) {
        return _super.call(this, deepAssign({}, CircleCrosshair.defaultOptions, options)) || this;
    }
    Object.defineProperty(CircleCrosshair.prototype, "crosshairPath", {
        get: function () {
            return this.createCirclePath();
        },
        enumerable: false,
        configurable: true
    });
    CircleCrosshair.prototype.update = function (cfg) {
        _super.prototype.update.call(this, cfg);
    };
    CircleCrosshair.prototype.setPointer = function (_a) {
        var _b = __read(_a, 2), x = _b[0], y = _b[1];
        _super.prototype.setPointer.call(this, [x, y]);
        var _c = __read(this.localPointer, 2), lx = _c[0], ly = _c[1];
        var _d = __read(this.attributes.center, 2), cx = _d[0], cy = _d[1];
        var path = this.createCirclePath(Math.pow((Math.pow((lx - cx), 2) + Math.pow((ly - cy), 2)), 0.5));
        this.crosshairShape.attr({ d: path });
    };
    CircleCrosshair.prototype.adjustLayout = function () {
        hide(this.tagShape);
    };
    CircleCrosshair.prototype.createCirclePath = function (radius) {
        var _a = this.attributes, _b = __read(_a.center, 2), x = _b[0], y = _b[1], defaultRadius = _a.defaultRadius;
        return circle(x, y, radius || defaultRadius);
    };
    CircleCrosshair.tag = 'circle-crosshair';
    CircleCrosshair.defaultOptions = {
        style: CIRCLE_CROSSHAIR_DEFAULT_STYLE,
    };
    return CircleCrosshair;
}(CrosshairBase));
export { CircleCrosshair };
//# sourceMappingURL=circle.js.map