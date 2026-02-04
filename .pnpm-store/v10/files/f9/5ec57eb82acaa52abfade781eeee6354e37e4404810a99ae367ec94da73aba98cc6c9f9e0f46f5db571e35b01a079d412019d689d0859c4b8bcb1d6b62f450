import type { ComponentOptions, PrefixStyleProps } from '../../../core';
import { Component } from '../../../core';
import type { GroupStyleProps, TextStyleProps } from '../../../shapes';
import { Group } from '../../../shapes';
import type { PrefixObject } from '../../../types';
import type { Selection } from '../../../util';
import { classNames, ifShow, select, subStyleProps } from '../../../util';
import { Marker, MarkerStyleProps } from '../../marker';
import { ifHorizontal } from '../utils';
import { getLegendClassName } from '../utils/classname';
import { CLASSNAME_SUFFIX_MAP } from '../classname-map';

export type HandleStyleProps<T = any> = GroupStyleProps &
  PrefixObject<TextStyleProps, 'label'> &
  PrefixStyleProps<Omit<MarkerStyleProps, 'x' | 'y'>, 'marker'> & {
    showLabel?: boolean;
    formatter?: (val: T) => string;
    orientation: 'vertical' | 'horizontal';
    /** spacing between marker and label */
    spacing?: number;
    shape?: 'basic' | 'slider';
    classNamePrefix?: string;
  };

export type HandleOptions = ComponentOptions<HandleStyleProps>;

export type HandleType = 'start' | 'end';

const CLASS_NAMES = classNames(
  {
    markerGroup: 'marker-group',
    marker: 'marker',
    labelGroup: 'label-group',
    label: 'label',
  } as const,
  'handle'
);

// todo @xiaoiver, 配置 TEXT_INHERITABLE_PROPS 后文本包围盒依旧不准确
export const DEFAULT_HANDLE_CFG: Partial<HandleStyleProps> = {
  showLabel: true,
  formatter: (val: any) => val.toString(),
  markerSize: 25,
  markerStroke: '#c5c5c5',
  markerFill: '#fff',
  markerLineWidth: 1,
  labelFontSize: 12,
  labelFill: '#c5c5c5',
  labelText: '',
  orientation: 'vertical',
  spacing: 0,
};

export class Handle extends Component<HandleStyleProps> {
  constructor(options: HandleOptions) {
    super(options, DEFAULT_HANDLE_CFG);
  }

  private marker!: Selection;

  render(attributes: Required<HandleStyleProps>, container: Group) {
    const markerGroup = select(container).maybeAppendByClassName(CLASS_NAMES.markerGroup, 'g');
    this.renderMarker(markerGroup);

    const labelGroup = select(container).maybeAppendByClassName(CLASS_NAMES.labelGroup, 'g');
    this.renderLabel(labelGroup);
  }

  private renderMarker(container: Selection) {
    const {
      orientation,
      classNamePrefix,
      markerSymbol = ifHorizontal(orientation, 'horizontalHandle', 'verticalHandle'),
    } = this.attributes;

    ifShow(!!markerSymbol, container, (group) => {
      const handleStyle = subStyleProps(this.attributes, 'marker');
      const markerStyle = { symbol: markerSymbol, ...handleStyle };
      const markerClassName = getLegendClassName(
        CLASS_NAMES.marker.name,
        CLASSNAME_SUFFIX_MAP.handleMarker,
        classNamePrefix
      );

      this.marker = group
        .maybeAppendByClassName(
          CLASS_NAMES.marker,
          () =>
            new Marker({
              style: markerStyle,
              className: markerClassName,
            })
        )
        .update(markerStyle);

      // Update Marker's child element className (Marker component overrides className internally)
      if (classNamePrefix) {
        const markerElement = this.marker.node().querySelector('.marker');
        if (markerElement) {
          const currentClass = markerElement.getAttribute('class') || '';
          const baseClass = currentClass.split(' ')[0]; // e.g., 'marker'
          const legendClassName = getLegendClassName(baseClass, CLASSNAME_SUFFIX_MAP.handleMarker, classNamePrefix);
          markerElement.setAttribute('class', legendClassName);
        }
      }
    });
  }

  private renderLabel(container: Selection) {
    const { showLabel, orientation, spacing = 0, formatter, classNamePrefix } = this.attributes;

    ifShow(showLabel, container, (group) => {
      const { text, ...labelStyle } = subStyleProps(this.attributes, 'label');

      // adjust layout
      const { width = 0, height = 0 } = group.select(CLASS_NAMES.marker.class)?.node().getBBox() || {};
      const [x, y, textAlign, textBaseline] = ifHorizontal(
        orientation,
        [0, height + spacing, 'center', 'top'],
        [width + spacing, 0, 'start', 'middle']
      );

      const labelClassName = getLegendClassName(
        CLASS_NAMES.label.name,
        CLASSNAME_SUFFIX_MAP.handleLabel,
        classNamePrefix
      );

      group
        .maybeAppendByClassName(CLASS_NAMES.label, 'text')
        .attr('className', labelClassName)
        .styles({ ...labelStyle, x, y, text: formatter(text).toString(), textAlign, textBaseline });
    });
  }
}
