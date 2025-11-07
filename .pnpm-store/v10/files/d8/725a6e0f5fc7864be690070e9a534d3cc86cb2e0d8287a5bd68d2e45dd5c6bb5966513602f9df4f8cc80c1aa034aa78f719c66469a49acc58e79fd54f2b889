import { Linear } from '@antv/scale';
import { Vector3, CreateTransformer3D } from '../type';

export const cartesian3D: CreateTransformer3D = (params, x, y, z, width, height, depth) => {
  const sx = new Linear({
    range: [x, x + width],
  });
  const sy = new Linear({
    range: [y, y + height],
  });
  const sz = new Linear({
    range: [z, z + depth],
  });

  return {
    transform(vector: Vector3) {
      const [v1, v2, v3] = vector;
      return [sx.map(v1), sy.map(v2), sz.map(v3)];
    },
    untransform(vector: Vector3) {
      const [v1, v2, v3] = vector;
      return [sx.invert(v1), sy.invert(v2), sz.invert(v3)];
    },
  };
};
