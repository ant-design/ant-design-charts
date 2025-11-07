import type { DisplayObject } from '../../../shapes';
import type { SeriesAttr } from '../../../util';
import { parseSeriesAttr, scale } from '../../../util';
import { getLabelVector } from '../guides/utils';
import { isAxisVertical } from '../guides/line';
import type { AxisStyleProps, LinearAxisStyleProps } from '../types';
import { Bounds } from './bounds';
import { contain } from './contain';
import { intersect } from './intersect';

/**
 * 创建副轴包围盒
 * @returns return false if no crossSize, else croseBBox
 */
function createCrossBBox(attr: AxisStyleProps, padding: number) {
  const { type, labelDirection, crossSize } = attr;
  if (!crossSize) return false;

  if (type === 'arc') {
    const { center, radius } = attr;
    const [cx, cy] = center;
    const size = labelDirection === 'negative' ? 0 : crossSize;
    const dMin = -radius - size;
    const dMax = radius + size;
    const [top, right, bottom, left] = parseSeriesAttr(padding);
    // 假定始终为顺时针方向
    return new Bounds(cx + dMin - left, cy + dMin - top, cx + dMax + right, cy + dMax + bottom);
  }
  const {
    startPos: [sx, sy],
    endPos: [ex, ey],
  } = attr;
  // 水平时取左右，垂直时取上下
  const [top, right, bottom, left] = isAxisVertical(attr as Required<LinearAxisStyleProps>)
    ? [-padding, 0, padding, 0]
    : [0, padding, 0, -padding];

  const labelVector = getLabelVector(0, attr as Required<AxisStyleProps>);
  const diff = scale(labelVector, crossSize);
  const bbox = new Bounds(sx, sy, ex, ey);
  bbox.x1 += left;
  bbox.y1 += top;
  bbox.x2 += right + diff[0];
  bbox.y2 += bottom + diff[1];
  return bbox;
}

export function boundTest<T extends DisplayObject>(items: T[], attr: AxisStyleProps, margin?: SeriesAttr): T[] {
  const { crossPadding } = attr;
  const resultSet = new Set<T>();
  let prev: T | null = null;

  const crossBBox = createCrossBBox(attr, crossPadding!);
  const testContain = (item: T) => {
    if (crossBBox) return contain(crossBBox, item);
    return true;
  };

  const testIntersect = (prevItem: T, currItem: T) => {
    if (!prevItem || !prevItem.firstChild) return true;
    // Get the first child of the item(Text).
    // @ts-ignore
    return !intersect(prevItem.firstChild, currItem.firstChild, parseSeriesAttr(margin));
  };

  for (const curr of items) {
    if (!testContain(curr)) {
      resultSet.add(curr);
    } else if (!prev || testIntersect(prev, curr)) {
      prev = curr;
    } else {
      resultSet.add(prev);
      resultSet.add(curr);
    }
  }

  return Array.from(resultSet);
}
