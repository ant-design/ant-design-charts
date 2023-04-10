import React from 'react';
import ReactDOM from 'react-dom';
import { Flowchart } from '@ant-design/flowchart';

/**
 * 样式文件引入，实际项目中不要这么用，可以考虑在对应的less\sass文件中引入
 * eg:
 *  style.less
 *  @import (inline) '../../node_modules/antd/dist/antd.css';
 *  @import (inline) '../../node_modules/@ant-design/flowchart/dist/index.css';
 *  demo.tsx
 *  import './style.less'
 */
const createLink = (src) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.className = 'dynamic-link';
  link.href = src;
  document.getElementsByTagName('head')[0].appendChild(link);
};
createLink('https://unpkg.com/antd@4.24.3/dist/antd.css');
createLink('https://unpkg.com/@ant-design/flowchart@1.2.1/dist/index.css');

const DemoFlowchart = () => {
  return (
    <div style={{ height: 600 }}>
      <Flowchart
        onSave={(d) => {
          console.log(d, JSON.stringify(d));
        }}
        toolbarPanelProps={{
          position: {
            top: 0,
            left: 0,
            right: 0,
          },
        }}
        scaleToolbarPanelProps={{
          layout: 'horizontal',
          position: {
            right: 0,
            top: -40,
          },
          style: {
            width: 150,
            height: 39,
            left: 'auto',
            background: 'transparent',
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
        }}
        detailPanelProps={{
          position: { width: 200, top: 40, bottom: 0, right: 0 },
        }}
      />
    </div>
  );
};

ReactDOM.render(<DemoFlowchart />, document.getElementById('container'));
