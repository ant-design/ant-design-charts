import { PointPath } from '../PointPath';
import type { IPoint } from '../interfaces';

function basicFunction(i: number, t: number) {
  // the basis function for a cubic B spline
  switch (i) {
    case -2:
      return (((-t + 3.0) * t - 3.0) * t + 1.0) / 6.0;
    case -1:
      return ((3.0 * t - 6.0) * t * t + 4.0) / 6.0;
    case 0:
      return (((-3.0 * t + 3.0) * t + 3.0) * t + 1.0) / 6.0;
    case 1:
      return (t * t * t) / 6.0;
    default:
      throw new Error('unknown error');
  }
}

export function bSplineShapeGenerator(granularity = 6.0) {
  const ORDER = 3;
  const START_INDEX = ORDER - 1;
  const REL_END = 1;
  const REL_START = REL_END - ORDER;

  function calcPoint(path: PointPath, i: number, t: number): IPoint {
    let px = 0.0;
    let py = 0.0;
    for (let j = REL_START; j <= REL_END; j++) {
      const p = path.get(i + j);
      const bf = basicFunction(j, t);
      px += bf * p.x;
      py += bf * p.y;
    }
    return { x: px, y: py };
  }

  return (path: PointPath) => {
    // covering special cases
    if (path.length < 3) {
      return path;
    }
    // actual b-spline calculation
    const res: IPoint[] = [];
    const closed = path.closed;
    const count = path.length + ORDER - 1 + (closed ? 0 : 2);
    res.push(calcPoint(path, START_INDEX - (closed ? 0 : 2), 0));
    for (let ix = START_INDEX - (closed ? 0 : 2); ix < count; ix++) {
      for (let k = 1; k <= granularity; k++) {
        res.push(calcPoint(path, ix, k / granularity));
      }
    }
    return new PointPath(res);
  };
}
