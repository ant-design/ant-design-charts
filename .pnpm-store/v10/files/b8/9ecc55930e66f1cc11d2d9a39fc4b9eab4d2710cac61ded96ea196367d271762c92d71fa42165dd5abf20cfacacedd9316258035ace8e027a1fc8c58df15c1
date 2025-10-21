import { isFunction } from '@antv/util';
import type { GenericAnimation, StandardAnimationOption } from '../../../animation';
import { fadeOut, onAnimateFinished, transition } from '../../../animation';
import type { Group } from '../../../shapes';
import type { Vector2 } from '../../../types';
import { Selection, getCallbackValue, select, splitStyle, subStyleProps } from '../../../util';
import { CLASS_NAMES } from '../constant';
import type { AxisDatum, AxisTickStyleProps, RequiredAxisStyleProps } from '../types';
import { getValuePos } from './line';
import { filterExec, getCallbackStyle, getDirectionVector } from './utils';

type RequiredAxisTickStyleProps = Required<AxisTickStyleProps>;

export function getTickVector(value: number, attr: RequiredAxisStyleProps): Vector2 {
  return getDirectionVector(value, attr.tickDirection, attr);
}

export function getTickPoints(unitVector: Vector2, tickLength: number) {
  const [dx, dy] = unitVector;
  return [
    [0, 0],
    [dx * tickLength, dy * tickLength],
  ];
}

function getTickLineLayout(
  datum: AxisDatum,
  index: number,
  data: AxisDatum[],
  tickVector: Vector2,
  attr: RequiredAxisStyleProps
) {
  const { tickLength } = attr;
  const [[x1, y1], [x2, y2]] = getTickPoints(tickVector, getCallbackValue(tickLength, [datum, index, data]));
  return { x1, x2, y1, y2 };
}

function createTickEl(
  container: Selection,
  datum: AxisDatum,
  index: number,
  data: AxisDatum[],
  attr: RequiredAxisStyleProps
) {
  const { tickFormatter: formatter } = attr;
  const tickVector = getTickVector(datum.value, attr);
  let el: any = 'line';
  if (isFunction(formatter)) el = () => getCallbackValue(formatter, [datum, index, data, tickVector]);
  return container.append(el).attr('className', CLASS_NAMES.tickItem.name);
}

function applyTickStyle(
  datum: AxisDatum,
  index: number,
  data: AxisDatum[],
  tick: Selection,
  group: Group,
  attr: RequiredAxisStyleProps,
  style: AxisTickStyleProps
) {
  const tickVector = getTickVector(datum.value, attr);
  const { x1, x2, y1, y2 } = getTickLineLayout(datum, index, data, tickVector, attr);
  const [tickStyle, groupStyle] = splitStyle(getCallbackStyle(style, [datum, index, data, tickVector]));
  tick.node().nodeName === 'line' && tick.styles({ x1, x2, y1, y2, ...tickStyle });
  group.attr(groupStyle);
  tick.styles(tickStyle);
}

function createTick(
  datum: AxisDatum,
  index: number,
  data: AxisDatum[],
  attr: RequiredAxisStyleProps,
  tickAttr: RequiredAxisTickStyleProps,
  animate: GenericAnimation
) {
  const tick = createTickEl(select(this), datum, index, data, attr);
  applyTickStyle(datum, index, data, tick, this, attr, tickAttr);
  const [x, y] = getValuePos(datum.value, attr);
  return transition(this, { transform: `translate(${x}, ${y})` }, animate);
}

export function renderTicks(
  container: Selection,
  axisData: AxisDatum[],
  attr: RequiredAxisStyleProps,
  animate: StandardAnimationOption
) {
  const finalData = filterExec(axisData, attr.tickFilter);
  const tickAttr = subStyleProps<RequiredAxisTickStyleProps>(attr, 'tick');
  return container
    .selectAll(CLASS_NAMES.tick.class)
    .data(finalData, (d) => d.id || d.label)
    .join(
      (enter) =>
        enter
          .append('g')
          .attr('className', CLASS_NAMES.tick.name)
          .transition(function (datum: AxisDatum, index: number) {
            return createTick.call(this, datum, index, finalData, attr, tickAttr, false);
          }),
      (update) =>
        update.transition(function (datum: AxisDatum, index: number) {
          this.removeChildren();
          return createTick.call(this, datum, index, finalData, attr, tickAttr, animate.update);
        }),
      (exit) =>
        exit.transition(function () {
          const animation = fadeOut(this.childNodes[0], animate.exit);
          onAnimateFinished(animation, () => this.remove());
          return animation;
        })
    )
    .transitions();
}
