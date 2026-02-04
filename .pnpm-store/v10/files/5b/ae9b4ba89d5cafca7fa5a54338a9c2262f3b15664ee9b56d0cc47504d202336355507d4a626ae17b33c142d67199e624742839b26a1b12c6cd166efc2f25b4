export function linePtSegDistSq(lx1: number, ly1: number, lx2: number, ly2: number, x: number, y: number) {
  // taken from JDK 8 java.awt.geom.Line2D#ptSegDistSq(double, double, double, double, double, double)
  const x1 = lx1;
  const y1 = ly1;
  const x2 = lx2 - x1;
  const y2 = ly2 - y1;
  let px = x - x1;
  let py = y - y1;
  let dotprod = px * x2 + py * y2;
  let projlenSq = 0;

  if (dotprod <= 0) {
    projlenSq = 0;
  } else {
    px = x2 - px;
    py = y2 - py;
    dotprod = px * x2 + py * y2;
    if (dotprod <= 0) {
      projlenSq = 0;
    } else {
      projlenSq = (dotprod * dotprod) / (x2 * x2 + y2 * y2);
    }
  }

  const lenSq = px * px + py * py - projlenSq;
  if (lenSq < 0) {
    return 0;
  }
  return lenSq;
}

export function ptsDistanceSq(x1: number, y1: number, x2: number, y2: number) {
  return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
}

export function doublePointsEqual(x1: number, y1: number, x2: number, y2: number, delta: number) {
  return ptsDistanceSq(x1, y1, x2, y2) < delta * delta;
}

export function round(digits: number) {
  if (!Number.isFinite(digits)) {
    return (v: number) => v;
  }
  if (digits === 0) {
    return Math.round;
  }
  const factor = Math.pow(10, digits);
  return (v: number) => Math.round(v * factor) / factor;
}
