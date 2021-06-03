---
title: Bar
order: 2
---

### Basic bar chart

```tsx
import React, { useState, useEffect } from 'react';
import { Bar } from '@ant-design/charts';

const DemoBar: React.FC = () => {
  var data = [
    {
      year: '1951',
      value: 38,
    },
    {
      year: '1952',
      value: 52,
    },
    {
      year: '1956',
      value: 61,
    },
    {
      year: '1957',
      value: 145,
    },
    {
      year: '1958',
      value: 48,
    },
  ];
  var config = {
    data: data,
    xField: 'value',
    yField: 'year',
    seriesField: 'year',
    legend: { position: 'top-left' },
  };
  return <Bar {...config} />;
};

export default DemoBar;
```

### Basic bar chart - custom color

```tsx
import React, { useState, useEffect } from 'react';
import { Bar } from '@ant-design/charts';

const DemoBar: React.FC = () => {
  var data = [
    {
      type: 'Furniture appliances',
      sales: 38,
    },
    {
      type: 'Cereals, Oils and Non-staple Food',
      sales: 52,
    },
    {
      type: 'Fresh fruit',
      sales: 61,
    },
    {
      type: 'Beauty care',
      sales: 145,
    },
    {
      type: 'Baby Products',
      sales: 48,
    },
    {
      type: 'Imported food',
      sales: 38,
    },
    {
      type: 'Food and drink',
      sales: 38,
    },
    {
      type: 'Home cleaning',
      sales: 38,
    },
  ];
  var config = {
    data: data,
    xField: 'sales',
    yField: 'type',
    seriesField: 'type',
    color: function color(_ref) {
      var type = _ref.type;
      return type === 'Beauty care' ? '#FAAD14' : '#5B8FF9';
    },
    legend: false,
    meta: {
      type: { alias: 'Category' },
      sales: { alias: 'Sales' },
    },
  };
  return <Bar {...config} />;
};

export default DemoBar;
```

### Basic Bar Chart - Conversion Rate

```tsx
import React, { useState, useEffect } from 'react';
import { Bar } from '@ant-design/charts';

const DemoBar: React.FC = () => {
  var data = [
    {
      action: 'Browse the website',
      pv: 50000,
    },
    {
      action: 'Add to cart',
      pv: 35000,
    },
    {
      action: 'Generate orders',
      pv: 25000,
    },
    {
      action: 'Pay order',
      pv: 15000,
    },
    {
      action: 'Seal the deal',
      pv: 8500,
    },
  ];
  var config = {
    data: data,
    xField: 'pv',
    yField: 'action',
    conversionTag: {},
  };
  return <Bar {...config} />;
};

export default DemoBar;
```

### Basic bar chart - scroll bar

```tsx
import React, { useState, useEffect } from 'react';
import { Bar } from '@ant-design/charts';

const DemoBar: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/be63e0a2-d2be-4c45-97fd-c00f752a66d4.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    yField: '城市',
    xField: '销售额',
    yAxis: { label: { autoRotate: false } },
    scrollbar: { type: 'vertical' },
  };
  return <Bar {...config} />;
};

export default DemoBar;
```

### Basic bar chart - column width

```tsx
import React, { useState, useEffect } from 'react';
import { Bar } from '@ant-design/charts';

const DemoBar: React.FC = () => {
  var data = [
    {
      type: 'Furniture appliances',
      sales: 38,
    },
    {
      type: 'Cereals, Oils and Non-staple Food',
      sales: 52,
    },
    {
      type: 'Fresh fruit',
      sales: 61,
    },
    {
      type: 'Beauty care',
      sales: 145,
    },
    {
      type: 'Baby Products',
      sales: 48,
    },
    {
      type: 'Imported food',
      sales: 38,
    },
    {
      type: 'Food and drink',
      sales: 38,
    },
    {
      type: 'Home cleaning',
      sales: 38,
    },
  ];
  var config = {
    data: data,
    xField: 'sales',
    yField: 'type',
    barWidthRatio: 0.8,
    meta: {
      type: { alias: 'Category' },
      sales: { alias: 'Sales' },
    },
  };
  return <Bar {...config} />;
};

export default DemoBar;
```

### Grouped bar chart

```tsx
import React, { useState, useEffect } from 'react';
import { Bar } from '@ant-design/charts';

const DemoBar: React.FC = () => {
  var data = [
    {
      label: 'Mon.',
      type: 'series1',
      value: 2800,
    },
    {
      label: 'Mon.',
      type: 'series2',
      value: 2260,
    },
    {
      label: 'Tues.',
      type: 'series1',
      value: 1800,
    },
    {
      label: 'Tues.',
      type: 'series2',
      value: 1300,
    },
    {
      label: 'Wed.',
      type: 'series1',
      value: 950,
    },
    {
      label: 'Wed.',
      type: 'series2',
      value: 900,
    },
    {
      label: 'Thur.',
      type: 'series1',
      value: 500,
    },
    {
      label: 'Thur.',
      type: 'series2',
      value: 390,
    },
    {
      label: 'Fri.',
      type: 'series1',
      value: 170,
    },
    {
      label: 'Fri.',
      type: 'series2',
      value: 100,
    },
  ];
  var config = {
    data: data,
    isGroup: true,
    xField: 'value',
    yField: 'label',
    seriesField: 'type',
    marginRatio: 0,
    label: {
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    },
  };
  return <Bar {...config} />;
};

export default DemoBar;
```

