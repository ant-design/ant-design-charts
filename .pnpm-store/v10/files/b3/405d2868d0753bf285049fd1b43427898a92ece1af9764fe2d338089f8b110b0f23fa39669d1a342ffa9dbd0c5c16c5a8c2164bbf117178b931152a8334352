import type { Canvas } from '@antv/g';
import { clamp, omit } from '@antv/util';
import { ComponentOptions, Component } from '../../core';
import type { GroupStyleProps, PolygonStyleProps, RectStyleProps } from '../../shapes';
import { Group, Path, Rect } from '../../shapes';
import { PrefixObject } from '../../types';
import { deepAssign, parseSeriesAttr, select, subStyleProps } from '../../util';
import { Indicator } from '../indicator';
import type { SelectStyleProps } from '../select';
import { Select } from '../select';

type IconBaseStyleProps = GroupStyleProps &
  PrefixObject<RectStyleProps, 'background'> & {
    x?: number;
    y?: number;
    size?: number;
    color?: string;
    onClick?: (e: IconBase) => void;
  };
type IconBaseOptions = ComponentOptions<IconBaseStyleProps>;
export abstract class IconBase<T extends Record<string, any> = {}> extends Component<T & IconBaseStyleProps> {
  public static tag = 'IconBase';

  static defaultOptions: IconBaseOptions = {
    style: {
      x: 0,
      y: 0,
      size: 10,
      color: '#565758',
      backgroundRadius: 4,
      backgroundFill: '#e2e2e2',
    },
  };

  private static backgroundOpacities = {
    default: 0,
    hover: 0.8,
    active: 1,
  };

  /** hover 时是否显示背景 */
  protected showBackground = true;

  protected get label() {
    return 'BaseIcon';
  }

  protected indicator!: Indicator;

  protected background = this.appendChild(new Rect({}));

  protected icon = this.appendChild(new Group({}));

  get lineWidth() {
    return Math.log10(this.attributes.size);
  }

  protected get padding() {
    return parseSeriesAttr(this.attributes.size / 5);
  }

  protected get iconSize() {
    const { size } = this.attributes;
    const [top, right, bottom, left] = this.padding;
    return Math.max(size - Math.max(left + right, top + bottom), this.lineWidth * 2 + 1);
  }

  protected renderBackground() {
    const { x, y, size } = this.attributes;
    const halfSize = size / 2;
    const backgroundStyle = subStyleProps(this.attributes, 'background');
    this.background.attr({ x: x - halfSize, y: y - halfSize, width: size, height: size, ...backgroundStyle });
  }

  protected showIndicator() {
    if (!this.label) return;
    const { size } = this.attributes;
    const { x, y } = this.background.getBBox();
    this.indicator.update({ x: x + size / 2, y: y - 5, labelText: this.label, visibility: 'visible' });
  }

  protected hideIndicator() {
    this.indicator.update({ visibility: 'hidden' });
  }

  constructor(options: IconBaseOptions) {
    super(
      deepAssign(
        {},
        { style: { backgroundOpacity: IconBase.backgroundOpacities.default } },
        IconBase.defaultOptions,
        options
      )
    );
  }

  connectedCallback(): void {
    super.connectedCallback();
    // indicator 脱离文档流，需要手动添加到 canvas
    const { size } = this.attributes;
    const { x, y } = this.background.getBBox();
    const canvas = this.ownerDocument?.defaultView;

    if (canvas) {
      this.indicator = (canvas as unknown as Canvas).appendChild(
        new Indicator({
          style: {
            x: x + size / 2,
            y: y - size / 2,
            visibility: 'hidden',
            position: 'top',
            radius: 3,
            zIndex: 100,
          },
        })
      );
    }
  }

  disconnectedCallback() {
    this.indicator.destroy();
  }

  render() {
    this.renderIcon();
    if (this.showBackground) this.renderBackground();
  }

  abstract renderIcon(): void;

  public bindEvents(): void {
    const { onClick } = this.attributes;
    this.addEventListener('click', () => {
      onClick?.(this);
    });

    if (this.showBackground) {
      const resetBackground = () => this.background.attr({ opacity: IconBase.backgroundOpacities.default });
      const hoverBackground = () => this.background.attr({ opacity: IconBase.backgroundOpacities.hover });
      const activeBackground = () => this.background.attr({ opacity: IconBase.backgroundOpacities.active });

      this.addEventListener('pointerenter', () => {
        hoverBackground();
        this.showIndicator();
      });
      this.addEventListener('pointerleave', () => {
        resetBackground();
        this.hideIndicator();
      });
      this.addEventListener('pointerdown', () => {
        activeBackground();
      });
      this.addEventListener('pointerup', () => {
        resetBackground();
      });
    }
  }
}

