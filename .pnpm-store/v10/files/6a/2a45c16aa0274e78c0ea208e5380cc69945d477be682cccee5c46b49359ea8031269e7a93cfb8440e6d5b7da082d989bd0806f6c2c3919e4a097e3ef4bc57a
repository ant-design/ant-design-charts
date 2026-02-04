type MaybeMatrix = AbstractMatrix | ArrayLike<ArrayLike<number>>;
type ScalarOrMatrix = number | MaybeMatrix;
type MatrixDimension = 'row' | 'column';
type MaskValue = 0 | 1 | number | boolean;
/**
 * allow use of numbers (only 0 is considered false) and booleans
 */
type Mask = MaskValue[];

export interface IRandomOptions {
  /**
   * Random number generator.
   * @default `Math.random`
   */
  random: () => number;
}
export interface IRandomIntOptions {
  /**
   * Minimum value.
   * @default `0`
   */
  min: number;

  /**
   * Maximum value.
   * @default `1000`
   */
  max: number;

  /**
   * Random number generator.
   * @default `Math.random`
   */
  random: () => number;
}
export interface IRepeatOptions {
  /**
   * Number of times the rows should be repeated.
   * @default `1`
   */
  rows?: number;

  /**
   * Number of times the columns should be repeated.
   * @default `1`
   */
  columns?: number;
}
export interface IScaleOptions {
  /**
   * Minimum scaled value.
   * @default `0`
   */
  min?: number;
  /**
   * Maximum scaled value.
   * @default `1`
   */
  max?: number;
}
export interface IVarianceOptions {
  unbiased?: boolean;
  mean?: number;
}
export interface IVarianceByOptions {
  unbiased?: boolean;
  mean?: ArrayLike<number>;
}

export interface ICenterOptions {
  center?: number;
}
export interface ICenterByOptions {
  center?: ArrayLike<number>;
}

export interface IScaleOptions {
  scale?: number;
}
export interface IScaleByOptions {
  scale?: ArrayLike<number>;
}

export interface ICovarianceOptions {
  /**
   * @default `true`
   */
  center?: boolean;
}

export interface ICorrelationOptions {
  /**
   * @default `true`
   */
  center?: boolean;
  /**
   * @default `true`
   */
  scale?: boolean;
}

export interface IToStringOptions {
  /**
   * Maximum number of printed rows.
   * @default `15`
   */
  maxRows?: number;
  /**
   * Maximum number of printed columns.
   * @default `10`
   */
  maxColumns?: number;
  /**
   * Maximum size (number of characters) of printed numbers.
   * @default `8`
   */
  maxNumSize?: number;
  /**
   * Place minus signs in their own column.
   * @default `'auto'`
   */
  padMinus?: true | false | 'auto';
}

export abstract class AbstractMatrix {
  /**
   * Total number of elements in the matrix.
   */
  readonly size: number;

  /**
   * Number of rows of the matrix.
   */
  readonly rows: number;

  /**
   * Number of columns of the matrix.
   */
  readonly columns: number;

  /**
   * Constructs a matrix with the chosen dimensions from a 1D array.
   * @param newRows - Number of rows.
   * @param newColumns - Number of columns.
   * @param newData - A 1D array containing data for the matrix.
   * @returns The new matrix.
   */
  static from1DArray(
    newRows: number,
    newColumns: number,
    newData: ArrayLike<number>,
  ): Matrix;

  /**
   * Creates a row vector, a matrix with only one row.
   * @param newData - A 1D array containing data for the vector.
   * @returns The new matrix.
   */
  static rowVector(newData: ArrayLike<number>): Matrix;

  /**
   * Creates a column vector, a matrix with only one column.
   * @param newData - A 1D array containing data for the vector.
   * @returns The new matrix.
   */
  static columnVector(newData: ArrayLike<number>): Matrix;

  /**
   * Creates a matrix with the given dimensions. Values will be set to zero.
   * This is equivalent to calling the Matrix constructor.
   * @param rows - Number of rows.
   * @param columns - Number of columns.
   * @template _M is private. Don't override it.
   * @returns The new matrix.
   */
  static zeros<_M extends AbstractMatrix = Matrix>(
    rows: number,
    columns: number,
  ): _M;

  /**
   * Creates a matrix with the given dimensions. Values will be set to one.
   * @param rows - Number of rows.
   * @param columns - Number of columns.
   * @returns The new matrix.
   */
  static ones<M extends AbstractMatrix = Matrix>(
    rows: number,
    columns: number,
  ): M;

  /**
   * Creates a matrix with the given dimensions. Values will be randomly set.
   * @param rows - Number of rows.
   * @param columns - Number of columns.
   * @param options - Options object.
   * @returns The new matrix.
   */
  static rand(rows: number, columns: number, options?: IRandomOptions): Matrix;
  static random(
    rows: number,
    columns: number,
    options?: IRandomOptions,
  ): Matrix;

  /**
   * Creates a matrix with the given dimensions. Values will be random integers.
   * @param rows - Number of rows.
   * @param columns - Number of columns.
   * @param options
   * @returns - The new matrix.
   */
  static randInt(
    rows: number,
    columns: number,
    options?: IRandomIntOptions,
  ): Matrix;

  /**
   * Creates an identity matrix with the given dimension. Values of the diagonal will be 1 and others will be 0.
   * @param rows - Number of rows.
   * @param columns - Number of columns. Default: `rows`.
   * @param value - Value to fill the diagonal with. Default: `1`.
   * @returns - The new identity matrix.
   */
  static eye(rows: number, columns?: number, value?: number): Matrix;

  /**
   * Alias for {@link AbstractMatrix.eye}.
   */
  static identity(rows: number, columns?: number, value?: number): Matrix;

