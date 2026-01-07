import type { IRectangle } from './interfaces';

export function addPadding(rect: IRectangle, padding: number): IRectangle;
export function addPadding(rect: ReadonlyArray<IRectangle>, padding: number): ReadonlyArray<IRectangle>;
export function addPadding(
  rect: IRectangle | ReadonlyArray<IRectangle>,
  padding: number
): IRectangle | ReadonlyArray<IRectangle> {
  const map = (r: IRectangle) => ({
    x: r.x - padding,
    y: r.y - padding,
    width: r.width + 2 * padding,
    height: r.height + 2 * padding,
  });
  if (Array.isArray(rect)) {
    return rect.map(map);
  }
  return map(rect as IRectangle);
}
