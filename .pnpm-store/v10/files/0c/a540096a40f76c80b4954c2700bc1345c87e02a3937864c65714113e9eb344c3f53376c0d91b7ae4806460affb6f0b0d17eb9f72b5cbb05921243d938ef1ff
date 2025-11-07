type PointObjectNotation = { x: number; y: number };
type PointArrayNotation = [number, number];

declare module 'transformation-matrix' {
  type Matrix = {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
  };

  type MatrixDescriptor =
    | { type: 'matrix', a: number, b: number, c: number, d: number, e: number, f: number }
    | { type: 'translate', tx: number, ty: number }
    | { type: 'scale', sx: number, sy: number }
    | { type: 'rotate', angle: number, sx: number, sy: number }
    | { type: 'skewX', angle: number }
    | { type: 'skewY', angle: number }
    | { type: 'shear', shx: number, shy: number }

  type Point = PointObjectNotation | PointArrayNotation;

  export { Point, Matrix, MatrixDescriptor };
}

declare module 'transformation-matrix/applyToPoint' {
  import { Point, Matrix } from 'transformation-matrix';

  /** Calculate a point transformed with an affine matrix */
  export function applyToPoint<P extends Point>(
    matrix: Matrix,
    point: P,
  ): P extends PointObjectNotation ? PointObjectNotation : PointArrayNotation;
  /** Calculate an array of points transformed with an affine matrix */
  export function applyToPoints<P extends Point>(
    matrix: Matrix,
    points: P[],
  ): P extends PointObjectNotation ? PointObjectNotation[] : PointArrayNotation[];
}

declare module 'transformation-matrix/fromString' {
  import { Matrix } from 'transformation-matrix';

  /** Parse a string matrix formatted as `matrix(a,b,c,d,e,f)` */
  export function fromString(str: string): Matrix;
}

declare module 'transformation-matrix/fromObject' {
  import { Point, Matrix } from 'transformation-matrix';

  /**
   * Extract an affine matrix from an object that contains a,b,c,d,e,f keys.
   * Each value could be a float or a string that contains a float
   */
  export function fromObject(object: {
    a: string | number;
    b: string | number;
    c: string | number;
    d: string | number;
    e: string | number;
    f: string | number;
  }): Matrix;
}

declare module 'transformation-matrix/identity' {
  import { Matrix } from 'transformation-matrix';

  /** Identity matrix */
  export function identity(): Matrix;
}

declare module 'transformation-matrix/inverse' {
  import { Matrix } from 'transformation-matrix';

  /** Calculate a matrix that is the inverse of the provided matrix */
  export function inverse(matrix: Matrix): Matrix;
}

declare module 'transformation-matrix/isAffineMatrix' {
  import { Matrix } from 'transformation-matrix';

  /** Check if the object contain an affine matrix */
  export function isAffineMatrix(obj: object): boolean;
}

declare module 'transformation-matrix/rotate' {
  import { Matrix } from 'transformation-matrix';

  /**
   * Calculate a rotation matrix
   * @param angle Angle in radians
   * @param cx If (cx,cy) are supplied the rotate is about this point
   * @param cy If (cx,cy) are supplied the rotate is about this point
   */
  export function rotate(angle: number, cx?: number, cy?: number): Matrix;
  /** Calculate a rotation matrix with a DEG angle
   * @param angle Angle in degree
   * @param cx If (cx,cy) are supplied the rotate is about this point
   * @param cy If (cx,cy) are supplied the rotate is about this point*/
  export function rotateDEG(angle: number, cx?: number, cy?: number): Matrix;
}

declare module 'transformation-matrix/scale' {
  import { Matrix } from 'transformation-matrix';

  /**
   * Calculate a scaling matrix
   * @param sx {number} Scaling on axis x
   * @param [sy = sx] {number} Scaling on axis y (default `sx`)
   * @param [cx] {number} If (cx,cy) are supplied the scale is relative to this point
   * @param [cy] {number} If (cx,cy) are supplied the scale is relative to this point
   * @returns {Matrix} Affine Matrix
   */
  export function scale(sx: number, sy?: number, cx?: number, cy?: number): Matrix;
}

declare module 'transformation-matrix/shear' {
  import { Matrix } from 'transformation-matrix';

  /** Calculate a shear matrix */
  export function shear(shx: number, shy: number): Matrix;
}