  /**
   * Creates a diagonal matrix based on the given array.
   * @param data - Array containing the data for the diagonal.
   * @param rows - Number of rows. Default: `data.length`.
   * @param columns - Number of columns. Default: `rows`.
   * @returns - The new diagonal matrix.
   */
  static diag(data: ArrayLike<number>, rows?: number, columns?: number): Matrix;

  /**
   * Alias for {@link AbstractMatrix.diag}.
   */
  static diagonal(
    data: ArrayLike<number>,
    rows?: number,
    columns?: number,
  ): Matrix;

  /**
   * Returns a matrix whose elements are the minimum between `matrix1` and `matrix2`.
   */
  static min(matrix1: MaybeMatrix, matrix2: MaybeMatrix): Matrix;

  /**
   * Returns a matrix whose elements are the maximum between `matrix1` and `matrix2`.
   * @param matrix1
   * @param matrix2
   */
  static max(matrix1: MaybeMatrix, matrix2: MaybeMatrix): Matrix;

  /**
   * Check that the provided value is a Matrix and tries to instantiate one if not.
   * @param value - The value to check.
   */
  static checkMatrix(value: any): Matrix;

  /**
   * Returns whether `value` is a Matrix.
   * @param value - The value to check.
   */
  static isMatrix(value: any): value is AbstractMatrix;

  /**
   * Sets a given element of the matrix.
   * @param rowIndex - Index of the element's row.
   * @param columnIndex - Index of the element's column.
   * @param value - The new value for the element.
   */
  abstract set(rowIndex: number, columnIndex: number, value: number): this;

  /**
   * Returns the value of the given element of the matrix.
   * @param rowIndex - Index of the element's row.
   * @param columnIndex - Index of the element's column.
   * @returns - The value of the element.
   */
  abstract get(rowIndex: number, columnIndex: number): number;

  /**
   * Applies a callback for each element of the matrix. The function is called in the matrix (this) context.
   * @param callback - Function that will be called for each element in the matrix.
   */
  apply(callback: (row: number, column: number) => void): this;

  /**
   * Returns a new 1D array filled row by row with the matrix values.
   */
  to1DArray(): number[];

  /**
   * Returns a 2D array containing a copy of the matrix data.
   */
  to2DArray(): number[][];

  toJSON(): number[][];

  /**
   * Returns whether the matrix has one row.
   */
  isRowVector(): boolean;

  /**
   * Returns whether the matrix has one column.
   */
  isColumnVector(): boolean;

  /**
   * Returns whether the matrix has one row or one column.
   */
  isVector(): boolean;

  /**
   * Returns whether the matrix has the same number of rows and columns.
   */
  isSquare(): boolean;

  /**
   * Returns whether the matrix is symmetric and diagonal values are equals to 0
   */
  isDistance(): boolean;

  /**
   * Returns whether the number of rows or columns (or both) is zero.
   */
  isEmpty(): boolean;

  /**
   * Returns whether the matrix is square and has the same values on both sides of the diagonal.
   */
  isSymmetric(): boolean;

  /**
   * Returns whether the matrix is in row echelon form.
   */
  isEchelonForm(): boolean;

  /**
   * Returns whether the matrix is in reduced row echelon form.
   */
  isReducedEchelonForm(): boolean;

  /**
   * Returns the row echelon form of the matrix computed using gaussian
   * elimination.
   */
  echelonForm(): Matrix;

  /**
   * Returns the reduced row echelon form of the matrix computed using
   * gaussian elimination.
   */
  reducedEchelonForm(): Matrix;

  /**
   * Creates a new matrix that is a repetition of the current matrix. New matrix has rows times the number of
   * rows of the original matrix, and columns times the number of columns of the original matrix.
   *
   * @example
   * var matrix = new Matrix([[1, 2]]);
   * matrix.repeat({ rows: 2 }); // [[1, 2], [1, 2]]
   */
  repeat(options?: IRepeatOptions): Matrix;

  /**
   * Fills the matrix with a given value. All elements will be set to this value.
   * @param value - New value.
   */
  fill(value: number): this;

  /**
   * Negates the matrix. All elements will be multiplied by `-1`.
   */
  neg(): this;

  /**
   * Alias for {@link AbstractMatrix.neg}.
   */
  negate(): this;

  /**
   * Returns a new array with the values from the given row index.
   * @param index - Row index.
   */
  getRow(index: number): number[];

  /**
   * Returns a new row vector with the values from the given row index.
   * @param index - Row index.
   */
  getRowVector(index: number): Matrix;

  /**
   * Sets a row at the given index.
   * @param index - Row index.
   * @param array - Array or vector to set.
   */
  setRow(index: number, array: ArrayLike<number> | AbstractMatrix): this;

  /**
   * Swap two rows.
   * @param row1 - First row index.
   * @param row2 - Second row index.
   */
  swapRows(row1: number, row2: number): this;

  /**
   * Returns a new array with the values from the given column index.
   * @param index - Column index.
   */
  getColumn(index: number): number[];

  /**
   * Returns a new column vector with the values from the given column index.
   * @param index - Column index.
   */
  getColumnVector(index: number): Matrix;

  /**
   * Sets a column at the given index.
   * @param index - Column index.
   * @param array - Array or vector to set.
   */
  setColumn(index: number, array: ArrayLike<number> | AbstractMatrix): this;

  /**
   * Swap two columns.
   * @param column1 - First column index.
   * @param column2 - Second column index.
   */
  swapColumns(column1: number, column2: number): this;

  /**
   * Adds the values of a vector to each row.
   * @param vector - Array or vector.
   */
  addRowVector(vector: ArrayLike<number> | AbstractMatrix): this;

  /**
   * Subtracts the values of a vector from each row.
   * @param vector - Array or vector.
   */
  subRowVector(vector: ArrayLike<number> | AbstractMatrix): this;

