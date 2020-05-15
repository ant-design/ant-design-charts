---
title: 树图
---

# 矩形树图

## 基本用法

<a href="https://g2plot.antv.vision/zh/examples/treemap/rect/API" target="_blank">配置</a>

```tsx
import React from 'react';
import { Treemap } from '@ant-design/charts';

const App: React.FC = () => {
  const data = {
    name: 'root',
    children: [
      { name: '分类 1', value: 560 },
      { name: '分类 2', value: 500 },
      { name: '分类 3', value: 150 },
      { name: '分类 4', value: 140 },
      { name: '分类 5', value: 115 },
      { name: '分类 6', value: 95 },
      { name: '分类 7', value: 90 },
      { name: '分类 8', value: 75 },
      { name: '分类 9', value: 98 },
      { name: '分类 10', value: 60 },
      { name: '分类 11', value: 45 },
      { name: '分类 12', value: 40 },
      { name: '分类 13', value: 40 },
      { name: '分类 14', value: 35 },
      { name: '分类 15', value: 40 },
      { name: '分类 16', value: 40 },
      { name: '分类 17', value: 40 },
      { name: '分类 18', value: 30 },
      { name: '分类 19', value: 28 },
      { name: '分类 20', value: 16 },
    ],
  };

  const processData = (data) => {
    let sumValue = 0;
    data.children.forEach((d) => {
      sumValue += d.value;
    });
    data.value = sumValue;
  };
  processData(data);

  const config = {
    data,
    colorField: 'name',
  };
  return <Treemap {...config} />;
};

export default App;
```

## 多重嵌套

<a href="https://g2plot.antv.vision/zh/examples/treemap/rect/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Treemap } from '@ant-design/charts';

const DemoTreemap: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/basement_prod/be471bfc-b37f-407e-833b-0f489bd3fdb2.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const processData = (odata) => {
    let sumValue = 0;
    odata.forEach((d) => {
      sumValue += d.value;
    });
    return { name: 'root', value: sumValue, children: odata };
  };
  const mobileData = processData(data);

  const config = {
    data: mobileData,
    colorField: 'brand',
  };
  return <Treemap {...config} />;
};

export default DemoTreemap;
```
