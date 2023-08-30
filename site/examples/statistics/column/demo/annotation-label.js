import { Column } from '@ant-design/plots';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { forEach, groupBy } from 'lodash-es';

const DemoColumn = () => {
  const [data, setData] = useState([]);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  const annotations = [];
  forEach(groupBy(data, 'year'), (values, k) => {
    const value = values.reduce((a, b) => a + b.value, 0);
    annotations.push({
      type: 'text',
      data: [k, value],
      style: {
        textAlign: 'center',
        fontSize: 14,
        fill: 'rgba(0,0,0,0.85)',
      },
      xField: 'year',
      yField: 'value',
      style: {
        text: `${value}`,
        textBaseline: 'bottom',
        position: 'top',
        textAlign: 'center',
      },
    });
  });

  const config = {
    data,
    xField: 'year',
    yField: 'value',
    stack: true,
    colorField: 'type',
    label: {
      text: 'value',
      textBaseline: 'bottom',
      position: 'inside',
    },
    annotations,
  };
  return <Column {...config} />;
};

ReactDOM.render(<DemoColumn />, document.getElementById('container'));
