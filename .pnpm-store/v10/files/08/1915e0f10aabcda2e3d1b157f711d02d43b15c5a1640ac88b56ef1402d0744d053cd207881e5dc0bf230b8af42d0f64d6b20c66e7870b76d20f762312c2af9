import {
  EState,
  fractionToLineCenter,
  Intersection,
  testIntersection,
  hasFractionToLineCenter,
  intersectsLine,
} from './Intersection';
import { Line } from './model/Line';
import { doublePointsEqual, ptsDistanceSq } from './utils';
import { type IPoint, point, type ICircle, type IRectangle2 } from './interfaces';

export function calculateVirtualEdges(
  items: ReadonlyArray<ICircle>,
  nonMembers: ReadonlyArray<IRectangle2 & { containsPt(x: number, y: number): boolean }>,
  maxRoutingIterations: number,
  morphBuffer: number
) {
  if (items.length === 0) {
    return [];
  }
  const sorted = sortByDistanceToCentroid(items);

  return sorted
    .map((d, i) => {
      const visited = sorted.slice(0, i);
      return connectItem(nonMembers, d, visited, maxRoutingIterations, morphBuffer);
    })
    .flat();
}

function connectItem(
  nonMembers: ReadonlyArray<IRectangle2 & { containsPt(x: number, y: number): boolean }>,
  item: ICircle,
  visited: ReadonlyArray<ICircle>,
  maxRoutingIterations: number,
  morphBuffer: number
) {
  const itemCenter = point(item.cx, item.cy);

  // discover the nearest neighbor with minimal interference items
  const closestNeighbor = calculateClosestNeighbor(itemCenter, visited, nonMembers);
  if (closestNeighbor == null) {
    return [];
  }
  // if there is a visited closest neighbor, add straight line between
  // them to the positive energy to ensure connected clusters
  const directLine = new Line(itemCenter.x, itemCenter.y, closestNeighbor.cx, closestNeighbor.cy);

  // route the edge around intersecting nodes not in set
  const scannedLines = computeRoute(directLine, nonMembers, maxRoutingIterations, morphBuffer);

  return mergeLines(scannedLines, nonMembers);
}