  /**
   * Multiplies the values of a vector with each row.
   * @param vector - Array or vector.
   */
  mulRowVector(vector: ArrayLike<number> | AbstractMatrix): this;

  /**
   * Divides the values of each row by those of a vector.
   * @param vector - Array or vector.
   */
  divRowVector(vector: ArrayLike<number> | AbstractMatrix): this;

  /**
   * Adds the values of a vector to each column.
   * @param vector - Array or vector.
   */
  addColumnVector(vector: ArrayLike<number> | AbstractMatrix): this;

  /**
   * Subtracts the values of a vector from each column.
   * @param vector - Array or vector.
   */
  subColumnVector(vector: ArrayLike<number> | AbstractMatrix): this;

  /**
   * Multiplies the values of a vector with each column.
   * @param vector - Array or vector.
   */
  mulColumnVector(vector: ArrayLike<number> | AbstractMatrix): this;

  /**
   * Divides the values of each column by those of a vector.
   * @param vector - Array or vector.
   */
  divColumnVector(vector: ArrayLike<number> | AbstractMatrix): this;

  /**
   * Multiplies the values of a row with a scalar.
   * @param index - Row index.
   * @param value
   */
  mulRow(index: number, value: number): this;

  /**
   * Multiplies the values of a column with a scalar.
   * @param index - Column index.
   * @param value
   */
  mulColumn(index: number, value: number): this;

  /**
   * Returns the maximum value of the matrix.
   */
  max(): number;

  /**
   * Returns the maximum value by the given dimension.
   * @param by - max by 'row' or 'column'.
   */
  max(by: MatrixDimension): number[];

  /**
   * Returns the index of the maximum value.
   */
  maxIndex(): [number, number];

  /**
   * Returns the minimum value of the matrix.
   */
  min(): number;

  /**
   * Returns the minimum value by the given dimension.
   * @param by - min by 'row' or 'column'.
   */
  min(by: MatrixDimension): number[];

  /**
   * Returns the index of the minimum value.
   */
  minIndex(): [number, number];

  /**
   * Returns the maximum value of one row.
   * @param row - Row index.
   */
  maxRow(row: number): number;

  /**
   * Returns the index of the maximum value of one row.
   * @param row - Row index.
   */
  maxRowIndex(row: number): [number, number];

  /**
   * Returns the minimum value of one row.
   * @param row - Row index.
   */
  minRow(row: number): number;

  /**
   * Returns the index of the maximum value of one row.
   * @param row - Row index.
   */
  minRowIndex(row: number): [number, number];

  /**
   * Returns the maximum value of one column.
   * @param column - Column index.
   */
  maxColumn(column: number): number;

  /**
   * Returns the index of the maximum value of one column.
   * @param column - Column index.
   */
  maxColumnIndex(column: number): [number, number];

  /**
   * Returns the minimum value of one column.
   * @param column - Column index.
   */
  minColumn(column: number): number;

  /**
   * Returns the index of the minimum value of one column.
   * @param column - Column index.
   */
  minColumnIndex(column: number): [number, number];

  /**
   * Returns an array containing the diagonal values of the matrix.
   */
  diag(): number[];

  /**
   * Alias for {@link AbstractMatrix.diag}.
   */
  diagonal(): number[];

  /**
   * Returns the norm of a matrix.
   * @param type - Norm type. Default: `'frobenius'`.
   */
  norm(type?: 'frobenius' | 'max'): number;

  /**
   * Computes the cumulative sum of the matrix elements (in place, row by row).
   */
  cumulativeSum(): this;

  /**
   * Computes the dot (scalar) product between the matrix and another.
   * @param vector
   */
  dot(vector: AbstractMatrix): number;

  /**
   * Returns the matrix product between `this` and `other`.
   * @param other - Other matrix.
   */
  mmul(other: MaybeMatrix): Matrix;

  /**
   * Returns the square matrix raised to the given power
   * @param scalar - the non-negative integer power to raise this matrix to
   */
  mpow(scalar: number): Matrix;

  strassen2x2(other: MaybeMatrix): Matrix;

  strassen3x3(other: MaybeMatrix): Matrix;

  mmulStrassen(y: MaybeMatrix): Matrix;

  /**
   * Returns a new row-by-row scaled matrix.
   * @param options
   */
  scaleRows(options?: IScaleOptions): Matrix;

  /**
   * Returns a new column-by-column scaled matrix.
   * @param options
   * @example
   * var matrix = new Matrix([[1, 2], [-1, 0]]);
   * var scaledMatrix = matrix.scaleColumns(); // [[1, 1], [0, 0]]
   */
  scaleColumns(options?: IScaleOptions): Matrix;

  flipRows(): this;

  flipColumns(): this;

  /**
   * Returns the Kronecker product (also known as tensor product) between `this` and `other`.
   * @link https://en.wikipedia.org/wiki/Kronecker_product
   * @param other - Other matrix.
   */
  kroneckerProduct(other: MaybeMatrix): Matrix;

  /**
   * Returns the Kronecker sum between `this` and `other`.
   * @link https://en.wikipedia.org/wiki/Kronecker_product#Kronecker_sum
   * @param other - Other matrix.
   */
  kroneckerSum(other: MaybeMatrix): Matrix;

  /**
   * Alias for {@link AbstractMatrix.kroneckerProduct}.
   */
  tensorProduct(other: MaybeMatrix): Matrix;

  /**
   * Transposes the matrix and returns a new one containing the result.
   */
  transpose(): Matrix;

  /**
   * Sorts the rows in-place.
   * @param compareFunction
   */
  sortRows(compareFunction?: (a: number, b: number) => number): this;

  /**
   * Sorts the columns in-place.
   * @param compareFunction
   */
  sortColumns(compareFunction?: (a: number, b: number) => number): this;