declare module 'transformation-matrix/skew' {
  import { Matrix } from 'transformation-matrix';

  /** Calculate a skew matrix */
  export function skew(ax: number, ay: number): Matrix;
}

declare module 'transformation-matrix/toString' {
  import { Matrix } from 'transformation-matrix';

  /**
   * Serialize the matrix to a string that can be used with CSS or SVG
   * @returns {string} String that contains a matrix formatted as `matrix(a,b,c,d,e,f)`
   */
  export function toSVG(matrix: Matrix): string;
  /**
   * Serialize the matrix to a string that can be used with CSS or SVG
   * @returns {string} String that contains a matrix formatted as `matrix(a,b,c,d,e,f)`
   */
  export function toCSS(matrix: Matrix): string;
  /**
   * Serialize the matrix to a string that can be used with CSS or SVG
   * @returns {string} String that contains a matrix formatted as `matrix(a,b,c,d,e,f)`
   */
  export function toString(matrix: Matrix): string;
}

declare module 'transformation-matrix/transform' {
  import { Matrix } from 'transformation-matrix';

  /** Merge multiple matrices into one */
  export function transform(matrices: Matrix[]): Matrix;
  export function transform(...matrices: Matrix[]): Matrix;

  /** Merge multiple matrices into one */
  export function compose(matrices: Matrix[]): Matrix;
  export function compose(...matrices: Matrix[]): Matrix;
}

declare module 'transformation-matrix/translate' {
  import { Matrix } from 'transformation-matrix';

  /**
   * Calculate a translate matrix
   * @param tx Translation on axis x
   * @param ty Translation on axis y (default `0`)
   */
  export function translate(tx: number, ty?: number): Matrix;
}

declare module 'transformation-matrix/fromTriangles' {
  import { Point, Matrix } from 'transformation-matrix';

  /**
   * Returns a matrix that transforms a triangle t1 into another triangle t2, or throws an exception if it is impossible.
   * @param t1 an array of points containing the three points for the first triangle
   * @param t2 an array of points containing the three points for the second triangle
   * @returns Affine matrix which transforms t1 to t2
   * @throws Exception if the matrix becomes not invertible
   */
  export function fromTriangles(t1: Array<Point>, t2: Array<Point>): Matrix;
}

declare module 'transformation-matrix/smoothMatrix' {
  import { Matrix } from 'transformation-matrix';

  /**
   * Rounds all elements of the given matrix using the given precision
   * @param m  a matrix to round
   * @param precision precision to use for Math.round. Defaults to 10000000000 (meaning which rounds to the 10th digit after the comma).
   * @returns  the rounded matrix
   */
  export function smoothMatrix(m: Matrix, precision?: number): Matrix;
}

declare module 'transformation-matrix/fromDefinition' {
  import { Point, Matrix, MatrixDescriptor } from 'transformation-matrix';

  /**
   * Converts array of matrix descriptor to array of matrix
   * @param definitionOrArrayOfDefinition {Object[]} Array of object describing the matrix
   * @returns {Matrix[]} Array of matrix
   *
   * @example
   * > fromDefinition([
   *  { type: 'matrix', a:1, b:2, c:3, d:4, e:5, f:6 },
   *  { type: 'translate', tx: 10, ty: 20 },
   *  { type: 'scale', sx: 2, sy: 4 },
   *  { type: 'rotate', angle: 90, sx: 50, sy: 25 },
   *  { type: 'skewX', angle: 45 },
   *  { type: 'skewY',  angle: 45 },
   *  { type: 'shear', shx: 10, shy: 20}
   * ])
   *
   * [
   *  { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 },
   *  { a: 1, c: 0, e: 10, b: 0, d: 1, f: 20 },
   *  { a: 2, c: 0, e: 0, b: 0, d: 4, f: 0 },
   *  { a: 6.123, c: -1, e: 0, b: 1, d: 6.123, f: 0 },
   *  { a: 1, c: 0.99.., e: 0, b: 0, d: 1, f: 0 },
   *  { a: 1, c: 0, e: 0, b: 0.99, d: 1, f: 0 },
   *  { a: 1, c: 10, e: 0, b: 20, d: 1, f: 0 }
   * ]
   **/
  export function fromDefinition(definition: MatrixDescriptor): Matrix;
  export function fromDefinition(
    arrayOfDefinition: MatrixDescriptor[]
  ): Matrix[];
}

