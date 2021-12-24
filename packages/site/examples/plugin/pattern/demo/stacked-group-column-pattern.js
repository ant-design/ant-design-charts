import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/charts';

const DemoColumn = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/cK%24sTxSsah/stack-group-column.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const pattern = ({ name }) => {
    return name === '理科'
      ? {
          type: 'line',
          cfg: {
            lineWidth: 6,
            spacing: 5,
          },
        }
      : {
          type: 'dot',
          cfg: {
            size: 10,
          },
        };
  };

  const config = {
    data,
    xField: 'month',
    yField: 'value',
    isGroup: true,
    isStack: true,
    seriesField: 'type',
    groupField: 'name',
    rawFields: ['type', 'name'],
    columnStyle: {
      radius: 5,
    },
    pattern,
  };

  return <Column {...config} />;
};

ReactDOM.render(<DemoColumn />, document.getElementById('container'));
