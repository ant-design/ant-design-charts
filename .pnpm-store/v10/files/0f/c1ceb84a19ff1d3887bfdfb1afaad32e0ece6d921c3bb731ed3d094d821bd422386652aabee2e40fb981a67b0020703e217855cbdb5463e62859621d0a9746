import { shapeSimplifier, bSplineShapeGenerator, samplePath } from './simplifiers';
import { Line, boundingBox } from './model';
import type { IPoint, ICenterPoint } from './interfaces';
import { round } from './utils';

export class PointPath {
  readonly points: ReadonlyArray<IPoint>;

  readonly closed: boolean;

  constructor(points: ReadonlyArray<IPoint> = [], closed = true) {
    this.points = points;
    this.closed = closed;
  }

  get(index: number): IPoint {
    const i = index;
    const l = this.points.length;
    if (index < 0) {
      return this.closed ? this.get(index + l) : this.points[0];
    } else if (index >= l) {
      return this.closed ? this.get(index - l) : this.points[l - 1];
    }
    return this.points[i];
  }

  get length() {
    return this.points.length;
  }

  toString(roundToDigits: number | ((v: number) => number) = Infinity) {
    const points = this.points;
    if (points.length === 0) {
      return '';
    }
    const rounder = typeof roundToDigits === 'function' ? roundToDigits : round(roundToDigits);
    let r = 'M';
    for (const p of points) {
      r += `${rounder(p.x)},${rounder(p.y)} L`;
    }
    r = r.slice(0, -1);
    if (this.closed) {
      r += ' Z';
    }
    return r;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const points = this.points;
    if (points.length === 0) {
      return;
    }
    ctx.beginPath();

    ctx.moveTo(points[0].x, points[0].y);

    for (const p of points) {
      ctx.lineTo(p.x, p.y);
    }

    if (this.closed) {
      ctx.closePath();
    }
  }

  sample(skip?: number) {
    return samplePath(skip)(this);
  }

  simplify(tolerance?: number) {
    return shapeSimplifier(tolerance)(this);
  }

  bSplines(granularity?: number) {
    return bSplineShapeGenerator(granularity)(this);
  }

  apply(transformer: (path: PointPath) => PointPath) {
    return transformer(this);
  }

  containsElements(members: ReadonlyArray<ICenterPoint>) {
    const bb = boundingBox(this.points);
    if (!bb) {
      return false;
    }
    return members.every((member) => {
      return bb.containsPt(member.cx, member.cy) && this.withinArea(member.cx, member.cy);
    });
  }

  withinArea(px: number, py: number) {
    if (this.length === 0) {
      return false;
    }
    let crossings = 0;
    const first = this.points[0]!;
    const line = new Line(first.x, first.y, first.x, first.y);

    for (let i = 1; i < this.points.length; i++) {
      const cur = this.points[i];
      line.x1 = line.x2;
      line.y1 = line.y2;
      line.x2 = cur.x;
      line.y2 = cur.y;

      if (line.cuts(px, py)) {
        crossings++;
      }
    }
    // close to start
    line.x1 = line.x2;
    line.y1 = line.y2;
    line.x2 = first.x;
    line.y2 = first.y;

    if (line.cuts(px, py)) {
      crossings++;
    }

    return crossings % 2 === 1;
  }
}
