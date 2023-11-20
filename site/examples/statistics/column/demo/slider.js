import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const DemoColumn = () => {
  const chartRef = useRef();
  useEffect(() => {
    console.log({ chartRef });
    if (chartRef.current) {
    }
  }, []);
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/be63e0a2-d2be-4c45-97fd-c00f752a66d4.json',
    },
    xField: '城市',
    yField: '销售额',
    slider: {
      x: {},
    },
    onReady: (chartsInstance) => {
      // 初始选区范围
      chartsInstance.emit('sliderX:filter', {
        data: { selection: [[0.1, 0.2], undefined] },
      });
    },
  };
  return <Column {...config} ref={chartRef} />;
};

ReactDOM.render(<DemoColumn />, document.getElementById('container'));
