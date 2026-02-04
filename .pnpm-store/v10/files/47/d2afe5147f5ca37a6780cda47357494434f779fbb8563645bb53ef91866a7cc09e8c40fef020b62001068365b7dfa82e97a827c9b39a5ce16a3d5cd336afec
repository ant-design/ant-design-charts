import {
  BaseStyleProps,
  Circle,
  DisplayObject,
  Group,
  GroupStyleProps,
  PathStyleProps,
  RectStyleProps,
  TextStyleProps,
} from '@antv/g';
import { isUndefined } from '@antv/util';
import { Marker } from '../../marker';
import type { ComponentOptions } from '../../../core';
import { Component } from '../../../core';
import { ExtendDisplayObject, PrefixObject } from '../../../types';
import {
  Selection,
  SeriesAttr,
  classNames,
  copyAttributes,
  ellipsisIt,
  ifShow,
  parseSeriesAttr,
  renderExtDo,
  scaleToPixel,
  select,
  subStyleProps,
  deepAssign,
} from '../../../util';
import { Poptip } from '../../poptip';
import type { PoptipStyleProps } from '../../poptip/types';
import type { PoptipRender } from './items';
import { getLegendClassName } from '../utils/classname';
import { CLASSNAME_SUFFIX_MAP } from '../constant';

type ItemMarkerStyle = { size?: number } & PathStyleProps;
type ItemTextStyle = Omit<TextStyleProps, 'text'>;
type ItemBackgroundStyle = Omit<RectStyleProps, 'width' | 'height'>;

export type CategoryItemStyleProps = GroupStyleProps &
  PrefixObject<ItemMarkerStyle, 'marker'> &
  PrefixObject<ItemTextStyle, 'label'> &
  PrefixObject<ItemTextStyle, 'value'> &
  PrefixObject<ItemBackgroundStyle, 'background'> & {
    labelText?: ExtendDisplayObject;
    marker?: string | (() => DisplayObject);
    /** spacing between marker, label and value */
    spacing?: SeriesAttr;
    span?: SeriesAttr;
    valueText?: ExtendDisplayObject;
    // if width and height not specific, set it to actual space occurred
    width?: number;
    x?: number;
    y?: number;
    poptip?: PoptipStyleProps & PoptipRender;
    focus?: boolean;
    focusMarkerSize?: number;
    classNamePrefix?: string;
  };

export type CategoryItemOptions = ComponentOptions<CategoryItemStyleProps>;

const CLASS_NAMES = classNames(
  {
    layout: 'flex',
    markerGroup: 'marker-group',
    marker: 'marker',
    labelGroup: 'label-group',
    label: 'label',
    valueGroup: 'value-group',
    focusGroup: 'focus-group',
    focus: 'focus',
    value: 'value',
    backgroundGroup: 'background-group',
    background: 'background',
  },
  'legend-category-item'
);

const DEFAULT_POPTIP_PROPS: PoptipStyleProps = {
  offset: [0, 20],
  domStyles: {
    '.component-poptip': {
      opacity: '1',
      padding: '8px 12px',
      background: '#fff',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    },
    '.component-poptip-arrow': {
      display: 'none',
    },
    '.component-poptip-text': {
      color: '#000',
      lineHeight: '20px',
    },
  },
};

function styleOfMarker(group: Group): BaseStyleProps {
  const marker = group.querySelector(CLASS_NAMES.marker.class);
  if (marker) return marker.style;
  return {};
}

export class CategoryItem extends Component<CategoryItemStyleProps> {
  // Key fields, used to pass extra info like id, index for poptip rendering
  public keyFields: object = {};

  constructor(options: CategoryItemOptions, keyFields?: Omit<CategoryItemOptions, 'style'>) {
    super(options, {
      span: [1, 1],
      marker: () => new Circle({ style: { r: 6 } }),
      markerSize: 10,
      labelFill: '#646464',
      valueFill: '#646464',
      labelFontSize: 12,
      valueFontSize: 12,
      labelTextBaseline: 'middle',
      valueTextBaseline: 'middle',
    });
    this.keyFields = keyFields || {};
  }

  private poptipGroup!: Poptip;

  private focusGroup!: Selection<Group>;

