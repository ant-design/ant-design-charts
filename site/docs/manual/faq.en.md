---
title: FAQ
order: 8
---

## FAQ

The following are some common questions and official answers from the Ant Design Charts community.

### 1. Object(...) is not a function

<img src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*GnrEQZUVa5AAAAAAAAAAAAAAARQnAQ" alt="Example" />

Possible causes:

- React version is too low and doesn't support hooks. Upgrade to version 16.8.4 or the latest version.
- Using version 2.x of ant-design-pro, causing underlying dependency conflicts. It's recommended to upgrade pro to the latest version.
- Dependency conflicts with BizCharts.


### 2. Bundle size is too large, how to load on demand

Solution 1: Import from es

Import from the corresponding sub-package

```ts
// Statistical charts
import Line from '@ant-design/plots/es/components/line';
```

Solution 2: Enable sideEffects

Enable webpack sideEffects configuration, which should be enabled by default in webpack 4+.

```ts
{
  optimization: {
     sideEffects: true,
  }
}
```

Solution 3: Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)

```ts
  // Install dependencies
  npm install babel-plugin-import -D

  // Configure .babelrc file
  {
    "plugins": [
      ["import", {
        "libraryName": "@ant-design/plots",
        "libraryDirectory": "es"
      }],
      ["import", {
        "libraryName": "@ant-design/graphs",
        "libraryDirectory": "es"
      }],
      ["import", {
        "libraryName": "@ant-design/maps",
        "libraryDirectory": "es"
      }]
    ]
  }
```

### 3. Why does the chart keep redrawing

Due to the React mechanism, by default, whenever the parent component has a state update, all child components will re-render, causing the chart to redraw again. Please refer to this [example](https://codesandbox.io/s/pedantic-lucy-tylzl?file=/App.tsx)

### 4. IE Compatibility

Refer to [ChartsIE](https://github.com/lxfu1/charts-ie)

### More Questions

Please provide feedback on [GitHub issues](https://github.com/ant-design/ant-design-charts/issues) and search for similar issues. We will respond as soon as possible and improve this document accordingly.
