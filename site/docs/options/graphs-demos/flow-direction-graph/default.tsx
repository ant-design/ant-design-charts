import { FlowDirectionGraph, type FlowDirectionGraphOptions } from '@ant-design/graphs';
import React, { useEffect, useState } from 'react';

export default () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch('https://assets.antv.antgroup.com/g6/flow-analysis.json')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const options: FlowDirectionGraphOptions = {
    containerStyle: { height: '400px' },
    autoFit: 'view',
    data,
    transforms: (transforms) => [
      ...transforms,
      {
        type: 'map-edge-line-width',
        key: 'map-edge-line-width',
        value: (d) => Math.random(),
        minValue: 0,
        maxValue: 1,
        minLineWidth: 1,
        maxLineWidth: 24,
      },
    ],
    layout: {
      type: 'antv-dagre',
      nodesep: 10,
      ranksep: 60,
    },
    animation: false
  };

  return <FlowDirectionGraph {...options} />;
};
