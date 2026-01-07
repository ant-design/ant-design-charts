import type { IRectangle, IPoint } from '../interfaces';
import { Rectangle } from './Rectangle';

export class Area {
  private readonly area: Float32Array;

  constructor(
    public readonly pixelGroup: number,
    public readonly i = 0,
    public readonly j = 0,
    public readonly pixelX = 0,
    public readonly pixelY = 0,
    public readonly width: number = 10,
    public readonly height: number = 10,
    pixels = new Float32Array(Math.max(0, width * height)).fill(0)
  ) {
    this.area = pixels;
  }

  createSub(rect: IRectangle, pixelPos: IPoint) {
    return new Area(this.pixelGroup, rect.x, rect.y, pixelPos.x, pixelPos.y, rect.width, rect.height);
  }

  static fromPixelRegion(pixelRect: IRectangle, pixelGroup: number) {
    return new Area(
      pixelGroup,
      0,
      0,
      pixelRect.x,
      pixelRect.y,
      Math.ceil(pixelRect.width / pixelGroup),
      Math.ceil(pixelRect.height / pixelGroup)
    );
  }

  copy(sub: Area, pixelPoint: IPoint) {
    return new Area(
      this.pixelGroup,
      this.scaleX(pixelPoint.x),
      this.scaleY(pixelPoint.y),
      pixelPoint.x,
      pixelPoint.y,
      sub.width,
      sub.height,
      sub.area
    );
  }

  boundX(pos: number) {
    if (pos < this.i) {
      return this.i;
    }
    if (pos >= this.width) {
      return this.width - 1;
    }
    return pos;
  }

  boundY(pos: number) {
    if (pos < this.j) {
      return this.j;
    }
    if (pos >= this.height) {
      return this.height - 1;
    }
    return pos;
  }

  scaleX(pixel: number) {
    return this.boundX(Math.floor((pixel - this.pixelX) / this.pixelGroup));
  }

  scaleY(pixel: number) {
    return this.boundY(Math.floor((pixel - this.pixelY) / this.pixelGroup));
  }

  scale(pixelRect: IRectangle) {
    const x = this.scaleX(pixelRect.x);
    const y = this.scaleY(pixelRect.y);
    const x2 = this.boundX(Math.ceil((pixelRect.x + pixelRect.width - this.pixelX) / this.pixelGroup));
    const y2 = this.boundY(Math.ceil((pixelRect.y + pixelRect.height - this.pixelY) / this.pixelGroup));
    const width = x2 - x;
    const height = y2 - y;
    return new Rectangle(x, y, width, height);
  }

  invertScaleX(v: number) {
    return Math.round(v * this.pixelGroup + this.pixelX);
  }

  invertScaleY(v: number) {
    return Math.round(v * this.pixelGroup + this.pixelY);
  }

  addPadding(rect: Rectangle, pixelPadding: number) {
    const padding = Math.ceil(pixelPadding / this.pixelGroup);
    const x = this.boundX(rect.x - padding);
    const y = this.boundY(rect.y - padding);
    const x2 = this.boundX(rect.x2 + padding);
    const y2 = this.boundY(rect.y2 + padding);
    const width = x2 - x;
    const height = y2 - y;
    return new Rectangle(x, y, width, height);
  }

  get(i: number, j: number) {
    if (i < 0 || j < 0 || i >= this.width || j >= this.height) {
      return Number.NaN;
    }
    return this.area[i + j * this.width];
  }

  inc(i: number, j: number, v: number) {
    if (i < 0 || j < 0 || i >= this.width || j >= this.height) {
      return;
    }
    this.area[i + j * this.width] += v;
  }

  set(i: number, j: number, v: number) {
    if (i < 0 || j < 0 || i >= this.width || j >= this.height) {
      return;
    }
    this.area[i + j * this.width] = v;
  }

  incArea(sub: Area, factor: number) {
    if (sub.width <= 0 || sub.height <= 0 || factor === 0) {
      return;
    }
    // assume it is within the bounds
    const w = this.width;
    const aw = sub.width;
    const i1 = Math.max(0, sub.i);
    const j1 = Math.max(0, sub.j);
    const i2 = Math.min(sub.i + sub.width, w);
    const j2 = Math.min(sub.j + sub.height, this.height);

    if (j2 <= 0 || i2 <= 0 || i1 >= w || j2 >= this.height) {
      return;
    }

    for (let j = j1; j < j2; j++) {
      const subRow = (j - sub.j) * aw;
      const row = j * w;
      for (let i = i1; i < i2; i++) {
        const v = sub.area[i - sub.i + subRow];
        if (v === 0) {
          continue;
        }
        this.area[i + row] += factor * v;
      }
    }
  }

  fill(value: number) {
    this.area.fill(value);
  }

  fillArea(rect: IRectangle, value: number) {
    const offset = rect.x + rect.y * this.width;
    for (let j = 0; j < rect.height; j++) {
      const pos = offset + j * this.width;
      this.area.fill(value, pos, pos + rect.width);
    }
  }

  fillHorizontalLine(i: number, j: number, width: number, value: number) {
    const offset = i + j * this.width;
    this.area.fill(value, offset, offset + width);
  }

  fillVerticalLine(i: number, j: number, height: number, value: number) {
    const offset = i + j * this.width;
    for (let k = 0; k < height; k++) {
      this.area[offset + k * this.width] = value;
    }
  }

  clear() {
    this.area.fill(0);
  }

  toString() {
    let r = '';
    for (let j = 0; j < this.height; j++) {
      const row = j * this.width;
      for (let i = 0; i < this.width; i++) {
        const v = this.area[row + i];
        r += v.toFixed(1).padStart(6);
        r += ' ';
      }
      r += '\n';
    }
    return r;
  }

  draw(ctx: CanvasRenderingContext2D, offset = true) {
    if (this.width <= 0 || this.height <= 0) {
      return;
    }
    ctx.save();
    if (offset) {
      ctx.translate(this.pixelX, this.pixelY);
    }
    const min = this.area.reduce((acc, v) => Math.min(acc, v), Number.POSITIVE_INFINITY);
    const max = this.area.reduce((acc, v) => Math.max(acc, v), Number.NEGATIVE_INFINITY);

    const scale = (v: number) => (v - min) / (max - min);
    ctx.scale(this.pixelGroup, this.pixelGroup);
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        const v = this.area[i + j * this.width];
        ctx.fillStyle = `rgba(0, 0, 0, ${scale(v)})`;
        ctx.fillRect(i, j, 1, 1);
      }
    }
    ctx.restore();
  }

  drawThreshold(ctx: CanvasRenderingContext2D, threshold: number, offset = true) {
    if (this.width <= 0 || this.height <= 0) {
      return;
    }
    ctx.save();
    if (offset) {
      ctx.translate(this.pixelX, this.pixelY);
    }
    ctx.scale(this.pixelGroup, this.pixelGroup);
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        const v = this.area[i + j * this.width];
        ctx.fillStyle = v > threshold ? 'black' : 'white';
        ctx.fillRect(i, j, 1, 1);
      }
    }
    ctx.restore();
  }
}
