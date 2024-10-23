---
title: 通用属性
---

> Tips: 以下通用属性适用于 charts 组件，不支持的组件会单独说明。

| 参数                | 说明                                                       | 类型                            | 默认值  |
| ------------------- | ---------------------------------------------------------- | ------------------------------- | ------- |
| containerStyle      | 配置图表容器的样式，接受一个包含 CSS 属性和值的对象        | `React.CSSProperties`           | -       |
| containerAttributes | 为图表容器添加自定义的 HTML 属性                           | `Record<string, any>`           | -       |
| className           | 添加在组件最外层的 className                               | `string`                        | -       |
| loading             | 表示图表是否处于加载状态                                   | `boolean`                       | `false` |
| loadingTemplate     | 自定义加载模板，当图表加载时显示的元素                     | `React.ReactElement`            | -       |
| errorTemplate       | 自定义错误模板，当图表出错时调用的函数，返回显示的错误信息 | `(e: Error) => React.ReactNode` | -       |
