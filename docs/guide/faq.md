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

The React version is too low and does not support hooks. Updated to version 16.

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

### More problems

Please go to [GitHub Issues](https://github.com/ant-design/ant-design-charts/issues) to find out if there are similar problems. We will respond and improve this document as soon as possible.
