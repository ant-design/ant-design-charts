// FIXME: Mutable param should be forbidden in static lang.
function _mix<Base, Source>(dist: Base & Source, obj: Source): void {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && key !== 'constructor' && obj[key] !== undefined) {
      (<any>dist)[key] = obj[key];
    }
  }
}

export default function mix<Base, A, B, C>(dist: Base & A & B & C, src1?: A, src2?: B, src3?: C): Base & A & B & C {
  if (src1) _mix(dist, src1);
  if (src2) _mix(dist, src2);
  if (src3) _mix(dist, src3);
  return dist;
}
