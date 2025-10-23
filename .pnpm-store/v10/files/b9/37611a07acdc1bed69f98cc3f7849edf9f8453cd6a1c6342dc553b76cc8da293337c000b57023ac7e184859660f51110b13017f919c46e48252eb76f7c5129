import type { Point } from '../../types';
import { deepAssign, hide, intersection, lineLen, rotate, scale } from '../../util';
import { CrosshairBase } from './base';
import { POLYGON_CROSSHAIR_DEFAULT_STYLE } from './constant';
import { PolygonCrosshairOptions, PolygonCrosshairStyleProps } from './types';

export type { PolygonCrosshairStyleProps, PolygonCrosshairOptions };

export class PolygonCrosshair extends CrosshairBase<Required<PolygonCrosshairStyleProps>> {
  public static tag = 'polygon-crosshair';

  protected static defaultOptions = {
    style: POLYGON_CROSSHAIR_DEFAULT_STYLE,
  };

  protected get crosshairPath() {
    return this.createPolygonPath();
  }

  constructor(options: PolygonCrosshairOptions) {
    super(deepAssign({}, PolygonCrosshair.defaultOptions, options));
  }

  public update(cfg: Partial<PolygonCrosshairStyleProps>) {
    super.update(cfg);
  }

  /**
   * 得到从中心出发，各个点方向的单位向量
   */
  private get points() {
    const { startAngle, sides } = this.attributes;
    const a = (Math.PI * 2) / sides;
    // 单位向量
    const unit: [number, number] = [1, 0];
    const points = [];
    for (let i = 0; i < sides; i += 1) {
      points.push(rotate(unit, [0, 0], (startAngle / 180) * Math.PI + a * i));
    }
    return points as Point[];
  }

  /**
   * 1. 判断point位于哪一个扇区
   * 2. 计算中心到point的线段与所在扇区的边的交点
   * 3. 计算等效半径
   */
  public setPointer([x, y]: Point) {
    super.setPointer([x, y]);
    const [lx, ly] = this.localPointer;
    const { center } = this.attributes;
    // 求交点
    const [ix, iy] = this.intersection([lx, ly]);
    if (!ix || !iy) return;
    const equivalentRadius = lineLen(center, [lx, ly]) / lineLen(center, [ix, iy]);
    const path = this.createPolygonPath(equivalentRadius) as any;
    this.crosshairShape.attr({ d: path });
  }

  protected adjustLayout() {
    hide(this.tagShape);
  }

  private createPolygonPath(radius?: number) {
    const {
      defaultRadius,
      center: [cx, cy],
    } = this.attributes;
    const path = this.points.map(([x, y], index) => {
      const [tx, ty] = scale([x, y], radius || defaultRadius);
      return [index === 0 ? 'M' : 'L', cx + tx, cy + ty];
    });
    path.push(['Z']);
    return path as any[];
  }

  /**
   * 求点与扇区单位边的交点
   */
  private intersection([x, y]: Point) {
    const { points } = this;
    const {
      center: [cx, cy],
    } = this.attributes;
    let ix: number;
    let iy: number;
    // 遍历每个边
    for (let i = 1; i <= points.length; i += 1) {
      const [sx, sy] = points[i - 1];
      const [ex, ey] = points[i % points.length];
      const inter = intersection([x, y], [cx, cy], [sx + cx, sy + cy], [ex + cx, ey + cy]);
      if (inter.length !== 0) {
        // 存在交点
        [ix, iy] = inter as Point;
      }
    }
    return [ix!, iy!];
  }
}
