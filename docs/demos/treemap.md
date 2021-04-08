---
title: Treemap
order: 32
---

### 基础矩形树图

```tsx
import React, { useState, useEffect } from 'react';
import { Treemap } from '@ant-design/charts';

const DemoTreemap: React.FC = () => {
  var data = {
    name: 'root',
    children: [
      {
        name: '分类 1',
        value: 560,
      },
      {
        name: '分类 2',
        value: 500,
      },
      {
        name: '分类 3',
        value: 150,
      },
      {
        name: '分类 4',
        value: 140,
      },
      {
        name: '分类 5',
        value: 115,
      },
      {
        name: '分类 6',
        value: 95,
      },
      {
        name: '分类 7',
        value: 90,
      },
      {
        name: '分类 8',
        value: 75,
      },
      {
        name: '分类 9',
        value: 98,
      },
      {
        name: '分类 10',
        value: 60,
      },
      {
        name: '分类 11',
        value: 45,
      },
      {
        name: '分类 12',
        value: 40,
      },
      {
        name: '分类 13',
        value: 40,
      },
      {
        name: '分类 14',
        value: 35,
      },
      {
        name: '分类 15',
        value: 40,
      },
      {
        name: '分类 16',
        value: 40,
      },
      {
        name: '分类 17',
        value: 40,
      },
      {
        name: '分类 18',
        value: 30,
      },
      {
        name: '分类 19',
        value: 28,
      },
      {
        name: '分类 20',
        value: 16,
      },
    ],
  };
  var config = {
    data: data,
    colorField: 'name',
  };
  return <Treemap {...config} />;
};

export default DemoTreemap;
```

### 嵌套矩形树图

```tsx
import React, { useState, useEffect } from 'react';
import { Treemap } from '@ant-design/charts';

const DemoTreemap: React.FC = () => {
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
  var data = {
    name: 'root',
    children: fetchData,
  };
  var config = {
    data: data,
    colorField: 'brand',
  };
  return <Treemap {...config} />;
};

export default DemoTreemap;
```
