
# HeatMap

热力图组件

## 安装

确保你已经安装了必要的依赖：

```bash
npm install @petercatai/assistant
```

## 使用示例

```tsx
import React from 'react';
import { Heatmap } from '@petercatai/assistant';

export default () => {
 const data ={
    "year": [
      {"day": "Mon", "hour": 0, "value": 13.1},
      {"day": "Mon", "hour": 1, "value": 3.7},
      {"day": "Mon", "hour": 2, "value": 8.5},
      {"day": "Mon", "hour": 3, "value": 11.4},
      {"day": "Mon", "hour": 4, "value": 13.6},
      {"day": "Mon", "hour": 5, "value": 3.9},
      {"day": "Tue", "hour": 0, "value": 6.9},
      {"day": "Tue", "hour": 1, "value": 24.5},
      {"day": "Tue", "hour": 2, "value": 13.3},
      {"day": "Tue", "hour": 3, "value": 12.1},
      {"day": "Tue", "hour": 4, "value": 11.7},
      {"day": "Tue", "hour": 5, "value": 3.2},
      {"day": "Wed", "hour": 0, "value": 8.0},
      {"day": "Wed", "hour": 1, "value": 11.3},
      {"day": "Wed", "hour": 2, "value": 12.4},
      {"day": "Wed", "hour": 3, "value": 3.8},
      {"day": "Wed", "hour": 4, "value": 8.3},
      {"day": "Wed", "hour": 5, "value": 12.6},
      {"day": "Thu", "hour": 0, "value": 14.2},
      {"day": "Thu", "hour": 1, "value": 3.1},
      {"day": "Thu", "hour": 2, "value": 9.0},
      {"day": "Thu", "hour": 3, "value": 11.9},
      {"day": "Thu", "hour": 4, "value": 14.5},
      {"day": "Thu", "hour": 5, "value": 3.4},
      {"day": "Fri", "hour": 0, "value": 8.6},
      {"day": "Fri", "hour": 1, "value": 11.8},
      {"day": "Fri", "hour": 2, "value": 23.3},
      {"day": "Fri", "hour": 3, "value": 25.2},
      {"day": "Fri", "hour": 4, "value": 21.7},
      {"day": "Fri", "hour": 5, "value": 10.5},
      {"day": "Sat", "hour": 0, "value": 1.8},
      {"day": "Sat", "hour": 1, "value": 13.0},
      {"day": "Sat", "hour": 2, "value": 23.5},
      {"day": "Sat", "hour": 3, "value": 13.7},
      {"day": "Sat", "hour": 4, "value": 20.2},
      {"day": "Sat", "hour": 5, "value": 32.3}
    ],
    "quarter": [{"day": "Mon", "hour": 0, "value": 12.3},
    {"day": "Mon", "hour": 1, "value": 4.8},
    {"day": "Mon", "hour": 2, "value": 7.5},
    {"day": "Mon", "hour": 3, "value": 13.0},
    {"day": "Mon", "hour": 4, "value": 11.6},
    {"day": "Mon", "hour": 5, "value": 4.5},
    {"day": "Tue", "hour": 0, "value": 8.2},
    {"day": "Tue", "hour": 1, "value": 24.1},
    {"day": "Tue", "hour": 2, "value": 13.6},
    {"day": "Tue", "hour": 3, "value": 11.5},
    {"day": "Tue", "hour": 4, "value": 13.2},
    {"day": "Tue", "hour": 5, "value": 3.6},
    {"day": "Wed", "hour": 0, "value": 7.5},
    {"day": "Wed", "hour": 1, "value": 13.3},
    {"day": "Wed", "hour": 2, "value": 11.9},
    {"day": "Wed", "hour": 3, "value": 3.0},
    {"day": "Wed", "hour": 4, "value": 6.8},
    {"day": "Wed", "hour": 5, "value": 13.1},
    {"day": "Thu", "hour": 0, "value": 14.0},
    {"day": "Thu", "hour": 1, "value": 4.2},
    {"day": "Thu", "hour": 2, "value": 6.5},
    {"day": "Thu", "hour": 3, "value": 11.6},
    {"day": "Thu", "hour": 4, "value": 13.9},
    {"day": "Thu", "hour": 5, "value": 2.9},
    {"day": "Fri", "hour": 0, "value": 6.2},
    {"day": "Fri", "hour": 1, "value": 11.7},
    {"day": "Fri", "hour": 2, "value": 23.8},
    {"day": "Fri", "hour": 3, "value": 26.3},
    {"day": "Fri", "hour": 4, "value": 20.5},
    {"day": "Fri", "hour": 5, "value": 10.8},
    {"day": "Sat", "hour": 0, "value": 2.7},
    {"day": "Sat", "hour": 1, "value": 11.5},
    {"day": "Sat", "hour": 2, "value": 25.1},
    {"day": "Sat", "hour": 3, "value": 13.2},
    {"day": "Sat", "hour": 4, "value": 20.8},
    {"day": "Sat", "hour": 5, "value": 30.7}],
    "month": [{"day":"Mon","hour":0,"value":12.8,},{"day":"Mon","hour":1,"value":2.8,},{"day":"Mon","hour":2,"value":7.2,},{"day":"Mon","hour":3,"value":12.2,},{"day":"Mon","hour":4,"value":12.8,},{"day":"Mon","hour":5,"value":2.8,},{"day":"Tue","hour":0,"value":7.2,},{"day":"Tue","hour":1,"value":25,},{"day":"Tue","hour":2,"value":12.2,},{"day":"Tue","hour":3,"value":12.2,},{"day":"Tue","hour":4,"value":12.8,},{"day":"Tue","hour":5,"value":2.8,},{"day":"Wed","hour":0,"value":7.2,},{"day":"Wed","hour":1,"value":12.2,},{"day":"Wed","hour":2,"value":12.8,},{"day":"Wed","hour":3,"value":2.8,},{"day":"Wed","hour":4,"value":7.2,},{"day":"Wed","hour":5,"value":12.2,},{"day":"Thu","hour":0,"value":12.8,},{"day":"Thu","hour":1,"value":2.8,},{"day":"Thu","hour":2,"value":7.2,},{"day":"Thu","hour":3,"value":12.2,},{"day":"Thu","hour":4,"value":12.8,},{"day":"Thu","hour":5,"value":2.8,},{"day":"Fri","hour":0,"value":7.2,},{"day":"Fri","hour":1,"value":12.2,},{"day":"Fri","hour":2,"value":22.8,},{"day":"Fri","hour":3,"value":24.8,},{"day":"Fri","hour":4,"value":21,},{"day":"Fri","hour":5,"value":11,},{"day":"Sat","hour":0,"value":1.2,},{"day":"Sat","hour":1,"value":12.2,},{"day":"Sat","hour":2,"value":22.8,},{"day":"Sat","hour":3,"value":12.8,},{"day":"Sat","hour":4,"value":21,},{"day":"Sat","hour":5,"value":31,}]
  };


  return <Heatmap data={data} />;
}
```
