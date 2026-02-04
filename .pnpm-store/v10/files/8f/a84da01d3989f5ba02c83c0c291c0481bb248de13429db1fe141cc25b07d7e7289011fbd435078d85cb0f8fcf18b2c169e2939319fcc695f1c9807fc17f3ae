import type { Point, LengthFactory, PathLengthFactoryOptions } from '../types';
import { segmentLineFactory } from './segment-line-factory';
import { distanceSquareRoot } from './distance-square-root';

function angleBetween(v0: Point, v1: Point) {
  const { x: v0x, y: v0y } = v0;
  const { x: v1x, y: v1y } = v1;
  const p = v0x * v1x + v0y * v1y;
  const n = Math.sqrt((v0x ** 2 + v0y ** 2) * (v1x ** 2 + v1y ** 2));
  const sign = v0x * v1y - v0y * v1x < 0 ? -1 : 1;
  const angle = sign * Math.acos(p / n);

  return angle;
}

/**
 * Returns a {x,y} point at a given length, the total length and
 * the minimum and maximum {x,y} coordinates of a C (cubic-bezier) segment.
 * @see https://github.com/MadLittleMods/svg-curve-lib/blob/master/src/js/svg-curve-lib.js
 */
function getPointAtArcSegmentLength(
  x1: number,
  y1: number,
  RX: number,
  RY: number,
  angle: number,
  LAF: number,
  SF: number,
  x: number,
  y: number,
  t: number,
) {
  const { abs, sin, cos, sqrt, PI } = Math;
  let rx = abs(RX);
  let ry = abs(RY);
  const xRot = ((angle % 360) + 360) % 360;
  const xRotRad = xRot * (PI / 180);

  if (x1 === x && y1 === y) {
    return { x: x1, y: y1 };
  }

  if (rx === 0 || ry === 0) {
    return segmentLineFactory(x1, y1, x, y, t).point;
  }

  const dx = (x1 - x) / 2;
  const dy = (y1 - y) / 2;

  const transformedPoint = {
    x: cos(xRotRad) * dx + sin(xRotRad) * dy,
    y: -sin(xRotRad) * dx + cos(xRotRad) * dy,
  };

  const radiiCheck = transformedPoint.x ** 2 / rx ** 2 + transformedPoint.y ** 2 / ry ** 2;

  if (radiiCheck > 1) {
    rx *= sqrt(radiiCheck);
    ry *= sqrt(radiiCheck);
  }

  const cSquareNumerator = rx ** 2 * ry ** 2 - rx ** 2 * transformedPoint.y ** 2 - ry ** 2 * transformedPoint.x ** 2;

  const cSquareRootDenom = rx ** 2 * transformedPoint.y ** 2 + ry ** 2 * transformedPoint.x ** 2;

  let cRadicand = cSquareNumerator / cSquareRootDenom;
  cRadicand = cRadicand < 0 ? 0 : cRadicand;
  const cCoef = (LAF !== SF ? 1 : -1) * sqrt(cRadicand);
  const transformedCenter = {
    x: cCoef * ((rx * transformedPoint.y) / ry),
    y: cCoef * (-(ry * transformedPoint.x) / rx),
  };

  const center = {
    x: cos(xRotRad) * transformedCenter.x - sin(xRotRad) * transformedCenter.y + (x1 + x) / 2,
    y: sin(xRotRad) * transformedCenter.x + cos(xRotRad) * transformedCenter.y + (y1 + y) / 2,
  };

  const startVector = {
    x: (transformedPoint.x - transformedCenter.x) / rx,
    y: (transformedPoint.y - transformedCenter.y) / ry,
  };

  const startAngle = angleBetween({ x: 1, y: 0 }, startVector);

  const endVector = {
    x: (-transformedPoint.x - transformedCenter.x) / rx,
    y: (-transformedPoint.y - transformedCenter.y) / ry,
  };

  let sweepAngle = angleBetween(startVector, endVector);
  if (!SF && sweepAngle > 0) {
    sweepAngle -= 2 * PI;
  } else if (SF && sweepAngle < 0) {
    sweepAngle += 2 * PI;
  }
  sweepAngle %= 2 * PI;

  const alpha = startAngle + sweepAngle * t;
  const ellipseComponentX = rx * cos(alpha);
  const ellipseComponentY = ry * sin(alpha);

  const point = {
    x: cos(xRotRad) * ellipseComponentX - sin(xRotRad) * ellipseComponentY + center.x,
    y: sin(xRotRad) * ellipseComponentX + cos(xRotRad) * ellipseComponentY + center.y,
  };

  // to be used later
  // point.ellipticalArcStartAngle = startAngle;
  // point.ellipticalArcEndAngle = startAngle + sweepAngle;
  // point.ellipticalArcAngle = alpha;

  // point.ellipticalArcCenter = center;
  // point.resultantRx = rx;
  // point.resultantRy = ry;

  return point;
}

/**
 * Returns a {x,y} point at a given length, the total length and
 * the shape minimum and maximum {x,y} coordinates of an A (arc-to) segment.
 *
 * For better performance, it can skip calculate bbox or length in some scenario.
 */
export function segmentArcFactory(
  X1: number,
  Y1: number,
  RX: number,
  RY: number,
  angle: number,
  LAF: number,
  SF: number,
  X2: number,
  Y2: number,
  distance: number,
  options: Partial<PathLengthFactoryOptions>,
): LengthFactory {
  const { bbox = true, length = true, sampleSize = 30 } = options;
  const distanceIsNumber = typeof distance === 'number';
  let x = X1;
  let y = Y1;
  let LENGTH = 0;
  let prev = [x, y, LENGTH];
  let cur: [number, number] = [x, y];
  let t = 0;
  let POINT = { x: 0, y: 0 };
  const POINTS = [{ x, y }];

  if (distanceIsNumber && distance <= 0) {
    POINT = { x, y };
  }

  // bad perf when size > 100
  for (let j = 0; j <= sampleSize; j += 1) {
    t = j / sampleSize;

    ({ x, y } = getPointAtArcSegmentLength(X1, Y1, RX, RY, angle, LAF, SF, X2, Y2, t));

    if (bbox) {
      POINTS.push({ x, y });
    }

    if (length) {
      LENGTH += distanceSquareRoot(cur, [x, y]);
    }
    cur = [x, y];

    if (distanceIsNumber && LENGTH >= distance && distance > prev[2]) {
      const dv = (LENGTH - distance) / (LENGTH - prev[2]);

      POINT = {
        x: cur[0] * (1 - dv) + prev[0] * dv,
        y: cur[1] * (1 - dv) + prev[1] * dv,
      };
    }
    prev = [x, y, LENGTH];
  }

  if (distanceIsNumber && distance >= LENGTH) {
    POINT = { x: X2, y: Y2 };
  }

  return {
    length: LENGTH,
    point: POINT,
    min: {
      x: Math.min.apply(
        null,
        POINTS.map((n) => n.x),
      ),
      y: Math.min.apply(
        null,
        POINTS.map((n) => n.y),
      ),
    },
    max: {
      x: Math.max.apply(
        null,
        POINTS.map((n) => n.x),
      ),
      y: Math.max.apply(
        null,
        POINTS.map((n) => n.y),
      ),
    },
  };
}
