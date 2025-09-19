import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DATA = [1, 2, 3, 4, 5, 6, 7, 8];

const DemoColumn = () => {
  const [data, setData] = React.useState(DATA);

  React.useEffect(() => {
    const time = setInterval(() => {
      setData([
        ...DATA.sort(() => {
          return Math.random() - 0.5;
        }),
      ]);
    }, 2000);
    return () => clearInterval(time);
  }, []);

  const config = {
    data: data.map((value) => ({
      index: value.toString(),
      value,
    })),
    xField: 'index',
    yField: 'value',
  };
  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoColumn />);
