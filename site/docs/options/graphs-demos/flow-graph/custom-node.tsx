import { type FlowDirectionGraphOptions, FlowGraph } from '@ant-design/graphs';
import React, { useEffect, useState } from 'react';

const CustomNode = ({ text }: { text: string }) => {
  return <div style={{
    height: 'inherit',
    width: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    backgroundColor: '#f7f0fe',
    color: '#873bf4',
    boxShadow: '0 0 0 2px #873bf4'
  }}>{text}</div>
}

export default () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch('https://assets.antv.antgroup.com/g6/flow-analysis.json')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const options: FlowDirectionGraphOptions = {
    containerStyle: { height: '360px' },
    autoFit: 'view',
    padding: [20, 0, 0, 60],
    data,
    node: {
      style: {
        component: (d) => <CustomNode text={d.value.title} />,
        size: [120, 40],
      },
    },
    edge: {
      style: { stroke: '#873bf4' },
    },
    layout: {
      type: 'dagre',
      rankSep: 100,
      nodeSep: 20
    },
    animation: false
  };

  return <FlowGraph {...options} />;
};
