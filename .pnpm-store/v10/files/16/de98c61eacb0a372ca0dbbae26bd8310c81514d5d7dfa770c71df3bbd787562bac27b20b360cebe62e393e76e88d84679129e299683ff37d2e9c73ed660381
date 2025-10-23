import type { FederatedEvent, INode } from '@antv/g';
import { ElementEvent } from '@antv/g';
import type { DisplayObject } from '../../shapes';
import { Group } from '../../shapes';
import { BBox } from '../../util';
import { calcLayout } from '../../util/layout';
import type { SeriesAttr, StandardSeriesAttr } from '../../util/series';
import { parseSeriesAttr } from '../../util/series';
import type { LayoutOptions, LayoutStyleProps } from './types';

export type { LayoutOptions, LayoutStyleProps };

export class Layout extends Group {
  private layoutEvents: ElementEvent[] = [ElementEvent.BOUNDS_CHANGED, ElementEvent.INSERTED, ElementEvent.REMOVED];

  private $margin: StandardSeriesAttr = parseSeriesAttr(0);

  private $padding: StandardSeriesAttr = parseSeriesAttr(0);

  public set margin(value: SeriesAttr) {
    this.$margin = parseSeriesAttr(value);
  }

  public get margin() {
    return this.$margin;
  }

  public set padding(value: SeriesAttr) {
    this.$padding = parseSeriesAttr(value);
  }

  public get padding() {
    return this.$padding;
  }

  public getBBox() {
    const { x = 0, y = 0, width, height } = this.attributes;
    const [marginTop, marginRight, marginBottom, marginLeft] = this.$margin;
    return new BBox(x - marginLeft, y - marginTop, width + marginLeft + marginRight, height + marginTop + marginBottom);
  }

  public appendChild<T extends INode>(child: T, index?: number): T {
    (child as unknown as DisplayObject).isMutationObserved = true;
    super.appendChild(child, index);
    return child;
  }

  public getAvailableSpace() {
    const { width, height } = this.attributes;
    const [paddingTop, paddingRight, paddingBottom, paddingLeft] = this.$padding;
    const [marginTop, , , marginLeft] = this.$margin;
    return new BBox(
      paddingLeft + marginLeft,
      paddingTop + marginTop,
      width - paddingLeft - paddingRight,
      height - paddingTop - paddingBottom
    );
  }

  constructor(options: LayoutOptions) {
    super(options);
    const { margin = 0, padding = 0 } = options.style || {};
    this.margin = margin;
    this.padding = padding;

    this.isMutationObserved = true;
    this.bindEvents();
  }

  layout() {
    if (!this.attributes.display || !this.isConnected) return;
    if (this.children.some((child) => !child.isConnected)) return;
    try {
      const { x, y } = this.attributes;
      this.style.transform = `translate(${x}, ${y})`;

      const bboxes = calcLayout(
        this.getAvailableSpace(),
        this.children.map((child) => (child as DisplayObject).getBBox()),
        this.attributes
      );

      this.children.forEach((child, index) => {
        const { x, y } = bboxes[index];
        child.style.transform = `translate(${x}, ${y})`;
      });
    } catch (e) {
      // do nothing
    }
  }

  bindEvents() {
    this.layoutEvents.forEach((event) => {
      this.addEventListener(event, (e: FederatedEvent) => {
        if (!e.target) return;
        (e.target as DisplayObject).isMutationObserved = true;
        this.layout();
      });
    });
  }

  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    if (name === 'margin') this.margin = newValue;
    else if (name === 'padding') this.padding = newValue;
    this.layout();
  }
}
