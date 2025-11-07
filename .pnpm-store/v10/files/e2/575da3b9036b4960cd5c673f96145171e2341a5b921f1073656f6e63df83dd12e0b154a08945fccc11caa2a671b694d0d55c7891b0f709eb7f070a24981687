import type { Point } from '../../types';
import { deepAssign, getShapeSpace, hide, show } from '../../util';
import { CrosshairBase } from './base';
import { LINE_CROSSHAIR_DEFAULT_STYLE } from './constant';
import type { LineCrosshairOptions, LineCrosshairStyleProps } from './types';

export type { LineCrosshairStyleProps, LineCrosshairOptions };

export class LineCrosshair extends CrosshairBase<Required<LineCrosshairStyleProps>> {
  static tag = 'line-crosshair';

  protected static defaultOptions = {
    style: LINE_CROSSHAIR_DEFAULT_STYLE,
  };

  protected get crosshairPath() {
    const {
      startPos: [sx, sy],
      endPos: [ex, ey],
    } = this.attributes;
    const path = [['M', 0, 0], ['L', ex - sx, ey - sy], ['Z']] as any[];
    return path;
  }

  /**
   * 获得 pointer 的相对坐标
   */
  protected get localPointer() {
    if (!this.pointer) return this.attributes.startPos;
    const [bx, by] = this.getPosition();
    const [x, y] = this.pointer;
    return [x - bx, y - by];
  }

  private get isVertical() {
    const {
      startPos: [x1, y1],
      endPos: [x2, y2],
    } = this.attributes;
    return x1 === x2 && y1 !== y2;
  }

  private get tagShapeSpace() {
    const { width, height } = getShapeSpace(this.tagShape);
    return { width, height };
  }

  constructor(options: LineCrosshairOptions) {
    super(deepAssign({}, LineCrosshair.defaultOptions, options));
  }

  public update(cfg: Partial<LineCrosshairStyleProps>) {
    super.update(cfg);
  }

  /**
   * 将线移动至对应位置
   */
  public setPointer(pointer: Point) {
    super.setPointer(pointer);
    this.adjustPosition();
  }

  public setText(text: string) {
    this.tagShape.update({ text });
    this.adjustTag();
  }

  protected adjustLayout() {
    this.adjustPosition();
    this.adjustTag();
  }

  /**
   * 调整this位置
   */
  private adjustPosition() {
    const [lx, ly] = this.localPointer;
    const {
      startPos: [sx, sy],
    } = this.attributes;
    const targetPos = this.getOrientVal<[number, number]>([sx, ly], [lx, sy]);
    this.shapesGroup.setLocalPosition(targetPos);
  }

  /**
   * 调整tag位置
   */
  private adjustTag() {
    const {
      tagText,
      tagPosition,
      startPos: [x1, y1],
      endPos: [x2, y2],
    } = this.attributes;

    if (!tagText || tagText === '') {
      hide(this.tagShape);
      return;
    }
    show(this.tagShape);

    const { width, height } = this.tagShapeSpace;
    // 偏移量
    const [xOffset, yOffset] = this.getOrientVal(
      {
        start: [-width / 2, height / 2],
        end: [x2 - x1 + width / 2, height / 2],
      },
      {
        start: [0, 0],
        end: [0, y2 - y1 + height],
      }
    )[tagPosition];
    this.tagShape.setLocalPosition(xOffset, yOffset);
  }

  private getOrientVal<T>(v1: T, v2: T): T {
    return this.isVertical ? v2 : v1;
  }
}
