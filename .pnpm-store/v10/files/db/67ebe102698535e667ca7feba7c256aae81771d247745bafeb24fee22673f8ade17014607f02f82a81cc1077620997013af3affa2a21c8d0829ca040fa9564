import { PointPath } from '../PointPath';
import type { IPoint } from '../interfaces';

export function samplePath(skip = 8) {
  return (path: PointPath) => {
    // start with global SKIP value, but decrease skip amount if there aren't enough points in the surface
    let actSkip = skip;
    // prepare viz attribute array
    let size = path.length;

    if (actSkip > 1) {
      size = Math.floor(path.length / actSkip);
      // if we reduced too much (fewer than three points in reduced surface) reduce skip and try again
      while (size < 3 && actSkip > 1) {
        actSkip -= 1;
        size = Math.floor(path.length / actSkip);
      }
    }

    const finalHull: IPoint[] = [];
    // copy hull values
    for (let i = 0, j = 0; j < size; j++, i += actSkip) {
      finalHull.push(path.get(i));
    }
    return new PointPath(finalHull);
  };
}