  private markerGroup!: Selection<Group>;

  private labelGroup!: Selection<Group>;

  private valueGroup!: Selection<Group>;

  private background!: Selection<Group>;

  private get showValue() {
    const { valueText } = this.attributes;
    if (!valueText) return false;
    if (typeof valueText === 'string' || typeof valueText === 'number') return valueText !== '';
    if (typeof valueText === 'function') return true;
    return valueText.attr('text') !== '';
  }

  private get actualSpace() {
    const label = this.labelGroup;
    const value = this.valueGroup;
    const { markerSize, focus, focusMarkerSize } = this.attributes;
    const { width: labelWidth, height: labelHeight } = label.node().getBBox();
    const { width: valueWidth, height: valueHeight } = value.node().getBBox();

    const focusWidth = focus ? focusMarkerSize ?? 12 : 0;

    return {
      markerWidth: markerSize,
      labelWidth,
      valueWidth,
      focusWidth,
      height: Math.max(markerSize, labelHeight, valueHeight),
    };
  }

  private get span() {
    const { span } = this.attributes;
    if (!span) return [1, 1];
    const [span1, innerSpan] = parseSeriesAttr(span!);
    const span2 = this.showValue ? innerSpan : 0;
    const basis = span1 + span2;
    return [span1 / basis, span2 / basis];
  }

  setAttribute(n: any, v: any) {
    super.setAttribute(n, v);
  }

  private get shape() {
    const { markerSize, width: fullWidth } = this.attributes;
    const actualSpace = this.actualSpace;
    const { markerWidth, focusWidth, height } = actualSpace;
    let { labelWidth, valueWidth } = this.actualSpace;
    const [spacing1, spacing2, spacing3] = this.spacing;

    if (fullWidth) {
      const width = fullWidth - markerSize - spacing1 - spacing2 - focusWidth - spacing3;
      const [span1, span2] = this.span;
      [labelWidth, valueWidth] = [span1 * width, span2 * width];
    }

    const width = markerWidth + labelWidth + valueWidth + spacing1 + spacing2 + focusWidth + spacing3;
    return { width, height, markerWidth, labelWidth, valueWidth, focusWidth };
  }

  private get spacing() {
    const { spacing, focus } = this.attributes;
    if (!spacing) return [0, 0, 0];
    const [spacing1, spacing2, spacing3] = parseSeriesAttr(spacing);
    return [spacing1, this.showValue ? spacing2 : 0, focus ? spacing3 : 0];
  }

  private get layout() {
    const { markerWidth, labelWidth, valueWidth, focusWidth, width, height } = this.shape;
    const [spacing1, spacing2, spacing3] = this.spacing;
    return {
      height,
      width,
      markerWidth,
      labelWidth,
      valueWidth,
      focusWidth,
      position: [
        markerWidth / 2,
        markerWidth + spacing1,
        markerWidth + labelWidth + spacing1 + spacing2,
        markerWidth + labelWidth + valueWidth + spacing1 + spacing2 + spacing3 + focusWidth / 2,
      ],
    };
  }

  private get scaleSize() {
    const markerShapeStyle = styleOfMarker(this.markerGroup.node());
    const {
      markerSize,
      markerStrokeWidth = markerShapeStyle.strokeWidth,
      markerLineWidth = markerShapeStyle.lineWidth,
      markerStroke = markerShapeStyle.stroke,
    } = this.attributes;
    // empirical value
    const strokeWidth = +(markerStrokeWidth || markerLineWidth || (markerStroke ? 1 : 0)) * Math.sqrt(2);
    const { width, height } = this.markerGroup.node().getBBox();
    return (1 - strokeWidth / Math.max(width, height)) * markerSize;
  }

