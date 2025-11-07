import { __assign, __extends, __read } from "tslib";
import { Component } from '../../core';
import { select, subStyleProps } from '../../util';
import { Tag } from '../tag';
import { CROSSHAIR_BASE_DEFAULT_STYLE } from './constant';
var CrosshairBase = /** @class */ (function (_super) {
    __extends(CrosshairBase, _super);
    function CrosshairBase(options) {
        // @ts-ignore
        return _super.call(this, options, CROSSHAIR_BASE_DEFAULT_STYLE) || this;
    }
    Object.defineProperty(CrosshairBase.prototype, "localPointer", {
        /**
         * 获得 pointer 的相对坐标
         */
        get: function () {
            var _a = __read(this.getPosition(), 2), bx = _a[0], by = _a[1];
            var _b = __read(this.pointer, 2), x = _b[0], y = _b[1];
            return [x - bx, y - by];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CrosshairBase.prototype, "tagStyle", {
        get: function () {
            var style = subStyleProps(this.attributes, 'tag');
            return style;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CrosshairBase.prototype, "crosshairStyle", {
        get: function () {
            var style = subStyleProps(this.attributes, 'line');
            return __assign(__assign({}, style), { d: this.crosshairPath });
        },
        enumerable: false,
        configurable: true
    });
    CrosshairBase.prototype.render = function (attributes, container) {
        var group = select(container).maybeAppendByClassName('.crosshair-group', 'g').node();
        this.shapesGroup = group;
        var tagStyle = this.tagStyle;
        var crosshairStyle = this.crosshairStyle;
        this.tagShape = select(group)
            .maybeAppendByClassName('crosshair-tag', function () { return new Tag({ style: tagStyle }); })
            .styles(tagStyle)
            .node();
        this.crosshairShape = select(group).maybeAppendByClassName('.crosshair-path', 'path').styles(crosshairStyle).node();
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
}(Component));
export { CrosshairBase };
//# sourceMappingURL=base.js.map