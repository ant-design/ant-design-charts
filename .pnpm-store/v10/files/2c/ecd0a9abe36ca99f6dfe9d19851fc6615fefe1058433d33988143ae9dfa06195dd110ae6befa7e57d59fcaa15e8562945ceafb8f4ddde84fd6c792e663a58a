import type { DisplayObject } from '../../../shapes';
import type { Point } from '../../../types';
import type { SeriesAttr } from '../../../util';
import { degToRad, parseSeriesAttr, textOf } from '../../../util';

export class Bounds {
  public x1!: number;

  public y1!: number;

  public x2!: number;

  public y2!: number;

  constructor(x1: number, y1: number, x2: number, y2: number) {
    this.set(x1, y1, x2, y2);
  }

  public get left() {
    return this.x1;
  }

  public get top() {
    return this.y1;
  }

  public get right() {
    return this.x2;
  }

  public get bottom() {
    return this.y2;
  }

  public get width() {
    return this.defined('x2') && this.defined('x1') ? this.x2 - this.x1 : undefined;
  }

  public get height() {
    return this.defined('y2') && this.defined('y1') ? this.y2 - this.y1 : undefined;
  }

  rotatedPoints(radian: number, x: number, y: number) {
    const { x1, y1, x2, y2 } = this;
    const cos = Math.cos(radian);
    const sin = Math.sin(radian);
    const cx = x - x * cos + y * sin;
    const cy = y - x * sin - y * cos;
    const points: Point[] = [
      [cos * x1 - sin * y2 + cx, sin * x1 + cos * y2 + cy],
      [cos * x2 - sin * y2 + cx, sin * x2 + cos * y2 + cy],
      [cos * x1 - sin * y1 + cx, sin * x1 + cos * y1 + cy],
      [cos * x2 - sin * y1 + cx, sin * x2 + cos * y1 + cy],
    ];
    return points;
  }

  set(x1: number, y1: number, x2: number, y2: number) {
    if (x2 < x1) {
      this.x2 = x1;
      this.x1 = x2;
    } else {
      this.x1 = x1;
      this.x2 = x2;
    }
    if (y2 < y1) {
      this.y2 = y1;
      this.y1 = y2;
    } else {
      this.y1 = y1;
      this.y2 = y2;
    }
    return this;
  }

  defined(key: 'left' | 'right' | 'top' | 'bottom' | 'x1' | 'x2' | 'y1' | 'y2') {
    return this[key] !== Number.MAX_VALUE && this[key] !== -Number.MAX_VALUE;
  }
}

/**
 * Can't use getBounds directly since we should not use AABB here.
 */
export function getBounds(item: DisplayObject<any>, margin?: SeriesAttr) {
  const angle = item.getEulerAngles() || 0;
  item.setEulerAngles(0);
  // get dimensions
  const {
    min: [x, y],
    max: [right, bottom],
  } = item.getBounds();
  const { width: w, height: h } = item.getBBox();

  let height = h;
  let dx = 0;
  let dy = 0;
  let anchorX = x;
  let anchorY = y;

  const text = textOf(item);

  if (text) {
    // [to fix] 目前 G 上计算 bbox 有一点误差
    height -= 1.5;
    const a = text.style.textAlign;
    const b = text.style.textBaseline;

    // horizontal alignment
    if (a === 'center') {
      anchorX = (x + right) / 2;
    } else if (a === 'right' || a === 'end') {
      anchorX = right;
    } else {
      // left by default, do nothing
    }

    // vertical alignment
    if (b === 'middle') {
      anchorY = (y + bottom) / 2;
    } else if (b === 'bottom') {
      anchorY = bottom;
    }
  }

  const [t = 0, r = 0, b = t, l = r] = parseSeriesAttr(margin);
  const bounds = new Bounds((dx += x) - l, (dy += y) - t, dx + w + r, dy + height + b);
  item.setEulerAngles(angle);

  return bounds.rotatedPoints(degToRad(angle), anchorX, anchorY);
}
