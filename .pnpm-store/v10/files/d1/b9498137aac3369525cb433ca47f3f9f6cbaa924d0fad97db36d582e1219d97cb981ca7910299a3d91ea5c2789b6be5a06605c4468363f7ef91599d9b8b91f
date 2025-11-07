import { ComponentOptions, Component } from '../../core';
import type { GroupStyleProps, LineStyleProps, RectStyleProps, CircleStyleProps } from '../../shapes';
import { Circle } from '../../shapes';
import { PrefixObject } from '../../types';
import { select, subStyleProps } from '../../util';
import { deepAssign } from '../../util/deep-assign';
import type { HandleType } from '../slider/handle';

type TimeModeHandleOptions = ComponentOptions<Partial<CircleStyleProps>>;

export class TimeModeHandle extends Circle {
  static defaultOptions = {
    style: {
      r: 5,
      fill: '#3f7cf7',
      lineWidth: 0,
      stroke: '#3f7cf7',
      strokeOpacity: 0.5,
      cursor: 'pointer',
    },
  };

  constructor(options: TimeModeHandleOptions) {
    super(deepAssign({}, TimeModeHandle.defaultOptions, options));
    this.bindEvents();
  }

  bindEvents() {
    this.addEventListener('mouseenter', () => {
      this.attr('lineWidth', Math.ceil(+(this.style.r || 0) / 2));
    });

    this.addEventListener('mouseleave', () => {
      this.attr('lineWidth', 0);
    });
  }
}

type ChartModeHandleStyleProps = GroupStyleProps &
  PrefixObject<Omit<RectStyleProps, 'x' | 'y' | 'width' | 'height'>, 'background'> &
  PrefixObject<Omit<LineStyleProps, 'x1' | 'y1' | 'x2' | 'y2'>, 'icon'> &
  PrefixObject<Omit<LineStyleProps, 'x1' | 'y1' | 'x2' | 'y2'>, 'border'> & {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    /** 图标尺寸 */
    iconSize?: number;
    type: HandleType;
  };
type ChartModeHandleOptions = ComponentOptions<ChartModeHandleStyleProps>;
export class ChartModeHandle extends Component<ChartModeHandleStyleProps> {
  static defaultOptions: ChartModeHandleOptions = {
    style: {
      x: 0,
      y: 0,
      width: 10,
      height: 50,
      iconSize: 10,
      type: 'start',
      backgroundFill: '#fff',
      backgroundFillOpacity: 0.5,
      iconStroke: '#9a9a9a',
      iconLineWidth: 1,
      borderStroke: '#e8e8e8',
      borderLineWidth: 1,
    },
  };

  private renderBackground() {
    const { x, y, width, height } = this.attributes;
    const style = subStyleProps(this.attributes, 'background');
    select(this)
      .maybeAppend('background', 'rect')
      .attr('className', 'background')
      .styles({ x: x - width / 2, y: y - height / 2, width, height, ...style });
  }

  private renderIcon() {
    const { x, y, iconSize } = this.attributes;
    const style = subStyleProps(this.attributes, 'icon');
    const diffX = 1;
    const diffY = iconSize / 2;
    select(this)
      .maybeAppend('icon-left-line', 'line')
      .attr('className', 'icon-left-line')
      .styles({ x1: x - diffX, y1: y - diffY, x2: x - diffX, y2: y + diffY, ...style });
    select(this)
      .maybeAppend('icon-right-line', 'line')
      .attr('className', 'icon-right-line')
      .styles({ x1: x + diffX, y1: y - diffY, x2: x + diffX, y2: y + diffY, ...style });
  }

  private renderBorder() {
    const { x: xx, y, width, height, type } = this.attributes;
    const style = subStyleProps(this.attributes, 'border');
    const x = type === 'start' ? +width / 2 : -width / 2;
    select(this)
      .maybeAppend('border', 'line')
      .attr('className', 'border')
      .styles({
        x1: x + xx,
        y1: y - height / 2,
        x2: x + xx,
        y2: y + height / 2,
        ...style,
      });
  }

  render() {
    this.renderBackground();
    this.renderIcon();
    this.renderBorder();
  }

  constructor(options: ChartModeHandleOptions) {
    super(deepAssign({}, ChartModeHandle.defaultOptions, options));
  }
}
