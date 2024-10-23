import { NetworkGraph, type NetworkGraphOptions } from '@ant-design/graphs';
import React, { useEffect } from 'react';

export default () => {
  const [data, setData] = React.useState();

  useEffect(() => {
    fetch('https://assets.antv.antgroup.com/g6/graph.json')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const options: NetworkGraphOptions = {
    containerStyle: { height: '400px' },
    autoFit: 'view',
    data,
    node: {
      palette: {
        field: 'group',
        color: ['#D580FF', '#4292C6'],
      },
    },
    transforms: (transforms) => [...transforms, {
      key: 'map-node-size',
      type: 'map-node-size',
      maxSize: 80,
      minSize: 16,
      scale: 'linear',
    }],
    animation: false,
  };
  return <NetworkGraph {...options} />;
};
