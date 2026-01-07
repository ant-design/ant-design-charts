import { Line } from './model/Line';
import type { IRectangle2, ILine, IRectangle } from './interfaces';

export enum EState {
  POINT = 1,
  PARALLEL = 2,
  COINCIDENT = 3,
  NONE = 4,
}

export class Intersection {
  constructor(
    public readonly state: EState,
    public readonly x = 0,
    public readonly y = 0
  ) {}
}

export function intersectLineLine(la: ILine, lb: ILine) {
  const uaT = (lb.x2 - lb.x1) * (la.y1 - lb.y1) - (lb.y2 - lb.y1) * (la.x1 - lb.x1);
  const ubT = (la.x2 - la.x1) * (la.y1 - lb.y1) - (la.y2 - la.y1) * (la.x1 - lb.x1);
  const uB = (lb.y2 - lb.y1) * (la.x2 - la.x1) - (lb.x2 - lb.x1) * (la.y2 - la.y1);
  if (uB) {
    const ua = uaT / uB;
    const ub = ubT / uB;
    if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
      return new Intersection(EState.POINT, la.x1 + ua * (la.x2 - la.x1), la.y1 + ua * (la.y2 - la.y1));
    }
    return new Intersection(EState.NONE);
  }
  return new Intersection(uaT === 0 || ubT === 0 ? EState.COINCIDENT : EState.PARALLEL);
}

export function fractionAlongLineA(la: ILine, lb: ILine) {
  const uaT = (lb.x2 - lb.x1) * (la.y1 - lb.y1) - (lb.y2 - lb.y1) * (la.x1 - lb.x1);
  const ubT = (la.x2 - la.x1) * (la.y1 - lb.y1) - (la.y2 - la.y1) * (la.x1 - lb.x1);
  const uB = (lb.y2 - lb.y1) * (la.x2 - la.x1) - (lb.x2 - lb.x1) * (la.y2 - la.y1);
  if (uB) {
    const ua = uaT / uB;
    const ub = ubT / uB;
    if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
      return ua;
    }
  }
  return Number.POSITIVE_INFINITY;
}

export function hasFractionToLineCenter(bounds: IRectangle2, line: ILine) {
  function testLine(xa: number, ya: number, xb: number, yb: number) {
    let testDistance = fractionAlongLineA(line, new Line(xa, ya, xb, yb));
    testDistance = Math.abs(testDistance - 0.5);
    if (testDistance >= 0 && testDistance <= 1) {
      return 1;
    }
    return 0;
  }

  // top
  let countIntersections = testLine(bounds.x, bounds.y, bounds.x2, bounds.y);
  // left
  countIntersections += testLine(bounds.x, bounds.y, bounds.x, bounds.y2);
  if (countIntersections > 1) {
    return true;
  }
  // bottom
  countIntersections += testLine(bounds.x, bounds.y2, bounds.x2, bounds.y2);
  if (countIntersections > 1) {
    return true;
  }
  // right
  countIntersections += testLine(bounds.x2, bounds.y, bounds.x2, bounds.y2);
  // if no intersection, return -1
  return countIntersections > 0;
}

export enum OutCode {
  LEFT,
  TOP,
  RIGHT,
  BOTTOM,
}

export function outcode(bounds: IRectangle, px: number, py: number): Set<OutCode> {
  // taken from JDK 8 java.awt.geom.Rectangle2D.Double#outcode(double, double)
  const out = new Set<OutCode>();
  if (bounds.width <= 0) {
    out.add(OutCode.LEFT);
    out.add(OutCode.RIGHT);
  } else if (px < bounds.x) {
    out.add(OutCode.LEFT);
  } else if (px > bounds.x + bounds.width) {
    out.add(OutCode.RIGHT);
  }
  if (bounds.height <= 0) {
    out.add(OutCode.TOP);
    out.add(OutCode.BOTTOM);
  } else if (py < bounds.y) {
    out.add(OutCode.TOP);
  } else if (py > bounds.y + bounds.height) {
    out.add(OutCode.BOTTOM);
  }
  return out;
}

