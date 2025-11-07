import { lineBoundingBox } from './model';
import type { Area } from './model/Area';
import { addPadding } from './padding';
import type { IRectangle, ILine } from './interfaces';
import { linePtSegDistSq } from './utils';

export function createLineInfluenceArea(line: ILine, potentialArea: Area, padding: number) {
  return createGenericInfluenceArea(
    Object.assign(lineBoundingBox(line), {
      distSquare: (x: number, y: number) => linePtSegDistSq(line.x1, line.y1, line.x2, line.y2, x, y),
    }),
    potentialArea,
    padding
  );
}

export function createGenericInfluenceArea(
  shape: IRectangle & { distSquare(x: number, y: number): number },
  potentialArea: Area,
  padding: number
) {
  const lr = addPadding(shape, padding);
  const scaled = potentialArea.scale(lr);
  const area = potentialArea.createSub(scaled, lr);
  sample(area, potentialArea, padding, (x, y) => shape.distSquare(x, y));
  return area;
}

function sample(area: Area, potentialArea: Area, padding: number, distanceFunction: (x: number, y: number) => number) {
  const padding2 = padding * padding;

  // find the affected subregion of potentialArea
  // for every point in active subregion of potentialArea, calculate
  // distance to nearest point on rectangle and add influence

  for (let y = 0; y < area.height; y++) {
    for (let x = 0; x < area.width; x++) {
      // convert back to screen coordinates
      const tempX = potentialArea.invertScaleX(area.i + x);
      const tempY = potentialArea.invertScaleY(area.j + y);
      const distanceSq = distanceFunction(tempX, tempY);
      if (distanceSq === 0) {
        area.set(x, y, padding2);
        continue;
      }
      // only influence if less than r1
      if (distanceSq < padding2) {
        const dr = padding - Math.sqrt(distanceSq);
        area.set(x, y, dr * dr);
      }
    }
  }
  return area;
}

export function createRectangleInfluenceArea(
  rect: IRectangle & { distSquare(x: number, y: number): number },
  potentialArea: Area,
  padding: number
) {
  const scaled = potentialArea.scale(rect);
  const padded = potentialArea.addPadding(scaled, padding);
  const area = potentialArea.createSub(padded, { x: rect.x - padding, y: rect.y - padding });
  const paddingLeft = scaled.x - padded.x;
  const paddingTop = scaled.y - padded.y;
  const paddingRight = padded.x2 - scaled.x2;
  const paddingBottom = padded.y2 - scaled.y2;
  const innerWidth = padded.width - paddingLeft - paddingRight;
  const innerHeight = padded.height - paddingTop - paddingBottom;

  // outside rect ... depends on distance
  // cttc
  // lffr
  // lffr
  // cbbc
  const padding2 = padding * padding;
  // within the rect ... full ri2
  area.fillArea(
    {
      x: paddingLeft,
      y: paddingTop,
      width: innerWidth + 1,
      height: innerHeight + 1,
    },
    padding2
  );

  const straightDistances: number[] = [0];
  const maxPadding = Math.max(paddingTop, paddingLeft, paddingRight, paddingBottom);
  {
    const tempX = potentialArea.invertScaleX(scaled.x + scaled.width / 2);
    for (let i = 1; i < maxPadding; i++) {
      const tempY = potentialArea.invertScaleY(scaled.y - i);
      const distanceSq = rect.distSquare(tempX, tempY);
      // only influence if less than r1
      if (distanceSq < padding2) {
        const dr = padding - Math.sqrt(distanceSq);
        straightDistances.push(dr * dr);
      } else {
        break;
      }
    }
  }
  const cornerDistances: number[][] = [];
  const maxHorizontalPadding = Math.max(paddingLeft, paddingRight);
  const maxVerticalPadding = Math.max(paddingTop, paddingRight);
  for (let i = 1; i < maxHorizontalPadding; i++) {
    const tempX = potentialArea.invertScaleX(scaled.x - i);
    const row: number[] = [];
    for (let j = 1; j < maxVerticalPadding; j++) {
      const tempY = potentialArea.invertScaleY(scaled.y - j);
      const distanceSq = rect.distSquare(tempX, tempY);
      // only influence if less than r1
      if (distanceSq < padding2) {
        const dr = padding - Math.sqrt(distanceSq);
        row.push(dr * dr);
      } else {
        row.push(0);
      }
    }
    cornerDistances.push(row);
  }

  //top
  for (let y = 1; y < Math.min(paddingTop, straightDistances.length); y++) {
    const value = straightDistances[y];
    area.fillHorizontalLine(paddingLeft, paddingTop - y, innerWidth + 1, value);
  }
  //bottom
  for (let y = 1; y < Math.min(paddingBottom, straightDistances.length); y++) {
    const value = straightDistances[y];
    area.fillHorizontalLine(paddingLeft, paddingTop + innerHeight + y, innerWidth + 1, value);
  }
  //left
  for (let x = 1; x < Math.min(paddingLeft, straightDistances.length); x++) {
    const value = straightDistances[x];
    area.fillVerticalLine(paddingLeft - x, paddingTop, innerHeight + 1, value);
  }
  //right
  for (let x = 1; x < Math.min(paddingBottom, straightDistances.length); x++) {
    const value = straightDistances[x];
    area.fillVerticalLine(paddingLeft + innerWidth + x, paddingTop, innerHeight + 1, value);
  }
  //top/bottom left
  for (let i = 1; i < paddingLeft; i++) {
    const row = cornerDistances[i - 1];
    const ii = paddingLeft - i;
    for (let j = 1; j < paddingTop; j++) {
      area.set(ii, paddingTop - j, row[j - 1]);
    }
    for (let j = 1; j < paddingBottom; j++) {
      area.set(ii, paddingTop + innerHeight + j, row[j - 1]);
    }
  }
  //top/bottom right
  for (let i = 1; i < paddingRight; i++) {
    const row = cornerDistances[i - 1];
    const ii = paddingLeft + innerWidth + i;
    for (let j = 1; j < paddingTop; j++) {
      area.set(ii, paddingTop - j, row[j - 1]);
    }
    for (let j = 1; j < paddingBottom; j++) {
      area.set(ii, paddingTop + innerHeight + j, row[j - 1]);
    }
  }

  // const other = sample(padded, potentialArea, padding, (x, y) => rect.rectDistSq(x, y));
  // console.log(other.toString());
  // console.log(area.toString());
  return area;
}
