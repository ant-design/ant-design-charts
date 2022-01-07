import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Facet } from '@ant-design/plots';

const DemoFacet = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/2Qttbqxmtw/symmetry-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    type: 'mirror',
    data,
    fields: ['gender'],
    transpose: true,
    padding: [32, 16, 28, 16],
    meta: {
      age: {
        sync: true,
        tickCount: 11,
      },
      total_percentage: {
        sync: true,

        formatter(v) {
          return v + '%';
        },
      },
      gender: {
        sync: true,
      },
    },
    axes: {},
    eachView: (view, f) => {
      return {
        padding: [0, 48, 0, 0],
        type: 'column',
        options: {
          data: f.data,
          xField: 'age',
          yField: 'total_percentage',
          seriesField: 'gender',
          color: ['#1890ff', '#f04864'],
        },
      };
    },
  };

  return <Facet {...config} />;
};

ReactDOM.render(<DemoFacet />, document.getElementById('container'));
