---
title: 分钟玫瑰图
---

# 分钟玫瑰图

## 基本用法

```tsx
import React, { useState, useEffect } from 'react';
import { StackedRose } from '@ant-design/charts';

const DemoStackedRose: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/basement_prod/86530df2-6d61-4485-b645-0f2c5d59c07e.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    
  };
  return <StackedRose {...config} />;
};

export default DemoStackedRose;
```