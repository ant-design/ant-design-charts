import type { PathSegment, NormalSegment, CSegment, QSegment } from '../types';

/**
 * Normalizes a single segment of a `PathArray` object.
 * eg. H/V -> L, T -> Q
 */
export function normalizeSegment(segment: PathSegment, params: any): NormalSegment {
  const [pathCommand] = segment;
  const { x1: px1, y1: py1, x2: px2, y2: py2 } = params;
  const values = segment.slice(1).map(Number);
  let result = segment;

  if (!'TQ'.includes(pathCommand)) {
    // optional but good to be cautious
    params.qx = null;
    params.qy = null;
  }

  if (pathCommand === 'H') {
    result = ['L', segment[1], py1];
  } else if (pathCommand === 'V') {
    result = ['L', px1, segment[1]];
  } else if (pathCommand === 'S') {
    const x1 = px1 * 2 - px2;
    const y1 = py1 * 2 - py2;
    params.x1 = x1;
    params.y1 = y1;
    result = ['C', x1, y1].concat(values) as CSegment;
  } else if (pathCommand === 'T') {
    const qx = px1 * 2 - params.qx;
    const qy = py1 * 2 - params.qy;
    params.qx = qx;
    params.qy = qy;
    result = ['Q', qx, qy].concat(values) as QSegment;
  } else if (pathCommand === 'Q') {
    const [nqx, nqy] = values;
    params.qx = nqx;
    params.qy = nqy;
  }

  return result as NormalSegment;
}
