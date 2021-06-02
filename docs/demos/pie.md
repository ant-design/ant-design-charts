---
title: Pie
order: 5
---

### Pie Chart

```tsx
import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie: React.FC = () => {
  var data = [
    {
      type: 'Category One',
      value: 27,
    },
    {
      type: 'Category Two',
      value: 25,
    },
    {
      type: 'Category Three',
      value: 18,
    },
    {
      type: 'Category Four',
      value: 15,
    },
    {
      type: 'Category Five',
      value: 10,
    },
    {
      type: 'other',
      value: 5,
    },
  ];
  var config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: function content(_ref) {
        var percent = _ref.percent;
        return ''.concat(percent * 100, '%');
      },
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [{ type: 'element-active' }],
  };
  return <Pie {...config} />;
};

export default DemoPie;
```

### Pie Chart-Legend interaction

```tsx
import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie: React.FC = () => {
  var data = [
    {
      type: 'Category One',
      value: 27,
    },
    {
      type: 'Category Two',
      value: 25,
    },
    {
      type: 'Category Three',
      value: 18,
    },
    {
      type: 'Category Four',
      value: 15,
    },
    {
      type: 'Category Five',
      value: 10,
    },
    {
      type: 'other',
      value: 5,
    },
  ];
  var config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
  };
  return <Pie {...config} />;
};

export default DemoPie;
```

### Pie Chart-External graphic label

```tsx
import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie: React.FC = () => {
  var data = [
    {
      type: 'Category One',
      value: 27,
    },
    {
      type: 'Category Two',
      value: 25,
    },
    {
      type: 'Category Three',
      value: 18,
    },
    {
      type: 'Category Four',
      value: 15,
    },
    {
      type: 'Category Five',
      value: 10,
    },
    {
      type: 'other',
      value: 5,
    },
  ];
  var config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: { type: 'outer' },
    interactions: [{ type: 'element-active' }],
  };
  return <Pie {...config} />;
};

export default DemoPie;
```

### Pie Chart-Set condition status

```tsx
import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie: React.FC = () => {
  let ref;
  var data = [
    {
      type: 'Category One',
      value: 27,
    },
    {
      type: 'Category Two',
      value: 25,
    },
    {
      type: 'Category Three',
      value: 18,
    },
    {
      type: 'Category Four',
      value: 15,
    },
    {
      type: 'Category Five',
      value: 10,
    },
    {
      type: 'other',
      value: 5,
    },
  ];
  var config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'inner',
      offset: '-30%',
      content: '{name}',
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    state: {
      active: {
        style: {
          lineWidth: 0,
          fillOpacity: 0.65,
        },
      },
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
  };
  useEffect(() => {
    if (ref) {
      ref.setState('active', (data) => data.type === 'Category One');
      ref.setState(
        'selected',
        (data) => data.type === 'Category One' || data.type === 'Category Two',
      );
    }
  }, []);

  return <Pie {...config} chartRef={(chartRef) => (ref = chartRef)} />;
};

export default DemoPie;
```

### Pie Chart-Textured

```tsx
import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie: React.FC = () => {
  var data = [
    {
      sex: 'Male',
      sold: 0.45,
    },
    {
      sex: 'Female',
      sold: 0.55,
    },
  ];
  var config = {
    appendPadding: 10,
    data: data,
    angleField: 'sold',
    colorField: 'sex',
    radius: 0.8,
    legend: false,
    label: {
      type: 'inner',
      offset: '-50%',
      style: {
        fill: '#fff',
        fontSize: 18,
        textAlign: 'center',
      },
    },
    pieStyle: function pieStyle(_ref) {
      var sex = _ref.sex;
      if (sex === 'Male') {
        return { fill: 'p(a)https://gw.alipayobjects.com/zos/rmsportal/nASTPWDPJDMgkDRlAUmw.jpeg' };
      }
      return { fill: 'p(a)https://gw.alipayobjects.com/zos/rmsportal/ziMWHpHSTlTzURSzCarw.jpeg' };
    },
  };
  return <Pie {...config} />;
};

export default DemoPie;
```

### Pie Chart-Spider layout tags

```tsx
import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie: React.FC = () => {
  var data = [
    {
      type: 'Category One',
      value: 27,
    },
    {
      type: 'Category Two',
      value: 25,
    },
    {
      type: 'Category Three',
      value: 18,
    },
    {
      type: 'Category Four',
      value: 15,
    },
    {
      type: 'Category Five',
      value: 10,
    },
    {
      type: 'other',
      value: 5,
    },
  ];
  var config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
  };
  return <Pie {...config} />;
};

export default DemoPie;
```

### Ring diagram

```tsx
import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie: React.FC = () => {
  var data = [
    {
      type: 'Category One',
      value: 27,
    },
    {
      type: 'Category Two',
      value: 25,
    },
    {
      type: 'Category Three',
      value: 18,
    },
    {
      type: 'Category Four',
      value: 15,
    },
    {
      type: 'Category Five',
      value: 10,
    },
    {
      type: 'other',
      value: 5,
    },
  ];
  var config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        formatter: function formatter() {
          return 'AntV\nG2Plot';
        },
      },
    },
  };
  return <Pie {...config} />;
};

export default DemoPie;
```

### Ring Diagram-Statistical Indicator Card

```tsx
import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie: React.FC = () => {
  var data = [
    {
      type: 'Category One',
      value: 27,
    },
    {
      type: 'Category Two',
      value: 25,
    },
    {
      type: 'Category Three',
      value: 18,
    },
    {
      type: 'Category Four',
      value: 15,
    },
    {
      type: 'Category Five',
      value: 10,
    },
    {
      type: 'other',
      value: 5,
    },
  ];
  var config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.64,
    meta: {
      value: {
        formatter: function formatter(v) {
          return ''.concat(v, ' \xA5');
        },
      },
    },
    label: {
      type: 'inner',
      offset: '-50%',
      style: { textAlign: 'center' },
      autoRotate: false,
      content: '{value}',
    },
    interactions: [
      { type: 'element-selected' },
      { type: 'element-active' },
      { type: 'pie-statistic-active' },
    ],
  };
  return <Pie {...config} />;
};

export default DemoPie;
```