const arrow = (size: number, color: string = '#565758') => {
  return new Path({
    style: {
      fill: color,
      d: `M ${size},${size} L -${size},0 L ${size},-${size} Z`,
      transformOrigin: 'center',
    },
  });
};

/** 重置 */
export class Reset extends IconBase {
  private arcPath(cx: number, cy: number, radius: number) {
    const [rx, ry] = [radius, radius];
    const getPosByAngle = (angle: number) => [cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)];
    const [x1, y1] = getPosByAngle((-5 / 4) * Math.PI);
    const [x2, y2] = getPosByAngle((1 / 4) * Math.PI);
    return `M${x1},${y1},A${rx},${ry},0,1,1,${x2},${y2}`;
  }

  protected get label() {
    return '重置';
  }

  renderIcon() {
    const { x, y, color } = this.attributes;
    const size = this.iconSize;
    const { lineWidth } = this;
    const arrowSize = lineWidth + 0.5;

    select(this.icon)
      .maybeAppend('.reset', 'path')
      .styles({
        stroke: color,
        lineWidth,
        d: this.arcPath(x, y, size / 2 - lineWidth),
        markerStart: arrow(arrowSize, color),
      });
  }
}

/** 快退 */
export class Backward extends IconBase {
  protected get label() {
    return '快退';
  }

  renderIcon() {
    const { x, y, color } = this.attributes;
    const size = this.iconSize;
    const deltaX = size / 2;
    const deltaY = size / 2 / 3 ** 0.5;
    const points: PolygonStyleProps['points'] = [
      [x, y],
      [x, y - deltaY],
      [x - deltaX, y],
      [x, y + deltaY],
      [x, y],
      [x + deltaX, y - deltaY],
      [x + deltaX, y + deltaY],
      [x, y],
    ];
    select(this.icon).maybeAppend('.backward', 'polygon').styles({
      points,
      fill: color,
    });
  }
}

/** 快进 */
export class Forward extends IconBase {
  protected get label() {
    return '快进';
  }

  renderIcon() {
    const { x, y, color } = this.attributes;
    const size = this.iconSize;
    const deltaX = size / 2;
    const deltaY = size / 2 / 3 ** 0.5;
    const points: PolygonStyleProps['points'] = [
      [x, y],
      [x, y - deltaY],
      [x + deltaX, y],
      [x, y + deltaY],
      [x, y],
      [x - deltaX, y - deltaY],
      [x - deltaX, y + deltaY],
      [x, y],
    ];
    select(this.icon).maybeAppend('.forward', 'polygon').styles({
      points,
      fill: color,
    });
  }
}

export class Play extends IconBase {
  protected get label() {
    return '播放';
  }

  renderIcon() {
    const { x, y, color } = this.attributes;
    const size = this.iconSize;
    const deltaX = (size / 3) * 3 ** 0.5 * 0.8;
    const points: PolygonStyleProps['points'] = [
      [x + deltaX, y],
      [x - deltaX / 2, y - (size / 2) * 0.8],
      [x - deltaX / 2, y + (size / 2) * 0.8],
      [x + deltaX, y],
    ];
    select(this.icon).maybeAppend('.play', 'polygon').styles({
      points,
      fill: color,
    });
  }
}

export class Pause extends IconBase {
  protected get label() {
    return '暂停';
  }

  renderIcon() {
    const { x, y, color } = this.attributes;
    const size = this.iconSize;
    const deltaX = size / 3;
    const points: PolygonStyleProps['points'] = [
      [x - deltaX, y - size / 2],
      [x - deltaX, y + size / 2],
      [x - deltaX / 2, y + size / 2],
      [x - deltaX / 2, y - size / 2],
      [x - deltaX, y - size / 2],
      [x + deltaX / 2, y - size / 2],
      [x + deltaX / 2, y + size / 2],
      [x + deltaX, y + size / 2],
      [x + deltaX, y - size / 2],
    ];
    select(this.icon).maybeAppend('.pause', 'polygon').styles({
      points,
      fill: color,
    });
  }
}

/** 时间范围 */
export class Range extends IconBase {
  protected get label() {
    return '范围时间';
  }