  private renderMarker(container: Selection) {
    const { marker, classNamePrefix } = this.attributes;
    const style = subStyleProps(this.attributes, 'marker');
    this.markerGroup = container.maybeAppendByClassName(CLASS_NAMES.markerGroup, 'g').style('zIndex', 0);
    ifShow(!!marker, this.markerGroup, () => {
      const parent = this.markerGroup.node();
      const oldMarker = parent.childNodes?.[0] as DisplayObject | undefined;
      const markerClassName = getLegendClassName(CLASS_NAMES.marker.name, CLASSNAME_SUFFIX_MAP.marker, classNamePrefix);
      const newMarker =
        typeof marker === 'string' ? new Marker({ style: { symbol: marker }, className: markerClassName }) : marker();

      if (!oldMarker) {
        if (!(newMarker instanceof Marker)) {
          const markerClassName = getLegendClassName(
            CLASS_NAMES.marker.name,
            CLASSNAME_SUFFIX_MAP.marker,
            classNamePrefix
          );
          (newMarker as any).className = markerClassName;
          select(newMarker).styles(style);
        }
        parent.appendChild(newMarker);
      } else if (newMarker.nodeName === oldMarker.nodeName) {
        if (oldMarker instanceof Marker) oldMarker.update({ ...style, symbol: marker });
        else {
          copyAttributes(oldMarker, newMarker);
          select(oldMarker).styles(style);
        }
      } else {
        oldMarker.remove();
        if (!(newMarker instanceof Marker)) {
          const markerClassName = getLegendClassName(
            CLASS_NAMES.marker.name,
            CLASSNAME_SUFFIX_MAP.marker,
            classNamePrefix
          );
          (newMarker as any).className = markerClassName;
        }
        select(newMarker).styles(style);
        parent.appendChild(newMarker);
      }

      // record the scale of marker
      this.markerGroup.node().scale(1 / this.markerGroup.node().getScale()[0]);
      const scale = scaleToPixel(this.markerGroup.node(), this.scaleSize, true);
      this.markerGroup.node().style._transform = `scale(${scale})`;
    });
  }

  private renderLabel(container: Selection) {
    const { text: label, ...style } = subStyleProps(this.attributes, 'label');
    const { classNamePrefix } = this.attributes;
    this.labelGroup = container.maybeAppendByClassName<Group>(CLASS_NAMES.labelGroup, 'g').style('zIndex', 0);
    const labelClassName = getLegendClassName(CLASS_NAMES.label.name, CLASSNAME_SUFFIX_MAP.label, classNamePrefix);
    const labelElement = this.labelGroup.maybeAppendByClassName(CLASS_NAMES.label, () => renderExtDo(label));
    labelElement.node().setAttribute('class', labelClassName);
    labelElement.styles(style);
  }

  private renderValue(container: Selection) {
    const { text: value, ...style } = subStyleProps(this.attributes, 'value');
    const { classNamePrefix } = this.attributes;
    this.valueGroup = container.maybeAppendByClassName(CLASS_NAMES.valueGroup, 'g').style('zIndex', 0);
    ifShow(this.showValue, this.valueGroup, () => {
      const valueClassName = getLegendClassName(CLASS_NAMES.value.name, CLASSNAME_SUFFIX_MAP.value, classNamePrefix);
      const valueElement = this.valueGroup.maybeAppendByClassName(CLASS_NAMES.value, () => renderExtDo(value));
      valueElement.node().setAttribute('class', valueClassName);
      valueElement.styles(style);
    });
  }

  private createPoptip() {
    const { poptip } = this.attributes;
    const { render, ...poptipStyle } = poptip || {};
    const poptipGroup = new Poptip({ style: deepAssign(DEFAULT_POPTIP_PROPS, poptipStyle) });
    this.poptipGroup = poptipGroup;
    return poptipGroup;
  }

  private bindPoptip(node: DisplayObject) {
    const { poptip } = this.attributes;
    if (!poptip) return;
    const poptipGroup = this.poptipGroup || this.createPoptip();
    poptipGroup.bind(node, () => {
      const { labelText, valueText, markerFill } = this.attributes;
      const label = typeof labelText === 'string' ? labelText : (labelText as DisplayObject)?.attr('text');
      const value = typeof valueText === 'string' ? valueText : (valueText as DisplayObject)?.attr('text');
      if (typeof poptip.render === 'function') {
        return { html: poptip.render({ ...this.keyFields, label, value, color: markerFill as string }) };
      }
      let html = '';
      if (typeof label === 'string' || typeof label === 'number') {
        html += `<div class="component-poptip-label">${label}</div>`;
      }
      if (typeof value === 'string' || typeof value === 'number') {
        html += `<div class="component-poptip-value">${value}</div>`;
      }
      return { html };
    });
  }

