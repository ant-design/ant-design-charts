import { DisplayObject } from '../shapes';

export function getTranslate(node: DisplayObject, x: string, y: string) {
  const { width, height } = node.getBBox();
  const [tx, ty] = [x, y].map((v, i) => {
    return v.includes('%')
      ? (parseFloat(v.match(/[+-]?([0-9]*[.])?[0-9]+/)?.[0] || '0') / 100) * (i === 0 ? width : height)
      : v;
  });
  return [tx, ty];
}

/**
 * transform that support translate percent value
 */
export function percentTransform(node: DisplayObject, val: string) {
  if (!val) return;
  try {
    const reg = /translate\(([+-]*[\d]+[%]*),[ ]*([+-]*[\d]+[%]*)\)/g;

    const computedVal = val.replace(reg, (match, x, y) => `translate(${getTranslate(node, x, y)})`);
    node.attr('transform', computedVal);
  } catch (e) {
    // do nothing
  }
}
