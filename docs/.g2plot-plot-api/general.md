

## title: API

### Plot Theme

#### Theme

Built-in defaults: 'default' and 'dark'

```ts
{
  theme: 'default', // 'dark',
}
```

#### Theme attributes

In addition to using the built-in 'default' and 'dark' themes, you can also modify some of the theme content by setting the theme properties.

The following table lists the specific properties on the configuration items that make up the topic:

| Properties            | Type       | Description                                                                                                   |
| --------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| defaultColor          | *string*   | Theme color                                                                                                   |
| padding               | *number*   | number\[]                                                                                                      |
| fontFamily            | *string*   | Chart font                                                                                                    |
| colors10              | *string\[]* | Category color palette, used when the number of categories is less than 10                                    |
| colors20              | *string\[]* | Category color palette, used when the number of categories is greater than 10                                 |
| columnWidthRatio      | *number*   | General histogram width ratio, 0-1 range of values                                                            |
| maxColumnWidth        | *number*   | Maximum width of histogram, pixel value                                                                       |
| minColumnWidth        | *number*   | Minimum width of histogram, pixel value                                                                       |
| roseWidthRatio        | *number*   | Rose width ratio, 0-1 range of value                                                                          |
| multiplePieWidthRatio | number     | Multilayer pie and loop ratio, 0-1 range values                                                               |
| geometries            | *object*   | Configure the style of each shape for each Geometry, including the default style and the style for each state |
| components            | *object*   | Configure theme samples for axes, legends, tooltips, and annotations                                          |
| labels                | *object*   | Configure the theme style of the label under Geometry                                                         |
| innerLabels           | *object*   | Configure Geometry to display the Labels theme style inside the graph                                         |
| pieLabels             | *object*   | Configure the theme style of pie chart labels                                                                 |

usage:

```ts
{
  theme: {
    colors10: [
      '#FF6B3B',
      '#626681',
      '#FFC100',
      '#9FB40F',
      '#76523B',
      '#DAD5B5',
      '#0E8E89',
      '#E19348',
      '#F383A2',
      '#247FEA',
    ];
  }
}
```

#### Update theme

usage：

```ts
// example 1:
plot.update({ theme: 'dark' });

// example 2:
plot.update({ theme: { defaultColor: '#FF6B3B' } });
```

#### Custom theme

In addition, G2 provides a custom topic mechanism to define a new topic structure, allowing users to switch and define chart topics.

```ts
import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie: React.FC = () => {
  G2.registerTheme('new-theme', {
    defaultColor: '#FF6B3B',
    colors10: [
        '#FF6B3B',
        '#626681',
        '#FFC100',
        '#9FB40F',
        '#76523B',
        '#DAD5B5',
        '#0E8E89',
        '#E19348',
        '#F383A2',
        '#247FEA'
    ],
    colors20: [
        '#FF6B3B',
        '#626681',
        '#FFC100',
        '#9FB40F',
        '#76523B',
        '#DAD5B5',
        '#0E8E89',
        '#E19348',
        '#F383A2',
        '#247FEA',
        '#2BCB95',
        '#B1ABF4',
        '#1D42C2',
        '#1D9ED1',
        '#D64BC0',
        '#255634',
        '#8C8C47',
        '#8CDAE5',
        '#8E283B',
        '#791DC9'
    ]
});
const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    theme: 'new-theme'
};
  return <Pie {...config} />;
};

export default DemoPie;


```
