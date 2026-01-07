# transformation-matrix
Javascript isomorphic 2D affine transformations written in ES6 syntax. Manipulate transformation matrices with this totally tested library!

[![chrvadala](https://img.shields.io/badge/website-chrvadala-orange.svg)](https://chrvadala.github.io)
[![Test](https://github.com/chrvadala/transformation-matrix/workflows/Test/badge.svg)](https://github.com/chrvadala/transformation-matrix/actions)
[![Coverage Status](https://coveralls.io/repos/github/chrvadala/transformation-matrix/badge.svg?branch=master)](https://coveralls.io/github/chrvadala/transformation-matrix?branch=master)
[![npm](https://img.shields.io/npm/v/transformation-matrix.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/transformation-matrix)
[![Downloads](https://img.shields.io/npm/dm/transformation-matrix.svg)](https://www.npmjs.com/package/transformation-matrix)
[![Donate](https://img.shields.io/badge/donate-GithubSponsor-green.svg)](https://github.com/sponsors/chrvadala)

# Features 
Transformations, i.e. *linear invertible automorphisms*, are used to map a picture into another one with different size, position and orientation. Given a basis, transformations are represented by means of squared invertible matrices, called **transformation matrices**.
A geometric transformation is defined as a one-to-one mapping of a point space to itself, which preservers some geometric relations of figures. - [Geometric Programming for Computer Aided Design](https://books.google.it/books?vid=ISBN9780471899426)

This library allows us to:
- generate transformation matrices for the following operations: **translation**, **rotation**, **scale**, **shear**, **skew**
- merge multiple transformation matrices in a single matrix that is the **composition of multiple matrices**
- work with strings in both directions: **parse**, **render**
- **apply a transformation matrix to point(s)**
- **decompose a matrix into translation, scaling and rotation components, with flip decomposition support**

# Documentation
- [How to handle gestures with transformation-matrix](https://github.com/chrvadala/transformation-matrix/blob/main/docs/gestures.md)
- [APIs](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md)
  - Basic Operations
    - [`identity()`](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md#identity)
    - [`flipX()`](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md#flipX)
    - [`flipY()`](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md#flipY)
    - [`flipOrigin()`](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md#flipOrigin)
    - [`rotate(angle, [cx], [cy])`](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md#rotate)
    - [`rotateDEG(angle, [cx], [cy])`](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md#rotateDEG)
    - [`scale(sx, [sy], [cx], [cy])`](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md#scale)
    - [`shear(shx, shy)`](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md#shear)
    - [`skew(ax, ay)`](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md#skew)
    - [`skewDEG(ax, ay)`](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md#skewDEG)
    - [`smoothMatrix(matrix, [precision])`](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md#smoothMatrix)
    - [`translate(tx, [ty])`](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md#translate)
    - [`inverse(matrix)`](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md#inverse)

  - Calculate
    - [`fromDefinition(definitionOrArrayOfDefinition)`](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md#fromDefinition)
    - [`fromObject(object)`](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md#fromObject)
    - [`fromString(string)`](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md#fromString)
    - [`fromTransformAttribute(transformString)`](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md#fromTransformAttribute)
    - [`fromTriangles(t1, t2)`](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md#fromTriangles)

  - Validate
    - [`isAffineMatrix(object)`](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md#isAffineMatrix)

  - Apply
    - [`applyToPoint(matrix, point)`](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md#applyToPoint)
    - [`applyToPoints(matrix, points)`](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md#applyToPoints)

  - Stringify
    - [`toCSS(matrix)`](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md#toCSS)
    - [`toSVG(matrix)`](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md#toSVG)
    - [`toString(matrix)`](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md#toString)

  - Compose
    - [`transform(matrices)`](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md#transform)
    - [`compose(matrices)`](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md#compose)

  - Decompose
    - [`decomposeTSR(matrix, flipX, flipY)`](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md#decomposeTSR)

  - Moving points (gestures)
    - [`fromOneMovingPoint (startingPoint, endingPoint)`](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md#fromonemovingpointstartingpoint-endingpoint)
    - [`fromTwoMovingPoints (startingPoint1, startingPoint2, endingPoint1, endingPoint2)`](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md#fromTwoMovingPoints)

# Install
```sh
npm install transformation-matrix
```
or
```html
<script src="https://unpkg.com/transformation-matrix@2"></script>
```

# Example
```js
import {scale, rotate, translate, compose, applyToPoint} from 'transformation-matrix';
let {scale, rotate, translate, compose, applyToPoint} = window.TransformationMatrix;
let {scale, rotate, translate, compose, applyToPoint} = require('transformation-matrix')

let matrix = compose(
  translate(40,40),
  rotate(Math.PI/2),
  scale(2, 4)
);

applyToPoint(matrix, {x: 42, y: 42});
// { x: -128, y: 124.00000000000001 }

applyToPoint(matrix, [16, 24]);
//  [ -56, 72 ]
```

# Changelog
- **0.0** - Preview version
- **1.0** - First public version
- **1.1** - Splits lib into different files
- **1.2** - Adds shear operation
- **1.3** - Adds umd support
- **1.4** - Adds typescript definitions
- **1.5** - Upgrades deps
- **1.6** - Adds optional parameter support on `translate(tx)`, `scale(sx)`, `rotate(angle, cx, cy)`
- **1.7** - Upgrades deps
- **1.8** - Fixes [#12](https://github.com/chrvadala/transformation-matrix/issues/12), Adds `fromTransformAttribute`, Discontinues node 4 support
- **1.9** - Adds `skew(ax, ay)`, Upgrades deps, Improves `fromTransformAttribute`
- **1.10**- Updates typescript definitions [#15](https://github.com/chrvadala/transformation-matrix/pull/15)
- **1.11**- Upgrades deps
- **1.12**- Migrates tests on [Jest](https://jestjs.io/), Integrates [standard.js](https://standardjs.com/), Upgrades deps
- **1.13**- Adds `compose` function, Upgrades deps, Exposes skew operation [#37](https://github.com/chrvadala/transformation-matrix/pull/37)
- **1.14**- Adds support for points defined as `Array` in the form `[x, y]` [#38](https://github.com/chrvadala/transformation-matrix/pull/38)
- **1.15**- Adds `fromTriangle` and `smoothMatrix` functions [#41](https://github.com/chrvadala/transformation-matrix/issues/41)
- **2.0**- Migrates to Babel 7 and updates dependencies; introduces `fromDefinition` function; breaking changes on `fromTransformAttribute` function; improves docs
- **2.1**- Upgrades deps; Adds Node.js v12 to CI
- **2.2**- Upgrades deps; Improves typescript definition [#66](https://github.com/chrvadala/transformation-matrix/pull/66)
- **2.3**- Adds `(cx,cy)` on `scale` function [#62](https://github.com/chrvadala/transformation-matrix/pull/62); Improves typescript definition [#66](https://github.com/chrvadala/transformation-matrix/pull/67); Upgrades deps
- **2.4**- Improves typescript definition [#75](https://github.com/chrvadala/transformation-matrix/pull/75)
- **2.5**- Upgrades deps; Deprecates NodeJS 8; Adds NodeJs 14 support
- **2.6**- Upgrades deps; Fixes fromTransformAttribute function [#84](https://github.com/chrvadala/transformation-matrix/pull/84)
- **2.7**- Upgrades deps;
- **2.8**- Upgrades deps;
- **2.9**- Adds `flipX()`, `flipY()`, `flipOrigin()` functions; Deprecates NodeJS 12 and adds NodeJS 16 support; Upgrades deps;  
- **2.10** - Adds `decomposeTSR()` function [#88](https://github.com/chrvadala/transformation-matrix/pull/88); Upgrades deps;
- **2.11** - Migrates from yarn to npm; Upgrades deps; New [APIs documentation](https://github.com/chrvadala/transformation-matrix/blob/main/docs/api.md); Integrates [chrvadala/github-actions](https://github.com/chrvadala/github-actions);
- **2.12** - Migrates from PEG.js to Peggy [#89](https://github.com/chrvadala/transformation-matrix/pull/89); Upgrades deps;
- **2.13** - Upgrades deps; Improves typescript definition; Upgrades gh-actions deps;
- **2.14** - Upgrades deps; Adds `fromOneMovingPoint` and `fromTwoMovingPoints` functions [#95](https://github.com/chrvadala/transformation-matrix/pull/95)
- **2.15** - Removes circular dependencies [#97](https://github.com/chrvadala/transformation-matrix/pull/97); Upgrades gh-actions and deps
- **2.16** - Upgrades deps; Upgrades gh-actions deps;

# Contributors
- [chrvadala](https://github.com/chrvadala) (author)
- [forabi](https://github.com/forabi)
- [nidu](https://github.com/nidu) (PEG.js descriptor)
- [aubergene](https://github.com/aubergene)
- [SophiaLi1](https://github.com/SophiaLi1)
- [Shuhei-Tsunoda](https://github.com/Shuhei-Tsunoda)
- [antonyRoberts](https://github.com/antonyRoberts)
- [mcwebb](https://github.com/mcwebb)
- [signalwerk](https://github.com/signalwerk)
- [estollnitz](https://github.com/estollnitz)
- [rodrigoapereira](https://github.com/rodrigoapereira)
- [formatlos](https://github.com/formatlos)
- [benhjames](https://github.com/benhjames)
- [hillin](https://github.com/hillin)
- [jedrzejchalubek](https://github.com/jedrzejchalubek)

# Some projects using transformation-matrix
- [**React Planner**](https://github.com/cvdlab/react-planner)
- [**React SVG Pan Zoom**](https://github.com/chrvadala/react-svg-pan-zoom)
- [**ngx-graph**](https://github.com/swimlane/ngx-graph)
- [**learn-anything**](https://github.com/learn-anything/learn-anything)
- [**Others...**](https://github.com/chrvadala/transformation-matrix/network/dependents)
- Pull request your project!
