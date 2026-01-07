"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arcToCubic = arcToCubic;
var rotate_vector_1 = require("../util/rotate-vector");
/**
 * Converts A (arc-to) segments to C (cubic-bezier-to).
 *
 * For more information of where this math came from visit:
 * http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
 */
function arcToCubic(X1, Y1, RX, RY, angle, LAF, SF, X2, Y2, recursive) {
    var x1 = X1;
    var y1 = Y1;
    var rx = RX;
    var ry = RY;
    var x2 = X2;
    var y2 = Y2;
    // for more information of where this Math came from visit:
    // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
    var d120 = (Math.PI * 120) / 180;
    var rad = (Math.PI / 180) * (+angle || 0);
    /** @type {number[]} */
    var res = [];
    var xy;
    var f1;
    var f2;
    var cx;
    var cy;
    if (!recursive) {
        xy = (0, rotate_vector_1.rotateVector)(x1, y1, -rad);
        x1 = xy.x;
        y1 = xy.y;
        xy = (0, rotate_vector_1.rotateVector)(x2, y2, -rad);
        x2 = xy.x;
        y2 = xy.y;
        var x = (x1 - x2) / 2;
        var y = (y1 - y2) / 2;
        var h = (x * x) / (rx * rx) + (y * y) / (ry * ry);
        if (h > 1) {
            h = Math.sqrt(h);
            rx *= h;
            ry *= h;
        }
        var rx2 = rx * rx;
        var ry2 = ry * ry;
        var k = (LAF === SF ? -1 : 1) *
            Math.sqrt(Math.abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x)));
        cx = (k * rx * y) / ry + (x1 + x2) / 2;
        cy = (k * -ry * x) / rx + (y1 + y2) / 2;
        // eslint-disable-next-line no-bitwise -- Impossible to satisfy no-bitwise
        f1 = Math.asin(((((y1 - cy) / ry) * Math.pow(10, 9)) >> 0) / Math.pow(10, 9));
        // eslint-disable-next-line no-bitwise -- Impossible to satisfy no-bitwise
        f2 = Math.asin(((((y2 - cy) / ry) * Math.pow(10, 9)) >> 0) / Math.pow(10, 9));
        f1 = x1 < cx ? Math.PI - f1 : f1;
        f2 = x2 < cx ? Math.PI - f2 : f2;
        if (f1 < 0)
            f1 = Math.PI * 2 + f1;
        if (f2 < 0)
            f2 = Math.PI * 2 + f2;
        if (SF && f1 > f2) {
            f1 -= Math.PI * 2;
        }
        if (!SF && f2 > f1) {
            f2 -= Math.PI * 2;
        }
    }
    else {
        f1 = recursive[0], f2 = recursive[1], cx = recursive[2], cy = recursive[3];
    }
    var df = f2 - f1;
    if (Math.abs(df) > d120) {
        var f2old = f2;
        var x2old = x2;
        var y2old = y2;
        f2 = f1 + d120 * (SF && f2 > f1 ? 1 : -1);
        x2 = cx + rx * Math.cos(f2);
        y2 = cy + ry * Math.sin(f2);
        res = arcToCubic(x2, y2, rx, ry, angle, 0, SF, x2old, y2old, [f2, f2old, cx, cy]);
    }
    df = f2 - f1;
    var c1 = Math.cos(f1);
    var s1 = Math.sin(f1);
    var c2 = Math.cos(f2);
    var s2 = Math.sin(f2);
    var t = Math.tan(df / 4);
    var hx = (4 / 3) * rx * t;
    var hy = (4 / 3) * ry * t;
    var m1 = [x1, y1];
    var m2 = [x1 + hx * s1, y1 - hy * c1];
    var m3 = [x2 + hx * s2, y2 - hy * c2];
    var m4 = [x2, y2];
    m2[0] = 2 * m1[0] - m2[0];
    m2[1] = 2 * m1[1] - m2[1];
    if (recursive) {
        return m2.concat(m3, m4, res);
        // return [...m2, ...m3, ...m4, ...res];
    }
    res = m2.concat(m3, m4, res);
    // res = [...m2, ...m3, ...m4, ...res];
    var newres = [];
    for (var i = 0, ii = res.length; i < ii; i += 1) {
        newres[i] = i % 2 ? (0, rotate_vector_1.rotateVector)(res[i - 1], res[i], rad).y : (0, rotate_vector_1.rotateVector)(res[i], res[i + 1], rad).x;
    }
    return newres;
}
// const TAU = Math.PI * 2;
// const mapToEllipse = (
//   { x, y }: { x: number; y: number },
//   rx: number,
//   ry: number,
//   cosphi: number,
//   sinphi: number,
//   centerx: number,
//   centery: number,
// ) => {
//   x *= rx;
//   y *= ry;
//   const xp = cosphi * x - sinphi * y;
//   const yp = sinphi * x + cosphi * y;
//   return {
//     x: xp + centerx,
//     y: yp + centery,
//   };
// };
// const approxUnitArc = (ang1: number, ang2: number) => {
//   // If 90 degree circular arc, use a constant
//   // as derived from http://spencermortensen.com/articles/bezier-circle
//   const a =
//     ang2 === 1.5707963267948966
//       ? 0.551915024494
//       : ang2 === -1.5707963267948966
//       ? -0.551915024494
//       : (4 / 3) * Math.tan(ang2 / 4);
//   const x1 = Math.cos(ang1);
//   const y1 = Math.sin(ang1);
//   const x2 = Math.cos(ang1 + ang2);
//   const y2 = Math.sin(ang1 + ang2);
//   return [
//     {
//       x: x1 - y1 * a,
//       y: y1 + x1 * a,
//     },
//     {
//       x: x2 + y2 * a,
//       y: y2 - x2 * a,
//     },
//     {
//       x: x2,
//       y: y2,
//     },
//   ];
// };
// const vectorAngle = (ux: number, uy: number, vx: number, vy: number) => {
//   const sign = ux * vy - uy * vx < 0 ? -1 : 1;
//   let dot = ux * vx + uy * vy;
//   if (dot > 1) {
//     dot = 1;
//   }
//   if (dot < -1) {
//     dot = -1;
//   }
//   return sign * Math.acos(dot);
// };
// const getArcCenter = (
//   px: any,
//   py: any,
//   cx: any,
//   cy: any,
//   rx: number,
//   ry: number,
//   largeArcFlag: number,
//   sweepFlag: number,
//   sinphi: number,
//   cosphi: number,
//   pxp: number,
//   pyp: number,
// ) => {
//   const rxsq = Math.pow(rx, 2);
//   const rysq = Math.pow(ry, 2);
//   const pxpsq = Math.pow(pxp, 2);
//   const pypsq = Math.pow(pyp, 2);
//   let radicant = rxsq * rysq - rxsq * pypsq - rysq * pxpsq;
//   if (radicant < 0) {
//     radicant = 0;
//   }
//   radicant /= rxsq * pypsq + rysq * pxpsq;
//   radicant = Math.sqrt(radicant) * (largeArcFlag === sweepFlag ? -1 : 1);
//   const centerxp = ((radicant * rx) / ry) * pyp;
//   const centeryp = ((radicant * -ry) / rx) * pxp;
//   const centerx = cosphi * centerxp - sinphi * centeryp + (px + cx) / 2;
//   const centery = sinphi * centerxp + cosphi * centeryp + (py + cy) / 2;
//   const vx1 = (pxp - centerxp) / rx;
//   const vy1 = (pyp - centeryp) / ry;
//   const vx2 = (-pxp - centerxp) / rx;
//   const vy2 = (-pyp - centeryp) / ry;
//   const ang1 = vectorAngle(1, 0, vx1, vy1);
//   let ang2 = vectorAngle(vx1, vy1, vx2, vy2);
//   if (sweepFlag === 0 && ang2 > 0) {
//     ang2 -= TAU;
//   }
//   if (sweepFlag === 1 && ang2 < 0) {
//     ang2 += TAU;
//   }
//   return [centerx, centery, ang1, ang2];
// };
// const arcToBezier = ({ px, py, cx, cy, rx, ry, xAxisRotation = 0, largeArcFlag = 0, sweepFlag = 0 }) => {
//   const curves = [];
//   if (rx === 0 || ry === 0) {
//     return [{ x1: 0, y1: 0, x2: 0, y2: 0, x: cx, y: cy }];
//   }
//   const sinphi = Math.sin((xAxisRotation * TAU) / 360);
//   const cosphi = Math.cos((xAxisRotation * TAU) / 360);
//   const pxp = (cosphi * (px - cx)) / 2 + (sinphi * (py - cy)) / 2;
//   const pyp = (-sinphi * (px - cx)) / 2 + (cosphi * (py - cy)) / 2;
//   if (pxp === 0 && pyp === 0) {
//     return [{ x1: 0, y1: 0, x2: 0, y2: 0, x: cx, y: cy }];
//   }
//   rx = Math.abs(rx);
//   ry = Math.abs(ry);
//   const lambda = Math.pow(pxp, 2) / Math.pow(rx, 2) + Math.pow(pyp, 2) / Math.pow(ry, 2);
//   if (lambda > 1) {
//     rx *= Math.sqrt(lambda);
//     ry *= Math.sqrt(lambda);
//   }
//   let [centerx, centery, ang1, ang2] = getArcCenter(
//     px,
//     py,
//     cx,
//     cy,
//     rx,
//     ry,
//     largeArcFlag,
//     sweepFlag,
//     sinphi,
//     cosphi,
//     pxp,
//     pyp,
//   );
//   // If 'ang2' == 90.0000000001, then `ratio` will evaluate to
//   // 1.0000000001. This causes `segments` to be greater than one, which is an
//   // unecessary split, and adds extra points to the bezier curve. To alleviate
//   // this issue, we round to 1.0 when the ratio is close to 1.0.
//   let ratio = Math.abs(ang2) / (TAU / 4);
//   if (Math.abs(1.0 - ratio) < 0.0000001) {
//     ratio = 1.0;
//   }
//   const segments = Math.max(Math.ceil(ratio), 1);
//   ang2 /= segments;
//   for (let i = 0; i < segments; i++) {
//     curves.push(approxUnitArc(ang1, ang2));
//     ang1 += ang2;
//   }
//   return curves.map((curve) => {
//     const { x: x1, y: y1 } = mapToEllipse(curve[0], rx, ry, cosphi, sinphi, centerx, centery);
//     const { x: x2, y: y2 } = mapToEllipse(curve[1], rx, ry, cosphi, sinphi, centerx, centery);
//     const { x, y } = mapToEllipse(curve[2], rx, ry, cosphi, sinphi, centerx, centery);
//     return { x1, y1, x2, y2, x, y };
//   });
// };
// export function arcToCubic(
//   x1: number,
//   y1: number,
//   rx: number,
//   ry: number,
//   angle: number,
//   LAF: number,
//   SF: number,
//   x2: number,
//   y2: number,
// ) {
//   const curves = arcToBezier({
//     px: x1,
//     py: y1,
//     cx: x2,
//     cy: y2,
//     rx,
//     ry,
//     xAxisRotation: angle,
//     largeArcFlag: LAF,
//     sweepFlag: SF,
//   });
//   return curves.reduce((prev, cur) => {
//     const { x1, y1, x2, y2, x, y } = cur;
//     prev.push(x1, y1, x2, y2, x, y);
//     return prev;
//   }, [] as number[]);
// }
//# sourceMappingURL=arc-2-cubic.js.map