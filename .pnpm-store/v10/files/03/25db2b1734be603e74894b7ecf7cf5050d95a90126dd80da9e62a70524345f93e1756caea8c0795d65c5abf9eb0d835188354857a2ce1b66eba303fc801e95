import { Transform, Transform3D, Vector } from '../type';

// 对普通的变换函数进行扩展
// 对于长度大于2的向量，两两为一个点的 x 和 y 坐标
// 依次变换后合成新的向量返回
export function extend(transform: Transform) {
  return (vector: Vector) => {
    const v = [];
    for (let i = 0; i < vector.length - 1; i += 2) {
      const from = [vector[i], vector[i + 1]];
      const to = transform(from);
      v.push(...to);
    }
    return v;
  };
}

export function extend3D(transform: Transform3D) {
  return (vector: Vector) => {
    const v = [];
    for (let i = 0; i < vector.length - 1; i += 3) {
      const from = [vector[i], vector[i + 1], vector[i + 2]];
      const to = transform(from);
      v.push(...to);
    }
    return v;
  };
}
