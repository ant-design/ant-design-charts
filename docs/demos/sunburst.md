---
title: 旭日图
order: 24
---

# 旭日图

## Sunburst

###

```tsx
import React, { useState, useEffect } from 'react';
import { Sunburst } from '@ant-design/charts';

const DemoSunburst: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/sunburst.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    data,
    seriesField: 'sum',
    colorField: 'value',
    color: ['#BAE7FF', '#1890FF', '#0050B3'],
    innerRadius: 0.3,
    tooltip: {
      customContent: (_, item) => {
        const mappingData = item?.[0]?.mappingData;
        const originData = mappingData?._origin?.data;
        return `<div>${originData?.label} - ${originData?.sum}</div>`;
      },
    },
    interactions: [{ type: 'element-active' }],
  };
  return <Sunburst {...config} />;
};

export default DemoSunburst;
```

###

```tsx
import React, { useState, useEffect } from 'react';
import { Sunburst } from '@ant-design/charts';

const DemoSunburst: React.FC = () => {
  const [fetchData, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/mobile.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  fetchData.forEach((mobile) => {
    mobile.value = null;
  });
  const data = {
    name: 'root',
    children: fetchData,
  };
  const config = {
    data,
    type: 'treemap',
    seriesField: 'value',
    reflect: 'y',
    colorField: 'brand',
    sunburstStyle: {
      lineWidth: 1,
      stroke: '#fff',
    },
    interactions: [{ type: 'element-active' }],
  };
  return <Sunburst {...config} />;
};

export default DemoSunburst;
```
