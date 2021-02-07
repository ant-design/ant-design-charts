---
title: Introduction
order: 1
nav:
  title: Docs
  order: 1
---

### Ant Design Charts

[Ant Design Charts](https://github.com/ant-design/ant-design-charts) is the React version of [G2Plot](https://antv-g2plot.gitee.io/zh/examples/gallery), based on React, TypeScript encapsulates all G2Plot graphs, inherits all configuration of G2Plot, and is more friendly to students of the React technology stack<b>Same team development</b>.

- Out of the box: Presents high quality charts by default, and precipitates research into the development experience and user experience into the default configuration of the charts

- Easy configuration: users can easily adjust chart details according to specific business needs

- Experience well: Visual and interactive experiences focus on how to display and discover information at the root of the chart function

<br /> Just like using components to generate charts, out of the box, you don't even need to modify any configuration items can meet the requirements, the true default is easy to use, there is no feeling tempted to try.

<br />![image.png](https://gw.alipayobjects.com/zos/antfincdn/TcUwTMuNxI/0a9ac684-e862-4889-b783-e0a75a0e3138.png#align=left&display=inline&height=951&name=image.png&originHeight=1901&originWidth=2000&size=968667&status=done&style=none&width=1000)

### Why?

You might ask, why don't I just use G2Plot? <br /> Of course, you could choose G2Plot, because that's what we're building on, but if your tech stack is based on React, we have the following advantages.

- All the charts in G2Plot are available, and the new charts can be updated almost synchronously.

- You don't need to be aware of a bunch of functions in G2Plot, such as 'destroy()', 'changeData()', 'updateConfig()', etc. Instead, you only need to care about data and config. All the operations are encapsulated in Ant Design Charts, reducing the learning cost.

- Tooltip support ReactNode.

- Provide additional APIs, such as: `downloadImage()`、`toDataURL()` .

- If there are any that do not meet your requirements, we can return chart instance to you, you can operate directly.
