---
title: overview
order: 1
---

In Ant Design Charts, **Theme** refers to the default styles of the graphics in a chart.

Themes can be configured at the view level:

```js
({
  type: 'view',
  theme: {},
});
```

```js
chart.theme({});
```

Themes can also be configured at the mark level:

```js
({
  type: 'interval',
  theme: {},
});
```

```js
chart.interval().theme({});
{
  "type": "interval"
}
```

## Switching Themes

Ant Design Charts provides built-in themes that can be switched using the `type` property.

```js
chart.theme({ type: 'classicDark' });
```

## Custom Themes

There are two ways to customize the theme, the first is to specify in theme that you want to override certain theme styles:

```js
const theme = {};
const options = {
  theme: {
    type: 'light',
    ...theme,
  },
};
chart.theme({ type: 'light', ...theme });
const theme = {};

// Spec format
const options = {
  theme: {
    type: 'light',
    ...theme,
  },
};

// API format
chart.theme({ type: 'light', ...theme });
const theme = {};

// Spec format
const options = {
  theme: {
    type: 'light',
    ...theme,
  },
};

// API format
chart.theme({ type: 'light', ...theme });
const theme = {};

// Spec format
const options = {
  theme: {
    type: 'light',
    ...theme,
  },
};

// API format
chart.theme({ type: 'light', ...theme });
const theme = {};

// Spec format
const options = {
  theme: {
    type: 'light',
    ...theme,
  },
};

// API format
chart.theme({ type: 'light', ...theme });
const theme = {};

// Spec format
const options = {
  theme: {
    type: 'light',
    ...theme,
  },
};

// API format
chart.theme({ type: 'light', ...theme });
const theme = {};

// Spec format
const options = {
  theme: {
    type: 'light',
    ...theme,
  },
};

// API format
chart.theme({ type: 'light', ...theme });
const theme = {};

// Spec format
const options = {
  theme: {
    type: 'light',
    ...theme,
  },
};

// API format
chart.theme({ type: 'light', ...theme });
const theme = {};

// Spec format
const options = {
  theme: {
    type: 'light',
    ...theme,
  },
};

// API format
chart.theme({ type: 'light', ...theme });
const theme = {};

// Spec format
const options = {
  theme: {
    type: 'light',
    ...theme,
  },
};

// API format
chart.theme({ type: 'light', ...theme });
const theme = {};

// Spec format
const options = {
  theme: {
    type: 'light',
    ...theme,
  },
};

// API format
chart.theme({ type: 'light', ...theme });
const theme = {};

// Spec format
const options = {
  theme: {
    type: 'light',
    ...theme,
  },
};

// API format
chart.theme({ type: 'light', ...theme });
const theme = {};

// Spec format
const options = {
  theme: {
    type: 'light',
    ...theme,
  },
};

// API format
chart.theme({ type: 'light', ...theme });
const theme = {};

// Spec format
const options = {
  theme: {
    type: 'light',
    ...theme,
  },
};

// API format
chart.theme({ type: 'light', ...theme });
const theme = {};

// Spec format
const options = {
  theme: {
    type: 'light',
    ...theme,
  },
};

// API format
chart.theme({ type: 'light', ...theme });
const theme = {};

// Spec format
const options = {
  theme: {
    type: 'light',
    ...theme,
  },
};

// API format
chart.theme({ type: 'light', ...theme });
const theme = {};

// Spec format
const options = {
  theme: {
    type: 'light',
    ...theme,
  },
};

// API format
chart.theme({ type: 'light', ...theme });
const theme = {};

// Spec format
const options = {
  theme: {
    type: 'light',
    ...theme,
  },
};

// API format
chart.theme({ type: 'light', ...theme });
{
  "call": {}
}
```

The following example overrides the default color of the light theme:

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {

  const config ={
      data: {
        type: 'fetch',
        value:
          'https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv',
      },
      xField: 'letter',
      yField: 'frequency',
      axis: { y: { labelFormatter: '.0%' } },
      theme: {
        color: 'red', // Set the default color to red
      }
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

If you want to customize all theme styles, you can add a new theme, override the default theme, register it, and then use it.

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {

  const config ={
      data: {
        type: 'fetch',
        value:
          'https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv',
      },
      xField: 'letter',
      yField: 'frequency',
      axis: { y: { labelFormatter: '.0%' } },
      // use the theme
      theme: { type: 'custom' }
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

The default themes included are:

- `Ant Design Charts.Light`
- `Ant Design Charts.Dark`
- `Ant Design Charts.Classic`
- `Ant Design Charts.ClassicDark`
- `Ant Design Charts.Academy`

For a complete theme configuration, you can refer to the [light](https://github.com/antvis/Ant Design Charts/blob/v5/src/theme/light.ts) theme.
