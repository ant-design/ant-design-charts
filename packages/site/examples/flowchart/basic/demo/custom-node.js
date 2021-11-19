import React from 'react';
import ReactDOM from 'react-dom';
import { Flowchart } from '@ant-design/charts';
import 'antd/dist/antd.css';

const IndicatorNode = (props) => {
  const { size = { width: 126, height: 104 }, data } = props;
  const { width, height } = size;
  const { title = '指标节点', stroke, fill = '#fff', fontFill, fontSize } = data;

  return (
    <div
      className="indicator-container"
      style={{
        position: 'relative',
        display: 'block',
        background: '#fff',
        border: '1px solid #84b2e8',
        borderRadius: '2px',
        textAlign: 'left',
        padding: '10px 12px',
        overflow: 'hidden',
        boxShadow: '0 1px 4px 0 rgba(0,0,0,0.20)',
        width,
        height,
        borderColor: stroke,
        backgroundColor: fill,
        color: fontFill,
        fontSize,
      }}
    >
      <div className="title" style={{ color: fontFill }}>
        {title}
      </div>
    </div>
  );
};

const DemoFlowchart = () => {
  return (
    <div style={{ height: 600 }}>
      <Flowchart
        onSave={(d) => {
          console.log(d);
        }}
        toolbarPanelProps={{
          position: {
            top: 0,
            left: 0,
            right: 0,
          },
        }}
        canvasProps={{
          position: {
            top: 40,
            left: 0,
            right: 0,
            bottom: 0,
          },
        }}
        nodePanelProps={{
          position: { width: 160, top: 40, bottom: 0, left: 0 },
          defaultActiveKey: ['custom'], // ['custom', 'official']
          registerNode: {
            title: '指标节点',
            nodes: [
              {
                component: IndicatorNode,
                popover: () => <div>指标节点</div>,
                name: 'custom-node-indicator',
                width: 210,
                height: 130,
              },
            ],
          },
        }}
        detailPanelProps={{
          position: { width: 200, top: 40, bottom: 0, right: 0 },
        }}
      />
    </div>
  );
};

ReactDOM.render(<DemoFlowchart />, document.getElementById('container'));
