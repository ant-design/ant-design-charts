import { Component } from '../../core';
import { Group, Path } from '../../shapes';
import type { Point } from '../../types';
import { select, subStyleProps } from '../../util';
import { Tag } from '../tag';
import { CROSSHAIR_BASE_DEFAULT_STYLE } from './constant';
import type { CrosshairBaseStyleProps, CrosshairBaseOptions } from './types';

export abstract class CrosshairBase<T extends CrosshairBaseStyleProps> extends Component<T> {
  public static tag = 'crosshair-base';

  /**
   * 指针位置
   */
  protected pointer!: Point;

  protected shapesGroup!: Group;

  protected tagShape!: Tag;

  protected crosshairShape!: Path;

  /**
   * 获得 pointer 的相对坐标
   */
  protected get localPointer() {
    const [bx, by] = this.getPosition();
    const [x, y] = this.pointer;
    return [x - bx, y - by];
  }

  /**
   * 获得 crosshair 的 path
   */
  protected abstract get crosshairPath(): any[];

  private get tagStyle() {
    const style = subStyleProps(this.attributes, 'tag');
    return style;
  }

  private get crosshairStyle() {
    const style = subStyleProps(this.attributes, 'line');
    return {
      ...style,
      d: this.crosshairPath,
    };
  }

  constructor(options: CrosshairBaseOptions) {
    // @ts-ignore
    super(options, CROSSHAIR_BASE_DEFAULT_STYLE);
  }

  public render(attributes: CrosshairBaseStyleProps, container: Group) {
    const group = select(container).maybeAppendByClassName('.crosshair-group', 'g').node();
    this.shapesGroup = group;

    const tagStyle = this.tagStyle;
    const crosshairStyle = this.crosshairStyle;
    this.tagShape = select(group)
      .maybeAppendByClassName('crosshair-tag', () => new Tag({ style: tagStyle }))
      .styles(tagStyle)
      .node();
    this.crosshairShape = select(group).maybeAppendByClassName('.crosshair-path', 'path').styles(crosshairStyle).node();

    this.adjustLayout();
  }

  /**
   * 设置当前指针的位置
   * 1. 线条类型 调整位置即可
   * 2. circle 和 polygon 需要重新计算 path
   */
  public setPointer(pointer: Point) {
    this.pointer = pointer;
  }

  /**
   * 调整tag
   */
  protected abstract adjustLayout(): void;
}
