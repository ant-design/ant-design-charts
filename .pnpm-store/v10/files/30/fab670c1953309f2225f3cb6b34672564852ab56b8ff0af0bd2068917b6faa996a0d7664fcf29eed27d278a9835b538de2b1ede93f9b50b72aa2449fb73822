import { __extends, __rest } from "tslib";
import { CustomElement } from '../shapes';
import { createOffscreenGroup, deepAssign, visibility } from '../util';
function applyVisibility() {
    visibility(this, this.attributes.visibility !== 'hidden');
}
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component(options, defaultStyleProps) {
        if (defaultStyleProps === void 0) { defaultStyleProps = {}; }
        var _this = _super.call(this, deepAssign({}, { style: defaultStyleProps }, options)) || this;
        _this.initialized = false;
        _this._defaultOptions = defaultStyleProps;
        return _this;
    }
    Object.defineProperty(Component.prototype, "offscreenGroup", {
        get: function () {
            if (!this._offscreen)
                this._offscreen = createOffscreenGroup(this);
            return this._offscreen;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Component.prototype, "defaultOptions", {
        get: function () {
            return this._defaultOptions;
        },
        enumerable: false,
        configurable: true
    });
    Component.prototype.connectedCallback = function () {
        this.render(this.attributes, this);
        this.bindEvents(this.attributes, this);
        this.initialized = true;
    };
    Component.prototype.disconnectedCallback = function () {
        var _a;
        (_a = this._offscreen) === null || _a === void 0 ? void 0 : _a.destroy();
    };
    Component.prototype.attributeChangedCallback = function (name) {
        if (name === 'visibility') {
            applyVisibility.call(this);
        }
    };
    Component.prototype.update = function (attr, animate) {
        var _a;
        this.attr(deepAssign({}, this.attributes, attr || {}));
        return (_a = this.render) === null || _a === void 0 ? void 0 : _a.call(this, this.attributes, this, animate);
    };
    Component.prototype.clear = function () {
        this.removeChildren();
    };
    Component.prototype.bindEvents = function (attributes, container) { };
    Component.prototype.getSubShapeStyle = function (attributes) {
        var x = attributes.x, y = attributes.y, transform = attributes.transform, transformOrigin = attributes.transformOrigin, _class = attributes.class, className = attributes.className, zIndex = attributes.zIndex, style = __rest(attributes, ["x", "y", "transform", "transformOrigin", "class", "className", "zIndex"]);
        return style;
    };
    return Component;
}(CustomElement));
export { Component };
//# sourceMappingURL=component.js.map