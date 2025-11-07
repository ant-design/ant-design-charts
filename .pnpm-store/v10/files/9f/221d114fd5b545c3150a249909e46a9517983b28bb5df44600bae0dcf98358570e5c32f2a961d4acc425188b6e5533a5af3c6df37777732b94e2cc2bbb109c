"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemsBBox = getItemsBBox;
var tslib_1 = require("tslib");
var bbox_1 = require("../../bbox");
function getItemsBBox(items) {
    var minX = Infinity;
    var minY = Infinity;
    var maxX = -Infinity;
    var maxY = -Infinity;
    for (var i = 0; i < items.length; i++) {
        var _a = items[i], x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        var _b = tslib_1.__read([x + width, y + height], 2), X = _b[0], Y = _b[1];
        if (x < minX)
            minX = x;
        if (y < minY)
            minY = y;
        if (X > maxX)
            maxX = X;
        if (Y > maxY)
            maxY = Y;
    }
    return new bbox_1.BBox(minX, minY, maxX - minX, maxY - minY);
}
//# sourceMappingURL=helper.js.map