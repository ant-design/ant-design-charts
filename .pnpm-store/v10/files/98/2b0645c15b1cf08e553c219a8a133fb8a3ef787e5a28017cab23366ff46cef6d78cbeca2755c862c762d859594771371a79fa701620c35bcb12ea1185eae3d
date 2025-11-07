import type { DisplayObject } from '../shapes';

export class BBox {
  public x = 0;

  public y = 0;

  public width = 0;

  public height = 0;

  public get bottom() {
    return this.y + this.height;
  }

  public get left() {
    return this.x;
  }

  public get right() {
    return this.x + this.width;
  }

  public get top() {
    return this.y;
  }

  constructor(x = 0, y = 0, width = 0, height = 0) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  static fromRect(other: DOMRect) {
    return new BBox(other.x, other.y, other.width, other.height);
  }

  toJSON() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      top: this.top,
      right: this.right,
      bottom: this.bottom,
      left: this.left,
    };
  }

  /**
   * 点是否在 bbox 中
   * @param p
   */
  public isPointIn(x: number, y: number) {
    return x >= this.left && x <= this.right && y >= this.top && y <= this.bottom;
  }
}

export function getRenderBBox(element: DisplayObject) {
  const {
    min: [minX, minY],
    max: [maxX, maxY],
  } = element.getRenderBounds();
  const width = maxX - minX;
  const height = maxY - minY;
  return new BBox(minX, minY, width, height);
}
