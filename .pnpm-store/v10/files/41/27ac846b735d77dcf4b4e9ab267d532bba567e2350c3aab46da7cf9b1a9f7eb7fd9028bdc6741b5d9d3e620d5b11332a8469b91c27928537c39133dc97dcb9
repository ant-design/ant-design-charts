import type { CurveArray } from '../types';
import { distanceSquareRoot } from './distance-square-root';

function getRotations(a: CurveArray) {
  const segCount = a.length;
  const pointCount = segCount - 1;

  return a.map((f, idx) =>
    a.map((p, i) => {
      let oldSegIdx = idx + i;
      let seg;

      if (i === 0 || (a[oldSegIdx] && a[oldSegIdx][0] === 'M')) {
        seg = a[oldSegIdx];
        return ['M'].concat(seg.slice(-2));
      }
      if (oldSegIdx >= segCount) oldSegIdx -= pointCount;
      return a[oldSegIdx];
    }),
  );
}

export function getRotatedCurve(a: CurveArray, b: CurveArray) {
  const segCount = a.length - 1;
  const lineLengths: number[] = [];
  let computedIndex = 0;
  let sumLensSqrd = 0;
  const rotations = getRotations(a);

  rotations.forEach((r, i) => {
    a.slice(1).forEach((s, j) => {
      // @ts-ignore
      sumLensSqrd += distanceSquareRoot(a[(i + j) % segCount].slice(-2), b[j % segCount].slice(-2));
    });
    lineLengths[i] = sumLensSqrd;
    sumLensSqrd = 0;
  });

  computedIndex = lineLengths.indexOf(Math.min.apply(null, lineLengths));

  return rotations[computedIndex];
}