  /**
   * Returns a subset of the matrix.
   * @param startRow - First row index.
   * @param endRow - Last row index.
   * @param startColumn - First column index.
   * @param endColumn - Last column index.
   */
  subMatrix(
    startRow: number,
    endRow: number,
    startColumn: number,
    endColumn: number,
  ): Matrix;

  /**
   * Returns a subset of the matrix based on an array of row indices.
   * @param indices - Array containing the row indices.
   * @param startColumn - First column index. Default: `0`.
   * @param endColumn - Last column index. Default: `this.columns - 1`.
   */
  subMatrixRow(
    indices: ArrayLike<number>,
    startColumn?: number,
    endColumn?: number,
  ): Matrix;

  /**
   * Returns a subset of the matrix based on an array of column indices.
   * @param indices - Array containing the column indices.
   * @param startRow - First row index. Default: `0`.
   * @param endRow - Last row index. Default: `this.rows - 1`.
   */
  subMatrixColumn(
    indices: ArrayLike<number>,
    startRow?: number,
    endRow?: number,
  ): Matrix;

  /**
   * Set a part of the matrix to the given sub-matrix.
   * @param matrix - The source matrix from which to extract values.
   * @param startRow - The index of the first row to set.
   * @param startColumn - The index of the first column to set.
   */
  setSubMatrix(
    matrix: MaybeMatrix,
    startRow: number,
    startColumn: number,
  ): this;

  /**
   * Return a new matrix based on a selection of rows and columns.
   * Order of the indices matters and the same index can be used more than once.
   * @param rowIndices - The row indices to select.
   * @param columnIndices - The column indices to select.
   */
  selection(
    rowIndices: ArrayLike<number>,
    columnIndices: ArrayLike<number>,
  ): Matrix;

  /**
   * Returns the trace of the matrix (sum of the diagonal elements).
   */
  trace(): number;

  /**
   * Creates an exact and independent copy of the matrix.
   */
  clone(): this;

  static copy<M extends AbstractMatrix>(from: AbstractMatrix, to: M): M;

  /**
   * Returns the sum of all elements of the matrix.
   */
  sum(): number;

  /**
   * Returns the sum by the given dimension.
   * @param by - sum by 'row' or 'column'.
   */
  sum(by: MatrixDimension): number[];

  /**
   * Returns the product of all elements of the matrix.
   */
  product(): number;

  /**
   * Returns the product by the given dimension.
   * @param by - product by 'row' or 'column'.
   */
  product(by: MatrixDimension): number[];

  /**
   * Returns the mean of all elements of the matrix.
   */
  mean(): number;

  /**
   * Returns the mean by the given dimension.
   * @param by - mean by 'row' or 'column'.
   */
  mean(by: MatrixDimension): number[];

  /**
   * Returns the variance of all elements of the matrix.
   * @param options
   */
  variance(options?: IVarianceOptions): number;

  /**
   * Returns the variance by the given dimension.
   * @param by - variance by 'row' or 'column'.
   * @param options
   */
  variance(by: MatrixDimension, options?: IVarianceByOptions): number[];

  /**
   * Returns the standard deviation of all elements of the matrix.
   * @param options
   */
  standardDeviation(options?: IVarianceOptions): number;

  /**
   * Returns the standard deviation by the given dimension.
   * @param by - standard deviation by 'row' or 'column'.
   * @param options
   */
  standardDeviation(
    by: MatrixDimension,
    options?: IVarianceByOptions,
  ): number[];

  /**
   * Center the matrix in-place. By default, the mean value of the matrix is
   * subtracted from every value.
   * @param options
   */
  center(options?: ICenterOptions): this;

  /**
   * Center the matrix in-place. By default, the mean values in the give
   * dimension are subtracted from the values.
   * @param by - center by 'row' or 'column'.
   * @param options
   */
  center(by: MatrixDimension, options?: ICenterByOptions): this;

  /**
   * Scale the matrix in-place. By default, values are divided by their
   * standard deviation.
   * @param options
   */
  scale(options?: IScaleOptions): this;

  /**
   * Scale the matrix in-place. By default, values are divided by the
   * standard deviation in the given dimension.
   * @param by - scale by 'row' or 'column'.
   * @param options
   */
  scale(by: MatrixDimension, options?: IScaleByOptions): this;

  toString(options?: IToStringOptions): string;

  // iterators methods

  /**
   * iterator from left to right, from top to bottom
   * yield [row, column, value]
   */
  [Symbol.iterator](): Generator<
    [row: number, column: number, value: number],
    void,
    void
    >;

  /**
   * iterator from left to right, from top to bottom
   * yield [row, column, value]
   */
  entries(): Generator<
    [row: number, column: number, value: number],
    void,
    void
  >;

  /**
   * iterator from left to right, from top to bottom
   * yield value
   */
  values(): Generator<number, void, void>;

  // From here we document methods dynamically generated from operators

