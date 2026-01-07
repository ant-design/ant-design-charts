/**
 * @typedef {0 | 1 | number | boolean} Mask
 */
import Matrix, { AbstractMatrix } from './matrix';

export class SymmetricMatrix extends AbstractMatrix {
  /** @type {Matrix} */
  #matrix;

  get size() {
    return this.#matrix.size;
  }

  get rows() {
    return this.#matrix.rows;
  }

  get columns() {
    return this.#matrix.columns;
  }

  get diagonalSize() {
    return this.rows;
  }

  /**
   * not the same as matrix.isSymmetric()
   * Here is to check if it's instanceof SymmetricMatrix without bundling issues
   *
   * @param value
   * @returns {boolean}
   */
  static isSymmetricMatrix(value) {
    return Matrix.isMatrix(value) && value.klassType === 'SymmetricMatrix';
  }

  /**
   * @param diagonalSize
   * @return {SymmetricMatrix}
   */
  static zeros(diagonalSize) {
    return new this(diagonalSize);
  }

  /**
   * @param diagonalSize
   * @return {SymmetricMatrix}
   */
  static ones(diagonalSize) {
    return new this(diagonalSize).fill(1);
  }

  /**
   * @param {number | AbstractMatrix | ArrayLike<ArrayLike<number>>} diagonalSize
   * @return {this}
   */
  constructor(diagonalSize) {
    super();

    if (Matrix.isMatrix(diagonalSize)) {
      if (!diagonalSize.isSymmetric()) {
        throw new TypeError('not symmetric data');
      }

      this.#matrix = Matrix.copy(
        diagonalSize,
        new Matrix(diagonalSize.rows, diagonalSize.rows),
      );
    } else if (Number.isInteger(diagonalSize) && diagonalSize >= 0) {
      this.#matrix = new Matrix(diagonalSize, diagonalSize);
    } else {
      this.#matrix = new Matrix(diagonalSize);

      if (!this.isSymmetric()) {
        throw new TypeError('not symmetric data');
      }
    }
  }

  clone() {
    const matrix = new SymmetricMatrix(this.diagonalSize);

    for (const [row, col, value] of this.upperRightEntries()) {
      matrix.set(row, col, value);
    }

    return matrix;
  }

  toMatrix() {
    return new Matrix(this);
  }

  get(rowIndex, columnIndex) {
    return this.#matrix.get(rowIndex, columnIndex);
  }
  set(rowIndex, columnIndex, value) {
    // symmetric set
    this.#matrix.set(rowIndex, columnIndex, value);
    this.#matrix.set(columnIndex, rowIndex, value);

    return this;
  }

  removeCross(index) {
    // symmetric remove side
    this.#matrix.removeRow(index);
    this.#matrix.removeColumn(index);

    return this;
  }

  addCross(index, array) {
    if (array === undefined) {
      array = index;
      index = this.diagonalSize;
    }

    const row = array.slice();
    row.splice(index, 1);

    this.#matrix.addRow(index, row);
    this.#matrix.addColumn(index, array);

    return this;
  }

  /**
   * @param {Mask[]} mask
   */
  applyMask(mask) {
    if (mask.length !== this.diagonalSize) {
      throw new RangeError('Mask size do not match with matrix size');
    }

    // prepare sides to remove from matrix from mask
    /** @type {number[]} */
    const sidesToRemove = [];
    for (const [index, passthroughs] of mask.entries()) {
      if (passthroughs) continue;
      sidesToRemove.push(index);
    }
    // to remove from highest to lowest for no mutation shifting
    sidesToRemove.reverse();

    // remove sides
    for (const sideIndex of sidesToRemove) {
      this.removeCross(sideIndex);
    }

    return this;
  }

  /**
   * Compact format upper-right corner of matrix
   * iterate from left to right, from top to bottom.
   *
   * ```
   *   A B C D
   * A 1 2 3 4
   * B 2 5 6 7
   * C 3 6 8 9
   * D 4 7 9 10
   * ```
   *
   * will return compact 1D array `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`
   *
   * length is S(i=0, n=sideSize) => 10 for a 4 sideSized matrix
   *
   * @returns {number[]}
   */
  toCompact() {
    const { diagonalSize } = this;

    /** @type {number[]} */
    const compact = new Array((diagonalSize * (diagonalSize + 1)) / 2);
    for (let col = 0, row = 0, index = 0; index < compact.length; index++) {
      compact[index] = this.get(row, col);

      if (++col >= diagonalSize) col = ++row;
    }

    return compact;
  }

  /**
   * @param {number[]} compact
   * @return {SymmetricMatrix}
   */
  static fromCompact(compact) {
    const compactSize = compact.length;
    // compactSize = (sideSize * (sideSize + 1)) / 2
    // https://mathsolver.microsoft.com/fr/solve-problem/y%20%3D%20%20x%20%60cdot%20%20%20%60frac%7B%20%20%60left(%20x%2B1%20%20%60right)%20%20%20%20%7D%7B%202%20%20%7D
    // sideSize = (Sqrt(8 × compactSize + 1) - 1) / 2
    const diagonalSize = (Math.sqrt(8 * compactSize + 1) - 1) / 2;

    if (!Number.isInteger(diagonalSize)) {
      throw new TypeError(
        `This array is not a compact representation of a Symmetric Matrix, ${JSON.stringify(
          compact,
        )}`,
      );
    }

    const matrix = new SymmetricMatrix(diagonalSize);
    for (let col = 0, row = 0, index = 0; index < compactSize; index++) {
      matrix.set(col, row, compact[index]);
      if (++col >= diagonalSize) col = ++row;
    }

    return matrix;
  }

  /**
   * half iterator upper-right-corner from left to right, from top to bottom
   * yield [row, column, value]
   *
   * @returns {Generator<[number, number, number], void, void>}
   */
  *upperRightEntries() {
    for (let row = 0, col = 0; row < this.diagonalSize; void 0) {
      const value = this.get(row, col);

      yield [row, col, value];

      // at the end of row, move cursor to next row at diagonal position
      if (++col >= this.diagonalSize) col = ++row;
    }
  }

  /**
   * half iterator upper-right-corner from left to right, from top to bottom
   * yield value
   *
   * @returns {Generator<[number, number, number], void, void>}
   */
  *upperRightValues() {
    for (let row = 0, col = 0; row < this.diagonalSize; void 0) {
      const value = this.get(row, col);

      yield value;

      // at the end of row, move cursor to next row at diagonal position
      if (++col >= this.diagonalSize) col = ++row;
    }
  }
}
SymmetricMatrix.prototype.klassType = 'SymmetricMatrix';
