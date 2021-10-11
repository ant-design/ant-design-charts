import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Facet } from '@ant-design/charts';

const DemoFacet = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/VnrXpYSuqW/circle-pie.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    type: 'circle',
    fields: ['clarity'],
    data,
    tooltip: {
      showMarkers: false,
    },
    meta: {
      cut: {
        sync: true,
      },
    },
    eachView: (view, f) => {
      return {
        type: 'pie',
        options: {
          data: f.data,
          angleField: 'mean',
          colorField: 'cut',
          pieStyle: {
            stroke: null,
          },
        },
      };
    },
  };

  return <Facet {...config} />;
};

ReactDOM.render(<DemoFacet />, document.getElementById('container'));
