import type { IPoint, IRectangle, IRectangle2, ICircle } from '../interfaces';
import { ptsDistanceSq } from '../utils';
import { outcode, OutCode } from '../Intersection';

export class Rectangle implements IRectangle2, ICircle {
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number
  ) {}

  get x2() {
    return this.x + this.width;
  }

  get y2() {
    return this.y + this.height;
  }

  get cx() {
    return this.x + this.width / 2;
  }

  get cy() {
    return this.y + this.height / 2;
  }

  get radius() {
    return Math.max(this.width, this.height) / 2;
  }

  static from(r: IRectangle) {
    return new Rectangle(r.x, r.y, r.width, r.height);
  }

  equals(that: IRectangle) {
    return this.x === that.x && this.y === that.y && this.width === that.width && this.height === that.height;
  }

  clone() {
    return new Rectangle(this.x, this.y, this.width, this.height);
  }

  add(that: IRectangle) {
    const x = Math.min(this.x, that.x);
    const y = Math.min(this.y, that.y);
    const x2 = Math.max(this.x2, that.x + that.width);
    const y2 = Math.max(this.y2, that.y + that.height);
    this.x = x;
    this.y = y;
    this.width = x2 - x;
    this.height = y2 - y;
  }

  addPoint(p: IPoint) {
    const x = Math.min(this.x, p.x);
    const y = Math.min(this.y, p.y);
    const x2 = Math.max(this.x2, p.x);
    const y2 = Math.max(this.y2, p.y);
    this.x = x;
    this.y = y;
    this.width = x2 - x;
    this.height = y2 - y;
  }

  toString() {
    return `Rectangle[x=${this.x}, y=${this.y}, w=${this.width}, h=${this.height}]`;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.rect(this.x, this.y, this.width, this.height);
  }

  containsPt(px: number, py: number) {
    return px >= this.x && px <= this.x2 && py >= this.y && py <= this.y2;
  }

  get area() {
    return this.width * this.height;
  }

  intersects(that: IRectangle) {
    if (this.area <= 0 || that.width <= 0 || that.height <= 0) {
      return false;
    }
    return that.x + that.width > this.x && that.y + that.height > this.y && that.x < this.x2 && that.y < this.y2;
  }

  distSquare(tempX: number, tempY: number) {
    // test current point to see if it is inside rectangle
    if (this.containsPt(tempX, tempY)) {
      return 0;
    }
    // which edge of rectangle is closest
    const code = outcode(this, tempX, tempY);
    // top
    if (code.has(OutCode.TOP)) {
      // and left
      if (code.has(OutCode.LEFT)) {
        // linear distance from upper left corner
        return ptsDistanceSq(tempX, tempY, this.x, this.y);
      }
      if (code.has(OutCode.RIGHT)) {
        // and right
        // linear distance from upper right corner
        return ptsDistanceSq(tempX, tempY, this.x2, this.y);
      }
      // distance from top line segment
      return (this.y - tempY) * (this.y - tempY);
    }
    // bottom
    if (code.has(OutCode.BOTTOM)) {
      // and left
      if (code.has(OutCode.LEFT)) {
        // linear distance from lower left corner
        return ptsDistanceSq(tempX, tempY, this.x, this.y2);
      }
      // and right
      if (code.has(OutCode.RIGHT)) {
        // linear distance from lower right corner
        return ptsDistanceSq(tempX, tempY, this.x2, this.y2);
      }
      // distance from bottom line segment
      return (tempY - this.y2) * (tempY - this.y2);
    }
    // left only
    if (code.has(OutCode.LEFT)) {
      // linear distance from left edge
      return (this.x - tempX) * (this.x - tempX);
    }
    // right only
    if (code.has(OutCode.RIGHT)) {
      // linear distance from right edge
      return (tempX - this.x2) * (tempX - this.x2);
    }
    return 0;
  }
}

export function boundingBox(path: ReadonlyArray<IPoint>) {
  if (path.length === 0) {
    return null;
  }
  const first = path[0];
  const bb = new Rectangle(first.x, first.y, 0, 0);
  for (const point of path) {
    bb.addPoint(point);
  }
  return bb;
}
