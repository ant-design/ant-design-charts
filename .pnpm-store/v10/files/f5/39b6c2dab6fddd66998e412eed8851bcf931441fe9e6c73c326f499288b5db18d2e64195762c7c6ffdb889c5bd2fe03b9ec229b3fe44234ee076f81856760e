import { CustomEvent } from '@antv/g';
import { clamp } from '@antv/util';
import { Component } from '../../core';
import type { Group, RectStyleProps } from '../../shapes';
import { getEventPos, parseSeriesAttr, select, subStyleProps, superStyleProps } from '../../util';
import type { SliderStyleProps } from '../slider';
import { Slider } from '../slider';
import type { ScrollbarOptions, ScrollbarStyleProps } from './types';

export type { ScrollbarOptions, ScrollbarStyleProps };

export class Scrollbar extends Component<ScrollbarStyleProps> {
  public static tag = 'scrollbar';

  private slider!: Slider;

  private range: [number, number] = [0, 1];

  private get padding(): [number, number, number, number] {
    const { padding } = this.attributes;
    return parseSeriesAttr(padding);
  }

  constructor(options: ScrollbarOptions) {
    super(options, {
      x: 0,
      y: 0,
      isRound: true,
      orientation: 'vertical',
      padding: [2, 2, 2, 2],
      scrollable: true,
      slidable: true,
      thumbCursor: 'default',
      trackSize: 10,
      value: 0,
    });
  }

  private get value() {
    const { value } = this.attributes;
    const [min, max] = this.range;
    return clamp(value, min, max);
  }

  private get trackLength() {
    const { viewportLength, trackLength = viewportLength } = this.attributes;
    return trackLength;
  }

  private get availableSpace() {
    const { trackSize } = this.attributes;
    const trackLength = this.trackLength;
    const [top, right, bottom, left] = this.padding;
    const [width, height] = this.getOrientVal([
      [trackLength, trackSize],
      [trackSize, trackLength],
    ]);
    return {
      x: left,
      y: top,
      width: +width - (left + right),
      height: +height - (top + bottom),
    };
  }

  private get trackRadius() {
    const { isRound, trackSize } = this.attributes;
    if (!isRound) return 0;
    return trackSize / 2;
  }

  private get thumbRadius() {
    const { isRound, thumbRadius } = this.attributes;
    if (!isRound) return 0;
    const { width, height } = this.availableSpace;
    return thumbRadius || this.getOrientVal([height, width]) / 2;
  }

  /**
   * accord to thumbLen and value, calculate the values of slider
   */
  private getValues(value = this.value): [number, number] {
    const { viewportLength, contentLength } = this.attributes;
    const unit = viewportLength / contentLength;
    const [min, max] = this.range;
    const start = value * (max - min - unit);
    return [start, start + unit];
  }

  public getValue() {
    return this.value;
  }

  private renderSlider(container: Group) {
    const { x, y, orientation, trackSize, padding, slidable } = this.attributes;
    const trackStyle = subStyleProps<RectStyleProps>(this.attributes, 'track');
    const selectionStyle = subStyleProps<RectStyleProps>(this.attributes, 'thumb');

    const style: SliderStyleProps = {
      x,
      y,
      brushable: false,
      orientation,
      padding,
      selectionRadius: this.thumbRadius,
      showHandle: false,
      slidable,
      trackLength: this.trackLength,
      trackRadius: this.trackRadius,
      trackSize,
      values: this.getValues(),
      ...superStyleProps(trackStyle, 'track'),
      ...superStyleProps(selectionStyle, 'selection'),
    };

    this.slider = select(container)
      .maybeAppendByClassName('scrollbar', () => new Slider({ style }))
      .update(style)
      .node();
  }

  public render(attributes: ScrollbarStyleProps, container: Group) {
    this.renderSlider(container);
  }

  /**
   * 设置value
   * @param value 当前位置的占比
   */
  public setValue(value: number, animate: boolean = false) {
    const { value: oldValue } = this.attributes;
    const [min, max] = this.range;
    this.slider.setValues(this.getValues(clamp(value, min, max)), animate);
    // 通知触发valueChange
    // todo 调用 setValue 不触发 valuechange
    this.onValueChange(oldValue);
  }

  /**
   * 值改变事件
   */
  private onValueChange = (oldValue: any) => {
    const { value: newValue } = this.attributes;
    if (oldValue === newValue) return;
    const evtVal = {
      detail: {
        oldValue,
        value: newValue,
      },
    };
    this.dispatchEvent(new CustomEvent('scroll', evtVal));
    this.dispatchEvent(new CustomEvent('valuechange', evtVal));
  };

  public bindEvents() {
    this.slider.addEventListener('trackClick', (e: CustomEvent) => {
      e.stopPropagation();
      this.onTrackClick(e.detail);
    });
    this.onHover();
  }

  /**
   * 根据orient取出对应轴向上的值
   * 主要用于取鼠标坐标在orient方向上的位置
   */
  private getOrientVal<T>(values: [T, T]) {
    const { orientation } = this.attributes;
    return orientation === 'horizontal' ? values[0] : values[1];
  }

  /**
   * 点击轨道事件
   */
  private onTrackClick = (e: any) => {
    const { slidable } = this.attributes;
    if (!slidable) return;
    const [x, y] = this.getLocalPosition();
    const [top, , , left] = this.padding;
    const basePos = this.getOrientVal([(x as number) + left, (y as number) + top]);
    const clickPos = this.getOrientVal(getEventPos(e));
    const value = (clickPos - basePos) / this.trackLength;
    this.setValue(value, true);
  };

  /**
   * 悬浮事件
   */
  private onHover() {
    this.slider.addEventListener('selectionMouseenter', this.onThumbMouseenter);
    this.slider.addEventListener('trackMouseenter', this.onTrackMouseenter);
    this.slider.addEventListener('selectionMouseleave', this.onThumbMouseleave);
    this.slider.addEventListener('trackMouseleave', this.onTrackMouseleave);
  }

  private onThumbMouseenter = (e: CustomEvent) => {
    this.dispatchEvent(new CustomEvent('thumbMouseenter', { detail: e.detail }));
  };

  private onTrackMouseenter = (e: CustomEvent) => {
    this.dispatchEvent(new CustomEvent('trackMouseenter', { detail: e.detail }));
  };

  private onThumbMouseleave = (e: CustomEvent) => {
    this.dispatchEvent(new CustomEvent('thumbMouseleave', { detail: e.detail }));
  };

  private onTrackMouseleave = (e: CustomEvent) => {
    this.dispatchEvent(new CustomEvent('trackMouseleave', { detail: e.detail }));
  };
}
