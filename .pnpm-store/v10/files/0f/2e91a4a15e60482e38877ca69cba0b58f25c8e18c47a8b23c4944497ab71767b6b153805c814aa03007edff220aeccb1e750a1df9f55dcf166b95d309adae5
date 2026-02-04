import type { DisplayObject } from '../shapes';
import { transition } from './utils';
import type { GenericAnimation } from '.';

export default function (element: DisplayObject, options: GenericAnimation) {
  if (!element.style.opacity) element.style.opacity = 0;
  return transition(element, { opacity: 1 }, options);
}
