---
title: 堆叠面积图
---

# 堆叠面积图

## 基本用法

```tsx | pure
import React, { useState, useEffect } from 'react';
import { StackArea } from '@alipay/techui-charts';

const DemoStackArea: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/basement_prod/80f6324e-bf7c-4683-bcca-ab66e2520491.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    title: {
      visible: true,
      text: 'The causes of CO2 emissions',
    },
    padding: 'auto',
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    xAxis: {
      type: 'time',
    },
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: v => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, s => `${s},`),
      },
    },
    responsive: true,
  };
  return <StackArea {...config} />;
};

export default DemoStackArea;
```
