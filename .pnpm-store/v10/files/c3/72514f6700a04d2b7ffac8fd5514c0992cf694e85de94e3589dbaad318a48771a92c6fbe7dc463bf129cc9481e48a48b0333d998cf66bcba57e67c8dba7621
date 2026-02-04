import { __extends, __read, __spreadArray } from "tslib";
import { ElementEvent } from '@antv/g';
import { Group } from '../shapes/Group';
import { hide } from './visibility';
var OffscreenGroup = /** @class */ (function (_super) {
    __extends(OffscreenGroup, _super);
    function OffscreenGroup() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
        _this.isMutationObserved = true;
        _this.addEventListener(ElementEvent.INSERTED, function () {
            hide(_this);
        });
        return _this;
    }
    return OffscreenGroup;
}(Group));
export function createOffscreenGroup(container) {
    var group = container.appendChild(new OffscreenGroup({
        class: 'offscreen',
    }));
    hide(group);
    return group;
}
export function isInOffscreenGroup(group) {
    var ancestor = group;
    while (ancestor) {
        if (ancestor.className === 'offscreen') {
            return true;
        }
        ancestor = ancestor.parent;
    }
    return false;
}
//# sourceMappingURL=offscreen.js.map