import { __assign, __extends } from "tslib";
import { Component } from '../../core';
import { maybeAppend, subStyleProps } from '../../util';
import { CHECKBOX_RECT_STYLE, CHECKED_SHAPE_STYLE, LABEL_TEXT_STYLE } from './constant';
function getLablePosition(shape, spacing) {
    var bounds = shape.getLocalBounds();
    return {
        x: bounds.halfExtents[0] ? bounds.max[0] + (spacing || 0) : shape.style.x,
        y: bounds.halfExtents[1] ? (bounds.min[1] + bounds.max[1]) / 2 : shape.style.y,
    };
}
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(options) {
        return _super.call(this, options, __assign({ labelText: '', spacing: 4, checked: false }, LABEL_TEXT_STYLE)) || this;
    }
    Checkbox.prototype.render = function (attributes, container) {
        var checked = attributes.checked, spacing = attributes.spacing;
        this.checked = !!checked;
        var group = maybeAppend(container, '.checkbox-content', 'g').attr('className', 'checkbox-content').node();
        var boxStyle = subStyleProps(attributes, 'box');
        var checkedStyle = subStyleProps(attributes, 'checked');
        var labelStyle = subStyleProps(attributes, 'label');
        var checkboxStyle = __assign(__assign({}, (this.checked ? CHECKBOX_RECT_STYLE.selected : CHECKBOX_RECT_STYLE.default)), boxStyle);
        var checkboxBoxCheckedStyle = __assign(__assign({}, CHECKED_SHAPE_STYLE), checkedStyle);
        this.checkboxBoxShape = maybeAppend(group, '.checkbox-box', 'rect')
            .styles(__assign({ className: 'checkbox-box', zIndex: (group.style.zIndex || 0) - 1 }, checkboxStyle))
            .node();
        maybeAppend(this.checkboxBoxShape, '.checkbox-checked', 'path').styles(__assign({ className: 'checkbox-box-checked', stroke: '#fff' }, checkboxBoxCheckedStyle));
        var _a = getLablePosition(this.checkboxBoxShape, Number(spacing)), x = _a.x, y = _a.y;
        maybeAppend(group, '.checkbox-label', 'text').styles(__assign({ className: 'checkbox-label', x: x, y: y }, labelStyle));
    };
    /**
     * 组件 checkbox
     */
    Checkbox.tag = 'checkbox';
    return Checkbox;
}(Component));
export { Checkbox };
//# sourceMappingURL=index.js.map