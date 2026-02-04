import { isNumber, isString } from '@antv/util';
import type { HTMLStyleProps } from '@antv/g';
import type { DisplayObject } from '../shapes';
import { Text, HTML } from '../shapes';
import type { ExtendDisplayObject } from '../types';

export function renderExtDo(el: ExtendDisplayObject): DisplayObject {
  if (typeof el === 'function') return el();
  return isString(el) || isNumber(el) ? new Text({ style: { text: String(el) } }) : el;
}

export function renderHtmlExtDo(el: ExtendDisplayObject, style: Partial<HTMLStyleProps>): DisplayObject {
  if (typeof el === 'function') return el();
  return isString(el) || isNumber(el)
    ? new HTML({
        style: {
          pointerEvents: 'auto',
          ...style,
          innerHTML: el as string | HTMLElement,
        },
      })
    : el;
}
