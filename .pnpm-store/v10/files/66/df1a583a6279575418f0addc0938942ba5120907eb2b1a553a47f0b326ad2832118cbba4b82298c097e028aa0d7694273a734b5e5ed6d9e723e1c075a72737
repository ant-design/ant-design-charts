import { PointList } from './model/PointList';
import type { Area } from './model/Area';

const N = 0;
const S = 1;
const E = 2;
const W = 3;

export function marchingSquares(potentialArea: Area, threshold: number) {
  const estLength = (Math.floor(potentialArea.width) + Math.floor(potentialArea.height)) * 2;
  const contour = new PointList(estLength);

  function updateDir(x: number, y: number, dir: number, res: number) {
    const v = potentialArea.get(x, y);
    if (Number.isNaN(v)) {
      return Number.NaN;
    }
    if (v > threshold) {
      return dir + res;
    }
    return dir;
  }

  function getState(x: number, y: number) {
    let dir = N;
    dir = updateDir(x, y, dir, 1);
    dir = updateDir(x + 1, y, dir, 2);
    dir = updateDir(x, y + 1, dir, 4);
    dir = updateDir(x + 1, y + 1, dir, 8);
    if (Number.isNaN(dir)) {
      // console.warn(
      //   'marched out of bounds: ' + x + ' ' + y + ' bounds: ' + potentialArea.width + ' ' + potentialArea.height
      // );
      return -1;
    }
    return dir;
  }

  let direction = S;

  function doMarch(xPos: number, yPos: number) {
    let x = xPos;
    let y = yPos;
    let xPixel = potentialArea.invertScaleX(x);
    let yPixel = potentialArea.invertScaleY(y);
    // artificial limit
    for (let i = 0; i < potentialArea.width * potentialArea.height; i++) {
      // iterative version of end recursion
      const p = { x: xPixel, y: yPixel };
      // check if we're back where we started
      if (contour.contains(p)) {
        if (!contour.isFirst(p)) {
          // encountered a loop but haven't returned to start; will change
          // direction using conditionals and continue back to start
        } else {
          return true;
        }
      } else {
        contour.add(p);
      }
      const state = getState(x, y);
      // x, y are upper left of 2X2 marching square
      switch (state) {
        case -1:
          return true; // Marched out of bounds
        case 0:
        case 3:
        case 2:
        case 7:
          direction = E;
          break;
        case 12:
        case 14:
        case 4:
          direction = W;
          break;
        case 6:
          direction = direction === N ? W : E;
          break;
        case 1:
        case 13:
        case 5:
          direction = N;
          break;
        case 9:
          direction = direction === E ? N : S;
          break;
        case 10:
        case 8:
        case 11:
          direction = S;
          break;
        default:
          console.warn('Marching squares invalid state: ' + state);
          return true;
      }

      switch (direction) {
        case N:
          y--; // up
          yPixel -= potentialArea.pixelGroup;
          break;
        case S:
          y++; // down
          yPixel += potentialArea.pixelGroup;
          break;
        case W:
          x--; // left
          xPixel -= potentialArea.pixelGroup;
          break;
        case E:
          x++; // right
          xPixel += potentialArea.pixelGroup;
          break;
        default:
          console.warn('Marching squares invalid state: ' + state);
          return true;
      }
    }
    return true;
  }

  for (let x = 0; x < potentialArea.width; x++) {
    for (let y = 0; y < potentialArea.height; y++) {
      if (potentialArea.get(x, y) <= threshold) {
        continue;
      }
      const state = getState(x, y);
      if (state < 0 || state === 15) {
        continue;
      }
      if (doMarch(x, y)) {
        return contour.path();
      }
    }
  }
  return null;
}