function computeRoute(
  directLine: Line,
  nonMembers: ReadonlyArray<IRectangle2 & { containsPt(x: number, y: number): boolean }>,
  maxRoutingIterations: number,
  morphBuffer: number
) {
  // route the edge around intersecting nodes not in set
  const scannedLines: Line[] = [];
  const linesToCheck: Line[] = [];
  linesToCheck.push(directLine);

  let hasIntersection = true;

  for (let iterations = 0; iterations < maxRoutingIterations && hasIntersection; iterations++) {
    hasIntersection = false;
    while (!hasIntersection && linesToCheck.length > 0) {
      const line = linesToCheck.pop()!;
      // resolve intersections in order along edge
      const closestItem = getCenterItem(nonMembers, line);
      const intersections = closestItem ? testIntersection(line, closestItem) : null;

      // 2 intersections = line passes through item
      if (!closestItem || !intersections || intersections.count !== 2) {
        // no intersection found, mark this line as completed
        if (!hasIntersection) {
          scannedLines.push(line);
        }
        continue;
      }

      let tempMorphBuffer = morphBuffer;
      let movePoint = rerouteLine(closestItem, tempMorphBuffer, intersections, true);
      // test the movePoint already exists
      let foundFirst = pointExists(movePoint, linesToCheck) || pointExists(movePoint, scannedLines);
      let pointInside = isPointInRectangles(movePoint, nonMembers);
      // prefer first corner, even if buffer becomes very small
      while (!foundFirst && pointInside && tempMorphBuffer >= 1) {
        // try a smaller buffer
        tempMorphBuffer /= 1.5;
        movePoint = rerouteLine(closestItem, tempMorphBuffer, intersections, true);
        foundFirst = pointExists(movePoint, linesToCheck) || pointExists(movePoint, scannedLines);
        pointInside = isPointInRectangles(movePoint, nonMembers);
      }

      if (movePoint && !foundFirst && !pointInside) {
        // add 2 rerouted lines to check
        linesToCheck.push(new Line(line.x1, line.y1, movePoint.x, movePoint.y));
        linesToCheck.push(new Line(movePoint.x, movePoint.y, line.x2, line.y2));
        // indicate intersection found
        hasIntersection = true;
      }

      if (hasIntersection) {
        continue;
      }

      // if we didn't find a valid point around the
      // first corner, try the second
      tempMorphBuffer = morphBuffer;
      movePoint = rerouteLine(closestItem, tempMorphBuffer, intersections, false);
      let foundSecond = pointExists(movePoint, linesToCheck) || pointExists(movePoint, scannedLines);
      pointInside = isPointInRectangles(movePoint, nonMembers);
      // if both corners have been used, stop; otherwise gradually reduce buffer and try second corner
      while (!foundSecond && pointInside && tempMorphBuffer >= 1) {
        // try a smaller buffer
        tempMorphBuffer /= 1.5;
        movePoint = rerouteLine(closestItem, tempMorphBuffer, intersections, false);
        foundSecond = pointExists(movePoint, linesToCheck) || pointExists(movePoint, scannedLines);
        pointInside = isPointInRectangles(movePoint, nonMembers);
      }

      if (movePoint && !foundSecond) {
        // add 2 rerouted lines to check
        linesToCheck.push(new Line(line.x1, line.y1, movePoint.x, movePoint.y));
        linesToCheck.push(new Line(movePoint.x, movePoint.y, line.x2, line.y2));
        // indicate intersection found
        hasIntersection = true;
      }
      // no intersection found, mark this line as completed
      if (!hasIntersection) {
        scannedLines.push(line);
      }
    }
  }
  // finalize any that were not rerouted (due to running out of
  // iterations) or if we aren't morphing
  while (linesToCheck.length > 0) {
    scannedLines.push(linesToCheck.pop()!);
  }

  return scannedLines;
}

function mergeLines(scannedLines: Line[], nonMembers: ReadonlyArray<IRectangle2>) {
  const finalRoute: Line[] = [];
  // try to merge consecutive lines if possible
  while (scannedLines.length > 0) {
    const line1 = scannedLines.pop()!;
    if (scannedLines.length === 0) {
      finalRoute.push(line1);
      break;
    }
    const line2 = scannedLines.pop()!;
    const mergeLine = new Line(line1.x1, line1.y1, line2.x2, line2.y2);
    // resolve intersections in order along edge
    const closestItem = getCenterItem(nonMembers, mergeLine);
    // merge most recent line and previous line
    if (!closestItem) {
      scannedLines.push(mergeLine);
    } else {
      finalRoute.push(line1);
      scannedLines.push(line2);
    }
  }
  return finalRoute;
}

function calculateClosestNeighbor(
  itemCenter: IPoint,
  visited: ReadonlyArray<ICircle>,
  nonMembers: ReadonlyArray<IRectangle2>
) {
  let minLengthSq = Number.POSITIVE_INFINITY;
  return visited.reduce(
    (closestNeighbor, neighborItem) => {
      const distanceSq = ptsDistanceSq(itemCenter.x, itemCenter.y, neighborItem.cx, neighborItem.cy);
      if (distanceSq > minLengthSq) {
        // the interference can only increase the distance so if already bigger, return
        return closestNeighbor;
      }

      const directLine = new Line(itemCenter.x, itemCenter.y, neighborItem.cx, neighborItem.cy);
      // augment distance by number of interfering items
      const numberInterferenceItems = itemsCuttingLine(nonMembers, directLine);

      // TODO is there a better function to consider interference in nearest-neighbor checking? This is hacky
      if (distanceSq * (numberInterferenceItems + 1) * (numberInterferenceItems + 1) < minLengthSq) {
        closestNeighbor = neighborItem;
        minLengthSq = distanceSq * (numberInterferenceItems + 1) * (numberInterferenceItems + 1);
      }
      return closestNeighbor;
    },
    null as ICircle | null
  );
}

