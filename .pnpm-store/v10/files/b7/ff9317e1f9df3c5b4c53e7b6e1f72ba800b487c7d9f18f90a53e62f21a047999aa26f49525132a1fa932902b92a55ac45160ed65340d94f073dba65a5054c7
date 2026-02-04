import type { CurveArray, PathArray } from '../types';
import { midPoint } from './mid-point';
import { segmentCubicFactory } from './segment-cubic-factory';

type SplitArray = [number, number, number, number, number, number, number, number, number];

const MAX_RECURSION_DEPTH = 50;

function splitCubic(pts: SplitArray, t = 0.5): [CurveArray, CurveArray] {
  const p0 = pts.slice(0, 2) as [number, number];
  const p1 = pts.slice(2, 4) as [number, number];
  const p2 = pts.slice(4, 6) as [number, number];
  const p3 = pts.slice(6, 8) as [number, number];
  const p4 = midPoint(p0, p1, t);
  const p5 = midPoint(p1, p2, t);
  const p6 = midPoint(p2, p3, t);
  const p7 = midPoint(p4, p5, t);
  const p8 = midPoint(p5, p6, t);
  const p9 = midPoint(p7, p8, t);

  return [
    // @ts-ignore
    ['C'].concat(p4, p7, p9),
    // @ts-ignore
    ['C'].concat(p8, p6, p3),
  ];
}

function getCurveArray(segments: PathArray) {
  return segments.map((segment, i, pathArray) => {
    // @ts-ignore
    const segmentData = i && (pathArray[i - 1].slice(-2).concat(segment.slice(1)) as SplitArray);

    // @ts-ignore
    const curveLength = i
      ? segmentCubicFactory(
          segmentData[0],
          segmentData[1],
          segmentData[2],
          segmentData[3],
          segmentData[4],
          segmentData[5],
          segmentData[6],
          segmentData[7],
          segmentData[8],
          { bbox: false },
        ).length
      : 0;

    let subsegs;
    if (i) {
      // must be [segment,segment]
      subsegs = curveLength ? splitCubic(segmentData) : [segment, segment];
    } else {
      subsegs = [segment];
    }

    return {
      s: segment,
      ss: subsegs,
      l: curveLength,
    };
  });
}

export function equalizeSegments(path1: PathArray, path2: PathArray, TL?: number, depth = 0): CurveArray[] {
  if (depth > MAX_RECURSION_DEPTH) {
    console.warn('Maximum recursion depth reached in equalizeSegments');
    return [path1, path2] as CurveArray[];
  }
  const c1 = getCurveArray(path1);
  const c2 = getCurveArray(path2);
  const L1 = c1.length;
  const L2 = c2.length;
  const l1 = c1.filter((x) => x.l).length;
  const l2 = c2.filter((x) => x.l).length;
  const m1 = c1.filter((x) => x.l).reduce((a, { l }) => a + l, 0) / l1 || 0;
  const m2 = c2.filter((x) => x.l).reduce((a, { l }) => a + l, 0) / l2 || 0;
  const tl = TL || Math.max(L1, L2);
  const mm = [m1, m2];
  const dif = [tl - L1, tl - L2];
  let canSplit: number | boolean = 0;
  const result = [c1, c2].map((x, i) =>
    // @ts-ignore
    x.l === tl
      ? x.map((y) => y.s)
      : x
          .map((y, j) => {
            canSplit = j && dif[i] && y.l >= mm[i];
            dif[i] -= canSplit ? 1 : 0;
            return canSplit ? y.ss : [y.s];
          })
          .flat(),
  ) as CurveArray[];

  return result[0].length === result[1].length ? result : equalizeSegments(result[0], result[1], tl, depth + 1);
}
