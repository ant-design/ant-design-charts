import { deepMix, identity } from '@antv/util';
import { mat4, vec4 } from 'gl-matrix';
import { Vector3, Vector, Transform3D, Options3D, Transformation3D, Transformer3D, Matrix4, Vector4 } from './type';
import { compose, isMatrix, extend3D } from './utils';
import { cartesian3D, translate3D, scale3D, transpose3D } from './transforms';

export class Coordinate3D {
  // 所有变换合成后的函数
  private output: Transform3D;

  // 所有变换合成后的逆函数
  private input: Transform3D;

  // 当前的选项
  private options: Options3D = {
    x: 0,
    y: 0,
    z: 0,
    width: 300,
    height: 150,
    depth: 150,
    transformations: [],
  };

  // 当前可以使用的变换
  private transformers = {
    cartesian3D,
    translate3D,
    scale3D,
    transpose3D,
  };

  /**
   * Create a new Coordinate Object.
   * @param options Custom options
   */
  constructor(options?: Partial<Options3D>) {
    this.update(options);
  }

  /**
   * Update options and inner state.
   * @param options Options to be updated
   */
  public update(options: Partial<Options3D>) {
    this.options = deepMix({}, this.options, options);
    this.recoordinate();
  }

  /**
   * Returns a new Coordinate with same options.
   * @returns Coordinate
   */
  public clone() {
    return new Coordinate3D(this.options);
  }

  /**
   * Returns current options.
   * @returns options
   */
  public getOptions() {
    return this.options;
  }

  /**
   * Clear transformations and update.
   */
  public clear() {
    this.update({
      transformations: [],
    });
  }

  /**
   * Returns the size of the bounding box of the coordinate.
   * @returns [width, height, depth]
   */
  public getSize(): [number, number, number] {
    const { width, height, depth } = this.options;
    return [width, height, depth];
  }

  /**
   * Returns the center of the bounding box of the coordinate.
   * @returns [centerX, centerY, centerZ]
   */
  public getCenter(): [number, number, number] {
    const { x, y, z, width, height, depth } = this.options;
    return [(x * 2 + width) / 2, (y * 2 + height) / 2, (z * 2 + depth) / 2];
  }

  /**
   * Add selected transformation.
   * @param args transform type and params
   * @returns Coordinate
   */
  public transform(...args: Transformation3D) {
    const { transformations } = this.options;
    this.update({
      transformations: [...transformations, [...args]],
    });
    return this;
  }

  /**
   * Apples transformations for the current vector.
   * @param vector original vector3
   * @returns transformed vector3
   */
  public map(vector: Vector3 | Vector) {
    return this.output(vector);
  }

  /**
   * Apples invert transformations for the current vector.
   * @param vector transformed vector3
   * @param vector original vector3
   */
  public invert(vector: Vector3 | Vector) {
    return this.input(vector);
  }

  private recoordinate() {
    this.output = this.compose();
    this.input = this.compose(true);
  }

  // 将所有的变换合成一个函数
  // 变换有两种类型：矩阵变换和函数变换
  // 处理过程中需要把连续的矩阵变换合成一个变换函数，然后在和其他变换函数合成最终的变换函数
  private compose(invert = false) {
    const transformations = invert ? [...this.options.transformations].reverse() : this.options.transformations;
    const getter = invert ? (d: Transformer3D) => d.untransform : (d: Transformer3D) => d.transform;
    const matrixes = [];
    const transforms = [];
    const add = (transform: Transform3D, extended = true) =>
      transforms.push(extended ? extend3D(transform) : transform);

    for (const [name, ...args] of transformations) {
      const createTransformer = this.transformers[name];
      if (createTransformer) {
        const { x, y, z, width, height, depth } = this.options;
        const transformer = createTransformer([...args], x, y, z, width, height, depth);

        if (isMatrix(transformer)) {
          // 如果当前变换是矩阵变换，那么先保存下来
          matrixes.push(transformer);
        } else {
          // 如果当前变换是函数变换，并且之前有没有合成的矩阵变换，那么现将之前的矩阵变换合成
          if (matrixes.length) {
            const transform = this.createMatrixTransform(matrixes, invert);
            add(transform);
            matrixes.splice(0, matrixes.length);
          }
          const transform = getter(transformer as Transformer3D) || identity;
          add(transform, true);
        }
      }
    }

    // 合成剩下的矩阵变换
    if (matrixes.length) {
      const transform = this.createMatrixTransform(matrixes, invert);
      add(transform);
    }

    return compose<Vector3 | Vector>(...transforms);
  }

  // 将连续的矩阵的运算合成一个变换函数
  private createMatrixTransform(matrixes: Matrix4[], invert: boolean): Transform3D {
    const matrix = mat4.create();
    if (invert) matrixes.reverse();
    matrixes.forEach((m) => mat4.mul(matrix, matrix, m));
    if (invert) {
      mat4.invert(matrix, mat4.clone(matrix));
    }
    return (vector: Vector3): Vector3 => {
      const vector4: Vector4 = [vector[0], vector[1], vector[2], 1];

      vec4.transformMat4(vector4, vector4, matrix);
      return [vector4[0], vector4[1], vector4[2]];
    };
  }
}