function sortByDistanceToCentroid<T extends ICircle>(items: ReadonlyArray<T>) {
  if (items.length < 2) {
    return items;
  }
  let totalX = 0;
  let totalY = 0;
  items.forEach((item) => {
    totalX += item.cx;
    totalY += item.cy;
  });
  totalX /= items.length;
  totalY /= items.length;
  return items
    .map((item) => {
      const diffX = totalX - item.cx;
      const diffY = totalY - item.cy;
      const dist = diffX * diffX + diffY * diffY;
      return [item, dist] as [T, number];
    })
    .sort((a, b) => a[1] - b[1])
    .map((d) => d[0]);
}

function isPointInRectangles(p: IPoint, rects: ReadonlyArray<{ containsPt(x: number, y: number): boolean }>) {
  return rects.some((r) => r.containsPt(p.x, p.y));
}

function pointExists(pointToCheck: IPoint, lines: ReadonlyArray<Line>) {
  return lines.some((checkEndPointsLine) => {
    if (doublePointsEqual(checkEndPointsLine.x1, checkEndPointsLine.y1, pointToCheck.x, pointToCheck.y, 1e-3)) {
      return true;
    }
    if (doublePointsEqual(checkEndPointsLine.x2, checkEndPointsLine.y2, pointToCheck.x, pointToCheck.y, 1e-3)) {
      return true;
    }
    return false;
  });
}

function getCenterItem(items: ReadonlyArray<IRectangle2>, testLine: Line) {
  let minDistance = Number.POSITIVE_INFINITY;
  let closestItem: IRectangle2 | null = null;

  for (const item of items) {
    if (!intersectsLine(item, testLine)) {
      continue;
    }
    const distance = fractionToLineCenter(item, testLine);
    // find closest intersection
    if (distance >= 0 && distance < minDistance) {
      closestItem = item;
      minDistance = distance;
    }
  }
  return closestItem;
}

function itemsCuttingLine(items: ReadonlyArray<IRectangle2>, testLine: Line) {
  return items.reduce((count, item) => {
    if (intersectsLine(item, testLine) && hasFractionToLineCenter(item, testLine)) {
      return count + 1;
    }
    return count;
  }, 0);
}