  // Mathematical operators
  // inplace
  add(value: ScalarOrMatrix): this;
  sub(value: ScalarOrMatrix): this;
  subtract(value: ScalarOrMatrix): this;
  mul(value: ScalarOrMatrix): this;
  multiply(value: ScalarOrMatrix): this;
  div(value: ScalarOrMatrix): this;
  divide(value: ScalarOrMatrix): this;
  mod(value: ScalarOrMatrix): this;
  modulus(value: ScalarOrMatrix): this;
  and(value: ScalarOrMatrix): this;
  or(value: ScalarOrMatrix): this;
  xor(value: ScalarOrMatrix): this;
  leftShift(value: ScalarOrMatrix): this;
  signPropagatingRightShift(value: ScalarOrMatrix): this;
  rightShift(value: ScalarOrMatrix): this;
  zeroFillRightShift(value: ScalarOrMatrix): this;
  // new matrix
  static add(matrix: MaybeMatrix, value: ScalarOrMatrix): Matrix;
  static sub(matrix: MaybeMatrix, value: ScalarOrMatrix): Matrix;
  static subtract(matrix: MaybeMatrix, value: ScalarOrMatrix): Matrix;
  static mul(matrix: MaybeMatrix, value: ScalarOrMatrix): Matrix;
  static multiply(matrix: MaybeMatrix, value: ScalarOrMatrix): Matrix;
  static div(matrix: MaybeMatrix, value: ScalarOrMatrix): Matrix;
  static divide(matrix: MaybeMatrix, value: ScalarOrMatrix): Matrix;
  static mod(matrix: MaybeMatrix, value: ScalarOrMatrix): Matrix;
  static modulus(matrix: MaybeMatrix, value: ScalarOrMatrix): Matrix;
  static and(matrix: MaybeMatrix, value: ScalarOrMatrix): Matrix;
  static or(matrix: MaybeMatrix, value: ScalarOrMatrix): Matrix;
  static xor(matrix: MaybeMatrix, value: ScalarOrMatrix): Matrix;
  static leftShift(matrix: MaybeMatrix, value: ScalarOrMatrix): Matrix;
  static signPropagatingRightShift(
    matrix: MaybeMatrix,
    value: ScalarOrMatrix,
  ): Matrix;
  static rightShift(matrix: MaybeMatrix, value: ScalarOrMatrix): Matrix;
  static zeroFillRightShift(matrix: MaybeMatrix, value: ScalarOrMatrix): Matrix;

  // Functional operators (one arg)
  // inplace
  not(): this;
  abs(): this;
  acos(): this;
  acosh(): this;
  asin(): this;
  asinh(): this;
  atan(): this;
  atanh(): this;
  cbrt(): this;
  ceil(): this;
  clz32(): this;
  cos(): this;
  cosh(): this;
  exp(): this;
  expm1(): this;
  floor(): this;
  fround(): this;
  log(): this;
  log1p(): this;
  log10(): this;
  log2(): this;
  round(): this;
  sign(): this;
  sin(): this;
  sinh(): this;
  sqrt(): this;
  tan(): this;
  tanh(): this;
  trunc(): this;
  // new matrix
  static not(value: MaybeMatrix): Matrix;
  static abs(value: MaybeMatrix): Matrix;
  static acos(value: MaybeMatrix): Matrix;
  static acosh(value: MaybeMatrix): Matrix;
  static asin(value: MaybeMatrix): Matrix;
  static asinh(value: MaybeMatrix): Matrix;
  static atan(value: MaybeMatrix): Matrix;
  static atanh(value: MaybeMatrix): Matrix;
  static cbrt(value: MaybeMatrix): Matrix;
  static ceil(value: MaybeMatrix): Matrix;
  static clz32(value: MaybeMatrix): Matrix;
  static cos(value: MaybeMatrix): Matrix;
  static cosh(value: MaybeMatrix): Matrix;
  static exp(value: MaybeMatrix): Matrix;
  static expm1(value: MaybeMatrix): Matrix;
  static floor(value: MaybeMatrix): Matrix;
  static fround(value: MaybeMatrix): Matrix;
  static log(value: MaybeMatrix): Matrix;
  static log1p(value: MaybeMatrix): Matrix;
  static log10(value: MaybeMatrix): Matrix;
  static log2(value: MaybeMatrix): Matrix;
  static round(value: MaybeMatrix): Matrix;
  static sign(value: MaybeMatrix): Matrix;
  static sin(value: MaybeMatrix): Matrix;
  static sinh(value: MaybeMatrix): Matrix;
  static sqrt(value: MaybeMatrix): Matrix;
  static tan(value: MaybeMatrix): Matrix;
  static tanh(value: MaybeMatrix): Matrix;
  static trunc(value: MaybeMatrix): Matrix;

  // Functional operators with one arg
  // inplace
  pow(value: ScalarOrMatrix): this;
  // new matrix
  static pow(matrix: MaybeMatrix, value: ScalarOrMatrix): Matrix;
}

export class Matrix extends AbstractMatrix {
  constructor(nRows: number, nColumns: number);
  constructor(data: ArrayLike<ArrayLike<number>>);
  constructor(otherMatrix: AbstractMatrix);

  set(rowIndex: number, columnIndex: number, value: number): this;
  get(rowIndex: number, columnIndex: number): number;

  /**
   * Removes a column from the matrix (in place).
   * @param index - Column index.
   */
  removeColumn(index: number): this;

  /**
   * Removes a row from the matrix (in place).
   * @param index - Row index.
   */
  removeRow(index: number): this;

  /**
   * Adds a new column to the matrix (in place).
   * @param index - Column index. Default: `this.columns`.
   * @param array - Column to add.
   */
  addColumn(index: number, array: ArrayLike<number> | AbstractMatrix): this;
  addColumn(array: ArrayLike<number> | AbstractMatrix): this;

  /**
   * Adds a new row to the matrix (in place).
   * @param index - Row index. Default: `this.rows`.
   * @param array - Row to add.
   */
  addRow(index: number, array: ArrayLike<number> | AbstractMatrix): this;
  addRow(array: ArrayLike<number> | AbstractMatrix): this;
}

export default Matrix;

export class SymmetricMatrix extends AbstractMatrix {
  /**
   * alias for `rows` or `columns` (square matrix so equals)
   */
  readonly diagonalSize: number;

  /**
   * @throws TypeError if otherMatrix is not symmetric
   * @param otherMatrix
   */
  constructor(otherMatrix: AbstractMatrix);
  constructor(diagonalSize: number);
  /**
   * @throws TypeError if data are not symmetric
   * @param data
   */
  constructor(data: ArrayLike<ArrayLike<number>>);

