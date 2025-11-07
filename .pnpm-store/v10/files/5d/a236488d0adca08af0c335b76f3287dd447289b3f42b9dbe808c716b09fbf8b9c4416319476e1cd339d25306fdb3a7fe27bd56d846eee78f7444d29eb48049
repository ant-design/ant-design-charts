import { checkRowIndices, checkColumnIndices } from '../util';

import BaseView from './base';

export default class MatrixSelectionView extends BaseView {
  constructor(matrix, rowIndices, columnIndices) {
    checkRowIndices(matrix, rowIndices);
    checkColumnIndices(matrix, columnIndices);
    super(matrix, rowIndices.length, columnIndices.length);
    this.rowIndices = rowIndices;
    this.columnIndices = columnIndices;
  }

  set(rowIndex, columnIndex, value) {
    this.matrix.set(
      this.rowIndices[rowIndex],
      this.columnIndices[columnIndex],
      value,
    );
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.matrix.get(
      this.rowIndices[rowIndex],
      this.columnIndices[columnIndex],
    );
  }
}
