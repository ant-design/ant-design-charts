import { parseColor } from '@antv/g';
import { isFunction } from '@antv/util';
import type { ComponentOptions, PrefixStyleProps } from '../../../core';
import { Component } from '../../../core';
import type { GroupStyleProps, PathStyleProps, RectStyleProps } from '../../../shapes';
import { Group } from '../../../shapes';
import { classNames, select, Selection, subStyleProps } from '../../../util';
import { ifHorizontal } from '../utils';
import { getBlockColor } from './utils';

export type Interpolate<T = string> = (val: number) => T;

export type RibbonStyleProps = GroupStyleProps &
  PrefixStyleProps<PathStyleProps, 'selection'> &
  PrefixStyleProps<RectStyleProps, 'track'> & {
    block?: boolean;
    color: string[] | Interpolate;
    length: number;
    orientation?: 'horizontal' | 'vertical';
    /** partition of the block ,the length of it is the block count */
    partition?: number[];
    /** select area, 0~1 */
    range?: [number, number];
    size: number;
    type?: 'size' | 'color';
  };

export type RibbonOptions = ComponentOptions<RibbonStyleProps>;

type RequiredRibbonStyleProps = Required<RibbonStyleProps>;

const CLASS_NAMES = classNames(
  {
    trackGroup: 'background-group',
    track: 'background',
    selectionGroup: 'ribbon-group',
    selection: 'ribbon',
    clipPath: 'clip-path',
  },
  'ribbon'
);

function getShape(attr: RequiredRibbonStyleProps) {
  const { orientation, size, length } = attr;

  return ifHorizontal(orientation, [length, size], [size, length]);
}

function getTrackPath(attr: RequiredRibbonStyleProps) {
  const { type } = attr;
  const [cw, ch] = getShape(attr);

  if (type === 'size') {
    return [['M', 0, ch], ['L', 0 + cw, 0], ['L', 0 + cw, ch], ['Z']] as any[];
  }
  return [['M', 0, ch], ['L', 0, 0], ['L', 0 + cw, 0], ['L', 0 + cw, ch], ['Z']] as any[];
}

function getSelectionPath(attr: RequiredRibbonStyleProps) {
  return getTrackPath(attr);
}

function getColor(attr: RequiredRibbonStyleProps) {
  const { orientation, color, block, partition } = attr;
  let colors: string[];
  if (isFunction(color)) {
    const len = 20;
    colors = new Array(len).fill(0).map((_, index, arr) => color(index / (arr.length - 1)));
  } else colors = color;

  const count = colors.length;
  const genericColor = colors.map((c) => parseColor(c).toString());
  if (!count) return '';
  if (count === 1) return genericColor[0];
  if (block) return getBlockColor(partition, genericColor, orientation);
  return genericColor.reduce(
    (r, c, idx) => (r += ` ${idx / (count - 1)}:${c}`),
    `l(${ifHorizontal(orientation, '0', '270')})`
  );
}

function getClipPath(attr: RequiredRibbonStyleProps): any[] {
  const { orientation, range } = attr;
  if (!range) return [];
  const [width, height] = getShape(attr);
  const [st, et] = range;
  const x = ifHorizontal(orientation, st * width, 0);
  const y = ifHorizontal(orientation, 0, st * height);
  const w = ifHorizontal(orientation, et * width, width);
  const h = ifHorizontal(orientation, height, et * height);
  return [['M', x, y], ['L', x, h], ['L', w, h], ['L', w, y], ['Z']];
}

function renderTrack(container: Selection, attr: RequiredRibbonStyleProps) {
  const style = subStyleProps(attr, 'track');
  container.maybeAppendByClassName(CLASS_NAMES.track, 'path').styles({ d: getTrackPath(attr), ...style });
}

function renderSelection(container: Selection, attr: RequiredRibbonStyleProps) {
  const style = subStyleProps(attr, 'selection');
  const fill = getColor(attr);

  const ribbon = container
    .maybeAppendByClassName(CLASS_NAMES.selection, 'path')
    .styles({ d: getSelectionPath(attr), fill, ...style });
  const clipPath = ribbon
    .maybeAppendByClassName(CLASS_NAMES.clipPath, 'path')
    .styles({ d: getClipPath(attr) })
    .node();
  ribbon.style('clipPath', clipPath);
}

export class Ribbon extends Component<RibbonStyleProps> {
  constructor(options: RibbonOptions) {
    super(options, {
      type: 'color',
      orientation: 'horizontal',
      size: 30,
      range: [0, 1],
      length: 200,
      block: false,
      partition: [],
      color: ['#fff', '#000'],
      trackFill: '#e5e5e5',
    });
  }

  render(attribute: RequiredRibbonStyleProps, container: Group) {
    const trackGroup = select(container).maybeAppendByClassName(CLASS_NAMES.trackGroup, 'g');
    renderTrack(trackGroup, attribute);

    /**
     * - ribbon group
     *  |- ribbon
     * - clip path
     */
    const ribbonGroup = select(container).maybeAppendByClassName(CLASS_NAMES.selectionGroup, 'g');
    renderSelection(ribbonGroup, attribute);
  }
}
