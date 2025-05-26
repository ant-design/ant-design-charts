---
title: Global Configuration
order: 2
---

Ant Design Charts allows you to customize themes and component configuration to satisfy business and brand requirements. `ConfigProvider` component makes this possible.

## Customize theme

You can pick a built-in theme:

```jsx
import { ConfigProvider } from '@ant-design/charts';

<ConfigProvider common={{ theme: 'dark' }}>
  <MyApp />
</ConfigProvider>;
```

Or create your own theme:

```jsx
import { ConfigProvider } from '@ant-design/charts';

<ConfigProvider
  common={{
    theme: {
      type: 'dark', // based on dark theme
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

👉 [Check full theme options](https://github.com/antvis/G2/blob/v5/src/theme/create.ts)

## Component configuration

Global component configuration make it easier and faster to create customized charts. All configuration of all kinds of charts are supported.

```jsx
import { ConfigProvider } from '@ant-design/charts';

<ConfigProvider
  // For Line Chart
  line={{
    shape: 'smooth',
    style: {
      lineWidth: 2,
    },
  }}
  // For Pie Chart
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