declare module 'transformation-matrix/fromTransformAttribute' {
  import { MatrixDescriptor } from 'transformation-matrix';
  /**
   * Parser for SVG Trasform Attribute http://www.w3.org/TR/SVG/coords.html#TransformAttribute <br/>
   * Warning: This should be considered BETA until it is released a stable version of pegjs.
   * @param transformString {string} Transform string as defined by w3 Consortium
   * @returns {MatrixDescriptor[]} Array of MatrixDescriptor
   *
   * @example
   * > fromTransformAttribute('translate(-10,-10) scale(2,2) translate(10,10)')
   * [
   *  { type: 'translate', tx: -10, ty: -10},
   *  { type: 'scale', sx: 2, sy: 2 },
   *  { type: 'translate', tx: 10, ty: 10}
   * ]
   *
   * > compose(fromDefinition(fromTransformAttribute('translate(-10, -10) scale(10, 10)')))
   * { a: 10, c: 0, e: -10, b: 0, d: 10, f: -10 }
   */
  export function fromTransformAttribute(transformString: string): MatrixDescriptor[];
}

declare module 'transformation-matrix/decompose' {
  import { Matrix } from 'transformation-matrix';

  export interface Transform {
    translate: {
      tx: number,
      ty: number
    },
    rotation: { angle: number },
    scale: {
      sx: number,
      sy: number
    }
  }

  /**
   * Decompose a matrix into translation, scaling and rotation components, optionally 
   * take horizontal and vertical flip in to consideration.
   * Note this function decomposes a matrix in rotation -> scaling -> translation order. I.e. for
   * certain translation T {tx, ty}, rotation R and scaling S { sx, sy }, it's only true for:
   *  decomposeTSR(compose(T, S, R)) === { translate: T, rotation: R, scale: S }
   * composing in a different order may yield a different decomposition result.
   * @param matrix {Matrix} Affine Matrix
   * @param  flipX {boolean} Whether the matrix contains vertical flip, i.e. mirrors on x-axis
   * @param  flipY {boolean} Whether the matrix contains horizontal flip, i.e. mirrors on y-axis
   * @returns {Transform} A transform object consisted by its translation, scaling 
   * and rotation components.
   */
  export function decomposeTSR(matrix: Matrix, flipX?: boolean, flipY?: boolean): Transform;
}

declare module 'transformation-matrix/flip' {
  import { Matrix } from 'transformation-matrix';

  /**
   * Tranformation matrix that mirrors on x-axis
   */
  export function flipX(): Matrix;

  /**
   * Tranformation matrix that mirrors on y-axis
   */
  export function flipY(): Matrix;

  /**
   * Tranformation matrix that mirrors on origin
   */
  export function flipOrigin(): Matrix;
}

declare module 'transformation-matrix/fromMovingPoints' {
  import { Point, Matrix } from 'transformation-matrix';

  /**
   * Calculate a transformation matrix from a point that starts from A to A' (e.g. desktop gesture)
   */
  export function fromOneMovingPoint (startingPoint: Point, endingPoint: Point): Matrix;

  /**
   * Calculate a transformation matrix about two points that move from positions A and B to A' and B' (e.g. mobile gesture)
   */
  export function fromTwoMovingPoints (startingPoint1: Point, startingPoint2: Point, endingPoint1: Point, endingPoint2: Point): Matrix;
}

declare module 'transformation-matrix' {
  export * from 'transformation-matrix/applyToPoint';
  export * from 'transformation-matrix/fromObject';
  export * from 'transformation-matrix/fromString';
  export * from 'transformation-matrix/identity';
  export * from 'transformation-matrix/inverse';
  export * from 'transformation-matrix/isAffineMatrix';
  export * from 'transformation-matrix/rotate';
  export * from 'transformation-matrix/scale';
  export * from 'transformation-matrix/skew';
  export * from 'transformation-matrix/shear';
  export * from 'transformation-matrix/toString';
  export * from 'transformation-matrix/transform';
  export * from 'transformation-matrix/translate';
  export * from 'transformation-matrix/fromTriangles';
  export * from 'transformation-matrix/smoothMatrix';
  export * from 'transformation-matrix/fromDefinition';
  export * from 'transformation-matrix/fromTransformAttribute';
  export * from 'transformation-matrix/decompose';
  export * from 'transformation-matrix/flip';
  export * from 'transformation-matrix/fromMovingPoints';
}
