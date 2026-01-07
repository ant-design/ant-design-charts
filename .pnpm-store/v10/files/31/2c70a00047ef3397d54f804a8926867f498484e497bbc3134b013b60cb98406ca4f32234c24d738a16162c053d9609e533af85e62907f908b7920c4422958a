import type { DisplayObject } from '../shapes';
import { transition } from './utils';
import type { GenericAnimation } from '.';

export default function (element: DisplayObject, options: GenericAnimation) {
  if (!element.style.opacity) element.style.opacity = 1;
  return transition(element, { opacity: 0 }, options);
}
