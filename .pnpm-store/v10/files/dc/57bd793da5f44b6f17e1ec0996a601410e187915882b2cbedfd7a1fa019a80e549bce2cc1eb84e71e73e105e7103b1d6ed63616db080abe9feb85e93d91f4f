import type { LayoutItem } from '../types';
import { BBox } from '../../bbox';

export function getItemsBBox(items: LayoutItem[]) {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (let i = 0; i < items.length; i++) {
    const { x, y, width, height } = items[i];
    const [X, Y] = [x + width, y + height];
    if (x < minX) minX = x;
    if (y < minY) minY = y;
    if (X > maxX) maxX = X;
    if (Y > maxY) maxY = Y;
  }
  return new BBox(minX, minY, maxX - minX, maxY - minY);
}
