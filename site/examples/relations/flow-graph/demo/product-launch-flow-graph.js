import { FlowGraph } from '@ant-design/graphs';
import insertCss from 'insert-css';
import { isBoolean } from 'lodash';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom';

insertCss(`
  .step-card-wrapper {
    height: 58px;
    width: 120px;
    background: #ecf2fe;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 6px 12px;
    font-size: 10px;
    font-weight: 500;
    color: #252525;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .elapsed-time {
      margin-top: 8px;

      .elapsed-time-title {
        color: #aaa;
        font-size: 8px;
      }
    }
  }

  .step-group-card-wrapper {
    width: inherit;
    height: inherit;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid #eee;

    .header {
      height: 32px;
      line-height: 32px;
      background-color: #3875f7;
      color: #fff;
      border-radius: 4px 4px 0 0;
      display: flex;
      font-size: 10px;
      padding: 0 12px;
      gap: 2px;

      .header-content {
        flex: 1;
        display: flex;
        justify-content: space-between;

        .elapsed-time {
          display: flex;
          gap: 2px;
          font-size: 9px;

          &-title {
            color: #acc7fb;
          }
        }
      }

      .header-extra {
        cursor: pointer;
        width: fit-content;
        color: #acc7fb;
      }
    }

    .header-collapsed {
      border-radius: 4px;
    }

    .step-card-group {
      display: flex;
      gap: 8px;
      flex-direction: column;
      align-items: center;
      padding: 16px 0;
    }
  }
`);

const StepCard = ({ name, elapsed_time }) => {
  return (
    <div className="step-card-wrapper">
      <div className="name">{name}</div>
      {elapsed_time && (
        <div className="elapsed-time">
          <div className="elapsed-time-title">80分位耗时</div>
          <div className="elapsed-time-value">{elapsed_time}</div>
        </div>
      )}
    </div>
  );
};

const StepGroupCard = (props) => {
  const { name, elapsed_time, children, isCollapsed, toggleCollapse } = props;
  return (
    <div className="step-group-card-wrapper" $isCollapsed={isCollapsed}>
      <div className={`header ${isCollapsed ? 'header-collapsed' : ''}`}>
        <div className="header-content">
          <div className="name">{name}</div>
          {elapsed_time && (
            <div className="elapsed-time">
              <div className="elapsed-time-title">80分位耗时</div>
              <div className="elapsed-time-value">{elapsed_time}</div>
            </div>
          )}
        </div>
        <div className="header-extra" onClick={toggleCollapse}>
          {isCollapsed ? '展开' : '收起'}
        </div>
      </div>
      {!isCollapsed && (
        <div className="step-card-group">
          {children?.map((child, index) => (
            <StepCard key={index} {...child} />
          ))}
        </div>
      )}
    </div>
  );
};

function isGroupCollapsed(data) {
  return isBoolean(data.style?.collapsed) ? data.style?.collapsed : data.data.status === 'finished';
}

function isSingleStep(data) {
  return !data.data.children;
}

const DemoFlowGraph = () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch('https://assets.antv.antgroup.com/antd-charts/product-activation.json')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const options = {
    autoFit: 'view',
    data,
    node: {
      style: {
        component: function (data) {
          if (isSingleStep(data)) return <StepCard {...data.data} />;
          const toggleCollapse = async () => {
            const graph = this;
            graph.updateNodeData([{ id: data.id, style: { collapsed: !isGroupCollapsed(data) } }]);
            await graph.render();
          };
          return <StepGroupCard {...data.data} isCollapsed={isGroupCollapsed(data)} toggleCollapse={toggleCollapse} />;
        },
        size: (data) => {
          if (isSingleStep(data)) return [120, 58];
          const GAP = 8;
          const height = isGroupCollapsed(data) ? 32 : 56 + (58 + GAP) * (data.data?.children?.length || 0);
          return [200, height];
        },
      },
    },
    edge: {
      style: {
        lineWidth: 1,
        labelBackground: true,
        labelBackgroundOpacity: 1,
        labelFill: '#aaa',
        labelFontSize: 8,
        labelFontWeight: 500,
        labelText: (data) => (data.data?.elapsed_time ? `80分位耗时\n${data.data.elapsed_time}` : ''),
      },
    },
    layout: {
      type: 'dagre',
      nodeSize: (data) => (isSingleStep(data) ? 160 : 400),
      animation: false,
    },
  };

  return <FlowGraph {...options} />;
};

createRoot(document.getElementById('container')).render(<DemoFlowGraph />);
