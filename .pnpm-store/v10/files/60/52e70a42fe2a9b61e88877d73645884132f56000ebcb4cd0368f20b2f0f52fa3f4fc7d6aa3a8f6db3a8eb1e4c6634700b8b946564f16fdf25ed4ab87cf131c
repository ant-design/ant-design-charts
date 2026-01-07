export function quadToCubic(x1: number, y1: number, qx: number, qy: number, x2: number, y2: number) {
  const r13 = 1 / 3;
  const r23 = 2 / 3;
  return [
    r13 * x1 + r23 * qx, // cpx1
    r13 * y1 + r23 * qy, // cpy1
    r13 * x2 + r23 * qx, // cpx2
    r13 * y2 + r23 * qy, // cpy2
    x2,
    y2, // x,y
  ];
}
