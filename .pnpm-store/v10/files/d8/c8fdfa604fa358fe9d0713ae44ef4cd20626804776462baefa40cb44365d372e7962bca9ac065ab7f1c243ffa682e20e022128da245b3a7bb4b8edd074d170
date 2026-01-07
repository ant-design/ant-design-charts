"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
var tslib_1 = require("tslib");
var core_1 = require("../../core");
var shapes_1 = require("../../shapes");
var util_1 = require("../../util");
var title_1 = require("./title");
var items_1 = require("./category/items");
var constant_1 = require("./constant");
var HtmlLegend = /** @class */ (function (_super) {
    tslib_1.__extends(HtmlLegend, _super);
    function HtmlLegend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HtmlLegend.prototype.update = function (options) {
        this.attr(options);
    };
    return HtmlLegend;
}(shapes_1.HTML));
var Category = /** @class */ (function (_super) {
    tslib_1.__extends(Category, _super);
    function Category(options) {
        return _super.call(this, options, constant_1.CATEGORY_DEFAULT_OPTIONS) || this;
    }
    Category.prototype.renderTitle = function (container, width, height) {
        var _a = this.attributes, showTitle = _a.showTitle, titleText = _a.titleText, classNamePrefix = _a.classNamePrefix;
        var style = (0, util_1.subStyleProps)(this.attributes, 'title');
        var _b = tslib_1.__read((0, util_1.splitStyle)(style), 2), titleStyle = _b[0], groupStyle = _b[1];
        this.titleGroup = container.maybeAppendByClassName(constant_1.CLASS_NAMES.titleGroup, 'g').styles(groupStyle);
        var finalTitleStyle = tslib_1.__assign(tslib_1.__assign({ width: width, height: height }, titleStyle), { text: showTitle ? titleText : '', classNamePrefix: classNamePrefix });
        this.title = this.titleGroup
            .maybeAppendByClassName(constant_1.CLASS_NAMES.title, function () { return new title_1.Title({ style: finalTitleStyle }); })
            .update(finalTitleStyle);
    };
    Category.prototype.renderCustom = function (container) {
        var data = this.attributes.data;
        var style = {
            innerHTML: this.attributes.render(data),
            pointerEvents: 'auto',
        };
        container
            .maybeAppendByClassName(constant_1.CLASS_NAMES.html, function () {
            return new HtmlLegend({
                className: constant_1.CLASS_NAMES.html.name,
                style: style,
            });
        })
            .update(style);
    };
    Category.prototype.renderItems = function (container, bbox) {
        var x = bbox.x, y = bbox.y, width = bbox.width, height = bbox.height;
        var style = (0, util_1.subStyleProps)(this.attributes, 'title', true);
        var _a = tslib_1.__read((0, util_1.splitStyle)(style), 2), partialItemStyle = _a[0], groupStyle = _a[1];
        // overwrite width and height to available space
        // overwrite x and y to 0
        var itemStyle = tslib_1.__assign(tslib_1.__assign({}, partialItemStyle), { width: width, height: height, x: 0, y: 0 });
        this.itemsGroup = container
            .maybeAppendByClassName(constant_1.CLASS_NAMES.itemsGroup, 'g')
            .styles(tslib_1.__assign(tslib_1.__assign({}, groupStyle), { transform: "translate(".concat(x, ", ").concat(y, ")") }));
        var that = this;
        this.itemsGroup
            .selectAll(constant_1.CLASS_NAMES.items.class)
            .data(['items'])
            .join(function (enter) {
            return enter
                .append(function () { return new items_1.CategoryItems({ style: itemStyle }); })
                .attr('className', constant_1.CLASS_NAMES.items.name)
                .each(function () {
                that.items = (0, util_1.select)(this);
            });
        }, function (update) { return update.update(itemStyle); }, function (exit) { return exit.remove(); });
    };
    Category.prototype.adjustLayout = function () {
        var showTitle = this.attributes.showTitle;
        if (showTitle) {
            var _a = this.title.node().getAvailableSpace(), x = _a.x, y = _a.y;
            this.itemsGroup.node().style.transform = "translate(".concat(x, ", ").concat(y, ")");
        }
    };
    Object.defineProperty(Category.prototype, "availableSpace", {
        get: function () {
            var _a = this.attributes, showTitle = _a.showTitle, width = _a.width, height = _a.height;
            if (!showTitle)
                return new util_1.BBox(0, 0, width, height);
            return this.title.node().getAvailableSpace();
        },
        enumerable: false,
        configurable: true
    });
    Category.prototype.getBBox = function () {
        var _a, _b;
        var title = (_a = this.title) === null || _a === void 0 ? void 0 : _a.node();
        var items = (_b = this.items) === null || _b === void 0 ? void 0 : _b.node();
        if (!title || !items)
            return _super.prototype.getBBox.call(this);
        return (0, title_1.getBBox)(title, items);
    };
    Category.prototype.render = function (attributes, container) {
        var _a = this.attributes, width = _a.width, height = _a.height, _b = _a.x, x = _b === void 0 ? 0 : _b, _c = _a.y, y = _c === void 0 ? 0 : _c, classNamePrefix = _a.classNamePrefix, render = _a.render;
        var ctn = (0, util_1.select)(container);
        // Set root container className
        var baseClassName = container.className || 'legend-category';
        if (classNamePrefix) {
            container.attr('className', "".concat(baseClassName, " ").concat(classNamePrefix, "legend"));
        }
        else if (!container.className) {
            container.attr('className', 'legend-category');
        }
        container.style.transform = "translate(".concat(x, ", ").concat(y, ")");
        if (render) {
            this.renderCustom(ctn);
        }
        else {
            this.renderTitle(ctn, width, height);
            this.renderItems(ctn, this.availableSpace);
            this.adjustLayout();
        }
    };
    return Category;
}(core_1.Component));
exports.Category = Category;
//# sourceMappingURL=category.js.map