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
    type: 'rect',
    fields: ['cut', 'clarity'],
    cols: 3,
    // 超过3个换行
    padding: [0, 10, 10],
    appendPadding: 30,
    data,
    axes: {},
    meta: {
      carat: {
        sync: true,
      },
      price: {
        sync: true,
      },
      cut: {
        // 设置 sync 同步之后，可以按照 'cut' 进行颜色映射分类
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
          colorField: 'cut',
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
