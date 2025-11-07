import type { Point } from '../../types';
import { deepAssign, hide } from '../../util';
import { circle } from '../marker/symbol';
import { CrosshairBase } from './base';
import { CIRCLE_CROSSHAIR_DEFAULT_STYLE } from './constant';
import { CircleCrosshairOptions, CircleCrosshairStyleProps } from './types';

export type { CircleCrosshairStyleProps, CircleCrosshairOptions };

export class CircleCrosshair extends CrosshairBase<Required<CircleCrosshairStyleProps>> {
  public static tag = 'circle-crosshair';

  protected static defaultOptions = {
    style: CIRCLE_CROSSHAIR_DEFAULT_STYLE,
  };

  protected get crosshairPath() {
    return this.createCirclePath();
  }

  constructor(options: CircleCrosshairOptions) {
    super(deepAssign({}, CircleCrosshair.defaultOptions, options));
  }

  public update(cfg: CircleCrosshairStyleProps) {
    super.update(cfg);
  }

  public setPointer([x, y]: Point) {
    super.setPointer([x, y]);
    const [lx, ly] = this.localPointer;
    const {
      center: [cx, cy],
    } = this.attributes;

    const path = this.createCirclePath(((lx - cx) ** 2 + (ly - cy) ** 2) ** 0.5) as any;
    this.crosshairShape.attr({ d: path });
  }

  protected adjustLayout() {
    hide(this.tagShape);
  }

  private createCirclePath(radius?: number) {
    const {
      center: [x, y],
      defaultRadius,
    } = this.attributes;
    return circle(x, y, radius || defaultRadius) as any[];
  }
}
