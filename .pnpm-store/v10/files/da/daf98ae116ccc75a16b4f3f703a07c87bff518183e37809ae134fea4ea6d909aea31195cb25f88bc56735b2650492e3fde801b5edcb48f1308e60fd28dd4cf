import type { PathArray } from '../types';

export function fixArc(pathArray: PathArray, allPathCommands: string[], i: number) {
  if (pathArray[i].length > 7) {
    pathArray[i].shift();
    const pi = pathArray[i];
    // const ni = i + 1;
    let ni = i;
    while (pi.length) {
      // if created multiple C:s, their original seg is saved
      allPathCommands[i] = 'A';
      // @ts-ignore
      pathArray.splice((ni += 1), 0, ['C'].concat(pi.splice(0, 6)));
    }
    pathArray.splice(i, 1);
  }
}