export function intersectsLine(bounds: IRectangle, line: ILine) {
  let x1 = line.x1;
  let y1 = line.y1;
  const x2 = line.x2;
  const y2 = line.y2;
  // taken from JDK 8 java.awt.geom.Rectangle2D.Double#intersectsLine(double, double, double, double)
  const out2 = Array.from(outcode(bounds, x2, y2));
  if (out2.length === 0) {
    return true;
  }
  let out1 = outcode(bounds, x1, y1);
  while (out1.size !== 0) {
    for (const a of out2) {
      if (out1.has(a)) {
        return false;
      }
    }
    if (out1.has(OutCode.RIGHT) || out1.has(OutCode.LEFT)) {
      let x = bounds.x;
      if (out1.has(OutCode.RIGHT)) {
        x += bounds.width;
      }
      y1 = y1 + ((x - x1) * (y2 - y1)) / (x2 - x1);
      x1 = x;
    } else {
      let y = bounds.y;
      if (out1.has(OutCode.BOTTOM)) {
        y += bounds.height;
      }
      x1 = x1 + ((y - y1) * (x2 - x1)) / (y2 - y1);
      y1 = y;
    }
    out1 = outcode(bounds, x1, y1);
  }
  return true;
}

export function fractionToLineCenter(bounds: IRectangle2, line: ILine) {
  let minDistance = Number.POSITIVE_INFINITY;
  let countIntersections = 0;

  function testLine(xa: number, ya: number, xb: number, yb: number) {
    let testDistance = fractionAlongLineA(line, new Line(xa, ya, xb, yb));
    testDistance = Math.abs(testDistance - 0.5);
    if (testDistance >= 0 && testDistance <= 1) {
      countIntersections++;
      if (testDistance < minDistance) {
        minDistance = testDistance;
      }
    }
  }

  // top
  testLine(bounds.x, bounds.y, bounds.x2, bounds.y);
  // left
  testLine(bounds.x, bounds.y, bounds.x, bounds.y2);
  if (countIntersections > 1) {
    return minDistance;
  }
  // bottom
  testLine(bounds.x, bounds.y2, bounds.x2, bounds.y2);
  if (countIntersections > 1) {
    return minDistance;
  }
  // right
  testLine(bounds.x2, bounds.y, bounds.x2, bounds.y2);
  // if no intersection, return -1
  if (countIntersections === 0) {
    return -1;
  }
  return minDistance;
}

export function fractionToLineEnd(bounds: IRectangle2, line: ILine) {
  let minDistance = Number.POSITIVE_INFINITY;
  let countIntersections = 0;

  function testLine(xa: number, ya: number, xb: number, yb: number) {
    const testDistance = fractionAlongLineA(line, new Line(xa, ya, xb, yb));
    if (testDistance >= 0 && testDistance <= 1) {
      countIntersections++;
      if (testDistance < minDistance) {
        minDistance = testDistance;
      }
    }
  }

  // top
  testLine(bounds.x, bounds.y, bounds.x2, bounds.y);
  // left
  testLine(bounds.x, bounds.y, bounds.x, bounds.y2);
  if (countIntersections > 1) {
    return minDistance;
  }
  // bottom
  testLine(bounds.x, bounds.y2, bounds.x2, bounds.y2);
  if (countIntersections > 1) {
    return minDistance;
  }
  // right
  testLine(bounds.x2, bounds.y, bounds.x2, bounds.y2);
  // if no intersection, return -1
  if (countIntersections === 0) {
    return -1;
  }
  return minDistance;
}

export function testIntersection(line: ILine, bounds: IRectangle2) {
  let count = 0;
  // top
  const top = intersectLineLine(line, new Line(bounds.x, bounds.y, bounds.x2, bounds.y));
  count += top.state === EState.POINT ? 1 : 0;
  // left
  const left = intersectLineLine(line, new Line(bounds.x, bounds.y, bounds.x, bounds.y2));
  count += left.state === EState.POINT ? 1 : 0;
  // bottom
  const bottom = intersectLineLine(line, new Line(bounds.x, bounds.y2, bounds.x2, bounds.y2));
  count += bottom.state === EState.POINT ? 1 : 0;
  // right
  const right = intersectLineLine(line, new Line(bounds.x2, bounds.y, bounds.x2, bounds.y2));
  count += right.state === EState.POINT ? 1 : 0;

  return { top, left, bottom, right, count };
}
