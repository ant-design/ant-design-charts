# SVGO Browser

This package is fork of original svgo tool and focused on two things:

- providing support for browser usage
- better svgo api for node.js interface

This readme includes documentation only for changes and does not cover original features. To get more information about svgo please refer to [original repository](https://github.com/svg/svgo)

## Installation

```
npm install svgo-browser

yarn add svgo-browser
```

## Usage

svgo-browser can be used as is with node, but only with build tools (webpack, rollup, parcel, .etc) in browser as it uses node require syntax under the hood. Package includes everything from original svgo plus some extra helpers that can be imported separately.

### Usage with build tool

Was tested to work properly with webpack

```js
// Test data will be used in all examples to illustrate output
const testData = `
  <svg version="1.1" width="10" height="20">
      test
  </svg>
`;
```

**Optimize with all default configuration:**

```js
import optimize from 'svgo-browser/lib/optimize';

optimize(testData).then(console.log); // -> <svg viewBox="0 0 10 20">test</svg>
```

**Get separate instance:**

```js
import getSvgoInstance from 'svgo-browser/lib/get-svgo-instance';

const svgo = getSvgoInstance();
svgo.optimize(testData).then(console.log); // -> { data: "<svg viewBox="0 0 10 20">test</svg>", info: {}}
```

**Provide plugins to svgo instance:**

```js
import getSvgoInstance from 'svgo-browser/lib/get-svgo-instance';

// everything included in default configuration
const svgo = getSvgoInstance({
  cleanupAttrs: true,
  removeDoctype: true,
  removeXMLProcInst: true,
  removeComments: true,
  removeMetadata: true,
  removeTitle: true,
  removeDesc: true,
  removeUselessDefs: true,
  removeEditorsNSData: true,
  removeEmptyAttrs: true,
  removeHiddenElems: true,
  removeEmptyText: true,
  removeEmptyContainers: true,
  removeViewBox: false,
  cleanupEnableBackground: true,
  convertStyleToAttrs: true,
  convertColors: true,
  convertPathData: true,
  convertTransform: true,
  removeUnknownsAndDefaults: true,
  removeNonInheritableGroupAttrs: true,
  removeUselessStrokeAndFill: true,
  removeUnusedNS: true,
  cleanupIDs: true,
  cleanupNumericValues: true,
  moveElemsAttrsToGroup: true,
  moveGroupAttrsToElems: true,
  collapseGroups: true,
  removeRasterImages: false,
  mergePaths: true,
  convertShapeToPath: true,
  sortAttrs: true,
  removeDimensions: true,
  removeAttrs: {
    attrs: '(stroke|fill)',
  },
});

svgo.optimize(testData).then(console.log); // -> <svg viewBox="0 0 10 20">test</svg>
```
