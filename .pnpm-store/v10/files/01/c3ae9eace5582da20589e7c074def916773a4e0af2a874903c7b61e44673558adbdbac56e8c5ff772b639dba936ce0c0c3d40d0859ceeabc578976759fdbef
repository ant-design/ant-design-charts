import { deepMix, identity } from '@antv/util';
import { mat3, vec3 } from 'gl-matrix';
import { Options, Transformation, Transform, Transformer, Matrix3, Vector3, Vector2, Vector } from './type';
import { compose, isMatrix, extend } from './utils';
import {
  cartesian,
  translate,
  custom,
  matrix,
  polar,
  transpose,
  scale,
  shearX,
  shearY,
  reflect,
  reflectX,
  reflectY,
  rotate,
  helix,
  parallel,
  fisheye,
  fisheyeX,
  fisheyeY,
  fisheyeCircular,
} from './transforms';

export class Coordinate {
  // 所有变换合成后的函数
  private output: Transform;

  // 所有变换合成后的逆函数
  private input: Transform;

  // 当前的选项
  private options: Options = {
    x: 0,
    y: 0,
    width: 300,
    height: 150,
    transformations: [],
  };

  // 当前可以使用的变换
  private transformers = {
    cartesian,
    translate,
    custom,
    matrix,
    polar,
    transpose,
    scale,
    'shear.x': shearX,
    'shear.y': shearY,
    reflect,
    'reflect.x': reflectX,
    'reflect.y': reflectY,
    rotate,
    helix,
    parallel,
    fisheye,
    'fisheye.x': fisheyeX,
    'fisheye.y': fisheyeY,
    'fisheye.circular': fisheyeCircular,
  };

  /**
   * Create a new Coordinate Object.
   * @param options Custom options
   */
  constructor(options?: Partial<Options>) {
    this.update(options);
  }

  /**
   * Update options and inner state.
   * @param options Options to be updated
   */
  public update(options: Partial<Options>) {
    this.options = deepMix({}, this.options, options);
    this.recoordinate();
  }

  /**
   * Returns a new Coordinate with same options.
   * @returns Coordinate
   */
  public clone() {
    return new Coordinate(this.options);
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
   * @returns [width, height]
   */
  public getSize(): [number, number] {
    const { width, height } = this.options;
    return [width, height];
  }

  /**
   * Returns the center of the bounding box of the coordinate.
   * @returns [centerX, centerY, centerZ]
   */
  public getCenter(): [number, number] {
    const { x, y, width, height } = this.options;
    return [(x * 2 + width) / 2, (y * 2 + height) / 2];
  }

  /**
   * Add selected transformation.
   * @param args transform type and params
   * @returns Coordinate
   */
  public transform(...args: Transformation) {
    const { transformations } = this.options;
    this.update({
      transformations: [...transformations, [...args]],
    });
    return this;
  }

  /**
   * Apples transformations for the current vector.
   * @param vector original vector2
   * @returns transformed vector2
   */
  public map(vector: Vector2 | Vector) {
    return this.output(vector);
  }

  /**
   * Apples invert transformations for the current vector.
   * @param vector transformed vector2
   * @param vector original vector2
   */
  public invert(vector: Vector2 | Vector) {
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
    const getter = invert ? (d: Transformer) => d.untransform : (d: Transformer) => d.transform;
    const matrixes = [];
    const transforms = [];
    const add = (transform: Transform, extended = true) => transforms.push(extended ? extend(transform) : transform);

    for (const [name, ...args] of transformations) {
      const createTransformer = this.transformers[name];
      if (createTransformer) {
        const { x, y, width, height } = this.options;
        const transformer = createTransformer([...args], x, y, width, height);
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
          const transform = getter(transformer) || identity;
          add(transform, name !== 'parallel'); // 对于非平行坐标系的变换需要扩展
        }
      }
    }

    // 合成剩下的矩阵变换
    if (matrixes.length) {
      const transform = this.createMatrixTransform(matrixes, invert);
      add(transform);
    }

    return compose<Vector2 | Vector>(...transforms);
  }

  // 将连续的矩阵的运算合成一个变换函数
  private createMatrixTransform(matrixes: Matrix3[], invert: boolean): Transform {
    const matrix = mat3.create();
    if (invert) matrixes.reverse();
    matrixes.forEach((m) => mat3.mul(matrix, matrix, m));
    if (invert) {
      mat3.invert(matrix, mat3.clone(matrix));
    }
    return (vector: Vector2): Vector2 => {
      const vector3: Vector3 = [vector[0], vector[1], 1];
      vec3.transformMat3(vector3, vector3, matrix);
      return [vector3[0], vector3[1]];
    };
  }
}
