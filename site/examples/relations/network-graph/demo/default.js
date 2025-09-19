import { NetworkGraph } from '@ant-design/graphs';
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const DemoNetworkGraph = () => {
  const [data, setData] = React.useState();

  useEffect(() => {
    fetch('https://assets.antv.antgroup.com/g6/graph.json')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const options = {
    autoFit: 'view',
    data,
    node: {
      palette: {
        field: 'group',
        color: ['#D580FF', '#4292C6'],
      },
    },
    animation: false,
  };
  return <NetworkGraph {...options} />;
};

createRoot(document.getElementById('container')).render(<DemoNetworkGraph />);
