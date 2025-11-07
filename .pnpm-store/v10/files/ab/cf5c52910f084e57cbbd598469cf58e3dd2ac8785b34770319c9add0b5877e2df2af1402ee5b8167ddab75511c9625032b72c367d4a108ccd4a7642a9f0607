import { isNil } from '@antv/util';
import type { DisplayObject } from '../../../shapes';
import { Text } from '../../../shapes';
import { getFont, measureTextWidth } from '../../../util';
import { AxisStyleProps, EllipsisOverlapCfg } from '../types';
import { boundTest } from '../utils/test';

export type Utils = {
  ellipsis: (text: Text, len: number, suffix?: string) => void;
  getTextShape: (el: DisplayObject) => Text;
};

function parseLengthString(str: number | string, font = {}): number {
  if (isNil(str)) return 0;
  if (typeof str === 'number') return str;
  return Math.floor(measureTextWidth(str, font));
}

export default function ellipseLabels(
  labels: DisplayObject[],
  overlapCfg: EllipsisOverlapCfg,
  attr: AxisStyleProps,
  utils: Utils
) {
  if (labels.length <= 0) return;
  const {
    suffix = '...',
    minLength,
    maxLength = Infinity,
    step: ellipsisStep = ' ',
    margin = [0, 0, 0, 0],
  } = overlapCfg;

  const font = getFont(utils.getTextShape(labels[0]));
  const step = parseLengthString(ellipsisStep, font);
  const min = minLength ? parseLengthString(minLength, font) : step;
  let max = parseLengthString(maxLength, font);
  // Enable to ellipsis label when overlap.
  if (isNil(max) || max === Infinity) {
    max = Math.max.apply(
      null,
      labels.map((d) => d.getBBox().width)
    );
  }
  // Generally, 100 ticks cost less than 300ms. If cost time exceed, means ticks count is too large to see.
  let source = labels.slice();
  const [top = 0, right = 0, bottom = top, left = right] = margin as number[];
  for (let allowedLength = max; allowedLength > min + step; allowedLength -= step) {
    source.forEach((label) => {
      utils.ellipsis(utils.getTextShape(label), allowedLength, suffix);
    });

    source = boundTest(labels, attr, margin);
    // 碰撞检测
    if (source.length < 1) return;
  }
}