  get(rowIndex: number, columnIndex: number): number;
  set(rowIndex: number, columnIndex: number, value: number): this;

  /**
   * Creates a symmetric matrix with the given dimensions. Values will be set to zero.
   * This is equivalent to calling the Matrix constructor.
   *
   * @param diagonalSize - Number of rows or columns (square).
   * @template _M is private, do not override it.
   * @returns The new symmetric matrix.
   */
  static zeros<_M extends AbstractMatrix = SymmetricMatrix>(
    diagonalSize: number,
  ): _M;
  /**
   * Creates a symmetric matrix with the given dimensions. Values will be set to one.
   * @param diagonalSize - Number of rows or columns (square).
   * @template _M is private, do not override it.
   * @returns The new symmetric matrix.
   */
  static ones<_M extends AbstractMatrix = SymmetricMatrix>(
    diagonalSize: number,
  ): _M;

  static isSymmetricMatrix(value: unknown): value is SymmetricMatrix;

  /**
   * copy to a new matrix
   */
  toMatrix(): Matrix;

  /**
   * Symmetric remove row / column
   * @param index
   */
  removeCross(index: number): this;

  /**
   * Symmetric add row / column
   * @param index
   * @param array
   */
  addCross(index: number, array: ArrayLike<number> | AbstractMatrix): this;
  addCross(array: ArrayLike<number> | AbstractMatrix): this;

  /**
   * remove sides (rows / columns) with falsy value from mask.
   *
   * @example
   *
   * ```js
   * const matrix = new SymmetricMatrix([
   *  [0,1,2,3],
   *  [1,0,4,5],
   *  [2,4,0,6],
   *  [3,5,6,0],
   * ]);
   * matrix.applyMask([1,0,0,1]);
   * assert.deepEqual(matrix.toCompact(), new SymmetricMatrix([
   *  [0,3],
   *  [3,0],
   * ]).toCompact());
   * ```
   *
   * @throws RangeError if mask length is different of matrix sideSize
   *
   * @param mask
   */
  applyMask(mask: Mask): this;

  /**
   * Compact format upper-right corner of matrix
   * iterate from left to right, from top to bottom.
   *
   * ```
   *  full view | usefull data
   *   A B C D  |   A B C D
   * A 1 2 3 4  | A 1 2 3 4
   * B 2 5 6 7  | B · 5 6 7
   * C 3 6 8 9  | C · · 8 9
   * D 4 7 9 10 | D · · · 10
   * ```
   *
   * will return compact 1D array `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`
   *
   * length is S(i=0, n=sideSize) => 10 for a 4 sideSized matrix
   */
  toCompact(): number[];

  /**
   * @throws TypeError if `compact` is not the compact form of a Symmetric Matrix
   * `(Math.sqrt(8 * compactLength + 1) - 1) / 2` must be an integer
   *
   * @param compact
   */
  static fromCompact(compact: number[]): SymmetricMatrix;

  clone(): this;

  /**
   * half iterator upper-right-corner from left to right, from top to bottom
   * yield [row, column, value]
   */
  upperRightEntries(): Generator<
    [row: number, column: number, value: number],
    void,
    void
  >;

  /**
   * half iterator upper-right-corner from left to right, from top to bottom
   * yield value
   */
  upperRightValues(): Generator<number, void, void>;
}

export class DistanceMatrix extends SymmetricMatrix {
  /**
   * Creates a distance matrix with the given dimensions. Values will be set to zero.
   * This is equivalent to calling the Matrix constructor.
   * @param sidesSize - Number of rows or columns (square).
   * @template _M is private, do not specify it
   * @returns The new symmetric matrix.
   */
  static zeros<_M extends AbstractMatrix = DistanceMatrix>(
    sidesSize: number,
  ): _M;

  /**
   * Creates a symmetric matrix with the given dimensions. Values will be set to one.
   * @param sidesSize - Number of rows or columns (square).
   * @template _M is private, do not specify it
   * @returns The new symmetric matrix.
   */
  static ones<_M extends AbstractMatrix = DistanceMatrix>(
    sidesSize: number,
  ): _M;

  static isDistanceMatrix(value: unknown): value is DistanceMatrix;

  constructor(sidesSize: number);
  /**
   * @throws TypeError if data are not symmetric and diagonal is not 0
   * @param data
   */
  constructor(data: ArrayLike<ArrayLike<number>>);
  /**
   * @throws TypeError if otherMatrix is not symmetric and diagonal is not 0
   * @param otherMatrix
   */
  constructor(otherMatrix: AbstractMatrix);

  /**
   * because it's a distance matrix, if rowIndex === columnIndex,
   * value will be set to 0
   *
   * @param rowIndex
   * @param columnIndex
   * @param value
   */
  set(rowIndex: number, columnIndex: number, value: number): this;

  toSymmetricMatrix(): SymmetricMatrix;

  /**
   * Compact format upper-right corner of matrix
   * no diagonal (because only store zeros)
   * iterable from left to right, from top to bottom.
   *
   * ```
   *   A B C D
   * A 0 1 2 3
   * B 1 0 4 5
   * C 2 4 0 6
   * D 3 5 6 0
   * ```
   *
   * will return compact 1D array `[1, 2, 3, 4, 5, 6]`
   *
   * length is S(i=0, n=sideSize-1) => 6 for a 4 side sized matrix
   *
   * @returns {number[]}
   */
  toCompact(): number[];

  /**
   * @throws TypeError if `compact` is not the compact form of a Distance Matrix
   * `(Math.sqrt(8 * compactSize + 1) + 1) / 2` must be an integer
   *
   * @param compact
   */
  static fromCompact(compact: number[]): DistanceMatrix;

  clone(): this;
}

export class MatrixColumnView extends AbstractMatrix {
  constructor(matrix: AbstractMatrix, column: number);
  set(rowIndex: number, columnIndex: number, value: number): this;
  get(rowIndex: number, columnIndex: number): number;
}

