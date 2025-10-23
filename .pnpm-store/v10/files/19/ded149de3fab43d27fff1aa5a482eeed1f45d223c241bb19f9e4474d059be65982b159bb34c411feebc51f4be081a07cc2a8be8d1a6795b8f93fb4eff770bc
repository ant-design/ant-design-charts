[![Build Status](https://travis-ci.org/gyosh/pdfast.svg)](https://travis-ci.org/gyosh/pdfast)
[![npm version](https://badge.fury.io/js/pdfast.svg)](https://badge.fury.io/js/pdfast)

# About

Kernel Density Estimation, generating probability density function (pdf) using triangular kernel, optimized to run in O(N + K).

Where:

  * N: number of elements in the sample.
  * K: number of points to represent the pdf.

# API

## create(arr, options)

Create pdf with given array and options.

Options:

  * `min`: min value for the pdf's x range. If resulting pdf won't fit, the pdf's left part will be squeezed, as [described here](http://stats.stackexchange.com/questions/65866/good-methods-for-density-plots-of-non-negative-variables-in-r). Defaults to smallest value in the array minus some threshold.
  * `max`: max value for the pdf's x range. If resulting pdf won't fit, the pdf's right will be squeezed. Defaults to largest value in the array plus some threshold.
  * `size`: number of points to represent the pdf. Defaults to 50.
  * `width`: determine how many points to the left and right does an element affect, similar to *bandwidth* in kernel density estimation. Defaults to 2.

```js
var arr = [1, 2, 3, 3, 4, 5, 5, 5, 6, 8, 9, 9];
var options = {
  min: 0,
  max: 10,
  size: 12,
  width: 2
};

var pdf = pdfast.create(arr, options);
```

`pdf`'s value:
```
[ { x: 0, y: 0.020833333333333332 },
  { x: 0.9090909090909091, y: 0.0625 },
  { x: 1.8181818181818181, y: 0.10416666666666667 },
  { x: 2.727272727272727, y: 0.125 },
  { x: 3.6363636363636362, y: 0.14583333333333334 },
  { x: 4.545454545454545, y: 0.16666666666666666 },
  { x: 5.454545454545454, y: 0.10416666666666667 },
  { x: 6.363636363636363, y: 0.041666666666666664 },
  { x: 7.2727272727272725, y: 0.08333333333333333 },
  { x: 8.181818181818182, y: 0.10416666666666667 },
  { x: 9.09090909090909, y: 0.041666666666666664 },
  { x: 10, y: 0 } ]
```

## getExpectedValueFromPdf(pdf)

```js
expect(
  pdfast.getExpectedValueFromPdf([
    {x: 1, y: 0.2},
    {x: 2, y: 0.3},
    {x: 3, y: 0.3},
    {x: 4, y: 0.2},
    {x: 5, y: 0.0}
  ])
).closeTo(2.5, 1e-8);
```

## getXWithLeftTailArea(pdf, area)

```js
var pdf = [
  {x: 1, y: 0.2},
  {x: 2, y: 0.4},
  {x: 3, y: 0.3},
  {x: 4, y: 0.075},
  {x: 5, y: 0.025}
];

expect(pdfast.getXWithLeftTailArea(pdf, 0)).equal(1);
expect(pdfast.getXWithLeftTailArea(pdf, 0.12)).equal(1);
expect(pdfast.getXWithLeftTailArea(pdf, 0.19)).equal(1);
expect(pdfast.getXWithLeftTailArea(pdf, 0.21)).equal(2);
expect(pdfast.getXWithLeftTailArea(pdf, 0.95)).equal(4);
expect(pdfast.getXWithLeftTailArea(pdf, 1)).equal(5);
```

## getPerplexity(pdf)

```js
expect(
  pdfast.getPerplexity([
    {x: 1, y: 0.2},
    {x: 2, y: 0.4},
    {x: 3, y: 0.3},
    {x: 4, y: 0.075},
    {x: 5, y: 0.025}
  ])
).closeTo(3.8041316039860336, EPS);
```

## getUnifiedMinMax(arr, options)

Takes the same options as `create`. Returns an object with key `min` and `max`.

If you left `min` or `max` or both to be non number, it will be filled with number which will fit the data distribution.

## getUnifiedMinMaxMulti([arr1, arr2, ...], options)

Similar with `getUnifiedMinMax`, but takes list of arrays. The generated `min` and/or `max` will fit all the arrays' distribution.

Useful when trying to generate pdf for multiple labelled data and want to display them in the same chart. With same `min` and `max`, one can combine the pdf correctly.

# License
MIT
