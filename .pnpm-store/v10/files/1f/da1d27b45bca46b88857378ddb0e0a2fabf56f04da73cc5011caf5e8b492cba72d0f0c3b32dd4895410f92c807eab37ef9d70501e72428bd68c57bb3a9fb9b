"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPathArea = getPathArea;
var path_2_curve_1 = require("../convert/path-2-curve");
/**
 * Returns the area of a single cubic-bezier segment.
 *
 * http://objectmix.com/graphics/133553-area-closed-bezier-curve.html
 */
function getCubicSegArea(x1, y1, c1x, c1y, c2x, c2y, x2, y2) {
    // https://stackoverflow.com/a/15845996
    return ((3 *
        ((y2 - y1) * (c1x + c2x) -
            (x2 - x1) * (c1y + c2y) +
            c1y * (x1 - c2x) -
            c1x * (y1 - c2y) +
            y2 * (c2x + x1 / 3) -
            x2 * (c2y + y1 / 3))) /
        20);
}
/**
 * Returns the area of a shape.
 * @author Jürg Lehni & Jonathan Puckey
 *
 * @see https://github.com/paperjs/paper.js/blob/develop/src/path/Path.js
 */
function getPathArea(path) {
    var x = 0;
    var y = 0;
    var len = 0;
    return (0, path_2_curve_1.path2Curve)(path)
        .map(function (seg) {
        var _a;
        switch (seg[0]) {
            case 'M':
                x = seg[1], y = seg[2];
                return 0;
            default:
                // @ts-ignore
                var _b = seg.slice(1), c1x = _b[0], c1y = _b[1], c2x = _b[2], c2y = _b[3], x2 = _b[4], y2 = _b[5];
                len = getCubicSegArea(x, y, c1x, c1y, c2x, c2y, x2, y2);
                _a = seg.slice(-2), x = _a[0], y = _a[1];
                return len;
        }
    })
        .reduce(function (a, b) { return a + b; }, 0);
}
// export function getPathArea(pathArray: AbsoluteArray) {
//   let x = 0;
//   let y = 0;
//   let mx = 0;
//   let my = 0;
//   let len = 0;
//   return pathArray
//     .map((seg) => {
//       switch (seg[0]) {
//         case 'M':
//         case 'Z':
//           mx = seg[0] === 'M' ? seg[1] : mx;
//           my = seg[0] === 'M' ? seg[2] : my;
//           x = mx;
//           y = my;
//           return 0;
//         default:
//           // @ts-ignore
//           len = getCubicSegArea.apply(0, [x, y].concat(seg.slice(1)));
//           [x, y] = seg.slice(-2) as [number, number];
//           return len;
//       }
//     })
//     .reduce((a, b) => a + b, 0);
// }
//# sourceMappingURL=get-path-area.js.map