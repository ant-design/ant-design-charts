import type { DisplayObject } from '../../../shapes';
import { defined, getLocalBBox, hide } from '../../../util';
import { isAxisHorizontal, isAxisVertical } from '../guides/line';
import type { AxisStyleProps, HideOverlapCfg } from '../types';
import { boundTest } from '../utils/test';

type Hide = (item: DisplayObject) => void;
type Show = (item: DisplayObject) => void;
export type Utils = { hide: Hide; show: Show };

const methods: Record<string, (items: DisplayObject[], args: any) => DisplayObject[]> = {
  parity: (items: DisplayObject[], { seq = 2 }) => items.filter((item, i) => (i % seq ? (hide(item), false) : true)),
};

const filterDefined = (arr: any[]) => arr.filter(defined);

export default function hideLabels(
  labels: DisplayObject[],
  overlapCfg: HideOverlapCfg,
  attr: Required<AxisStyleProps>,
  utils: Utils
) {
  const count = labels.length;
  const { keepHeader, keepTail } = overlapCfg;

  if (count <= 1 || (count === 2 && keepHeader && keepTail)) return;

  const parityHide = methods.parity;
  const reset = (els: DisplayObject[]) => (els.forEach(utils.show), els);
  let seq = 2;
  const source = labels.slice();
  let target = labels.slice();

  const minLabelWidth = Math.min(1, ...labels.map((d) => d.getBBox().width));

  if (attr.type === 'linear' && (isAxisHorizontal(attr) || isAxisVertical(attr))) {
    const minX = getLocalBBox(labels[0]).left;
    const maxX = getLocalBBox(labels[count - 1]).right;
    const distance = Math.abs(maxX - minX) || 1;
    seq = Math.max(Math.floor((count * minLabelWidth) / distance), seq);
  }

  let first: DisplayObject | undefined;
  let last: DisplayObject | undefined;

  if (keepHeader) first = source.splice(0, 1)[0];
  if (keepTail) {
    last = source.splice(-1, 1)[0];
    source.reverse();
  }

  reset(source);

  while (
    seq < labels.length &&
    boundTest(filterDefined(last ? [last, ...target, first] : [first, ...target]), attr, overlapCfg?.margin).length
  ) {
    // 每两步，减一个 (不需要考虑保留 first)
    if (last && !first && seq % 2 === 0) {
      const rest = source.splice(0, 1);
      rest.forEach(utils.hide);
    } else if (last && first) {
      // 如果有 first 的话，每一步，减一个（增加迭代次数）
      const rest = source.splice(0, 1);
      rest.forEach(utils.hide);
    }

    target = parityHide(reset(source), { seq });
    seq++;
  }
}
