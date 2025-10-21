import { isFunction } from '@antv/util';
import { StandardAnimationOption } from '../../../animation';
import type { Point } from '../../../types';
import { degToRad, getCallbackValue, scale, Selection, subStyleProps } from '../../../util';
import { Grid, GridStyleProps } from '../../grid';
import { CLASS_NAMES } from '../constant';
import type { AxisDatum, AxisGridStyleProps, AxisStyleProps } from '../types';
import { getValuePos } from './line';
import { filterExec, getDirectionVector } from './utils';

function getGridVector(value: number, attr: Required<AxisStyleProps>) {
  return getDirectionVector(value, attr.gridDirection, attr);
}

function getGridCenter(attr: Required<AxisStyleProps>) {
  const { type, gridCenter } = attr;
  if (type === 'linear') return gridCenter;
  return gridCenter || attr.center;
}

function renderStraight(data: AxisDatum[], attr: Required<AxisStyleProps>) {
  const { gridLength } = attr;
  return data.map(({ value }, index) => {
    const [x, y] = getValuePos(value, attr);
    const [dx, dy] = scale(getGridVector(value, attr), gridLength);
    return {
      id: index,
      points: [
        [x, y],
        [x + dx, y + dy],
      ] as Point[],
    };
  });
}

function renderSurround(data: AxisDatum[], attr: Required<AxisStyleProps>) {
  const controlAngles = attr.gridControlAngles;
  const center = getGridCenter(attr);
  if (!center) throw new Error('grid center is not provide');
  if (data.length < 2) throw new Error('Invalid grid data');
  if (!controlAngles || controlAngles.length === 0) throw new Error('Invalid gridControlAngles');

  const [cx, cy] = center;
  return data.map(({ value }, index) => {
    const [sx, sy] = getValuePos(value, attr);
    const [dx, dy] = [sx - cx, sy - cy];
    const points: Point[] = [];
    controlAngles.forEach((angle: number) => {
      const angleInRad = degToRad(angle);
      const [cosa, sina] = [Math.cos(angleInRad), Math.sin(angleInRad)];
      const x = dx * cosa - dy * sina + cx;
      const y = dx * sina + dy * cosa + cy;
      points.push([x, y]);
    });

    return { points, id: index };
  });
}

export function renderGrid(
  container: Selection,
  data: AxisDatum[],
  attr: Required<AxisStyleProps>,
  animate: StandardAnimationOption
) {
  const gridAttr = subStyleProps<Required<AxisGridStyleProps>>(attr, 'grid');
  const { type, areaFill } = gridAttr;
  const center = getGridCenter(attr);
  const finalData = filterExec(data, attr.gridFilter);
  const gridItems = type === 'segment' ? renderStraight(finalData, attr) : renderSurround(finalData, attr);

  const style: Required<GridStyleProps> = {
    ...gridAttr,
    center,
    areaFill: isFunction(areaFill)
      ? finalData.map((datum, index) => getCallbackValue(areaFill, [datum, index, finalData]))
      : areaFill,
    animate,
    data: gridItems,
  };

  return container
    .selectAll(CLASS_NAMES.grid.class)
    .data([1])
    .join(
      (enter) => enter.append(() => new Grid({ style })).attr('className', CLASS_NAMES.grid.name),
      (update) =>
        update.transition(function () {
          return this.update(style);
        }),
      (exit) => exit.remove()
    )
    .transitions();
}
