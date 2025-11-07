import type { GenericAnimation } from '../animation';
import type { DisplayObject } from '../shapes';
import type { Interpolatable } from './interpolate';
import { interpolate } from './interpolate';

export function keyframeInterpolate<T extends Interpolatable>(
  element: DisplayObject,
  from: T,
  to: T,
  options: GenericAnimation
) {
  if (!options) {
    element.attr('__keyframe_data__', to);
    return null;
  }
  const { duration = 0 } = options;
  const int = interpolate(from, to);
  const count = Math.ceil(+duration / 16);
  const keyframes = new Array(count)
    .fill(0)
    .map((datum, index, array) => ({ __keyframe_data__: int(index / (array.length - 1)) }));
  // @ts-ignore
  return element.animate(keyframes, { fill: 'both', ...options });
}
