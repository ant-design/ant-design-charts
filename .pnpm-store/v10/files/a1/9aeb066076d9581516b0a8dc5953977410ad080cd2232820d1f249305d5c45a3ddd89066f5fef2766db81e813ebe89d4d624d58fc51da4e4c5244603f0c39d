"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleCrosshair = void 0;
var tslib_1 = require("tslib");
var util_1 = require("../../util");
var symbol_1 = require("../marker/symbol");
var base_1 = require("./base");
var constant_1 = require("./constant");
var CircleCrosshair = /** @class */ (function (_super) {
    tslib_1.__extends(CircleCrosshair, _super);
    function CircleCrosshair(options) {
        return _super.call(this, (0, util_1.deepAssign)({}, CircleCrosshair.defaultOptions, options)) || this;
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
        var _b = tslib_1.__read(_a, 2), x = _b[0], y = _b[1];
        _super.prototype.setPointer.call(this, [x, y]);
        var _c = tslib_1.__read(this.localPointer, 2), lx = _c[0], ly = _c[1];
        var _d = tslib_1.__read(this.attributes.center, 2), cx = _d[0], cy = _d[1];
        var path = this.createCirclePath(Math.pow((Math.pow((lx - cx), 2) + Math.pow((ly - cy), 2)), 0.5));
        this.crosshairShape.attr({ d: path });
    };
    CircleCrosshair.prototype.adjustLayout = function () {
        (0, util_1.hide)(this.tagShape);
    };
    CircleCrosshair.prototype.createCirclePath = function (radius) {
        var _a = this.attributes, _b = tslib_1.__read(_a.center, 2), x = _b[0], y = _b[1], defaultRadius = _a.defaultRadius;
        return (0, symbol_1.circle)(x, y, radius || defaultRadius);
    };
    CircleCrosshair.tag = 'circle-crosshair';
    CircleCrosshair.defaultOptions = {
        style: constant_1.CIRCLE_CROSSHAIR_DEFAULT_STYLE,
    };
    return CircleCrosshair;
}(base_1.CrosshairBase));
exports.CircleCrosshair = CircleCrosshair;
//# sourceMappingURL=circle.js.map