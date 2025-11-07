"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrosshairBase = void 0;
var tslib_1 = require("tslib");
var core_1 = require("../../core");
var util_1 = require("../../util");
var tag_1 = require("../tag");
var constant_1 = require("./constant");
var CrosshairBase = /** @class */ (function (_super) {
    tslib_1.__extends(CrosshairBase, _super);
    function CrosshairBase(options) {
        // @ts-ignore
        return _super.call(this, options, constant_1.CROSSHAIR_BASE_DEFAULT_STYLE) || this;
    }
    Object.defineProperty(CrosshairBase.prototype, "localPointer", {
        /**
         * 获得 pointer 的相对坐标
         */
        get: function () {
            var _a = tslib_1.__read(this.getPosition(), 2), bx = _a[0], by = _a[1];
            var _b = tslib_1.__read(this.pointer, 2), x = _b[0], y = _b[1];
            return [x - bx, y - by];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CrosshairBase.prototype, "tagStyle", {
        get: function () {
            var style = (0, util_1.subStyleProps)(this.attributes, 'tag');
            return style;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CrosshairBase.prototype, "crosshairStyle", {
        get: function () {
            var style = (0, util_1.subStyleProps)(this.attributes, 'line');
            return tslib_1.__assign(tslib_1.__assign({}, style), { d: this.crosshairPath });
        },
        enumerable: false,
        configurable: true
    });
    CrosshairBase.prototype.render = function (attributes, container) {
        var group = (0, util_1.select)(container).maybeAppendByClassName('.crosshair-group', 'g').node();
        this.shapesGroup = group;
        var tagStyle = this.tagStyle;
        var crosshairStyle = this.crosshairStyle;
        this.tagShape = (0, util_1.select)(group)
            .maybeAppendByClassName('crosshair-tag', function () { return new tag_1.Tag({ style: tagStyle }); })
            .styles(tagStyle)
            .node();
        this.crosshairShape = (0, util_1.select)(group).maybeAppendByClassName('.crosshair-path', 'path').styles(crosshairStyle).node();
        this.adjustLayout();
    };
    /**
     * 设置当前指针的位置
     * 1. 线条类型 调整位置即可
     * 2. circle 和 polygon 需要重新计算 path
     */
    CrosshairBase.prototype.setPointer = function (pointer) {
        this.pointer = pointer;
    };
    CrosshairBase.tag = 'crosshair-base';
    return CrosshairBase;
}(core_1.Component));
exports.CrosshairBase = CrosshairBase;
//# sourceMappingURL=base.js.map