  renderIcon() {
    const { x, y, color } = this.attributes;
    const { iconSize: size, lineWidth } = this;
    const gap = lineWidth;

    select(this.icon)
      .maybeAppend('.left-line', 'line')
      .styles({
        x1: x - size / 2,
        y1: y - size / 2,
        x2: x - size / 2,
        y2: y + size / 2,
        stroke: color,
        lineWidth,
      });

    select(this.icon)
      .maybeAppend('.right-line', 'line')
      .styles({
        x1: x + size / 2,
        y1: y - size / 2,
        x2: x + size / 2,
        y2: y + size / 2,
        stroke: color,
        lineWidth,
      });

    select(this.icon)
      .maybeAppend('.left-arrow', 'line')
      .styles({
        x1: x,
        y1: y,
        x2: x - size / 2 + gap * 2,
        y2: y,
        stroke: color,
        lineWidth,
        markerEnd: arrow(lineWidth * 2, color),
      });

    select(this.icon)
      .maybeAppend('.right-arrow', 'line')
      .styles({
        x1: x,
        y1: y,
        x2: x + size / 2 - gap * 2,
        y2: y,
        stroke: color,
        lineWidth,
        markerEnd: arrow(lineWidth * 2, color),
      });
  }
}

/** 值范围 */
export class Value extends IconBase {
  protected get label() {
    return '单一时间';
  }

  renderIcon() {
    const { x, y, color } = this.attributes;
    const { iconSize: size, lineWidth } = this;

    select(this.icon)
      .maybeAppend('.line', 'line')
      .styles({
        x1: x,
        y1: y - size / 2,
        x2: x,
        y2: y + size / 2,
        stroke: color,
        lineWidth,
      });

    const gap = lineWidth;

    select(this.icon)
      .maybeAppend('.left-arrow', 'line')
      .styles({
        x1: x - size / 2 - gap * 2,
        y1: y,
        x2: x - gap * 2,
        y2: y,
        stroke: color,
        lineWidth,
        markerEnd: arrow(lineWidth * 2, color),
      });

    select(this.icon)
      .maybeAppend('.right-arrow', 'line')
      .styles({
        x1: x + size / 2 + gap * 2,
        y1: y,
        x2: x + gap * 2,
        y2: y,
        stroke: color,
        lineWidth,
        markerEnd: arrow(lineWidth * 2, color),
      });
  }
}

const getCoordinatePoints = (size: number) => {
  return [
    [-size / 2, -size / 2],
    [-size / 2, size / 2],
    [size / 2, size / 2],
  ];
};

export class LineChart extends IconBase {
  protected get label() {
    return '折线图';
  }

  renderIcon() {
    const { x, y, color } = this.attributes;
    const { iconSize: size, lineWidth } = this;

    const gap = lineWidth;
    const deltaX = (size - gap * 2 - lineWidth) / 4;
    const deltaY = (size - gap * 2 - lineWidth) / 2;
    const [ox, oy] = [x - size / 2 + gap, y + size / 2 - gap * 2];

    select(this.icon)
      .maybeAppend('.coordinate', 'polyline')
      .styles({
        points: getCoordinatePoints(size).map(([px, py]) => [px + x, py + y]),
        stroke: color,
        lineWidth,
      });

    select(this.icon)
      .maybeAppend('.line', 'polyline')
      .styles({
        points: [
          [ox, oy],
          [ox + deltaX, oy - deltaY],
          [ox + deltaX * 2, oy],
          [ox + deltaX * 4, oy - deltaY * 2],
        ],
        stroke: color,
        lineWidth,
      });
  }
}

export class BarChart extends IconBase {
  protected get label() {
    return '条形图';
  }

  get data() {
    return [1, 4, 2, 4, 3];
  }

  renderIcon() {
    const { data } = this;
    const { x, y, color } = this.attributes;
    const { iconSize: size, lineWidth } = this;

    const gap = lineWidth;
    const deltaX = (size - gap) / data.length;
    const deltaY = (size - gap * 2) / 4;
    const [ox, oy] = [x - size / 2 + gap * 2, y + size / 2 - gap];

    select(this.icon)
      .maybeAppend('.coordinate', 'polyline')
      .styles({
        points: getCoordinatePoints(size).map(([px, py]) => [px + x, py + y]),
        stroke: color,
        lineWidth,
      });

    select(this.icon)
      .maybeAppend('.bars', 'g')
      .selectAll('.column')
      .data(this.data.map((value, index) => ({ value, index })))
      .join((enter) =>
        enter
          .append('line')
          .attr('className', 'column')
          .style('x1', ({ index }: any) => ox + deltaX * index)
          .style('y1', oy)
          .style('x2', ({ index }: any) => ox + deltaX * index)
          .style('y2', ({ value }: any) => oy - deltaY * value)
          .styles({
            y1: oy,
            stroke: color,
            lineWidth,
          })
      );
  }
}

/** 分割线 */
export class Split extends IconBase {
  protected showBackground = false;

  constructor(options: IconBaseOptions) {
    super(deepAssign({}, { style: { color: '#d8d9d9' } }, options));
  }

