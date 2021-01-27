---
title: FAQ
order: 5
nav:
  title: 使用文档
  order: 1
---

## FAQ

以下整理了一些 Ant Design Charts 社区常见的问题和官方答复。

### 1、 G2、G2Plot、Ant Design Charts 什么关系？

- 同一团队开发。
- G2 是 G2Plot 的底层依赖，使用了图形语法，使用成本相对较高，功能强大。
- G2Plot 是 G2 的上层封装，把图形语法装换成了配置项。
- Ant Design Charts 是 G2Plot 的 React 版本，功能和 G2Plot 同步，并内置了一些图相关的图表，例如流程图、组织架构图等。
- 其它一些图表是其它团队的同学基于 G2 或 G2Plot 实现。

### 2、Object(...) is not a function

<img src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*GnrEQZUVa5AAAAAAAAAAAAAAARQnAQ" alt="示例" />

该问题一般是因为 React 版本过低，不支持 hooks 引起的，升级到 16 最新版本即可。

### 3、如何监听事件并获取当前值

```tsx | pure
<Bar onReady={(plot)=>{
  plot.chart.on('plot:click', (evt)=>{
    const { x, y } = evt;
    console.log(plot.chart.getTooltipItems({ x, y }));
  })
}} />
```

### 更多问题

请到 [GitHub issues](https://github.com/ant-design/ant-design-charts/issues) 进行反馈，搜索是否有类似问题。我们会尽快响应和相应改进这篇文档。


- 钉钉群组号码: 30233731

<img src="https://gw.alipayobjects.com/zos/antfincdn/9sHnl5k%26u4/dingdingqun.png" width="200" height="266" />
