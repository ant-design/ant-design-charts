import { PointPath } from '../PointPath';
import { Rectangle } from './Rectangle';
import type { IPoint } from '../interfaces';

export class PointList {
  private count = 0;

  private readonly arr: IPoint[] = [];

  private readonly set = new Set<string>();

  constructor(size = 0) {
    this.arr.length = size; // pre-allocating
  }

  add(p: IPoint) {
    this.set.add(`${p.x}x${p.y}`);
    this.arr[this.count++] = p;
  }

  contains(p: IPoint) {
    return this.set.has(`${p.x}x${p.y}`);
  }

  isFirst(p: IPoint) {
    if (this.count === 0) {
      return false;
    }
    const o = this.arr[0];
    return o != null && o.x === p.x && o.y === p.y;
  }

  path() {
    return new PointPath(this.arr.slice(0, this.count));
  }

  clear() {
    // for (let i = 0; i < this.count; i++) {
    //   this.arr[i] = null; // nulling is cheaper than deleting or reallocating
    // }
    this.set.clear();
    this.count = 0;
  }

  get(ix: number) {
    return this.arr[ix];
  }

  get length() {
    return this.count;
  }
}

export function boundingBox(path: PointPath) {
  if (path.length === 0) {
    return null;
  }
  const first = path.points[0];
  const bb = new Rectangle(first.x, first.y, 0, 0);
  for (const point of path.points) {
    bb.addPoint(point);
  }
  return bb;
}
