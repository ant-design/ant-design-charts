---
title: 介绍
order: 1
nav:
  title: 使用文档
  order: 1
---

### 简介

[Ant Design Charts](https://github.com/ant-design/ant-design-charts) 是 [G2Plot](https://antv-g2plot.gitee.io/zh/examples/gallery) 的 React 版本，基于 React、TypeScript 封装了所有的 G2Plot 图表，继承了 G2Plot 的所有配置，对 React 技术栈的同学更加友好，<b>同一团队开发</b>。

- 开箱即用：默认呈现高质量图表，将对开发体验及用户体验的研究沉淀入图表的默认配置项

- 易于配置：用户能够根据具体业务需要较为轻松的调整图表细节

- 体验良好：视觉和交互体验聚焦于如何能够**展示和发现信息**"这一图表本源的职能上

<br /> 像使用组件一样生成图表，开箱即用，你甚至不需要修改任何配置项就可以满足需求，真正的默认好用，有没有心动想试试的感觉。

<br />![image.png](https://gw.alipayobjects.com/zos/antfincdn/TcUwTMuNxI/0a9ac684-e862-4889-b783-e0a75a0e3138.png#align=left&display=inline&height=951&name=image.png&originHeight=1901&originWidth=2000&size=968667&status=done&style=none&width=1000)

### 为什么？

也许你会问，为什么我不直接使用 G2Plot ？<br />当然，你可以选择 G2Plot ，因为我们就是基于 G2Plot 进行开发的，但如果你的技术栈是基于 React 的话，我们会有如下优点。

- G2Plot 的所有图表，都有，新增的图表，几乎可以做到同步更新。

- 你无需感知 G2Plot 里面的一堆函数，例如 `destroy()`、`changeData()`、`updateConfig()` 等，你只需要关心 data 和 config 即可，所有操作都在 Ant Design Charts 封装，降低了学习成本。

- Tooltip 支持 ReactNode 。

- 提供额外 API , `downloadImage()`、`toDataURL()` 。

- 如果实在有不满足你需求的，我们可以给你返回 chart 实例，你可以直接操作。
