import { Line } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const Chart = React.memo(
  ({ onReady }) => {
    const config = {
      colorField: 'series',
      yField: 'value',
      xField: (d) => new Date(d['Date']),
      axis: {
        x: {
          labelAutoRotate: false,
        },
      },
      data: {
        type: 'fetch',
        value: 'https://gw.alipayobjects.com/os/antfincdn/3PtP0m%26VuK/trend-data.json',
      },
      onReady,
    };
    return <Line {...config} />;
  },
  () => true,
);

const Demo = () => {
  const [data, setData] = React.useState([]);
  return (
    <div style={{ height: '100%' }}>
      {data.length > 0 && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: 10,
            background: '#ccc',
            padding: '10px',
            borderRadius: '6px',
          }}
        >
          {data.map((d, i) => (
            <div key={i}>
              {d.series} : {d.value}
            </div>
          ))}
        </div>
      )}
      <Chart
        onReady={({ chart }) => {
          chart.on('plot:click', (e) => {
            const { x, y } = e;
            setData(chart.getDataByXY({ x, y }, { shared: true }));
          });
        }}
      />
    </div>
  );
};

createRoot(document.getElementById('container')).render(<Demo />);
