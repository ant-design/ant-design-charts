import type { PathArray } from '../types';
import { path2Curve } from '../convert/path-2-curve';

/**
 * Returns the area of a single cubic-bezier segment.
 *
 * http://objectmix.com/graphics/133553-area-closed-bezier-curve.html
 */
function getCubicSegArea(
  x1: number,
  y1: number,
  c1x: number,
  c1y: number,
  c2x: number,
  c2y: number,
  x2: number,
  y2: number,
) {
  // https://stackoverflow.com/a/15845996
  return (
    (3 *
      ((y2 - y1) * (c1x + c2x) -
        (x2 - x1) * (c1y + c2y) +
        c1y * (x1 - c2x) -
        c1x * (y1 - c2y) +
        y2 * (c2x + x1 / 3) -
        x2 * (c2y + y1 / 3))) /
    20
  );
}

/**
 * Returns the area of a shape.
 * @author Jürg Lehni & Jonathan Puckey
 *
 * @see https://github.com/paperjs/paper.js/blob/develop/src/path/Path.js
 */
export function getPathArea(path: PathArray) {
  let x = 0;
  let y = 0;
  let len = 0;

  return path2Curve(path)
    .map((seg) => {
      switch (seg[0]) {
        case 'M':
          [, x, y] = seg;
          return 0;
        default:
          // @ts-ignore
          const [c1x, c1y, c2x, c2y, x2, y2] = seg.slice(1);

          len = getCubicSegArea(x, y, c1x, c1y, c2x, c2y, x2, y2);
          [x, y] = seg.slice(-2);
          return len;
      }
    })
    .reduce((a, b) => a + b, 0);
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
