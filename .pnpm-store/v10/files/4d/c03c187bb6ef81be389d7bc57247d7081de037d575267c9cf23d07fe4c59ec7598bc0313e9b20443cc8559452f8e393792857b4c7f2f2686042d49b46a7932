"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOffscreenGroup = createOffscreenGroup;
exports.isInOffscreenGroup = isInOffscreenGroup;
var tslib_1 = require("tslib");
var g_1 = require("@antv/g");
var Group_1 = require("../shapes/Group");
var visibility_1 = require("./visibility");
var OffscreenGroup = /** @class */ (function (_super) {
    tslib_1.__extends(OffscreenGroup, _super);
    function OffscreenGroup() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(args), false)) || this;
        _this.isMutationObserved = true;
        _this.addEventListener(g_1.ElementEvent.INSERTED, function () {
            (0, visibility_1.hide)(_this);
        });
        return _this;
    }
    return OffscreenGroup;
}(Group_1.Group));
function createOffscreenGroup(container) {
    var group = container.appendChild(new OffscreenGroup({
        class: 'offscreen',
    }));
    (0, visibility_1.hide)(group);
    return group;
}
function isInOffscreenGroup(group) {
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