import { FlowGraph as FlowGraphComponent, FlowGraphOptions } from '@ant-design/graphs';
import { Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { hexToRgba } from '../../src/core/utils/color';
import data from '../datasets/task-scheduling.json';

const { Text } = Typography;

const StyleEndNodeWrapper = styled.div`
  width: inherit;
  height: inherit;
  box-sizing: border-box;
  border: 1px solid #f1f5fe;
  border-radius: 4px;
  display: flex;
  font-size: 12px;

  .end-node-type {
    width: 40px;
    background: #f1f5fe;
    color: #808692;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .end-node-name {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
`;

const StyleTaskNodeWrapper = styled.div<{ $color: string; $isActive?: boolean }>`
  width: inherit;
  height: inherit;
  border-radius: 4px;
  color: #fff;
  align-content: center;
  box-sizing: border-box;
  border: 1px solid ${(props) => hexToRgba(props.$color, props.$isActive ? 1 : 0.5)};
  display: flex;
  flex-direction: column;

  .task-node-title {
    height: 50%;
    background-color: ${(props) => props.$color};
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
}
`;

const EndNode: React.FC<{
  data: {
    type: string;
    name: string;
  };
  isActive?: boolean;
}> = (props) => {
  const {
    data: { type, name },
    isActive,
  } = props;
  return (
    <StyleEndNodeWrapper>
      <div className="end-node-type">{type === 'source' ? '来源' : '结束'}</div>
      <div className="end-node-name">{name}</div>
    </StyleEndNodeWrapper>
  );
};

const TaskNode: React.FC<{
  data: {
    type: string;
    name: string;
    delay: string;
  };
  isActive?: boolean;
}> = (props) => {
  const {
    data: { type, name, delay },
    isActive,
  } = props;

  const color = type === 'store' ? '#1783FF' : Number(delay) < 10 ? '#52c41a' : '#ff4d4f';

  return (
    <StyleTaskNodeWrapper $color={color} $isActive={isActive}>
      <div className="task-node-title">
        <Text className="task-node-name" ellipsis={{ tooltip: true }}>
          {name}
        </Text>
      </div>

      <div className="task-node-delay">{`delay: ${delay}min`}</div>
    </StyleTaskNodeWrapper>
  );
};

export const FlowGraphTaskScheduling = () => {
  const options: FlowGraphOptions = {
    autoFit: 'center',
    data,
    node: {
      style: {
        component: (d) => {
          const isActive = d.states?.includes('active');
          return ['source', 'target'].includes(d.data.type) ? (
            <EndNode data={d.data} isActive={isActive} />
          ) : (
            <TaskNode data={d.data} isActive={isActive} />
          );
        },
        size: (d: any) => (['source', 'target'].includes(d.data.type) ? [120, 40] : [194, 58]),
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

  return <FlowGraphComponent {...options} />;
};
