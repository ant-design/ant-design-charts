import { __extends, __read } from "tslib";
import { ElementEvent } from '@antv/g';
import { Group } from '../../shapes';
import { BBox } from '../../util';
import { calcLayout } from '../../util/layout';
import { parseSeriesAttr } from '../../util/series';
var Layout = /** @class */ (function (_super) {
    __extends(Layout, _super);
    function Layout(options) {
        var _this = _super.call(this, options) || this;
        _this.layoutEvents = [ElementEvent.BOUNDS_CHANGED, ElementEvent.INSERTED, ElementEvent.REMOVED];
        _this.$margin = parseSeriesAttr(0);
        _this.$padding = parseSeriesAttr(0);
        var _a = options.style || {}, _b = _a.margin, margin = _b === void 0 ? 0 : _b, _c = _a.padding, padding = _c === void 0 ? 0 : _c;
        _this.margin = margin;
        _this.padding = padding;
        _this.isMutationObserved = true;
        _this.bindEvents();
        return _this;
    }
    Object.defineProperty(Layout.prototype, "margin", {
        get: function () {
            return this.$margin;
        },
        set: function (value) {
            this.$margin = parseSeriesAttr(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Layout.prototype, "padding", {
        get: function () {
            return this.$padding;
        },
        set: function (value) {
            this.$padding = parseSeriesAttr(value);
        },
        enumerable: false,
        configurable: true
    });
    Layout.prototype.getBBox = function () {
        var _a = this.attributes, _b = _a.x, x = _b === void 0 ? 0 : _b, _c = _a.y, y = _c === void 0 ? 0 : _c, width = _a.width, height = _a.height;
        var _d = __read(this.$margin, 4), marginTop = _d[0], marginRight = _d[1], marginBottom = _d[2], marginLeft = _d[3];
        return new BBox(x - marginLeft, y - marginTop, width + marginLeft + marginRight, height + marginTop + marginBottom);
    };
    Layout.prototype.appendChild = function (child, index) {
        child.isMutationObserved = true;
        _super.prototype.appendChild.call(this, child, index);
        return child;
    };
    Layout.prototype.getAvailableSpace = function () {
        var _a = this.attributes, width = _a.width, height = _a.height;
        var _b = __read(this.$padding, 4), paddingTop = _b[0], paddingRight = _b[1], paddingBottom = _b[2], paddingLeft = _b[3];
        var _c = __read(this.$margin, 4), marginTop = _c[0], marginLeft = _c[3];
        return new BBox(paddingLeft + marginLeft, paddingTop + marginTop, width - paddingLeft - paddingRight, height - paddingTop - paddingBottom);
    };
    Layout.prototype.layout = function () {
        if (!this.attributes.display || !this.isConnected)
            return;
        if (this.children.some(function (child) { return !child.isConnected; }))
            return;
        try {
            var _a = this.attributes, x = _a.x, y = _a.y;
            this.style.transform = "translate(".concat(x, ", ").concat(y, ")");
            var bboxes_1 = calcLayout(this.getAvailableSpace(), this.children.map(function (child) { return child.getBBox(); }), this.attributes);
            this.children.forEach(function (child, index) {
                var _a = bboxes_1[index], x = _a.x, y = _a.y;
                child.style.transform = "translate(".concat(x, ", ").concat(y, ")");
            });
        }
        catch (e) {
            // do nothing
        }
    };
    Layout.prototype.bindEvents = function () {
        var _this = this;
        this.layoutEvents.forEach(function (event) {
            _this.addEventListener(event, function (e) {
                if (!e.target)
                    return;
                e.target.isMutationObserved = true;
                _this.layout();
            });
        });
    };
    Layout.prototype.attributeChangedCallback = function (name, oldValue, newValue) {
        if (name === 'margin')
            this.margin = newValue;
        else if (name === 'padding')
            this.padding = newValue;
        this.layout();
    };
    return Layout;
}(Group));
export { Layout };
//# sourceMappingURL=layout.js.map