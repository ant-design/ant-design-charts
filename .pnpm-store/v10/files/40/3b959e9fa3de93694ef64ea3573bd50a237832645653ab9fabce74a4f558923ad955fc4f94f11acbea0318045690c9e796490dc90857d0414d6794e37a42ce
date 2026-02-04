import type { Canvas } from '@antv/g';
import { Component } from '../../core';
import { DisplayObject, Group, Rect } from '../../shapes';
import { deepAssign, parseSeriesAttr, subStyleProps } from '../../util';
import { Backward, ChartType, Forward, PlayPause, Reset, SelectionType, SpeedSelect, Split } from './icons';
import type { ControllerOptions, ControllerStyleProps, Functions } from './types';

const componentsMap: Record<Functions | 'split', { new (...args: any): DisplayObject }> = {
  reset: Reset,
  speed: SpeedSelect,
  backward: Backward,
  playPause: PlayPause,
  forward: Forward,
  selectionType: SelectionType,
  chartType: ChartType,
  split: Split,
} as const;

export class Controller extends Component<ControllerStyleProps> {
  static defaultOptions: ControllerOptions = {
    style: {
      x: 0,
      y: 0,
      width: 300,
      height: 40,
      padding: 0,
      align: 'center',
      iconSize: 25,
      iconSpacing: 0,
      speed: 1,
      state: 'pause',
      chartType: 'line',
      selectionType: 'range',
      backgroundFill: '#fbfdff',
      backgroundStroke: '#ebedf0',
      functions: [
        ['reset', 'speed'],
        ['backward', 'playPause', 'forward'],
        ['selectionType', 'chartType'],
      ],
    },
  };

  private background = this.appendChild(new Rect({}));

  private functions = this.appendChild(new Group({}));

  private speedSelect!: SpeedSelect;

  private get padding() {
    return parseSeriesAttr(this.attributes.padding);
  }

  private renderBackground() {
    const { x, y, width, height } = this.style;
    const backgroundStyle = subStyleProps(this.attributes, 'background');
    this.background.attr({ x, y, width, height, ...backgroundStyle });
  }

  private renderFunctions() {
    const { functions, iconSize, iconSpacing, x, y, width, height, align } = this.attributes;

    const {
      padding: [, right, , left],
    } = this;

    const components = functions.reduce((prev, curr) => {
      if (prev.length && curr.length) {
        return prev.concat('split', ...curr);
      }
      return prev.concat(...curr);
    }, [] as (keyof typeof componentsMap)[]);

    const componentsWidth = components.length * (iconSize + iconSpacing) - iconSpacing;
    const xOffset =
      {
        left: left + iconSize / 2,
        center: (width - componentsWidth) / 2 + iconSize / 2,
        right: width - componentsWidth - left - right + iconSize / 2,
      }[align] || 0;

    this.speedSelect?.destroy();
    this.functions.removeChildren();
    components.forEach((name, index) => {
      const Ctor = componentsMap[name];
      const style: Record<string, any> = {
        x: x + index * (iconSize + iconSpacing) + xOffset,
        y: y + height / 2,
        size: iconSize,
      };

      if (Ctor === SpeedSelect) {
        style.speed = this.attributes.speed;
        style.onSelect = (value: any) => this.handleFunctionChange(name, { value });
      } else if (([PlayPause, SelectionType, ChartType] as any).includes(Ctor)) {
        style.onChange = (value: any) => this.handleFunctionChange(name, { value });
        if (Ctor === PlayPause) style.type = this.attributes.state === 'play' ? 'pause' : 'play';
        if (Ctor === SelectionType) style.type = this.attributes.selectionType === 'range' ? 'value' : 'range';
        if (Ctor === ChartType) style.type = this.attributes.chartType === 'line' ? 'column' : 'line';
      } else {
        // IconBase
        style.onClick = () => this.handleFunctionChange(name, { value: name });
      }

      if (Ctor === SpeedSelect) {
        // SpeedSelect 直接插入到 canvas
        const canvas = this.ownerDocument?.defaultView;
        if (canvas) {
          this.speedSelect = new Ctor({ style: { ...style, zIndex: 100 } }) as SpeedSelect;
          (canvas as unknown as Canvas).appendChild(this.speedSelect);
        }
      } else {
        this.functions.appendChild(new Ctor({ style }));
      }
    });
  }

  constructor(options: ControllerOptions) {
    super(deepAssign({}, Controller.defaultOptions, options));
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.speedSelect?.destroy();
  }

  render() {
    this.renderBackground();
    this.renderFunctions();
  }

  handleFunctionChange(name: string, value: any) {
    const { onChange } = this.attributes;
    onChange?.(name as Functions, value);
  }
}
