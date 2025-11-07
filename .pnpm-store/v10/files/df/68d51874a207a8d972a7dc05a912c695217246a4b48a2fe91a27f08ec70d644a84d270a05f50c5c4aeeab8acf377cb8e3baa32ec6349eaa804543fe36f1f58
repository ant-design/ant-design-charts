import { ElementEvent } from '@antv/g';
import type { PathArray } from '@antv/util';
import { Component } from '../../core';
import { Group } from '../../shapes';
import type { Point } from '../../types';
import {
  BBox,
  Selection,
  classNames,
  hide,
  isHorizontal,
  parseSeriesAttr,
  renderExtDo,
  select,
  show,
  splitStyle,
  subStyleProps,
} from '../../util';
import { DEFAULT_INDICATOR_STYLE_PROPS } from './constant';
import type { IndicatorOptions, IndicatorStyleProps, Position } from './types';

export type { IndicatorOptions, IndicatorStyleProps };

type Edge = [Point, Point];

const CLASS_NAMES = classNames(
  {
    background: 'background',
    labelGroup: 'label-group',
    label: 'label',
  },
  'indicator'
);
export class Indicator extends Component<IndicatorStyleProps> {
  constructor(options: IndicatorOptions) {
    super(options, DEFAULT_INDICATOR_STYLE_PROPS);
    this.group = this.appendChild(new Group({}));
    this.isMutationObserved = true;
  }

  private group: Group;

  private background!: Selection;

  private label!: Selection;

  private point: Point = [0, 0];

  private renderBackground() {
    if (!this.label) return;
    const { position, padding } = this.attributes;
    const [t, r, b, l] = parseSeriesAttr(padding);
    const { min, max } = this.label.node().getLocalBounds();
    const bbox: BBox = new BBox(min[0] - l, min[1] - t, max[0] + r - min[0] + l, max[1] + b - min[1] + t);
    const path = this.getPath(position, bbox);

    const style = subStyleProps(this.attributes, 'background');

    this.background = select(this.group)
      .maybeAppendByClassName(CLASS_NAMES.background, 'path')
      .styles({ ...style, d: path });
    this.group.appendChild(this.label.node());
  }

  private renderLabel() {
    const { formatter, labelText } = this.attributes;

    const style = subStyleProps(this.attributes, 'label');
    const [{ text: rawText, ...textStyle }, groupStyle] = splitStyle(style);

    this.label = select(this.group).maybeAppendByClassName(CLASS_NAMES.labelGroup, 'g').styles(groupStyle);
    if (!labelText) return;
    const text = this.label
      .maybeAppendByClassName(CLASS_NAMES.label, () => renderExtDo(formatter(labelText)))
      .style('text', formatter(labelText).toString());
    text.selectAll('text').styles(textStyle);
  }

  private adjustLayout() {
    const [dx, dy] = this.point;
    const { x, y } = this.attributes;
    this.group.attr('transform', `translate(${x - dx}, ${y - dy})`);
  }

  private getPath(position: Position, bbox: BBox) {
    const { radius: r } = this.attributes;
    const { x, y, width, height } = bbox;

    const pathArray: PathArray = [
      // 0 开始路径
      ['M', x + r, y],
      // 1 上边线
      ['L', x + width - r, y],
      // 2 右上角圆弧
      ['A', r, r, 0, 0, 1, x + width, y + r],
      // 3 右边线
      ['L', x + width, y + height - r],
      // 4 右下角圆弧
      ['A', r, r, 0, 0, 1, x + width - r, y + height],
      // 5 下边线
      ['L', x + r, y + height],
      // 6 左下角圆弧
      ['A', r, r, 0, 0, 1, x, y + height - r],
      // 7 左边线
      ['L', x, y + r],
      // 8 左上角圆弧
      ['A', r, r, 0, 0, 1, x + r, y],
      // 9 关闭路径
      ['Z'],
    ];

    // 将 position 反方向的边线替换为带尖角的边线
    const revertPositionMap = { top: 4, right: 6, bottom: 0, left: 2 };
    const index = revertPositionMap[position];
    const newPath: any = this.createCorner([pathArray[index].slice(-2) as any, pathArray[index + 1].slice(-2) as any]);
    // 替换
    pathArray.splice(index + 1, 1, ...newPath);
    pathArray[0][0] = 'M';
    return pathArray;
  }

  private createCorner(edge: Edge, size: number = 10) {
    // intrinsic parameter
    const cornerScale = 0.8;
    const isH = isHorizontal(...edge);
    const [[x0, y0], [x1, y1]] = edge;
    const [len, [b0, b1]] = isH ? [x1 - x0, [x0, x1]] : [y1 - y0, [y0, y1]];
    const hL = len / 2;
    const sign = len / Math.abs(len);
    const cL = size * sign;
    const hCL = cL / 2;
    const cS = ((cL * Math.sqrt(3)) / 2) * cornerScale;
    const [a0, a1, a2, a3, a4] = [b0, b0 + hL - hCL, b0 + hL, b0 + hL + hCL, b1];

    if (isH) {
      this.point = [a2, y0 - cS];
      return [
        ['L', a0, y0],
        ['L', a1, y0],
        ['L', a2, y0 - cS],
        ['L', a3, y0],
        ['L', a4, y0],
      ];
    }
    this.point = [x0 + cS, a2];
    return [
      ['L', x0, a0],
      ['L', x0, a1],
      ['L', x0 + cS, a2],
      ['L', x0, a3],
      ['L', x0, a4],
    ];
  }

  private applyVisibility() {
    const { visibility } = this.attributes;
    if (visibility === 'hidden') hide(this);
    else show(this);
  }

  public bindEvents() {
    this.label.on(ElementEvent.BOUNDS_CHANGED, this.renderBackground);
  }

  public render() {
    this.renderLabel();
    this.renderBackground();
    this.adjustLayout();
    this.applyVisibility();
  }
}
