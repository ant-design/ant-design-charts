import { FlowGraph } from '@ant-design/graphs';
import { Typography } from 'antd';
import insertCss from 'insert-css';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

const { Text } = Typography;

insertCss(`
  .end-node {
    width: inherit;
    height: inherit;
    box-sizing: border-box;
    border: 1px solid #f1f5fe;
    border-radius: 4px;
    display: flex;
    font-size: 12px;
  }
  .end-node-name {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .end-node-type {
    width: 40px;
    background: #f1f5fe;
    color: #808692;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .task-node {
    width: inherit;
    height: inherit;
    border-radius: 4px;
    color: #fff;
    align-content: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .task-node-title {
    height: 50%;
  }

  .task-node-name {
    font-size: 12px;
    padding-left: 6px;
    color: #fff;
  }

  .task-node-delay {
    font-size: 12px;
    padding-left: 6px;
    color: #252525;
    flex: 1;
    align-content: center;
  }
  `);

const EndNode = (props) => {
  const {
    data: { type, name },
  } = props;
  return (
    <div className="end-node">
      <div className="end-node-type">{type === 'source' ? '来源' : '结束'}</div>
      <div className="end-node-name">{name}</div>
    </div>
  );
};

const TaskNode = (props) => {
  const {
    data: { type, name, delay },
    isActive,
  } = props;

  const colors = ['#1890ff', '#52c41a', '#ff4d4f'];
  const lightColors = ['rgba(24, 144, 255, 0.5)', 'rgba(82, 196, 26, 0.5)', 'rgba(255, 77, 79, 0.5)'];

  const getColor = (colors) => (type === 'store' ? colors[0] : Number(delay) < 10 ? colors[1] : colors[2]);

  return (
    <div className="task-node" style={{ border: `1px solid ${getColor(isActive ? colors : lightColors)}` }}>
      <div className="task-node-title" style={{ backgroundColor: getColor(colors) }}>
        <Text className="task-node-name" ellipsis={{ tooltip: true }}>
          {name}
        </Text>
      </div>

      <div className="task-node-delay">{`delay: ${delay}min`}</div>
    </div>
  );
};

const DemoFlowGraph = () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch('https://assets.antv.antgroup.com/antd-charts/task-scheduling.json')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const options = {
    autoFit: 'center',
    data,
    node: {
      style: {
        component: (d) => {
          const isActive = d.states?.includes('active');
          const Component = ['source', 'target'].includes(d.data.type) ? EndNode : TaskNode;
          return <Component data={d.data} isActive={isActive} />;
        },
        size: (d) => (['source', 'target'].includes(d.data.type) ? [120, 40] : [194, 58]),
      },
    },
    edge: {
      style: {
        lineWidth: 1,
      },
      state: {
        active: {
          stroke: '#1890ff',
          halo: false,
        },
      },
    },
    layout: {
      type: 'dagre',
      nodeSize: [194, 58],
      nodesep: 40,
      ranksep: 80,
    },
    behaviors: (prev) => [...prev, 'hover-activate-chain'],
  };

  return <FlowGraph {...options} />;
};

createRoot(document.getElementById('container')).render(<DemoFlowGraph />);
