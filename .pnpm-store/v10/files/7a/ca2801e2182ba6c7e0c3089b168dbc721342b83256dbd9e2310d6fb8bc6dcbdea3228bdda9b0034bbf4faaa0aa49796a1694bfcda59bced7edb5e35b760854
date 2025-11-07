import type { Point } from '../../types';

function inside(x1: number, x2: number, y1: number, y2: number, xk: number, yk: number) {
  return (
    (x1 === x2 || (Math.min(x1, x2) <= xk && xk <= Math.max(x1, x2))) &&
    (y1 === y2 || (Math.min(y1, y2) <= yk && yk <= Math.max(y1, y2)))
  );
}
function update(ans: number[], x: number, y: number) {
  const out = ans;
  if (!ans.length || x < ans[0] || (x === ans[0] && y < ans[1])) {
    out[0] = x;
    out[1] = y;
  }
}

/**
 * 求两个线段的交点坐标
 * 参考：https://leetcode-cn.com/problems/intersection-lcci/solution/jiao-dian-by-leetcode-solution/
 */
export function intersection([x1, y1]: Point, [x2, y2]: Point, [x3, y3]: Point, [x4, y4]: Point) {
  const ans: number[] = [];
  // 若两直线平行
  if ((y4 - y3) * (x2 - x1) === (y2 - y1) * (x4 - x3)) {
    // 若两线段有重合
    if ((y2 - y1) * (x3 - x1) === (y3 - y1) * (x2 - x1)) {
      // 分别判断四个点
      if (inside(x1, x2, y1, y2, x3, y3)) {
        update(ans, x3, y3);
      }
      if (inside(x1, x2, y1, y2, x4, y4)) {
        update(ans, x4, y4);
      }
      if (inside(x3, x4, y3, y4, x1, y1)) {
        update(ans, x1, y1);
      }
      if (inside(x3, x4, y3, y4, x2, y2)) {
        update(ans, x2, y2);
      }
    }
  } else {
    // 联立方程得到 t1 和 t2 的值
    const t1 =
      (x3 * (y4 - y3) + y1 * (x4 - x3) - y3 * (x4 - x3) - x1 * (y4 - y3)) /
      ((x2 - x1) * (y4 - y3) - (x4 - x3) * (y2 - y1));
    const t2 =
      (x1 * (y2 - y1) + y3 * (x2 - x1) - y1 * (x2 - x1) - x3 * (y2 - y1)) /
      ((x4 - x3) * (y2 - y1) - (x2 - x1) * (y4 - y3));
    // 判断 t1 和 t2 是否均在 [0, 1] 之间
    if (t1 >= 0.0 && t1 <= 1.0 && t2 >= 0.0 && t2 <= 1.0) {
      ans[0] = x1 + t1 * (x2 - x1);
      ans[1] = y1 + t1 * (y2 - y1);
    }
  }
  return ans;
}