  private renderFocus(ctn: Selection) {
    const { focus, focusMarkerSize, classNamePrefix } = this.attributes;
    const defaultOptions = {
      x: 0,
      y: 0,
      size: focusMarkerSize,
      opacity: 0.6,
      symbol: 'focus',
      stroke: '#aaaaaa',
      lineWidth: 1,
    };

    if (isUndefined(focus)) return;

    this.focusGroup = ctn.maybeAppendByClassName<Group>(CLASS_NAMES.focusGroup, 'g').style('zIndex', 0);
    ifShow(focus, this.focusGroup, () => {
      const focusClassName = getLegendClassName(
        CLASS_NAMES.focus.name,
        CLASSNAME_SUFFIX_MAP.focusIcon,
        classNamePrefix
      );
      const marker = new Marker({
        style: {
          ...defaultOptions,
          symbol: 'focus',
        },
        className: focusClassName,
      });
      const interactiveCircle = new Circle({
        style: {
          r: defaultOptions.size / 2,
          fill: 'transparent',
        },
      });

      const container = this.focusGroup.node();
      container.appendChild(interactiveCircle);
      container.appendChild(marker);
      marker.update({ opacity: 0 });

      ctn.node().addEventListener('pointerenter', () => {
        marker.update({ opacity: 1 });
      });
      ctn.node().addEventListener('pointerleave', () => {
        marker.update({ opacity: 0 });
      });
    });
  }

  private renderPoptip(ctn: Selection) {
    const { poptip } = this.attributes;
    if (!poptip) return;
    const valueNode = ctn.maybeAppendByClassName(CLASS_NAMES.value, 'g').node();
    const labelNode = ctn.maybeAppendByClassName(CLASS_NAMES.label, 'g').node();
    [valueNode, labelNode].forEach((node) => {
      if (node) {
        this.bindPoptip(node);
      }
    });
  }

  private renderBackground(container: Selection) {
    const { width, height } = this.shape;
    const style = subStyleProps(this.attributes, 'background');
    this.background = container.maybeAppendByClassName(CLASS_NAMES.backgroundGroup, 'g').style('zIndex', -1);
    const backgroundElement = this.background.maybeAppendByClassName(CLASS_NAMES.background, 'rect');
    backgroundElement.styles({ width, height, ...style });

    const { classNamePrefix = '' } = this.attributes;
    if (classNamePrefix) {
      const backgroundClassName = getLegendClassName(
        CLASS_NAMES.background.name,
        CLASSNAME_SUFFIX_MAP.background,
        classNamePrefix
      );
      backgroundElement.node().setAttribute('class', backgroundClassName);
    }
  }

  private adjustLayout() {
    const {
      layout: {
        labelWidth,
        valueWidth,
        height,
        position: [markerX, labelX, valueX, focusX],
      },
    } = this;
    const halfHeight = height / 2;

    // console.log(this.markerGroup.node().style._transform);

    this.markerGroup.styles({
      transform: `translate(${markerX}, ${halfHeight})${this.markerGroup.node().style._transform}`,
    });
    this.labelGroup.styles({ transform: `translate(${labelX}, ${halfHeight})` });
    if (this.focusGroup) this.focusGroup.styles({ transform: `translate(${focusX}, ${halfHeight})` });

    ellipsisIt(this.labelGroup.select(CLASS_NAMES.label.class).node(), Math.ceil(labelWidth));
    if (this.showValue) {
      this.valueGroup.styles({ transform: `translate(${valueX}, ${halfHeight})` });
      ellipsisIt(this.valueGroup.select(CLASS_NAMES.value.class).node(), Math.ceil(valueWidth));
    }
  }

  public render(attributes: CategoryItemStyleProps, container: Group) {
    const ctn = select(container);
    const { x = 0, y = 0 } = attributes;
    ctn.styles({ transform: `translate(${x}, ${y})` });
    this.renderMarker(ctn);
    this.renderLabel(ctn);
    this.renderValue(ctn);
    this.renderBackground(ctn);
    this.renderPoptip(ctn);
    this.renderFocus(ctn);
    this.adjustLayout();
  }
}
