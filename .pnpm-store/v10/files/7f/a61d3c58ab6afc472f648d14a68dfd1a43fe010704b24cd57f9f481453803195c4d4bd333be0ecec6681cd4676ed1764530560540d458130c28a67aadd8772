import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import { CustomEvent } from '@antv/g';
import { noop, set } from '@antv/util';
import { Component } from '../../../core';
import { Group } from '../../../shapes';
import { classNames, deepAssign, getCallbackValue, groupBy, select, subStyleProps, } from '../../../util';
import { Navigator } from '../../navigator';
import { ifHorizontal } from '../utils';
import { CategoryItem } from './item';
import { getLegendClassName } from '../utils/classname';
import { CLASSNAME_SUFFIX_MAP } from '../constant';
var CLASS_NAMES = classNames({
    page: 'item-page',
    navigator: 'navigator',
    item: 'item',
}, 'items');
/**
 * if value exists, it need to follow rule, otherwise, return default value
 * @param value
 * @param rule
 * @param defaultValue
 * @returns
 */
var ifSatisfied = function (value, rule, defaultValue) {
    if (defaultValue === void 0) { defaultValue = true; }
    if (value) {
        return rule(value);
    }
    return defaultValue;
};
var CategoryItems = /** @class */ (function (_super) {
    __extends(CategoryItems, _super);
    function CategoryItems(options) {
        var _this = _super.call(this, options, {
            data: [],
            gridRow: Infinity,
            gridCol: undefined,
            padding: 0,
            width: 1000,
            height: 100,
            rowPadding: 0,
            colPadding: 0,
            layout: 'flex',
            orientation: 'horizontal',
            click: noop,
            mouseenter: noop,
            mouseleave: noop,
        }) || this;
        _this.navigatorShape = [0, 0];
        return _this;
    }
    Object.defineProperty(CategoryItems.prototype, "pageViews", {
        get: function () {
            return this.navigator.getContainer();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CategoryItems.prototype, "grid", {
        get: function () {
            var _a = this.attributes, gridRow = _a.gridRow, gridCol = _a.gridCol, data = _a.data;
            if (!gridRow && !gridCol)
                throw new Error('gridRow and gridCol can not be set null at the same time');
            if (!!gridRow && !!gridCol)
                return [gridRow, gridCol];
            if (gridRow)
                return [gridRow, data.length];
            return [data.length, gridCol]; // !!gridCol
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CategoryItems.prototype, "renderData", {
        get: function () {
            var _a = this.attributes, data = _a.data, layout = _a.layout, poptip = _a.poptip, focus = _a.focus, focusMarkerSize = _a.focusMarkerSize, classNamePrefix = _a.classNamePrefix;
            var style = subStyleProps(this.attributes, 'item');
            var d = data.map(function (datum, index) {
                var _a = datum.id, id = _a === void 0 ? index : _a, labelText = datum.label, valueText = datum.value;
                return {
                    id: "".concat(id),
                    index: index,
                    style: __assign({ layout: layout, labelText: labelText, valueText: valueText, poptip: poptip, focus: focus, focusMarkerSize: focusMarkerSize, classNamePrefix: classNamePrefix }, Object.fromEntries(Object.entries(style).map(function (_a) {
                        var _b = __read(_a, 2), key = _b[0], val = _b[1];
                        return [key, getCallbackValue(val, [datum, index, data])];
                    }))),
                };
            });
            return d;
        },
        enumerable: false,
        configurable: true
    });
    CategoryItems.prototype.getGridLayout = function () {
        var _this = this;
        var _a = this.attributes, orientation = _a.orientation, width = _a.width, rowPadding = _a.rowPadding, colPadding = _a.colPadding;
        var _b = __read(this.navigatorShape, 1), navWidth = _b[0];
        var _c = __read(this.grid, 2), gridRow = _c[0], gridCol = _c[1];
        var pageSize = gridCol * gridRow;
        var prevOffset = 0;
        return this.pageViews.children.map(function (item, index) {
            var _a, _b;
            // calc page, row and column
            var page = Math.floor(index / pageSize);
            var pageIndex = index % pageSize;
            var dir = _this.ifHorizontal(gridCol, gridRow);
            var pos = [Math.floor(pageIndex / dir), pageIndex % dir];
            if (orientation === 'vertical')
                pos.reverse();
            var _c = __read(pos, 2), row = _c[0], col = _c[1];
            // calc x, y and shape
            var colWidth = (width - navWidth - (gridCol - 1) * colPadding) / gridCol;
            // const rowHeight = getRenderBBox(item).height;
            var rowHeight = item.getBBox().height;
            var _d = __read([0, 0], 2), x = _d[0], y = _d[1];
            if (orientation === 'horizontal') {
                _a = __read([prevOffset, row * (rowHeight + rowPadding)], 2), x = _a[0], y = _a[1];
                prevOffset = col === gridCol - 1 ? 0 : prevOffset + colWidth + colPadding;
            }
            else {
                _b = __read([col * (colWidth + colPadding), prevOffset], 2), x = _b[0], y = _b[1];
                prevOffset = row === gridRow - 1 ? 0 : prevOffset + rowHeight + rowPadding;
            }
            return { page: page, index: index, row: row, col: col, pageIndex: pageIndex, width: colWidth, height: rowHeight, x: x, y: y };
        });
    };
    CategoryItems.prototype.getFlexLayout = function () {
        var _a = this.attributes, maxWidth = _a.width, maxHeight = _a.height, rowPadding = _a.rowPadding, cP = _a.colPadding;
        var _b = __read(this.navigatorShape, 1), navWidth = _b[0];
        var _c = __read(this.grid, 2), gridRow = _c[0], gridCol = _c[1];
        var _d = __read([maxWidth - navWidth, maxHeight], 2), limitWidth = _d[0], limitHeight = _d[1];
        var _e = __read([0, 0, 0, 0, 0, 0, 0, 0], 8), x = _e[0], y = _e[1], page = _e[2], pageIndex = _e[3], col = _e[4], row = _e[5], prevWidth = _e[6], prevHeight = _e[7];
        return this.pageViews.children.map(function (item, index) {
            var _a, _b, _c, _d;
            // const { width, height } = getRenderBBox(item);
            var _e = item.getBBox(), width = _e.width, height = _e.height;
            var colPadding = prevWidth === 0 ? 0 : cP;
            // assume that every item has the same height
            var nextWidth = prevWidth + colPadding + width;
            // inline
            if (nextWidth <= limitWidth && ifSatisfied(col, function (c) { return c < gridCol; })) {
                _a = __read([prevWidth + colPadding, prevHeight, nextWidth], 3), x = _a[0], y = _a[1], prevWidth = _a[2];
                return { width: width, height: height, x: x, y: y, page: page, index: index, pageIndex: pageIndex++, row: row, col: col++ };
            }
            // wrap
            _b = __read([row + 1, 0, 0, prevHeight + height + rowPadding], 4), row = _b[0], col = _b[1], prevWidth = _b[2], prevHeight = _b[3];
            var nextHeight = prevHeight + height;
            if (nextHeight <= limitHeight && ifSatisfied(row, function (r) { return r < gridRow; })) {
                _c = __read([prevWidth, prevHeight, width], 3), x = _c[0], y = _c[1], prevWidth = _c[2];
                return { width: width, height: height, x: x, y: y, page: page, index: index, pageIndex: pageIndex++, row: row, col: col++ };
            }
            // paging
            _d = __read([0, 0, width, 0, page + 1, 0, 0, 0], 8), x = _d[0], y = _d[1], prevWidth = _d[2], prevHeight = _d[3], page = _d[4], pageIndex = _d[5], row = _d[6], col = _d[7];
            return { width: width, height: height, x: x, y: y, page: page, index: index, pageIndex: pageIndex++, row: row, col: col++ };
        });
    };
    Object.defineProperty(CategoryItems.prototype, "itemsLayout", {
        get: function () {
            this.navigatorShape = [0, 0];
            var cb = this.attributes.layout === 'grid' ? this.getGridLayout : this.getFlexLayout;
            var layout = cb.call(this);
            // re layout
            if (layout.slice(-1)[0].page > 0) {
                this.navigatorShape = [55, 0];
                return cb.call(this);
            }
            return layout;
        },
        enumerable: false,
        configurable: true
    });
    CategoryItems.prototype.ifHorizontal = function (a, b) {
        var orientation = this.attributes.orientation;
        return ifHorizontal(orientation, a, b);
    };
    CategoryItems.prototype.flattenPage = function (container) {
        container.querySelectorAll(CLASS_NAMES.item.class).forEach(function (item) {
            container.appendChild(item);
        });
        container.querySelectorAll(CLASS_NAMES.page.class).forEach(function (page) {
            var removedPage = container.removeChild(page);
            removedPage.destroy();
        });
    };
    CategoryItems.prototype.renderItems = function (container) {
        var _a = this.attributes, click = _a.click, mouseenter = _a.mouseenter, mouseleave = _a.mouseleave, classNamePrefix = _a.classNamePrefix;
        this.flattenPage(container);
        var dispatchCustomEvent = this.dispatchCustomEvent.bind(this);
        var itemClassName = getLegendClassName(CLASS_NAMES.item.name, CLASSNAME_SUFFIX_MAP.item, classNamePrefix);
        select(container)
            .selectAll(CLASS_NAMES.item.class)
            .data(this.renderData, function (d) { return d.id; })
            .join(function (enter) {
            return enter
                .append(function (_a) {
                var style = _a.style, rest = __rest(_a, ["style"]);
                return new CategoryItem({ style: style }, rest);
            })
                .attr('className', itemClassName)
                .on('click', function () {
                click === null || click === void 0 ? void 0 : click(this);
                dispatchCustomEvent('itemClick', { item: this });
            })
                .on('pointerenter', function () {
                mouseenter === null || mouseenter === void 0 ? void 0 : mouseenter(this);
                dispatchCustomEvent('itemMouseenter', { item: this });
            })
                .on('pointerleave', function () {
                mouseleave === null || mouseleave === void 0 ? void 0 : mouseleave(this);
                dispatchCustomEvent('itemMouseleave', { item: this });
            });
        }, function (update) {
            return update.each(function (_a) {
                var style = _a.style;
                this.update(style);
            });
        }, function (exit) { return exit.remove(); });
    };
    CategoryItems.prototype.relayoutNavigator = function () {
        var _a;
        var _b = this.attributes, layout = _b.layout, width = _b.width;
        var height = ((_a = this.pageViews.children[0]) === null || _a === void 0 ? void 0 : _a.getBBox().height) || 0;
        var _c = __read(this.navigatorShape, 2), navWidth = _c[0], navHeight = _c[1];
        this.navigator.update(layout === 'grid' ? { pageWidth: width - navWidth, pageHeight: height - navHeight } : {});
    };
    CategoryItems.prototype.adjustLayout = function () {
        var _this = this;
        var itemsLayouts = Object.entries(groupBy(this.itemsLayout, 'page')).map(function (_a) {
            var _b = __read(_a, 2), page = _b[0], layouts = _b[1];
            return ({
                page: page,
                layouts: layouts,
            });
        });
        var categoryItems = __spreadArray([], __read(this.navigator.getContainer().children), false);
        itemsLayouts.forEach(function (_a) {
            var layouts = _a.layouts;
            var page = _this.pageViews.appendChild(new Group({ className: CLASS_NAMES.page.name }));
            layouts.forEach(function (layout) {
                var x = layout.x, y = layout.y, index = layout.index, width = layout.width, height = layout.height;
                var item = categoryItems[index];
                // @ts-ignore
                page.appendChild(item);
                set(item, '__layout__', layout);
                item.update({ x: x, y: y, width: width, height: height });
            });
        });
        this.relayoutNavigator();
    };
    CategoryItems.prototype.renderNavigator = function (container) {
        var _a = this.attributes, orientation = _a.orientation, classNamePrefix = _a.classNamePrefix;
        var navStyle = subStyleProps(this.attributes, 'nav');
        var style = deepAssign({ orientation: orientation, classNamePrefix: classNamePrefix }, navStyle);
        var that = this;
        container
            .selectAll(CLASS_NAMES.navigator.class)
            .data(['nav'])
            .join(function (enter) {
            return enter
                .append(function () { return new Navigator({ style: style }); })
                .attr('className', CLASS_NAMES.navigator.name)
                .each(function () {
                that.navigator = this;
            });
        }, function (update) {
            return update.each(function () {
                this.update(style);
            });
        }, function (exit) { return exit.remove(); });
        return this.navigator;
    };
    CategoryItems.prototype.getBBox = function () {
        return this.navigator.getBBox();
    };
    CategoryItems.prototype.render = function (attributes, container) {
        var data = this.attributes.data;
        if (!data || data.length === 0)
            return;
        /**
         * 1. render items
         * 2. paging
         * 3. layout
         */
        var navigator = this.renderNavigator(select(container));
        this.renderItems(navigator.getContainer());
        this.adjustLayout();
    };
    CategoryItems.prototype.dispatchCustomEvent = function (type, payload) {
        var evt = new CustomEvent(type, {
            detail: payload,
        });
        this.dispatchEvent(evt);
    };
    return CategoryItems;
}(Component));
export { CategoryItems };
//# sourceMappingURL=items.js.map