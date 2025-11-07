import { __read } from "tslib";
import { BBox } from '../../bbox';
export function getItemsBBox(items) {
    var minX = Infinity;
    var minY = Infinity;
    var maxX = -Infinity;
    var maxY = -Infinity;
    for (var i = 0; i < items.length; i++) {
        var _a = items[i], x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        var _b = __read([x + width, y + height], 2), X = _b[0], Y = _b[1];
        if (x < minX)
            minX = x;
        if (y < minY)
            minY = y;
        if (X > maxX)
            maxX = X;
        if (Y > maxY)
            maxY = Y;
    }
    return new BBox(minX, minY, maxX - minX, maxY - minY);
}
//# sourceMappingURL=helper.js.map