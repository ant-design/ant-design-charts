// @ts-expect-error
import { Text, Polygon, canvas as GCanvas } from '@antv/g';
import { Chart } from '@antv/g2';
import { get, isFunction } from '../utils';

type ShapeAttrs = Record<string, any>;

export type ConversionTagOptions = {
  /** tag 高度 */
  size?: number;
  /** tag 箭头大小 */
  arrowSize?: number;
  /** tag 对柱子间距 */
  spacing?: number;
  /** 文本配置 */
  text?: {
    /** 文字样式 */
    style?: ShapeAttrs;
    /** 文本格式化 */
    formatter?: (prev: number, next: number) => string;
  };
  /** tag 样式 */
  style?: ShapeAttrs;
};

export class ConversionTag {
  /** canvas 实例 */
  public canvas: GCanvas;
  public chart: Chart;
  public options: ConversionTagOptions;
  public direction: 'vertical' | 'horizontal';
  public container: Array<Text | Polygon> = [];

  constructor(chart: Chart, options: ConversionTagOptions) {
    if (!options) return;
    this.chart = chart;
    this.options = options;
    this.init();
  }
  public getElementsLayout() {
    const elements = this.canvas.document.getElementsByClassName('element');
    const elementsLayout = [];
    elements.forEach((element) => {
      const bbox = element.getBBox();
      const { x, y, width, height } = bbox;
      elementsLayout.push({
        bbox,
        x,
        y,
        width,
        height,
        data: element['__data__'],
      });
    });
    return elementsLayout;
  }
  public getConversionTagLayout() {
    const isVertical = this.direction === 'vertical';
    const elementsLayout = this.getElementsLayout();
    const { x: firstX, y: firstY, height: firstHeigt, width: firstWidth, data: firstData } = elementsLayout[0];
    const valuePath = ['items', 0, 'value'];
    let preValue = get(firstData, valuePath);
    const elementDistance = isVertical
      ? elementsLayout[1].y - firstY - firstHeigt
      : elementsLayout[1].x - firstX - firstWidth;
    const tagLayout = [];
    const { size = 40, arrowSize = 20, spacing = 4 } = this.options;
    elementsLayout.forEach((element, index) => {
      if (index > 0) {
        const { x, y, height, width, data } = element;
        const currentValue = get(data, valuePath);

        const halfSize = size / 2;
        if (isVertical) {
          const arrowVertexX = x + width / 2;
          const arrowVertexY = y;
          tagLayout.push({
            points: [
              [arrowVertexX + halfSize, arrowVertexY - elementDistance + spacing],
              [arrowVertexX + halfSize, arrowVertexY - arrowSize - spacing],
              [arrowVertexX, arrowVertexY - spacing],
              [arrowVertexX - halfSize, arrowVertexY - arrowSize - spacing],
              [arrowVertexX - halfSize, arrowVertexY - elementDistance + spacing],
            ],
            center: [arrowVertexX, arrowVertexY - elementDistance / 2 - spacing],
            width: elementDistance,
            value: [preValue, currentValue],
          });
        } else {
          const arrowVertexX = x;
          const arrowVertexY = y + height / 2;
          tagLayout.push({
            points: [
              [x - elementDistance + spacing, arrowVertexY - halfSize],
              [x - arrowSize - spacing, arrowVertexY - halfSize],
              [arrowVertexX - spacing, arrowVertexY],
              [x - arrowSize - spacing, arrowVertexY + halfSize],
              [x - elementDistance + spacing, arrowVertexY + halfSize],
            ],
            center: [arrowVertexX - elementDistance / 2 - spacing, arrowVertexY],
            width: elementDistance,
            value: [preValue, currentValue],
          });
        }

        preValue = currentValue;
      }
    });
    return tagLayout;
  }
  public init() {
    const { canvas } = this.chart.getContext();
    this.canvas = canvas;
    this.setDirection();
    this.drawConversionTag();
  }
  /** 根据 coordinate 确定方向 */
  public setDirection() {
    const coordinate = this.chart.getCoordinate();
    const transformations = get(coordinate, 'options.transformations');
    let direction = 'horizontal';
    transformations.forEach((transformation) => {
      if (transformation.includes('transpose')) {
        direction = 'vertical';
      }
    });
    this.direction = direction as 'vertical' | 'horizontal';
  }

  public drawConversionTag() {
    const conversionLayout = this.getConversionTagLayout();
    const {
      style,
      text: { style: textStyle, formatter },
    } = this.options;
    conversionLayout.forEach((layout) => {
      const { points, center, value } = layout;
      const [prev, next] = value;
      const [x, y] = center;
      const polygon = new Polygon({
        style: {
          points,
          fill: '#eee',
          ...style,
        },
      });
      const text = new Text({
        style: {
          x,
          y,
          text: isFunction(formatter) ? formatter(prev, next) : ((next / prev) * 100).toFixed(2) + '%',
          fontSize: 12,
          textBaseline: 'middle',
          textAlign: 'center',
          fill: '#000',
          ...textStyle,
        },
      });
      this.canvas.appendChild(polygon);
      this.canvas.appendChild(text);
      this.container.push(polygon, text);
    });
  }
  public update(options: ConversionTagOptions) {}
  public destroy() {
    this.container.forEach((child) => {
      child.destroy();
    });
  }
}
