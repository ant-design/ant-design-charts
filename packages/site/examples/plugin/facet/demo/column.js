import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Facet } from '@ant-design/plots';

const DemoFacet = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/diamond.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    padding: [0, 10, 10],
    appendPadding: [0, 0, 30, 20],
    type: 'rect',
    fields: ['cut'],
    cols: 3,
    // 超过3个换行
    data,
    axes: {},
    meta: {
      carat: {
        sync: true,
      },
      price: {
        sync: true,
      },
      clarity: {
        sync: true,
      },
    },
    eachView: (view, f) => {
      return {
        type: 'scatter',
        options: {
          data: f.data,
          xField: 'carat',
          yField: 'price',
          colorField: 'clarity',
          shape: 'circle',
          pointStyle: {
            fillOpacity: 0.3,
            stroke: null,
          },
        },
      };
    },
  };

  return <Facet {...config} />;
};

ReactDOM.render(<DemoFacet />, document.getElementById('container'));
