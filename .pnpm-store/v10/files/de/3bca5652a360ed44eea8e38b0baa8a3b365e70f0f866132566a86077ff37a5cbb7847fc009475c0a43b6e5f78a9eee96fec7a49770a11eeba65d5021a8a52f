import type { CurveArray } from '../types';

// reverse CURVE based pathArray segments only
export function reverseCurve(pathArray: CurveArray): CurveArray {
  const rotatedCurve: any = pathArray
    .slice(1)
    .map((x, i, curveOnly) =>
      // @ts-ignore
      !i ? pathArray[0].slice(1).concat(x.slice(1)) : curveOnly[i - 1].slice(-2).concat(x.slice(1)),
    )
    // @ts-ignore
    .map((x) => x.map((y, i) => x[x.length - i - 2 * (1 - (i % 2))]))
    .reverse();

  return [['M'].concat(rotatedCurve[0].slice(0, 2))].concat(
    rotatedCurve.map((x) => ['C'].concat(x.slice(2))),
  ) as CurveArray;
}
