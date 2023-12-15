import { CustomElement, Group } from '@antv/g';
import { Chart } from '@antv/g2';
import { mergeWithArrayCoverage } from '../utils';
import type { DisplayObjectConfig } from '@antv/g';
import type { GenericAnimation, AnimationResult } from './type';

export abstract class Annotaion<T extends Record<string, any>> extends CustomElement<T> {
  public chart: Chart;

  constructor(chart: Chart, config: DisplayObjectConfig<T>, defaultOptions: DisplayObjectConfig<T>) {
    super({ style: mergeWithArrayCoverage(defaultOptions, config) });
    this.chart = chart;
  }

  connectedCallback() {
    this.render(this.attributes as Required<T>, this);
    this.bindEvents(this.attributes, this);
  }

  disconnectedCallback(): void {}

  attributeChangedCallback<Key extends keyof T>(name: Key): void {}

  public getElementsLayout() {
    const { canvas } = this.chart.getContext();
    const elements = canvas.document.getElementsByClassName('element');
    const elementsLayout = [];
    elements.forEach((element) => {
      // @ts-ignore
      const bbox = element.getBBox();
      const { x, y, width, height } = bbox;
      elementsLayout.push({
        bbox,
        x,
        y,
        width,
        height,
        key: element['__data__'].key,
        data: element['__data__'],
      });
    });
    return elementsLayout;
  }

  public update(attr?: Partial<T>, animate?: GenericAnimation) {
    this.attr(mergeWithArrayCoverage({}, this.attributes, attr || {}));
    return this.render?.(this.attributes as Required<T>, this, animate);
  }

  public clear() {
    this.removeChildren();
  }

  public abstract render(
    attributes: Required<T>,
    container: Group,
    animate?: GenericAnimation,
  ): void | AnimationResult[];

  public bindEvents(attributes: T, container: Group): void {}
}
