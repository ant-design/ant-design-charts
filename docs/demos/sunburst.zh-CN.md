---
title: 旭日图
order: 26
---

# 旭日图

## Sunburst

### 基础旭日图

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
  var config = {
    data: data,
    seriesField: 'sum',
    colorField: 'label',
    innerRadius: 0.3,
    interactions: [{ type: 'element-active' }],
  };
  return <Sunburst {...config} />;
};

export default DemoSunburst;
```

### 指定径向类型

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
  fetchData.forEach(function (mobile) {
    mobile.value = null;
  });
  var data = {
    name: 'root',
    children: fetchData,
  };
  var config = {
    data: data,
    type: 'treemap',
    seriesField: 'value',
    reflect: 'y',
    colorField: 'brand',
    hierarchyConfig: {
      size: [1, 0.1],
    },
    sunburstStyle: {
      lineWidth: 1,
      stroke: '#fff',
    },
    tooltip: {
      fields: ['name', 'value'],
    },
    interactions: [{ type: 'element-active' }],
  };
  return <Sunburst {...config} />;
};

export default DemoSunburst;
```
