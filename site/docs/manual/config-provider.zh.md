---
title: 全局配置
order: 2
---

Ant Design Charts 支持定制主题外观和组件默认配置，以满足业务和品牌上多样化的视觉需求。这主要是通过 `ConfigProvider` 组件实现的。

## 定制主题

您可以选择内置主题：

```jsx
import { ConfigProvider } from '@ant-design/charts';

<ConfigProvider common={{ theme: 'dark' }}>
  <MyApp />
</ConfigProvider>;
```

或者创建自己的主题：

```jsx
import { ConfigProvider } from '@ant-design/charts';

<ConfigProvider
  common={{
    theme: {
      type: 'dark', // 基于 dark 主题定制
      color: '#66ccff',
      category10: ['#123456', '#654321', ... ],
      axis: {
        labelFill: '#666666',
      }
    },
  }}
>
  <MyApp />
</ConfigProvider>;
```

👉 [查看完整主题选项](https://github.com/antvis/G2/blob/v5/src/theme/create.ts)

## 组件配置

全局组件配置将大大提高您使用自定义图表组件的效率。支持所有图表组件的所有配置。

```jsx
import { ConfigProvider } from '@ant-design/charts';

<ConfigProvider
  // 折线图配置
  line={{
    shape: 'smooth',
    style: {
      lineWidth: 2,
    },
  }}
  // 饼图配置
  pie={{
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
  }}
>
  <MyApp />
</ConfigProvider>;
```
