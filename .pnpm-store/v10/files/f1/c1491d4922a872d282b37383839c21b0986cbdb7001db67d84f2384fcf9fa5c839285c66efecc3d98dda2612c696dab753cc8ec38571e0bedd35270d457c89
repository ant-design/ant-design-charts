import { Selection } from './selection';

export function ifShow<T extends Selection, R = any>(
  show: boolean,
  container: T,
  creator: (group: T) => R,
  removeChildren: boolean = true,
  removeHandler: (group: T) => any = (g) => {
    g.node().removeChildren();
  }
): null | R {
  if (show) {
    return creator(container);
  }
  if (removeChildren) removeHandler(container);
  return null;
}
