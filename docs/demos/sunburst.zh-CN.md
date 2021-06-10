---
title: 旭日图
order: 24
---

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
    fetch('https://gw.alipayobjects.com/os/antfincdn/ryp44nvUYZ/coffee.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    innerRadius: 0.3,
    interactions: [{ type: 'element-active' }],
  };
  return <Sunburst {...config} />;
};

export default DemoSunburst;
```

### 自定义 hierarchy field

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
    innerRadius: 0.3,
    interactions: [{ type: 'element-active' }],
    hierarchyConfig: { field: 'sum' },
    drilldown: { breadCrumb: { rootText: '起始' } },
  };
  return <Sunburst {...config} />;
};

export default DemoSunburst;
```

### 自定义颜色通道

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
    innerRadius: 0.3,
    colorField: 'label',
    interactions: [{ type: 'element-active' }],
    hierarchyConfig: { field: 'sum' },
  };
  return <Sunburst {...config} />;
};

export default DemoSunburst;
```

### 自定义旭日图颜色

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
    innerRadius: 0.3,
    hierarchyConfig: { field: 'sum' },
    color: ['#f26b1f', '#fc8c23', '#f97d1c'],
    interactions: [{ type: 'element-active' }],
    state: {
      active: {
        style: {
          stroke: '#fff',
          lineWidth: 2,
        },
      },
    },
  };
  return <Sunburst {...config} />;
};

export default DemoSunburst;
```

### 自定义 Tooltip items

```tsx
import React, { useState, useEffect } from 'react';
import { Sunburst } from '@ant-design/charts';

const DemoSunburst: React.FC = () => {
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true,
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/Ry8PJXni0S/sunburst.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    innerRadius: 0.3,
    interactions: [{ type: 'element-active' }],
    hierarchyConfig: { field: 'sum' },
    tooltip: {
      customItems: function customItems(items) {
        return items.map(function (item) {
          var path = item.data[Sunburst.SUNBURST_PATH_FIELD];
          return _objectSpread(
            _objectSpread({}, item),
            {},
            {
              name:
                path.length > 20
                  ? ''.concat(path.slice(0, 10), ' ... ').concat(path.slice(-10))
                  : path,
              value: item.data.value,
            },
          );
        });
      },
    },
  };
  return <Sunburst {...config} />;
};

export default DemoSunburst;
```

### 设置标签布局

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
    innerRadius: 0.2,
    radius: 1,
    interactions: [{ type: 'element-active' }],
    hierarchyConfig: { field: 'sum' },
    label: { layout: [{ type: 'limit-in-shape' }] },
  };
  return <Sunburst {...config} />;
};

export default DemoSunburst;
```

### 自定义旭日图样式

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
    innerRadius: 0.3,
    interactions: [{ type: 'element-active' }],
    hierarchyConfig: { field: 'sum' },
    sunburstStyle: function sunburstStyle(datum) {
      return {
        fillOpacity: 0.75 - datum.depth / 10,
        strokeOpacity: 1 - datum.depth / 10,
      };
    },
  };
  return <Sunburst {...config} />;
};

export default DemoSunburst;
```

### 自定义 Tooltip fields

```tsx
import React, { useState, useEffect } from 'react';
import { Sunburst } from '@ant-design/charts';

const DemoSunburst: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/ryp44nvUYZ/coffee.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    innerRadius: 0.3,
    interactions: [{ type: 'element-active' }],
    rawFields: ['symbol'],
    meta: { symbol: { alias: '国家' } },
    tooltip: {
      fields: ['path', 'symbol', 'value'],
      formatter: function formatter(datum) {
        return {
          name: datum.symbol ? ''.concat(datum.symbol, ' ').concat(datum.path) : datum.path,
          value: datum.value,
        };
      },
    },
  };
  return <Sunburst {...config} />;
};

export default DemoSunburst;
```
