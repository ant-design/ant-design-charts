import { isPointInPolygon } from './is-point-in-polygon';

type Point = {
  x: number;
  y: number;
};

type Line = {
  from: Point;
  to: Point;
};

const isBetween = (value: number, min: number, max: number) => value >= min && value <= max;
function getLineIntersect(p0: Point, p1: Point, p2: Point, p3: Point): Point | null {
  const tolerance = 0.001;
  const E: Point = {
    x: p2.x - p0.x,
    y: p2.y - p0.y,
  };
  const D0: Point = {
    x: p1.x - p0.x,
    y: p1.y - p0.y,
  };
  const D1: Point = {
    x: p3.x - p2.x,
    y: p3.y - p2.y,
  };
  const kross: number = D0.x * D1.y - D0.y * D1.x;
  const sqrKross: number = kross * kross;
  const sqrLen0: number = D0.x * D0.x + D0.y * D0.y;
  const sqrLen1: number = D1.x * D1.x + D1.y * D1.y;
  let point: Point | null = null;
  if (sqrKross > tolerance * sqrLen0 * sqrLen1) {
    const s = (E.x * D1.y - E.y * D1.x) / kross;
    const t = (E.x * D0.y - E.y * D0.x) / kross;
    if (isBetween(s, 0, 1) && isBetween(t, 0, 1)) {
      point = {
        x: p0.x + s * D0.x,
        y: p0.y + s * D0.y,
      };
    }
  }
  return point;
}

function parseToLines(points: number[][]): Line[] {
  const lines = [];
  const count = points.length;
  for (let i = 0; i < count - 1; i++) {
    const point = points[i];
    const next = points[i + 1];
    lines.push({
      from: {
        x: point[0],
        y: point[1],
      },
      to: {
        x: next[0],
        y: next[1],
      },
    });
  }
  if (lines.length > 1) {
    const first = points[0];
    const last = points[count - 1];
    lines.push({
      from: {
        x: last[0],
        y: last[1],
      },
      to: {
        x: first[0],
        y: first[1],
      },
    });
  }
  return lines;
}

function lineIntersectPolygon(lines: Line[], line: Line) {
  let isIntersect = false;
  lines.forEach((l) => {
    if (getLineIntersect(l.from, l.to, line.from, line.to)) {
      isIntersect = true;
      return false;
    }
  });
  return isIntersect;
}

type BBox = {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
};

function getBBox(points: number[][]): BBox {
  const xArr = points.map((p) => p[0]);
  const yArr = points.map((p) => p[1]);
  return {
    minX: Math.min.apply(null, xArr),
    maxX: Math.max.apply(null, xArr),
    minY: Math.min.apply(null, yArr),
    maxY: Math.max.apply(null, yArr),
  };
}

function intersectBBox(box1: BBox, box2: BBox) {
  return !(box2.minX > box1.maxX || box2.maxX < box1.minX || box2.minY > box1.maxY || box2.maxY < box1.minY);
}

/**
 * @see https://stackoverflow.com/questions/753140/how-do-i-determine-if-two-convex-polygons-intersect
 */
export function isPolygonsIntersect(points1: number[][], points2: number[][]) {
  // 空数组，或者一个点返回 false
  if (points1.length < 2 || points2.length < 2) {
    return false;
  }

  const bbox1 = getBBox(points1);
  const bbox2 = getBBox(points2);
  // 判定包围盒是否相交，比判定点是否在多边形内要快的多，可以筛选掉大多数情况
  if (!intersectBBox(bbox1, bbox2)) {
    return false;
  }

  let isIn = false;
  // 判定点是否在多边形内部，一旦有一个点在另一个多边形内，则返回
  points2.forEach((point) => {
    if (isPointInPolygon(points1, point[0], point[1])) {
      isIn = true;
      return false;
    }
  });
  if (isIn) {
    return true;
  }
  // 两个多边形都需要判定
  points1.forEach((point) => {
    if (isPointInPolygon(points2, point[0], point[1])) {
      isIn = true;
      return false;
    }
  });
  if (isIn) {
    return true;
  }

  const lines1 = parseToLines(points1);
  const lines2 = parseToLines(points2);
  let isIntersect = false;
  lines2.forEach((line) => {
    if (lineIntersectPolygon(lines1, line)) {
      isIntersect = true;
      return false;
    }
  });
  return isIntersect;
}
