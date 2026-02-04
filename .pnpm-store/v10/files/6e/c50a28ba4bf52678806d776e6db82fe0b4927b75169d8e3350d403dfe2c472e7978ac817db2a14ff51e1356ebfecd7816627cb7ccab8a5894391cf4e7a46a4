import { SymmetricMatrix } from './symmetricMatrix';

export class DistanceMatrix extends SymmetricMatrix {
  /**
   * not the same as matrix.isSymmetric()
   * Here is to check if it's instanceof SymmetricMatrix without bundling issues
   *
   * @param value
   * @returns {boolean}
   */
  static isDistanceMatrix(value) {
    return (
      SymmetricMatrix.isSymmetricMatrix(value) &&
      value.klassSubType === 'DistanceMatrix'
    );
  }

  constructor(sideSize) {
    super(sideSize);

    if (!this.isDistance()) {
      throw new TypeError('Provided arguments do no produce a distance matrix');
    }
  }

  set(rowIndex, columnIndex, value) {
    // distance matrix diagonal is 0
    if (rowIndex === columnIndex) value = 0;

    return super.set(rowIndex, columnIndex, value);
  }

  addCross(index, array) {
    if (array === undefined) {
      array = index;
      index = this.diagonalSize;
    }

    // ensure distance
    array = array.slice();
    array[index] = 0;

    return super.addCross(index, array);
  }

  toSymmetricMatrix() {
    return new SymmetricMatrix(this);
  }

  clone() {
    const matrix = new DistanceMatrix(this.diagonalSize);

    for (const [row, col, value] of this.upperRightEntries()) {
      if (row === col) continue;
      matrix.set(row, col, value);
    }

    return matrix;
  }

  /**
   * Compact format upper-right corner of matrix
   * no diagonal (only zeros)
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
  toCompact() {
    const { diagonalSize } = this;
    const compactLength = ((diagonalSize - 1) * diagonalSize) / 2;

    /** @type {number[]} */
    const compact = new Array(compactLength);
    for (let col = 1, row = 0, index = 0; index < compact.length; index++) {
      compact[index] = this.get(row, col);

      if (++col >= diagonalSize) col = ++row + 1;
    }

    return compact;
  }

  /**
   * @param {number[]} compact
   */
  static fromCompact(compact) {
    const compactSize = compact.length;

    if (compactSize === 0) {
      return new this(0);
    }

    // compactSize in Natural integer range ]0;∞]
    // compactSize = (sideSize * (sideSize - 1)) / 2
    // sideSize = (Sqrt(8 × compactSize + 1) + 1) / 2
    const diagonalSize = (Math.sqrt(8 * compactSize + 1) + 1) / 2;

    if (!Number.isInteger(diagonalSize)) {
      throw new TypeError(
        `This array is not a compact representation of a DistanceMatrix, ${JSON.stringify(
          compact,
        )}`,
      );
    }

    const matrix = new this(diagonalSize);
    for (let col = 1, row = 0, index = 0; index < compactSize; index++) {
      matrix.set(col, row, compact[index]);
      if (++col >= diagonalSize) col = ++row + 1;
    }

    return matrix;
  }
}
DistanceMatrix.prototype.klassSubType = 'DistanceMatrix';