### Hundred Percent Bar Graph

```tsx
import React, { useState, useEffect } from 'react';
import { Bar } from '@ant-design/charts';

const DemoBar: React.FC = () => {
  var data = [
    {
      country: 'Asia',
      year: '1750',
      value: 502,
    },
    {
      country: 'Asia',
      year: '1800',
      value: 635,
    },
    {
      country: 'Asia',
      year: '1850',
      value: 809,
    },
    {
      country: 'Asia',
      year: '1900',
      value: 947,
    },
    {
      country: 'Asia',
      year: '1950',
      value: 1402,
    },
    {
      country: 'Asia',
      year: '1999',
      value: 3634,
    },
    {
      country: 'Asia',
      year: '2050',
      value: 5268,
    },
    {
      country: 'Africa',
      year: '1750',
      value: 106,
    },
    {
      country: 'Africa',
      year: '1800',
      value: 107,
    },
    {
      country: 'Africa',
      year: '1850',
      value: 111,
    },
    {
      country: 'Africa',
      year: '1900',
      value: 133,
    },
    {
      country: 'Africa',
      year: '1950',
      value: 221,
    },
    {
      country: 'Africa',
      year: '1999',
      value: 767,
    },
    {
      country: 'Africa',
      year: '2050',
      value: 1766,
    },
    {
      country: 'Europe',
      year: '1750',
      value: 163,
    },
    {
      country: 'Europe',
      year: '1800',
      value: 203,
    },
    {
      country: 'Europe',
      year: '1850',
      value: 276,
    },
    {
      country: 'Europe',
      year: '1900',
      value: 408,
    },
    {
      country: 'Europe',
      year: '1950',
      value: 547,
    },
    {
      country: 'Europe',
      year: '1999',
      value: 729,
    },
    {
      country: 'Europe',
      year: '2050',
      value: 628,
    },
  ];
  var config = {
    data: data,
    xField: 'value',
    yField: 'year',
    seriesField: 'country',
    isPercent: true,
    isStack: true,
    label: {
      position: 'middle',
      content: function content(item) {
        return item.value.toFixed(2);
      },
      style: { fill: '#fff' },
    },
  };
  return <Bar {...config} />;
};

export default DemoBar;
```

### Interval bar chart

```tsx
import React, { useState, useEffect } from 'react';
import { Bar } from '@ant-design/charts';

const DemoBar: React.FC = () => {
  var data = [
    {
      type: 'Category One',
      values: [76, 100],
    },
    {
      type: 'Category Two',
      values: [56, 108],
    },
    {
      type: 'Category Three',
      values: [38, 129],
    },
    {
      type: 'Category Four',
      values: [58, 155],
    },
    {
      type: 'Category Five',
      values: [45, 120],
    },
    {
      type: 'Category Six',
      values: [23, 99],
    },
    {
      type: 'Category Seven',
      values: [18, 56],
    },
    {
      type: 'Category Eight',
      values: [18, 34],
    },
  ];
  var config = {
    data: data.reverse(),
    xField: 'values',
    yField: 'type',
    isRange: true,
    label: {
      position: 'middle',
      layout: [{ type: 'adjust-color' }],
    },
  };
  return <Bar {...config} />;
};

export default DemoBar;
```

### Stacked bar chart

```tsx
import React, { useState, useEffect } from 'react';
import { Bar } from '@ant-design/charts';

const DemoBar: React.FC = () => {
  var data = [
    {
      year: '1991',
      value: 3,
      type: 'Lon',
    },
    {
      year: '1992',
      value: 4,
      type: 'Lon',
    },
    {
      year: '1993',
      value: 3.5,
      type: 'Lon',
    },
    {
      year: '1994',
      value: 5,
      type: 'Lon',
    },
    {
      year: '1995',
      value: 4.9,
      type: 'Lon',
    },
    {
      year: '1996',
      value: 6,
      type: 'Lon',
    },
    {
      year: '1997',
      value: 7,
      type: 'Lon',
    },
    {
      year: '1998',
      value: 9,
      type: 'Lon',
    },
    {
      year: '1999',
      value: 13,
      type: 'Lon',
    },
    {
      year: '1991',
      value: 3,
      type: 'Bor',
    },
    {
      year: '1992',
      value: 4,
      type: 'Bor',
    },
    {
      year: '1993',
      value: 3.5,
      type: 'Bor',
    },
    {
      year: '1994',
      value: 5,
      type: 'Bor',
    },
    {
      year: '1995',
      value: 4.9,
      type: 'Bor',
    },
    {
      year: '1996',
      value: 6,
      type: 'Bor',
    },
    {
      year: '1997',
      value: 7,
      type: 'Bor',
    },
    {
      year: '1998',
      value: 9,
      type: 'Bor',
    },
    {
      year: '1999',
      value: 13,
      type: 'Bor',
    },
  ];
  var config = {
    data: data.reverse(),
    isStack: true,
    xField: 'value',
    yField: 'year',
    seriesField: 'type',
    label: {
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    },
  };
  return <Bar {...config} />;
};

export default DemoBar;
```
