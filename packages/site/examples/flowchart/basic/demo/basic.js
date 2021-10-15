import React, { useState, useEffect, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
  Flowchart,
  WorkspacePanel,
  XFlowNodeCommands,
  XFlowGraphCommands,
  usePanelContext,
  ToolbarPanel,
  FormItemWrapper,
  FormPanel,
} from '@ant-design/charts';

import { data } from './data';
// import { formSchemaService, controlMapService } from './service';
// import { CustomNode } from './node';

const DemoFlowchart = () => {
  return (
    <div style={{ height: 600 }}>
      <Flowchart
        data={data}
        onSave={(d) => {
          console.log(d, JSON.stringify(d));
        }}
        // popoverProps={{
        //   title: () => {
        //     return <div>title</div>;
        //   },
        //   content: () => {
        //     return <div>123</div>;
        //   },
        //   // antd/popover 额外配置
        // }}
        // nodePanelProps={{
        //   registerNode: {
        //     nodes: [
        //       {
        //         component: CustomNode,
        //         popover: () => <div>节点1</div>,
        //         name: 'custom-node',
        //         width: 60,
        //         height: 40,
        //         label: '节点1',
        //         data1: {
        //           name: '小王',
        //         },
        //       },
        //     ],
        //   },
        // }}
        // toolbarPanelProps={{
        //   commands: [
        //     {
        //       command: 'redo-cmd',
        //       // text: '重做',
        //       icon: RedoOutlined,
        //     },
        //     {
        //       command: 'undo-cmd',
        //       text: '撤销',
        //     },
        //     {
        //       command: 'save-graph-data',
        //       text: '保存',
        //     },
        //   ],
        // }}
        // detailPanelProps={{
        //   controlMapService,
        //   formSchemaService,
        //   position: { width: 240, top: 0, bottom: 0, right: 0 },
        // }}
      />
    </div>
  );
};

ReactDOM.render(<DemoFlowchart />, document.getElementById('container'));