export class MatrixColumnSelectionView extends AbstractMatrix {
  constructor(matrix: AbstractMatrix, columnIndices: ArrayLike<number>);
  set(rowIndex: number, columnIndex: number, value: number): this;
  get(rowIndex: number, columnIndex: number): number;
}

export class MatrixFlipColumnView extends AbstractMatrix {
  constructor(matrix: AbstractMatrix);
  set(rowIndex: number, columnIndex: number, value: number): this;
  get(rowIndex: number, columnIndex: number): number;
}

export class MatrixFlipRowView extends AbstractMatrix {
  constructor(matrix: AbstractMatrix);
  set(rowIndex: number, columnIndex: number, value: number): this;
  get(rowIndex: number, columnIndex: number): number;
}

export class MatrixRowView extends AbstractMatrix {
  constructor(matrix: AbstractMatrix, row: number);
  set(rowIndex: number, columnIndex: number, value: number): this;
  get(rowIndex: number, columnIndex: number): number;
}

export class MatrixRowSelectionView extends AbstractMatrix {
  constructor(matrix: AbstractMatrix, rowIndices: ArrayLike<number>);
  set(rowIndex: number, columnIndex: number, value: number): this;
  get(rowIndex: number, columnIndex: number): number;
}

export class MatrixSelectionView extends AbstractMatrix {
  constructor(
    matrix: AbstractMatrix,
    rowIndices: ArrayLike<number>,
    columnIndices: ArrayLike<number>,
  );
  set(rowIndex: number, columnIndex: number, value: number): this;
  get(rowIndex: number, columnIndex: number): number;
}

export class MatrixSubView extends AbstractMatrix {
  constructor(
    matrix: AbstractMatrix,
    startRow: number,
    endRow: number,
    startColumn: number,
    endColumn: number,
  );
  set(rowIndex: number, columnIndex: number, value: number): this;
  get(rowIndex: number, columnIndex: number): number;
}

export class MatrixTransposeView extends AbstractMatrix {
  constructor(matrix: AbstractMatrix);
  set(rowIndex: number, columnIndex: number, value: number): this;
  get(rowIndex: number, columnIndex: number): number;
}

export interface IWrap1DOptions {
  /**
   * @default: `1`
   */
  rows?: number;
}

export function wrap(
  array: ArrayLike<number>,
  options?: IWrap1DOptions,
): WrapperMatrix1D;

export function wrap(twoDAray: ArrayLike<ArrayLike<number>>): WrapperMatrix2D;

export class WrapperMatrix1D extends AbstractMatrix {
  constructor(data: ArrayLike<number>, options?: IWrap1DOptions);
  set(rowIndex: number, columnIndex: number, value: number): this;
  get(rowIndex: number, columnIndex: number): number;
}

export class WrapperMatrix2D extends AbstractMatrix {
  constructor(data: ArrayLike<ArrayLike<number>>);
  set(rowIndex: number, columnIndex: number, value: number): this;
  get(rowIndex: number, columnIndex: number): number;
}

/**
 * @param leftHandSide
 * @param rightHandSide
 * @param useSVD - Default: `false`.
 */
export function solve(
  leftHandSide: MaybeMatrix,
  rightHandSide: MaybeMatrix,
  useSVD?: boolean,
): Matrix;

/**
 * Computes the inverse of a matrix.
 * @param matrix - Matrix to invert.
 * @param useSVD - Use the singular value decomposition to compute the inverse. Default: `false`.
 */
export function inverse(matrix: MaybeMatrix, useSVD?: boolean): Matrix;

/**
 * Calculates and returns the determinant of a matrix.
 * @param matrix
 */
export function determinant(matrix: MaybeMatrix): number;

export interface ILinearDependenciesOptions {
  /**
   * If an absolute value is inferior to this threshold, it will equals zero.
   * @default `10e-10`
   */
  thresholdValue?: number;

  /**
   * If the error is inferior to that threshold, the linear combination found is accepted and the row is dependent from other rows.
   * @default `10e-10`
   */
  thresholdError?: number;
}

/**
 * Creates a matrix which represents the dependencies between rows.
 * If a row is a linear combination of others rows, the result will be a row with the coefficients of this combination.
 * For example : for A = [[2, 0, 0, 1], [0, 1, 6, 0], [0, 3, 0, 1], [0, 0, 1, 0], [0, 1, 2, 0]], the result will be [[0, 0, 0, 0, 0], [0, 0, 0, 4, 1], [0, 0, 0, 0, 0], [0, 0.25, 0, 0, -0.25], [0, 1, 0, -4, 0]]
 * @param matrix
 * @param options
 * @returns - The matrix which represents the dependencies between rows.
 */
export function linearDependencies(
  matrix: MaybeMatrix,
  options?: ILinearDependenciesOptions,
): Matrix;

/**
 * Returns inverse of a matrix if it exists or the pseudoinverse.
 * @param matrix
 * @param threshold - Threshold for taking inverse of singular values. Default: `Number.EPSILON`.
 * @returns - The (pseudo)inverted matrix.
 */
export function pseudoInverse(matrix: MaybeMatrix, threshold?: number): Matrix;

export function covariance(
  matrix: MaybeMatrix,
  options?: ICovarianceOptions,
): Matrix;

export function covariance(
  xMatrix: MaybeMatrix,
  yMatrix: MaybeMatrix,
  options?: ICovarianceOptions,
): Matrix;

export function correlation(
  matrix: MaybeMatrix,
  options?: ICorrelationOptions,
): Matrix;

export function correlation(
  xMatrix: MaybeMatrix,
  yMatrix: MaybeMatrix,
  options?: ICorrelationOptions,
): Matrix;