  renderIcon() {
    const { x, y, color } = this.attributes;
    const { iconSize: size, lineWidth } = this;
    select(this.icon)
      .maybeAppend('.split', 'line')
      .styles({
        x1: x,
        y1: y - size / 2,
        x2: x,
        y2: y + size / 2,
        stroke: color,
        lineWidth,
      });
  }
}

export class SpeedSelect extends IconBase<{ speed?: number; onSelect: SelectStyleProps['onSelect'] }> {
  public static tag = 'SpeedSelect';

  protected showBackground = false;

  protected get padding() {
    return parseSeriesAttr(0);
  }

  renderIcon() {
    const { iconSize } = this;
    const { x, y, speed = 1 } = this.attributes;
    const inheritStyle = omit(this.attributes as any, [
      'x',
      'y',
      'transform',
      'transformOrigin',
      'width',
      'height',
      'size',
      'color',
      'speed',
    ]);
    const width = clamp(iconSize, 20, Infinity);
    const height = 20;
    const style: SelectStyleProps = {
      ...inheritStyle,
      x: x - width / 2,
      y: y - height / 2,
      width,
      height,
      defaultValue: speed,
      bordered: false,
      showDropdownIcon: false,
      selectRadius: 2,
      dropdownPadding: this.padding,
      dropdownRadius: 2,
      dropdownSpacing: iconSize / 5,
      placeholderFontSize: iconSize / 2,
      optionPadding: 0,
      optionLabelFontSize: iconSize / 2,
      optionBackgroundRadius: 1,
      options: [
        { label: '1x', value: 1 },
        { label: '1.5x', value: 1.5 },
        { label: '2x', value: 2 },
      ],
    };

    select(this.icon)
      .maybeAppend('.speed', () => new Select({ style }))
      .attr('className', 'speed')
      .each(function () {
        this.update(style);
      });
  }
}

type ToggleIconStyleProps<T extends string> = IconBaseStyleProps & {
  type: T;
  onChange?: (type: T) => void;
};
type ToggleIconOptions<T extends string> = ComponentOptions<ToggleIconStyleProps<T>>;
export abstract class ToggleIcon<T extends string> extends Component<ToggleIconStyleProps<T>> {
  abstract toggles: Array<
    [T, typeof Play | typeof Pause | typeof Range | typeof Value | typeof LineChart | typeof BarChart]
  >;

  public static tag = 'ToggleIcon';

  private icon = this.appendChild(new Group({}));

  private currentType: T;

  public getType() {
    return this.currentType;
  }

  constructor(options: ToggleIconOptions<T>) {
    super(options);
    this.currentType = this.attributes.type;
  }

  render() {
    const { onChange, ...restStyles } = this.attributes;
    select(this.icon)
      .selectAll('.icon')
      .data([this.currentType])
      .join(
        (enter) =>
          enter
            .append((type) => {
              const Ctor = this.toggles.find(([key]) => key === type)?.[1];
              if (!Ctor) throw new Error(`Invalid type: ${type}`);
              return new Ctor({});
            })
            .attr('className', 'icon')
            .styles(restStyles, false)
            .update({}),
        (update) => update.styles({ restStyles }).update({}),
        (exit) => exit.remove()
      );
  }

  bindEvents() {
    const { onChange } = this.attributes;
    this.addEventListener('click', (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      const nextIndex = (this.toggles.findIndex(([key]) => key === this.currentType) + 1) % this.toggles.length;
      const nextType = this.toggles[nextIndex][0];
      onChange?.(this.currentType);
      this.currentType = nextType;
      this.render();
    });
  }
}

export class PlayPause extends ToggleIcon<'play' | 'pause'> {
  toggles: ['play' | 'pause', typeof Play | typeof Pause][] = [
    ['play', Play],
    ['pause', Pause],
  ];

  constructor(options: ToggleIconOptions<'play' | 'pause'>) {
    super(deepAssign({}, { style: { type: 'play' } }, options));
  }
}

export class SelectionType extends ToggleIcon<'range' | 'value'> {
  toggles: ['range' | 'value', typeof Range | typeof Value][] = [
    ['range', Range],
    ['value', Value],
  ];

  constructor(options: ToggleIconOptions<'range' | 'value'>) {
    super(deepAssign({}, { style: { type: 'range' } }, options));
  }
}

export class ChartType extends ToggleIcon<'line' | 'column'> {
  toggles: ['line' | 'column', typeof LineChart | typeof BarChart][] = [
    ['line', LineChart],
    ['column', BarChart],
  ];

  constructor(options: ToggleIconOptions<'line' | 'column'>) {
    super(deepAssign({}, { style: { type: 'column' } }, options));
  }
}
