"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
var tslib_1 = require("tslib");
var core_1 = require("../../core");
var util_1 = require("../../util");
var constant_1 = require("./constant");
function getLablePosition(shape, spacing) {
    var bounds = shape.getLocalBounds();
    return {
        x: bounds.halfExtents[0] ? bounds.max[0] + (spacing || 0) : shape.style.x,
        y: bounds.halfExtents[1] ? (bounds.min[1] + bounds.max[1]) / 2 : shape.style.y,
    };
}
var Checkbox = /** @class */ (function (_super) {
    tslib_1.__extends(Checkbox, _super);
    function Checkbox(options) {
        return _super.call(this, options, tslib_1.__assign({ labelText: '', spacing: 4, checked: false }, constant_1.LABEL_TEXT_STYLE)) || this;
    }
    Checkbox.prototype.render = function (attributes, container) {
        var checked = attributes.checked, spacing = attributes.spacing;
        this.checked = !!checked;
        var group = (0, util_1.maybeAppend)(container, '.checkbox-content', 'g').attr('className', 'checkbox-content').node();
        var boxStyle = (0, util_1.subStyleProps)(attributes, 'box');
        var checkedStyle = (0, util_1.subStyleProps)(attributes, 'checked');
        var labelStyle = (0, util_1.subStyleProps)(attributes, 'label');
        var checkboxStyle = tslib_1.__assign(tslib_1.__assign({}, (this.checked ? constant_1.CHECKBOX_RECT_STYLE.selected : constant_1.CHECKBOX_RECT_STYLE.default)), boxStyle);
        var checkboxBoxCheckedStyle = tslib_1.__assign(tslib_1.__assign({}, constant_1.CHECKED_SHAPE_STYLE), checkedStyle);
        this.checkboxBoxShape = (0, util_1.maybeAppend)(group, '.checkbox-box', 'rect')
            .styles(tslib_1.__assign({ className: 'checkbox-box', zIndex: (group.style.zIndex || 0) - 1 }, checkboxStyle))
            .node();
        (0, util_1.maybeAppend)(this.checkboxBoxShape, '.checkbox-checked', 'path').styles(tslib_1.__assign({ className: 'checkbox-box-checked', stroke: '#fff' }, checkboxBoxCheckedStyle));
        var _a = getLablePosition(this.checkboxBoxShape, Number(spacing)), x = _a.x, y = _a.y;
        (0, util_1.maybeAppend)(group, '.checkbox-label', 'text').styles(tslib_1.__assign({ className: 'checkbox-label', x: x, y: y }, labelStyle));
    };
    /**
     * 组件 checkbox
     */
    Checkbox.tag = 'checkbox';
    return Checkbox;
}(core_1.Component));
exports.Checkbox = Checkbox;
//# sourceMappingURL=index.js.map