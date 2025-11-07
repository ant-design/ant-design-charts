import LuDecomposition from './dc/lu';
import Matrix from './matrix';
import MatrixSelectionView from './views/selection';

export function determinant(matrix) {
  matrix = Matrix.checkMatrix(matrix);
  if (matrix.isSquare()) {
    if (matrix.columns === 0) {
      return 1;
    }

    let a, b, c, d;
    if (matrix.columns === 2) {
      // 2 x 2 matrix
      a = matrix.get(0, 0);
      b = matrix.get(0, 1);
      c = matrix.get(1, 0);
      d = matrix.get(1, 1);

      return a * d - b * c;
    } else if (matrix.columns === 3) {
      // 3 x 3 matrix
      let subMatrix0, subMatrix1, subMatrix2;
      subMatrix0 = new MatrixSelectionView(matrix, [1, 2], [1, 2]);
      subMatrix1 = new MatrixSelectionView(matrix, [1, 2], [0, 2]);
      subMatrix2 = new MatrixSelectionView(matrix, [1, 2], [0, 1]);
      a = matrix.get(0, 0);
      b = matrix.get(0, 1);
      c = matrix.get(0, 2);

      return (
        a * determinant(subMatrix0) -
        b * determinant(subMatrix1) +
        c * determinant(subMatrix2)
      );
    } else {
      // general purpose determinant using the LU decomposition
      return new LuDecomposition(matrix).determinant;
    }
  } else {
    throw Error('determinant can only be calculated for a square matrix');
  }
}
