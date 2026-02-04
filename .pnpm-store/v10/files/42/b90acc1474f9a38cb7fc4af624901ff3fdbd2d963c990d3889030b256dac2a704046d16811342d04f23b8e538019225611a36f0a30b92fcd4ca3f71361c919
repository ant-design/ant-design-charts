import type { DisplayObject } from '../shapes';

/**
 * scale a shape to a given size
 */
export function scaleToPixel(el: DisplayObject, size: number, applyScale = false) {
  const { width, height } = el.getBBox();
  const scale = size / Math.max(width, height);
  if (applyScale) {
    el.style.transform = `scale(${scale})`;
  }
  return scale;
}
