"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flex = void 0;
var tslib_1 = require("tslib");
var utils_1 = require("../utils");
var bbox_1 = require("../../bbox");
var flex = function (container, children, config) {
    var width = container.width, height = container.height;
    var _a = config.flexDirection, flexDirection = _a === void 0 ? 'row' : _a, _b = config.flexWrap, flexWrap = _b === void 0 ? 'nowrap' : _b, _c = config.justifyContent, justifyContent = _c === void 0 ? 'flex-start' : _c, _d = config.alignContent, alignContent = _d === void 0 ? 'flex-start' : _d, _e = config.alignItems, alignItems = _e === void 0 ? 'flex-start' : _e;
    var isHorizontalFlow = flexDirection === 'row'; // || flexDirection === 'row-reverse';
    var isLeftToRightFlow = flexDirection === 'row' || flexDirection === 'column';
    // implement default layout;
    // flex direction
    var direction = isHorizontalFlow ? (isLeftToRightFlow ? [1, 0] : [-1, 0]) : isLeftToRightFlow ? [0, 1] : [0, -1];
    var _f = tslib_1.__read([0, 0], 2), offsetX = _f[0], offsetY = _f[1];
    var itemsFromDirection = children.map(function (child) {
        var _a;
        var width = child.width, height = child.height;
        var _b = tslib_1.__read([offsetX, offsetY], 2), x = _b[0], y = _b[1];
        _a = tslib_1.__read([offsetX + width * direction[0], offsetY + height * direction[1]], 2), offsetX = _a[0], offsetY = _a[1];
        return new bbox_1.BBox(x, y, width, height);
    });
    // flex wrap
    // todo
    // justify content
    // flex-start, flex-end, center
    var itemsForJustifyContentBBox = (0, utils_1.getItemsBBox)(itemsFromDirection);
    var justifyContentOffset = {
        'flex-start': 0,
        'flex-end': isHorizontalFlow
            ? width - itemsForJustifyContentBBox.width
            : height - itemsForJustifyContentBBox.height,
        center: isHorizontalFlow
            ? (width - itemsForJustifyContentBBox.width) / 2
            : (height - itemsForJustifyContentBBox.height) / 2,
    };
    var itemsFromJustifyContent = itemsFromDirection.map(function (item) {
        var x = item.x, y = item.y;
        var itemBox = bbox_1.BBox.fromRect(item);
        itemBox.x = isHorizontalFlow ? x + justifyContentOffset[justifyContent] : x;
        itemBox.y = isHorizontalFlow ? y : y + justifyContentOffset[justifyContent];
        return itemBox;
    });
    // align items
    // flex-start, flex-end, center
    var itemsForAlignItemsBBox = (0, utils_1.getItemsBBox)(itemsFromJustifyContent);
    var calcAlignItemsOffset = function (box) {
        var _a = tslib_1.__read(isHorizontalFlow ? ['height', height] : ['width', width], 2), key = _a[0], size = _a[1];
        switch (alignItems) {
            case 'flex-start':
                return 0;
            case 'flex-end':
                return size - box[key];
            case 'center':
                return size / 2 - box[key] / 2;
            default:
                return 0;
        }
    };
    var itemsFromAlignItems = itemsFromJustifyContent.map(function (item) {
        var x = item.x, y = item.y;
        var itemBox = bbox_1.BBox.fromRect(item);
        itemBox.x = isHorizontalFlow ? x : x + calcAlignItemsOffset(itemBox);
        itemBox.y = isHorizontalFlow ? y + calcAlignItemsOffset(itemBox) : y;
        return itemBox;
    });
    var finalItems = itemsFromAlignItems.map(function (item) {
        var _a, _b;
        var itemBox = bbox_1.BBox.fromRect(item);
        itemBox.x += (_a = container.x) !== null && _a !== void 0 ? _a : 0;
        itemBox.y += (_b = container.y) !== null && _b !== void 0 ? _b : 0;
        return itemBox;
    });
    return finalItems;
};
exports.flex = flex;
//# sourceMappingURL=index.js.map