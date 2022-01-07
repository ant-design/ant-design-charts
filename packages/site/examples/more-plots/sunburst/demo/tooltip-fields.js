import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Sunburst } from '@ant-design/plots';

const DemoSunburst = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/%24ixDFx9%248M/coffee-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    innerRadius: 0.3,
    interactions: [
      {
        type: 'element-active',
      },
    ],
    rawFields: ['symbol'],
    meta: {
      symbol: {
        alias: '国家',
      },
    },
    hierarchyConfig: {
      // the weight of parent node depends on itself
      ignoreParentValue: false,
    },
    tooltip: {
      fields: ['path', 'symbol', 'value'],
      formatter: (datum) => ({
        name: datum.symbol ? `${datum.symbol} ${datum.path}` : datum.path,
        value: datum.value,
      }),
    },
  };

  return <Sunburst {...config} />;
};

ReactDOM.render(<DemoSunburst />, document.getElementById('container'));
