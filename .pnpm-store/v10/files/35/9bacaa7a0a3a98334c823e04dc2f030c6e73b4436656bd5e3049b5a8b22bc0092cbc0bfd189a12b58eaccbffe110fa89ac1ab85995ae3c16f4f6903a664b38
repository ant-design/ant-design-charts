import { linePtSegDistSq } from '../utils';
import type { ILine, IRectangle2 } from '../interfaces';

export function lineBoundingBox(line: ILine): IRectangle2 {
  const minX = Math.min(line.x1, line.x2);
  const maxX = Math.max(line.x1, line.x2);
  const minY = Math.min(line.y1, line.y2);
  const maxY = Math.max(line.y1, line.y2);

  return {
    x: minX,
    y: minY,
    x2: maxX,
    y2: maxY,
    width: maxX - minX,
    height: maxY - minY,
  };
}

export class Line {
  constructor(
    public x1: number,
    public y1: number,
    public x2: number,
    public y2: number
  ) {}

  equals(that: ILine) {
    return this.x1 === that.x1 && this.y1 === that.y1 && this.x2 === that.x2 && this.y2 === that.y2;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
  }

  toString() {
    return `Line(from=(${this.x1},${this.y1}),to=(${this.x2},${this.y2}))`;
  }

  static from(l: { x1: number; y1: number; x2: number; y2: number }) {
    return new Line(l.x1, l.y1, l.x2, l.y2);
  }

  // whether an infinite line to positive x from the point p will cut through the line
  cuts(px: number, py: number) {
    if (this.y1 === this.y2) {
      return false;
    }
    if ((py < this.y1 && py <= this.y2) || (py > this.y1 && py >= this.y2)) {
      return false;
    }
    if (px > this.x1 && px >= this.x2) {
      return false;
    }
    if (px < this.x1 && px <= this.x2) {
      return true;
    }
    const cross = this.x1 + ((py - this.y1) * (this.x2 - this.x1)) / (this.y2 - this.y1);
    return px <= cross;
  }

  distSquare(x: number, y: number) {
    return linePtSegDistSq(this.x1, this.y1, this.x2, this.y2, x, y);
  }

  ptClose(x: number, y: number, r: number) {
    // check whether the point is outside the bounding rectangle with padding r
    if (this.x1 < this.x2) {
      if (x < this.x1 - r || x > this.x2 + r) {
        return false;
      }
    } else {
      if (x < this.x2 - r || x > this.x1 + r) {
        return false;
      }
    }
    if (this.y1 < this.y2) {
      if (y < this.y1 - r || y > this.y2 + r) {
        return false;
      }
    } else {
      if (y < this.y2 - r || y > this.y1 + r) {
        return false;
      }
    }
    return true;
  }
}
