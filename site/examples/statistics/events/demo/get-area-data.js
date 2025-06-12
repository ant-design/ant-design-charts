import { Area } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Chart = React.memo(
  ({ onReady }) => {
    const config = {
      data: {
        type: 'fetch',
        value: 'https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json',
      },
      xField: 'date',
      yField: 'value',
      colorField: 'country',
      shapeField: 'smooth',
      stack: true,
      onReady,
    };
    return <Area {...config} />;
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
              {d.country} : {d.value}
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
