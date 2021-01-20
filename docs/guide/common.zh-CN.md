---
title: 通用配置
order: 3
nav:
  title: 使用文档
  order: 1
---

### 通用配置

| 配置项 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onReady | 图表加载回调 | (chart)=> void | - |
| onEvent | 图表事件绑定 | (chart, event)=> void | - |
| loading | 是否显示加载状态，异步获取数据时使用 | boolean | false |
| loadingTemplate | 自定义 loading 组件 | React.ReactElement | - |
| errorTemplate | 图表加载出错时呈现的模板 | (e: Error) => React.ReactNode | - |
| className | 图表容器 class | string | - |
| style | 图表容器 style | React.CSSProperties | - |
| chartRef | 图表实例引用 | (React.MutableRefObject&lt;Chart&gt;)=> void | - |
