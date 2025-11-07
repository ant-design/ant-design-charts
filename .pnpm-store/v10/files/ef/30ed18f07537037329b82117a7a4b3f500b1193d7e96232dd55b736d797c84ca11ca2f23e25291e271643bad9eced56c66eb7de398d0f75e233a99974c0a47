import { deepMix, isUndefined } from '@antv/util';
import { Component } from '../../core';
import { Group, RectStyleProps, Text } from '../../shapes';
import { maybeAppend, parseSeriesAttr, select, subStyleProps } from '../../util';
import { Marker } from '../marker';
import { DISABLED_STYLE, SIZE_STYLE, TYPE_STYLE } from './constant';
import type { ButtonOptions, ButtonStyleProps } from './types';

export type { ButtonStyleProps, ButtonOptions };

export class Button extends Component<ButtonStyleProps> {
  /**
   * 组件类型
   */
  public static tag = 'button';

  /**
   * 文本
   */
  private textShape!: Text;

  private state: 'default' | 'active' | 'disabled' = 'default';

  private get markerSize(): number {
    const { markerSymbol } = this.attributes;
    const markerStyle = this.getStyle('marker');
    const markerSize = !markerSymbol ? 0 : markerStyle?.size || 2;
    return markerSize;
  }

  /* 获得文本可用宽度 */
  private get textAvailableWidth(): number {
    const { markerSymbol, padding, ellipsis, width: bWidth, markerSpacing: spacing } = this.attributes;
    if (!ellipsis) return Infinity;
    /* 按钮总宽度 */
    const width = (isUndefined(bWidth) ? (this.getStyle('button') as RectStyleProps).width : bWidth) as number;
    if (markerSymbol) return width - padding! * 2 - spacing! - this.markerSize;
    return width - padding! * 2;
  }

  private get buttonHeight(): number {
    const { height } = this.attributes;
    if (height) return +height;
    return +this.getStyle('button').height;
  }

  constructor(options: ButtonOptions) {
    super(options, {
      cursor: 'pointer',
      padding: 10,
      size: 'middle',
      type: 'default',
      text: '',
      state: 'default',
      markerAlign: 'left',
      markerSpacing: 5,
      default: {
        buttonLineWidth: 1,
        buttonRadius: 5,
      },
      active: {},
    });
  }

  /**
   * 根据size、type属性生成实际渲染的属性
   */
  private getStyle(name: string) {
    const { size, type } = this.attributes;
    const { state } = this;
    const mixedStyle = deepMix(
      {},
      SIZE_STYLE[size],
      TYPE_STYLE[type][state],
      this.attributes.default,
      this.attributes[state]
    );

    if (state === 'disabled') {
      // 从DISABLED_STYLE中pick中pick mixedStyle里已有的style
      Object.keys(mixedStyle).forEach((key) => {
        if (key in DISABLED_STYLE) {
          // @ts-ignore
          mixedStyle[key] = DISABLED_STYLE[key];
        }
      });
      Object.keys(DISABLED_STYLE.strict).forEach((key) => {
        // @ts-ignore
        mixedStyle[key] = DISABLED_STYLE.strict[key];
      });
      deepMix(mixedStyle, this.attributes.disabled || {});
    }
    return subStyleProps(mixedStyle, name);
  }

  // @todo 处理 markerAlign='right' 的场景. 方案: left marker & right marker 处理为两个 shape, 互相不干扰
  public render(attributes: Required<ButtonStyleProps>, container: Group) {
    const { text = '', padding = 0, markerSymbol, markerSpacing = 0, x = 0, y = 0 } = attributes;
    container.attr({
      cursor: this.state === 'disabled' ? 'not-allowed' : 'pointer',
    });
    const [pt, pr, pb, pl] = parseSeriesAttr(padding);
    const height = this.buttonHeight;

    const markerStyle = this.getStyle('marker');

    const { markerSize } = this;
    const style = {
      ...markerStyle,
      symbol: markerSymbol,
      x: x + pl + markerSize / 2,
      y: y + height / 2,
      size: markerSize,
    };
    const markerShape = maybeAppend(container, '.marker', () => new Marker({ className: 'marker', style }))
      .update({ style })
      .node() as Marker;

    const bounds = markerShape.getLocalBounds();

    const textStyle = this.getStyle('text');
    this.textShape = maybeAppend(container, '.text', 'text')
      .attr('className', 'text')
      .styles({
        x: x + (markerSize ? bounds.max[0] + markerSpacing : pl),
        y: y + height / 2,
        ...textStyle,
        text,
        textAlign: 'left',
        textBaseline: 'middle',
        wordWrap: true,
        wordWrapWidth: this.textAvailableWidth,
        maxLines: 1,
        textOverflow: '...',
      })
      .node() as Text;

    const textBounds = this.textShape.getLocalBounds();
    const buttonStyle = this.getStyle('button') as RectStyleProps;

    select(container)
      .maybeAppendByClassName('.background', 'rect')
      .styles({
        zIndex: -1,
        ...buttonStyle,
        x,
        y,
        height,
        width: pl + (markerSize ? markerSize + markerSpacing : 0) + textBounds.halfExtents[0] * 2 + pr,
      });
  }

  /**
   * 组件的更新
   */
  public update(attr: Partial<ButtonStyleProps> = {}) {
    this.attr(deepMix({}, this.attributes, attr));
    const { state } = this.attributes;
    // 更新状态
    this.state = state;
    this.render(this.attributes, this);
  }

  /** 更新状态 (不需要走 update) */
  public setState(state: 'disabled' | 'active' | 'default') {
    this.update({ state });
  }

  public hide() {
    // @ts-ignore
    this.style.visibility = 'hidden';
  }

  public show() {
    // @ts-ignore
    this.style.visibility = 'visible';
  }

  private clickEvents = () => {
    const { onClick, state } = this.attributes;
    // 点击事件
    if (state !== 'disabled') onClick?.call(this, this);
  };

  private mouseenterEvent = () => {
    const { state } = this.attributes;
    if (state !== 'disabled') {
      this.state = 'active';
      this.render(this.attributes, this);
    }
  };

  private mouseleaveEvent = () => {
    const { state } = this.attributes;
    this.state = state;
    this.render(this.attributes, this);
  };

  public bindEvents(): void {
    this.addEventListener('click', this.clickEvents);
    this.addEventListener('mouseenter', this.mouseenterEvent);
    this.addEventListener('mouseleave', this.mouseleaveEvent);
  }
}
