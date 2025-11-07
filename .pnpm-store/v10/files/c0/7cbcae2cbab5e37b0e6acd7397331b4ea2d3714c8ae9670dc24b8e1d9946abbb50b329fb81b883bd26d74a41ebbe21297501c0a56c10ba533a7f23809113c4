import { fadeOut, onAnimateFinished, transition } from '../../animation';
import { Component } from '../../core';
import type { Group } from '../../shapes';
import type { Point } from '../../types';
import type { PathCommand, Selection } from '../../util';
import { classNames, distance, getCallbackValue, getPrimitiveAttributes, select } from '../../util';
import type { GridOptions, GridStyle, GridStyleProps } from './types';

export type { GridOptions, GridStyleProps };

const CLASS_NAMES = classNames(
  {
    lineGroup: 'line-group',
    line: 'line',
    regionGroup: 'region-group',
    region: 'region',
  },
  'grid'
);

function getStraightPath(points: Point[]) {
  return points.reduce((acc, curr, idx) => {
    acc.push([idx === 0 ? 'M' : 'L', ...curr]);
    return acc;
  }, [] as PathCommand[]);
}

function getSurroundPath(points: Point[], attr: GridStyleProps, reversed?: boolean) {
  const { connect = 'line', center } = attr;
  if (connect === 'line') return getStraightPath(points);
  if (!center) return [];
  const radius = distance(points[0], center);
  const sweepFlag = reversed ? 0 : 1;
  return points.reduce((r, p, idx) => {
    if (idx === 0) r.push(['M', ...p]);
    else r.push(['A', radius, radius, 0, 0, sweepFlag, ...p]);
    return r;
  }, [] as PathCommand[]);
}

function getLinePath(points: Point[], cfg: GridStyleProps, reversed?: boolean) {
  if (cfg.type === 'surround') return getSurroundPath(points, cfg, reversed);
  return getStraightPath(points);
}

function connectPaths(from: Point[], to: Point[], cfg: GridStyleProps) {
  const { type, connect, center, closed } = cfg;
  const closeFlag: PathCommand[] = closed ? [['Z']] : [];
  const [path1, path2] = [getLinePath(from, cfg), getLinePath(to.slice().reverse(), cfg, true)];
  const [startOfFrom, endOfTo] = [from[0], to.slice(-1)[0]];
  const createPath = (insertA: PathCommand[], insertB: PathCommand[]): PathCommand[] =>
    [path1, insertA, path2, insertB, closeFlag].flat();

  if (connect === 'line' || type === 'surround') {
    return createPath([['L', ...endOfTo]], [['L', ...startOfFrom]]);
  }
  if (!center) throw new Error('Arc grid need to specified center');

  const [raduis1, radius2] = [distance(endOfTo, center), distance(startOfFrom, center)];
  return createPath(
    [
      ['A', raduis1, raduis1, 0, 0, 1, ...endOfTo],
      ['L', ...endOfTo],
    ],
    [
      ['A', radius2, radius2, 0, 0, 0, ...startOfFrom],
      ['L', ...startOfFrom],
    ]
  );
}

function renderGridLine(
  container: Selection<Group>,
  data: GridStyleProps['data'],
  attr: GridStyleProps,
  style: GridStyle
) {
  const { animate, isBillboard } = attr;
  const lines = data.map((item, idx) => {
    return {
      id: item.id || `grid-line-${idx}`,
      d: getLinePath(item.points, attr),
    };
  });
  return container
    .selectAll(CLASS_NAMES.line.class)
    .data(lines, (d) => d.id)
    .join(
      (enter) =>
        enter.append('path').each(function (datum, index) {
          const lineStyle = getCallbackValue(
            getPrimitiveAttributes({
              d: datum.d,
              ...style,
            }),
            [datum, index, lines]
          );
          this.attr({
            class: CLASS_NAMES.line.name,
            stroke: '#D9D9D9',
            lineWidth: 1,
            lineDash: [4, 4],
            isBillboard,
            ...lineStyle,
          });
        }),
      (update) =>
        update.transition(function (datum, index) {
          const lineStyle = getCallbackValue(
            getPrimitiveAttributes({
              d: datum.d,
              ...style,
            }),
            [datum, index, lines]
          );
          return transition(this, lineStyle, animate.update);
        }),
      (exit) =>
        exit.transition(function () {
          const animation = fadeOut(this, animate.exit);
          onAnimateFinished(animation, () => this.remove());
          return animation;
        })
    )
    .transitions();
}

function renderAlternateRegion(container: Selection<Group>, data: GridStyleProps['data'], style: GridStyleProps) {
  const { animate, connect, areaFill } = style;
  if (data.length < 2 || !areaFill || !connect) return [];
  const colors: string[] = Array.isArray(areaFill) ? areaFill : [areaFill, 'transparent'];
  const getColor = (idx: number) => colors[idx % colors.length];
  const regions: any[] = [];
  for (let idx = 0; idx < data.length - 1; idx++) {
    const [prev, curr] = [data[idx].points, data[idx + 1].points];
    const path = connectPaths(prev, curr, style);
    regions.push({ d: path, fill: getColor(idx) });
  }

  return container
    .selectAll(CLASS_NAMES.region.class)
    .data(regions, (_, i) => i)
    .join(
      (enter) =>
        enter
          .append('path')
          .each(function (datum, index) {
            const regionStyle = getCallbackValue(datum, [datum, index, regions]);
            this.attr(regionStyle);
          })
          .attr('className', CLASS_NAMES.region.name),
      (update) =>
        update.transition(function (datum, index) {
          const regionStyle = getCallbackValue(datum, [datum, index, regions]);
          return transition(this, regionStyle, animate.update);
        }),
      (exit) =>
        exit.transition(function () {
          const animation = fadeOut(this, animate.exit);
          onAnimateFinished(animation, () => this.remove());
          return animation;
        })
    )
    .transitions();
}

function getData(attr: GridStyleProps) {
  const { data = [], closed } = attr;
  if (!closed) return data;
  return data.map((datum) => {
    const { points } = datum;
    const [start] = points;
    return { ...datum, points: [...points, start] };
  });
}

export class Grid extends Component<GridStyleProps> {
  render(attributes: GridStyleProps, container: Group) {
    // @ts-ignore do no passBy className
    const { type, center, areaFill, closed, ...style } = attributes;
    const data = getData(attributes);
    const lineGroup = select(container).maybeAppendByClassName(CLASS_NAMES.lineGroup, 'g');
    const regionGroup = select(container).maybeAppendByClassName(CLASS_NAMES.regionGroup, 'g');
    const lineTransitions = renderGridLine(lineGroup, data, attributes, style);
    const reigionTransitions = renderAlternateRegion(regionGroup, data, attributes);
    return [...lineTransitions, ...reigionTransitions];
  }
}
