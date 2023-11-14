// @ts-expect-error
import { Text, Polygon, canvas as GCanvas } from '@antv/g';
// @ts-expect-error
import { Chart, AxisComponent, G2ViewDescriptor } from '@antv/g2';
import { get, isFunction, uniqBy } from '../utils';
import { VERTICAL_MARGIN } from '../plots/bidirectional-bar/constants';

export type BidirectionalBarAxisTextOptions = AxisComponent;

export class BidirectionalBarAxisText {
  /** canvas 实例 */
  public canvas: GCanvas;
  public views: G2ViewDescriptor[];
  public chart: Chart;
  public options: BidirectionalBarAxisTextOptions;
  public container: Array<Text | Polygon> = [];

  constructor(chart: Chart, options: BidirectionalBarAxisTextOptions) {
    if (!options) return;
    this.chart = chart;
    this.options = options;
    this.init();
  }
  public getElementsLayout() {
    const { layout } = this.options;
    const isVertical = layout === 'vertical';
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
    return isVertical ? uniqBy(elementsLayout, 'x') : uniqBy(elementsLayout, 'y');
  }
  public getBidirectionalBarAxisTextLayout() {
    const { layout } = this.options;
    const isVertical = layout === 'vertical';
    const elementsLayout = this.getElementsLayout();
    const textPath = ['title'];
    const textLayout = [];
    const { width: viewWidth, height: viewHeight } = get(this.views, [0, 'layout']);
    elementsLayout.forEach((element) => {
      const { x, y, height, width, data } = element;
      const text = get(data, textPath);
      if (isVertical) {
        textLayout.push({
          x: x + width / 2,
          y: viewHeight,
          text,
        });
      } else {
        textLayout.push({
          x: viewWidth,
          y: y + height / 2,
          text,
        });
      }
    });

    return textLayout;
  }
  public init() {
    const { canvas, views } = this.chart.getContext();
    this.views = views;
    this.canvas = canvas;
    this.drawBidirectionalBarAxisText();
  }
  public transformLabelStyle(style) {
    const removeLabel = {};
    Object.keys(style).forEach((key) => {
      if (key.startsWith('label')) {
        removeLabel[key.replace('label', '').replace(/^[A-Z]/, (match) => match.toLowerCase())] = style[key];
      }
    });

    return removeLabel;
  }

  public drawBidirectionalBarAxisText() {
    const axisLayout = this.getBidirectionalBarAxisTextLayout();
    const {
      x: { labelFormatter, ...textStyle },
      layout: viewLayout,
    } = this.options;

    axisLayout.forEach((layout) => {
      const { x, y, text } = layout;
      const textNode = new Text({
        style: {
          x,
          y,
          text: isFunction(labelFormatter) ? labelFormatter(text) : text,
          fontSize: 12,
          textBaseline: 'middle',
          textAlign: 'center',
          fill: '#000',
          wordWrap: true,
          wordWrapWidth: viewLayout === 'horizontal' ? VERTICAL_MARGIN * 2 : 120,
          maxLines: 2,
          textOverflow: 'ellipsis',
          ...this.transformLabelStyle(textStyle),
        },
      });
      this.canvas.appendChild(textNode);
      this.container.push(textNode);
    });
  }
  public update(options: BidirectionalBarAxisTextOptions) {}
  public destroy() {
    this.container.forEach((child) => {
      child.destroy();
    });
  }
}
