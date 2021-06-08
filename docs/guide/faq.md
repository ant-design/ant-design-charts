---
title: FAQ
order: 5
nav:
  title: Docs
  order: 1
---

## FAQ

Here is a roundup of some common questions and official responses from the Ant Design Charts community.

### 1、 What is the relationship between G2, G2Plot and Ant Design Charts?

- Same team development.
- G2Plot based on G2, which uses grammar of graphics and is relatively expensive to use and powerful.
- G2Plot is an overlay wrapper over G2, replacing the graph syntax with configuration items.
- Ant Design Charts is the React version of G2Plot, which synchronizes functionality with G2Plot and has built-in graph-related Charts such as flowcharts, organizational Charts, etc
- Some of the other charts were implemented by students on other teams based on G2 or G2Plot

### 2、Object(...) is not a function

<img src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*GnrEQZUVa5AAAAAAAAAAAAAAARQnAQ" alt="example" />

Possible reasons:

- React version is too low and does not support hooks. Upgrade to 16.8.4 or the latest version.
- The 2.x version of Ant-Design-Pro is used, resulting in underlying dependency conflict. It is recommended to upgrade Pro to the latest version.

### 3、How to binding event and get current data.

```tsx | pure
<Bar
  onReady={(plot) => {
    plot.chart.on('plot:click', (evt) => {
      const { x, y } = evt;
      console.log(plot.chart.getTooltipItems({ x, y }));
    });
  }}
/>
```

### 4、How do I set the horizontal axis to start at 0

<img src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*NAvlTZ66qzMAAAAAAAAAAAAAARQnAQ" alt="faq">

Horizontal axis is configurable, which can be configured in meta. The optional range is 0~1.

```ts
meta: {
  [xField]: {
    range: [0, 1]
  }
}
```

### 5、How to share a Y axis in DaulAxes plot

You can use `scale.sync` and hide one of the y-axis.

```ts
// 适用于 DualAxes plot
{
  yFields: ['y1', 'y2'],
  meta: {
    y1: { sync: 'y2' },
    y2: { sync: true },
  },
  yAxis: {
    y2: false
  }
}
```

### 6、Package file is too large, how to load on demand

Method 1： Use sideEffects

Enable webpack sideEffcets configuration, webpack 4+ should be enabled by default.

```ts
{
  optimization: {
     sideEffects: true,
  }
}
```

Method 2: Import from es

```ts
import Line from '@ant-design/charts/es/line';
```

Method 3: Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)

```ts
  // install
  npm install babel-plugin-import -D

  // config .babelrc file
  {
    "plugins": [
      ["import", {
        "libraryName": "@ant-design/charts",
        "libraryDirectory": "es"
      }]
    ]
  }
```

### More problems

Please go to [GitHub Issues](https://github.com/ant-design/ant-design-charts/issues) to find out if there are similar problems. We will respond and improve this document as soon as possible.