function rerouteLine(
  item: IRectangle2,
  rerouteBuffer: number,
  intersections: { top: Intersection; left: Intersection; right: Intersection; bottom: Intersection },
  wrapNormal: boolean
) {
  const topIntersect = intersections.top;
  const leftIntersect = intersections.left;
  const bottomIntersect = intersections.bottom;
  const rightIntersect = intersections.right;

  // wrap around the most efficient way
  if (wrapNormal) {
    // left side
    if (leftIntersect.state === EState.POINT) {
      if (topIntersect.state === EState.POINT)
        // triangle, must go around top left
        return point(item.x - rerouteBuffer, item.y - rerouteBuffer);
      if (bottomIntersect.state === EState.POINT)
        // triangle, must go around bottom left
        return point(item.x - rerouteBuffer, item.y2 + rerouteBuffer);
      // else through left to right, calculate areas
      const totalArea = item.width * item.height;
      // top area
      const topArea = item.width * ((leftIntersect.y - item.y + (rightIntersect.y - item.y)) * 0.5);
      if (topArea < totalArea * 0.5) {
        // go around top (the side which would make a greater movement)
        if (leftIntersect.y > rightIntersect.y)
          // top left
          return point(item.x - rerouteBuffer, item.y - rerouteBuffer);
        // top right
        return point(item.x2 + rerouteBuffer, item.y - rerouteBuffer);
      }
      // go around bottom
      if (leftIntersect.y < rightIntersect.y)
        // bottom left
        return point(item.x - rerouteBuffer, item.y2 + rerouteBuffer);
      // bottom right
      return point(item.x2 + rerouteBuffer, item.y2 + rerouteBuffer);
    }
    // right side
    if (rightIntersect.state === EState.POINT) {
      if (topIntersect.state === EState.POINT)
        // triangle, must go around top right
        return point(item.x2 + rerouteBuffer, item.y - rerouteBuffer);
      if (bottomIntersect.state === EState.POINT)
        // triangle, must go around bottom right
        return point(item.x2 + rerouteBuffer, item.y2 + rerouteBuffer);
    }
    // else through top to bottom, calculate areas
    const totalArea = item.height * item.width;
    const leftArea = item.height * ((topIntersect.x - item.x + (rightIntersect.x - item.x)) * 0.5);
    if (leftArea < totalArea * 0.5) {
      // go around left
      if (topIntersect.x > bottomIntersect.x)
        // top left
        return point(item.x - rerouteBuffer, item.y - rerouteBuffer);
      // bottom left
      return point(item.x - rerouteBuffer, item.y2 + rerouteBuffer);
    }
    // go around right
    if (topIntersect.x < bottomIntersect.x)
      // top right
      return point(item.x2 + rerouteBuffer, item.y - rerouteBuffer);
    // bottom right
    return point(item.x2 + rerouteBuffer, item.y2 + rerouteBuffer);
  }
  // wrap around opposite (usually because the first move caused a problem)
  if (leftIntersect.state === EState.POINT) {
    if (topIntersect.state === EState.POINT)
      // triangle, must go around bottom right
      return point(item.x2 + rerouteBuffer, item.y2 + rerouteBuffer);
    if (bottomIntersect.state === EState.POINT)
      // triangle, must go around top right
      return point(item.x2 + rerouteBuffer, item.y - rerouteBuffer);
    // else through left to right, calculate areas
    const totalArea = item.height * item.width;
    const topArea = item.width * ((leftIntersect.y - item.y + (rightIntersect.y - item.y)) * 0.5);
    if (topArea < totalArea * 0.5) {
      // go around bottom (the side which would make a lesser movement)
      if (leftIntersect.y > rightIntersect.y)
        // bottom right
        return point(item.x2 + rerouteBuffer, item.y2 + rerouteBuffer);
      // bottom left
      return point(item.x - rerouteBuffer, item.y2 + rerouteBuffer);
    }
    // go around top
    if (leftIntersect.y < rightIntersect.y)
      // top right
      return point(item.x2 + rerouteBuffer, item.y - rerouteBuffer);
    // top left
    return point(item.x - rerouteBuffer, item.y - rerouteBuffer);
  }
  if (rightIntersect.state === EState.POINT) {
    if (topIntersect.state === EState.POINT)
      // triangle, must go around bottom left
      return point(item.x - rerouteBuffer, item.y2 + rerouteBuffer);
    if (bottomIntersect.state === EState.POINT)
      // triangle, must go around top left
      return point(item.x - rerouteBuffer, item.y - rerouteBuffer);
  }
  // else through top to bottom, calculate areas
  const totalArea = item.height * item.width;
  const leftArea = item.height * ((topIntersect.x - item.x + (rightIntersect.x - item.x)) * 0.5);
  if (leftArea < totalArea * 0.5) {
    // go around right
    if (topIntersect.x > bottomIntersect.x)
      // bottom right
      return point(item.x2 + rerouteBuffer, item.y2 + rerouteBuffer);
    // top right
    return point(item.x2 + rerouteBuffer, item.y - rerouteBuffer);
  }
  // go around left
  if (topIntersect.x < bottomIntersect.x)
    // bottom left
    return point(item.x - rerouteBuffer, item.y2 + rerouteBuffer);
  // top left
  return point(item.x - rerouteBuffer, item.y - rerouteBuffer);
}
