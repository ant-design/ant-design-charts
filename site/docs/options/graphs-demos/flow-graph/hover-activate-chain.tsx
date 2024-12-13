import { type FlowDirectionGraphOptions, FlowGraph, RCNode } from '@ant-design/graphs';
import React, { useEffect, useState } from 'react';

const { TextNode } = RCNode;

export default () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch('https://assets.antv.antgroup.com/g6/flow-analysis.json')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const options: FlowDirectionGraphOptions = {
    autoFit: 'view',
    data,
    node: {
      style: {
        component: (d) => {
          const isActive = d.states?.includes('active');
          return <TextNode color={isActive ? '#5AD8A6' : '#1783FF'} text={d.value.title} type="filled" />;
        },
        size: [120, 38],
      },
    },
    edge: {
      state: {
        active: {
          stroke: '#5AD8A6',
          halo: false,
        },
      },
    },
    behaviors: (prev) => [
      ...prev,
      {
        type: 'hover-activate-chain',
        onHover: (e) => {
          e.view.setCursor('pointer');
        },
        onHoverEnd: (e) => {
          e.view.setCursor('default');
        },
      },
    ],
    layout: {
      type: 'dagre',
      rankSep: 130,
      nodeSep: 60,
    },
  };

  return <FlowGraph {...options} />;
};
