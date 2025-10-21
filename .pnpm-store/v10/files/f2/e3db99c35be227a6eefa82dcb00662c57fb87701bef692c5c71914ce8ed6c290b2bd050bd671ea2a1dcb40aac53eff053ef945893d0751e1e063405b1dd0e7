# ml-matrix

Matrix manipulation and computation library.

<h3 align="center">

  <a href="https://www.zakodium.com">
    <img src="https://www.zakodium.com/brand/zakodium-logo-white.svg" width="50" alt="Zakodium logo" />
  </a>

  <p>
    Maintained by <a href="https://www.zakodium.com">Zakodium</a>
  </p>

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.5644534.svg)](https://doi.org/10.5281/zenodo.5644534)
[![npm download][download-image]][download-url]

</h3>

## Installation

`$ npm install ml-matrix`

## Usage

### As an ES module

```js
import { Matrix } from 'ml-matrix';

const matrix = Matrix.ones(5, 5);
```

### As a CommonJS module

```js
const { Matrix } = require('ml-matrix');

const matrix = Matrix.ones(5, 5);
```

## [API Documentation](https://mljs.github.io/matrix/)

## Examples

### Standard operations

```js
const { Matrix } = require('ml-matrix');

var A = new Matrix([
  [1, 1],
  [2, 2],
]);

var B = new Matrix([
  [3, 3],
  [1, 1],
]);

var C = new Matrix([
  [3, 3],
  [1, 1],
]);
```

#### Operations
```js
const addition       = Matrix.add(A, B);   // addition       = Matrix [[4, 4], [3, 3], rows: 2, columns: 2]
const subtraction    = Matrix.sub(A, B);   // subtraction    = Matrix [[-2, -2], [1, 1], rows: 2, columns: 2]
const multiplication = A.mmul(B);          // multiplication = Matrix [[4, 4], [8, 8], rows: 2, columns: 2]
const mulByNumber    = Matrix.mul(A, 10);  // mulByNumber    = Matrix [[10, 10], [20, 20], rows: 2, columns: 2]
const divByNumber    = Matrix.div(A, 10);  // divByNumber    = Matrix [[0.1, 0.1], [0.2, 0.2], rows: 2, columns: 2]
const modulo         = Matrix.mod(B, 2);   // modulo         = Matrix [[1, 1], [1, 1], rows: 2, columns: 2]
const maxMatrix      = Matrix.max(A, B);   // max            = Matrix [[3, 3], [2, 2], rows: 2, columns: 2]
const minMatrix      = Matrix.min(A, B);   // max            = Matrix [[1, 1], [1, 1], rows: 2, columns: 2]
```

#### Inplace Operations
```js
C.add(A);   // => C = C + A
C.sub(A);   // => C = C - A
C.mul(10);  // => C = 10 * C
C.div(10);  // => C = C / 10
C.mod(2);   // => C = C % 2
```

#### Math Operations
```js
// Standard Math operations: (abs, cos, round, etc.)
var A = new Matrix([
  [ 1,  1],
  [-1, -1],
]);

var exponential = Matrix.exp(A);  // exponential = Matrix [[Math.exp(1), Math.exp(1)], [Math.exp(-1), Math.exp(-1)], rows: 2, columns: 2].
var cosinus     = Matrix.cos(A);  // cosinus     = Matrix [[Math.cos(1), Math.cos(1)], [Math.cos(-1), Math.cos(-1)], rows: 2, columns: 2].
var absolute    = Matrix.abs(A);  // absolute    = Matrix [[1, 1], [1, 1], rows: 2, columns: 2].
// Note: you can do it inplace too as A.abs()
```
Available Methods:
```js
abs, acos, acosh, asin, asinh, atan, atanh, cbrt, ceil, clz32, cos, cosh, exp, expm1, floor, fround, log, log1p, log10, log2, round, sign, sin, sinh, sqrt, tan, tanh, trunc
```
#### Manipulation of the matrix
```js
// remember: A = Matrix [[1, 1], [-1, -1], rows: 2, columns: 2]

var numberRows     = A.rows;             // A has 2 rows
var numberCols     = A.columns;          // A has 2 columns
var firstValue     = A.get(0, 0);        // get(rows, columns)
var numberElements = A.size;             // 2 * 2 = 4 elements
var isRow          = A.isRowVector();    // false because A has more than 1 row
var isColumn       = A.isColumnVector(); // false because A has more than 1 column
var isSquare       = A.isSquare();       // true, because A is 2 * 2 matrix
var isSym          = A.isSymmetric();    // false, because A is not symmetric
A.set(1, 0, 10);                         // A = Matrix [[1, 1], [10, -1], rows: 2, columns: 2]. We have changed the second row and the first column
var diag           = A.diag();           // diag = [1, -1] (values in the diagonal)
var m              = A.mean();           // m = 2.75
var product        = A.prod();           // product = -10 (product of all values of the matrix)
var norm           = A.norm();           // norm = 10.14889156509222 (Frobenius norm of the matrix)
var transpose      = A.transpose();      // transpose = Matrix [[1, 10], [1, -1], rows: 2, columns: 2]
```

#### Instantiation of matrix
```js
var z = Matrix.zeros(3, 2); // z = Matrix [[0, 0], [0, 0], [0, 0], rows: 3, columns: 2]
var z = Matrix.ones(2, 3);  // z = Matrix [[1, 1, 1], [1, 1, 1], rows: 2, columns: 3]
var z = Matrix.eye(3, 4);   // z = Matrix [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], rows: 3, columns: 4]. there are 1 only in the diagonal
```

### Maths
```js
const {
  Matrix,
  inverse,
  solve,
  linearDependencies,
  QrDecomposition,
  LuDecomposition,
  CholeskyDecomposition,
  EigenvalueDecomposition,
} = require('ml-matrix');
```
#### Inverse and Pseudo-inverse
```js
var A = new Matrix([
  [2, 3, 5],
  [4, 1, 6],
  [1, 3, 0],
]);

var inverseA = inverse(A);
var B = A.mmul(inverseA); // B = A * inverse(A), so B ~= Identity


// if A is singular, you can use SVD :
var A = new Matrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]); 
// A is singular, so the standard computation of inverse won't work (you can test if you don't trust me^^)

var inverseA = inverse(A, (useSVD = true)); // inverseA is only an approximation of the inverse, by using the Singular Values Decomposition
var B = A.mmul(inverseA); // B = A * inverse(A), but inverse(A) is only an approximation, so B doesn't really be identity.
```
```js
// if you want the pseudo-inverse of a matrix :
var A = new Matrix([
  [1, 2],
  [3, 4],
  [5, 6],
]);

var pseudoInverseA = A.pseudoInverse();
var B = A.mmul(pseudoInverseA).mmul(A); // with pseudo inverse, A*pseudo-inverse(A)*A ~= A. It's the case here
```
#### Least square
Least square is the following problem: We search for `x`, such that `A.x = B` (`A`, `x` and `B` are matrix or vectors).
Below, how to solve least square with our function
```js
// If A is non singular :
var A = new Matrix([
  [3,    1],
  [4.25, 1],
  [5.5,  1],
  [8,    1],
]);

var B = Matrix.columnVector([4.5, 4.25, 5.5, 5.5]);
var x = solve(A, B);
var error = Matrix.sub(B, A.mmul(x)); // The error enables to evaluate the solution x found.
```
```js
// If A is non singular :
var A = new Matrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

var B = Matrix.columnVector([8, 20, 32]);
var x = solve(A, B, (useSVD = true)); // there are many solutions. x can be [1, 2, 1].transpose(), or [1.33, 1.33, 1.33].transpose(), etc.
var error = Matrix.sub(B, A.mmul(x)); // The error enables to evaluate the solution x found.
```
#### Decompositions

##### QR Decomposition
```js
var A = new Matrix([
  [2, 3, 5],
  [4, 1, 6],
  [1, 3, 0],
]);

var QR = new QrDecomposition(A);
var Q = QR.orthogonalMatrix;
var R = QR.upperTriangularMatrix;
// So you have the QR decomposition. If you multiply Q by R, you'll see that A = Q.R, with Q orthogonal and R upper triangular
```
##### LU Decomposition
```js
var A = new Matrix([
  [2, 3, 5],
  [4, 1, 6],
  [1, 3, 0],
]);

var LU = new LuDecomposition(A);
var L = LU.lowerTriangularMatrix;
var U = LU.upperTriangularMatrix;
var P = LU.pivotPermutationVector;
// So you have the LU decomposition. P includes the permutation of the matrix. Here P = [1, 2, 0], i.e the first row of LU is the second row of A, the second row of LU is the third row of A and the third row of LU is the first row of A.
```
##### Cholesky Decomposition
```js
var A = new Matrix([
  [2, 3, 5],
  [4, 1, 6],
  [1, 3, 0],
]);

var cholesky = new CholeskyDecomposition(A);
var L = cholesky.lowerTriangularMatrix;
```
##### Eigenvalues & eigenvectors
```js
var A = new Matrix([
  [2, 3, 5],
  [4, 1, 6],
  [1, 3, 0],
]);

var e = new EigenvalueDecomposition(A);
var real = e.realEigenvalues;
var imaginary = e.imaginaryEigenvalues;
var vectors = e.eigenvectorMatrix;
```
#### Linear dependencies
```js
var A = new Matrix([
  [2, 0, 0, 1],
  [0, 1, 6, 0],
  [0, 3, 0, 1],
  [0, 0, 1, 0],
  [0, 1, 2, 0],
]);

var dependencies = linearDependencies(A);
// dependencies is a matrix with the dependencies of the rows. When we look row by row, we see that the first row is [0, 0, 0, 0, 0], so it means that the first row is independent, and the second row is [ 0, 0, 0, 4, 1 ], i.e the second row = 4 times the 4th row + the 5th row.
```

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/ml-matrix.svg
[npm-url]: https://npmjs.org/package/ml-matrix
[ci-image]: https://github.com/mljs/matrix/workflows/Node.js%20CI/badge.svg?branch=main
[ci-url]: https://github.com/mljs/matrix/actions?query=workflow%3A%22Node.js+CI%22
[download-image]: https://img.shields.io/npm/dm/ml-matrix.svg
[download-url]: https://npmjs.org/package/ml-matrix
