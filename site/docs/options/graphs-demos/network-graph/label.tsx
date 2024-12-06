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
      style: {
        labelText: d => d.id,
        labelMaxWidth: '300%',
        labelWordWrap: true,
        labelMaxLines: 3
      },
      state: {
        active: {
          labelMaxWidth: '1000%',
        }
      },
      palette: {
        field: 'group',
        color: ['#D580FF', '#4292C6'],
      },
    },
    behaviors: (behaviors) => [...behaviors, 'hover-activate'],
    animation: false,
  };
  return <NetworkGraph {...options} />;
};