export interface ISVDOptions {
  /**
   * @default `true`
   */
  computeLeftSingularVectors?: boolean;

  /**
   * @default `true`
   */
  computeRightSingularVectors?: boolean;

  /**
   * @default `false`
   */
  autoTranspose?: boolean;
}

/**
 * @see https://github.com/accord-net/framework/blob/development/Sources/Accord.Math/Decompositions/SingularValueDecomposition.cs
 */
export class SingularValueDecomposition {
  constructor(value: MaybeMatrix, options?: ISVDOptions);

  /**
   * Get the inverse of the matrix. We compute the inverse of a matrix using SVD when this matrix is singular or ill-conditioned. Example :
   * var svd = SingularValueDecomposition(A);
   * var inverseA = svd.inverse();
   * @returns - The approximation of the inverse of the matrix.
   */
  inverse(): Matrix;

  /**
   * Solve a problem of least square (Ax=b) by using the SVD. Useful when A is singular. When A is not singular, it would be better to use qr.solve(value).
   * Example : We search to approximate x, with A matrix shape m*n, x vector size n, b vector size m (m > n). We will use :
   * var svd = SingularValueDecomposition(A);
   * var x = svd.solve(b);
   * @param value - Matrix 1D which is the vector b (in the equation Ax = b).
   * @returns - The vector x.
   */
  solve(value: Matrix): Matrix;
  solveForDiagonal(value: ArrayLike<number>): Matrix;
  readonly norm2: number;
  readonly threshold: number;
  readonly leftSingularVectors: Matrix;
  readonly condition: number;
  readonly rank: number;
  readonly rightSingularVectors: Matrix;
  readonly diagonal: number[];
  readonly diagonalMatrix: Matrix;
}

export { SingularValueDecomposition as SVD };

export interface IEVDOptions {
  /**
   * @default `false`
   */
  assumeSymmetric?: boolean;
}

/**
 * @link https://github.com/lutzroeder/Mapack/blob/master/Source/EigenvalueDecomposition.cs
 */
export class EigenvalueDecomposition {
  constructor(value: MaybeMatrix, options?: IEVDOptions);
  readonly diagonalMatrix: Matrix;
  readonly eigenvectorMatrix: Matrix;
  readonly imaginaryEigenvalues: number[];
  readonly realEigenvalues: number[];
}

export { EigenvalueDecomposition as EVD };

/**
 * The Cholesky decomposition of a matrix. Given a matrix A, the Cholesky Decomposition of A is L
 * such that A = (L)(L.transpose).
 * Only works for symmetric, positive definite matrix A.
 * 
 * @link https://github.com/lutzroeder/Mapack/blob/master/Source/CholeskyDecomposition.cs
 */
export class CholeskyDecomposition {
  /**
   *
   * @param value - The matrix A to decompose
   * @throws if A is not symmetric
   */
  constructor(value: MaybeMatrix);
  /**
   * true if A is positive definite (and therefore we could perform the decomposition)
   */
  isPositiveDefinite(): boolean;
  /**
   * Given column vector b, solve for x such that Ax=b.
   * @param value
   * @throws if A is not positive-definite
   */
  solve(value: Matrix): Matrix;
  /**
   * A lower triangular matrix L such that A=(L)(L.transpose)
   * This will ONLY be the case if A is positive-definite.
   */
  readonly lowerTriangularMatrix: Matrix;
}

export { CholeskyDecomposition as CHO };

/**
 * @link https://github.com/lutzroeder/Mapack/blob/master/Source/LuDecomposition.cs
 */
export class LuDecomposition {
  constructor(value: MaybeMatrix);
  isSingular(): boolean;
  solve(value: Matrix): Matrix;
  readonly determinant: number;
  readonly lowerTriangularMatrix: Matrix;
  readonly pivotPermutationVector: number[];
  readonly upperTriangularMatrix: Matrix;
}

export { LuDecomposition as LU };

/**
 * @link https://github.com/lutzroeder/Mapack/blob/master/Source/QrDecomposition.cs
 */
export class QrDecomposition {
  constructor(value: MaybeMatrix);
  isFullRank(): boolean;

  /**
   * Solve a problem of least square (Ax=b) by using the QR decomposition. Useful when A is rectangular, but not working when A is singular.
   * Example : We search to approximate x, with A matrix shape m*n, x vector size n, b vector size m (m > n). We will use :
   * var qr = QrDecomposition(A);
   * var x = qr.solve(b);
   * @param value - Matrix 1D which is the vector b (in the equation Ax = b).
   * @returns - The vector x.
   */
  solve(value: Matrix): Matrix;
  readonly orthogonalMatrix: Matrix;
  readonly upperTriangularMatrix: Matrix;
}

export { QrDecomposition as QR };

export interface INipalsOptions {
  /**
   * A column vector of length `X.rows` that contains known labels for supervised PLS.
   */
  Y?: MaybeMatrix | ArrayLike<number>;
  /**
   * The maximum number of allowed iterations before beraking the loop if convergence is not achieved.
   * @default 1000
   */
  maxIterations?: number;
  /**
   * Termination criteria
   * @default 1e-10
   */
  terminationCriteria?: number;
}

export class Nipals {
  /**
   * Implementation of the NIPALS algorithm.
   * Geladi, P and Kowalski, B.R. (1986)
   * Partial least squares and regression:
   * a tutorial.
   * Analytica Chimica Acta 185, 1-17.
   * @param X - A matrix to be factored
   * @param options
   */
  constructor(X: MaybeMatrix, options?: INipalsOptions);
  w: Matrix;
  s: Matrix;
  t: Matrix;
  xResidual: Matrix;
  p: Matrix;
  q: Matrix;
  u: Matrix;
  yResidual: Matrix;
  betas: Matrix;
}

export { Nipals as NIPALS };
